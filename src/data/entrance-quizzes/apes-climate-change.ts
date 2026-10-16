/**
 * Entrance Quiz — Climate Change
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Weather, Climate and the Natural Greenhouse Effect
 *  2 — Where Emissions Come From
 *  3 — Multiple Lines of Evidence
 *  4 — Feedbacks and Tipping Points
 *  5 — Ocean Warming, Acidification and Sea-Level Rise: Case Studies
 *  6 — Mitigation and Adaptation: Comparing Strategies
 *  7 — AP Exam Practice and Synthesis
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ═══════════════════════════════════════════════════
  // Part 1: Weather, Climate and the Natural Greenhouse Effect
  // ═══════════════════════════════════════════════════
  {
    id: 'aecch-ent-1a',
    question: "A city's average August high was 31.2 °C in 1991–2000, 31.8 °C in 2001–2010 and 32.4 °C in 2011–2020. What is its 1991–2020 climate normal for the August high?",
    options: [
      "31.8 °C",
      "32.4 °C",
      "95.4 °C",
      "1.2 °C",
    ],
    correctIndex: 0,
    explanation: "The decades are equal in length, so the 30-year normal is their average: (31.2 + 31.8 + 32.4) ÷ 3 = 31.8 °C. 32.4 °C is only the latest decade, 95.4 °C is the sum, and 1.2 °C is the change over the period.",
    partNumber: 1,
    partTitle: "Weather, Climate and the Natural Greenhouse Effect",
  },

  {
    id: 'aecch-ent-1b',
    question: "A region's average summer temperature rises by a small amount. What typically happens to the number of extremely hot days?",
    options: [
      "It stays the same, since only the average moved",
      "It rises by a much larger percentage than the average",
      "It falls, because the hottest days become cooler",
      "It rises by the same percentage as the average",
    ],
    correctIndex: 1,
    explanation: "Climate is a distribution of weather; when the whole bell curve shifts slightly warmer, the rare hot tail grows far more than the average does, so extreme heat days can double or triple. That is why warming is felt first through heat waves.",
    partNumber: 1,
    partTitle: "Weather, Climate and the Natural Greenhouse Effect",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Where Emissions Come From
  // ═══════════════════════════════════════════════════
  {
    id: 'aecch-ent-2a',
    question: "In 2019, humans released about 59 Gt of CO₂-equivalent greenhouse gases, and agriculture, forestry and other land use produced about 22% of that total. About how many gigatonnes came from that sector?",
    options: [
      "2.7 Gt",
      "22 Gt",
      "13 Gt",
      "46 Gt",
    ],
    correctIndex: 2,
    explanation: "Sector emissions = 0.22 × 59 Gt ≈ 13 Gt CO₂-eq. 2.7 divides 59 by 22 instead of taking 22%, 22 confuses the percent with the amount, and 46 Gt is the share from all other sectors.",
    partNumber: 2,
    partTitle: "Where Emissions Come From",
  },

  {
    id: 'aecch-ent-2b',
    question: "Rice paddies, cattle digestion, landfills and leaks from natural gas wells are all major human sources of which greenhouse gas?",
    options: [
      "Nitrous oxide",
      "Fluorinated gases",
      "Carbon dioxide",
      "Methane",
    ],
    correctIndex: 3,
    explanation: "Each of these sources releases methane, from anaerobic decay (paddies, landfills), digestion in cattle, or escaping natural gas. Nitrous oxide comes mainly from fertilized soils, and fluorinated gases come from refrigerants.",
    partNumber: 2,
    partTitle: "Where Emissions Come From",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Multiple Lines of Evidence
  // ═══════════════════════════════════════════════════
  {
    id: 'aecch-ent-3a',
    question: "About 360 Gt of melted land ice raises global sea level by about 1 mm. If mountain glaciers worldwide lose 180 Gt of ice per year, how much do they add to sea level each year?",
    options: [
      "0.5 mm/yr",
      "2 mm/yr",
      "5 mm/yr",
      "0.05 mm/yr",
    ],
    correctIndex: 0,
    explanation: "Sea-level rise = 180 Gt/yr ÷ 360 Gt per mm = 0.5 mm per year. 2 mm/yr inverts the division, and the other answers misplace the decimal point.",
    partNumber: 3,
    partTitle: "Multiple Lines of Evidence",
  },

  {
    id: 'aecch-ent-3b',
    question: "Arctic sea ice in September is larger this year than last year, and a commentator says the Arctic is now recovering. What is the main flaw in this claim?",
    options: [
      "One year is noise against a decades-long decline",
      "Sea ice grows as the Arctic warms, so a gain shows warming",
      "Satellite ice records are less reliable than ship reports",
      "September is the yearly ice maximum, so it misleads",
    ],
    correctIndex: 0,
    explanation: "Sea ice varies from year to year with weather, so one year's gain says little; the satellite record since 1979 shows the September minimum shrinking by roughly half. Warming shrinks sea ice, satellites measure it reliably, and September is the yearly minimum, not the maximum.",
    partNumber: 3,
    partTitle: "Multiple Lines of Evidence",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Feedbacks and Tipping Points
  // ═══════════════════════════════════════════════════
  {
    id: 'aecch-ent-4a',
    question: "Shrubs spreading across snowy Arctic tundra lower the late-winter surface albedo from 0.90 to 0.40. With 150 W/m² of sunlight, about how many times as much energy does the shrubby surface absorb?",
    options: [
      "6 times",
      "2.25 times",
      "0.17 times",
      "75 times",
    ],
    correctIndex: 0,
    explanation: "Absorbed = (1 − albedo) × incoming: snow absorbs 0.10 × 150 = 15 W/m²; shrubland absorbs 0.60 × 150 = 90 W/m²; 90 ÷ 15 = 6 times. 2.25 divides the albedos, 0.17 inverts the ratio, and 75 is the difference in W/m².",
    partNumber: 4,
    partTitle: "Feedbacks and Tipping Points",
  },

  {
    id: 'aecch-ent-4b',
    question: "Warming thaws Arctic permafrost, and microbes then decompose the thawed organic matter, releasing methane that causes further warming. What kind of process is this?",
    options: [
      "A negative feedback that damps warming",
      "A carbon sink that stores more carbon",
      "A positive feedback that amplifies warming",
      "A cooling effect that offsets the thaw",
    ],
    correctIndex: 2,
    explanation: "Warming causes thaw, thaw releases methane, and methane causes more warming, so the change reinforces itself: a positive feedback. Positive means self-reinforcing, not beneficial. Thawing permafrost releases carbon rather than storing it.",
    partNumber: 4,
    partTitle: "Feedbacks and Tipping Points",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Ocean Warming, Acidification and Sea-Level Rise: Case Studies
  // ═══════════════════════════════════════════════════
  {
    id: 'aecch-ent-5a',
    question: "After a marine heatwave, live coral covers 28% of a reef's seafloor, down from 40% before the event. What is the percent change in live coral cover?",
    options: [
      "−12%",
      "+30%",
      "−43%",
      "−30%",
    ],
    correctIndex: 3,
    explanation: "Percent change = (28 − 40) ÷ 40 × 100 = −30%. −12 is the change in percentage points, not percent, −43% divides by the new value, and +30% drops the sign of a decrease.",
    partNumber: 5,
    partTitle: "Ocean Warming, Acidification and Sea-Level Rise: Case Studies",
  },

  {
    id: 'aecch-ent-5b',
    question: "Oyster hatcheries in the Pacific Northwest now add sodium carbonate to the seawater they pump in, so larvae can build shells. How should this response be classified?",
    options: [
      "Mitigation: it removes CO₂ from the atmosphere",
      "Adaptation: it protects larvae, but CO₂ keeps rising",
      "Mitigation: it lowers the hatchery's own emissions",
      "Neither: it has no effect on the oyster larvae",
    ],
    correctIndex: 1,
    explanation: "Buffering the intake water copes with acidified seawater by adding carbonate for the larvae, which is adaptation; it does nothing to reduce the rising atmospheric CO₂ that causes acidification. Mitigation would cut emissions or remove CO₂.",
    partNumber: 5,
    partTitle: "Ocean Warming, Acidification and Sea-Level Rise: Case Studies",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: Mitigation and Adaptation: Comparing Strategies
  // ═══════════════════════════════════════════════════
  {
    id: 'aecch-ent-6a',
    question: "A city's LED streetlight project costs \\$120,000 per year, saves \\$180,000 per year in electricity, and avoids 1,500 t of CO₂-equivalent per year. What is its cost per tonne avoided?",
    options: [
      "\\$80",
      "−\\$40",
      "\\$40",
      "\\$200",
    ],
    correctIndex: 1,
    explanation: "Cost per tonne = (cost − savings) ÷ tonnes = (120,000 − 180,000) ÷ 1,500 = −\\$40, so the project pays for itself while cutting emissions. \\$80 ignores the savings, \\$40 drops the negative sign, and \\$200 adds the savings to the cost.",
    partNumber: 6,
    partTitle: "Mitigation and Adaptation: Comparing Strategies",
  },

  {
    id: 'aecch-ent-6b',
    question: "Why is cutting methane emissions often called the fastest way to slow warming over the next few decades?",
    options: [
      "Methane traps less heat per kilogram than CO₂ does",
      "It breaks down in about ten years",
      "Methane makes up the largest share of human emissions",
      "Cutting methane also lowers the ocean's absorption of CO₂",
    ],
    correctIndex: 1,
    explanation: "Methane traps much more heat per kilogram than CO₂ but breaks down in about a decade, so reducing emissions lowers its concentration, and its warming, within years. CO₂ is the largest share of emissions.",
    partNumber: 6,
    partTitle: "Mitigation and Adaptation: Comparing Strategies",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: AP Exam Practice and Synthesis
  // ═══════════════════════════════════════════════════
  {
    id: 'aecch-ent-7a',
    question: "In a lab test of ocean acidification, 5.00 g of crushed snail shell sits in low-pH seawater for 14 days and then weighs 4.85 g. What percent of its mass was lost?",
    options: [
      "97%",
      "15%",
      "3.0%",
      "0.03%",
    ],
    correctIndex: 2,
    explanation: "Mass lost = 5.00 − 4.85 = 0.15 g, and 0.15 ÷ 5.00 × 100 = 3.0%. 97% is the share remaining, 15% multiplies the mass lost by 100 without dividing by the starting mass, and 0.03% slips two decimal places.",
    partNumber: 7,
    partTitle: "AP Exam Practice and Synthesis",
  },

  {
    id: 'aecch-ent-7b',
    question: "In that study, beakers were set at pH 8.1 (today's surface ocean), 7.8 and 7.5, with four beakers at each pH, all at 20 °C. Which beakers serve as the control group?",
    options: [
      "The beakers at the lowest pH of 7.5",
      "The beakers that lost the most shell mass",
      "Every beaker, since all are held at 20 °C",
      "The beakers held at pH 8.1, the current value",
    ],
    correctIndex: 3,
    explanation: "The control is the baseline condition the treatments are compared against: seawater at today's surface pH of 8.1. Temperature is a variable held constant in all groups, not a control group, and the beakers losing the most mass are a result.",
    partNumber: 7,
    partTitle: "AP Exam Practice and Synthesis",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Weather, Climate and the Natural Greenhouse Effect" },
    { partNumber: 2, partTitle: "Where Emissions Come From" },
    { partNumber: 3, partTitle: "Multiple Lines of Evidence" },
    { partNumber: 4, partTitle: "Feedbacks and Tipping Points" },
    { partNumber: 5, partTitle: "Ocean Warming, Acidification and Sea-Level Rise: Case Studies" },
    { partNumber: 6, partTitle: "Mitigation and Adaptation: Comparing Strategies" },
    { partNumber: 7, partTitle: "AP Exam Practice and Synthesis" },
  ]
}
