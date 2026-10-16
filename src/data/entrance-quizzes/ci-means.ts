/**
 * Entrance Quiz — Inference for Means (AP Statistics)
 * Lesson: means-inference-apstats (also rendered by tests-means).
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Inference for Means Basics'
const P2 = 'T-Distribution'
const P3 = 'Confidence Intervals for Means'
const P4 = 'Hypothesis Tests for Means'
const P5 = 'Matched Pairs'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Mixed Review'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mi-ent-1a',
    question: 'Compared with the standard normal curve, how does a t-distribution with 5 degrees of freedom differ?',
    options: ['It has heavier tails', 'It is skewed to the right', 'It is taller at the center', 'It is centered at 5, not 0'],
    correctIndex: 0,
    explanation: 'A t-distribution is symmetric about 0 like the standard normal, but it puts more area in the tails (and less at the center) to account for estimating $\\sigma$ with $s$. It is not skewed and is not centered at its degrees of freedom.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'mi-ent-1b',
    question: 'For 95% confidence, which critical value is largest?',
    options: ['t* for df = 20', 't* for df = 100', 'z* for a normal model', 't* for df = 4'],
    correctIndex: 3,
    explanation: 'Fewer degrees of freedom mean heavier tails, so the cutoff for the middle 95% sits farther out: about 2.776 for 4 df, 2.086 for 20 df, 1.984 for 100 df and 1.960 for $z$.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'mi-ent-2a',
    question: 'A random sample of 16 values has $\\bar{x} = 72$ and $s = 8$, and a dotplot shows no strong skew or outliers. Using $t^* = 2.131$ (15 df), what is the 95% confidence interval for $\\mu$?',
    options: ['68.08 to 75.92', '67.74 to 76.26', '70.00 to 74.00', '54.95 to 89.05'],
    correctIndex: 1,
    explanation: '$SE = 8/\\sqrt{16} = 2$, so the margin of error is $2.131(2) \\approx 4.26$ and the interval is 67.74 to 76.26. 68.08 to 75.92 uses $z^* = 1.96$, and 54.95 to 89.05 multiplies $t^*$ by $s$ instead of the SE.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'mi-ent-2b',
    question: 'A 95% t-interval for the mean commute time of a city\'s workers is 24.1 to 28.7 minutes. Which interpretation is correct?',
    options: ['We are 95% confident it contains the true mean', '95% of the city\'s workers commute 24.1 to 28.7 minutes', '95% of samples will have a mean from 24.1 to 28.7', 'The sample mean is in this range with probability 0.95'],
    correctIndex: 0,
    explanation: 'The interval estimates the population mean commute, and the 95% describes how often the method captures that mean. It is not about individual workers, and the sample mean is the center of the interval, not a random quantity inside it.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'mi-ent-3a',
    question: 'For $H_0: \\mu = 8$ versus $H_a: \\mu < 8$, a random sample of 25 gives $t = -2.0$ with 24 df, and $P(t < -2.0) = 0.028$. What is the conclusion at $\\alpha = 0.05$?',
    options: ['Fail to reject $H_0$, since t is negative', 'Reject $H_0$: convincing evidence that μ ≠ 8', 'Reject $H_0$: convincing evidence that μ < 8', 'Fail to reject $H_0$, since 0.028 < 0.05'],
    correctIndex: 2,
    explanation: 'The one-sided p-value 0.028 is less than 0.05, so reject $H_0$; the evidence supports the stated alternative, $\\mu < 8$. A p-value below $\\alpha$ leads to rejection, not failure to reject.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'mi-ent-3b',
    question: 'For $H_0: \\mu = 100$, a random sample of 16 gives $\\bar{x} = 103.2$ and $s = 8$. What is the t statistic?',
    options: ['0.4', '6.4', '1.6', '3.2'],
    correctIndex: 2,
    explanation: '$SE = 8/\\sqrt{16} = 2$, so $t = (103.2 - 100)/2 = 1.6$. 0.4 divides by $s$, 6.4 divides $s$ by $n$, and 3.2 is the raw difference.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'mi-ent-4a',
    question: 'Two independent random samples: $s_1 = 6$ with $n_1 = 9$, and $s_2 = 8$ with $n_2 = 16$. What is the standard error of $\\bar{x}_1 - \\bar{x}_2$?',
    options: ['2.83', '4.00', '8.00', '2.00'],
    correctIndex: 0,
    explanation: '$SE = \\sqrt{6^2/9 + 8^2/16} = \\sqrt{4 + 4} = \\sqrt{8} \\approx 2.83$. Adding the two separate standard errors gives 4.00, and 8.00 forgets the square root.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'mi-ent-4b',
    question: 'How do AP two-sample t procedures handle the two sample standard deviations?',
    options: ['They pool them into one common value', 'They keep each group\'s own s in the SE', 'They use only the larger of the two', 'They require the two to be equal'],
    correctIndex: 1,
    explanation: 'The standard error $\\sqrt{s_1^2/n_1 + s_2^2/n_2}$ uses each sample\'s own standard deviation, so the spreads may differ. AP procedures never pool for means.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'mi-ent-5a',
    question: 'The gas mileage of 10 cars is measured once with regular fuel and once with premium fuel (every car uses both). Which analysis compares the fuels correctly?',
    options: ['A two-sample t-test on two groups of 10', 'A t-test treating them as 20 separate cars', 'A two-proportion z-test on the cars', 'A one-sample t-test on the 10 differences'],
    correctIndex: 3,
    explanation: 'Each car gives a pair of measurements, so compute the 10 differences and run a one-sample t procedure on them. A two-sample test would ignore the pairing and let car-to-car variation hide the fuel effect.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'mi-ent-5b',
    question: 'For 8 matched pairs, the differences have $\\bar{d} = 2.5$ and $s_d = 2.0$. What are the paired t statistic and degrees of freedom?',
    options: ['t = 3.54, df = 8', 't = 1.25, df = 7', 't = 3.54, df = 7', 't = 10.00, df = 7'],
    correctIndex: 2,
    explanation: '$SE = 2.0/\\sqrt{8} \\approx 0.707$, so $t = 2.5/0.707 \\approx 3.54$, with $df = 8 - 1 = 7$ (one less than the number of pairs). 1.25 divides by $s_d$ alone.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'mi-ent-6a',
    question: 'A school uses random samples to compare the percent of 9th graders and the percent of 12th graders who own a car. Which procedure fits?',
    options: ['Two-sample t-test for means', 'Two-proportion z-test', 'Matched pairs t-test', 'One-sample t-test'],
    correctIndex: 1,
    explanation: 'Owning a car is a categorical (yes/no) variable measured in two independent groups, so the comparison is a two-proportion z-test. t procedures are for means of quantitative variables.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'mi-ent-6b',
    question: 'A lab wants to estimate the mean caffeine content of a brand\'s 12-ounce cans from a random sample of 20 cans. Which procedure fits?',
    options: ['Two-sample t-interval', 'One-proportion z-interval', 'Matched pairs t-test', 'One-sample t-interval'],
    correctIndex: 3,
    explanation: 'One quantitative variable, one population and a goal of estimating the mean call for a one-sample t-interval. There is no second group, no pairing and no proportion.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'mi-ent-7a',
    question: 'Which change makes a one-sample t-interval for a mean wider, all else equal?',
    options: ['Increasing the sample size', 'Using a smaller sample', 'Lowering the confidence level', 'Sampling data with less spread'],
    correctIndex: 1,
    explanation: 'A smaller sample increases $s/\\sqrt{n}$ and also uses a larger $t^*$ (fewer df), so the interval widens. The other three changes all make the interval narrower.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'mi-ent-7b',
    question: 'A 95% confidence interval for $\\mu$ is $(12.4, 15.8)$. Which null value would a two-sided test at $\\alpha = 0.05$ reject?',
    options: ['$\\mu_0 = 13$', '$\\mu_0 = 15$', '$\\mu_0 = 12.5$', '$\\mu_0 = 16$'],
    correctIndex: 3,
    explanation: 'A two-sided test at $\\alpha = 0.05$ rejects exactly the null values outside the 95% interval. Only 16 lies outside 12.4 to 15.8.',
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
