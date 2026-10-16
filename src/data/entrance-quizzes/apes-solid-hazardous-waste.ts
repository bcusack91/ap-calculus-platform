/**
 * Entrance Quiz — Solid & Hazardous Waste
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — What Is Waste? Streams, Composition & Generation
 *  2 — Sanitary Landfills
 *  3 — Incineration & Waste-to-Energy
 *  4 — The Waste Hierarchy: Reduce, Reuse, Recycle, Compost
 *  5 — Hazardous Waste, E-Waste & Superfund
 *  6 — Plastics, Ocean Pollution & Global Waste
 *  7 — Integrated Management, Economics & Mastery Check
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ═══════════════════════════════════════════════════
  // Part 1: What Is Waste? Streams, Composition & Generation
  // ═══════════════════════════════════════════════════
  {
    id: 'aeshw-ent-1a',
    question: "A city of 400,000 people generates 360,000 t of municipal solid waste per year. About how much is that per person per day? (1 t = 1,000 kg)",
    options: [
      "2.5 kg",
      "900 kg",
      "0.9 kg",
      "25 kg",
    ],
    correctIndex: 0,
    explanation: "Per person per year = 360,000,000 kg ÷ 400,000 = 900 kg, and 900 ÷ 365 ≈ 2.5 kg per day. 900 kg is the yearly amount, 0.9 kg divides by 1,000 instead of 365, and 25 kg slips a decimal place.",
    partNumber: 1,
    partTitle: "What Is Waste? Streams, Composition & Generation",
  },

  {
    id: 'aeshw-ent-1b',
    question: "Which two categories make up the largest shares of U.S. municipal solid waste by mass, before recycling?",
    options: [
      "Plastics and glass bottles",
      "Yard trimmings and rubber",
      "Metals and old textiles",
      "Paper and food scraps",
    ],
    correctIndex: 3,
    explanation: "Paper and paperboard (about 23%) and food waste (about 22%) are the two largest parts of MSW, and both are organic materials that could be recycled or composted. Plastics are about 13% and metals about 9%.",
    partNumber: 1,
    partTitle: "What Is Waste? Streams, Composition & Generation",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Sanitary Landfills
  // ═══════════════════════════════════════════════════
  {
    id: 'aeshw-ent-2a',
    question: "Landfill gas is about 50% methane by volume. A landfill's wells collect 1,400,000 m³ of gas a year, but monitoring shows they capture only 70% of the gas the landfill produces. How much methane does the landfill produce each year?",
    options: [
      "700,000 m³",
      "2,000,000 m³",
      "490,000 m³",
      "1,000,000 m³",
    ],
    correctIndex: 3,
    explanation: "Total gas produced = 1,400,000 ÷ 0.70 = 2,000,000 m³, and half of that is methane: 1,000,000 m³. 700,000 m³ counts only the methane in the collected gas, 490,000 m³ multiplies by 0.70 instead of dividing, and 2,000,000 m³ is all of the gas, not just the methane.",
    partNumber: 2,
    partTitle: "Sanitary Landfills",
  },

  {
    id: 'aeshw-ent-2b',
    question: "A landfill sits on sandy soil above a shallow water table. If its bottom liner fails, which risk is greatest?",
    options: [
      "Methane is no longer produced inside the waste",
      "The daily soil cover is washed off the surface",
      "Leachate soon seeps down into the groundwater below",
      "The waste decomposes faster with more oxygen",
    ],
    correctIndex: 2,
    explanation: "Leachate forms as rain percolates through buried waste; without a working liner it drains through permeable sand straight into a shallow aquifer, the main pollution risk of landfills. A liner failure does not stop methane production or remove the cover.",
    partNumber: 2,
    partTitle: "Sanitary Landfills",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Incineration & Waste-to-Energy
  // ═══════════════════════════════════════════════════
  {
    id: 'aeshw-ent-3a',
    question: "An incinerator's ash fills 1,500 m³, which is 10% of the original volume of the waste it burned. What was the original volume of the waste?",
    options: [
      "150 m³",
      "15,000 m³",
      "1,650 m³",
      "13,500 m³",
    ],
    correctIndex: 1,
    explanation: "If 1,500 m³ is 10% of the original, the original volume is 1,500 ÷ 0.10 = 15,000 m³. 150 m³ multiplies by 0.10 instead of dividing, 1,650 m³ adds 10%, and 13,500 m³ is the volume removed by burning.",
    partNumber: 3,
    partTitle: "Incineration & Waste-to-Energy",
  },

  {
    id: 'aeshw-ent-3b',
    question: "Waste-to-energy incineration produces electricity, yet it ranks below recycling in the waste hierarchy. Why?",
    options: [
      "Burning destroys reusable materials",
      "Incinerators produce no ash that needs disposal",
      "Recycling releases more air pollution than burning",
      "Incinerators take up more land than landfills do",
    ],
    correctIndex: 0,
    explanation: "Recycling keeps materials in use and saves the energy and resources of making new ones, while burning destroys them and recovers only part of their energy; a WTE plant also needs a steady supply of trash. Incinerators do produce ash, including toxic fly ash.",
    partNumber: 3,
    partTitle: "Incineration & Waste-to-Energy",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: The Waste Hierarchy: Reduce, Reuse, Recycle, Compost
  // ═══════════════════════════════════════════════════
  {
    id: 'aeshw-ent-4a',
    question: "A city generates 150,000 t of MSW in a year. It recycles 33,000 t and composts 12,000 t. What is its diversion rate (recycling plus composting, as a percent of total generated)?",
    options: [
      "22%",
      "30%",
      "8%",
      "43%",
    ],
    correctIndex: 1,
    explanation: "Diversion = (33,000 + 12,000) ÷ 150,000 × 100 = 30%. 22% counts only recycling, 8% counts only composting, and 43% divides by the amount left for disposal instead of the total generated.",
    partNumber: 4,
    partTitle: "The Waste Hierarchy: Reduce, Reuse, Recycle, Compost",
  },

  {
    id: 'aeshw-ent-4b',
    question: "Why are recycled aluminum cans so valuable compared with most other recyclables?",
    options: [
      "Recycling saves about 95% of the energy of new metal",
      "Recycled aluminum is lighter than newly mined metal",
      "Aluminum ore is rare, so mines are nearly used up",
      "Recycled aluminum resists corrosion better than new metal",
    ],
    correctIndex: 0,
    explanation: "Making aluminum from bauxite ore takes enormous energy, and recycling a can into a new can saves about 95% of it, in a closed loop that can repeat indefinitely. Recycled aluminum has the same properties as new metal, and bauxite is plentiful; the value comes from the energy saved.",
    partNumber: 4,
    partTitle: "The Waste Hierarchy: Reduce, Reuse, Recycle, Compost",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Hazardous Waste, E-Waste & Superfund
  // ═══════════════════════════════════════════════════
  {
    id: 'aeshw-ent-5a',
    question: "In the 1970s, chemicals buried decades earlier began seeping into homes and a school at Love Canal, New York. Which law did this disaster lead to, and what does that law do?",
    options: [
      "A cradle-to-grave law for waste at operating sites",
      "The Clean Air Act, which limits smokestack emissions",
      "Superfund, which funds cleanup of abandoned toxic sites",
      "The Safe Drinking Water Act, which sets tap-water limits",
    ],
    correctIndex: 2,
    explanation: "Love Canal led Congress to pass CERCLA (Superfund) in 1980, which funds cleanup of abandoned hazardous-waste sites and makes responsible parties pay. RCRA (1976) manages hazardous waste being produced now, from cradle to grave.",
    partNumber: 5,
    partTitle: "Hazardous Waste, E-Waste & Superfund",
  },

  {
    id: 'aeshw-ent-5b',
    question: "Superfund follows the polluter-pays principle. What happens when no responsible party can be found for a contaminated site?",
    options: [
      "The site is simply left uncleaned",
      "Nearby residents must share the cost equally",
      "A federal trust fund pays for cleanup",
      "The state sells the land to a new developer",
    ],
    correctIndex: 2,
    explanation: "When polluters cannot be identified or cannot pay, the Superfund trust fund covers the cleanup so the site is still addressed. Residents are not billed, and selling the land would not remove the contamination.",
    partNumber: 5,
    partTitle: "Hazardous Waste, E-Waste & Superfund",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: Plastics, Ocean Pollution & Global Waste
  // ═══════════════════════════════════════════════════
  {
    id: 'aeshw-ent-6a',
    question: "Why does floating plastic collect in a huge patch in the middle of the North Pacific Ocean?",
    options: [
      "Nearby island nations dump most of their waste there",
      "Saltier water there lets more of the plastic stay afloat",
      "Rotating currents called gyres concentrate the debris",
      "Busy shipping lanes cross there, and ships dump trash",
    ],
    correctIndex: 2,
    explanation: "Large circular ocean currents (gyres) sweep floating debris inward toward their centers, forming garbage patches. Most ocean plastic comes from land-based waste carried by rivers and wind, not from island dumping or passing ships, and salinity there does not explain it.",
    partNumber: 6,
    partTitle: "Plastics, Ocean Pollution & Global Waste",
  },

  {
    id: 'aeshw-ent-6b',
    question: "A city proposes building a new incinerator in a low-income neighborhood that already hosts two landfills and a waste-transfer station. Which concept does this situation most directly raise?",
    options: [
      "The tragedy of the commons",
      "Biomagnification",
      "Source reduction",
      "Environmental justice",
    ],
    correctIndex: 3,
    explanation: "Environmental justice concerns the unequal siting of polluting facilities, which often falls hardest on low-income communities and communities of color. The tragedy of the commons concerns shared resources, source reduction is waste prevention, and biomagnification concerns food chains.",
    partNumber: 6,
    partTitle: "Plastics, Ocean Pollution & Global Waste",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Integrated Management, Economics & Mastery Check
  // ═══════════════════════════════════════════════════
  {
    id: 'aeshw-ent-7a',
    question: "A town generates 60,000 t of MSW a year. A pay-as-you-throw program cuts total generation by 25%, and the town then recycles and composts 18,000 t. What is its new diversion rate?",
    options: [
      "30%",
      "40%",
      "25%",
      "60%",
    ],
    correctIndex: 1,
    explanation: "New generation = 60,000 × 0.75 = 45,000 t, and 18,000 ÷ 45,000 × 100 = 40%. 30% divides by the original 60,000 t, 25% is the size of the reduction, and 60% is the share still sent to disposal.",
    partNumber: 7,
    partTitle: "Integrated Management, Economics & Mastery Check",
  },

  {
    id: 'aeshw-ent-7b',
    question: "Why do pay-as-you-throw programs, which charge households for each bag of trash, reduce the amount of waste generated?",
    options: [
      "They send most trash to waste-to-energy plants",
      "They require factories to take back packaging",
      "They limit each home to one bag of trash a week",
      "They make each bag's cost visible",
    ],
    correctIndex: 3,
    explanation: "When trash collection is free or flat-rate, there is no reason to throw away less; charging per bag puts a price on each unit of waste, so households reduce and recycle more. Take-back rules are extended producer responsibility, waste-to-energy handles trash after it is made, and PAYT prices bags rather than capping them.",
    partNumber: 7,
    partTitle: "Integrated Management, Economics & Mastery Check",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "What Is Waste? Streams, Composition & Generation" },
    { partNumber: 2, partTitle: "Sanitary Landfills" },
    { partNumber: 3, partTitle: "Incineration & Waste-to-Energy" },
    { partNumber: 4, partTitle: "The Waste Hierarchy: Reduce, Reuse, Recycle, Compost" },
    { partNumber: 5, partTitle: "Hazardous Waste, E-Waste & Superfund" },
    { partNumber: 6, partTitle: "Plastics, Ocean Pollution & Global Waste" },
    { partNumber: 7, partTitle: "Integrated Management, Economics & Mastery Check" },
  ]
}
