import { apBioQuestionPool } from '@/data/exit-quizzes/ap-biology'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

// AP Biology has 8 College Board units, but our seeded question pool
// covers 6 domains. We map units to the closest available domain id.
export const AP_BIOLOGY_UNITS: UnitDef[] = [
  { id: 'cell-structure', unitNumber: 1, name: 'Unit 1–2: Chemistry of Life & Cell Structure', shortName: 'Cells & Chemistry', description: 'Water, biomolecules, cell organelles, membranes, and transport.', topicSlugs: ['cell-structure'], exam_weight: '18–25%', color: 'from-emerald-500 to-teal-500', icon: '🧫' },
  { id: 'cell-communication', unitNumber: 2, name: 'Unit 3–4: Cellular Energetics & Communication', shortName: 'Energetics & Signaling', description: 'Enzymes, photosynthesis, cellular respiration, signaling, and the cell cycle.', topicSlugs: ['cell-communication'], exam_weight: '18–25%', color: 'from-teal-500 to-cyan-500', icon: '🔄' },
  { id: 'heredity', unitNumber: 3, name: 'Unit 5: Heredity', shortName: 'Heredity', description: 'Meiosis, Mendelian and non-Mendelian inheritance, and genetics problems.', topicSlugs: ['heredity'], exam_weight: '8–11%', color: 'from-amber-500 to-orange-500', icon: '🧬' },
  { id: 'gene-expression', unitNumber: 4, name: 'Unit 6: Gene Expression & Regulation', shortName: 'Gene Expression', description: 'DNA, RNA, transcription, translation, mutations, and biotechnology.', topicSlugs: ['gene-expression'], exam_weight: '12–16%', color: 'from-orange-500 to-red-500', icon: '📜' },
  { id: 'natural-selection', unitNumber: 5, name: 'Unit 7: Natural Selection & Evolution', shortName: 'Natural Selection', description: 'Evidence of evolution, Hardy-Weinberg, speciation, and phylogeny.', topicSlugs: ['natural-selection'], exam_weight: '13–20%', color: 'from-rose-500 to-pink-500', icon: '🐢' },
  { id: 'ecology', unitNumber: 6, name: 'Unit 8: Ecology', shortName: 'Ecology', description: 'Population ecology, community interactions, ecosystems, and biogeochemical cycles.', topicSlugs: ['ecology'], exam_weight: '10–15%', color: 'from-green-500 to-emerald-500', icon: '🌱' },
]

export const AP_BIOLOGY_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-biology',
  courseHubHref: '/ap-biology',
  courseTitle: 'AP Biology',
  unitTestRoute: '/ap-bio-unit-tests',
  units: AP_BIOLOGY_UNITS,
  pool: apBioQuestionPool,
}
