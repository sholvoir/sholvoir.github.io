var o="https://memword.micinfotech.com";var i="0.6.1";var c=`MemWord-V${i}`,r=new RegExp(`^${o}/(pub|api|admin)/`),n=async()=>{for(let e of await caches.keys())e!==c&&await caches.delete(e);await self.clients.claim()},l=async(e,s)=>{await(await caches.open(c)).put(e,s)},p=async e=>{if(console.log(e.url),r.test(e.url))return await fetch(e);let s=await caches.match(e);if(s)return s;let t=await fetch(e);return t.ok&&l(e,t.clone()),t};self.oninstall=e=>e.waitUntil(self.skipWaiting());self.onactivate=e=>e.waitUntil(n());self.onfetch=e=>e.respondWith(p(e.request));
//# sourceMappingURL=worker.js.map
