// lib/common.ts
var API_URL = "https://memword.micinfotech.com";

// package.json
var version = "0.7.2";

// lib/worker.ts
var cacheName = `MemWord-V${version}`;
var apiRegex = new RegExp(`^${API_URL}/(pub|api|admin)/`);
var handleActivate = async () => {
  for (const cacheKey of await caches.keys()) if (cacheKey !== cacheName) await caches.delete(cacheKey);
  await self.clients.claim();
};
var putInCache = async (request, response) => {
  await (await caches.open(cacheName)).put(request, response);
};
var handleFetch = async (req) => {
  console.log(req.url);
  if (apiRegex.test(req.url)) return await fetch(req);
  const cres = await caches.match(req);
  if (cres) return cres;
  const nresp = await fetch(req);
  if (nresp.ok) putInCache(req, nresp.clone());
  return nresp;
};
self.oninstall = (e) => e.waitUntil(self.skipWaiting());
self.onactivate = (e) => e.waitUntil(handleActivate());
self.onfetch = (e) => e.respondWith(handleFetch(e.request));
//# sourceMappingURL=worker.js.map
