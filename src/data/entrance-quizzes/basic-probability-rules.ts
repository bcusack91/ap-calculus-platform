/**
 * Entrance Quiz — Probability Rules (AP Statistics)
 * Lesson: probability-rules-apstats (also rendered by conditional-probability, independence).
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Basic Probability'
const P2 = 'Addition Rule'
const P3 = 'Multiplication Rule'
const P4 = 'Conditional Probability'
const P5 = 'Independence'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Review & Applications'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pr-ent-1a',
    question: 'Two fair six-sided dice are rolled. What is the probability that the sum is at most 10?',
    options: ['$\\frac{11}{12}$', '$\\frac{1}{12}$', '$\\frac{5}{6}$', '$\\frac{8}{9}$'],
    correctIndex: 0,
    explanation: 'Use the complement: a sum of 11 or 12 happens in 3 of the 36 equally likely outcomes (5-6, 6-5, 6-6), so $P = 1 - 3/36 = 33/36 = 11/12$. The value $1/12$ is the complement itself.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'pr-ent-1b',
    question: 'A basketball player makes 70% of her free throws in the long run. Which statement is correct?',
    options: ['She will make exactly 7 of her next 10 free throws', 'After 3 misses in a row she is due to make the next', 'Over 1,000 shots her rate will likely be near 70%', 'Her rate over 10 shots will be closer to 70% than over 1,000'],
    correctIndex: 2,
    explanation: 'By the law of large numbers, the proportion of makes settles near 70% over many shots. Short runs vary a lot, so 7 of 10 is not guaranteed, and past misses do not change the chance on the next shot.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'pr-ent-2a',
    question: 'At a school, 45% of students take Spanish, 30% take art, and 12% take both. What percent of students take neither Spanish nor art?',
    options: ['25%', '37%', '63%', '13%'],
    correctIndex: 1,
    explanation: '$P(\\text{Spanish or art}) = 0.45 + 0.30 - 0.12 = 0.63$, so 37% take neither. Getting 25% forgets to add back the overlap that was subtracted twice, and 63% is the union itself.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'pr-ent-2b',
    question: 'Events $A$ and $B$ have $P(A \\cup B) = 0.70$ and $P(A) = 0.45$. What is the probability that $B$ occurs but $A$ does not?',
    options: ['0.25', '0.30', '0.55', '0.70'],
    correctIndex: 0,
    explanation: 'The union is everything in $A$ plus the part of $B$ outside $A$, so $P(B \\text{ and not } A) = 0.70 - 0.45 = 0.25$. The value 0.55 is $P(\\text{not } A)$ and 0.30 is $P(\\text{neither})$.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'pr-ent-3a',
    question: 'A box holds 5 good fuses and 3 defective fuses. Two fuses are drawn at random without replacement. What is the probability that both are defective?',
    options: ['$\\frac{9}{64}$', '$\\frac{3}{28}$', '$\\frac{15}{56}$', '$\\frac{5}{14}$'],
    correctIndex: 1,
    explanation: '$P = \\frac{3}{8} \\cdot \\frac{2}{7} = \\frac{6}{56} = \\frac{3}{28}$, because after one defective fuse is removed only 2 of the 7 remaining are defective. $\\frac{9}{64}$ treats the draws as independent, and $\\frac{5}{14}$ is the chance both are good.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'pr-ent-3b',
    question: 'Each smoke detector in a building works independently with probability 0.80. What is the smallest number of detectors needed so that the probability at least one works is at least 0.99?',
    options: ['2', '5', '4', '3'],
    correctIndex: 3,
    explanation: '$P(\\text{at least one works}) = 1 - 0.2^n$. Two detectors give $1 - 0.04 = 0.96$, and three give $1 - 0.008 = 0.992$, the first value at or above 0.99.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'pr-ent-4a',
    question: 'A survey of 250 commuters: drives and late 30, drives and on time 120, transit and late 40, transit and on time 60. A commuter is chosen at random. What is $P(\\text{drives} \\mid \\text{late})$?',
    options: ['0.200', '0.120', '0.429', '0.280'],
    correctIndex: 2,
    explanation: 'Given late restricts attention to the $30 + 40 = 70$ late commuters, and 30 of them drive: $30/70 \\approx 0.429$. The value 0.200 is $P(\\text{late} \\mid \\text{drives}) = 30/150$, and 0.120 is $P(\\text{drives and late})$.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'pr-ent-4b',
    question: 'Of the laptops a factory makes, 3% are defective. An inspection flags 90% of defective laptops and 5% of good ones. A laptop is flagged. About what is the probability it is defective?',
    options: ['0.358', '0.900', '0.027', '0.076'],
    correctIndex: 0,
    explanation: 'Flagged and defective is $0.03(0.90) = 0.027$; flagged and good is $0.97(0.05) = 0.0485$, so $P(\\text{flagged}) = 0.0755$ and $P(\\text{defective} \\mid \\text{flagged}) = 0.027/0.0755 \\approx 0.358$. The value 0.900 reverses the condition.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'pr-ent-5a',
    question: 'Among 400 voters: under 40 and in favor 90, under 40 and opposed 60, 40 or older and in favor 150, 40 or older and opposed 100. Are age group and opinion independent?',
    options: ['They are independent, since most voters favor it', 'Dependent, because more voters aged 40+ favor it', 'Independent, as 60% of each group is in favor', 'They are dependent, since the groups differ in size'],
    correctIndex: 2,
    explanation: '$P(\\text{favor} \\mid \\text{under 40}) = 90/150 = 0.6$ and $P(\\text{favor} \\mid \\text{40+}) = 150/250 = 0.6$; equal conditional proportions mean independence. Raw counts and group sizes do not decide it.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'pr-ent-5b',
    question: 'Events $A$ and $B$ have $P(A) = 0.3$ and $P(B) = 0.4$. Which value of $P(A \\cap B)$ would make them independent, and which would make them mutually exclusive?',
    options: ['Independent if 0; mutually exclusive if 0.12', 'Independent if 0.12; mutually exclusive if 0', 'Independent if 0.7; mutually exclusive if 0', 'Independent if 0.12; mutually exclusive if 0.7'],
    correctIndex: 1,
    explanation: 'Independence requires $P(A \\cap B) = P(A)P(B) = 0.12$; mutually exclusive events cannot occur together, so $P(A \\cap B) = 0$. The value 0.7 is $P(A) + P(B)$, which is never an intersection here.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'pr-ent-6a',
    question: 'At a company, 60% of employees work on site. Of on-site employees, 25% use the gym app; of remote employees, 40% use it. An employee is chosen at random. What is the probability the employee uses the app?',
    options: ['0.65', '0.325', '0.31', '0.15'],
    correctIndex: 2,
    explanation: 'Add the two branches: $0.60(0.25) + 0.40(0.40) = 0.15 + 0.16 = 0.31$. The value 0.325 averages the two rates without weighting by group size, and 0.15 is only the on-site branch.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'pr-ent-6b',
    question: 'A bag holds 4 red and 6 blue marbles. Two marbles are drawn at random without replacement. What is the probability that they are different colors?',
    options: ['0.267', '0.480', '0.240', '0.533'],
    correctIndex: 3,
    explanation: 'Red then blue is $\\frac{4}{10} \\cdot \\frac{6}{9}$ and blue then red is $\\frac{6}{10} \\cdot \\frac{4}{9}$, so the total is $\\frac{48}{90} \\approx 0.533$. The value 0.267 counts only one order, and 0.480 treats the draws as independent.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'pr-ent-7a',
    question: 'A survey of 200 students: 9th graders with a pet 48, 9th graders without a pet 32, 10th graders with a pet 72, 10th graders without a pet 48. A student is chosen at random. What is $P(\\text{9th grader or has a pet})$?',
    options: ['1.00', '0.24', '0.60', '0.76'],
    correctIndex: 3,
    explanation: '$P(\\text{9th}) = 80/200 = 0.40$ and $P(\\text{pet}) = 120/200 = 0.60$, with $48/200 = 0.24$ in both, so $P = 0.40 + 0.60 - 0.24 = 0.76$. Adding without subtracting the overlap gives 1.00.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'pr-ent-7b',
    question: 'For events $A$ and $B$, $P(A) = 0.5$ and $P(A \\mid B) = 0.2$. Which statement must be true?',
    options: ['A and B are independent events', 'A and B are dependent events', 'A and B are mutually exclusive', 'P(B | A) must equal 0.2 as well'],
    correctIndex: 1,
    explanation: 'Knowing $B$ occurred changes the chance of $A$ from 0.5 to 0.2, so the events are dependent. Mutually exclusive would require $P(A \\mid B) = 0$, and $P(B \\mid A)$ generally differs from $P(A \\mid B)$.',
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
