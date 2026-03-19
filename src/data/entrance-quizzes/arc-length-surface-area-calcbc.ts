/**
 * Entrance Quiz — Arc Length & Surface Area (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Arc Length for y = f(x)
  { id: 'al-ent-1a', question: 'Arc length of $y = f(x)$ from $a$ to $b$:', options: ['$\\int_a^b f(x)\\,dx$', '$\\int_a^b \\sqrt{1 + [f\'(x)]^2}\\,dx$', '$\\int_a^b |f\'(x)|\\,dx$', '$f(b) - f(a)$'], correctIndex: 1, explanation: '$L = \\int_a^b \\sqrt{1 + (dy/dx)^2}\\,dx$.', partNumber: 1, partTitle: 'Arc Length for y = f(x)' },
  { id: 'al-ent-1b', question: 'The arc length formula involves the square root of $1 + [f\'(x)]^2$ because it accounts for:', options: ['The curvature', 'Both horizontal and vertical changes', 'Only vertical changes', 'The area'], correctIndex: 1, explanation: 'Arc length combines $dx$ and $dy$ via the Pythagorean theorem.', partNumber: 1, partTitle: 'Arc Length for y = f(x)' },

  // Part 2: Arc Length for Parametric Curves
  { id: 'al-ent-2a', question: 'Arc length of parametric curve $(x(t), y(t))$:', options: ['$\\int_a^b \\sqrt{[x\'(t)]^2+[y\'(t)]^2}\\,dt$', '$\\int_a^b [x\'(t)+y\'(t)]\\,dt$', '$\\int_a^b x(t)y(t)\\,dt$', '$\\sqrt{[x(b)-x(a)]^2+[y(b)-y(a)]^2}$'], correctIndex: 0, explanation: '$L = \\int_a^b \\sqrt{(dx/dt)^2+(dy/dt)^2}\\,dt$.', partNumber: 2, partTitle: 'Arc Length for Parametric Curves' },
  { id: 'al-ent-2b', question: 'For $x = 3t$, $y = 4t$, $0 \\leq t \\leq 2$: arc length $=$', options: ['$10$', '$14$', '$7$', '$5$'], correctIndex: 0, explanation: '$\\sqrt{9+16} = 5$. $L = 5 \\cdot 2 = 10$. (Straight line.)', partNumber: 2, partTitle: 'Arc Length for Parametric Curves' },

  // Part 3: Arc Length for Polar Curves
  { id: 'al-ent-3a', question: 'Arc length of polar curve $r = f(\\theta)$:', options: ['$\\int_\\alpha^\\beta r\\,d\\theta$', '$\\int_\\alpha^\\beta \\sqrt{r^2+(dr/d\\theta)^2}\\,d\\theta$', '$\\int_\\alpha^\\beta r^2\\,d\\theta$', '$2\\pi r$'], correctIndex: 1, explanation: '$L = \\int_\\alpha^\\beta \\sqrt{[f(\\theta)]^2+[f\'(\\theta)]^2}\\,d\\theta$.', partNumber: 3, partTitle: 'Arc Length for Polar Curves' },
  { id: 'al-ent-3b', question: 'For $r = 1$ (a circle), arc length from $0$ to $2\\pi$:', options: ['$2\\pi$', '$\\pi$', '$1$', '$4\\pi$'], correctIndex: 0, explanation: '$L = \\int_0^{2\\pi}\\sqrt{1+0}\\,d\\theta = 2\\pi$.', partNumber: 3, partTitle: 'Arc Length for Polar Curves' },

  // Part 4: Setting Up Arc Length Integrals
  { id: 'al-ent-4a', question: 'For $y = x^{3/2}$ from $x = 0$ to $x = 4$, $L = \\int_0^4 \\sqrt{1+?}\\,dx$:', options: ['$x^3$', '$\\frac{9x}{4}$', '$\\frac{3}{2}x^{1/2}$', '$x$'], correctIndex: 1, explanation: '$f\'(x) = \\frac{3}{2}x^{1/2}$. $[f\'(x)]^2 = \\frac{9x}{4}$.', partNumber: 4, partTitle: 'Setting Up Arc Length Integrals' },
  { id: 'al-ent-4b', question: 'Arc length integrals are often:', options: ['Easy to evaluate analytically', 'Difficult and require a calculator', 'Always integers', 'Zero'], correctIndex: 1, explanation: 'Most arc length integrals do not have closed-form antiderivatives.', partNumber: 4, partTitle: 'Setting Up Arc Length Integrals' },

  // Part 5: Surface Area of Revolution
  { id: 'al-ent-5a', question: 'Surface area when revolving $y = f(x)$ about the $x$-axis:', options: ['$\\int_a^b 2\\pi f(x)\\,dx$', '$\\int_a^b 2\\pi f(x)\\sqrt{1+[f\'(x)]^2}\\,dx$', '$\\int_a^b \\pi[f(x)]^2\\,dx$', '$2\\pi \\int_a^b f(x)\\,dx$'], correctIndex: 1, explanation: 'SA = $2\\pi \\int$ radius $\\times$ arc length element.', partNumber: 5, partTitle: 'Surface Area of Revolution' },
  { id: 'al-ent-5b', question: 'The \'radius\' in the surface area formula (revolving about $x$-axis) is:', options: ['$x$', '$f(x)$', '$f\'(x)$', '$1 + [f\'(x)]^2$'], correctIndex: 1, explanation: 'Distance from the curve to the axis of revolution = $f(x)$ (for $x$-axis).', partNumber: 5, partTitle: 'Surface Area of Revolution' },

  // Part 6: Problem-Solving Workshop
  { id: 'al-ent-6a', question: 'For parametric surface area (revolution about $x$-axis):', options: ['$2\\pi \\int y(t)\\sqrt{[x\'(t)]^2+[y\'(t)]^2}\\,dt$', '$2\\pi \\int x(t)\\,dt$', '$\\pi \\int [y(t)]^2\\,dt$', '$\\int [x\'(t)+y\'(t)]\\,dt$'], correctIndex: 0, explanation: 'SA $= 2\\pi\\int y(t)\\sqrt{(x\')^2+(y\')^2}\\,dt$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'al-ent-6b', question: 'Arc length of $y = \\ln(\\cos x)$ from $0$ to $\\pi/4$ requires $f\'(x) =$', options: ['$-\\tan x$', '$\\cos x$', '$\\frac{1}{\\cos x}$', '$-\\sin x$'], correctIndex: 0, explanation: '$f\'(x) = \\frac{-\\sin x}{\\cos x} = -\\tan x$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7: Review & AP Exam Applications
  { id: 'al-ent-7a', question: 'On the AP BC exam, arc length questions typically:', options: ['Ask for exact evaluation', 'Ask you to set up the integral (possibly evaluate with calculator)', 'Are not tested', 'Involve only circles'], correctIndex: 1, explanation: 'Setting up the integral correctly is the primary assessment.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'al-ent-7b', question: 'The key idea connecting all arc length formulas is:', options: ['The chain rule', 'The Pythagorean theorem applied to infinitesimal elements', 'L\'Hôpital\'s Rule', 'Integration by parts'], correctIndex: 1, explanation: 'All arc length formulas come from $ds = \\sqrt{dx^2 + dy^2}$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Arc Length for y = f(x)' },
    { partNumber: 2, partTitle: 'Arc Length for Parametric Curves' },
    { partNumber: 3, partTitle: 'Arc Length for Polar Curves' },
    { partNumber: 4, partTitle: 'Setting Up Arc Length Integrals' },
    { partNumber: 5, partTitle: 'Surface Area of Revolution' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
