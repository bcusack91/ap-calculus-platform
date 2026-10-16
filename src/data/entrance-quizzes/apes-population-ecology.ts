/**
 * Entrance Quiz — Population Ecology
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Core Concepts
 *  2 — Generalists, Specialists and Reproductive Strategies
 *  3 — Survivorship Curves
 *  4 — Population Growth Calculations
 *  5 — Carrying Capacity, Overshoot and Dieback
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
    id: 'aepop-ent-1a',
    question: "Which factor would kill a larger share of a meadow vole population as the population becomes more crowded?",
    options: [
      "A disease that spreads through contact",
      "An early hard frost",
      "A flash flood in the burrows",
      "A wildfire across the meadow",
    ],
    correctIndex: 0,
    explanation: "A contagious disease is density-dependent: crowding increases contact between voles, so a larger share is infected. Frost, floods and wildfire are density-independent; they kill about the same share whether the population is sparse or dense.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  {
    id: 'aepop-ent-1b',
    question: "A graph of a newly introduced rabbit population over its first few years is J-shaped. What does this shape indicate about the population during that period?",
    options: [
      "It has already reached its carrying capacity",
      "Resources are effectively unlimited for now",
      "Density-dependent factors are strongly limiting it",
      "Deaths are exceeding births in each generation",
    ],
    correctIndex: 1,
    explanation: "A J-shaped curve is exponential growth, which happens when resources are effectively unlimited and environmental resistance is small. A population at carrying capacity levels off into an S shape, and deaths exceeding births would make it decline.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Generalists, Specialists and Reproductive Strategies
  // ═══════════════════════════════════════════════════
  {
    id: 'aepop-ent-2a',
    question: "A bat species gets 70% of its diet from one moth species. A blight reduces that moth population by 40%. By about what percent does the bat's total food supply fall?",
    options: [
      "40%",
      "30%",
      "28%",
      "42%",
    ],
    correctIndex: 2,
    explanation: "Multiply the diet share by the decline: 0.70 × 0.40 = 0.28, a 28% drop in total food. 40% is the moth decline alone, 30% subtracts the percentages, and 42% takes 60% of the 70% share instead of 40%.",
    partNumber: 2,
    partTitle: "Generalists, Specialists and Reproductive Strategies",
  },

  {
    id: 'aepop-ent-2b',
    question: "Which change in a species' life history would raise its biotic potential?",
    options: [
      "Waiting longer between litters",
      "Reproducing at a younger age",
      "Producing fewer young per breeding event",
      "Ending reproduction earlier in its life",
    ],
    correctIndex: 1,
    explanation: "Biotic potential is the maximum growth rate under ideal conditions, and it rises with earlier first reproduction, more offspring per event, more frequent breeding and a longer reproductive lifespan. Each of the other changes lowers it.",
    partNumber: 2,
    partTitle: "Generalists, Specialists and Reproductive Strategies",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Survivorship Curves
  // ═══════════════════════════════════════════════════
  {
    id: 'aepop-ent-3a',
    question: "A cohort of 1,000 songbirds has 500 survivors at age 1, 250 at age 2 and 125 at age 3. Which statement correctly describes this cohort?",
    options: [
      "Deaths rise each year, a Type I pattern",
      "250 die each year, a Type I pattern",
      "Deaths fall each year, a Type III pattern",
      "50% die each year, a Type II pattern",
    ],
    correctIndex: 3,
    explanation: "Each year half of the birds alive at the start die (500 of 1,000, 250 of 500, 125 of 250), a constant mortality rate, which is Type II and plots as a straight line on a log axis. The number of deaths falls each year, but the rate stays the same.",
    partNumber: 3,
    partTitle: "Survivorship Curves",
  },

  {
    id: 'aepop-ent-3b',
    question: "On a survivorship graph with a logarithmic y axis, a drop from 1,000 survivors to 100 covers a certain vertical distance. Which other drop covers the same distance?",
    options: [
      "From 1,000 to 900",
      "From 500 to 400",
      "From 100 to 0",
      "From 100 to 10",
    ],
    correctIndex: 3,
    explanation: "On a log scale, each equal step down divides the survivors by 10, so 1,000 to 100 and 100 to 10 cover the same distance (each is a 90% loss). Drops of 100 individuals are much shorter, and zero cannot be plotted on a log axis.",
    partNumber: 3,
    partTitle: "Survivorship Curves",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Population Growth Calculations
  // ═══════════════════════════════════════════════════
  {
    id: 'aepop-ent-4a',
    question: "A herd of 2,400 elk has 480 births, 360 deaths, 60 immigrants and 120 emigrants in a year. How many elk are in the herd at the end of the year?",
    options: [
      "2,460",
      "2,520",
      "3,420",
      "2,340",
    ],
    correctIndex: 0,
    explanation: "ΔN = (B + I) − (D + E) = (480 + 60) − (360 + 120) = +60, so the herd ends at 2,460. 2,520 leaves out migration, 3,420 adds every term, and 2,340 subtracts the 60 instead of adding it.",
    partNumber: 4,
    partTitle: "Population Growth Calculations",
  },

  {
    id: 'aepop-ent-4b',
    question: "A squirrel population has a birth rate of 52 per 1,000 and a death rate of 17 per 1,000 per year, with no migration. Using the rule of 70, about how long will it take the population to double?",
    options: [
      "20 years",
      "2 years",
      "200 years",
      "13 years",
    ],
    correctIndex: 0,
    explanation: "Growth rate = (52 − 17) ÷ 10 = 3.5% per year, and doubling time ≈ 70 ÷ 3.5 = 20 years. 2 years divides 70 by 35 without converting to percent, 200 years divides by 0.35, and 13 years uses only the birth rate.",
    partNumber: 4,
    partTitle: "Population Growth Calculations",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Carrying Capacity, Overshoot and Dieback
  // ═══════════════════════════════════════════════════
  {
    id: 'aepop-ent-5a',
    question: "A valley produces 720,000 kg of usable forage per year, and each elk needs 2,400 kg per year. A drought then cuts the forage by 25%. What is the new carrying capacity for elk?",
    options: [
      "300 elk",
      "75 elk",
      "225 elk",
      "275 elk",
    ],
    correctIndex: 2,
    explanation: "Forage after the drought = 720,000 × 0.75 = 540,000 kg, and 540,000 ÷ 2,400 = 225 elk. 300 elk is the carrying capacity before the drought, 75 elk is only the loss, and 275 elk subtracts 25 animals instead of 25% of the food.",
    partNumber: 5,
    partTitle: "Carrying Capacity, Overshoot and Dieback",
  },

  {
    id: 'aepop-ent-5b',
    question: "A hailstorm kills 15% of a sparse population of 200 grasshoppers and 15% of a dense population of 2,000 in a nearby field. How should the hailstorm be classified?",
    options: [
      "Dependent on density, since more died in the dense field",
      "Independent of density, since the same share died in each field",
      "Dependent on density, since crowded insects lacked shelter",
      "Neither, since weather acts on food supply, not insects",
    ],
    correctIndex: 1,
    explanation: "A factor is density-independent when the proportion it kills does not change with density; here 15% died in both fields. The larger number killed in the dense field (300 versus 30) reflects population size, not a stronger effect of crowding.",
    partNumber: 5,
    partTitle: "Carrying Capacity, Overshoot and Dieback",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: AP Exam Practice
  // ═══════════════════════════════════════════════════
  {
    id: 'aepop-ent-6a',
    question: "Goats released on an island numbered 30 in 1995, 60 in 1998, 120 in 2001 and 240 in 2004. Using the doubling time and the rule of 70, what was their approximate average growth rate?",
    options: [
      "3% per year",
      "210% per year",
      "33% per year",
      "23% per year",
    ],
    correctIndex: 3,
    explanation: "The herd doubled every 3 years, so growth rate ≈ 70 ÷ 3 ≈ 23% per year. 3% treats the doubling time as the rate, 33% divides 100 by 3 instead of 70, and 210% multiplies 70 by 3.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  {
    id: 'aepop-ent-6b',
    question: "The same goat herd numbered 120 in 2001, 240 in 2004, 420 in 2007, 520 in 2010, 560 in 2013 and 570 in 2016. In which interval did the herd add the most goats, and why then?",
    options: [
      "2001–2004, when food was most plentiful per goat",
      "2010–2013, when the herd was largest and bred most",
      "2004–2007, as the herd passed half its carrying capacity",
      "2013–2016, as the herd reached its carrying capacity",
    ],
    correctIndex: 2,
    explanation: "The herd levels off near 570, so K/2 is about 285, which it passed between 2004 and 2007 while adding 180 goats, the most of any interval. Earlier there were fewer breeders, and later density-dependent limits slowed growth as the herd neared K.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis Review
  // ═══════════════════════════════════════════════════
  {
    id: 'aepop-ent-7a',
    question: "A population of 150 lizards grows at 10% per year. Using the rule of 70, about how many lizards will there be after 21 years?",
    options: [
      "600",
      "1,200",
      "2,400",
      "465",
    ],
    correctIndex: 1,
    explanation: "Doubling time ≈ 70 ÷ 10 = 7 years, so 21 years is three doublings: 150 → 300 → 600 → 1,200. 600 stops after two doublings, 2,400 adds a fourth, and 465 adds 15 lizards each year as if growth were linear.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },

  {
    id: 'aepop-ent-7b',
    question: "Which observation provides the clearest evidence that density-dependent regulation is acting on a population?",
    options: [
      "Birth rate falls as animals per km² increase",
      "Deaths rise after a hard freeze at low and high density",
      "Population size tracks yearly rainfall closely",
      "Growth rate stays constant as density increases",
    ],
    correctIndex: 0,
    explanation: "Density-dependent regulation means crowding changes birth or death rates, so a birth rate that falls as density rises is direct evidence of it. A freeze or rainfall acts regardless of density, and a constant growth rate shows no regulation at all.",
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
    { partNumber: 2, partTitle: "Generalists, Specialists and Reproductive Strategies" },
    { partNumber: 3, partTitle: "Survivorship Curves" },
    { partNumber: 4, partTitle: "Population Growth Calculations" },
    { partNumber: 5, partTitle: "Carrying Capacity, Overshoot and Dieback" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
