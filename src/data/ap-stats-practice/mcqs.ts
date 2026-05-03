import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Statistics — 40 MCQs across all 9 units (CED).
 *   U1 Exploring One-Variable Categorical Data    (4)
 *   U2 Exploring One-Variable Quantitative Data   (5)
 *   U3 Exploring Two-Variable Data                (5)
 *   U4 Collecting Data (Experimental Design)      (4)
 *   U5 Probability, Random Variables, Distributions (5)
 *   U6 Sampling Distributions                     (4)
 *   U7 Inference for Proportions (1-prop, 2-prop) (4)
 *   U8 Inference for Means (1-sample, 2-sample, paired) (5)
 *   U9 Inference for Slopes & Chi-Square           (4)
 *
 * Calculator allowed throughout.
 */

export const MCQS: MCQItem[] = [
  /* ---- U1 Exploring One-Variable Categorical Data (4) ---- */
  {
    type: 'mcq',
    topic: 'unit-1-categorical-data',
    question: 'A bar chart of favorite ice cream flavors at a school cafeteria shows: Chocolate (40%), Vanilla (30%), Strawberry (20%), Mint (10%). Which graph type is MOST appropriate for displaying these data?',
    options: ['Histogram', 'Bar chart or pie chart', 'Boxplot', 'Stem-and-leaf plot'],
    correctAnswer: 1,
    explanation: 'Categorical (qualitative) data are best shown with bar charts or pie charts. Histograms, boxplots, and stem-and-leaf plots are for quantitative data.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-categorical-data',
    question: 'In a two-way table of gender vs. preferred sport, the conditional distribution of sport given female is found by',
    options: [
      'dividing each cell in the female row by the total of the female row',
      'dividing each cell by the grand total',
      'dividing the female row total by the grand total',
      'dividing each cell by its column total',
    ],
    correctAnswer: 0,
    explanation: 'Conditional distribution of sport GIVEN female: condition on the female row, so divide each cell in that row by the female row total.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-categorical-data',
    question: 'Two variables in a two-way table are associated when',
    options: [
      'their marginal distributions are equal',
      'the conditional distributions of one variable differ across categories of the other',
      'every cell count is the same',
      'the variables are both quantitative',
    ],
    correctAnswer: 1,
    explanation: 'Association in categorical variables = conditional distributions differ. If conditional distributions are the SAME across the other variable\'s categories, the variables are independent.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-categorical-data',
    question: 'A segmented (stacked) bar chart is most useful for',
    options: [
      'showing exact counts',
      'comparing conditional distributions across groups',
      'displaying quantitative data trends',
      'showing time-series data',
    ],
    correctAnswer: 1,
    explanation: 'Segmented bar charts (especially relative-frequency segmented) excel at comparing conditional distributions across groups by showing proportions side-by-side.',
  },

  /* ---- U2 Exploring One-Variable Quantitative Data (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-2-quantitative-data',
    question: 'For a right-skewed distribution, which is true about the mean and median?',
    options: ['mean < median', 'mean = median', 'mean > median', 'cannot determine'],
    correctAnswer: 2,
    explanation: 'Right skew (long tail to the right) pulls the mean toward the tail ⇒ mean > median.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-quantitative-data',
    question: 'The five-number summary of a dataset is: min = 12, Q1 = 18, median = 25, Q3 = 32, max = 50. The IQR is',
    options: ['7', '14', '20', '38'],
    correctAnswer: 1,
    explanation: 'IQR = Q3 − Q1 = 32 − 18 = 14.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-quantitative-data',
    question: 'Using the 1.5×IQR rule on the dataset above (Q1=18, Q3=32, IQR=14), an observation is considered an outlier if it is',
    options: ['below 4 or above 39', 'below −3 or above 53', 'below 11 or above 39', 'below −3 or above 60'],
    correctAnswer: 1,
    explanation: 'Lower fence = Q1 − 1.5(14) = 18 − 21 = −3. Upper fence = Q3 + 1.5(14) = 32 + 21 = 53. Observations outside [−3, 53] are outliers.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-quantitative-data',
    question: 'Adding 5 to every value in a dataset will',
    options: [
      'increase mean by 5 and increase standard deviation by 5',
      'increase mean by 5 and leave standard deviation unchanged',
      'increase mean and decrease standard deviation',
      'leave mean unchanged and increase standard deviation by 5',
    ],
    correctAnswer: 1,
    explanation: 'Adding a constant shifts measures of center but does not change measures of spread (the data are not stretched, just translated).',
  },
  {
    type: 'mcq',
    topic: 'unit-2-quantitative-data',
    question: 'A z-score of $-2.0$ means the observation is',
    options: [
      '2 standard deviations above the mean',
      '2 standard deviations below the mean',
      '2 units above the mean',
      'cannot interpret without more info',
    ],
    correctAnswer: 1,
    explanation: 'z-score = (x − μ)/σ. z = −2 means the observation is 2 standard deviations BELOW the mean.',
  },

  /* ---- U3 Exploring Two-Variable Data (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-3-two-variable-data',
    question: 'A correlation coefficient of $r = -0.85$ indicates',
    options: [
      'weak negative linear association',
      'strong negative linear association',
      'no association',
      'strong positive linear association',
    ],
    correctAnswer: 1,
    explanation: '|r| close to 1 = strong association. r = −0.85 ⇒ strong NEGATIVE linear association.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-two-variable-data',
    question: 'A least-squares regression line is $\\hat{y} = 3 + 2x$, with $r = 0.80$. The proportion of variation in y explained by the regression on x is',
    options: ['0.40', '0.64', '0.80', '0.90'],
    correctAnswer: 1,
    explanation: '$r^2 = (0.80)^2 = 0.64$. So 64% of the variation in y is explained by the linear relationship with x.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-two-variable-data',
    question: 'Which point would be considered influential in a least-squares regression?',
    options: [
      'A point near the mean of x with small residual',
      'A point with extreme x-value (high leverage) that, if removed, substantially changes the regression line',
      'Any point with a large positive residual',
      'The point with the highest y-value only',
    ],
    correctAnswer: 1,
    explanation: 'Influential points are typically high-leverage points (extreme x) whose removal substantially changes the slope and/or intercept of the regression line.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-two-variable-data',
    question: 'The residual for an observation is defined as',
    options: ['$\\hat{y} - y$', '$y - \\hat{y}$', '$y - \\bar{y}$', '$\\hat{y} - \\bar{y}$'],
    correctAnswer: 1,
    explanation: 'Residual = observed − predicted = $y - \\hat{y}$.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-two-variable-data',
    question: 'A scatterplot of residuals vs. fitted values shows a clear curved (U-shaped) pattern. This suggests',
    options: [
      'the linear model is appropriate',
      'a non-linear model would fit better',
      'the data have outliers',
      'the regression slope is zero',
    ],
    correctAnswer: 1,
    explanation: 'Random scatter in residual plot ⇒ linear model is appropriate. Curved/systematic pattern ⇒ linear model is INAPPROPRIATE; non-linear (e.g., quadratic, exponential) fit needed.',
  },

  /* ---- U4 Collecting Data (4) ---- */
  {
    type: 'mcq',
    topic: 'unit-4-collecting-data',
    question: 'A researcher wants to study the average height of all students at a large university. The best sampling method to ensure a representative sample is',
    options: [
      'Convenience sample of students entering the library',
      'Voluntary response survey posted on the school website',
      'Simple random sample using student ID numbers',
      'Sample of all students in one large lecture',
    ],
    correctAnswer: 2,
    explanation: 'SRS gives every student equal chance of selection and is unbiased. Convenience and voluntary response samples are typically biased.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-collecting-data',
    question: 'A study randomly assigns subjects to either a new drug or a placebo and is double-blind. This design controls for',
    options: [
      'sampling bias only',
      'placebo effect and experimenter bias',
      'lurking variables only',
      'response bias only',
    ],
    correctAnswer: 1,
    explanation: 'Double-blind = neither subjects nor experimenters know group assignment ⇒ controls for placebo effect AND experimenter bias. Random assignment also controls for confounding (lurking) variables.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-collecting-data',
    question: 'In a stratified random sample, the population is',
    options: [
      'divided into clusters and a random sample of clusters chosen',
      'divided into strata (groups of similar units) and an SRS taken from each stratum',
      'sampled at every k-th unit',
      'selected entirely from one convenient location',
    ],
    correctAnswer: 1,
    explanation: 'Stratified sampling: divide population into homogeneous strata (e.g., by grade), then take SRS within each stratum. Reduces variability when strata differ in the variable of interest.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-collecting-data',
    question: 'A study finds that students who eat breakfast have higher GPAs. The conclusion that "eating breakfast causes higher GPA" is appropriate only if',
    options: [
      'the sample size is large',
      'the study was a randomized experiment',
      'the correlation coefficient is high',
      'the data come from a survey',
    ],
    correctAnswer: 1,
    explanation: 'Causation can only be established by a randomized experiment. Observational studies (surveys) can show association but cannot rule out lurking variables.',
  },

  /* ---- U5 Probability, RVs, Distributions (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-5-probability-rv',
    question: 'Two events A and B are independent with $P(A) = 0.4$ and $P(B) = 0.5$. Then $P(A \\cap B) =$',
    options: ['0.10', '0.20', '0.45', '0.90'],
    correctAnswer: 1,
    explanation: 'Independence: $P(A \\cap B) = P(A) \\cdot P(B) = 0.4 \\times 0.5 = 0.20$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-probability-rv',
    question: 'A discrete random variable X has $E(X) = 5$ and $\\text{Var}(X) = 4$. The mean and variance of $Y = 3X + 2$ are',
    options: [
      '$E(Y) = 17$, $\\text{Var}(Y) = 36$',
      '$E(Y) = 15$, $\\text{Var}(Y) = 4$',
      '$E(Y) = 17$, $\\text{Var}(Y) = 12$',
      '$E(Y) = 15$, $\\text{Var}(Y) = 14$',
    ],
    correctAnswer: 0,
    explanation: '$E(aX+b) = aE(X)+b = 3(5)+2 = 17$. $\\text{Var}(aX+b) = a^2\\text{Var}(X) = 9 \\cdot 4 = 36$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-probability-rv',
    question: 'A binomial distribution has $n = 20$ and $p = 0.3$. The mean and standard deviation are',
    options: [
      '$\\mu = 6$, $\\sigma \\approx 2.05$',
      '$\\mu = 6$, $\\sigma \\approx 4.20$',
      '$\\mu = 4$, $\\sigma \\approx 2.05$',
      '$\\mu = 0.3$, $\\sigma \\approx 0.46$',
    ],
    correctAnswer: 0,
    explanation: '$\\mu = np = 20(0.3) = 6$. $\\sigma = \\sqrt{np(1-p)} = \\sqrt{20(0.3)(0.7)} = \\sqrt{4.2} \\approx 2.05$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-probability-rv',
    question: 'A geometric random variable counts',
    options: [
      'the number of successes in a fixed number of trials',
      'the number of trials needed until the first success',
      'the number of failures before any success',
      'the average outcome of independent trials',
    ],
    correctAnswer: 1,
    explanation: 'Geometric distribution = number of independent Bernoulli trials needed to get the FIRST success. Binomial = fixed n, count successes.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-probability-rv',
    question: 'For a continuous random variable X with normal distribution $N(\\mu = 100, \\sigma = 15)$, the probability $P(X > 130)$ is closest to',
    options: ['0.0228', '0.0500', '0.1587', '0.3173'],
    correctAnswer: 0,
    explanation: 'z = (130 − 100)/15 = 2.0. P(Z > 2) ≈ 0.0228 (about 2.28%).',
  },

  /* ---- U6 Sampling Distributions (4) ---- */
  {
    type: 'mcq',
    topic: 'unit-6-sampling-distributions',
    question: 'For a sampling distribution of $\\bar{x}$ from samples of size n drawn from a population with mean μ and standard deviation σ, the standard deviation (standard error) of $\\bar{x}$ is',
    options: ['σ', '$\\sigma/n$', '$\\sigma/\\sqrt{n}$', '$\\sigma^2/n$'],
    correctAnswer: 2,
    explanation: 'Standard error of the sample mean = $\\sigma/\\sqrt{n}$. Decreases as sample size increases.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-sampling-distributions',
    question: 'The Central Limit Theorem states that for large n,',
    options: [
      'the population distribution becomes normal',
      'the sampling distribution of the sample mean is approximately normal',
      'every sample mean equals the population mean',
      'the variance of the sample equals zero',
    ],
    correctAnswer: 1,
    explanation: 'CLT: regardless of population shape, the sampling distribution of $\\bar{x}$ is approximately normal for large n (typically n ≥ 30).',
  },
  {
    type: 'mcq',
    topic: 'unit-6-sampling-distributions',
    question: 'For a sampling distribution of the sample proportion $\\hat{p}$ to be approximately normal, we typically require',
    options: [
      '$n \\geq 30$',
      '$np \\geq 10$ and $n(1-p) \\geq 10$',
      '$p > 0.5$',
      '$\\hat{p} = p$',
    ],
    correctAnswer: 1,
    explanation: 'Large counts condition (Normal approx for proportion): both $np \\geq 10$ and $n(1-p) \\geq 10$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-sampling-distributions',
    question: 'A population has mean μ = 50 and σ = 10. Samples of size n = 25 are drawn. The standard error of $\\bar{x}$ is',
    options: ['0.4', '2.0', '10', '50'],
    correctAnswer: 1,
    explanation: '$\\sigma_{\\bar{x}} = 10/\\sqrt{25} = 10/5 = 2.0$.',
  },

  /* ---- U7 Inference for Proportions (4) ---- */
  {
    type: 'mcq',
    topic: 'unit-7-inference-proportions',
    question: 'A 95% confidence interval for a population proportion p is $(0.45, 0.55)$. Which is the correct interpretation?',
    options: [
      'There is a 95% probability that p is between 0.45 and 0.55',
      'We are 95% confident the interval (0.45, 0.55) contains the true proportion p',
      '95% of sample proportions fall between 0.45 and 0.55',
      'The sample proportion is 0.50',
    ],
    correctAnswer: 1,
    explanation: 'Correct interpretation of confidence: the METHOD captures p in 95% of repeated samples. We are 95% confident this particular interval contains p. Avoid probability language about p (p is fixed, not random).',
  },
  {
    type: 'mcq',
    topic: 'unit-7-inference-proportions',
    question: 'In a sample of 200 voters, 110 favor Candidate A. The 95% confidence interval for the true proportion is closest to',
    options: ['(0.48, 0.62)', '(0.50, 0.60)', '(0.51, 0.59)', '(0.45, 0.65)'],
    correctAnswer: 0,
    explanation: '$\\hat{p} = 0.55$. SE = $\\sqrt{0.55(0.45)/200} \\approx 0.0352$. ME = 1.96(0.0352) ≈ 0.069. Interval: (0.481, 0.619) ≈ (0.48, 0.62).',
  },
  {
    type: 'mcq',
    topic: 'unit-7-inference-proportions',
    question: 'A test of $H_0: p = 0.5$ vs. $H_a: p \\neq 0.5$ produces $\\hat{p} = 0.55$ from $n = 100$. The test statistic z is',
    options: ['1.0', '$\\sqrt{2}$', '2.0', '5.0'],
    correctAnswer: 0,
    explanation: '$z = (0.55 - 0.50)/\\sqrt{0.5(0.5)/100} = 0.05/\\sqrt{0.0025} = 0.05/0.05 = 1.0$.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-inference-proportions',
    question: 'A Type I error is committed when',
    options: [
      'we fail to reject a false $H_0$',
      'we reject a true $H_0$',
      'we fail to reject a true $H_0$',
      'we reject a false $H_0$',
    ],
    correctAnswer: 1,
    explanation: 'Type I error = REJECT a TRUE null hypothesis (false alarm). Probability = α (significance level). Type II = fail to reject FALSE null.',
  },

  /* ---- U8 Inference for Means (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-8-inference-means',
    question: 'For a one-sample t-test on a small sample (n = 15) with unknown σ, the appropriate distribution is',
    options: [
      'Standard normal',
      't-distribution with 15 degrees of freedom',
      't-distribution with 14 degrees of freedom',
      'Chi-square with 14 degrees of freedom',
    ],
    correctAnswer: 2,
    explanation: 'For one-sample t with sample size n: df = n − 1 = 14.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-inference-means',
    question: 'A 95% confidence interval for μ from a sample of size n = 36 with $\\bar{x} = 50$ and s = 6 is closest to (use t* ≈ 2.03)',
    options: ['(48.0, 52.0)', '(48.0, 52.0) using a wider interval', '(50.0 ± 2.03)', '(50.0 − 2.03(1), 50.0 + 2.03(1))'],
    correctAnswer: 3,
    explanation: 'SE = $s/\\sqrt{n} = 6/6 = 1$. ME = $t^* \\cdot SE = 2.03(1) = 2.03$. Interval: (47.97, 52.03), expressed as 50.0 ± 2.03.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-inference-means',
    question: 'A paired t-test is appropriate when',
    options: [
      'two independent samples are compared',
      'the same subjects are measured twice (e.g., before/after) and we test the mean difference',
      'three or more group means are compared',
      'a categorical variable is tested',
    ],
    correctAnswer: 1,
    explanation: 'Paired t = matched pairs (same subjects measured twice, or naturally matched). Test on the mean of the differences. Two-sample t = independent groups.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-inference-means',
    question: 'For a hypothesis test, the p-value is',
    options: [
      'the probability the null hypothesis is true',
      'the probability of observing the test statistic, or one more extreme, assuming H₀ is true',
      'the significance level α',
      'the probability of a Type II error',
    ],
    correctAnswer: 1,
    explanation: 'p-value = P(observed test statistic OR more extreme | H₀ true). NOT P(H₀ true). Compare to α to decide.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-inference-means',
    question: 'A two-sample t-test gives p-value = 0.03 with α = 0.05. The correct conclusion is',
    options: [
      'Fail to reject H₀; means are equal',
      'Reject H₀; convincing evidence of a difference in means',
      'Accept H₀; means are equal',
      'p-value > α; no conclusion',
    ],
    correctAnswer: 1,
    explanation: 'p (0.03) < α (0.05) ⇒ REJECT H₀ ⇒ statistically significant evidence of a difference in population means.',
  },

  /* ---- U9 Inference for Slopes & Chi-Square (4) ---- */
  {
    type: 'mcq',
    topic: 'unit-9-chi-square-slopes',
    question: 'A chi-square test for goodness-of-fit checks',
    options: [
      'whether two categorical variables are independent',
      'whether observed counts match a hypothesized distribution',
      'whether two means are equal',
      'whether a regression slope is zero',
    ],
    correctAnswer: 1,
    explanation: 'Goodness-of-fit: tests whether observed frequencies match a hypothesized distribution (e.g., uniform). Test of INDEPENDENCE/HOMOGENEITY uses two-way tables.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-chi-square-slopes',
    question: 'A chi-square test of independence on a 3×4 two-way table has degrees of freedom equal to',
    options: ['7', '6', '12', '3'],
    correctAnswer: 1,
    explanation: 'df = (rows − 1)(columns − 1) = (3 − 1)(4 − 1) = 2 × 3 = 6.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-chi-square-slopes',
    question: 'In linear regression inference, $H_0: \\beta = 0$ tests whether',
    options: [
      'the y-intercept is zero',
      'the slope of the population regression line is zero (no linear relationship)',
      'the correlation is positive',
      'the residuals are normally distributed',
    ],
    correctAnswer: 1,
    explanation: '$\\beta$ = population slope. $H_0: \\beta = 0$ tests "no linear relationship between x and y" in the population.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-chi-square-slopes',
    question: 'A linear regression t-test for slope produces $t = 3.5$ with df = 18 and p < 0.01. The conclusion at α = 0.05 is',
    options: [
      'Fail to reject H₀; no linear relationship',
      'Reject H₀; statistically significant linear relationship between x and y',
      'p > α; no conclusion',
      'The regression model fits perfectly',
    ],
    correctAnswer: 1,
    explanation: 'p (< 0.01) < α (0.05) ⇒ REJECT H₀ ⇒ statistically significant evidence of a linear relationship (β ≠ 0).',
  },
]
