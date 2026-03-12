/**
 * AP Statistics — Question of the Day
 *
 * Self-contained question pool covering all AP Statistics units.
 * Deterministic per calendar day so every visitor sees the same question.
 */

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const QUESTION_POOL: Question[] = [
  { question: 'A distribution is skewed right. Which measure of center is typically larger?', options: ['Mean', 'Median', 'Mode', 'They are all equal'], correctAnswer: 0, explanation: 'In a right-skewed distribution, the tail pulls the mean to the right, making it larger than the median. The order is typically mode < median < mean.' },
  { question: 'What is the standard deviation of the dataset: 5, 5, 5, 5, 5?', options: ['5', '1', '0', '25'], correctAnswer: 2, explanation: 'When all values are identical, there is no spread. Every deviation from the mean is 0, so the standard deviation is 0.' },
  { question: 'In a normal distribution, approximately what percentage of data falls within one standard deviation of the mean?', options: ['50%', '68%', '95%', '99.7%'], correctAnswer: 1, explanation: 'The empirical rule (68-95-99.7) states that approximately 68% of data falls within ±1 standard deviation of the mean in a normal distribution.' },
  { question: 'Which sampling method divides the population into groups and randomly selects entire groups?', options: ['Stratified random', 'Cluster', 'Systematic', 'Convenience'], correctAnswer: 1, explanation: 'Cluster sampling divides the population into clusters (groups) and randomly selects whole clusters. All individuals in selected clusters are sampled.' },
  { question: 'The correlation coefficient r = −0.85 indicates:', options: ['A strong positive linear relationship', 'A strong negative linear relationship', 'A weak negative relationship', 'No relationship'], correctAnswer: 1, explanation: 'r = −0.85 indicates a strong negative linear relationship. The closer |r| is to 1, the stronger the linear association; the negative sign means an inverse relationship.' },
  { question: 'In a least-squares regression, what does the residual represent?', options: ['The predicted value', 'The difference between observed and predicted values', 'The slope of the line', 'The correlation coefficient'], correctAnswer: 1, explanation: 'A residual = observed y − predicted ŷ. It measures how far each data point is from the regression line.' },
  { question: 'What is a Type I error?', options: ['Failing to reject a false null hypothesis', 'Rejecting a true null hypothesis', 'Using the wrong test statistic', 'Having too small a sample'], correctAnswer: 1, explanation: 'A Type I error (false positive) occurs when you reject the null hypothesis when it is actually true. Its probability equals the significance level α.' },
  { question: 'If P(A) = 0.3 and P(B) = 0.4 and A and B are independent, what is P(A and B)?', options: ['0.12', '0.70', '0.10', '0.58'], correctAnswer: 0, explanation: 'For independent events, P(A ∩ B) = P(A) × P(B) = 0.3 × 0.4 = 0.12.' },
  { question: 'What is the purpose of a control group in an experiment?', options: ['To increase sample size', 'To provide a baseline for comparison', 'To eliminate all confounding variables', 'To ensure random assignment'], correctAnswer: 1, explanation: 'A control group provides a baseline against which the treatment group can be compared, helping determine if the treatment had an effect.' },
  { question: 'A 95% confidence interval for a population mean is (42, 58). What is the point estimate?', options: ['42', '50', '58', '16'], correctAnswer: 1, explanation: 'The point estimate is the midpoint of the confidence interval: (42 + 58)/2 = 50.' },
  { question: 'Which condition is NOT required for a binomial distribution?', options: ['Fixed number of trials', 'Two outcomes per trial', 'Constant probability of success', 'Trials are dependent'], correctAnswer: 3, explanation: 'Binomial requires: fixed n, two outcomes, constant p, and independent trials. Dependent trials violate the independence condition.' },
  { question: 'The p-value of a hypothesis test is 0.03. At α = 0.05, you should:', options: ['Fail to reject H₀', 'Reject H₀', 'Accept H₀', 'Collect more data'], correctAnswer: 1, explanation: 'Since p-value (0.03) < α (0.05), we reject the null hypothesis. The result is statistically significant at the 5% level.' },
  { question: 'What does r² represent in regression analysis?', options: ['The slope of the regression line', 'The proportion of variation in y explained by x', 'The strength of the correlation', 'The standard error'], correctAnswer: 1, explanation: 'r² (coefficient of determination) represents the proportion of the variability in the response variable that is explained by the explanatory variable in the model.' },
  { question: 'A boxplot shows the five-number summary. What are its components?', options: ['Mean, median, mode, range, SD', 'Min, Q1, median, Q3, max', 'Mean, Q1, Q2, Q3, max', 'Min, mean, median, mode, max'], correctAnswer: 1, explanation: 'The five-number summary consists of: minimum, first quartile (Q1), median (Q2), third quartile (Q3), and maximum.' },
  { question: 'In a chi-square test of independence, the null hypothesis states that:', options: ['The means are equal', 'The variables are independent', 'The variances are equal', 'The distribution is normal'], correctAnswer: 1, explanation: 'The chi-square test of independence tests whether two categorical variables are independent (no association) versus having some association.' },
  { question: 'What happens to the width of a confidence interval when the sample size increases?', options: ['It increases', 'It decreases', 'It stays the same', 'It doubles'], correctAnswer: 1, explanation: 'Increasing sample size decreases the standard error (SE = σ/√n), which narrows the margin of error and thus the confidence interval.' },
  { question: 'A researcher obtains a random sample and finds x̄ = 72. This is a:', options: ['Parameter', 'Statistic', 'Variable', 'Constant'], correctAnswer: 1, explanation: 'A statistic is a numerical summary from a sample (e.g., x̄). A parameter describes the entire population (e.g., μ).' },
  { question: 'What type of bias occurs when the sample systematically excludes certain groups?', options: ['Response bias', 'Nonresponse bias', 'Undercoverage bias', 'Measurement bias'], correctAnswer: 2, explanation: 'Undercoverage (selection) bias occurs when some groups in the population are left out of the sampling process, making the sample unrepresentative.' },
  { question: 'If the z-score of a data value is −1.5, the value is:', options: ['1.5 standard deviations above the mean', '1.5 standard deviations below the mean', 'At the mean', 'In the top 1.5%'], correctAnswer: 1, explanation: 'A z-score of −1.5 means the value is 1.5 standard deviations below the mean. Negative z-scores are below the mean; positive are above.' },
  { question: 'For a two-sample t-test, what is the appropriate null hypothesis?', options: ['μ₁ = μ₂', 'μ₁ > μ₂', 'μ₁ ≠ μ₂', 'x̄₁ = x̄₂'], correctAnswer: 0, explanation: 'The null hypothesis for a two-sample t-test is that the population means are equal: H₀: μ₁ = μ₂ (no difference between groups).' },
  { question: 'Which graph is best for showing the relationship between two quantitative variables?', options: ['Bar chart', 'Histogram', 'Scatterplot', 'Pie chart'], correctAnswer: 2, explanation: 'A scatterplot displays the relationship between two quantitative variables, with each point representing a pair of values.' },
  { question: 'The Central Limit Theorem states that the sampling distribution of x̄ approaches normality as:', options: ['The population becomes normal', 'The sample size increases', 'The standard deviation decreases', 'The mean approaches zero'], correctAnswer: 1, explanation: 'The CLT states that for sufficiently large n (usually n ≥ 30), the sampling distribution of x̄ is approximately normal regardless of the population\'s shape.' },
  { question: 'What is the interquartile range (IQR)?', options: ['Max − Min', 'Q3 − Q1', 'Mean − Median', 'Standard deviation × 2'], correctAnswer: 1, explanation: 'IQR = Q3 − Q1. It measures the spread of the middle 50% of the data and is resistant to outliers.' },
  { question: 'In a probability distribution, the sum of all probabilities must equal:', options: ['0', '0.5', '1', 'The number of outcomes'], correctAnswer: 2, explanation: 'A valid probability distribution requires that all probabilities are between 0 and 1, and their sum equals exactly 1 (certainty).' },
  { question: 'Which of the following is an example of a lurking variable?', options: ['The independent variable', 'A variable not included in the study that affects both variables', 'The response variable', 'A controlled variable'], correctAnswer: 1, explanation: 'A lurking (confounding) variable is not included in the study but influences both the explanatory and response variables, potentially creating a false association.' },
  { question: 'What is the expected value of rolling a fair six-sided die?', options: ['3', '3.5', '4', '6'], correctAnswer: 1, explanation: 'E(X) = (1+2+3+4+5+6)/6 = 21/6 = 3.5. The expected value is the long-run average outcome.' },
  { question: 'If events A and B are mutually exclusive, what is P(A or B)?', options: ['P(A) × P(B)', 'P(A) + P(B)', 'P(A) + P(B) − P(A and B)', '0'], correctAnswer: 1, explanation: 'For mutually exclusive events, P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B). They cannot occur simultaneously.' },
  { question: 'What does statistical significance mean?', options: ['The result is practically important', 'The result is unlikely due to chance alone', 'The sample size is large enough', 'The null hypothesis is true'], correctAnswer: 1, explanation: 'Statistical significance means the observed result is unlikely to have occurred by chance alone (p-value < α), suggesting the null hypothesis should be rejected.' },
  { question: 'Simpson\'s Paradox occurs when:', options: ['The mean equals the median', 'A trend that appears in groups reverses when groups are combined', 'Type I and Type II errors both occur', 'A sample is too large'], correctAnswer: 1, explanation: 'Simpson\'s Paradox is when a trend present in separate groups reverses or disappears when the groups are combined, usually due to a lurking variable.' },
  { question: 'In a matched-pairs design, what is the primary advantage?', options: ['Larger sample sizes', 'Controls for individual variability', 'Eliminates all bias', 'Requires no randomization'], correctAnswer: 1, explanation: 'Matched-pairs designs control for individual variability by comparing treatments within the same individual or matched pair, reducing noise.' },
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface StatsDailyQuestion {
  topicSlug: string
  question: Question
  dayNumber: number
}

export function getDailyQuestions(): StatsDailyQuestion[] {
  const day = dayOfYear()
  const q = QUESTION_POOL[day % QUESTION_POOL.length]
  return [{ topicSlug: 'ap-statistics', question: q, dayNumber: day }]
}
