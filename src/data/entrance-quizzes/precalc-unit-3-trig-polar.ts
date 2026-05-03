/**
 * Entrance Quiz — AP Precalculus Unit 3: Trigonometric & Polar Functions
 * 14 questions · 7 parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Unit Circle & Reference Angles
  { id: 'pcu3-1a', question: 'The reference angle for $\\theta = 5\\pi/4$ is:', options: ['$\\pi/4$', '$\\pi/3$', '$\\pi/2$', '$3\\pi/4$'], correctIndex: 0, explanation: '$5\\pi/4$ is in Q3; reference angle = $5\\pi/4 - \\pi = \\pi/4$.', partNumber: 1, partTitle: 'Unit Circle & Reference Angles' },
  { id: 'pcu3-1b', question: '$\\sin(7\\pi/6)$ equals:', options: ['$-1/2$', '$1/2$', '$-\\sqrt{3}/2$', '$\\sqrt{3}/2$'], correctIndex: 0, explanation: '$7\\pi/6$ is in Q3; sine is negative; reference angle $\\pi/6$ gives $1/2$.', partNumber: 1, partTitle: 'Unit Circle & Reference Angles' },

  // Part 2: Sinusoidal Functions — Period, Amplitude, Phase
  { id: 'pcu3-2a', question: 'The period of $y = \\cos(3x)$ is:', options: ['$2\\pi$', '$2\\pi/3$', '$3\\pi$', '$\\pi/3$'], correctIndex: 1, explanation: 'Period = $2\\pi/|B| = 2\\pi/3$.', partNumber: 2, partTitle: 'Sinusoidal Functions — Period, Amplitude, Phase' },
  { id: 'pcu3-2b', question: 'For $y = -3\\sin(x) + 2$, the amplitude and midline are:', options: ['Amplitude $-3$, midline $y=2$', 'Amplitude 3, midline $y=2$', 'Amplitude 3, midline $y=-2$', 'Amplitude 2, midline $y=3$'], correctIndex: 1, explanation: 'Amplitude $= |A| = 3$, midline $y = D = 2$.', partNumber: 2, partTitle: 'Sinusoidal Functions — Period, Amplitude, Phase' },

  // Part 3: Trig Identities
  { id: 'pcu3-3a', question: 'Which is a Pythagorean identity?', options: ['$\\sin^2 x - \\cos^2 x = 1$', '$\\sin^2 x + \\cos^2 x = 1$', '$\\tan^2 x + \\cot^2 x = 1$', '$\\sec^2 x - \\tan^2 x = 0$'], correctIndex: 1, explanation: 'Standard Pythagorean identity from the unit circle.', partNumber: 3, partTitle: 'Trig Identities' },
  { id: 'pcu3-3b', question: '$\\cos(2x)$ does NOT equal:', options: ['$\\cos^2 x - \\sin^2 x$', '$2\\cos^2 x - 1$', '$1 - 2\\sin^2 x$', '$2\\sin x\\cos x$'], correctIndex: 3, explanation: '$2\\sin x\\cos x = \\sin(2x)$, not $\\cos(2x)$.', partNumber: 3, partTitle: 'Trig Identities' },

  // Part 4: Inverse Trig
  { id: 'pcu3-4a', question: 'Range of $y = \\arcsin(x)$:', options: ['$[0,\\pi]$', '$[-\\pi/2, \\pi/2]$', '$(-\\infty, \\infty)$', '$(-\\pi, \\pi)$'], correctIndex: 1, explanation: 'Standard restricted range for arcsine.', partNumber: 4, partTitle: 'Inverse Trig' },
  { id: 'pcu3-4b', question: '$\\arctan(\\sqrt{3})$ equals:', options: ['$\\pi/6$', '$\\pi/4$', '$\\pi/3$', '$\\pi/2$'], correctIndex: 2, explanation: '$\\tan(\\pi/3) = \\sqrt{3}$.', partNumber: 4, partTitle: 'Inverse Trig' },

  // Part 5: Trig Equations
  { id: 'pcu3-5a', question: 'Solve $\\sin x = 1/2$ on $[0, 2\\pi)$.', options: ['$\\pi/6$ only', '$\\pi/6, 5\\pi/6$', '$\\pi/3, 2\\pi/3$', '$\\pi/2, 3\\pi/2$'], correctIndex: 1, explanation: 'Sine is positive in Q1 and Q2; reference angle $\\pi/6$.', partNumber: 5, partTitle: 'Trig Equations' },
  { id: 'pcu3-5b', question: 'How many solutions does $\\cos x = 0$ have on $[0, 2\\pi)$?', options: ['1', '2', '3', '4'], correctIndex: 1, explanation: '$\\cos x = 0$ at $x = \\pi/2, 3\\pi/2$.', partNumber: 5, partTitle: 'Trig Equations' },

  // Part 6: Law of Sines/Cosines
  { id: 'pcu3-6a', question: 'In $\\triangle ABC$ with $A = 30°, B = 70°, a = 5$, find $b$ via Law of Sines.', options: ['$b \\approx 9.4$', '$b \\approx 7.2$', '$b \\approx 6.0$', '$b \\approx 4.7$'], correctIndex: 0, explanation: '$b = 5\\sin 70°/\\sin 30° \\approx 5(0.940)/0.5 \\approx 9.4$.', partNumber: 6, partTitle: 'Law of Sines/Cosines' },
  { id: 'pcu3-6b', question: 'When given SAS (two sides + included angle), use:', options: ['Law of Sines', 'Law of Cosines', 'Pythagorean theorem only', 'Either, equally well'], correctIndex: 1, explanation: 'Law of Cosines is required for SAS to find the missing side.', partNumber: 6, partTitle: 'Law of Sines/Cosines' },

  // Part 7: Polar & Conics
  { id: 'pcu3-7a', question: 'The polar point $(2, \\pi/2)$ corresponds to which rectangular point?', options: ['$(2, 0)$', '$(0, 2)$', '$(-2, 0)$', '$(\\sqrt{2}, \\sqrt{2})$'], correctIndex: 1, explanation: '$x = 2\\cos(\\pi/2)=0$, $y = 2\\sin(\\pi/2)=2$.', partNumber: 7, partTitle: 'Polar & Conics' },
  { id: 'pcu3-7b', question: 'The equation $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$ describes a:', options: ['Circle', 'Ellipse', 'Hyperbola', 'Parabola'], correctIndex: 1, explanation: 'Sum of squared terms with positive denominators ⇒ ellipse.', partNumber: 7, partTitle: 'Polar & Conics' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Unit Circle & Reference Angles' },
    { partNumber: 2, partTitle: 'Sinusoidal Functions — Period, Amplitude, Phase' },
    { partNumber: 3, partTitle: 'Trig Identities' },
    { partNumber: 4, partTitle: 'Inverse Trig' },
    { partNumber: 5, partTitle: 'Trig Equations' },
    { partNumber: 6, partTitle: 'Law of Sines/Cosines' },
    { partNumber: 7, partTitle: 'Polar & Conics' },
  ]
}
