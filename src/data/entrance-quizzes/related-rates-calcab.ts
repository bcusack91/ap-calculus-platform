/**
 * Entrance Quiz — Related Rates (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Introduction to Related Rates
  {
    id: 'rrt-ent-1a',
    question: 'The area of a square increases at $20$ cm$^2$/s. How fast is the side length increasing when the side is $5$ cm?',
    options: ['$2$ cm/s', '$\\frac{1}{2}$ cm/s', '$10$ cm/s', '$100$ cm/s'],
    correctIndex: 0,
    explanation: 'With $A = s^2$, $\\frac{dA}{dt} = 2s\\frac{ds}{dt}$, so $20 = 2(5)\\frac{ds}{dt}$ and $\\frac{ds}{dt} = 2$ cm/s. Inverting the relationship gives $\\frac{1}{2}$.',
    partNumber: 1,
    partTitle: 'Introduction to Related Rates',
  },
  {
    id: 'rrt-ent-1b',
    question: 'A 15-ft ladder slides along a wall, so $x^2 + y^2 = 15^2$, where $x$ and $y$ depend on time $t$. What do you get after differentiating with respect to $t$?',
    options: ['$2x + 2y = 0$', '$2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$', '$2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 30$', '$2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 225$'],
    correctIndex: 1,
    explanation: 'Each variable term picks up its own rate by the chain rule, and the constant $15^2$ has derivative 0. Writing $2x + 2y$ forgets the chain rule, and 30 treats the constant as if it were changing.',
    partNumber: 1,
    partTitle: 'Introduction to Related Rates',
  },
  // Part 2 — Pythagorean Theorem & Distance Problems
  {
    id: 'rrt-ent-2a',
    question: 'A 17-ft ladder leans against a wall. Its base slides away from the wall at $3$ ft/s. How fast is the top moving when the base is $8$ ft from the wall?',
    options: ['$\\frac{8}{5}$ ft/s', '$-\\frac{45}{8}$ ft/s', '$-\\frac{8}{5}$ ft/s', '$-3$ ft/s'],
    correctIndex: 2,
    explanation: 'When $x = 8$, $y = \\sqrt{289 - 64} = 15$. From $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$: $\\frac{dy}{dt} = -\\frac{8(3)}{15} = -\\frac{8}{5}$ ft/s; the negative sign means the top slides down.',
    partNumber: 2,
    partTitle: 'Pythagorean Theorem & Distance Problems',
  },
  {
    id: 'rrt-ent-2b',
    question: 'A 6-ft person walks away from an 18-ft lamppost at $5$ ft/s. How fast is the length of the person\'s shadow increasing?',
    options: ['$\\frac{5}{3}$ ft/s', '$\\frac{15}{2}$ ft/s', '$15$ ft/s', '$\\frac{5}{2}$ ft/s'],
    correctIndex: 3,
    explanation: 'With $x$ the distance from the post and $s$ the shadow length, similar triangles give $\\frac{18}{x + s} = \\frac{6}{s}$, so $s = \\frac{x}{2}$ and $\\frac{ds}{dt} = \\frac{5}{2}$ ft/s. The value $\\frac{15}{2}$ is the speed of the shadow\'s tip.',
    partNumber: 2,
    partTitle: 'Pythagorean Theorem & Distance Problems',
  },
  // Part 3 — Volume & Surface Area Problems
  {
    id: 'rrt-ent-3a',
    question: 'Water drains from a conical tank (vertex down) with top radius $5$ ft and height $10$ ft at $4$ ft$^3$/min. How fast is the water level changing, in ft/min, when the depth is $2$ ft?',
    options: ['$-\\frac{4}{\\pi}$', '$-\\frac{12}{25\\pi}$', '$-\\frac{1}{4\\pi}$', '$\\frac{4}{\\pi}$'],
    correctIndex: 0,
    explanation: 'Similar triangles give $r = \\frac{h}{2}$, so $V = \\frac{\\pi h^3}{12}$ and $\\frac{dV}{dt} = \\frac{\\pi h^2}{4}\\frac{dh}{dt}$. With $\\frac{dV}{dt} = -4$ and $h = 2$: $-4 = \\pi\\frac{dh}{dt}$, so $\\frac{dh}{dt} = -\\frac{4}{\\pi}$. Holding $r = 5$ fixed gives $-\\frac{12}{25\\pi}$.',
    partNumber: 3,
    partTitle: 'Volume & Surface Area Problems',
  },
  {
    id: 'rrt-ent-3b',
    question: 'A cylinder\'s radius decreases at $1$ cm/s while its height increases at $2$ cm/s. How fast is its volume changing, in cm$^3$/s, when $r = 4$ cm and $h = 6$ cm?',
    options: ['$80\\pi$', '$-16\\pi$', '$8\\pi$', '$-48\\pi$'],
    correctIndex: 1,
    explanation: 'With $V = \\pi r^2 h$, $\\frac{dV}{dt} = \\pi\\left(2rh\\frac{dr}{dt} + r^2\\frac{dh}{dt}\\right) = \\pi(2 \\cdot 4 \\cdot 6 \\cdot (-1) + 16 \\cdot 2) = -16\\pi$. Dropping the $r^2\\frac{dh}{dt}$ term gives $-48\\pi$.',
    partNumber: 3,
    partTitle: 'Volume & Surface Area Problems',
  },
  // Part 4 — Trigonometric Related Rates
  {
    id: 'rrt-ent-4a',
    question: 'A rocket rises vertically at $100$ m/s, watched by an observer $500$ m from the launch pad. How fast, in rad/s, is the angle of elevation increasing when the rocket is $500$ m high?',
    options: ['$0.2$', '$0.05$', '$0.1$', '$\\frac{\\pi}{4}$'],
    correctIndex: 2,
    explanation: 'From $\\tan\\theta = \\frac{h}{500}$: $\\sec^2\\theta\\frac{d\\theta}{dt} = \\frac{1}{500}\\frac{dh}{dt} = 0.2$. At $h = 500$, $\\theta = \\frac{\\pi}{4}$ and $\\sec^2\\theta = 2$, so $\\frac{d\\theta}{dt} = 0.1$. Forgetting $\\sec^2\\theta$ gives 0.2.',
    partNumber: 4,
    partTitle: 'Trigonometric Related Rates',
  },
  {
    id: 'rrt-ent-4b',
    question: 'A 10-ft ladder\'s base slides away from a wall at $2$ ft/s. How fast, in rad/s, is the angle $\\theta$ between the ladder and the ground changing when the base is $6$ ft from the wall?',
    options: ['$\\frac{1}{4}$', '$-\\frac{1}{3}$', '$-\\frac{3}{20}$', '$-\\frac{1}{4}$'],
    correctIndex: 3,
    explanation: 'With $\\cos\\theta = \\frac{x}{10}$: $-\\sin\\theta\\frac{d\\theta}{dt} = \\frac{1}{10}\\frac{dx}{dt} = 0.2$. When $x = 6$ the height is 8, so $\\sin\\theta = 0.8$ and $\\frac{d\\theta}{dt} = -\\frac{0.2}{0.8} = -\\frac{1}{4}$. Using $\\cos\\theta = 0.6$ in place of $\\sin\\theta$ gives $-\\frac{1}{3}$.',
    partNumber: 4,
    partTitle: 'Trigonometric Related Rates',
  },
  // Part 5 — Area & Perimeter Rate Problems
  {
    id: 'rrt-ent-5a',
    question: 'A triangle\'s base is $12$ cm and growing at $3$ cm/s, while its height is $8$ cm and shrinking at $1$ cm/s. How fast is its area changing?',
    options: ['$6$ cm$^2$/s', '$12$ cm$^2$/s', '$-\\frac{3}{2}$ cm$^2$/s', '$18$ cm$^2$/s'],
    correctIndex: 0,
    explanation: 'With $A = \\frac{1}{2}bh$: $\\frac{dA}{dt} = \\frac{1}{2}\\left(b\\frac{dh}{dt} + h\\frac{db}{dt}\\right) = \\frac{1}{2}(12(-1) + 8(3)) = 6$ cm$^2$/s. Forgetting the $\\frac{1}{2}$ gives 12.',
    partNumber: 5,
    partTitle: 'Area & Perimeter Rate Problems',
  },
  {
    id: 'rrt-ent-5b',
    question: 'A particle moves along the curve $y = \\ln x$ with $\\dfrac{dx}{dt} = 6$. What is $\\dfrac{dy}{dt}$ when $x = 2$?',
    options: ['$12$', '$3$', '$6\\ln 2$', '$\\frac{1}{3}$'],
    correctIndex: 1,
    explanation: 'By the chain rule, $\\frac{dy}{dt} = \\frac{1}{x} \\cdot \\frac{dx}{dt} = \\frac{6}{2} = 3$. Multiplying by $x$ instead of dividing gives 12.',
    partNumber: 5,
    partTitle: 'Area & Perimeter Rate Problems',
  },
  // Part 6 — Multi-Step & Combined Problems
  {
    id: 'rrt-ent-6a',
    question: 'Car A is $80$ m north of an intersection driving south at $10$ m/s. Car B is $60$ m east of it driving west at $15$ m/s. How fast is the distance between them changing?',
    options: ['$-25$ m/s', '$17$ m/s', '$-17$ m/s', '$-18$ m/s'],
    correctIndex: 2,
    explanation: 'The distance is $D = 100$ m. From $D\\frac{dD}{dt} = a\\frac{da}{dt} + b\\frac{db}{dt}$: $100\\frac{dD}{dt} = 80(-10) + 60(-15) = -1700$, so $\\frac{dD}{dt} = -17$ m/s. Simply adding the speeds gives $-25$.',
    partNumber: 6,
    partTitle: 'Multi-Step & Combined Problems',
  },
  {
    id: 'rrt-ent-6b',
    question: 'At one instant a particle has $x = 6$, $y = 8$, $\\dfrac{dx}{dt} = -1$ and $\\dfrac{dy}{dt} = 3$. How fast is its distance $D = \\sqrt{x^2 + y^2}$ from the origin changing?',
    options: ['$3$', '$18$', '$2$', '$1.8$'],
    correctIndex: 3,
    explanation: '$\\frac{dD}{dt} = \\frac{x\\frac{dx}{dt} + y\\frac{dy}{dt}}{D} = \\frac{-6 + 24}{10} = 1.8$. Forgetting to divide by $D$ gives 18, and dropping the sign of $\\frac{dx}{dt}$ gives 3.',
    partNumber: 6,
    partTitle: 'Multi-Step & Combined Problems',
  },
  // Part 7 — AP Exam Free Response Strategies
  {
    id: 'rrt-ent-7a',
    question: 'For a sand cone, a student writes $V = \\frac{\\pi h^3}{12}$, substitutes $h = 6$ to get $V = 18\\pi$, then differentiates and concludes $\\frac{dV}{dt} = 0$. What is the error?',
    options: ['Plugging in $h$ too early', 'Using an incorrect volume formula for a cone', 'Leaving units off the final answer', 'Skipping a labeled diagram of the pile'],
    correctIndex: 0,
    explanation: 'Plugging in $h = 6$ before differentiating turns the height into a constant, so its rate disappears. Differentiate first, $\\frac{dV}{dt} = \\frac{\\pi h^2}{4}\\frac{dh}{dt}$, then substitute.',
    partNumber: 7,
    partTitle: 'AP Exam Free Response Strategies',
  },
  {
    id: 'rrt-ent-7b',
    question: 'Sand forms a cone with height three times its radius. Sand is added at $12$ ft$^3$/min. Which answer for the rate of change of the height when $h = 6$ ft is complete and correct?',
    options: ['$\\frac{3}{\\pi}$ ft$^3$/min', '$\\frac{3}{\\pi}$ ft/min', '$\\frac{1}{27\\pi}$ ft/min', '$\\frac{3}{4\\pi}$ ft/min'],
    correctIndex: 1,
    explanation: 'With $r = \\frac{h}{3}$, $V = \\frac{\\pi h^3}{27}$ and $\\frac{dV}{dt} = \\frac{\\pi h^2}{9}\\frac{dh}{dt} = 4\\pi\\frac{dh}{dt}$ at $h = 6$, so $\\frac{dh}{dt} = \\frac{3}{\\pi}$. A height rate is measured in ft/min, not ft$^3$/min.',
    partNumber: 7,
    partTitle: 'AP Exam Free Response Strategies',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Introduction to Related Rates' },
    { partNumber: 2, partTitle: 'Pythagorean Theorem & Distance Problems' },
    { partNumber: 3, partTitle: 'Volume & Surface Area Problems' },
    { partNumber: 4, partTitle: 'Trigonometric Related Rates' },
    { partNumber: 5, partTitle: 'Area & Perimeter Rate Problems' },
    { partNumber: 6, partTitle: 'Multi-Step & Combined Problems' },
    { partNumber: 7, partTitle: 'AP Exam Free Response Strategies' },
  ]
}
