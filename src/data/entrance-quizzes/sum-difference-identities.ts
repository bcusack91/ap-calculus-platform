/**
 * Entrance Quiz — Sum and Difference Identities — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Why We Need Them
  {
    id: 'sd-ent-1a',
    question: 'Let $A = \\frac{\\pi}{3}$ and $B = \\frac{\\pi}{6}$. What is the value of $\\sin(A + B) - (\\sin A + \\sin B)$?',
    options: ['$\\frac{\\sqrt{3}-1}{2}$', '$\\frac{1-\\sqrt{3}}{2}$', '$0$', '$\\frac{1+\\sqrt{3}}{2}$'],
    correctIndex: 1,
    explanation: '$\\sin(A + B) = \\sin\\frac{\\pi}{2} = 1$, while $\\sin A + \\sin B = \\frac{\\sqrt{3}}{2} + \\frac{1}{2}$, so the difference is $\\frac{1-\\sqrt{3}}{2}$. It is not $0$ because sine does not distribute over addition.',
    partNumber: 1,
    partTitle: 'Why We Need Them',
  },
  {
    id: 'sd-ent-1b',
    question: 'Which sum of two special angles equals $\\frac{13\\pi}{12}$?',
    options: ['$\\frac{2\\pi}{3} + \\frac{\\pi}{6}$', '$\\frac{2\\pi}{3} + \\frac{\\pi}{3}$', '$\\frac{5\\pi}{6} + \\frac{\\pi}{3}$', '$\\frac{3\\pi}{4} + \\frac{\\pi}{3}$'],
    correctIndex: 3,
    explanation: 'In twelfths, $\\frac{3\\pi}{4} + \\frac{\\pi}{3} = \\frac{9\\pi}{12} + \\frac{4\\pi}{12} = \\frac{13\\pi}{12}$. The others give $\\frac{10\\pi}{12}$, $\\frac{12\\pi}{12}$ and $\\frac{14\\pi}{12}$.',
    partNumber: 1,
    partTitle: 'Why We Need Them',
  },

  // Part 2 — The Cosine Formulas
  {
    id: 'sd-ent-2a',
    question: 'Using $\\frac{17\\pi}{12} = \\frac{5\\pi}{4} + \\frac{\\pi}{6}$, what is the exact value of $\\cos\\frac{17\\pi}{12}$?',
    options: ['$-\\frac{\\sqrt{6}+\\sqrt{2}}{4}$', '$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$', '$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$', '$\\frac{\\sqrt{2}-\\sqrt{6}}{4}$'],
    correctIndex: 3,
    explanation: '$\\cos\\frac{5\\pi}{4}\\cos\\frac{\\pi}{6} - \\sin\\frac{5\\pi}{4}\\sin\\frac{\\pi}{6} = \\left(-\\frac{\\sqrt{2}}{2}\\right)\\frac{\\sqrt{3}}{2} - \\left(-\\frac{\\sqrt{2}}{2}\\right)\\frac{1}{2} = \\frac{\\sqrt{2}-\\sqrt{6}}{4}$, negative as expected in Quadrant III. Adding the second product instead gives $-\\frac{\\sqrt{6}+\\sqrt{2}}{4}$.',
    partNumber: 2,
    partTitle: 'The Cosine Formulas',
  },
  {
    id: 'sd-ent-2b',
    question: 'Which expression is equivalent to $\\cos\\left(x - \\frac{\\pi}{3}\\right)$?',
    options: ['$\\frac{\\sqrt{3}}{2}\\cos x + \\frac{1}{2}\\sin x$', '$\\frac{1}{2}\\cos x - \\frac{\\sqrt{3}}{2}\\sin x$', '$\\frac{1}{2}\\cos x + \\frac{\\sqrt{3}}{2}\\sin x$', '$\\cos x - \\frac{1}{2}$'],
    correctIndex: 2,
    explanation: '$\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B$, so $\\cos x\\cos\\frac{\\pi}{3} + \\sin x\\sin\\frac{\\pi}{3} = \\frac{1}{2}\\cos x + \\frac{\\sqrt{3}}{2}\\sin x$. The minus inside becomes a plus, and $\\cos x - \\frac{1}{2}$ wrongly distributes the cosine.',
    partNumber: 2,
    partTitle: 'The Cosine Formulas',
  },

  // Part 3 — The Sine Formulas
  {
    id: 'sd-ent-3a',
    question: 'Using $\\frac{19\\pi}{12} = \\frac{4\\pi}{3} + \\frac{\\pi}{4}$, what is the exact value of $\\sin\\frac{19\\pi}{12}$?',
    options: ['$\\frac{\\sqrt{2}-\\sqrt{6}}{4}$', '$-\\frac{\\sqrt{6}+\\sqrt{2}}{4}$', '$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$', '$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$'],
    correctIndex: 1,
    explanation: '$\\sin\\frac{4\\pi}{3}\\cos\\frac{\\pi}{4} + \\cos\\frac{4\\pi}{3}\\sin\\frac{\\pi}{4} = \\left(-\\frac{\\sqrt{3}}{2}\\right)\\frac{\\sqrt{2}}{2} + \\left(-\\frac{1}{2}\\right)\\frac{\\sqrt{2}}{2} = -\\frac{\\sqrt{6}+\\sqrt{2}}{4}$, negative as expected in Quadrant IV. Subtracting the second product gives $\\frac{\\sqrt{2}-\\sqrt{6}}{4}$.',
    partNumber: 3,
    partTitle: 'The Sine Formulas',
  },
  {
    id: 'sd-ent-3b',
    question: 'Which expression is equivalent to $\\sin\\left(x + \\frac{3\\pi}{2}\\right)$?',
    options: ['$-\\cos x$', '$\\cos x$', '$\\sin x - 1$', '$\\sin x$'],
    correctIndex: 0,
    explanation: '$\\sin x\\cos\\frac{3\\pi}{2} + \\cos x\\sin\\frac{3\\pi}{2} = \\sin x \\cdot 0 + \\cos x \\cdot (-1) = -\\cos x$. Writing $\\sin x - 1$ treats $\\sin\\left(x + \\frac{3\\pi}{2}\\right)$ as $\\sin x + \\sin\\frac{3\\pi}{2}$.',
    partNumber: 3,
    partTitle: 'The Sine Formulas',
  },

  // Part 4 — Combining Sine and Cosine Into One Sinusoid
  {
    id: 'sd-ent-4a',
    question: 'Which expression is equivalent to $-\\sin x + \\sqrt{3}\\cos x$?',
    options: ['$2\\sin\\left(x + \\frac{2\\pi}{3}\\right)$', '$2\\sin\\left(x + \\frac{\\pi}{3}\\right)$', '$2\\sin\\left(x - \\frac{\\pi}{3}\\right)$', '$2\\sin\\left(x - \\frac{\\pi}{6}\\right)$'],
    correctIndex: 0,
    explanation: 'Match $R\\sin(x + C) = (R\\cos C)\\sin x + (R\\sin C)\\cos x$: $R = \\sqrt{1 + 3} = 2$, $\\cos C = -\\frac{1}{2}$ and $\\sin C = \\frac{\\sqrt{3}}{2}$, so $C = \\frac{2\\pi}{3}$ in Quadrant II. The shift $\\frac{\\pi}{3}$ ignores the negative sign on $\\sin x$ and gives $\\sin x + \\sqrt{3}\\cos x$.',
    partNumber: 4,
    partTitle: 'Combining Sine and Cosine Into One Sinusoid',
  },
  {
    id: 'sd-ent-4b',
    question: 'Solve $\\sin x + \\cos x = 1$ for $0 \\le x < 2\\pi$.',
    options: ['$\\frac{\\pi}{4}$ and $\\frac{3\\pi}{4}$', '$0$, $\\frac{\\pi}{2}$, and $2\\pi$', '$0$ and $\\frac{\\pi}{2}$', '$\\frac{7\\pi}{12}$ and $\\frac{23\\pi}{12}$'],
    correctIndex: 2,
    explanation: 'Rewrite as $\\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right) = 1$, so $\\sin u = \\frac{\\sqrt{2}}{2}$ with $u = x + \\frac{\\pi}{4}$ in $\\left[\\frac{\\pi}{4}, \\frac{9\\pi}{4}\\right)$. Then $u = \\frac{\\pi}{4}$ or $\\frac{3\\pi}{4}$, giving $x = 0$ or $\\frac{\\pi}{2}$; $2\\pi$ is outside the interval.',
    partNumber: 4,
    partTitle: 'Combining Sine and Cosine Into One Sinusoid',
  },

  // Part 5 — Exact Values: A Repeatable Method
  {
    id: 'sd-ent-5a',
    question: 'What is the exact value of $\\cos\\frac{\\pi}{12} - \\sin\\frac{\\pi}{12}$?',
    options: ['$\\frac{\\sqrt{6}}{2}$', '$0$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{2}}{2}$'],
    correctIndex: 3,
    explanation: '$\\cos\\frac{\\pi}{12} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$ and $\\sin\\frac{\\pi}{12} = \\frac{\\sqrt{6}-\\sqrt{2}}{4}$, so the difference is $\\frac{2\\sqrt{2}}{4} = \\frac{\\sqrt{2}}{2}$. Adding the two values instead gives $\\frac{\\sqrt{6}}{2}$.',
    partNumber: 5,
    partTitle: 'Exact Values: A Repeatable Method',
  },
  {
    id: 'sd-ent-5b',
    question: 'What is the exact value of $\\cos\\frac{23\\pi}{12}$?',
    options: ['$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$', '$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$', '$-\\frac{\\sqrt{6}+\\sqrt{2}}{4}$', '$\\frac{\\sqrt{2}-\\sqrt{6}}{4}$'],
    correctIndex: 0,
    explanation: 'With $\\frac{23\\pi}{12} = \\frac{7\\pi}{4} + \\frac{\\pi}{6}$: $\\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} - \\left(-\\frac{\\sqrt{2}}{2}\\right)\\frac{1}{2} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$. The angle is in Quadrant IV, where cosine is positive, so a negative answer signals a sign slip.',
    partNumber: 5,
    partTitle: 'Exact Values: A Repeatable Method',
  },

  // Part 6 — Simplifying & Proving Identities
  {
    id: 'sd-ent-6a',
    question: 'What is the exact value of $\\cos\\frac{11\\pi}{12}\\cos\\frac{\\pi}{4} + \\sin\\frac{11\\pi}{12}\\sin\\frac{\\pi}{4}$?',
    options: ['$-\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$-\\frac{1}{2}$', '$\\frac{1}{2}$'],
    correctIndex: 2,
    explanation: 'Matched products joined by a plus form $\\cos(A - B)$: $\\cos\\left(\\frac{11\\pi}{12} - \\frac{3\\pi}{12}\\right) = \\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$. Reading it as $\\cos(A + B) = \\cos\\frac{7\\pi}{6}$ gives $-\\frac{\\sqrt{3}}{2}$.',
    partNumber: 6,
    partTitle: 'Simplifying & Proving Identities',
  },
  {
    id: 'sd-ent-6b',
    question: 'Which expression is equivalent to $\\sin(x + y) + \\sin(x - y)$?',
    options: ['$2\\sin x$', '$2\\sin x\\cos y$', '$\\sin 2x$', '$0$'],
    correctIndex: 1,
    explanation: 'Expanding gives $(\\sin x\\cos y + \\cos x\\sin y) + (\\sin x\\cos y - \\cos x\\sin y)$; the $\\cos x\\sin y$ terms cancel, leaving $2\\sin x\\cos y$. The answer $2\\sin x$ comes from distributing sine over the sums.',
    partNumber: 6,
    partTitle: 'Simplifying & Proving Identities',
  },

  // Part 7 — Applications, Mixed Practice & Exit Quiz
  {
    id: 'sd-ent-7a',
    question: 'Angle $A$ is in Quadrant III with $\\sin A = -\\frac{8}{17}$, and angle $B$ is in Quadrant II with $\\cos B = -\\frac{3}{5}$. What is $\\sin(A - B)$?',
    options: ['$-\\frac{36}{85}$', '$\\frac{84}{85}$', '$\\frac{36}{85}$', '$-\\frac{84}{85}$'],
    correctIndex: 1,
    explanation: 'Here $\\cos A = -\\frac{15}{17}$ and $\\sin B = \\frac{4}{5}$, so $\\sin(A - B) = \\sin A\\cos B - \\cos A\\sin B = \\frac{24}{85} + \\frac{60}{85} = \\frac{84}{85}$. Using $\\sin(A + B)$ by mistake gives $-\\frac{36}{85}$.',
    partNumber: 7,
    partTitle: 'Applications, Mixed Practice & Exit Quiz',
  },
  {
    id: 'sd-ent-7b',
    question: 'For two angles $A$ and $B$, $\\cos(A + B) = 0.3$ and $\\cos(A - B) = 0.7$. What is $\\sin A\\sin B$?',
    options: ['$0.4$', '$-0.2$', '$0.5$', '$0.2$'],
    correctIndex: 3,
    explanation: 'Subtracting $\\cos(A + B) = \\cos A\\cos B - \\sin A\\sin B$ from $\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B$ gives $2\\sin A\\sin B = 0.4$, so $\\sin A\\sin B = 0.2$. Stopping at $0.4$ forgets to divide by $2$.',
    partNumber: 7,
    partTitle: 'Applications, Mixed Practice & Exit Quiz',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Why We Need Them' },
    { partNumber: 2, partTitle: 'The Cosine Formulas' },
    { partNumber: 3, partTitle: 'The Sine Formulas' },
    { partNumber: 4, partTitle: 'Combining Sine and Cosine Into One Sinusoid' },
    { partNumber: 5, partTitle: 'Exact Values: A Repeatable Method' },
    { partNumber: 6, partTitle: 'Simplifying & Proving Identities' },
    { partNumber: 7, partTitle: 'Applications, Mixed Practice & Exit Quiz' },
  ]
}
