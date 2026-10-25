'use client'

// Public AFQT calculator. Exact mode: real standard scores (from a score
// report) through the official 1997-scale table. Estimate mode: practice
// percent correct through the uncalibrated estimate curve, shown with a range.
// All scoring lives in src/lib/asvab-scoring.ts.

import { useMemo, useState } from 'react'
import {
  ASVAB_SUBTESTS,
  BRANCH_MINIMUMS,
  BRANCH_MINIMUMS_AS_OF,
  ARMY_FSPC_MINIMUM,
  type AsvabSubtestId,
  type StandardScoreEstimate,
  afqtCategory,
  afqtFromStandardScores,
  estimateAfqtFromEstimates,
  estimateLineScores,
  estimateStandardScoreFromFraction,
  lineScores,
} from '@/lib/asvab-scoring'

type Mode = 'standard' | 'percent'
type AfqtId = 'WK' | 'PC' | 'AR' | 'MK'

const AFQT_IDS: AfqtId[] = ['WK', 'PC', 'AR', 'MK']
const TECH_IDS: AsvabSubtestId[] = ['GS', 'EI', 'AI', 'SI', 'MC', 'AO']
const NAME = Object.fromEntries(ASVAB_SUBTESTS.map((s) => [s.id, s.name])) as Record<AsvabSubtestId, string>

const INPUT = 'mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/30 dark:border-gray-600 dark:bg-gray-900 dark:text-white'

const CATEGORY_NOTE: Record<string, string> = {
  I: 'The top category: you scored as well as or better than at least 93% of the national reference group.',
  II: 'Well above average. Clears every published branch minimum.',
  IIIA: 'At or above the 50th percentile: average or better, and above every published minimum.',
  IIIB: 'Meets the published diploma minimums of the Army, Navy, Air Force and Marine Corps (31).',
  IVA: 'Below the usual minimum of 31. Federal law caps Category IV enlistees at a small share of each year\'s recruits.',
  IVB: 'Below the usual minimum of 31. Very limited enlistment options.',
  IVC: 'Below the usual minimum of 31. Very limited enlistment options.',
  V: 'Category V (1-9) is not eligible to enlist.',
}

function parse(v: string, lo: number, hi: number): number | null {
  if (v.trim() === '') return null
  const n = Number(v)
  if (!Number.isFinite(n)) return null
  return Math.min(hi, Math.max(lo, n))
}

export default function AfqtCalculator() {
  const [mode, setMode] = useState<Mode>('standard')
  const [vals, setVals] = useState<Record<AsvabSubtestId, string>>({ GS: '', AR: '', WK: '', PC: '', MK: '', EI: '', AI: '', SI: '', MC: '', AO: '' })
  const [showTech, setShowTech] = useState(false)

  const lo = mode === 'standard' ? 1 : 0
  const hi = mode === 'standard' ? 99 : 100

  const result = useMemo(() => {
    const nums = Object.fromEntries((Object.keys(vals) as AsvabSubtestId[]).map((k) => [k, parse(vals[k], lo, hi)])) as Record<AsvabSubtestId, number | null>
    if (!AFQT_IDS.every((k) => nums[k] != null)) return null
    if (mode === 'standard') {
      const r = afqtFromStandardScores({ WK: nums.WK!, PC: nums.PC!, AR: nums.AR!, MK: nums.MK! })
      const scores = Object.fromEntries(Object.entries(nums).filter(([, v]) => v != null)) as Partial<Record<AsvabSubtestId, number>>
      return { exact: true as const, ve: r.ve, raw: r.raw, percentile: r.percentile, low: r.percentile, high: r.percentile, category: r.category, lines: lineScores(scores).map((l) => ({ ...l, low: l.score, high: l.score })) }
    }
    const est: Partial<Record<AsvabSubtestId, StandardScoreEstimate>> = {}
    for (const k of Object.keys(nums) as AsvabSubtestId[]) if (nums[k] != null) est[k] = estimateStandardScoreFromFraction(nums[k]! / 100)
    const e = estimateAfqtFromEstimates({ WK: est.WK!, PC: est.PC!, AR: est.AR!, MK: est.MK! })
    return { exact: false as const, ve: e.ve, raw: e.raw, percentile: e.percentile, low: e.low, high: e.high, category: e.category, lines: estimateLineScores(est) }
  }, [vals, mode, lo, hi])

  const field = (id: AsvabSubtestId) => (
    <label key={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {NAME[id]} ({id})
      <input
        type="number"
        inputMode="numeric"
        min={lo}
        max={hi}
        placeholder={mode === 'standard' ? 'e.g. 52' : 'e.g. 70'}
        value={vals[id]}
        onChange={(e) => setVals((p) => ({ ...p, [id]: e.target.value }))}
        className={INPUT}
      />
    </label>
  )

  const range = result && result.low !== result.high ? `${result.low}–${result.high}` : result ? String(result.percentile) : ''
  const marineGt = result?.lines.find((l) => l.service === 'Marine Corps' && l.code === 'GT')
  const armyGt = result?.lines.find((l) => l.service === 'Army' && l.code === 'GT')
  const afLines = result?.lines.filter((l) => l.service === 'Air Force') ?? []

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800">
      <div role="tablist" aria-label="Score type" className="mb-5 grid grid-cols-2 gap-2 rounded-xl bg-gray-100 p-1 dark:bg-gray-900">
        {([['standard', 'Standard scores'], ['percent', 'Practice % correct']] as [Mode, string][]).map(([m, label]) => (
          <button
            key={m}
            role="tab"
            aria-selected={mode === m}
            onClick={() => setMode(m)}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${mode === m ? 'bg-white text-green-800 shadow dark:bg-gray-700 dark:text-green-300' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'}`}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="mb-4 text-xs text-gray-600 dark:text-gray-400">
        {mode === 'standard'
          ? 'Enter the subtest standard scores from your ASVAB score report (about 20-80; the average is 50). The result uses the official conversion table, so it is exact.'
          : 'Enter the percent you get right on practice tests. This is an ESTIMATE: the real CAT-ASVAB is adaptive and scored by which questions you get right, so the result is shown as a range.'}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">{AFQT_IDS.map(field)}</div>

      <button onClick={() => setShowTech((s) => !s)} className="mt-4 text-sm font-semibold text-green-700 hover:underline dark:text-green-400" aria-expanded={showTech}>
        {showTech ? '− Hide' : '+ Add'} technical subtests for full line scores (optional)
      </button>
      {showTech && <div className="mt-3 grid gap-4 sm:grid-cols-2">{TECH_IDS.map(field)}</div>}

      <div className="mt-6 rounded-xl bg-green-50 p-5 dark:bg-green-900/20" aria-live="polite">
        {result ? (
          <>
            <div className="text-center">
              <p className="text-sm text-green-900 dark:text-green-300">{result.exact ? 'AFQT percentile' : 'Estimated AFQT percentile'}</p>
              <p className="text-5xl font-black text-green-800 dark:text-green-300">{range}</p>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                Category {result.category}
                {!result.exact && result.low !== result.high && ` (range ${afqtCategory(result.low)} to ${afqtCategory(result.high)})`}
                {' · '}VE {result.ve} · AFQT raw score {result.raw}
              </p>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">{CATEGORY_NOTE[result.category]}</p>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <caption className="mb-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Published AFQT minimums (high school diploma), as of {BRANCH_MINIMUMS_AS_OF}
                </caption>
                <tbody className="divide-y divide-green-200/70 dark:divide-green-800/50">
                  {BRANCH_MINIMUMS.map((b) => {
                    const clears = b.diploma == null ? null : result.exact || result.low === result.high ? result.percentile >= b.diploma : result.low >= b.diploma ? true : result.high < b.diploma ? false : null
                    return (
                      <tr key={b.branch}>
                        <th scope="row" className="py-1.5 pr-2 font-medium text-gray-800 dark:text-gray-200">{b.branch}</th>
                        <td className="py-1.5 pr-2 tabular-nums text-gray-700 dark:text-gray-300">{b.diploma ?? 'not published'}{b.ged != null ? ` (GED ${b.ged})` : ''}</td>
                        <td className="whitespace-nowrap py-1.5 text-right text-xs font-semibold">
                          {b.diploma == null ? <span className="text-gray-500">ask</span>
                            : clears === true ? <span className="text-green-700 dark:text-green-400">✓ clears</span>
                            : clears === false ? <span className="text-red-600 dark:text-red-400">below</span>
                            : <span className="text-amber-700 dark:text-amber-400">borderline</span>}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              {result.percentile < 31 && result.percentile >= ARMY_FSPC_MINIMUM && (
                <p className="mt-2 text-xs text-gray-700 dark:text-gray-300">An AFQT of {ARMY_FSPC_MINIMUM}-30 may qualify you for the Army&apos;s Future Soldier Prep Course (academic track).</p>
              )}
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">Minimums change with recruiting needs and can differ for GED holders. Always confirm with a recruiter.</p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-3 text-center dark:bg-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400">Army GT (AR + VE)</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{armyGt ? (armyGt.low !== armyGt.high ? `${armyGt.low}–${armyGt.high}` : armyGt.score) : '—'}</p>
              </div>
              <div className="rounded-lg bg-white p-3 text-center dark:bg-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400">Marine GT (AR + MC + VE)</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{marineGt ? (marineGt.low !== marineGt.high ? `${marineGt.low}–${marineGt.high}` : marineGt.score) : '—'}</p>
                {!marineGt && <p className="text-[11px] text-gray-500">add MC</p>}
              </div>
              <div className="rounded-lg bg-white p-3 text-center dark:bg-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400">Air Force MAGE (percentiles)</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  {(['M', 'A', 'G', 'E'] as const).map((c) => {
                    const l = afLines.find((x) => x.code === c)
                    return `${c} ${l ? (l.low !== l.high ? `${l.low}–${l.high}` : l.score) : '—'}`
                  }).join(' · ')}
                </p>
                {afLines.length < 4 && <p className="text-[11px] text-gray-500">M needs AI, SI, MC; E needs GS, EI</p>}
              </div>
            </div>
            {result.lines.some((l) => l.service === 'Navy') && (
              <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">
                Navy sums: {result.lines.filter((l) => l.service === 'Navy').map((l) => `${l.code} ${l.low !== l.high ? `${l.low}–${l.high}` : l.score}`).join(' · ')}
              </p>
            )}
          </>
        ) : (
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">Enter all four AFQT subtests to see your result.</p>
        )}
      </div>
    </div>
  )
}
