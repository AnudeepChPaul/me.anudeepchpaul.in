var CACHE_NAME = "resume.anudeepchpaul.in",
  corsRequests = [];

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
          return caches.delete(names);
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.indexOf("chrome-extension") !== -1) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((resp) => {
      if (
        (event.request.mode === "cors" &&
        corsRequests.indexOf(event.request.url) === -1 &&
        event.request.url.indexOf("resume/api") !== -1) || 
        event.request.url.indexOf("5_opt_me_black.jpg")
      ) {
        corsRequests.push(event.request.url);
      }

      if (resp) return resp;

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200) {
          return response;
        }
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

function updateCache(event) {
  return self.clients.matchAll().then((client) => {
    corsRequests.forEach(function (requestUrl) {
      fetch(requestUrl).then((response) => {
        if (!response || response.status !== 200) {
          return response;
        }
        const clonedResponse = response.clone();
        return clonedResponse
          .json()
          .then((text) => {
            client[0].postMessage(text);
          })
          .then(() => {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(requestUrl, response.clone());
            });
          });
      });
    });
  });
}

self.addEventListener("sync", (event) => {
  if (event.tag == "cors") {
    event.waitUntil(updateCache(event));
  }
});
