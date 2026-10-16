import { apStatsQuestionPool } from '@/data/exit-quizzes/ap-statistics'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

/**
 * The 5 units of the 2026-27 AP Statistics CED (first exam May 2027), which
 * consolidated the old Units 1-8 and removed inference for slopes:
 *   1 Exploring One-Variable Data and Collecting Data
 *   2 Probability, Random Variables, and Probability Distributions
 *   3 Inference for Categorical Data: Proportions (incl. chi-square, 3.14-3.15)
 *   4 Inference for Quantitative Data: Means
 *   5 Regression Analysis
 * The exit pool keeps the old domains. Sampling distributions, interval
 * interpretation and the test framework (errors, power, p-values) are first
 * taught with proportions in Unit 3; items about a mean (x-bar, mu, the CLT)
 * go to Unit 4.
 */
export const AP_STATISTICS_UNIT_ASSIGNMENT: UnitAssignment = {
  domains: {
    'exploring-data': 'exploring-data',
    'sampling-experimentation': 'exploring-data',
    probability: 'probability',
    'confidence-intervals': 'inference-proportions',
    'hypothesis-testing': 'inference-proportions',
    inference: 'inference-proportions',
    regression: 'regression',
  },
  topics: {
    'scatterplots-correlation': 'regression',
    'sampling-distributions': 'inference-proportions',
    'sampling-distribution-sample-proportion': 'inference-proportions',
    'sampling-distribution-sample-mean': 'inference-means',
    'central-limit-theorem': 'inference-means',
    'ci-means': 'inference-means',
    'tests-means': 'inference-means',
    'paired-data': 'inference-means',
    'two-sample-means': 'inference-means',
  },
  stems: {
    // sampling-distributions items about the sample mean
    'As sample size increases, what happens to the standard error of the sample mean': 'inference-means',
    'The sampling distribution of x̄ has standard deviation σ/√n': 'inference-means',
    'A sample of size 36 is drawn from a population with σ = 12': 'inference-means',
    'The standard deviation of the sampling distribution of x̄ is': 'inference-means',
    'As sample size increases, the sampling distribution of x̄': 'inference-means',
    'A population has mean 80 and SD 20': 'inference-means',
    'Which statistic is an unbiased estimator of the population mean': 'inference-means',
    'If the population is normally distributed, the sampling distribution of x̄': 'inference-means',
    'In an experiment, 20 volunteers are randomly split into two groups': 'inference-means',
    // interpreting-ci and framework items about a mean
    'A 90% confidence interval for μ is (45, 55)': 'inference-means',
    'A 95% CI for a population mean is (42, 58)': 'inference-means',
    'A 90% CI for a mean is (45.2, 52.8)': 'inference-means',
    'A researcher constructs a 95% CI for a mean': 'inference-means',
    'A researcher reports a 95% CI of (2.1, 4.3) for the difference in means': 'inference-means',
    'If a 95% CI for μ is (100, 120)': 'inference-means',
    'A CI for the difference in means': 'inference-means',
    'A company claims that its new battery lasts longer, on average': 'inference-means',
    'A dentist believes the mean number of cavities': 'inference-means',
  },
}

export const AP_STATISTICS_UNITS: UnitDef[] = [
  { id: 'exploring-data', unitNumber: 1, name: 'Unit 1: Exploring One-Variable Data and Collecting Data', shortName: 'Data & Collection', description: 'Graphs and summaries of one-variable data, normal distributions, sampling methods, bias, and experimental design.', topicSlugs: ['types-data-sampling', 'describing-distributions', 'normal-distributions', 'sampling-methods', 'experimental-design'], exam_weight: '20–30%', color: 'from-blue-500 to-cyan-500', icon: '📊' },
  { id: 'probability', unitNumber: 2, name: 'Unit 2: Probability, Random Variables, and Probability Distributions', shortName: 'Probability', description: 'Probability rules, conditional probability and independence, random variables, and the binomial distribution.', topicSlugs: ['basic-probability-rules', 'conditional-probability', 'discrete-random-variables', 'binomial-distribution'], exam_weight: '15–25%', color: 'from-purple-500 to-pink-500', icon: '🎯' },
  { id: 'inference-proportions', unitNumber: 3, name: 'Unit 3: Inference for Categorical Data: Proportions', shortName: 'Proportions', description: 'Sampling distributions of p-hat, confidence intervals and significance tests for proportions, errors and power, and chi-square tests.', topicSlugs: ['sampling-distribution-sample-proportion', 'ci-proportions', 'tests-proportions', 'two-sample-proportions', 'chi-square-tests'], exam_weight: '15–25%', color: 'from-emerald-500 to-teal-500', icon: '📏' },
  { id: 'inference-means', unitNumber: 4, name: 'Unit 4: Inference for Quantitative Data: Means', shortName: 'Means', description: 'Sampling distributions of x-bar and the CLT, t-intervals and t-tests, paired data, and two-sample means.', topicSlugs: ['sampling-distribution-sample-mean', 'central-limit-theorem', 'ci-means', 'tests-means', 'two-sample-means'], exam_weight: '10–20%', color: 'from-amber-500 to-orange-500', icon: '⚖️' },
  { id: 'regression', unitNumber: 5, name: 'Unit 5: Regression Analysis', shortName: 'Regression', description: 'Scatterplots, correlation, least-squares regression lines, residuals, and the coefficient of determination.', topicSlugs: ['scatterplots-correlation', 'least-squares-regression', 'residuals-residual-plots', 'coefficient-determination'], exam_weight: '10–20%', color: 'from-rose-500 to-pink-500', icon: '📉' },
]

export const AP_STATISTICS_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-statistics',
  courseHubHref: '/ap-statistics',
  courseTitle: 'AP Statistics',
  unitTestRoute: '/ap-stats-unit-tests',
  units: AP_STATISTICS_UNITS,
  pool: assignUnits(apStatsQuestionPool, AP_STATISTICS_UNIT_ASSIGNMENT),
}
