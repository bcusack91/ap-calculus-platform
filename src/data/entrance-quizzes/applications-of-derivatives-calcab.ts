/**
 * Entrance Quiz — Applications of Derivatives (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Critical Points & Increasing/Decreasing
  {
    id: 'aod-ent-1a',
    question: 'Find all critical points of $f(x) = x^{2/3}(x - 5)$.',
    options: ['$x = 0$ and $x = 5$', '$x = 2$', '$x = 0$ and $x = 2$', '$x = 2$ and $x = 5$'],
    correctIndex: 2,
    explanation: '$f(x) = x^{5/3} - 5x^{2/3}$, so $f\'(x) = \\frac{5}{3}x^{2/3} - \\frac{10}{3}x^{-1/3} = \\frac{5(x - 2)}{3x^{1/3}}$. It is 0 at $x = 2$ and undefined at $x = 0$, where $f$ is defined, so both are critical points.',
    partNumber: 1,
    partTitle: 'Critical Points & Increasing/Decreasing',
  },
  {
    id: 'aod-ent-1b',
    question: 'On what interval is $f(x) = x\\ln x$ increasing?',
    options: ['$(1, \\infty)$', '$\\left(\\frac{1}{e}, \\infty\\right)$', '$(e, \\infty)$', '$\\left(0, \\frac{1}{e}\\right)$'],
    correctIndex: 1,
    explanation: '$f\'(x) = \\ln x + 1$, which is positive when $\\ln x > -1$, that is, $x > \\frac{1}{e}$. The interval $(1, \\infty)$ is where $f$ itself is positive.',
    partNumber: 1,
    partTitle: 'Critical Points & Increasing/Decreasing',
  },
  // Part 2 — Second Derivative & Concavity
  {
    id: 'aod-ent-2a',
    question: 'Where does $f(x) = xe^x$ have an inflection point?',
    options: ['$x = -1$ and $x = -2$', 'None, since $e^x$ is never 0', '$x = -2$', '$x = -2$ and $x = 0$'],
    correctIndex: 2,
    explanation: '$f\'(x) = (x + 1)e^x$ and $f\'\'(x) = (x + 2)e^x$. Since $e^x > 0$, $f\'\'$ changes sign only at $x = -2$. The point $x = -1$ is a critical point, not an inflection point.',
    partNumber: 2,
    partTitle: 'Second Derivative & Concavity',
  },
  {
    id: 'aod-ent-2b',
    question: 'A function has $f\'\'(x) = x^2(x + 3)(x - 1)$. Where does $f$ have inflection points?',
    options: ['$x = 0$', '$x = -3$, $x = 0$, and $x = 1$', '$x = 0$ and $x = 1$', '$x = -3$ and $x = 1$'],
    correctIndex: 3,
    explanation: '$f\'\'$ changes sign at $x = -3$ and $x = 1$. At $x = 0$ the factor $x^2$ is never negative, so $f\'\'$ does not change sign there even though it equals 0.',
    partNumber: 2,
    partTitle: 'Second Derivative & Concavity',
  },
  // Part 3 — Absolute (Global) Extrema
  {
    id: 'aod-ent-3a',
    question: 'What is the absolute maximum value of $f(x) = x^3 - 3x^2 + 1$ on $[-1, 4]$?',
    options: ['$17$', '$1$', '$-3$', '$-19$'],
    correctIndex: 0,
    explanation: 'Critical points: $f\'(x) = 3x(x - 2) = 0$ at $x = 0, 2$. Candidates: $f(-1) = -3$, $f(0) = 1$, $f(2) = -3$, $f(4) = 17$. The largest is 17 at the endpoint; 1 is only a local maximum.',
    partNumber: 3,
    partTitle: 'Absolute (Global) Extrema',
  },
  {
    id: 'aod-ent-3b',
    question: 'For which function and interval does the Extreme Value Theorem guarantee an absolute maximum?',
    options: ['$\\frac{1}{x}$ on $(0, 1]$', '$\\ln x$ on $[1, e]$', '$\\tan x$ on $\\left[0, \\frac{\\pi}{2}\\right)$', '$\\frac{1}{x - 2}$ on $[1, 3]$'],
    correctIndex: 1,
    explanation: 'The EVT needs a function continuous on a closed interval. $\\ln x$ is continuous on $[1, e]$. The others fail: two use intervals that are not closed, and $\\frac{1}{x - 2}$ is discontinuous at $x = 2$.',
    partNumber: 3,
    partTitle: 'Absolute (Global) Extrema',
  },
  // Part 4 — Curve Sketching
  {
    id: 'aod-ent-4a',
    question: 'A function has $f\'(x) = x(x - 3)^2(x + 2)$. Which describes its local extrema?',
    options: ['Min at $x = -2$, max at $x = 0$', 'Max at $x = -2$, min at $x = 0$ and $x = 3$', 'Max at $x = -2$, min at $x = 0$', 'Max at $x = 0$, min at $x = 3$'],
    correctIndex: 2,
    explanation: 'Sign of $f\'$: positive for $x < -2$, negative on $(-2, 0)$, positive on $(0, 3)$ and $(3, \\infty)$. So $f$ has a max at $-2$ and a min at 0; the squared factor means no sign change at 3.',
    partNumber: 4,
    partTitle: 'Curve Sketching',
  },
  {
    id: 'aod-ent-4b',
    question: 'The graph of $f\'$ crosses the $x$-axis at $x = 1$ and $x = 6$, has its only local minimum at $x = 3$ (where $f\'(3) < 0$), and is increasing for $x > 3$. Which describes $f$ on $(3, 6)$?',
    options: ['It is increasing and concave up', 'It is decreasing and concave down', 'It is increasing and concave down', 'It is decreasing and concave up'],
    correctIndex: 3,
    explanation: 'On $(3, 6)$, $f\'$ is still negative, so $f$ is decreasing, and $f\'$ is increasing, so $f$ is concave up.',
    partNumber: 4,
    partTitle: 'Curve Sketching',
  },
  // Part 5 — Mean Value Theorem
  {
    id: 'aod-ent-5a',
    question: 'Find the value of $c$ in $(0, 2)$ guaranteed by the Mean Value Theorem for $f(x) = x^3 - x$ on $[0, 2]$.',
    options: ['$\\frac{2}{\\sqrt{3}}$', '$1$', '$\\frac{1}{\\sqrt{3}}$', '$\\sqrt{\\frac{7}{3}}$'],
    correctIndex: 0,
    explanation: 'The average rate of change is $\\frac{f(2) - f(0)}{2} = \\frac{6}{2} = 3$. Solve $f\'(c) = 3c^2 - 1 = 3$: $c^2 = \\frac{4}{3}$, so $c = \\frac{2}{\\sqrt{3}}$. Forgetting to divide by the interval length gives $\\sqrt{7/3}$.',
    partNumber: 5,
    partTitle: 'Mean Value Theorem',
  },
  {
    id: 'aod-ent-5b',
    question: 'The function $f(x) = |x - 2|$ on $[0, 4]$ has $f(0) = f(4)$, yet no $c$ in $(0, 4)$ has $f\'(c) = 0$. Which hypothesis of Rolle\'s Theorem fails?',
    options: ['It is not continuous on the closed interval $[0, 4]$', 'It is not differentiable at $x = 2$', 'Its endpoint values $f(0)$ and $f(4)$ differ', 'It is undefined at the point where $x = 2$'],
    correctIndex: 1,
    explanation: 'The graph is continuous on $[0, 4]$ and $f(0) = f(4) = 2$, but it has a corner at $x = 2$, so it is not differentiable on all of $(0, 4)$. That is why the conclusion can fail.',
    partNumber: 5,
    partTitle: 'Mean Value Theorem',
  },
  // Part 6 — Optimization
  {
    id: 'aod-ent-6a',
    question: 'A rectangle has its base on the $x$-axis and its upper corners on the parabola $y = 27 - x^2$. What is its largest possible area?',
    options: ['$54$', '$216$', '$108$', '$81$'],
    correctIndex: 2,
    explanation: 'With upper corners at $(\\pm x, 27 - x^2)$, the area is $A = 2x(27 - x^2) = 54x - 2x^3$. Then $A\' = 54 - 6x^2 = 0$ at $x = 3$, giving $A = 6 \\cdot 18 = 108$. Using width $x$ instead of $2x$ gives 54.',
    partNumber: 6,
    partTitle: 'Optimization',
  },
  {
    id: 'aod-ent-6b',
    question: 'Positive numbers $x$ and $y$ satisfy $xy = 50$. What is the smallest possible value of $2x + y$?',
    options: ['$10\\sqrt{2}$', '$5$', '$25$', '$20$'],
    correctIndex: 3,
    explanation: 'Minimize $S(x) = 2x + \\frac{50}{x}$: $S\'(x) = 2 - \\frac{50}{x^2} = 0$ at $x = 5$, and $S\'\' > 0$, so this is the minimum. Then $y = 10$ and $S = 20$. The value $10\\sqrt{2}$ minimizes $x + y$ instead.',
    partNumber: 6,
    partTitle: 'Optimization',
  },
  // Part 7 — Comprehensive Assessment
  {
    id: 'aod-ent-7a',
    question: 'A differentiable function has $f(0) = 5$, $f(2) = 1$, $f(6) = 9$ and $f(8) = 3$. On which interval does the Mean Value Theorem guarantee some $c$ with $f\'(c) = -3$?',
    options: ['$(6, 8)$', '$(0, 2)$', '$(2, 6)$', '$(0, 8)$'],
    correctIndex: 0,
    explanation: 'The average rates are $-2$ on $[0, 2]$, $2$ on $[2, 6]$, $-3$ on $[6, 8]$, and $-\\frac{1}{4}$ on $[0, 8]$. Only $[6, 8]$ has average rate $-3$.',
    partNumber: 7,
    partTitle: 'Comprehensive Assessment',
  },
  {
    id: 'aod-ent-7b',
    question: 'What is the absolute maximum value of $g(x) = x - 2\\sin x$ on $[0, \\pi]$?',
    options: ['$0$', '$\\pi$', '$\\frac{\\pi}{3} - \\sqrt{3}$', '$\\frac{\\pi}{3} + \\sqrt{3}$'],
    correctIndex: 1,
    explanation: '$g\'(x) = 1 - 2\\cos x = 0$ at $x = \\frac{\\pi}{3}$. Candidates: $g(0) = 0$, $g\\left(\\frac{\\pi}{3}\\right) = \\frac{\\pi}{3} - \\sqrt{3} < 0$, $g(\\pi) = \\pi$. The maximum is $\\pi$, at the right endpoint.',
    partNumber: 7,
    partTitle: 'Comprehensive Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Critical Points & Increasing/Decreasing' },
    { partNumber: 2, partTitle: 'Second Derivative & Concavity' },
    { partNumber: 3, partTitle: 'Absolute (Global) Extrema' },
    { partNumber: 4, partTitle: 'Curve Sketching' },
    { partNumber: 5, partTitle: 'Mean Value Theorem' },
    { partNumber: 6, partTitle: 'Optimization' },
    { partNumber: 7, partTitle: 'Comprehensive Assessment' },
  ]
}
