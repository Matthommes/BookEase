const CACHE_NAME = "clyne-v1";
const urlsToCache = ["/", "/manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        // Try to cache each resource, but don't fail if some are missing
        const cachePromises = urlsToCache.map((url) => {
          return cache.add(url).catch((err) => {
            console.warn("Failed to cache:", url, err);
            return Promise.resolve(); // Continue despite failure
          });
        });

        return Promise.all(cachePromises);
      })
      .then(() => {
        console.log("Cache initialized");
        return self.skipWaiting();
      })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      const fetchRequest = event.request.clone();

      return fetch(fetchRequest)
        .then((response) => {
          if (!response || response.status !== 200) {
            return response;
          }

          // Only cache same-origin requests
          if (!response.url.startsWith(self.location.origin)) {
            return response;
          }

          const responseToCache = response.clone();

          caches
            .open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            })
            .catch((err) => {
              console.warn("Failed to cache:", response.url, err);
            });

          return response;
        })
        .catch((error) => {
          console.error("Fetch failed:", error);
          // You might want to return a custom offline page here
          return caches.match("/");
        });
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});
