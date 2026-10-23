/**
 * Entrance Quiz — Sinusoidal Functions and Modeling (AP Precalculus, CED 3.4–3.8) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 * Replaces the trigonometric-modeling-apprecalc quiz (Oct 2026); the sound sinusoid items were kept and re-mapped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Sine and Cosine Graphs
  {
    id: 'gtf-ent-1a',
    question: 'On the interval $0 \\le x \\le 2\\pi$, at which value of $x$ does $y = \\cos x$ reach its minimum value?',
    options: ['$\\frac{\\pi}{2}$', '$\\frac{3\\pi}{2}$', '$2\\pi$', '$\\pi$'],
    correctIndex: 3,
    explanation: 'Cosine starts at its maximum $1$ at $x = 0$, falls through the midline at $\\frac{\\pi}{2}$, and reaches its minimum $-1$ at $x = \\pi$. The value $\\frac{3\\pi}{2}$ is where sine, not cosine, is smallest.',
    partNumber: 1,
    partTitle: 'Sine and Cosine Graphs',
  },
  {
    id: 'gtf-ent-1b',
    question: 'On which interval is $y = \\sin x$ both increasing and concave down?',
    options: ['$\\left(\\frac{\\pi}{2}, \\pi\\right)$', '$\\left(\\pi, \\frac{3\\pi}{2}\\right)$', '$\\left(0, \\frac{\\pi}{2}\\right)$', '$\\left(\\frac{3\\pi}{2}, 2\\pi\\right)$'],
    correctIndex: 2,
    explanation: 'Sine rises from $0$ to its maximum on $\\left(0, \\frac{\\pi}{2}\\right)$, and it is concave down wherever it is above its midline, on $(0, \\pi)$. Both hold on $\\left(0, \\frac{\\pi}{2}\\right)$. On $\\left(\\frac{3\\pi}{2}, 2\\pi\\right)$ it is increasing but concave up.',
    partNumber: 1,
    partTitle: 'Sine and Cosine Graphs',
  },

  // Part 2 — Amplitude, Midline, Period and Frequency
  {
    id: 'gtf-ent-2a',
    question: 'The graph of $y = A\\sin(Bx)$, with $A > 0$ and $B > 0$, has a maximum value of $5$ and completes exactly $3$ full cycles on $0 \\le x \\le 2\\pi$. What are $A$ and $B$?',
    options: ['$A = 5,\\ B = \\frac{2\\pi}{3}$', '$A = 5,\\ B = 3$', '$A = 10,\\ B = 3$', '$A = 5,\\ B = \\frac{1}{3}$'],
    correctIndex: 1,
    explanation: 'The amplitude equals the maximum, $5$, since the midline is $y = 0$. Three cycles in $2\\pi$ means the period is $\\frac{2\\pi}{3} = \\frac{2\\pi}{B}$, so $B = 3$; $\\frac{2\\pi}{3}$ is the period, not $B$.',
    partNumber: 2,
    partTitle: 'Amplitude, Midline, Period and Frequency',
  },
  {
    id: 'gtf-ent-2b',
    question: 'A sinusoidal graph has a maximum at $\\left(\\frac{\\pi}{4}, 7\\right)$ and its next minimum at $\\left(\\frac{3\\pi}{4}, -1\\right)$. What are its period, amplitude and midline?',
    options: ['Period $\\frac{\\pi}{2}$, amplitude $4$, midline $y = 3$', 'Period $\\pi$, amplitude $8$, midline $y = 3$', 'Period $\\pi$, amplitude $4$, midline $y = 3$', 'Period $\\pi$, amplitude $4$, midline $y = -1$'],
    correctIndex: 2,
    explanation: 'Maximum to the next minimum is half a period, $\\frac{3\\pi}{4} - \\frac{\\pi}{4} = \\frac{\\pi}{2}$, so the period is $\\pi$. The amplitude is $\\frac{7 - (-1)}{2} = 4$ and the midline is $\\frac{7 + (-1)}{2} = 3$. A period of $\\frac{\\pi}{2}$ forgets that this is half a cycle, and $y = -1$ is the minimum, not the midline.',
    partNumber: 2,
    partTitle: 'Amplitude, Midline, Period and Frequency',
  },

  // Part 3 — Transformations and Phase Shift
  {
    id: 'gtf-ent-3a',
    question: 'What is the phase shift of $y = 2\\sin(3x - \\pi) + 1$?',
    options: ['Right $\\pi$', 'Left $\\frac{\\pi}{3}$', 'Right $\\frac{\\pi}{3}$', 'Left $\\pi$'],
    correctIndex: 2,
    explanation: 'Factor out $B$: $3x - \\pi = 3\\left(x - \\frac{\\pi}{3}\\right)$, so the graph shifts right $\\frac{\\pi}{3}$. Reading the shift as $\\pi$ forgets to divide by $B = 3$.',
    partNumber: 3,
    partTitle: 'Transformations and Phase Shift',
  },
  {
    id: 'gtf-ent-3b',
    question: 'The graph of $y = \\cos x$ is shifted right $\\frac{\\pi}{3}$ units and up $2$ units. Which equation describes the new graph?',
    options: ['$y = \\cos\\left(x + \\frac{\\pi}{3}\\right) + 2$', '$y = \\cos\\left(x - \\frac{\\pi}{3}\\right) + 2$', '$y = \\cos(x - 2) + \\frac{\\pi}{3}$', '$y = \\cos\\left(x - \\frac{\\pi}{3}\\right) - 2$'],
    correctIndex: 1,
    explanation: 'A right shift of $\\frac{\\pi}{3}$ replaces $x$ with $x - \\frac{\\pi}{3}$ inside the function, and moving up $2$ adds $2$ outside. Writing $x + \\frac{\\pi}{3}$ would shift the graph left.',
    partNumber: 3,
    partTitle: 'Transformations and Phase Shift',
  },

  // Part 4 — Building a Model From a Graph, a Table or a Context
  {
    id: 'gtf-ent-4a',
    question: 'The number of daylight hours in a city varies sinusoidally over the year, from a maximum of $14.8$ hours to a minimum of $9.2$ hours. What are the amplitude and the midline of a sinusoidal model?',
    options: ['Amplitude $5.6$ h, midline $12$ h', 'Amplitude $2.8$ h, midline $9.2$ h', 'Amplitude $12$ h, midline $2.8$ h', 'Amplitude $2.8$ h, midline $12$ h'],
    correctIndex: 3,
    explanation: 'Amplitude is half the spread, $\\frac{14.8 - 9.2}{2} = 2.8$ h, and the midline is the average, $\\frac{14.8 + 9.2}{2} = 12$ h. Using the full spread $5.6$ doubles the amplitude.',
    partNumber: 4,
    partTitle: 'Building a Model From a Graph, a Table or a Context',
  },
  {
    id: 'gtf-ent-4b',
    question: 'A weight on a spring moves between heights of $4$ cm and $16$ cm, completing one full oscillation every $0.5$ s. At $t = 0$ it is at its midline height and moving upward. Which model gives its height $h$, in cm, after $t$ seconds?',
    options: ['$h(t) = 6\\sin(\\pi t) + 10$', '$h(t) = 6\\cos(4\\pi t) + 10$', '$h(t) = 6\\sin(4\\pi t) + 10$', '$h(t) = 12\\sin(4\\pi t) + 10$'],
    correctIndex: 2,
    explanation: 'Amplitude $\\frac{16-4}{2} = 6$, midline $10$, and $B = \\frac{2\\pi}{0.5} = 4\\pi$. Starting at the midline going up calls for positive sine; cosine would start at the maximum.',
    partNumber: 4,
    partTitle: 'Building a Model From a Graph, a Table or a Context',
  },

  // Part 5 — Using the Model: Predict, Interpret and Solve
  {
    id: 'gtf-ent-5a',
    question: 'The water depth at a dock is $D(t) = 7 + 3\\sin\\left(\\frac{\\pi}{6}(t - 2)\\right)$ feet, $t$ hours after midnight. When does the depth first reach its maximum after midnight, and what is that maximum?',
    options: ['$t = 5$, depth $10$ ft', '$t = 3$, depth $10$ ft', '$t = 1$, depth $10$ ft', '$t = 5$, depth $13$ ft'],
    correctIndex: 0,
    explanation: 'Sine is largest when its input is $\\frac{\\pi}{2}$: $\\frac{\\pi}{6}(t - 2) = \\frac{\\pi}{2}$ gives $t = 5$, where $D = 7 + 3 = 10$ ft. Ignoring the shift of $2$ gives $t = 3$.',
    partNumber: 5,
    partTitle: 'Using the Model: Predict, Interpret and Solve',
  },
  {
    id: 'gtf-ent-5b',
    question: 'A rider\'s height on a Ferris wheel is $h(t) = 22 - 20\\cos\\left(\\frac{\\pi}{10}t\\right)$ meters after $t$ seconds. What is the average rate of change of $h$ on the interval $[0, 5]$?',
    options: ['$4$ m/s', '$2$ m/s', '$8$ m/s', '$0$ m/s'],
    correctIndex: 0,
    explanation: '$h(0) = 22 - 20 = 2$ and $h(5) = 22 - 20\\cos\\frac{\\pi}{2} = 22$, so the average rate of change is $\\frac{22 - 2}{5} = 4$ m/s. The value $8$ divides by $2.5$ instead of $5$, and $0$ would be the average over a full $20$-second period.',
    partNumber: 5,
    partTitle: 'Using the Model: Predict, Interpret and Solve',
  },

  // Part 6 — The Tangent Function
  {
    id: 'gtf-ent-6a',
    question: 'What is the period of $y = \\tan(4x)$, and where is its first vertical asymptote for $x > 0$?',
    options: ['Period $\\frac{\\pi}{4}$; asymptote $x = \\frac{\\pi}{8}$', 'Period $\\frac{\\pi}{2}$; asymptote $x = \\frac{\\pi}{4}$', 'Period $\\frac{\\pi}{4}$; asymptote $x = \\frac{\\pi}{4}$', 'Period $4\\pi$; asymptote $x = 2\\pi$'],
    correctIndex: 0,
    explanation: 'Tangent has period $\\frac{\\pi}{|b|} = \\frac{\\pi}{4}$, and its asymptotes are where $4x = \\frac{\\pi}{2} + n\\pi$, the first positive one at $x = \\frac{\\pi}{8}$. A period of $\\frac{\\pi}{2}$ uses the sine formula $\\frac{2\\pi}{|b|}$.',
    partNumber: 6,
    partTitle: 'The Tangent Function',
  },
  {
    id: 'gtf-ent-6b',
    question: 'Which statement about $y = \\tan x$ is true?',
    options: ['It is increasing on every interval between consecutive asymptotes', 'It has a maximum value of $1$ at $x = \\frac{\\pi}{4}$', 'Its period is $2\\pi$, the same as sine', 'It is undefined at $x = \\pi$'],
    correctIndex: 0,
    explanation: 'Tangent is the slope of the terminal ray, which rises through every real number as the ray turns from pointing down to pointing up, so each branch is increasing and unbounded (no maximum). The period is $\\pi$, and $\\tan\\pi = 0$; the function is undefined where $\\cos x = 0$, at $x = \\frac{\\pi}{2} + n\\pi$.',
    partNumber: 6,
    partTitle: 'The Tangent Function',
  },

  // Part 7 — FRQ Q3 Workshop and Review
  {
    id: 'gtf-ent-7a',
    question: 'A sinusoidal function $g$ has a maximum at $(2, 9)$ and its next minimum at $(6, 1)$. For which $t$ in $[2, 10]$ is $g(t) > 5$?',
    options: ['$2 \\le t < 4$ and $8 < t \\le 10$', '$4 < t < 8$', '$2 \\le t < 6$', '$6 < t \\le 10$'],
    correctIndex: 0,
    explanation: 'The midline is $\\frac{9 + 1}{2} = 5$ and the period is $2(6 - 2) = 8$, so $g$ crosses the midline a quarter period from each extreme, at $t = 4$ and $t = 8$. It is above $5$ near its maxima at $t = 2$ and $t = 10$: on $[2, 4)$ and $(8, 10]$. The interval $4 < t < 8$ is where $g$ is below the midline.',
    partNumber: 7,
    partTitle: 'FRQ Q3 Workshop and Review',
  },
  {
    id: 'gtf-ent-7b',
    question: 'For $y = -4\\sin\\left(\\frac{\\pi}{3}(x + 1)\\right) + 2$, which list gives the amplitude, period, phase shift and midline, in that order?',
    options: ['$-4$, $6$, left $1$, $y = 2$', '$4$, $6$, left $1$, $y = 2$', '$4$, $6$, right $1$, $y = 2$', '$4$, $6\\pi$, left $1$, $y = 2$'],
    correctIndex: 1,
    explanation: 'Amplitude is $|-4| = 4$, the period is $\\frac{2\\pi}{\\pi/3} = 6$, $(x + 1)$ means a shift left $1$, and the midline is $y = 2$. Amplitude is a distance, so it is never negative.',
    partNumber: 7,
    partTitle: 'FRQ Q3 Workshop and Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Sine and Cosine Graphs' },
    { partNumber: 2, partTitle: 'Amplitude, Midline, Period and Frequency' },
    { partNumber: 3, partTitle: 'Transformations and Phase Shift' },
    { partNumber: 4, partTitle: 'Building a Model From a Graph, a Table or a Context' },
    { partNumber: 5, partTitle: 'Using the Model: Predict, Interpret and Solve' },
    { partNumber: 6, partTitle: 'The Tangent Function' },
    { partNumber: 7, partTitle: 'FRQ Q3 Workshop and Review' },
  ]
}
