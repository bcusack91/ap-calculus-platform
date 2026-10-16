/**
 * Entrance Quiz — Energy in Simple Harmonic Motion — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Energy in Springs
  {
    id: 'eshm-ent-1a',
    question: 'A block oscillates on a spring with frequency $f$. A graph of its kinetic energy versus time is drawn. At what frequency does the kinetic energy oscillate?',
    options: [
      'Twice the frequency',
      'The same frequency as the motion',
      'Half the frequency of the motion',
      'Four times the frequency',
    ],
    correctIndex: 0,
    explanation: 'The kinetic energy peaks every time the block passes equilibrium, which happens twice per cycle (once in each direction), and it is zero at both endpoints. So it repeats at $2f$.',
    partNumber: 1,
    partTitle: 'Energy in Springs',
  },
  {
    id: 'eshm-ent-1b',
    question: 'A 0.50 kg block on a spring with $k = 200$ N/m oscillates with amplitude 0.10 m on a frictionless surface. What is its kinetic energy when it is 0.050 m from equilibrium?',
    options: [
      '0.25 J',
      '0.75 J',
      '0.50 J',
      '1.0 J',
    ],
    correctIndex: 1,
    explanation: 'The total energy is $\\tfrac{1}{2}(200)(0.10)^2 = 1.0$ J and the spring energy at 0.050 m is $\\tfrac{1}{2}(200)(0.050)^2 = 0.25$ J, leaving 0.75 J of kinetic energy. Halfway out does not mean half the energy, because $U_s \\propto x^2$.',
    partNumber: 1,
    partTitle: 'Energy in Springs',
  },
  // Part 2 — Total Energy $E = \frac{1}{2}kA^2$
  {
    id: 'eshm-ent-2a',
    question: 'An oscillator\'s spring constant is tripled and its amplitude is doubled. If its total energy was $E$, what is it now?',
    options: [
      '$4E$',
      '$6E$',
      '$12E$',
      '$3E$',
    ],
    correctIndex: 2,
    explanation: '$E = \\tfrac{1}{2}kA^2$: tripling $k$ multiplies the energy by 3 and doubling $A$ multiplies it by 4, for $12E$. Treating the amplitude as linear gives $6E$.',
    partNumber: 2,
    partTitle: 'Total Energy $E = \\frac{1}{2}kA^2$',
  },
  {
    id: 'eshm-ent-2b',
    question: 'A block oscillates on a spring. Which single change doubles the total mechanical energy of the oscillation?',
    options: [
      'Halving the spring constant at the same amplitude',
      'Doubling the amplitude with the same spring',
      'Doubling the mass at the same amplitude',
      'Doubling the spring constant at the same amplitude',
    ],
    correctIndex: 3,
    explanation: '$E = \\tfrac{1}{2}kA^2$ is proportional to $k$, so doubling $k$ at fixed $A$ doubles it. Doubling $A$ quadruples it, and the mass does not appear at all.',
    partNumber: 2,
    partTitle: 'Total Energy $E = \\frac{1}{2}kA^2$',
  },
  // Part 3 — Energy at Any Position
  {
    id: 'eshm-ent-3a',
    question: 'A 2.0 kg block on a spring with $k = 50$ N/m oscillates with amplitude 0.40 m. What is its speed when it is 0.24 m from equilibrium?',
    options: [
      '1.6 m/s',
      '2.0 m/s',
      '1.2 m/s',
      '0.80 m/s',
    ],
    correctIndex: 0,
    explanation: '$v = \\sqrt{(k/m)(A^2 - x^2)} = 5.0\\sqrt{0.16 - 0.0576} = 5.0(0.32) = 1.6$ m/s. The 2.0 m/s value is the maximum speed, reached only at equilibrium.',
    partNumber: 3,
    partTitle: 'Energy at Any Position',
  },
  {
    id: 'eshm-ent-3b',
    question: 'A block on a spring oscillates with amplitude $A$. What fraction of the total energy is kinetic when the block is at $x = 0.60A$?',
    options: [
      '0.36',
      '0.64',
      '0.40',
      '0.60',
    ],
    correctIndex: 1,
    explanation: 'The spring energy is $\\tfrac{1}{2}k(0.60A)^2 = 0.36E$, so the kinetic energy is $1 - 0.36 = 0.64$ of the total. Using $0.60$ directly ignores that energy depends on $x^2$.',
    partNumber: 3,
    partTitle: 'Energy at Any Position',
  },
  // Part 4 — Maximum Velocity $v_{\text{max}} = A\omega$
  {
    id: 'eshm-ent-4a',
    question: 'A block oscillates with amplitude 0.15 m and period 0.30 s. What is its maximum speed?',
    options: [
      '0.50 m/s',
      '1.6 m/s',
      '3.1 m/s',
      '66 m/s',
    ],
    correctIndex: 2,
    explanation: '$v_{\\max} = A\\omega = 2\\pi A/T = 2\\pi(0.15)/0.30 = 3.1$ m/s. Dividing the amplitude by the period gives 0.50 m/s, and 66 is the maximum acceleration in $\\text{m/s}^2$.',
    partNumber: 4,
    partTitle: 'Maximum Velocity $v_{\\text{max}} = A\\omega$',
  },
  {
    id: 'eshm-ent-4b',
    question: 'The block on a horizontal spring is replaced by one with twice the mass and released from the same amplitude. How do the total energy and maximum speed compare with before?',
    options: [
      'Less total energy, and a lower maximum speed',
      'More total energy, and the same maximum speed',
      'Identical energy and maximum speed',
      'Same energy, lower top speed',
    ],
    correctIndex: 3,
    explanation: 'The total energy $\\tfrac{1}{2}kA^2$ depends only on $k$ and $A$, so it is unchanged. With the same kinetic energy at equilibrium and twice the mass, the maximum speed is smaller by $\\sqrt{2}$.',
    partNumber: 4,
    partTitle: 'Maximum Velocity $v_{\\text{max}} = A\\omega$',
  },
  // Part 5 — Vertical Springs and Choosing the System
  {
    id: 'eshm-ent-5a',
    question: 'A 0.30 kg block hangs at rest from a spring with $k = 60$ N/m. It is pulled 0.040 m below that position and released. What is its speed as it passes the rest position? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '0.57 m/s',
      '1.3 m/s',
      '0.71 m/s',
      '0.32 m/s',
    ],
    correctIndex: 0,
    explanation: 'The block oscillates about its rest position with amplitude 0.040 m, so $v_{\\max} = A\\sqrt{k/m} = 0.040\\sqrt{200} = 0.57$ m/s. Using the total stretch from the relaxed length (0.090 m) as the amplitude gives 1.3 m/s.',
    partNumber: 5,
    partTitle: 'Vertical Springs and Choosing the System',
  },
  {
    id: 'eshm-ent-5b',
    question: 'A block oscillates on a vertical spring. As it rises from its lowest point to its equilibrium position, how do the energies of the block-spring-Earth system change?',
    options: [
      'Spring energy rises, gravitational falls, kinetic rises',
      'Spring energy falls, gravitational rises, kinetic rises',
      'Spring energy falls, gravitational falls, kinetic rises',
      'Spring energy falls, gravitational rises, kinetic falls',
    ],
    correctIndex: 1,
    explanation: 'The spring becomes less stretched (less elastic energy), the block gets higher (more gravitational energy), and it speeds up toward equilibrium (more kinetic energy). The spring\'s loss pays for both gains.',
    partNumber: 5,
    partTitle: 'Vertical Springs and Choosing the System',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'eshm-ent-6a',
    question: 'A 0.40 kg pendulum bob swings through its lowest point at 2.0 m/s. How high above the lowest point does it rise? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '0.40 m',
      '0.10 m',
      '0.20 m',
      '2.0 m',
    ],
    correctIndex: 2,
    explanation: 'All the kinetic energy becomes gravitational energy: $h = v^2/(2g) = 4.0/20 = 0.20$ m. Leaving out the 2 gives 0.40 m; the mass cancels.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'eshm-ent-6b',
    question: 'A block oscillates on a spring with amplitude $A$. At what displacement is its kinetic energy eight times its spring potential energy?',
    options: [
      '$A/9$',
      '$A/\\sqrt{8}$',
      '$A/8$',
      '$A/3$',
    ],
    correctIndex: 3,
    explanation: 'If $K = 8U$, then $U = E/9$, so $\\tfrac{1}{2}kx^2 = \\tfrac{1}{9}\\cdot\\tfrac{1}{2}kA^2$ and $x = A/3$. Setting $x/A$ equal to the energy fraction $1/9$ forgets the square.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'eshm-ent-7a',
    question: 'A 0.25 kg block on a spring oscillates with angular frequency 20 rad/s and amplitude 0.050 m. What is the total energy of the oscillation?',
    options: [
      '0.13 J',
      '0.25 J',
      '0.0063 J',
      '2.5 J',
    ],
    correctIndex: 0,
    explanation: '$E = \\tfrac{1}{2}m\\omega^2A^2 = \\tfrac{1}{2}(0.25)(400)(0.0025) = 0.13$ J (equivalently $k = m\\omega^2 = 100$ N/m and $E = \\tfrac{1}{2}kA^2$). Not squaring the amplitude gives 2.5 J.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'eshm-ent-7b',
    question: 'The amplitude of a block-spring oscillator is doubled. How do its maximum acceleration and its total energy change?',
    options: [
      'Maximum acceleration and total energy both double',
      'Acceleration doubles, total energy quadruples',
      'Maximum acceleration quadruples, total energy doubles',
      'Maximum acceleration is fixed, total energy quadruples',
    ],
    correctIndex: 1,
    explanation: '$a_{\\max} = kA/m$ is proportional to $A$, so it doubles, while $E = \\tfrac{1}{2}kA^2$ grows as $A^2$ and quadruples. The period, and so $\\omega$, does not change.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Energy in Springs' },
    { partNumber: 2, partTitle: 'Total Energy $E = \\frac{1}{2}kA^2$' },
    { partNumber: 3, partTitle: 'Energy at Any Position' },
    { partNumber: 4, partTitle: 'Maximum Velocity $v_{\\text{max}} = A\\omega$' },
    { partNumber: 5, partTitle: 'Vertical Springs and Choosing the System' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
