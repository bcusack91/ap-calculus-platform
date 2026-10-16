/**
 * Entrance Quiz — Confidence Intervals (AP Statistics)
 * Lesson: confidence-intervals-apstats (rendered by interpreting-ci).
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Introduction to Confidence Intervals'
const P2 = 'One-Sample Z-Interval for Proportions'
const P3 = 'One-Sample T-Interval for Means'
const P4 = 'Choosing Sample Size'
const P5 = 'Interpreting Confidence Intervals'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Review & Applications'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'ci-ent-1a',
    question: 'From one random sample, a researcher builds a 90%, a 95% and a 99% confidence interval for the same proportion. Which statement is true?',
    options: ['The 99% interval is the widest one', 'The 90% interval is the widest of the three', 'All three intervals have the same width', 'The 95% interval is the narrowest one'],
    correctIndex: 0,
    explanation: 'Higher confidence uses a larger critical value ($z^* = 2.576$ for 99% versus 1.645 for 90%), so the 99% interval is widest and the 90% interval narrowest. More confidence costs precision.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'ci-ent-1b',
    question: 'A researcher builds 200 separate 95% confidence intervals for the same parameter from 200 independent random samples. About how many of the intervals would you expect to miss the parameter?',
    options: ['5', '190', '10', '0'],
    correctIndex: 2,
    explanation: 'The 95% describes the method: about 95% of such intervals capture the parameter and about 5% miss it, and 5% of 200 is 10. About 190 would capture it.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'ci-ent-2a',
    question: 'In a random sample of 400 teenagers, 25% have a part-time job. Using $z^* = 2.576$, what is the margin of error of the 99% confidence interval for the proportion of all teenagers with a part-time job?',
    options: ['0.042', '0.022', '0.056', '0.112'],
    correctIndex: 2,
    explanation: '$SE = \\sqrt{0.25(0.75)/400} \\approx 0.0217$, so the margin of error is $2.576(0.0217) \\approx 0.056$. 0.042 uses the 95% value 1.96, and 0.022 is the standard error alone.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'ci-ent-2b',
    question: 'Each sample below is a random sample from a large population. Which one meets the large counts condition for a one-proportion z-interval?',
    options: ['n = 60 with 5 successes', 'n = 60 with 52 successes', 'n = 8 with 4 successes', 'n = 60 with 15 successes'],
    correctIndex: 3,
    explanation: 'The interval needs at least 10 successes and 10 failures. Only 15 successes with 45 failures works; 5 successes, 8 failures (from 52 of 60) and 4 of each all fall short.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'ci-ent-3a',
    question: 'A random sample of 9 values from a roughly normal population has $\\bar{x} = 52$ and $s = 6$. Using $t^* = 2.306$ (8 df), what is the 95% confidence interval for $\\mu$?',
    options: ['48.08 to 55.92', '50.00 to 54.00', '47.39 to 56.61', '38.16 to 65.84'],
    correctIndex: 2,
    explanation: '$SE = 6/\\sqrt{9} = 2$, so the margin of error is $2.306(2) \\approx 4.61$ and the interval is 47.39 to 56.61. 48.08 to 55.92 uses $z^* = 1.96$, and 38.16 to 65.84 multiplies $t^*$ by $s$.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'ci-ent-3b',
    question: 'A random sample of 12 home prices from a town includes one mansion priced far above all the others. Is a one-sample t-interval for the mean price appropriate?',
    options: ['No, the outlier breaks the Normal condition here', 'Yes, since the sample is random', 'Yes, since t-intervals are robust to any outlier', 'Yes, since n is at least 10'],
    correctIndex: 0,
    explanation: 'With $n = 12 < 30$, the sample must be free from strong skewness and outliers, and an extreme value like the mansion violates that. Random sampling is a separate condition, and t procedures are not robust to strong outliers in small samples.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'ci-ent-4a',
    question: 'A company wants to estimate the mean battery life of a product to within 3 hours with 95% confidence. A pilot study suggests $\\sigma \\approx 15$ hours. Using $z^* = 1.96$, what is the smallest sample size?',
    options: ['96', '25', '10', '97'],
    correctIndex: 3,
    explanation: '$n = (1.96 \\times 15/3)^2 = 9.8^2 = 96.04$, and sample sizes round up, so $n = 97$. Rounding down to 96 leaves the margin of error slightly above 3 hours, and 25 leaves out $z^*$.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'ci-ent-4b',
    question: 'A survey of 600 people has a margin of error of 0.04. About how many people would be needed for a margin of error of 0.02 at the same confidence level?',
    options: ['1,200', '2,400', '300', '4,800'],
    correctIndex: 1,
    explanation: 'The margin of error shrinks with $\\sqrt{n}$, so halving it requires 4 times the sample: $4 \\times 600 = 2{,}400$. Doubling to 1,200 only divides the margin of error by $\\sqrt{2}$.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'ci-ent-5a',
    question: 'A 95% confidence interval for the mean weight of trout in a hatchery is 1.8 to 2.3 pounds. Which interpretation is correct?',
    options: ['95% of the hatchery\'s trout weigh 1.8 to 2.3 pounds', 'The mean weight of all its trout is plausibly 1.8 to 2.3 lb', 'There is a 95% chance the sample mean is in this range', 'The sampled trout have a mean weight of 1.8 to 2.3 pounds'],
    correctIndex: 1,
    explanation: 'The interval estimates the population mean weight, with 95% describing the reliability of the method. It does not describe individual trout, and the sample mean is known exactly: it is the center of the interval.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'ci-ent-5b',
    question: 'A 99% confidence interval for $\\mu$ is $(8.1, 9.7)$. Which statement about a two-sided test of $H_0: \\mu = 10$ is correct?',
    options: ['Reject at α = 0.01, since 10 is outside the interval', 'Fail to reject at α = 0.01, since 10 is close to 9.7', 'Reject at α = 0.05 only, but not at α = 0.01', 'An interval cannot be used for any test conclusion'],
    correctIndex: 0,
    explanation: 'A 99% interval contains exactly the null values a two-sided test at $\\alpha = 0.01$ would not reject. Because 10 lies outside, the test rejects at $\\alpha = 0.01$, and therefore also at $\\alpha = 0.05$.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'ci-ent-6a',
    question: 'A nutritionist measures the sodium in 40 randomly chosen frozen dinners of one brand to estimate the brand\'s mean sodium content. Which is the parameter?',
    options: ['x̄ = the mean sodium of the 40 sampled dinners', 'μ = the mean sodium of every such dinner', 'p = the share of dinners above a sodium limit', 'μ = 894 mg, the mean of the sampled dinners'],
    correctIndex: 1,
    explanation: 'The parameter is the unknown population mean for all of the brand\'s frozen dinners. The mean of the 40 dinners is the statistic used to estimate it, and the question concerns a mean, not a proportion.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'ci-ent-6b',
    question: 'In a random sample of 200 voters, 116 favor a bond measure. Using $z^* = 1.645$, what is the 90% confidence interval for the proportion of all voters who favor it?',
    options: ['0.512 to 0.648', '0.545 to 0.615', '0.490 to 0.670', '0.523 to 0.637'],
    correctIndex: 3,
    explanation: '$\\hat{p} = 116/200 = 0.58$ and $SE = \\sqrt{0.58(0.42)/200} \\approx 0.0349$, so the margin of error is $1.645(0.0349) \\approx 0.057$ and the interval is 0.523 to 0.637. 0.512 to 0.648 uses $z^* = 1.96$.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'ci-ent-7a',
    question: 'Which pair of changes would definitely make a confidence interval narrower?',
    options: ['Use a larger n and a higher confidence level', 'Use a smaller n and a lower confidence level', 'Use a smaller n and a higher confidence level', 'Use a larger n and a lower confidence level'],
    correctIndex: 3,
    explanation: 'A larger sample shrinks the standard error and a lower confidence level shrinks the critical value, so both narrow the interval. In the mixed pairs, one change widens the interval while the other narrows it.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'ci-ent-7b',
    question: 'A forester records whether each of 150 randomly chosen trees is infected with a fungus and wants to estimate the infection rate in the forest. Which interval fits?',
    options: ['A one-sample t-interval', 'A two-sample t-interval', 'A one-proportion z-interval', 'A matched pairs t-interval'],
    correctIndex: 2,
    explanation: 'Infected or not is a categorical variable, and the goal is the proportion infected in one population, so a one-proportion z-interval fits. t-intervals estimate means of quantitative variables.',
    partNumber: 7,
    partTitle: P7,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [P1, P2, P3, P4, P5, P6, P7].map((partTitle, i) => ({ partNumber: i + 1, partTitle }))
}
