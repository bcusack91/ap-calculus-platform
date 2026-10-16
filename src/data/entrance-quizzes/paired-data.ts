/**
 * Entrance Quiz — Comparing Two Populations (AP Statistics)
 * Lesson: comparing-populations-apstats (rendered by two-sample-proportions,
 * paired-data, two-sample-means).
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Two-Sample Z-Test for Proportions'
const P2 = 'Two-Sample T-Test for Means'
const P3 = 'Paired T-Test'
const P4 = 'Confidence Intervals for Differences'
const P5 = 'Power and Sample Size'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Review & Applications'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cp-ent-1a',
    question: 'In random samples, 120 of 300 teens and 90 of 300 adults use a certain app daily. For a test of $H_0: p_1 = p_2$, what is the z statistic (rounded)?',
    options: ['2.57', '3.63', '5.14', '0.10'],
    correctIndex: 0,
    explanation: 'The pooled proportion is $210/600 = 0.35$, so $SE = \\sqrt{0.35(0.65)(\\frac{1}{300} + \\frac{1}{300})} \\approx 0.0389$ and $z = (0.40 - 0.30)/0.0389 \\approx 2.57$. 3.63 uses only one $\\frac{1}{300}$ term, and 0.10 is the difference itself.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'cp-ent-1b',
    question: 'A researcher suspects that students who sleep at least 8 hours get sick less often than students who sleep less. Let $p_1$ be the proportion who get sick among students who sleep 8+ hours and $p_2$ the proportion among the others. Which hypotheses fit?',
    options: ['$H_0: p_1 - p_2 = 0$, $H_a: p_1 - p_2 < 0$', '$H_0: p_1 - p_2 = 0$, $H_a: p_1 - p_2 > 0$', '$H_0: p_1 - p_2 = 0$, $H_a: p_1 - p_2 \\neq 0$', '$H_0: \\hat{p}_1 = \\hat{p}_2$, $H_a: \\hat{p}_1 < \\hat{p}_2$'],
    correctIndex: 0,
    explanation: 'The suspicion is that the 8+ hour group has a lower sick proportion, so $p_1 < p_2$, which is $p_1 - p_2 < 0$. Hypotheses are written about parameters, never sample proportions.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'cp-ent-2a',
    question: 'Group 1: $\\bar{x}_1 = 82$, $s_1 = 9$, $n_1 = 36$. Group 2: $\\bar{x}_2 = 78$, $s_2 = 12$, $n_2 = 36$. What is the two-sample t statistic?',
    options: ['$t = 9.60$', '$t = 1.14$', '$t = 1.60$', '$t = 5.24$'],
    correctIndex: 2,
    explanation: '$SE = \\sqrt{9^2/36 + 12^2/36} = \\sqrt{225/36} = 2.5$, so $t = (82 - 78)/2.5 = 1.60$. 5.24 uses $s$ instead of $s^2$ in the SE, and 1.14 adds the SDs instead of the variances.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'cp-ent-2b',
    question: 'Random samples of 12 and 15 commute times come from two cities. A dotplot of the 15-value sample is strongly skewed with a far outlier. Is a two-sample t-test appropriate?',
    options: ['Yes, because the samples are random', 'No, the second sample fails the Normal condition', 'Yes, because together n = 27 is close to 30', 'No, the samples must be the same size'],
    correctIndex: 1,
    explanation: 'Each sample is under 30, so each must be free from strong skewness and outliers; the second is not. Sample sizes are not combined to meet the guideline, and two-sample procedures allow unequal sizes.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'cp-ent-3a',
    question: 'Which study calls for a paired t-procedure?',
    options: ['25 runners use old shoes and 25 other runners use new shoes', 'Each of 25 runners is timed in both shoe types', 'Shoe preference proportions are compared in two cities', '50 runners are timed once, half randomly given new shoes'],
    correctIndex: 1,
    explanation: 'Timing the same runner in both pairs of shoes produces a natural pair of measurements, so the analysis uses the differences. Two separate groups, even randomly assigned ones, call for a two-sample procedure, and preference proportions need a proportion test.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'cp-ent-3b',
    question: 'For 16 matched pairs, the differences have mean $\\bar{d} = 4.2$ and standard deviation $s_d = 6.0$. What is the paired t statistic?',
    options: ['$t = 0.70$', '$t = 11.20$', '$t = 1.40$', '$t = 2.80$'],
    correctIndex: 3,
    explanation: '$SE = s_d/\\sqrt{n} = 6.0/\\sqrt{16} = 1.5$, so $t = 4.2/1.5 = 2.80$ with 15 degrees of freedom. 0.70 divides by $s_d$ alone, and 11.20 divides $s_d$ by $n$ instead of $\\sqrt{n}$.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'cp-ent-4a',
    question: 'A 99% confidence interval for $\\mu_d$, the mean of (after − before) test scores, is $(0.8, 5.6)$ points. Which statement is correct?',
    options: ['No change is plausible, since the interval is wide', 'Every student\'s score rose by 0.8 to 5.6 points', 'Scores rose on average by 0.8 to 5.6 points', 'Scores fell on average by 0.8 to 5.6 points'],
    correctIndex: 2,
    explanation: 'The whole interval is above 0, so a mean change of 0 is not plausible at the 99% level: scores rose on average by about 0.8 to 5.6 points. The interval describes the mean change, not every student, and after minus before being positive means a rise.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'cp-ent-4b',
    question: 'For a two-sample interval, $\\bar{x}_1 - \\bar{x}_2 = 6$, the standard error is 2.2 and $t^* = 2.03$. What is the confidence interval for $\\mu_1 - \\mu_2$?',
    options: ['3.80 to 8.20', '1.53 to 6.00', '3.97 to 8.03', '1.53 to 10.47'],
    correctIndex: 3,
    explanation: 'The margin of error is $t^* \\cdot SE = 2.03(2.2) \\approx 4.47$, so the interval is $6 \\pm 4.47$, or 1.53 to 10.47. Using $\\pm SE$ alone gives 3.80 to 8.20, and $\\pm t^*$ alone gives 3.97 to 8.03.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'cp-ent-5a',
    question: 'A planned two-sample study has low power. Which change raises the power without raising the chance of a Type I error?',
    options: ['Lower α from 0.05 to 0.01', 'Raise α from 0.05 to 0.10', 'Use larger groups', 'Use more variable subjects'],
    correctIndex: 2,
    explanation: 'Larger samples shrink the standard error, so a real difference is easier to detect while $\\alpha$ stays the same. Raising $\\alpha$ adds power only by allowing more Type I errors, lowering it reduces power, and more variability reduces power.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'cp-ent-5b',
    question: 'A test at $\\alpha = 0.05$ has power 0.75 to detect a true difference of 5 points. If the true difference is 5 points, what is the probability of a Type II error?',
    options: ['0.25', '0.05', '0.75', '0.95'],
    correctIndex: 0,
    explanation: 'A Type II error is failing to reject a false $H_0$, and its probability is $1 - \\text{power} = 1 - 0.75 = 0.25$. 0.05 is $\\alpha$, the Type I error probability.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'cp-ent-6a',
    question: 'Sixty patients are randomly assigned, 30 to Drug A and 30 to Drug B, and their cholesterol is measured after 3 months. Which procedure compares the mean cholesterol for the two drugs?',
    options: ['Paired t-test on 30 differences', 'Two-sample t-test', 'Two-proportion z-test', 'One-sample t-test on all 60'],
    correctIndex: 1,
    explanation: 'The two groups contain different, randomly assigned patients, so they are independent, and the response is quantitative: a two-sample t procedure fits. Nothing pairs a Drug A patient with a Drug B patient.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'cp-ent-6b',
    question: 'Program A: $n = 25$, $\\bar{x} = 12.4$, $s = 4$. Program B: $n = 25$, $\\bar{x} = 9.4$, $s = 3$. Using the conservative degrees of freedom, what are the two-sample t statistic and df?',
    options: ['t = 3.0, df = 48', 't = 0.6, df = 24', 't = 15.0, df = 24', 't = 3.0, df = 24'],
    correctIndex: 3,
    explanation: '$SE = \\sqrt{16/25 + 9/25} = 1$, so $t = (12.4 - 9.4)/1 = 3.0$, and the conservative df is the smaller of $25 - 1$ and $25 - 1$, which is 24. A df of 48 is $n_1 + n_2 - 2$, the upper bound rather than the conservative value.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'cp-ent-7a',
    question: 'A 95% confidence interval for $p_1 - p_2$ is $(-0.03, 0.11)$. What can be concluded at $\\alpha = 0.05$?',
    options: ['Group 1 has the higher proportion', 'There is no convincing evidence of a difference', 'Group 2 has the higher proportion', 'The two proportions must be equal'],
    correctIndex: 1,
    explanation: 'Zero is inside the interval, so "no difference" is plausible and a two-sided test at $\\alpha = 0.05$ would fail to reject $H_0$. That is not proof the proportions are equal.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'cp-ent-7b',
    question: 'A two-sample t-test of $H_0: \\mu_1 = \\mu_2$ versus $H_a: \\mu_1 > \\mu_2$ gives a p-value of 0.21. Which conclusion is correct at $\\alpha = 0.05$?',
    options: ['Reject $H_0$; there is evidence that μ1 > μ2', 'Accept $H_0$; the two means are equal', 'Fail to reject $H_0$; no convincing evidence μ1 > μ2', 'Reject $H_0$; there is a 21% chance μ1 = μ2'],
    correctIndex: 2,
    explanation: 'Since $0.21 > 0.05$, fail to reject $H_0$: the data do not give convincing evidence that $\\mu_1 > \\mu_2$. A p-value is not the probability that $H_0$ is true, and $H_0$ is never accepted.',
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
