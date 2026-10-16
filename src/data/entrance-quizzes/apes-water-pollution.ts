/**
 * Entrance Quiz — Water Pollution
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Sources and Measures of Water Quality
 *  2 — Eutrophication and Hypoxia in Depth
 *  3 — Oil, Heat and Sediment: Physical Pollutants
 *  4 — Persistent Toxins: Case Studies
 *  5 — Dose, Response and Risk
 *  6 — Sewage, Septic Systems and Water Law
 *  7 — AP Exam Practice and Synthesis
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ═══════════════════════════════════════════════════
  // Part 1: Sources and Measures of Water Quality
  // ═══════════════════════════════════════════════════
  {
    id: 'aewpo-ent-1a',
    question: "A lake at 10 °C, where saturated water holds 11.3 mg/L of oxygen, reads 70% saturation just before dawn. What is its measured dissolved oxygen?",
    options: [
      "16.1 mg/L",
      "3.4 mg/L",
      "7.9 mg/L",
      "0.79 mg/L",
    ],
    correctIndex: 2,
    explanation: "Measured DO = saturation × percent ÷ 100 = 11.3 × 0.70 ≈ 7.9 mg/L. 16.1 mg/L divides by 0.70 instead of multiplying, 3.4 mg/L takes 30%, and 0.79 mg/L slips a decimal place.",
    partNumber: 1,
    partTitle: "Sources and Measures of Water Quality",
  },

  {
    id: 'aewpo-ent-1b',
    question: "City storm drains collect runoff from streets, roofs and lawns, then release it into a river through pipes. How does U.S. law handle this source?",
    options: [
      "It is exempt, since runoff is a natural process",
      "Only the Safe Drinking Water Act applies to it",
      "Each homeowner must hold a federal discharge permit",
      "The city must hold a discharge permit",
    ],
    correctIndex: 3,
    explanation: "Urban runoff is nonpoint in origin, but because it leaves through identifiable pipes, cities must obtain Clean Water Act stormwater permits. Individual homeowners are not permitted one by one, and the Safe Drinking Water Act covers public tap water, not discharges to rivers.",
    partNumber: 1,
    partTitle: "Sources and Measures of Water Quality",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Eutrophication and Hypoxia in Depth
  // ═══════════════════════════════════════════════════
  {
    id: 'aewpo-ent-2a',
    question: "A river carries total phosphorus at 0.3 mg/L with a flow of 50 m³/s. What is its phosphorus load per day? (1 mg/L = 1 g/m³; 86,400 s per day)",
    options: [
      "15 kg/day",
      "1,296,000 kg/day",
      "1,296 kg/day",
      "1.3 kg/day",
    ],
    correctIndex: 2,
    explanation: "Load = 0.3 g/m³ × 50 m³/s = 15 g/s; 15 × 86,400 = 1,296,000 g = 1,296 kg per day. 15 is the load in grams per second, 1,296,000 is the answer in grams, and 1.3 divides by 1,000 twice.",
    partNumber: 2,
    partTitle: "Eutrophication and Hypoxia in Depth",
  },

  {
    id: 'aewpo-ent-2b',
    question: "Managers want to shrink a summer dead zone in a coastal bay. Which nutrient should get top priority, and why?",
    options: [
      "Nitrogen, since coastal algae are usually limited by it",
      "Phosphorus, since it limits coastal algae",
      "Carbon, since algae are built mainly of carbon",
      "Oxygen, since adding it would stop algae from growing",
    ],
    correctIndex: 0,
    explanation: "In estuaries and coastal oceans, seawater and sediments supply phosphorus while bacteria remove nitrogen as N₂, so nitrogen usually limits algal growth. Phosphorus is the usual limit in lakes, and carbon is plentiful from the air.",
    partNumber: 2,
    partTitle: "Eutrophication and Hypoxia in Depth",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Oil, Heat and Sediment: Physical Pollutants
  // ═══════════════════════════════════════════════════
  {
    id: 'aewpo-ent-3a',
    question: "A river flowing at 80 m³/s and 15 °C receives a warm discharge of 20 m³/s at 25 °C. What is the fully mixed temperature?",
    options: [
      "20 °C",
      "17 °C",
      "23 °C",
      "40 °C",
    ],
    correctIndex: 1,
    explanation: "Flow-weighted average = (80 × 15 + 20 × 25) ÷ (80 + 20) = (1,200 + 500) ÷ 100 = 17 °C. 20 °C ignores the different flows, 23 °C swaps the weights, and 40 °C adds the temperatures.",
    partNumber: 3,
    partTitle: "Oil, Heat and Sediment: Physical Pollutants",
  },

  {
    id: 'aewpo-ent-3b',
    question: "After an oil spill reaches a salt marsh, responders often protect it with booms but avoid digging out the oiled mud. Why?",
    options: [
      "Crews can harm it more than the oil does",
      "Oil in marsh mud breaks down faster than on beaches",
      "Marsh plants absorb the oil and store it safely",
      "Booms draw out the oil already in the mud",
    ],
    correctIndex: 0,
    explanation: "Oil kills the roots that hold marsh soil together, but crews and machines can crush plants and destroy the soil even faster, so responders often let natural breakdown work. Oil in low-oxygen marsh mud breaks down slowly, plants are harmed by it, and booms only keep more oil from arriving.",
    partNumber: 3,
    partTitle: "Oil, Heat and Sediment: Physical Pollutants",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Persistent Toxins: Case Studies
  // ═══════════════════════════════════════════════════
  {
    id: 'aewpo-ent-4a',
    question: "In a lake food web, phytoplankton contain 0.0025 ppm of PCBs and lake trout contain 4.8 ppm. By what factor does the concentration increase from phytoplankton to lake trout?",
    options: [
      "19,200",
      "1,920",
      "192",
      "0.0005",
    ],
    correctIndex: 1,
    explanation: "Biomagnification factor = 4.8 ÷ 0.0025 = 1,920. 19,200 and 192 misplace the decimal point, and 0.0005 divides the lower value by the higher one.",
    partNumber: 4,
    partTitle: "Persistent Toxins: Case Studies",
  },

  {
    id: 'aewpo-ent-4b',
    question: "Fish advisories often recommend eating small, short-lived fish such as sardines rather than large predators such as swordfish. What is the main reason?",
    options: [
      "Small fish contain more protein per serving",
      "Mercury biomagnifies up the food chain",
      "Large fish are more likely to carry bacteria",
      "Small fish absorb no pollutants from the water",
    ],
    correctIndex: 1,
    explanation: "Methylmercury is persistent and accumulates up the food chain, so large, long-lived predators that eat many contaminated prey carry the highest concentrations. Small fish still absorb some mercury, just far less.",
    partNumber: 4,
    partTitle: "Persistent Toxins: Case Studies",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Dose, Response and Risk
  // ═══════════════════════════════════════════════════
  {
    id: 'aewpo-ent-5a',
    question: "A well contains a solvent at 0.24 mg/L. A 60 kg adult drinks 2.5 L of the water per day. What is the adult's daily dose? (dose = concentration × volume ÷ body mass)",
    options: [
      "0.01 mg/kg per day",
      "0.004 mg/kg per day",
      "0.6 mg/kg per day",
      "36 mg/kg per day",
    ],
    correctIndex: 0,
    explanation: "Dose = (0.24 mg/L × 2.5 L/day) ÷ 60 kg = 0.6 ÷ 60 = 0.01 mg/kg per day. 0.6 forgets to divide by body mass, 0.004 leaves out the volume drunk, and 36 multiplies by body mass instead of dividing.",
    partNumber: 5,
    partTitle: "Dose, Response and Risk",
  },

  {
    id: 'aewpo-ent-5b',
    question: "A factory's discharge permit requires its effluent to be diluted far below the LC50 for local fish. Why is staying just under the LC50 not enough?",
    options: [
      "The LC50 is set using adult fish, the most sensitive stage",
      "The LC50 is the dose that kills most of the test fish",
      "The LC50 marks the level where fish first show harm",
      "The LC50 still kills half, and harm begins at lower levels",
    ],
    correctIndex: 3,
    explanation: "The LC50 is the concentration that kills 50% of test organisms in a set time, and sublethal harm such as slower growth and fewer eggs begins at much lower concentrations. Young stages are usually more sensitive than adults, and the LC50 marks half dying, not most dying or the first sign of harm.",
    partNumber: 5,
    partTitle: "Dose, Response and Risk",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: Sewage, Septic Systems and Water Law
  // ═══════════════════════════════════════════════════
  {
    id: 'aewpo-ent-6a',
    question: "A lab filters 50 mL of lake water and grows 45 E. coli colonies. The swimming guideline is about 126 per 100 mL. What is the count per 100 mL, and how does it compare?",
    options: [
      "90 per 100 mL, below the guideline",
      "45 per 100 mL, below the guideline",
      "225 per 100 mL, above the guideline",
      "22.5 per 100 mL, below the guideline",
    ],
    correctIndex: 0,
    explanation: "100 mL is twice 50 mL, so 45 × 2 = 90 colonies per 100 mL, below the guideline. 45 forgets to scale up, 225 multiplies by 5, and 22.5 halves the count instead of doubling it.",
    partNumber: 6,
    partTitle: "Sewage, Septic Systems and Water Law",
  },

  {
    id: 'aewpo-ent-6b',
    question: "After the 1993 Cryptosporidium outbreak in Milwaukee, utilities focused on better filtration rather than simply adding more chlorine. Why?",
    options: [
      "Cryptosporidium is a virus too small to filter out",
      "Chlorine is used mostly for taste, not disinfection",
      "Filtration also removes lead from old pipes",
      "The parasite's shell resists chlorine",
    ],
    correctIndex: 3,
    explanation: "Cryptosporidium is a protozoan with a tough outer shell that chlorine does not reliably kill, so it must be physically filtered out. It is not a virus, chlorine is added to disinfect, and lead enters water from pipes after treatment.",
    partNumber: 6,
    partTitle: "Sewage, Septic Systems and Water Law",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: AP Exam Practice and Synthesis
  // ═══════════════════════════════════════════════════
  {
    id: 'aewpo-ent-7a',
    question: "A river basin delivers 800 t of nitrogen a year to a bay, and the goal is a 25% cut. Sewage plants supply 15% of the load, and tertiary treatment removes 80% of their nitrogen. Cover crops remove 25 kg of nitrogen per hectare. How many hectares of cover crops are needed to finish the goal? (1 t = 1,000 kg)",
    options: [
      "8,000 ha",
      "3,840 ha",
      "4,160 ha",
      "4.16 ha",
    ],
    correctIndex: 2,
    explanation: "Target = 0.25 × 800 = 200 t; sewage plants supply 0.15 × 800 = 120 t, and treatment removes 0.80 × 120 = 96 t; remaining = 104 t = 104,000 kg; 104,000 ÷ 25 = 4,160 ha. 8,000 ha ignores the sewage upgrade, 3,840 ha uses the upgrade's share, and 4.16 skips converting tonnes to kilograms.",
    partNumber: 7,
    partTitle: "AP Exam Practice and Synthesis",
  },

  {
    id: 'aewpo-ent-7b',
    question: "A news report says nitrate from farms poisons the fish in a coastal dead zone. Which statement correctly explains how the fish die?",
    options: [
      "Nitrate is toxic to fish at the levels in the bay",
      "Decomposers of dead algae use up the oxygen in bottom water",
      "Nitrate makes the water too acidic for fish gills to work",
      "Fish eat the algae and absorb a toxic dose of nitrogen",
    ],
    correctIndex: 1,
    explanation: "Nitrate fuels algal blooms; when the algae die and sink, decomposers consume the dissolved oxygen in the bottom water, and fish and other animals suffocate or flee. The harm comes from hypoxia, not from nitrate poisoning.",
    partNumber: 7,
    partTitle: "AP Exam Practice and Synthesis",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Sources and Measures of Water Quality" },
    { partNumber: 2, partTitle: "Eutrophication and Hypoxia in Depth" },
    { partNumber: 3, partTitle: "Oil, Heat and Sediment: Physical Pollutants" },
    { partNumber: 4, partTitle: "Persistent Toxins: Case Studies" },
    { partNumber: 5, partTitle: "Dose, Response and Risk" },
    { partNumber: 6, partTitle: "Sewage, Septic Systems and Water Law" },
    { partNumber: 7, partTitle: "AP Exam Practice and Synthesis" },
  ]
}
