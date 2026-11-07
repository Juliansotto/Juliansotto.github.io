/* =========================================================================
   CONFIGURACIÓN DE LA NUBE  (opcional)
   -------------------------------------------------------------------------
   Si publicás la app en GitHub Pages o Netlify y querés que lo que marca el
   catequista se vea al instante en el celular de los padres, completá acá la
   dirección de tu base de datos de Firebase y la clave del grupo.

   Ejemplo:

     window.CATEQUESIS_NUBE = {
       url:  'https://catequesis-san-blas-default-rtdb.firebaseio.com',
       ruta: 'sanblas-2026-x7k2'
     };

   - "url":  la que muestra Firebase en Realtime Database (sin barra al final).
   - "ruta": una palabra larga que inventás vos; hace las veces de contraseña
             del grupo. Todos los aparatos tienen que usar la misma.

   Si lo dejás vacío, la app funciona igual: cada aparato guarda sus datos.
   También podés configurarlo desde ⚙️ Ajustes → ☁️ Nube, o abriendo un enlace
   que ya traiga la configuración (#nube=...).
   ========================================================================= */
window.CATEQUESIS_NUBE = {
  url: '',
  ruta: ''
};
