import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Centripetal Force Concept
  {
    id: 'cf-ent-1a',
    question: 'Centripetal force is:',
    options: [
      'A new type of force',
      'The net force directed toward the center of the circular path',
      'A force directed away from the center',
      'Only caused by gravity',
    ],
    correctIndex: 1,
    explanation: 'Centripetal force is not a new type of force — it is the net radial force directed toward the center, which can be provided by gravity, tension, friction, normal force, etc.',
    partNumber: 1,
    partTitle: 'Centripetal Force Concept',
  },
  {
    id: 'cf-ent-1b',
    question: 'The centripetal force on an object of mass $m$ moving at speed $v$ in a circle of radius $r$ is:',
    options: ['$mv/r$', '$mv^2/r$', '$mvr$', '$mr/v$'],
    correctIndex: 1,
    explanation: '$F_c = ma_c = mv^2/r$.',
    partNumber: 1,
    partTitle: 'Centripetal Force Concept',
  },

  // Part 2: Identifying the Source of Centripetal Force
  {
    id: 'cf-ent-2a',
    question: 'For a car turning on a flat road, the centripetal force is provided by:',
    options: ['Engine force', 'Normal force', 'Static friction', 'Gravity'],
    correctIndex: 2,
    explanation: 'On a flat road, static friction between the tires and the road provides the inward centripetal force needed for turning.',
    partNumber: 2,
    partTitle: 'Identifying the Source',
  },
  {
    id: 'cf-ent-2b',
    question: 'A ball swings on a string in a horizontal circle. The centripetal force is provided by:',
    options: [
      'Gravity',
      'The horizontal component of the string tension',
      'Air resistance',
      'The weight of the ball',
    ],
    correctIndex: 1,
    explanation: 'The horizontal component of the string tension pulls the ball toward the center, providing the centripetal force.',
    partNumber: 2,
    partTitle: 'Identifying the Source',
  },

  // Part 3: Centripetal Force Calculations
  {
    id: 'cf-ent-3a',
    question: 'A $0.5$ kg ball on a $2$ m string moves in a circle at $4$ m/s. What is the centripetal force?',
    options: ['$1$ N', '$2$ N', '$4$ N', '$8$ N'],
    correctIndex: 2,
    explanation: '$F_c = mv^2/r = 0.5(16)/2 = 4$ N.',
    partNumber: 3,
    partTitle: 'Centripetal Force Calculations',
  },
  {
    id: 'cf-ent-3b',
    question: 'A $1000$ kg car rounds a curve ($r = 50$ m) at $25$ m/s. What centripetal force is needed?',
    options: ['$500$ N', '$5000$ N', '$12{,}500$ N', '$50{,}000$ N'],
    correctIndex: 2,
    explanation: '$F_c = mv^2/r = 1000(625)/50 = 12{,}500$ N.',
    partNumber: 3,
    partTitle: 'Centripetal Force Calculations',
  },

  // Part 4: Banked Curves
  {
    id: 'cf-ent-4a',
    question: 'A banked curve allows a car to turn without relying on friction because:',
    options: [
      'The car weighs less on a bank',
      'The normal force has a horizontal component directed toward the center',
      'Gravity is stronger on a bank',
      'The car\'s engine pushes it inward',
    ],
    correctIndex: 1,
    explanation: 'On a banked curve, the normal force tilts inward. Its horizontal component provides the centripetal force, reducing dependence on friction.',
    partNumber: 4,
    partTitle: 'Banked Curves',
  },
  {
    id: 'cf-ent-4b',
    question: 'The ideal banking angle for a curve (no friction needed) depends on:',
    options: ['Mass only', 'Speed and radius', 'Mass and speed', 'Radius only'],
    correctIndex: 1,
    explanation: '$\\tan\\theta = v^2/(rg)$. The banking angle depends on speed and radius but is independent of mass.',
    partNumber: 4,
    partTitle: 'Banked Curves',
  },

  // Part 5: Vertical Circles
  {
    id: 'cf-ent-5a',
    question: 'At the top of a vertical circular loop, the minimum speed for maintaining contact requires that centripetal force equals:',
    options: ['Tension plus weight', 'Weight alone', 'Normal force alone', 'Zero'],
    correctIndex: 1,
    explanation: 'At the top, both gravity and the normal (or tension) force point toward the center. At minimum speed, normal/tension force is zero, so $mg = mv^2/r$, giving $v = \\sqrt{gr}$.',
    partNumber: 5,
    partTitle: 'Vertical Circles',
  },
  {
    id: 'cf-ent-5b',
    question: 'A roller coaster car at the bottom of a vertical loop has the normal force:',
    options: [
      'Less than the weight',
      'Equal to the weight',
      'Greater than the weight',
      'Directed downward',
    ],
    correctIndex: 2,
    explanation: 'At the bottom: $N - mg = mv^2/r$, so $N = mg + mv^2/r > mg$. The rider feels heavier.',
    partNumber: 5,
    partTitle: 'Vertical Circles',
  },

  // Part 6: Centrifugal "Force"
  {
    id: 'cf-ent-6a',
    question: 'The so-called "centrifugal force" is:',
    options: [
      'A real force that pushes objects outward',
      'A fictitious (pseudo) force that appears in a rotating reference frame',
      'Equal to the centripetal force',
      'The reaction force to centripetal force',
    ],
    correctIndex: 1,
    explanation: 'Centrifugal force is not a real force. It is a pseudo-force that appears only when analyzing motion from a rotating (non-inertial) reference frame.',
    partNumber: 6,
    partTitle: 'Centrifugal "Force"',
  },
  {
    id: 'cf-ent-6b',
    question: 'A passenger in a turning car feels pushed outward. This sensation is explained by:',
    options: [
      'A real outward force',
      'The passenger\'s inertia — they tend to move in a straight line',
      'Increased gravity during the turn',
      'Air pressure changes',
    ],
    correctIndex: 1,
    explanation: 'The passenger\'s body tends to continue in a straight line (inertia). The car turns inward, so relative to the car, the passenger feels pushed outward.',
    partNumber: 6,
    partTitle: 'Centrifugal "Force"',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'cf-ent-7a',
    question: 'If the speed of an object in circular motion doubles while the radius stays the same, the centripetal force:',
    options: ['Doubles', 'Triples', 'Quadruples', 'Halves'],
    correctIndex: 2,
    explanation: '$F_c = mv^2/r$. Doubling $v$ quadruples $v^2$, so $F_c$ quadruples.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'cf-ent-7b',
    question: 'The maximum speed for a car on a flat curve without sliding is $v = \\sqrt{\\mu_s g r}$. If the radius doubles, the maximum speed:',
    options: ['Doubles', 'Increases by a factor of $\\sqrt{2}$', 'Halves', 'Stays the same'],
    correctIndex: 1,
    explanation: '$v \\propto \\sqrt{r}$. Doubling $r$ multiplies $v$ by $\\sqrt{2}$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Centripetal Force Concept' },
    { partNumber: 2, partTitle: 'Identifying the Source' },
    { partNumber: 3, partTitle: 'Centripetal Force Calculations' },
    { partNumber: 4, partTitle: 'Banked Curves' },
    { partNumber: 5, partTitle: 'Vertical Circles' },
    { partNumber: 6, partTitle: 'Centrifugal "Force"' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
