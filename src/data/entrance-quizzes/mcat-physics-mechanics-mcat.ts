/**
 * Entrance Quiz — Physics Mechanics (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'mpm-ent-1a', question: 'A ball is thrown horizontally from a cliff. Which of the following best describes its motion?', options: ['Constant velocity in both horizontal and vertical directions', 'Constant horizontal velocity and increasing vertical velocity (downward)', 'Decreasing horizontal velocity and constant vertical velocity', 'Constant speed throughout the fall'], correctIndex: 1, explanation: 'Projectile motion: horizontal velocity is constant (no air resistance), vertical velocity increases due to gravitational acceleration $(9.8 m/s^{2})$.', partNumber: 1, partTitle: 'Kinematics' },
  { id: 'mpm-ent-1b', question: 'An object starts from rest and accelerates uniformly at 4 $m/s^{2}$. How far does it travel in 3 seconds?', options: ['6 m', '12 m', '18 m', '36 m'], correctIndex: 2, explanation: '$d = \\frac{1}{2}at^2 = \\frac{1}{2}(4)(3^2) = \\frac{1}{2}(4)(9) = 18$ m.', partNumber: 1, partTitle: 'Kinematics' },
  { id: 'mpm-ent-2a', question: "Newton's Second Law states that the net force on an object equals:", options: ['Its mass times its velocity', 'Its mass times its acceleration ($F = ma$)', 'Its velocity divided by time', 'Its momentum divided by velocity'], correctIndex: 1, explanation: '$\\vec{F}_{net} = m\\vec{a}$. The net force causes acceleration proportional to mass. This is the cornerstone of classical mechanics.', partNumber: 2, partTitle: "Newton's Laws" },
  { id: 'mpm-ent-2b', question: "Newton's Third Law states that for every action force, there is:", options: ['A larger reaction force in the same direction', 'An equal and opposite reaction force', 'A smaller reaction force in the opposite direction', 'No reaction if the object is at rest'], correctIndex: 1, explanation: "Newton's 3rd Law: forces come in equal-magnitude, opposite-direction pairs. If A pushes B with force F, B pushes A with force −F.", partNumber: 2, partTitle: "Newton's Laws" },
  { id: 'mpm-ent-3a', question: 'The work-energy theorem states that the net work done on an object equals:', options: ['Its potential energy', 'Its change in kinetic energy ($W_{net} = \\Delta KE$)', 'Its total mechanical energy', 'Force times time'], correctIndex: 1, explanation: '$W_{net} = \\Delta KE = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$. Net work changes the kinetic energy of an object.', partNumber: 3, partTitle: 'Work & Energy' },
  { id: 'mpm-ent-3b', question: 'A 2 kg object is lifted 5 m above the ground. Its gravitational potential energy increase (g = 10 $m/s^{2}$) is:', options: ['10 J', '25 J', '100 J', '200 J'], correctIndex: 2, explanation: '$\\Delta PE = mgh = (2)(10)(5) = 100$ J. This energy is stored and can be converted to kinetic energy.', partNumber: 3, partTitle: 'Work & Energy' },
  { id: 'mpm-ent-4a', question: 'The impulse-momentum theorem states that impulse ($J = F \\cdot \\Delta t$) equals:', options: ['The change in kinetic energy', 'The change in momentum ($\\Delta p$)', 'The net work done', 'Mass times velocity squared'], correctIndex: 1, explanation: '$J = \\Delta p = m\\Delta v$. Impulse (force × time) equals the change in momentum. Used to analyze collisions and impacts.', partNumber: 4, partTitle: 'Momentum' },
  { id: 'mpm-ent-4b', question: 'In a perfectly elastic collision:', options: ['Kinetic energy is not conserved but momentum is', 'Both momentum and kinetic energy are conserved', 'Neither is conserved', 'Only kinetic energy is conserved'], correctIndex: 1, explanation: 'Elastic collisions conserve both total momentum and total kinetic energy. Inelastic collisions conserve momentum but not kinetic energy.', partNumber: 4, partTitle: 'Momentum' },
  { id: 'mpm-ent-5a', question: 'An object moving in uniform circular motion has a centripetal acceleration directed:', options: ['Tangentially in the direction of motion', 'Away from the center', 'Toward the center of the circle', 'Perpendicular to the radius but not toward center'], correctIndex: 2, explanation: 'Centripetal acceleration ($a_c = v^2/r$) always points toward the center of the circle, causing the continuous change in direction (not speed).', partNumber: 5, partTitle: 'Circular Motion' },
  { id: 'mpm-ent-5b', question: 'A satellite in circular orbit has its gravitational force providing the centripetal force. If the orbital radius doubles, the orbital speed:', options: ['Doubles', 'Halves', 'Decreases by a factor of $\\sqrt{2}$', 'Increases by $\\sqrt{2}$'], correctIndex: 2, explanation: '$F_g = \\frac{GMm}{r^2} = \\frac{mv^2}{r}$, so $v = \\sqrt{GM/r}$. If r doubles, $v \\propto 1/\\sqrt{r}$ decreases by $\\sqrt{2}$.', partNumber: 5, partTitle: 'Circular Motion' },
  { id: 'mpm-ent-6a', question: 'A 60 kg person stands on a scale in an elevator accelerating upward at 2 $m/s^{2}$ (g = 10 $m/s^{2}$). The scale reads:', options: ['480 N', '600 N', '720 N', '780 N'], correctIndex: 2, explanation: '$N = m(g + a) = 60(10 + 2) = 60(12) = 720$ N. Upward acceleration increases apparent weight.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mpm-ent-6b', question: 'A 4 kg block slides down a frictionless incline of 30°. The acceleration along the incline is (g = 10 $m/s^{2}$):', options: ['5 $m/s^{2}$', '8.66 $m/s^{2}$', '10 $m/s^{2}$', '40 $m/s^{2}$'], correctIndex: 0, explanation: 'On a frictionless incline: $a = g\\sin\\theta = 10\\sin(30°) = 10(0.5) = 5$ $m/s^{2}$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mpm-ent-7a', question: 'Simple harmonic motion (SHM) is characterized by a restoring force that is proportional to:', options: ['Velocity', 'Displacement from equilibrium', 'Acceleration squared', 'The square of time'], correctIndex: 1, explanation: "Hooke's Law: $F = -kx$. The restoring force is proportional to and opposite in direction to the displacement. Period $T = 2\\pi\\sqrt{m/k}$ for a spring-mass system.", partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'mpm-ent-7b', question: 'Which statement about static vs. kinetic friction is correct?', options: ['Kinetic friction is always greater than static friction', 'Static friction is always greater than kinetic friction', 'They are always equal', 'Static friction depends on velocity'], correctIndex: 1, explanation: 'The maximum static friction ($\\mu_s N$) is greater than kinetic friction ($\\mu_k N$): $\\mu_s > \\mu_k$. More force is needed to start motion than to maintain it.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Kinematics' },
    { partNumber: 2, partTitle: "Newton's Laws" },
    { partNumber: 3, partTitle: 'Work & Energy' },
    { partNumber: 4, partTitle: 'Momentum' },
    { partNumber: 5, partTitle: 'Circular Motion' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
