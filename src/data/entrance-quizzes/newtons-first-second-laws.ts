import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Newton's First Law (Inertia)
  {
    id: 'n12-ent-1a',
    question: 'Newton\'s first law states that an object at rest stays at rest unless acted on by a:',
    options: ['Balanced force', 'Net external force', 'Gravitational force', 'Frictional force'],
    correctIndex: 1,
    explanation: 'Newton\'s first law (law of inertia) says an object maintains its state of motion unless a net external force acts on it.',
    partNumber: 1,
    partTitle: "Newton's First Law (Inertia)",
  },
  {
    id: 'n12-ent-1b',
    question: 'A book rests on a table. The net force on the book is zero. This is an example of:',
    options: ['Newton\'s first law', 'Newton\'s second law', 'Newton\'s third law', 'The law of gravitation'],
    correctIndex: 0,
    explanation: 'The book is at rest and remains at rest because the net force is zero (normal force balances gravity). This illustrates Newton\'s first law.',
    partNumber: 1,
    partTitle: "Newton's First Law (Inertia)",
  },

  // Part 2: Mass & Inertia
  {
    id: 'n12-ent-2a',
    question: 'Which quantity is the measure of an object\'s inertia?',
    options: ['Weight', 'Force', 'Mass', 'Acceleration'],
    correctIndex: 2,
    explanation: 'Mass is the measure of inertia — the resistance of an object to changes in its motion. More mass means more inertia.',
    partNumber: 2,
    partTitle: 'Mass & Inertia',
  },
  {
    id: 'n12-ent-2b',
    question: 'An astronaut with mass $80$ kg floats in the International Space Station. The astronaut\'s inertia is:',
    options: ['Zero because they are weightless', 'Less than on Earth', 'The same as on Earth', 'Greater than on Earth'],
    correctIndex: 2,
    explanation: 'Inertia depends on mass, not weight. The astronaut\'s mass (and inertia) is the same regardless of the gravitational environment.',
    partNumber: 2,
    partTitle: 'Mass & Inertia',
  },

  // Part 3: Newton's Second Law (F = ma)
  {
    id: 'n12-ent-3a',
    question: 'A $5$ kg object experiences a net force of $20$ N. What is its acceleration?',
    options: ['$2$ m/s²', '$4$ m/s²', '$25$ m/s²', '$100$ m/s²'],
    correctIndex: 1,
    explanation: '$a = F_{net}/m = 20/5 = 4$ m/s².',
    partNumber: 3,
    partTitle: "Newton's Second Law",
  },
  {
    id: 'n12-ent-3b',
    question: 'If the net force on an object doubles while mass stays constant, the acceleration:',
    options: ['Halves', 'Stays the same', 'Doubles', 'Quadruples'],
    correctIndex: 2,
    explanation: 'From $F = ma$, acceleration is directly proportional to net force when mass is constant. Doubling force doubles acceleration.',
    partNumber: 3,
    partTitle: "Newton's Second Law",
  },

  // Part 4: Weight & Normal Force
  {
    id: 'n12-ent-4a',
    question: 'What is the weight of a $10$ kg object near Earth\'s surface? (Use $g = 9.8$ m/s².)',
    options: ['$10$ N', '$98$ N', '$0.98$ N', '$980$ N'],
    correctIndex: 1,
    explanation: 'Weight $= mg = 10 \\times 9.8 = 98$ N.',
    partNumber: 4,
    partTitle: 'Weight & Normal Force',
  },
  {
    id: 'n12-ent-4b',
    question: 'A person stands in an elevator accelerating upward. The normal force from the floor is:',
    options: [
      'Equal to their weight',
      'Less than their weight',
      'Greater than their weight',
      'Zero',
    ],
    correctIndex: 2,
    explanation: 'When accelerating upward, $N - mg = ma$ so $N = m(g + a) > mg$. The normal force exceeds the weight (the person feels heavier).',
    partNumber: 4,
    partTitle: 'Weight & Normal Force',
  },

  // Part 5: Free-Body Diagrams
  {
    id: 'n12-ent-5a',
    question: 'In a free-body diagram, which forces act on a box sliding across a rough horizontal surface?',
    options: [
      'Gravity, normal, applied force, friction',
      'Gravity and normal only',
      'Applied force and friction only',
      'Gravity, friction, and applied force only',
    ],
    correctIndex: 0,
    explanation: 'All contact and field forces on the object are shown: gravity (down), normal (up), applied force (horizontal), and kinetic friction (opposing motion).',
    partNumber: 5,
    partTitle: 'Free-Body Diagrams',
  },
  {
    id: 'n12-ent-5b',
    question: 'On a free-body diagram, all force arrows should originate from:',
    options: ['The ground', 'The surface of contact', 'The center of the object', 'Outside the object'],
    correctIndex: 2,
    explanation: 'In a free-body diagram, force vectors are drawn originating from the center of mass of the object being analyzed.',
    partNumber: 5,
    partTitle: 'Free-Body Diagrams',
  },

  // Part 6: Applying F = ma
  {
    id: 'n12-ent-6a',
    question: 'Two forces act on a $3$ kg object: $12$ N east and $4$ N west. What is the acceleration?',
    options: ['$\\frac{8}{3}$ m/s² east', '$\\frac{16}{3}$ m/s² east', '$4$ m/s² west', '$\\frac{8}{3}$ m/s² west'],
    correctIndex: 0,
    explanation: '$F_{net} = 12 - 4 = 8$ N east. $a = F_{net}/m = 8/3 \\approx 2.67$ m/s² east.',
    partNumber: 6,
    partTitle: 'Applying F = ma',
  },
  {
    id: 'n12-ent-6b',
    question: 'A $1000$ kg car accelerates from rest to $20$ m/s in $10$ s. What net force is required?',
    options: ['$1000$ N', '$2000$ N', '$10000$ N', '$20000$ N'],
    correctIndex: 1,
    explanation: '$a = \\Delta v/\\Delta t = 20/10 = 2$ m/s². $F = ma = 1000 \\times 2 = 2000$ N.',
    partNumber: 6,
    partTitle: 'Applying F = ma',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'n12-ent-7a',
    question: 'A skydiver reaches terminal velocity. At this point, the net force on the skydiver is:',
    options: ['Equal to their weight', 'Greater than zero downward', 'Zero', 'Dependent on altitude'],
    correctIndex: 2,
    explanation: 'At terminal velocity, the skydiver moves at constant speed. By Newton\'s first law, constant velocity means zero net force (air resistance equals weight).',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'n12-ent-7b',
    question: 'An object moves at constant velocity across a rough surface under an applied force. The applied force must:',
    options: [
      'Be greater than friction',
      'Equal the friction force',
      'Be less than friction',
      'Equal the weight of the object',
    ],
    correctIndex: 1,
    explanation: 'Constant velocity means zero acceleration, so net force is zero. The applied force must exactly balance friction.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Newton's First Law (Inertia)" },
    { partNumber: 2, partTitle: 'Mass & Inertia' },
    { partNumber: 3, partTitle: "Newton's Second Law" },
    { partNumber: 4, partTitle: 'Weight & Normal Force' },
    { partNumber: 5, partTitle: 'Free-Body Diagrams' },
    { partNumber: 6, partTitle: 'Applying F = ma' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
