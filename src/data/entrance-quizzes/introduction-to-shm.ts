import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: What is SHM?
  {
    id: 'shm-ent-1a',
    question: 'Simple harmonic motion (SHM) occurs when the restoring force is:',
    options: ['Constant', 'Proportional to displacement and opposite in direction', 'Proportional to velocity', 'Always perpendicular to motion'],
    correctIndex: 1,
    explanation: 'SHM requires a restoring force proportional to displacement and directed toward equilibrium: $F = -kx$.',
    partNumber: 1,
    partTitle: 'What is SHM?',
  },
  {
    id: 'shm-ent-1b',
    question: 'Which of the following is an example of simple harmonic motion?',
    options: ['A ball in free fall', 'A mass on a spring on a frictionless surface', 'A car accelerating on a highway', 'A satellite in circular orbit'],
    correctIndex: 1,
    explanation: 'A mass on a spring experiences a restoring force $F = -kx$, satisfying the condition for SHM (provided the spring obeys Hooke\'s law).',
    partNumber: 1,
    partTitle: 'What is SHM?',
  },

  // Part 2: Amplitude, Period & Frequency
  {
    id: 'shm-ent-2a',
    question: 'The amplitude of SHM is:',
    options: ['The total distance of one cycle', 'The maximum displacement from equilibrium', 'The time for one cycle', 'The speed at equilibrium'],
    correctIndex: 1,
    explanation: 'Amplitude ($A$) is the maximum displacement from the equilibrium position.',
    partNumber: 2,
    partTitle: 'Amplitude, Period & Frequency',
  },
  {
    id: 'shm-ent-2b',
    question: 'The period of a mass-spring system is $T = 2\\pi\\sqrt{m/k}$. If the mass is quadrupled, the period:',
    options: ['Doubles', 'Halves', 'Quadruples', 'Stays the same'],
    correctIndex: 0,
    explanation: '$T \\propto \\sqrt{m}$. Quadrupling $m$ gives $T \\to 2T$.',
    partNumber: 2,
    partTitle: 'Amplitude, Period & Frequency',
  },

  // Part 3: Position, Velocity & Acceleration in SHM
  {
    id: 'shm-ent-3a',
    question: 'In SHM, when displacement is at its maximum (±A), the velocity is:',
    options: ['Maximum', 'Zero', 'Equal to $A\\omega$', 'Undefined'],
    correctIndex: 1,
    explanation: 'At maximum displacement, the object momentarily stops and reverses. Velocity = 0 at $x = \\pm A$.',
    partNumber: 3,
    partTitle: 'Position, Velocity & Acceleration',
  },
  {
    id: 'shm-ent-3b',
    question: 'In SHM, the acceleration is maximum when:',
    options: ['The object is at equilibrium', 'The displacement is maximum', 'The velocity is maximum', 'The object is at the midpoint of its motion'],
    correctIndex: 1,
    explanation: 'Since $a = -\\omega^2 x$ and $F = -kx$, acceleration is maximum when $|x|$ is maximum (at $\\pm A$).',
    partNumber: 3,
    partTitle: 'Position, Velocity & Acceleration',
  },

  // Part 4: Mass-Spring Oscillator
  {
    id: 'shm-ent-4a',
    question: 'The period of a mass-spring system depends on:',
    options: ['Mass and amplitude', 'Mass and spring constant', 'Amplitude and spring constant', 'Only amplitude'],
    correctIndex: 1,
    explanation: '$T = 2\\pi\\sqrt{m/k}$. Period depends on mass and spring constant, NOT amplitude.',
    partNumber: 4,
    partTitle: 'Mass-Spring Oscillator',
  },
  {
    id: 'shm-ent-4b',
    question: 'A $0.5$ kg mass on a spring ($k = 200$ N/m) has a period of:',
    options: ['$\\pi/10$ s', '$\\pi/5$ s', '$\\pi$ s', '$2\\pi$ s'],
    correctIndex: 0,
    explanation: '$T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{0.5/200} = 2\\pi\\sqrt{1/400} = 2\\pi/20 = \\pi/10$ s.',
    partNumber: 4,
    partTitle: 'Mass-Spring Oscillator',
  },

  // Part 5: Simple Pendulum
  {
    id: 'shm-ent-5a',
    question: 'The period of a simple pendulum depends on:',
    options: ['Mass and length', 'Length and gravitational acceleration', 'Mass and amplitude', 'Only the mass'],
    correctIndex: 1,
    explanation: '$T = 2\\pi\\sqrt{L/g}$. The period depends on the length $L$ and $g$, but NOT on mass or small amplitude.',
    partNumber: 5,
    partTitle: 'Simple Pendulum',
  },
  {
    id: 'shm-ent-5b',
    question: 'A pendulum with $L = 1$ m on Earth ($g = 10$ m/s²) has a period of approximately:',
    options: ['$1$ s', '$2$ s', '$\\pi$ s', '$2\\pi$ s'],
    correctIndex: 1,
    explanation: '$T = 2\\pi\\sqrt{1/10} = 2\\pi\\sqrt{0.1} \\approx 2\\pi(0.316) \\approx 2$ s.',
    partNumber: 5,
    partTitle: 'Simple Pendulum',
  },

  // Part 6: Graphs of SHM
  {
    id: 'shm-ent-6a',
    question: 'The position vs. time graph of an object in SHM is:',
    options: ['A straight line', 'A parabola', 'A sinusoidal curve', 'An exponential curve'],
    correctIndex: 2,
    explanation: 'SHM produces sinusoidal motion: $x(t) = A\\cos(\\omega t + \\phi)$ or $A\\sin(\\omega t + \\phi)$.',
    partNumber: 6,
    partTitle: 'Graphs of SHM',
  },
  {
    id: 'shm-ent-6b',
    question: 'In an x-t graph of SHM, how are velocity and position related?',
    options: [
      'They are in phase',
      'Velocity leads position by $90°$ ($\\pi/2$ rad)',
      'They are exactly out of phase ($180°$)',
      'There is no fixed phase relationship',
    ],
    correctIndex: 1,
    explanation: 'If $x = A\\cos(\\omega t)$, then $v = -A\\omega\\sin(\\omega t)$. Velocity leads position by $\\pi/2$ — when $x = 0$, $|v|$ is maximum.',
    partNumber: 6,
    partTitle: 'Graphs of SHM',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'shm-ent-7a',
    question: 'Doubling the amplitude of a mass-spring system:',
    options: ['Doubles the period', 'Halves the frequency', 'Has no effect on the period', 'Quadruples the period'],
    correctIndex: 2,
    explanation: 'Period $T = 2\\pi\\sqrt{m/k}$ is independent of amplitude. Changing amplitude does not change the period.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'shm-ent-7b',
    question: 'A pendulum is taken to the Moon where $g$ is $1/6$ that of Earth. Its period:',
    options: ['Decreases', 'Stays the same', 'Increases by a factor of $\\sqrt{6}$', 'Increases by a factor of $6$'],
    correctIndex: 2,
    explanation: '$T = 2\\pi\\sqrt{L/g}$. If $g \\to g/6$, then $T \\to T\\sqrt{6}$. The pendulum swings more slowly on the Moon.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What is SHM?' },
    { partNumber: 2, partTitle: 'Amplitude, Period & Frequency' },
    { partNumber: 3, partTitle: 'Position, Velocity & Acceleration' },
    { partNumber: 4, partTitle: 'Mass-Spring Oscillator' },
    { partNumber: 5, partTitle: 'Simple Pendulum' },
    { partNumber: 6, partTitle: 'Graphs of SHM' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
