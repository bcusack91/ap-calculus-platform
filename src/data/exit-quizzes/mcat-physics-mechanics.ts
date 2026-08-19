/**
 * MCAT Physics Mechanics Exit Quiz
 * Covers: kinematics, Newton's laws, work/energy, momentum, fluids, waves
 */

import { authoredFor } from './mcat-authored-pool'
import type { MCATQuizQuestion } from './mcat-general-chemistry'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'A projectile is launched at 30° above the horizontal at 20 m/s. What is the horizontal component of its initial velocity?',
    options: ['10 m/s', '17.3 m/s', '14.1 m/s', '20 m/s'],
    correctAnswer: 1,
    explanation: '$v_{x}$ = $v_{0}\\cos (\\theta )$ = 20 × cos(30°) = 20 × 0.866 = 17.3 m/s. The horizontal velocity remains constant throughout the flight (ignoring air resistance).',
    difficulty: 'easy',
    subtopicSlug: 'mcat-physics-mechanics-kinematics-mcat',
  },
  {
    question: 'A 5 kg box is pushed across a floor with a coefficient of kinetic friction of 0.3. What is the frictional force? (g = 9.8 $m/s^{2}$)',
    options: ['1.5 N', '2.9 N', '14.7 N', '50 N'],
    correctAnswer: 2,
    explanation: 'fk = μk × N = μk × mg = 0.3 × 5 × 9.8 = 14.7 N.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-physics-mechanics-forces-newton-laws-mcat',
  },
  {
    question: 'A ball is thrown straight up with an initial velocity of 20 m/s. How high does it go? (g = 10 $m/s^{2}$)',
    options: ['10 m', '20 m', '40 m', '200 m'],
    correctAnswer: 1,
    explanation: 'Using $v^{2}$ = $v_{0}^{2}$ - 2gh, at max height v = 0: 0 = 400 - 2(10)h → h = 400/20 = 20 m.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-physics-mechanics-kinematics-mcat',
  },
  {
    question: 'Two objects collide and stick together. This is an example of:',
    options: ['Perfectly elastic collision', 'Perfectly inelastic collision', 'Explosive collision', 'Superelastic collision'],
    correctAnswer: 1,
    explanation: 'When objects stick together after collision, it is a perfectly inelastic collision. Momentum is conserved, but kinetic energy is not (maximum KE is lost).',
    difficulty: 'easy',
    subtopicSlug: 'mcat-physics-mechanics-momentum-collisions-mcat',
  },
  {
    question: 'A submarine is at a depth of 100 m in seawater (ρ = 1025 $kg/m^{3}$). What is the gauge pressure? (g = 9.8 $m/s^{2}$)',
    options: ['$1.106 \\times 10^{6}$ Pa', '$1.005 \\times 10^{6}$ Pa', '$2.01 \\times 10^{6}$ Pa', '$1.0 \\times 10^{5}$ Pa'],
    correctAnswer: 1,
    explanation: 'Gauge pressure = ρgh = 1025 × 9.8 × 100 = 1,004,500 Pa ≈ $1.005 \\times 10^{6}$ Pa. This is the pressure due to the water column above, not including atmospheric pressure.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-physics-mechanics-fluids-waves-mcat',
  },
  {
    question: 'According to Bernoulli\'s principle, as the speed of a fluid increases:',
    options: ['Pressure increases', 'Pressure decreases', 'Pressure remains constant', 'Density increases'],
    correctAnswer: 1,
    explanation: 'Bernoulli\'s equation: P + $\\tfrac{1}{2} \\rho v^{2}$ + ρgh = constant. At the same height, an increase in velocity (v) must be accompanied by a decrease in pressure (P).',
    difficulty: 'easy',
    subtopicSlug: 'mcat-physics-mechanics-fluids-waves-mcat',
  },
  {
    question: 'A 2 kg object on a spring (k = 200 N/m) oscillates in simple harmonic motion. What is its period?',
    options: ['20π s', '0.1π s', 'π/5 s', '2π s'],
    correctAnswer: 2,
    explanation: 'T = $2\\pi \\sqrt{m/k}$ = $2\\pi \\sqrt{2/200}$ = $2\\pi \\sqrt{0.01}$ = 2π(0.1) = π/5 s ≈ 0.63 s. Inverting the ratio (using k/m) gives 20π s, which is incorrect.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-physics-mechanics-fluids-waves-mcat',
  },
  {
    question: 'A pulley system has a mechanical advantage of 4. If you pull the rope 8 m, how far does the load move?',
    options: ['2 m', '4 m', '8 m', '32 m'],
    correctAnswer: 0,
    explanation: 'Mechanical advantage = distance input / distance output. So distance output = distance input / MA = 8/4 = 2 m. Energy is conserved: less force over a longer distance.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-physics-mechanics-work-energy-power-mcat',
  },
  {
    question: 'What is the gravitational potential energy of a 3 kg object at a height of 10 m? (g = 10 $m/s^{2}$)',
    options: ['30 J', '150 J', '300 J', '3000 J'],
    correctAnswer: 2,
    explanation: 'PE = mgh = 3 × 10 × 10 = 300 J.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-physics-mechanics-work-energy-power-mcat',
  },
  {
    question: 'An incompressible fluid flows through a pipe that narrows from cross-sectional area $A_{1}$ to $A_{2}$ = $A_{1}/3$. If $v_{1}$ = 2 m/s, what is $v_{2}$?',
    options: ['2/3 m/s', '2 m/s', '6 m/s', '18 m/s'],
    correctAnswer: 2,
    explanation: 'By the continuity equation: $A_{1}v_{1}$ = $A_{2}v_{2}$. So $v_{2}$ = $A_{1}v_{1}/A_{2}$ = $A_{1}(2)/(A_{1}/3)$ = 6 m/s. Fluid speeds up when the pipe narrows.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-physics-mechanics-fluids-waves-mcat',
  },
  {
    question: 'A mass on a spring stores 50 J of elastic potential energy when compressed 0.5 m. What is the spring constant?',
    options: ['100 N/m', '200 N/m', '400 N/m', '800 N/m'],
    correctAnswer: 2,
    explanation: 'PE = $\\tfrac{1}{2} kx^{2}$. So k = $2PE/x^{2}$ = $2(50)/(0.5)^{2}$ = 100/0.25 = 400 N/m.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-physics-mechanics-work-energy-power-mcat',
  },
  {
    question: 'A sound wave has a frequency of 440 Hz and a wavelength of 0.77 m. What is its speed?',
    options: ['338.8 m/s', '571 m/s', '272.8 m/s', '572 Hz/m'],
    correctAnswer: 0,
    explanation: 'v = fλ = 440 × 0.77 = 338.8 m/s, which is approximately the speed of sound in air at room temperature.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-physics-mechanics-fluids-waves-mcat',
  },
  {
    question: 'A 1000 kg car accelerates from 0 to 30 m/s in 6 seconds. What is the average net force?',
    options: ['500 N', '5000 N', '180 N', '18000 N'],
    correctAnswer: 1,
    explanation: 'a = Δv/Δt = 30/6 = 5 $m/s^{2}$. F = ma = 1000 × 5 = 5000 N.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-physics-mechanics-forces-newton-laws-mcat',
  },
  {
    question: 'An object floats in water with 60% of its volume submerged. What is its density?',
    options: ['400 $kg/m^{3}$', '600 $kg/m^{3}$', '1000 $kg/m^{3}$', '1667 $kg/m^{3}$'],
    correctAnswer: 1,
    explanation: 'For a floating object, ρ_object/ρ_fluid = fraction submerged. So ρ_object = 0.6 × 1000 = 600 $kg/m^{3}$.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-physics-mechanics-fluids-waves-mcat',
  },
  {
    question: 'The work done by gravity on a ball thrown horizontally from a cliff is:',
    options: ['Zero', 'mgh (where h is the height of the cliff)', 'Negative (opposes motion)', 'Depends on the horizontal velocity'],
    correctAnswer: 1,
    explanation: 'Work done by gravity = mgh, where h is the vertical displacement. Gravity acts vertically downward and the ball falls a height h, so W = mgh regardless of horizontal velocity.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-physics-mechanics-work-energy-power-mcat',
  },
  {
    question: 'A 2.0 kg block slides down a 30° incline for 4.0 m with μk = 0.20. What is its speed at the bottom? (g = 9.8 $m/s^{2}$)',
    options: ['4.3 m/s', '5.1 m/s', '6.8 m/s', '8.1 m/s'],
    correctAnswer: 1,
    explanation: 'Use work-energy: mgh − W_fr = $\\tfrac{1}{2} mv^{2}$. h = 4sin30° = 2 m, so mgh = (2.0)(9.8)(2) = 39.2 J. Friction force = μk·mg·cos30° = (0.20)(2.0)(9.8)(0.866) ≈ 3.39 N, so W_fr ≈ 3.39 × 4.0 = 13.6 J. Net KE = 39.2 − 13.6 = 25.6 J = $\\tfrac{1}{2} (2.0)v^{2}$ → v = $\\sqrt{25.6}$ ≈ 5.1 m/s.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-physics-mechanics-work-energy-power-mcat',
  },
  {
    question: 'A 0.15 kg ball moving at +8 m/s collides elastically head-on with a 0.30 kg ball initially at rest. What is the final velocity of the 0.15 kg ball?',
    options: ['+2.7 m/s', '+5.3 m/s', '−2.7 m/s', '−5.3 m/s'],
    correctAnswer: 2,
    explanation: 'For 1D elastic collision, v1f = (m1−m2)/(m1+m2) v1i = (0.15−0.30)/(0.45)×8 = −2.67 m/s.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-physics-mechanics-momentum-collisions-mcat',
  },
  {
    question: 'Water exits a horizontal pipe through a nozzle. If diameter decreases by factor of 2, by what factor does dynamic pressure $(1/2 \\rho v^{2})$ change?',
    options: ['2', '4', '8', '16'],
    correctAnswer: 3,
    explanation: 'Area scales with $d^{2}$, so halving diameter reduces area by 4; continuity gives velocity x4. Dynamic pressure scales with $v^{2}$, so it increases by 16.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-physics-mechanics-fluids-waves-mcat',
  },
]

// Deep pool: local questions + the authored competitive bank for this area
// (audit F1 — exit quizzes were ~18 questions; the bank holds 30-40 per subtopic).
const fullPool = [...questionPool, ...authoredFor(['mcat-physics-mechanics-', 'mcat-physics-waves-sound-'])]

export function generateExitQuiz(count: number = 10, topicSlug?: string): ExitQuizQuestion[] {
  const filteredPool = topicSlug
    ? fullPool.filter((q) => q.subtopicSlug === topicSlug)
    : fullPool
  const sourcePool = filteredPool.length > 0 ? filteredPool : fullPool
  const shuffled = [...sourcePool].sort(() => Math.random() - 0.5)

  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `physics-mechanics-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    difficulty: q.difficulty,
    explanation: q.explanation,
    category: q.subtopicSlug ?? 'mcat-physics-mechanics',
  }))
}
