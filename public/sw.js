var CACHE_NAME = "resume.anudeepchpaul.in";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME) // .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) => {
      return Promise.all(
        names.map((names) => {
          if ([CACHE_NAME].indexOf(names) === -1) {
            return caches.delete(names);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.request.url.indexOf("chrome-extension") === -1 && 
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
