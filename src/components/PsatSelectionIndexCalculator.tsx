'use client'

import { useId, useState } from 'react'
import { Award, Calculator, CheckCircle2, Info } from 'lucide-react'
import { CURRENT_CUTOFFS, CUTOFF_REGIONS } from '@/data/psat-cutoffs'
import {
  PSAT_SECTION_MAX,
  PSAT_SECTION_MIN,
  compareToCutoffs,
  isValidPsatSection,
  mathNeeded,
  selectionIndex,
} from '@/lib/psat-selection-index'

function parseScore(raw: string): number | null {
  if (!raw.trim()) return null
  const n = Number(raw)
  return Number.isFinite(n) ? n : null
}

function sectionError(raw: string): string | null {
  const n = parseScore(raw)
  if (n === null) return raw.trim() ? 'Enter a number.' : null
  if (!isValidPsatSection(n)) return `Use a score from ${PSAT_SECTION_MIN} to ${PSAT_SECTION_MAX} in steps of 10.`
  return null
}

const inputClass =
  'mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-base tabular-nums text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 dark:border-gray-600 dark:bg-gray-900 dark:text-white'

/**
 * Selection Index calculator: two section scores and a state in, the index and
 * where it lands against that state's latest Semifinalist cutoff and the
 * national Commended cutoff out. Runs entirely in the browser; no sign-in.
 */
export default function PsatSelectionIndexCalculator() {
  const id = useId()
  const [rwRaw, setRwRaw] = useState('')
  const [mathRaw, setMathRaw] = useState('')
  const [state, setState] = useState('')

  const rw = parseScore(rwRaw)
  const math = parseScore(mathRaw)
  const index = rw !== null && math !== null ? selectionIndex(rw, math) : null
  const cmp = index === null ? null : compareToCutoffs(index, state || null)
  const stateName = CUTOFF_REGIONS.find((r) => r.key === state)?.name ?? null
  const rwErr = sectionError(rwRaw)
  const mathErr = sectionError(mathRaw)
  const neededMath = cmp?.stateCutoff != null && rw !== null && cmp.standing !== 'semifinalist' ? mathNeeded(rw, cmp.stateCutoff) : null

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800"
    >
      <h2 id={`${id}-title`} className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
        <Calculator className="h-5 w-5 text-indigo-600 dark:text-indigo-400" aria-hidden />
        Calculate your Selection Index
      </h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor={`${id}-rw`} className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Reading &amp; Writing
          </label>
          <input
            id={`${id}-rw`}
            type="number"
            inputMode="numeric"
            min={PSAT_SECTION_MIN}
            max={PSAT_SECTION_MAX}
            step={10}
            placeholder="e.g. 690"
            value={rwRaw}
            onChange={(e) => setRwRaw(e.target.value)}
            aria-invalid={rwErr ? true : undefined}
            aria-describedby={rwErr ? `${id}-rw-err` : undefined}
            className={inputClass}
          />
          {rwErr && <p id={`${id}-rw-err`} className="mt-1 text-xs text-red-600 dark:text-red-400">{rwErr}</p>}
        </div>
        <div>
          <label htmlFor={`${id}-math`} className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Math
          </label>
          <input
            id={`${id}-math`}
            type="number"
            inputMode="numeric"
            min={PSAT_SECTION_MIN}
            max={PSAT_SECTION_MAX}
            step={10}
            placeholder="e.g. 720"
            value={mathRaw}
            onChange={(e) => setMathRaw(e.target.value)}
            aria-invalid={mathErr ? true : undefined}
            aria-describedby={mathErr ? `${id}-math-err` : undefined}
            className={inputClass}
          />
          {mathErr && <p id={`${id}-math-err`} className="mt-1 text-xs text-red-600 dark:text-red-400">{mathErr}</p>}
        </div>
        <div>
          <label htmlFor={`${id}-state`} className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Your state
          </label>
          <select id={`${id}-state`} value={state} onChange={(e) => setState(e.target.value)} className={inputClass}>
            <option value="">Choose a state</option>
            {CUTOFF_REGIONS.map((r) => (
              <option key={r.key} value={r.key}>{r.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50/70 p-4 dark:border-indigo-800 dark:bg-indigo-900/20" aria-live="polite">
        {index === null || !cmp ? (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Enter both section scores ({PSAT_SECTION_MIN}–{PSAT_SECTION_MAX}) to see your Selection Index.
          </p>
        ) : (
          <div className="space-y-3">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Selection Index</span>
              <span className="text-4xl font-extrabold tabular-nums text-indigo-700 dark:text-indigo-300">{index}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">of 228 · total score {(rw ?? 0) + (math ?? 0)}</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              2 × ({rw} ÷ 10) + ({math} ÷ 10) = {index}
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                {cmp.stateCutoff != null && index >= cmp.stateCutoff ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" aria-hidden />
                ) : (
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" aria-hidden />
                )}
                <span className="text-gray-800 dark:text-gray-200">
                  {cmp.stateCutoff != null && stateName ? (
                    <>
                      <strong>{stateName}</strong> Semifinalist cutoff (class of {CURRENT_CUTOFFS.classOf}): <strong className="tabular-nums">{cmp.stateCutoff}</strong>
                      {' — '}
                      {cmp.pointsToSemifinalist === 0 ? (
                        <span className="font-semibold text-green-700 dark:text-green-400">you&rsquo;re at or above it.</span>
                      ) : (
                        <span>
                          {cmp.pointsToSemifinalist} point{cmp.pointsToSemifinalist === 1 ? '' : 's'} short
                          {neededMath !== null && <> (with this R&amp;W score, a Math score of {neededMath} would reach it)</>}.
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      Semifinalist cutoffs for the class of {CURRENT_CUTOFFS.classOf} ran <strong className="tabular-nums">{cmp.range.low}–{cmp.range.high}</strong> depending on the state
                      {cmp.standing === 'semifinalist' ? <> — your index clears the cutoff in every state.</> : <>. Choose your state to see its exact cutoff.</>}
                    </>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2">
                {index >= cmp.commended ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" aria-hidden />
                ) : (
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" aria-hidden />
                )}
                <span className="text-gray-800 dark:text-gray-200">
                  National Commended cutoff: <strong className="tabular-nums">{cmp.commended}</strong>
                  {' — '}
                  {cmp.pointsToCommended === 0 ? (
                    <span className="font-semibold text-green-700 dark:text-green-400">at or above it.</span>
                  ) : (
                    <span>{cmp.pointsToCommended} point{cmp.pointsToCommended === 1 ? '' : 's'} short.</span>
                  )}
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        Cutoffs change every year; these are the most recent published (class of {CURRENT_CUTOFFS.classOf}, PSAT/NMSQT taken {CURRENT_CUTOFFS.testTaken}). Only scores from the junior-year PSAT/NMSQT count for National Merit.
      </p>
    </section>
  )
}
