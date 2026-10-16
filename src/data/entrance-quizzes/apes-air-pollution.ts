/**
 * Entrance Quiz — Air Pollution & Smog
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Pollutants, Sources and How They Form
 *  2 — Two Kinds of Smog: London and Los Angeles
 *  3 — Weather, Terrain and Pollution Episodes
 *  4 — Acid Deposition: Long-Term Records and Slow Recovery
 *  5 — Reducing Air Pollution and Noise: Tools and Trade-offs
 *  6 — AP Exam Practice
 *  7 — Synthesis Review
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ═══════════════════════════════════════════════════
  // Part 1: Pollutants, Sources and How They Form
  // ═══════════════════════════════════════════════════
  {
    id: 'aeair-ent-1a',
    question: "A state's SO₂ inventory, in thousand tonnes per year, is: power plants 42, smelters 18, refineries 12 and other sources 8. What is the largest share of total SO₂ that a rule aimed only at smelters and refineries could remove?",
    options: [
      "22.5%",
      "37.5%",
      "52.5%",
      "30%",
    ],
    correctIndex: 1,
    explanation: "Total = 42 + 18 + 12 + 8 = 80, and (18 + 12) ÷ 80 × 100 = 37.5%. 22.5% counts only the smelters, 52.5% is the power plants' share, and 30 is the tonnage, not a percent.",
    partNumber: 1,
    partTitle: "Pollutants, Sources and How They Form",
  },

  {
    id: 'aeair-ent-1b',
    question: "A city caps emissions at each factory smokestack, yet VOC levels from paints, solvents and dry cleaners barely change. Why?",
    options: [
      "VOCs form mainly in the air from other pollutants",
      "Most city VOCs come from trees rather than people",
      "Many small scattered sources have no stack",
      "VOCs from paint break down before monitors detect them",
    ],
    correctIndex: 2,
    explanation: "Paints, solvents and dry cleaners are nonpoint (area) sources: thousands of small outlets that cannot each be fitted with a control device, so they are managed through product standards and practices. VOCs are primary pollutants, city VOCs come largely from human sources, and they last long enough to be measured and to form smog.",
    partNumber: 1,
    partTitle: "Pollutants, Sources and How They Form",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Two Kinds of Smog: London and Los Angeles
  // ═══════════════════════════════════════════════════
  {
    id: 'aeair-ent-2a',
    question: "A city normally records about 200 deaths a day. On the worst day of a smog episode it records 560. Which pair of values is correct?",
    options: [
      "560 excess deaths; 2.8 times the normal toll",
      "360 excess deaths; 2.8 times the normal toll",
      "360 excess deaths; 1.8 times the normal toll",
      "760 excess deaths; 2.8 times the normal toll",
    ],
    correctIndex: 1,
    explanation: "Excess deaths = observed − normal = 560 − 200 = 360, and the ratio = 560 ÷ 200 = 2.8 times the normal toll. 560 is the total, not the excess, 1.8 is the excess divided by the normal toll, and 760 adds instead of subtracting.",
    partNumber: 2,
    partTitle: "Two Kinds of Smog: London and Los Angeles",
  },

  {
    id: 'aeair-ent-2b',
    question: "London's 1952 smog was solved mainly by cleaning up coal burning, but Los Angeles needed a different approach. Why?",
    options: [
      "Its smog came from car exhaust, not coal",
      "Los Angeles smog came mostly from home heating",
      "Los Angeles smog formed mainly in cold, foggy weather",
      "Los Angeles inversions were weaker than London's",
    ],
    correctIndex: 0,
    explanation: "Los Angeles burned little coal; its brown smog formed when NOx and VOCs from car exhaust reacted in sunlight, so the fix was tailpipe standards and catalytic converters. Its smog peaks on warm, sunny days, home heating was a minor source, and inversions there are frequent and strong.",
    partNumber: 2,
    partTitle: "Two Kinds of Smog: London and Los Angeles",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Weather, Terrain and Pollution Episodes
  // ═══════════════════════════════════════════════════
  {
    id: 'aeair-ent-3a',
    question: "In a mountain-basin city, fine particulate matter (PM2.5) averages 9 µg/m³ in July and 18 µg/m³ in January, when winter inversions are frequent. By what percent is the January average higher than the July average?",
    options: [
      "100%",
      "50%",
      "9%",
      "200%",
    ],
    correctIndex: 0,
    explanation: "Percent difference relative to July = (18 − 9) ÷ 9 × 100 = 100%. 50% divides by the January value, 9 is the raw difference in µg/m³, and 200% is the ratio 18 ÷ 9 written as a percent.",
    partNumber: 3,
    partTitle: "Weather, Terrain and Pollution Episodes",
  },

  {
    id: 'aeair-ent-3b',
    question: "A coastal city's smog often seems to clear overnight, only to return the next afternoon even when emissions stay low. What best explains this?",
    options: [
      "Ozone forms faster at night but is visible by day",
      "Night rain washes the air, and traffic refills it",
      "Breezes move it out at night, back by day",
      "The sea soaks up smog at night and releases it later",
    ],
    correctIndex: 2,
    explanation: "At night a land breeze can push polluted air out over the water, and the next day's sea breeze carries it back inland, recirculating it. Ozone forms in sunlight rather than at night, the stem says emissions stayed low, and the ocean does not store smog and release it later.",
    partNumber: 3,
    partTitle: "Weather, Terrain and Pollution Episodes",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Acid Deposition: Long-Term Records and Slow Recovery
  // ═══════════════════════════════════════════════════
  {
    id: 'aeair-ent-4a',
    question: "In one year, a monitoring site received 7 kg/ha of sulfate and 13 kg/ha of nitrate in its precipitation. What percent of these two acid-forming ions was nitrate?",
    options: [
      "35%",
      "65%",
      "54%",
      "186%",
    ],
    correctIndex: 1,
    explanation: "Nitrate share = 13 ÷ (7 + 13) × 100 = 65%. 35% is the sulfate share, 54% divides sulfate by nitrate, and 186% divides nitrate by sulfate instead of by the total.",
    partNumber: 4,
    partTitle: "Acid Deposition: Long-Term Records and Slow Recovery",
  },

  {
    id: 'aeair-ent-4b',
    question: "In 1999, researchers spread a calcium mineral over an entire small forested watershed that had received decades of acid rain. Sugar maples there later grew and regenerated better than in an untreated watershed. What does this result support?",
    options: [
      "Acid rain harms trees only by burning their leaves",
      "Sugar maples need no calcium once acid rain stops",
      "Calcium makes rain fall at a higher pH in that area",
      "Calcium lost to acid rain had been limiting the trees",
    ],
    correctIndex: 3,
    explanation: "Acid deposition had leached calcium from the soil, and replacing it improved maple health compared with the untreated control, showing that calcium loss was the problem. Adding calcium to soil does not change the pH of the rain falling on it.",
    partNumber: 4,
    partTitle: "Acid Deposition: Long-Term Records and Slow Recovery",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Reducing Air Pollution and Noise: Tools and Trade-offs
  // ═══════════════════════════════════════════════════
  {
    id: 'aeair-ent-5a',
    question: "A coal plant emits 30,000 t of SO₂ a year. A control option costing \\$27 million a year would cut its emissions to 6,000 t. What is the cost per tonne removed?",
    options: [
      "\\$900",
      "\\$4,500",
      "\\$1,125",
      "\\$112.50",
    ],
    correctIndex: 2,
    explanation: "Tonnes removed = 30,000 − 6,000 = 24,000, and \\$27,000,000 ÷ 24,000 = \\$1,125 per tonne. \\$900 divides by the original emissions, \\$4,500 divides by the remaining emissions, and \\$112.50 slips a decimal place.",
    partNumber: 5,
    partTitle: "Reducing Air Pollution and Noise: Tools and Trade-offs",
  },

  {
    id: 'aeair-ent-5b',
    question: "When the 1990 SO₂ cap took effect, many U.S. power plants switched to low-sulfur coal instead of installing scrubbers. Why?",
    options: [
      "Low-sulfur coal burned hotter and raised plant output",
      "It cost less than scrubbers did",
      "Low-sulfur coal also cut the plants' CO₂ emissions",
      "Scrubbers increase SO₂ emissions at the smokestack",
    ],
    correctIndex: 1,
    explanation: "Cap-and-trade lets each plant choose its cheapest way to meet its allowances, and for many plants switching fuel cost less than building scrubbers. Low-sulfur coal does not reduce CO₂ or raise output, and scrubbers remove SO₂ rather than adding it.",
    partNumber: 5,
    partTitle: "Reducing Air Pollution and Noise: Tools and Trade-offs",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: AP Exam Practice
  // ═══════════════════════════════════════════════════
  {
    id: 'aeair-ent-6a',
    question: "A city's diesel buses emit 6 g of NOx per km. Electric replacements use 1.2 kWh per km, and the power plants supplying them emit 0.15 g of NOx per kWh. By what percent would NOx per km fall?",
    options: [
      "80%",
      "97.5%",
      "3%",
      "97%",
    ],
    correctIndex: 3,
    explanation: "Electric buses cause 1.2 × 0.15 = 0.18 g of NOx per km, so the reduction is (6 − 0.18) ÷ 6 × 100 = 97%. 80% uses 1.2 as if it were grams, 97.5% uses 0.15 g per km directly, and 3% is the share that remains.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  {
    id: 'aeair-ent-6b',
    question: "A class measures PM2.5 at 25 m, 100 m, 200 m and 400 m from a highway to test whether it falls with distance. Which variable should be held constant?",
    options: [
      "The distance of each monitor from the road",
      "The PM2.5 reading recorded at each monitor",
      "The height of each monitor above the ground",
      "The distances where PM2.5 is high",
    ],
    correctIndex: 2,
    explanation: "Monitors should sample at the same height (and time, with the same calibration) so that distance is the only difference between sites. Distance is the independent variable, PM2.5 is the dependent variable, and the number of high readings is a result.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis Review
  // ═══════════════════════════════════════════════════
  {
    id: 'aeair-ent-7a',
    question: "A city's 300 taxis each drive 60,000 km a year. Switching to hybrids cuts their NOx from 0.4 g/km to 0.1 g/km. How many tonnes of NOx does the switch avoid each year? (1 t = 1,000,000 g)",
    options: [
      "7.2 t",
      "5,400 t",
      "1.8 t",
      "5.4 t",
    ],
    correctIndex: 3,
    explanation: "Total distance = 300 × 60,000 = 18,000,000 km; avoided = 0.3 g/km × 18,000,000 km = 5,400,000 g = 5.4 t. 7.2 t is the old total, 1.8 t is the new total, and 5,400 t uses kilograms per tonne instead of grams.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },

  {
    id: 'aeair-ent-7b',
    question: "A critic says cap-and-trade lets polluters emit as much as they like, as long as they buy allowances. Which response best corrects this?",
    options: [
      "Total emissions stay capped, and trading decides where cuts occur",
      "Allowances are handed out freely, so emissions tend to rise",
      "Each plant must make the same cut, so trading is limited",
      "The cap mainly covers vehicles rather than power plants",
    ],
    correctIndex: 0,
    explanation: "The government sets a fixed and declining cap on total emissions; a plant can emit more only if another emits less and sells its allowances, so the total stays within the cap. Trading decides where reductions happen, not how large they are, and the U.S. programs cover power plants.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Pollutants, Sources and How They Form" },
    { partNumber: 2, partTitle: "Two Kinds of Smog: London and Los Angeles" },
    { partNumber: 3, partTitle: "Weather, Terrain and Pollution Episodes" },
    { partNumber: 4, partTitle: "Acid Deposition: Long-Term Records and Slow Recovery" },
    { partNumber: 5, partTitle: "Reducing Air Pollution and Noise: Tools and Trade-offs" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
