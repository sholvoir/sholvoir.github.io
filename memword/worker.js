var s="https://memword.micinfotech.com";var i="0.8.5";var a=`MemWord-V${i}`,n=new RegExp(`^${s}/(pub|api|admin)/`),r=async()=>{for(let e of await caches.keys())e!==a&&await caches.delete(e);await self.clients.claim()},p=async(e,t)=>{await(await caches.open(a)).put(e,t)},l=async e=>{if(console.log(e.url),n.test(e.url))return await fetch(e);let t=await caches.match(e);if(t)return t;let c=await fetch(e);return c.ok&&p(e,c.clone()),c};self.oninstall=e=>e.waitUntil(self.skipWaiting());self.onactivate=e=>e.waitUntil(r());self.onfetch=e=>e.respondWith(l(e.request));
