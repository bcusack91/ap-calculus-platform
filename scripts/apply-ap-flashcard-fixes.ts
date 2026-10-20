/**
 * AP flashcard follow-up to the Phase 2 exam-yield labelling (owner ruling
 * 2026-10-20: off-exam cards are "rewritten if relevant to the exam, otherwise
 * deleted"):
 *
 *   - deletes the 27 off-exam cards whose idea has no place on the 2027 CEDs
 *     (and their FlashcardProgress rows), the way apply-ap-flashcard-cleanup.ts did;
 *   - rewrites the 9 off-exam cards that teach a CED idea through an excluded
 *     term or number, plus the outdated Calc AB calculator-timing card and the
 *     four content errors the Phase 2 reviewer flagged (front, back, hint and
 *     the examYield tier).
 *
 * Cards have no stable id across databases, so each target is identified by
 * the exam-yield fingerprint (sha256(front + '\0' + back)[:12]) of its text in
 * the committed prod export mirror prisma/flashcard-exports/<course>/, and the
 * live row is found by topic slug + exact front + exact back. A card whose
 * text has drifted from the mirror is skipped and reported, never guessed.
 *
 * Safety:
 *   - Dry run unless APPLY=1.
 *   - SEED_DB=prod loads .env (dotenv override), anything else loads .env.local.
 *     APPLY with SEED_DB=prod requires the Neon host; APPLY without it refuses
 *     a Neon host.
 *   - Backs up every affected Flashcard row and the FlashcardProgress rows of
 *     deleted cards to scripts/_ap-flashcard-fixes-backup-<timestamp>.json
 *     (gitignored) before writing.
 *   - All writes run in one transaction; every row is re-read inside it.
 *   - Rerunning after apply is a no-op: deleted cards are "missing" and
 *     rewritten cards are "already-applied".
 *
 * Run (repo root):
 *   npx tsx scripts/apply-ap-flashcard-fixes.ts                     # dry run, local
 *   SEED_DB=prod npx tsx scripts/apply-ap-flashcard-fixes.ts        # dry run, prod (read-only)
 *   SEED_DB=prod APPLY=1 npx tsx scripts/apply-ap-flashcard-fixes.ts
 *
 * Afterwards: re-export the four decks and rebuild the yield artifact — see
 * ap-phase1-pipeline/flashcard-fixes/RUNBOOK.md.
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import fs from 'node:fs'
import path from 'node:path'
import { PrismaClient, type ExamYield } from '@prisma/client'
import { fingerprint, loadCourseExport } from '../src/lib/flashcard-yield-artifact'

const APPLY = process.env.APPLY === '1'
const IS_PROD = process.env.SEED_DB === 'prod'
const AP_COURSES = ['ap-chemistry', 'ap-biology', 'ap-physics-1', 'ap-calculus-ab'] as const

// ---------------------------------------------------------------------------
// Plan. Reasons live in ap-phase1-pipeline/flashcard-fixes/plan.md.
// ---------------------------------------------------------------------------

/** Off-exam cards with nothing on the 2027 CED underneath (or whose on-exam idea is already a card in the same topic). */
const DELETE_FPS: readonly string[] = [
  // AP Chemistry (19)
  '04b2098d2ea1', // Arrhenius numeric factor 300→310 K (5.6 exclusion, R15)
  'd3a907e98bf6', // A vs Ea compared numerically (R15)
  '2ff1b43bec61', // Ea from ln k vs 1/T slope (R15)
  '8848cfb240d7', // Arrhenius calculation pitfalls (R15)
  '81c25d65441b', // Arrhenius units / Kelvin (R15)
  '348c7b94ec42', // "doubles per 10 °C" exponential factor (R15)
  '570e07eb7dea', // hydrogen ionization energy from Bohr energies (R28)
  '2c069c3ef28a', // Rydberg formula (R28)
  '33b9358fd67d', // pH change after adding strong acid/base to a buffer (8.9 exclusion, R31)
  'ae8cdd8c566e', // electrorefining of copper (R21)
  'db068304d291', // Cr/Cu Aufbau exceptions (1.7 exclusion, R10)
  '84cfc2c66747', // dS_universe computation (R16)
  '8fe03b668642', // dS_surroundings = -dH/T (R16)
  '8ebbbff3156a', // azeotropes
  '393842798a91', // Henry's law (7.3 exclusion, R30)
  'd3bcc367ee2a', // van 't Hoff factor (3.8 exclusion, R1)
  'c6c902e420f5', // batteries / fuel cells / sacrificial anodes (R21)
  '097e6695ba07', // dG = dG° + RT ln Q (R23)
  '9ed34f8f4d1f', // complex-ion formation and solubility
  // AP Biology (7)
  'e962da9928e6', // C4 bundle sheath cells (3.4; misfiled under cell-cycle-mitosis)
  '3b9329e8307c', // Calvin-cycle turns per glucose (3.4 exclusion; misfiled)
  '1ce5b072802f', // RuBisCO (3.4 exclusion; misfiled)
  '6e293b122f05', // Km definition
  '94f9c6beda7e', // Vmax definition
  '152314e3a93d', // r/K selection
  '23904a29d1bc', // survivorship curve types
  // AP Physics 1 (1)
  '952621e377ec', // coefficient of restitution definition (4.4 defines elastic/inelastic only)
]

interface Rewrite {
  fp: string
  newFront: string
  newBack: string
  /** undefined = leave the hint as it is; null = clear it. */
  newHint?: string | null
  newYield: ExamYield
}

const REWRITES: readonly Rewrite[] = [
  // ---- AP Chemistry
  {
    // Lewis acid MC item → Brønsted conjugate pairs (the trim's standing R12 substitution)
    fp: 'ceaf7b7ddfb4',
    newFront: 'In the reaction $HF + H_{2}O \\rightleftharpoons H_{3}O^{+} + F^{-}$, what are the two conjugate acid–base pairs?',
    newBack:
      '**$HF/F^{-}$ and $H_{3}O^{+}/H_{2}O$**\n\n' +
      '$HF$ donates a proton (Brønsted-Lowry acid) and becomes its conjugate base $F^{-}$; $H_{2}O$ accepts the proton (Brønsted-Lowry base) and becomes its conjugate acid $H_{3}O^{+}$. The two members of a pair differ by exactly one $H^{+}$.',
    newYield: 'HIGH',
  },
  {
    // Brønsted-Lowry restatement: drop the Lewis-acid sentence (R12)
    fp: '3e03a7cd76e0',
    newFront: 'According to the Brønsted-Lowry definition, an acid is:',
    newBack:
      '**A proton $(H^{+})$ donor**\n\n' +
      'Brønsted-Lowry acids DONATE protons $(H^{+})$ and Brønsted-Lowry bases ACCEPT them. This is the definition the AP exam uses for acid–base reactions in aqueous solution.',
    newYield: 'MEDIUM',
  },
  {
    // Misleading Ka range
    fp: '98130c06d6d5',
    newFront: 'What is K_a and what does its magnitude tell you?',
    newBack:
      'K_a = acid dissociation constant = [H⁺][A⁻]/[HA]. Larger K_a = stronger acid, more ionization. Weak acids have K_a < 1 (most fall between about 10⁻² and 10⁻¹², i.e. pK_a ≈ 2–12); strong acids have K_a >> 1. Use K_a to calculate the pH of weak acid solutions.',
    newYield: 'HIGH',
  },
  {
    // Bohr energy formula → photon energy from the gap between GIVEN levels (3.12.A.1)
    fp: 'd9d0eea43a1c',
    newFront: 'An electron drops from a higher energy level $E_i$ to a lower level $E_f$. What photon is emitted?',
    newBack:
      'One photon whose energy equals the gap: $E_{\\text{photon}} = E_i - E_f = h\\nu = hc/\\lambda$. A larger gap gives a higher-frequency, shorter-wavelength photon; absorbing a photon of exactly that energy drives the reverse transition. The AP exam gives the level energies (the Bohr formula is not tested).',
    newYield: 'HIGH',
  },
  {
    // Loose radius-trend reasoning: name shielding / same shell (1.7.A.2)
    fp: '4904a4a67ac8',
    newFront: 'What is the trend for atomic radius across a period and down a group?',
    newBack:
      "Across a period (left to right): DECREASES — protons are added while the electrons enter the same shell, so the core (shielding) electrons stay the same and the greater effective nuclear charge pulls the valence electrons closer (Coulomb's law). Down a group: INCREASES — the valence electrons occupy a higher shell, farther from the nucleus, and the added core electrons shield the extra nuclear charge.",
    newYield: 'ULTRA_HIGH',
  },
  {
    // Kc vs Kp: keep the distinction, drop the conversion (R29)
    fp: '6190bcef490d',
    newFront: 'What is $K_c$ vs $K_p$?',
    newBack:
      '$K_c$ uses equilibrium molar concentrations; $K_p$ uses equilibrium partial pressures of the gases. Both omit pure solids and liquids. Check which one a question uses and keep the units consistent — the AP exam does not ask you to convert between them.',
    newHint: null, // was the filler "Think about the key characteristic"
    newYield: 'HIGH',
  },
  {
    // Quantitative Nernst → qualitative 9.10 reasoning (R20)
    fp: '0e77e67b414c',
    newFront: "Qualitatively, how does a galvanic cell's potential change under non-standard concentrations?",
    newBack:
      '$E_{\\text{cell}}$ is the driving force toward equilibrium, so the farther the reaction is from equilibrium, the larger $|E|$. Raising reactant concentrations (or lowering product concentrations) makes $Q$ smaller and $E > E^\\circ$; the reverse gives $E < E^\\circ$. As the cell runs, $Q$ rises toward $K$ and $E$ falls to zero — a dead battery. Reason from $Q$ versus $K$, not from a Nernst calculation.',
    newHint: null, // was the filler "Think about the key characteristic"
    newYield: 'HIGH',
  },
  {
    // "Strongest oxidizing agent" → which half-reaction is reduced (R24)
    fp: '5d2f395e458f',
    newFront: 'Given two half-reactions from a table of standard reduction potentials, which one runs as the reduction in a galvanic cell?',
    newBack:
      'The half-reaction with the more positive $E^\\circ$ is the one reduced (cathode); the other runs in reverse as the oxidation (anode). Then $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} > 0$, and a positive $E^\\circ_{\\text{cell}}$ means the reaction is thermodynamically favored. The most positive $E^\\circ$ in the table (e.g. $\\text{F}_2$, $+2.87$ V) is the species most easily reduced.',
    newHint: null, // was the filler "Think about the key characteristic"
    newYield: 'HIGH',
  },
  // ---- AP Biology
  {
    // Down syndrome → nondisjunction gives aneuploidy (5.2.A.1 / 6.7.B.2)
    fp: 'd227805f982e',
    newFront: 'Failure of homologous chromosomes or sister chromatids to separate during meiosis is called:',
    newBack:
      '**Nondisjunction**\n\n' +
      'The resulting gametes are no longer haploid: one gets an extra chromosome and another is missing one. Fertilization then gives a zygote with an abnormal chromosome number (aneuploidy, e.g. a trisomy), which often produces a new phenotype or a developmental disorder.',
    newYield: 'HIGH',
  },
  {
    // Competitive inhibitor without Km/Vmax (3.2.B.3)
    fp: '9c60211fc8b9',
    newFront: 'How does a competitive inhibitor reduce enzyme activity, and how can its effect be overcome?',
    newBack:
      'It binds reversibly to the active site, so substrate cannot bind while it is there. Because inhibitor and substrate compete for the same site, raising the substrate concentration outcompetes the inhibitor and restores the reaction rate.',
    newYield: 'HIGH',
  },
  {
    // Noncompetitive inhibitor without Km/Vmax (3.2.B.3)
    fp: '3fa5a5208481',
    newFront: 'How does a noncompetitive inhibitor reduce enzyme activity?',
    newBack:
      "It binds to an allosteric site (not the active site), changing the enzyme's shape so the active site works poorly or not at all. Since it does not compete with substrate for the active site, adding more substrate does not overcome it.",
    newYield: 'HIGH',
  },
  // ---- AP Physics 1
  {
    // Coefficient of restitution from bounce height → rebound height as the KE fraction (4.4 with energy conservation)
    fp: 'cb5cc4ac74bb',
    newFront: 'A ball dropped from height $h_i$ rebounds to height $h_f$. What does the rebound height tell you about the collision with the floor?',
    newBack:
      'The fraction of kinetic energy kept through the collision: $\\dfrac{KE_{\\text{after}}}{KE_{\\text{before}}} = \\dfrac{mgh_f}{mgh_i} = \\dfrac{h_f}{h_i}$ (energy is conserved on the way down and back up). $h_f = h_i$ means the collision was elastic; a lower rebound means kinetic energy was converted to thermal energy and deformation (inelastic).',
    newHint: 'Compare KE before and after through mgh',
    newYield: 'MEDIUM',
  },
  // ---- AP Calculus AB
  {
    // Calculator sections: May 2027 timings
    fp: '6daeeba22066',
    newFront: 'Which parts of the AP Calculus AB exam allow a graphing calculator?',
    newBack:
      'Section I Part B (13 multiple-choice, 38 min) and Section II Part A (2 free-response, 30 min) require a graphing calculator. Section I Part A (29 MC, 62 min) and Section II Part B (4 FRQ, 60 min) are no-calculator. (May 2027 format: 42 MC in 100 min, 6 FRQ in 90 min.)',
    newHint: null, // was the filler "Think about the key characteristic"
    newYield: 'MEDIUM',
  },
  {
    // "Saddle point" is a multivariable term
    fp: '8c1b846c294c',
    newFront: 'Can a critical point NOT be an extremum?',
    newBack:
      "Yes! A critical point is only a candidate. If $f'$ does not change sign there, the point is neither a max nor a min — e.g. $f(x) = x^3$ at $x = 0$, where $f'(0) = 0$ but $f$ keeps increasing. Confirm with the First Derivative Test (the Second Derivative Test is inconclusive when $f''(c) = 0$, as here).",
    newYield: 'HIGH',
  },
]

// ---------------------------------------------------------------------------

type MirrorCard = { course: string; topicSlug: string; front: string; back: string }

function loadMirror(): Map<string, MirrorCard> {
  const byFp = new Map<string, MirrorCard>()
  for (const course of AP_COURSES) {
    for (const [topicSlug, cards] of loadCourseExport(course)) {
      for (const c of cards) {
        const fp = fingerprint(c.front, c.back)
        if (byFp.has(fp)) throw new Error(`fingerprint ${fp} appears twice in the export mirror`)
        byFp.set(fp, { course, topicSlug, front: c.front, back: c.back })
      }
    }
  }
  return byFp
}

const prisma = new PrismaClient()

async function main() {
  const host = (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0].split('?')[0]
  const isNeon = host.endsWith('neon.tech')
  console.log('DB:     ', IS_PROD ? 'PROD (.env)' : 'local (.env.local)', '→', host || '(DATABASE_URL not set)')
  console.log('Mode:   ', APPLY ? 'APPLY (writes)' : 'dry run')
  if (!host) throw new Error('DATABASE_URL is empty after loading the env file')
  if (APPLY && IS_PROD && !isNeon) throw new Error(`Refusing to write: SEED_DB=prod but host ${host} is not the Neon production host`)
  if (APPLY && !IS_PROD && isNeon) throw new Error(`Refusing to write: host ${host} is the Neon production host but SEED_DB is not "prod"`)

  // ---- Plan integrity against the committed export mirror
  const mirror = loadMirror()
  const seen = new Set<string>()
  for (const fp of [...DELETE_FPS, ...REWRITES.map((r) => r.fp)]) {
    if (seen.has(fp)) throw new Error(`fp ${fp} appears twice in the plan`)
    seen.add(fp)
    if (!mirror.has(fp)) throw new Error(`fp ${fp} is not in prisma/flashcard-exports (mirror drifted or typo)`)
  }
  for (const r of REWRITES) {
    const m = mirror.get(r.fp)!
    if (r.newFront === m.front && r.newBack === m.back) throw new Error(`rewrite ${r.fp} changes nothing`)
    if (!r.newFront.trim() || !r.newBack.trim()) throw new Error(`rewrite ${r.fp} has empty text`)
  }
  console.log(`Plan:    ${DELETE_FPS.length} deletes, ${REWRITES.length} rewrites (all present in the export mirror)`)

  // ---- Resolve live rows by topic slug + exact text
  type Row = { id: string; front: string; back: string; hint: string | null; examYield: ExamYield | null; topicSlug: string; courseSlug: string; progress: number }
  const resolve = async (m: MirrorCard): Promise<Row[]> => {
    const rows = await prisma.flashcard.findMany({
      where: { front: m.front, back: m.back, topic: { slug: m.topicSlug } },
      include: { topic: { select: { slug: true, category: { select: { course: { select: { slug: true } } } } } }, _count: { select: { progress: true } } },
    })
    return rows.map((r) => ({
      id: r.id, front: r.front, back: r.back, hint: r.hint, examYield: r.examYield,
      topicSlug: r.topic.slug, courseSlug: r.topic.category.course.slug, progress: r._count.progress,
    }))
  }
  /** A rewrite already applied shows the NEW text in the live row. */
  const resolveApplied = async (m: MirrorCard, r: Rewrite): Promise<number> =>
    prisma.flashcard.count({ where: { front: r.newFront, back: r.newBack, topic: { slug: m.topicSlug } } })

  type Verdict = 'ok' | 'missing' | 'already-applied' | 'course-mismatch'
  const perCourse = new Map<string, { del: number; delProgress: number; upd: number; missing: number; applied: number; mismatch: number }>()
  const bump = (course: string, k: 'del' | 'delProgress' | 'upd' | 'missing' | 'applied' | 'mismatch', n = 1) => {
    const c = perCourse.get(course) ?? { del: 0, delProgress: 0, upd: 0, missing: 0, applied: 0, mismatch: 0 }
    c[k] += n
    perCourse.set(course, c)
  }

  const okDeletes: { m: MirrorCard; rows: Row[] }[] = []
  const okRewrites: { m: MirrorCard; r: Rewrite; rows: Row[] }[] = []

  console.log('\n-- deletes')
  for (const fp of DELETE_FPS) {
    const m = mirror.get(fp)!
    const rows = await resolve(m)
    let v: Verdict = rows.length ? 'ok' : 'missing'
    if (rows.length && rows.some((r) => r.courseSlug !== m.course)) v = 'course-mismatch'
    const progress = rows.reduce((s, r) => s + r.progress, 0)
    console.log(`  ${v.padEnd(16)} ${fp} ${m.course.padEnd(14)} ${m.topicSlug.padEnd(40)} rows ${rows.length} progress ${progress} | ${m.front.slice(0, 60).replace(/\n/g, ' ')}`)
    if (v === 'ok') { okDeletes.push({ m, rows }); bump(m.course, 'del', rows.length); bump(m.course, 'delProgress', progress) }
    else if (v === 'missing') bump(m.course, 'missing')
    else bump(m.course, 'mismatch')
  }

  console.log('\n-- rewrites')
  for (const r of REWRITES) {
    const m = mirror.get(r.fp)!
    const rows = await resolve(m)
    let v: Verdict = rows.length ? 'ok' : 'missing'
    if (!rows.length && (await resolveApplied(m, r)) > 0) v = 'already-applied'
    if (rows.length && rows.some((row) => row.courseSlug !== m.course)) v = 'course-mismatch'
    const tiers = [...new Set(rows.map((row) => row.examYield ?? 'NULL'))].join(',') || '-'
    console.log(`  ${v.padEnd(16)} ${r.fp} → ${fingerprint(r.newFront, r.newBack)} ${m.course.padEnd(14)} ${m.topicSlug.padEnd(40)} rows ${rows.length} tier ${tiers} → ${r.newYield} | ${m.front.slice(0, 50).replace(/\n/g, ' ')}`)
    if (v === 'ok') { okRewrites.push({ m, r, rows }); bump(m.course, 'upd', rows.length) }
    else if (v === 'missing') bump(m.course, 'missing')
    else if (v === 'already-applied') bump(m.course, 'applied')
    else bump(m.course, 'mismatch')
  }

  console.log('\n-- per course (rows)')
  for (const course of AP_COURSES) {
    const c = perCourse.get(course) ?? { del: 0, delProgress: 0, upd: 0, missing: 0, applied: 0, mismatch: 0 }
    console.log(`  ${course.padEnd(16)} delete ${String(c.del).padStart(2)} (progress ${c.delProgress})  update ${String(c.upd).padStart(2)}  missing ${c.missing}  already-applied ${c.applied}  course-mismatch ${c.mismatch}`)
  }
  const delRows = okDeletes.reduce((s, d) => s + d.rows.length, 0)
  const delProgress = okDeletes.reduce((s, d) => s + d.rows.reduce((t, r) => t + r.progress, 0), 0)
  const updRows = okRewrites.reduce((s, u) => s + u.rows.length, 0)
  console.log(`\nWould delete ${delRows} flashcards (${delProgress} FlashcardProgress rows) and update ${updRows}.`)

  if (!APPLY) {
    console.log('\nDry run only. Re-run with APPLY=1 to write.')
    return
  }

  // ---- Backup
  const affectedIds = [...okDeletes.flatMap((d) => d.rows.map((r) => r.id)), ...okRewrites.flatMap((u) => u.rows.map((r) => r.id))]
  const backupRows = await prisma.flashcard.findMany({ where: { id: { in: affectedIds } }, include: { topic: { select: { slug: true } } } })
  const progressRows = await prisma.flashcardProgress.findMany({ where: { flashcardId: { in: okDeletes.flatMap((d) => d.rows.map((r) => r.id)) } } })
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const backupPath = path.join('scripts', `_ap-flashcard-fixes-backup-${stamp}.json`)
  fs.writeFileSync(backupPath, JSON.stringify({
    host, createdAt: new Date().toISOString(),
    deletes: okDeletes.map((d) => ({ fp: fingerprint(d.m.front, d.m.back), ids: d.rows.map((r) => r.id) })),
    rewrites: okRewrites.map((u) => ({ fp: u.r.fp, ids: u.rows.map((r) => r.id), newYield: u.r.newYield })),
    flashcards: backupRows.map(({ topic, ...row }) => ({ ...row, topicSlug: topic.slug })),
    flashcardProgress: progressRows,
  }, null, 2))
  console.log('Backup written:', backupPath)

  // ---- Writes, one transaction; each row re-verified inside it
  const result = await prisma.$transaction(async (tx) => {
    let deleted = 0, progressDeleted = 0, updated = 0, skipped = 0
    for (const d of okDeletes) {
      for (const row of d.rows) {
        const live = await tx.flashcard.findUnique({ where: { id: row.id }, select: { front: true, back: true } })
        if (!live || live.front !== d.m.front || live.back !== d.m.back) { skipped++; console.log(`  SKIP delete ${row.id} (changed during run)`); continue }
        progressDeleted += (await tx.flashcardProgress.deleteMany({ where: { flashcardId: row.id } })).count
        await tx.flashcard.delete({ where: { id: row.id } })
        deleted++
      }
    }
    for (const u of okRewrites) {
      for (const row of u.rows) {
        const live = await tx.flashcard.findUnique({ where: { id: row.id }, select: { front: true, back: true } })
        if (!live || live.front !== u.m.front || live.back !== u.m.back) { skipped++; console.log(`  SKIP update ${row.id} (changed during run)`); continue }
        await tx.flashcard.update({
          where: { id: row.id },
          data: {
            front: u.r.newFront,
            back: u.r.newBack,
            examYield: u.r.newYield,
            ...(u.r.newHint !== undefined ? { hint: u.r.newHint } : {}),
          },
        })
        updated++
      }
    }
    return { deleted, progressDeleted, updated, skipped }
  }, { timeout: 120_000, maxWait: 15_000 })

  console.log(`\nDONE: deleted ${result.deleted} flashcards (${result.progressDeleted} FlashcardProgress rows), updated ${result.updated}, skipped inside transaction ${result.skipped}.`)
}

main()
  .catch((e) => { console.error(e); process.exitCode = 1 })
  .finally(() => prisma.$disconnect())
