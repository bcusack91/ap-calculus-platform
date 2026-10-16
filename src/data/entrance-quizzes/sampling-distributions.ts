/**
 * Entrance Quiz — Sampling Distributions (AP Statistics)
 * Lesson: sampling-distributions-apstats (also rendered by central-limit-theorem,
 * sampling-distribution-sample-mean, sampling-distribution-sample-proportion).
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Central Limit Theorem'
const P2 = 'Distribution of Sample Means'
const P3 = 'Distribution of Sample Proportions'
const P4 = 'Standard Error'
const P5 = 'Conditions for Inference'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Review & Applications'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'sd-ent-1a',
    question: 'Home prices in a county are strongly skewed to the right, with mean \\$300,000 and standard deviation \\$120,000. Which describes the sampling distribution of $\\bar{x}$ for random samples of 64 homes?',
    options: ['Approximately normal, mean \\$300,000, SD \\$15,000', 'Strongly skewed right, mean \\$300,000, SD \\$15,000', 'Approximately normal, mean \\$300,000, SD \\$120,000', 'Approximately normal, mean \\$300,000, SD \\$1,875'],
    correctIndex: 0,
    explanation: 'With $n = 64 \\geq 30$ the central limit theorem makes $\\bar{x}$ approximately normal, centered at \\$300,000, with SD $120{,}000/\\sqrt{64} = 15{,}000$. Dividing by 64 instead of 8 gives \\$1,875.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'sd-ent-1b',
    question: 'A class simulates 500 random samples of size 5 and 500 random samples of size 50 from the same strongly skewed population, plotting $\\bar{x}$ for each sample. How do the two dotplots compare?',
    options: ['The n = 50 plot is more skewed and more spread out', 'The n = 50 plot is closer to normal and less spread out', 'Both plots have the same shape and the same spread', 'The n = 5 plot is closer to normal and less spread out'],
    correctIndex: 1,
    explanation: 'Larger samples give sample means that are more nearly normal (the central limit theorem) and less variable, since the SD of $\\bar{x}$ is $\\sigma/\\sqrt{n}$. The size-5 means still show the population\'s skew and spread more widely.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'sd-ent-2a',
    question: 'Times to complete a task are normally distributed with mean 12 minutes and standard deviation 3 minutes. For a random sample of 9 workers, what is $P(\\bar{x} < 11)$? Use $P(Z < -1) = 0.1587$.',
    options: ['0.3707', '0.0228', '0.8413', '0.1587'],
    correctIndex: 3,
    explanation: 'The SD of $\\bar{x}$ is $3/\\sqrt{9} = 1$ minute, so $z = (11 - 12)/1 = -1$ and $P(\\bar{x} < 11) = 0.1587$. Using $\\sigma = 3$ instead gives $z \\approx -0.33$ and the larger value 0.3707.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'sd-ent-2b',
    question: 'A population is normally distributed with mean 40 and standard deviation 8. Which statement about $\\bar{x}$ for random samples of size 4 is correct?',
    options: ['It is not normal, since n is under 30', 'It is normal with SD 8', 'It is normal with SD 4', 'It is normal with SD 2'],
    correctIndex: 2,
    explanation: 'When the population is normal, $\\bar{x}$ is normal for any sample size, and its SD is $8/\\sqrt{4} = 4$. The $n \\geq 30$ guideline is needed only when the population is not normal; SD 2 divides by $n$ instead of $\\sqrt{n}$.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'sd-ent-3a',
    question: 'For which sample size $n$ and population proportion $p$ is the sampling distribution of $\\hat{p}$ approximately normal?',
    options: ['n = 60, p = 0.125', 'n = 200, p = 0.04', 'n = 1000, p = 0.005', 'n = 80, p = 0.20'],
    correctIndex: 3,
    explanation: 'Both $np$ and $n(1-p)$ must be at least 10. Only $n = 80$, $p = 0.20$ works ($np = 16$, $n(1-p) = 64$); the others give $np = 7.5$, $8$ and $5$.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'sd-ent-3b',
    question: 'In a large district, 40% of students walk to school. For random samples of 150 students, what is $P(\\hat{p} > 0.46)$? Use $P(Z < 1.5) = 0.9332$.',
    options: ['0.0668', '0.9332', '0.4404', '0.1336'],
    correctIndex: 0,
    explanation: '$\\sigma_{\\hat{p}} = \\sqrt{0.4(0.6)/150} = \\sqrt{0.0016} = 0.04$, so $z = (0.46 - 0.40)/0.04 = 1.5$ and $P(Z > 1.5) = 1 - 0.9332 = 0.0668$. 0.1336 counts both tails.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'sd-ent-4a',
    question: 'A random sample of 49 commuters has a standard deviation of $s = 14$ minutes, so the standard error of $\\bar{x}$ is 2 minutes. What does the 2 minutes describe?',
    options: ['How much individual commute times typically vary from the mean', 'How far sample means of 49 commuters typically fall from the true mean', 'The largest possible error in this particular sample mean', 'The percent of commuters whose times differ from the mean'],
    correctIndex: 1,
    explanation: 'A standard error describes the variability of a statistic: means of random samples of 49 typically differ from the population mean by about 2 minutes. Individual times vary by about $s = 14$ minutes, and a standard error is not a maximum.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'sd-ent-4b',
    question: 'A pilot study gives $s = 18$. About what sample size would make the standard error of $\\bar{x}$ equal to 1.5?',
    options: ['12', '288', '24', '144'],
    correctIndex: 3,
    explanation: 'Set $18/\\sqrt{n} = 1.5$, so $\\sqrt{n} = 12$ and $n = 144$. The value 12 is $\\sqrt{n}$, not $n$.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'sd-ent-5a',
    question: 'A researcher randomly selects 25 of a school\'s 2,000 students and records weekly hours of exercise. A dotplot of the 25 values is strongly skewed with two high outliers. She plans a t-interval for the mean. Which condition is in doubt?',
    options: ['Random', 'The 10% condition', 'Normal/Large Sample', 'Large counts'],
    correctIndex: 2,
    explanation: 'With $n = 25 < 30$, the sample data must be free from strong skewness and outliers, and these are not. The sample is random, 25 is well under 10% of 2,000, and large counts apply to proportions, not means.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'sd-ent-5b',
    question: 'A random sample of 120 adults from a large city finds 9 who bike to work. A student wants to build a one-proportion z-interval. Which statement is correct?',
    options: ['All conditions are met, since n is at least 30', 'The 10% condition fails, since 120 is too large', 'The large counts condition fails with only 9 successes', 'The random condition fails, since biking is rare'],
    correctIndex: 2,
    explanation: 'A z-interval for a proportion needs at least 10 successes and 10 failures, and this sample has only 9 successes. The $n \\geq 30$ rule is for means, 120 is far less than 10% of a large city, and the sample was random.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'sd-ent-6a',
    question: 'Battery lifetimes are normal with mean 500 hours and standard deviation 40 hours. For a random sample of 16 batteries, what is $P(490 < \\bar{x} < 510)$? Use $P(Z < 1) = 0.8413$.',
    options: ['0.1974', '0.8413', '0.3413', '0.6826'],
    correctIndex: 3,
    explanation: 'The SD of $\\bar{x}$ is $40/\\sqrt{16} = 10$, so 490 and 510 are $z = -1$ and $z = 1$, and the area between is $0.8413 - 0.1587 = 0.6826$. Using $\\sigma = 40$ gives $z = \\pm 0.25$ and 0.1974.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'sd-ent-6b',
    question: 'A candidate has 52% support among voters. In a random poll of 1,600 voters, what is the probability that fewer than half support the candidate? Use $P(Z < -1.6) = 0.0548$.',
    options: ['0.0548', '0.4452', '0.9452', '0.1096'],
    correctIndex: 0,
    explanation: '$\\sigma_{\\hat{p}} = \\sqrt{0.52(0.48)/1600} \\approx 0.0125$, so $z = (0.50 - 0.52)/0.0125 = -1.6$ and $P(\\hat{p} < 0.50) = 0.0548$. 0.1096 counts both tails, and 0.9452 is the area above 0.50.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'sd-ent-7a',
    question: 'An online opt-in panel of 50,000 volunteers is used to estimate the proportion of adults who exercise daily. Which statement is correct?',
    options: ['Having 50,000 people removes any bias', 'The large n gives a small SE but cannot fix the bias', 'The SE is large because the panel is not random', 'The estimate is unbiased, since n is above 30'],
    correctIndex: 1,
    explanation: 'A huge sample makes the estimate precise (small standard error), but volunteers may differ from the population, so the estimate can be precisely wrong. Sample size reduces variability, not bias.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'sd-ent-7b',
    question: 'By what factor must the sample size be multiplied to cut the standard deviation of $\\hat{p}$ to one-third of its current value?',
    options: ['3', '6', '9', '27'],
    correctIndex: 2,
    explanation: '$\\sigma_{\\hat{p}} = \\sqrt{p(1-p)/n}$ shrinks with $\\sqrt{n}$, so dividing it by 3 requires multiplying $n$ by $3^2 = 9$. Tripling $n$ only divides the SD by $\\sqrt{3}$.',
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
