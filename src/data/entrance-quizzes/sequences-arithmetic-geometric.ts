/**
 * Entrance Quiz — Arithmetic and Geometric Sequences — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Sequences as Functions
  {
    id: 'sag-ent-1a',
    question: 'Which sequence is geometric?',
    options: ['$2, 4, 6, 8, \\dots$', '$1, 4, 9, 16, \\dots$', '$5, 10, 20, 35, \\dots$', '$3, -6, 12, -24, \\dots$'],
    correctIndex: 3,
    explanation: 'Each term of $3, -6, 12, -24$ is $-2$ times the one before, a constant ratio. The sequence $2, 4, 6, 8$ adds a constant (arithmetic), and the other two have neither a constant difference nor a constant ratio.',
    partNumber: 1,
    partTitle: 'Sequences as Functions',
  },
  {
    id: 'sag-ent-1b',
    question: 'The sequence $4, 9, 14, 19, \\dots$ is viewed as a function of $n$ with $a_1 = 4$. Which point lies on its graph?',
    options: ['$(5, 24)$', '$(24, 5)$', '$(5, 29)$', '$(4, 24)$'],
    correctIndex: 0,
    explanation: 'The input is the position and the output is the term: $a_5 = 4 + 4(5) = 24$, so the point is $(5, 24)$. The point $(5, 29)$ counts from $a_0 = 4$ instead of $a_1 = 4$.',
    partNumber: 1,
    partTitle: 'Sequences as Functions',
  },
  // Part 2 — Arithmetic Sequences
  {
    id: 'sag-ent-2a',
    question: 'An arithmetic sequence has $a_4 = 23$ and $a_{10} = 53$. What is $a_{25}$?',
    options: ['$143$', '$128$', '$133$', '$125$'],
    correctIndex: 1,
    explanation: 'Six steps from $a_4$ to $a_{10}$ add $30$, so $d = 5$. Then $a_{25} = a_{10} + 15(5) = 53 + 75 = 128$. The value $143$ treats $23$ as the first term.',
    partNumber: 2,
    partTitle: 'Arithmetic Sequences',
  },
  {
    id: 'sag-ent-2b',
    question: 'Which explicit rule gives the terms of $11, 8, 5, 2, \\dots$ with $a_1 = 11$?',
    options: ['$a_n = 11 + 3(n - 1)$', '$a_n = 11(-3)^{n - 1}$', '$a_n = 14 - 3n$', '$a_n = 11 - 3(n + 1)$'],
    correctIndex: 2,
    explanation: 'With $d = -3$, $a_n = 11 - 3(n - 1) = 14 - 3n$; check $a_1 = 11$ and $a_2 = 8$. The rule $11 - 3(n + 1)$ gives $a_1 = 5$, and $11(-3)^{n-1}$ multiplies instead of adding.',
    partNumber: 2,
    partTitle: 'Arithmetic Sequences',
  },
  // Part 3 — Geometric Sequences
  {
    id: 'sag-ent-3a',
    question: 'A geometric sequence has $g_2 = 12$ and $g_5 = -96$. What is $g_1$?',
    options: ['$-6$', '$6$', '$-24$', '$48$'],
    correctIndex: 0,
    explanation: 'Three steps multiply by $r^3 = \\tfrac{-96}{12} = -8$, so $r = -2$ and $g_1 = \\tfrac{12}{-2} = -6$. The value $-24$ multiplies by $r$ instead of dividing, and $48$ treats the sequence as arithmetic.',
    partNumber: 3,
    partTitle: 'Geometric Sequences',
  },
  {
    id: 'sag-ent-3b',
    question: 'Which describes the terms of the geometric sequence with $a_1 = 50$ and $r = -0.6$?',
    options: ['They stay positive and decrease toward $0$', 'They alternate in sign and shrink in size toward $0$', 'They alternate in sign and grow without bound', 'They decrease by $0.6$ at each step'],
    correctIndex: 1,
    explanation: 'A negative ratio flips the sign each step, and $\\lvert r \\rvert = 0.6 < 1$ shrinks each size by 40%: $50, -30, 18, -10.8, \\dots$. Subtracting $0.6$ each step would be an arithmetic sequence.',
    partNumber: 3,
    partTitle: 'Geometric Sequences',
  },
  // Part 4 — Recursive vs. Explicit Rules
  {
    id: 'sag-ent-4a',
    question: 'A sequence is defined by $a_1 = 5$ and $a_n = a_{n-1} - 4$. Which explicit rule gives the same sequence?',
    options: ['$a_n = 5 - 4n$', '$a_n = 5(-4)^{n-1}$', '$a_n = 5 - 4(n - 1)$', '$a_n = 1 - 4n$'],
    correctIndex: 2,
    explanation: 'Subtracting 4 each step is arithmetic with $d = -4$ starting from $a_1 = 5$, so $a_n = 5 - 4(n - 1)$. The rule $5 - 4n$ gives $a_1 = 1$, and $5(-4)^{n-1}$ multiplies instead.',
    partNumber: 4,
    partTitle: 'Recursive vs. Explicit Rules',
  },
  {
    id: 'sag-ent-4b',
    question: 'Which recursive definition gives the same sequence as $g_n = 3(2)^n$ for $n \\ge 0$?',
    options: ['$g_0 = 2$, $g_n = 3g_{n-1}$', '$g_0 = 6$, $g_n = 2g_{n-1}$', '$g_0 = 3$, $g_n = g_{n-1} + 2$', '$g_0 = 3$, $g_n = 2g_{n-1}$'],
    correctIndex: 3,
    explanation: 'The seed is $g_0 = 3(2)^0 = 3$, and each term is twice the previous one. Starting at $6$ gives the terms shifted by one place, and adding 2 makes it arithmetic.',
    partNumber: 4,
    partTitle: 'Recursive vs. Explicit Rules',
  },
  // Part 5 — Any-Term Rules & Comparing Growth
  {
    id: 'sag-ent-5a',
    question: 'A geometric sequence has $g_4 = 81$ and common ratio $r = \\tfrac{1}{3}$. What is $g_1$?',
    options: ['$3$', '$2187$', '$27$', '$243$'],
    correctIndex: 1,
    explanation: 'Walking back 3 steps divides by $\\tfrac{1}{3}$ three times: $g_1 = 81 \\cdot 3^3 = 2187$. The value $3$ is $g_7$, three steps forward, and $243$ stops after one step back.',
    partNumber: 5,
    partTitle: 'Any-Term Rules & Comparing Growth',
  },
  {
    id: 'sag-ent-5b',
    question: 'Sequence $A$ starts at $a_0 = 100$ and increases by $20$ each step. Sequence $B$ starts at $b_0 = 100$ and increases by $15\\%$ each step. Which statement is true?',
    options: ['$A$ stays ahead of $B$ at every step', '$B$ is ahead of $A$ at step 1', '$B$ is ahead of $A$ for large $n$', 'Both increase by the same amount per step'],
    correctIndex: 2,
    explanation: '$A$ gains $20$ every step, while $B$\\\'s gains grow ($15$, then $17.25$, and so on), so the geometric sequence eventually passes the arithmetic one. At step 1, $A = 120$ and $B = 115$.',
    partNumber: 5,
    partTitle: 'Any-Term Rules & Comparing Growth',
  },
  // Part 6 — From Sequences to Linear & Exponential Functions
  {
    id: 'sag-ent-6a',
    question: 'Which exponential function passes through $(1, 24)$ and $(3, 54)$?',
    options: ['$f(x) = 24(1.5)^x$', '$f(x) = 16(2.25)^x$', '$f(x) = 9 + 15x$', '$f(x) = 16(1.5)^x$'],
    correctIndex: 3,
    explanation: 'Over 2 units the output is multiplied by $\\tfrac{54}{24} = 2.25$, so $b^2 = 2.25$ and $b = 1.5$; then $a = \\tfrac{24}{1.5} = 16$. The base $2.25$ is the two-step factor, and $9 + 15x$ is the line through the points.',
    partNumber: 6,
    partTitle: 'From Sequences to Linear & Exponential Functions',
  },
  {
    id: 'sag-ent-6b',
    question: 'An exponential function $f$ matches this table.\n\n| $x$ | 0 | 2 | 4 | 6 |\n|---|---|---|---|---|\n| $f(x)$ | 5 | 20 | 80 | 320 |\n\nWhat is $f(3)$?',
    options: ['$40$', '$50$', '$160$', '$45$'],
    correctIndex: 0,
    explanation: 'The output is multiplied by $4$ every 2 units, so $b = 2$ and $f(x) = 5(2)^x$, giving $f(3) = 40$. The value $50$ assumes the function is linear between $x = 2$ and $x = 4$.',
    partNumber: 6,
    partTitle: 'From Sequences to Linear & Exponential Functions',
  },
  // Part 7 — Applications, Mastery & Exit Quiz
  {
    id: 'sag-ent-7a',
    question: 'A car worth \\$24,000 loses $15\\%$ of its value each year. Which describes its value after $n$ years?',
    options: ['Geometric, $24000(0.15)^n$', 'Arithmetic, $24000 - 3600n$', 'Geometric, $24000(0.85)^n$', 'Arithmetic, $24000 - 0.15n$'],
    correctIndex: 2,
    explanation: 'Losing a fixed percent keeps $85\\%$ each year, a constant ratio of $0.85$. The base $0.15$ keeps only the lost part, and $24000 - 3600n$ subtracts the first year\\\'s loss every year.',
    partNumber: 7,
    partTitle: 'Applications, Mastery & Exit Quiz',
  },
  {
    id: 'sag-ent-7b',
    question: 'A theater\\\'s first row has $18$ seats, and each row after it has $3$ more seats than the row before. How many seats are in row $25$?',
    options: ['$93$', '$87$', '$75$', '$90$'],
    correctIndex: 3,
    explanation: 'This is arithmetic with $a_1 = 18$ and $d = 3$: $a_{25} = 18 + 24(3) = 90$. The value $93$ adds $3$ twenty-five times instead of twenty-four.',
    partNumber: 7,
    partTitle: 'Applications, Mastery & Exit Quiz',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Sequences as Functions' },
    { partNumber: 2, partTitle: 'Arithmetic Sequences' },
    { partNumber: 3, partTitle: 'Geometric Sequences' },
    { partNumber: 4, partTitle: 'Recursive vs. Explicit Rules' },
    { partNumber: 5, partTitle: 'Any-Term Rules & Comparing Growth' },
    { partNumber: 6, partTitle: 'From Sequences to Linear & Exponential Functions' },
    { partNumber: 7, partTitle: 'Applications, Mastery & Exit Quiz' },
  ]
}
