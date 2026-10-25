/**
 * Entrance Quiz — Number Properties, Exponents and Roots (ASVAB Mathematics Knowledge) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 * Shape: src/data/entrance-quizzes/function-modeling-precalc.ts.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Number Properties on the ASVAB
  {
    id: 'mk-number-properties-ent-1a',
    question: 'Which number is rational but NOT an integer?',
    options: ['$-3$', '$0.6$', '$\\sqrt{11}$', '$8$'],
    correctIndex: 1,
    explanation: '$0.6 = \\frac{3}{5}$ is a fraction of integers but not a whole number or its negative. $-3$ and $8$ are integers, and $\\sqrt{11}$ is irrational.',
    partNumber: 1,
    partTitle: 'Number Properties on the ASVAB',
  },
  {
    id: 'mk-number-properties-ent-1b',
    question: 'Which equation shows the commutative property of multiplication?',
    options: ['$6(x + 2) = 6x + 12$', '$(6x)y = 6(xy)$', '$6 \\cdot x = x \\cdot 6$', '$6x + 0 = 6x$'],
    correctIndex: 2,
    explanation: 'Commutative means the order can switch: $6 \\cdot x = x \\cdot 6$. The others show the distributive, associative and identity properties.',
    partNumber: 1,
    partTitle: 'Number Properties on the ASVAB',
  },
  // Part 2 — Primes, Factors and Multiples
  {
    id: 'mk-number-properties-ent-2a',
    question: 'What is the least common multiple of $9$ and $12$?',
    options: ['$3$', '$108$', '$72$', '$36$'],
    correctIndex: 3,
    explanation: '$9 = 3^2$ and $12 = 2^2 \\cdot 3$. All primes with the larger powers: $2^2 \\cdot 3^2 = 36$. $3$ is the GCF and $108$ is the product.',
    partNumber: 2,
    partTitle: 'Primes, Factors and Multiples',
  },
  {
    id: 'mk-number-properties-ent-2b',
    question: 'Which number is prime?',
    options: ['$57$', '$61$', '$87$', '$49$'],
    correctIndex: 1,
    explanation: '$61$ has no factors besides $1$ and itself. $57 = 3 \\cdot 19$, $87 = 3 \\cdot 29$ and $49 = 7 \\cdot 7$.',
    partNumber: 2,
    partTitle: 'Primes, Factors and Multiples',
  },
  // Part 3 — Order of Operations, Integers and Absolute Value
  {
    id: 'mk-number-properties-ent-3a',
    question: 'Evaluate $16 - 2(5 - 8)^2$.',
    options: ['$-2$', '$34$', '$126$', '$28$'],
    correctIndex: 0,
    explanation: '$5 - 8 = -3$, $(-3)^2 = 9$, $2 \\cdot 9 = 18$, and $16 - 18 = -2$. Treating $(-3)^2$ as $-9$ gives $34$; subtracting $16 - 2$ first gives $126$.',
    partNumber: 3,
    partTitle: 'Order of Operations, Integers and Absolute Value',
  },
  {
    id: 'mk-number-properties-ent-3b',
    question: 'What is $-15 + \\lvert -4 - 3 \\rvert$?',
    options: ['$-22$', '$8$', '$-8$', '$-14$'],
    correctIndex: 2,
    explanation: 'Inside the bars: $-4 - 3 = -7$, and $\\lvert -7 \\rvert = 7$. Then $-15 + 7 = -8$.',
    partNumber: 3,
    partTitle: 'Order of Operations, Integers and Absolute Value',
  },
  // Part 4 — Exponents and Scientific Notation
  {
    id: 'mk-number-properties-ent-4a',
    question: 'What is $6^0 + 2^{-1}$?',
    options: ['$\\frac{1}{2}$', '$\\frac{13}{2}$', '$-1$', '$\\frac{3}{2}$'],
    correctIndex: 3,
    explanation: '$6^0 = 1$ and $2^{-1} = \\frac{1}{2}$, so the sum is $\\frac{3}{2}$. Treating $6^0$ as $0$ gives $\\frac{1}{2}$; treating the negative exponent as a negative number gives $-1$.',
    partNumber: 4,
    partTitle: 'Exponents and Scientific Notation',
  },
  {
    id: 'mk-number-properties-ent-4b',
    question: 'Which is $0.00058$ in scientific notation?',
    options: ['$5.8 \\times 10^{-4}$', '$5.8 \\times 10^{4}$', '$58 \\times 10^{-5}$', '$5.8 \\times 10^{-3}$'],
    correctIndex: 0,
    explanation: 'The decimal point moves $4$ places right to reach $5.8$, so the exponent is $-4$. $58 \\times 10^{-5}$ has the right value but is not in scientific notation.',
    partNumber: 4,
    partTitle: 'Exponents and Scientific Notation',
  },
  // Part 5 — Square Roots and Radicals
  {
    id: 'mk-number-properties-ent-5a',
    question: 'Which is $\\sqrt{128}$ in simplest form?',
    options: ['$4\\sqrt{8}$', '$64\\sqrt{2}$', '$2\\sqrt{32}$', '$8\\sqrt{2}$'],
    correctIndex: 3,
    explanation: 'The largest perfect square factor is $64$: $\\sqrt{64 \\cdot 2} = 8\\sqrt{2}$. $4\\sqrt{8}$ and $2\\sqrt{32}$ are equal in value but still contain square factors.',
    partNumber: 5,
    partTitle: 'Square Roots and Radicals',
  },
  {
    id: 'mk-number-properties-ent-5b',
    question: 'What is $\\sqrt{0.36}$?',
    options: ['$0.06$', '$0.6$', '$0.18$', '$6$'],
    correctIndex: 1,
    explanation: '$0.6 \\times 0.6 = 0.36$. Check by squaring: $0.06^2 = 0.0036$, and $0.18$ is half of $0.36$.',
    partNumber: 5,
    partTitle: 'Square Roots and Radicals',
  },
  // Part 6 — Test Strategy and Common Traps
  {
    id: 'mk-number-properties-ent-6a',
    question: 'What is $\\sqrt{25 + 144}$?',
    options: ['$17$', '$169$', '$13$', '$\\sqrt{17}$'],
    correctIndex: 2,
    explanation: 'Add under the root first: $\\sqrt{169} = 13$. The trap answer $17$ comes from splitting the root into $\\sqrt{25} + \\sqrt{144} = 5 + 12$.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  {
    id: 'mk-number-properties-ent-6b',
    question: 'A question asks for $5^3$. Which answer choice comes from the mistake of multiplying the base by the exponent?',
    options: ['$125$', '$15$', '$8$', '$243$'],
    correctIndex: 1,
    explanation: '$5 \\cdot 3 = 15$ is the trap. The correct value is $5 \\cdot 5 \\cdot 5 = 125$; $8$ adds the numbers, and $243 = 3^5$ swaps base and exponent.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'mk-number-properties-ent-7a',
    question: 'What is $(-1)^{20} - (-1)^{15}$?',
    options: ['$0$', '$-2$', '$2$', '$1$'],
    correctIndex: 2,
    explanation: 'An even power of $-1$ is $1$ and an odd power is $-1$. So $1 - (-1) = 2$.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
  {
    id: 'mk-number-properties-ent-7b',
    question: 'What is the greatest common factor of $48$ and $80$?',
    options: ['$16$', '$8$', '$240$', '$4$'],
    correctIndex: 0,
    explanation: '$48 = 2^4 \\cdot 3$ and $80 = 2^4 \\cdot 5$. They share $2^4 = 16$. $8$ and $4$ are common factors but smaller; $240$ is the LCM.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Number Properties on the ASVAB' },
    { partNumber: 2, partTitle: 'Primes, Factors and Multiples' },
    { partNumber: 3, partTitle: 'Order of Operations, Integers and Absolute Value' },
    { partNumber: 4, partTitle: 'Exponents and Scientific Notation' },
    { partNumber: 5, partTitle: 'Square Roots and Radicals' },
    { partNumber: 6, partTitle: 'Test Strategy and Common Traps' },
    { partNumber: 7, partTitle: 'Mixed Mastery Set' },
  ]
}
