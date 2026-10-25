/**
 * ASVAB diagnostic: three fixed 50-question forms, each a ~50-minute sitting
 * weighted toward the AFQT (asvab-pipeline PLAN.md, B1).
 *
 * BLUEPRINT (per form, in CAT-ASVAB administration order):
 *   GS 3 · AR 10 · WK 10 · PC 6 · MK 10 · EI 2 · AI 2 · SI 2 · MC 3 · AO 2
 * Why this split: 36 of 50 items (72%) are the four AFQT subtests, because
 * the AFQT decides enlistment eligibility and VE (from WK and PC) counts
 * twice in it. PC gets 6 rather than 10 because every PC item carries its
 * own passage (the CAT gives PC 10 items but 27 minutes). The 14-item
 * technical sampler touches all six technical subtests (2-3 items each) so
 * the results can show rough line-score estimates for every service; AO is
 * included because it feeds the Navy composites (MEC2, OPS). Each AFQT
 * subtest is 3 easy / 4 medium / 3 hard per form.
 *
 * Every item is tagged with exactly one of the 35 course topic slugs (the
 * two AFQT-and-Test-Day topics are not tested). Items are original. Scores
 * are ESTIMATES (src/lib/asvab-scoring.ts): the real CAT-ASVAB is adaptive
 * and IRT-scored, so results always show a range.
 *
 * Stores DiagnosticTest rows under category 'asvab-diagnostic-<form>'
 * (prefix 'asvab-diagnostic'; CLASS_PLAN_COURSES key 'asvab') whose results
 * carry `recommendedTopics: [{ slug, name, priority }]`. Forms rotate with
 * pickNextForm (diagnostic-about.ts rotatesForms).
 */
import { ASVAB_TOPIC_TITLES } from '@/lib/course-includes'
import {
  ASVAB_SUBTESTS,
  type AsvabSubtestId,
  type AfqtSubtestId,
  type AfqtCategoryId,
  type LineScoreEstimate,
  type StandardScoreEstimate,
  estimateAfqtFromEstimates,
  estimateLineScores,
  estimateStandardScore,
} from '@/lib/asvab-scoring'

export const TOTAL_FORMS = 3
export const ASVAB_DIAGNOSTIC_TIME_LIMIT_MINUTES = 50

/** Items per subtest on every form, in CAT-ASVAB administration order. */
export const DIAGNOSTIC_BLUEPRINT: { subtest: AsvabSubtestId; count: number }[] = [
  { subtest: 'GS', count: 3 },
  { subtest: 'AR', count: 10 },
  { subtest: 'WK', count: 10 },
  { subtest: 'PC', count: 6 },
  { subtest: 'MK', count: 10 },
  { subtest: 'EI', count: 2 },
  { subtest: 'AI', count: 2 },
  { subtest: 'SI', count: 2 },
  { subtest: 'MC', count: 3 },
  { subtest: 'AO', count: 2 },
]

export interface AsvabDiagnosticPassage {
  id: string
  title: string
  body: string
  /** Authored inline SVG (rendered only if it passes isSafeSvg). */
  svg?: string
}

export interface AsvabDiagnosticQuestion {
  id: string
  form: number
  subtest: AsvabSubtestId
  /** Same as `subtest`; the shared review/teacher layers group by `domain`. */
  domain: AsvabSubtestId
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  topicSlug: string
  difficulty: 'easy' | 'medium' | 'hard'
  passage?: AsvabDiagnosticPassage
  /** Options name figure panels ("Figure A"...), so they keep authored order. */
  noShuffle?: boolean
}

type Draft = Omit<AsvabDiagnosticQuestion, 'id' | 'domain'>

const q = (
  form: number,
  subtest: AsvabSubtestId,
  topicSlug: string,
  difficulty: Draft['difficulty'],
  question: string,
  options: string[],
  correctAnswer: number,
  explanation: string,
  extra: Partial<Pick<Draft, 'passage' | 'noShuffle'>> = {},
): Draft => ({ form, subtest, topicSlug, difficulty, question, options, correctAnswer, explanation, ...extra })

const FIGURES = ['Figure A', 'Figure B', 'Figure C', 'Figure D']
const AO_CONNECT_STEM = 'Match each lettered point on a part to the same letter on the connecting line. Which figure shows the parts joined correctly?'
const AO_SHAPE_STEM = 'Which figure shows the pieces in the Parts box fitted together, with no pieces added, removed or changed?'

/* Assembling Objects figures (generated, drawn with currentColor so they follow the theme). */
const AO_F1_CONNECT =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 180" role="img" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="65.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">Parts</text><circle cx="37" cy="40" r="18"/><circle cx="37.0" cy="40.0" r="3.5" fill="currentColor" stroke="none"/><text x="41.0" y="36.0" font-size="14" font-weight="bold" fill="currentColor" stroke="none">A</text><rect x="73" y="30" width="36" height="36"/><circle cx="73.0" cy="30.0" r="3.5" fill="currentColor" stroke="none"/><text x="61.0" y="26.0" font-size="14" font-weight="bold" fill="currentColor" stroke="none">B</text><line x1="27.0" y1="112.0" x2="97.0" y2="96.0"/><circle cx="27.0" cy="112.0" r="3.5" fill="currentColor" stroke="none"/><circle cx="97.0" cy="96.0" r="3.5" fill="currentColor" stroke="none"/><text x="23.0" y="130.0" font-size="14" font-weight="bold" fill="currentColor" stroke="none">A</text><text x="99.0" y="88.0" font-size="14" font-weight="bold" fill="currentColor" stroke="none">B</text><rect x="135" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="195.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">A</text><circle cx="167" cy="52" r="18"/><rect x="201" y="78" width="36" height="36"/><line x1="167.0" y1="52.0" x2="219.0" y2="96.0"/><circle cx="167.0" cy="52.0" r="3.5" fill="currentColor" stroke="none"/><circle cx="219.0" cy="96.0" r="3.5" fill="currentColor" stroke="none"/><rect x="261" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="321.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">B</text><circle cx="293" cy="52" r="18"/><rect x="327" y="78" width="36" height="36"/><line x1="311.0" y1="52.0" x2="327.0" y2="78.0"/><circle cx="311.0" cy="52.0" r="3.5" fill="currentColor" stroke="none"/><circle cx="327.0" cy="78.0" r="3.5" fill="currentColor" stroke="none"/><rect x="387" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="447.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">C</text><circle cx="419" cy="52" r="18"/><rect x="453" y="78" width="36" height="36"/><line x1="419.0" y1="52.0" x2="453.0" y2="78.0"/><circle cx="419.0" cy="52.0" r="3.5" fill="currentColor" stroke="none"/><circle cx="453.0" cy="78.0" r="3.5" fill="currentColor" stroke="none"/><rect x="513" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="573.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">D</text><circle cx="545" cy="52" r="18"/><rect x="579" y="78" width="36" height="36"/><line x1="545.0" y1="52.0" x2="579.0" y2="114.0"/><circle cx="545.0" cy="52.0" r="3.5" fill="currentColor" stroke="none"/><circle cx="579.0" cy="114.0" r="3.5" fill="currentColor" stroke="none"/></svg>'
const AO_F2_CONNECT =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 180" role="img" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="65.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">Parts</text><polygon points="19.0,66.0 55.0,66.0 37.0,30.0"/><circle cx="37.0" cy="30.0" r="3.5" fill="currentColor" stroke="none"/><text x="43.0" y="30.0" font-size="14" font-weight="bold" fill="currentColor" stroke="none">A</text><rect x="63" y="86" width="54" height="22"/><circle cx="90.0" cy="86.0" r="3.5" fill="currentColor" stroke="none"/><text x="85.0" y="80.0" font-size="14" font-weight="bold" fill="currentColor" stroke="none">B</text><line x1="19.0" y1="124.0" x2="65.0" y2="124.0"/><circle cx="19.0" cy="124.0" r="3.5" fill="currentColor" stroke="none"/><circle cx="65.0" cy="124.0" r="3.5" fill="currentColor" stroke="none"/><text x="17.0" y="116.0" font-size="14" font-weight="bold" fill="currentColor" stroke="none">A</text><text x="61.0" y="116.0" font-size="14" font-weight="bold" fill="currentColor" stroke="none">B</text><rect x="135" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="195.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">A</text><polygon points="149.0,62.0 175.0,62.0 162.0,28.0"/><rect x="201" y="98" width="48" height="24"/><line x1="162.0" y1="62.0" x2="225.0" y2="98.0"/><circle cx="162.0" cy="62.0" r="3.5" fill="currentColor" stroke="none"/><circle cx="225.0" cy="98.0" r="3.5" fill="currentColor" stroke="none"/><rect x="261" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="321.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">B</text><polygon points="275.0,62.0 301.0,62.0 288.0,28.0"/><rect x="327" y="98" width="48" height="24"/><line x1="288.0" y1="28.0" x2="351.0" y2="98.0"/><circle cx="288.0" cy="28.0" r="3.5" fill="currentColor" stroke="none"/><circle cx="351.0" cy="98.0" r="3.5" fill="currentColor" stroke="none"/><rect x="387" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="447.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">C</text><polygon points="401.0,62.0 427.0,62.0 414.0,28.0"/><rect x="453" y="98" width="48" height="24"/><line x1="414.0" y1="28.0" x2="453.0" y2="98.0"/><circle cx="414.0" cy="28.0" r="3.5" fill="currentColor" stroke="none"/><circle cx="453.0" cy="98.0" r="3.5" fill="currentColor" stroke="none"/><rect x="513" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="573.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">D</text><polygon points="527.0,62.0 553.0,62.0 540.0,28.0"/><rect x="579" y="98" width="48" height="24"/><line x1="527.0" y1="62.0" x2="603.0" y2="98.0"/><circle cx="527.0" cy="62.0" r="3.5" fill="currentColor" stroke="none"/><circle cx="603.0" cy="98.0" r="3.5" fill="currentColor" stroke="none"/></svg>'
const AO_F3_CONNECT =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 180" role="img" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="65.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">Parts</text><polygon points="39.0,20.0 58.1,31.0 58.1,53.0 39.0,64.0 19.9,53.0 19.9,31.0"/><circle cx="58.1" cy="42.0" r="3.5" fill="currentColor" stroke="none"/><text x="63.1" y="47.0" font-size="14" font-weight="bold" fill="currentColor" stroke="none">A</text><circle cx="95" cy="86" r="18"/><circle cx="77.0" cy="86.0" r="3.5" fill="currentColor" stroke="none"/><text x="65.0" y="82.0" font-size="14" font-weight="bold" fill="currentColor" stroke="none">B</text><line x1="19.0" y1="128.0" x2="57.0" y2="128.0"/><circle cx="19.0" cy="128.0" r="3.5" fill="currentColor" stroke="none"/><circle cx="57.0" cy="128.0" r="3.5" fill="currentColor" stroke="none"/><text x="15.0" y="120.0" font-size="14" font-weight="bold" fill="currentColor" stroke="none">A</text><text x="53.0" y="120.0" font-size="14" font-weight="bold" fill="currentColor" stroke="none">B</text><rect x="135" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="195.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">A</text><polygon points="167.0,40.0 186.1,51.0 186.1,73.0 167.0,84.0 147.9,73.0 147.9,51.0"/><circle cx="227" cy="62" r="18"/><line x1="186.1" y1="51.0" x2="209.0" y2="62.0"/><circle cx="186.1" cy="51.0" r="3.5" fill="currentColor" stroke="none"/><circle cx="209.0" cy="62.0" r="3.5" fill="currentColor" stroke="none"/><rect x="261" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="321.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">B</text><polygon points="293.0,40.0 312.1,51.0 312.1,73.0 293.0,84.0 273.9,73.0 273.9,51.0"/><circle cx="353" cy="62" r="18"/><line x1="312.1" y1="62.0" x2="353.0" y2="62.0"/><circle cx="312.1" cy="62.0" r="3.5" fill="currentColor" stroke="none"/><circle cx="353.0" cy="62.0" r="3.5" fill="currentColor" stroke="none"/><rect x="387" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="447.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">C</text><polygon points="419.0,40.0 438.1,51.0 438.1,73.0 419.0,84.0 399.9,73.0 399.9,51.0"/><circle cx="479" cy="62" r="18"/><line x1="419.0" y1="62.0" x2="461.0" y2="62.0"/><circle cx="419.0" cy="62.0" r="3.5" fill="currentColor" stroke="none"/><circle cx="461.0" cy="62.0" r="3.5" fill="currentColor" stroke="none"/><rect x="513" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="573.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">D</text><polygon points="545.0,40.0 564.1,51.0 564.1,73.0 545.0,84.0 525.9,73.0 525.9,51.0"/><circle cx="605" cy="62" r="18"/><line x1="564.1" y1="62.0" x2="587.0" y2="62.0"/><circle cx="564.1" cy="62.0" r="3.5" fill="currentColor" stroke="none"/><circle cx="587.0" cy="62.0" r="3.5" fill="currentColor" stroke="none"/></svg>'
const AO_F1_SHAPE =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 180" role="img" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="65.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">Parts</text><rect x="19" y="50" width="40" height="40"/><path d="M 71 80 A 20 20 0 0 1 111 80 Z"/><rect x="135" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="195.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">A</text><rect x="175" y="60" width="40" height="40"/><path d="M 175 60 A 20 20 0 0 1 215 60 Z"/><rect x="261" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="321.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">B</text><rect x="301" y="60" width="40" height="40"/><path d="M 301 60 L 301 20 A 40 40 0 0 1 341 60 Z"/><rect x="387" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="447.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">C</text><rect x="427" y="50" width="40" height="60"/><path d="M 427 50 A 20 20 0 0 1 467 50 Z"/><rect x="513" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="573.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">D</text><rect x="553" y="60" width="40" height="40"/><polygon points="553.0,60.0 593.0,60.0 573.0,36.0"/></svg>'
const AO_F2_SHAPE =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 180" role="img" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="65.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">Parts</text><rect x="35" y="24" width="60" height="30"/><polygon points="19.0,110.0 39.0,110.0 39.0,80.0"/><polygon points="91.0,110.0 111.0,110.0 91.0,80.0"/><rect x="135" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="195.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">A</text><rect x="165" y="60" width="60" height="30"/><polygon points="225.0,90.0 245.0,90.0 225.0,60.0"/><rect x="261" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="321.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">B</text><rect x="291" y="60" width="60" height="30"/><polygon points="271.0,90.0 291.0,90.0 291.0,44.0"/><polygon points="351.0,90.0 371.0,90.0 351.0,60.0"/><rect x="387" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="447.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">C</text><rect x="417" y="60" width="60" height="30"/><polygon points="397.0,90.0 417.0,90.0 417.0,60.0"/><polygon points="477.0,90.0 497.0,90.0 477.0,60.0"/><rect x="437" y="40" width="20" height="20"/><rect x="513" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="573.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">D</text><rect x="543" y="60" width="60" height="30"/><polygon points="523.0,90.0 543.0,90.0 543.0,60.0"/><polygon points="603.0,90.0 623.0,90.0 603.0,60.0"/></svg>'
const AO_F3_SHAPE =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 180" role="img" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="65.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">Parts</text><path d="M 17 52 A 24 24 0 0 1 65 52 Z"/><path d="M 79 52 L 79 28 A 24 24 0 0 1 103 52 Z"/><path d="M 45 84 L 69 84 A 24 24 0 0 1 45 108 Z"/><rect x="135" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="195.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">A</text><circle cx="195" cy="72" r="34"/><line x1="195.0" y1="72.0" x2="195.0" y2="38.0"/><line x1="195.0" y1="72.0" x2="224.4" y2="89.0"/><line x1="195.0" y1="72.0" x2="165.6" y2="89.0"/><rect x="261" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="321.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">B</text><circle cx="321" cy="72" r="34"/><line x1="287.0" y1="72.0" x2="355.0" y2="72.0"/><line x1="321.0" y1="72.0" x2="321.0" y2="106.0"/><rect x="387" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="447.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">C</text><circle cx="447" cy="72" r="34"/><line x1="413.0" y1="72.0" x2="481.0" y2="72.0"/><line x1="447.0" y1="38.0" x2="447.0" y2="106.0"/><rect x="513" y="5" width="120" height="140" rx="6" stroke-width="1.5"/><text x="573.0" y="168" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">D</text><path d="M 539 72 A 34 34 0 0 1 607 72 A 34 34 0 0 1 573 106 L 573 72 L 539 72 Z"/><line x1="573.0" y1="72.0" x2="607.0" y2="72.0"/></svg>'

const T = {
  wkContext: 'asvab-wk-vocabulary-in-context',
  wkParts: 'asvab-wk-word-parts',
  wkSyn: 'asvab-wk-synonym-strategies',
  pcMain: 'asvab-pc-main-idea',
  pcDetail: 'asvab-pc-details',
  pcInfer: 'asvab-pc-inference',
  arWhole: 'asvab-ar-whole-number-problems',
  arFrac: 'asvab-ar-fractions-decimals',
  arPct: 'asvab-ar-percents-interest',
  arRatio: 'asvab-ar-ratios-rates',
  arAvg: 'asvab-ar-averages-probability',
  mkNum: 'asvab-mk-number-properties',
  mkEq: 'asvab-mk-algebra-equations',
  mkExpr: 'asvab-mk-algebra-expressions',
  mkShapes: 'asvab-mk-geometry-shapes',
  mkMeas: 'asvab-mk-geometry-measurement',
  gsLife: 'asvab-gs-life-science',
  gsEarth: 'asvab-gs-earth-space',
  gsChem: 'asvab-gs-chemistry',
  gsPhys: 'asvab-gs-physics',
  eiBasics: 'asvab-ei-electricity-basics',
  eiCircuits: 'asvab-ei-circuits',
  eiComp: 'asvab-ei-components',
  aiEngine: 'asvab-ai-engine',
  aiDrive: 'asvab-ai-drivetrain-chassis',
  aiSystems: 'asvab-ai-systems',
  siTools: 'asvab-si-tools',
  siMat: 'asvab-si-materials-fasteners',
  mcForces: 'asvab-mc-forces-motion',
  mcMachines: 'asvab-mc-simple-machines',
  mcGears: 'asvab-mc-gears-fluids',
  aoConnect: 'asvab-ao-connections',
  aoShapes: 'asvab-ao-shapes',
} as const

/* ================================================================== */
/*  General Science (3 per form)                                       */
/* ================================================================== */
const GS: Draft[] = [
  q(1, 'GS', T.gsLife, 'easy', 'Which organ pumps blood through the body?', ['Heart', 'Lungs', 'Liver', 'Kidneys'], 0,
    'The heart is a muscular pump that pushes blood through the arteries and veins. The lungs exchange gases, the liver processes nutrients and the kidneys filter blood.'),
  q(1, 'GS', T.gsChem, 'medium', 'A solution has a pH of 3. The solution is', ['acidic', 'basic', 'neutral', 'salty'], 0,
    'On the pH scale, 7 is neutral, values below 7 are acidic and values above 7 are basic. A pH of 3 is well into the acidic range.'),
  q(1, 'GS', T.gsPhys, 'hard', 'A net force accelerates a 1,000-kilogram car at 3 meters per second squared. What is the size of the net force?', ['3,000 newtons', '333 newtons', '1,003 newtons', '300 newtons'], 0,
    'Newton\'s second law: F = m × a = 1,000 kg × 3 m/s² = 3,000 N. Dividing (333) or adding (1,003) the numbers does not follow the law.'),

  q(2, 'GS', T.gsEarth, 'medium', 'What causes Earth to have seasons?', ['The tilt of Earth\'s axis', 'Changes in Earth\'s distance from the Sun', 'The changing phases of the Moon', 'Changes in how fast Earth spins'], 0,
    'Earth\'s axis is tilted about 23.5°, so each hemisphere gets more direct sunlight for part of the year (summer) and less for another part (winter). Distance from the Sun changes only slightly and is not the cause.'),
  q(2, 'GS', T.gsLife, 'easy', 'In a plant cell, photosynthesis takes place in the', ['chloroplasts', 'mitochondria', 'nucleus', 'cell wall'], 0,
    'Chloroplasts contain chlorophyll, which captures light energy to make sugar. Mitochondria release energy from food; the nucleus holds DNA; the cell wall gives support.'),
  q(2, 'GS', T.gsChem, 'medium', 'Which of the following is a chemical change?', ['Iron rusting', 'Ice melting', 'Sugar dissolving in tea', 'Water boiling'], 0,
    'Rusting forms a new substance (iron oxide), so it is a chemical change. Melting, dissolving and boiling change only the form or mixture of a substance; they are physical changes.'),

  q(3, 'GS', T.gsPhys, 'medium', 'Sound travels fastest through which of these?', ['Steel', 'Water', 'Air', 'A vacuum'], 0,
    'Sound is a vibration passed from particle to particle, so it moves fastest through tightly packed, stiff solids such as steel, slower through water, slower still through air, and not at all through a vacuum.'),
  q(3, 'GS', T.gsEarth, 'medium', 'Weather happens in the lowest layer of Earth\'s atmosphere. What is that layer called?', ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'], 0,
    'The troposphere is the layer closest to the ground, where clouds, rain and almost all weather form. The stratosphere above it holds the ozone layer.'),
  q(3, 'GS', T.gsLife, 'easy', 'Which part of the blood helps the body fight infection?', ['White blood cells', 'Red blood cells', 'Platelets', 'Plasma'], 0,
    'White blood cells attack germs and are part of the immune system. Red blood cells carry oxygen, platelets help blood clot and plasma is the liquid that carries everything.'),
]

/* ================================================================== */
/*  Arithmetic Reasoning (10 per form: 2 per topic; 3E / 4M / 3H)      */
/* ================================================================== */
const AR: Draft[] = [
  q(1, 'AR', T.arWhole, 'easy', 'A truck can carry 18 crates per trip. How many trips are needed to move 150 crates?', ['9', '8', '10', '12'], 0,
    '150 ÷ 18 = 8 remainder 6. Eight trips leave 6 crates behind, so a ninth trip is needed. Always round up when a leftover still has to be moved.'),
  q(1, 'AR', T.arWhole, 'medium', 'A soldier earns \\$2,450 a month. Rent is \\$875 and a car payment is \\$340. How much money is left each month after these two bills?', ['\\$1,235', '\\$1,335', '\\$1,215', '\\$1,575'], 0,
    '875 + 340 = 1,215 in bills, and 2,450 − 1,215 = 1,235. The trap answer \\$1,215 is the bills, not what is left.'),
  q(1, 'AR', T.arFrac, 'easy', 'A recipe uses 3/4 cup of rice per person. How much rice is needed for 6 people?', ['4 1/2 cups', '4 cups', '5 1/4 cups', '3 3/4 cups'], 0,
    '6 × 3/4 = 18/4 = 4 2/4 = 4 1/2 cups.'),
  q(1, 'AR', T.arFrac, 'medium', 'A fuel tank holds 16 gallons and is 3/8 full. How many gallons are needed to fill it?', ['10', '6', '8', '12'], 0,
    'The tank is missing 1 − 3/8 = 5/8 of its capacity: 5/8 × 16 = 10 gallons. The trap 6 is the fuel already in the tank.'),
  q(1, 'AR', T.arPct, 'easy', 'A jacket that costs \\$80 is on sale for 25% off. What is the sale price?', ['\\$60', '\\$55', '\\$65', '\\$20'], 0,
    '25% of 80 is 20, so the sale price is 80 − 20 = \\$60. The \\$20 choice is the discount, not the price.'),
  q(1, 'AR', T.arPct, 'hard', 'Jamal puts \\$2,000 in an account that pays 4% simple interest per year. How much is in the account after 3 years?', ['\\$2,240', '\\$2,080', '\\$2,400', '\\$2,024'], 0,
    'Simple interest = principal × rate × time = 2,000 × 0.04 × 3 = 240. The account holds 2,000 + 240 = 2,240 dollars. The 2,080 choice adds only one year of interest.'),
  q(1, 'AR', T.arRatio, 'medium', 'A convoy travels 210 miles in 3 1/2 hours. At the same rate, how far will it travel in 5 hours?', ['300 miles', '280 miles', '315 miles', '350 miles'], 0,
    'Rate = 210 ÷ 3.5 = 60 miles per hour, so in 5 hours the convoy covers 60 × 5 = 300 miles.'),
  q(1, 'AR', T.arRatio, 'hard', 'In a unit made up only of sergeants and privates, the ratio of sergeants to privates is 2 to 7. If the unit has 63 people, how many are privates?', ['49', '14', '42', '56'], 0,
    'The ratio has 2 + 7 = 9 parts, so each part is 63 ÷ 9 = 7 people. Privates are 7 parts: 7 × 7 = 49. (14 is the number of sergeants.)'),
  q(1, 'AR', T.arAvg, 'medium', 'Kim scored 82, 90, 75 and 85 on four tests. What score does she need on the fifth test to average exactly 84?', ['88', '84', '86', '90'], 0,
    'An average of 84 over 5 tests needs a total of 84 × 5 = 420. She has 82 + 90 + 75 + 85 = 332, so she needs 420 − 332 = 88.'),
  q(1, 'AR', T.arAvg, 'hard', 'A bag holds 4 red, 5 blue and 3 green marbles. Two marbles are drawn without putting the first one back. What is the probability that both are red?', ['1/11', '1/9', '1/3', '4/33'], 0,
    'First draw: 4 red out of 12, or 4/12. Second draw: 3 red left out of 11, or 3/11. Multiply: (4/12)(3/11) = 12/132 = 1/11.'),

  q(2, 'AR', T.arWhole, 'easy', 'A store sells bottled water in cases of 24 bottles for \\$6 a case. How much do 120 bottles cost?', ['\\$30', '\\$24', '\\$36', '\\$20'], 0,
    '120 ÷ 24 = 5 cases, and 5 cases × 6 dollars = 30 dollars.'),
  q(2, 'AR', T.arWhole, 'medium', 'A hiker starts at an elevation of 1,250 feet, climbs 2,340 feet, and then descends 875 feet. What is her final elevation?', ['2,715 feet', '2,815 feet', '3,590 feet', '1,965 feet'], 0,
    '1,250 + 2,340 = 3,590 feet at the top; 3,590 − 875 = 2,715 feet. The trap 3,590 forgets the descent.'),
  q(2, 'AR', T.arFrac, 'easy', 'A board 12 feet long is cut into pieces that are each 1 1/2 feet long. How many pieces are there?', ['8', '6', '9', '18'], 0,
    '12 ÷ 1 1/2 = 12 ÷ 3/2 = 12 × 2/3 = 8 pieces. Multiplying instead of dividing gives the trap answer 18.'),
  q(2, 'AR', T.arFrac, 'medium', 'Gas costs \\$3.45 per gallon. What is the cost of 12.4 gallons?', ['\\$42.78', '\\$41.40', '\\$43.18', '\\$37.95'], 0,
    '3.45 × 12.4 = 3.45 × 12 + 3.45 × 0.4 = 41.40 + 1.38 = 42.78. \\$41.40 leaves out the 0.4 gallon.'),
  q(2, 'AR', T.arPct, 'medium', 'A town\'s population grew from 8,000 to 9,200. By what percent did it increase?', ['15%', '12%', '13%', '20%'], 0,
    'Percent change = change ÷ original = 1,200 ÷ 8,000 = 0.15 = 15%. Dividing by the new number (1,200 ÷ 9,200 ≈ 13%) is the classic mistake.'),
  q(2, 'AR', T.arPct, 'hard', 'After a 20% discount, a radio sells for \\$96. What was the original price?', ['\\$120', '\\$115.20', '\\$116', '\\$76.80'], 0,
    'The sale price is 80% of the original: 0.80 × P = 96, so P = 96 ÷ 0.80 = \\$120. Adding 20% of \\$96 (to get \\$115.20) uses the wrong base.'),
  q(2, 'AR', T.arRatio, 'easy', 'A pump moves 15 gallons of water per minute. How many minutes will it take to fill a 450-gallon tank?', ['30', '25', '45', '35'], 0,
    'Time = amount ÷ rate = 450 ÷ 15 = 30 minutes.'),
  q(2, 'AR', T.arRatio, 'hard', 'One hose can fill a tank in 6 hours. A second hose can fill the same tank in 3 hours. How long will it take to fill the tank if both hoses run together?', ['2 hours', '4 1/2 hours', '3 hours', '1 1/2 hours'], 0,
    'Add the rates: 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 tank per hour, so the full tank takes 2 hours. Averaging the times (4 1/2) is a common error; working together must beat the faster hose alone.'),
  q(2, 'AR', T.arAvg, 'medium', 'A driver covers 300 miles on the first day, 420 miles on the second day and 360 miles on the third day. What is the average distance per day?', ['360 miles', '350 miles', '380 miles', '340 miles'], 0,
    '300 + 420 + 360 = 1,080 miles over 3 days; 1,080 ÷ 3 = 360 miles per day.'),
  q(2, 'AR', T.arAvg, 'hard', 'A team of 3 must be chosen from 6 volunteers: one leader, one driver and one radio operator. No one can hold two jobs. How many different ways can the jobs be filled?', ['120', '20', '18', '216'], 0,
    'The jobs are different, so order matters: 6 choices for leader, then 5 for driver, then 4 for radio operator: 6 × 5 × 4 = 120. (20 would be right only if the three jobs were the same.)'),

  q(3, 'AR', T.arWhole, 'easy', 'A gym charges a \\$50 sign-up fee plus \\$35 per month. What is the total cost for the first 12 months?', ['\\$470', '\\$420', '\\$455', '\\$520'], 0,
    '12 × 35 = 420 for the months, plus the 50 fee: 420 + 50 = 470 dollars. The 420 choice forgets the sign-up fee.'),
  q(3, 'AR', T.arWhole, 'medium', 'A base orders 18 boxes of field rations with 12 meals in each box. If 175 soldiers each eat one meal, how many meals are left over?', ['41', '31', '43', '51'], 0,
    '18 × 12 = 216 meals; 216 − 175 = 41 left over.'),
  q(3, 'AR', T.arFrac, 'hard', 'Of 240 recruits, 5/8 passed the swim test on the first try. Half of the recruits who failed passed on the second try. How many recruits passed on the second try?', ['45', '75', '90', '150'], 0,
    '5/8 × 240 = 150 passed the first time, so 240 − 150 = 90 failed. Half of 90 is 45. (90 is the number who failed, not who passed later.)'),
  q(3, 'AR', T.arFrac, 'easy', 'Ana buys 3 notebooks at \\$2.75 each and a pen for \\$1.40. How much change does she get from a \\$20 bill?', ['\\$10.35', '\\$9.65', '\\$11.35', '\\$10.65'], 0,
    '3 × 2.75 = 8.25, plus 1.40 = 9.65 spent. Change: 20.00 − 9.65 = 10.35 dollars. The 9.65 choice is the amount spent.'),
  q(3, 'AR', T.arPct, 'easy', 'A soldier saves 15% of a \\$3,000 monthly paycheck. How much does the soldier save each month?', ['\\$450', '\\$300', '\\$45', '\\$500'], 0,
    '15% = 0.15, and 0.15 × 3,000 = \\$450. (10% would be \\$300; 5% more adds \\$150.)'),
  q(3, 'AR', T.arPct, 'medium', 'A \\$1,500 loan charges 6% simple interest per year. How much interest is owed after 2 years?', ['\\$180', '\\$90', '\\$360', '\\$150'], 0,
    'Interest = 1,500 × 0.06 × 2 = \\$180. One year alone would be \\$90.'),
  q(3, 'AR', T.arRatio, 'medium', 'On a map, 1 inch represents 25 miles. Two towns are 3.2 inches apart on the map. How far apart are they in miles?', ['80 miles', '75 miles', '82.5 miles', '28.2 miles'], 0,
    'Set up the proportion: 3.2 inches × 25 miles per inch = 80 miles.'),
  q(3, 'AR', T.arRatio, 'hard', 'Car A leaves a gate at 9:00 a.m. driving 50 miles per hour. Car B leaves the same gate at 10:00 a.m. on the same road, driving 70 miles per hour. At what time does Car B catch up to Car A?', ['12:30 p.m.', '11:30 a.m.', '1:00 p.m.', '12:00 p.m.'], 0,
    'By 10:00, Car A is 50 miles ahead. Car B closes the gap at 70 − 50 = 20 miles per hour, so it needs 50 ÷ 20 = 2 1/2 hours: 10:00 a.m. + 2 1/2 hours = 12:30 p.m.'),
  q(3, 'AR', T.arAvg, 'medium', 'The average of five numbers is 18. Four of the numbers are 12, 20, 15 and 22. What is the fifth number?', ['21', '18', '19', '23'], 0,
    'Five numbers averaging 18 total 5 × 18 = 90. The four known numbers total 69, so the fifth is 90 − 69 = 21.'),
  q(3, 'AR', T.arAvg, 'hard', 'Two fair six-sided dice are rolled. What is the probability that the two numbers add up to 7?', ['1/6', '1/12', '7/36', '1/36'], 0,
    'There are 6 × 6 = 36 equally likely outcomes. Six of them add to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). So the probability is 6/36 = 1/6.'),
]

/* ================================================================== */
/*  Word Knowledge (10 per form; 3E / 4M / 3H)                         */
/* ================================================================== */
const WK: Draft[] = [
  q(1, 'WK', T.wkContext, 'easy', 'The sergeant gave a **brief** talk before the march began.\n\n**Brief** most nearly means', ['short', 'loud', 'serious', 'friendly'], 0,
    'Brief means short in length or time. The sentence gives no clue about volume or mood, so "short" is the only true synonym.'),
  q(1, 'WK', T.wkContext, 'medium', 'The new recruit was **diligent**, finishing every task carefully and on time.\n\n**Diligent** most nearly means', ['hardworking', 'nervous', 'inattentive', 'clumsy'], 0,
    'The context clue "finishing every task carefully and on time" describes steady effort. Diligent means hardworking and careful.'),
  q(1, 'WK', T.wkContext, 'medium', 'Heavy rain made the mountain trail **treacherous** for the hikers.\n\n**Treacherous** most nearly means', ['dangerous', 'crowded', 'boring', 'narrow'], 0,
    'Treacherous means full of hidden danger. Rain on a mountain trail creates slippery, unsafe footing, which fits "dangerous."'),
  q(1, 'WK', T.wkContext, 'hard', 'The witness\'s account was **corroborated** by the security camera footage.\n\n**Corroborated** most nearly means', ['confirmed', 'contradicted', 'recorded', 'questioned'], 0,
    'To corroborate is to support or confirm with more evidence. "Contradicted" is the opposite; footage that recorded the event is how it was confirmed, but "recorded" is not the meaning of the word.'),
  q(1, 'WK', T.wkParts, 'easy', '**Preview** most nearly means', ['see beforehand', 'look again', 'view from afar', 'watch closely'], 0,
    'The prefix pre- means "before," and view means "see," so preview means to see something before it happens or is released. "Look again" would be re-view.'),
  q(1, 'WK', T.wkParts, 'medium', '**Subterranean** most nearly means', ['underground', 'overhead', 'ancient', 'underwater'], 0,
    'Sub- means "under" and terra means "earth" (as in terrain). Subterranean means below the surface of the earth: underground. "Underwater" keeps the under- idea but misses the earth root.'),
  q(1, 'WK', T.wkParts, 'hard', '**Magnanimous** most nearly means', ['generous', 'enormous', 'cheerful', 'stubborn'], 0,
    'Magn- means "great" and anim- means "spirit" or "mind." A magnanimous person has a great spirit: generous and forgiving. "Enormous" is a trap that only matches the magn- part.'),
  q(1, 'WK', T.wkSyn, 'easy', '**Rapid** most nearly means', ['fast', 'steady', 'quiet', 'heavy'], 0,
    'Rapid means happening quickly, so "fast" is the synonym.'),
  q(1, 'WK', T.wkSyn, 'medium', '**Reluctant** most nearly means', ['unwilling', 'unable', 'unaware', 'unhappy'], 0,
    'A reluctant person does not want to do something and holds back. "Unable" means cannot, which is different from does not want to.'),
  q(1, 'WK', T.wkSyn, 'hard', '**Austere** most nearly means', ['stern', 'sweet', 'careless', 'costly'], 0,
    'Austere means severe, strict and plain, with no comforts or decoration, as in an austere barracks or an austere officer. "Stern" is the closest match.'),

  q(2, 'WK', T.wkContext, 'easy', 'The medic spoke softly to **calm** the injured hiker.\n\n**Calm** most nearly means', ['soothe', 'carry', 'examine', 'warn'], 0,
    'Here calm is a verb meaning to make someone less upset, which is what "soothe" means. Speaking softly is the context clue.'),
  q(2, 'WK', T.wkContext, 'medium', 'Fresh water was **scarce** after the storm closed every road into town.\n\n**Scarce** most nearly means', ['in short supply', 'costly to replace', 'spoiled', 'given away'], 0,
    'Scarce means there is not enough of something. Scarce goods often become expensive, but the word itself means "in short supply."'),
  q(2, 'WK', T.wkContext, 'medium', 'She **concealed** the spare key under a flat rock by the back door.\n\n**Concealed** most nearly means', ['hid', 'dropped', 'found', 'painted'], 0,
    'To conceal something is to hide it from view. Putting a key under a rock keeps it out of sight.'),
  q(2, 'WK', T.wkContext, 'hard', 'The commander\'s orders were **lucid**, leaving no room for confusion.\n\n**Lucid** most nearly means', ['clearly stated', 'strictly enforced', 'kept secret', 'quickly given'], 0,
    'Lucid means clear and easy to understand. The clue "leaving no room for confusion" points to clarity, not strictness or speed.'),
  q(2, 'WK', T.wkParts, 'easy', '**Disconnect** most nearly means', ['unhook', 'attach', 'repair', 'test'], 0,
    'The prefix dis- reverses the root: disconnect means to undo a connection, or unhook. "Attach" is the opposite.'),
  q(2, 'WK', T.wkParts, 'medium', '**Submerge** most nearly means', ['put under water', 'rise to the top', 'float away', 'dry out'], 0,
    'Sub- means "under" (as in submarine), and merge comes from a Latin word meaning to dip. To submerge is to put or go under water.'),
  q(2, 'WK', T.wkParts, 'hard', '**Retroactive** most nearly means', ['applying to the past', 'applying to the future', 'happening all at once', 'working against itself'], 0,
    'Retro- means "backward" (as in retrospect). A retroactive pay raise reaches back and applies to an earlier date: it applies to the past.'),
  q(2, 'WK', T.wkSyn, 'easy', '**Vacant** most nearly means', ['empty', 'dirty', 'locked', 'large'], 0,
    'Vacant means unoccupied or empty, like a vacant seat or a vacant lot.'),
  q(2, 'WK', T.wkSyn, 'medium', '**Abundant** most nearly means', ['plentiful', 'valuable', 'rare', 'ripe'], 0,
    'Abundant means present in large amounts. "Rare" is the opposite; "valuable" is a trap because scarce things are often valuable.'),
  q(2, 'WK', T.wkSyn, 'hard', '**Steadfast** most nearly means', ['firm', 'speedy', 'silent', 'sudden'], 0,
    'Steadfast means firmly loyal and not giving way, like a steadfast friend. The "fast" in it means "fixed in place," not "quick," so "speedy" is the trap.'),

  q(3, 'WK', T.wkContext, 'easy', 'The old wooden bridge was too **fragile** to hold the loaded truck.\n\n**Fragile** most nearly means', ['easily broken', 'very long', 'newly built', 'brightly painted'], 0,
    'Fragile means easily damaged or broken. A bridge too fragile to hold a truck is weak.'),
  q(3, 'WK', T.wkContext, 'medium', 'Engineers added steel beams to **buttress** the old wall before the storm.\n\n**Buttress** most nearly means', ['support', 'measure', 'decorate', 'tear down'], 0,
    'To buttress something is to support or strengthen it, which is exactly what added steel beams do for a weak wall.'),
  q(3, 'WK', T.wkContext, 'medium', 'The directions were so **vague** that nobody knew which step came first.\n\n**Vague** most nearly means', ['unclear', 'lengthy', 'strict', 'printed'], 0,
    'Vague means not clear or exact. The clue is that nobody could tell which step came first.'),
  q(3, 'WK', T.wkContext, 'hard', 'The mechanic\'s **scrupulous** inspection caught a tiny crack in the radiator hose.\n\n**Scrupulous** most nearly means', ['very careful', 'very quick', 'very costly', 'very routine'], 0,
    'Scrupulous means extremely careful and thorough about every detail. Catching a tiny crack shows great care, not speed.'),
  q(3, 'WK', T.wkParts, 'easy', '**Misplace** most nearly means', ['lose', 'replace', 'arrange', 'store'], 0,
    'Mis- means "wrongly." To misplace something is to put it in the wrong place, so that it is lost.'),
  q(3, 'WK', T.wkParts, 'medium', '**Tangible** most nearly means', ['able to be touched', 'easy to hear', 'bright and shiny', 'able to bend'], 0,
    'The root tang- means "touch" (as in tactile and contact) and -ible means "able to be." Tangible means real enough to be touched.'),
  q(3, 'WK', T.wkParts, 'hard', '**Omnipotent** most nearly means', ['all-powerful', 'all-knowing', 'found everywhere', 'very ancient'], 0,
    'Omni- means "all" and potent means "powerful," so omnipotent means all-powerful. "All-knowing" is omniscient and "found everywhere" is omnipresent: same prefix, different root.'),
  q(3, 'WK', T.wkSyn, 'easy', '**Halt** most nearly means', ['stop', 'hurry', 'turn', 'lift'], 0,
    'Halt means to stop, as in the command "Halt!"'),
  q(3, 'WK', T.wkSyn, 'medium', '**Affable** most nearly means', ['friendly', 'wealthy', 'nervous', 'clumsy'], 0,
    'Affable means pleasant and easy to talk to: friendly.'),
  q(3, 'WK', T.wkSyn, 'hard', '**Placate** most nearly means', ['pacify', 'provoke', 'replace', 'plead'], 0,
    'To placate someone is to calm them down by giving them something they want. "Pacify" means the same; "provoke" is the opposite.'),
]

/* ================================================================== */
/*  Paragraph Comprehension (6 per form; each item has its passage)    */
/* ================================================================== */
const P = (id: string, title: string, body: string): AsvabDiagnosticPassage => ({ id, title, body })

const PC: Draft[] = [
  q(1, 'PC', T.pcMain, 'easy', 'Which statement best expresses the main idea of the passage?',
    ['Most heat injuries in training can be prevented.', 'Recruits should not be sent to train in the summer.', 'Feeling thirsty is the best sign that you need water.', 'Leaders are to blame for most heat injuries in training.'], 0,
    'Every sentence after the first supports one point: heat injuries can be prevented with habits like scheduled drinking, shade and loose clothing. The passage says to drink before you feel thirsty, so the thirst choice contradicts it.',
    { passage: P('asvab-diag-pc-f1-1', 'Heat in the Field', 'During summer field training, heat injuries are among the most common reasons recruits are pulled from exercises. Many of these injuries can be prevented. Drinking water on a schedule, rather than waiting until you feel thirsty, keeps the body cooler. Resting in the shade during breaks and wearing loose layers also help. Leaders are trained to watch for early warning signs such as dizziness or confusion.') }),
  q(1, 'PC', T.pcDetail, 'easy', 'According to the passage, why did the library change its hours?',
    ['A survey showed residents wanted morning access.', 'Weekend visitors had complained about crowding.', 'The library had hired several new staff members.', 'The building needed repairs on weekday mornings.'], 0,
    'The last sentence states the reason: a survey showed that many residents work late shifts and wanted morning access.',
    { passage: P('asvab-diag-pc-f1-2', 'New Library Hours', 'The town library extended its hours this fall. It now opens at 8 a.m. on weekdays instead of 10 a.m., and it stays open until 9 p.m. on Tuesdays and Thursdays. Weekend hours did not change. The library made the change after a survey showed that many residents work late shifts and wanted to visit in the morning.') }),
  q(1, 'PC', T.pcInfer, 'medium', 'It can be inferred from the passage that Mara',
    ['is preparing for possible problems on the trip', 'has never driven across a desert by herself before', 'is planning to stay out in the desert for a week', 'does not trust her sister with her plans'], 0,
    'Extra fuel, extra water and telling someone her route are all precautions in case something goes wrong. Nothing in the passage says it is her first trip or that she will stay a week.',
    { passage: P('asvab-diag-pc-f1-3', 'Desert Drive', 'Mara checked the tire pressure twice, packed two spare fuel cans, and told her sister exactly which route she planned to take across the desert. She also loaded three extra gallons of water, even though the drive was supposed to take only one day.') }),
  q(1, 'PC', T.pcDetail, 'medium', 'According to the passage, when should the lug nuts first be loosened?',
    ['Before the vehicle is raised with the jack', 'Only after the vehicle has been raised with the jack', 'After the spare tire has been put on', 'Before the parking brake has been set'], 0,
    'The second step says to loosen the lug nuts slightly "while the tire is still on the ground," which is before the jack raises the vehicle.',
    { passage: P('asvab-diag-pc-f1-4', 'Changing a Flat', 'To change a flat tire safely, first park on level ground and set the parking brake. Next, loosen the lug nuts slightly while the tire is still on the ground. Then raise the vehicle with the jack, remove the lug nuts and swap the tire. Finally, lower the vehicle and tighten the nuts fully in a star pattern.') }),
  q(1, 'PC', T.pcMain, 'hard', 'The author\'s main purpose is to',
    ['question a popular belief by reviewing the evidence against it', 'prove with one doctor\'s experiment that knuckle cracking is harmless', 'explain why the sound of knuckle cracking bothers other people', 'warn readers about the earliest warning signs of arthritis'], 0,
    'The passage states a common belief, describes evidence against it, and concludes it does not hold up. It specifically says one person is "not proof," so the "prove with one doctor" choice misreads it.',
    { passage: P('asvab-diag-pc-f1-5', 'Knuckle Cracking', 'Many people believe that cracking your knuckles causes arthritis. One doctor tested this idea on himself for more than sixty years by cracking the knuckles of only his left hand. In the end, neither hand had arthritis, and there was no difference between them. A single person is not proof, but larger studies have found the same thing: knuckle cracking may annoy others, but it does not appear to damage the joints.') }),
  q(1, 'PC', T.pcInfer, 'hard', 'The author\'s attitude toward the new policy is best described as',
    ['critical', 'enthusiastic', 'indifferent', 'grateful'], 0,
    'Putting "streamline" in quotation marks signals doubt, and the details (three signatures, waiting days) show the policy made things slower. The author is critical of it.',
    { passage: P('asvab-diag-pc-f1-6', 'The New Policy', 'The company announced its new policy as a way to "streamline" communication. In practice, every request now required three signatures instead of one, and employees waited days for answers that once took minutes.') }),

  q(2, 'PC', T.pcMain, 'easy', 'Which statement best expresses the main idea of the passage?',
    ['The buddy system keeps swimmers safe and accounted for.', 'Instructors prefer to swim alongside a partner during every session.', 'A whistle is used to end each swimming session.', 'Swimmers raise their joined hands to ask the instructor for help.'], 0,
    'The passage explains how partners track each other and how the buddy check lets instructors count pairs and spot trouble: the point is safety and accountability.',
    { passage: P('asvab-diag-pc-f2-1', 'Buddy Check', 'Swimmers in the training pool are assigned a partner for every session. Each partner is responsible for knowing where the other is at all times. When the instructor blows a whistle, partners must quickly find each other and raise their joined hands. This "buddy check" lets instructors count pairs in seconds and spot anyone who may be in trouble.') }),
  q(2, 'PC', T.pcDetail, 'easy', 'According to the passage, fresh produce is handed out the same day because',
    ['it spoils quickly', 'it is the most requested item', 'there is no shelf space for it', 'volunteers sort it before anything else'], 0,
    'The passage says fresh produce is handed out the same day "because it spoils quickly."',
    { passage: P('asvab-diag-pc-f2-2', 'The Food Bank', 'Volunteers at the food bank sort donations into three groups: canned goods, dry goods such as rice and pasta, and fresh produce. Fresh produce is handed out the same day because it spoils quickly. Canned and dry goods are stored on shelves and given out over the following weeks.') }),
  q(2, 'PC', T.pcInfer, 'medium', 'The passage suggests that Luis',
    ['already knew where emergency supplies were kept', 'was afraid of being in the dark', 'had moved into the house only a few days earlier', 'had caused the power outage by overloading a circuit'], 0,
    'He walked "straight" to the right drawer without searching, which shows he already knew where the candle and matches were.',
    { passage: P('asvab-diag-pc-f2-3', 'Lights Out', 'When the power went out, Luis didn\'t bother searching for a flashlight. He walked straight to the kitchen drawer, pulled out a candle and a box of matches, and had light within a minute.') }),
  q(2, 'PC', T.pcDetail, 'medium', 'According to the passage, what happens immediately after the jumpmaster inspects the harnesses?',
    ['Jumpers hook their static lines to the cable.', 'The aircraft door is opened for the jump.', 'The green light comes on near the door.', 'The first jumper exits the aircraft.'], 0,
    'The passage lists the order: inspection, then hooking static lines to the cable, then the door opens, then the green light and the first exit.',
    { passage: P('asvab-diag-pc-f2-4', 'Before the Jump', 'Before a parachute jump, each jumper follows a set routine. First, the jumpmaster inspects every harness. Next, jumpers hook their static lines to a cable inside the aircraft. When the door opens, they stand and shuffle toward it in order. Only after the green light comes on does the first jumper exit.') }),
  q(2, 'PC', T.pcMain, 'hard', 'The passage is mainly about',
    ['how cities now weigh practical costs when choosing street trees', 'why the most beautiful trees always end up costing cities the most money', 'how sidewalks are repaired after tree roots crack them', 'how to water young street trees during a long drought'], 0,
    'The passage contrasts the old approach (looks only) with today\'s (shade, drought tolerance, roots, long-term cost). It never says beautiful trees "always" cost the most; the word "always" overstates it.',
    { passage: P('asvab-diag-pc-f2-5', 'Street Trees', 'City planners once chose street trees mainly for their looks. Today, planners also weigh how much shade a tree gives, how well it handles drought and whether its roots will crack sidewalks. A tree that looks beautiful but needs constant watering may cost a city far more over twenty years than a plainer, tougher species.') }),
  q(2, 'PC', T.pcInfer, 'hard', 'As used in the passage, "panacea" most nearly means',
    ['a cure for everything', 'a careful compromise', 'a costly mistake', 'a temporary fix'], 0,
    'The plan "promised to fix every problem ... at once," and the teacher replies that no single program can do all that. A panacea is something claimed to cure every problem.',
    { passage: P('asvab-diag-pc-f2-6', 'The School Plan', 'Critics called the senator\'s plan a panacea that promised to fix every problem in the state\'s schools at once. "No single program can do all that," one teacher said.') }),

  q(3, 'PC', T.pcMain, 'easy', 'Which statement best expresses the main idea of the passage?',
    ['Routine maintenance prevents bigger repair costs later.', 'Brake pads are the most expensive part of any car to replace.', 'Tire pressure matters only for safety reasons.', 'Engine oil should be changed every single week, no matter what.'], 0,
    'The first and last sentences frame the passage: small maintenance costs now prevent major repair bills later. The other details are examples.',
    { passage: P('asvab-diag-pc-f3-1', 'Small Costs Now', 'Regular vehicle maintenance saves money over time. Changing the oil on schedule protects the engine from wear. Checking tire pressure improves gas mileage and makes tires last longer. Replacing worn brake pads early prevents damage to more expensive parts. A few small costs now can prevent a major repair bill later.') }),
  q(3, 'PC', T.pcDetail, 'easy', 'According to the passage, who can enter the exhibit for free?',
    ['Veterans and children under 12', 'All students with a school ID', 'Anyone who comes on March 4', 'Members of a local flying club'], 0,
    'The last sentence says admission is free for veterans and children under 12.',
    { passage: P('asvab-diag-pc-f3-2', 'Early Aviation Exhibit', 'The museum\'s new exhibit on early aviation opens on March 4. It features a full-size copy of a 1903 glider, photographs of the first airmail flights and a flight simulator that visitors can try. Admission is free for veterans and children under 12.') }),
  q(3, 'PC', T.pcInfer, 'medium', 'Which conclusion is best supported by the passage?',
    ['Strong afternoon sun was stressing the plants.', 'Dana was not watering the plants enough.', 'The tomatoes needed a different kind of soil.', 'The pots on the patio were much too small.'], 0,
    'Dana kept the same dawn watering; the only change was moving the pots to afternoon shade, and that fixed the drooping. So the afternoon sun was the problem.',
    { passage: P('asvab-diag-pc-f3-3', 'Drooping Tomatoes', 'Every morning for a month, Dana\'s tomato plants drooped by noon, even though she watered them at dawn. After she moved the pots from the sunny patio to a spot that got afternoon shade, the plants stayed upright all day. She kept watering them at dawn, just as before.') }),
  q(3, 'PC', T.pcDetail, 'medium', 'According to the passage, why are tall objects struck by lightning more often?',
    ['Lightning tends to take the shortest path to the ground.', 'Tall objects are usually built with steel frames that attract it.', 'Objects struck once are likely to be struck again.', 'Tall objects pull storm clouds toward themselves.'], 0,
    'The passage gives the reason directly: lightning tends to take the shortest path to the ground, and tall objects shorten that path.',
    { passage: P('asvab-diag-pc-f3-4', 'Lightning', 'Lightning can strike the same place more than once. Tall, pointed objects such as towers and lone trees are struck most often because lightning tends to take the shortest path to the ground. One well-known skyscraper in New York is hit about two dozen times in a typical year.') }),
  q(3, 'PC', T.pcMain, 'hard', 'The author\'s primary purpose is to',
    ['correct a mistaken belief about the best way to practice', 'describe how the brain stores new memories over time', 'argue that practicing a skill is usually a waste of time', 'compare how quickly different skills can be learned'], 0,
    'The passage opens with what "some people assume" and then says research "points in a different direction": short, spaced sessions beat one long one. Its purpose is to correct that belief, not to say practice is useless.',
    { passage: P('asvab-diag-pc-f3-5', 'Spaced Practice', 'Some people assume that the fastest way to learn a skill is to practice for hours without stopping. Research on memory points in a different direction. Short practice sessions spread over several days tend to produce better long-term recall than one long session, even when the total practice time is the same.') }),
  q(3, 'PC', T.pcInfer, 'hard', 'The writer\'s tone is best described as',
    ['disappointed', 'admiring', 'frightened', 'apologetic'], 0,
    'The writer quotes the brochure\'s promises ("cozy," "rustic charm") and then lists what was actually found: a cramped room, a smoky stove and a leaky roof. The contrast shows disappointment.',
    { passage: P('asvab-diag-pc-f3-6', 'The Cabin', 'The brochure promised a "cozy" cabin with "rustic charm." We found a single room barely large enough for the bunk bed, a woodstove that filled the cabin with smoke and a roof that let in the rain.') }),
]

/* ================================================================== */
/*  Mathematics Knowledge (10 per form: 2 per topic; 3E / 4M / 3H)     */
/* ================================================================== */
const MK: Draft[] = [
  q(1, 'MK', T.mkNum, 'easy', 'What is the value of $\\sqrt{81} + 2^3$?', ['17', '15', '14', '25'], 0,
    '$\\sqrt{81} = 9$ and $2^3 = 2 \\times 2 \\times 2 = 8$, so the sum is 17. Reading $2^3$ as $2 \\times 3 = 6$ gives the trap 15.'),
  q(1, 'MK', T.mkNum, 'hard', 'What is $(3 \\times 10^4)(4 \\times 10^{-2})$ written in scientific notation?', ['$1.2 \\times 10^3$', '$1.2 \\times 10^2$', '$12 \\times 10^{-8}$', '$7 \\times 10^2$'], 0,
    'Multiply the numbers and add the exponents: $3 \\times 4 = 12$ and $10^{4 + (-2)} = 10^2$, giving $12 \\times 10^2 = 1.2 \\times 10^3$.'),
  q(1, 'MK', T.mkEq, 'easy', 'If $4x - 7 = 21$, what is $x$?', ['7', '3.5', '6', '8'], 0,
    'Add 7 to both sides: $4x = 28$. Divide by 4: $x = 7$.'),
  q(1, 'MK', T.mkEq, 'medium', 'Solve the inequality $-3x + 5 > 17$.', ['$x < -4$', '$x > -4$', '$x < 4$', '$x > 4$'], 0,
    'Subtract 5: $-3x > 12$. Dividing by a negative number flips the inequality sign: $x < -4$.'),
  q(1, 'MK', T.mkExpr, 'medium', 'Factor $x^2 - 49$.', ['$(x - 7)(x + 7)$', '$(x - 7)^2$', '$(x + 7)^2$', '$(x - 49)(x + 1)$'], 0,
    'This is a difference of squares, $a^2 - b^2 = (a - b)(a + b)$, with $b = 7$.'),
  q(1, 'MK', T.mkExpr, 'hard', 'What are the solutions of $x^2 - 5x - 14 = 0$?', ['7 and −2', '−7 and 2', '7 and 2', '−7 and −2'], 0,
    'Find two numbers that multiply to −14 and add to −5: −7 and 2. So $(x - 7)(x + 2) = 0$, giving $x = 7$ or $x = -2$.'),
  q(1, 'MK', T.mkShapes, 'easy', 'Two angles of a triangle measure 50° and 65°. What is the measure of the third angle?', ['65°', '75°', '55°', '115°'], 0,
    'The angles of a triangle add to 180°: 180 − 50 − 65 = 65°.'),
  q(1, 'MK', T.mkShapes, 'medium', 'An exterior angle of a triangle measures 110°. One of the two interior angles not next to it measures 45°. What is the measure of the other one?', ['65°', '70°', '25°', '135°'], 0,
    'An exterior angle equals the sum of the two interior angles that are not next to it: 110 − 45 = 65°. (70° is the interior angle next to the exterior angle.)'),
  q(1, 'MK', T.mkMeas, 'medium', 'A box is 5 inches long, 4 inches wide and 3 inches tall. What is its volume?', ['60 cubic inches', '47 cubic inches', '12 cubic inches', '94 cubic inches'], 0,
    'Volume = length × width × height = 5 × 4 × 3 = 60 cubic inches. (94 is the surface area, and 12 is the sum of the edges given.)'),
  q(1, 'MK', T.mkMeas, 'hard', 'What is the distance between the points (1, 2) and (7, 10)?', ['10', '14', '8', '12'], 0,
    'The horizontal change is 6 and the vertical change is 8. By the Pythagorean theorem, $d = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$. Adding 6 + 8 gives the trap 14.'),

  q(2, 'MK', T.mkNum, 'easy', 'Which of these numbers is prime?', ['29', '21', '27', '33'], 0,
    'A prime number has exactly two factors, 1 and itself. 29 is prime; 21 = 3 × 7, 27 = 3 × 9 and 33 = 3 × 11.'),
  q(2, 'MK', T.mkNum, 'medium', 'Simplify $\\sqrt{108}$.', ['$6\\sqrt{3}$', '$3\\sqrt{6}$', '$36\\sqrt{3}$', '$12\\sqrt{3}$'], 0,
    '$108 = 36 \\times 3$, and $\\sqrt{36} = 6$, so $\\sqrt{108} = 6\\sqrt{3}$.'),
  q(2, 'MK', T.mkEq, 'easy', 'If $3(x + 2) = 24$, what is $x$?', ['6', '8', '7', '10'], 0,
    'Divide both sides by 3: $x + 2 = 8$. Subtract 2: $x = 6$.'),
  q(2, 'MK', T.mkEq, 'hard', 'If $5 - 2(x - 3) = 3x - 4$, what is $x$?', ['3', '1', '15', '−3'], 0,
    'Distribute: $5 - 2x + 6 = 3x - 4$, so $11 - 2x = 3x - 4$. Add $2x$ and 4 to both sides: $15 = 5x$, so $x = 3$.'),
  q(2, 'MK', T.mkExpr, 'medium', 'Simplify $3a + 5b - a + 2b$.', ['$2a + 7b$', '$4a + 7b$', '$2a + 3b$', '$9ab$'], 0,
    'Combine like terms: $3a - a = 2a$ and $5b + 2b = 7b$. Unlike terms ($a$ and $b$) cannot be combined into $9ab$.'),
  q(2, 'MK', T.mkExpr, 'hard', 'Multiply $(2x - 3)(x + 4)$.', ['$2x^2 + 5x - 12$', '$2x^2 - 5x - 12$', '$2x^2 + 11x - 12$', '$2x^2 + 5x + 12$'], 0,
    'FOIL: $2x \\cdot x = 2x^2$, $2x \\cdot 4 = 8x$, $-3 \\cdot x = -3x$, $-3 \\cdot 4 = -12$. Combine: $2x^2 + 5x - 12$.'),
  q(2, 'MK', T.mkShapes, 'medium', 'The legs of a right triangle are 9 and 12. How long is the hypotenuse?', ['15', '21', '16', '18'], 0,
    '$c^2 = 9^2 + 12^2 = 81 + 144 = 225$, so $c = 15$. Simply adding the legs (21) is a common mistake.'),
  q(2, 'MK', T.mkShapes, 'hard', 'Two angles are supplementary. The larger angle is 40° more than three times the smaller angle. What is the measure of the larger angle?', ['145°', '35°', '140°', '125°'], 0,
    'Supplementary angles add to 180°. Let the smaller be $x$: $x + (3x + 40) = 180$, so $4x = 140$ and $x = 35$. The larger angle is $3(35) + 40 = 145°$. (35° is the smaller angle.)'),
  q(2, 'MK', T.mkMeas, 'easy', 'A circle has a radius of 5. What is its area?', ['$25\\pi$', '$10\\pi$', '$5\\pi$', '$100\\pi$'], 0,
    'Area $= \\pi r^2 = \\pi(5^2) = 25\\pi$. $10\\pi$ is the circumference.'),
  q(2, 'MK', T.mkMeas, 'medium', 'What is the slope of the line through the points (−2, 3) and (4, 6)?', ['1/2', '2', '−1/2', '3/2'], 0,
    'Slope = rise ÷ run = (6 − 3) ÷ (4 − (−2)) = 3 ÷ 6 = 1/2. Flipping the fraction gives the trap 2.'),

  q(3, 'MK', T.mkNum, 'easy', 'What is the value of $(-4)(-3) + (-5)$?', ['7', '−17', '17', '−7'], 0,
    'A negative times a negative is positive: $(-4)(-3) = 12$. Then $12 + (-5) = 7$.'),
  q(3, 'MK', T.mkNum, 'hard', 'What is the greatest common factor of 84 and 126?', ['42', '14', '21', '6'], 0,
    '$84 = 2^2 \\times 3 \\times 7$ and $126 = 2 \\times 3^2 \\times 7$. The shared factors are $2 \\times 3 \\times 7 = 42$. 14, 21 and 6 are common factors, but not the greatest.'),
  q(3, 'MK', T.mkEq, 'easy', 'If $\\frac{x}{4} + 3 = 8$, what is $x$?', ['20', '44', '5', '2'], 0,
    'Subtract 3: $\\frac{x}{4} = 5$. Multiply by 4: $x = 20$.'),
  q(3, 'MK', T.mkEq, 'medium', 'Which value of $x$ makes both $2x - 3 \\le 7$ and $x > 3$ true?', ['5', '3', '6', '2'], 0,
    '$2x - 3 \\le 7$ gives $2x \\le 10$, so $x \\le 5$. Combined with $x > 3$, $x$ must be more than 3 and at most 5. Only 5 works (3 is not greater than 3).'),
  q(3, 'MK', T.mkExpr, 'medium', 'Factor $x^2 + 7x + 12$.', ['$(x + 3)(x + 4)$', '$(x + 2)(x + 6)$', '$(x + 1)(x + 12)$', '$(x - 3)(x - 4)$'], 0,
    'Find two numbers that multiply to 12 and add to 7: 3 and 4. All the choices multiply to 12, but only 3 + 4 = 7.'),
  q(3, 'MK', T.mkExpr, 'hard', 'If $x = -2$, what is the value of $3x^2 - 4x + 1$?', ['21', '5', '45', '−3'], 0,
    '$3(-2)^2 = 3(4) = 12$; $-4(-2) = 8$; so $12 + 8 + 1 = 21$. Squaring $3x$ instead of $x$ gives 45; dropping a negative sign gives 5 or −3.'),
  q(3, 'MK', T.mkShapes, 'easy', 'An angle measures 35°. What is the measure of its complement?', ['55°', '145°', '65°', '35°'], 0,
    'Complementary angles add to 90°: 90 − 35 = 55°. 145° is the supplement (adds to 180°).'),
  q(3, 'MK', T.mkShapes, 'medium', 'The vertex angle of an isosceles triangle measures 40°. What is the measure of each base angle?', ['70°', '40°', '140°', '50°'], 0,
    'The base angles are equal and the three angles add to 180°: (180 − 40) ÷ 2 = 70°.'),
  q(3, 'MK', T.mkMeas, 'medium', 'A rectangle has a perimeter of 36 feet and a length of 10 feet. What is its area?', ['80 square feet', '60 square feet', '100 square feet', '26 square feet'], 0,
    'Perimeter = 2(length + width), so 36 = 2(10 + w), giving w = 8. Area = 10 × 8 = 80 square feet.'),
  q(3, 'MK', T.mkMeas, 'hard', 'A cylinder has a radius of 3 and a height of 4. What is its volume?', ['$36\\pi$', '$12\\pi$', '$24\\pi$', '$48\\pi$'], 0,
    'Volume $= \\pi r^2 h = \\pi(3^2)(4) = 36\\pi$. Using $2\\pi r h$ (side surface area) gives $24\\pi$.'),
]

/* ================================================================== */
/*  Electronics Information (2 per form)                               */
/* ================================================================== */
const EI: Draft[] = [
  q(1, 'EI', T.eiBasics, 'medium', 'A 12-volt battery is connected across a 4-ohm resistor. How much current flows through the resistor?', ['3 amperes', '48 amperes', '0.33 ampere', '16 amperes'], 0,
    'Ohm\'s law: I = V ÷ R = 12 ÷ 4 = 3 amperes. Multiplying (48) or dividing the wrong way (0.33) are the common slips.'),
  q(1, 'EI', T.eiCircuits, 'hard', 'Two 6-ohm resistors are connected in parallel. What is their total (equivalent) resistance?', ['3 ohms', '12 ohms', '6 ohms', '36 ohms'], 0,
    'For two equal resistors in parallel, the total is half of one: 6 ÷ 2 = 3 ohms. (In general 1/R = 1/6 + 1/6 = 1/3.) Adding them (12 ohms) is the rule for series, not parallel.'),

  q(2, 'EI', T.eiComp, 'easy', 'Which component is designed to store electric charge?', ['Capacitor', 'Resistor', 'Diode', 'Fuse'], 0,
    'A capacitor stores charge on two plates separated by an insulator. A resistor limits current, a diode lets current flow one way and a fuse protects a circuit by melting.'),
  q(2, 'EI', T.eiCircuits, 'medium', 'A 60-watt lamp runs on a 120-volt household circuit. How much current does it draw?', ['0.5 ampere', '2 amperes', '180 amperes', '7,200 amperes'], 0,
    'Power = voltage × current, so I = P ÷ V = 60 ÷ 120 = 0.5 ampere.'),

  q(3, 'EI', T.eiBasics, 'easy', 'Electrical resistance is measured in', ['ohms', 'volts', 'amperes', 'watts'], 0,
    'Resistance is measured in ohms (Ω). Volts measure voltage, amperes measure current and watts measure power.'),
  q(3, 'EI', T.eiComp, 'hard', 'What is the main job of a diode in a circuit?', ['It lets current flow in only one direction.', 'It stores energy in a magnetic field.', 'It raises or lowers an AC voltage.', 'It limits the current by turning some of it into heat.'], 0,
    'A diode is a one-way valve for current. Storing energy in a magnetic field describes an inductor, changing AC voltage describes a transformer and limiting current as heat describes a resistor.'),
]

/* ================================================================== */
/*  Auto Information (2 per form)                                      */
/* ================================================================== */
const AI: Draft[] = [
  q(1, 'AI', T.aiEngine, 'medium', 'In a four-stroke gasoline engine, during which stroke is the fuel-air mixture squeezed while both valves are closed?', ['Compression', 'Intake', 'Exhaust', 'Power'], 0,
    'The strokes run intake, compression, power, exhaust. On the compression stroke the piston rises with both valves closed and squeezes the mixture before the spark fires it.'),
  q(1, 'AI', T.aiSystems, 'medium', 'In a car\'s cooling system, the thermostat controls', ['coolant flow to the radiator', 'fuel flow to the engine', 'air flow from the air conditioner', 'oil pressure in the engine'], 0,
    'The thermostat stays closed while the engine warms up and opens to send coolant to the radiator once the engine reaches operating temperature.'),

  q(2, 'AI', T.aiDrive, 'easy', 'A car pulls to one side only when the brakes are applied. What is the most likely cause?', ['A brake on one side is sticking or worn', 'The fuel tank is nearly empty', 'One spark plug is misfiring under heavy load', 'The gas cap is loose'], 0,
    'Pulling while braking means the brakes on one side are gripping harder than the other, which points to a sticking caliper, worn pads or a fluid leak on one side.'),
  q(2, 'AI', T.aiSystems, 'hard', 'Which part turns some of the engine\'s mechanical energy into electrical energy to recharge the battery while the engine runs?', ['Alternator', 'Starter motor', 'Ignition coil', 'Distributor'], 0,
    'The belt-driven alternator generates electricity while the engine runs. The starter uses battery power to crank the engine; the coil and distributor deliver spark.'),

  q(3, 'AI', T.aiEngine, 'hard', 'Blue-gray smoke coming from a car\'s exhaust usually means the engine is', ['burning oil', 'burning coolant', 'running too rich', 'warming up normally'], 0,
    'Blue-gray smoke means oil is getting into the combustion chamber and burning, often past worn rings or valve seals. Coolant burning gives white smoke, and a rich mixture gives black smoke.'),
  q(3, 'AI', T.aiDrive, 'medium', 'What is the purpose of a vehicle\'s differential?', ['It lets the drive wheels turn at different speeds.', 'It changes gears as the vehicle speeds up.', 'It slows the wheels when the brake pedal is pressed.', 'It connects the engine to the transmission.'], 0,
    'In a turn, the outside wheel travels farther than the inside wheel. The differential lets the drive wheels turn at different speeds while both still get power.'),
]

/* ================================================================== */
/*  Shop Information (2 per form)                                      */
/* ================================================================== */
const SI: Draft[] = [
  q(1, 'SI', T.siTools, 'medium', 'Which tool is best for tightening a hex nut without rounding off its corners?', ['Box-end wrench', 'Pipe wrench', 'Slip-joint pliers', 'Claw hammer'], 0,
    'A box-end wrench wraps around all six sides of the nut, so it grips firmly without slipping. Pipe wrenches and pliers have toothed jaws that can chew up the corners.'),
  q(1, 'SI', T.siMat, 'medium', 'Which nail has a small head designed to be driven just below the surface of the wood and hidden?', ['Finishing nail', 'Common nail', 'Roofing nail', 'Duplex nail'], 0,
    'Finishing nails have small heads that are set below the surface and covered with filler for trim work. Roofing nails have wide heads, and duplex nails have two heads so they can be pulled out easily.'),

  q(2, 'SI', T.siTools, 'easy', 'A hacksaw is designed mainly for cutting', ['metal', 'curves in thin wood', 'drywall', 'concrete'], 0,
    'A hacksaw has a fine-toothed blade held tight in a frame, made for cutting metal such as pipe, bolts and rod.'),
  q(2, 'SI', T.siMat, 'hard', 'Which process joins two pieces of steel by melting the pieces themselves so they fuse together?', ['Welding', 'Soldering', 'Brazing', 'Riveting'], 0,
    'Welding melts the base metal so the pieces fuse into one. Soldering and brazing melt only a filler metal, and riveting is a mechanical fastener with no melting.'),

  q(3, 'SI', T.siTools, 'hard', 'A plumb bob is used to find', ['a true vertical line', 'a level horizontal line', 'the depth of a hole', 'a 45-degree angle'], 0,
    'A plumb bob is a pointed weight on a string. Gravity pulls the string into a perfectly vertical (plumb) line.'),
  q(3, 'SI', T.siMat, 'easy', 'Which fastener has threads and is used with a nut?', ['Bolt', 'Nail', 'Rivet', 'Staple'], 0,
    'A bolt is threaded and is tightened with a nut on the other side. Nails, rivets and staples have no threads.'),
]

/* ================================================================== */
/*  Mechanical Comprehension (3 per form: one per topic)               */
/* ================================================================== */
const MC: Draft[] = [
  q(1, 'MC', T.mcForces, 'easy', 'How much work is done lifting a 50-pound box straight up 4 feet?', ['200 foot-pounds', '54 foot-pounds', '12.5 foot-pounds', '46 foot-pounds'], 0,
    'Work = force × distance = 50 pounds × 4 feet = 200 foot-pounds.'),
  q(1, 'MC', T.mcMachines, 'medium', 'A 120-pound load sits on a lever 2 feet from the fulcrum. How much effort is needed on the other side, 6 feet from the fulcrum, to balance the load?', ['40 pounds', '360 pounds', '60 pounds', '20 pounds'], 0,
    'For balance, load × load distance = effort × effort distance: 120 × 2 = E × 6, so E = 240 ÷ 6 = 40 pounds. The longer effort arm means less effort.'),
  q(1, 'MC', T.mcGears, 'hard', 'Gear A has 20 teeth and drives gear B, which has 60 teeth. If gear A turns at 90 revolutions per minute, how fast does gear B turn?', ['30 revolutions per minute', '270 revolutions per minute', '60 revolutions per minute', '45 revolutions per minute'], 0,
    'Teeth × speed is the same for meshed gears: 20 × 90 = 60 × speed, so gear B turns at 1,800 ÷ 60 = 30 rpm. The larger gear always turns more slowly.'),

  q(2, 'MC', T.mcForces, 'hard', 'Ball X has a mass of 2 kilograms and moves at 4 meters per second. Ball Y has a mass of 1 kilogram and moves at 8 meters per second. Which statement is true?', ['Ball Y has more kinetic energy.', 'Ball X has more kinetic energy.', 'Both have the same kinetic energy.', 'It cannot be determined from this information.'], 0,
    'Kinetic energy = ½mv². Ball X: ½(2)(4²) = 16 joules. Ball Y: ½(1)(8²) = 32 joules. Speed is squared, so doubling speed matters more than doubling mass.'),
  q(2, 'MC', T.mcMachines, 'medium', 'A load of 200 pounds hangs from a single movable pulley that is held up by two rope segments. Ignoring friction, how much force must be applied to the free end of the rope to lift the load?', ['100 pounds', '200 pounds', '50 pounds', '400 pounds'], 0,
    'Two rope segments share the load equally, so each carries 200 ÷ 2 = 100 pounds. That is the force needed on the free end (mechanical advantage 2).'),
  q(2, 'MC', T.mcGears, 'medium', 'In a hydraulic jack, the small piston has an area of 2 square inches and the large piston has an area of 20 square inches. If 50 pounds of force is applied to the small piston, how much force does the large piston exert?', ['500 pounds', '50 pounds', '5 pounds', '1,000 pounds'], 0,
    'Pressure is the same throughout the fluid: 50 ÷ 2 = 25 pounds per square inch. On the large piston, 25 × 20 = 500 pounds. The force grows by the ratio of the areas (10 times).'),

  q(3, 'MC', T.mcForces, 'easy', 'A box slides to the right across a rough floor. In which direction does the friction force on the box act?', ['To the left', 'To the right', 'Straight up', 'Straight down'], 0,
    'Friction always opposes the motion of sliding surfaces. The box moves right, so friction pushes left.'),
  q(3, 'MC', T.mcMachines, 'hard', 'A ramp is 12 feet long and rises 3 feet. Ignoring friction, how much force is needed to push a 400-pound crate up the ramp?', ['100 pounds', '1,600 pounds', '133 pounds', '300 pounds'], 0,
    'Work in = work out: F × 12 = 400 × 3, so F = 1,200 ÷ 12 = 100 pounds. The ramp is 4 times longer than it is tall, so it cuts the force to one-fourth.'),
  q(3, 'MC', T.mcGears, 'medium', 'A uniform beam rests on two supports, one at each end. A 900-pound load sits one-third of the way from the left support. How much of the load does the left support carry? (Ignore the beam\'s own weight.)', ['600 pounds', '300 pounds', '450 pounds', '900 pounds'], 0,
    'The support closer to a load carries more of it. Balancing turning effects about the right support: left force × full length = 900 × (2/3 of the length), so the left support carries 600 pounds and the right carries 300.'),
]

/* ================================================================== */
/*  Assembling Objects (2 per form: one connector, one shape item)     */
/* ================================================================== */
const AO_PASSAGE = (id: string, svg: string): AsvabDiagnosticPassage => ({ id, title: 'Assembling Objects', body: 'Compare the Parts box with Figures A, B, C and D.', svg })

const AO: Draft[] = [
  q(1, 'AO', T.aoConnect, 'medium', AO_CONNECT_STEM, FIGURES, 2,
    'Point A is the center of the circle and point B is the top-left corner of the square. Figure C joins exactly those two points. Figure A ends at the square\'s center, Figure B starts on the circle\'s edge, and Figure D ends at the square\'s bottom-left corner.',
    { passage: AO_PASSAGE('asvab-diag-ao-f1-1', AO_F1_CONNECT), noShuffle: true }),
  q(1, 'AO', T.aoShapes, 'easy', AO_SHAPE_STEM, FIGURES, 0,
    'The parts are one square and one half-circle as wide as the square. Figure A puts them together. Figure B uses a quarter-circle, Figure C uses a tall rectangle instead of a square, and Figure D uses a triangle.',
    { passage: AO_PASSAGE('asvab-diag-ao-f1-2', AO_F1_SHAPE), noShuffle: true }),

  q(2, 'AO', T.aoConnect, 'hard', AO_CONNECT_STEM, FIGURES, 1,
    'Point A is the top point (apex) of the triangle and point B is the middle of the rectangle\'s long top side. Figure B joins exactly those points. Figure A starts at the middle of the triangle\'s base, Figure C ends at the rectangle\'s corner, and Figure D starts at a bottom corner of the triangle.',
    { passage: AO_PASSAGE('asvab-diag-ao-f2-1', AO_F2_CONNECT), noShuffle: true }),
  q(2, 'AO', T.aoShapes, 'medium', AO_SHAPE_STEM, FIGURES, 3,
    'The parts are one rectangle and two matching right triangles as tall as the rectangle. Figure D uses all three. Figure A is missing a triangle, Figure B uses a triangle taller than the given ones, and Figure C adds an extra square.',
    { passage: AO_PASSAGE('asvab-diag-ao-f2-2', AO_F2_SHAPE), noShuffle: true }),

  q(3, 'AO', T.aoConnect, 'medium', AO_CONNECT_STEM, FIGURES, 3,
    'Point A is the middle of one side of the hexagon and point B is on the edge of the circle. Figure D joins those points. Figure A starts at a corner of the hexagon, Figure B ends at the circle\'s center, and Figure C starts at the hexagon\'s center.',
    { passage: AO_PASSAGE('asvab-diag-ao-f3-1', AO_F3_CONNECT), noShuffle: true }),
  q(3, 'AO', T.aoShapes, 'hard', AO_SHAPE_STEM, FIGURES, 1,
    'The parts are a half-circle and two quarter-circles of the same radius, which together make one full circle cut by a diameter and one radius. Figure B shows exactly that. Figure A cuts the circle into three equal thirds, Figure C has four pieces, and Figure D is missing a quarter.',
    { passage: AO_PASSAGE('asvab-diag-ao-f3-2', AO_F3_SHAPE), noShuffle: true }),
]

/* ================================================================== */
/*  Assembly                                                           */
/* ================================================================== */

const BY_SUBTEST: Record<AsvabSubtestId, Draft[]> = { GS, AR, WK, PC, MK, EI, AI, SI, MC, AO }

/** Every diagnostic item with a stable id: asvab-diag-f<form>-<subtest>-<n>. */
export const ASVAB_DIAGNOSTIC_QUESTIONS: AsvabDiagnosticQuestion[] = DIAGNOSTIC_BLUEPRINT.flatMap(({ subtest }) => {
  const counters = new Map<number, number>()
  return BY_SUBTEST[subtest].map((d) => {
    const n = (counters.get(d.form) ?? 0) + 1
    counters.set(d.form, n)
    return { ...d, id: `asvab-diag-f${d.form}-${subtest.toLowerCase()}-${n}`, domain: subtest }
  })
})

const SUBTEST_NAME: Record<AsvabSubtestId, string> = Object.fromEntries(ASVAB_SUBTESTS.map((s) => [s.id, s.name])) as Record<AsvabSubtestId, string>

/** domainId -> display name, for DiagnosticReview and the teacher report. */
export const ASVAB_DIAGNOSTIC_DOMAIN_NAMES: Record<string, string> = Object.fromEntries(
  DIAGNOSTIC_BLUEPRINT.map(({ subtest }) => [subtest, `${SUBTEST_NAME[subtest]} (${subtest})`]),
)

export interface AsvabDiagnosticTestData {
  form: number
  questions: AsvabDiagnosticQuestion[]
  totalQuestions: number
  timeLimitMinutes: number
}

/** The fixed items of one form, grouped by subtest in administration order. */
export function generateAsvabDiagnostic(form: number): AsvabDiagnosticTestData {
  const f = Math.min(TOTAL_FORMS, Math.max(1, Math.round(form) || 1))
  const questions = DIAGNOSTIC_BLUEPRINT.flatMap(({ subtest }) =>
    ASVAB_DIAGNOSTIC_QUESTIONS.filter((x) => x.form === f && x.subtest === subtest).map((x) => ({ ...x, options: [...x.options] })),
  )
  return { form: f, questions, totalQuestions: questions.length, timeLimitMinutes: ASVAB_DIAGNOSTIC_TIME_LIMIT_MINUTES }
}

/** Next form in rotation: 1 -> 2 -> 3 -> 1 (forms the student has not seen come first). */
export function pickNextForm(previousForms: number[]): number {
  const valid = previousForms.filter((f) => Number.isInteger(f) && f >= 1 && f <= TOTAL_FORMS)
  for (let f = 1; f <= TOTAL_FORMS; f++) if (!valid.includes(f)) return f
  const last = valid[valid.length - 1]
  return last >= TOTAL_FORMS ? 1 : last + 1
}

/* ================================================================== */
/*  Scoring                                                            */
/* ================================================================== */

export interface AsvabSubtestResult {
  domainId: AsvabSubtestId
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
  afqt: boolean
  /** Estimated standard score (mean 50, SD 10) with its window. */
  standardScore: { score: number; low: number; high: number }
}

export interface AsvabRecommendedTopic {
  slug: string
  name: string
  domainId: AsvabSubtestId
  priority: 'high' | 'medium'
  missed: number
}

export interface AsvabDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  domains: AsvabSubtestResult[]
  /** AFQT ESTIMATE: percentile point, window and category. */
  afqt: {
    percentile: number
    low: number
    high: number
    category: AfqtCategoryId
    categoryLow: AfqtCategoryId
    categoryHigh: AfqtCategoryId
    raw: number
    ve: number
  }
  /** Same as afqt.percentile / {low, high}: flat copies for trend rows and summaries. */
  estimatedAfqt: number
  afqtRange: { low: number; high: number }
  /** Shown by the shared attempt summaries (family 'other'). */
  estimatedLevel: string
  lineScores: LineScoreEstimate[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: AsvabRecommendedTopic[]
}

const AFQT_IDS: AfqtSubtestId[] = ['WK', 'PC', 'AR', 'MK']
const MAX_RECOMMENDATIONS = 6

/** How much a missed item costs the AFQT: VE counts twice, so WK and PC weigh most. */
function topicWeight(subtest: AsvabSubtestId): number {
  if (subtest === 'WK' || subtest === 'PC') return 2
  if (subtest === 'AR' || subtest === 'MK') return 1.6
  return 1
}

/**
 * Score a sitting. `answers[i]` is the option index chosen for questions[i]
 * (in the order the questions were shown, after any option shuffle), or
 * null/undefined when skipped.
 */
export function scoreAsvabDiagnostic(
  form: number,
  questions: AsvabDiagnosticQuestion[],
  answers: (number | null | undefined)[] | Record<number, number>,
): AsvabDiagnosticResults {
  const pick = (i: number): number | null => {
    const a = Array.isArray(answers) ? answers[i] : answers[i]
    return typeof a === 'number' ? a : null
  }
  const isRight = (i: number) => pick(i) === questions[i].correctAnswer

  const estimates: Partial<Record<AsvabSubtestId, StandardScoreEstimate>> = {}
  const domains: AsvabSubtestResult[] = []
  for (const { subtest } of DIAGNOSTIC_BLUEPRINT) {
    const idx = questions.map((x, i) => (x.subtest === subtest ? i : -1)).filter((i) => i >= 0)
    if (idx.length === 0) continue
    const correct = idx.filter(isRight).length
    const total = idx.length
    const percentage = Math.round((correct / total) * 100)
    const est = estimateStandardScore(correct, total)
    estimates[subtest] = est
    domains.push({
      domainId: subtest,
      domainName: ASVAB_DIAGNOSTIC_DOMAIN_NAMES[subtest],
      correct,
      total,
      percentage,
      level: percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak',
      afqt: AFQT_IDS.includes(subtest as AfqtSubtestId),
      standardScore: { score: est.score, low: est.low, high: est.high },
    })
  }

  const afqtEst = estimateAfqtFromEstimates({
    WK: estimates.WK ?? estimateStandardScore(0, 0),
    PC: estimates.PC ?? estimateStandardScore(0, 0),
    AR: estimates.AR ?? estimateStandardScore(0, 0),
    MK: estimates.MK ?? estimateStandardScore(0, 0),
  })

  const totalCorrect = domains.reduce((n, d) => n + d.correct, 0)
  const totalQuestions = domains.reduce((n, d) => n + d.total, 0)

  // Recommendations: rank every missed topic by (misses × AFQT weight); a
  // topic is high priority when its subtest is weak or it is an AFQT topic
  // missed more than once.
  const misses = new Map<string, { subtest: AsvabSubtestId; missed: number; total: number }>()
  questions.forEach((x, i) => {
    const m = misses.get(x.topicSlug) ?? { subtest: x.subtest, missed: 0, total: 0 }
    m.total++
    if (!isRight(i)) m.missed++
    misses.set(x.topicSlug, m)
  })
  const levelOf = (s: AsvabSubtestId) => domains.find((d) => d.domainId === s)?.level ?? 'moderate'
  const recommendedTopics: AsvabRecommendedTopic[] = [...misses.entries()]
    .filter(([, m]) => m.missed > 0)
    .map(([slug, m]) => ({ slug, m, score: m.missed * topicWeight(m.subtest) + m.missed / m.total }))
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RECOMMENDATIONS)
    .map(({ slug, m }) => ({
      slug,
      name: ASVAB_TOPIC_TITLES[slug] ?? slug,
      domainId: m.subtest,
      priority: levelOf(m.subtest) === 'weak' || (AFQT_IDS.includes(m.subtest as AfqtSubtestId) && m.missed >= 2) ? 'high' : 'medium',
      missed: m.missed,
    }))

  const rangeText = afqtEst.low === afqtEst.high ? `${afqtEst.percentile}` : `${afqtEst.low}–${afqtEst.high}`
  return {
    form,
    totalCorrect,
    totalQuestions,
    percentage: totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0,
    domains,
    afqt: {
      percentile: afqtEst.percentile,
      low: afqtEst.low,
      high: afqtEst.high,
      category: afqtEst.category,
      categoryLow: afqtEst.categoryRange.low,
      categoryHigh: afqtEst.categoryRange.high,
      raw: afqtEst.raw,
      ve: afqtEst.ve,
    },
    estimatedAfqt: afqtEst.percentile,
    afqtRange: { low: afqtEst.low, high: afqtEst.high },
    estimatedLevel: `AFQT ${rangeText} (estimate, Category ${afqtEst.category})`,
    lineScores: estimateLineScores(estimates),
    weakAreas: domains.filter((d) => d.level === 'weak').map((d) => d.domainName),
    moderateAreas: domains.filter((d) => d.level === 'moderate').map((d) => d.domainName),
    strengths: domains.filter((d) => d.level === 'strong').map((d) => d.domainName),
    recommendedTopics,
  }
}
