/**
 * Entrance Quiz — AP Precalculus Unit 4: Parametric, Vectors, Matrices & Calculus On-Ramp
 * 14 questions · 7 parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Parametric Equations
  { id: 'pcu4-1a', question: 'Eliminate the parameter for $x = t-1, y = 2t$.', options: ['$y = 2x + 2$', '$y = 2x - 2$', '$y = x + 1$', '$y = x/2 + 1$'], correctIndex: 0, explanation: '$t = x+1$, so $y = 2(x+1) = 2x+2$.', partNumber: 1, partTitle: 'Parametric Equations' },
  { id: 'pcu4-1b', question: 'A particle has $x(t) = 3\\cos t$ and $y(t) = 3\\sin t$. Its path is:', options: ['Line', 'Circle of radius 3', 'Ellipse', 'Parabola'], correctIndex: 1, explanation: '$x^2 + y^2 = 9 \\Rightarrow$ circle radius 3.', partNumber: 1, partTitle: 'Parametric Equations' },

  // Part 2: Vector Basics
  { id: 'pcu4-2a', question: 'For $\\vec{u} = \\langle 5, 12\\rangle$, $\\|\\vec u\\|$ equals:', options: ['$13$', '$17$', '$144$', '$25$'], correctIndex: 0, explanation: '$\\sqrt{25 + 144} = 13$.', partNumber: 2, partTitle: 'Vector Basics' },
  { id: 'pcu4-2b', question: 'A unit vector in the direction of $\\langle 0, -7\\rangle$:', options: ['$\\langle 0, -1\\rangle$', '$\\langle 0, 1\\rangle$', '$\\langle 0, -7\\rangle$', '$\\langle 1, 0\\rangle$'], correctIndex: 0, explanation: 'Divide by magnitude 7 ⇒ $\\langle 0, -1\\rangle$.', partNumber: 2, partTitle: 'Vector Basics' },

  // Part 3: Vector Operations
  { id: 'pcu4-3a', question: 'For $\\vec u = \\langle 2, -1\\rangle, \\vec v = \\langle 3, 4\\rangle$, $\\vec u \\cdot \\vec v$ equals:', options: ['$2$', '$5$', '$10$', '$11$'], correctIndex: 0, explanation: '$(2)(3) + (-1)(4) = 6 - 4 = 2$.', partNumber: 3, partTitle: 'Vector Operations' },
  { id: 'pcu4-3b', question: 'Two nonzero vectors are perpendicular iff their dot product is:', options: ['Positive', 'Negative', 'Zero', 'One'], correctIndex: 2, explanation: '$\\vec u \\cdot \\vec v = \\|u\\|\\|v\\|\\cos\\theta$; $\\theta = 90° \\Rightarrow \\cos\\theta = 0$.', partNumber: 3, partTitle: 'Vector Operations' },

  // Part 4: Matrices
  { id: 'pcu4-4a', question: 'Determinant of $\\begin{pmatrix}3 & 2\\\\1 & 4\\end{pmatrix}$:', options: ['$10$', '$11$', '$5$', '$14$'], correctIndex: 0, explanation: '$3(4) - 2(1) = 10$.', partNumber: 4, partTitle: 'Matrices' },
  { id: 'pcu4-4b', question: 'A 2×2 matrix is invertible iff:', options: ['It is symmetric', 'Its determinant is nonzero', 'All entries are positive', 'It has equal rows'], correctIndex: 1, explanation: 'Nonzero determinant ⇔ invertible.', partNumber: 4, partTitle: 'Matrices' },

  // Part 5: Linear Transformations
  { id: 'pcu4-5a', question: 'The matrix $\\begin{pmatrix}1 & 0\\\\0 & -1\\end{pmatrix}$ corresponds to:', options: ['Reflection over the x-axis', 'Reflection over the y-axis', 'Rotation 90° CCW', 'Identity'], correctIndex: 0, explanation: 'It sends $(x,y) \\to (x,-y)$ — reflection across the x-axis.', partNumber: 5, partTitle: 'Linear Transformations' },
  { id: 'pcu4-5b', question: 'Multiplying $\\begin{pmatrix}2 & 0\\\\0 & 2\\end{pmatrix}$ by any vector $\\vec v$ produces:', options: ['Same vector', 'Vector with magnitude doubled', 'Zero vector', 'Reflected vector'], correctIndex: 1, explanation: 'Diagonal matrix with both entries 2 scales by factor 2.', partNumber: 5, partTitle: 'Linear Transformations' },

  // Part 6: Limits & Continuity (calculus on-ramp)
  { id: 'pcu4-6a', question: '$\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3}$ equals:', options: ['$0$', '$3$', '$6$', 'DNE'], correctIndex: 2, explanation: 'Factor: $(x-3)(x+3)/(x-3) = x+3 \\to 6$.', partNumber: 6, partTitle: 'Limits & Continuity' },
  { id: 'pcu4-6b', question: 'A function is continuous at $x=a$ when:', options: ['$f(a)$ exists', 'Limit exists at $a$', 'Limit at $a$ equals $f(a)$', '$f$ is differentiable at $a$'], correctIndex: 2, explanation: 'All three conditions: $f(a)$ defined, limit exists, and they are equal.', partNumber: 6, partTitle: 'Limits & Continuity' },

  // Part 7: Rates of Change (calculus on-ramp)
  { id: 'pcu4-7a', question: 'Average rate of change of $f(x) = x^2$ on $[1, 4]$:', options: ['$3$', '$5$', '$15$', '$9$'], correctIndex: 1, explanation: '$(16 - 1)/(4 - 1) = 15/3 = 5$.', partNumber: 7, partTitle: 'Rates of Change' },
  { id: 'pcu4-7b', question: 'Instantaneous rate of change at a point is best described as:', options: ['Slope of secant line', 'Slope of tangent line', 'Total area under curve', 'Average of all secants'], correctIndex: 1, explanation: 'Instantaneous rate of change = slope of tangent line.', partNumber: 7, partTitle: 'Rates of Change' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Parametric Equations' },
    { partNumber: 2, partTitle: 'Vector Basics' },
    { partNumber: 3, partTitle: 'Vector Operations' },
    { partNumber: 4, partTitle: 'Matrices' },
    { partNumber: 5, partTitle: 'Linear Transformations' },
    { partNumber: 6, partTitle: 'Limits & Continuity' },
    { partNumber: 7, partTitle: 'Rates of Change' },
  ]
}
