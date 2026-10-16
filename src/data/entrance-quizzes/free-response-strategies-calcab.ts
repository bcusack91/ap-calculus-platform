/**
 * Entrance Quiz — Free-Response Strategies — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — FRQ Structure & Core Skills
  {
    id: 'frq-ent-1a',
    question: 'On a free-response question, $f\'(3) = 0$ and you must justify that $f$ has a relative minimum at $x = 3$. Which statement earns the justification point?',
    options: [
      '$f\'(3) = 0$ and $f$ is continuous at $x = 3$, so it is a minimum',
      '$f\'$ changes from negative to positive at $x = 3$',
      '$f(3)$ is smaller than every value of $f$ listed in the table',
      'The graph of $f$ appears to reach its lowest point at $x = 3$',
    ],
    correctIndex: 1,
    explanation: 'The First Derivative Test needs the sign change of $f\'$ from negative to positive. A zero derivative alone could be a maximum or neither, comparing a few listed values does not show a relative minimum, and a picture is not a justification.',
    partNumber: 1,
    partTitle: 'FRQ Structure & Core Skills',
  },
  {
    id: 'frq-ent-1b',
    question: '$W(t)$ is the amount of water, in gallons, in a tank at time $t$ hours. A free-response part asks for the average rate of change of $W$ over $0 \\le t \\le 6$. Which response is correct?',
    options: [
      '$\\frac{1}{6}\\int_0^6 W(t)\\,dt$ gallons',
      '$\\frac{1}{6}\\int_0^6 W(t)\\,dt$ gallons per hour',
      '$W(6)-W(0)$ gallons per hour',
      '$\\frac{W(6)-W(0)}{6}$ gallons per hour',
    ],
    correctIndex: 3,
    explanation: 'Average rate of change is the slope of the secant line, change in $W$ over change in $t$, so its units are gallons per hour. The integral expression is the average value of $W$, and $W(6) - W(0)$ is the total change, not a rate.',
    partNumber: 1,
    partTitle: 'FRQ Structure & Core Skills',
  },

  // Part 2 — Rate & Accumulation FRQs
  {
    id: 'frq-ent-2a',
    question: 'A sand pile changes at net rate $N(t)$ tons per hour for $0 \\le t \\le 9$. $N$ is positive on $(0, 3)$, negative on $(3, 7)$, and positive on $(7, 9)$, with $\\int_0^3 N\\,dt = 12$, $\\int_3^7 N\\,dt = -20$, and $\\int_7^9 N\\,dt = 6$. The pile holds 50 tons at $t = 0$. At what time is the pile smallest?',
    options: ['$t = 7$', '$t = 0$', '$t = 9$', '$t = 3$'],
    correctIndex: 0,
    explanation: 'Check the endpoints and the times where $N$ changes from negative to positive: the amounts are $50$ at $t = 0$, $62$ at $t = 3$, $42$ at $t = 7$, and $48$ at $t = 9$. The minimum is $42$ tons at $t = 7$; $t = 3$ is where the pile is largest.',
    partNumber: 2,
    partTitle: 'Rate & Accumulation FRQs',
  },
  {
    id: 'frq-ent-2b',
    question: '$r(t)$ is the rate at which water flows into a tank, in liters per minute, with $t$ in minutes. What does $r\'(4) = -1.5$ mean?',
    options: [
      'At $t = 4$, the water in the tank is falling at 1.5 liters per minute',
      'From $t = 0$ to $t = 4$, the inflow rate fell by 1.5 liters per minute',
      'At $t = 4$, the inflow rate is falling at 1.5 liters per minute per minute',
      'At $t = 4$, 1.5 liters of water leave the tank each minute',
    ],
    correctIndex: 2,
    explanation: '$r\'$ is the rate of change of the inflow rate, so at $t = 4$ the inflow rate is decreasing at 1.5 liters per minute each minute. Water is still flowing in, so the tank is not losing water because of this, and a derivative describes one instant, not an interval.',
    partNumber: 2,
    partTitle: 'Rate & Accumulation FRQs',
  },

  // Part 3 — Table-Based FRQs
  {
    id: 'frq-ent-3a',
    question: '$R(t)$ is increasing on $[0, 10]$. After finding a left Riemann sum for $\\int_0^{10} R(t)\\,dt$, which response to "Is this an overestimate or an underestimate? Explain." earns the point?',
    options: [
      'Overestimate, because $R$ is increasing, so the rectangles rise above the graph',
      'Underestimate, because left sums are always smaller than right sums',
      'Overestimate, because all of the data values are positive',
      'Underestimate, because $R$ is increasing, so each left height is the least on its interval',
    ],
    correctIndex: 3,
    explanation: 'For an increasing function, the left endpoint gives the smallest value on each subinterval, so every rectangle sits under the graph. Left sums are not always smaller than right sums (that holds only for increasing functions), and positive data says nothing about the error.',
    partNumber: 3,
    partTitle: 'Table-Based FRQs',
  },
  {
    id: 'frq-ent-3b',
    question: 'Water flows into a tank at rate $R(t)$ gallons per hour. The table gives $R(0) = 5$, $R(4) = 9$, and $R(6) = 7$. What is the trapezoidal estimate of $\\int_0^6 R(t)\\,dt$?',
    options: ['$88$ gallons', '$44$ gallons', '$38$ gallons', '$50$ gallons'],
    correctIndex: 1,
    explanation: 'The widths are $4$ and $2$: $\\frac{4}{2}(5 + 9) + \\frac{2}{2}(9 + 7) = 28 + 16 = 44$ gallons. Leaving out the $\\frac{1}{2}$ gives $88$, and $38$ and $50$ are the left and right sums.',
    partNumber: 3,
    partTitle: 'Table-Based FRQs',
  },

  // Part 4 — Graph-Based FRQs
  {
    id: 'frq-ent-4a',
    question: 'The graph of $f\'$ consists of a segment from $(0, -2)$ to $(2, 2)$ and a horizontal segment from $(2, 2)$ to $(5, 2)$. If $f(0) = 7$, what is $f(5)$?',
    options: ['$13$', '$15$', '$6$', '$9$'],
    correctIndex: 0,
    explanation: 'On $[0, 2]$ the triangles below and above the axis each have area $1$, so they cancel; on $[2, 5]$ the area is $6$. So $f(5) = 7 + 0 + 6 = 13$. Counting the region below the axis as positive gives $15$, and $6$ is only the change in $f$.',
    partNumber: 4,
    partTitle: 'Graph-Based FRQs',
  },
  {
    id: 'frq-ent-4b',
    question: 'On $(0, 10)$, $f\'$ is positive except that $f\'(7) = 0$. Also $f\'$ increases on $(0, 4)$, decreases on $(4, 7)$, and increases on $(7, 10)$. Where does the graph of $f$ have points of inflection?',
    options: [
      '$x = 7$ only, where $f\'$ is zero',
      '$x = 4$ only, where $f\'$ has a local maximum',
      '$x = 4$ and $x = 7$',
      'Nowhere, since $f\'$ never changes sign',
    ],
    correctIndex: 2,
    explanation: 'Inflection points occur where $f\'$ changes from increasing to decreasing or back, which happens at $x = 4$ and $x = 7$. Whether $f\'$ changes sign decides extrema of $f$, not concavity.',
    partNumber: 4,
    partTitle: 'Graph-Based FRQs',
  },

  // Part 5 — Differential Equation FRQs
  {
    id: 'frq-ent-5a',
    question: 'For the differential equation $\\frac{dy}{dx} = xy - 1$, which expression gives $\\frac{d^2y}{dx^2}$ in terms of $x$ and $y$?',
    options: ['$y$', '$y+x(xy-1)$', '$y+x$', '$x(xy-1)$'],
    correctIndex: 1,
    explanation: 'By the product rule, $\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}$, and substituting the equation for $\\frac{dy}{dx}$ gives $y + x(xy - 1)$. Treating $y$ as a constant gives only $y$, and $y + x$ replaces $\\frac{dy}{dx}$ by $1$.',
    partNumber: 5,
    partTitle: 'Differential Equation FRQs',
  },
  {
    id: 'frq-ent-5b',
    question: 'Solving $\\frac{dy}{dx} = 2xy^2$ with $y(0) = -1$, a student writes $-\\frac{1}{y} = x^2$ and then $y = -\\frac{1}{x^2} + C$. What is the error?',
    options: [
      'The antiderivative of $\\frac{1}{y^2}$ should be $\\ln(y^2)$, not $-\\frac{1}{y}$',
      'Separating is not allowed when $y^2$ appears in the equation',
      'The constant should be set to $0$ since the initial value is negative',
      'The $+C$ must appear when integrating',
    ],
    correctIndex: 3,
    explanation: 'The constant belongs in $-\\frac{1}{y} = x^2 + C$; then $y(0) = -1$ gives $C = 1$ and $y = -\\frac{1}{x^2 + 1}$. Adding $C$ after solving produces a different, wrong family, and the separation and antiderivative were fine.',
    partNumber: 5,
    partTitle: 'Differential Equation FRQs',
  },

  // Part 6 — Area & Volume FRQs
  {
    id: 'frq-ent-6a',
    question: 'The region bounded by $y = \\sqrt{x}$, the line $y = 2$, and the $y$-axis is revolved about the line $y = 2$. Which integral gives the volume?',
    options: [
      '$\\pi\\int_0^4(2-\\sqrt{x})^2\\,dx$',
      '$\\pi\\int_0^4(4-x)\\,dx$',
      '$\\pi\\int_0^2(2-\\sqrt{x})^2\\,dx$',
      '$\\int_0^4(2-\\sqrt{x})^2\\,dx$',
    ],
    correctIndex: 0,
    explanation: 'The region runs from $x = 0$ to $x = 4$ and touches the axis $y = 2$, so the slices are disks of radius $2 - \\sqrt{x}$. The integrand $4 - x$ revolves about the $x$-axis instead, the limits $0$ to $2$ are $y$-values, and the version without $\\pi$ is not a solid of revolution.',
    partNumber: 6,
    partTitle: 'Area & Volume FRQs',
  },
  {
    id: 'frq-ent-6b',
    question: 'The base of a solid is the region between $y = x^2$ and $y = 4$. Cross sections perpendicular to the $x$-axis are equilateral triangles. What is the volume?',
    options: ['$\\frac{512}{15}$', '$\\frac{512\\pi}{15}$', '$\\frac{128\\sqrt{3}}{15}$', '$\\frac{256}{15}$'],
    correctIndex: 2,
    explanation: 'The side is $4 - x^2$ on $[-2, 2]$, so $V = \\frac{\\sqrt{3}}{4}\\int_{-2}^{2}(4 - x^2)^2\\,dx = \\frac{\\sqrt{3}}{4} \\cdot \\frac{512}{15} = \\frac{128\\sqrt{3}}{15}$. Squares give $\\frac{512}{15}$, isosceles right triangles with a leg in the base give $\\frac{256}{15}$, and $\\pi$ belongs only to revolution.',
    partNumber: 6,
    partTitle: 'Area & Volume FRQs',
  },

  // Part 7 — Full Practice FRQ Set
  {
    id: 'frq-ent-7a',
    question: 'Let $g(x) = \\int_1^{x^2} f(t)\\,dt$, where $f$ is continuous with $f(2) = 5$ and $f(4) = 3$. What is $g\'(2)$?',
    options: ['$3$', '$20$', '$6$', '$12$'],
    correctIndex: 3,
    explanation: 'By the Fundamental Theorem with the chain rule, $g\'(x) = f(x^2) \\cdot 2x$, so $g\'(2) = f(4) \\cdot 4 = 12$. Leaving out the chain factor gives $3$, and $20$ evaluates $f$ at $2$ instead of at $x^2 = 4$.',
    partNumber: 7,
    partTitle: 'Full Practice FRQ Set',
  },
  {
    id: 'frq-ent-7b',
    question: 'A particle moves with velocity $v(t) = t^2 - 4t + 3$ for $0 \\le t \\le 4$. What is the total distance it travels?',
    options: ['$4$', '$\\frac{4}{3}$', '$\\frac{8}{3}$', '$\\frac{16}{3}$'],
    correctIndex: 0,
    explanation: 'The velocity is zero at $t = 1$ and $t = 3$; the three pieces have $\\int v\\,dt = \\frac{4}{3}$, $-\\frac{4}{3}$, and $\\frac{4}{3}$, so the distance is $\\frac{4}{3} + \\frac{4}{3} + \\frac{4}{3} = 4$. The net value $\\frac{4}{3}$ is the displacement.',
    partNumber: 7,
    partTitle: 'Full Practice FRQ Set',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'FRQ Structure & Core Skills' },
    { partNumber: 2, partTitle: 'Rate & Accumulation FRQs' },
    { partNumber: 3, partTitle: 'Table-Based FRQs' },
    { partNumber: 4, partTitle: 'Graph-Based FRQs' },
    { partNumber: 5, partTitle: 'Differential Equation FRQs' },
    { partNumber: 6, partTitle: 'Area & Volume FRQs' },
    { partNumber: 7, partTitle: 'Full Practice FRQ Set' },
  ]
}
