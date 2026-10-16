/**
 * Entrance Quiz — Introduction to Simple Harmonic Motion — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — What Is SHM?
  {
    id: 'shm-ent-1a',
    question: 'An object\'s displacement from equilibrium is $x$. For which net force $F(x)$, with $k$ a positive constant, is the object\'s motion simple harmonic?',
    options: [
      '$F = -k$',
      '$F = -kx^2$',
      '$F = +kx$',
      '$F = -kx$',
    ],
    correctIndex: 3,
    explanation: 'SHM requires a restoring force proportional to the displacement and directed back toward equilibrium, $F = -kx$. A constant force or one growing with $x^2$ is not proportional, and $+kx$ pushes the object away from equilibrium.',
    partNumber: 1,
    partTitle: 'What Is SHM?',
  },
  {
    id: 'shm-ent-1b',
    question: 'A 0.40 kg block on a horizontal spring with $k = 80$ N/m is at $x = +0.050$ m from equilibrium. What is its acceleration at that instant?',
    options: [
      '$-10\\text{ m/s}^2$',
      '$+10\\text{ m/s}^2$',
      '$-4.0\\text{ m/s}^2$',
      '$-0.25\\text{ m/s}^2$',
    ],
    correctIndex: 0,
    explanation: '$a = -kx/m = -(80)(0.050)/0.40 = -10\\text{ m/s}^2$: directed back toward equilibrium, opposite the displacement. The $-4.0$ value is the force in newtons, not the acceleration.',
    partNumber: 1,
    partTitle: 'What Is SHM?',
  },
  // Part 2 — Mass-Spring System
  {
    id: 'shm-ent-2a',
    question: 'A 0.50 kg block oscillates on a spring with $k = 50$ N/m. What is the period of oscillation?',
    options: [
      '0.10 s',
      '0.63 s',
      '1.6 s',
      '63 s',
    ],
    correctIndex: 1,
    explanation: '$T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{0.010} = 0.63$ s. Leaving out the $2\\pi$ gives 0.10 s, and 1.6 s is the frequency in hertz mistaken for a period.',
    partNumber: 2,
    partTitle: 'Mass-Spring System',
  },
  {
    id: 'shm-ent-2b',
    question: 'A block on a spring oscillates with period $T$. Using the same spring, what mass would give a period of $T/2$?',
    options: [
      'Twice the mass',
      'Half the mass',
      'One-fourth the mass',
      'Four times as much',
    ],
    correctIndex: 2,
    explanation: '$T \\propto \\sqrt{m}$, so halving the period requires $m$ to be divided by $2^2 = 4$. Halving the mass would only divide the period by $\\sqrt{2}$.',
    partNumber: 2,
    partTitle: 'Mass-Spring System',
  },
  // Part 3 — The Simple Pendulum
  {
    id: 'shm-ent-3a',
    question: 'A simple pendulum is 2.45 m long. What is its period for small swings? Use $g = 9.8\\text{ m/s}^2$.',
    options: [
      '0.50 s',
      '0.32 s',
      '1.6 s',
      '3.1 s',
    ],
    correctIndex: 3,
    explanation: '$T = 2\\pi\\sqrt{L/g} = 2\\pi\\sqrt{0.25} = 3.1$ s. Leaving out the square root gives 1.6 s, and leaving out the $2\\pi$ gives 0.50 s.',
    partNumber: 3,
    partTitle: 'The Simple Pendulum',
  },
  {
    id: 'shm-ent-3b',
    question: 'A pendulum clock runs slow because its pendulum\'s period is slightly too long. Which adjustment fixes it?',
    options: [
      'Shorten the pendulum rod',
      'Lengthen the pendulum rod',
      'Attach a heavier bob to it',
      'Give it a larger amplitude',
    ],
    correctIndex: 0,
    explanation: 'The period $2\\pi\\sqrt{L/g}$ depends on the length, so a shorter rod gives a shorter period. The bob\'s mass has no effect, and a larger amplitude would, if anything, lengthen the period slightly.',
    partNumber: 3,
    partTitle: 'The Simple Pendulum',
  },
  // Part 4 — Position, Velocity, and Acceleration in SHM
  {
    id: 'shm-ent-4a',
    question: 'An object in SHM has position $x = (0.20\\text{ m})\\cos(4.0t)$, with $t$ in seconds. What is its maximum speed?',
    options: [
      '3.2 m/s',
      '0.80 m/s',
      '0.20 m/s',
      '0.050 m/s',
    ],
    correctIndex: 1,
    explanation: 'Here $A = 0.20$ m and $\\omega = 4.0$ rad/s, so $v_{\\max} = A\\omega = 0.80$ m/s. The 3.2 value is the maximum acceleration, $A\\omega^2$.',
    partNumber: 4,
    partTitle: 'Position, Velocity, and Acceleration in SHM',
  },
  {
    id: 'shm-ent-4b',
    question: 'A block on a horizontal spring oscillates between $x = -A$ and $x = +A$. Which describes the block at the instant it is at $x = -A$?',
    options: [
      'Zero velocity and zero acceleration',
      'Maximum speed, with zero acceleration',
      'Zero velocity, maximum acceleration in the + direction',
      'Zero velocity, maximum acceleration toward $-x$',
    ],
    correctIndex: 2,
    explanation: 'At an endpoint the block is momentarily at rest, and the restoring force is largest and points back toward equilibrium, which from $-A$ is the $+$ direction.',
    partNumber: 4,
    partTitle: 'Position, Velocity, and Acceleration in SHM',
  },
  // Part 5 — Amplitude, Period, and Frequency Relationships
  {
    id: 'shm-ent-5a',
    question: 'An oscillator vibrates at 4.0 Hz with an amplitude of 0.050 m. What is its maximum speed?',
    options: [
      '0.20 m/s',
      '0.63 m/s',
      '32 m/s',
      '1.3 m/s',
    ],
    correctIndex: 3,
    explanation: '$v_{\\max} = A\\omega = A(2\\pi f) = 0.050(25.1) = 1.3$ m/s. Using $f$ instead of $\\omega$ gives 0.20 m/s, and 32 is the maximum acceleration in $\\text{m/s}^2$.',
    partNumber: 5,
    partTitle: 'Amplitude, Period, and Frequency Relationships',
  },
  {
    id: 'shm-ent-5b',
    question: 'The amplitude of a block-spring oscillator is doubled, with the same block and spring. How do the period and the maximum speed change?',
    options: [
      'Same period, twice the maximum speed',
      'Period doubled, maximum speed unchanged',
      'Period and maximum speed both doubled',
      'Neither the period nor the maximum speed changes',
    ],
    correctIndex: 0,
    explanation: 'The period $2\\pi\\sqrt{m/k}$ does not depend on amplitude. With the same $\\omega$, $v_{\\max} = A\\omega$ doubles when $A$ doubles: the block covers twice the distance in the same time.',
    partNumber: 5,
    partTitle: 'Amplitude, Period, and Frequency Relationships',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'shm-ent-6a',
    question: 'A 0.80 kg block on a spring oscillates with a period of 0.40 s. What is the spring constant?',
    options: [
      '79 N/m',
      '200 N/m',
      '20 N/m',
      '31 N/m',
    ],
    correctIndex: 1,
    explanation: 'From $T = 2\\pi\\sqrt{m/k}$, $k = 4\\pi^2 m/T^2 = 39.5(0.80)/0.16 = 200$ N/m. Forgetting to square the period gives 79 N/m.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'shm-ent-6b',
    question: 'A pendulum clock that keeps correct time on Earth is taken to a planet where $g$ is four times as large. What happens?',
    options: [
      'The period halves, and the clock loses time',
      'The period doubles, and the clock loses time',
      'The period halves, and the clock runs fast',
      'Nothing changes, since the bob\'s mass is the same',
    ],
    correctIndex: 2,
    explanation: '$T = 2\\pi\\sqrt{L/g}$, so four times the $g$ halves the period. The pendulum ticks twice as often, so the clock runs fast and gains time.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'shm-ent-7a',
    question: 'A block on a horizontal spring and a simple pendulum both have a period of 1.0 s on Earth. Both are taken to a planet where $g$ is twice Earth\'s value. What are their periods there?',
    options: [
      'Spring 0.71 s, pendulum 1.0 s',
      'Spring 0.71 s, pendulum 0.71 s',
      'Spring 1.0 s, pendulum 1.4 s',
      'Spring 1.0 s, pendulum 0.71 s',
    ],
    correctIndex: 3,
    explanation: 'The spring\'s period $2\\pi\\sqrt{m/k}$ does not involve $g$, so it stays 1.0 s. The pendulum\'s period scales as $1/\\sqrt{g}$, so it becomes $1.0/\\sqrt{2} = 0.71$ s.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'shm-ent-7b',
    question: 'An object in SHM has a maximum speed of 1.5 m/s and a maximum acceleration of $6.0\\text{ m/s}^2$. What is its amplitude?',
    options: [
      '0.38 m',
      '4.0 m',
      '0.25 m',
      '9.0 m',
    ],
    correctIndex: 0,
    explanation: 'Dividing $a_{\\max} = A\\omega^2$ by $v_{\\max} = A\\omega$ gives $\\omega = 4.0$ rad/s, so $A = v_{\\max}/\\omega = 1.5/4.0 = 0.38$ m. The 4.0 value is $\\omega$ in rad/s.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What Is SHM?' },
    { partNumber: 2, partTitle: 'Mass-Spring System' },
    { partNumber: 3, partTitle: 'The Simple Pendulum' },
    { partNumber: 4, partTitle: 'Position, Velocity, and Acceleration in SHM' },
    { partNumber: 5, partTitle: 'Amplitude, Period, and Frequency Relationships' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
