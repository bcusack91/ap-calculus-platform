/**
 * Entrance Quiz — Polar Calculus (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Polar Coordinates Review
  { id: 'plr-ent-1a', question: 'In polar coordinates, a point is described by:', options: ['$(x, y)$', '$(r, \\theta)$', '$(r, x)$', '$(\\theta, y)$'], correctIndex: 1, explanation: 'Polar coords use distance $r$ and angle $\\theta$.', partNumber: 1, partTitle: 'Polar Coordinates Review' },
  { id: 'plr-ent-1b', question: 'Convert $(r, \\theta)$ to Cartesian: $x =$', options: ['$r \\sin \\theta$', '$r \\cos \\theta$', '$r \\tan \\theta$', '$\\theta \\cos r$'], correctIndex: 1, explanation: '$x = r\\cos\\theta$, $y = r\\sin\\theta$.', partNumber: 1, partTitle: 'Polar Coordinates Review' },

  // Part 2: Graphing Polar Curves
  { id: 'plr-ent-2a', question: '$r = 2\\cos\\theta$ is the equation of:', options: ['A line', 'A circle', 'A cardioid', 'A rose'], correctIndex: 1, explanation: '$r = 2\\cos\\theta$ is a circle of radius 1 centered at $(1,0)$.', partNumber: 2, partTitle: 'Graphing Polar Curves' },
  { id: 'plr-ent-2b', question: 'A rose curve $r = \\cos(n\\theta)$ has how many petals when $n$ is odd?', options: ['$n$', '$2n$', '$n+1$', '$n-1$'], correctIndex: 0, explanation: 'Odd $n$: $n$ petals. Even $n$: $2n$ petals.', partNumber: 2, partTitle: 'Graphing Polar Curves' },

  // Part 3: Slopes of Polar Curves
  { id: 'plr-ent-3a', question: 'The slope $\\frac{dy}{dx}$ for a polar curve $r = f(\\theta)$ is:', options: ['$\\frac{dr/d\\theta}{r}$', '$\\frac{\\frac{d}{d\\theta}(r\\sin\\theta)}{\\frac{d}{d\\theta}(r\\cos\\theta)}$', '$\\frac{r}{dr/d\\theta}$', '$r\\theta$'], correctIndex: 1, explanation: 'Use $x = r\\cos\\theta$, $y = r\\sin\\theta$: $\\frac{dy/d\\theta}{dx/d\\theta}$.', partNumber: 3, partTitle: 'Slopes of Polar Curves' },
  { id: 'plr-ent-3b', question: 'A horizontal tangent on a polar curve occurs when:', options: ['$\\frac{dx}{d\\theta} = 0$', '$\\frac{dy}{d\\theta} = 0$ (and $\\frac{dx}{d\\theta} \\neq 0$)', '$r = 0$', '$\\theta = 0$'], correctIndex: 1, explanation: 'Horizontal tangent: numerator $dy/d\\theta = 0$, denominator $\\neq 0$.', partNumber: 3, partTitle: 'Slopes of Polar Curves' },

  // Part 4: Area in Polar Coordinates
  { id: 'plr-ent-4a', question: 'Area enclosed by a polar curve: $A =$', options: ['$\\int_\\alpha^\\beta r\\,d\\theta$', '$\\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta$', '$\\int_\\alpha^\\beta r^2\\,d\\theta$', '$\\pi r^2$'], correctIndex: 1, explanation: 'Polar area = $\\frac{1}{2}\\int_\\alpha^\\beta [f(\\theta)]^2\\,d\\theta$.', partNumber: 4, partTitle: 'Area in Polar Coordinates' },
  { id: 'plr-ent-4b', question: 'The area of one petal of $r = \\sin(2\\theta)$ is:', options: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{8}$', '$\\frac{\\pi}{2}$', '$\\frac{1}{2}$'], correctIndex: 1, explanation: 'One petal: $\\theta$ from $0$ to $\\pi/2$. $A = \\frac{1}{2}\\int_0^{\\pi/2}\\sin^2(2\\theta)\\,d\\theta = \\frac{\\pi}{8}$.', partNumber: 4, partTitle: 'Area in Polar Coordinates' },

  // Part 5: Area Between Polar Curves
  { id: 'plr-ent-5a', question: 'Area between two polar curves $r_1$ and $r_2$ ($r_1 \\geq r_2$):', options: ['$\\frac{1}{2}\\int(r_1^2 - r_2^2)\\,d\\theta$', '$\\int(r_1 - r_2)\\,d\\theta$', '$\\frac{1}{2}\\int(r_1 - r_2)^2\\,d\\theta$', '$\\int r_1 r_2\\,d\\theta$'], correctIndex: 0, explanation: 'Area = $\\frac{1}{2}\\int_\\alpha^\\beta(r_1^2 - r_2^2)\\,d\\theta$.', partNumber: 5, partTitle: 'Area Between Polar Curves' },
  { id: 'plr-ent-5b', question: 'Finding intersection points of polar curves requires solving:', options: ['$r_1 = r_2$', '$r_1 + r_2 = 0$', 'Only graphing', '$\\theta_1 = \\theta_2$'], correctIndex: 0, explanation: 'Set $r_1(\\theta) = r_2(\\theta)$. But also check the origin separately.', partNumber: 5, partTitle: 'Area Between Polar Curves' },

  // Part 6: Problem-Solving Workshop
  { id: 'plr-ent-6a', question: 'The area inside $r = 1 + \\cos\\theta$ is:', options: ['$\\frac{3\\pi}{2}$', '$\\pi$', '$2\\pi$', '$\\frac{\\pi}{2}$'], correctIndex: 0, explanation: '$A = \\frac{1}{2}\\int_0^{2\\pi}(1+\\cos\\theta)^2\\,d\\theta = \\frac{3\\pi}{2}$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'plr-ent-6b', question: 'For $r = 3\\cos\\theta$, the full curve is traced from $\\theta =$', options: ['$0$ to $2\\pi$', '$0$ to $\\pi$', '$0$ to $\\pi/2$', '$-\\pi/2$ to $\\pi/2$'], correctIndex: 1, explanation: 'The circle $r = 3\\cos\\theta$ completes one loop from $0$ to $\\pi$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7: Review & AP Exam Applications
  { id: 'plr-ent-7a', question: 'On the AP BC exam, polar area problems typically ask you to:', options: ['Graph only', 'Set up and evaluate area integrals', 'Find Cartesian equations', 'Convert all to rectangular'], correctIndex: 1, explanation: 'Common: find area enclosed by one or between two polar curves.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'plr-ent-7b', question: 'When finding area between a polar curve and the origin, remember that $r$ can be:', options: ['Only positive', 'Negative (which means the curve passes through the pole)', 'Always zero', 'Only integer-valued'], correctIndex: 1, explanation: 'When $r < 0$, the point is reflected through the origin.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Polar Coordinates Review' },
    { partNumber: 2, partTitle: 'Graphing Polar Curves' },
    { partNumber: 3, partTitle: 'Slopes of Polar Curves' },
    { partNumber: 4, partTitle: 'Area in Polar Coordinates' },
    { partNumber: 5, partTitle: 'Area Between Polar Curves' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
