const APP_CACHE = 'app-v4';
const RUNTIME_CACHE = 'runtime-v2';

const APP_ASSETS = [
  './',
  './index.html',
  './Maple_Leaf.svg',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(APP_CACHE).then((cache) => cache.addAll(APP_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map((n) => (n !== APP_CACHE && n !== RUNTIME_CACHE) ? caches.delete(n) : Promise.resolve()));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    event.respondWith(caches.match(req).then((cached) => cached || fetch(req)));
    return;
  }

  const host = url.hostname;
  const cacheableHosts = [
    'tile-c.basemaps.cartocdn.com',
    'tile-a.basemaps.cartocdn.com',
    'tile-b.basemaps.cartocdn.com',
    'upload.wikimedia.org',
    'commons.wikimedia.org'
  ];
  if (cacheableHosts.includes(host)) {
    event.respondWith((async () => {
      const cache = await caches.open(RUNTIME_CACHE);
      const cached = await cache.match(req);
      const fetchPromise = fetch(req).then((res) => {
        if (res.ok) cache.put(req, res.clone());
        return res;
      });
      return cached || fetchPromise;
    })());
    return;
  }

  event.respondWith(fetch(req));
});
