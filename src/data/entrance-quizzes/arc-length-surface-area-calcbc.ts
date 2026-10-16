/**
 * Entrance Quiz — Arc Length — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 * Surface area of revolution is not on the BC exam and is not tested here.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Arc Length of Cartesian Curves
  {
    id: 'al-ent-1a',
    question: 'What is the arc length of $y = \\frac{x^3}{6} + \\frac{1}{2x}$ from $x = 1$ to $x = 2$?',
    options: ['$\\frac{13}{12}$', '$\\frac{11}{12}$', '$\\frac{17}{12}$', '$\\frac{7}{6}$'],
    correctIndex: 2,
    explanation: 'Here $y\' = \\frac{x^2}{2} - \\frac{1}{2x^2}$, so $1 + (y\')^2 = \\left(\\frac{x^2}{2} + \\frac{1}{2x^2}\\right)^2$ and $L = \\left[\\frac{x^3}{6} - \\frac{1}{2x}\\right]_1^2 = \\frac{13}{12} + \\frac{1}{3} = \\frac{17}{12}$. Using only the upper limit gives $\\frac{13}{12}$, and $\\frac{11}{12}$ is the change in $y$.',
    partNumber: 1,
    partTitle: 'Arc Length of Cartesian Curves',
  },
  {
    id: 'al-ent-1b',
    question: 'Which integral gives the arc length of $y = e^{2x}$ from $x = 0$ to $x = 1$?',
    options: [
      '$\\int_0^1 \\sqrt{1+4e^{4x}}\\,dx$',
      '$\\int_0^1 \\sqrt{1+e^{4x}}\\,dx$',
      '$\\int_0^1 \\sqrt{1+e^{2x}}\\,dx$',
      '$\\int_0^1 (1+4e^{4x})\\,dx$',
    ],
    correctIndex: 0,
    explanation: 'With $y\' = 2e^{2x}$, $(y\')^2 = 4e^{4x}$, so $L = \\int_0^1 \\sqrt{1 + 4e^{4x}}\\,dx$. Dropping the chain factor $2$ gives $e^{4x}$, squaring $y$ instead of $y\'$ or not squaring at all gives the other root, and the last option leaves out the square root.',
    partNumber: 1,
    partTitle: 'Arc Length of Cartesian Curves',
  },

  // Part 2 — Arc Length of Parametric Curves
  {
    id: 'al-ent-2a',
    question: 'The curve $x = t^3$, $y = 2t + 1$ runs from the point $(1, 3)$ to the point $(8, 5)$. Which integral gives its length?',
    options: [
      '$\\int_1^8 \\sqrt{9t^4+4}\\,dt$',
      '$\\int_1^2 \\sqrt{9t^4+4}\\,dt$',
      '$\\int_3^5 \\sqrt{9t^4+4}\\,dt$',
      '$\\int_1^2 \\sqrt{3t^2+2}\\,dt$',
    ],
    correctIndex: 1,
    explanation: 'The point $(1, 3)$ is $t = 1$ and $(8, 5)$ is $t = 2$, and the integrand is $\\sqrt{(3t^2)^2 + 2^2} = \\sqrt{9t^4 + 4}$. Using $x$- or $y$-values as limits mixes variables, and the last option forgets to square the rates.',
    partNumber: 2,
    partTitle: 'Arc Length of Parametric Curves',
  },
  {
    id: 'al-ent-2b',
    question: 'What is the length of the curve $x = 2t^2$, $y = t^2$ for $0 \\le t \\le 2$?',
    options: ['$12$', '$80$', '$20$', '$4\\sqrt{5}$'],
    correctIndex: 3,
    explanation: 'The speed is $\\sqrt{(4t)^2 + (2t)^2} = 2\\sqrt{5}\\,t$, so $L = \\int_0^2 2\\sqrt{5}\\,t\\,dt = 4\\sqrt{5}$; the path is a straight segment from $(0, 0)$ to $(8, 4)$, which checks. Adding the coordinate changes gives $12$, and $80$ forgets the square root.',
    partNumber: 2,
    partTitle: 'Arc Length of Parametric Curves',
  },

  // Part 3 — Speed, Distance Traveled, and Displacement
  {
    id: 'al-ent-3a',
    question: 'A particle moves with $x = 3\\cos(4t)$, $y = 3\\sin(4t)$ for $0 \\le t \\le \\pi$. What distance does it travel?',
    options: ['$12\\pi$', '$6\\pi$', '$0$', '$4\\pi$'],
    correctIndex: 0,
    explanation: 'The speed is $\\sqrt{144\\sin^2 4t + 144\\cos^2 4t} = 12$, so the distance is $12\\pi$: two laps of a circle of length $6\\pi$. The displacement is $0$ because it ends where it started.',
    partNumber: 3,
    partTitle: 'Speed, Distance Traveled, and Displacement',
  },
  {
    id: 'al-ent-3b',
    question: 'A particle has $x\'(t) = \\sqrt{t}\\cos t$ and $x(1) = 5$. Which expression gives its $x$-coordinate at $t = 4$?',
    options: [
      '$\\int_1^4 \\sqrt{t}\\cos t\\,dt$',
      '$5+\\int_1^4 |\\sqrt{t}\\cos t|\\,dt$',
      '$5+\\int_1^4 \\sqrt{t}\\cos t\\,dt$',
      '$5+\\int_0^4 \\sqrt{t}\\cos t\\,dt$',
    ],
    correctIndex: 2,
    explanation: 'Position is the starting value plus the net change: $x(4) = x(1) + \\int_1^4 x\'(t)\\,dt$. Leaving out $5$ gives only the displacement, the absolute value gives horizontal distance traveled, and the integral must start at $t = 1$, where the position is known.',
    partNumber: 3,
    partTitle: 'Speed, Distance Traveled, and Displacement',
  },

  // Part 4 — Arc Length in y and Arc Length Functions
  {
    id: 'al-ent-4a',
    question: 'What is the length of the curve $x = \\frac{2}{3}(y + 3)^{3/2}$ for $0 \\le y \\le 5$?',
    options: ['$18$', '$\\frac{38}{3}$', '$\\frac{19}{3}$', '$\\frac{76}{3}$'],
    correctIndex: 1,
    explanation: 'Here $\\frac{dx}{dy} = (y + 3)^{1/2}$, so $1 + \\left(\\frac{dx}{dy}\\right)^2 = y + 4$ and $L = \\int_0^5 \\sqrt{y + 4}\\,dy = \\frac{2}{3}(27 - 8) = \\frac{38}{3}$. Dropping the lower limit gives $18$.',
    partNumber: 4,
    partTitle: 'Arc Length in y and Arc Length Functions',
  },
  {
    id: 'al-ent-4b',
    question: 'The function $s(x) = \\int_1^x \\sqrt{1 + 16t^6}\\,dt$ gives the arc length, from $x = 1$, of which curve?',
    options: ['$y = 4x^3$', '$y = \\frac{16x^7}{7}$', '$y = \\frac{x^4}{4}$', '$y = x^4$'],
    correctIndex: 3,
    explanation: 'Matching $\\sqrt{1 + (f\'(t))^2}$ gives $f\'(t)^2 = 16t^6$, so $f\'(t) = 4t^3$ and $f(x) = x^4$ (up to sign and a vertical shift). The curve $4x^3$ is $f\'$ itself, and $\\frac{x^4}{4}$ has derivative $x^3$, which gives $1 + t^6$.',
    partNumber: 4,
    partTitle: 'Arc Length in y and Arc Length Functions',
  },

  // Part 5 — Choosing the Right Formula & AP Tips
  {
    id: 'al-ent-5a',
    question: 'The curve $y = x^{2/3}$ for $0 \\le x \\le 1$ has a vertical tangent at the origin. Writing it as $x = y^{3/2}$, which integral gives its length?',
    options: [
      '$\\int_0^1 \\sqrt{1+\\frac{9}{4}y}\\,dy$',
      '$\\int_0^1 \\sqrt{1+\\frac{3}{2}y^{1/2}}\\,dy$',
      '$\\int_0^1 \\sqrt{1+y^3}\\,dy$',
      '$\\int_0^1 \\sqrt{1+\\frac{9}{4}y^2}\\,dy$',
    ],
    correctIndex: 0,
    explanation: 'With $x = y^{3/2}$, $\\frac{dx}{dy} = \\frac{3}{2}y^{1/2}$ and its square is $\\frac{9}{4}y$, so $L = \\int_0^1 \\sqrt{1 + \\frac{9}{4}y}\\,dy$, a bounded integrand. The other options forget to square, square $x$ instead of $\\frac{dx}{dy}$, or square $y^{1/2}$ incorrectly.',
    partNumber: 5,
    partTitle: 'Choosing the Right Formula & AP Tips',
  },
  {
    id: 'al-ent-5b',
    question: 'For which function is $1 + (y\')^2$ a perfect square, so its arc length can be found by hand?',
    options: [
      '$y = \\frac{x^3}{3}+\\frac{1}{x}$',
      '$y = \\frac{x^3}{12}+x$',
      '$y = \\frac{x^3}{12}+\\frac{1}{x}$',
      '$y = \\frac{x^2}{2}+\\frac{1}{x}$',
    ],
    correctIndex: 2,
    explanation: 'For $y = \\frac{x^3}{12} + \\frac{1}{x}$, $y\' = \\frac{x^2}{4} - \\frac{1}{x^2}$, and the two terms multiply to $\\frac{1}{4}$, so $1 + (y\')^2 = \\left(\\frac{x^2}{4} + \\frac{1}{x^2}\\right)^2$. In the other options the product of the two terms of $y\'$ is not $\\frac{1}{4}$ (or there is no subtraction), so the square root does not simplify.',
    partNumber: 5,
    partTitle: 'Choosing the Right Formula & AP Tips',
  },

  // Part 6 — Problem-Solving Workshop
  {
    id: 'al-ent-6a',
    question: 'What is the length of the curve $x = 3t^2$, $y = 2t^3$ for $-1 \\le t \\le 1$?',
    options: ['$0$', '$8\\sqrt{2}-4$', '$4\\sqrt{2}-2$', '$8\\sqrt{2}$'],
    correctIndex: 1,
    explanation: 'The integrand is $\\sqrt{36t^2 + 36t^4} = 6|t|\\sqrt{1 + t^2}$, so $L = 2\\int_0^1 6t\\sqrt{1 + t^2}\\,dt = 2 \\cdot 2(2\\sqrt{2} - 1) = 8\\sqrt{2} - 4$. Writing $t$ instead of $|t|$ makes the halves cancel to $0$, and $4\\sqrt{2} - 2$ covers only $0 \\le t \\le 1$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'al-ent-6b',
    question: 'What is the arc length of $y = \\frac{1}{3}(x^2 + 2)^{3/2}$ from $x = 0$ to $x = 1$?',
    options: ['$\\frac{1}{3}$', '$2$', '$\\frac{3\\sqrt{3}-2\\sqrt{2}}{3}$', '$\\frac{4}{3}$'],
    correctIndex: 3,
    explanation: 'Here $y\' = x\\sqrt{x^2 + 2}$, so $1 + (y\')^2 = x^4 + 2x^2 + 1 = (x^2 + 1)^2$ and $L = \\int_0^1 (x^2 + 1)\\,dx = \\frac{4}{3}$. Dropping the $1$ gives $\\frac{1}{3}$, and $\\frac{3\\sqrt{3} - 2\\sqrt{2}}{3}$ is the change in $y$, not the length.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7 — Full Topic Review
  {
    id: 'al-ent-7a',
    question: 'A particle moves with $x(t) = t^2 + 1$ and $y(t) = \\ln t$ for $t > 0$. What is its speed at $t = 2$?',
    options: [
      '$\\frac{\\sqrt{65}}{2}$',
      '$\\frac{65}{4}$',
      '$\\frac{9}{2}$',
      '$\\sqrt{25+(\\ln 2)^2}$',
    ],
    correctIndex: 0,
    explanation: 'At $t = 2$, $x\' = 4$ and $y\' = \\frac{1}{2}$, so the speed is $\\sqrt{16 + \\frac{1}{4}} = \\frac{\\sqrt{65}}{2}$. Forgetting the square root gives $\\frac{65}{4}$, adding the components gives $\\frac{9}{2}$, and the last option is the distance from the origin to the position $(5, \\ln 2)$.',
    partNumber: 7,
    partTitle: 'Full Topic Review',
  },
  {
    id: 'al-ent-7b',
    question: 'A particle moves around a closed loop and is back at its starting point at $t = 5$. Which quantity for $0 \\le t \\le 5$ must equal zero?',
    options: [
      'Its total distance traveled',
      'Its speed at $t = 5$',
      'Its displacement',
      'Its average speed on $[0, 5]$',
    ],
    correctIndex: 2,
    explanation: 'Displacement is the net change in position, which is zero when the particle ends where it began. Distance and average speed come from integrating speed, which is never negative, and the particle can still be moving at $t = 5$.',
    partNumber: 7,
    partTitle: 'Full Topic Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Arc Length of Cartesian Curves' },
    { partNumber: 2, partTitle: 'Arc Length of Parametric Curves' },
    { partNumber: 3, partTitle: 'Speed, Distance Traveled, and Displacement' },
    { partNumber: 4, partTitle: 'Arc Length in y and Arc Length Functions' },
    { partNumber: 5, partTitle: 'Choosing the Right Formula & AP Tips' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Full Topic Review' },
  ]
}
