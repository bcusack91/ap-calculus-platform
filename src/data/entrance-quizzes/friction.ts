/**
 * Entrance Quiz — Friction — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Static vs Kinetic Friction
  {
    id: 'fr-ent-1a',
    question: 'An 8.0 kg crate rests on a level floor with $\\mu_s = 0.50$ and $\\mu_k = 0.30$. A worker pushes it horizontally with a 30 N force. What is the friction force on the crate? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '40 N',
      '24 N',
      '30 N',
      '0 N',
    ],
    correctIndex: 2,
    explanation: 'The maximum static friction is $\\mu_s mg = 0.50(80) = 40$ N, which exceeds the 30 N push, so the crate stays put and static friction matches the push: 30 N. The 40 N value is only the upper limit, and 24 N would apply only if the crate were sliding.',
    partNumber: 1,
    partTitle: 'Static vs Kinetic Friction',
  },
  {
    id: 'fr-ent-1b',
    question: 'You slowly increase a horizontal push on a heavy box until it just starts to slide, and then you keep pushing with that same force. What happens next?',
    options: [
      'It moves at constant speed, as friction rises to match',
      'It moves at constant speed, since the push equals friction',
      'It stops again, since kinetic friction is larger',
      'It speeds up, because kinetic friction is smaller than the push',
    ],
    correctIndex: 3,
    explanation: 'The push equals the maximum static friction $\\mu_s N$, but once sliding, friction drops to $\\mu_k N$, which is smaller. The net force is then forward, so the box accelerates.',
    partNumber: 1,
    partTitle: 'Static vs Kinetic Friction',
  },
  // Part 2 — Coefficient of Friction
  {
    id: 'fr-ent-2a',
    question: 'A 12 kg box is pushed across a level floor with a 50 N horizontal force. The coefficient of kinetic friction is 0.25. What is the box\'s acceleration? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '$1.7\\text{ m/s}^2$',
      '$4.2\\text{ m/s}^2$',
      '$2.5\\text{ m/s}^2$',
      '$3.9\\text{ m/s}^2$',
    ],
    correctIndex: 0,
    explanation: 'Friction is $\\mu_k mg = 0.25(120) = 30$ N, so $a = (50 - 30)/12 = 1.7\\text{ m/s}^2$. Ignoring friction gives 4.2, dividing the friction alone by the mass gives 2.5, and leaving $g$ out of the friction force gives 3.9.',
    partNumber: 2,
    partTitle: 'Coefficient of Friction',
  },
  {
    id: 'fr-ent-2b',
    question: 'A box slides across a floor at constant velocity when pushed horizontally with force $F$. An identical box is stacked on top of it. What horizontal push now keeps the stack sliding at constant velocity?',
    options: [
      '$F$',
      '$2F$',
      '$4F$',
      '$F/2$',
    ],
    correctIndex: 1,
    explanation: 'Doubling the weight doubles the normal force, so kinetic friction $\\mu_k N$ doubles, and the push must double to balance it. The coefficient depends on the surfaces, not on the load.',
    partNumber: 2,
    partTitle: 'Coefficient of Friction',
  },
  // Part 3 — Free Body Diagrams with Friction
  {
    id: 'fr-ent-3a',
    question: 'A 50 kg crate rides on the flat bed of a truck that accelerates forward at $2.0\\text{ m/s}^2$. The crate does not slip. What is the friction force on the crate?',
    options: [
      '500 N toward the truck\'s front',
      '100 N toward the back of the truck',
      '100 N toward the front of the truck',
      'Zero, as the crate does not slide',
    ],
    correctIndex: 2,
    explanation: 'The crate accelerates forward with the truck, so the net force on it must be $ma = 50(2.0) = 100$ N forward, and static friction is the only horizontal force. Static friction points wherever it must to prevent slipping.',
    partNumber: 3,
    partTitle: 'Free Body Diagrams with Friction',
  },
  {
    id: 'fr-ent-3b',
    question: 'A book slides across a level table at 4.0 m/s and comes to rest in 2.0 s with no other horizontal force acting. What is the coefficient of kinetic friction? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '0.40',
      '2.0',
      '0.067',
      '0.20',
    ],
    correctIndex: 3,
    explanation: 'The deceleration is $4.0/2.0 = 2.0\\text{ m/s}^2$. Friction is the only horizontal force, so $\\mu_k mg = ma$ and $\\mu_k = a/g = 0.20$; the mass cancels.',
    partNumber: 3,
    partTitle: 'Free Body Diagrams with Friction',
  },
  // Part 4 — Friction & Applied Forces
  {
    id: 'fr-ent-4a',
    question: 'A 20 kg box is pulled across a floor by a rope at $37^\\circ$ above the horizontal with a tension of 100 N ($\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$). The coefficient of kinetic friction is 0.40. What is the box\'s acceleration? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '$1.2\\text{ m/s}^2$',
      '$2.2\\text{ m/s}^2$',
      '$0.0\\text{ m/s}^2$',
      '$0.6\\text{ m/s}^2$',
    ],
    correctIndex: 0,
    explanation: 'The rope lifts with 60 N, so $N = 200 - 60 = 140$ N and $f_k = 0.40(140) = 56$ N. The horizontal pull is 80 N, so $a = (80 - 56)/20 = 1.2\\text{ m/s}^2$. Assuming $N = mg$ gives zero.',
    partNumber: 4,
    partTitle: 'Friction & Applied Forces',
  },
  {
    id: 'fr-ent-4b',
    question: 'You can move a heavy box either by pulling a rope at $30^\\circ$ above the horizontal or by pushing at $30^\\circ$ below the horizontal, using the same force either way. Which gives the box the greater acceleration, and why?',
    options: [
      'The downward push, because the push adds to the box\'s weight',
      'The upward pull, because it lowers the normal force and so the friction',
      'Neither, because the horizontal components are equal',
      'The downward push, since friction ignores the normal force',
    ],
    correctIndex: 1,
    explanation: 'Both have the same horizontal component, but the upward pull reduces $N$ (and thus $\\mu_k N$), while the downward push increases it. Less friction means a larger net force for the pull.',
    partNumber: 4,
    partTitle: 'Friction & Applied Forces',
  },
  // Part 5 — Finding $\mu$ Experimentally
  {
    id: 'fr-ent-5a',
    question: 'A student uses a spring scale to pull a 4.0 kg block across a level bench. The scale reads 8.0 N just as the block starts to move and 6.0 N while it slides at constant speed. What are the coefficients of friction? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '$\\mu_s = 2.0$, $\\mu_k = 1.5$',
      '$\\mu_s = 0.15$, $\\mu_k = 0.20$',
      '$\\mu_s = 0.20$, $\\mu_k = 0.15$',
      '$\\mu_s = 0.80$, $\\mu_k = 0.60$',
    ],
    correctIndex: 2,
    explanation: 'The starting reading is the maximum static friction and the constant-speed reading equals kinetic friction. Dividing each by the normal force, $mg = 40$ N, gives 0.20 and 0.15; dividing by the mass instead gives 2.0 and 1.5.',
    partNumber: 5,
    partTitle: 'Finding $\\mu$ Experimentally',
  },
  {
    id: 'fr-ent-5b',
    question: 'To find $\\mu_k$, a student tilts a ramp more and more until a block, given a small push, slides down at constant speed. What must she measure to find $\\mu_k$?',
    options: [
      'The length of the ramp',
      'The block\'s mass',
      'The block\'s speed',
      'The ramp angle',
    ],
    correctIndex: 3,
    explanation: 'At constant speed, $mg\\sin\\theta = \\mu_k mg\\cos\\theta$, so $\\mu_k = \\tan\\theta$. The mass cancels, and the speed and ramp length do not appear.',
    partNumber: 5,
    partTitle: 'Finding $\\mu$ Experimentally',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'fr-ent-6a',
    question: 'A 10 kg block rests on a level floor with $\\mu_s = 0.50$ and $\\mu_k = 0.30$. A horizontal 60 N force is applied. What is the block\'s acceleration? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '$3.0\\text{ m/s}^2$',
      '$6.0\\text{ m/s}^2$',
      '$0.0\\text{ m/s}^2$',
      '$1.0\\text{ m/s}^2$',
    ],
    correctIndex: 0,
    explanation: 'The 60 N push exceeds the maximum static friction of 50 N, so the block slides and kinetic friction (30 N) applies: $a = (60 - 30)/10 = 3.0\\text{ m/s}^2$. Using $\\mu_s$ for the sliding block gives 1.0.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'fr-ent-6b',
    question: 'A puck is given an initial speed of 6.0 m/s across a level floor where $\\mu_k = 0.30$. How far does it slide before stopping? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '12 m',
      '6.0 m',
      '3.0 m',
      '1.8 m',
    ],
    correctIndex: 1,
    explanation: 'The deceleration is $\\mu_k g = 3.0\\text{ m/s}^2$, and $v_0^2 = 2a\\Delta x$ gives $\\Delta x = 36/6.0 = 6.0$ m. Leaving out the factor of 2 gives 12 m.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'fr-ent-7a',
    question: 'A 20 kg crate and a 40 kg crate made of the same material slide across the same level floor, starting with the same speed. How do their stopping distances compare?',
    options: [
      'The 20 kg crate slides farther',
      'The 40 kg crate slides farther',
      'Each slides equally far',
      'The 40 kg crate slides half as far',
    ],
    correctIndex: 2,
    explanation: 'The friction force $\\mu_k mg$ grows in proportion to mass, so the deceleration $\\mu_k g$ is the same for both, and so is the stopping distance $v_0^2/(2\\mu_k g)$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'fr-ent-7b',
    question: 'An 8.0 kg block is pushed with a 40 N force directed $30^\\circ$ below the horizontal ($\\sin 30^\\circ = 0.5$, $\\cos 30^\\circ = 0.866$) across a floor with $\\mu_k = 0.25$. What is its acceleration? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '$1.8\\text{ m/s}^2$',
      '$4.3\\text{ m/s}^2$',
      '$2.5\\text{ m/s}^2$',
      '$1.2\\text{ m/s}^2$',
    ],
    correctIndex: 3,
    explanation: 'Pushing down raises the normal force to $80 + 20 = 100$ N, so $f_k = 25$ N. The horizontal push is $40(0.866) = 34.6$ N, giving $a = (34.6 - 25)/8.0 = 1.2\\text{ m/s}^2$. Using $N = mg$ gives 1.8.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Static vs Kinetic Friction' },
    { partNumber: 2, partTitle: 'Coefficient of Friction' },
    { partNumber: 3, partTitle: 'Free Body Diagrams with Friction' },
    { partNumber: 4, partTitle: 'Friction & Applied Forces' },
    { partNumber: 5, partTitle: 'Finding $\\mu$ Experimentally' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
