/**
 * Every AP diagnostic generator and scorer, keyed by the course slug used in
 * tests/fixtures/ap-lesson-topic-slugs.json. Shared by the recommendation
 * guard test so a new AP diagnostic is one row here.
 */
import * as aas from '@/data/ap-african-american-studies-diagnostic'
import * as bio from '@/data/ap-biology-diagnostic'
import * as calcab from '@/data/ap-calculus-ab-diagnostic'
import * as calcbc from '@/data/ap-calculus-bc-diagnostic'
import * as chem from '@/data/ap-chemistry-diagnostic'
import * as csa from '@/data/ap-csa-diagnostic'
import * as csp from '@/data/ap-csp-diagnostic'
import * as englang from '@/data/ap-english-lang-diagnostic'
import * as englit from '@/data/ap-english-lit-diagnostic'
import * as apes from '@/data/ap-enviro-diagnostic'
import * as hg from '@/data/ap-human-geography-diagnostic'
import * as macro from '@/data/ap-macro-diagnostic'
import * as micro from '@/data/ap-micro-diagnostic'
import * as phys1 from '@/data/ap-physics-1-diagnostic'
import * as phys2 from '@/data/ap-physics-2-diagnostic'
import * as pcem from '@/data/ap-physics-c-em-diagnostic'
import * as pcmech from '@/data/ap-physics-c-mechanics-diagnostic'
import * as precalc from '@/data/ap-precalculus-diagnostic'
import * as psych from '@/data/ap-psychology-diagnostic'
import * as stats from '@/data/ap-statistics-diagnostic'
import * as gov from '@/data/ap-us-gov-diagnostic'
import * as apush from '@/data/ap-us-history-diagnostic'
import * as world from '@/data/ap-world-history-diagnostic'

export type ApDiagItem = { question: string; options: string[]; correctAnswer: number; domain: string; topicSlug: string }
export type ApDiagDomain = { id: string; topicSlugs: string[]; questionTarget: number }
export type ApDiagResults = { recommendedTopics: { slug: string; name: string }[] }

export type ApDiagnosticEntry = {
  /** Course slug (key of the lesson-topic fixture). */
  course: string
  /** DiagnosticTest.category prefix the page stores. */
  categoryPrefix: string
  forms: number
  domains: ApDiagDomain[]
  generate: (form: number) => { questions: ApDiagItem[] }
  score: (form: number, questions: ApDiagItem[], answers: Record<number, number>) => ApDiagResults
}

/* eslint-disable @typescript-eslint/no-explicit-any -- each generator has its own form/question types */
const entry = (
  course: string,
  categoryPrefix: string,
  mod: { TOTAL_FORMS: number },
  domains: ApDiagDomain[],
  generate: (form: any) => { questions: any[] },
  score: (form: any, questions: any[], answers: Record<number, number>) => any,
): ApDiagnosticEntry => ({ course, categoryPrefix, forms: mod.TOTAL_FORMS, domains, generate, score })
/* eslint-enable @typescript-eslint/no-explicit-any */

export const AP_DIAGNOSTICS: ApDiagnosticEntry[] = [
  entry('ap-african-american-studies', 'ap-aas-diagnostic', aas, aas.AP_AFRICANAMERICANSTUDIES_DOMAINS, aas.generateAPAfricanAmericanStudiesDiagnosticTest, aas.scoreAPAfricanAmericanStudiesDiagnostic),
  entry('ap-biology', 'ap-bio-diagnostic', bio, bio.AP_BIO_DOMAINS, bio.generateAPBioDiagnosticTest, bio.scoreAPBioDiagnostic),
  entry('ap-calculus-ab', 'calcab-diagnostic', calcab, calcab.CALC_AB_DOMAINS, calcab.generateCalcABDiagnosticTest, calcab.scoreCalcABDiagnostic),
  entry('ap-calculus-bc', 'calcbc-diagnostic', calcbc, calcbc.CALC_BC_DOMAINS, calcbc.generateCalcBCDiagnosticTest, calcbc.scoreCalcBCDiagnostic),
  entry('ap-chemistry', 'ap-chem-diagnostic', chem, chem.AP_CHEM_DOMAINS, chem.generateAPChemDiagnosticTest, chem.scoreAPChemDiagnostic),
  entry('ap-computer-science-a', 'ap-csa-diagnostic', csa, csa.AP_CSA_DOMAINS, csa.generateAPCsaDiagnosticTest, csa.scoreAPCsaDiagnostic),
  entry('ap-computer-science-principles', 'ap-csp-diagnostic', csp, csp.AP_CSP_DOMAINS, csp.generateAPCspDiagnosticTest, csp.scoreAPCspDiagnostic),
  entry('ap-english-language', 'ap-english-lang-diagnostic', englang, englang.AP_ENGLISHLANG_DOMAINS, englang.generateAPEnglishLangDiagnosticTest, englang.scoreAPEnglishLangDiagnostic),
  entry('ap-english-literature', 'ap-english-lit-diagnostic', englit, englit.AP_ENGLISHLIT_DOMAINS, englit.generateAPEnglishLitDiagnosticTest, englit.scoreAPEnglishLitDiagnostic),
  entry('ap-environmental-science', 'ap-enviro-diagnostic', apes, apes.AP_ENVIRO_DOMAINS, apes.generateAPEnviroDiagnosticTest, apes.scoreAPEnviroDiagnostic),
  entry('ap-human-geography', 'ap-human-geo-diagnostic', hg, hg.AP_HUMAN_GEO_DOMAINS, hg.generateAPHumanGeoDiagnosticTest, hg.scoreAPHumanGeoDiagnostic),
  entry('ap-macroeconomics', 'ap-macro-diagnostic', macro, macro.AP_MACRO_DOMAINS, macro.generateAPMacroDiagnosticTest, macro.scoreAPMacroDiagnostic),
  entry('ap-microeconomics', 'ap-micro-diagnostic', micro, micro.AP_MICRO_DOMAINS, micro.generateAPMicroDiagnosticTest, micro.scoreAPMicroDiagnostic),
  entry('ap-physics-1', 'ap-physics1-diagnostic', phys1, phys1.AP_PHYSICS1_DOMAINS, phys1.generateAPPhysics1DiagnosticTest, phys1.scoreAPPhysics1Diagnostic),
  entry('ap-physics-2', 'ap-physics2-diagnostic', phys2, phys2.AP_PHYSICS2_DOMAINS, phys2.generateAPPhysics2DiagnosticTest, phys2.scoreAPPhysics2Diagnostic),
  entry('ap-physics-c-em', 'ap-physics-c-em-diagnostic', pcem, pcem.AP_PHYSICS_C_EM_DOMAINS, pcem.generateAPPhysicsCEMTest, pcem.scoreAPPhysicsCEM),
  entry('ap-physics-c-mechanics', 'ap-physics-c-mech-diagnostic', pcmech, pcmech.AP_PHYSICS_C_MECH_DOMAINS, pcmech.generateAPPhysicsCMechTest, pcmech.scoreAPPhysicsCMech),
  entry('ap-precalculus', 'ap-precalculus-diagnostic', precalc, precalc.AP_PRECALCULUS_DOMAINS, precalc.generateAPPrecalculusDiagnosticTest, precalc.scoreAPPrecalculusDiagnostic),
  entry('ap-psychology', 'ap-psych-diagnostic', psych, psych.AP_PSYCH_DOMAINS, psych.generateAPPsychDiagnosticTest, psych.scoreAPPsychDiagnostic),
  entry('ap-statistics', 'ap-stats-diagnostic', stats, stats.AP_STATS_DOMAINS, stats.generateAPStatsDiagnosticTest, stats.scoreAPStatsDiagnostic),
  entry('ap-us-government', 'ap-us-gov-diagnostic', gov, gov.AP_USGOV_DOMAINS, gov.generateAPUsGovDiagnosticTest, gov.scoreAPUsGovDiagnostic),
  entry('ap-us-history', 'ap-us-history-diagnostic', apush, apush.AP_USHISTORY_DOMAINS, apush.generateAPUsHistoryDiagnosticTest, apush.scoreAPUsHistoryDiagnostic),
  entry('ap-world-history', 'ap-world-history-diagnostic', world, world.AP_WORLDHISTORY_DOMAINS, world.generateAPWorldHistoryDiagnosticTest, world.scoreAPWorldHistoryDiagnostic),
]
