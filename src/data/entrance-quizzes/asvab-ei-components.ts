/**
 * Entrance Quiz — Components, Symbols and AC vs DC (ASVAB Electronics Information) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'
import { EI_SYM_GROUND } from '@/data/asvab-figures/ei'

const P1 = 'Components on the ASVAB'
const P2 = 'Schematic Symbols, Switches and Circuit Protection'
const P3 = 'Resistors, Capacitors and Inductors'
const P4 = 'Diodes, Transistors and Transformers'
const P5 = 'AC vs DC, Frequency and Household Wiring'
const P6 = 'Component Test Strategy and Common Traps'
const P7 = 'Mixed Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Components on the ASVAB
  {
    id: 'ei-components-ent-1a',
    question: 'A device on a utility pole lowers 7,200 V AC to 240 V AC for a house. What is the device?',
    options: ['A rectifier', 'A transformer', 'A capacitor', 'A circuit breaker'],
    correctIndex: 1,
    explanation: 'Transformers step AC voltage up or down. A rectifier changes AC to DC, a capacitor stores charge, and a breaker protects against overcurrent.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'ei-components-ent-1b',
    question: 'Which component is used mainly to limit the current in a circuit?',
    options: ['A diode', 'A transformer', 'A resistor', 'A switch'],
    correctIndex: 2,
    explanation: 'A resistor opposes current, limiting how much flows. A diode controls direction, a transformer changes AC voltage, and a switch turns the circuit on or off.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2 — Schematic Symbols, Switches and Circuit Protection
  {
    id: 'ei-components-ent-2a',
    question: 'On a schematic, the symbol shown in the figure represents:',
    figure: EI_SYM_GROUND.svg,
    figureAlt: EI_SYM_GROUND.alt,
    options: ['a battery', 'a capacitor', 'a fuse', 'a ground connection'],
    correctIndex: 3,
    explanation: 'The stack of shrinking lines is the ground symbol. A battery is alternating long and short lines across the wire, and a capacitor is two equal parallel plates.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'ei-components-ent-2b',
    question: 'What is the main practical difference between a fuse and a circuit breaker?',
    options: ['A breaker can be reset, but a fuse must be replaced', 'A fuse can be reset, but a breaker must be replaced', 'A fuse protects people, while a breaker protects wires', 'A breaker is wired in parallel, while a fuse is in series'],
    correctIndex: 0,
    explanation: 'Both open the circuit on overcurrent and both go in series. A fuse\'s link melts, so it is replaced; a breaker trips and is reset.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3 — Resistors, Capacitors and Inductors
  {
    id: 'ei-components-ent-3a',
    question: 'A resistor is marked brown, black, red, gold. What is its value?',
    options: ['102 Ω', '100 Ω', '10,000 Ω', '1,000 Ω'],
    correctIndex: 3,
    explanation: 'Brown = 1, black = 0, red = two zeros: 1,000 Ω, ±5%. 102 reads the multiplier band as a digit.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'ei-components-ent-3b',
    question: 'Which component stores energy in a magnetic field and opposes changes in current?',
    options: ['A capacitor', 'An inductor', 'A resistor', 'A diode'],
    correctIndex: 1,
    explanation: 'An inductor (coil) stores energy in its magnetic field and resists changes in current. A capacitor stores energy in an electric field.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4 — Diodes, Transistors and Transformers
  {
    id: 'ei-components-ent-4a',
    question: 'On a diode, the end marked with a painted stripe (the bar in the symbol) is the:',
    options: ['anode', 'gate', 'cathode', 'emitter'],
    correctIndex: 2,
    explanation: 'The stripe or bar marks the cathode. Conventional current flows from the anode, through the diode, out the cathode.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'ei-components-ent-4b',
    question: 'A transformer has 50 turns on its primary and 250 turns on its secondary. The primary receives 12 V AC. What is the secondary voltage?',
    options: ['2.4 V', '60 V', '600 V', '12 V'],
    correctIndex: 1,
    explanation: 'The secondary has 250 ÷ 50 = 5 times as many turns, so it gets 5 × 12 = 60 V.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5 — AC vs DC, Frequency and Household Wiring
  {
    id: 'ei-components-ent-5a',
    question: 'An AC signal completes one full cycle every 0.01 second. What is its frequency?',
    options: ['100 Hz', '10 Hz', '0.01 Hz', '1,000 Hz'],
    correctIndex: 0,
    explanation: 'Frequency = 1 ÷ period = 1 ÷ 0.01 = 100 Hz.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'ei-components-ent-5b',
    question: 'In standard U.S. house wiring, the black wire is normally the:',
    options: ['neutral wire', 'ground wire', 'shield wire', 'hot wire'],
    correctIndex: 3,
    explanation: 'Black (and red) are hot. White is neutral, and green or bare copper is ground.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6 — Component Test Strategy and Common Traps
  {
    id: 'ei-components-ent-6a',
    question: 'Two 6-µF capacitors are connected in parallel. What is the total capacitance?',
    options: ['3 µF', '12 µF', '6 µF', '36 µF'],
    correctIndex: 1,
    explanation: 'Capacitors in parallel add: 6 + 6 = 12 µF. Halving (3 µF) is the rule for resistors in parallel, not capacitors.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'ei-components-ent-6b',
    question: 'A circuit that changes AC into DC is called a:',
    options: ['transformer', 'generator', 'rectifier', 'relay'],
    correctIndex: 2,
    explanation: 'A rectifier uses diodes to let current through in one direction only, producing DC. A transformer changes AC voltage but leaves it AC.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'ei-components-ent-7a',
    question: 'What does a transistor do when it works as an amplifier?',
    options: ['It lets a small base current control a larger current', 'It stores charge and releases it all at once', 'It changes alternating current into direct current', 'It melts to open the circuit when overloaded'],
    correctIndex: 0,
    explanation: 'In an amplifier, a weak signal at the base controls a much larger current between collector and emitter, producing a stronger copy.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'ei-components-ent-7b',
    question: 'A resistor is marked red, violet, yellow, silver. What is its value?',
    options: ['2,700 Ω', '274 Ω', '27,000 Ω', '270,000 Ω'],
    correctIndex: 3,
    explanation: 'Red = 2, violet = 7, yellow = four zeros: 270,000 Ω (270 kΩ), ±10%.',
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
