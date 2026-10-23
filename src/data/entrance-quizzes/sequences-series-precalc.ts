/**
 * Entrance Quiz — Sequences — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Arithmetic Sequences
  {
    id: 'ssp-ent-1a',
    question: 'An arithmetic sequence has $a_5 = 31$ and $a_{12} = 3$. What is $a_1$?',
    options: ['$35$', '$43$', '$15$', '$47$'],
    correctIndex: 3,
    explanation: 'Seven steps change the term by $3 - 31 = -28$, so $d = -4$. Walking back four steps from $a_5$ adds $16$: $a_1 = 47$. The value $15$ walks back in the wrong direction.',
    partNumber: 1,
    partTitle: 'Arithmetic Sequences',
  },
  {
    id: 'ssp-ent-1b',
    question: 'An arithmetic sequence has first term $a_1 = 3$ and tenth term $a_{10} = 48$. Which rule gives $a_n$?',
    options: ['$a_n = 5n - 2$', '$a_n = 3 + 5n$', '$a_n = 3 + 4.5(n - 1)$', '$a_n = 3 + 4.8(n - 1)$'],
    correctIndex: 0,
    explanation: 'Nine steps add $45$, so $d = 5$ and $a_n = 3 + 5(n - 1) = 5n - 2$. Dividing by 10 instead of 9 steps gives $4.5$, and $3 + 5n$ makes $a_1 = 8$.',
    partNumber: 1,
    partTitle: 'Arithmetic Sequences',
  },
  // Part 2 — Geometric Sequences
  {
    id: 'ssp-ent-2a',
    question: 'A town of $12{,}000$ people loses $8\\%$ of its population each year. With year $1$ at $12{,}000$, which rule gives the population in year $n$?',
    options: ['$a_n = 12000(0.8)^{n-1}$', '$a_n = 12000(0.92)^{n-1}$', '$a_n = 12000(0.92)^{n}$', '$a_n = 12000 - 960n$'],
    correctIndex: 1,
    explanation: 'Losing $8\\%$ keeps $92\\%$, a ratio of $0.92$, and year 1 has had no losses yet, so the exponent is $n - 1$. The exponent $n$ already applies one year of loss in year 1, and $0.8$ would keep only $80\\%$ each year.',
    partNumber: 2,
    partTitle: 'Geometric Sequences',
  },
  {
    id: 'ssp-ent-2b',
    question: 'Which describes the terms of the geometric sequence with $g_0 = 50$ and $r = -0.6$?',
    options: ['They stay positive and decrease toward $0$', 'They alternate in sign and shrink in size toward $0$', 'They alternate in sign and grow without bound', 'They decrease by $0.6$ at each step'],
    correctIndex: 1,
    explanation: 'A negative ratio flips the sign each step, and $\\lvert r \\rvert = 0.6 < 1$ shrinks each size by $40\\%$: $50, -30, 18, -10.8, \\dots$. Subtracting $0.6$ each step would be an arithmetic sequence.',
    partNumber: 2,
    partTitle: 'Geometric Sequences',
  },
  // Part 3 — Sequences as Functions & General Terms
  {
    id: 'ssp-ent-3a',
    question: 'A geometric sequence has $g_5 = 96$ and common ratio $r = 2$. What is $g_0$?',
    options: ['$3$', '$3072$', '$48$', '$1.5$'],
    correctIndex: 0,
    explanation: 'Walking back 5 steps divides by 2 five times: $g_0 = \\tfrac{96}{32} = 3$. The value $48$ walks back only one step, and $3072$ walks forward.',
    partNumber: 3,
    partTitle: 'Sequences as Functions & General Terms',
  },
  {
    id: 'ssp-ent-3b',
    question: 'An arithmetic sequence has $a_0 = -4$ and common difference $2.5$. Which describes its graph?',
    options: ['A solid line $y = 2.5x - 4$ for all real $x$', 'Separate points on the line $y = 2.5x - 4$', 'Separate points on the line $y = -4x + 2.5$', 'Separate points on the curve $y = -4(2.5)^x$'],
    correctIndex: 1,
    explanation: 'The terms $a_n = -4 + 2.5n$ sit on the line $y = 2.5x - 4$, but only at whole-number inputs, so the graph is separate points. Drawing the full line treats the sequence as a function of every real number.',
    partNumber: 3,
    partTitle: 'Sequences as Functions & General Terms',
  },
  // Part 4 — Arithmetic vs. Geometric Growth
  {
    id: 'ssp-ent-4a',
    question: 'The terms $12, 18, 27, 40.5$ correspond to $n = 0, 1, 2, 3$. Which statement describes this sequence?',
    options: ['Arithmetic: it increases by the same amount each step', 'Geometric: it increases by the same amount each step', 'Geometric: it increases by a larger amount each step', 'Arithmetic: it increases by a larger amount each step'],
    correctIndex: 2,
    explanation: 'Each term is $1.5$ times the previous one, so the sequence is geometric, and the gains $6, 9, 13.5$ grow each step. Equal gains would make it arithmetic.',
    partNumber: 4,
    partTitle: 'Arithmetic vs. Geometric Growth',
  },
  {
    id: 'ssp-ent-4b',
    question: 'Sequence $P$ is $200, 160, 128, \\dots$ (constant ratio) and sequence $Q$ is $200, 160, 120, \\dots$ (constant difference), both starting at $n = 0$. How do $P_3$ and $Q_3$ compare?',
    options: ['$Q_3$ is larger than $P_3$', '$P_3$ and $Q_3$ are both negative', '$P_3$ and $Q_3$ are exactly equal', '$P_3$ is larger than $Q_3$'],
    correctIndex: 3,
    explanation: '$P_3 = 200(0.8)^3 = 102.4$ and $Q_3 = 200 - 3(40) = 80$. A decreasing geometric sequence of positive terms falls by smaller amounts each step, so it stays above the arithmetic one.',
    partNumber: 4,
    partTitle: 'Arithmetic vs. Geometric Growth',
  },
  // Part 5 — Sequences and Linear & Exponential Functions
  {
    id: 'ssp-ent-5a',
    question: 'An exponential function has $f(0) = 81$ and $f(4) = 16$, with base $b > 0$. Which is $f$?',
    options: ['$f(x) = 81\\left(\\tfrac{16}{81}\\right)^x$', '$f(x) = 81\\left(\\tfrac{2}{3}\\right)^x$', '$f(x) = 81 - \\tfrac{65}{4}x$', '$f(x) = 16\\left(\\tfrac{2}{3}\\right)^x$'],
    correctIndex: 1,
    explanation: 'Four steps multiply by $\\tfrac{16}{81}$, so $b^4 = \\tfrac{16}{81}$ and $b = \\tfrac{2}{3}$, with $a = f(0) = 81$. The base $\\tfrac{16}{81}$ is the four-step factor, and $81 - \\tfrac{65}{4}x$ is the line through the points.',
    partNumber: 5,
    partTitle: 'Sequences and Linear & Exponential Functions',
  },
  {
    id: 'ssp-ent-5b',
    question: 'A function $f$ has these values.\n\n| $x$ | 0 | 2 | 4 | 6 |\n|---|---|---|---|---|\n| $f(x)$ | 100 | 81 | 65.61 | 53.1441 |\n\nWhich function fits the table?',
    options: ['$f(x) = 100(0.81)^x$', '$f(x) = 100(0.19)^x$', '$f(x) = 100(0.9)^x$', '$f(x) = 100(0.405)^x$'],
    correctIndex: 2,
    explanation: 'The outputs are multiplied by $0.81$ every 2 units, so $b^2 = 0.81$ and $b = 0.9$. The base $0.81$ is the two-unit factor, and $0.405$ divides it by 2 instead of taking a square root.',
    partNumber: 5,
    partTitle: 'Sequences and Linear & Exponential Functions',
  },
  // Part 6 — The Binomial Theorem
  {
    id: 'ssp-ent-6a',
    question: 'What is the coefficient of $x^2$ in the expansion of $(x + 3)^5$?',
    options: ['$90$', '$30$', '$10$', '$270$'],
    correctIndex: 3,
    explanation: 'The $x^2$ term is $\\binom{5}{3}x^2 \\cdot 3^3 = 10 \\cdot 27x^2 = 270x^2$. The value $90$ pairs $x^2$ with $3^2$, but the exponents must add to 5.',
    partNumber: 6,
    partTitle: 'The Binomial Theorem',
  },
  {
    id: 'ssp-ent-6b',
    question: 'How many terms does the expansion of $(2x - 1)^6$ have, and what is its constant term?',
    options: ['$7$ terms; constant term $1$', '$6$ terms; constant term $-1$', '$7$ terms; constant term $-1$', '$7$ terms; constant term $64$'],
    correctIndex: 0,
    explanation: 'An exponent of 6 gives $6 + 1 = 7$ terms, and the constant term is $(-1)^6 = 1$. The value $64$ is the coefficient of $x^6$, $2^6$.',
    partNumber: 6,
    partTitle: 'The Binomial Theorem',
  },
  // Part 7 — Review & Applications
  {
    id: 'ssp-ent-7a',
    question: 'A ball is dropped from $10$ m, and each rebound reaches $60\\%$ of the previous height. How high is the fourth rebound?',
    options: ['$2.16$ m', '$7.6$ m', '$1.296$ m', '$3.6$ m'],
    correctIndex: 2,
    explanation: 'The first rebound is $10(0.6) = 6$ m, so the fourth is $10(0.6)^4 = 1.296$ m. The value $2.16$ m is the third rebound, $3.6$ m is the second, and $7.6$ m subtracts $0.6$ each time.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'ssp-ent-7b',
    question: 'A geometric sequence with positive terms has $g_0 = 5$ and $g_3 = 40$. Which explicit formula gives $g_n$?',
    options: ['$g_n = 5 \\cdot 8^{n-1}$', '$g_n = 5 \\cdot 2^{n-1}$', '$g_n = 5 + \\tfrac{35}{3}n$', '$g_n = 5 \\cdot 2^n$'],
    correctIndex: 3,
    explanation: 'Three steps multiply by $\\tfrac{40}{5} = 8$, so $r^3 = 8$ and $r = 2$; since the count starts at $n = 0$, $g_n = 5 \\cdot 2^n$. The exponent $n - 1$ would make $g_0 = 2.5$.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Arithmetic Sequences' },
    { partNumber: 2, partTitle: 'Geometric Sequences' },
    { partNumber: 3, partTitle: 'Sequences as Functions & General Terms' },
    { partNumber: 4, partTitle: 'Arithmetic vs. Geometric Growth' },
    { partNumber: 5, partTitle: 'Sequences and Linear & Exponential Functions' },
    { partNumber: 6, partTitle: 'The Binomial Theorem' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
