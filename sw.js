/* MDC Hunt Calendar service worker.
   CACHE VERSION POLICY (truth-seeking): bump the date suffix every time
   season data changes (match seasons-2026.json meta.generated / verified
   dates). Old caches are deleted on activate, so users never carry stale
   regulation dates into the field once they get one online load. */
const CACHE = "mdc-cal-2026-07-02";
const PRECACHE = [
  ".",
  "index.html",
  "seasons-2026.json",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(PRECACHE))
    .then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  /* only handle our own origin + the pinned CDN script; let everything else
     (e.g. analytics pings) hit the network untouched and uncached */
  const cdn = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/";
  if (url.origin !== self.location.origin && !e.request.url.startsWith(cdn))
    return;
  const freshFirst =
    e.request.mode === "navigate" ||          /* the app shell itself */
    url.pathname.endsWith(".json");           /* season data + manifest */
  if (freshFirst) {
    /* network-first: fresh regulation data wins when online;
       cached copy serves the stand-with-no-signal case */
    e.respondWith(
      fetch(e.request)
        .then(r => {
          const copy = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
          return r;
        })
        .catch(() => caches.match(e.request, {ignoreSearch: true})
          .then(hit => hit || caches.match("index.html")))
    );
  } else {
    /* cache-first for static assets (icons, CDN script) */
    e.respondWith(
      caches.match(e.request).then(hit => hit ||
        fetch(e.request).then(r => {
          const copy = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
          return r;
        }))
    );
  }
});
