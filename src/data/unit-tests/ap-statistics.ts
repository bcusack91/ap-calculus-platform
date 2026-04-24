import { apStatsQuestionPool } from '@/data/exit-quizzes/ap-statistics'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_STATISTICS_UNITS: UnitDef[] = [
  { id: 'exploring-data', unitNumber: 1, name: 'Unit 1–2: Exploring Data', shortName: 'Exploring Data', description: 'One- and two-variable data, distributions, summary stats, and graphical displays.', topicSlugs: ['exploring-data'], exam_weight: '15–23%', color: 'from-blue-500 to-cyan-500', icon: '📊' },
  { id: 'sampling-experimentation', unitNumber: 2, name: 'Unit 3: Sampling & Experimentation', shortName: 'Sampling & Experiments', description: 'Sampling methods, experiments vs observational studies, and bias.', topicSlugs: ['sampling-experimentation'], exam_weight: '12–15%', color: 'from-indigo-500 to-purple-500', icon: '🎲' },
  { id: 'probability', unitNumber: 3, name: 'Unit 4–5: Probability, Random Variables & Distributions', shortName: 'Probability', description: 'Conditional probability, independence, random variables, and the binomial / normal distributions.', topicSlugs: ['probability'], exam_weight: '15–25%', color: 'from-purple-500 to-pink-500', icon: '🎯' },
  { id: 'confidence-intervals', unitNumber: 4, name: 'Unit 6–7: Confidence Intervals', shortName: 'Confidence Intervals', description: 'Constructing and interpreting confidence intervals for proportions and means.', topicSlugs: ['confidence-intervals'], exam_weight: '12–17%', color: 'from-emerald-500 to-teal-500', icon: '📏' },
  { id: 'hypothesis-testing', unitNumber: 5, name: 'Unit 6–7: Hypothesis Testing', shortName: 'Hypothesis Testing', description: 'Significance tests for proportions, means, and chi-square. Type I/II errors and power.', topicSlugs: ['hypothesis-testing'], exam_weight: '12–17%', color: 'from-amber-500 to-orange-500', icon: '⚖️' },
  { id: 'regression', unitNumber: 6, name: 'Unit 9: Regression & Inference for Slopes', shortName: 'Regression', description: 'Linear regression, residuals, correlation, and inference for the slope.', topicSlugs: ['regression'], exam_weight: '2–5%', color: 'from-rose-500 to-pink-500', icon: '📉' },
]

export const AP_STATISTICS_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-statistics',
  courseHubHref: '/ap-statistics',
  courseTitle: 'AP Statistics',
  unitTestRoute: '/ap-stats-unit-tests',
  units: AP_STATISTICS_UNITS,
  pool: apStatsQuestionPool,
}
