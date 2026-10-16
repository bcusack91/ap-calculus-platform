/**
 * Entrance Quiz — Atmospheric Pollution
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Core Concepts
 *  2 — Photochemical Smog and Thermal Inversions in Depth
 *  3 — Sources, Particulates, Indoor Air and Noise
 *  4 — Acid Deposition and Emission Controls
 *  5 — Stratospheric Ozone Depletion and Common Misconceptions
 *  6 — AP Exam Practice
 *  7 — Synthesis Review
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ═══════════════════════════════════════════════════
  // Part 1: Core Concepts
  // ═══════════════════════════════════════════════════
  {
    id: 'aeatp-ent-1a',
    question: "Which pair correctly matches one primary pollutant and one secondary pollutant?",
    options: [
      "Ozone from car tailpipes; carbon monoxide formed in clouds",
      "Nitric oxide and carbon monoxide, both formed in the air",
      "Sulfuric acid from smokestacks; SO₂ formed in rainwater",
      "Carbon monoxide from exhaust; ozone formed in sunlit air",
    ],
    correctIndex: 3,
    explanation: "A primary pollutant is emitted directly, as carbon monoxide is from tailpipes; a secondary pollutant forms by reactions in the air, as ozone does from NOx and VOCs in sunlight. Sulfuric acid forms in the air from SO₂, not the reverse.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  {
    id: 'aeatp-ent-1b',
    question: "City A is cold and damp and burns high-sulfur coal for winter heat. City B is warm and sunny with heavy traffic. Which type of smog is each most likely to have?",
    options: [
      "Gray smog in City A and brown smog in City B",
      "Brown smog in City A and gray smog in City B",
      "Photochemical smog in both, since both burn fuel",
      "Industrial smog in both, since both have emissions",
    ],
    correctIndex: 0,
    explanation: "Coal smoke, SO₂ and fog in cold, damp weather produce industrial (gray, London-type) smog, while NOx and VOCs from traffic in strong sunlight and heat produce photochemical (brown, Los Angeles-type) smog. The conditions in each city favor different smog types.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Photochemical Smog and Thermal Inversions in Depth
  // ═══════════════════════════════════════════════════
  {
    id: 'aeatp-ent-2a',
    question: "The EPA's 8-hour ozone standard is 0.070 ppm. A monitor records an 8-hour average of 91 ppb. By what percent does this exceed the standard? (1 ppm = 1,000 ppb)",
    options: [
      "23%",
      "21%",
      "30%",
      "130%",
    ],
    correctIndex: 2,
    explanation: "0.070 ppm = 70 ppb, so (91 − 70) ÷ 70 × 100 = 30% above the standard. 23% divides by the measured value, 21% reports the difference in ppb as a percent, and 130% is the reading as a share of the standard.",
    partNumber: 2,
    partTitle: "Photochemical Smog and Thermal Inversions in Depth",
  },

  {
    id: 'aeatp-ent-2b',
    question: "In a sunny city, nitric oxide peaks during the morning rush hour, but ground-level ozone does not peak until mid-afternoon. What best explains the delay?",
    options: [
      "Ozone is emitted mainly by afternoon commuter traffic",
      "Ozone forms only after the air cools in the afternoon",
      "Sunlight builds ozone over hours",
      "Morning wind blows the ozone in from distant oceans",
    ],
    correctIndex: 2,
    explanation: "Ozone is secondary: NO is oxidized to NO₂, sunlight splits NO₂, and the freed oxygen atoms form ozone, a process that builds through the late morning as sunlight and heat increase. Ozone is not emitted directly, and heat speeds its formation rather than cooling.",
    partNumber: 2,
    partTitle: "Photochemical Smog and Thermal Inversions in Depth",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Sources, Particulates, Indoor Air and Noise
  // ═══════════════════════════════════════════════════
  {
    id: 'aeatp-ent-3a',
    question: "A basement tests at 7.0 pCi/L of radon, above the EPA action level of 4 pCi/L. After a sub-slab vent fan is installed, it tests at 1.4 pCi/L. What is the percent reduction?",
    options: [
      "75%",
      "400%",
      "80%",
      "5.6%",
    ],
    correctIndex: 2,
    explanation: "Percent change = (1.4 − 7.0) ÷ 7.0 × 100 = −80%, an 80% reduction. 75% is how far the original reading exceeded the action level, 400% divides by the new value, and 5.6 is the raw drop in pCi/L.",
    partNumber: 3,
    partTitle: "Sources, Particulates, Indoor Air and Noise",
  },

  {
    id: 'aeatp-ent-3b',
    question: "Which of the following is a natural source of volatile organic compounds (VOCs)?",
    options: [
      "Gasoline vapor at fuel pumps",
      "Trees and other plants",
      "Solvents in household paints",
      "Exhaust from rush-hour traffic",
    ],
    correctIndex: 1,
    explanation: "Trees and other plants release VOCs naturally and are a large source in many regions. Gasoline vapor, paint solvents and vehicle exhaust are human sources.",
    partNumber: 3,
    partTitle: "Sources, Particulates, Indoor Air and Noise",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Acid Deposition and Emission Controls
  // ═══════════════════════════════════════════════════
  {
    id: 'aeatp-ent-4a',
    question: "Exhaust passes through a device that removes 85% of a pollutant, then a second device that removes 90% of what remains. What is the overall removal efficiency?",
    options: [
      "87.5%",
      "76.5%",
      "1.5%",
      "98.5%",
    ],
    correctIndex: 3,
    explanation: "Multiply the fractions remaining: 0.15 × 0.10 = 0.015, so 1.5% escapes and 98.5% is removed. 87.5% averages the two efficiencies, 76.5% multiplies the fractions removed, and 1.5% is the share that escapes.",
    partNumber: 4,
    partTitle: "Acid Deposition and Emission Controls",
  },

  {
    id: 'aeatp-ent-4b',
    question: "Many coal plants built very tall smokestacks to protect local air quality. How did this affect acid deposition?",
    options: [
      "It lowered the plants' total SO₂ emissions",
      "It sent gases higher, so winds carried them farther",
      "It made acid deposition fall closer to the plant",
      "It diluted the gases so they formed less acid",
    ],
    correctIndex: 1,
    explanation: "Releasing SO₂ and NOx higher in the air let winds carry them hundreds of kilometers before they formed acids and fell, so tall stacks exported acid deposition to downwind regions. They did not lower total emissions or the acid formed; they moved where it fell.",
    partNumber: 4,
    partTitle: "Acid Deposition and Emission Controls",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Stratospheric Ozone Depletion and Common Misconceptions
  // ═══════════════════════════════════════════════════
  {
    id: 'aeatp-ent-5a',
    question: "The ozone column above a station falls from 330 Dobson units to 132 Dobson units. What is the percent change?",
    options: [
      "−60%",
      "−150%",
      "+60%",
      "−40%",
    ],
    correctIndex: 0,
    explanation: "Percent change = (132 − 330) ÷ 330 × 100 = −60%. −40% is the fraction remaining written as a change, −150% divides by the new value, and +60% drops the sign of a decrease.",
    partNumber: 5,
    partTitle: "Stratospheric Ozone Depletion and Common Misconceptions",
  },

  {
    id: 'aeatp-ent-5b',
    question: "Why can ground-level ozone from city smog not drift upward and repair the thinning stratospheric ozone layer?",
    options: [
      "It breaks down within weeks, before rising",
      "Ground-level ozone is a different molecule from stratospheric ozone",
      "Gravity holds the heavier ozone close to the ground",
      "Stratospheric ozone forms from chlorine compounds",
    ],
    correctIndex: 0,
    explanation: "Ground-level ozone reacts and breaks down within days to weeks, far too fast to reach the stratosphere, and the amounts are tiny by comparison. It is the same O₃ molecule, air mixing is not blocked by gravity, and stratospheric ozone forms when UV splits O₂, while chlorine destroys it.",
    partNumber: 5,
    partTitle: "Stratospheric Ozone Depletion and Common Misconceptions",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: AP Exam Practice
  // ═══════════════════════════════════════════════════
  {
    id: 'aeatp-ent-6a',
    question: "A coal plant would emit 80,000 t of SO₂ a year without controls. It installs a scrubber that removes 95% of the SO₂ and holds 6,000 allowances worth \\$300 each (1 allowance = 1 ton). How much could it earn by selling its spare allowances?",
    options: [
      "\\$1,200,000",
      "\\$600,000",
      "\\$1,800,000",
      "\\$22,800,000",
    ],
    correctIndex: 1,
    explanation: "Released SO₂ = 80,000 × 0.05 = 4,000 t, so the plant needs 4,000 allowances and has 2,000 spare; 2,000 × \\$300 = \\$600,000. \\$1,200,000 values the allowances it must keep, \\$1,800,000 values all of them, and \\$22,800,000 uses the amount removed.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  {
    id: 'aeatp-ent-6b',
    question: "A region's vehicles emitted 150 thousand t of NOx while driving 50 billion miles in 2000, and 63 thousand t while driving 70 billion miles in 2020. Which statement do the data support?",
    options: [
      "Per-mile NOx rose because people drove 40% more",
      "Per-mile NOx fell from 3.0 to 1.26, a 58% decrease",
      "Per-mile NOx stayed the same while driving increased",
      "Per-mile NOx fell from 3.0 to 0.9, so cars got cleaner",
    ],
    correctIndex: 3,
    explanation: "2000: 150 ÷ 50 = 3.0 thousand t per billion miles; 2020: 63 ÷ 70 = 0.9, so emissions per mile fell about 70% even as driving rose 40%, showing much cleaner vehicles. 1.26 divides the 2020 emissions by the 2000 mileage.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis Review
  // ═══════════════════════════════════════════════════
  {
    id: 'aeatp-ent-7a',
    question: "A scrubber cuts a plant's SO₂ emissions from 50,000 t to 6,000 t a year. What is the removal efficiency, and which benefits follow?",
    options: [
      "12%, cutting acid deposition and sulfate haze",
      "733%, cutting acid deposition and sulfate haze",
      "88%, cutting ozone depletion and global warming",
      "88%, cutting acid deposition and sulfate haze",
    ],
    correctIndex: 3,
    explanation: "Removal = (50,000 − 6,000) ÷ 50,000 × 100 = 88%. Less SO₂ means less sulfuric acid deposition downwind, less sulfate haze and less respiratory harm. SO₂ is not the cause of ozone depletion or global warming, 12% is the share still released, and 733% divides by the new value.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },

  {
    id: 'aeatp-ent-7b',
    question: "A basin city's worst air days come on hot, calm summer afternoons under an inversion, with heavy traffic. Which pair of actions best addresses the cause?",
    options: [
      "Cutting NOx and VOCs with catalytic converters and vapor recovery",
      "Adding limestone to lakes and planting trees downwind",
      "Banning CFCs and switching homes to HFC refrigerants",
      "Installing radon fans and CO detectors in every home",
    ],
    correctIndex: 0,
    explanation: "Hot, sunny days with heavy traffic produce photochemical smog from NOx and VOCs, and the inversion traps it, so cutting those precursors attacks the cause. Liming treats acid lakes, CFC bans protect stratospheric ozone, and radon fans and CO detectors address indoor air.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Photochemical Smog and Thermal Inversions in Depth" },
    { partNumber: 3, partTitle: "Sources, Particulates, Indoor Air and Noise" },
    { partNumber: 4, partTitle: "Acid Deposition and Emission Controls" },
    { partNumber: 5, partTitle: "Stratospheric Ozone Depletion and Common Misconceptions" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
