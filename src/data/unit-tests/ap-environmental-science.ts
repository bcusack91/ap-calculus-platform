import { enviroQuestionPool } from '@/data/exit-quizzes/ap-environmental-science'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_ENVIRO_UNITS: UnitDef[] = [
  { id: 'earth-systems', unitNumber: 1, name: 'Unit 1–2: Earth Systems & Biodiversity', shortName: 'Earth Systems', description: 'Plate tectonics, soil, atmosphere, biomes, and ecosystem services.', topicSlugs: ['earth-systems'], exam_weight: '15–22%', color: 'from-blue-500 to-cyan-500', icon: '🌎' },
  { id: 'biodiversity', unitNumber: 2, name: 'Unit 2: Biodiversity', shortName: 'Biodiversity', description: 'Species diversity, ecosystem stability, and ecological succession.', topicSlugs: ['biodiversity'], exam_weight: '6–8%', color: 'from-emerald-500 to-teal-500', icon: '🦋' },
  { id: 'populations', unitNumber: 3, name: 'Unit 3: Populations', shortName: 'Populations', description: 'Population dynamics, carrying capacity, and human population growth.', topicSlugs: ['populations'], exam_weight: '10–15%', color: 'from-amber-500 to-orange-500', icon: '👥' },
  { id: 'land-water', unitNumber: 4, name: 'Unit 4–5: Land & Water Use', shortName: 'Land & Water Use', description: 'Agriculture, forestry, fisheries, mining, and urbanization.', topicSlugs: ['land-water'], exam_weight: '10–15%', color: 'from-orange-500 to-red-500', icon: '🌾' },
  { id: 'energy', unitNumber: 5, name: 'Unit 6: Energy Resources & Consumption', shortName: 'Energy Resources', description: 'Renewable & non-renewable energy, fossil fuels, and conservation.', topicSlugs: ['energy'], exam_weight: '10–15%', color: 'from-rose-500 to-pink-500', icon: '⚡' },
  { id: 'pollution', unitNumber: 6, name: 'Unit 7–9: Pollution & Global Change', shortName: 'Pollution & Climate', description: 'Air, water, land pollution; climate change; and ozone depletion.', topicSlugs: ['pollution'], exam_weight: '20–30%', color: 'from-fuchsia-500 to-violet-500', icon: '🌫️' },
]

export const AP_ENVIRO_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-environmental-science',
  courseHubHref: '/ap-environmental-science',
  courseTitle: 'AP Environmental Science',
  unitTestRoute: '/ap-enviro-unit-tests',
  units: AP_ENVIRO_UNITS,
  pool: enviroQuestionPool,
}
