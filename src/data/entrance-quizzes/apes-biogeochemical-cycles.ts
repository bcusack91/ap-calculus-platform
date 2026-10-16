/**
 * Entrance Quiz — Biogeochemical Cycles
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Core Concepts
 *  2 — The Carbon Cycle in Depth
 *  3 — The Nitrogen Cycle in Depth
 *  4 — The Phosphorus and Hydrologic Cycles
 *  5 — Reading Cycle Data and Avoiding Misconceptions
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
    id: 'aebgc-ent-1a',
    question: "Fertilizer runoff triggers an algal bloom in a pond, and several weeks later fish begin dying. Which step most directly removes the dissolved oxygen?",
    options: [
      "Bacteria respiring as they break down the dead algae",
      "Living algae using up oxygen as they photosynthesize",
      "Fertilizer chemicals reacting with the dissolved oxygen",
      "Fish using more oxygen because the algae feed them",
    ],
    correctIndex: 0,
    explanation: "When the bloom dies, aerobic decomposers break down the algae, and their cellular respiration consumes dissolved oxygen faster than it is replaced. Living algae release oxygen during photosynthesis, and the fertilizer harms fish only through this bloom-and-decay chain, not by reacting with oxygen.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  {
    id: 'aebgc-ent-1b',
    question: "A nitrogen atom moves from the air as $N_{2}$, to ammonia in the soil, to nitrate, and finally into a plant protein. Which sequence of processes carries it along this path?",
    options: [
      "Nitrification, then fixation, then assimilation",
      "Fixation, then nitrification, then assimilation",
      "Fixation, then denitrification, then assimilation",
      "Fixation, then assimilation, then nitrification",
    ],
    correctIndex: 1,
    explanation: "Nitrogen fixation turns $N_{2}$ into ammonia, nitrification turns ammonia into nitrate, and assimilation builds the nitrate into plant proteins. Denitrification runs the other way, returning nitrate to the air as $N_{2}$, and ammonification releases ammonia from dead matter rather than from the air.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: The Carbon Cycle in Depth
  // ═══════════════════════════════════════════════════
  {
    id: 'aebgc-ent-2a',
    question: "Atmospheric CO₂ measured at Mauna Loa rose from about 340 ppm in 1980 to about 415 ppm in 2020. What was the average rate of increase?",
    options: [
      "75 ppm/yr",
      "0.53 ppm/yr",
      "10.4 ppm/yr",
      "1.9 ppm/yr",
    ],
    correctIndex: 3,
    explanation: "Rate = change ÷ time = (415 − 340) ÷ 40 yr = 75 ÷ 40 ≈ 1.9 ppm per year. 75 is the total change, 10.4 divides the final value by the years, and 0.53 divides the years by the change.",
    partNumber: 2,
    partTitle: "The Carbon Cycle in Depth",
  },

  {
    id: 'aebgc-ent-2b',
    question: "A young, fast-growing forest has been absorbing more carbon each year than it releases. Which event would most likely turn it into a carbon source?",
    options: [
      "A wet decade that speeds up the growth of the trees",
      "A severe drought that kills trees so decay outpaces growth",
      "A rise in atmospheric $CO_{2}$ that boosts photosynthesis",
      "A ban on logging that lets the trees keep adding wood",
    ],
    correctIndex: 1,
    explanation: "Source and sink describe the net flow: if drought kills trees, respiration, decomposition and fire release more carbon than the surviving trees fix, so the forest becomes a source. Faster growth, extra photosynthesis or protection from logging all keep it a sink.",
    partNumber: 2,
    partTitle: "The Carbon Cycle in Depth",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: The Nitrogen Cycle in Depth
  // ═══════════════════════════════════════════════════
  {
    id: 'aebgc-ent-3a',
    question: "A farmer wants to apply 90 kg of nitrogen per hectare to a 10-hectare field using ammonium nitrate (34-0-0). About how much ammonium nitrate is needed?",
    options: [
      "306 kg",
      "900 kg",
      "2,647 kg",
      "265 kg",
    ],
    correctIndex: 2,
    explanation: "Total nitrogen = 90 kg/ha × 10 ha = 900 kg N; because only 34% of the fertilizer is nitrogen, divide: 900 ÷ 0.34 ≈ 2,647 kg. Multiplying by 0.34 (306 kg) gives far too little, and 265 kg forgets to multiply by the 10 hectares.",
    partNumber: 3,
    partTitle: "The Nitrogen Cycle in Depth",
  },

  {
    id: 'aebgc-ent-3b',
    question: "Urea is spread on the surface of a warm, windy field and is not worked into the soil before a dry week. Which nitrogen loss is most likely?",
    options: [
      "Nitrate washing downward into the groundwater",
      "Ammonium binding tightly to the clay particles",
      "Nitrogen gas released by nitrifying bacteria",
      "Ammonia gas escaping upward into the air",
    ],
    correctIndex: 3,
    explanation: "Urea or manure left on warm, windy, dry ground loses nitrogen by volatilization, escaping upward as ammonia gas. Leaching needs heavy rain or irrigation to carry nitrate down, and nitrifying bacteria make nitrate, not $N_{2}$.",
    partNumber: 3,
    partTitle: "The Nitrogen Cycle in Depth",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: The Phosphorus and Hydrologic Cycles
  // ═══════════════════════════════════════════════════
  {
    id: 'aebgc-ent-4a',
    question: "A 15 mm storm falls on a 0.5-hectare school campus, and 80% of the rain runs off. About how many liters of runoff are produced? (1 ha = 10,000 m²; 1 mm on 1 m² = 1 L)",
    options: [
      "60,000 L",
      "75,000 L",
      "6,000 L",
      "15,000 L",
    ],
    correctIndex: 0,
    explanation: "Area = 0.5 × 10,000 = 5,000 m², so the storm delivers 15 × 5,000 = 75,000 L, and 80% of that is 60,000 L of runoff. 75,000 L forgets the runoff fraction, 15,000 L takes 20% instead of 80%, and 6,000 L uses the wrong hectare conversion.",
    partNumber: 4,
    partTitle: "The Phosphorus and Hydrologic Cycles",
  },

  {
    id: 'aebgc-ent-4b',
    question: "A lake suffers repeated algal blooms fed by phosphorus from nearby farms. Which practice would most effectively reduce the phosphorus reaching it?",
    options: [
      "Keeping cover crops on fields to hold soil in place",
      "Applying fertilizer in split doses to cut leaching",
      "Planting legumes so crops need less added phosphate",
      "Draining shoreline wetlands so fields dry out faster",
    ],
    correctIndex: 0,
    explanation: "Phosphate binds to soil particles and reaches lakes mainly through erosion, so cover crops that hold soil in place keep it on the land. Legumes fix nitrogen, not phosphorus, split doses target nitrate leaching, and draining wetlands removes a sediment trap.",
    partNumber: 4,
    partTitle: "The Phosphorus and Hydrologic Cycles",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Reading Cycle Data and Avoiding Misconceptions
  // ═══════════════════════════════════════════════════
  {
    id: 'aebgc-ent-5a',
    question: "The yearly rise and fall in the Keeling curve is about 6 ppm at Mauna Loa, Hawaii, but much smaller at a station near the South Pole. What best explains the difference?",
    options: [
      "The South Pole receives no sunlight for most of the year",
      "Cold polar air dissolves more $CO_{2}$ into the ice sheet",
      "Antarctica burns far less fossil fuel than Hawaii does",
      "The Southern Hemisphere has much less land and vegetation",
    ],
    correctIndex: 3,
    explanation: "The seasonal swing comes from plants taking up $CO_{2}$ in the growing season and releasing it through respiration and decay in the dormant season, and the Northern Hemisphere holds most of Earth's land plants. Local fuel use and polar darkness do not set the global seasonal signal, because the atmosphere mixes widely.",
    partNumber: 5,
    partTitle: "Reading Cycle Data and Avoiding Misconceptions",
  },

  {
    id: 'aebgc-ent-5b',
    question: "The nitrogen load entering a bay is growing by 7% per year. Using the rule of 70, about how long will it take the load to double?",
    options: [
      "1,000 years",
      "490 years",
      "10 years",
      "0.1 years",
    ],
    correctIndex: 2,
    explanation: "Doubling time ≈ 70 ÷ percent growth rate = 70 ÷ 7 = 10 years. Entering the rate as the decimal 0.07 gives 1,000 years, multiplying gives 490, and dividing 7 by 70 gives 0.1.",
    partNumber: 5,
    partTitle: "Reading Cycle Data and Avoiding Misconceptions",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: AP Exam Practice
  // ═══════════════════════════════════════════════════
  {
    id: 'aebgc-ent-6a',
    question: "Farmers in a watershed apply 120 kg of nitrogen per hectare to 8,000 hectares each year, and 15% of it leaches below the roots. How many tonnes of nitrogen leach each year? (1 tonne = 1,000 kg)",
    options: [
      "960 t",
      "816 t",
      "144 t",
      "14.4 t",
    ],
    correctIndex: 2,
    explanation: "Total applied = 120 × 8,000 = 960,000 kg = 960 t, and 15% of that is 0.15 × 960 = 144 t. 960 t is the total applied, 816 t is the 85% that stays, and 14.4 t slips a decimal place.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  {
    id: 'aebgc-ent-6b',
    question: "Water leaving vegetated strips of different widths contains these nitrate levels: 0 m, 10.0 mg/L; 5 m, 6.0 mg/L; 15 m, 4.0 mg/L; 30 m, 3.5 mg/L. Which conclusion do these data best support?",
    options: [
      "Nitrate falls by the same amount for each added meter",
      "The widest strip removes essentially all of the nitrate",
      "Each added meter of buffer removes less nitrate than the last",
      "Strip width has no consistent effect on the nitrate level",
    ],
    correctIndex: 2,
    explanation: "The first 5 m removes 4.0 mg/L, the next 10 m only 2.0 mg/L, and the last 15 m just 0.5 mg/L, a pattern of diminishing returns. The decline is not constant, the widest strip still leaves 3.5 mg/L, and nitrate falls at every step, so width clearly matters.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis Review
  // ═══════════════════════════════════════════════════
  {
    id: 'aebgc-ent-7a',
    question: "Equal loads of nitrate and phosphate enter a lake. Why is the phosphate likely to keep fueling algae for much longer?",
    options: [
      "Phosphate is fixed from the air by cyanobacteria each year",
      "Nitrate is taken up only by plants, which phosphate avoids",
      "Phosphate dissolves more easily and stays mixed in the water",
      "It has no gas form to escape, while nitrate can become $N_{2}$",
    ],
    correctIndex: 3,
    explanation: "Phosphorus has no significant gas phase, so it is recycled between sediments and organisms in the lake, while denitrifying bacteria can return nitrate to the atmosphere as $N_{2}$. Cyanobacteria fix nitrogen, not phosphorus, and phosphate binds to particles rather than dissolving easily.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },

  {
    id: 'aebgc-ent-7b',
    question: "A 25 mm storm falls on a 2-hectare cornfield. Thirty percent of the rain runs off, and the runoff carries 8 mg of nitrate-nitrogen per liter. How much nitrogen leaves the field? (1 ha = 10,000 m²; 1 mm on 1 m² = 1 L)",
    options: [
      "4.0 kg",
      "1.2 kg",
      "0.12 kg",
      "12 kg",
    ],
    correctIndex: 1,
    explanation: "Rain = 25 mm × 20,000 m² = 500,000 L; runoff = 0.30 × 500,000 = 150,000 L; nitrogen = 150,000 L × 8 mg/L = 1,200,000 mg = 1.2 kg. Using all the rain instead of the runoff gives 4.0 kg, and the other values slip a factor of ten in the mg-to-kg conversion.",
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
    { partNumber: 2, partTitle: "The Carbon Cycle in Depth" },
    { partNumber: 3, partTitle: "The Nitrogen Cycle in Depth" },
    { partNumber: 4, partTitle: "The Phosphorus and Hydrologic Cycles" },
    { partNumber: 5, partTitle: "Reading Cycle Data and Avoiding Misconceptions" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
