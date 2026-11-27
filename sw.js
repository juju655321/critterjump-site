/* v3 picks up the heart bunny after the v2 asset-prefix cache. */
const CACHE = "critter-jump-v3";
/** Scope-relative so GitHub Pages (/critterjump-site/) and a root host both work. */
function scoped(path) {
  const base = new URL(self.registration.scope).pathname.replace(/\/$/, "");
  return path === "/" ? `${base}/` : `${base}${path}`;
}
const PRECACHE = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/favicon.svg",
  "/assets/images/band-poster.svg",
  "/assets/images/band-poster.png",
  "/assets/images/band_raft_loop.png",
  "/assets/images/hills.svg",
  "/assets/images/blue-ridge.svg",
  "/assets/audio/bouncing-banjo.mp3",
  "/assets/audio/sfx/wood_clack.mp3",
  "/assets/audio/sfx/land_thunk.mp3",
  "/assets/audio/sfx/splash.mp3",
  "/assets/audio/sfx/raft_bob.mp3",
  "/assets/audio/sfx/oops.mp3",
  "/assets/audio/sfx/hint_sparkle.mp3",
  "/assets/audio/sfx/color_match_bonus.mp3",
  "/assets/audio/sfx/victory_sting.mp3",
  "/assets/audio/sfx/lose.mp3",
  "/assets/audio/critters/cardinal_pickup_1.mp3",
  "/assets/audio/critters/cardinal_pickup_2.mp3",
  "/assets/audio/critters/cardinal_jump_1.mp3",
  "/assets/audio/critters/cardinal_jump_2.mp3",
  "/assets/audio/critters/bee_pickup_1.mp3",
  "/assets/audio/critters/bee_pickup_2.mp3",
  "/assets/audio/critters/bee_jump_1.mp3",
  "/assets/audio/critters/bee_jump_2.mp3",
  "/assets/audio/critters/bear_pickup_1.mp3",
  "/assets/audio/critters/bear_pickup_2.mp3",
  "/assets/audio/critters/bear_jump_1.mp3",
  "/assets/audio/critters/bear_jump_2.mp3",
  "/assets/audio/critters/mothman_pickup_1.mp3",
  "/assets/audio/critters/mothman_pickup_2.mp3",
  "/assets/audio/critters/mothman_jump_1.mp3",
  "/assets/audio/critters/mothman_jump_2.mp3",
  "/assets/audio/voice/welcome.mp3",
  "/assets/audio/voice/splash.mp3",
  "/assets/audio/voice/mothman.mp3",
  "/assets/audio/voice/victory.mp3",
  "/assets/audio/voice/color_bonus.mp3",
  "/assets/audio/voice/trailblazer.mp3",
  "/assets/audio/voice/happy_hiker.mp3",
  "/assets/audio/voice/hint.mp3",
  "/assets/audio/voice/stuck.mp3",
  "/assets/audio/voice/how_to_meadow_hop.mp3",
  "/assets/audio/voice/how_to_spruce_knob.mp3",
  "/assets/audio/voice/how_to_honeycomb.mp3",
  "/assets/audio/voice/bear_hey_buddy_1.mp3",
  "/assets/audio/voice/bear_hey_buddy_2.mp3",
  "/assets/audio/voice/bear_win.mp3",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-512.png",
];
const PRECACHE_URLS = PRECACHE.map(scoped);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  // The band loops are multi-megabyte and played with Range requests.
  // Leave them to the browser so a cached 206 cannot break streaming.
  if (url.pathname.includes("/assets/video/") || url.pathname.includes("@2x") || request.headers.has("range")) return;
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok && response.status === 200 && response.type === "basic") {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() => caches.match(request).then((hit) => hit || caches.match(scoped("/index.html")))),
  );
});
