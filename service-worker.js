// Service Worker
const cacheName = "my-first-pwa";
const filesToCache = [
  "/",
  "index.html",
  "style.css"
];

self.addEventListener("install", e => {
  console.log("[ServiceWorker**] Install");
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log("[ServiceWorker**] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })