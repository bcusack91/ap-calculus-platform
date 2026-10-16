/**
 * Entrance Quiz — The Normal Distribution (AP Statistics)
 * Lesson: normal-distribution-apstats
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'The Normal Curve'
const P2 = 'Z-Scores'
const P3 = 'Normal Calculations'
const P4 = 'Assessing Normality'
const P5 = 'Intervals, Percentiles and Comparing Relative Position'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Review & Applications'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'nd-ent-1a',
    question: 'Commute times in a city are approximately normal with mean 30 minutes and standard deviation 6 minutes. By the empirical rule, about what percent of commutes take longer than 42 minutes?',
    options: ['16%', '2.5%', '5%', '95%'],
    correctIndex: 1,
    explanation: '42 minutes is $30 + 2(6)$, two SDs above the mean. 95% of values lie within 2 SDs, leaving 5% split between two tails, so 2.5% are above 42; 16% is the share above one SD, and 95% is the share inside two SDs.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'nd-ent-1b',
    question: 'Weights of adult dogs of one breed are approximately normal, and the middle 95% of the dogs weigh between 50 and 70 pounds. What are the mean and standard deviation of the weights?',
    options: ['Mean 60 lb, SD 10 lb', 'Mean 60 lb, SD 6.7 lb', 'Mean 60 lb, SD 5 lb', 'Mean 60 lb, SD 20 lb'],
    correctIndex: 2,
    explanation: 'The middle 95% spans $\\mu \\pm 2\\sigma$, so the mean is the midpoint, 60, and $4\\sigma = 70 - 50 = 20$ gives $\\sigma = 5$. An SD of 10 would treat 50 to 70 as $\\mu \\pm 1\\sigma$.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'nd-ent-2a',
    question: 'In a 5K race, finishing times have mean 25 minutes and standard deviation 2 minutes. A runner finishes in 21.5 minutes. What is her z-score?',
    options: ['$1.75$', '$-3.50$', '$-0.88$', '$-1.75$'],
    correctIndex: 3,
    explanation: '$z = (21.5 - 25)/2 = -3.5/2 = -1.75$: her time is 1.75 SDs below the mean. A positive z would put her time above the mean, and $-3.50$ forgets to divide by the SD.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'nd-ent-2b',
    question: 'For the standard normal distribution, $P(Z \\leq 0.8) = 0.7881$ and $P(Z \\leq -1.2) = 0.1151$. What is $P(-1.2 \\leq Z \\leq 0.8)$?',
    options: ['0.6730', '0.9032', '0.3270', '0.2119'],
    correctIndex: 0,
    explanation: 'The area between two values is the difference of the areas to their left: $0.7881 - 0.1151 = 0.6730$. Adding the two areas gives 0.9032, and 0.2119 is the area above 0.8.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'nd-ent-3a',
    question: 'Test scores are approximately normal with mean 500 and standard deviation 100. Given $P(Z \\leq 1.2) = 0.8849$, what proportion of scores are above 380?',
    options: ['0.1151', '0.3800', '0.8849', '0.7698'],
    correctIndex: 2,
    explanation: '$z = (380 - 500)/100 = -1.2$. By symmetry, the area above $-1.2$ equals the area below $1.2$, which is 0.8849. The value 0.1151 is the area below 380, and 0.7698 is the area between $-1.2$ and $1.2$.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'nd-ent-3b',
    question: 'Delivery times are approximately normal with mean 48 hours and standard deviation 6 hours. The company wants to quote the time that 90% of deliveries beat. Given $P(Z \\leq 1.28) = 0.90$, what time should it quote?',
    options: ['55.68 hours', '40.32 hours', '49.28 hours', '94.08 hours'],
    correctIndex: 0,
    explanation: 'Beating the quoted time 90% of the time makes it the 90th percentile: $x = 48 + 1.28(6) = 55.68$ hours. 40.32 hours is the 10th percentile, and 49.28 hours adds $z$ without multiplying by $\\sigma$.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'nd-ent-4a',
    question: 'A sample of 40 values has mean 50 and standard deviation 10. Exactly 34 values lie between 40 and 60, 37 lie between 30 and 70, and all 40 lie between 20 and 80. What do these counts suggest about a normal model?',
    options: ['The percents match 68-95-99.7 closely enough', 'Too few values lie within 1 SD for a normal model', 'Too many values lie within 1 SD for a normal model', 'Normality cannot be judged without a z-table'],
    correctIndex: 2,
    explanation: 'Within 1 SD the sample has $34/40 = 85\\%$, far above the 68% a normal model predicts, so the data are more bunched in the middle than a normal curve. The 2-SD and 3-SD percents (92.5% and 100%) are close, but the first check fails.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'nd-ent-4b',
    question: 'A researcher has a random sample of 15 battery lifetimes and wants to use a t-procedure for the mean lifetime. A dotplot of the sample is strongly skewed right with one high outlier. What should she conclude?',
    options: ['A t-procedure is fine because the sample is random', 'A t-procedure is not appropriate for these data', 'A t-procedure is fine because n is greater than 10', 'A t-procedure is fine once the outlier is deleted'],
    correctIndex: 1,
    explanation: 'With $n = 15 < 30$, the sample data must be free from strong skewness and outliers, and these are not. Random sampling is a separate condition, and deleting an inconvenient value does not make the population normal.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'nd-ent-5a',
    question: 'Reaction times are approximately normal with mean 250 ms and standard deviation 30 ms. Using $z = 1.645$ for the 95th percentile of $Z$, which interval holds the middle 90% of reaction times?',
    options: ['191.20 to 308.80 ms', '211.60 to 288.40 ms', '200.65 to 250.00 ms', '200.65 to 299.35 ms'],
    correctIndex: 3,
    explanation: 'The middle 90% leaves 5% in each tail, so the cutoffs are the 5th and 95th percentiles: $250 \\pm 1.645(30) = 250 \\pm 49.35$. Using 1.96 gives the middle 95%, and 1.28 gives the middle 80%.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'nd-ent-5b',
    question: 'Ivy swims 200 m in 130 s; in her event, times have mean 140 s and SD 5 s. Raj long-jumps 6.9 m; in his event, jumps have mean 6.5 m and SD 0.25 m. Who performed better relative to their own event?',
    options: ['Raj, since his z-score of 1.6 is positive', 'Ivy, since her time is 2 SDs faster than average', 'Raj, since Ivy has a negative z-score of -2', 'Neither, since the events use different units'],
    correctIndex: 1,
    explanation: 'Ivy\'s z-score is $(130 - 140)/5 = -2$, and in swimming a lower time is better, so she is 2 SDs better than average. Raj\'s $z = (6.9 - 6.5)/0.25 = 1.6$, a smaller standing; z-scores remove the units, so the two can be compared.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'nd-ent-6a',
    question: 'A machine fills bottles with amounts that are approximately normal with mean 502 mL and standard deviation 2.5 mL. Given $P(Z \\leq 1.6) = 0.9452$, what proportion of bottles contain less than 498 mL?',
    options: ['0.0548', '0.9452', '0.4452', '0.1096'],
    correctIndex: 0,
    explanation: '$z = (498 - 502)/2.5 = -1.6$, and by symmetry $P(Z \\leq -1.6) = 1 - 0.9452 = 0.0548$. The value 0.1096 counts both tails, and 0.4452 is the area between the mean and $z = -1.6$.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'nd-ent-6b',
    question: 'A drink machine dispenses amounts that are approximately normal with standard deviation 4 mL. Cups overflow above 260 mL, and the owner wants only 2.5% of cups to overflow. Using $z = 1.96$, what mean setting should she choose?',
    options: ['267.84 mL', '256.00 mL', '252.16 mL', '244.32 mL'],
    correctIndex: 2,
    explanation: 'Overflow happens above the 97.5th percentile, so $260 = \\mu + 1.96(4)$ and $\\mu = 260 - 7.84 = 252.16$ mL. Adding 7.84 instead of subtracting gives 267.84 mL, which would make most cups overflow.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'nd-ent-7a',
    question: 'Exam scores are approximately normal with mean 70 and standard deviation 8, so the cutoff for the top 5% is about $70 + 1.645(8) = 83.16$. If the standard deviation were 16 instead (same mean), what would the top-5% cutoff be?',
    options: ['96.32', '83.16', '166.32', '99.16'],
    correctIndex: 0,
    explanation: 'The cutoff is still 1.645 SDs above the mean: $70 + 1.645(16) = 96.32$. Doubling $\\sigma$ doubles the distance above the mean (from 13.16 to 26.32), not the cutoff itself.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'nd-ent-7b',
    question: 'IQ scores are approximately normal with mean 100 and standard deviation 15. Given $P(Z \\leq 0.67) = 0.7486$ and $P(Z \\leq 2.00) = 0.9772$, about what proportion of scores fall between 110 and 130?',
    options: ['0.4772', '0.2514', '0.7258', '0.2286'],
    correctIndex: 3,
    explanation: 'The z-scores are $(110 - 100)/15 \\approx 0.67$ and $(130 - 100)/15 = 2.00$, so the area is $0.9772 - 0.7486 = 0.2286$. The value 0.2514 is the area above 110, and 0.4772 is the area from the mean to 130.',
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
