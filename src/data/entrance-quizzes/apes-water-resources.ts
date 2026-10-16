/**
 * Entrance Quiz — Water Resources
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Core Concepts
 *  2 — Groundwater, Irrigation and Water Conservation
 *  3 — Pollution Sources and Aquatic Ecosystems
 *  4 — Toxins: Endocrine Disruptors, POPs, Biomagnification and Dose-Response
 *  5 — Sewage Treatment, Solid Waste and Human Health
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
    id: 'aewre-ent-1a',
    question: "Which pollution source could be monitored and permitted at a single discharge location?",
    options: [
      "Fertilizer washing off thousands of farm fields",
      "A pipe releasing wastewater from a paper mill",
      "Oil dripping from cars across a city's streets",
      "Acid rain falling over an entire watershed",
    ],
    correctIndex: 1,
    explanation: "A point source, such as a mill's discharge pipe, has one identifiable outlet that can be sampled and given a permit. Farm runoff, oil from many cars and acid deposition are nonpoint sources spread across the landscape.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  {
    id: 'aewre-ent-1b',
    question: "About 70% of Earth's surface is covered by water, yet accessible fresh water is scarce. Why?",
    options: [
      "Groundwater makes up only a tiny share of fresh water",
      "Most fresh water has evaporated into the atmosphere",
      "Most water is salty or locked up in ice and glaciers",
      "Lakes and rivers hold most of the planet's water",
    ],
    correctIndex: 2,
    explanation: "About 97% of Earth's water is in the oceans, and most of the fresh water is frozen, leaving well under 1% as accessible groundwater and surface water. Groundwater is actually most of the liquid fresh water, and lakes and rivers hold a tiny fraction.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Groundwater, Irrigation and Water Conservation
  // ═══════════════════════════════════════════════════
  {
    id: 'aewre-ent-2a',
    question: "A crop needs 190,000 m³ of water to reach its roots. How much less water must be applied each season with drip irrigation (95% efficient) than with flood irrigation (80% efficient)?",
    options: [
      "37,500 m³",
      "47,500 m³",
      "10,000 m³",
      "28,500 m³",
    ],
    correctIndex: 0,
    explanation: "Applied = need ÷ efficiency: flood 190,000 ÷ 0.80 = 237,500 m³; drip 190,000 ÷ 0.95 = 200,000 m³; difference = 37,500 m³. 28,500 m³ multiplies the need by the efficiency gap, and 47,500 and 10,000 m³ are the losses of each method alone.",
    partNumber: 2,
    partTitle: "Groundwater, Irrigation and Water Conservation",
  },

  {
    id: 'aewre-ent-2b',
    question: "A chemical spill soaks into the ground above two aquifers. Why is the shallow unconfined aquifer likely to be contaminated much sooner than the confined one?",
    options: [
      "Confined aquifers lie closer to the surface than unconfined ones",
      "Unconfined aquifers recharge slowly, so spills build up",
      "No impermeable layer stops pollutants from seeping down",
      "Confined aquifers hold salty water that resists pollution",
    ],
    correctIndex: 2,
    explanation: "An unconfined aquifer is overlain by permeable soil and rock, so water and pollutants seep straight down into it, while a confined aquifer is sealed by clay or shale. Unconfined aquifers recharge quickly from rain, which is exactly why they are easily polluted, and confined aquifers usually hold fresh water.",
    partNumber: 2,
    partTitle: "Groundwater, Irrigation and Water Conservation",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Pollution Sources and Aquatic Ecosystems
  // ═══════════════════════════════════════════════════
  {
    id: 'aewre-ent-3a',
    question: "A leaking tank releases 5 m³ of oil, which spreads into a slick with an average thickness of 0.2 mm. About how large an area does the slick cover? (1 ha = 10,000 m²)",
    options: [
      "25 ha",
      "0.25 ha",
      "250 ha",
      "2.5 ha",
    ],
    correctIndex: 3,
    explanation: "Thickness = 0.2 mm = 0.0002 m, so area = 5 m³ ÷ 0.0002 m = 25,000 m² = 2.5 ha. The other answers come from converting millimeters to meters with the wrong power of ten.",
    partNumber: 3,
    partTitle: "Pollution Sources and Aquatic Ecosystems",
  },

  {
    id: 'aewre-ent-3b',
    question: "Below a sewage outfall, dissolved oxygen falls to its lowest point about 20 km downstream and then rises back toward normal by 80 km. Why does the river recover?",
    options: [
      "Fish downstream release oxygen as they respire",
      "Warmer water downstream holds more dissolved oxygen",
      "The waste runs out and air restores oxygen",
      "Sludge worms in the septic zone produce oxygen",
    ],
    correctIndex: 2,
    explanation: "Decomposers deplete oxygen while organic waste is plentiful; once they have consumed it, oxygen demand drops and oxygen diffusing in from the air (and from photosynthesis) restores the river. Respiring animals consume oxygen rather than releasing it.",
    partNumber: 3,
    partTitle: "Pollution Sources and Aquatic Ecosystems",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Toxins: Endocrine Disruptors, POPs, Biomagnification and Dose-Response
  // ═══════════════════════════════════════════════════
  {
    id: 'aewre-ent-4a',
    question: "In a toxicity test, 20% of rats die at 15 mg/kg and 80% die at 45 mg/kg. Assuming a straight line between these points, estimate the LD50 and compare it with Chemical Q, whose LD50 is 300 mg/kg.",
    options: [
      "About 30 mg/kg; Q is 10 times as toxic",
      "About 45 mg/kg; it is less toxic than Q",
      "About 60 mg/kg; it is 5 times as toxic as Q",
      "About 30 mg/kg; it is 10 times as toxic as Q",
    ],
    correctIndex: 3,
    explanation: "50% is halfway between 20% and 80%, so the LD50 is halfway between 15 and 45 mg/kg: 30 mg/kg. A lower LD50 means more toxic, and 300 ÷ 30 = 10, so this chemical is 10 times as toxic as Q.",
    partNumber: 4,
    partTitle: "Toxins: Endocrine Disruptors, POPs, Biomagnification and Dose-Response",
  },

  {
    id: 'aewre-ent-4b',
    question: "Seals in the Arctic carry high levels of PCBs even though no PCBs were ever made or used anywhere near them. Which property of PCBs best explains this?",
    options: [
      "They are made naturally by Arctic algae in very cold water",
      "They persist for years and travel far by wind and water",
      "They dissolve easily in water and are quickly excreted",
      "They break down within days into harmless compounds",
    ],
    correctIndex: 1,
    explanation: "PCBs are persistent organic pollutants: they resist breakdown and travel long distances by air and water before settling, then biomagnify because they are fat-soluble. A water-soluble, quickly excreted or short-lived chemical would not build up in Arctic predators.",
    partNumber: 4,
    partTitle: "Toxins: Endocrine Disruptors, POPs, Biomagnification and Dose-Response",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Sewage Treatment, Solid Waste and Human Health
  // ═══════════════════════════════════════════════════
  {
    id: 'aewre-ent-5a',
    question: "Raw sewage enters a treatment plant with a BOD of 240 mg/L. After primary treatment it is 180 mg/L, after secondary treatment 30 mg/L, and after tertiary treatment 12 mg/L. What percent of the original BOD does the secondary stage remove?",
    options: [
      "83%",
      "95%",
      "62.5%",
      "25%",
    ],
    correctIndex: 2,
    explanation: "Secondary treatment removes 180 − 30 = 150 mg/L, and 150 ÷ 240 × 100 = 62.5% of the original BOD. 83% divides by the BOD entering that stage, 95% is the whole plant's removal, and 25% is the primary stage.",
    partNumber: 5,
    partTitle: "Sewage Treatment, Solid Waste and Human Health",
  },

  {
    id: 'aewre-ent-5b',
    question: "Why are modern sanitary landfills built with methane collection systems?",
    options: [
      "Decay without oxygen makes methane to burn for power",
      "Methane slows the decay of the buried trash",
      "Methane neutralizes the acidic leachate inside the landfill",
      "Collecting methane lets oxygen in to speed decomposition",
    ],
    correctIndex: 0,
    explanation: "Compacted, oxygen-poor trash decomposes anaerobically and produces methane, a potent greenhouse gas and explosion risk; capturing it lets the landfill burn it for electricity instead. The system does not stop decomposition, neutralize leachate or add oxygen.",
    partNumber: 5,
    partTitle: "Sewage Treatment, Solid Waste and Human Health",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: AP Exam Practice
  // ═══════════════════════════════════════════════════
  {
    id: 'aewre-ent-6a',
    question: "A farm pumps 450,000 m³ of water per season with furrow irrigation but would pump only 316,000 m³ with drip irrigation. Pumping costs \\$0.25 per m³, and the drip system costs \\$201,000 to install. About how many years would the pumping savings take to repay the drip system?",
    options: [
      "1.5 years",
      "2.5 years",
      "1.8 years",
      "6 years",
    ],
    correctIndex: 3,
    explanation: "Water saved = 450,000 − 316,000 = 134,000 m³; savings = 134,000 × \\$0.25 = \\$33,500 per year; payback = \\$201,000 ÷ \\$33,500 = 6 years. 1.5 years forgets the price per m³, and the other values use the full pumping volume of one system instead of the savings.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  {
    id: 'aewre-ent-6b',
    question: "Students compare dissolved oxygen and stonefly larvae at sites above and below a power plant's warm discharge. Which variable should they hold constant at every site, and why?",
    options: [
      "Distance from the outfall, since it changes the results",
      "Time of day, since dissolved oxygen shifts with daylight",
      "Stonefly count, since it is the result being measured",
      "Water temperature, since warm water holds less dissolved oxygen",
    ],
    correctIndex: 1,
    explanation: "Dissolved oxygen rises during daylight photosynthesis and falls at night, so sampling all sites at the same time of day keeps that from creating differences unrelated to the plant. Distance (or temperature) is the independent variable, and stonefly count is a dependent variable.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis Review
  // ═══════════════════════════════════════════════════
  {
    id: 'aewre-ent-7a',
    question: "A crop needs 285,000 L of water to reach its roots, and the farm's drip system loses 5% of the water it applies. How much water must the system apply?",
    options: [
      "300,000 L",
      "270,750 L",
      "299,250 L",
      "14,250 L",
    ],
    correctIndex: 0,
    explanation: "If 5% is lost, 95% reaches the roots, so applied = 285,000 ÷ 0.95 = 300,000 L. Multiplying by 0.95 (270,750 L) goes the wrong direction, adding 5% of the need (299,250 L) undercounts, and 14,250 L is only the loss.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },

  {
    id: 'aewre-ent-7b',
    question: "A dry region wants to cut its total freshwater withdrawals as much as possible. Which single program would save the most water?",
    options: [
      "Asking residents to take shorter showers each day",
      "Helping farms switch from furrow to drip irrigation",
      "Replacing the city's toilets with low-flow models",
      "Fixing leaky faucets in public schools and offices",
    ],
    correctIndex: 1,
    explanation: "Agriculture uses about 70% of fresh water, and switching from furrow irrigation (about one-third lost) to drip (about 5% lost) saves far more than household measures, since homes use only about 10%.",
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
    { partNumber: 2, partTitle: "Groundwater, Irrigation and Water Conservation" },
    { partNumber: 3, partTitle: "Pollution Sources and Aquatic Ecosystems" },
    { partNumber: 4, partTitle: "Toxins: Endocrine Disruptors, POPs, Biomagnification and Dose-Response" },
    { partNumber: 5, partTitle: "Sewage Treatment, Solid Waste and Human Health" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
