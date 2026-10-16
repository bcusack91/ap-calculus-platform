/**
 * Entrance Quiz — Inference for Proportions (AP Statistics)
 * Lesson: proportions-inference-apstats (also rendered by tests-proportions).
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Inference for Proportions Basics'
const P2 = 'Confidence Intervals for Proportions'
const P3 = 'Hypothesis Tests for Proportions'
const P4 = 'Two-Proportion Inference'
const P5 = 'Sample Size Determination'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Mixed Review'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pi-ent-1a',
    question: 'A random sample of 300 adults from a large city finds 84 with a library card. Which standard error belongs in a 95% confidence interval for the proportion $p$ of all adults in the city with a card?',
    options: ['$\\sqrt{0.28(0.72)/300}$', '$\\sqrt{0.5(0.5)/300}$', '$\\sqrt{0.28(0.72)}/300$', '$0.28(0.72)/300$'],
    correctIndex: 0,
    explanation: 'A confidence interval uses the sample proportion $\\hat{p} = 84/300 = 0.28$ in $\\sqrt{\\hat{p}(1-\\hat{p})/n}$. Using 0.5 belongs to sample-size planning, and the other two forms misplace or drop the square root.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'pi-ent-1b',
    question: 'At a school of 1,200 students, a random sample of 80 students finds that 72 ate breakfast today. Which condition for a one-proportion z-interval is not met?',
    options: ['Large counts: only 8 failures', '10%: the sample is too large', 'Random: the sample is not random', 'None: every condition is met'],
    correctIndex: 0,
    explanation: 'The interval needs at least 10 successes and 10 failures, but only $80 - 72 = 8$ students did not eat breakfast. The sample was random, and 80 is less than 10% of 1,200.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'pi-ent-2a',
    question: 'In a random sample of 625 voters, 55% support a ballot measure. Which is the 95% confidence interval for the proportion of all voters who support it?',
    options: ['0.530 to 0.570', '0.517 to 0.583', '0.511 to 0.589', '0.499 to 0.601'],
    correctIndex: 2,
    explanation: '$SE = \\sqrt{0.55(0.45)/625} \\approx 0.0199$ and the margin of error is $1.96(0.0199) \\approx 0.039$, giving 0.511 to 0.589. The interval 0.517 to 0.583 uses $z^* = 1.645$ (90%), and 0.499 to 0.601 uses 2.576 (99%).',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'pi-ent-2b',
    question: 'A 90% confidence interval for the proportion of a college\'s students who own a bike is 0.31 to 0.39. What does "90% confident" mean?',
    options: ['90% of the students own a bike priced in this range', 'The interval holds 90% of the sample proportions observed', '90% of all samples give a sample proportion in this interval', 'About 90% of intervals made this way capture p'],
    correctIndex: 3,
    explanation: 'The confidence level describes the method: if many random samples were taken and an interval built from each, about 90% of the intervals would contain the true proportion. It says nothing about 90% of students or of sample proportions.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'pi-ent-3a',
    question: 'A company claims 20% of its customers use its app. In a random sample of 400 customers, 92 use the app. For $H_0: p = 0.20$ versus $H_a: p > 0.20$, what is the test statistic?',
    options: ['$z = 1.43$', '$z = 1.50$', '$z = 0.15$', '$z = 3.00$'],
    correctIndex: 1,
    explanation: '$\\hat{p} = 92/400 = 0.23$ and the test uses $p_0$ in the SE: $\\sqrt{0.20(0.80)/400} = 0.02$, so $z = (0.23 - 0.20)/0.02 = 1.50$. Using $\\hat{p}$ in the SE gives 1.43, which is the interval\'s SE, not the test\'s.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'pi-ent-3b',
    question: 'A cereal maker claims that 5% of its boxes are underweight. An inspector suspects the true rate is higher. Which hypotheses should she test?',
    options: ['$H_0: \\hat{p} = 0.05$, $H_a: \\hat{p} > 0.05$', '$H_0: p > 0.05$, $H_a: p = 0.05$', '$H_0: p = 0.05$, $H_a: p > 0.05$', '$H_0: p = 0.05$, $H_a: p \\neq 0.05$'],
    correctIndex: 2,
    explanation: 'Hypotheses are about the population proportion $p$, with the claim as the null value and the suspected direction, "higher," as a one-sided alternative. Hypotheses never use the sample statistic $\\hat{p}$.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'pi-ent-4a',
    question: 'In a trial, 36 of 120 patients given a supplement and 48 of 120 patients given a placebo caught a cold. For the test of $H_0: p_1 = p_2$, what is the pooled proportion $\\hat{p}_c$?',
    options: ['0.30', '0.40', '0.35', '0.70'],
    correctIndex: 2,
    explanation: 'The pooled proportion combines both groups: $\\hat{p}_c = (36 + 48)/(120 + 120) = 84/240 = 0.35$. The values 0.30 and 0.40 are the separate group proportions, and 0.70 adds them.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'pi-ent-4b',
    question: 'A 95% confidence interval for $p_1 - p_2$, the proportion of city residents minus the proportion of rural residents who own an electric car, is $(0.02, 0.09)$. What is the best conclusion?',
    options: ['No convincing difference, since the interval is narrow', 'The city rate is 2% to 9% of the rural rate', 'Rural ownership is higher by about 2 to 9 percentage points', 'City ownership is higher by about 2 to 9 percentage points'],
    correctIndex: 3,
    explanation: 'The whole interval is above 0, so city minus rural is plausibly between 0.02 and 0.09: the city proportion is higher by 2 to 9 percentage points. A difference of proportions is not a ratio.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'pi-ent-5a',
    question: 'A pollster wants a 99% confidence interval for a proportion with a margin of error of at most 0.02 and has no prior estimate. Using $z^* = 2.576$, what is the smallest sample size?',
    options: ['4147', '2401', '16590', '4148'],
    correctIndex: 3,
    explanation: '$n = (2.576/0.02)^2(0.25) = 4147.36$, and sample sizes always round up, so $n = 4148$. Rounding down to 4147 leaves the margin of error slightly above 0.02, and 2401 uses $z^* = 1.96$.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'pi-ent-5b',
    question: 'An earlier study suggests the proportion is about 0.10. For a fixed margin of error and confidence level, how does planning with 0.10 instead of 0.5 change the required sample size?',
    options: ['It lowers n, since 0.10 × 0.90 is less than 0.25', 'It raises n, since 0.10 is farther from 0.5', 'It has no effect, since n depends only on the ME', 'It lowers n to one-fifth of the 0.5 value'],
    correctIndex: 0,
    explanation: 'The required $n$ is proportional to $\\hat{p}(1-\\hat{p})$, which is $0.09$ at 0.10 and its maximum, $0.25$, at 0.5. So $n$ falls to $0.09/0.25 = 36\\%$ of the conservative value, not one-fifth.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'pi-ent-6a',
    question: 'A test of $H_0: p = 0.60$ versus $H_a: p \\neq 0.60$ gives $z = -2.10$ and a p-value of 0.036. At $\\alpha = 0.05$, which conclusion is correct?',
    options: ['Accept $H_0$: the true proportion is 0.60', 'Reject $H_0$: there is convincing evidence p is not 0.60', 'Reject $H_0$: there is a 3.6% chance that p is 0.60', 'Fail to reject $H_0$: there is no evidence against 0.60'],
    correctIndex: 1,
    explanation: 'Since $0.036 < 0.05$, reject $H_0$ and conclude there is convincing evidence the proportion differs from 0.60. A p-value is not the probability that $H_0$ is true, and we never accept $H_0$.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'pi-ent-6b',
    question: 'Testing $H_0: p = 0.5$ with $\\hat{p} = 0.58$ and $n = 100$, a student computes $z = (0.58 - 0.5)/\\sqrt{0.58(0.42)/100} \\approx 1.62$. What is the error?',
    options: ['The SE should use n − 1 = 99', 'The SE should use 0.5, giving z = 1.60', 'The numerator should be 0.5 − 0.58', 'There is no error in the calculation'],
    correctIndex: 1,
    explanation: 'A significance test assumes $H_0$ is true, so its SE uses $p_0$: $\\sqrt{0.5(0.5)/100} = 0.05$ and $z = 0.08/0.05 = 1.60$. Using $\\hat{p}$ in the SE is correct only for a confidence interval.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'pi-ent-7a',
    question: 'A 95% confidence interval for a proportion is $(0.462, 0.538)$. What are the sample proportion and the margin of error?',
    options: ['$\\hat{p} = 0.500$, ME $= 0.076$', '$\\hat{p} = 0.500$, ME $= 0.038$', '$\\hat{p} = 0.538$, ME $= 0.038$', '$\\hat{p} = 0.462$, ME $= 0.076$'],
    correctIndex: 1,
    explanation: 'The interval is $\\hat{p} \\pm$ ME, so $\\hat{p}$ is the midpoint, 0.500, and the ME is half the width: $(0.538 - 0.462)/2 = 0.038$. 0.076 is the full width.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'pi-ent-7b',
    question: 'Which change would make a confidence interval for a proportion narrower, all else equal?',
    options: ['Raising the confidence level from 95% to 99%', 'Cutting the sample size from 400 to 100', 'Lowering the confidence level to 90%', 'Moving the sample proportion from 0.2 to 0.5'],
    correctIndex: 2,
    explanation: 'A lower confidence level uses a smaller $z^*$ (1.645 instead of 1.96), which shrinks the margin of error. A higher level, a smaller sample and a $\\hat{p}$ closer to 0.5 all widen the interval.',
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
