import type { PracticeExamConfig, PracticeQuestion } from '@/components/PracticeExam'

const POOL: PracticeQuestion[] = [
  { question: 'What is the probability that a fair coin lands heads on a single flip?', options: ['0.25', '0.50', '0.75', '1.00'], correctAnswer: 1, explanation: 'A fair coin has two equally likely outcomes, so P(heads) = 1/2 = 0.50.', topic: 'probability' },
  { question: 'The mean of a dataset is 50 and the standard deviation is 10. What z-score corresponds to a value of 70?', options: ['0.5', '1.0', '2.0', '7.0'], correctAnswer: 2, explanation: 'z = (x - μ)/σ = (70 - 50)/10 = 2.0.', topic: 'normal-distribution' },
  { question: 'Which measure of center is most resistant to outliers?', options: ['Mean', 'Median', 'Range', 'Standard deviation'], correctAnswer: 1, explanation: 'The median is resistant to extreme values because it depends only on the middle value(s) of the ordered dataset.', topic: 'descriptive-statistics' },
  { question: 'In a hypothesis test, a Type I error occurs when:', options: ['We fail to reject a true null', 'We reject a true null hypothesis', 'We accept a false null', 'The sample size is too small'], correctAnswer: 1, explanation: 'A Type I error (false positive) occurs when we incorrectly reject a null hypothesis that is actually true.', topic: 'inference' },
  { question: 'What is the shape of the sampling distribution of the sample mean for large samples?', options: ['Uniform', 'Skewed', 'Approximately normal', 'Bimodal'], correctAnswer: 2, explanation: 'By the Central Limit Theorem, the sampling distribution of x̄ is approximately normal for large n, regardless of population shape.', topic: 'sampling-distributions' },
  { question: 'A correlation coefficient of r = -0.85 indicates:', options: ['Weak positive association', 'Strong positive association', 'Weak negative association', 'Strong negative association'], correctAnswer: 3, explanation: 'r = -0.85 indicates a strong negative linear association between the two variables.', topic: 'regression' },
  { question: 'Which sampling method divides the population into groups and randomly selects entire groups?', options: ['Simple random', 'Stratified', 'Cluster', 'Systematic'], correctAnswer: 2, explanation: 'Cluster sampling randomly selects entire groups (clusters) and samples all members within selected clusters.', topic: 'data-collection' },
  { question: 'If P(A) = 0.3 and P(B) = 0.4, and A and B are independent, what is P(A and B)?', options: ['0.12', '0.70', '0.10', '0.58'], correctAnswer: 0, explanation: 'For independent events: P(A and B) = P(A) × P(B) = 0.3 × 0.4 = 0.12.', topic: 'probability' },
  { question: 'A 95% confidence interval for a population mean is (42, 58). What is the margin of error?', options: ['4', '8', '16', '50'], correctAnswer: 1, explanation: 'Margin of error = (upper - lower)/2 = (58 - 42)/2 = 8.', topic: 'confidence-intervals' },
  { question: 'In a boxplot, the interquartile range (IQR) represents:', options: ['The range of the entire dataset', 'The middle 50% of the data', 'The distance between mean and median', 'The spread of 95% of data'], correctAnswer: 1, explanation: 'The IQR = Q3 - Q1, representing the spread of the middle 50% of the data.', topic: 'descriptive-statistics' },
  { question: 'Which test is appropriate for comparing two population proportions?', options: ['t-test', 'Chi-square goodness of fit', 'Two-proportion z-test', 'ANOVA'], correctAnswer: 2, explanation: 'A two-proportion z-test compares proportions from two independent populations.', topic: 'inference' },
  { question: 'The coefficient of determination (r²) = 0.81. This means:', options: ['81% of variation in y is explained by x', '81% of predictions are correct', 'The correlation is 0.81', 'The slope is 0.81'], correctAnswer: 0, explanation: 'r² = 0.81 means 81% of the variation in the response variable is explained by the linear relationship with the predictor.', topic: 'regression' },
  { question: 'A study that observes subjects without imposing treatments is called:', options: ['Experiment', 'Observational study', 'Census', 'Simulation'], correctAnswer: 1, explanation: 'An observational study observes individuals without manipulating variables or assigning treatments.', topic: 'data-collection' },
  { question: 'For a normal distribution, approximately what percentage of data falls within 1 standard deviation of the mean?', options: ['50%', '68%', '95%', '99.7%'], correctAnswer: 1, explanation: 'The empirical rule: about 68% of data falls within 1 standard deviation of the mean in a normal distribution.', topic: 'normal-distribution' },
  { question: 'What does it mean if a p-value is 0.03?', options: ['3% chance the alternative is true', 'There is a 3% probability of observing results this extreme if H₀ is true', '97% confidence', 'The effect size is 0.03'], correctAnswer: 1, explanation: 'A p-value of 0.03 means there is a 3% chance of observing the data (or more extreme) if the null hypothesis is true.', topic: 'inference' },
  { question: 'Which condition is NOT required for a binomial setting?', options: ['Fixed number of trials', 'Two outcomes per trial', 'Trials are independent', 'Variable probability of success'], correctAnswer: 3, explanation: 'Binomial settings require: fixed n, binary outcomes, independence, and CONSTANT probability of success.', topic: 'probability' },
  { question: 'The standard error of the sample mean decreases when:', options: ['Population standard deviation increases', 'Sample size increases', 'Confidence level increases', 'Population size decreases'], correctAnswer: 1, explanation: 'SE = σ/√n. As sample size n increases, the standard error decreases.', topic: 'sampling-distributions' },
  { question: 'A chi-square test for independence is used to:', options: ['Compare means', 'Test if two categorical variables are related', 'Find correlation', 'Test normality'], correctAnswer: 1, explanation: 'The chi-square test for independence tests whether there is a significant association between two categorical variables.', topic: 'chi-square' },
  { question: 'Which type of bias occurs when certain members of a population have no chance of being selected?', options: ['Response bias', 'Nonresponse bias', 'Undercoverage bias', 'Measurement bias'], correctAnswer: 2, explanation: 'Undercoverage (selection) bias occurs when some groups in the population are left out of the sampling frame.', topic: 'data-collection' },
  { question: 'A residual plot that shows a curved pattern suggests:', options: ['A linear model is appropriate', 'The model has a good fit', 'A nonlinear model may be better', 'There is no association'], correctAnswer: 2, explanation: 'A curved pattern in residuals indicates the linear model is not capturing the relationship well; a nonlinear model may fit better.', topic: 'regression' },
  { question: 'If events A and B are mutually exclusive, what is P(A or B)?', options: ['P(A) × P(B)', 'P(A) + P(B)', 'P(A) + P(B) − P(A and B)', '0'], correctAnswer: 1, explanation: 'For mutually exclusive events, P(A and B) = 0, so P(A or B) = P(A) + P(B).', topic: 'probability' },
  { question: 'The power of a statistical test is the probability of:', options: ['Making a Type I error', 'Making a Type II error', 'Correctly rejecting a false null', 'Correctly accepting a true null'], correctAnswer: 2, explanation: 'Power = 1 - β = probability of correctly rejecting a false null hypothesis.', topic: 'inference' },
  { question: 'In a normal distribution, what percentage of data falls above the mean?', options: ['25%', '50%', '68%', '95%'], correctAnswer: 1, explanation: 'The normal distribution is symmetric; exactly 50% of data falls above the mean and 50% below.', topic: 'normal-distribution' },
  { question: 'Which graph is best for displaying the distribution of a quantitative variable?', options: ['Bar chart', 'Pie chart', 'Histogram', 'Scatter plot'], correctAnswer: 2, explanation: 'Histograms display the distribution (shape, center, spread) of a single quantitative variable.', topic: 'descriptive-statistics' },
  { question: 'A lurking variable is one that:', options: ['Is directly measured', 'Influences both the explanatory and response variables', 'Is the response variable', 'Has no effect on the study'], correctAnswer: 1, explanation: 'A lurking (confounding) variable is not included in the study but affects both the explanatory and response variables.', topic: 'data-collection' },
  { question: 'What happens to the width of a confidence interval when the sample size quadruples?', options: ['Doubles', 'Halves', 'Stays the same', 'Quarters'], correctAnswer: 1, explanation: 'The margin of error is proportional to 1/√n. Quadrupling n cuts the width in half.', topic: 'confidence-intervals' },
  { question: 'In a regression equation ŷ = 3 + 2x, what is the predicted y when x = 5?', options: ['5', '10', '13', '15'], correctAnswer: 2, explanation: 'ŷ = 3 + 2(5) = 3 + 10 = 13.', topic: 'regression' },
  { question: 'Stratified random sampling is useful when:', options: ['The population is homogeneous', 'You want to ensure representation of subgroups', 'Random selection is impossible', 'The sample size is very small'], correctAnswer: 1, explanation: 'Stratified sampling divides the population into strata and samples from each, ensuring subgroup representation.', topic: 'data-collection' },
  { question: 'The expected value of a discrete random variable represents:', options: ['The most common value', 'The long-run average', 'The median', 'The maximum value'], correctAnswer: 1, explanation: 'The expected value E(X) = Σ(xᵢ × pᵢ) represents the long-run average over many repetitions.', topic: 'probability' },
  { question: 'What is the appropriate test to determine if a die is fair?', options: ['One-sample t-test', 'Chi-square goodness of fit', 'Two-sample z-test', 'Paired t-test'], correctAnswer: 1, explanation: 'A chi-square goodness of fit test compares observed frequencies to expected frequencies for a fair die.', topic: 'chi-square' },
  { question: 'In an experiment, the purpose of a control group is to:', options: ['Increase sample size', 'Provide a baseline for comparison', 'Eliminate all variables', 'Ensure random sampling'], correctAnswer: 1, explanation: 'The control group receives no treatment (or a placebo) and serves as a baseline to compare against the treatment group.', topic: 'data-collection' },
  { question: 'What does a standard deviation of 0 indicate?', options: ['Maximum variability', 'All data values are the same', 'The data is normally distributed', 'There is an error'], correctAnswer: 1, explanation: 'A standard deviation of 0 means there is no variability — every data point equals the mean.', topic: 'descriptive-statistics' },
  { question: 'Which of the following is a continuous random variable?', options: ['Number of students in a class', 'Number of heads in 10 flips', 'Height of a person', 'Number of defective items'], correctAnswer: 2, explanation: 'Height is continuous because it can take any value within a range (not just integers).', topic: 'probability' },
  { question: 'The law of large numbers states that as n increases:', options: ['Variance increases', 'The sample mean approaches the population mean', 'Outliers become more frequent', 'The distribution becomes skewed'], correctAnswer: 1, explanation: 'The law of large numbers: as sample size increases, the sample mean converges to the population mean.', topic: 'sampling-distributions' },
  { question: 'To reduce the margin of error in a confidence interval by half, you must:', options: ['Double the sample size', 'Quadruple the sample size', 'Halve the confidence level', 'Double the standard deviation'], correctAnswer: 1, explanation: 'ME ∝ 1/√n, so to halve ME, you need 4× the sample size (since √4 = 2).', topic: 'confidence-intervals' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export const config: PracticeExamConfig = {
  subject: 'AP Statistics',
  description: 'Timed practice exam covering data analysis, probability, inference, and experimental design.',
  backLink: { href: '/ap-statistics', label: 'AP Statistics' },
  ctaLinks: [
    { href: '/ap-stats-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-stats-daily-question', label: 'Daily Question' },
  ],
  accent: 'amber',
  sections: [{
    id: 'mc', name: 'Multiple Choice', description: 'AP-style MC on exploratory analysis, probability, inference, and study design.',
    questionCount: 30, timeLimitMinutes: 45,
  }],
  getQuestions: async () => shuffle(POOL).slice(0, 30),
  aboutInfo: {
    title: 'About the AP Statistics Exam',
    columns: [
      { heading: 'Exam Structure', items: ['Section I: 40 MC questions (90 min)', 'Section II: 6 Free Response (90 min)', 'Total: 3 hours'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 50% of score', 'FRQ: 50% of score', 'Calculator required'] },
    ],
  },
}
