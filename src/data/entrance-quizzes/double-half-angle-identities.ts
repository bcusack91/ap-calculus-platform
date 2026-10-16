/**
 * Entrance Quiz — Double-Angle Identities — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Where the Double-Angle Formulas Come From
  {
    id: 'da-ent-1a',
    question: 'Applying a double-angle formula with $2\\theta$ playing the role of the single angle, which expression equals $\\cos(4\\theta)$?',
    options: ['$2\\cos^2 2\\theta - 1$', '$4\\cos^2\\theta - 1$', '$1 - 4\\sin^2\\theta$', '$4\\cos^2\\theta - 2$'],
    correctIndex: 0,
    explanation: 'Since $4\\theta = 2(2\\theta)$, the identity $\\cos(2A) = 2\\cos^2 A - 1$ with $A = 2\\theta$ gives $2\\cos^2 2\\theta - 1$. The expression $4\\cos^2\\theta - 2$ equals $2\\cos(2\\theta)$, which is not $\\cos(4\\theta)$.',
    partNumber: 1,
    partTitle: 'Where the Double-Angle Formulas Come From',
  },
  {
    id: 'da-ent-1b',
    question: 'For an angle $\\theta$, $\\sin\\theta = -\\frac{5}{13}$ and $\\cos\\theta = \\frac{12}{13}$. What is $\\cos(2\\theta)$?',
    options: ['$-\\frac{119}{169}$', '$-\\frac{120}{169}$', '$\\frac{119}{169}$', '$\\frac{7}{13}$'],
    correctIndex: 2,
    explanation: '$\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta = \\frac{144}{169} - \\frac{25}{169} = \\frac{119}{169}$; squaring removes the negative sign of $\\sin\\theta$. The value $-\\frac{120}{169}$ is $\\sin(2\\theta)$.',
    partNumber: 1,
    partTitle: 'Where the Double-Angle Formulas Come From',
  },

  // Part 2 — Evaluating Double Angles From a Given Ratio
  {
    id: 'da-ent-2a',
    question: 'Angle $\\theta$ is in Quadrant IV and $\\cos\\theta = \\frac{1}{4}$. What is $\\sin(2\\theta)$?',
    options: ['$-\\frac{\\sqrt{15}}{8}$', '$\\frac{\\sqrt{15}}{8}$', '$-\\frac{7}{8}$', '$\\frac{7}{8}$'],
    correctIndex: 0,
    explanation: 'In Quadrant IV, $\\sin\\theta = -\\sqrt{1 - \\frac{1}{16}} = -\\frac{\\sqrt{15}}{4}$, so $\\sin(2\\theta) = 2\\left(-\\frac{\\sqrt{15}}{4}\\right)\\left(\\frac{1}{4}\\right) = -\\frac{\\sqrt{15}}{8}$. The value $-\\frac{7}{8}$ is $\\cos(2\\theta)$.',
    partNumber: 2,
    partTitle: 'Evaluating Double Angles From a Given Ratio',
  },
  {
    id: 'da-ent-2b',
    question: 'If $\\sin\\theta = \\frac{2}{3}$, what is $\\cos(2\\theta)$? (No quadrant is given.)',
    options: ['$-\\frac{1}{3}$', '$-\\frac{1}{9}$', '$\\frac{1}{9}$', '$\\frac{\\sqrt{5}}{3}$'],
    correctIndex: 2,
    explanation: 'Use the sine-only form: $\\cos(2\\theta) = 1 - 2\\sin^2\\theta = 1 - \\frac{8}{9} = \\frac{1}{9}$, the same in every quadrant. Forgetting to square gives $1 - \\frac{4}{3} = -\\frac{1}{3}$.',
    partNumber: 2,
    partTitle: 'Evaluating Double Angles From a Given Ratio',
  },

  // Part 3 — Reading Double Angles Backwards (Recognition)
  {
    id: 'da-ent-3a',
    question: 'Which expression is equivalent to $6\\sin(4x)\\cos(4x)$?',
    options: ['$3\\sin(8x)$', '$6\\sin(8x)$', '$3\\sin(4x)$', '$12\\sin(8x)$'],
    correctIndex: 0,
    explanation: 'Write $6\\sin(4x)\\cos(4x) = 3\\left(2\\sin(4x)\\cos(4x)\\right) = 3\\sin(8x)$: the inside angle doubles and the factor $2$ is used up. Keeping the $6$ forgets that the formula needs that factor of $2$.',
    partNumber: 3,
    partTitle: 'Reading Double Angles Backwards (Recognition)',
  },
  {
    id: 'da-ent-3b',
    question: 'What are the amplitude and period of $y = 5\\sin x\\cos x$?',
    options: ['Amplitude $5$, period $2\\pi$', 'Amplitude $10$, period $\\pi$', 'Amplitude $\\frac{5}{2}$, period $\\pi$', 'Amplitude $5$, period $\\pi$'],
    correctIndex: 2,
    explanation: 'Since $\\sin x\\cos x = \\frac{1}{2}\\sin(2x)$, the function is $y = \\frac{5}{2}\\sin(2x)$, with amplitude $\\frac{5}{2}$ and period $\\frac{2\\pi}{2} = \\pi$. Reading the amplitude as $5$ skips the factor $\\frac{1}{2}$.',
    partNumber: 3,
    partTitle: 'Reading Double Angles Backwards (Recognition)',
  },

  // Part 4 — Verifying Identities with Double Angles
  {
    id: 'da-ent-4a',
    question: 'To verify $\\dfrac{\\cos(2\\theta)}{\\cos\\theta + \\sin\\theta} = \\cos\\theta - \\sin\\theta$, which plan works on the left side?',
    options: ['Use $\\cos^2\\theta - \\sin^2\\theta$, then factor and cancel', 'Use $2\\cos^2\\theta - 1$ and cancel a $\\cos\\theta$', 'Use $1 - 2\\sin^2\\theta$ and cancel a $\\sin\\theta$', 'Multiply both sides by $\\cos\\theta + \\sin\\theta$'],
    correctIndex: 0,
    explanation: 'Writing $\\cos(2\\theta) = (\\cos\\theta - \\sin\\theta)(\\cos\\theta + \\sin\\theta)$ lets the denominator cancel, leaving $\\cos\\theta - \\sin\\theta$. Multiplying both sides treats the identity as an equation to solve, which a verification may not assume.',
    partNumber: 4,
    partTitle: 'Verifying Identities with Double Angles',
  },
  {
    id: 'da-ent-4b',
    question: 'If $\\sin\\theta - \\cos\\theta = \\frac{1}{3}$, what is $\\sin(2\\theta)$?',
    options: ['$\\frac{10}{9}$', '$\\frac{8}{9}$', '$-\\frac{8}{9}$', '$\\frac{2\\sqrt{2}}{3}$'],
    correctIndex: 1,
    explanation: 'Square both sides: $\\sin^2\\theta - 2\\sin\\theta\\cos\\theta + \\cos^2\\theta = \\frac{1}{9}$, so $1 - \\sin(2\\theta) = \\frac{1}{9}$ and $\\sin(2\\theta) = \\frac{8}{9}$. Adding instead of subtracting the middle term gives $\\frac{10}{9}$.',
    partNumber: 4,
    partTitle: 'Verifying Identities with Double Angles',
  },

  // Part 5 — Squared Sines and Cosines as Sinusoids
  {
    id: 'da-ent-5a',
    question: 'Rewritten as a sinusoid, $y = 4\\sin^2(3x)$ has which midline, amplitude and period?',
    options: ['Midline $y = 0$, amplitude $4$, period $\\frac{2\\pi}{3}$', 'Midline $y = 2$, amplitude $2$, period $\\frac{2\\pi}{3}$', 'Midline $y = 2$, amplitude $2$, period $\\frac{\\pi}{3}$', 'Midline $y = 2$, amplitude $-2$, period $\\frac{\\pi}{3}$'],
    correctIndex: 2,
    explanation: '$4\\sin^2(3x) = 4 \\cdot \\frac{1 - \\cos(6x)}{2} = 2 - 2\\cos(6x)$: midline $y = 2$, amplitude $2$ (never negative), period $\\frac{2\\pi}{6} = \\frac{\\pi}{3}$. A period of $\\frac{2\\pi}{3}$ forgets that the inside angle doubles.',
    partNumber: 5,
    partTitle: 'Squared Sines and Cosines as Sinusoids',
  },
  {
    id: 'da-ent-5b',
    question: 'What is the range of $y = 3 - 6\\cos^2 x$?',
    options: ['$[-3, 9]$', '$[-6, 6]$', '$[-9, 3]$', '$[-3, 3]$'],
    correctIndex: 3,
    explanation: '$6\\cos^2 x = 3 + 3\\cos(2x)$, so $y = 3 - 3 - 3\\cos(2x) = -3\\cos(2x)$, a sinusoid with midline $0$ and amplitude $3$; the range is $[-3, 3]$. Treating $6$ as the amplitude about the midline $3$ gives $[-3, 9]$.',
    partNumber: 5,
    partTitle: 'Squared Sines and Cosines as Sinusoids',
  },

  // Part 6 — Solving Equations & Real Applications
  {
    id: 'da-ent-6a',
    question: 'Solve $\\cos(2x) = \\sin x$ for $0 \\le x < 2\\pi$.',
    options: ['$\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$', '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$', '$\\frac{\\pi}{3}, \\frac{5\\pi}{3}, \\pi$', '$\\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$'],
    correctIndex: 0,
    explanation: 'Use $1 - 2\\sin^2 x = \\sin x$, so $2\\sin^2 x + \\sin x - 1 = (2\\sin x - 1)(\\sin x + 1) = 0$. Then $\\sin x = \\frac{1}{2}$ gives $\\frac{\\pi}{6}, \\frac{5\\pi}{6}$ and $\\sin x = -1$ gives $\\frac{3\\pi}{2}$; a sign slip that gives $\\sin x = 1$ produces $\\frac{\\pi}{2}$ instead.',
    partNumber: 6,
    partTitle: 'Solving Equations & Real Applications',
  },
  {
    id: 'da-ent-6b',
    question: 'A projectile launched at angle $\\theta$ with fixed speed travels a horizontal distance $R = k\\sin(2\\theta)$, where $k$ is a constant. A launch angle of $\\frac{\\pi}{12}$ gives a range of $40$ m. What is the greatest range possible at this speed?',
    options: ['$120$ m', '$160$ m', '$80$ m', '$40\\sqrt{2}$ m'],
    correctIndex: 2,
    explanation: '$40 = k\\sin\\frac{\\pi}{6} = \\frac{k}{2}$, so $k = 80$; the range is largest when $\\sin(2\\theta) = 1$, at $\\theta = \\frac{\\pi}{4}$, giving $80$ m. Evaluating $\\sin\\frac{\\pi}{4}$ instead of $\\sin\\frac{\\pi}{2}$ gives $40\\sqrt{2}$, and $120$ assumes range is proportional to the angle.',
    partNumber: 6,
    partTitle: 'Solving Equations & Real Applications',
  },

  // Part 7 — Mixed Mastery & Exit Quiz
  {
    id: 'da-ent-7a',
    question: 'Angle $\\theta$ is in Quadrant II and $\\sin\\theta = \\frac{1}{3}$. Which statement about $2\\theta$ is true?',
    options: ['$\\sin(2\\theta) = \\frac{4\\sqrt{2}}{9}$ and $2\\theta$ is in Quadrant I', '$\\sin(2\\theta) = -\\frac{4\\sqrt{2}}{9}$ and $2\\theta$ is in Quadrant IV', '$\\sin(2\\theta) = -\\frac{4\\sqrt{2}}{9}$ and $2\\theta$ is in Quadrant II', '$\\sin(2\\theta) = \\frac{4\\sqrt{2}}{9}$ and $2\\theta$ is in Quadrant II'],
    correctIndex: 1,
    explanation: 'Here $\\cos\\theta = -\\frac{2\\sqrt{2}}{3}$, so $\\sin(2\\theta) = 2 \\cdot \\frac{1}{3} \\cdot \\left(-\\frac{2\\sqrt{2}}{3}\\right) = -\\frac{4\\sqrt{2}}{9}$ and $\\cos(2\\theta) = 1 - \\frac{2}{9} = \\frac{7}{9}$. Sine negative and cosine positive put $2\\theta$ in Quadrant IV, not in the quadrant of $\\theta$.',
    partNumber: 7,
    partTitle: 'Mixed Mastery & Exit Quiz',
  },
  {
    id: 'da-ent-7b',
    question: 'Solve $\\cos(2x) + 3\\cos x + 2 = 0$ for $0 \\le x < 2\\pi$.',
    options: ['$\\frac{2\\pi}{3}, \\pi, \\frac{4\\pi}{3}$', '$\\frac{2\\pi}{3}, \\frac{4\\pi}{3}$', '$\\frac{\\pi}{3}, \\frac{5\\pi}{3}$', '$\\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$'],
    correctIndex: 0,
    explanation: 'With $\\cos(2x) = 2\\cos^2 x - 1$ the equation becomes $2\\cos^2 x + 3\\cos x + 1 = (2\\cos x + 1)(\\cos x + 1) = 0$, so $\\cos x = -\\frac{1}{2}$ ($x = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$) or $\\cos x = -1$ ($x = \\pi$). Dropping the second factor loses $x = \\pi$.',
    partNumber: 7,
    partTitle: 'Mixed Mastery & Exit Quiz',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Where the Double-Angle Formulas Come From' },
    { partNumber: 2, partTitle: 'Evaluating Double Angles From a Given Ratio' },
    { partNumber: 3, partTitle: 'Reading Double Angles Backwards (Recognition)' },
    { partNumber: 4, partTitle: 'Verifying Identities with Double Angles' },
    { partNumber: 5, partTitle: 'Squared Sines and Cosines as Sinusoids' },
    { partNumber: 6, partTitle: 'Solving Equations & Real Applications' },
    { partNumber: 7, partTitle: 'Mixed Mastery & Exit Quiz' },
  ]
}
