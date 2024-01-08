self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('wa-search-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/manifest.json',
        '/icon.png',
        '/service-worker.js',
        // Add other paths as needed
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
