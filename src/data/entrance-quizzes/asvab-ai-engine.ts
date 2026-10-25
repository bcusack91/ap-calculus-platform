/**
 * Entrance Quiz — Engines and Combustion (ASVAB Auto Information) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Auto Information on the ASVAB'
const P2 = 'Engine Parts: Block, Pistons, Crankshaft and Valves'
const P3 = 'The Four-Stroke Cycle'
const P4 = 'Ignition and Combustion'
const P5 = 'Lubrication and Engine Diagnosis'
const P6 = 'Engine Test Strategy and Common Traps'
const P7 = 'Mixed Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Auto Information on the ASVAB
  {
    id: 'ai-engine-ent-1a',
    question: 'On the CAT-ASVAB, how many scored questions and minutes does Auto Information give you?',
    options: ['15 questions in 10 minutes', '25 questions in 11 minutes', '10 questions in 7 minutes', '10 questions in 6 minutes'],
    correctIndex: 2,
    explanation: 'CAT-ASVAB Auto Information is 10 scored questions in 7 minutes. 15 in 10 is Electronics Information, 10 in 6 is Shop Information, and 25 in 11 is the combined Auto & Shop subtest on the paper test.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'ai-engine-ent-1b',
    question: 'The battery and the alternator belong to which vehicle system?',
    options: ['The electrical system', 'The engine cooling system', 'The drivetrain', 'The exhaust system'],
    correctIndex: 0,
    explanation: 'The battery starts the engine and the alternator recharges it: both are part of the electrical (starting and charging) system.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2 — Engine Parts
  {
    id: 'ai-engine-ent-2a',
    question: 'What is the main job of the crankshaft?',
    options: ['To open and close the valves', 'To turn the pistons\' up-and-down motion into rotation', 'To pump oil through the engine', 'To deliver the spark to each cylinder'],
    correctIndex: 1,
    explanation: 'The connecting rods push on the crankshaft\'s offset throws, turning straight-line motion into rotation. The camshaft opens the valves.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'ai-engine-ent-2b',
    question: 'What does the oil control ring on a piston do?',
    options: ['It holds the piston onto the connecting rod', 'It seals in the pressure of combustion', 'It cools the top of the piston with coolant', 'It scrapes excess oil off the cylinder wall'],
    correctIndex: 3,
    explanation: 'The oil control ring wipes extra oil off the cylinder wall so it does not reach the combustion chamber. The compression rings seal pressure, and the wrist pin joins piston and rod.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3 — The Four-Stroke Cycle
  {
    id: 'ai-engine-ent-3a',
    question: 'During the intake stroke, what are the piston and the intake valve doing?',
    options: ['The piston moves up and the intake valve is closed', 'The piston moves up and the intake valve is open', 'The piston moves down and the intake valve is open', 'The piston moves down and the intake valve is closed'],
    correctIndex: 2,
    explanation: 'On intake, the falling piston draws the mixture in through the open intake valve.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'ai-engine-ent-3b',
    question: 'In which stroke are both valves closed while burning gases push the piston down?',
    options: ['Power', 'Compression', 'Intake', 'Exhaust'],
    correctIndex: 0,
    explanation: 'In the power stroke, both valves are closed and the expanding gases drive the piston down. In compression, both are closed but the piston moves up.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4 — Ignition and Combustion
  {
    id: 'ai-engine-ent-4a',
    question: 'Compared with a "hot" spark plug, a "cold" spark plug has:',
    options: ['a wider electrode gap', 'a much longer insulator nose', 'a stronger spark', 'a shorter insulator nose'],
    correctIndex: 3,
    explanation: 'A cold plug has a short insulator nose, so heat escapes quickly to the cylinder head. Heat range does not change the spark or the gap.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'ai-engine-ent-4b',
    question: 'Which of these commonly causes engine knock (detonation)?',
    options: ['Gasoline with too low an octane rating', 'A brand-new air filter', 'Oil that is slightly too thin', 'A fully charged battery'],
    correctIndex: 0,
    explanation: 'Low-octane fuel resists knock poorly. Over-advanced timing, overheating and carbon deposits are other common causes.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5 — Lubrication and Engine Diagnosis
  {
    id: 'ai-engine-ent-5a',
    question: 'Blue smoke from a car\'s exhaust usually means the engine is:',
    options: ['getting too much fuel', 'burning oil', 'burning coolant', 'running too lean'],
    correctIndex: 1,
    explanation: 'Blue or blue-gray smoke is burning oil, often from worn piston rings or valve seals. Too much fuel gives black smoke; coolant gives thick white smoke.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'ai-engine-ent-5b',
    question: 'Which part creates the oil pressure that forces oil through the engine?',
    options: ['The oil filter', 'The oil pan', 'The oil pump', 'The dipstick'],
    correctIndex: 2,
    explanation: 'The engine-driven oil pump draws oil from the pan and pushes it through the filter and galleries. The pan only holds the oil.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6 — Engine Test Strategy and Common Traps
  {
    id: 'ai-engine-ent-6a',
    question: 'Which statement about diesel engines is true?',
    options: ['They ignite fuel with the heat of compressed air', 'They use spark plugs that fire twice per cycle', 'They have a lower compression ratio than gasoline engines', 'They complete every cycle in one stroke'],
    correctIndex: 0,
    explanation: 'Diesels squeeze air so hard it gets hot enough to ignite the injected fuel. They have no spark plugs and a higher compression ratio.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'ai-engine-ent-6b',
    question: 'Premium (high-octane) gasoline is designed mainly to:',
    options: ['clean carbon out of the cylinders', 'resist knocking', 'contain more energy per gallon', 'lubricate the piston rings'],
    correctIndex: 1,
    explanation: 'Octane is a measure of knock resistance. It does not add meaningful energy, and it helps only engines that need it.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'ai-engine-ent-7a',
    question: 'A deep knocking sound from the lower engine that gets louder as engine speed rises most often points to:',
    options: ['a loose air filter cover', 'a slightly wide spark plug gap', 'a thermostat stuck open', 'worn rod or main bearings'],
    correctIndex: 3,
    explanation: 'Worn crankshaft (rod or main) bearings let parts hammer against each other, making a deep knock that rises with RPM, often after running low on oil.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'ai-engine-ent-7b',
    question: 'A four-cylinder engine has cylinders that each sweep 0.6 liter. What is its displacement?',
    options: ['2.4 L', '0.6 L', '4.6 L', '1.2 L'],
    correctIndex: 0,
    explanation: 'Displacement is the total swept volume of all cylinders: 4 × 0.6 = 2.4 L.',
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
