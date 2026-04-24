import { apHumanGeoQuestionPool } from '@/data/exit-quizzes/ap-human-geography'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_HUMAN_GEO_UNITS: UnitDef[] = [
  { id: 'thinking-geographically', unitNumber: 1, name: 'Unit 1: Thinking Geographically', shortName: 'Thinking Geographically', description: 'Maps, geographic data, scale, and spatial concepts.', topicSlugs: ['thinking-geographically'], exam_weight: '8–10%', color: 'from-blue-500 to-cyan-500', icon: '🗺️' },
  { id: 'population-migration', unitNumber: 2, name: 'Unit 2: Population & Migration', shortName: 'Population & Migration', description: 'Distribution, demographic transition, fertility, and migration patterns.', topicSlugs: ['population-migration'], exam_weight: '12–17%', color: 'from-indigo-500 to-purple-500', icon: '👥' },
  { id: 'cultural-patterns', unitNumber: 3, name: 'Unit 3: Cultural Patterns & Processes', shortName: 'Cultural Patterns', description: 'Language, religion, ethnicity, and cultural diffusion.', topicSlugs: ['cultural-patterns'], exam_weight: '12–17%', color: 'from-purple-500 to-pink-500', icon: '🎨' },
  { id: 'political-patterns', unitNumber: 4, name: 'Unit 4: Political Patterns & Processes', shortName: 'Political Patterns', description: 'States, nations, supranationalism, and devolution.', topicSlugs: ['political-patterns'], exam_weight: '12–17%', color: 'from-emerald-500 to-teal-500', icon: '🏛️' },
  { id: 'agriculture', unitNumber: 5, name: 'Unit 5: Agriculture & Rural Land Use', shortName: 'Agriculture', description: 'Agricultural origins, revolutions, von Thünen model, and food production.', topicSlugs: ['agriculture'], exam_weight: '12–17%', color: 'from-amber-500 to-orange-500', icon: '🌾' },
  { id: 'cities-urban', unitNumber: 6, name: 'Unit 6: Cities & Urban Land Use', shortName: 'Cities & Urban', description: 'Urban hierarchy, internal city structure, and urban challenges.', topicSlugs: ['cities-urban'], exam_weight: '12–17%', color: 'from-rose-500 to-pink-500', icon: '🏙️' },
  { id: 'industrialization-development', unitNumber: 7, name: 'Unit 7: Industrialization & Economic Development', shortName: 'Industrialization & Development', description: 'Industrial Revolution, models of development, and globalization.', topicSlugs: ['industrialization-development'], exam_weight: '12–17%', color: 'from-fuchsia-500 to-violet-500', icon: '🏭' },
]

export const AP_HUMAN_GEO_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-human-geography',
  courseHubHref: '/ap-human-geography',
  courseTitle: 'AP Human Geography',
  unitTestRoute: '/ap-human-geo-unit-tests',
  units: AP_HUMAN_GEO_UNITS,
  pool: apHumanGeoQuestionPool,
}
