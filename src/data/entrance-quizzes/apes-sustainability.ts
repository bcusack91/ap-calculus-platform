/**
 * Entrance Quiz — Sustainability & the Future
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — What Sustainability Means
 *  2 — Ecological Footprint & Carrying Capacity
 *  3 — Renewable Energy & the Energy Transition
 *  4 — Sustainable Agriculture, Forestry & Fisheries
 *  5 — Waste, the Circular Economy & the 3 R's
 *  6 — Green Solutions: Buildings, Cities & Efficiency
 *  7 — Policy, the Commons & Mastery Check
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ═══════════════════════════════════════════════════
  // Part 1: What Sustainability Means
  // ═══════════════════════════════════════════════════
  {
    id: 'aesus-ent-1a',
    question: "A village's woodland regrows about 300 t of wood per year, but villagers cut about 450 t per year for fuel. Which description fits this situation?",
    options: [
      "A renewable used unsustainably",
      "A nonrenewable resource being mined",
      "A sustainable harvest, since wood regrows",
      "An ecosystem service with no real limit",
    ],
    correctIndex: 0,
    explanation: "Wood is renewable, but cutting 450 t against 300 t of regrowth draws down the stock each year, so the use is unsustainable. Renewable does not automatically mean sustainable; the harvest must stay at or below the regeneration rate.",
    partNumber: 1,
    partTitle: "What Sustainability Means",
  },

  {
    id: 'aesus-ent-1b',
    question: "A company builds a large solar farm that cuts regional emissions, but it displaces local farmers without compensation and leaves the town's economy weaker. Which pillars of sustainability does the project fail?",
    options: [
      "None, because it lowers emissions",
      "Only the environmental pillar",
      "The economic and social pillars",
      "The environmental and economic pillars",
    ],
    correctIndex: 2,
    explanation: "True sustainability balances environmental, economic and social (equity) goals; this project helps the environment but harms people's livelihoods and the local economy. A practice that is green but unjust or economically damaging is not fully sustainable.",
    partNumber: 1,
    partTitle: "What Sustainability Means",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Ecological Footprint & Carrying Capacity
  // ═══════════════════════════════════════════════════
  {
    id: 'aesus-ent-2a',
    question: "A country's average ecological footprint is 7.2 global hectares per person, while Earth's biocapacity is about 1.6 global hectares per person. How many Earths would be needed if everyone lived this way?",
    options: [
      "5.6 Earths",
      "4.5 Earths",
      "0.22 Earths",
      "8.8 Earths",
    ],
    correctIndex: 1,
    explanation: "Earths needed = footprint ÷ biocapacity = 7.2 ÷ 1.6 = 4.5. 5.6 is the difference, not the ratio, 0.22 inverts the ratio, and 8.8 adds the two values.",
    partNumber: 2,
    partTitle: "Ecological Footprint & Carrying Capacity",
  },

  {
    id: 'aesus-ent-2b',
    question: "Using I = P × A × T, why can a wealthy country with a modest population have a larger total footprint than a much more populous low-income country?",
    options: [
      "Its population grows faster each year",
      "Its larger land area raises its footprint",
      "Its imported goods are counted twice in its footprint",
      "High consumption per person outweighs its smaller population",
    ],
    correctIndex: 3,
    explanation: "Impact is the product of population, affluence and technology, so very high consumption per person (A), often with resource-intensive technology (T), can multiply a modest population into a large total impact. Land area is not a term in I = P × A × T, imports are counted once, and the stem gives the country a modest population.",
    partNumber: 2,
    partTitle: "Ecological Footprint & Carrying Capacity",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Renewable Energy & the Energy Transition
  // ═══════════════════════════════════════════════════
  {
    id: 'aesus-ent-3a',
    question: "Burning biomass for energy releases carbon dioxide. Why is it still described as roughly carbon-neutral rather than as zero-emission?",
    options: [
      "Its CO₂ stays near the ground, where it traps less heat",
      "Regrowing plants reabsorb an equal amount of CO₂",
      "Burning it releases mostly methane, which breaks down fast",
      "Plants burning it must store its CO₂ underground by law",
    ],
    correctIndex: 1,
    explanation: "Burning biomass does release CO₂ (and particulates), but if the plants are regrown they take the same carbon back out of the air over a full cycle. Its CO₂ mixes into the atmosphere like any other, burning releases mainly CO₂ rather than methane, and no law requires capture.",
    partNumber: 3,
    partTitle: "Renewable Energy & the Energy Transition",
  },

  {
    id: 'aesus-ent-3b',
    question: "A region gets much of its electricity from solar panels and needs power after sunset. Which approach most directly addresses this gap?",
    options: [
      "Storing surplus in batteries",
      "Building more panels on the same land",
      "Installing panels that track the sun",
      "Spacing panels farther apart to cut shading",
    ],
    correctIndex: 0,
    explanation: "Batteries (or pumped-storage hydro) store electricity produced during sunny hours and release it when demand continues after dark. More panels, sun-tracking mounts and wider spacing all raise daytime output but still produce nothing after sunset.",
    partNumber: 3,
    partTitle: "Renewable Energy & the Energy Transition",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Sustainable Agriculture, Forestry & Fisheries
  // ═══════════════════════════════════════════════════
  {
    id: 'aesus-ent-4a',
    question: "A managed forest holds 800,000 m³ of timber and grows by 2.5% per year. What is the largest annual harvest that keeps the standing timber from declining?",
    options: [
      "20,000 m³",
      "2,000 m³",
      "820,000 m³",
      "200,000 m³",
    ],
    correctIndex: 0,
    explanation: "Sustainable yield equals annual growth: 0.025 × 800,000 = 20,000 m³ per year. 200,000 m³ uses 25%, 2,000 m³ uses 0.25%, and 820,000 m³ is the stock after a year of growth, not the harvest.",
    partNumber: 4,
    partTitle: "Sustainable Agriculture, Forestry & Fisheries",
  },

  {
    id: 'aesus-ent-4b',
    question: "For a fish population that follows logistic growth, at about what population size does the maximum sustainable yield occur?",
    options: [
      "Near the full carrying capacity",
      "When the stock is nearly gone",
      "Near half of the carrying capacity",
      "Wherever the catch exceeds regrowth",
    ],
    correctIndex: 2,
    explanation: "A logistic population adds new individuals fastest near half of its carrying capacity (K/2), so keeping the stock near that size allows the largest sustainable harvest. At full K growth is near zero, a depleted stock grows slowly, and catching more than regrowth shrinks the stock.",
    partNumber: 4,
    partTitle: "Sustainable Agriculture, Forestry & Fisheries",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Waste, the Circular Economy & the 3 R's
  // ═══════════════════════════════════════════════════
  {
    id: 'aesus-ent-5a',
    question: "A town generates 24,000 t of waste a year. It recycles 7,200 t and composts 3,600 t. What is its diversion rate?",
    options: [
      "30%",
      "15%",
      "45%",
      "82%",
    ],
    correctIndex: 2,
    explanation: "Diversion = (7,200 + 3,600) ÷ 24,000 × 100 = 45%. 30% counts only recycling, 15% counts only composting, and 82% divides by the waste left for disposal instead of the total.",
    partNumber: 5,
    partTitle: "Waste, the Circular Economy & the 3 R's",
  },

  {
    id: 'aesus-ent-5b',
    question: "Which practice best represents a circular economy rather than a linear one?",
    options: [
      "Designing phones to be repaired and their parts recovered",
      "Burying worn-out phones in a sanitary landfill",
      "Buying a new phone every year and discarding the old one",
      "Burning old phones in an incinerator to cut their volume",
    ],
    correctIndex: 0,
    explanation: "A circular economy designs waste out by keeping products and materials in use through repair, reuse and recovery. Landfilling, discarding and incinerating follow the linear take-make-dispose path.",
    partNumber: 5,
    partTitle: "Waste, the Circular Economy & the 3 R's",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: Green Solutions: Buildings, Cities & Efficiency
  // ═══════════════════════════════════════════════════
  {
    id: 'aesus-ent-6a',
    question: "A homeowner installs solar panels costing \\$15,000 and receives a \\$3,000 rebate. The panels save \\$1,200 per year on electricity. What is the simple payback period?",
    options: [
      "12.5 years",
      "15 years",
      "0.1 years",
      "10 years",
    ],
    correctIndex: 3,
    explanation: "Net cost = \\$15,000 − \\$3,000 = \\$12,000, and payback = \\$12,000 ÷ \\$1,200 per year = 10 years. 12.5 years ignores the rebate, 15 years adds the rebate to the cost, and 0.1 years divides savings by cost.",
    partNumber: 6,
    partTitle: "Green Solutions: Buildings, Cities & Efficiency",
  },

  {
    id: 'aesus-ent-6b',
    question: "Why are heat pumps far more energy-efficient for heating a home than electric resistance heaters?",
    options: [
      "They store heat by day and release it at night",
      "They move existing heat instead of generating it",
      "They run at a higher voltage than resistance heaters",
      "Their coils lose less heat into the walls",
    ],
    correctIndex: 1,
    explanation: "A heat pump uses electricity to move heat from the outdoor air or ground into the home, delivering several units of heat for each unit of electricity, while a resistance heater converts electricity to heat one for one. Voltage, heat storage and coil losses are not the reason.",
    partNumber: 6,
    partTitle: "Green Solutions: Buildings, Cities & Efficiency",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Policy, the Commons & Mastery Check
  // ═══════════════════════════════════════════════════
  {
    id: 'aesus-ent-7a',
    question: "A carbon tax of \\$65 per ton of CO₂ applies to a plant that emits 3,200 t per year. The plant then cuts its emissions by 40%. What is its new annual tax bill?",
    options: [
      "\\$208,000",
      "\\$83,200",
      "\\$1,920",
      "\\$124,800",
    ],
    correctIndex: 3,
    explanation: "New emissions = 3,200 × 0.60 = 1,920 t, and 1,920 × \\$65 = \\$124,800. \\$208,000 is the bill before the cut, \\$83,200 is the amount saved, and 1,920 is the new emissions in tons.",
    partNumber: 7,
    partTitle: "Policy, the Commons & Mastery Check",
  },

  {
    id: 'aesus-ent-7b',
    question: "Which of the following is an example of a negative externality?",
    options: [
      "A factory paying its workers for overtime",
      "A wetland filtering a city's water at no charge",
      "A subsidy that lowers the price of solar panels",
      "Towns downstream paying to treat a factory's pollution",
    ],
    correctIndex: 3,
    explanation: "A negative externality is a cost of an activity borne by third parties rather than the producer, such as downstream towns paying to clean water a factory polluted. Wages are a direct cost to the producer, a subsidy is a policy tool, and the wetland provides a free ecosystem service, a benefit.",
    partNumber: 7,
    partTitle: "Policy, the Commons & Mastery Check",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "What Sustainability Means" },
    { partNumber: 2, partTitle: "Ecological Footprint & Carrying Capacity" },
    { partNumber: 3, partTitle: "Renewable Energy & the Energy Transition" },
    { partNumber: 4, partTitle: "Sustainable Agriculture, Forestry & Fisheries" },
    { partNumber: 5, partTitle: "Waste, the Circular Economy & the 3 R's" },
    { partNumber: 6, partTitle: "Green Solutions: Buildings, Cities & Efficiency" },
    { partNumber: 7, partTitle: "Policy, the Commons & Mastery Check" },
  ]
}
