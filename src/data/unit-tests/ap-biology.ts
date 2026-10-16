import { apBioQuestionPool } from '@/data/exit-quizzes/ap-biology'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

// The 8 units of the AP Biology CED. Each unit id is the exit pool's domain id
// for that unit, so every pool item lands in exactly one unit test.
export const AP_BIOLOGY_UNITS: UnitDef[] = [
  { id: 'chemistry-of-life', unitNumber: 1, name: 'Unit 1: Chemistry of Life', shortName: 'Chemistry of Life', description: 'Water and hydrogen bonding, elements of life, and the structure and function of carbohydrates, lipids, proteins, and nucleic acids.', topicSlugs: ['water-properties', 'carbohydrates', 'lipids', 'proteins', 'nucleic-acids'], exam_weight: '8–11%', color: 'from-sky-500 to-blue-500', icon: '💧' },
  { id: 'cell-structure', unitNumber: 2, name: 'Unit 2: Cell Structure and Function', shortName: 'Cell Structure', description: 'Organelles, prokaryotic and eukaryotic cells, surface area to volume, membranes, and membrane transport.', topicSlugs: ['prokaryotic-eukaryotic-cells', 'cell-organelles', 'cell-membrane-transport'], exam_weight: '10–13%', color: 'from-emerald-500 to-teal-500', icon: '🧫' },
  { id: 'cellular-energetics', unitNumber: 3, name: 'Unit 3: Cellular Energetics', shortName: 'Cellular Energetics', description: 'Enzymes and their regulation, energy coupling, photosynthesis, and cellular respiration.', topicSlugs: ['enzymes-metabolism', 'enzyme-kinetics', 'photosynthesis', 'cellular-respiration'], exam_weight: '12–16%', color: 'from-lime-500 to-green-500', icon: '⚡' },
  { id: 'cell-communication', unitNumber: 4, name: 'Unit 4: Cell Communication and Cell Cycle', shortName: 'Communication & Cell Cycle', description: 'Signal transduction, feedback, the cell cycle, mitosis, and cell-cycle regulation.', topicSlugs: ['cell-signaling', 'cell-cycle-mitosis'], exam_weight: '10–15%', color: 'from-teal-500 to-cyan-500', icon: '🔄' },
  { id: 'heredity', unitNumber: 5, name: 'Unit 5: Heredity', shortName: 'Heredity', description: 'Meiosis, Mendelian and non-Mendelian inheritance, linkage, and genetics problems.', topicSlugs: ['meiosis', 'mendelian-genetics', 'non-mendelian-genetics', 'chromosomal-inheritance'], exam_weight: '8–11%', color: 'from-amber-500 to-orange-500', icon: '🧬' },
  { id: 'gene-expression', unitNumber: 6, name: 'Unit 6: Gene Expression and Regulation', shortName: 'Gene Expression', description: 'DNA replication, transcription, translation, gene regulation, mutations, and biotechnology.', topicSlugs: ['dna-replication', 'transcription-rna-processing', 'translation', 'gene-regulation'], exam_weight: '12–16%', color: 'from-orange-500 to-red-500', icon: '📜' },
  { id: 'natural-selection', unitNumber: 7, name: 'Unit 7: Natural Selection', shortName: 'Natural Selection', description: 'Natural selection, Hardy-Weinberg, evidence of evolution, speciation, and phylogeny.', topicSlugs: ['natural-selection', 'speciation', 'phylogeny-classification'], exam_weight: '13–20%', color: 'from-rose-500 to-pink-500', icon: '🐢' },
  { id: 'ecology', unitNumber: 8, name: 'Unit 8: Ecology', shortName: 'Ecology', description: 'Responses to the environment, energy flow, population and community ecology, biodiversity, and disruptions to ecosystems.', topicSlugs: ['population-ecology', 'community-ecology', 'ecosystems-energy'], exam_weight: '10–15%', color: 'from-green-500 to-emerald-500', icon: '🌱' },
]

export const AP_BIOLOGY_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-biology',
  courseHubHref: '/ap-biology',
  courseTitle: 'AP Biology',
  unitTestRoute: '/ap-bio-unit-tests',
  units: AP_BIOLOGY_UNITS,
  pool: apBioQuestionPool,
}
