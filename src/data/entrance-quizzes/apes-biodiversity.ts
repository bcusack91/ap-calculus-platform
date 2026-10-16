/**
 * Entrance Quiz — Biodiversity
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Core Concepts
 *  2 — Genetic Diversity and Measuring Species Diversity
 *  3 — Ecosystem Services and Their Value
 *  4 — Island Biogeography and Habitat Fragmentation
 *  5 — Ecological Tolerance, Natural Disruptions and Adaptation
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
    id: 'aebio-ent-1a',
    question: "Which observation is an example of high ecosystem diversity, rather than high species or genetic diversity?",
    options: [
      "A prairie that holds 120 different plant species",
      "Bison in one herd that vary widely in disease resistance",
      "One oak species whose trees show many different leaf shapes",
      "A region where marsh, prairie and oak forest all meet",
    ],
    correctIndex: 3,
    explanation: "Ecosystem diversity is the variety of habitats and communities in an area, such as marshes, prairie, forest and streams together. Counting plant species measures species diversity, and variation within bison or within one oak species is genetic diversity.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  {
    id: 'aebio-ent-1b',
    question: "Fungi and bacteria in a forest break down fallen leaves and return nutrients to the soil, which keeps the trees growing. Which category of ecosystem service is this?",
    options: [
      "Provisioning",
      "Supporting",
      "Cultural",
      "Regulating",
    ],
    correctIndex: 1,
    explanation: "Nutrient cycling and soil formation are supporting services: underlying processes that keep the other services running. Provisioning services are goods people harvest, cultural services are non-material benefits, and regulating services moderate processes such as floods or climate.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Genetic Diversity and Measuring Species Diversity
  // ═══════════════════════════════════════════════════
  {
    id: 'aebio-ent-2a',
    question: "A survey of a forest plot counts 80 trees: 40 pine, 20 fir, 12 spruce and 8 larch. What is the percent composition of spruce?",
    options: [
      "12%",
      "15%",
      "30%",
      "85%",
    ],
    correctIndex: 1,
    explanation: "Percent composition = n ÷ N × 100 = 12 ÷ 80 × 100 = 15%. Reading the raw count of 12 as a percent skips the division, 30% divides by the pine count instead of the total, and 85% is the share of all the other trees.",
    partNumber: 2,
    partTitle: "Genetic Diversity and Measuring Species Diversity",
  },

  {
    id: 'aebio-ent-2b',
    question: "Wildlife managers release several unrelated animals from a distant population into a small, isolated population that suffers from heart defects and low fertility. What is the main purpose of this release?",
    options: [
      "To push the population above its carrying capacity",
      "To replace the native animals with a hardier stock",
      "To add new alleles that reduce the harm of inbreeding",
      "To lower competition among males for available mates",
    ],
    correctIndex: 2,
    explanation: "Heart defects and low fertility are signs of inbreeding depression, and new individuals bring in alleles the small population has lost (genetic rescue), lowering the chance offspring inherit two copies of harmful recessive alleles. The goal is genetic variety, not more animals, replacement or reduced competition.",
    partNumber: 2,
    partTitle: "Genetic Diversity and Measuring Species Diversity",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Ecosystem Services and Their Value
  // ═══════════════════════════════════════════════════
  {
    id: 'aebio-ent-3a',
    question: "A city can build a filtration plant for \\$300 million plus \\$15 million per year to run, or protect its watershed for \\$60 million plus \\$5 million per year. Over 30 years, how much does protecting the watershed save?",
    options: [
      "\\$240 million",
      "\\$300 million",
      "\\$540 million",
      "\\$960 million",
    ],
    correctIndex: 2,
    explanation: "Plant: 300 + (15 × 30) = \\$750 million; watershed: 60 + (5 × 30) = \\$210 million; savings = 750 − 210 = \\$540 million. \\$240 million compares only the up-front costs, and \\$300 million compares only the yearly costs.",
    partNumber: 3,
    partTitle: "Ecosystem Services and Their Value",
  },

  {
    id: 'aebio-ent-3b',
    question: "A wetland upstream of a river town is drained for farmland. Which of the following is an economic consequence of losing this ecosystem service, rather than an ecological one?",
    options: [
      "The town pays more each year to repair flood damage",
      "Floodwater moves downstream faster after heavy storms",
      "Young fish lose the nursery habitat in the marsh channels",
      "Fewer wading birds nest along the drained floodplain",
    ],
    correctIndex: 0,
    explanation: "An economic consequence names who pays and how: the town now pays higher flood-repair costs because the wetland no longer stores floodwater. Lost fish nurseries, faster floodwater and fewer nesting birds are ecological consequences.",
    partNumber: 3,
    partTitle: "Ecosystem Services and Their Value",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Island Biogeography and Habitat Fragmentation
  // ═══════════════════════════════════════════════════
  {
    id: 'aebio-ent-4a',
    question: "A distant island is joined to the mainland by a new strip of forest that animals can travel along. According to the MacArthur–Wilson model, how should the island's equilibrium number of species change?",
    options: [
      "More species, as the immigration rate goes up",
      "More species, as the extinction rate rises",
      "More species, as the island's area doubles",
      "No change, as the island's area stays fixed",
    ],
    correctIndex: 0,
    explanation: "A corridor acts like moving the island closer to the mainland, raising the immigration curve, so the curves cross at a higher species number. A higher extinction rate would lower the equilibrium, the island's area does not change, and distance matters as well as size.",
    partNumber: 4,
    partTitle: "Island Biogeography and Habitat Fragmentation",
  },

  {
    id: 'aebio-ent-4b',
    question: "A forest once covered 8 km². Today only 240 hectares of it remain. What percent of the original forest has been lost? (1 km² = 100 ha)",
    options: [
      "30%",
      "70%",
      "97%",
      "233%",
    ],
    correctIndex: 1,
    explanation: "Convert first: 8 km² = 800 ha. Percent lost = (800 − 240) ÷ 800 × 100 = 70%. 30% is the share that remains, 97% treats 8 km² as 8,000 ha, and 233% divides by the remaining area instead of the original.",
    partNumber: 4,
    partTitle: "Island Biogeography and Habitat Fragmentation",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Ecological Tolerance, Natural Disruptions and Adaptation
  // ═══════════════════════════════════════════════════
  {
    id: 'aebio-ent-5a',
    question: "A salamander population of 1,200 is declining by 2.5% per year. Using the rule of 70, about how many salamanders will remain after 56 years?",
    options: [
      "600",
      "300",
      "150",
      "75",
    ],
    correctIndex: 1,
    explanation: "Halving time ≈ 70 ÷ 2.5 = 28 years, so 56 years is two halvings: 1,200 → 600 → 300. 600 stops after one halving, and 150 and 75 apply three and four halvings.",
    partNumber: 5,
    partTitle: "Ecological Tolerance, Natural Disruptions and Adaptation",
  },

  {
    id: 'aebio-ent-5b',
    question: "An oyster grows best at a salinity of 15–25 ppt, survives but grows slowly at 5–15 and 25–35 ppt, and dies outside 5–35 ppt. A dam cuts river inflow and the estuary's salinity rises to 30 ppt. What is the most likely effect?",
    options: [
      "The oysters die quickly, being past their tolerance",
      "The oysters are unaffected, since salinity varies",
      "The oysters thrive, being in their optimal range",
      "The oysters live but grow and reproduce poorly",
    ],
    correctIndex: 3,
    explanation: "30 ppt falls in a zone of physiological stress, so individuals survive but grow slowly and reproduce less, and the population declines over time. The zone of intolerance begins only above 35 ppt, and the optimal range ends at 25 ppt.",
    partNumber: 5,
    partTitle: "Ecological Tolerance, Natural Disruptions and Adaptation",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: AP Exam Practice
  // ═══════════════════════════════════════════════════
  {
    id: 'aebio-ent-6a',
    question: "In a forest-edge study, observers detected an average of 2.0 interior-species birds per count at the edge and 7.0 per count 300 m inside the forest. What is the percent change from the edge to 300 m?",
    options: [
      "+250%",
      "+71%",
      "+350%",
      "+5.0%",
    ],
    correctIndex: 0,
    explanation: "Percent change = (7.0 − 2.0) ÷ 2.0 × 100 = +250%. Dividing by the new value gives +71%, +350% is 7.0 ÷ 2.0 written as a percent, and +5.0% reports the raw difference as if it were a percent.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  {
    id: 'aebio-ent-6b',
    question: "A 20-hectare forest fragment has lost the interior bird species still found in a nearby large forest. Which explanation uses island biogeography correctly?",
    options: [
      "The fragment has fewer trees, so it is naturally less diverse",
      "Interior birds evolved within a few years to avoid patches",
      "Small populations die out more often, and isolation slows return",
      "Edge conditions favor interior birds but drive away their prey",
    ],
    correctIndex: 2,
    explanation: "Like a small, distant island, a fragment holds small populations that go locally extinct more easily, and surrounding farmland cuts off immigration that could recolonize it. Saying it has fewer trees only restates the data, and evolution cannot work that fast; edges favor edge species, not interior ones.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis Review
  // ═══════════════════════════════════════════════════
  {
    id: 'aebio-ent-7a',
    question: "A 5 km² wetland provides flood control valued at \\$1,800 per hectare per year. If farms drain 90% of it, how much flood-control value is lost each year? (1 km² = 100 ha)",
    options: [
      "\\$90,000",
      "\\$8,100",
      "\\$810,000",
      "\\$8,100,000",
    ],
    correctIndex: 2,
    explanation: "Area = 5 × 100 = 500 ha; total value = 500 × \\$1,800 = \\$900,000 per year; 90% lost = \\$810,000 per year. \\$90,000 is the value that remains, \\$8,100 skips the area conversion, and \\$8,100,000 uses 1,000 ha per km².",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },

  {
    id: 'aebio-ent-7b',
    question: "Rapid warming threatens both a forest's redwood trees and the bark beetles that live on them. Why are the redwoods less likely to adapt in time?",
    options: [
      "Each tree must change its own genes to match the climate",
      "Trees stay rooted in place, so selection does not act on them",
      "Large organisms carry fewer alleles than small organisms",
      "Their long lives mean few generations for selection to act",
    ],
    correctIndex: 3,
    explanation: "Adaptation happens to populations over generations through natural selection, so species with long generations, like redwoods, change slowly, while short-lived insects pass through many generations quickly. Individuals cannot change their own genes, rooted plants are still subject to selection, and allele numbers do not depend on body size.",
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
    { partNumber: 2, partTitle: "Genetic Diversity and Measuring Species Diversity" },
    { partNumber: 3, partTitle: "Ecosystem Services and Their Value" },
    { partNumber: 4, partTitle: "Island Biogeography and Habitat Fragmentation" },
    { partNumber: 5, partTitle: "Ecological Tolerance, Natural Disruptions and Adaptation" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
