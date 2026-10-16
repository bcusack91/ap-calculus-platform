/**
 * Entrance Quiz — Volumes of Revolution (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Disk Method
  {
    id: 'vor-ent-1a',
    question: 'The region under $y = \\dfrac{1}{x}$ from $x = 1$ to $x = 3$ is rotated about the $x$-axis. What is the volume?',
    options: ['$\\frac{2\\pi}{3}$', '$\\pi\\ln 3$', '$\\frac{2}{3}$', '$2\\pi\\ln 3$'],
    correctIndex: 0,
    explanation: 'Disk method with $R(x) = \\frac{1}{x}$: $\\pi\\int_1^3 x^{-2}\\,dx = \\pi\\left(1 - \\frac{1}{3}\\right) = \\frac{2\\pi}{3}$. Forgetting to square the radius gives $\\pi\\ln 3$.',
    partNumber: 1,
    partTitle: 'Disk Method',
  },
  {
    id: 'vor-ent-1b',
    question: 'The region under $y = e^{x/2}$ from $x = 0$ to $x = 2$ is rotated about the $x$-axis. Which integral gives the volume?',
    options: ['$\\pi\\int_0^2 e^{x/2}\\,dx$', '$\\pi\\int_0^2 e^x\\,dx$', '$\\int_0^2 \\pi e^{x^2/4}\\,dx$', '$2\\pi\\int_0^2 e^{x/2}\\,dx$'],
    correctIndex: 1,
    explanation: 'Each disk has radius $e^{x/2}$, and $(e^{x/2})^2 = e^x$, so $V = \\pi\\int_0^2 e^x\\,dx$. Squaring only the exponent gives $e^{x^2/4}$, and omitting the square leaves $e^{x/2}$.',
    partNumber: 1,
    partTitle: 'Disk Method',
  },
  // Part 2 — Washer Method
  {
    id: 'vor-ent-2a',
    question: 'The region between $y = 2x$ and $y = x^2$ is rotated about the $x$-axis. What is the volume?',
    options: ['$\\frac{16\\pi}{15}$', '$\\frac{4\\pi}{3}$', '$\\frac{64\\pi}{15}$', '$\\frac{32\\pi}{3}$'],
    correctIndex: 2,
    explanation: 'The curves meet at $x = 0$ and $x = 2$, with outer radius $2x$ and inner radius $x^2$: $\\pi\\int_0^2 (4x^2 - x^4)\\,dx = \\pi\\left(\\frac{32}{3} - \\frac{32}{5}\\right) = \\frac{64\\pi}{15}$. Squaring the difference of the radii gives $\\frac{16\\pi}{15}$.',
    partNumber: 2,
    partTitle: 'Washer Method',
  },
  {
    id: 'vor-ent-2b',
    question: 'The region between the lines $y = 1$ and $y = 3$ for $0 \\le x \\le 2$ is rotated about the $x$-axis. What is the volume?',
    options: ['$8\\pi$', '$4\\pi$', '$16$', '$16\\pi$'],
    correctIndex: 3,
    explanation: 'Washers with $R = 3$ and $r = 1$: $\\pi\\int_0^2 (9 - 1)\\,dx = 16\\pi$. Using $(R - r)^2 = 4$ instead of $R^2 - r^2 = 8$ gives $8\\pi$.',
    partNumber: 2,
    partTitle: 'Washer Method',
  },
  // Part 3 — Rotation About Other Axes
  {
    id: 'vor-ent-3a',
    question: 'The region between $y = x^2$ and the $x$-axis for $0 \\le x \\le 1$ is rotated about the line $y = -2$. Which integral gives the volume?',
    options: ['$\\pi\\int_0^1 \\left[(x^2 + 2)^2 - 4\\right] dx$', '$\\pi\\int_0^1 (x^2 + 2)^2\\,dx$', '$\\pi\\int_0^1 x^4\\,dx$', '$\\pi\\int_0^1 (x^2 - 2)^2\\,dx$'],
    correctIndex: 0,
    explanation: 'Distances are measured from $y = -2$: the outer radius is $x^2 - (-2) = x^2 + 2$ and the inner radius is $0 - (-2) = 2$. The washer area is $\\pi[(x^2 + 2)^2 - 4]$; leaving out the inner radius ignores the hole.',
    partNumber: 3,
    partTitle: 'Rotation About Other Axes',
  },
  {
    id: 'vor-ent-3b',
    question: 'The region between $y = 3 - x$ and the $x$-axis for $0 \\le x \\le 3$ is rotated about the line $y = 4$. What are the outer and inner radii of a washer at $x$?',
    options: ['Outer $1 + x$, inner $4$', 'Outer $4$, inner $1 + x$', 'Outer $3 - x$, inner $0$', 'Outer $7 - x$, inner $4$'],
    correctIndex: 1,
    explanation: 'The axis $y = 4$ lies above the region, so the farther edge is the $x$-axis: outer radius $4 - 0 = 4$. The nearer edge is the line, giving inner radius $4 - (3 - x) = 1 + x$.',
    partNumber: 3,
    partTitle: 'Rotation About Other Axes',
  },
  // Part 4 — Cross-Sectional Volumes
  {
    id: 'vor-ent-4a',
    question: 'A solid has as its base the region between $y = 4 - x^2$ and the $x$-axis. Cross-sections perpendicular to the $x$-axis are squares. What is the volume?',
    options: ['$\\frac{512\\pi}{15}$', '$\\frac{32}{3}$', '$\\frac{512}{15}$', '$\\frac{1024}{15}$'],
    correctIndex: 2,
    explanation: 'The side is $4 - x^2$, so $V = \\int_{-2}^{2} (4 - x^2)^2\\,dx = 2\\int_0^2 (16 - 8x^2 + x^4)\\,dx = 2\\left(32 - \\frac{64}{3} + \\frac{32}{5}\\right) = \\frac{512}{15}$. Square cross-sections involve no $\\pi$; $\\frac{32}{3}$ is the area of the base.',
    partNumber: 4,
    partTitle: 'Cross-Sectional Volumes',
  },
  {
    id: 'vor-ent-4b',
    question: 'A solid\'s base is the region between $y = \\sqrt{x}$ and the $x$-axis for $0 \\le x \\le 4$. Cross-sections perpendicular to the $x$-axis are isosceles right triangles with the hypotenuse in the base. What is the volume?',
    options: ['$4$', '$8$', '$2\\pi$', '$2$'],
    correctIndex: 3,
    explanation: 'With hypotenuse $s = \\sqrt{x}$, each triangle has area $\\frac{s^2}{4} = \\frac{x}{4}$, so $V = \\int_0^4 \\frac{x}{4}\\,dx = 2$. Treating $s$ as a leg ($\\frac{s^2}{2}$) gives 4, and squares give 8.',
    partNumber: 4,
    partTitle: 'Cross-Sectional Volumes',
  },
  // Part 5 — Disk/Washer in y
  {
    id: 'vor-ent-5a',
    question: 'The region bounded by $y = x^2$, the line $y = 9$ and the $y$-axis ($x \\ge 0$) is rotated about the $y$-axis. What is the volume?',
    options: ['$\\frac{81\\pi}{2}$', '$81\\pi$', '$\\frac{81}{2}$', '$18\\pi$'],
    correctIndex: 0,
    explanation: 'Use disks in $y$ with radius $x = \\sqrt{y}$: $\\pi\\int_0^9 y\\,dy = \\frac{81\\pi}{2}$. Forgetting to square $\\sqrt{y}$ gives $\\pi\\int_0^9 \\sqrt{y}\\,dy = 18\\pi$.',
    partNumber: 5,
    partTitle: 'Disk/Washer in y',
  },
  {
    id: 'vor-ent-5b',
    question: 'The region between $x = y^2$ and the $y$-axis for $0 \\le y \\le 2$ is rotated about the line $x = -1$. What are the radii of a washer at height $y$?',
    options: ['Outer $y^2 + 1$, inner $y^2$', 'Outer $y^2 + 1$, inner $1$', 'Outer $y^2 - 1$, inner $-1$', 'Outer $(y + 1)^2$, inner $1$'],
    correctIndex: 1,
    explanation: 'Radii are horizontal distances from $x = -1$. The curve $x = y^2$ is $y^2 + 1$ away and the $y$-axis is 1 away, so the outer radius is $y^2 + 1$ and the inner radius is 1.',
    partNumber: 5,
    partTitle: 'Disk/Washer in y',
  },
  // Part 6 — AP-Style Workshop
  {
    id: 'vor-ent-6a',
    question: 'Region $R$ is bounded by $y = \\sqrt{x}$ and $y = \\frac{x}{2}$, which meet at $x = 0$ and $x = 4$. Which integral gives the volume when $R$ is rotated about the line $y = 3$?',
    options: ['$\\pi\\int_0^4 \\left[(3 - \\sqrt{x})^2 - \\left(3 - \\frac{x}{2}\\right)^2\\right] dx$', '$\\pi\\int_0^4 \\left(\\sqrt{x} - \\frac{x}{2}\\right)^2 dx$', '$\\pi\\int_0^4 \\left[\\left(3 - \\frac{x}{2}\\right)^2 - (3 - \\sqrt{x})^2\\right] dx$', '$\\pi\\int_0^4 \\left(x - \\frac{x^2}{4}\\right) dx$'],
    correctIndex: 2,
    explanation: 'On $(0, 4)$, $\\sqrt{x} > \\frac{x}{2}$, so the line $y = \\frac{x}{2}$ is farther from $y = 3$: outer radius $3 - \\frac{x}{2}$, inner radius $3 - \\sqrt{x}$. The last option is the volume about the $x$-axis.',
    partNumber: 6,
    partTitle: 'AP-Style Workshop',
  },
  {
    id: 'vor-ent-6b',
    question: 'The same region $R$, between $y = \\sqrt{x}$ and $y = \\frac{x}{2}$ for $0 \\le x \\le 4$, is the base of a solid whose cross-sections perpendicular to the $x$-axis are squares. What is the volume?',
    options: ['$\\frac{8\\pi}{15}$', '$\\frac{4}{3}$', '$\\frac{8}{3}$', '$\\frac{8}{15}$'],
    correctIndex: 3,
    explanation: 'The side is $\\sqrt{x} - \\frac{x}{2}$, so $V = \\int_0^4 \\left(x - x^{3/2} + \\frac{x^2}{4}\\right) dx = 8 - \\frac{64}{5} + \\frac{16}{3} = \\frac{8}{15}$. Squaring each function separately gives $\\frac{8}{3}$, and $\\frac{4}{3}$ is the area of $R$.',
    partNumber: 6,
    partTitle: 'AP-Style Workshop',
  },
  // Part 7 — Comprehensive Assessment
  {
    id: 'vor-ent-7a',
    question: 'The region under $y = x^{3/2}$ from $x = 0$ to $x = 2$ is rotated about the $x$-axis. What is the volume?',
    options: ['$4\\pi$', '$16\\pi$', '$\\frac{8\\sqrt{2}\\pi}{5}$', '$\\frac{16\\pi}{3}$'],
    correctIndex: 0,
    explanation: '$V = \\pi\\int_0^2 (x^{3/2})^2\\,dx = \\pi\\int_0^2 x^3\\,dx = \\pi \\cdot \\frac{16}{4} = 4\\pi$. Forgetting to divide by 4 gives $16\\pi$, and not squaring the radius gives $\\frac{8\\sqrt{2}\\pi}{5}$.',
    partNumber: 7,
    partTitle: 'Comprehensive Assessment',
  },
  {
    id: 'vor-ent-7b',
    question: 'The region bounded by $y = 2x$, the $x$-axis and the line $x = 3$ is rotated about the $y$-axis. Using washers in $y$, what is the volume?',
    options: ['$54\\pi$', '$36\\pi$', '$18\\pi$', '$\\frac{9\\pi}{2}$'],
    correctIndex: 1,
    explanation: 'For $0 \\le y \\le 6$, the outer radius is $x = 3$ and the inner radius is $x = \\frac{y}{2}$: $\\pi\\int_0^6 \\left(9 - \\frac{y^2}{4}\\right) dy = \\pi(54 - 18) = 36\\pi$. The value $54\\pi$ ignores the hole.',
    partNumber: 7,
    partTitle: 'Comprehensive Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Disk Method' },
    { partNumber: 2, partTitle: 'Washer Method' },
    { partNumber: 3, partTitle: 'Rotation About Other Axes' },
    { partNumber: 4, partTitle: 'Cross-Sectional Volumes' },
    { partNumber: 5, partTitle: 'Disk/Washer in y' },
    { partNumber: 6, partTitle: 'AP-Style Workshop' },
    { partNumber: 7, partTitle: 'Comprehensive Assessment' },
  ]
}
