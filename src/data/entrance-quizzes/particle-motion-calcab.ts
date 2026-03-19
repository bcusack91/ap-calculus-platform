import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Position Velocity & Acceleration
  {
    id: 'pm-ent-1a',
    question: 'If $s(t)$ is position, then velocity is:',
    options: [
      '$s(t)$',
      '$s\'(t)$',
      '$s\'\'(t)$',
      '$\\int s(t)\\,dt$'
    ],
    correctIndex: 1,
    explanation: 'Velocity is the derivative of position: $v(t) = s\'(t)$.',
    partNumber: 1,
    partTitle: 'Position Velocity & Acceleration'
  },
  {
    id: 'pm-ent-1b',
    question: 'Acceleration is the derivative of:',
    options: [
      'Position',
      'Speed',
      'Velocity',
      'Distance'
    ],
    correctIndex: 2,
    explanation: '$a(t) = v\'(t) = s\'\'(t)$.',
    partNumber: 1,
    partTitle: 'Position Velocity & Acceleration'
  },

  // Part 2: Interpreting Motion from Graphs
  {
    id: 'pm-ent-2a',
    question: 'On a position-time graph, the slope represents:',
    options: [
      'Acceleration',
      'Velocity',
      'Speed',
      'Distance'
    ],
    correctIndex: 1,
    explanation: 'The slope of the position graph equals the velocity.',
    partNumber: 2,
    partTitle: 'Interpreting Motion from Graphs'
  },
  {
    id: 'pm-ent-2b',
    question: 'On a velocity-time graph, the area under the curve represents:',
    options: [
      'Acceleration',
      'Velocity change',
      'Displacement',
      'Speed'
    ],
    correctIndex: 2,
    explanation: '$\\int v(t)\\,dt$ gives displacement.',
    partNumber: 2,
    partTitle: 'Interpreting Motion from Graphs'
  },

  // Part 3: Speed vs Velocity
  {
    id: 'pm-ent-3a',
    question: 'Speed is the _____ of velocity:',
    options: [
      'Derivative',
      'Integral',
      'Absolute value',
      'Negative'
    ],
    correctIndex: 2,
    explanation: 'Speed $= |v(t)|$.',
    partNumber: 3,
    partTitle: 'Speed vs Velocity'
  },
  {
    id: 'pm-ent-3b',
    question: 'A particle speeds up when velocity and acceleration have:',
    options: [
      'Opposite signs',
      'The same sign',
      'Different magnitudes',
      'Zero values'
    ],
    correctIndex: 1,
    explanation: 'Speeding up occurs when $v$ and $a$ share the same sign.',
    partNumber: 3,
    partTitle: 'Speed vs Velocity'
  },

  // Part 4: Direction Changes
  {
    id: 'pm-ent-4a',
    question: 'A particle changes direction when:',
    options: [
      '$a(t) = 0$',
      '$v(t)$ changes sign',
      '$s(t) = 0$',
      '$v(t) > 0$'
    ],
    correctIndex: 1,
    explanation: 'Direction change occurs when velocity changes sign.',
    partNumber: 4,
    partTitle: 'Direction Changes'
  },
  {
    id: 'pm-ent-4b',
    question: 'If $v(t) = t^2 - 4$, for $t \\geq 0$ the particle changes direction at:',
    options: [
      '$t = 0$',
      '$t = 2$',
      '$t = 4$',
      '$t = -2$'
    ],
    correctIndex: 1,
    explanation: '$v(t) = 0$ when $t = 2$ (for $t \\geq 0$), and $v$ changes sign there.',
    partNumber: 4,
    partTitle: 'Direction Changes'
  },

  // Part 5: Total Distance vs Displacement
  {
    id: 'pm-ent-5a',
    question: 'Displacement from $t = a$ to $t = b$ is:',
    options: [
      '$\\int_a^b |v(t)|\\,dt$',
      '$\\int_a^b v(t)\\,dt$',
      '$v(b) - v(a)$',
      '$s(a) - s(b)$'
    ],
    correctIndex: 1,
    explanation: 'Displacement = $\\int_a^b v(t)\\,dt = s(b) - s(a)$.',
    partNumber: 5,
    partTitle: 'Total Distance vs Displacement'
  },
  {
    id: 'pm-ent-5b',
    question: 'Total distance traveled from $t = a$ to $t = b$ is:',
    options: [
      '$\\int_a^b v(t)\\,dt$',
      '$|s(b) - s(a)|$',
      '$\\int_a^b |v(t)|\\,dt$',
      '$s(b) + s(a)$'
    ],
    correctIndex: 2,
    explanation: 'Total distance $= \\int_a^b |v(t)|\\,dt$.',
    partNumber: 5,
    partTitle: 'Total Distance vs Displacement'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'pm-ent-6a',
    question: 'If $v(t)=3t^2-6t$, the displacement from $t=0$ to $t=3$ is:',
    options: [
      '$0$',
      '$9$',
      '$27$',
      '$-9$'
    ],
    correctIndex: 0,
    explanation: '$\\int_0^3(3t^2-6t)\\,dt = [t^3-3t^2]_0^3 = 0$. The particle returns to start.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'pm-ent-6b',
    question: 'At $t=1$, if $v(1)=-3$ and $a(1)=2$, the particle is:',
    options: [
      'Speeding up',
      'Slowing down',
      'At rest',
      'Moving right'
    ],
    correctIndex: 1,
    explanation: '$v<0$ and $a>0$: opposite signs → slowing down.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & AP Exam Applications
  {
    id: 'pm-ent-7a',
    question: 'A ball is thrown up with $v(t)=30-10t$. It reaches max height at:',
    options: [
      '$t=0$',
      '$t=3$',
      '$t=6$',
      '$t=10$'
    ],
    correctIndex: 1,
    explanation: '$v=0$ at $30-10t=0 \\Rightarrow t=3$.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications'
  },
  {
    id: 'pm-ent-7b',
    question: 'Position $s(t)=t^3-6t^2+9t$. The particle is at rest at:',
    options: [
      '$t=1$ and $t=3$',
      '$t=0$ and $t=3$',
      '$t=2$',
      '$t=3$ only'
    ],
    correctIndex: 0,
    explanation: '$v(t)=3t^2-12t+9=3(t-1)(t-3)=0$ at $t=1,3$.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Position Velocity & Acceleration' },
    { partNumber: 2, partTitle: 'Interpreting Motion from Graphs' },
    { partNumber: 3, partTitle: 'Speed vs Velocity' },
    { partNumber: 4, partTitle: 'Direction Changes' },
    { partNumber: 5, partTitle: 'Total Distance vs Displacement' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' }
  ]
}
