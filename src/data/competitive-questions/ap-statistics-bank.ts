// AP Statistics question bank for competitive mode

export interface ApStatisticsQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: ApStatisticsQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'What measure of central tendency is most affected by outliers?',
    options: ['Mean', 'Median', 'Mode', 'Range'],
    correctAnswer: 0,
    explanation: 'The mean is pulled toward extreme values (outliers), while the median is resistant.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'What does a correlation coefficient of $r = 0$ indicate?',
    options: ['No linear relationship', 'Perfect positive correlation', 'Perfect negative correlation', 'Strong relationship'],
    correctAnswer: 0,
    explanation: '$r = 0$ means there is no linear association between the two variables.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What is the range of the correlation coefficient $r$?',
    options: ['$-1$ to $1$', '$0$ to $1$', '$-\\infty$ to $\\infty$', '$0$ to $100$'],
    correctAnswer: 0,
    explanation: 'The correlation coefficient always falls between $-1$ and $+1$ inclusive.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'In a normal distribution, approximately what percentage of data falls within 1 standard deviation of the mean?',
    options: ['68%', '95%', '99.7%', '50%'],
    correctAnswer: 0,
    explanation: 'The 68-95-99.7 rule: about 68% of data lies within 1 SD of the mean.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'What type of graph is best for displaying the distribution of a single quantitative variable?',
    options: ['Histogram', 'Pie chart', 'Bar graph', 'Scatter plot'],
    correctAnswer: 0,
    explanation: 'Histograms show the frequency distribution of a continuous quantitative variable.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'What is the probability of flipping heads on a fair coin?',
    options: ['$0.5$', '$0.25$', '$1$', '$0$'],
    correctAnswer: 0,
    explanation: 'A fair coin has 2 equally likely outcomes, so $P(H) = 1/2 = 0.5$.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'What type of sampling gives every individual an equal chance of being selected?',
    options: ['Simple random sampling', 'Convenience sampling', 'Voluntary response sampling', 'Systematic sampling'],
    correctAnswer: 0,
    explanation: 'Simple random sampling (SRS) ensures every member of the population has an equal probability of selection.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'What does the standard deviation measure?',
    options: ['Spread of data from the mean', 'The center of the data', 'The most common value', 'The difference between max and min'],
    correctAnswer: 0,
    explanation: 'Standard deviation measures the average distance of data points from the mean.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 9,
    question: 'What is a Type I error?',
    options: ['Rejecting a true null hypothesis', 'Failing to reject a false null hypothesis', 'Accepting the null hypothesis', 'Making a calculation error'],
    correctAnswer: 0,
    explanation: 'Type I error (false positive) occurs when we reject $H_0$ even though it is actually true. Its probability is $\\alpha$.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'If events A and B are independent, then $P(A \\cap B) = $?',
    options: ['$P(A) \\cdot P(B)$', '$P(A) + P(B)$', '$P(A) + P(B) - P(A)P(B)$', '$P(A|B)$'],
    correctAnswer: 0,
    explanation: 'For independent events, $P(A \\cap B) = P(A) \\cdot P(B)$.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'What is the formula for a z-score?',
    options: ['$z = (x - \\mu)/\\sigma$', '$z = (\\mu - x)/\\sigma$', '$z = x \\cdot \\sigma / \\mu$', '$z = (x - \\bar{x})/n$'],
    correctAnswer: 0,
    explanation: 'The z-score measures how many standard deviations a value is from the mean: $z = (x - \\mu)/\\sigma$.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'What is the purpose of a confidence interval?',
    options: ['Estimate a population parameter with a range of plausible values', 'Determine if a hypothesis is true', 'Find the exact population mean', 'Calculate the sample size needed'],
    correctAnswer: 0,
    explanation: 'A confidence interval provides a range of values likely to contain the true population parameter.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'In a regression equation $\\hat{y} = a + bx$, what does $b$ represent?',
    options: ['The predicted change in $y$ for each unit increase in $x$', 'The $y$-intercept', 'The correlation coefficient', 'The standard error'],
    correctAnswer: 0,
    explanation: 'The slope $b$ represents the predicted change in the response variable for each one-unit increase in the explanatory variable.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'What is the Central Limit Theorem?',
    options: ['Sample means approach normal distribution as sample size increases', 'All data is normally distributed', 'The mean equals the median in any distribution', 'Larger samples have larger standard deviations'],
    correctAnswer: 0,
    explanation: 'The CLT states that the sampling distribution of $\\bar{x}$ becomes approximately normal as $n$ increases, regardless of the population distribution.',
    difficulty: 'medium',
  },
  {
    id: 15,
    question: 'What does $R^2 = 0.85$ mean?',
    options: ['85% of variation in $y$ is explained by the model', 'The correlation is 0.85', 'The slope is 0.85', '85% of predictions are correct'],
    correctAnswer: 0,
    explanation: '$R^2$ (coefficient of determination) indicates the proportion of variability in $y$ explained by the regression model.',
    difficulty: 'medium',
  },
  {
    id: 16,
    question: 'What condition must be met for a binomial distribution?',
    options: ['Fixed number of independent trials with constant probability', 'Normal population', 'Sample size greater than 30', 'Continuous random variable'],
    correctAnswer: 0,
    explanation: 'Binomial requires: fixed $n$, independent trials, two outcomes per trial, and constant probability $p$.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 17,
    question: 'In a chi-square test for independence, degrees of freedom equal:',
    options: ['$(r-1)(c-1)$', '$n-1$', '$n-2$', '$r + c - 1$'],
    correctAnswer: 0,
    explanation: 'For a chi-square test of independence with $r$ rows and $c$ columns, $df = (r-1)(c-1)$.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'What is Simpson\'s paradox?',
    options: ['A trend in subgroups reverses when groups are combined', 'Correlation implies causation', 'Outliers always affect the mean', 'Large samples are always representative'],
    correctAnswer: 0,
    explanation: 'Simpson\'s paradox occurs when a trend that appears in several groups reverses when the data is combined, usually due to a lurking variable.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'The power of a statistical test is:',
    options: ['$1 - P(\\text{Type II error})$', '$P(\\text{Type I error})$', '$\\alpha$', '$1 - \\alpha$'],
    correctAnswer: 0,
    explanation: 'Power = $1 - \\beta$ = probability of correctly rejecting a false null hypothesis.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'What is the standard error of $\\hat{p}$?',
    options: ['$\\sqrt{p(1-p)/n}$', '$p/\\sqrt{n}$', '$\\sqrt{p/n}$', '$p(1-p)/n$'],
    correctAnswer: 0,
    explanation: 'The standard error of a sample proportion is $SE = \\sqrt{p(1-p)/n}$.',
    difficulty: 'hard',
  },
  {
    id: 21,
    question: 'In a matched pairs design, which test is most appropriate?',
    options: ['Paired $t$-test', 'Two-sample $t$-test', 'Chi-square test', 'ANOVA'],
    correctAnswer: 0,
    explanation: 'Matched pairs (before/after, twins, etc.) require a paired $t$-test since the observations are not independent.',
    difficulty: 'hard',
  },
  {
    id: 22,
    question: 'What does a $p$-value of 0.03 mean?',
    options: ['3% chance of observing results this extreme if $H_0$ is true', '3% chance $H_0$ is true', '97% chance $H_a$ is true', '3% of the population supports $H_a$'],
    correctAnswer: 0,
    explanation: 'The $p$-value is $P(\\text{data as extreme or more} | H_0 \\text{ true})$. It is NOT the probability that $H_0$ is true.',
    difficulty: 'hard',
  },
  {
    id: 23,
    question: 'Which of the following increases the power of a test?',
    options: ['Increasing sample size', 'Decreasing $\\alpha$', 'Decreasing sample size', 'Using a two-sided test instead of one-sided'],
    correctAnswer: 0,
    explanation: 'Increasing $n$ reduces standard error, making it easier to detect a true effect (higher power).',
    difficulty: 'hard',
  },
  {
    id: 24,
    question: 'What is the expected value of a discrete random variable $X$?',
    options: ['$E(X) = \\sum x_i \\cdot P(x_i)$', '$E(X) = \\sum P(x_i)$', '$E(X) = \\sum x_i / n$', '$E(X) = \\max(x_i)$'],
    correctAnswer: 0,
    explanation: 'The expected value is the weighted average: $E(X) = \\sum x_i P(x_i)$.',
    difficulty: 'hard',
  },
  {
    id: 25,
    question: 'For inference about a population mean when $\\sigma$ is unknown, which distribution is used?',
    options: ['$t$-distribution', 'Normal ($z$) distribution', 'Chi-square distribution', '$F$-distribution'],
    correctAnswer: 0,
    explanation: 'When $\\sigma$ is unknown and estimated by $s$, we use the $t$-distribution with $n-1$ degrees of freedom.',
    difficulty: 'hard',
  },
]

export function getApStatisticsQuestions(count: number = 10): ApStatisticsQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
