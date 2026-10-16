/**
 * Entrance Quiz — Human Population Dynamics
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Core Concepts
 *  2 — Reading Age Structure Diagrams
 *  3 — Fertility and Its Drivers
 *  4 — Population Dynamics and Calculations
 *  5 — The Demographic Transition in Depth
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
    id: 'aehum-ent-1a',
    question: "Which country would most likely have a constrictive age structure diagram, with a base narrower than its middle?",
    options: [
      "One with a TFR of 1.3 and many older adults",
      "One with a TFR of 4.8 and many young children",
      "One with 40 births and 12 deaths per 1,000 people",
      "One with high infant mortality and early marriage",
    ],
    correctIndex: 0,
    explanation: "A TFR well below replacement (about 2.1) means each generation of children is smaller than the one before, so the base narrows while older cohorts stay large. A TFR of 4.8, a high birth rate and high infant mortality all point to an expansive, wide-based diagram.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  {
    id: 'aehum-ent-1b',
    question: "Country A grows at 1.4% per year and Country B at 3.5% per year. Using the rule of 70, how many more years does Country A take to double than Country B?",
    options: [
      "2.1 years",
      "30 years",
      "50 years",
      "20 years",
    ],
    correctIndex: 1,
    explanation: "Doubling times are 70 ÷ 1.4 = 50 years for A and 70 ÷ 3.5 = 20 years for B, so A takes 30 years longer. 2.1 is the difference between the growth rates, and 50 and 20 are the two doubling times on their own.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Reading Age Structure Diagrams
  // ═══════════════════════════════════════════════════
  {
    id: 'aehum-ent-2a',
    question: "A country has 50 million people, and 21 million of them are under age 15. What percent of the population is in the pre-reproductive cohort?",
    options: [
      "58%",
      "21%",
      "42%",
      "2.4%",
    ],
    correctIndex: 2,
    explanation: "Cohort share = 21 ÷ 50 × 100 = 42%. 58% is the share aged 15 and older, 21 is the count in millions rather than a percent, and 2.4 divides the total by the cohort.",
    partNumber: 2,
    partTitle: "Reading Age Structure Diagrams",
  },

  {
    id: 'aehum-ent-2b',
    question: "An age structure diagram shows a large baby-boom bulge and, about 25 to 30 years behind it, a smaller second bulge. What best explains the second bulge?",
    options: [
      "The boom generation had its own children in its reproductive years",
      "A second wave of immigrants arrived about 25 years later",
      "Death rates rose sharply among the people in the older bulge",
      "Government pronatalist payments began exactly 25 years later",
    ],
    correctIndex: 0,
    explanation: "A bulge moves up the diagram as its members age, and when the large boom cohort reaches its reproductive years it produces extra births, an echo boom about one generation behind. Rising deaths would shrink a bulge rather than create a new one.",
    partNumber: 2,
    partTitle: "Reading Age Structure Diagrams",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Fertility and Its Drivers
  // ═══════════════════════════════════════════════════
  {
    id: 'aehum-ent-3a',
    question: "A region of 3 million people records 72,000 live births and 2,160 deaths of infants under age 1 in a year. What is its infant mortality rate?",
    options: [
      "30 per 1,000",
      "33 per 1,000",
      "0.72 per 1,000",
      "3.0 per 1,000",
    ],
    correctIndex: 0,
    explanation: "IMR = infant deaths ÷ live births × 1,000 = 2,160 ÷ 72,000 × 1,000 = 30 per 1,000 live births. Dividing by the whole population gives 0.72, and 33 inverts the fraction.",
    partNumber: 3,
    partTitle: "Fertility and Its Drivers",
  },

  {
    id: 'aehum-ent-3b',
    question: "Expanding secondary schooling for girls is one of the most effective ways to lower a country's total fertility rate. What is the main reason?",
    options: [
      "Schooling makes children more valuable as farm workers",
      "Educated women marry later and have more options",
      "Educated families rely more on children for old-age care",
      "Schools raise infant mortality by spreading disease",
    ],
    correctIndex: 1,
    explanation: "Girls who stay in school marry and have their first child later, gain job options and more say in family decisions, and use family planning more, so lifetime fertility falls. Valuable child labor, old-age reliance on children and high infant mortality all push fertility up, not down.",
    partNumber: 3,
    partTitle: "Fertility and Its Drivers",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Population Dynamics and Calculations
  // ═══════════════════════════════════════════════════
  {
    id: 'aehum-ent-4a',
    question: "A country of 30 million people records 750,000 births, 210,000 deaths, 60,000 immigrants and 120,000 emigrants in one year. What is its annual growth rate?",
    options: [
      "1.8%",
      "16%",
      "1.6%",
      "2.4%",
    ],
    correctIndex: 2,
    explanation: "Rates per 1,000: CBR 25, CDR 7, immigration 2, emigration 4. Growth = [(25 + 2) − (7 + 4)] ÷ 10 = 16 ÷ 10 = 1.6%. 1.8% ignores migration, 16% forgets to divide by 10, and 2.4% adds the emigrants instead of subtracting them.",
    partNumber: 4,
    partTitle: "Population Dynamics and Calculations",
  },

  {
    id: 'aehum-ent-4b',
    question: "Why do published estimates of Earth's human carrying capacity vary so widely?",
    options: [
      "Estimates count land area but leave out the oceans",
      "Scientists disagree on the current birth rate",
      "Each estimate uses a different census count",
      "They hinge on technology and per-person use",
    ],
    correctIndex: 3,
    explanation: "Human K depends on technology (fertilizer, irrigation), per-capita consumption (grain-based versus meat-heavy diets) and trade, so different assumptions give very different totals. Population counts and birth rates are fairly precise, and leaving out oceans would not explain the wide spread.",
    partNumber: 4,
    partTitle: "Population Dynamics and Calculations",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: The Demographic Transition in Depth
  // ═══════════════════════════════════════════════════
  {
    id: 'aehum-ent-5a',
    question: "Country X has 120 million people with an ecological footprint of 1.2 gha each. Country Y has 40 million people. What footprint per person would Country Y need for its total footprint to equal Country X's?",
    options: [
      "1.2 gha per person",
      "3.0 gha per person",
      "0.4 gha per person",
      "3.6 gha per person",
    ],
    correctIndex: 3,
    explanation: "X's total = 120 million × 1.2 = 144 million gha, so Y needs 144 ÷ 40 = 3.6 gha per person. 1.2 copies X's per-person value, 3.0 is only the population ratio, and 0.4 divides X's value by 3 instead of multiplying.",
    partNumber: 5,
    partTitle: "The Demographic Transition in Depth",
  },

  {
    id: 'aehum-ent-5b',
    question: "Death rates in many developing countries fell within a few decades during the 1900s, while Europe's had fallen over more than a century. What was the main reason for the difference?",
    options: [
      "Birth rates in those countries fell first, before death rates",
      "Vaccines and antibiotics already existed and spread quickly",
      "Their people had stronger natural immunity than Europeans",
      "Emigration removed most of the sick and elderly people",
    ],
    correctIndex: 1,
    explanation: "Clean-water methods, vaccines and antibiotics arrived ready-made, so death rates fell in decades rather than centuries, making Stage 2 growth steeper than Europe's ever was. In the transition deaths fall before births, not after.",
    partNumber: 5,
    partTitle: "The Demographic Transition in Depth",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: AP Exam Practice
  // ═══════════════════════════════════════════════════
  {
    id: 'aehum-ent-6a',
    question: "A country of 8 million people records 72,000 births, 96,000 deaths, 48,000 immigrants and 8,000 emigrants in a year. What is its annual growth rate?",
    options: [
      "−0.3%",
      "+0.4%",
      "+0.2%",
      "+2.0%",
    ],
    correctIndex: 2,
    explanation: "Net change = (72,000 + 48,000) − (96,000 + 8,000) = +16,000, and 16,000 ÷ 8,000,000 × 100 = +0.2%. −0.3% counts births and deaths only, +2.0% is off by a factor of ten, and +0.4% adds the emigrants instead of subtracting them.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  {
    id: 'aehum-ent-6b',
    question: "In a country with a TFR of 5.0, only 25% of women complete secondary school. An FRQ asks you to propose a policy to lower TFR and justify it with the data. Which answer earns the justify point?",
    options: [
      "Build more schools, because education is generally a good thing",
      "Lower the legal marriage age so that families can form earlier",
      "Offer child allowances to families with three or more children",
      "Expand girls' schooling, since only 25% finish and it delays first births",
    ],
    correctIndex: 3,
    explanation: "A justification needs a data value and a mechanism: only 25% of women finish secondary school, and schooling delays marriage and first births, lowering TFR. A claim without evidence earns nothing, and an earlier marriage age or child allowances would raise fertility.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis Review
  // ═══════════════════════════════════════════════════
  {
    id: 'aehum-ent-7a',
    question: "A country of 15 million people records 450,000 births, 120,000 deaths, 15,000 immigrants and 45,000 emigrants in a year. Using the rule of 70, about how long will its population take to double?",
    options: [
      "31.8 years",
      "3.5 years",
      "23 years",
      "35 years",
    ],
    correctIndex: 3,
    explanation: "Rates per 1,000: CBR 30, CDR 8, immigration 1, emigration 3, so growth = [(30 + 1) − (8 + 3)] ÷ 10 = 2.0%, and 70 ÷ 2.0 = 35 years. 31.8 years ignores migration (2.2%), and 3.5 years divides 70 by 20 without converting to percent.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },

  {
    id: 'aehum-ent-7b',
    question: "Which pair of indicators best fits a country in Stage 2 of the demographic transition?",
    options: [
      "TFR near 1.3 and 28% of people aged 65 or older",
      "Birth and death rates both near 40 per 1,000",
      "Infant deaths falling fast while TFR stays near 5",
      "Birth rate falling fast while death rate is low",
    ],
    correctIndex: 2,
    explanation: "In Stage 2, clean water, sanitation and vaccines cut deaths (including infant deaths) quickly while family size lags behind, so TFR stays high and growth is fastest. Both rates high is Stage 1, falling births with low deaths is Stage 3, and low TFR with an aging population is Stage 4.",
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
    { partNumber: 2, partTitle: "Reading Age Structure Diagrams" },
    { partNumber: 3, partTitle: "Fertility and Its Drivers" },
    { partNumber: 4, partTitle: "Population Dynamics and Calculations" },
    { partNumber: 5, partTitle: "The Demographic Transition in Depth" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
