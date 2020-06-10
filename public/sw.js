console.log("service worker loaded");

var CACHE_NAME = "resume_anudeepchpaul_in";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME) // .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  console.log("fetch sw", JSON.stringify(event));
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return (
        resp ||
        fetch(event.request).then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});
