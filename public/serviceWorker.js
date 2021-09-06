/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "/logo-192.png",
      ]);
    })
  );
});
/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
