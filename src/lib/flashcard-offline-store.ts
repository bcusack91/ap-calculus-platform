'use client'

/**
 * IndexedDB storage for offline flashcard review: the cached "pack" of due
 * cards and the queue of ratings made offline. See flashcard-offline-queue.ts
 * for the flow and the pure logic.
 *
 * Every call is wrapped in try/catch and degrades to a harmless default
 * (null / [] / false): private windows, blocked site data, Safari quirks or
 * a missing indexedDB simply mean offline mode is off — the live review
 * session never depends on this module.
 */

import type { OfflineCard, OfflinePack, QueuedRating } from '@/lib/flashcard-offline-queue'

const DB_NAME = 'studymondo-flashcards'
const DB_VERSION = 1
const PACK_STORE = 'pack'
const RATING_STORE = 'ratings'
const PACK_KEY = 'current'

let dbPromise: Promise<IDBDatabase | null> | null = null

function openDb(): Promise<IDBDatabase | null> {
  if (dbPromise) return dbPromise
  dbPromise = new Promise<IDBDatabase | null>((resolve) => {
    try {
      if (typeof indexedDB === 'undefined') return resolve(null)
      const req = indexedDB.open(DB_NAME, DB_VERSION)
      req.onupgradeneeded = () => {
        const db = req.result
        if (!db.objectStoreNames.contains(PACK_STORE)) db.createObjectStore(PACK_STORE)
        if (!db.objectStoreNames.contains(RATING_STORE)) db.createObjectStore(RATING_STORE, { keyPath: 'id' })
      }
      req.onsuccess = () => {
        const db = req.result
        // Another tab upgrading the schema: let it, and reopen next time.
        db.onversionchange = () => {
          try { db.close() } catch { /* ignore */ }
          dbPromise = null
        }
        resolve(db)
      }
      req.onerror = () => resolve(null)
      req.onblocked = () => resolve(null)
    } catch {
      resolve(null)
    }
  }).then((db) => {
    if (!db) dbPromise = null // allow a later retry
    return db
  })
  return dbPromise
}

function run<T>(
  store: string,
  mode: IDBTransactionMode,
  body: (s: IDBObjectStore) => IDBRequest<T> | void,
): Promise<T | undefined> {
  return openDb().then(
    (db) =>
      new Promise<T | undefined>((resolve, reject) => {
        if (!db) return reject(new Error('IndexedDB unavailable'))
        try {
          const tx = db.transaction(store, mode)
          const req = body(tx.objectStore(store))
          let value: T | undefined
          if (req) req.onsuccess = () => { value = req.result }
          tx.oncomplete = () => resolve(value)
          tx.onerror = () => reject(tx.error ?? new Error('IndexedDB transaction failed'))
          tx.onabort = () => reject(tx.error ?? new Error('IndexedDB transaction aborted'))
        } catch (e) {
          reject(e)
        }
      }),
  )
}

/** True when IndexedDB opens — i.e. offline mode can work in this browser. */
export async function offlineStoreAvailable(): Promise<boolean> {
  try {
    return (await openDb()) !== null
  } catch {
    return false
  }
}

// Pack writes are read-modify-write across transactions; run them one at a
// time so a single-card update can't overwrite a fresher full refresh.
let packChain: Promise<unknown> = Promise.resolve()
function serialized<T>(fn: () => Promise<T>): Promise<T> {
  const next = packChain.then(fn, fn)
  packChain = next.catch(() => undefined)
  return next
}

async function savePackNow(pack: OfflinePack): Promise<boolean> {
  try {
    await run(PACK_STORE, 'readwrite', (s) => s.put(pack, PACK_KEY))
    return true
  } catch {
    return false
  }
}

export function savePack(pack: OfflinePack): Promise<boolean> {
  return serialized(() => savePackNow(pack))
}

export async function loadPack(): Promise<OfflinePack | null> {
  try {
    const pack = await run<OfflinePack>(PACK_STORE, 'readonly', (s) => s.get(PACK_KEY) as IDBRequest<OfflinePack>)
    return pack && Array.isArray(pack.cards) && typeof pack.userId === 'string' ? pack : null
  } catch {
    return null
  }
}

export function clearPack(): Promise<void> {
  return serialized(async () => {
    try {
      await run(PACK_STORE, 'readwrite', (s) => s.delete(PACK_KEY))
    } catch {
      /* ignore */
    }
  })
}

/** Replace one card in the cached pack (after a local or live rating). */
export function updatePackCard(userId: string, card: OfflineCard): Promise<boolean> {
  return serialized(async () => {
    try {
      const pack = await loadPack()
      if (!pack || pack.userId !== userId) return false
      const cards = pack.cards.map((c) => (c.flashcard.id === card.flashcard.id ? card : c))
      return await savePackNow({ ...pack, cards })
    } catch {
      return false
    }
  })
}

export async function enqueueRating(rating: QueuedRating): Promise<boolean> {
  try {
    await run(RATING_STORE, 'readwrite', (s) => s.put(rating))
    return true
  } catch {
    return false
  }
}

export async function listQueuedRatings(): Promise<QueuedRating[]> {
  try {
    const rows = await run<QueuedRating[]>(RATING_STORE, 'readonly', (s) => s.getAll() as IDBRequest<QueuedRating[]>)
    return Array.isArray(rows) ? rows : []
  } catch {
    return []
  }
}

export async function deleteQueuedRatings(ids: string[]): Promise<boolean> {
  if (ids.length === 0) return true
  try {
    await run(RATING_STORE, 'readwrite', (s) => {
      for (const id of ids) s.delete(id)
    })
    return true
  } catch {
    return false
  }
}

/**
 * Ask the service worker to cache this page and every /_next/static chunk
 * it has loaded, so the review page opens offline next time. No-op without
 * a registered service worker (dev) or when anything throws.
 */
export function warmOfflineShell(): void {
  try {
    if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return
    const origin = window.location.origin
    const chunks = performance
      .getEntriesByType('resource')
      .map((e) => e.name)
      .filter((u) => u.startsWith(origin) && u.includes('/_next/static/'))
    navigator.serviceWorker.ready
      .then((reg) => reg.active?.postMessage({ type: 'CACHE_OFFLINE_SHELL', urls: [window.location.pathname, ...chunks] }))
      .catch(() => {})
  } catch {
    /* offline shell is best-effort */
  }
}
