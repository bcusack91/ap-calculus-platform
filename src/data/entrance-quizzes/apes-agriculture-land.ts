/**
 * Entrance Quiz — Agriculture & Land Use
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Core Concepts
 *  2 — The Green Revolution, Tilling, Slash-and-Burn and Fertilizers
 *  3 — Meat Production, Fishing and Aquaculture
 *  4 — Pest Control, IPM and Sustainable Agriculture
 *  5 — Forests, Commons, Mining and Cities
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
    id: 'aeagr-ent-1a',
    question: "A single lake trout carries more DDT in its fat each year it lives, because it absorbs the pesticide faster than it can excrete it. What is this process called?",
    options: [
      "Biomagnification",
      "Bioaccumulation",
      "Eutrophication",
      "Salinization",
    ],
    correctIndex: 1,
    explanation: "Bioaccumulation is the buildup of a persistent toxin within one organism over its lifetime. Biomagnification is the rise in concentration from one trophic level to the next, eutrophication is nutrient enrichment of water, and salinization is salt buildup in soil.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  {
    id: 'aeagr-ent-1b',
    question: "Farms in a hot, dry valley irrigate heavily for decades. White crusts begin to form on the fields, and crop yields fall. What is the most likely cause?",
    options: [
      "Fertilizer runoff has caused algae to bloom in the soil",
      "Heavy rain has leached nutrients out of the topsoil",
      "Evaporating water leaves dissolved salts behind",
      "Pesticides have killed soil bacteria and raised salinity",
    ],
    correctIndex: 2,
    explanation: "In arid climates, irrigation water evaporates quickly and leaves dissolved salts in the soil; over years the salt builds up (salinization) and poisons crops. Rain is scarce in such a valley, and algal blooms occur in water, not soil.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: The Green Revolution, Tilling, Slash-and-Burn and Fertilizers
  // ═══════════════════════════════════════════════════
  {
    id: 'aeagr-ent-2a',
    question: "A district's maize yield rose from 2.0 t/ha to 5.0 t/ha. If each person needs 250 kg of grain per year, how many more people can one hectare feed after the change? (1 t = 1,000 kg)",
    options: [
      "20 people",
      "3 people",
      "12 people",
      "8 people",
    ],
    correctIndex: 2,
    explanation: "Before: 2,000 kg ÷ 250 kg = 8 people; after: 5,000 kg ÷ 250 kg = 20 people, so 12 more people. 20 is the total after the change, 8 is the total before, and 3 is the yield increase in tonnes.",
    partNumber: 2,
    partTitle: "The Green Revolution, Tilling, Slash-and-Burn and Fertilizers",
  },

  {
    id: 'aeagr-ent-2b',
    question: "The Green Revolution greatly increased crop yields. Why did it also make farming far more dependent on fossil fuels?",
    options: [
      "High-yield seeds had to be flown in from abroad each year",
      "Machines, fertilizer factories and irrigation pumps all burn fuel",
      "The new crops needed warmer soil, heated with fuel",
      "The new varieties had to be stored frozen until planting",
    ],
    correctIndex: 1,
    explanation: "Mechanization runs on fuel, synthetic nitrogen fertilizer is made using natural gas, and irrigation and pesticide production also require energy. High-yield varieties were grown in open fields from locally produced seed and needed no heated soil or frozen storage.",
    partNumber: 2,
    partTitle: "The Green Revolution, Tilling, Slash-and-Burn and Fertilizers",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Meat Production, Fishing and Aquaculture
  // ═══════════════════════════════════════════════════
  {
    id: 'aeagr-ent-3a',
    question: "A 900-hectare range can sustainably support 1 cow per 3 hectares. A rancher keeps 390 cows on it. By what percent does the herd exceed the sustainable number?",
    options: [
      "23%",
      "130%",
      "90%",
      "30%",
    ],
    correctIndex: 3,
    explanation: "Sustainable herd = 900 ÷ 3 = 300 cows, and (390 − 300) ÷ 300 × 100 = 30%. Dividing by the actual herd gives 23%, 90% is the number of extra cows, and 130% is the herd as a share of the sustainable number.",
    partNumber: 3,
    partTitle: "Meat Production, Fishing and Aquaculture",
  },

  {
    id: 'aeagr-ent-3b',
    question: "Many CAFOs give animals low doses of antibiotics every day to prevent disease. Why does this practice promote antibiotic-resistant bacteria?",
    options: [
      "The antibiotics turn harmless bacteria into dangerous ones",
      "Manure lagoons destroy the antibiotics before they can act",
      "Bacteria learn to avoid the drugs after being exposed once",
      "The drugs kill susceptible bacteria and leave survivors to multiply",
    ],
    correctIndex: 3,
    explanation: "Constant low doses kill the susceptible bacteria, while the few with resistance genes survive and reproduce, so resistant strains become common. Individual bacteria do not learn, and the drugs do not create new dangerous bacteria.",
    partNumber: 3,
    partTitle: "Meat Production, Fishing and Aquaculture",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Pest Control, IPM and Sustainable Agriculture
  // ═══════════════════════════════════════════════════
  {
    id: 'aeagr-ent-4a',
    question: "After years of spraying one insecticide, the share of beetles that survive a standard dose rose from 5% to 60%. What is the percent increase in survival?",
    options: [
      "55%",
      "92%",
      "1,200%",
      "1,100%",
    ],
    correctIndex: 3,
    explanation: "Percent change = (60 − 5) ÷ 5 × 100 = 1,100%. 55 is the change in percentage points, not percent, 1,200% is the ratio 60 ÷ 5 written as a percent, and 92% divides by the new value.",
    partNumber: 4,
    partTitle: "Pest Control, IPM and Sustainable Agriculture",
  },

  {
    id: 'aeagr-ent-4b',
    question: "A farmer using IPM treats beetles only when the average count reaches 20 per plant. Scouts count 12, 18, 9 and 21 beetles on four sample plants. What should the farmer do?",
    options: [
      "Keep monitoring, since the mean of 15 is below the threshold",
      "Spray now, since the total count of 60 exceeds 20",
      "Spray now, since one plant is already above 20",
      "Stop scouting, since the counts vary too much to use",
    ],
    correctIndex: 0,
    explanation: "The mean is (12 + 18 + 9 + 21) ÷ 4 = 15 beetles per plant, below the economic threshold of 20, so IPM calls for continued monitoring rather than treatment. The threshold applies to the average, not to one plant or the total count, and variation between plants is why several are sampled.",
    partNumber: 4,
    partTitle: "Pest Control, IPM and Sustainable Agriculture",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Forests, Commons, Mining and Cities
  // ═══════════════════════════════════════════════════
  {
    id: 'aeagr-ent-5a',
    question: "A copper ore is 0.8% copper by mass. How many tonnes of ore must be processed to obtain 20 t of copper?",
    options: [
      "160 t",
      "0.16 t",
      "2,500 t",
      "25,000 t",
    ],
    correctIndex: 2,
    explanation: "Ore needed = copper wanted ÷ grade as a decimal = 20 t ÷ 0.008 = 2,500 t. Multiplying by the grade (0.16 t) gives far too little, 160 t multiplies by 8, and 25,000 t uses 0.08% instead of 0.8%.",
    partNumber: 5,
    partTitle: "Forests, Commons, Mining and Cities",
  },

  {
    id: 'aeagr-ent-5b',
    question: "Dozens of fishing boats share an unregulated fishing ground, and catches are falling year after year. Which policy best addresses the cause of this tragedy of the commons?",
    options: [
      "Setting enforceable catch quotas for each boat",
      "Paying boats to fish farther from shore",
      "Subsidizing larger boats so they can catch more fish",
      "Stocking the grounds from a new fish hatchery",
    ],
    correctIndex: 0,
    explanation: "Each boat gains the full value of its catch while the cost of depletion is shared, so regulation such as enforceable quotas makes users bear the cost of overuse. Moving boats offshore, bigger boats and hatchery stocking leave the open-access incentive in place.",
    partNumber: 5,
    partTitle: "Forests, Commons, Mining and Cities",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: AP Exam Practice
  // ═══════════════════════════════════════════════════
  {
    id: 'aeagr-ent-6a',
    question: "A scientist tests whether covering soil with straw mulch reduces erosion, comparing mulched plots with bare plots. Which statement is the null hypothesis?",
    options: [
      "Mulching has no effect on the amount of soil lost",
      "Mulching will reduce soil erosion on most plots",
      "Mulched plots will lose more soil than the bare plots",
      "Soil loss depends mainly on the slope of each plot",
    ],
    correctIndex: 0,
    explanation: "A null hypothesis states that the treatment has no effect or that there is no difference between groups. Predicting a reduction or an increase is a hypothesis, and slope is a variable that should be held constant.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  {
    id: 'aeagr-ent-6b',
    question: "Raising one steer takes 1.2 ha in a feedlot, counting cropland for feed, and 3.0 ha under rotational grazing. What percent more land does grazing require?",
    options: [
      "60%",
      "150%",
      "250%",
      "180%",
    ],
    correctIndex: 1,
    explanation: "Percent more = (3.0 − 1.2) ÷ 1.2 × 100 = 150%. Dividing by the grazing value gives 60%, 250% is the ratio 3.0 ÷ 1.2 written as a percent, and 180 comes from the 1.8 ha difference.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis Review
  // ═══════════════════════════════════════════════════
  {
    id: 'aeagr-ent-7a',
    question: "A 300-ha farm applies 140 kg of nitrogen per hectare. Cover crops and better timing cut the share lost to runoff and leaching from 25% to 10%. By how many kilograms per year does the nitrogen lost fall?",
    options: [
      "4,200 kg",
      "6,300 kg",
      "10,500 kg",
      "630 kg",
    ],
    correctIndex: 1,
    explanation: "Nitrogen applied = 300 × 140 = 42,000 kg. Loss falls from 0.25 × 42,000 = 10,500 kg to 0.10 × 42,000 = 4,200 kg, a drop of 6,300 kg. 10,500 and 4,200 kg are the losses before and after, and 630 kg slips a decimal place.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },

  {
    id: 'aeagr-ent-7b',
    question: "A monoculture cornfield sprayed with the same insecticide every year now has resistant rootworms and new outbreaks of mites. Which change best addresses the cause?",
    options: [
      "Using IPM with crop rotation and natural predators",
      "Spraying a stronger broad-spectrum insecticide more often",
      "Switching to tilling the field more deeply each spring",
      "Adding more synthetic fertilizer to help plants recover",
    ],
    correctIndex: 0,
    explanation: "Repeated spraying selected for resistance and killed the mites' predators, creating secondary pests. IPM breaks the rootworm's life cycle with rotation, protects natural enemies and uses targeted chemicals only as a last resort. Stronger sprays restart the pesticide treadmill.",
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
    { partNumber: 2, partTitle: "The Green Revolution, Tilling, Slash-and-Burn and Fertilizers" },
    { partNumber: 3, partTitle: "Meat Production, Fishing and Aquaculture" },
    { partNumber: 4, partTitle: "Pest Control, IPM and Sustainable Agriculture" },
    { partNumber: 5, partTitle: "Forests, Commons, Mining and Cities" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
