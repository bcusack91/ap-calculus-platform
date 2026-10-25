/**
 * Entrance Quiz — Physics: Motion, Energy and Waves (ASVAB General Science) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Physics on the ASVAB: Units and Metric Prefixes'
const P2 = "Motion, Forces and Newton's Laws"
const P3 = 'Work, Energy, Power and Heat'
const P4 = 'Waves, Sound and Light'
const P5 = 'Electricity and Magnetism Basics'
const P6 = 'Test Strategy and Common Traps'
const P7 = 'Mixed Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Physics on the ASVAB: Units and Metric Prefixes
  {
    id: 'gs-physics-ent-1a',
    question: 'Which unit is used to measure pressure?',
    options: ['Pascal', 'Joule', 'Hertz', 'Newton'],
    correctIndex: 0,
    explanation: 'Pressure (force per area) is measured in pascals. Joules measure energy, hertz measure frequency, and newtons measure force.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'gs-physics-ent-1b',
    question: 'A water bottle holds 1.5 liters. How many milliliters is that?',
    options: ['1,500 mL', '150 mL', '15 mL', '15,000 mL'],
    correctIndex: 0,
    explanation: 'Milli- means one thousandth, so 1 liter = 1,000 mL and 1.5 L = 1,500 mL.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2 — Motion, Forces and Newton's Laws
  {
    id: 'gs-physics-ent-2a',
    question: 'A truck travels 150 miles at an average speed of 50 miles per hour. How long does the trip take?',
    options: ['3 hours', '2.5 hours', '7.5 hours', '100 hours'],
    correctIndex: 0,
    explanation: 'Time = distance ÷ speed = 150 ÷ 50 = 3 hours.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'gs-physics-ent-2b',
    question: 'A tablecloth is yanked quickly out from under a set of dishes, and the dishes stay in place. Which idea explains this?',
    options: ['Inertia', 'Friction', 'Momentum', 'Gravity'],
    correctIndex: 0,
    explanation: 'Objects at rest tend to stay at rest (Newton\'s first law, inertia). The quick pull applies too little force for too short a time to move the dishes much.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3 — Work, Energy, Power and Heat
  {
    id: 'gs-physics-ent-3a',
    question: 'Water boils at 100 °C at sea level. What is that temperature in Fahrenheit?',
    options: ['212 °F', '180 °F', '132 °F', '373 °F'],
    correctIndex: 0,
    explanation: '(9/5)(100) + 32 = 180 + 32 = 212 °F. 373 is the boiling point in kelvins.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'gs-physics-ent-3b',
    question: 'A metal fence post feels colder than a wooden post on the same winter morning, even though both are at the same temperature. Why?',
    options: ['Metal draws heat from your hand faster', 'Metal holds more cold than wood does', 'Wood makes its own heat from the inside', 'Metal radiates cold into your hand'],
    correctIndex: 0,
    explanation: 'Both posts are at the same temperature, but metal is a good conductor, so it pulls heat out of your hand quickly and feels colder. "Cold" is not a substance that flows; heat flows from warm to cool.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4 — Waves, Sound and Light
  {
    id: 'gs-physics-ent-4a',
    question: 'Which color of visible light has the longest wavelength?',
    options: ['Red', 'Violet', 'Green', 'Blue'],
    correctIndex: 0,
    explanation: 'In ROY G BIV, red has the longest wavelength and violet the shortest.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'gs-physics-ent-4b',
    question: 'A sound wave travels at 340 m/s and has a frequency of 170 Hz. What is its wavelength?',
    options: ['2 m', '0.5 m', '510 m', '57,800 m'],
    correctIndex: 0,
    explanation: 'λ = v ÷ f = 340 ÷ 170 = 2 m. Dividing the other way gives 0.5, adding gives 510, and multiplying gives 57,800.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5 — Electricity and Magnetism Basics
  {
    id: 'gs-physics-ent-5a',
    question: 'Which unit measures electrical resistance?',
    options: ['Ohm', 'Volt', 'Amp', 'Watt'],
    correctIndex: 0,
    explanation: 'Resistance is measured in ohms (Ω). Volts measure voltage, amps (amperes) measure current, and watts measure power.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'gs-physics-ent-5b',
    question: 'An electric drill turns electrical energy into spinning motion. What device inside the drill does this?',
    options: ['A motor', 'A generator', 'A fuse', 'A compass'],
    correctIndex: 0,
    explanation: 'A motor turns electricity into motion. A generator does the opposite, turning motion into electricity.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6 — Test Strategy and Common Traps
  {
    id: 'gs-physics-ent-6a',
    question: 'A rock and a pebble are dropped together inside a tube with all the air pumped out. What happens?',
    options: ['They hit the bottom at the same time', 'The rock hits the bottom first', 'The pebble hits the bottom first', 'Neither falls, since there is no air'],
    correctIndex: 0,
    explanation: 'With no air resistance, every object falls with the same acceleration, so they land together. Gravity does not need air.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'gs-physics-ent-6b',
    question: 'A bat\'s squeak bounces off a moth and returns 0.02 seconds later. Sound travels about 340 m/s in air. About how far away is the moth?',
    options: ['3.4 m', '6.8 m', '17 m', '0.34 m'],
    correctIndex: 0,
    explanation: 'The echo goes out and back, so the one-way time is 0.01 s: 340 × 0.01 = 3.4 m. Using the full 0.02 s gives 6.8 m, twice the real distance.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'gs-physics-ent-7a',
    question: 'A 600 N recruit climbs a 5 m rope in 10 seconds. What power does the recruit produce?',
    options: ['300 W', '3,000 W', '120 W', '30,000 W'],
    correctIndex: 0,
    explanation: 'Work = force × distance = 600 × 5 = 3,000 J. Power = work ÷ time = 3,000 ÷ 10 = 300 W. 3,000 is the work, not the power.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'gs-physics-ent-7b',
    question: 'Which kind of wave can travel through the vacuum of space?',
    options: ['Radio waves', 'Sound waves', 'Ocean waves', 'Earthquake waves'],
    correctIndex: 0,
    explanation: 'Radio waves are electromagnetic waves, which need no medium; that is how spacecraft talk to Earth. Sound, ocean and earthquake waves are vibrations of matter and cannot cross a vacuum.',
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
