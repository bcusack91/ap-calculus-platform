/**
 * MCAT Physics Mechanics Exit Quiz
 * Covers: kinematics, Newton's laws, work/energy, momentum, fluids, waves
 */

import type { MCATQuizQuestion } from './mcat-general-chemistry'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'A projectile is launched at 30° above the horizontal at 20 m/s. What is the horizontal component of its initial velocity?',
    options: ['10 m/s', '17.3 m/s', '14.1 m/s', '20 m/s'],
    correctAnswer: 1,
    explanation: 'vₓ = v₀cos(θ) = 20 × cos(30°) = 20 × 0.866 = 17.3 m/s. The horizontal velocity remains constant throughout the flight (ignoring air resistance).',
    difficulty: 'easy',
  },
  {
    question: 'A 5 kg box is pushed across a floor with a coefficient of kinetic friction of 0.3. What is the frictional force?',
    options: ['1.5 N', '15 N', '14.7 N', '50 N'],
    correctAnswer: 2,
    explanation: 'fk = μk × N = μk × mg = 0.3 × 5 × 9.8 = 14.7 N.',
    difficulty: 'easy',
  },
  {
    question: 'A ball is thrown straight up with an initial velocity of 20 m/s. How high does it go? (g = 10 m/s²)',
    options: ['10 m', '20 m', '40 m', '200 m'],
    correctAnswer: 1,
    explanation: 'Using v² = v₀² - 2gh, at max height v = 0: 0 = 400 - 2(10)h → h = 400/20 = 20 m.',
    difficulty: 'easy',
  },
  {
    question: 'Two objects collide and stick together. This is an example of:',
    options: ['Perfectly elastic collision', 'Perfectly inelastic collision', 'Explosive collision', 'Superelastic collision'],
    correctAnswer: 1,
    explanation: 'When objects stick together after collision, it is a perfectly inelastic collision. Momentum is conserved, but kinetic energy is not (maximum KE is lost).',
    difficulty: 'easy',
  },
  {
    question: 'A submarine is at a depth of 100 m in seawater (ρ = 1025 kg/m³). What is the gauge pressure? (g = 9.8 m/s²)',
    options: ['1.0 × 10⁶ Pa', '1.005 × 10⁶ Pa', '1.005 × 10⁵ Pa', '1.0 × 10⁵ Pa'],
    correctAnswer: 1,
    explanation: 'Gauge pressure = ρgh = 1025 × 9.8 × 100 = 1,004,500 Pa ≈ 1.005 × 10⁶ Pa. This is the pressure due to the water column above, not including atmospheric pressure.',
    difficulty: 'medium',
  },
  {
    question: 'According to Bernoulli\'s principle, as the speed of a fluid increases:',
    options: ['Pressure increases', 'Pressure decreases', 'Pressure remains constant', 'Density increases'],
    correctAnswer: 1,
    explanation: 'Bernoulli\'s equation: P + ½ρv² + ρgh = constant. At the same height, an increase in velocity (v) must be accompanied by a decrease in pressure (P).',
    difficulty: 'easy',
  },
  {
    question: 'A 2 kg object on a spring (k = 200 N/m) oscillates in simple harmonic motion. What is its period?',
    options: ['0.2π s', '0.1π s', 'π/5 s', '2π s'],
    correctAnswer: 2,
    explanation: 'T = 2π√(m/k) = 2π√(2/200) = 2π√(0.01) = 2π(0.1) = 0.2π = π/5 s ≈ 0.63 s.',
    difficulty: 'medium',
  },
  {
    question: 'A pulley system has a mechanical advantage of 4. If you pull the rope 8 m, how far does the load move?',
    options: ['2 m', '4 m', '8 m', '32 m'],
    correctAnswer: 0,
    explanation: 'Mechanical advantage = distance input / distance output. So distance output = distance input / MA = 8/4 = 2 m. Energy is conserved: less force over a longer distance.',
    difficulty: 'medium',
  },
  {
    question: 'What is the gravitational potential energy of a 3 kg object at a height of 10 m? (g = 10 m/s²)',
    options: ['30 J', '150 J', '300 J', '3000 J'],
    correctAnswer: 2,
    explanation: 'PE = mgh = 3 × 10 × 10 = 300 J.',
    difficulty: 'easy',
  },
  {
    question: 'An incompressible fluid flows through a pipe that narrows from cross-sectional area A₁ to A₂ = A₁/3. If v₁ = 2 m/s, what is v₂?',
    options: ['2/3 m/s', '2 m/s', '6 m/s', '18 m/s'],
    correctAnswer: 2,
    explanation: 'By the continuity equation: A₁v₁ = A₂v₂. So v₂ = A₁v₁/A₂ = A₁(2)/(A₁/3) = 6 m/s. Fluid speeds up when the pipe narrows.',
    difficulty: 'medium',
  },
  {
    question: 'A mass on a spring stores 50 J of elastic potential energy when compressed 0.5 m. What is the spring constant?',
    options: ['100 N/m', '200 N/m', '400 N/m', '800 N/m'],
    correctAnswer: 2,
    explanation: 'PE = ½kx². So k = 2PE/x² = 2(50)/(0.5)² = 100/0.25 = 400 N/m.',
    difficulty: 'medium',
  },
  {
    question: 'A sound wave has a frequency of 440 Hz and a wavelength of 0.77 m. What is its speed?',
    options: ['338.8 m/s', '571 m/s', '340 m/s', '572 Hz/m'],
    correctAnswer: 0,
    explanation: 'v = fλ = 440 × 0.77 = 338.8 m/s, which is approximately the speed of sound in air at room temperature.',
    difficulty: 'easy',
  },
  {
    question: 'A 1000 kg car accelerates from 0 to 30 m/s in 6 seconds. What is the average net force?',
    options: ['500 N', '5000 N', '180 N', '18000 N'],
    correctAnswer: 1,
    explanation: 'a = Δv/Δt = 30/6 = 5 m/s². F = ma = 1000 × 5 = 5000 N.',
    difficulty: 'easy',
  },
  {
    question: 'An object floats in water with 60% of its volume submerged. What is its density?',
    options: ['400 kg/m³', '600 kg/m³', '1000 kg/m³', '1667 kg/m³'],
    correctAnswer: 1,
    explanation: 'For a floating object, ρ_object/ρ_fluid = fraction submerged. So ρ_object = 0.6 × 1000 = 600 kg/m³.',
    difficulty: 'medium',
  },
  {
    question: 'The work done by gravity on a ball thrown horizontally from a cliff is:',
    options: ['Zero', 'mgh (where h is the height of the cliff)', 'Negative (opposes motion)', 'Depends on the horizontal velocity'],
    correctAnswer: 1,
    explanation: 'Work done by gravity = mgh, where h is the vertical displacement. Gravity acts vertically downward and the ball falls a height h, so W = mgh regardless of horizontal velocity.',
    difficulty: 'medium',
  },
]

export function generateExitQuiz(count: number = 10): ExitQuizQuestion[] {
  const shuffled = [...questionPool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `physics-mechanics-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: 'mcat-physics-mechanics',
  }))
}
