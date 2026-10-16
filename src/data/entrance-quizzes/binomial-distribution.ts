/**
 * Entrance Quiz — Binomial Distributions (AP Statistics)
 * Lesson: binomial-geometric-apstats (rendered by binomial-distribution).
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Binomial Setting'
const P2 = 'Binomial Probabilities'
const P3 = 'Binomial Mean and Standard Deviation in Context'
const P4 = 'Simulation and Cumulative Binomial Probabilities'
const P5 = 'Is It Binomial? Checking the Conditions'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Mixed Review'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'bin-ent-1a',
    question: 'A student guesses on a 10-question quiz. The first 5 questions are true/false and the last 5 are multiple choice with 4 options each. Why is $X$ = number of correct answers not binomial?',
    options: ['There is no fixed number of trials', 'Success chances are not all equal', 'Each question has more than two outcomes', 'Guesses on different questions are dependent'],
    correctIndex: 1,
    explanation: 'A guess is right with probability 0.5 on the true/false questions but 0.25 on the multiple-choice ones, so the same-$p$ condition fails. There are 10 fixed trials, each graded right or wrong, and the guesses are independent.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'bin-ent-1b',
    question: '$X$ has a binomial distribution with $n = 50$ and $p = 0.2$. What are its mean and standard deviation?',
    options: ['Mean 10, SD 8.00', 'Mean 10, SD 3.16', 'Mean 40, SD 2.83', 'Mean 10, SD 2.83'],
    correctIndex: 3,
    explanation: '$\\mu = np = 50(0.2) = 10$ and $\\sigma = \\sqrt{np(1-p)} = \\sqrt{50(0.2)(0.8)} = \\sqrt{8} \\approx 2.83$. 8.00 forgets the square root, 3.16 leaves out $(1 - p)$, and 40 is $n(1-p)$.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'bin-ent-2a',
    question: '$X$ has a binomial distribution with $n = 4$ and $p = 0.3$. What is $P(X = 2)$?',
    options: ['0.0441', '0.4116', '0.2646', '0.0900'],
    correctIndex: 2,
    explanation: '$P(X = 2) = \\binom{4}{2}(0.3)^2(0.7)^2 = 6(0.09)(0.49) = 0.2646$. Leaving out the $\\binom{4}{2} = 6$ arrangements gives 0.0441, and 0.4116 is $P(X = 1)$.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'bin-ent-2b',
    question: 'A fair coin is flipped 6 times. What is the probability of getting at least 5 heads?',
    options: ['0.1094', '0.0938', '0.0156', '0.8906'],
    correctIndex: 0,
    explanation: '$P(X = 5) = \\binom{6}{5}(0.5)^6 = 6/64$ and $P(X = 6) = 1/64$, so $P(X \\geq 5) = 7/64 \\approx 0.1094$. 0.0938 is $P(X = 5)$ alone, and 0.8906 is $P(X \\leq 4)$.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'bin-ent-3a',
    question: 'Of a brand\'s phones, 12% need a repair within a year. In random samples of 50 phones, $X$ = number needing repair has mean 6. Which interpretation of the mean is correct?',
    options: ['Exactly 6 of any 50 phones will need repair', 'About 12% of samples will have 6 repairs', 'Over many samples of 50, the average count is about 6', 'At most 6 phones in a sample will need repair'],
    correctIndex: 2,
    explanation: 'The mean of a binomial count is a long-run average: across many random samples of 50 phones, the number needing repair averages about $np = 6$. Individual samples vary above and below 6.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'bin-ent-3b',
    question: 'A coin is claimed to be fair. In 100 flips it lands heads 63 times. About how many standard deviations above the expected count is this result?',
    options: ['2.6', '13', '1.3', '0.13'],
    correctIndex: 0,
    explanation: 'For a fair coin, $\\mu = 100(0.5) = 50$ and $\\sigma = \\sqrt{100(0.5)(0.5)} = 5$, so 63 is $(63 - 50)/5 = 2.6$ SDs above the mean, an unusual result. 13 is the raw difference, and 1.3 divides by $\\sqrt{100}$.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'bin-ent-4a',
    question: 'For $X \\sim B(6, 0.3)$, a cumulative table gives $P(X \\leq 1) = 0.4202$ and $P(X \\leq 2) = 0.7443$. What is $P(X \\geq 2)$?',
    options: ['0.2557', '0.3241', '0.7443', '0.5798'],
    correctIndex: 3,
    explanation: '$P(X \\geq 2) = 1 - P(X \\leq 1) = 1 - 0.4202 = 0.5798$. Using $1 - P(X \\leq 2) = 0.2557$ drops $X = 2$, and 0.3241 is $P(X = 2)$ alone.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'bin-ent-4b',
    question: 'A student wants to simulate $X$ = number of correct guesses on 4 questions, each with a 0.25 chance of being right, using random digits 0 to 9. Which plan works?',
    options: ['Correct 0–2, wrong 3–9; 4 digits for each trial', 'Correct 0–3, wrong 4–9; 4 digits for each trial', 'Correct 0–1, wrong 2–7, ignore 8–9; 4 digits each', 'Correct 0–1, wrong 2–9; 4 digits for each trial'],
    correctIndex: 2,
    explanation: 'Ignoring 8 and 9 leaves 8 equally likely digits, and 2 of them (0, 1) mean correct, giving $2/8 = 0.25$; four usable digits make one trial. The other plans model probabilities of 0.3, 0.4 and 0.2.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'bin-ent-5a',
    question: '$X$ counts successes in a binomial setting with $n = 400$ and $p = 0.15$. What are the mean and standard deviation of the sample proportion $\\hat{p} = X/400$?',
    options: ['Mean 60, SD 7.14', 'Mean 0.15, SD 0.018', 'Mean 0.15, SD 7.14', 'Mean 0.15, SD 0.357'],
    correctIndex: 1,
    explanation: 'Dividing the count by $n$ divides its mean and SD by 400: $\\mu_{\\hat{p}} = 0.15$ and $\\sigma_{\\hat{p}} = \\sqrt{0.15(0.85)/400} \\approx 0.018$. Mean 60 and SD 7.14 describe the count $X$, not the proportion.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'bin-ent-5b',
    question: 'A student rolls a fair die 15 times and records $X$ = the sum of the faces. Which binomial condition fails?',
    options: ['Binary: X is not a count of successes', 'Independent: the rolls affect each other', 'Number: there is no fixed number of rolls', 'Same p: the chance changes with each roll'],
    correctIndex: 0,
    explanation: 'A binomial variable counts successes, but a sum of faces is not a success count. The 15 rolls are fixed in number, independent and identical, so the other conditions hold.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'bin-ent-6a',
    question: 'Of a factory\'s chips, 8% are defective. In a random sample of 10 chips, what is the probability that at most 1 is defective?',
    options: ['0.4344', '0.3777', '0.1879', '0.8121'],
    correctIndex: 3,
    explanation: '$P(0) = 0.92^{10} \\approx 0.4344$ and $P(1) = 10(0.08)(0.92)^9 \\approx 0.3777$, so $P(X \\leq 1) \\approx 0.8121$. 0.1879 is $P(X \\geq 2)$, the complement.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'bin-ent-6b',
    question: 'A test has 10 multiple-choice questions with 5 choices each. A student guesses on every question. What is the probability of getting at least 2 right?',
    options: ['0.8926', '0.6242', '0.3758', '0.2684'],
    correctIndex: 1,
    explanation: '$P(0) = 0.8^{10} \\approx 0.1074$ and $P(1) = 10(0.2)(0.8)^9 \\approx 0.2684$, so $P(X \\geq 2) = 1 - 0.1074 - 0.2684 \\approx 0.6242$. 0.8926 is $P(X \\geq 1)$, and 0.3758 is $P(X \\leq 1)$.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'bin-ent-7a',
    question: 'For $X \\sim B(10, 0.4)$, a student writes $P(X \\geq 3) = 1 - P(X \\leq 3)$. What is wrong?',
    options: ['It drops X = 3; use 1 − P(X ≤ 2)', 'It counts X = 3 twice; use 1 − P(X ≤ 4)', 'Nothing; the two expressions are equal', 'It should be P(X ≤ 3) − 1 instead'],
    correctIndex: 0,
    explanation: 'The complement of $X \\geq 3$ is $X \\leq 2$, so $P(X \\geq 3) = 1 - P(X \\leq 2)$. Subtracting $P(X \\leq 3)$ also removes $X = 3$, which belongs in the event.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'bin-ent-7b',
    question: 'For a binomial variable with $n = 100$, which change makes the standard deviation $\\sigma_X$ larger?',
    options: ['Changing p from 0.5 to 0.9', 'Changing p from 0.1 to 0.5', 'Changing n from 100 to 50', 'Changing p from 0.4 to 0.6'],
    correctIndex: 1,
    explanation: '$\\sigma_X = \\sqrt{np(1-p)}$ is largest at $p = 0.5$: it grows from $\\sqrt{9} = 3$ at $p = 0.1$ to $\\sqrt{25} = 5$ at $p = 0.5$. Moving $p$ from 0.5 to 0.9 shrinks it, fewer trials shrink it, and 0.4 and 0.6 give the same value.',
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
