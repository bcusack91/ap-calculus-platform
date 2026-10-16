/**
 * Entrance Quiz — Euler's Method — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Numerical Approximation of Differential Equations
  {
    id: 'eu-ent-1a',
    question: 'For $\\frac{dy}{dx} = 3x^2 - y$ with $y(1) = 2$, what does one Euler step of size $0.5$ give for $y(1.5)$?',
    options: ['$2.5$', '$4.375$', '$3$', '$0.5$'],
    correctIndex: 0,
    explanation: 'The slope at $(1, 2)$ is $3 - 2 = 1$, so $y(1.5) \\approx 2 + 1(0.5) = 2.5$. Using the slope at $x = 1.5$ gives $4.375$, leaving out $\\Delta x$ gives $3$, and $0.5$ is only the change in $y$.',
    partNumber: 1,
    partTitle: 'Numerical Approximation of Differential Equations',
  },
  {
    id: 'eu-ent-1b',
    question: 'Which statement about Euler\'s method is true?',
    options: [
      'The slope at the right end of each step is used',
      'Halving the step size always gives the exact solution',
      'Each step moves along the tangent line at the left end of the step',
      'The error is the same for every step size',
    ],
    correctIndex: 2,
    explanation: 'Euler\'s method evaluates the slope at the current point $(x_n, y_n)$ and follows that tangent line for one step. Smaller steps reduce the error but do not remove it, and the error does depend on the step size.',
    partNumber: 1,
    partTitle: 'Numerical Approximation of Differential Equations',
  },

  // Part 2 — Table Problems and Extended Calculations
  {
    id: 'eu-ent-2a',
    question: 'For $\\frac{dy}{dx} = x - 2y$ with $y(0) = 1$, what do two Euler steps of size $0.25$ give for $y(0.5)$?',
    options: ['$0.5$', '$0.3125$', '$0$', '$0.6875$'],
    correctIndex: 1,
    explanation: 'Step 1: slope $0 - 2 = -2$, so $y(0.25) = 1 - 0.5 = 0.5$. Step 2: slope $0.25 - 1 = -0.75$, so $y(0.5) = 0.5 - 0.1875 = 0.3125$. Reusing the first slope gives $0$, a sign slip in step 2 gives $0.6875$, and $0.5$ stops after one step.',
    partNumber: 2,
    partTitle: 'Table Problems and Extended Calculations',
  },
  {
    id: 'eu-ent-2b',
    question: 'Euler\'s method with step size $0.1$ is applied to $\\frac{dy}{dx} = y + x^2$ with $y(0) = 1$. What slope is used in the second step?',
    options: ['$1.1$', '$1$', '$1.14$', '$1.11$'],
    correctIndex: 3,
    explanation: 'The first step gives $y(0.1) = 1 + 1(0.1) = 1.1$, so the second slope is $f(0.1, 1.1) = 1.1 + 0.01 = 1.11$. Leaving out $x^2$ gives $1.1$, reusing the first slope gives $1$, and $1.14$ uses $x = 0.2$, the end of the step.',
    partNumber: 2,
    partTitle: 'Table Problems and Extended Calculations',
  },

  // Part 3 — Concavity Determines Error Direction
  {
    id: 'eu-ent-3a',
    question: 'Euler\'s method with a small step is used to approximate the solution of $\\frac{dy}{dx} = x + y^2$ through $(0, 1)$ just to the right of $x = 0$. Is the approximation an overestimate or an underestimate, and why?',
    options: [
      'Underestimate, since $\\frac{d^2y}{dx^2} = 3 > 0$ at $(0, 1)$',
      'Overestimate, since $\\frac{d^2y}{dx^2} = 3 > 0$ at $(0, 1)$',
      'Overestimate, since $\\frac{dy}{dx} = 1 > 0$ at $(0, 1)$',
      'Underestimate, since $\\frac{d^2y}{dx^2} = 1 > 0$ at $(0, 1)$',
    ],
    correctIndex: 0,
    explanation: 'Differentiating gives $\\frac{d^2y}{dx^2} = 1 + 2y\\frac{dy}{dx}$, which is $1 + 2(1)(1) = 3 > 0$ at $(0, 1)$, so the solution is concave up and the tangent-line steps fall below it. Treating $y$ as a constant gives $1$, and a positive slope only says the solution rises.',
    partNumber: 3,
    partTitle: 'Concavity Determines Error Direction',
  },
  {
    id: 'eu-ent-3b',
    question: 'Euler\'s method is used for $\\frac{dy}{dx} = -\\frac{y}{2}$ with $y(0) = 4$ on $[0, 2]$. How do the Euler values compare with the true solution?',
    options: [
      'Above the true value, because the solution is decreasing',
      'Above the true value, because $\\frac{dy}{dx} < 0$ means concave down',
      'Below the true value, since the solution is concave up',
      'Equal to the true value, because the equation is linear',
    ],
    correctIndex: 2,
    explanation: 'Here $\\frac{d^2y}{dx^2} = -\\frac{1}{2}\\frac{dy}{dx} = \\frac{y}{4} > 0$, so the decreasing solution is concave up and Euler\'s tangent steps lie below it. Whether a function decreases says nothing about its concavity.',
    partNumber: 3,
    partTitle: 'Concavity Determines Error Direction',
  },

  // Part 4 — Connecting Graphical and Numerical
  {
    id: 'eu-ent-4a',
    question: 'For $\\frac{dy}{dx} = \\frac{y(4 - y)}{4}$ with $y(0) = 2$, what do two Euler steps of size $1$ give for $y(2)$?',
    options: ['$4$', '$3.75$', '$3$', '$4.75$'],
    correctIndex: 1,
    explanation: 'Step 1: slope $\\frac{2 \\cdot 2}{4} = 1$, so $y(1) = 3$. Step 2: slope $\\frac{3 \\cdot 1}{4} = 0.75$, so $y(2) = 3.75$. The values rise toward the equilibrium $y = 4$ but do not reach it; reusing the first slope gives $4$.',
    partNumber: 4,
    partTitle: 'Connecting Graphical and Numerical',
  },
  {
    id: 'eu-ent-4b',
    question: 'For $\\frac{dy}{dx} = 2x - y$, on which line does an Euler step have zero slope (a horizontal segment in the slope field)?',
    options: ['$y = x$', '$y = -2x$', '$y = \\frac{x}{2}$', '$y = 2x$'],
    correctIndex: 3,
    explanation: 'The slope is zero where $2x - y = 0$, that is, on the isocline $y = 2x$. A step starting on that line moves horizontally.',
    partNumber: 4,
    partTitle: 'Connecting Graphical and Numerical',
  },

  // Part 5 — Maximizing FRQ Points
  {
    id: 'eu-ent-5a',
    question: 'For $\\frac{dy}{dx} = \\frac{x}{y}$ with $y(1) = 2$, what do two Euler steps of equal size give for $y(2)$?',
    options: ['$\\frac{31}{12}$', '$\\frac{5}{2}$', '$\\frac{9}{4}$', '$\\frac{8}{3}$'],
    correctIndex: 0,
    explanation: 'With $\\Delta x = 0.5$: the slope at $(1, 2)$ is $\\frac{1}{2}$, so $y(1.5) = 2.25$; the slope at $(1.5, 2.25)$ is $\\frac{2}{3}$, so $y(2) = 2.25 + \\frac{1}{3} = \\frac{31}{12}$. Reusing the first slope gives $\\frac{5}{2}$, and $\\frac{9}{4}$ stops after one step.',
    partNumber: 5,
    partTitle: 'Maximizing FRQ Points',
  },
  {
    id: 'eu-ent-5b',
    question: 'A free-response part asks for Euler\'s method from $x = 2$ to $x = 3$ with four steps of equal size. What is the step size, and how many slope evaluations are needed?',
    options: [
      '$\\Delta x = 0.25$ with $5$ slope evaluations',
      '$\\Delta x = 0.75$ with $4$ slope evaluations',
      '$\\Delta x = 0.25$ with $4$ slope evaluations',
      '$\\Delta x = 4$ with $1$ slope evaluation',
    ],
    correctIndex: 2,
    explanation: 'Four equal steps across an interval of length $1$ give $\\Delta x = 0.25$, and each step uses the slope at its left end, so there are four slopes, at $x = 2, 2.25, 2.5, 2.75$. No slope is needed at $x = 3$.',
    partNumber: 5,
    partTitle: 'Maximizing FRQ Points',
  },

  // Part 6 — Mixed Euler Practice
  {
    id: 'eu-ent-6a',
    question: 'For $\\frac{dy}{dx} = 2 - y$ with $y(0) = 0$, what do three Euler steps of size $0.5$ give for $y(1.5)$?',
    options: ['$1.5$', '$1.75$', '$3$', '$2$'],
    correctIndex: 1,
    explanation: 'The slopes are $2$, then $2 - 1 = 1$, then $2 - 1.5 = 0.5$, so $y$ goes $0 \\to 1 \\to 1.5 \\to 1.75$. Reusing the first slope for every step gives $3$, and $2$ is the equilibrium value, not the approximation.',
    partNumber: 6,
    partTitle: 'Mixed Euler Practice',
  },
  {
    id: 'eu-ent-6b',
    question: 'Euler\'s method is applied to $\\frac{dy}{dx} = y^2 - 1$ starting from $y(0) = 1$. What happens to the Euler values?',
    options: [
      'The values increase without bound',
      'The values decrease toward $-1$',
      'The values alternate around $1$',
      'Every value stays at $1$',
    ],
    correctIndex: 3,
    explanation: 'At $y = 1$ the slope is $1 - 1 = 0$, so every step has $\\Delta y = 0$ and the values stay at the equilibrium $y = 1$. That matches the true solution, the constant function $y = 1$.',
    partNumber: 6,
    partTitle: 'Mixed Euler Practice',
  },

  // Part 7 — Final Assessment
  {
    id: 'eu-ent-7a',
    question: 'For $\\frac{dy}{dx} = xy$ with $y(1) = 2$, one Euler step of size $0.5$ approximates $y(1.5)$. What is the approximation, and is it an overestimate or an underestimate?',
    options: [
      '$3$, an underestimate',
      '$3$, an overestimate',
      '$3.5$, an underestimate',
      '$2.5$, an overestimate',
    ],
    correctIndex: 0,
    explanation: 'The slope at $(1, 2)$ is $2$, so $y(1.5) \\approx 3$. Since $\\frac{d^2y}{dx^2} = y + x\\frac{dy}{dx} = y(1 + x^2) > 0$ for $y > 0$, the solution is concave up and the Euler value is too small. Using the slope at $x = 1.5$ gives $3.5$.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'eu-ent-7b',
    question: 'For a solution known to be concave up on $[0, 2]$, Euler\'s method gives $y(2) \\approx 4.2$ with $\\Delta x = 0.5$ and $y(2) \\approx 4.6$ with $\\Delta x = 0.25$. What can be concluded about the true value of $y(2)$?',
    options: [
      'It lies between $4.2$ and $4.6$',
      'It is somewhat less than $4.2$',
      'It is greater than $4.6$',
      'It equals the average, $4.4$',
    ],
    correctIndex: 2,
    explanation: 'On a concave-up solution every Euler approximation is an underestimate, so the true value exceeds both $4.2$ and $4.6$. The smaller step is closer, but it is still below the true value, so averaging the two is not justified.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Numerical Approximation of Differential Equations' },
    { partNumber: 2, partTitle: 'Table Problems and Extended Calculations' },
    { partNumber: 3, partTitle: 'Concavity Determines Error Direction' },
    { partNumber: 4, partTitle: 'Connecting Graphical and Numerical' },
    { partNumber: 5, partTitle: 'Maximizing FRQ Points' },
    { partNumber: 6, partTitle: 'Mixed Euler Practice' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
