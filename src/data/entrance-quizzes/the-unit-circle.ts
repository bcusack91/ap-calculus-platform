/**
 * Entrance Quiz — The Unit Circle — 8 questions (2 per lesson part, 4 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Counting Method
  {
    id: 'uc-ent-1a',
    question: 'What is the exact value of $\\sin\\frac{\\pi}{3} \\cdot \\cos\\frac{\\pi}{6}$?',
    options: ['$\\frac{\\sqrt{3}}{4}$', '$\\frac{3}{4}$', '$\\frac{1}{4}$', '$\\frac{3}{2}$'],
    correctIndex: 1,
    explanation: 'Both factors equal $\\frac{\\sqrt{3}}{2}$, so the product is $\\frac{\\sqrt{3}}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{3}{4}$. Using $\\cos\\frac{\\pi}{6} = \\frac{1}{2}$ (the sine value) gives $\\frac{\\sqrt{3}}{4}$.',
    partNumber: 1,
    partTitle: 'Counting Method',
  },
  {
    id: 'uc-ent-1b',
    question: 'What is the exact value of $\\cos\\frac{\\pi}{3} + \\sin\\frac{\\pi}{4}$?',
    options: ['$\\frac{\\sqrt{3}+\\sqrt{2}}{2}$', '$\\frac{\\sqrt{3}+1}{2}$', '$\\frac{1+\\sqrt{2}}{2}$', '$\\frac{1+\\sqrt{2}}{4}$'],
    correctIndex: 2,
    explanation: '$\\cos\\frac{\\pi}{3} = \\frac{1}{2}$ and $\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$, so the sum is $\\frac{1+\\sqrt{2}}{2}$. Taking $\\cos\\frac{\\pi}{3}$ as $\\frac{\\sqrt{3}}{2}$ reads the sine list instead of the reversed cosine list.',
    partNumber: 1,
    partTitle: 'Counting Method',
  },

  // Part 2 — Angles & Tables
  {
    id: 'uc-ent-2a',
    question: 'An angle $\\theta$ satisfies $0 \\le \\theta \\le \\frac{\\pi}{2}$ and $\\sin\\theta = \\frac{\\sqrt{3}}{2}$. What is $\\theta$?',
    options: ['$\\frac{\\pi}{6}$', '$\\frac{2\\pi}{3}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$'],
    correctIndex: 3,
    explanation: 'Sine increases through $0, \\frac{1}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, 1$ at $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$, so $\\theta = \\frac{\\pi}{3}$. The angle $\\frac{2\\pi}{3}$ has the same sine but lies outside the allowed interval.',
    partNumber: 2,
    partTitle: 'Angles & Tables',
  },
  {
    id: 'uc-ent-2b',
    question: 'Let $a$ and $b$ be angles with $0 < a < b < \\frac{\\pi}{2}$. Which statement must be true?',
    options: ['$\\sin a > \\sin b$ and $\\cos a < \\cos b$', '$\\sin a < \\sin b$ and $\\cos a < \\cos b$', '$\\sin a < \\sin b$ and $\\cos a > \\cos b$', '$\\sin a > \\sin b$ and $\\cos a > \\cos b$'],
    correctIndex: 2,
    explanation: 'On the first quadrant sine increases from $0$ to $1$ while cosine decreases from $1$ to $0$, so the larger angle $b$ has the larger sine and the smaller cosine.',
    partNumber: 2,
    partTitle: 'Angles & Tables',
  },

  // Part 3 — What Is the Unit Circle?
  {
    id: 'uc-ent-3a',
    question: 'The terminal ray of an angle $\\theta$ in standard position meets the unit circle at $\\left(-\\frac{3}{5}, \\frac{4}{5}\\right)$. What is $\\sin\\theta$?',
    options: ['$-\\frac{3}{5}$', '$-\\frac{4}{3}$', '$-\\frac{4}{5}$', '$\\frac{4}{5}$'],
    correctIndex: 3,
    explanation: 'On the unit circle the point is $(\\cos\\theta, \\sin\\theta)$, so $\\sin\\theta$ is the $y$-coordinate, $\\frac{4}{5}$. The value $-\\frac{3}{5}$ is $\\cos\\theta$, and $-\\frac{4}{3}$ is the ratio $\\frac{y}{x}$.',
    partNumber: 3,
    partTitle: 'What Is the Unit Circle?',
  },
  {
    id: 'uc-ent-3b',
    question: 'A point in the first quadrant lies on the unit circle and has $y$-coordinate $\\frac{2}{3}$. What is its $x$-coordinate?',
    options: ['$\\frac{1}{3}$', '$\\frac{\\sqrt{5}}{3}$', '$\\frac{5}{9}$', '$\\frac{\\sqrt{13}}{3}$'],
    correctIndex: 1,
    explanation: 'Points on the unit circle satisfy $x^2 + y^2 = 1$, so $x^2 = 1 - \\frac{4}{9} = \\frac{5}{9}$ and $x = \\frac{\\sqrt{5}}{3}$ (positive in the first quadrant). Stopping at $\\frac{5}{9}$ forgets the square root.',
    partNumber: 3,
    partTitle: 'What Is the Unit Circle?',
  },

  // Part 4 — Complete Unit Circle
  {
    id: 'uc-ent-4a',
    question: 'What are the coordinates of the point on the unit circle at the angle $\\frac{7\\pi}{6}$?',
    options: ['$\\left(-\\frac{1}{2}, -\\frac{\\sqrt{3}}{2}\\right)$', '$\\left(-\\frac{\\sqrt{3}}{2}, -\\frac{1}{2}\\right)$', '$\\left(\\frac{\\sqrt{3}}{2}, -\\frac{1}{2}\\right)$', '$\\left(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$'],
    correctIndex: 1,
    explanation: '$\\frac{7\\pi}{6}$ is in Quadrant III with reference angle $\\frac{\\pi}{6}$, whose point is $\\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$; both signs turn negative. Swapping the coordinates gives the point for $\\frac{4\\pi}{3}$ instead.',
    partNumber: 4,
    partTitle: 'Complete Unit Circle',
  },
  {
    id: 'uc-ent-4b',
    question: 'What is the exact value of $\\sin\\frac{5\\pi}{3} + \\cos\\frac{3\\pi}{4}$?',
    options: ['$\\frac{\\sqrt{2}-\\sqrt{3}}{2}$', '$\\frac{\\sqrt{3}-\\sqrt{2}}{2}$', '$-\\frac{1+\\sqrt{2}}{2}$', '$-\\frac{\\sqrt{3}+\\sqrt{2}}{2}$'],
    correctIndex: 3,
    explanation: '$\\frac{5\\pi}{3}$ is in Quadrant IV, so $\\sin\\frac{5\\pi}{3} = -\\frac{\\sqrt{3}}{2}$; $\\frac{3\\pi}{4}$ is in Quadrant II, so $\\cos\\frac{3\\pi}{4} = -\\frac{\\sqrt{2}}{2}$. The sum is $-\\frac{\\sqrt{3}+\\sqrt{2}}{2}$.',
    partNumber: 4,
    partTitle: 'Complete Unit Circle',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Counting Method' },
    { partNumber: 2, partTitle: 'Angles & Tables' },
    { partNumber: 3, partTitle: 'What Is the Unit Circle?' },
    { partNumber: 4, partTitle: 'Complete Unit Circle' },
  ]
}
