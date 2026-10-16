/**
 * AP diagnostic v2 sitting generator (pure; runs in the browser and in tests).
 *
 * Rules, carried over from the SAT and MCAT generators:
 * - Per-unit quotas from the CED weightings (blueprints.ts), filled
 *   easy / medium / hard per unit (difficultyTargets).
 * - A stimulus set is one unit of selection: all its items, consecutively, in
 *   the order they appear in the bank. Units are shuffled; single questions
 *   inside a set never are (arrangeInPassageBlocks).
 * - Unseen first. A set counts as unseen only if every item in it is unseen.
 *   When unseen items run short, seen ones top the sitting up, so a small or
 *   heavily used bank still serves a full blueprint. Stems are never repeated
 *   within one sitting.
 * - Seen keys are ids plus text fingerprints (apSeenKeysForQuestion), so an
 *   item re-authored under a new id still counts as seen.
 */
import { apSeenKeysForQuestion } from '@/lib/diagnostic-seen'
import { arrangeInPassageBlocks } from '@/lib/mcat-diagnostic-order'
import { AP_DIAG_V2_BLUEPRINTS, difficultyTargets, unitQuotas } from './blueprints'
import {
  AP_DIAG_V2_DIFFICULTIES,
  type ApDiagV2Bank,
  type ApDiagV2Difficulty,
  type ApDiagV2Item,
  type ApDiagV2Passage,
  type ApDiagV2Question,
  type ApDiagV2Stimulus,
  type ApDiagV2TestData,
} from './types'

export interface GenerateOptions {
  /** Seen keys (ids and `stem:` fingerprints) from loadSeenKeys. */
  seen?: Set<string>
  /** Random source in [0, 1); defaults to Math.random. Tests pass a seeded one. */
  rng?: () => number
}

function shuffle<T>(arr: readonly T[], rng: () => number): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const stemOf = (s: string) => s.replace(/\s+/g, ' ').trim().toLowerCase()

export function stimulusToPassage(s: ApDiagV2Stimulus): ApDiagV2Passage {
  return {
    id: s.id,
    title: s.title,
    body: s.content,
    kind: s.kind,
    ...(s.dataTable ? { dataTable: s.dataTable } : {}),
    ...(s.chart ? { chart: s.chart } : {}),
    ...(s.svg ? { svg: s.svg } : {}),
  }
}

/** An item as served (options in bank order; the page shuffles them). */
export function toQuestion(item: ApDiagV2Item, stimulus?: ApDiagV2Stimulus): ApDiagV2Question {
  return {
    id: item.id,
    question: item.stem,
    options: [...item.options],
    correctAnswer: item.correctIndex,
    explanation: item.explanation,
    domain: item.unit,
    topicSlug: item.topicSlug,
    difficulty: item.difficulty,
    ...(stimulus ? { passage: stimulusToPassage(stimulus) } : {}),
  }
}

/** Seen keys of one served question (what the page records and the seen route recomputes). */
export function seenKeysForServed(q: Pick<ApDiagV2Question, 'id' | 'question' | 'passage'>): string[] {
  return apSeenKeysForQuestion({ id: q.id, question: q.question, passageBody: q.passage?.body })
}

/** Stimulus sets of a bank: each set's items in authored (bank) order. */
export function stimulusSets(bank: ApDiagV2Bank): { stimulus: ApDiagV2Stimulus; items: ApDiagV2Item[] }[] {
  return bank.stimuli
    .map((stimulus) => ({ stimulus, items: bank.items.filter((i) => i.stimulusId === stimulus.id) }))
    .filter((s) => s.items.length > 0)
}

export function generateApDiagnosticV2(bank: ApDiagV2Bank, opts: GenerateOptions = {}): ApDiagV2TestData {
  const bp = AP_DIAG_V2_BLUEPRINTS[bank.course]
  const rng = opts.rng ?? Math.random
  const seen = opts.seen ?? new Set<string>()
  const stimById = new Map(bank.stimuli.map((s) => [s.id, s]))
  const isSeen = (item: ApDiagV2Item) =>
    seenKeysForServed(toQuestion(item, item.stimulusId ? stimById.get(item.stimulusId) : undefined)).some((k) => seen.has(k))

  const quotas = unitQuotas(bp)
  const remaining: Record<string, number> = { ...quotas }
  const diffLeft: Record<string, Record<ApDiagV2Difficulty, number>> = Object.fromEntries(
    bp.units.map((u) => [u.id, difficultyTargets(quotas[u.id])]),
  )
  const usedStems = new Set<string>()
  const picked: ApDiagV2Question[] = []

  const take = (item: ApDiagV2Item) => {
    const stim = item.stimulusId ? stimById.get(item.stimulusId) : undefined
    picked.push(toQuestion(item, stim))
    usedStems.add(stemOf(stim ? `${stim.content}|${item.stem}` : item.stem))
    remaining[item.unit] = (remaining[item.unit] ?? 0) - 1
    const d = diffLeft[item.unit]
    if (d) d[item.difficulty] = d[item.difficulty] - 1
  }

  // 1. Stimulus sets: never-seen sets first, then partly seen, then fully seen;
  //    a set only goes where its unit still has room for all of it.
  //    Up to setsPerSitting sets always; beyond that, a fully unseen set is
  //    also taken when its unit has too few unseen standalone items left to
  //    fill its quota. Otherwise a set-heavy bank repeats standalone items from
  //    the second sitting while unseen sets sit unused.
  const standalone = bank.items.filter((i) => !i.stimulusId)
  const unseenStandaloneLeft: Record<string, number> = {}
  for (const i of standalone) if (!isSeen(i)) unseenStandaloneLeft[i.unit] = (unseenStandaloneLeft[i.unit] ?? 0) + 1
  const sets = stimulusSets(bank).filter((s) => s.items.every((i) => i.unit === s.items[0].unit && i.unit in quotas))
  const seenCount = (s: (typeof sets)[number]) => s.items.filter(isSeen).length
  const orderedSets = shuffle(sets, rng)
    .map((s) => ({ s, rank: seenCount(s) === 0 ? 0 : seenCount(s) < s.items.length ? 1 : 2 }))
    .sort((a, b) => a.rank - b.rank)
  let setsServed = 0
  for (const { s: set, rank } of orderedSets) {
    const unit = set.items[0].unit
    if (remaining[unit] < set.items.length) continue
    const underCap = setsServed < bp.setsPerSitting
    const freshNeeded = rank === 0 && (unseenStandaloneLeft[unit] ?? 0) < remaining[unit]
    if (!underCap && !freshNeeded) continue
    set.items.forEach(take)
    setsServed++
  }

  // 2. Standalone items per unit, matching that unit's difficulty targets.
  for (const u of bp.units) {
    const pool = shuffle(standalone.filter((i) => i.unit === u.id), rng)
    const unseen = pool.filter((i) => !isSeen(i))
    const seenPool = pool.filter((i) => isSeen(i))
    const fresh = (i: ApDiagV2Item) => !usedStems.has(stemOf(i.stem)) && !picked.some((p) => p.id === i.id)
    const pickFrom = (cands: ApDiagV2Item[], diff?: ApDiagV2Difficulty) => cands.find((i) => fresh(i) && (!diff || i.difficulty === diff))

    // Exact difficulty, unseen → nearest difficulty, unseen → exact, seen → any, seen.
    const near: Record<ApDiagV2Difficulty, ApDiagV2Difficulty[]> = {
      easy: ['easy', 'medium', 'hard'],
      medium: ['medium', 'easy', 'hard'],
      hard: ['hard', 'medium', 'easy'],
    }
    const wanted = (): ApDiagV2Difficulty[] =>
      AP_DIAG_V2_DIFFICULTIES.flatMap((d) => Array.from({ length: Math.max(0, diffLeft[u.id][d]) }, () => d))
    while (remaining[u.id] > 0) {
      const want = wanted()[0] ?? 'medium'
      let item: ApDiagV2Item | undefined
      for (const d of near[want]) if (!item) item = pickFrom(unseen, d)
      for (const d of near[want]) if (!item) item = pickFrom(seenPool, d)
      if (!item) break // bank cannot fill this unit (a sample bank in QA)
      take(item)
    }
  }

  // 3. Order: shuffle whole units (a set is one block), never questions inside a set.
  const questions = arrangeInPassageBlocks(picked, (units) => shuffle(units, rng))

  return {
    version: 2,
    course: bank.course,
    questions,
    domains: bp.units.map((u) => ({ id: u.id, name: `Unit ${u.number}: ${u.name}` })),
    totalQuestions: questions.length,
    timeLimitMinutes: bp.timeLimitMinutes,
  }
}

