/**
 * Entrance Quiz — Trigonometric Modeling — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Sine & Cosine Graphs
  {
    id: 'tm-ent-1a',
    question: 'On the interval $0 \\le x \\le 2\\pi$, at which value of $x$ does $y = \\cos x$ reach its minimum value?',
    options: ['$\\frac{\\pi}{2}$', '$\\frac{3\\pi}{2}$', '$2\\pi$', '$\\pi$'],
    correctIndex: 3,
    explanation: 'Cosine starts at its maximum $1$ at $x = 0$, falls through the midline at $\\frac{\\pi}{2}$, and reaches its minimum $-1$ at $x = \\pi$. The value $\\frac{3\\pi}{2}$ is where sine, not cosine, is smallest.',
    partNumber: 1,
    partTitle: 'Sine & Cosine Graphs',
  },
  {
    id: 'tm-ent-1b',
    question: 'Which statement correctly relates the graphs of $y = \\sin x$ and $y = \\cos x$?',
    options: ['The cosine graph is the sine graph shifted left $\\frac{\\pi}{2}$', 'The cosine graph is the sine graph shifted right $\\frac{\\pi}{2}$', 'The cosine graph is the sine graph shifted left $\\pi$', 'The cosine graph is the sine graph reflected over the $x$-axis'],
    correctIndex: 0,
    explanation: 'Sine reaches its maximum at $x = \\frac{\\pi}{2}$ and cosine reaches it at $x = 0$, so cosine is sine moved $\\frac{\\pi}{2}$ to the left: $\\cos x = \\sin\\left(x + \\frac{\\pi}{2}\\right)$.',
    partNumber: 1,
    partTitle: 'Sine & Cosine Graphs',
  },

  // Part 2 — Amplitude & Period
  {
    id: 'tm-ent-2a',
    question: 'The graph of $y = A\\sin(Bx)$, with $A > 0$ and $B > 0$, has a maximum value of $5$ and completes exactly $3$ full cycles on $0 \\le x \\le 2\\pi$. What are $A$ and $B$?',
    options: ['$A = 5,\\ B = \\frac{2\\pi}{3}$', '$A = 5,\\ B = 3$', '$A = 10,\\ B = 3$', '$A = 5,\\ B = \\frac{1}{3}$'],
    correctIndex: 1,
    explanation: 'The amplitude equals the maximum, $5$, since the midline is $y = 0$. Three cycles in $2\\pi$ means the period is $\\frac{2\\pi}{3} = \\frac{2\\pi}{B}$, so $B = 3$; $\\frac{2\\pi}{3}$ is the period, not $B$.',
    partNumber: 2,
    partTitle: 'Amplitude & Period',
  },
  {
    id: 'tm-ent-2b',
    question: 'Which function has amplitude $3$ and period $4\\pi$?',
    options: ['$y = 3\\sin(2x)$', '$y = \\frac{1}{2}\\sin(3x)$', '$y = 3\\sin(4\\pi x)$', '$y = 3\\sin\\left(\\frac{1}{2}x\\right)$'],
    correctIndex: 3,
    explanation: 'The period is $\\frac{2\\pi}{B} = 4\\pi$, so $B = \\frac{1}{2}$, and the amplitude is the coefficient $3$. Using $B = 2$ gives period $\\pi$, a horizontal compression instead of a stretch.',
    partNumber: 2,
    partTitle: 'Amplitude & Period',
  },

  // Part 3 — Phase Shift
  {
    id: 'tm-ent-3a',
    question: 'What is the phase shift of $y = 2\\sin(3x - \\pi) + 1$?',
    options: ['Right $\\pi$', 'Left $\\frac{\\pi}{3}$', 'Right $\\frac{\\pi}{3}$', 'Left $\\pi$'],
    correctIndex: 2,
    explanation: 'Factor out $B$: $3x - \\pi = 3\\left(x - \\frac{\\pi}{3}\\right)$, so the graph shifts right $\\frac{\\pi}{3}$. Reading the shift as $\\pi$ forgets to divide by $B = 3$.',
    partNumber: 3,
    partTitle: 'Phase Shift',
  },
  {
    id: 'tm-ent-3b',
    question: 'The graph of $y = \\cos x$ is shifted right $\\frac{\\pi}{3}$ units and up $2$ units. Which equation describes the new graph?',
    options: ['$y = \\cos\\left(x + \\frac{\\pi}{3}\\right) + 2$', '$y = \\cos\\left(x - \\frac{\\pi}{3}\\right) + 2$', '$y = \\cos(x - 2) + \\frac{\\pi}{3}$', '$y = \\cos\\left(x - \\frac{\\pi}{3}\\right) - 2$'],
    correctIndex: 1,
    explanation: 'A right shift of $\\frac{\\pi}{3}$ replaces $x$ with $x - \\frac{\\pi}{3}$ inside the function, and moving up $2$ adds $2$ outside. Writing $x + \\frac{\\pi}{3}$ would shift the graph left.',
    partNumber: 3,
    partTitle: 'Phase Shift',
  },

  // Part 4 — Modeling with Sinusoids
  {
    id: 'tm-ent-4a',
    question: 'The number of daylight hours in a city varies sinusoidally over the year, from a maximum of $14.8$ hours to a minimum of $9.2$ hours. What are the amplitude and the midline of a sinusoidal model?',
    options: ['Amplitude $5.6$ h, midline $12$ h', 'Amplitude $2.8$ h, midline $9.2$ h', 'Amplitude $12$ h, midline $2.8$ h', 'Amplitude $2.8$ h, midline $12$ h'],
    correctIndex: 3,
    explanation: 'Amplitude is half the spread, $\\frac{14.8 - 9.2}{2} = 2.8$ h, and the midline is the average, $\\frac{14.8 + 9.2}{2} = 12$ h. Using the full spread $5.6$ doubles the amplitude.',
    partNumber: 4,
    partTitle: 'Modeling with Sinusoids',
  },
  {
    id: 'tm-ent-4b',
    question: 'A weight on a spring moves between heights of $4$ cm and $16$ cm, completing one full oscillation every $0.5$ s. At $t = 0$ it is at its midline height and moving upward. Which model gives its height $h$, in cm, after $t$ seconds?',
    options: ['$h(t) = 6\\sin(\\pi t) + 10$', '$h(t) = 6\\cos(4\\pi t) + 10$', '$h(t) = 6\\sin(4\\pi t) + 10$', '$h(t) = 12\\sin(4\\pi t) + 10$'],
    correctIndex: 2,
    explanation: 'Amplitude $\\frac{16-4}{2} = 6$, midline $10$, and $B = \\frac{2\\pi}{0.5} = 4\\pi$. Starting at the midline going up calls for positive sine; cosine would start at the maximum.',
    partNumber: 4,
    partTitle: 'Modeling with Sinusoids',
  },

  // Part 5 — Inverse Trig Functions
  {
    id: 'tm-ent-5a',
    question: 'What is the exact value of $\\arccos\\left(-\\frac{1}{2}\\right)$, in radians?',
    options: ['$\\frac{4\\pi}{3}$', '$-\\frac{\\pi}{3}$', '$\\frac{2\\pi}{3}$', '$\\frac{5\\pi}{6}$'],
    correctIndex: 2,
    explanation: 'Arccosine returns an angle in $[0, \\pi]$, and the angle there with cosine $-\\frac{1}{2}$ is $\\frac{2\\pi}{3}$. The angle $\\frac{4\\pi}{3}$ has the same cosine but lies outside the range, and $-\\frac{\\pi}{3}$ has cosine $+\\frac{1}{2}$.',
    partNumber: 5,
    partTitle: 'Inverse Trig Functions',
  },
  {
    id: 'tm-ent-5b',
    question: 'Which expression is equal to $-\\frac{\\pi}{4}$?',
    options: ['$\\arccos\\left(-\\frac{\\sqrt{2}}{2}\\right)$', '$\\arctan\\left(-\\frac{\\sqrt{3}}{3}\\right)$', '$\\arccos\\left(\\frac{\\sqrt{2}}{2}\\right)$', '$\\arctan(-1)$'],
    correctIndex: 3,
    explanation: 'Arctangent returns angles in $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, and $\\tan\\left(-\\frac{\\pi}{4}\\right) = -1$. Arccosine never returns a negative angle: $\\arccos\\left(-\\frac{\\sqrt{2}}{2}\\right) = \\frac{3\\pi}{4}$.',
    partNumber: 5,
    partTitle: 'Inverse Trig Functions',
  },

  // Part 6 — Problem-Solving Workshop
  {
    id: 'tm-ent-6a',
    question: 'A Ferris wheel has diameter $40$ m, its lowest point is $2$ m above the ground, and it makes one revolution every $10$ minutes. A rider boards at the lowest point at $t = 0$. How high is the rider at $t = \\frac{10}{3}$ minutes?',
    options: ['$12$ m', '$42$ m', '$22$ m', '$32$ m'],
    correctIndex: 3,
    explanation: 'With center $22$ m and radius $20$ m, $h(t) = 22 - 20\\cos\\left(\\frac{2\\pi}{10}t\\right)$. At $t = \\frac{10}{3}$ the angle is $\\frac{2\\pi}{3}$ and $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$, so $h = 22 + 10 = 32$ m.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'tm-ent-6b',
    question: 'The water depth at a dock is $D(t) = 7 + 3\\sin\\left(\\frac{\\pi}{6}(t - 2)\\right)$ feet, $t$ hours after midnight. When does the depth first reach its maximum after midnight, and what is that maximum?',
    options: ['$t = 5$, depth $10$ ft', '$t = 3$, depth $10$ ft', '$t = 1$, depth $10$ ft', '$t = 5$, depth $13$ ft'],
    correctIndex: 0,
    explanation: 'Sine is largest when its input is $\\frac{\\pi}{2}$: $\\frac{\\pi}{6}(t - 2) = \\frac{\\pi}{2}$ gives $t = 5$, where $D = 7 + 3 = 10$ ft. Ignoring the shift of $2$ gives $t = 3$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7 — Review & Applications
  {
    id: 'tm-ent-7a',
    question: 'For $y = -4\\sin\\left(\\frac{\\pi}{3}(x + 1)\\right) + 2$, which list gives the amplitude, period, phase shift and midline, in that order?',
    options: ['$-4$, $6$, left $1$, $y = 2$', '$4$, $6$, left $1$, $y = 2$', '$4$, $6$, right $1$, $y = 2$', '$4$, $6\\pi$, left $1$, $y = 2$'],
    correctIndex: 1,
    explanation: 'Amplitude is $|-4| = 4$, the period is $\\frac{2\\pi}{\\pi/3} = 6$, $(x + 1)$ means a shift left $1$, and the midline is $y = 2$. Amplitude is a distance, so it is never negative.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'tm-ent-7b',
    question: 'What is the minimum value of $f(x) = 5 - 3\\cos(4x)$, and what is the smallest positive $x$ at which it occurs?',
    options: ['Minimum $2$ at $x = 2\\pi$', 'Minimum $2$ at $x = \\frac{\\pi}{2}$', 'Minimum $-3$ at $x = 0$', 'Minimum $2$ at $x = \\pi$'],
    correctIndex: 1,
    explanation: '$f$ is smallest when $\\cos(4x) = 1$, giving $5 - 3 = 2$; the smallest positive solution of $4x = 2\\pi$ is $x = \\frac{\\pi}{2}$. Answering $2\\pi$ ignores the factor $4$, which shrinks the period to $\\frac{\\pi}{2}$.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Sine & Cosine Graphs' },
    { partNumber: 2, partTitle: 'Amplitude & Period' },
    { partNumber: 3, partTitle: 'Phase Shift' },
    { partNumber: 4, partTitle: 'Modeling with Sinusoids' },
    { partNumber: 5, partTitle: 'Inverse Trig Functions' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
