// Service Worker - Catequesis San Blas Itá
// Permite que la web funcione 100% OFFLINE (sin internet) en PC y celulares.

const CACHE_NAME = 'catequesis-sanblas-v1';
const RECURSOS = [
  './',
  './index.html',
  './config-nube.js',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(RECURSOS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Si la petición es a Firebase (.firebaseio.com) o una API remota, intentar red primero
  if (event.request.url.includes('firebaseio.com') || event.request.url.includes('/api/')) {
    event.respondWith(
      fetch(event.request).catch(() => new Response(JSON.stringify({ error: 'offline' }), {
        headers: { 'Content-Type': 'application/json' }
      }))
    );
    return;
  }

  // Para los archivos de la app: servir desde cache primero, actualizar en fondo
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const clon = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clon));
        }
        return networkResponse;
      }).catch(() => null);

      return cached || fetchPromise || caches.match('./index.html');
    })
  );
});
