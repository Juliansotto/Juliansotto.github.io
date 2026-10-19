# 📱 Cómo usarlo en la PC y en el celular — paso a paso

> Hacelo **de a una fase por vez**. No pases a la siguiente hasta que la anterior funcione.
> Cada fase tiene un **"¿Cómo sé que funcionó?"** para comprobar.

---

## Antes de empezar: elegí cómo lo vas a usar

| | Cómo | Sirve para | ¿Necesita red? |
|---|---|---|---|
| **A · Un solo aparato** | doble clic en `index.html` | la PC **o** tu celular, cada uno por su lado | **no, nada** |
| **B · Varios a la vez** | doble clic en `INICIAR-SERVIDOR.cmd` | PC + celulares viendo la misma planilla | red local (WiFi o **hotspot**), sin internet |
| **C · Padres en el salón** | botón **👨‍👩‍👧 Padres** | el papá toca el nombre y ve el estado | **no, nada** |

**Lo más simple de todo es C**: ni servidor, ni enlaces, ni códigos. El catequista abre la app
en su celular, toca **👨‍👩‍👧 Padres**, y el familiar busca el nombre de su hijo ahí mismo.

Seguí las fases en orden. La Fase 1 y la Fase 4 no necesitan ninguna red.

---

# FASE 1 — Que funcione en tu PC  ⏱ 5 minutos

**Paso 1.** Abrí la carpeta `catequesis-san-blas-ita`.

**Paso 2.** Hacé **doble clic en `INICIAR-SERVIDOR.cmd`**.

**Paso 3.** Se abre una **ventana negra** (esa ventana es el motor, tiene que quedar abierta)
y sola se abre el navegador con la planilla.

- Si Windows pregunta **"Permitir que esta aplicación acceda a redes"** → toca **Permitir acceso**
  y dejá tildado **Redes privadas**.
- Si dice que **no encuentra Node.js**: entrá a <https://nodejs.org>, bajá el botón grande
  que dice **LTS**, instalalo (Siguiente → Siguiente → Finalizar) y repetí el Paso 2.

**Paso 4.** En la planilla, arriba a la derecha, tocá **Modo catequista**.

**Paso 5.** Escribí la clave **1234** y tocá **Entrar**. Vas a ver el cartel verde
**🔓 Modo catequista**.

**Paso 6.** Elegí el nivel, tocá **✓ Todos presentes**, y a los que faltaron marcalos
**✗ Ausente**. Cuando un chico se va, abrí **🚪 Retiro · ¿con quién se fue?**, escribí el
nombre del familiar, el parentesco, y tildá **Ya se retiró**.

### ¿Cómo sé que funcionó?
- El cartel de arriba dice **🔓 Modo catequista**.
- Abajo de todo dice **"datos compartidos en la red local 🌐"**.
- Podés cerrar el navegador y volver a abrirlo: las marcas siguen ahí.

### Para terminar el día
Cerrá la ventana negra. Los datos quedan guardados en el archivo `datos.json`.

---

# FASE 2 — Que funcione en tu celular  ⏱ 5 minutos

**Paso 1.** Encendé el servidor otra vez: doble clic en `INICIAR-SERVIDOR.cmd`.

**Paso 2.** Mirá la ventana negra y buscá la línea que empieza con **"Desde el celular:"**.
Dice algo así (el número puede ser distinto en tu casa):

```
Desde el celular:  http://192.168.100.164:8090   (Wi-Fi)
```

**Paso 3.** En el celular, conectate **al mismo WiFi** que la PC.
(Importante: el celular no puede estar con datos móviles solamente.)

**Paso 4.** Abrí **Chrome** en el celular y escribí **exactamente** esa dirección,
con `http://` adelante y sin espacios: `http://192.168.100.164:8090`

**Paso 5.** Ya ves la planilla en el celular. Para no escribirla nunca más:
tocá el menú **⋮** de Chrome → **Agregar a pantalla de inicio** → se crea un ícono
"Catequesis" como si fuera una app.

### ¿Cómo sé que funcionó?
- En el celular ves la planilla con la misma lista de alumnos.
- Si en la PC marcás un chico como **✗ Ausente**, en el celular aparece solo
  (tarda unos 15 segundos, o tocá otra pestaña y volvé).

### Si no abre
1. Revisá que el celular esté en el **mismo WiFi** (no en datos móviles).
2. Revisá que la **ventana negra siga abierta**.
3. En la ventana negra fijate que el número sea el que escribiste (puede cambiar si
   apagaste el router o te conectaste a otro WiFi).
4. Si el navegador del celular dice "no se puede acceder al sitio": en la PC, cuando
   apareció el cartel del Firewall, había que tocar **Permitir**. Si lo cerraste sin
   permitir, buscá "Firewall de Windows Defender" → *Permitir una aplicación* → tildá **Node.js**
   en **Redes privadas**.

---

# FASE 3 — Que los padres puedan consultar  ⏱ 2 minutos

## Opción fácil (sin red, sin códigos, sin enlaces) ✅

**Paso 1.** En tu celular o en la notebook, tocá **👨‍👩‍👧 Padres** (arriba a la derecha).

**Paso 2.** Aparece una pantalla grande: *"¿Cómo se llama tu hijo o hija?"* con la lista de nombres.

**Paso 3.** El familiar toca el nombre de su hijo y ve:
- **🚪 Ya se retiró con Rosa Maldonado (Abuela) a las 11:35**
- **✅ Está en clase**
- **❌ Hoy no asistió**

**Paso 4.** Debajo de la tarjeta está **← Volver a la lista** por si viene otro papá.
La pantalla se cierra sola a los pocos segundos (o con la ✕).

Nada más. **No hay que escribir nada, ni tener internet, ni pasar ningún enlace.**

## Opción con enlace (solo si hay red local)

Si tenés el servidor prendido y querés que cada familia consulte **desde su propio celular**:

**Paso 1.** Andá a **👦 Alumnos** → botón **🔗 Enlaces para padres**.

**Paso 2.** Aparece el enlace de cada chico, por ejemplo:
`http://192.168.100.164:8090/#consulta=1201`

**Paso 3.** Tocá **Copiar** y pegáselo al familiar por **WhatsApp**.

**Paso 4.** El familiar lo toca (estando en la misma red) y ve el mismo estado.

También puede entrar a la pestaña **🔎 Consulta padres** y escribir el **código** del chico
(el número está en la tarjeta, por ejemplo `1201`) o el nombre.

### ¿Cómo sé que funcionó?
- Abrí **👨‍👩‍👧 Padres** en tu celular y tocá un nombre: tiene que aparecer el estado.
- Los padres **no pueden modificar nada**: si tocan un botón, la app les pide tu clave.

> Ojo: los enlaces funcionan **dentro de la red local** (parroquia, tu casa o el hotspot).
> Desde la casa de un familiar, con otra WiFi, el enlace no abre. Para eso está el modo padres.

---

# FASE 4 — La rutina de cada sábado  ⏱ 1 minuto

**Si estás con el servidor:**
1. Encendé la PC y esperá que tenga WiFi (o el hotspot del celular).
2. Doble clic en **`INICIAR-SERVIDOR.cmd`** (queda la ventana negra abierta).
3. En el celular, tocá el ícono **Catequesis**.
4. Pasá lista y registrá los retiros.
5. Al terminar: cerrá la ventana negra.

**Si no hay ninguna red (solo tu celular):**
1. Abrí la app en el celular.
2. **Modo catequista** → clave.
3. Pasá lista.
4. Cuando vienen los papás: **👨‍👩‍👧 Padres** → el familiar toca el nombre de su hijo.
5. Listo: no perdés nada, porque se guarda en el celular.

Cuando vuelvas a casa podés descargar la planilla (Fase 5) o una copia de seguridad.

---

# FASE 5 — Cuando ya le agarrás la mano

- **Corregir nombres:** los que tienen **⚠ revisar nombre** se arreglan en **👦 Alumnos → ✏️**.
  Escribí el nombre correcto, tildá *Nombre verificado* y **Guardar cambios**.
- **Planilla para Excel (igual a la de la parroquia):** pestaña **📊 Planilla** →
  **📥 Descargar planilla (.xlsx)**. Se abre en Excel con el mismo formato de
  `Planilla_2026.xlsx`: título, NIVEL / AÑO / SECTOR / CATEQUISTA / FRATERNIDAD, columnas
  N° / NOMBRES / APELLIDOS / meses con los días / OBSERVACIONES, marcas **P–A–T–J**,
  totales por día y las firmas. También están **CSV**, **🖨️ Imprimir** y **📄 En blanco**.
- **Copia de seguridad:** **⚙️ Ajustes → ⬇️ Descargar copia (.json)**. Hacelo una vez por mes
  y guardalo en el celular o en Drive. Para recuperarla: **⬆️ Restaurar copia**.
- **Cambiar la clave:** **⚙️ Ajustes → Clave de catequista**. Si van a usar el servidor en una
  WiFi compartida, cambiala de `1234` a otra cosa.
- **Fechas de clase:** **⚙️ Ajustes → Días de clase**. Ya están todos los sábados de septiembre,
  octubre y noviembre; podés generar otro mes con **Generar** y borrar los que no haya clase.

---

# Problemas frecuentes

| Qué pasa | Qué hacer |
|---|---|
| "No se encuentra Node.js" | Instalar Node desde <https://nodejs.org> (botón LTO/LTS) y repetir. |
| El celular no abre la dirección | Mismo WiFi, ventana negra abierta, y permitir Node.js en el Firewall (redes privadas). |
| Cambió la dirección `192.168...` | Mirá la línea "Desde el celular" en la ventana negra. Escribí la nueva (o generá de nuevo los enlaces para los padres). |
| Cerré la ventana negra sin querer | Volvé a hacer doble clic en `INICIAR-SERVIDOR.cmd`. No se pierde nada. |
| No hay WiFi en el salón | Usá el **modo padres** en tu propio celular, o el hotspot de un celular. |
| Abajo dice en rojo "este navegador no permite guardar" | Ese navegador no deja guardar: usá el servidor, o **⬇️ Descargar copia** antes de cerrar. |
| La planilla no se descarga | Fijate en la carpeta **Descargas** del aparato; si el celular bloquea la descarga, abrila desde el servidor. |

---

# Lo que NO hay que hacer

- **No** borres `datos.json` si ya cargaste asistencias: ahí están todos los datos (si usás el servidor).
- **No** pongas contraseña al WiFi pensando que eso protege la planilla: cualquiera que esté
  en la red y tenga la dirección puede ver la lista. Usá una red de confianza.
- **No** hace falta internet en ningún caso: si el navegador te dice "sin conexión", la app
  sigue andando igual.
