# 🌐 Publicar la app en internet (Netlify o GitHub Pages) + nube

Con esto lográs dos cosas:

1. Una **dirección web** (https://…) que abre cualquiera, en la PC o en el celular.
2. Que **lo que marca el catequista se vea al instante** en el celular de los padres,
   sin que nadie tenga que cargar nada de nuevo.

> Sin la parte 2, la app igual funciona publicada, pero **cada aparato guarda sus propios datos**.
> La parte 2 (Firebase, gratis) es la que hace que todos vean lo mismo.

---

# PARTE 1 — Publicar la app (elegí UNA opción)

## Opción A · Netlify (la más fácil, 3 minutos)

1. Entrá a **<https://app.netlify.com/drop>** y creá la cuenta con Google (es gratis).
2. Arrastrá **la carpeta `catequesis-san-blas-ita` completa** al recuadro que dice
   *“Drag and drop your site output folder here”*.
3. En 20 segundos te da una dirección tipo
   **`https://nombre-random-123.netlify.app`** — esa ya funciona.
4. Para que sea más linda: **Site configuration → Change site name** →
   `catequesis-san-blas` → te queda `https://catequesis-san-blas.netlify.app`.

Para **actualizar** la app más adelante: volvés a arrastrar la carpeta en *Deploys*.

## Opción B · GitHub Pages (5 minutos)

1. Creá cuenta en **<https://github.com>**.
2. **New repository** → nombre `catequesis` → **Public** → *Create repository*.
3. En el repo: **Add file → Upload files** → arrastrá **`index.html`** y **`config-nube.js`**
   (los demás archivos no hacen falta) → **Commit changes**.
4. **Settings → Pages** → en *Branch* elegí **main** y **/ (root)** → **Save**.
5. Esperá 1 o 2 minutos y abrí:
   **`https://TU-USUARIO.github.io/catequesis/`**

> ⚠️ **Privacidad:** un repositorio público en GitHub deja el código y la lista de nombres
> a la vista de cualquiera. Si te preocupa, usá Netlify (la dirección es difícil de adivinar)
> o GitHub con repositorio privado (Pages privado hoy es pago).

---

# PARTE 2 — La nube, para que se vea al instante

## 1. Crear la base de datos (una sola vez, gratis)

1. Entrá a **<https://console.firebase.google.com>** con una cuenta de Google.
2. **Crear proyecto** → nombre `catequesis-san-blas` → *Continuar* (podés apagar Analytics).
3. Menú izquierdo: **Compilación → Realtime Database → Crear base de datos**.
4. Ubicación: la que te ofrezca (por ejemplo *South America (São Paulo)*) → **Siguiente** →
   **Comenzar en modo de prueba** → *Habilitar*.
5. Arriba de la tabla aparece una dirección así:

   ```
   https://catequesis-san-blas-default-rtdb.firebaseio.com
   ```

   **Copiala.**

## 2. Conectarla con la app

1. Abrí la app publicada (la dirección de la Parte 1).
2. **⚙️ Ajustes → ☁️ Nube**.
3. Pegá la dirección en **“Dirección de la base de datos”**.
4. Inventá una **clave del grupo**, por ejemplo: `sanblas-2026-x7k2`
   (palabra larga, sin espacios; es la que protege tus datos).
5. Salí del campo: la app se conecta sola y aparece **☁️ Conectado**.
6. Tocá **⬆️ Subir mis datos** (una vez) para dejar la planilla en la nube.

## 3. El enlace para los padres

Tocá **🔗 Copiar enlace para padres**. Es algo así:

```
https://catequesis-san-blas.netlify.app/#nube=eyJ1IjoiaHR0cHM6Ly8uLi4ifQ==
```

Ese enlace **ya lleva la configuración adentro**: el celular que lo abra ve la planilla al día,
sin configurar nada. Pasalo por WhatsApp, o generá un QR desde cualquier página de QR
y pegalo en la puerta del salón.

## 4. Reglas de seguridad (recomendado)

En Firebase: **Realtime Database → Reglas** → pegá esto (cambiando la clave por la tuya)
y tocá **Publicar**:

```json
{
  "rules": {
    "sanblas-2026-x7k2": {
      ".read": true,
      ".write": true
    }
  }
}
```

Así sólo se puede leer/escribir dentro de esa “carpeta secreta”. La dirección completa queda
difícil de adivinar, pero **no es una contraseña fuerte**: no publiques la clave.

---

# PARTE 3 — Cómo queda el uso diario

| Quién | Qué hace |
|---|---|
| **Catequista** | Abre el enlace → **Modo catequista** (1234) → ❓ nivel y fecha → **⚡ Pase rápido** (un toque por chico) → los retiros se cargan ahí mismo. **Se sube solo.** |
| **Padres** | Abren el enlace (o el enlace con `#nube=`) → **👨‍👩‍👧 Padres** → tocan el nombre → ven **“Ya se retiró con Rosa Maldonado (Abuela) 11:35”**. |
| **Al cerrar el mes** | **📊 Planilla → 📥 Descargar planilla (.xlsx)**. |

Los cambios tardan **menos de 2 segundos** en aparecer en los demás aparatos
(la app escucha los cambios en vivo; si el navegador no lo permite, refresca cada 15 s).

---

# Problemas frecuentes

| Qué pasa | Por qué | Solución |
|---|---|---|
| Dice **☁️… sin conexión** | URL mal copiada o reglas cerradas | Revisá que empiece con `https://` y termine en `firebaseio.com`; revisá las reglas. |
| Los padres ven datos viejos | El enlace no lleva `#nube=` o la clave cambió | Volvé a copiar el enlace y compartilo de nuevo. |
| Los cambios no se ven entre dos catequistas | Uno de los dos está sin nube | En los dos aparatos: Ajustes → Nube → misma dirección y misma clave. |
| GitHub Pages muestra 404 | Tarda 1–2 min o el archivo no se llama `index.html` | Esperá y recargá; verificá el nombre. |
| Aparece la planilla vieja después de actualizar | Caché del navegador | Recargá con Ctrl+F5 (o cerrá y abrí la app). |
| Quiero seguir sin internet | — | La app publicada funciona igual; los datos quedan en el aparato y se suben cuando vuelve la conexión. |

---

# Si algún día querés cambiar de nube

La nube es sólo una dirección: podés mudarte a otro proyecto de Firebase (creando otra base
y pegando la nueva dirección). Los datos se copian con **⬇️ Descargar copia (.json)** en el
aparato viejo y **⬆️ Restaurar copia** en el nuevo, o simplemente **⬆️ Subir mis datos**.
