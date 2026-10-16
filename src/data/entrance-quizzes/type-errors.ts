/**
 * Entrance Quiz — Type I and Type II Errors and Power (AP Statistics)
 * Lesson: type-errors-power-apstats (rendered by type-errors).
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Type I and Type II Errors'
const P2 = 'Significance Level and Errors'
const P3 = 'Power of a Test'
const P4 = 'Factors Affecting Power'
const P5 = 'Applications'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Mixed Review'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'te-ent-1a',
    question: 'A spam filter tests $H_0$: an email is legitimate against $H_a$: the email is spam. Which outcome is a Type I error?',
    options: ['A legitimate email is sent to the spam folder', 'A spam email reaches the inbox', 'A spam email is sent to the spam folder', 'A legitimate email reaches the inbox'],
    correctIndex: 0,
    explanation: 'A Type I error rejects a true $H_0$: the email really is legitimate, but the filter decides it is spam. Letting spam through is a Type II error, and the other two outcomes are correct decisions.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'te-ent-1b',
    question: 'A study tests $H_0$: a fertilizer has no effect on yield against $H_a$: it raises yield, at $\\alpha = 0.05$. If the fertilizer truly has no effect, what is the probability that the study wrongly concludes it raises yield?',
    options: ['It is 1 − α = 0.95', 'It is β, the Type II rate', 'It is α = 0.05', 'It is the power, 1 − β'],
    correctIndex: 2,
    explanation: 'Wrongly rejecting a true $H_0$ is a Type I error, and its probability is the significance level, 0.05. The values $\\beta$ and $1 - \\beta$ apply only when $H_0$ is false.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'te-ent-2a',
    question: 'Engineers test $H_0$: a bridge cable meets the strength standard against $H_a$: the cable is too weak. Which error is more serious, and which significance level fits that concern?',
    options: ['Type I; use a smaller α such as 0.01', 'Type II; use a larger α such as 0.10', 'Type II; use a smaller α such as 0.01', 'Type I; use a larger α such as 0.10'],
    correctIndex: 1,
    explanation: 'A Type II error passes a cable that is actually too weak, which could be dangerous. A larger $\\alpha$ makes rejecting $H_0$ easier, which lowers the chance of that Type II error.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'te-ent-2b',
    question: 'At $\\alpha = 0.05$, a test has power 0.70 against a particular alternative. If $\\alpha$ is changed to 0.01 with the sample size and everything else unchanged, which value could be the new power?',
    options: ['0.70', '0.82', '0.48', '0.99'],
    correctIndex: 2,
    explanation: 'A smaller $\\alpha$ makes rejecting $H_0$ harder, so $\\beta$ rises and power falls below 0.70. Only 0.48 is lower than the original power.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'te-ent-3a',
    question: 'A test of $H_0: \\mu = 10$ has power 0.70 when the true mean is 10.5. What does this mean?',
    options: ['There is a 70% chance that the true mean is 10.5', 'If μ is really 10, the test rejects H0 about 70% of the time', 'The test wrongly rejects H0 about 30% of the time', 'If μ is really 10.5, the test rejects H0 about 70% of the time'],
    correctIndex: 3,
    explanation: 'Power is the probability of rejecting $H_0$ when a specific alternative is true; here, when $\\mu = 10.5$ the test correctly rejects about 70% of the time. When $\\mu = 10$ the rejection rate is $\\alpha$.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'te-ent-3b',
    question: 'A planned study has power 0.62 to detect a 3-point improvement. What is $\\beta$ for that improvement, and is the power adequate by the usual 0.80 standard?',
    options: ['β = 0.38; it falls short', 'β = 0.38; it meets the standard', 'β = 0.62; it meets the standard', 'β = 0.05; it falls short of 0.80'],
    correctIndex: 0,
    explanation: '$\\beta = 1 - \\text{power} = 1 - 0.62 = 0.38$, and 0.62 falls short of the common 0.80 target. 0.05 would be $\\alpha$, not $\\beta$.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'te-ent-4a',
    question: 'A study tests $H_0: \\mu = 50$ against $H_a: \\mu > 50$ at $\\alpha = 0.05$ with $n = 25$, and the true mean is above 50. Which change would decrease the power?',
    options: ['Increasing the sample size to 100', 'Raising α to 0.10', 'Switching to a two-sided test', 'A true mean farther from 50'],
    correctIndex: 2,
    explanation: 'A two-sided test splits $\\alpha$ between two tails, so the cutoff in the true direction moves farther out and power drops. A larger $n$, a larger $\\alpha$ and a bigger true difference all raise power.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'te-ent-4b',
    question: 'Two labs run the same test with the same $n$ and $\\alpha$. Measurements in Lab A have $\\sigma = 4$ and those in Lab B have $\\sigma = 8$. Which lab has more power to detect the same true difference?',
    options: ['Lab B, because more spread makes differences larger', 'Both have equal power, since n and α match', 'Lab A, because its sampling distribution is narrower', 'Lab A, because it uses a smaller significance level'],
    correctIndex: 2,
    explanation: 'Less variability gives a smaller standard error, so the null and true sampling distributions overlap less and a real difference is easier to detect. Both labs use the same $\\alpha$.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'te-ent-5a',
    question: 'A small study of a new teaching method had power 0.25 to detect a meaningful improvement. It found a p-value of 0.30. What is the best conclusion?',
    options: ['The method has been shown to have no effect', 'A Type I error must have occurred here', 'The method works, since power was so low', 'A real effect could easily have gone undetected'],
    correctIndex: 3,
    explanation: 'With power only 0.25, the study would miss a real improvement about 75% of the time, so failing to reject $H_0$ is inconclusive. It is not evidence that the method has no effect, and a Type I error requires rejecting $H_0$.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'te-ent-5b',
    question: 'Study A plans to detect a 10-point difference and Study B a 2-point difference, with the same $\\sigma$, $\\alpha$ and target power. Which needs the larger sample?',
    options: ['Study B, since smaller effects need more data', 'Study A, since larger effects need more data', 'Both need the same sample size', 'Neither; sample size depends only on α'],
    correctIndex: 0,
    explanation: 'A small difference is harder to separate from sampling variability, so a smaller standard error, and therefore a larger sample, is needed to reach the same power.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'te-ent-6a',
    question: 'An online store tests $H_0$: a new page design does not raise the purchase rate against $H_a$: it does raise it. Which describes a Type II error?',
    options: ['Concluding the design helps when it does not', 'Missing a real increase from the new design', 'Correctly concluding that the design helps', 'Correctly finding no evidence of an increase'],
    correctIndex: 1,
    explanation: 'A Type II error fails to reject a false $H_0$: the design really raises purchases, but the test does not find convincing evidence of it. Concluding it helps when it does not is a Type I error.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'te-ent-6b',
    question: 'A lab tests $H_0$: a batch of medicine meets the potency standard against $H_a$: it is below standard. Which error is more serious for patients, and why?',
    options: ['Type I, because a good batch would be thrown away', 'Type I, because weak medicine would reach patients', 'Type II, because a good batch would be thrown away', 'Type II, as weak medicine would reach patients'],
    correctIndex: 3,
    explanation: 'A Type II error fails to reject $H_0$ when the batch really is weak, so under-strength medicine is shipped. A Type I error discards a good batch, which costs money but does not harm patients.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'te-ent-7a',
    question: 'A test uses $\\alpha = 0.05$ and has power 0.88 against a specific alternative. What are the probabilities of a Type I error and of a Type II error (for that alternative)?',
    options: ['Type I 0.12, Type II 0.05', 'Type I 0.05, Type II 0.88', 'Type I 0.95, Type II 0.12', 'Type I 0.05, Type II 0.12'],
    correctIndex: 3,
    explanation: 'The Type I error probability is $\\alpha = 0.05$, and the Type II error probability is $\\beta = 1 - 0.88 = 0.12$. 0.88 is the power, the chance of correctly rejecting.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'te-ent-7b',
    question: 'A significance test at $\\alpha = 0.05$ is run on 1,000 independent samples, and $H_0$ is true every time. About how many of the tests will wrongly reject $H_0$?',
    options: ['5', '50', '950', '0'],
    correctIndex: 1,
    explanation: 'When $H_0$ is true, each test rejects with probability $\\alpha = 0.05$, so about $0.05(1000) = 50$ Type I errors are expected. 950 is the number of correct decisions.',
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
