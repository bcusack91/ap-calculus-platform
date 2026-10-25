/**
 * Entrance Quiz — Forces, Work and Energy (ASVAB Mechanical Comprehension) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'
import { MC_CART_45_20 } from '@/data/asvab-figures/mc'

const P1 = 'Mechanical Comprehension on the ASVAB'
const P2 = 'Forces, Weight and Center of Gravity'
const P3 = 'Friction and Motion'
const P4 = 'Work, Energy and Power'
const P5 = 'Pressure and Properties of Materials'
const P6 = 'Forces and Energy Test Strategy and Traps'
const P7 = 'Forces, Work and Energy Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'mc-forces-motion-ent-1a',
    question: 'On the CAT-ASVAB, how many scored Mechanical Comprehension questions are there, and how long do you get?',
    options: ['10 questions in 6 minutes', '15 questions in 10 minutes', '15 questions in 22 minutes', '25 questions in 19 minutes'],
    correctIndex: 2,
    explanation: 'MC on the CAT-ASVAB is 15 scored questions in 22 minutes, about 1 1/2 minutes each. 25 in 19 minutes is the paper test, and 10 in 6 minutes is Shop Information.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'mc-forces-motion-ent-1b',
    question: 'Which Marine Corps line score includes Mechanical Comprehension?',
    options: ['CL (MK + VE)', 'GT (AR + MC + VE)', 'EL (GS + AR + MK + EI)', 'The AFQT'],
    correctIndex: 1,
    explanation: 'The Marine Corps GT score is AR + MC + VE, so MC directly affects it (unlike the Army GT, which is AR + VE). The AFQT uses only AR, MK, WK and PC.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2
  {
    id: 'mc-forces-motion-ent-2a',
    question: 'What is the net force on the cart in the figure?',
    figure: MC_CART_45_20.svg,
    figureAlt: MC_CART_45_20.alt,
    options: ['65 lb to the right', '25 lb to the left', '20 lb to the right', '25 lb to the right'],
    correctIndex: 3,
    explanation: 'Opposite forces subtract: $45 - 20 = 25$ lb, in the direction of the larger force (right).',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'mc-forces-motion-ent-2b',
    question: 'Which object is the hardest to tip over?',
    options: ['One with a high center of gravity and a narrow base', 'One with a low center of gravity and a wide base', 'One with a high center of gravity and a wide base', 'One with a low center of gravity and a narrow base'],
    correctIndex: 1,
    explanation: 'An object tips when its center of gravity passes the edge of its base. A low center of gravity over a wide base has the farthest to go, so it is the most stable.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3
  {
    id: 'mc-forces-motion-ent-3a',
    question: 'A book slides to the left across a table. Which way does friction from the table act on the book?',
    options: ['To the right', 'To the left', 'Straight down', 'Straight up'],
    correctIndex: 0,
    explanation: 'Friction acts along the surface, opposite the sliding, so it points right.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'mc-forces-motion-ent-3b',
    question: 'Which kind of friction is usually the smallest?',
    options: ['Static friction', 'Sliding friction', 'Rolling friction', 'Friction on rough concrete'],
    correctIndex: 2,
    explanation: 'Rolling friction is much smaller than sliding or static friction, which is why wheels and bearings make heavy loads easy to move.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4
  {
    id: 'mc-forces-motion-ent-4a',
    question: 'How much work is done lifting a $50$-lb sandbag $3$ feet straight up?',
    options: ['53 ft·lb', '150 ft·lb', '17 ft·lb', '1,500 ft·lb'],
    correctIndex: 1,
    explanation: 'Work = force × distance = $50 \\times 3 = 150$ ft·lb.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'mc-forces-motion-ent-4b',
    question: 'A child swings back and forth on a playground swing. Where is the child moving fastest?',
    options: ['At the lowest point of the swing', 'At the highest point toward the front', 'At the highest point toward the back', 'At the same speed everywhere'],
    correctIndex: 0,
    explanation: 'Potential energy turns into kinetic energy on the way down, so speed is greatest at the lowest point. At the top of each swing the child stops for an instant.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5
  {
    id: 'mc-forces-motion-ent-5a',
    question: 'A $100$-lb load rests on a base with an area of $25$ square inches. What pressure does it put on the floor?',
    options: ['2,500 psi', '75 psi', '4 psi', '125 psi'],
    correctIndex: 2,
    explanation: 'Pressure = force ÷ area = $100 \\div 25 = 4$ psi.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'mc-forces-motion-ent-5b',
    question: 'Which property allows copper to be drawn into long, thin wire?',
    options: ['Brittleness', 'Hardness', 'Elasticity', 'Ductility'],
    correctIndex: 3,
    explanation: 'Ductility is the ability to be drawn into wire. Brittle materials break instead, hardness resists scratching, and elasticity is springing back to shape.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6
  {
    id: 'mc-forces-motion-ent-6a',
    question: 'About how much time per question does the CAT-ASVAB allow on Mechanical Comprehension?',
    options: ['About 36 seconds', 'About 1 1/2 minutes', 'About 3 minutes', 'About 5 minutes'],
    correctIndex: 1,
    explanation: '22 minutes ÷ 15 questions is about 88 seconds, roughly 1 1/2 minutes per question. About 36 seconds is the Shop Information pace.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'mc-forces-motion-ent-6b',
    question: 'A soldier pushes hard against a concrete wall for a full minute, and the wall does not move. How much work does she do on the wall?',
    options: ['None', 'A great deal, since she pushed hard', 'Her push multiplied by 60 seconds', 'It depends on her weight'],
    correctIndex: 0,
    explanation: 'Work requires movement in the direction of the force. The wall did not move, so no work was done on it, even though she gets tired.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7
  {
    id: 'mc-forces-motion-ent-7a',
    question: 'A motor does $1{,}100$ ft·lb of work in $2$ seconds. What is its power? ($1$ hp $= 550$ ft·lb/s)',
    options: ['2 hp', '1/2 hp', '1 hp', '4 hp'],
    correctIndex: 2,
    explanation: 'Power $= 1{,}100 \\div 2 = 550$ ft·lb/s, which is $1$ horsepower.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'mc-forces-motion-ent-7b',
    question: 'Why do long steel bridges have expansion joints?',
    options: ['Steel expands in heat and needs room to grow', 'The joints let rainwater drain off the deck', 'The joints make the bridge lighter to carry', 'Steel shrinks permanently as it gets older'],
    correctIndex: 0,
    explanation: 'Steel expands when it warms and contracts when it cools. Expansion joints give the bridge room to change length without buckling or cracking.',
    partNumber: 7,
    partTitle: P7,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
