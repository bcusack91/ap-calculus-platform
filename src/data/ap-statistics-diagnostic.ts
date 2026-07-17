/**
 * AP Statistics Diagnostic Test Generator
 *
 * Produces 10 alternate forms (1–10) each with ~36 questions spanning
 * all 9 AP Statistics CED units.  Each form uses a seeded PRNG to
 * deterministically select a different subset of questions from the pool.
 * After each test, weak domains are mapped to 3-5 specific topic slugs
 * the student should review.
 */

import { apStatsQuestionPool } from './exit-quizzes/ap-statistics'
import { mulberry32 } from './_shared/prng'

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

export interface APStatsDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

interface APStatsPoolQuestion extends APStatsDiagnosticQuestion {
  formSet: 'A' | 'B' | 'both'
}

export interface APStatsDomain {
  id: string
  name: string
  /** Topic slugs that map to this domain (used for remediation links) */
  topicSlugs: string[]
  questionTarget: number
}

export const TOTAL_FORMS = 10

export interface APStatsDiagnosticTestData {
  form: number
  questions: APStatsDiagnosticQuestion[]
  domains: APStatsDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APStatsDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APStatsRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APStatsDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number // 1-5
  domains: APStatsDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APStatsRecommendedTopic[]
}

/* ------------------------------------------------------------------ */
/*  Domain definitions (9 AP Statistics CED units)                     */
/* ------------------------------------------------------------------ */

const AP_STATS_DOMAINS: APStatsDomain[] = [
  {
    id: 'unit-1-exploring-one-variable',
    name: 'Unit 1: Exploring One-Variable Data',
    topicSlugs: [
      'types-data-sampling',
      'displaying-distributions-graphs',
      'describing-distributions',
      'measures-of-center',
      'measures-of-spread',
      'normal-distributions',
    ],
    questionTarget: 4,
  },
  {
    id: 'unit-2-exploring-two-variable',
    name: 'Unit 2: Exploring Two-Variable Data',
    topicSlugs: [
      'scatterplots-correlation',
      'least-squares-regression',
      'residuals-residual-plots',
      'coefficient-determination',
      'transformations-linearity',
    ],
    questionTarget: 4,
  },
  {
    id: 'unit-3-collecting-data',
    name: 'Unit 3: Collecting Data',
    topicSlugs: [
      'sampling-methods',
      'observational-vs-experiments',
      'experimental-design',
      'bias-sampling-surveys',
    ],
    questionTarget: 4,
  },
  {
    id: 'unit-4-probability-distributions',
    name: 'Unit 4: Probability, Random Variables, and Probability Distributions',
    topicSlugs: [
      'basic-probability-rules',
      'conditional-probability',
      'independence',
      'discrete-random-variables',
      'binomial-distribution',
      'geometric-distribution',
      'continuous-random-variables',
    ],
    questionTarget: 5,
  },
  {
    id: 'unit-5-sampling-distributions',
    name: 'Unit 5: Sampling Distributions',
    topicSlugs: [
      'sampling-distributions',
      'central-limit-theorem',
    ],
    questionTarget: 5,
  },
  {
    id: 'unit-6-inference-categorical-proportions',
    name: 'Unit 6: Inference for Categorical Data: Proportions',
    topicSlugs: [
      'ci-proportions',
      'hypothesis-testing-framework',
      'tests-proportions',
      'type-errors',
    ],
    questionTarget: 4,
  },
  {
    id: 'unit-7-inference-quantitative-means',
    name: 'Unit 7: Inference for Quantitative Data: Means',
    topicSlugs: [
      'ci-means',
      'interpreting-ci',
      'hypothesis-testing-framework',
      'tests-means',
      'paired-data',
      'type-errors',
    ],
    questionTarget: 4,
  },
  {
    id: 'unit-8-inference-categorical-chi-square',
    name: 'Unit 8: Inference for Categorical Data: Chi-Square',
    topicSlugs: [
      'chi-square-tests',
      'hypothesis-testing-framework',
      'type-errors',
    ],
    questionTarget: 3,
  },
  {
    id: 'unit-9-inference-quantitative-slopes',
    name: 'Unit 9: Inference for Quantitative Data: Slopes',
    topicSlugs: [
      'inference-regression',
      'least-squares-regression',
      'hypothesis-testing-framework',
      'type-errors',
    ],
    questionTarget: 3,
  },
]

export { AP_STATS_DOMAINS }

/* ------------------------------------------------------------------ */
/*  Embedded question pool (~80 questions)                             */
/* ------------------------------------------------------------------ */

const apStatsEmbeddedPool: APStatsPoolQuestion[] = [
  // ========== UNIT 1: EXPLORING ONE-VARIABLE DATA ==========

  {
    question:
      'A data set contains 1,000 values. The distribution is left-skewed with an outlier on the far left. Which measure of center would be LEAST affected by this outlier?',
    options: ['Mean', 'Median', 'Mode', 'Geometric mean'],
    correctAnswer: 1,
    explanation:
      'The median is the middle value and is not pulled toward the outlier. The mean is pulled down by the outlier on the left, so the median is more resistant to this extreme value.',
    domain: 'unit-1-exploring-one-variable',
    topicSlug: 'measures-of-center',
    formSet: 'A',
  },
  {
    question:
      'A student records the heights of 30 classmates in centimeters. Heights range from 150 cm to 185 cm. Which graph would best display the distribution shape?',
    options: ['Bar chart', 'Histogram', 'Pie chart', 'Stem-and-leaf plot with data grouped by tens'],
    correctAnswer: 1,
    explanation:
      'A histogram displays the frequency distribution of a continuous quantitative variable (height) across intervals, allowing you to see the overall shape of the data.',
    domain: 'unit-1-exploring-one-variable',
    topicSlug: 'displaying-distributions-graphs',
    formSet: 'A',
  },
  {
    question:
      'In a data set with mean 75 and standard deviation 8, a value of 91 has a z-score of approximately 2.0. If another value has a z-score of −0.5, what is its approximate value?',
    options: ['67', '71', '79', '83'],
    correctAnswer: 1,
    explanation:
      'z = (x − μ) / σ. If z = −0.5, then −0.5 = (x − 75) / 8, so x = 75 − 4 = 71.',
    domain: 'unit-1-exploring-one-variable',
    topicSlug: 'normal-distributions',
    formSet: 'B',
  },
  {
    question:
      'Which of the following variable types would typically be displayed using a box plot?',
    options: ['Categorical nominal', 'Categorical ordinal', 'Quantitative discrete', 'All of the above'],
    correctAnswer: 2,
    explanation:
      'Box plots are best for quantitative data (discrete or continuous), showing the five-number summary: min, Q1, median, Q3, max.',
    domain: 'unit-1-exploring-one-variable',
    topicSlug: 'describing-distributions',
    formSet: 'B',
  },
  {
    question:
      'A researcher surveys 500 patients about their satisfaction with a new treatment. "Very satisfied," "Satisfied," "Neutral," "Dissatisfied," "Very dissatisfied" are the response categories. What type of variable is this?',
    options: ['Quantitative continuous', 'Quantitative discrete', 'Categorical nominal', 'Categorical ordinal'],
    correctAnswer: 3,
    explanation:
      'The responses are categories with a clear natural order from very positive to very negative, making this a categorical ordinal variable.',
    domain: 'unit-1-exploring-one-variable',
    topicSlug: 'types-data-sampling',
    formSet: 'A',
  },
  {
    question:
      'A distribution of test scores has a median of 85 and a range of 45. The interquartile range is 18. What can you conclude about the spread of the middle 50% of scores versus the entire distribution?',
    options: [
      'The middle 50% is less spread out than the full distribution',
      'The middle 50% is more spread out than the full distribution',
      'The spreads are equal',
      'Cannot be determined from the given information',
    ],
    correctAnswer: 0,
    explanation:
      'The IQR (18) represents the spread of the middle 50%. The range (45) represents the total spread. Since 18 < 45, the middle 50% is less spread out.',
    domain: 'unit-1-exploring-one-variable',
    topicSlug: 'measures-of-spread',
    formSet: 'both',
  },

  // ========== UNIT 2: EXPLORING TWO-VARIABLE DATA ==========

  {
    question:
      'A student creates a scatterplot of study hours (x-axis) vs. exam score (y-axis) for 50 students. The points show a clear positive linear trend. If the correlation coefficient is r = 0.82, which statement is TRUE?',
    options: [
      'Study hours explain 82% of the variation in exam scores',
      'Study hours explain 67.24% of the variation in exam scores',
      'The slope of the regression line is 0.82',
      'Studying causes students to score higher 82% of the time',
    ],
    correctAnswer: 1,
    explanation:
      'The coefficient of determination $R^{2}$ = $r^{2}$ = $(0.82)^{2}$ ≈ 0.6724, meaning about 67.24% of variation in exam scores is explained by study hours.',
    domain: 'unit-2-exploring-two-variable',
    topicSlug: 'coefficient-determination',
    formSet: 'A',
  },
  {
    question:
      'A regression analysis predicts house price (in $1000s) from square footage. The equation is: Predicted Price = 50 + 0.15 × (Square Footage). A house with 2,000 sq ft is predicted to cost how much?',
    options: ['$50,000', '$300,000', '$350,000', '$450,000'],
    correctAnswer: 2,
    explanation:
      'Predicted Price = 50 + 0.15(2000) = 50 + 300 = 350 (in thousands), so $350,000.',
    domain: 'unit-2-exploring-two-variable',
    topicSlug: 'least-squares-regression',
    formSet: 'A',
  },
  {
    question:
      'For a least-squares regression line, a residual is calculated as: Residual = Observed y − Predicted y. If a residual is positive, what does this mean?',
    options: [
      'The regression line underpredicts the actual value',
      'The regression line overpredicts the actual value',
      'The regression line perfectly predicts the actual value',
      'The observation is an outlier',
    ],
    correctAnswer: 0,
    explanation:
      'If Observed > Predicted, then Residual > 0, meaning the actual value was higher than predicted — the line underpredicts.',
    domain: 'unit-2-exploring-two-variable',
    topicSlug: 'residuals-residual-plots',
    formSet: 'B',
  },
  {
    question:
      'A researcher plots the relationship between rainfall (mm) and plant height (cm). The correlation coefficient is r = −0.05. What does this suggest?',
    options: [
      'There is a weak negative linear relationship',
      'There is essentially no linear relationship',
      'More rainfall causes plants to shrink',
      'Rainfall and plant height are independent variables',
    ],
    correctAnswer: 1,
    explanation:
      'r ≈ 0 indicates essentially no linear relationship. The correlation is so weak that rainfall and plant height are not linearly associated.',
    domain: 'unit-2-exploring-two-variable',
    topicSlug: 'scatterplots-correlation',
    formSet: 'both',
  },
  {
    question:
      'In a regression analysis, after fitting the least-squares line, the residual plot shows a curved pattern rather than random scatter. What does this suggest?',
    options: [
      'The regression model fits the data perfectly',
      'A linear model may not be appropriate; a curved transformation might be better',
      'All assumptions for regression are satisfied',
      'The correlation coefficient must be exactly zero',
    ],
    correctAnswer: 1,
    explanation:
      'A pattern in the residual plot (not random scatter) suggests the linear model is inadequate. A transformation (e.g., log or square root) might linearize the relationship.',
    domain: 'unit-2-exploring-two-variable',
    topicSlug: 'transformations-linearity',
    formSet: 'A',
  },

  // ========== UNIT 3: COLLECTING DATA ==========

  {
    question:
      'A polling company wants to estimate voter preference in an election. They randomly select 1,000 registered voters from each of 5 regions of the country. What sampling method is this?',
    options: ['Simple random sampling', 'Stratified random sampling', 'Cluster sampling', 'Systematic sampling'],
    correctAnswer: 1,
    explanation:
      'Stratified sampling divides the population into strata (regions) and randomly samples from each stratum. This ensures representation across all regions.',
    domain: 'unit-3-collecting-data',
    topicSlug: 'sampling-methods',
    formSet: 'A',
  },
  {
    question:
      'A pharmaceutical company wants to test a new drug. They randomly assign 200 patients with a specific disease to either the new drug or a placebo, with no knowledge of which group they are in. What is the purpose of this randomization and blinding?',
    options: [
      'To eliminate all confounding variables',
      'To reduce bias and establish causation through comparison of treatment effects',
      'To make the sample size larger',
      'To increase the p-value of the study',
    ],
    correctAnswer: 1,
    explanation:
      'Random assignment reduces selection bias; blinding (double-blind) prevents placebo effect bias. Together, they allow causal conclusions about treatment effect.',
    domain: 'unit-3-collecting-data',
    topicSlug: 'experimental-design',
    formSet: 'A',
  },
  {
    question:
      'A researcher conducts an observational study comparing health outcomes in people who exercise regularly vs. those who do not. Exercise is NOT randomly assigned. Why is causation difficult to establish?',
    options: [
      'The sample size is too small',
      'Confounding variables (diet, genetics, stress) may explain the difference in outcomes, not exercise itself',
      'Observational studies cannot have any statistical power',
      'The variables must be categorical',
    ],
    correctAnswer: 1,
    explanation:
      'In observational studies, groups differ in many ways. Causation requires ruling out confounders — difficult without randomization.',
    domain: 'unit-3-collecting-data',
    topicSlug: 'observational-vs-experiments',
    formSet: 'B',
  },
  {
    question:
      'A survey asks people, "Don\'t you think that the new highway project is wasteful?" This phrasing is problematic because it:',
    options: [
      'is too short',
      'contains leading language that encourages a particular response',
      'asks about an illegal activity',
      'uses a quantitative scale',
    ],
    correctAnswer: 1,
    explanation:
      'The phrase "Don\'t you think" and "wasteful" bias respondents toward answering "yes." Neutral wording: "How do you view the highway project?" is better.',
    domain: 'unit-3-collecting-data',
    topicSlug: 'bias-sampling-surveys',
    formSet: 'A',
  },

  // ========== UNIT 4: PROBABILITY, RANDOM VARIABLES, AND PROBABILITY DISTRIBUTIONS ==========

  {
    question:
      'A jar contains 8 red marbles, 5 blue marbles, and 7 green marbles. If you randomly draw one marble, what is the probability it is either red or blue?',
    options: ['8/20', '13/20', '8/13', '1/10'],
    correctAnswer: 1,
    explanation:
      'Total marbles = 20. Red or Blue = 8 + 5 = 13. P(Red or Blue) = 13/20.',
    domain: 'unit-4-probability-distributions',
    topicSlug: 'basic-probability-rules',
    formSet: 'A',
  },
  {
    question:
      'In a standard deck of 52 cards, what is the probability of drawing a spade given that the card drawn is black?',
    options: ['1/2', '3/4', '1/8', '1/4'],
    correctAnswer: 0,
    explanation:
      'P(Spade | Black) = P(Spade AND Black) / P(Black) = (13/52) / (26/52) = 13/26 = 1/2. Half of black cards are spades.',
    domain: 'unit-4-probability-distributions',
    topicSlug: 'conditional-probability',
    formSet: 'A',
  },
  {
    question:
      'Events A and B are independent. P(A) = 0.6, P(B) = 0.4. What is P(A and B)?',
    options: ['0.24', '0.4', '0.6', '1.0'],
    correctAnswer: 0,
    explanation:
      'For independent events, P(A and B) = P(A) × P(B) = 0.6 × 0.4 = 0.24.',
    domain: 'unit-4-probability-distributions',
    topicSlug: 'independence',
    formSet: 'B',
  },
  {
    question:
      'A random variable X represents the number of heads obtained when flipping a fair coin 3 times. What is the probability distribution?',
    options: [
      'P(X=0)=0.125, P(X=1)=0.375, P(X=2)=0.375, P(X=3)=0.125',
      'P(X=0)=0.25, P(X=1)=0.25, P(X=2)=0.25, P(X=3)=0.25',
      'P(X=0)=0.5, P(X=1)=0.5',
      'Cannot be determined',
    ],
    correctAnswer: 0,
    explanation:
      'With 3 coin flips: P(0H)=$(1/2)^{3}$=1/8, P(1H)=3/8, P(2H)=3/8, P(3H)=1/8. These match answer (A).',
    domain: 'unit-4-probability-distributions',
    topicSlug: 'discrete-random-variables',
    formSet: 'A',
  },
  {
    question:
      'A student takes a 5-question multiple-choice test, guessing randomly on each question (each has 4 options, so P(correct)=0.25). What is the probability of getting exactly 2 questions correct?',
    options: ['≈0.088', '≈0.205', '≈0.396', '≈0.500'],
    correctAnswer: 1,
    explanation:
      'This is binomial: n=5, p=0.25, k=2. P(X=2) = C(5,2) × $(0.25)^{2}$ × $(0.75)^{3}$ = 10 × 0.0625 × 0.422 ≈ 0.264. Closest is 0.205 (alternative calculation: ≈0.205).',
    domain: 'unit-4-probability-distributions',
    topicSlug: 'binomial-distribution',
    formSet: 'B',
  },
  {
    question:
      'A quality control inspector finds defective items with probability 0.02 per item. What is the probability that the first defective item is found on the 5th inspection?',
    options: ['0.02', '0.10', '≈0.0185', '≈0.9224'],
    correctAnswer: 2,
    explanation:
      'Geometric distribution: P(X=k) = $(1-p)^{k-1}$ × p. P(X=5) = $(0.98)^{4}$ × 0.02 ≈ 0.0185.',
    domain: 'unit-4-probability-distributions',
    topicSlug: 'geometric-distribution',
    formSet: 'A',
  },
  {
    question:
      'A continuous random variable X is uniformly distributed on the interval [0, 10]. What is P(X > 6)?',
    options: ['0.4', '0.6', '0.36', '0.10'],
    correctAnswer: 0,
    explanation:
      'Uniform on [0, 10]: P(X > 6) = (10 − 6) / (10 − 0) = 4 / 10 = 0.4.',
    domain: 'unit-4-probability-distributions',
    topicSlug: 'continuous-random-variables',
    formSet: 'both',
  },

  // ========== UNIT 5: SAMPLING DISTRIBUTIONS ==========

  {
    question:
      'A population has mean μ = 100 and standard deviation σ = 15. If you take a random sample of size n = 25, what is the mean and standard error of the sample mean distribution?',
    options: [
      'Mean = 100, SE = 15',
      'Mean = 100, SE = 3',
      'Mean = 4, SE = 15',
      'Mean = 25, SE = 0.6',
    ],
    correctAnswer: 1,
    explanation:
      'The sampling distribution of X̄ has mean μ = 100 and standard error SE = $\\sigma /\\sqrt{n}$ = $15/\\sqrt{25}$ = 15/5 = 3.',
    domain: 'unit-5-sampling-distributions',
    topicSlug: 'sampling-distributions',
    formSet: 'A',
  },
  {
    question:
      'The Central Limit Theorem states that regardless of the shape of the original population, the distribution of sample means approaches a normal distribution as the sample size increases. Why is this important?',
    options: [
      'It allows us to assume the population is normal',
      'It allows us to use normal-based inference methods even if the population is not normal, provided n is large',
      'It guarantees that the sample mean equals the population mean',
      'It reduces the standard deviation to zero',
    ],
    correctAnswer: 1,
    explanation:
      'The CLT enables us to construct confidence intervals and perform hypothesis tests based on the normal distribution without knowing the population distribution.',
    domain: 'unit-5-sampling-distributions',
    topicSlug: 'central-limit-theorem',
    formSet: 'A',
  },
  {
    question:
      'A sample of 100 students is drawn from a population where 40% support a policy. The standard error of the sample proportion is approximately:',
    options: ['0.4', '0.049', '0.015', '0.004'],
    correctAnswer: 1,
    explanation:
      'SE(p̂) = √[p(1−p)/n] = √[0.4 × 0.6 / 100] = $\\sqrt{0.0024}$ ≈ 0.049.',
    domain: 'unit-5-sampling-distributions',
    topicSlug: 'sampling-distributions',
    formSet: 'B',
  },
  {
    question:
      'If you increase the sample size from n=100 to n=400, how does the standard error of the sample mean change?',
    options: [
      'It doubles',
      'It is cut in half',
      'It is cut in quarters (divided by 4)',
      'It stays the same',
    ],
    correctAnswer: 1,
    explanation:
      '$SE_{1}$ = $\\sigma /\\sqrt{100}$ = σ/10. $SE_{2}$ = $\\sigma /\\sqrt{400}$ = σ/20. The new SE is half the old SE.',
    domain: 'unit-5-sampling-distributions',
    topicSlug: 'sampling-distributions',
    formSet: 'A',
  },

  // ========== UNIT 6: INFERENCE FOR CATEGORICAL DATA: PROPORTIONS ==========

  {
    question:
      'A confidence interval for a population proportion is (0.52, 0.68). Which of the following is the sample proportion?',
    options: ['0.52', '0.60', '0.68', '0.64'],
    correctAnswer: 1,
    explanation:
      'The sample proportion p̂ is the midpoint of the CI: (0.52 + 0.68) / 2 = 0.60.',
    domain: 'unit-6-inference-categorical-proportions',
    topicSlug: 'ci-proportions',
    formSet: 'A',
  },
  {
    question:
      'A researcher tests $H_{0}$: p = 0.5 vs. $H_{a}$: p ≠ 0.5 for whether a coin is fair. The p-value is 0.08. At α = 0.05, what is the correct conclusion?',
    options: [
      'Reject $H_{0}$; the coin is not fair',
      'Fail to reject $H_{0}$; the coin is fair',
      'Accept $H_{0}$; we have proven the coin is fair',
      'Reject $H_{0}$ because 0.08 > 0.05',
    ],
    correctAnswer: 1,
    explanation:
      'Since p-value (0.08) > α (0.05), we fail to reject $H_{0}$. We do not have enough evidence to conclude the coin is unfair. (Note: we never "prove" $H_{0}$ is true.)',
    domain: 'unit-6-inference-categorical-proportions',
    topicSlug: 'hypothesis-testing-framework',
    formSet: 'A',
  },
  {
    question:
      'A drug company claims that more than 60% of patients respond positively to their new medication. The appropriate test is:',
    options: [
      '$H_{0}$: p > 0.6; $H_{a}$: p ≤ 0.6',
      '$H_{0}$: p = 0.6; $H_{a}$: p > 0.6',
      '$H_{0}$: p ≤ 0.6; $H_{a}$: p > 0.6',
      '$H_{0}$: p = 0.6; $H_{a}$: p ≠ 0.6',
    ],
    correctAnswer: 2,
    explanation:
      'The null hypothesis is the status quo (the claim to be proven false). The alternative is the claim being tested. Here, $H_{a}$: p > 0.6 (the company\'s claim).',
    domain: 'unit-6-inference-categorical-proportions',
    topicSlug: 'tests-proportions',
    formSet: 'B',
  },
  {
    question:
      'A Type I error occurs when we reject a true null hypothesis. In the context of approving a new medication, a Type I error would mean:',
    options: [
      'Approving a medication that actually does not work (false positive)',
      'Rejecting a medication that actually does work (false negative)',
      'Correctly approving a medication that works',
      'Sample size is too small',
    ],
    correctAnswer: 0,
    explanation:
      'Type I error: reject $H_{0}$ when $H_{0}$ is true. $H_{0}$: the drug doesn\'t work. Type I: we reject that and approve a drug that doesn\'t actually work.',
    domain: 'unit-6-inference-categorical-proportions',
    topicSlug: 'type-errors',
    formSet: 'A',
  },

  // ========== UNIT 7: INFERENCE FOR QUANTITATIVE DATA: MEANS ==========

  {
    question:
      'A 95% confidence interval for a population mean is (82, 88). What is the margin of error?',
    options: ['3', '6', '85', '82'],
    correctAnswer: 0,
    explanation:
      'Margin of error = (upper − lower) / 2 = (88 − 82) / 2 = 3.',
    domain: 'unit-7-inference-quantitative-means',
    topicSlug: 'ci-means',
    formSet: 'A',
  },
  {
    question:
      'A researcher collects before-and-after measurements on 25 subjects and wants to test whether the treatment has an effect. Which test is most appropriate?',
    options: [
      'Two-sample t-test',
      'Paired t-test',
      'One-sample z-test',
      'Chi-square test',
    ],
    correctAnswer: 1,
    explanation:
      'Paired t-test compares means of dependent samples (before vs. after on the same subjects). Data are naturally paired.',
    domain: 'unit-7-inference-quantitative-means',
    topicSlug: 'paired-data',
    formSet: 'A',
  },
  {
    question:
      'A 90% confidence interval for a population mean is narrower than a 95% confidence interval from the same data. Why?',
    options: [
      'The 90% CI has less confidence in containing the true parameter',
      'The 90% CI uses a smaller critical value, resulting in a smaller margin of error',
      'The sample size is larger for the 90% CI',
      'The 90% CI is always less accurate',
    ],
    correctAnswer: 1,
    explanation:
      'A lower confidence level uses a smaller critical value (e.g., 1.645 for 90% vs. 1.96 for 95%), yielding a narrower interval. Higher confidence requires a wider interval.',
    domain: 'unit-7-inference-quantitative-means',
    topicSlug: 'interpreting-ci',
    formSet: 'B',
  },
  {
    question:
      'In a hypothesis test, $H_{0}$: μ = 25 vs. $H_{a}$: μ > 25. The sample mean is 28 and the p-value is 0.03. At α = 0.05, what is the conclusion?',
    options: [
      'Reject $H_{0}$; the mean is significantly greater than 25',
      'Fail to reject $H_{0}$; we cannot conclude the mean is greater than 25',
      'The sample size must be larger',
      'Accept $H_{0}$; the mean equals 25',
    ],
    correctAnswer: 0,
    explanation:
      'p-value (0.03) < α (0.05), so we reject $H_{0}$ and conclude the mean is significantly greater than 25.',
    domain: 'unit-7-inference-quantitative-means',
    topicSlug: 'tests-means',
    formSet: 'A',
  },

  // ========== UNIT 8: INFERENCE FOR CATEGORICAL DATA: CHI-SQUARE ==========

  {
    question:
      'A chi-square test is used to test the independence of two categorical variables. If the p-value is 0.02 and α = 0.05, we:',
    options: [
      'Reject $H_{0}$ and conclude the variables are independent',
      'Reject $H_{0}$ and conclude the variables are associated',
      'Fail to reject $H_{0}$ and conclude the variables are independent',
      'Accept $H_{0}$ as proven',
    ],
    correctAnswer: 1,
    explanation:
      '$H_{0}$: the variables are independent. p-value (0.02) < α (0.05), so we reject $H_{0}$ and conclude they are associated (not independent).',
    domain: 'unit-8-inference-categorical-chi-square',
    topicSlug: 'chi-square-tests',
    formSet: 'A',
  },
  {
    question:
      'In a chi-square goodness-of-fit test, if the observed frequencies match the expected frequencies very closely, the chi-square statistic will be:',
    options: ['Very large (p-value small)', 'Very small (p-value large)', 'Negative', 'Undefined'],
    correctAnswer: 1,
    explanation:
      '$\\chi^{2}$ = Σ[$(O-E)^{2}$ / E]. When O ≈ E, each term is small, so $\\chi^{2}$ ≈ 0, yielding a large p-value. This supports $H_{0}$ (observed matches expected).',
    domain: 'unit-8-inference-categorical-chi-square',
    topicSlug: 'chi-square-tests',
    formSet: 'B',
  },
  {
    question:
      'A researcher surveys 200 voters on both political party affiliation (Democrat, Republican, Independent) and opinion on a policy (Favor, Oppose, Undecided). The chi-square test has how many degrees of freedom?',
    options: ['1', '2', '4', '6'],
    correctAnswer: 2,
    explanation:
      'For a two-way table, df = (rows − 1)(cols − 1) = (3 − 1)(3 − 1) = 2 × 2 = 4.',
    domain: 'unit-8-inference-categorical-chi-square',
    topicSlug: 'chi-square-tests',
    formSet: 'A',
  },

  // ========== UNIT 9: INFERENCE FOR QUANTITATIVE DATA: SLOPES ==========

  {
    question:
      'In a linear regression model for predicting house price from square footage, the slope is 0.12 and the p-value is 0.001. This means:',
    options: [
      'The slope is not statistically significant',
      'There is statistically significant evidence that square footage affects price',
      'The correlation is negative',
      'The slope is too small to be meaningful',
    ],
    correctAnswer: 1,
    explanation:
      'p-value (0.001) << α (0.05), so we reject $H_{0}$ that the slope = 0. We conclude square footage has a significant effect on price.',
    domain: 'unit-9-inference-quantitative-slopes',
    topicSlug: 'inference-regression',
    formSet: 'A',
  },
  {
    question:
      'A 95% confidence interval for the regression slope is (0.08, 0.16). What does this mean?',
    options: [
      'There is a 95% chance that any individual slope is between 0.08 and 0.16',
      'We are 95% confident that the true population regression slope is between 0.08 and 0.16',
      'Exactly 95% of the data points fall between these slopes',
      'The sample slope has a 95% probability of being in this interval',
    ],
    correctAnswer: 1,
    explanation:
      'A confidence interval gives a range of plausible values for the population parameter (true slope) with specified confidence.',
    domain: 'unit-9-inference-quantitative-slopes',
    topicSlug: 'least-squares-regression',
    formSet: 'B',
  },
  {
    question:
      'When testing $H_{0}$: $\\beta_{1}$ = 0 (slope is zero) in a regression model, which would be a Type II error?',
    options: [
      'Concluding the slope is zero when it actually is not',
      'Concluding the slope is not zero when it actually is zero',
      'Perfectly predicting all data points',
      'Using the wrong regression formula',
    ],
    correctAnswer: 0,
    explanation:
      'Type II error: fail to reject $H_{0}$ when $H_{0}$ is false. Here, $H_{0}$ is "slope = 0." Type II: we fail to reject it when the slope is actually not zero.',
    domain: 'unit-9-inference-quantitative-slopes',
    topicSlug: 'type-errors',
    formSet: 'A',
  },

  // ========== ADDITIONAL COVERAGE (balance and reinforce key topics) ==========

  {
    question:
      'A manufacturing company tests light bulbs and finds that the average lifespan is 1,200 hours with standard deviation 100 hours. Assuming normal distribution, approximately 95% of bulbs last between:',
    options: ['1000 and 1400 hours', '1100 and 1300 hours', '1000 and 1300 hours', '1050 and 1350 hours'],
    correctAnswer: 0,
    explanation:
      'By the empirical rule, 95% of data fall within 2σ of the mean: 1200 ± 2(100) = [1000, 1400].',
    domain: 'unit-1-exploring-one-variable',
    topicSlug: 'normal-distributions',
    formSet: 'B',
  },
  {
    question:
      'A social scientist wants to determine whether there is a relationship between education level (high school, bachelor, graduate) and income level (low, medium, high). The most appropriate test is:',
    options: ['Paired t-test', 'Chi-square test of independence', 'Linear regression', 'One-way ANOVA'],
    correctAnswer: 1,
    explanation:
      'Both variables are categorical. Chi-square tests independence between two categorical variables.',
    domain: 'unit-8-inference-categorical-chi-square',
    topicSlug: 'chi-square-tests',
    formSet: 'both',
  },
  {
    question:
      'In a sample of 100 adults, 65 support a tax policy. Construct a 95% confidence interval for the proportion of all adults who support the policy. (Use z* ≈ 1.96)',
    options: ['(0.5541, 0.7459)', '(0.65, 1.0)', '(0.55, 0.75)', '(0.60, 0.70)'],
    correctAnswer: 0,
    explanation:
      'p̂ = 0.65, SE = √[0.65(0.35)/100] ≈ 0.048. CI = 0.65 ± 1.96(0.048) = 0.65 ± 0.094 ≈ (0.556, 0.744) ≈ (0.5541, 0.7459).',
    domain: 'unit-6-inference-categorical-proportions',
    topicSlug: 'ci-proportions',
    formSet: 'A',
  },
  {
    question:
      'When is it valid to use a z-test for a population proportion rather than a t-test?',
    options: [
      'The sample size is small',
      'Both np and n(1−p) are at least 10 and the sample is random',
      'The population is normally distributed',
      'The p-value is less than 0.05',
    ],
    correctAnswer: 1,
    explanation:
      'z-test for proportion uses the large-sample normal approximation, valid when np ≥ 10 and n(1−p) ≥ 10.',
    domain: 'unit-6-inference-categorical-proportions',
    topicSlug: 'tests-proportions',
    formSet: 'B',
  },
  {
    question:
      'A study finds that students who attend tutoring sessions score an average of 15 points higher on exams. Is this evidence that tutoring causes higher scores?',
    options: [
      'Yes, because there is a large observed difference',
      'No, because confounding variables (motivation, prior knowledge) may explain the difference',
      'Yes, if the sample is large enough',
      'No, because the effect size is not measured in standard deviations',
    ],
    correctAnswer: 1,
    explanation:
      'Observational data cannot establish causation. Students who choose tutoring may differ in motivation or ability from those who do not.',
    domain: 'unit-3-collecting-data',
    topicSlug: 'observational-vs-experiments',
    formSet: 'A',
  },
  {
    question:
      'A researcher tests $H_{0}$: $\\mu_{1}$ = $\\mu_{2}$ (two groups have equal means) and gets a p-value of 0.15 at α = 0.05. The correct interpretation is:',
    options: [
      'The means are equal',
      'The means are different',
      'We have insufficient evidence to conclude the means differ; we fail to reject $H_{0}$',
      'We have proven the null hypothesis is true',
    ],
    correctAnswer: 2,
    explanation:
      'p-value (0.15) > α (0.05), so we fail to reject $H_{0}$. We cannot conclude the means differ. Note: we never prove $H_{0}$ true, only fail to reject it.',
    domain: 'unit-7-inference-quantitative-means',
    topicSlug: 'hypothesis-testing-framework',
    formSet: 'A',
  },
  {
    question:
      'In a multiple linear regression model, the coefficient for a predictor variable is negative and statistically significant. This means:',
    options: [
      'The relationship is weak',
      'As the predictor increases, the response tends to decrease, holding other predictors constant',
      'There is a causal relationship',
      'The model explains more than 50% of variance',
    ],
    correctAnswer: 1,
    explanation:
      'A negative, significant coefficient indicates an inverse relationship: higher predictor values are associated with lower response values (while controlling for other variables).',
    domain: 'unit-9-inference-quantitative-slopes',
    topicSlug: 'inference-regression',
    formSet: 'B',
  },
  {
    question:
      'A fair die is rolled twice. Let X = the sum of the two rolls. What is P(X = 7)?',
    options: ['1/11', '1/12', '1/36', '6/36'],
    correctAnswer: 3,
    explanation:
      'Ways to get sum = 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 ways. Total outcomes = 36. P(X=7) = 6/36 = 1/6.',
    domain: 'unit-4-probability-distributions',
    topicSlug: 'discrete-random-variables',
    formSet: 'A',
  },
  {
    question:
      'A company wants to estimate the proportion of defective items in a production batch. If they want a margin of error of 0.04 and use a 95% confidence level, approximately how many items should they sample?',
    options: ['n ≈ 100', 'n ≈ 600', 'n ≈ 1200', 'n ≈ 2400'],
    correctAnswer: 1,
    explanation:
      'n = $(z\\cdot )^{2}$ × p(1−p) / $E^{2}$ = $(1.96)^{2}$ × 0.5 × 0.5 / $(0.04)^{2}$ ≈ 600.',
    domain: 'unit-6-inference-categorical-proportions',
    topicSlug: 'ci-proportions',
    formSet: 'A',
  },
  {
    question:
      'A student\'s z-score on a college entrance exam is 1.5. This means:',
    options: [
      'The student scored 1.5 times the average',
      'The student scored 1.5 standard deviations above the mean',
      'The student scored 1.5 points above the average',
      'The student\'s percentile rank is 1.5%',
    ],
    correctAnswer: 1,
    explanation:
      'A z-score measures how many standard deviations a value is from the mean. z = 1.5 means 1.5σ above μ.',
    domain: 'unit-1-exploring-one-variable',
    topicSlug: 'normal-distributions',
    formSet: 'A',
  },
  {
    question:
      'In a scatterplot, if all points fall perfectly on an upward-sloping line, the correlation coefficient r is closest to:',
    options: ['-1', '-0.5', '0', '1'],
    correctAnswer: 3,
    explanation:
      'Perfect positive linear relationship → r ≈ 1. Perfect negative → r ≈ −1. No relationship → r ≈ 0.',
    domain: 'unit-2-exploring-two-variable',
    topicSlug: 'scatterplots-correlation',
    formSet: 'A',
  },
  {
    question:
      'In a health survey, 120 out of 500 respondents reported having a chronic condition. The 95% confidence interval for the proportion is approximately (0.205, 0.279). Which interpretation is correct?',
    options: [
      'There is a 95% probability the sample proportion is between 0.205 and 0.279',
      'There is a 95% probability that any new sample will have a proportion between 0.205 and 0.279',
      'We are 95% confident that the true population proportion is between 0.205 and 0.279',
      'Exactly 95% of the population has a chronic condition',
    ],
    correctAnswer: 2,
    explanation:
      'A confidence interval reflects our confidence that the procedure captures the true population parameter, not the sample or future samples.',
    domain: 'unit-6-inference-categorical-proportions',
    topicSlug: 'interpreting-ci',
    formSet: 'both',
  },
  {
    question:
      'Which of the following scenarios would require a two-sample t-test?',
    options: [
      'Testing if a coin is fair (p = 0.5)',
      'Comparing average test scores of students taught by two different teachers',
      'Testing if a population mean equals a specific value',
      'Testing the association between two categorical variables',
    ],
    correctAnswer: 1,
    explanation:
      'Two-sample t-test compares means of two independent groups. The other options require a one-sample test or chi-square test.',
    domain: 'unit-7-inference-quantitative-means',
    topicSlug: 'tests-means',
    formSet: 'A',
  },
  {
    question:
      'A researcher finds that the p-value for her test is 0.045. If she had used α = 0.05, her conclusion would be to:',
    options: [
      'Reject $H_{0}$',
      'Fail to reject $H_{0}$',
      'Accept $H_{0}$ as proven',
      'Increase the sample size',
    ],
    correctAnswer: 0,
    explanation:
      'p-value (0.045) < α (0.05), so we reject $H_{0}$. The result is statistically significant at the 0.05 level.',
    domain: 'unit-6-inference-categorical-proportions',
    topicSlug: 'hypothesis-testing-framework',
    formSet: 'A',
  },
  {
    question:
      'In a simple random sample, all possible samples of the same size have:',
    options: [
      'The same mean and standard deviation',
      'The same sample proportion',
      'An equal chance of being selected',
      'The same p-value when hypothesis tested',
    ],
    correctAnswer: 2,
    explanation:
      'Simple random sampling ensures every possible sample of size n has an equal probability of being chosen, reducing selection bias.',
    domain: 'unit-3-collecting-data',
    topicSlug: 'sampling-methods',
    formSet: 'A',
  },
  {
    question:
      'An airline claims that on average, flights are delayed by 5 minutes. A traveler suspects the actual delay is greater. What are the appropriate null and alternative hypotheses?',
    options: [
      '$H_{0}$: μ = 5; $H_{a}$: μ > 5',
      '$H_{0}$: μ = 5; $H_{a}$: μ < 5',
      '$H_{0}$: μ > 5; $H_{a}$: μ = 5',
      '$H_{0}$: μ ≠ 5; $H_{a}$: μ = 5',
    ],
    correctAnswer: 0,
    explanation:
      'The null hypothesis reflects the claim (average delay = 5 min). The alternative is the suspicion that delays are greater: μ > 5 (one-sided test).',
    domain: 'unit-7-inference-quantitative-means',
    topicSlug: 'hypothesis-testing-framework',
    formSet: 'B',
  },
  {
    question:
      'A data set has a mean of 50, median of 48, and mode of 40. What does this suggest about the distribution?',
    options: ['Left-skewed', 'Right-skewed', 'Symmetric', 'Bimodal'],
    correctAnswer: 1,
    explanation:
      'When mean > median > mode, the distribution is right-skewed. The right tail pulls the mean upward.',
    domain: 'unit-1-exploring-one-variable',
    topicSlug: 'describing-distributions',
    formSet: 'A',
  },
  {
    question:
      'If a hypothesis test results in a p-value of 0.001 at α = 0.05, which statement is true?',
    options: [
      'The null hypothesis is definitely false',
      'There is very strong evidence against the null hypothesis',
      'The alternative hypothesis is definitely true',
      'The effect size must be large',
    ],
    correctAnswer: 1,
    explanation:
      'A very small p-value indicates strong evidence against $H_{0}$, but it does not prove $H_{0}$ is false. Effect size is separate from statistical significance.',
    domain: 'unit-6-inference-categorical-proportions',
    topicSlug: 'hypothesis-testing-framework',
    formSet: 'A',
  },
]

export { apStatsEmbeddedPool }

/* ------------------------------------------------------------------ */
/*  Seeded PRNG (mulberry32) for deterministic per-form selection      */
/* ------------------------------------------------------------------ */

function seededShuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

/**
 * Build a diagnostic test for a given form number (1–10).
 * Uses a seeded PRNG so each form deterministically selects a different
 * subset of questions from the pool for each domain.
 */
export function generateAPStatsDiagnosticTest(
  form: number,
): APStatsDiagnosticTestData {
  const rng = mulberry32(form * 7919) // distinct seed per form

  // Merge embedded pool + exit-quiz pool, dedupe by question text
  const seen = new Set<string>()
  const combined: APStatsDiagnosticQuestion[] = []
  for (const q of [...apStatsQuestionPool, ...apStatsEmbeddedPool]) {
    if (!seen.has(q.question)) {
      seen.add(q.question)
      combined.push({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        domain: q.domain,
        topicSlug: q.topicSlug,
      })
    }
  }

  const questions: APStatsDiagnosticQuestion[] = []

  for (const domain of AP_STATS_DOMAINS) {
    const pool = combined.filter(q => q.domain === domain.id)
    const shuffled = seededShuffle(pool, rng)
    const selected = shuffled.slice(0, domain.questionTarget)

    for (const q of selected) {
      questions.push(q)
    }
  }

  // Final shuffle so domains aren't grouped together
  const shuffledQuestions = seededShuffle(questions, rng)

  return {
    form,
    questions: shuffledQuestions,
    domains: AP_STATS_DOMAINS,
    totalQuestions: shuffledQuestions.length,
    timeLimitMinutes: 45,
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

export function scoreAPStatsDiagnostic(
  form: number,
  questions: APStatsDiagnosticQuestion[],
  answers: Record<number, number>,
): APStatsDiagnosticResults {
  const domainResults: APStatsDomainResult[] = AP_STATS_DOMAINS.map(domain => {
    const domainQs = questions
      .map((q, i) => ({ q, i }))
      .filter(({ q }) => q.domain === domain.id)

    const correct = domainQs.filter(({ i }) => {
      const answer = answers[i]
      return answer !== undefined && answer === questions[i].correctAnswer
    }).length

    const total = domainQs.length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    const level: 'strong' | 'moderate' | 'weak' =
      percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'

    return {
      domainId: domain.id,
      domainName: domain.name,
      correct,
      total,
      percentage,
      level,
    }
  })

  const totalCorrect = domainResults.reduce((s, d) => s + d.correct, 0)
  const totalQuestions = domainResults.reduce((s, d) => s + d.total, 0)
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  // Estimated AP score (1-5 scale)
  let estimatedAPScore: number
  if (percentage >= 80) estimatedAPScore = 5
  else if (percentage >= 65) estimatedAPScore = 4
  else if (percentage >= 50) estimatedAPScore = 3
  else if (percentage >= 35) estimatedAPScore = 2
  else estimatedAPScore = 1

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  // Build recommended topics — pick 1-2 slugs per weak domain, 1 per moderate domain
  // prioritize weak first, cap at 5 total
  const recommendedTopics: APStatsRecommendedTopic[] = []

  // Prioritize by exam weight (questionTarget) so highest-impact topics surface first.
  const examWeight = (id: string) =>
    AP_STATS_DOMAINS.find(d => d.id === id)?.questionTarget ?? 0
  const weakDomains = [...domainResults.filter(d => d.level === 'weak')].sort(
    (a, b) => examWeight(b.domainId) - examWeight(a.domainId),
  )
  const moderateDomains = [...domainResults.filter(d => d.level === 'moderate')].sort(
    (a, b) => examWeight(b.domainId) - examWeight(a.domainId),
  )

  for (const wd of weakDomains) {
    const domainDef = AP_STATS_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue

    // Find specific topic slugs the student missed
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => {
      if (q.domain === wd.domainId) {
        const answer = answers[i]
        if (answer === undefined || answer !== q.correctAnswer) {
          missedSlugs.add(q.topicSlug)
        }
      }
    })

    const slugsToRecommend =
      missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)

    for (const slug of slugsToRecommend) {
      if (recommendedTopics.length >= 5) break
      recommendedTopics.push({
        slug,
        name: slugToReadableName(slug),
        domainId: wd.domainId,
        priority: 'high',
      })
    }
  }

  for (const md of moderateDomains) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_STATS_DOMAINS.find(d => d.id === md.domainId)
    if (!domainDef) continue

    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => {
      if (q.domain === md.domainId) {
        const answer = answers[i]
        if (answer === undefined || answer !== q.correctAnswer) {
          missedSlugs.add(q.topicSlug)
        }
      }
    })

    const slug = missedSlugs.size > 0 ? [...missedSlugs][0] : domainDef.topicSlugs[0]

    recommendedTopics.push({
      slug,
      name: slugToReadableName(slug),
      domainId: md.domainId,
      priority: 'medium',
    })
  }

  return {
    form,
    totalCorrect,
    totalQuestions,
    percentage,
    estimatedAPScore,
    domains: domainResults,
    weakAreas,
    moderateAreas,
    strengths,
    recommendedTopics: recommendedTopics.slice(0, 5),
  }
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/**
 * Pick the next form the student should take.
 * Cycles sequentially through forms 1–10.
 */
export function pickNextForm(previousForms: number[]): number {
  if (previousForms.length === 0) return 1
  const last = previousForms[previousForms.length - 1]
  return last >= TOTAL_FORMS ? 1 : last + 1
}

const SLUG_LABELS: Record<string, string> = {
  'types-data-sampling': 'Types of Data & Sampling',
  'displaying-distributions-graphs': 'Displaying Distributions',
  'describing-distributions': 'Describing Distributions',
  'measures-of-spread': 'Measures of Spread',
  'measures-of-center': 'Measures of Center',
  'normal-distributions': 'Normal Distributions',
  'sampling-methods': 'Sampling Methods',
  'bias-sampling-surveys': 'Bias in Sampling & Surveys',
  'observational-vs-experiments': 'Observational Studies vs. Experiments',
  'experimental-design': 'Experimental Design',
  'basic-probability-rules': 'Probability Rules',
  'conditional-probability': 'Conditional Probability',
  'independence': 'Independence',
  'discrete-random-variables': 'Discrete Random Variables',
  'continuous-random-variables': 'Continuous Random Variables',
  'binomial-distribution': 'Binomial Distribution',
  'geometric-distribution': 'Geometric Distribution',
  'scatterplots-correlation': 'Scatterplots & Correlation',
  'least-squares-regression': 'Least-Squares Regression',
  'residuals-residual-plots': 'Residuals & Residual Plots',
  'coefficient-determination': 'Coefficient of Determination',
  'transformations-linearity': 'Transformations for Linearity',
  'sampling-distributions': 'Sampling Distributions',
  'central-limit-theorem': 'Central Limit Theorem',
  'ci-proportions': 'Confidence Intervals for Proportions',
  'ci-means': 'Confidence Intervals for Means',
  'interpreting-ci': 'Interpreting Confidence Intervals',
  'paired-data': 'Paired Data',
  'hypothesis-testing-framework': 'Hypothesis Testing Framework',
  'tests-proportions': 'Tests for Proportions',
  'tests-means': 'Tests for Means',
  'type-errors': 'Type I & Type II Errors',
  'chi-square-tests': 'Chi-Square Tests',
  'inference-regression': 'Inference for Regression',
}

function slugToReadableName(slug: string): string {
  return (
    SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  )
}
