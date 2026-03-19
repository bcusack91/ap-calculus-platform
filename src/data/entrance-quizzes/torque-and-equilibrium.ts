import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Torque Definition
  {
    id: 'te-ent-1a',
    question: 'Torque is calculated as:',
    options: ['$\\tau = Fr$', '$\\tau = Fr\\sin\\theta$', '$\\tau = Fr\\cos\\theta$', '$\\tau = F/r$'],
    correctIndex: 1,
    explanation: 'Torque $\\tau = rF\\sin\\theta$, where $\\theta$ is the angle between the position vector $r$ and the force $F$.',
    partNumber: 1,
    partTitle: 'Torque Definition',
  },
  {
    id: 'te-ent-1b',
    question: 'The SI unit of torque is:',
    options: ['Newton', 'Joule', 'Newton-meter', 'Watt'],
    correctIndex: 2,
    explanation: 'Torque has units of force × distance = N·m. Although dimensionally the same as a joule, torque is expressed in N·m to distinguish it from energy.',
    partNumber: 1,
    partTitle: 'Torque Definition',
  },

  // Part 2: Lever Arm
  {
    id: 'te-ent-2a',
    question: 'The lever arm is the:',
    options: [
      'Length of the object',
      'Distance from the pivot to where the force is applied',
      'Perpendicular distance from the pivot to the line of action of the force',
      'The force times the distance',
    ],
    correctIndex: 2,
    explanation: 'The lever arm (moment arm) is the perpendicular distance from the axis of rotation to the line of action of the force.',
    partNumber: 2,
    partTitle: 'Lever Arm',
  },
  {
    id: 'te-ent-2b',
    question: 'A force is applied at the end of a $0.5$ m wrench at $90°$ to the handle. If the force is $40$ N, the torque is:',
    options: ['$10$ N·m', '$20$ N·m', '$40$ N·m', '$80$ N·m'],
    correctIndex: 1,
    explanation: '$\\tau = rF\\sin 90° = 0.5 \\times 40 \\times 1 = 20$ N·m.',
    partNumber: 2,
    partTitle: 'Lever Arm',
  },

  // Part 3: Sign Convention for Torque
  {
    id: 'te-ent-3a',
    question: 'By convention, a counterclockwise torque is considered:',
    options: ['Negative', 'Positive', 'Zero', 'Undefined'],
    correctIndex: 1,
    explanation: 'By the right-hand rule convention, counterclockwise torques are positive and clockwise torques are negative.',
    partNumber: 3,
    partTitle: 'Sign Convention for Torque',
  },
  {
    id: 'te-ent-3b',
    question: 'Two forces act on a bar: $20$ N·m clockwise and $15$ N·m counterclockwise. The net torque is:',
    options: ['$35$ N·m CW', '$5$ N·m CW', '$5$ N·m CCW', '$35$ N·m CCW'],
    correctIndex: 1,
    explanation: 'Net torque = $-20 + 15 = -5$ N·m (negative = clockwise). The net torque is $5$ N·m clockwise.',
    partNumber: 3,
    partTitle: 'Sign Convention for Torque',
  },

  // Part 4: Conditions for Static Equilibrium
  {
    id: 'te-ent-4a',
    question: 'For an object to be in static equilibrium, which conditions must be met?',
    options: [
      'Net force = 0 only',
      'Net torque = 0 only',
      'Both net force = 0 and net torque = 0',
      'Velocity = 0 only',
    ],
    correctIndex: 2,
    explanation: 'Static equilibrium requires both translational equilibrium ($\\Sigma F = 0$) and rotational equilibrium ($\\Sigma \\tau = 0$).',
    partNumber: 4,
    partTitle: 'Conditions for Static Equilibrium',
  },
  {
    id: 'te-ent-4b',
    question: 'A uniform beam rests on two supports. The beam is in equilibrium. The sum of the upward support forces equals:',
    options: ['Zero', 'The weight of the beam', 'Half the weight', 'Twice the weight'],
    correctIndex: 1,
    explanation: 'By $\\Sigma F_y = 0$: the total upward normal forces from the supports must equal the downward weight of the beam.',
    partNumber: 4,
    partTitle: 'Conditions for Static Equilibrium',
  },

  // Part 5: Balancing Torques
  {
    id: 'te-ent-5a',
    question: 'A $4$ kg object sits $2$ m from a pivot. Where should a $2$ kg object be placed on the other side to balance?',
    options: ['$1$ m', '$2$ m', '$4$ m', '$8$ m'],
    correctIndex: 2,
    explanation: 'Balance: $m_1 r_1 = m_2 r_2$. $4(2) = 2(r_2)$. $r_2 = 4$ m.',
    partNumber: 5,
    partTitle: 'Balancing Torques',
  },
  {
    id: 'te-ent-5b',
    question: 'A seesaw has a $30$ kg child $2$ m from the pivot. A $20$ kg child must sit ______ from the pivot to balance.',
    options: ['$1.5$ m', '$2$ m', '$3$ m', '$4$ m'],
    correctIndex: 2,
    explanation: '$30 \\times 2 = 20 \\times d$. $d = 60/20 = 3$ m.',
    partNumber: 5,
    partTitle: 'Balancing Torques',
  },

  // Part 6: Center of Mass
  {
    id: 'te-ent-6a',
    question: 'The center of mass of a uniform symmetric object is located at:',
    options: ['The edge', 'The geometric center', 'The heaviest end', 'Outside the object'],
    correctIndex: 1,
    explanation: 'For a uniform object with symmetry, the center of mass is at the geometric center.',
    partNumber: 6,
    partTitle: 'Center of Mass',
  },
  {
    id: 'te-ent-6b',
    question: 'A $1$ kg mass is at $x = 0$ and a $3$ kg mass is at $x = 4$ m. Where is the center of mass?',
    options: ['$x = 1$ m', '$x = 2$ m', '$x = 3$ m', '$x = 4$ m'],
    correctIndex: 2,
    explanation: '$x_{cm} = (m_1 x_1 + m_2 x_2)/(m_1 + m_2) = (1(0) + 3(4))/(1+3) = 12/4 = 3$ m.',
    partNumber: 6,
    partTitle: 'Center of Mass',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'te-ent-7a',
    question: 'A ladder leans against a frictionless wall. The friction at the floor prevents sliding. If the ladder makes a steeper angle with the floor, the required friction force:',
    options: ['Increases', 'Decreases', 'Stays the same', 'Becomes zero'],
    correctIndex: 1,
    explanation: 'A steeper angle increases the lever arm of the weight about the base relative to the wall\'s normal force lever arm. This decreases the wall\'s normal force, which in turn decreases the required friction at the floor.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'te-ent-7b',
    question: 'An object can have zero net force but nonzero net torque. Such an object will:',
    options: [
      'Remain in equilibrium',
      'Translate without rotating',
      'Rotate without translating',
      'Both translate and rotate',
    ],
    correctIndex: 2,
    explanation: 'Zero net force means no translational acceleration. Nonzero net torque means angular acceleration. The object rotates in place without its center of mass accelerating.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Torque Definition' },
    { partNumber: 2, partTitle: 'Lever Arm' },
    { partNumber: 3, partTitle: 'Sign Convention for Torque' },
    { partNumber: 4, partTitle: 'Conditions for Static Equilibrium' },
    { partNumber: 5, partTitle: 'Balancing Torques' },
    { partNumber: 6, partTitle: 'Center of Mass' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
