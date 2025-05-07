const CACHE_NAME = "umkm-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/img/produk1.jpg",
  "/img/produk2.jpg",
  "/img/produk3.jpg",
  "/video/promo.mp4",
  "/katalog/katalog.pdf",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
