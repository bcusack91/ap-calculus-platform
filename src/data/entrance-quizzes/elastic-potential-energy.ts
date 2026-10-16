/**
 * Entrance Quiz — Elastic Potential Energy — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Hooke's Law
  {
    id: 'epe-ent-1a',
    question: 'Hanging a 0.60 kg mass from a spring stretches it 4.0 cm when the mass is at rest. What is the spring constant? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '15 N/m',
      '150 N/m',
      '24 N/m',
      '1.5 N/m',
    ],
    correctIndex: 1,
    explanation: 'At rest the spring force balances the weight: $kx = mg$, so $k = 6.0\\text{ N}/0.040\\text{ m} = 150$ N/m. Leaving the stretch in centimeters gives 1.5 N/m.',
    partNumber: 1,
    partTitle: 'Hooke\'s Law',
  },
  {
    id: 'epe-ent-1b',
    question: 'Students graph applied force versus stretch for springs A and B. Both graphs are straight lines through the origin, and A\'s slope is twice B\'s. Which statement is correct?',
    options: [
      'Spring A stores less energy than B does at the same stretch',
      'Spring B is stiffer, since it stretches farther for a given force',
      'Spring A is stiffer and needs twice the force for the same stretch',
      'Spring A stretches twice as far as B under the same force',
    ],
    correctIndex: 2,
    explanation: 'The slope of a force-versus-stretch graph is the spring constant $k$, so A has twice B\'s $k$. At equal stretch A needs twice the force (and stores twice the energy), and under equal force it stretches half as far.',
    partNumber: 1,
    partTitle: 'Hooke\'s Law',
  },
  // Part 2 — Elastic PE: $PE_s = \frac{1}{2}kx^2$
  {
    id: 'epe-ent-2a',
    question: 'A spring with $k = 300$ N/m is compressed 0.20 m. How much elastic potential energy does it store?',
    options: [
      '12 J',
      '60 J',
      '30 J',
      '6.0 J',
    ],
    correctIndex: 3,
    explanation: '$U_s = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(300)(0.20)^2 = 6.0$ J. Leaving out the $\\tfrac{1}{2}$ gives 12 J, and $kx$ (60) is a force in newtons, not an energy.',
    partNumber: 2,
    partTitle: 'Elastic PE: $PE_s = \\frac{1}{2}kx^2$',
  },
  {
    id: 'epe-ent-2b',
    question: 'A spring stores 5.0 J when stretched 2.0 cm. How much energy does it store when compressed 6.0 cm?',
    options: [
      '45 J',
      '5.0 J',
      '30 J',
      '15 J',
    ],
    correctIndex: 0,
    explanation: 'Elastic energy grows with the square of the displacement and does not depend on its direction. Three times the displacement gives $3^2 = 9$ times the energy: 45 J.',
    partNumber: 2,
    partTitle: 'Elastic PE: $PE_s = \\frac{1}{2}kx^2$',
  },
  // Part 3 — Work Done by Springs
  {
    id: 'epe-ent-3a',
    question: 'You slowly stretch a spring with $k = 200$ N/m from 0.10 m to 0.30 m beyond its natural length. How much work do you do?',
    options: [
      '4.0 J',
      '8.0 J',
      '16 J',
      '9.0 J',
    ],
    correctIndex: 1,
    explanation: 'The work equals the increase in stored energy: $\\tfrac{1}{2}(200)(0.30^2 - 0.10^2) = 100(0.08) = 8.0$ J, the trapezoid under the force-stretch line. Using $(0.20)^2$ for the change gives 4.0 J.',
    partNumber: 3,
    partTitle: 'Work Done by Springs',
  },
  {
    id: 'epe-ent-3b',
    question: 'To find the work needed to stretch a spring by $x$, why can\'t you simply multiply the final force $kx$ by the distance $x$?',
    options: [
      'The force stays constant but points against the stretch',
      'Spring force is conservative, so it does no work in a stretch',
      'It rises from zero as the spring stretches, averaging half of $kx$',
      'The work depends on how quickly the spring is stretched',
    ],
    correctIndex: 2,
    explanation: 'The spring force rises linearly from 0 to $kx$, so the work is the triangle under the force-stretch line, $\\tfrac{1}{2}kx^2$, which is the average force $kx/2$ times $x$.',
    partNumber: 3,
    partTitle: 'Work Done by Springs',
  },
  // Part 4 — Spring-Mass Systems
  {
    id: 'epe-ent-4a',
    question: 'A 0.50 kg block on a frictionless surface oscillates on a spring with $k = 200$ N/m and amplitude 0.10 m. What is the block\'s maximum acceleration?',
    options: [
      '$20\\text{ m/s}^2$',
      '$400\\text{ m/s}^2$',
      '$4.0\\text{ m/s}^2$',
      '$40\\text{ m/s}^2$',
    ],
    correctIndex: 3,
    explanation: 'The largest force is at the endpoints, $kA = 200(0.10) = 20$ N, so $a_{\\max} = 20/0.50 = 40\\text{ m/s}^2$. Forgetting the amplitude gives $k/m = 400$, which is not an acceleration.',
    partNumber: 4,
    partTitle: 'Spring-Mass Systems',
  },
  {
    id: 'epe-ent-4b',
    question: 'A block oscillates on a horizontal spring on a frictionless surface. Where are its acceleration and its speed largest?',
    options: [
      'Acceleration at the two endpoints, speed at the center',
      'Both of them at the center of the motion',
      'Both of them at the endpoints of the motion',
      'Speed at the endpoints, acceleration at the center',
    ],
    correctIndex: 0,
    explanation: 'The spring force, and so the acceleration, is proportional to the displacement, so it is largest at the endpoints and zero at the center. The block is momentarily at rest at the endpoints and fastest passing through equilibrium.',
    partNumber: 4,
    partTitle: 'Spring-Mass Systems',
  },
  // Part 5 — Energy in Spring-Mass Oscillations
  {
    id: 'epe-ent-5a',
    question: 'A 0.40 kg block oscillates on a horizontal spring with $k = 160$ N/m and amplitude 0.050 m. What is its speed when it is 0.030 m from equilibrium?',
    options: [
      '1.0 m/s',
      '0.80 m/s',
      '0.60 m/s',
      '0.40 m/s',
    ],
    correctIndex: 1,
    explanation: 'Energy conservation gives $\\tfrac{1}{2}mv^2 = \\tfrac{1}{2}k(A^2 - x^2)$, so $v = \\sqrt{400(0.0025 - 0.0009)} = 0.80$ m/s. The 1.0 m/s value is the maximum speed at equilibrium.',
    partNumber: 5,
    partTitle: 'Energy in Spring-Mass Oscillations',
  },
  {
    id: 'epe-ent-5b',
    question: 'A graph of a spring-mass system\'s potential energy versus position is an upward-opening U shape, and the system\'s mechanical energy $E$ is drawn as a level line across it. At which positions does the block momentarily stop?',
    options: [
      'Where the kinetic energy is at its largest value',
      'At the very bottom of the U, where the potential energy is zero',
      'Where the U rises to the height of $E$',
      'Halfway between the bottom of the U and its edges',
    ],
    correctIndex: 2,
    explanation: 'Kinetic energy is $E - U$, the gap between the line and the curve. It is zero where the curve reaches $E$, so those are the turning points; at the bottom of the U the block is moving fastest.',
    partNumber: 5,
    partTitle: 'Energy in Spring-Mass Oscillations',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'epe-ent-6a',
    question: 'A 1.5 kg block sliding at 4.0 m/s on a frictionless surface runs into a spring with $k = 600$ N/m. What is the spring\'s maximum compression?',
    options: [
      '0.020 m',
      '0.14 m',
      '0.040 m',
      '0.20 m',
    ],
    correctIndex: 3,
    explanation: 'All the kinetic energy, $\\tfrac{1}{2}(1.5)(4.0)^2 = 12$ J, becomes elastic energy: $\\tfrac{1}{2}(600)x^2 = 12$, so $x^2 = 0.040$ and $x = 0.20$ m. Leaving out the square root gives 0.040 m.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'epe-ent-6b',
    question: 'A spring with $k = 250$ N/m, compressed 0.20 m, launches a 0.50 kg block across a level floor with $\\mu_k = 0.25$. How far does the block slide after leaving the spring before it stops? Use $g = 10\\text{ m/s}^2$ and treat the floor under the spring as frictionless.',
    options: [
      '4.0 m',
      '8.0 m',
      '40 m',
      '2.0 m',
    ],
    correctIndex: 0,
    explanation: 'The spring gives the block $\\tfrac{1}{2}(250)(0.20)^2 = 5.0$ J, and friction $\\mu_k mg = 1.25$ N removes it over $d = 5.0/1.25 = 4.0$ m. Dropping the $\\tfrac{1}{2}$ gives 8.0 m, and leaving $g$ out of the friction force gives 40 m.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'epe-ent-7a',
    question: 'Two blocks of masses $m$ and $4m$ are launched across a frictionless floor by identical springs compressed by the same amount. How do the blocks compare after launch?',
    options: [
      'Equal speeds, with the heavier block having four times the energy',
      'Equal kinetic energies, the lighter block twice as fast',
      'Equal speeds and equal kinetic energies for the two blocks',
      'The lighter block four times as fast, with equal energies',
    ],
    correctIndex: 1,
    explanation: 'Each spring releases the same $\\tfrac{1}{2}kx^2$, so the kinetic energies are equal. With $\\tfrac{1}{2}mv^2$ fixed, four times the mass means half the speed, so the lighter block moves twice as fast.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'epe-ent-7b',
    question: 'A spring with $k = 200$ N/m, compressed 0.10 m, launches a 0.20 kg ball up a frictionless ramp. How much higher than its starting point does the ball rise? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '1.0 m',
      '5.0 m',
      '0.50 m',
      '0.25 m',
    ],
    correctIndex: 2,
    explanation: 'The stored energy $\\tfrac{1}{2}(200)(0.10)^2 = 1.0$ J becomes gravitational energy $mgh$, so $h = 1.0/(0.20 \\times 10) = 0.50$ m. Leaving out the $\\tfrac{1}{2}$ gives 1.0 m.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Hooke\'s Law' },
    { partNumber: 2, partTitle: 'Elastic PE: $PE_s = \\frac{1}{2}kx^2$' },
    { partNumber: 3, partTitle: 'Work Done by Springs' },
    { partNumber: 4, partTitle: 'Spring-Mass Systems' },
    { partNumber: 5, partTitle: 'Energy in Spring-Mass Oscillations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
