/**
 * Entrance Quiz — Complex Numbers and Operations — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Imaginary Unit & Powers of $i$
  {
    id: 'cxn-ent-1a',
    question: 'Which number equals $\\dfrac{6 - \\sqrt{-20}}{2}$?',
    options: [
      '$3 - 2i\\sqrt{5}$',
      '$3 - i\\sqrt{5}$',
      '$6 - 2i\\sqrt{5}$',
      '$-3 - i\\sqrt{5}$',
    ],
    correctIndex: 1,
    explanation: '$\\sqrt{-20} = i\\sqrt{20} = 2i\\sqrt{5}$, so the expression is $\\frac{6 - 2i\\sqrt{5}}{2} = 3 - i\\sqrt{5}$. Both terms of the numerator must be divided by $2$, and the $i$ cannot be dropped.',
    partNumber: 1,
    partTitle: 'The Imaginary Unit & Powers of $i$',
  },
  {
    id: 'cxn-ent-1b',
    question: 'What is the value of $\\sqrt{-4} \\cdot \\sqrt{-25}$?',
    options: ['$10i$', '$10$', '$-10i$', '$-10$'],
    correctIndex: 3,
    explanation: 'Convert each root first: $\\sqrt{-4} = 2i$ and $\\sqrt{-25} = 5i$, so the product is $10i^2 = -10$. Combining under one root as $\\sqrt{100} = 10$ is invalid for negative radicands.',
    partNumber: 1,
    partTitle: 'The Imaginary Unit & Powers of $i$',
  },

  // Part 2 — Adding, Subtracting & Multiplying
  {
    id: 'cxn-ent-2a',
    question: 'Write $(4 - 3i) - (-2 + 5i)$ in the form $a + bi$.',
    options: ['$2 + 2i$', '$6 + 2i$', '$2 - 8i$', '$6 - 8i$'],
    correctIndex: 3,
    explanation: 'Distribute the subtraction to both parts: real part $4 - (-2) = 6$ and imaginary part $-3 - 5 = -8$, giving $6 - 8i$.',
    partNumber: 2,
    partTitle: 'Adding, Subtracting & Multiplying',
  },
  {
    id: 'cxn-ent-2b',
    question: 'Write $(3 - 2i)(1 + 4i)$ in the form $a + bi$.',
    options: ['$-5 + 10i$', '$11 + 10i$', '$3 - 8i$', '$11 + 14i$'],
    correctIndex: 1,
    explanation: 'Expanding gives $3 + 12i - 2i - 8i^2 = 3 + 10i + 8 = 11 + 10i$, because $-8i^2 = +8$. Treating $i^2$ as $+1$ gives $-5 + 10i$.',
    partNumber: 2,
    partTitle: 'Adding, Subtracting & Multiplying',
  },

  // Part 3 — Conjugates & Division
  {
    id: 'cxn-ent-3a',
    question: 'What is the value of $(5 - 3i)(5 + 3i)$?',
    options: ['$34i$', '$16 - 30i$', '$34$', '$25 + 9i$'],
    correctIndex: 2,
    explanation: 'A number times its conjugate is $a^2 + b^2$: $25 - 15i + 15i - 9i^2 = 25 + 9 = 34$, a real number. Squaring $5 - 3i$ instead gives $16 - 30i$.',
    partNumber: 3,
    partTitle: 'Conjugates & Division',
  },
  {
    id: 'cxn-ent-3b',
    question: 'Which product is a real number?',
    options: [
      '$(3 + 2i)(2 + 3i)$',
      '$(3 + 2i)(3 + 2i)$',
      '$(3 + 2i)(2 - 3i)$',
      '$(3 + 2i)(3 - 2i)$',
    ],
    correctIndex: 3,
    explanation: '$3 - 2i$ is the conjugate of $3 + 2i$, and their product is $9 + 4 = 13$. The other products are $13i$, $5 + 12i$ and $12 - 5i$; swapping the real and imaginary parts does not make a conjugate.',
    partNumber: 3,
    partTitle: 'Conjugates & Division',
  },

  // Part 4 — The Complex Plane & Modulus
  {
    id: 'cxn-ent-4a',
    question: 'Which point in the complex plane represents $(1 + 2i) - (4 - i)$?',
    options: [
      '$(-3, 3)$',
      '$(3, -3)$',
      '$(-3, 1)$',
      '$(5, 1)$',
    ],
    correctIndex: 0,
    explanation: '$(1 + 2i) - (4 - i) = (1 - 4) + (2 + 1)i = -3 + 3i$, which is plotted at (real part, imaginary part) $= (-3, 3)$.',
    partNumber: 4,
    partTitle: 'The Complex Plane & Modulus',
  },
  {
    id: 'cxn-ent-4b',
    question: 'What is the modulus $|-6 + 2i|$?',
    options: ['$4\\sqrt{2}$', '$8$', '$2\\sqrt{10}$', '$40$'],
    correctIndex: 2,
    explanation: '$|-6 + 2i| = \\sqrt{(-6)^2 + 2^2} = \\sqrt{40} = 2\\sqrt{10}$. Subtracting the squares gives $\\sqrt{32} = 4\\sqrt{2}$, and $40$ forgets the square root.',
    partNumber: 4,
    partTitle: 'The Complex Plane & Modulus',
  },

  // Part 5 — Polar (Trigonometric) Form
  {
    id: 'cxn-ent-5a',
    question: 'Which is the polar form of $-2\\sqrt{3} - 2i$, with $\\theta$ in $[0, 2\\pi)$?',
    options: [
      '$4\\left(\\cos\\frac{7\\pi}{6} + i\\sin\\frac{7\\pi}{6}\\right)$',
      '$4\\left(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}\\right)$',
      '$4\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right)$',
      '$4\\left(\\cos\\frac{4\\pi}{3} + i\\sin\\frac{4\\pi}{3}\\right)$',
    ],
    correctIndex: 0,
    explanation: '$r = \\sqrt{12 + 4} = 4$. The point $(-2\\sqrt{3}, -2)$ is in Quadrant III with reference angle $\\frac{\\pi}{6}$, so $\\theta = \\pi + \\frac{\\pi}{6} = \\frac{7\\pi}{6}$. The arctangent alone gives $\\frac{\\pi}{6}$, which points into Quadrant I.',
    partNumber: 5,
    partTitle: 'Polar (Trigonometric) Form',
  },
  {
    id: 'cxn-ent-5b',
    question: 'Write $6\\left(\\cos\\frac{3\\pi}{4} + i\\sin\\frac{3\\pi}{4}\\right)$ in the form $a + bi$.',
    options: [
      '$3\\sqrt{2} - 3\\sqrt{2}\\,i$',
      '$-3 + 3\\sqrt{3}\\,i$',
      '$-3\\sqrt{2} + 3\\sqrt{2}\\,i$',
      '$3\\sqrt{2} + 3\\sqrt{2}\\,i$',
    ],
    correctIndex: 2,
    explanation: '$\\cos\\frac{3\\pi}{4} = -\\frac{\\sqrt{2}}{2}$ and $\\sin\\frac{3\\pi}{4} = \\frac{\\sqrt{2}}{2}$, so $a = 6\\left(-\\frac{\\sqrt{2}}{2}\\right) = -3\\sqrt{2}$ and $b = 3\\sqrt{2}$. The point lies in Quadrant II.',
    partNumber: 5,
    partTitle: 'Polar (Trigonometric) Form',
  },

  // Part 6 — Complex Roots of Quadratics
  {
    id: 'cxn-ent-6a',
    question: 'What are the solutions of $2x^2 - 4x + 5 = 0$?',
    options: [
      '$1 \\pm \\frac{\\sqrt{6}}{2}i$',
      '$2 \\pm \\sqrt{6}\\,i$',
      '$-1 \\pm \\frac{\\sqrt{6}}{2}i$',
      '$1 \\pm \\frac{\\sqrt{6}}{4}i$',
    ],
    correctIndex: 0,
    explanation: 'The discriminant is $16 - 40 = -24$, so $x = \\frac{4 \\pm 2i\\sqrt{6}}{4} = 1 \\pm \\frac{\\sqrt{6}}{2}i$. Dividing by $2$ instead of $2a = 4$ gives $2 \\pm \\sqrt{6}\\,i$.',
    partNumber: 6,
    partTitle: 'Complex Roots of Quadratics',
  },
  {
    id: 'cxn-ent-6b',
    question: 'How many real $x$-intercepts does the graph of $y = 3x^2 - 2x + 4$ have?',
    options: [
      'None, because the discriminant is $-44$',
      'Two, because the discriminant is $52$',
      'One, because the discriminant is $0$',
      'Two, because the discriminant is $44$',
    ],
    correctIndex: 0,
    explanation: 'The discriminant is $(-2)^2 - 4(3)(4) = 4 - 48 = -44 < 0$, so both roots are non-real (a conjugate pair) and the graph never meets the $x$-axis.',
    partNumber: 6,
    partTitle: 'Complex Roots of Quadratics',
  },

  // Part 7 — Mixed Mastery & Exit Quiz
  {
    id: 'cxn-ent-7a',
    question: 'Given that $2 + i$ is a zero of $p(x) = x^3 - 3x^2 + x + 5$, what are the other two zeros?',
    options: [
      '$-2 - i$ and $-1$',
      '$2 - i$ and $-1$',
      '$2 - i$ and $-5$',
      '$-2 + i$ and $-1$',
    ],
    correctIndex: 1,
    explanation: 'Real coefficients force the conjugate $2 - i$ to be a zero, and $(x - 2 - i)(x - 2 + i) = x^2 - 4x + 5$. Dividing, $p(x) = (x^2 - 4x + 5)(x + 1)$, so the third zero is $-1$.',
    partNumber: 7,
    partTitle: 'Mixed Mastery & Exit Quiz',
  },
  {
    id: 'cxn-ent-7b',
    question: 'The two solutions of $x^2 + 2x + 2 = 0$ are plotted in the complex plane. Which is the polar form of the solution in Quadrant II?',
    options: [
      '$\\sqrt{2}\\left(\\cos\\frac{7\\pi}{4} + i\\sin\\frac{7\\pi}{4}\\right)$',
      '$2\\left(\\cos\\frac{3\\pi}{4} + i\\sin\\frac{3\\pi}{4}\\right)$',
      '$\\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)$',
      '$\\sqrt{2}\\left(\\cos\\frac{3\\pi}{4} + i\\sin\\frac{3\\pi}{4}\\right)$',
    ],
    correctIndex: 3,
    explanation: 'The solutions are $x = \\frac{-2 \\pm \\sqrt{-4}}{2} = -1 \\pm i$. The Quadrant II one is $-1 + i$, with $r = \\sqrt{1 + 1} = \\sqrt{2}$ and $\\theta = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$.',
    partNumber: 7,
    partTitle: 'Mixed Mastery & Exit Quiz',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Imaginary Unit & Powers of $i$' },
    { partNumber: 2, partTitle: 'Adding, Subtracting & Multiplying' },
    { partNumber: 3, partTitle: 'Conjugates & Division' },
    { partNumber: 4, partTitle: 'The Complex Plane & Modulus' },
    { partNumber: 5, partTitle: 'Polar (Trigonometric) Form' },
    { partNumber: 6, partTitle: 'Complex Roots of Quadratics' },
    { partNumber: 7, partTitle: 'Mixed Mastery & Exit Quiz' },
  ]
}
