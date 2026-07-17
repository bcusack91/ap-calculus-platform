/**
 * Entrance Quiz — Related Rates (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'rr-ent-1a', question: 'In a related rates problem, you implicitly differentiate the equation with respect to:', options: ['$x$', '$y$', 'time $t$', 'A constant'], correctIndex: 2, explanation: 'Related rates: differentiate with respect to time, treating each variable as a function of $t$.', partNumber: 1, partTitle: 'Introduction to Related Rates' },
  { id: 'rr-ent-1b', question: 'If $V = s^3$ and $s$ is a function of $t$, then $\\frac{dV}{dt} =$', options: ['$3s^2$', '$3s^2 \\frac{ds}{dt}$', '$s^3 \\frac{ds}{dt}$', '$3 \\frac{ds}{dt}$'], correctIndex: 1, explanation: 'Chain rule with respect to $t$: $\\frac{dV}{dt} = 3s^2 \\frac{ds}{dt}$.', partNumber: 1, partTitle: 'Introduction to Related Rates' },
  { id: 'rr-ent-2a', question: 'A 13-foot ladder leans against a wall. If the bottom slides at $2$ ft/s, the equation relating $x$ (base) and $y$ (height) is:', options: ['$x + y = 13$', '$x^2 + y^2 = 169$', '$xy = 13$', '$x = 13y$'], correctIndex: 1, explanation: 'Pythagorean theorem: $x^2 + y^2 = 13^2 = 169$.', partNumber: 2, partTitle: 'Pythagorean Theorem & Distance Problems' },
  { id: 'rr-ent-2b', question: 'For two cars with $z^2 = x^2 + y^2$ (distance), differentiating gives:', options: ['$z = x + y$', '$z\\frac{dz}{dt} = x\\frac{dx}{dt} + y\\frac{dy}{dt}$', '$\\frac{dz}{dt} = \\frac{dx}{dt} + \\frac{dy}{dt}$', '$2z = 2x + 2y$'], correctIndex: 1, explanation: 'Differentiating $z^2 = x^2 + y^2$: $2z\\frac{dz}{dt} = 2x\\frac{dx}{dt} + 2y\\frac{dy}{dt}$, divide by 2.', partNumber: 2, partTitle: 'Pythagorean Theorem & Distance Problems' },
  { id: 'rr-ent-3a', question: 'A spherical balloon: $V = \\frac{4}{3}\\pi r^3$. Differentiating with respect to $t$:', options: ['$\\frac{dV}{dt} = \\frac{4}{3}\\pi$', '$\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$', '$\\frac{dV}{dt} = 4\\pi r^3 \\frac{dr}{dt}$', '$\\frac{dV}{dt} = \\pi r^2$'], correctIndex: 1, explanation: '$\\frac{dV}{dt} = \\frac{4}{3}\\pi \\cdot 3r^2 \\frac{dr}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.', partNumber: 3, partTitle: 'Volume & Surface Area Problems' },
  { id: 'rr-ent-3b', question: 'A conical tank with $V = \\frac{1}{3}\\pi r^2 h$ where $r = h/2$. Substituting:', options: ['$V = \\frac{\\pi h^3}{12}$', '$V = \\frac{\\pi h^2}{12}$', '$V = \\frac{\\pi h^3}{6}$', '$V = \\pi h$'], correctIndex: 0, explanation: '$V = \\frac{1}{3}\\pi (h/2)^2 h = \\frac{1}{3} \\pi \\cdot \\frac{h^2}{4} \\cdot h = \\frac{\\pi h^3}{12}$.', partNumber: 3, partTitle: 'Volume & Surface Area Problems' },
  { id: 'rr-ent-4a', question: 'For an angle $\\theta$ in a right triangle with $\\tan\\theta = \\frac{y}{x}$, differentiating with respect to $t$ requires:', options: ['Just the power rule', 'Implicit differentiation with $\\sec^2\\theta$ on the left', '$\\sin\\theta$ on the left', 'No derivative — $\\theta$ is constant'], correctIndex: 1, explanation: '$\\sec^2(\\theta)\\frac{d\\theta}{dt} = \\frac{d}{dt}\\left[\\frac{y}{x}\\right]$ (then quotient rule on the right).', partNumber: 4, partTitle: 'Trigonometric Related Rates' },
  { id: 'rr-ent-4b', question: 'For a search beacon rotating with $\\frac{d\\theta}{dt}$, the speed of the light along a wall depends on:', options: ['Only $\\frac{d\\theta}{dt}$', 'Both $\\frac{d\\theta}{dt}$ and the angle (e.g., via $\\sec^2 \\theta$)', 'Only the distance to the wall', 'Nothing — it is constant'], correctIndex: 1, explanation: 'Speed along the wall = $d \\sec^2(\\theta) \\frac{d\\theta}{dt}$, both rate and angle matter.', partNumber: 4, partTitle: 'Trigonometric Related Rates' },
  { id: 'rr-ent-5a', question: 'A circle with area $A = \\pi r^2$. Then $\\frac{dA}{dt} =$', options: ['$2\\pi r$', '$\\pi r^2 \\frac{dr}{dt}$', '$2\\pi r \\frac{dr}{dt}$', '$\\pi r$'], correctIndex: 2, explanation: 'Chain rule: $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$.', partNumber: 5, partTitle: 'Area & Perimeter Rate Problems' },
  { id: 'rr-ent-5b', question: 'For a square with perimeter $P = 4s$, $\\frac{dP}{dt} =$', options: ['$4$', '$4 \\frac{ds}{dt}$', '$s \\frac{ds}{dt}$', '$\\frac{ds}{dt}$'], correctIndex: 1, explanation: 'Constant multiple rule with chain rule: $\\frac{dP}{dt} = 4\\frac{ds}{dt}$.', partNumber: 5, partTitle: 'Area & Perimeter Rate Problems' },
  { id: 'rr-ent-6a', question: 'In a multi-step related rates problem, you should:', options: ['Substitute numerical values BEFORE differentiating', 'Differentiate first, THEN substitute numerical values', 'Solve for one variable in terms of all others before differentiating', 'Take the integral instead'], correctIndex: 1, explanation: 'Always differentiate the GENERAL equation, then substitute the instant\'s values. Substituting first treats variables as constants.', partNumber: 6, partTitle: 'Multi-Step & Combined Problems' },
  { id: 'rr-ent-6b', question: 'A typical related-rates setup goes:', options: ['Identify variables → relate them → differentiate w/ chain rule → substitute', 'Substitute → differentiate → solve', 'Integrate both sides → differentiate', 'Use only $y = mx + b$'], correctIndex: 0, explanation: 'Standard 4-step framework taught in AP Calculus.', partNumber: 6, partTitle: 'Multi-Step & Combined Problems' },
  { id: 'rr-ent-7a', question: 'On AP free response, you must include units in your final answer for related rates because:', options: ['It looks neat', 'Rates have specific units (e.g., cm/s, $ft^{3}/min$) and the rubric requires them', 'Units cancel anyway', 'The problem says so'], correctIndex: 1, explanation: 'AP rubrics dock points for missing or incorrect units on rate answers.', partNumber: 7, partTitle: 'AP Exam Free Response Strategies' },
  { id: 'rr-ent-7b', question: 'A common AP error in related rates is:', options: ['Using too much algebra', 'Substituting specific values BEFORE differentiating', 'Using radians', 'Drawing a diagram'], correctIndex: 1, explanation: 'Premature substitution treats changing quantities as constants, producing a wrong derivative.', partNumber: 7, partTitle: 'AP Exam Free Response Strategies' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] { return [...questions].sort(() => Math.random() - 0.5) }
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
