/**
 * Entrance Quiz — Current, Voltage, Resistance and Ohm's Law (ASVAB Electronics Information) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Electricity on the ASVAB'
const P2 = 'Charge, Current and Voltage'
const P3 = 'Resistance, Conductors and Insulators'
const P4 = "Ohm's Law"
const P5 = 'Measuring Electricity: Meters and Units'
const P6 = 'EI Test Strategy and Common Traps'
const P7 = 'Mixed Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Electricity on the ASVAB
  {
    id: 'ei-electricity-basics-ent-1a',
    question: 'On the CAT-ASVAB, Electronics Information gives 15 questions in 10 minutes. About how much time is that per question?',
    options: ['About 90 seconds', 'About 40 seconds', 'About 10 seconds', 'About 2 minutes'],
    correctIndex: 1,
    explanation: '10 minutes is 600 seconds, and 600 ÷ 15 = 40 seconds per question.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'ei-electricity-basics-ent-1b',
    question: 'Which unit is used to measure electric current?',
    options: ['The volt', 'The ohm', 'The ampere', 'The coulomb'],
    correctIndex: 2,
    explanation: 'Current is measured in amperes (amps). Volts measure voltage, ohms measure resistance, and coulombs measure charge.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2 — Charge, Current and Voltage
  {
    id: 'ei-electricity-basics-ent-2a',
    question: '45 coulombs of charge flow past a point in 15 seconds. What is the current?',
    options: ['675 A', '30 A', '60 A', '3 A'],
    correctIndex: 3,
    explanation: 'Current = charge ÷ time = 45 ÷ 15 = 3 A. Multiplying gives 675, and subtracting or adding the numbers gives 30 or 60.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'ei-electricity-basics-ent-2b',
    question: 'In the wires outside a battery, conventional current is described as flowing in which direction?',
    options: ['From the positive terminal to the negative terminal', 'From the negative terminal to the positive terminal', 'Back and forth between the two terminals', 'Out of both terminals toward the load'],
    correctIndex: 0,
    explanation: 'Conventional current runs from + to −. Electron flow runs the opposite way, from − to +.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3 — Resistance, Conductors and Insulators
  {
    id: 'ei-electricity-basics-ent-3a',
    question: 'Which change would LOWER the resistance of a copper wire?',
    options: ['Heating the wire', 'Using a thinner wire of the same length', 'Using a shorter piece of the same wire', 'Using a longer piece of the same wire'],
    correctIndex: 2,
    explanation: 'Resistance grows with length, so a shorter piece has less. Heating a metal, making it thinner, or making it longer all raise resistance.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'ei-electricity-basics-ent-3b',
    question: 'Why is gold often used to plate electrical contacts and connector pins?',
    options: ['It is the cheapest conductor', 'It conducts better than silver', 'It is an insulator', 'It does not corrode'],
    correctIndex: 3,
    explanation: 'Gold resists corrosion, so contacts stay clean and conductive. Silver is the better conductor, and gold is far from cheap.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4 — Ohm's Law
  {
    id: 'ei-electricity-basics-ent-4a',
    question: 'A current of 3 A flows through an 8-Ω resistor. What is the voltage across the resistor?',
    options: ['24 V', '11 V', '2.7 V', '5 V'],
    correctIndex: 0,
    explanation: '$V = IR = 3 \\times 8 = 24$ V.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'ei-electricity-basics-ent-4b',
    question: 'A lamp on a 120-V circuit draws 0.5 A. What is its resistance?',
    options: ['60 Ω', '240 Ω', '120.5 Ω', '600 Ω'],
    correctIndex: 1,
    explanation: '$R = \\frac{V}{I} = \\frac{120}{0.5} = 240$ Ω. Dividing by one half is the same as multiplying by 2.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5 — Measuring Electricity: Meters and Units
  {
    id: 'ei-electricity-basics-ent-5a',
    question: 'How should a voltmeter be connected to measure the voltage across a lamp?',
    options: ['In series with the lamp', 'In parallel with the lamp', 'In place of the lamp', 'Only after the power is turned off'],
    correctIndex: 1,
    explanation: 'A voltmeter is connected across (in parallel with) the part being measured, while the circuit is powered.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'ei-electricity-basics-ent-5b',
    question: 'A resistance of 3,300 Ω is the same as:',
    options: ['33 kΩ', '3.3 MΩ', '3.3 kΩ', '330 kΩ'],
    correctIndex: 2,
    explanation: 'Kilo means 1,000, so 3,300 Ω ÷ 1,000 = 3.3 kΩ.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6 — EI Test Strategy and Common Traps
  {
    id: 'ei-electricity-basics-ent-6a',
    question: 'Which of these wires can safely carry the most current?',
    options: ['16-gauge', '14-gauge', '12-gauge', '8-gauge'],
    correctIndex: 3,
    explanation: 'Wire gauge numbers run backwards: the smallest number is the thickest wire, and the thickest wire carries the most current.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'ei-electricity-basics-ent-6b',
    question: 'An 18-V source is connected across a 6-kΩ resistor. What current flows?',
    options: ['3 A', '3 mA', '108 mA', '0.3 mA'],
    correctIndex: 1,
    explanation: 'Volts ÷ kilohms = milliamps: 18 ÷ 6 = 3 mA. Answering 3 A forgets the kilo prefix.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'ei-electricity-basics-ent-7a',
    question: 'A resistor carries 1 A when 4 V is applied. How much current will it carry when 10 V is applied?',
    options: ['2.5 A', '0.4 A', '4 A', '40 A'],
    correctIndex: 0,
    explanation: 'The resistance is 4 ÷ 1 = 4 Ω, and 10 ÷ 4 = 2.5 A.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'ei-electricity-basics-ent-7b',
    question: 'An ohmmeter shows an infinite reading across the filament of a light bulb. What does that tell you?',
    options: ['The filament is in perfect condition', 'The bulb is drawing too much current', 'The filament is shorted to itself', 'The filament is broken (open)'],
    correctIndex: 3,
    explanation: 'An infinite reading means there is no path for current: the filament has burned out. A good filament shows a low, finite resistance.',
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
