/**
 * Entrance Quiz — Energy Concepts & Resources
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Core Concepts
 *  2 — Global Energy Use: Who Uses What, and Why
 *  3 — Net Energy, EROI and Cogeneration
 *  4 — Reading Energy Data
 *  5 — Conserving Energy: Buildings, Appliances and Transportation
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
    id: 'aeene-ent-1a',
    question: "A power plant burns fuel containing 500 MJ of energy and delivers 175 MJ of electricity. What is its efficiency?",
    options: [
      "65%",
      "35%",
      "2.9%",
      "286%",
    ],
    correctIndex: 1,
    explanation: "Efficiency = useful output ÷ input × 100 = 175 ÷ 500 × 100 = 35%. 65% is the share lost as waste heat, and 2.9% and 286% come from dividing the input by the output.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  {
    id: 'aeene-ent-1b',
    question: "Why can no gasoline engine, however well designed, turn all of its fuel's energy into motion?",
    options: [
      "Energy is destroyed each time the fuel is burned",
      "Gasoline holds less energy than the engine releases",
      "Every energy conversion loses some energy as unusable heat",
      "Engines create extra energy that escapes as noise",
    ],
    correctIndex: 2,
    explanation: "The second law of thermodynamics says every energy transformation converts part of the energy into heat that cannot do useful work. Energy is never destroyed or created (first law), so the other choices break the conservation of energy.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Global Energy Use: Who Uses What, and Why
  // ═══════════════════════════════════════════════════
  {
    id: 'aeene-ent-2a',
    question: "A country of 25 million people uses 3.0 × 10¹⁸ J of energy per year. What is its energy use per person? (1 GJ = 10⁹ J)",
    options: [
      "120 GJ",
      "1,200 GJ",
      "12 GJ",
      "0.12 GJ",
    ],
    correctIndex: 0,
    explanation: "Per-capita use = 3.0 × 10¹⁸ J ÷ 2.5 × 10⁷ people = 1.2 × 10¹¹ J = 120 GJ per person. The other answers misplace the exponent when dividing or when converting joules to gigajoules.",
    partNumber: 2,
    partTitle: "Global Energy Use: Who Uses What, and Why",
  },

  {
    id: 'aeene-ent-2b',
    question: "In some regions, rising demand for charcoal in growing cities is a major cause of deforestation. Why does charcoal use more wood than burning the wood directly for the same cooking?",
    options: [
      "Charcoal burns at a lower temperature than wood does",
      "Charcoal releases no energy until it is fully dried",
      "Charcoal stores less energy per kilogram than wood",
      "Making charcoal wastes much of the wood's original energy",
    ],
    correctIndex: 3,
    explanation: "Charcoal is made by heating wood with little oxygen, which loses a large share of the wood's energy, so more trees must be cut to deliver the same cooking heat. Charcoal actually holds more energy per kilogram and burns hotter and cleaner than wood, which is why it is popular in cities.",
    partNumber: 2,
    partTitle: "Global Energy Use: Who Uses What, and Why",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Net Energy, EROI and Cogeneration
  // ═══════════════════════════════════════════════════
  {
    id: 'aeene-ent-3a',
    question: "A combined heat and power unit burns 250 MJ of natural gas and delivers 85 MJ of electricity plus 115 MJ of useful heat to nearby buildings. What is its overall efficiency?",
    options: [
      "34%",
      "46%",
      "125%",
      "80%",
    ],
    correctIndex: 3,
    explanation: "Overall efficiency = useful output ÷ input × 100 = (85 + 115) ÷ 250 × 100 = 80%. 34% counts only the electricity, 46% counts only the heat, and 125% divides the input by the output.",
    partNumber: 3,
    partTitle: "Net Energy, EROI and Cogeneration",
  },

  {
    id: 'aeene-ent-3b',
    question: "Corn ethanol is a renewable fuel, yet many analysts call it a weak energy source. What is the main reason?",
    options: [
      "Ethanol burns too cold to run engines efficiently",
      "Corn takes several years to reach harvest",
      "Ethanol loses its energy if stored in cold weather",
      "It returns barely more energy than it uses",
    ],
    correctIndex: 3,
    explanation: "Fertilizer, farm machinery, irrigation and distilling consume so much fossil energy that corn ethanol's EROI is close to 1, leaving little surplus. Ethanol burns well in engines and keeps its energy in cold storage, and corn is an annual crop.",
    partNumber: 3,
    partTitle: "Net Energy, EROI and Cogeneration",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Reading Energy Data
  // ═══════════════════════════════════════════════════
  {
    id: 'aeene-ent-4a',
    question: "An energy-flow diagram shows that a nation's economy delivered 32 quads of energy services and rejected 66 quads as waste heat. What percent of its primary energy was rejected?",
    options: [
      "33%",
      "206%",
      "49%",
      "67%",
    ],
    correctIndex: 3,
    explanation: "Total input = services + rejected = 32 + 66 = 98 quads (first law), so 66 ÷ 98 × 100 ≈ 67%. 33% is the share delivered as services, 206% divides rejected by services, and 49% divides services by rejected.",
    partNumber: 4,
    partTitle: "Reading Energy Data",
  },

  {
    id: 'aeene-ent-4b',
    question: "In one country, renewables' share of total energy rose from 8% to 14%, while renewable energy use rose from 2.0 EJ to 4.2 EJ. Which statement describes both changes correctly?",
    options: [
      "Share up 75%; use up 2.2 percentage points",
      "Share up 6 percentage points; use up 110%",
      "Share up 6%; use up 2.2%",
      "Share up 6 percentage points; use up 52%",
    ],
    correctIndex: 1,
    explanation: "A change in a share is the difference in percentage points: 14 − 8 = 6 points. A change in an amount is a percent change: (4.2 − 2.0) ÷ 2.0 × 100 = 110%. 52% divides by the new value, and the other choices mix up the two kinds of change.",
    partNumber: 4,
    partTitle: "Reading Energy Data",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Conserving Energy: Buildings, Appliances and Transportation
  // ═══════════════════════════════════════════════════
  {
    id: 'aeene-ent-5a',
    question: "An old freezer uses 1.6 kWh of electricity per day, and a new efficient model uses 0.9 kWh per day. Electricity costs \\$0.15 per kWh. About how much money does the new freezer save per year?",
    options: [
      "\\$38",
      "\\$88",
      "\\$0.11",
      "\\$255",
    ],
    correctIndex: 0,
    explanation: "Energy saved = (1.6 − 0.9) × 365 = 255.5 kWh per year, and 255.5 × \\$0.15 ≈ \\$38. \\$88 is the old freezer's whole yearly cost, \\$0.11 is the saving for one day, and 255 is the energy saved in kWh, not dollars.",
    partNumber: 5,
    partTitle: "Conserving Energy: Buildings, Appliances and Transportation",
  },

  {
    id: 'aeene-ent-5b',
    question: "Many utilities charge higher electricity prices on hot summer afternoons than at night. What is the main purpose of this time-of-use pricing?",
    options: [
      "To lower the average price customers pay each month",
      "To encourage customers to run air conditioners longer",
      "To shift use off the peak so fewer plants are needed",
      "To raise total electricity use so plants run more efficiently",
    ],
    correctIndex: 2,
    explanation: "Utilities must build enough capacity for peak demand; pricing peak hours higher shifts flexible uses such as dishwashers and car charging to night, avoiding plants that would run only a few hours a year. It is not meant to raise use or lower average bills.",
    partNumber: 5,
    partTitle: "Conserving Energy: Buildings, Appliances and Transportation",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: AP Exam Practice
  // ═══════════════════════════════════════════════════
  {
    id: 'aeene-ent-6a',
    question: "A school replaces 500 fixtures drawing 80 W each with LEDs drawing 32 W each. The lights run 12 hours a day for 200 days a year, electricity costs \\$0.15 per kWh, and the retrofit costs \\$34,560. What is the payback period?",
    options: [
      "4 years",
      "2.2 years",
      "0.6 years",
      "2.4 years",
    ],
    correctIndex: 0,
    explanation: "Power saved = 500 × 48 W = 24 kW; energy saved = 24 × 12 × 200 = 57,600 kWh; savings = 57,600 × \\$0.15 = \\$8,640 per year; payback = \\$34,560 ÷ \\$8,640 = 4 years. 2.2 years uses 365 days, 0.6 years skips the price, and 2.4 years counts the full 80 W as saved.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  {
    id: 'aeene-ent-6b',
    question: "A combined heat and power unit would save much more fuel at a hospital than at a high school of similar size. Why?",
    options: [
      "A school needs heat for part of the day and part of the year",
      "Schools use far more electricity per student than hospitals",
      "Hospital boilers burn cleaner fuel than school boilers do",
      "Schools are too small to generate electricity on site",
    ],
    correctIndex: 0,
    explanation: "CHP saves fuel only when its captured waste heat is put to use, and a hospital needs heat and hot water around the clock all year, while a school stands mostly empty at night and in summer. The buildings are similar in size, and fuel type or electricity per student does not decide how much waste heat is used.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis Review
  // ═══════════════════════════════════════════════════
  {
    id: 'aeene-ent-7a',
    question: "A household saves 1,500 kWh of electricity a year. Its power plant delivers electricity at 30% overall efficiency. About how much fuel energy does this saving avoid at the plant?",
    options: [
      "450 kWh",
      "1,950 kWh",
      "5,000 kWh",
      "1,050 kWh",
    ],
    correctIndex: 2,
    explanation: "Fuel energy = electricity ÷ efficiency = 1,500 ÷ 0.30 = 5,000 kWh. Multiplying by 0.30 (450 kWh) goes the wrong direction, and 1,950 and 1,050 kWh add or subtract 30% instead of dividing.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },

  {
    id: 'aeene-ent-7b',
    question: "Why does saving one unit of electricity at home save more than one unit of energy overall?",
    options: [
      "Homes waste most electricity as light rather than as heat",
      "About two-thirds of a fossil plant's fuel energy becomes waste heat",
      "Power plants turn more energy into power as demand rises",
      "Home wiring loses most electrical energy before use",
    ],
    correctIndex: 1,
    explanation: "A typical fossil-fuel plant converts only about a third of its fuel's energy into delivered electricity, so each kilowatt-hour avoided at the meter avoids burning roughly three kilowatt-hours of fuel. Home wiring losses are small, and plant efficiency does not rise with demand.",
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
    { partNumber: 2, partTitle: "Global Energy Use: Who Uses What, and Why" },
    { partNumber: 3, partTitle: "Net Energy, EROI and Cogeneration" },
    { partNumber: 4, partTitle: "Reading Energy Data" },
    { partNumber: 5, partTitle: "Conserving Energy: Buildings, Appliances and Transportation" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
