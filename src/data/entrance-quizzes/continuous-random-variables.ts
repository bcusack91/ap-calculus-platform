/**
 * Entrance Quiz — Probability Distributions: the Normal Model (AP Statistics)
 * Lesson: probability-distributions-apstats (rendered by continuous-random-variables).
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Introduction to Probability Distributions'
const P2 = 'Normal Distribution Properties'
const P3 = 'Standard Normal Distribution'
const P4 = 'Z-Scores and Applications'
const P5 = 'Sampling Distributions'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Mixed Review'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'crv-ent-1a',
    question: 'Highway speeds at one checkpoint are approximately normal with mean 55 mph and standard deviation 5 mph. By the 68-95-99.7 rule, about what percent of speeds are between 50 and 70 mph?',
    options: ['68%', '81.5%', '83.85%', '99.7%'],
    correctIndex: 2,
    explanation: '50 is one SD below the mean (34% between 50 and 55) and 70 is three SDs above (49.85% between 55 and 70), so the total is 83.85%. 81.5% would use two SDs above the mean instead of three.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'crv-ent-1b',
    question: 'Which statement is true of every normal distribution?',
    options: ['Its mean and median are equal', 'Its standard deviation equals 1', 'About half its area is within 1 SD', 'Its curve is taller when σ is larger'],
    correctIndex: 0,
    explanation: 'A normal curve is symmetric about its center, so its mean and median coincide. Only the standard normal has SD 1, about 68% (not half) of the area lies within 1 SD, and a larger $\\sigma$ makes the curve shorter and wider.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'crv-ent-2a',
    question: 'On a test with mean 70, a score 10 points above the mean has a z-score of 1.25. What score has a z-score of $-0.75$?',
    options: ['64', '76', '69.25', '58'],
    correctIndex: 0,
    explanation: 'Ten points equal 1.25 SDs, so $\\sigma = 8$. Then $x = \\mu + z\\sigma = 70 + (-0.75)(8) = 64$. The value 76 uses the wrong sign, and 69.25 subtracts the z-score itself from the mean.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'crv-ent-2b',
    question: 'Every value in a distribution that is approximately $N(40, 6)$ is converted to a z-score. What are the mean and standard deviation of the z-scores?',
    options: ['Mean 40, SD 6', 'Mean 0, SD 6', 'Mean 0, SD 1', 'Mean 1, SD 0'],
    correctIndex: 2,
    explanation: 'Subtracting the mean shifts the center to 0, and dividing by $\\sigma = 6$ rescales the spread to 1, giving the standard normal $N(0, 1)$. Dividing by 6 changes the SD, so it cannot stay 6.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'crv-ent-3a',
    question: 'From the standard normal table, $P(Z < 1.5) = 0.9332$ and $P(Z < 0.5) = 0.6915$. What is $P(0.5 < Z < 1.5)$?',
    options: ['0.3085', '0.0668', '0.2417', '0.6247'],
    correctIndex: 2,
    explanation: 'The area between two z-values is the difference of the left-tail areas: $0.9332 - 0.6915 = 0.2417$. 0.3085 is the area above 0.5, and 0.0668 is the area above 1.5.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'crv-ent-3b',
    question: 'For the standard normal distribution, $P(Z < 0.84) = 0.80$. Which z-score marks the 20th percentile?',
    options: ['$0.84$', '$-0.20$', '$0.20$', '$-0.84$'],
    correctIndex: 3,
    explanation: 'By symmetry, the area below $-0.84$ equals the area above $0.84$, which is $1 - 0.80 = 0.20$. The 20th percentile is below the mean, so it cannot be $+0.84$, and 0.20 is an area, not a z-score.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'crv-ent-4a',
    question: 'A histogram of the incomes of 25 randomly chosen households is strongly skewed to the right. Which statement is correct?',
    options: ['A normal model fits, since n is close to 30', 'A normal model is a poor description of this data set', 'Converting to z-scores makes the data normal', 'A normal model fits if the mean exceeds the median'],
    correctIndex: 1,
    explanation: 'A normal model needs a roughly symmetric, single-peaked shape; strong skew rules it out. Converting to z-scores changes the center and scale but not the shape, and a mean above the median is a sign of right skew, not normality.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'crv-ent-4b',
    question: 'A population of waiting times is strongly skewed to the right. For which sample size is the sampling distribution of $\\bar{x}$ most safely treated as approximately normal?',
    options: ['$n = 5$', '$n = 12$', '$n = 20$', '$n = 40$'],
    correctIndex: 3,
    explanation: 'When the population is not normal, the central limit theorem gives an approximately normal sampling distribution of $\\bar{x}$ for large samples, and $n \\geq 30$ is the usual guideline. The smaller samples would still show the skew.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'crv-ent-5a',
    question: 'A population has mean 80 and standard deviation 12. Random samples of size 36 are taken. What are the mean and standard deviation of the sampling distribution of $\\bar{x}$?',
    options: ['Mean 80, SD 2', 'Mean 80, SD 12', 'Mean 80, SD 0.33', 'Mean 13.3, SD 2'],
    correctIndex: 0,
    explanation: 'The sample mean is centered at the population mean, 80, and its standard deviation is $\\sigma/\\sqrt{n} = 12/\\sqrt{36} = 2$. An SD of 12 ignores the sample size, and 0.33 divides by $n$ instead of $\\sqrt{n}$.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'crv-ent-5b',
    question: 'In a large city, 30% of adults bike to work. For random samples of 200 adults, what is the standard deviation of the sample proportion $\\hat{p}$?',
    options: ['0.458', '0.210', '0.032', '0.001'],
    correctIndex: 2,
    explanation: '$\\sigma_{\\hat{p}} = \\sqrt{p(1-p)/n} = \\sqrt{0.3(0.7)/200} = \\sqrt{0.00105} \\approx 0.032$. 0.458 leaves out $n$, 0.210 is just $p(1-p)$, and 0.001 is the variance rather than the SD.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'crv-ent-6a',
    question: 'Bags of chips have weights with mean 283 g and standard deviation 4 g. A random sample of 16 bags is taken. Given $P(Z < 2) = 0.9772$ and $P(Z < 0.5) = 0.6915$, what is the probability that the sample mean exceeds 285 g?',
    options: ['0.3085', '0.9772', '0.0456', '0.0228'],
    correctIndex: 3,
    explanation: 'The SD of $\\bar{x}$ is $4/\\sqrt{16} = 1$ g, so $z = (285 - 283)/1 = 2$ and $P(\\bar{x} > 285) = 1 - 0.9772 = 0.0228$. 0.3085 uses the SD of one bag, $z = 0.5$, instead of the SD of the mean.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'crv-ent-6b',
    question: 'A machine makes parts whose lengths are approximately normal with mean 50.0 mm and standard deviation 0.2 mm. Parts shorter than 49.6 mm or longer than 50.4 mm are rejected. By the 68-95-99.7 rule, about what percent are rejected?',
    options: ['2.5%', '5%', '0.3%', '32%'],
    correctIndex: 1,
    explanation: 'The limits are $50.0 \\pm 2(0.2)$, two SDs on each side. About 95% of parts fall inside, so about 5% are rejected; 2.5% counts only one tail.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'crv-ent-7a',
    question: 'A population has standard deviation 20. A sample of size 25 gives $\\sigma_{\\bar{x}} = 4$. What sample size would make $\\sigma_{\\bar{x}} = 2$?',
    options: ['100', '50', '200', '400'],
    correctIndex: 0,
    explanation: 'Halving $\\sigma/\\sqrt{n}$ requires doubling $\\sqrt{n}$, which means multiplying $n$ by 4: $20/\\sqrt{100} = 2$. Doubling $n$ to 50 only divides the SD by $\\sqrt{2}$.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'crv-ent-7b',
    question: 'A variable is approximately $N(200, 25)$. Which is more likely: that one randomly chosen value is above 210, or that the mean of a random sample of 25 values is above 210?',
    options: ['A mean of 25 values above 210 is more likely', 'One value above 210 is more likely', 'The two events are equally likely', 'It cannot be known without the raw data'],
    correctIndex: 1,
    explanation: 'For one value, $z = (210 - 200)/25 = 0.4$, a common result. The sample mean has SD $25/\\sqrt{25} = 5$, so $z = 2$, which is rare. Means vary much less than individual values.',
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
