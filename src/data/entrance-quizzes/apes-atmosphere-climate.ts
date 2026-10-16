/**
 * Entrance Quiz — Atmosphere & Climate
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Core Concepts
 *  2 — Greenhouse Gases in Depth
 *  3 — Impacts of Climate Change
 *  4 — Reading Climate Data
 *  5 — Ocean Warming, Ocean Acidification and Responses
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
    id: 'aeatc-ent-1a',
    question: "Earth's natural greenhouse effect keeps the average surface about 33 °C warmer than it would be without greenhouse gases. Which statement about this natural effect is correct?",
    options: [
      "It is caused entirely by recent human emissions",
      "It cools the surface by reflecting incoming sunlight",
      "It existed before humans and makes the planet habitable",
      "It first appeared with the Industrial Revolution",
    ],
    correctIndex: 2,
    explanation: "Greenhouse gases such as water vapor and CO₂ have warmed Earth for its whole history, keeping most water liquid; the concern is the enhanced effect from added human emissions. The effect traps outgoing infrared rather than reflecting sunlight.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  {
    id: 'aeatc-ent-1b',
    question: "Which of the following is an example of a negative feedback in the climate system?",
    options: [
      "More CO₂ boosts plant growth, which removes more CO₂",
      "Melting ice exposes dark water that absorbs more heat",
      "Thawing permafrost releases methane that warms the air",
      "Warmer air holds more water vapor, which traps more heat",
    ],
    correctIndex: 0,
    explanation: "A negative feedback counteracts the original change: extra CO₂ speeds plant growth, and the plants draw down some of that CO₂. The ice-albedo, permafrost-methane and water-vapor loops all amplify warming, so they are positive feedbacks.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Greenhouse Gases in Depth
  // ═══════════════════════════════════════════════════
  {
    id: 'aeatc-ent-2a',
    question: "A farm emits 1,500 t of CO₂, 20 t of methane (GWP 30) and 2 t of nitrous oxide (GWP 270) per year. About what percent of its CO₂-equivalent emissions comes from nitrous oxide?",
    options: [
      "20%",
      "0.1%",
      "26.5%",
      "47.4%",
    ],
    correctIndex: 0,
    explanation: "CO₂-eq: methane 20 × 30 = 600 t, nitrous oxide 2 × 270 = 540 t, total = 1,500 + 600 + 540 = 2,640 t, so 540 ÷ 2,640 × 100 ≈ 20%. 0.1% compares raw masses, 26.5% leaves methane out of the total, and 47.4% leaves CO₂ out of it.",
    partNumber: 2,
    partTitle: "Greenhouse Gases in Depth",
  },

  {
    id: 'aeatc-ent-2b',
    question: "Carbon dioxide has the lowest global warming potential of the major greenhouse gases, yet it causes most human-driven warming. Why?",
    options: [
      "It absorbs more infrared per kilogram than methane does",
      "People emit vastly more of it, and much of it lasts for centuries",
      "It is the main gas in the air that absorbs infrared",
      "Its warming potential rises as its concentration grows",
    ],
    correctIndex: 1,
    explanation: "GWP compares heat trapped per kilogram, and CO₂ is weak per kilogram; it dominates because people emit enormous masses of it and part of it stays in the air for centuries. Methane traps more heat per kilogram, water vapor and other gases also absorb infrared, and GWP is a fixed per-kilogram comparison.",
    partNumber: 2,
    partTitle: "Greenhouse Gases in Depth",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Impacts of Climate Change
  // ═══════════════════════════════════════════════════
  {
    id: 'aeatc-ent-3a',
    question: "A low coastal plain rises 1 m in elevation for every 250 m inland. If sea level rises 0.4 m, about how far inland will the shoreline move, ignoring erosion?",
    options: [
      "625 m",
      "100 m",
      "250 m",
      "40 m",
    ],
    correctIndex: 1,
    explanation: "Each 1 m of rise moves the shore 250 m inland, so 0.4 m × 250 m per m = 100 m. 625 m divides 250 by 0.4 instead of multiplying, and 250 m is the retreat for a full meter of rise.",
    partNumber: 3,
    partTitle: "Impacts of Climate Change",
  },

  {
    id: 'aeatc-ent-3b',
    question: "Sea-level rise harms many coastal ecosystems. Which outcome is a positive effect on some marine ecosystems?",
    options: [
      "Flooded shelves can offer new shallow habitat",
      "Deeper reefs receive more light for photosynthesis",
      "Coastal wetlands expand wherever the sea rises",
      "Saltwater intrusion improves estuary nursery grounds",
    ],
    correctIndex: 0,
    explanation: "Flooding of low continental shelves can open new shallow habitat for marine organisms. Deeper water receives less light, not more, wetlands drown if they cannot build up or move inland, and saltwater intrusion damages freshwater and estuary habitats.",
    partNumber: 3,
    partTitle: "Impacts of Climate Change",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Reading Climate Data
  // ═══════════════════════════════════════════════════
  {
    id: 'aeatc-ent-4a',
    question: "A global temperature anomaly rose from +0.15 °C in 1985 to +0.95 °C in 2025. What was the average rate of change?",
    options: [
      "0.02 °C per decade",
      "0.27 °C per decade",
      "0.8 °C per decade",
      "0.2 °C per decade",
    ],
    correctIndex: 3,
    explanation: "Rate = (0.95 − 0.15) ÷ 4 decades = 0.80 ÷ 4 = 0.2 °C per decade. 0.02 is the rate per year mislabeled as per decade, 0.8 is the total change, and 0.27 divides by three decades instead of four.",
    partNumber: 4,
    partTitle: "Reading Climate Data",
  },

  {
    id: 'aeatc-ent-4b',
    question: "Milankovitch cycles, the slow changes in Earth's orbit and tilt, paced the ice ages. Why can they not explain the warming observed since 1950?",
    options: [
      "They are too weak to change global temperatures much",
      "They mainly affect the Southern Hemisphere's climate",
      "Their effect is canceled by recent volcanic eruptions",
      "They act over tens of thousands of years, far too slowly",
    ],
    correctIndex: 3,
    explanation: "Orbital cycles change the distribution of sunlight over periods of about 23,000 to 100,000 years, so they cannot cause a rapid rise over a few decades. They were strong enough to pace the ice ages, they affect both hemispheres, and volcanic eruptions cause only brief cooling.",
    partNumber: 4,
    partTitle: "Reading Climate Data",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Ocean Warming, Ocean Acidification and Responses
  // ═══════════════════════════════════════════════════
  {
    id: 'aeatc-ent-5a',
    question: "A carbon tax of \\$60 per tonne of CO₂ is placed on gasoline. A household burns 900 gallons a year, and each gallon releases 8.9 kg of CO₂. About how much tax does the household pay per year?",
    options: [
      "\\$480,600",
      "\\$481",
      "\\$48",
      "\\$534",
    ],
    correctIndex: 1,
    explanation: "CO₂ = 900 × 8.9 kg = 8,010 kg = 8.01 t, and 8.01 t × \\$60/t ≈ \\$481. \\$480,600 skips the kilogram-to-tonne conversion, \\$48 slips a decimal place, and \\$534 treats 8.9 as the household's total tonnes.",
    partNumber: 5,
    partTitle: "Ocean Warming, Ocean Acidification and Responses",
  },

  {
    id: 'aeatc-ent-5b',
    question: "As surface waters in parts of the open ocean warm, phytoplankton productivity there declines. What is the main reason?",
    options: [
      "Warm water dissolves the phytoplankton's cell walls",
      "Sea-level rise moves the phytoplankton below the light",
      "Warmer water holds more oxygen than algae can use",
      "Stratification limits nutrients rising from deep water",
    ],
    correctIndex: 3,
    explanation: "A warm surface layer floats on cold, dense water and mixes less, so fewer nutrients reach the sunlit surface where phytoplankton grow. Warmer water actually holds less oxygen, and a few millimeters of sea-level rise do not shift plankton out of the photic zone.",
    partNumber: 5,
    partTitle: "Ocean Warming, Ocean Acidification and Responses",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: AP Exam Practice
  // ═══════════════════════════════════════════════════
  {
    id: 'aeatc-ent-6a',
    question: "Sea level stood at 0 mm in 2005 and 60 mm in 2025, relative to 2005. If the 2005–2025 rate continues unchanged, what will sea level be in 2055 relative to 2005?",
    options: [
      "90 mm",
      "210 mm",
      "150 mm",
      "120 mm",
    ],
    correctIndex: 2,
    explanation: "Rate = 60 mm ÷ 20 yr = 3 mm/yr, so 2055 = 60 + (3 × 30) = 150 mm (equivalently 3 × 50 years). 90 mm forgets the 60 mm already risen, and 210 mm adds 50 years of rise on top of the 2025 value.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  {
    id: 'aeatc-ent-6b',
    question: "A herd of 500 cows releases 120 kg of methane per cow each year. A feed additive cuts that methane by 25%. Using a GWP of 30, how much CO₂-equivalent does the additive avoid each year?",
    options: [
      "1,800 t",
      "15 t",
      "450 t",
      "1,350 t",
    ],
    correctIndex: 2,
    explanation: "Methane = 500 × 120 kg = 60,000 kg = 60 t; 25% of that is 15 t avoided, and 15 t × 30 = 450 t CO₂-eq. 1,800 t is all of the herd's emissions, 15 t is the methane before applying GWP, and 1,350 t is what remains.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis Review
  // ═══════════════════════════════════════════════════
  {
    id: 'aeatc-ent-7a',
    question: "Which sequence correctly traces how burning fossil fuels contributes to sea-level rise?",
    options: [
      "More CO₂ thins the ozone layer, so more UV melts sea ice",
      "More CO₂ feeds plankton, so their growth raises the sea",
      "More CO₂ acidifies the sea, so the dissolved ice adds water",
      "More CO₂ traps infrared, so the ocean warms and expands",
    ],
    correctIndex: 3,
    explanation: "Greenhouse gases absorb and re-emit outgoing infrared, the ocean absorbs most of the trapped heat, and warmer water expands, alongside melting land ice. The ozone hole concerns ultraviolet light, not warming, and melting floating sea ice adds almost nothing to sea level.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },

  {
    id: 'aeatc-ent-7b',
    question: "A city records its coldest January in 30 years, and a student claims this disproves global warming. Which response best corrects the claim?",
    options: [
      "Cold months show warming has reversed in that one region",
      "Global warming should make each winter warmer than the last",
      "One month is weather, but climate is a long-term average",
      "Cold records show that ice is melting more slowly",
    ],
    correctIndex: 2,
    explanation: "Weather is short-term and varies a lot, while climate is the long-term average, and the global trend is warming even with occasional cold spells. Warming raises the average without making each winter warmer than the one before, and one month says nothing about ice melt.",
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
    { partNumber: 2, partTitle: "Greenhouse Gases in Depth" },
    { partNumber: 3, partTitle: "Impacts of Climate Change" },
    { partNumber: 4, partTitle: "Reading Climate Data" },
    { partNumber: 5, partTitle: "Ocean Warming, Ocean Acidification and Responses" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
