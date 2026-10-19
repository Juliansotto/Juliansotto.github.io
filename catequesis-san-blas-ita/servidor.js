#!/usr/bin/env node
/* =========================================================================
   Servidor local para el sistema de asistencia de catequesis.
   - No necesita internet ni instalar nada: sólo Node.js.
   - Sirve la planilla (index.html) a la PC y a los celulares de la misma red.
   - Guarda los datos compartidos en datos.json (con respaldo automático).

   Uso:      node servidor.js            (puerto 8090)
             node servidor.js 8080       (otro puerto)
             PORT=8080 node servidor.js  (Linux/Mac)
   ========================================================================= */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { exec } = require('child_process');

const RAIZ = __dirname;
const ARCHIVO = path.join(RAIZ, 'datos.json');
const RESPALDO = path.join(RAIZ, 'datos-respaldo.json');
const argPuerto = process.argv.slice(2).filter((a) => /^\d+$/.test(a))[0];
const PUERTO = Number(process.env.PORT || argPuerto || 8090);
const ABRIR = process.argv.indexOf('--abrir') >= 0;

function abrirNavegador(url) {
  const cmd = process.platform === 'win32' ? 'start "" "' + url + '"'
    : process.platform === 'darwin' ? 'open "' + url + '"'
    : 'xdg-open "' + url + '"';
  exec(cmd, function () {});
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/plain; charset=utf-8'
};

function json(res, codigo, obj) {
  const cuerpo = JSON.stringify(obj);
  res.writeHead(codigo, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Content-Length': Buffer.byteLength(cuerpo)
  });
  res.end(cuerpo);
}

function leerDatos() {
  try {
    const txt = fs.readFileSync(ARCHIVO, 'utf8');
    const obj = JSON.parse(txt);
    if (obj && obj.datos) return obj;
  } catch (e) { /* no existe o está dañado */ }
  try {
    const txt = fs.readFileSync(RESPALDO, 'utf8');
    const obj = JSON.parse(txt);
    if (obj && obj.datos) {
      console.log('⚠  datos.json no se pudo leer: se recuperó el respaldo.');
      return obj;
    }
  } catch (e) { /* sin respaldo */ }
  return { rev: 0, datos: null };
}

function escribirDatos(obj) {
  try {
    if (fs.existsSync(ARCHIVO)) fs.copyFileSync(ARCHIVO, RESPALDO);
  } catch (e) { /* sin respaldo, seguimos */ }
  const tmp = ARCHIVO + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(obj, null, 2), 'utf8');
  fs.renameSync(tmp, ARCHIVO);
}

function cuerpo(req) {
  return new Promise((resolve, reject) => {
    let datos = '';
    req.on('data', (c) => {
      datos += c;
      if (datos.length > 12 * 1024 * 1024) { reject(new Error('demasiado grande')); req.destroy(); }
    });
    req.on('end', () => resolve(datos));
    req.on('error', reject);
  });
}

const servidor = http.createServer(async (req, res) => {
  let ruta = '/';
  try { ruta = decodeURIComponent(req.url.split('?')[0]); } catch (e) { ruta = '/'; }

  /* ---- API de datos compartidos ---- */
  if (ruta === '/api/datos') {
    if (req.method === 'GET') { return json(res, 200, leerDatos()); }
    if (req.method === 'POST') {
      try {
        const txt = await cuerpo(req);
        const obj = JSON.parse(txt);
        if (!obj || !obj.datos || !obj.datos.alumnos) return json(res, 400, { ok: false, error: 'datos inválidos' });
        escribirDatos({ rev: obj.rev || obj.datos.rev || 1, guardado: new Date().toISOString(), datos: obj.datos });
        return json(res, 200, { ok: true, rev: obj.rev || obj.datos.rev || 1 });
      } catch (e) {
        return json(res, 500, { ok: false, error: String(e.message || e) });
      }
    }
    return json(res, 405, { ok: false, error: 'método no permitido' });
  }

  /* ---- archivos de la aplicación ---- */
  if (ruta === '/' || ruta === '') ruta = '/index.html';
  if (/\.(json|md|log|tmp)$/i.test(ruta) && ruta !== '/index.html') {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Acceso no permitido');
  }
  const destino = path.join(RAIZ, path.normalize(ruta).replace(/^(\.\.[/\\])+/, ''));
  if (!destino.startsWith(RAIZ)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Acceso no permitido');
  }
  fs.readFile(destino, (err, buf) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('No se encontró ' + ruta);
    }
    res.writeHead(200, {
      'Content-Type': MIME[path.extname(destino).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    res.end(buf);
  });
});

servidor.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.error('\n✗ El puerto ' + PUERTO + ' ya está ocupado. Probá con otro, por ejemplo:  node servidor.js ' + (PUERTO + 1) + '\n');
  } else {
    console.error('\n✗ Error del servidor: ' + e.message + '\n');
  }
  process.exit(1);
});

servidor.listen(PUERTO, '0.0.0.0', () => {
  const dirs = [];
  const redes = os.networkInterfaces();
  Object.keys(redes).forEach((nombre) => {
    (redes[nombre] || []).forEach((d) => {
      if (d.family === 'IPv4' && !d.internal) dirs.push({ nombre, ip: d.address });
    });
  });
  console.log('');
  console.log('  ✝  Catequesis · planilla de asistencia');
  console.log('  ------------------------------------------------');
  console.log('  En esta PC:        http://localhost:' + PUERTO);
  if (dirs.length) {
    dirs.forEach((d) => {
      console.log('  Desde el celular:  http://' + d.ip + ':' + PUERTO + '   (' + d.nombre + ')');
    });
    console.log('');
    console.log('  Los celulares deben estar en la MISMA red WiFi que esta PC.');
  } else {
    console.log('  (No se detectó ninguna red local; conectá la PC al WiFi para usar los celulares.)');
  }
  console.log('  Datos compartidos: ' + ARCHIVO);
  console.log('  Para salir:        Ctrl + C  (o cerrá esta ventana)');
  console.log('  ------------------------------------------------');
  console.log('');
  if (ABRIR) setTimeout(() => abrirNavegador('http://localhost:' + PUERTO), 700);
});

process.on('SIGINT', () => {
  console.log('\n  Servidor detenido. Los datos quedaron guardados en datos.json.\n');
  servidor.close(() => process.exit(0));
});
