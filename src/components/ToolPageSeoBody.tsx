import { getSubjectSeoByName } from '@/data/subject-configs'
import type { ToolFamily } from '@/lib/jsonld'

/**
 * Unique, substantive body content for the otherwise-thin templated tool landing
 * pages (practice / score-predictor / study-plans / etc.). Renders per-subject
 * prose + exam structure + scoring + common mistakes + sources + a review byline
 * (E-E-A-T). Looks the subject up by display name; renders nothing if there's no
 * content for it (graceful — never a thin shell with an empty section).
 */
const LAST_REVIEWED = 'June 2026'

// Per-FAMILY intro copy: differentiates the ~30 score-predictor pages from the
// ~30 practice pages etc., which otherwise share an identical subject body.
// Generic across subjects, distinct across families — keep the claims honest.
const TOOL_FAMILY_INTROS: Record<ToolFamily, string> = {
  'score-predictor':
    'This score predictor turns your Study Mondo activity — quiz results, topic mastery, and practice-exam scores — into an estimate of where you would land on the real exam. It is a projection, not a promise: the more you practice, the more reliable the estimate becomes. Use it to spot the units where focused review would move your score the most.',
  practice:
    'This full-length practice exam mirrors the real test’s sections, timing, and question mix so you can rehearse pacing and stamina before exam day. Every question is scored instantly with an explanation, and your results feed into your score prediction. For the most realistic read on where you stand, take it in one timed sitting.',
  'study-plan':
    'These study plans break exam prep into a day-by-day schedule, with options sized for different timelines — from a full runway down to a final-weeks push. Whichever plan you pick is added to your dashboard planner, where you can check off tasks and adjust the pace as you go. Choose the one that matches the time you actually have.',
}

export function ToolPageSeoBody({ subjectName, tool }: { subjectName: string; tool?: ToolFamily }) {
  const s = getSubjectSeoByName(subjectName)
  if (!s) return null

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 border-t border-gray-100 dark:border-gray-800">
      {tool && (
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-6">{TOOL_FAMILY_INTROS[tool]}</p>
      )}
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">About the {s.name} exam</h2>
      <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{s.seoBody}</p>

      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-3">
          <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Exam structure</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">{s.examStructure}</p>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-3">
          <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Scoring</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">{s.scoring}</p>
        </div>
      </div>

      {s.pitfalls && s.pitfalls.length > 0 && (
        <div className="mt-4 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/10 p-3">
          <h3 className="text-xs font-bold uppercase tracking-wide text-amber-700 dark:text-amber-400 mb-1">Common mistakes</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            {s.pitfalls.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400">
        <span>Reviewed by the Study Mondo team · Last reviewed {LAST_REVIEWED}</span>
        {s.sources && s.sources.length > 0 && (
          <span>
            Sources:{' '}
            {s.sources.map((src, i) => (
              <span key={i}>
                {i > 0 ? ', ' : ''}
                <a href={src.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                  {src.title}
                </a>
              </span>
            ))}
          </span>
        )}
      </div>
    </section>
  )
}
