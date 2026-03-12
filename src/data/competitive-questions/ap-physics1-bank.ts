// AP Physics 1 question bank for competitive mode

export interface ApPhysics1Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: ApPhysics1Question[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'What is Newton\'s Second Law of Motion?',
    options: ['$F = ma$', '$F = mv$', '$E = mc^2$', '$p = mv$'],
    correctAnswer: 0,
    explanation: 'Newton\'s Second Law states that net force equals mass times acceleration: $\\vec{F}_{net} = m\\vec{a}$.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'What is the SI unit of force?',
    options: ['Newton (N)', 'Joule (J)', 'Watt (W)', 'Pascal (Pa)'],
    correctAnswer: 0,
    explanation: 'The Newton (N) = kg·m/s² is the SI unit of force.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What is the acceleration due to gravity near Earth\'s surface?',
    options: ['$9.8 \\text{ m/s}^2$', '$10.0 \\text{ m/s}^2$', '$6.67 \\text{ m/s}^2$', '$3.14 \\text{ m/s}^2$'],
    correctAnswer: 0,
    explanation: 'The acceleration due to gravity near Earth\'s surface is approximately $g = 9.8 \\text{ m/s}^2$.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'What is the kinetic energy of an object?',
    options: ['$KE = \\frac{1}{2}mv^2$', '$KE = mgh$', '$KE = Fd$', '$KE = mv$'],
    correctAnswer: 0,
    explanation: 'Kinetic energy is $KE = \\frac{1}{2}mv^2$, the energy of motion.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'What does Newton\'s First Law state?',
    options: ['An object in motion stays in motion unless acted upon by a net force', 'Every action has an equal and opposite reaction', 'Force equals mass times acceleration', 'Energy is conserved'],
    correctAnswer: 0,
    explanation: 'Newton\'s First Law (Law of Inertia) — an object maintains its state of motion unless a net external force acts on it.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'What is the formula for gravitational potential energy near Earth\'s surface?',
    options: ['$PE = mgh$', '$PE = \\frac{1}{2}mv^2$', '$PE = Fd$', '$PE = \\frac{GMm}{r}$'],
    correctAnswer: 0,
    explanation: 'Near Earth\'s surface, gravitational PE = $mgh$ where $h$ is height above reference level.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'What is the unit of power?',
    options: ['Watt (W)', 'Newton (N)', 'Joule (J)', 'Volt (V)'],
    correctAnswer: 0,
    explanation: 'Power is measured in Watts (W) = Joules/second.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'If a car travels at constant velocity, the net force on it is:',
    options: ['Zero', 'Equal to friction', 'Equal to engine force', 'Equal to gravity'],
    correctAnswer: 0,
    explanation: 'Constant velocity means zero acceleration, so by $F = ma$, the net force is zero.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 9,
    question: 'A 5 kg object accelerates at $3 \\text{ m/s}^2$. What is the net force?',
    options: ['$15$ N', '$1.67$ N', '$8$ N', '$2$ N'],
    correctAnswer: 0,
    explanation: '$F = ma = 5 \\times 3 = 15$ N.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'What is the impulse-momentum theorem?',
    options: ['$J = \\Delta p = F \\cdot \\Delta t$', '$J = ma$', '$J = mgh$', '$J = \\frac{1}{2}mv^2$'],
    correctAnswer: 0,
    explanation: 'Impulse equals the change in momentum: $J = F\\Delta t = m\\Delta v = \\Delta p$.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'Two objects collide and stick together. What type of collision is this?',
    options: ['Perfectly inelastic', 'Elastic', 'Perfectly elastic', 'Superelastic'],
    correctAnswer: 0,
    explanation: 'When objects stick together after collision, it is perfectly inelastic. Momentum is conserved but kinetic energy is not.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'What is the period of a simple pendulum?',
    options: ['$T = 2\\pi\\sqrt{L/g}$', '$T = 2\\pi\\sqrt{g/L}$', '$T = 2\\pi\\sqrt{m/k}$', '$T = 1/f$'],
    correctAnswer: 0,
    explanation: 'The period of a simple pendulum depends on length and gravity: $T = 2\\pi\\sqrt{L/g}$.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'What is the rotational analog of mass?',
    options: ['Moment of inertia', 'Torque', 'Angular momentum', 'Angular velocity'],
    correctAnswer: 0,
    explanation: 'Moment of inertia ($I$) is the rotational equivalent of mass — it resists changes in angular velocity.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'What is the condition for an object to be in static equilibrium?',
    options: ['Net force = 0 and net torque = 0', 'Net force = 0 only', 'Net torque = 0 only', 'Velocity = 0'],
    correctAnswer: 0,
    explanation: 'Static equilibrium requires both translational ($\\Sigma F = 0$) and rotational ($\\Sigma \\tau = 0$) equilibrium.',
    difficulty: 'medium',
  },
  {
    id: 15,
    question: 'A ball is launched at 45° above horizontal. What angle maximizes range on level ground?',
    options: ['45°', '30°', '60°', '90°'],
    correctAnswer: 0,
    explanation: 'Ignoring air resistance, 45° maximizes the horizontal range because it optimally balances horizontal velocity and time of flight.',
    difficulty: 'medium',
  },
  {
    id: 16,
    question: 'What happens to the frequency of a wave as it moves from one medium to another?',
    options: ['It stays the same', 'It increases', 'It decreases', 'It depends on the medium'],
    correctAnswer: 0,
    explanation: 'Frequency is determined by the source and does not change when a wave enters a new medium. Speed and wavelength change instead.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 17,
    question: 'A 2 kg block is on a frictionless incline at 30°. What is its acceleration down the incline?',
    options: ['$4.9 \\text{ m/s}^2$', '$9.8 \\text{ m/s}^2$', '$8.49 \\text{ m/s}^2$', '$2.45 \\text{ m/s}^2$'],
    correctAnswer: 0,
    explanation: '$a = g\\sin\\theta = 9.8 \\sin 30° = 9.8 \\times 0.5 = 4.9 \\text{ m/s}^2$. Mass cancels out.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'What is the angular momentum of a rotating disk with $I = 0.5 \\text{ kg·m}^2$ and $\\omega = 10 \\text{ rad/s}$?',
    options: ['$5 \\text{ kg·m}^2\\text{/s}$', '$50 \\text{ kg·m}^2\\text{/s}$', '$0.05 \\text{ kg·m}^2\\text{/s}$', '$20 \\text{ kg·m}^2\\text{/s}$'],
    correctAnswer: 0,
    explanation: '$L = I\\omega = 0.5 \\times 10 = 5 \\text{ kg·m}^2\\text{/s}$.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'In a standing wave, what is the distance between two adjacent nodes?',
    options: ['$\\lambda/2$', '$\\lambda$', '$\\lambda/4$', '$2\\lambda$'],
    correctAnswer: 0,
    explanation: 'Adjacent nodes are separated by half a wavelength ($\\lambda/2$).',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'A charged particle moves perpendicular to a magnetic field. What shape is its path?',
    options: ['Circle', 'Straight line', 'Parabola', 'Spiral'],
    correctAnswer: 0,
    explanation: 'The magnetic force $F = qvB$ is always perpendicular to velocity, causing uniform circular motion.',
    difficulty: 'hard',
  },
  {
    id: 21,
    question: 'What is the total mechanical energy of a satellite in circular orbit?',
    options: ['$E = -GMm/(2r)$', '$E = -GMm/r$', '$E = GMm/(2r)$', '$E = 0$'],
    correctAnswer: 0,
    explanation: 'Total energy = KE + PE = $GMm/(2r) + (-GMm/r) = -GMm/(2r)$. Negative total energy means bound orbit.',
    difficulty: 'hard',
  },
  {
    id: 22,
    question: 'What is Bernoulli\'s equation?',
    options: ['$P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$', '$PV = nRT$', '$F = PA$', '$\\Delta P = \\rho g \\Delta h$'],
    correctAnswer: 0,
    explanation: 'Bernoulli\'s equation expresses conservation of energy in fluid flow along a streamline.',
    difficulty: 'hard',
  },
  {
    id: 23,
    question: 'Two capacitors $C_1$ and $C_2$ are connected in series. What is the equivalent capacitance?',
    options: ['$\\frac{C_1 C_2}{C_1 + C_2}$', '$C_1 + C_2$', '$C_1 - C_2$', '$\\sqrt{C_1 C_2}$'],
    correctAnswer: 0,
    explanation: 'For capacitors in series: $1/C_{eq} = 1/C_1 + 1/C_2$, giving $C_{eq} = C_1 C_2 / (C_1 + C_2)$.',
    difficulty: 'hard',
  },
  {
    id: 24,
    question: 'An object is thrown upward at $20$ m/s. How high does it rise? (Use $g = 10 \\text{ m/s}^2$)',
    options: ['$20$ m', '$40$ m', '$10$ m', '$200$ m'],
    correctAnswer: 0,
    explanation: 'At max height, $v = 0$. Using $v^2 = v_0^2 - 2gh$: $0 = 400 - 20h$, so $h = 20$ m.',
    difficulty: 'hard',
  },
  {
    id: 25,
    question: 'What is the resonance condition for a pipe open at both ends?',
    options: ['$f_n = n \\cdot v/(2L)$ for $n = 1, 2, 3...$', '$f_n = n \\cdot v/(4L)$ for odd $n$ only', '$f_n = v/L$', '$f_n = n^2 v/(2L)$'],
    correctAnswer: 0,
    explanation: 'An open-open pipe supports all harmonics: $f_n = nv/(2L)$, where $n = 1, 2, 3, ...$.',
    difficulty: 'hard',
  },
]

export function getApPhysics1Questions(count: number = 10): ApPhysics1Question[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
