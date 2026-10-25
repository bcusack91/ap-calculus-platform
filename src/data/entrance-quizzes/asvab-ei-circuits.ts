/**
 * Entrance Quiz — Series and Parallel Circuits and Power (ASVAB Electronics Information) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'
import { EI_OPEN_SWITCH, EI_SERIES_5_7_24, EI_PAIR_20_30, EI_SP_3_10_10_16, EI_BULBS_JUMPER, EI_SERIES_6_3_18 } from '@/data/asvab-figures/ei'

const P1 = 'Circuits on the ASVAB'
const P2 = 'Series Circuits'
const P3 = 'Parallel Circuits'
const P4 = 'Combination Circuits and Circuit Faults'
const P5 = 'Electrical Power and Energy'
const P6 = 'Circuit Test Strategy and Common Traps'
const P7 = 'Mixed Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Circuits on the ASVAB
  {
    id: 'ei-circuits-ent-1a',
    question: 'The switch in the circuit shown is open. How much current flows in the loop?',
    figure: EI_OPEN_SWITCH.svg,
    figureAlt: EI_OPEN_SWITCH.alt,
    options: ['The normal amount', 'Twice the normal amount', 'No current at all', 'A small trickle'],
    correctIndex: 2,
    explanation: 'An open switch leaves a gap in the only path, so no current flows anywhere in the loop.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'ei-circuits-ent-1b',
    question: 'A path with almost no resistance that lets current bypass the load is called:',
    options: ['an open circuit', 'a short circuit', 'a closed circuit', 'a parallel branch'],
    correctIndex: 1,
    explanation: 'A short circuit bypasses the load with a near-zero-resistance path, so the current rises sharply.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2 — Series Circuits
  {
    id: 'ei-circuits-ent-2a',
    question: 'How much current flows in the circuit in the figure?',
    figure: EI_SERIES_5_7_24.svg,
    figureAlt: EI_SERIES_5_7_24.alt,
    options: ['2 A', '12 A', '0.5 A', '4.8 A'],
    correctIndex: 0,
    explanation: 'Series resistances add: 5 + 7 = 12 Ω. Current = 24 ÷ 12 = 2 A.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'ei-circuits-ent-2b',
    question: 'In a series circuit, the voltage drops across all of the parts:',
    options: ['are each equal to the source voltage', 'are always equal to one another', 'add up to zero', 'add up to the source voltage'],
    correctIndex: 3,
    explanation: 'Each part uses its share of the push, and the shares add up to the source voltage. They are equal only if the resistances are equal.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3 — Parallel Circuits
  {
    id: 'ei-circuits-ent-3a',
    question: 'What is the equivalent resistance of the two resistors in the figure?',
    figure: EI_PAIR_20_30.svg,
    figureAlt: EI_PAIR_20_30.alt,
    options: ['50 Ω', '25 Ω', '12 Ω', '10 Ω'],
    correctIndex: 2,
    explanation: 'Product over sum: (20 × 30) ÷ (20 + 30) = 600 ÷ 50 = 12 Ω, less than the smaller branch as it must be.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'ei-circuits-ent-3b',
    question: 'In a parallel circuit, which quantity is the same for every branch?',
    options: ['Voltage', 'Current', 'Resistance', 'Power'],
    correctIndex: 0,
    explanation: 'Every branch connects directly across the source, so each has the same voltage. The current divides among the branches.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4 — Combination Circuits and Circuit Faults
  {
    id: 'ei-circuits-ent-4a',
    question: 'What is the total current in the circuit shown?',
    figure: EI_SP_3_10_10_16.svg,
    figureAlt: EI_SP_3_10_10_16.alt,
    options: ['0.7 A', '2 A', '5.3 A', '1.6 A'],
    correctIndex: 1,
    explanation: 'The parallel pair is 10 ÷ 2 = 5 Ω, so the total is 3 + 5 = 8 Ω, and 16 ÷ 8 = 2 A. 0.7 A wrongly adds all three resistors (23 Ω).',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'ei-circuits-ent-4b',
    question: 'In the circuit shown, the three bulbs are identical and a stray wire is connected across bulb 2. What happens?',
    figure: EI_BULBS_JUMPER.svg,
    figureAlt: EI_BULBS_JUMPER.alt,
    options: ['All three bulbs go out', 'All three bulbs stay the same', 'That bulb goes out and the other two get dimmer', 'That bulb goes out and the other two get brighter'],
    correctIndex: 3,
    explanation: 'The wire shorts the bulb, so it goes out. The other two now share the full voltage (half each instead of a third), so they glow brighter.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5 — Electrical Power and Energy
  {
    id: 'ei-circuits-ent-5a',
    question: 'A motor draws 3 A from a 24-V supply. How much power does it use?',
    options: ['8 W', '27 W', '72 W', '21 W'],
    correctIndex: 2,
    explanation: 'P = I × V = 3 × 24 = 72 W.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'ei-circuits-ent-5b',
    question: 'A 1,000-W appliance runs for 5 hours. How much energy does it use?',
    options: ['5,000 kWh', '0.2 kWh', '200 kWh', '5 kWh'],
    correctIndex: 3,
    explanation: '1,000 W = 1 kW, and 1 kW × 5 h = 5 kWh.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6 — Circuit Test Strategy and Common Traps
  {
    id: 'ei-circuits-ent-6a',
    question: 'A 5-Ω resistor and a 20-Ω resistor are in parallel. What is the equivalent resistance?',
    options: ['4 Ω', '25 Ω', '12.5 Ω', '5 Ω'],
    correctIndex: 0,
    explanation: 'Product over sum: 100 ÷ 25 = 4 Ω. It must be less than the smaller branch (5 Ω), which rules out every other choice.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'ei-circuits-ent-6b',
    question: 'The current through a heating element is cut in half. The heat it produces becomes:',
    options: ['one half as much', 'one fourth as much', 'twice as much', 'unchanged'],
    correctIndex: 1,
    explanation: 'Heat (power) = I² × R. Halving I makes I² one fourth as large.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'ei-circuits-ent-7a',
    question: 'What is the voltage across the 3-Ω resistor in the circuit shown?',
    figure: EI_SERIES_6_3_18.svg,
    figureAlt: EI_SERIES_6_3_18.alt,
    options: ['12 V', '9 V', '18 V', '6 V'],
    correctIndex: 3,
    explanation: 'Total 9 Ω, current 18 ÷ 9 = 2 A, and 2 × 3 = 6 V across the 3-Ω resistor (12 V across the 6-Ω resistor).',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'ei-circuits-ent-7b',
    question: 'An 1,800-W electric kettle runs on 120 V. How much current does it draw?',
    options: ['15 A', '18 A', '150 A', '0.067 A'],
    correctIndex: 0,
    explanation: 'I = P ÷ V = 1,800 ÷ 120 = 15 A.',
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
