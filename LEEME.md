# ✝ Sistema de asistencia de catequesis — Parroquia San Blas Itá

Control de **asistencia, ausencias y retiros** de los niños de catequesis, armado con las
planillas de papel que mandaste en las fotos.

- **Funciona sin internet.** No necesita conexión, ni datos móviles, ni WiFi.
- Anda en **PC, tablet y celular**.
- **Los padres** tocan el nombre de su hijo en una pantalla grande y ven al instante si ya
  se retiró y **con quién se fue**. Sin códigos, sin enlaces.
- **Los catequistas** marcan, corrigen o borran asistencias, editan nombres y **descargan la
  planilla en Excel** con el mismo formato de `Planilla_2026.xlsx`.

---

## 1. Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | **La aplicación completa**, con todo adentro. Es el único archivo indispensable. |
| `INICIAR-SERVIDOR.cmd` | Opcional: para que varios celulares vean la misma planilla a la vez. |
| `servidor.js` | Lo usa el archivo anterior (no hace falta abrirlo). |
| `PASO-A-PASO.md` | Guía para instalarlo en la PC y en el celular. |
| `datos.json` | Se crea solo si usás el servidor: guarda los datos compartidos. |
| `capturas/` | Fotos de cómo se ve (referencia). |

---

## 2. Tres formas de usarlo

### A) Sin red, en un solo aparato (lo más simple)
1. Doble clic en **`index.html`** (en el celular: abrir el archivo con Chrome).
2. Arriba: **Modo catequista** → clave **1234**.
3. Listo: cargás la asistencia y queda guardada en ese aparato.

Sirve para el salón sin WiFi, la capilla, la casa, donde sea.

### B) Con varios celulares a la vez (red local, sin internet)
1. Doble clic en **`INICIAR-SERVIDOR.cmd`**.
2. Los celulares, en la **misma red**, abren la dirección que muestra la ventana negra.
3. **No hace falta internet**: alcanza con que estén en la misma WiFi, o con el
   **punto de acceso (hotspot) de un celular**, que crea una red sin internet.

### C) Los padres consultan en el momento
En el salón, con el celular o la notebook del catequista:
**👨‍👩‍👧 Padres** (arriba a la derecha) → toca el nombre de su hijo → ve el estado.
No hay que escribir nada. La pantalla se cierra sola.

---

## 3. Pasar lista (catequista)

1. Elegí **nivel** y **día de clase** (ya están cargados todos los sábados de septiembre,
   octubre y noviembre de 2026).
2. **✓ Todos presentes** y después marcá los que faltaron: **✗ Ausente**, **T** tarde, **J** justificado.
3. Cuando un chico se va: **🚪 Retiro · ¿con quién se fue?** → nombre del familiar, parentesco
   y tildá **Ya se retiró** (la hora se completa sola).
4. Se guarda solo. Si te equivocaste, tocá el botón otra vez para desmarcar, o **🧹 Limpiar este día**.

---

## 4. Modo padres (la pantalla grande)

Botón **👨‍👩‍👧 Padres** en la barra de arriba (o pestaña **🔎 Consulta padres** → botón verde).

- Lista grande con los nombres de los tres niveles (se cambia con las pestañas de nivel).
- Tiene un buscador por si hay muchos chicos.
- Al tocar un nombre muestra: **🚪 Ya se retiró con Rosa Maldonado (Abuela) a las 11:35**,
  **✅ Está en clase**, **❌ Hoy no asistió** o **⏳ Sin registro todavía**.
- **Los padres no pueden modificar nada.** Para editar hay que entrar con la clave.
- Se cierra sola a los pocos segundos (o con la ✕).

---

## 5. La planilla en Excel (igual a `Planilla_2026.xlsx`)

En la pestaña **📊 Planilla** → **📥 Descargar planilla (.xlsx)**.

El archivo se abre en Excel, WPS o LibreOffice y tiene **el mismo formato que la planilla
de la parroquia**:

- Título **PLANILLA DE ASISTENCIA** centrado.
- **NIVEL DE CATEQUESIS** · **AÑO** · **SECTOR** · **CATEQUISTA** · **FRATERNIDAD**.
- Columnas **N° | NOMBRES | APELLIDOS | SEPTIEMBRE (5, 12, 19, 26) | OCTUBRE (3, 10, …) | OBSERVACIONES**.
- Marcas **P** (presente), **A** (ausente), **T** (tarde), **J** (justificado).
- En **OBSERVACIONES** aparece **con quién se retiró, la hora y las novedades**.
- Fila de **TOTAL PRESENTES por día** y las firmas de **Catequista** y **Coordinador de Catequesis**.
- Preparada para **imprimir en A4 horizontal** (ajustada al ancho).

Los botones **CSV** e **Imprimir** siguen estando para cuando los necesites.

> Los nombres se reparten entre NOMBRES y APELLIDOS de forma automática (los dos primeros
> nombres van a la izquierda). Si alguno quedó al revés, se corrige en el mismo Excel.

---

## 6. Corregir nombres

Los que salieron de una letra dudosa están con **⚠ revisar nombre** y el motivo al lado
(*“verificar apellido (¿Liarte, Iriarte, Duarte?)”*).

1. **👦 Alumnos** → ✏️ del alumno.
2. Corregí **nombre y apellido**, el código si hace falta, y tildá **Nombre verificado**.
3. **Guardar cambios**. Queda para siempre.

---

## 7. Copias de seguridad (importante sin servidor)

- **⚙️ Ajustes → ⬇️ Descargar copia (.json)**: guardá ese archivo en el celular o en Drive.
- **⬆️ Restaurar copia**: recuperás todo en otra PC o celular.
- Si tu navegador no deja guardar (algunos celulares con archivos de "Descargas"),
  la app te avisa abajo en rojo: en ese caso usá el servidor o descargá la copia antes de cerrar.

---

## 8. Los datos que salieron de las fotos

| Nivel | Alumnos | Catequista |
|---|---|---|
| Iniciación | 12 | Jimena Narváez · Sofía Aguirre |
| Confesión | 36 | Arturo Rivarola · Sofía Amarilla |
| Primera Comunión | 19 | Juana Sotto · Nayeli Alonso |

Fraternidad **San Antonio de Padua**, Sector 1 (uno), Año **2026**.

Hay **32 nombres marcados para revisar** (letra manuscrita difícil). Se corrigen en
segundos desde ✏️ Editar, y el aviso desaparece.

---

## 9. Preguntas rápidas

**¿Necesito internet?** No. Ni para cargar asistencia, ni para que los padres consulten
en tu celular. Solo si querés que **otro** celular vea la planilla mientras vos la cargás
(ahí hace falta una red local: WiFi o hotspot).

**¿Y si se cierra el navegador?** No pasa nada: cada marca se guarda al instante.

**¿Dónde quedan los datos?** En el navegador de ese aparato (o en `datos.json` si usás el servidor).

**¿Los padres pueden editar?** No. Todo lo que modifica pide la clave del catequista.

**La clave** viene `1234`. Cambiala en ⚙️ Ajustes.
