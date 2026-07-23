'use client'

import { useEffect, useState } from 'react'

type IntegrationStatus = 'ready' | 'partial' | 'off'

interface EnvVarState {
  name: string
  set: boolean
  required: boolean
}

interface Integration {
  key: string
  label: string
  icon: string
  optional: boolean
  status: IntegrationStatus
  summary: string
  note?: string
  vars: EnvVarState[]
}

interface HealthResponse {
  integrations: Integration[]
  stripeMode: 'live' | 'test' | null
  summary: { ready: number; partial: number; off: number; total: number; blockingNotReady: number }
}

const STATUS_META: Record<IntegrationStatus, { dot: string; label: string; badge: string }> = {
  ready: {
    dot: 'bg-green-500',
    label: 'Ready',
    badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  },
  partial: {
    dot: 'bg-amber-500',
    label: 'Needs setup',
    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  },
  off: {
    dot: 'bg-gray-400',
    label: 'Off',
    badge: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
  },
}

function IntegrationCard({ integration }: { integration: Integration }) {
  const meta = STATUS_META[integration.status]
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${meta.dot}`} aria-hidden />
          <h3 className="font-bold text-gray-900 dark:text-white truncate">
            {integration.icon} {integration.label}
          </h3>
        </div>
        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap ${meta.badge}`}>
          {meta.label}
        </span>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{integration.summary}</p>

      {integration.note && (
        <p className="text-xs font-medium text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/20 rounded-lg px-3 py-2 mb-3">
          {integration.note}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5">
        {integration.vars.map((v) => (
          <span
            key={v.name}
            title={v.required ? 'Required' : 'Optional'}
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-md font-mono text-[11px] ${
              v.set
                ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                : v.required
                  ? 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                  : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
            }`}
          >
            {v.set ? '✓' : v.required ? '✗' : '–'} {v.name}
            {!v.required && ' (opt)'}
          </span>
        ))}
      </div>
    </div>
  )
}

export function SystemHealth() {
  const [data, setData] = useState<HealthResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)

  // Fetch without any synchronous setState so it's safe to call from an effect
  // (all state updates happen in async .then/.catch/.finally callbacks).
  const fetchHealth = () => {
    fetch('/api/admin/integrations')
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status))
        return r.json()
      })
      .then((d: HealthResponse) => {
        setData(d)
        setFailed(false)
      })
      .catch(() => setFailed(true))
      .finally(() => setLoading(false))
  }

  // Manual refresh/retry (event handler — synchronous setState is fine here).
  const refresh = () => {
    setLoading(true)
    setFailed(false)
    fetchHealth()
  }

  useEffect(() => {
    fetchHealth()
  }, [])

  if (loading) {
    return <p className="text-sm text-gray-500 dark:text-gray-400">Checking integrations…</p>
  }
  if (failed || !data) {
    return (
      <div className="space-y-3">
        <p className="text-sm text-red-600 dark:text-red-400">Could not load integration health.</p>
        <button onClick={refresh} className="text-sm font-medium text-accent hover:underline">
          Retry
        </button>
      </div>
    )
  }

  const core = data.integrations.filter((i) => !i.optional)
  const optional = data.integrations.filter((i) => i.optional)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
          Whether each env-gated service is switched on. Shows only whether a secret is <em>present</em> — never its
          value. Reflects the currently running deployment; after changing env vars in Vercel you must redeploy.
        </p>
        <button
          onClick={refresh}
          className="text-sm font-medium text-accent dark:text-accent-muted hover:underline whitespace-nowrap"
        >
          ↻ Refresh
        </button>
      </div>

      {/* Summary */}
      <div className="flex flex-wrap gap-3">
        <span className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" /> {data.summary.ready} ready
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> {data.summary.partial} need setup
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-400" /> {data.summary.off} off
        </span>
        {data.summary.blockingNotReady > 0 && (
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 dark:text-amber-300">
            ⚠ {data.summary.blockingNotReady} core service{data.summary.blockingNotReady > 1 ? 's' : ''} not fully live
          </span>
        )}
      </div>

      {/* Core services */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-3">
          Core services
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {core.map((i) => (
            <IntegrationCard key={i.key} integration={i} />
          ))}
        </div>
      </div>

      {/* Optional integrations */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-3">
          Optional / deferred
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {optional.map((i) => (
            <IntegrationCard key={i.key} integration={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
