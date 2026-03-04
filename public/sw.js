// Service Worker — offline caching for Study Mondo
// Caches app shell + static assets; serves cached content when offline.

const CACHE_NAME = 'studymondo-v1'
const OFFLINE_URL = '/offline'

const PRECACHE_URLS = [
  '/',
  '/offline',
  '/manifest.json',
]

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

// Fetch: network-first for navigations, cache-first for static assets
self.addEventListener('fetch', (event) => {
  const { request } = event

  // Skip non-GET requests and API calls
  if (request.method !== 'GET') return
  if (request.url.includes('/api/')) return

  // Navigation requests: network-first, fallback to offline page
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful page loads
          const clone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
          return response
        })
        .catch(() => caches.match(OFFLINE_URL))
    )
    return
  }

  // Static assets: cache-first
  if (
    request.url.match(/\.(js|css|png|jpg|jpeg|svg|gif|ico|woff2?)$/) ||
    request.url.includes('/_next/static/')
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached
        return fetch(request).then((response) => {
          const clone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
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
