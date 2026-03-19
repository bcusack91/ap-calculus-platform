/**
 * Entrance Quiz — Vector-Valued Functions (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Vector Functions & Components
  { id: 'vvf-ent-1a', question: 'A vector-valued function $\\vec{r}(t)$ is written as:', options: ['$r(t)$', '$\\langle x(t), y(t) \\rangle$', '$(x, y)$', '$x(t) + y(t)$'], correctIndex: 1, explanation: '$\\vec{r}(t) = \\langle x(t), y(t) \\rangle$ gives position in component form.', partNumber: 1, partTitle: 'Vector Functions & Components' },
  { id: 'vvf-ent-1b', question: 'The path traced by $\\vec{r}(t) = \\langle \\cos t, \\sin t \\rangle$ is:', options: ['A line', 'A circle', 'A parabola', 'An ellipse'], correctIndex: 1, explanation: '$x^2 + y^2 = \\cos^2 t + \\sin^2 t = 1$: a unit circle.', partNumber: 1, partTitle: 'Vector Functions & Components' },

  // Part 2: Derivatives of Vector Functions
  { id: 'vvf-ent-2a', question: '$\\vec{r}\'(t) =$', options: ['$\\langle x(t), y(t) \\rangle$', '$\\langle x\'(t), y\'(t) \\rangle$', '$|\\vec{r}(t)|$', '$x\'(t) + y\'(t)$'], correctIndex: 1, explanation: 'Differentiate component-wise.', partNumber: 2, partTitle: 'Derivatives of Vector Functions' },
  { id: 'vvf-ent-2b', question: 'If $\\vec{r}(t) = \\langle t^2, e^t \\rangle$, then $\\vec{r}\'(t) =$', options: ['$\\langle 2t, e^t \\rangle$', '$\\langle t^2, e^t \\rangle$', '$\\langle 2, e^t \\rangle$', '$\\langle 2t, te^{t-1} \\rangle$'], correctIndex: 0, explanation: '$\\langle 2t, e^t \\rangle$.', partNumber: 2, partTitle: 'Derivatives of Vector Functions' },

  // Part 3: Velocity & Acceleration Vectors
  { id: 'vvf-ent-3a', question: 'The velocity vector is:', options: ['$\\vec{r}(t)$', '$\\vec{r}\'(t)$', '$\\vec{r}\'\'(t)$', '$|\\vec{r}\'(t)|$'], correctIndex: 1, explanation: 'Velocity $= \\vec{r}\'(t)$.', partNumber: 3, partTitle: 'Velocity & Acceleration Vectors' },
  { id: 'vvf-ent-3b', question: 'The acceleration vector is:', options: ['$\\vec{r}\'(t)$', '$\\vec{r}\'\'(t)$', '$|\\vec{r}\'(t)|$', '$\\vec{r}(t)$'], correctIndex: 1, explanation: 'Acceleration $= \\vec{v}\'(t) = \\vec{r}\'\'(t)$.', partNumber: 3, partTitle: 'Velocity & Acceleration Vectors' },

  // Part 4: Speed & Direction
  { id: 'vvf-ent-4a', question: 'Speed is the _____ of the velocity vector:', options: ['Direction', 'Magnitude', 'Derivative', 'Integral'], correctIndex: 1, explanation: 'Speed $= |\\vec{v}(t)| = \\sqrt{[x\'(t)]^2 + [y\'(t)]^2}$.', partNumber: 4, partTitle: 'Speed & Direction' },
  { id: 'vvf-ent-4b', question: 'If $\\vec{v}(t) = \\langle 3, 4 \\rangle$, the speed is:', options: ['$7$', '$5$', '$12$', '$\\sqrt{7}$'], correctIndex: 1, explanation: '$|\\vec{v}| = \\sqrt{9 + 16} = 5$.', partNumber: 4, partTitle: 'Speed & Direction' },

  // Part 5: Integration of Vector Functions
  { id: 'vvf-ent-5a', question: '$\\int \\vec{r}(t)\\,dt =$', options: ['$\\langle \\int x(t)\\,dt, \\int y(t)\\,dt \\rangle$', '$\\int [x(t) + y(t)]\\,dt$', '$|\\int \\vec{r}\\,dt|$', '$\\vec{r}\'(t)$'], correctIndex: 0, explanation: 'Integrate each component separately.', partNumber: 5, partTitle: 'Integration of Vector Functions' },
  { id: 'vvf-ent-5b', question: 'Given $\\vec{v}(t) = \\langle 2t, 3 \\rangle$ and $\\vec{r}(0) = \\langle 1, 0 \\rangle$, find $\\vec{r}(t)$:', options: ['$\\langle t^2 + 1, 3t \\rangle$', '$\\langle t^2, 3t \\rangle$', '$\\langle 2t + 1, 3 \\rangle$', '$\\langle 2, 0 \\rangle$'], correctIndex: 0, explanation: '$\\vec{r}(t) = \\langle t^2 + C_1, 3t + C_2 \\rangle$. Initial condition: $C_1 = 1, C_2 = 0$.', partNumber: 5, partTitle: 'Integration of Vector Functions' },

  // Part 6: Problem-Solving Workshop
  { id: 'vvf-ent-6a', question: 'Total distance traveled from $t = a$ to $t = b$:', options: ['$|\\vec{r}(b) - \\vec{r}(a)|$', '$\\int_a^b |\\vec{v}(t)|\\,dt$', '$\\int_a^b \\vec{v}(t)\\,dt$', '$|\\vec{v}(b) - \\vec{v}(a)|$'], correctIndex: 1, explanation: 'Distance $= \\int_a^b \\sqrt{[x\'(t)]^2+[y\'(t)]^2}\\,dt$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'vvf-ent-6b', question: 'Displacement from $t = a$ to $t = b$ is:', options: ['$\\int_a^b |\\vec{v}(t)|\\,dt$', '$\\vec{r}(b) - \\vec{r}(a)$', '$|\\vec{r}(b)|$', '$\\vec{v}(b) - \\vec{v}(a)$'], correctIndex: 1, explanation: 'Displacement vector $= \\vec{r}(b) - \\vec{r}(a)$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7: Review & AP Exam Applications
  { id: 'vvf-ent-7a', question: 'On the AP BC exam, vector problems often ask for:', options: ['Only position', 'Speed, velocity direction, distance traveled', 'Only velocity', 'Only arc length'], correctIndex: 1, explanation: 'Common: find velocity, speed, distance, and direction of motion.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'vvf-ent-7b', question: 'A particle is at rest when:', options: ['$|\\vec{r}(t)| = 0$', '$\\vec{v}(t) = \\langle 0, 0 \\rangle$', '$\\vec{a}(t) = \\langle 0, 0 \\rangle$', '$|\\vec{r}(t)| = 1$'], correctIndex: 1, explanation: 'At rest means velocity is the zero vector: both components are zero.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Vector Functions & Components' },
    { partNumber: 2, partTitle: 'Derivatives of Vector Functions' },
    { partNumber: 3, partTitle: 'Velocity & Acceleration Vectors' },
    { partNumber: 4, partTitle: 'Speed & Direction' },
    { partNumber: 5, partTitle: 'Integration of Vector Functions' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
