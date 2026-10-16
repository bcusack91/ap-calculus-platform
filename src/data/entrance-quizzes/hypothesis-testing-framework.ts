/**
 * Entrance Quiz — Hypothesis Testing (AP Statistics)
 * Lesson: hypothesis-testing-apstats (rendered by hypothesis-testing-framework).
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Null & Alternative Hypotheses'
const P2 = 'Test Statistics'
const P3 = 'P-Values'
const P4 = 'Type I & Type II Errors'
const P5 = 'One-Sample t-Test'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Review & Applications'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'ht-ent-1a',
    question: 'A coffee chain says its medium cups hold 16 ounces on average. A customer group suspects they hold less. With $\\mu$ = the true mean amount, which hypotheses should the group test?',
    options: ['$H_0: \\mu < 16$, $H_a: \\mu = 16$', '$H_0: \\bar{x} = 16$, $H_a: \\bar{x} < 16$', '$H_0: \\mu = 16$, $H_a: \\mu \\neq 16$', '$H_0: \\mu = 16$, $H_a: \\mu < 16$'],
    correctIndex: 3,
    explanation: 'The null hypothesis states the claimed value with an equals sign, and the alternative states the suspicion, "less," so $H_a: \\mu < 16$. Hypotheses are about the parameter $\\mu$, never the sample mean $\\bar{x}$.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'ht-ent-1b',
    question: 'A company tests whether its new battery lasts longer than 40 hours on average. Which is a correct definition of the parameter for this test?',
    options: ['μ = the true mean lifetime of all new batteries of this type', 'x̄ = the mean lifetime of the batteries in the sample', 'μ = 40 hours, the lifetime the company advertises', 'p = the proportion of batteries lasting exactly 40 hours'],
    correctIndex: 0,
    explanation: 'The parameter is the unknown population mean the test is about: the mean lifetime of all batteries of the new type. The sample mean is a statistic, and 40 hours is the null value, not the parameter.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'ht-ent-2a',
    question: 'For $H_0: \\mu = 30$, a random sample of 64 gives $\\bar{x} = 31.8$ and $s = 6$. What is the test statistic?',
    options: ['$t = 0.30$', '$t = 19.20$', '$t = 2.40$', '$t = 1.80$'],
    correctIndex: 2,
    explanation: '$SE = 6/\\sqrt{64} = 0.75$, so $t = (31.8 - 30)/0.75 = 2.40$. 0.30 divides by $s$ instead of the standard error, and 19.20 divides $s$ by $n$ instead of $\\sqrt{n}$.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'ht-ent-2b',
    question: 'Two studies each find $\\bar{x} - \\mu_0 = 2$ with $s = 10$. Study A has $n = 25$ and Study B has $n = 100$. How do their t statistics compare?',
    options: ['Study B\'s t is twice Study A\'s', 'Study B\'s t is four times Study A\'s', 'The two t statistics are equal', 'Study A\'s t is twice Study B\'s'],
    correctIndex: 0,
    explanation: 'Study A has $SE = 10/5 = 2$ and $t = 1$; Study B has $SE = 10/10 = 1$ and $t = 2$. Quadrupling $n$ halves the SE, which doubles $t$; it does not quadruple it.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'ht-ent-3a',
    question: 'A test of $H_0: \\mu = 100$ versus $H_a: \\mu > 100$ gives a p-value of 0.03. Which interpretation is correct?',
    options: ['There is a 3% chance that the true mean is 100', 'The sample mean is 3% higher than the claimed mean', 'There is a 97% chance that the true mean exceeds 100', 'If μ = 100, results this extreme occur about 3% of the time'],
    correctIndex: 3,
    explanation: 'A p-value assumes $H_0$ is true and gives the probability of a sample mean at least this far above 100. It is not the probability that $H_0$ (or $H_a$) is true.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'ht-ent-3b',
    question: 'A one-sample t-test gives $t = -2.1$ with 24 degrees of freedom, and the area below $-2.1$ is 0.023. What is the p-value for $H_a: \\mu \\neq \\mu_0$?',
    options: ['0.023', '0.977', '0.046', '0.954'],
    correctIndex: 2,
    explanation: 'A two-sided alternative counts results this extreme in either direction, so the p-value doubles the one-tail area: $2(0.023) = 0.046$. 0.023 would be the p-value for $H_a: \\mu < \\mu_0$.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'ht-ent-4a',
    question: 'A plant tests $H_0$: the filling machine is on target ($\\mu = 500$ g) against $H_a$: it is off target. If the test leads to a Type II error, what happens?',
    options: ['An on-target machine is shut down for adjustment', 'An off-target machine keeps running unadjusted', 'The sample mean is computed incorrectly', 'The significance level is set too high'],
    correctIndex: 1,
    explanation: 'A Type II error fails to reject a false $H_0$: the machine really is off target, but the test does not detect it, so it keeps running. Shutting down an on-target machine would be a Type I error.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'ht-ent-4b',
    question: 'Which change lowers both the probability of a Type I error and the probability of a Type II error?',
    options: ['Lower α but keep the same n', 'Raise α but keep the same n', 'Lower α and use a larger n', 'Keep α fixed and use a smaller n'],
    correctIndex: 2,
    explanation: 'Lowering $\\alpha$ cuts the Type I error rate but, alone, raises the Type II rate; a larger sample raises power enough to offset that. Raising $\\alpha$ or shrinking $n$ makes at least one error more likely.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'ht-ent-5a',
    question: 'A random sample of 18 bags from a large shipment has $\\bar{x} = 20.6$ oz and $s = 1.2$ oz, and a dotplot shows no strong skew or outliers. For $H_0: \\mu = 20$ versus $H_a: \\mu > 20$, what are the test statistic and degrees of freedom?',
    options: ['t = 2.12, df = 18', 't = 0.50, df = 17', 't = 9.00, df = 17', 't = 2.12, df = 17'],
    correctIndex: 3,
    explanation: '$SE = 1.2/\\sqrt{18} \\approx 0.283$, so $t = 0.6/0.283 \\approx 2.12$ with $df = n - 1 = 17$. 0.50 divides by $s$ instead of the SE, and 9.00 divides $s$ by $n$.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'ht-ent-5b',
    question: 'In which situation is the Normal/Large Sample condition for a one-sample t-test not met?',
    options: ['n = 40, and the sample histogram is strongly skewed', 'n = 12, and the population is known to be normal', 'n = 15, and the sample dotplot is strongly skewed', 'n = 20, and the sample boxplot is roughly symmetric'],
    correctIndex: 2,
    explanation: 'With $n = 15 < 30$ and an unknown population shape, the sample must be free from strong skewness, and it is not. With $n = 40$ the central limit theorem applies, a normal population works for any $n$, and a symmetric sample of 20 is fine.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'ht-ent-6a',
    question: 'A college claims students sleep 7 hours a night on average. A random sample of 49 students gives $\\bar{x} = 6.6$ hours and $s = 1.4$ hours. For $H_a: \\mu \\neq 7$, $t = -2.0$ and the p-value is 0.051. What is the conclusion at $\\alpha = 0.05$?',
    options: ['Fail to reject $H_0$: the evidence against 7 is not convincing', 'Accept $H_0$: students sleep 7 hours on average', 'Reject $H_0$: the mean is convincingly different from 7', 'Reject $H_0$: the mean is convincingly less than 7'],
    correctIndex: 0,
    explanation: 'Because $0.051 > 0.05$, we fail to reject $H_0$; the data do not give convincing evidence that the mean differs from 7 hours. Failing to reject never proves $H_0$, so "accept" is wrong.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'ht-ent-6b',
    question: 'A two-sided one-sample t-test gives $t = 2.50$ with 29 degrees of freedom, and the area above 2.50 is 0.009. Which is correct at $\\alpha = 0.01$?',
    options: ['p-value 0.009; reject at α = 0.01', 'p-value 0.018; fail to reject at α = 0.01', 'p-value 0.018; reject at α = 0.01', 'p-value 0.991; fail to reject H0'],
    correctIndex: 1,
    explanation: 'The two-sided p-value is $2(0.009) = 0.018$, which is larger than 0.01, so we fail to reject $H_0$. Using the one-tail area alone would wrongly lead to rejection.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'ht-ent-7a',
    question: 'A study of 50,000 students finds that a new app raises mean scores on a 100-point test by 0.3 points, with p < 0.001. Which conclusion is best?',
    options: ['A tiny p-value shows the effect is large', 'Every student\'s score rises by 0.3 points', 'The result is not significant because 0.3 is small', 'Real, but likely too small to matter'],
    correctIndex: 3,
    explanation: 'A very large sample can make a tiny difference statistically significant. A 0.3-point gain on a 100-point test is convincing but of little practical importance, and a small p-value says nothing about the size of an effect.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'ht-ent-7b',
    question: 'A test gives a p-value of 0.08. For which of the significance levels 0.01, 0.05 and 0.10 would $H_0$ be rejected?',
    options: ['0.05 and 0.10', 'Only 0.10', '0.01 and 0.05', 'All three levels'],
    correctIndex: 1,
    explanation: 'Reject $H_0$ when the p-value is at most $\\alpha$. Only $0.08 \\leq 0.10$ holds; 0.08 is larger than both 0.05 and 0.01.',
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
