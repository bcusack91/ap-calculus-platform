// Service Worker — offline caching for Study Mondo
// Caches app shell + static assets; serves cached content when offline.
//
// Offline flashcard review: the review page (OFFLINE_PAGES) is cached when
// it loads and served from cache when the network is down; its JS chunks
// come from the static-asset cache (the page also posts CACHE_OFFLINE_SHELL
// with every chunk it loaded, so lazily loaded ones are cached too). The
// flashcard DATA (due cards, queued ratings) is owned by the page in
// IndexedDB — this worker never caches any /api response.

// Update this version string on each deploy to bust the cache.
const CACHE_VERSION = 'v3'
const CACHE_NAME = `studymondo-${CACHE_VERSION}`
const OFFLINE_URL = '/offline'

// Pages that work offline. Cached by pathname (query string ignored), so
// /flashcards/review/start?topic=… opens from the same cached shell.
const OFFLINE_PAGES = ['/flashcards/review/start']

const PRECACHE_URLS = [
  '/',
  '/offline',
  '/site.webmanifest',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
]

const isStaticAsset = (url) =>
  /\.(js|css|png|jpg|jpeg|svg|gif|ico|woff2?)$/.test(url.pathname) || url.pathname.startsWith('/_next/static/')

// Install: precache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS)
    })
  )
  self.skipWaiting()
})

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  )
  self.clients.claim()
})

// The review page asks us to cache itself + the chunks it loaded.
self.addEventListener('message', (event) => {
  const data = event.data
  if (!data || data.type !== 'CACHE_OFFLINE_SHELL' || !Array.isArray(data.urls)) return
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        data.urls.slice(0, 300).map((raw) => {
          let url
          try {
            url = new URL(raw, self.location.origin)
          } catch {
            return undefined
          }
          if (url.origin !== self.location.origin || url.pathname.startsWith('/api/')) return undefined
          if (OFFLINE_PAGES.includes(url.pathname)) {
            // Navigations keep this copy fresh; only fill it if it's missing
            // (e.g. the first visit, before this worker controlled the page).
            return cache.match(url.pathname).then((hit) =>
              hit
                ? undefined
                : fetch(url.pathname, { credentials: 'same-origin' })
                    .then((res) => (res.ok && !res.redirected ? cache.put(url.pathname, res) : undefined))
                    .catch(() => undefined)
            )
          }
          if (!isStaticAsset(url)) return undefined
          return cache.match(url.href).then((hit) =>
            hit ? undefined : cache.add(url.href).catch(() => undefined)
          )
        })
      )
    )
  )
})

// Fetch: network-first for navigations, cache-first for static assets
self.addEventListener('fetch', (event) => {
  const { request } = event

  // Skip non-GET requests and API calls
  if (request.method !== 'GET') return
  if (request.url.includes('/api/')) return

  const url = new URL(request.url)

  // Navigation requests: network-first. Offline-capable pages are cached on
  // success and served from cache when the network fails; everything else
  // falls back to the offline page.
  if (request.mode === 'navigate') {
    const offlinePage = url.origin === self.location.origin && OFFLINE_PAGES.includes(url.pathname)
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (offlinePage && response.ok && !response.redirected) {
            const clone = response.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put(url.pathname, clone))
          }
          return response
        })
        .catch(async () => {
          if (offlinePage) {
            const cached = await caches.match(url.pathname)
            if (cached) return cached
          }
          return caches.match(OFFLINE_URL)
        })
    )
    return
  }

  // Static assets: cache-first
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached
        return fetch(request).then((response) => {
          // Never pin an error (e.g. a chunk 404 right after a deploy).
          if (response.ok || response.type === 'opaque') {
            const clone = response.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
          }
          return response
        })
      })
    )
    return
  }

  // Default: network with cache fallback
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  )
})
