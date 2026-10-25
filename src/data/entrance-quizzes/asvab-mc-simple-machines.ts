/**
 * Entrance Quiz — Levers, Pulleys, Inclined Planes and Screws (ASVAB Mechanical Comprehension) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'
import { MC_LEVER_200, MC_TACKLE_6_600, MC_RAMP_20_5, MC_WHEEL_8_2, MC_TACKLE_3UP } from '@/data/asvab-figures/mc'

const P1 = 'Simple Machines and Mechanical Advantage'
const P2 = 'Levers'
const P3 = 'Pulleys'
const P4 = 'Inclined Planes and Wedges'
const P5 = 'Screws and Wheel and Axle'
const P6 = 'Simple Machines Test Strategy and Traps'
const P7 = 'Simple Machines Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'mc-simple-machines-ent-1a',
    question: 'A machine lets a soldier lift a $600$-lb load with a $150$-lb effort. What is its mechanical advantage?',
    options: ['450', '4', '750', '1/4'],
    correctIndex: 1,
    explanation: 'MA = load ÷ effort = $600 \\div 150 = 4$.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'mc-simple-machines-ent-1b',
    question: 'Which of these is NOT one of the six classic simple machines?',
    options: ['Wedge', 'Screw', 'Pulley', 'Spring'],
    correctIndex: 3,
    explanation: 'The six simple machines are the lever, pulley, wheel and axle, inclined plane, wedge and screw. A spring stores energy but is not one of them.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2
  {
    id: 'mc-simple-machines-ent-2a',
    question: 'In a first-class lever, what is located between the other two parts?',
    options: ['The fulcrum', 'The load', 'The effort', 'Nothing; all three are at one end'],
    correctIndex: 0,
    explanation: 'First class = fulcrum in the middle (seesaw, crowbar). Load in the middle is second class; effort in the middle is third class.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'mc-simple-machines-ent-2b',
    question: 'In the figure, what effort balances the $200$-lb load on the lever?',
    figure: MC_LEVER_200.svg,
    figureAlt: MC_LEVER_200.alt,
    options: ['1,000 lb', '50 lb', '40 lb', '200 lb'],
    correctIndex: 2,
    explanation: 'effort × $5$ = $200 \\times 1$, so effort $= 40$ lb.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3
  {
    id: 'mc-simple-machines-ent-3a',
    question: 'What is the ideal mechanical advantage of a single movable pulley?',
    options: ['1', '2', '1/2', '4'],
    correctIndex: 1,
    explanation: 'The load on a single movable pulley hangs from two rope segments, so MA $= 2$. A single fixed pulley has MA $1$.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'mc-simple-machines-ent-3b',
    question: 'What is the ideal effort for the pulley system in the figure?',
    figure: MC_TACKLE_6_600.svg,
    figureAlt: MC_TACKLE_6_600.alt,
    options: ['3,600 lb', '60 lb', '594 lb', '100 lb'],
    correctIndex: 3,
    explanation: 'Effort = load ÷ number of supporting segments = $600 \\div 6 = 100$ lb.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4
  {
    id: 'mc-simple-machines-ent-4a',
    question: 'What is the ideal mechanical advantage of the ramp in the figure?',
    figure: MC_RAMP_20_5.svg,
    figureAlt: MC_RAMP_20_5.alt,
    options: ['4', '100', '15', '1/4'],
    correctIndex: 0,
    explanation: 'Ramp MA = length ÷ height = $20 \\div 5 = 4$.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'mc-simple-machines-ent-4b',
    question: 'Which of these is a wedge?',
    options: ['A doorknob', 'An axe head', 'A flagpole pulley', 'A jackscrew'],
    correctIndex: 1,
    explanation: 'An axe head is a wedge: a moving inclined plane that pushes material apart. A doorknob is a wheel and axle, a flagpole uses a fixed pulley, and a jackscrew is a screw.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5
  {
    id: 'mc-simple-machines-ent-5a',
    question: 'What is the mechanical advantage when you turn the wheel in the figure?',
    figure: MC_WHEEL_8_2.svg,
    figureAlt: MC_WHEEL_8_2.alt,
    options: ['16', '6', '4', '1/4'],
    correctIndex: 2,
    explanation: 'MA = wheel radius ÷ axle radius = $8 \\div 2 = 4$.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'mc-simple-machines-ent-5b',
    question: 'A screw has a pitch of $\\frac{1}{8}$ inch. How many full turns move it $1$ inch?',
    options: ['1/8 turn', '4 turns', '16 turns', '8 turns'],
    correctIndex: 3,
    explanation: 'Each turn advances one pitch, so $1 \\div \\frac{1}{8} = 8$ turns.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6
  {
    id: 'mc-simple-machines-ent-6a',
    question: 'In the block and tackle shown, the free end of the rope leaves the moving (lower) block and is pulled upward. Should that segment be counted when finding the MA?',
    figure: MC_TACKLE_3UP.svg,
    figureAlt: MC_TACKLE_3UP.alt,
    options: ['Yes, it helps hold up the moving block', 'No, the free end never counts', 'Only if the rope is doubled', 'Only when the load is being lowered'],
    correctIndex: 0,
    explanation: 'Any segment pulling up on the moving block helps support it, including a free end that leaves the moving block going up. A free end that comes down from a fixed block does not count.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'mc-simple-machines-ent-6b',
    question: 'What do simple machines save?',
    options: ['Work', 'Energy', 'Force', 'Distance and force together'],
    correctIndex: 2,
    explanation: 'A machine lets you use less force, but you must apply it over a greater distance. The work (force × distance) is never reduced.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7
  {
    id: 'mc-simple-machines-ent-7a',
    question: 'Tweezers are squeezed in the middle, pivot at one end and grip at the other. What class of lever are they?',
    options: ['First class', 'Second class', 'Third class', 'Not a lever'],
    correctIndex: 2,
    explanation: 'The effort (your fingers) is in the middle, so tweezers are a third-class lever, which has an MA below 1.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'mc-simple-machines-ent-7b',
    question: 'An operator pulls $12$ feet of rope to raise a load $3$ feet with a pulley system. What is its ideal MA?',
    options: ['36', '4', '9', '1/4'],
    correctIndex: 1,
    explanation: 'Ideal MA = effort distance ÷ load distance = $12 \\div 3 = 4$.',
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
