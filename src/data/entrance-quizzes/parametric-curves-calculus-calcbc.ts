/**
 * Entrance Quiz — Parametric Curves Calculus (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Parametric Equations Review
  { id: 'pc-ent-1a', question: 'A parametric curve is defined by:', options: ['$y = f(x)$', '$x = f(t)$ and $y = g(t)$', '$r = f(\\theta)$', '$z = f(x,y)$'], correctIndex: 1, explanation: 'Both $x$ and $y$ are expressed as functions of parameter $t$.', partNumber: 1, partTitle: 'Parametric Equations Review' },
  { id: 'pc-ent-1b', question: 'To eliminate the parameter from $x = t^2$, $y = t + 1$:', options: ['$y = \\sqrt{x} + 1$', '$y = x + 1$', '$y^2 = x + 1$', '$x = (y-1)^2$'], correctIndex: 3, explanation: '$t = y - 1$, so $x = (y-1)^2$.', partNumber: 1, partTitle: 'Parametric Equations Review' },
  // Part 2: Derivatives of Parametric Curves
  { id: 'pc-ent-2a', question: 'For parametric curves, $\\frac{dy}{dx} =$', options: ['$\\frac{dy/dt}{dx/dt}$', '$\\frac{dx/dt}{dy/dt}$', '$\\frac{dy}{dt} + \\frac{dx}{dt}$', '$\\frac{dy}{dt} \\cdot \\frac{dx}{dt}$'], correctIndex: 0, explanation: '$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$.', partNumber: 2, partTitle: 'Derivatives of Parametric Curves' },
  { id: 'pc-ent-2b', question: 'If $x = t^3$ and $y = t^2$, then $\\frac{dy}{dx} =$', options: ['$\\frac{2t}{3t^2} = \\frac{2}{3t}$', '$\\frac{3t^2}{2t}$', '$\\frac{t}{2}$', '$6t$'], correctIndex: 0, explanation: '$\\frac{dy/dt}{dx/dt} = \\frac{2t}{3t^2} = \\frac{2}{3t}$.', partNumber: 2, partTitle: 'Derivatives of Parametric Curves' },
  // Part 3: Second Derivatives Parametrically
  { id: 'pc-ent-3a', question: 'The second derivative $\\frac{d^2y}{dx^2}$ for parametric curves is:', options: ['$\\frac{d^2y/dt^2}{d^2x/dt^2}$', '$\\frac{\\frac{d}{dt}(dy/dx)}{dx/dt}$', '$\\frac{dy/dt}{(dx/dt)^2}$', '$\\frac{d}{dx}(dy/dt)$'], correctIndex: 1, explanation: '$\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}[dy/dx]}{dx/dt}$.', partNumber: 3, partTitle: 'Second Derivatives Parametrically' },
  { id: 'pc-ent-3b', question: 'If $\\frac{dy}{dx} = \\frac{2}{3t}$ and $\\frac{dx}{dt} = 3t^2$, then $\\frac{d^2y}{dx^2} =$', options: ['$\\frac{-2/(3t^2)}{3t^2} = \\frac{-2}{9t^4}$', '$\\frac{2}{9t^4}$', '$\\frac{-2}{3t^2}$', '$\\frac{6}{t^3}$'], correctIndex: 0, explanation: '$\\frac{d}{dt}[\\frac{2}{3t}] = -\\frac{2}{3t^2}$. Divide by $3t^2$: $\\frac{-2}{9t^4}$.', partNumber: 3, partTitle: 'Second Derivatives Parametrically' },
  // Part 4: Arc Length of Parametric Curves
  { id: 'pc-ent-4a', question: 'Arc length of a parametric curve from $t = a$ to $t = b$:', options: ['$\\int_a^b \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt$', '$\\int_a^b (dx/dt + dy/dt)\\,dt$', '$\\int_a^b \\sqrt{1 + (dy/dx)^2}\\,dx$', '$\\int_a^b |dy/dt|\\,dt$'], correctIndex: 0, explanation: '$L = \\int_a^b \\sqrt{(x\'(t))^2 + (y\'(t))^2}\\,dt$.', partNumber: 4, partTitle: 'Arc Length of Parametric Curves' },
  { id: 'pc-ent-4b', question: 'For $x = \\cos t$, $y = \\sin t$, $0 \\leq t \\leq 2\\pi$, the arc length is:', options: ['$\\pi$', '$2\\pi$', '$1$', '$4\\pi$'], correctIndex: 1, explanation: 'This is a unit circle: circumference $= 2\\pi$.', partNumber: 4, partTitle: 'Arc Length of Parametric Curves' },
  // Part 5: Area with Parametric Curves
  { id: 'pc-ent-5a', question: 'The area under a parametric curve $y = g(t)$, $x = f(t)$ is:', options: ['$\\int_a^b g(t) f(t)\\,dt$', '$\\int_a^b g(t) f\'(t)\\,dt$', '$\\int_a^b f(t) g\'(t)\\,dt$', '$\\int_a^b [g(t)]^2\\,dt$'], correctIndex: 1, explanation: 'Area $= \\int y\\,dx = \\int_a^b g(t) f\'(t)\\,dt$.', partNumber: 5, partTitle: 'Area with Parametric Curves' },
  { id: 'pc-ent-5b', question: 'When computing area parametrically, pay attention to:', options: ['Only the $y$-values', 'The direction of traversal (sign of $dx/dt$)', 'Only the $x$-values', 'The parameter range only'], correctIndex: 1, explanation: 'If the curve is traversed in the negative $x$-direction, the sign changes.', partNumber: 5, partTitle: 'Area with Parametric Curves' },
  // Part 6: Problem-Solving Workshop
  { id: 'pc-ent-6a', question: 'For $x = 2t$, $y = t^2$, $0 \\leq t \\leq 3$: $\\frac{dy}{dx}$ at $t = 1$ is:', options: ['$1$', '$2$', '$\\frac{1}{2}$', '$4$'], correctIndex: 0, explanation: '$\\frac{dy}{dx} = \\frac{2t}{2} = t$. At $t=1$: $\\frac{dy}{dx} = 1$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'pc-ent-6b', question: 'A curve has a horizontal tangent when:', options: ['$dx/dt = 0$', '$dy/dt = 0$ (and $dx/dt \\neq 0$)', '$dy/dx = 1$', '$t = 0$'], correctIndex: 1, explanation: 'Horizontal tangent: $dy/dt = 0$ while $dx/dt \\neq 0$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  // Part 7: Review & AP Exam Applications
  { id: 'pc-ent-7a', question: 'A vertical tangent on a parametric curve occurs when:', options: ['$dy/dt = 0$', '$dx/dt = 0$ (and $dy/dt \\neq 0$)', 'Both are zero', 'Neither is zero'], correctIndex: 1, explanation: 'Vertical tangent: $dx/dt = 0$ while $dy/dt \\neq 0$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'pc-ent-7b', question: 'On the AP BC exam, parametric problems often combine:', options: ['Derivatives, arc length, and area', 'Only area calculations', 'Only graphing', 'Only elimination of parameter'], correctIndex: 0, explanation: 'Expect to find slopes, arc lengths, and areas from parametric equations.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Parametric Equations Review' },
    { partNumber: 2, partTitle: 'Derivatives of Parametric Curves' },
    { partNumber: 3, partTitle: 'Second Derivatives Parametrically' },
    { partNumber: 4, partTitle: 'Arc Length of Parametric Curves' },
    { partNumber: 5, partTitle: 'Area with Parametric Curves' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
