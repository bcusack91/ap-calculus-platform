/**
 * Entrance Quiz — Biodiversity Conservation
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Core Concepts
 *  2 — Invasive Species in Depth
 *  3 — Endangered Species: Who Is at Risk and How Recovery Works
 *  4 — Monitoring Populations: Sampling and Data
 *  5 — Human Impacts, Solutions and Trade-offs
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
    id: 'aebdc-ent-1a',
    question: "Commercial fleets catch a slow-growing shark species for its fins faster than the population can replace the animals taken. Which HIPPCO threat does this represent?",
    options: [
      "Habitat loss",
      "Invasive species",
      "Pollution",
      "Overexploitation",
    ],
    correctIndex: 3,
    explanation: "Harvesting a species faster than it can reproduce is overexploitation, the O in HIPPCO. The sharks' habitat is not being destroyed, nothing is contaminating it, and the sharks are native, not introduced.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  {
    id: 'aebdc-ent-1b',
    question: "Mongooses were brought to Hawaii to control rats in sugarcane fields, but they mostly ate the eggs of native ground-nesting birds instead. What does this case best illustrate?",
    options: [
      "Seed banks store genetic material for later restoration",
      "An introduced predator can itself turn invasive",
      "Habitat corridors can spread disease between fragments",
      "Captive breeding fails to remove the original threat",
    ],
    correctIndex: 1,
    explanation: "Biological control releases a natural enemy to fight a pest, but the agent may attack native species and become invasive itself, as the mongoose did. The case involves no seed banks, corridors or captive breeding.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Invasive Species in Depth
  // ═══════════════════════════════════════════════════
  {
    id: 'aebdc-ent-2a',
    question: "An invasive shrub covers 1.5 ha and doubles its area every year. Removal costs \\$600 per hectare. If the agency waits 4 years before acting, about how much will removal cost?",
    options: [
      "\\$7,200",
      "\\$14,400",
      "\\$3,600",
      "\\$28,800",
    ],
    correctIndex: 1,
    explanation: "Four doublings multiply the area by 2⁴ = 16, so 1.5 × 16 = 24 ha, and 24 × \\$600 = \\$14,400. \\$7,200 counts only three doublings, \\$28,800 counts five, and \\$3,600 multiplies the area by 4 instead of by 2⁴.",
    partNumber: 2,
    partTitle: "Invasive Species in Depth",
  },

  {
    id: 'aebdc-ent-2b',
    question: "After zebra mussels spread through a lake, the water becomes much clearer. What happens to the lake's open-water food web?",
    options: [
      "Fish increase because clearer water helps them spot prey",
      "Zooplankton and larval fish lose food as plankton is filtered",
      "Phytoplankton increase as light reaches deeper into the lake",
      "Native mussels increase because the water is cleaner",
    ],
    correctIndex: 1,
    explanation: "Zebra mussels filter out phytoplankton, which is why the water clears, and that diverts energy away from zooplankton and the fish larvae that eat them. Phytoplankton decline rather than increase, and native mussels are smothered by the invaders.",
    partNumber: 2,
    partTitle: "Invasive Species in Depth",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Endangered Species: Who Is at Risk and How Recovery Works
  // ═══════════════════════════════════════════════════
  {
    id: 'aebdc-ent-3a',
    question: "A sea turtle nesting population grew from 250 nests to 1,000 nests after beaches were protected. What was the percent change?",
    options: [
      "+300%",
      "+400%",
      "+75%",
      "+30%",
    ],
    correctIndex: 0,
    explanation: "Percent change = (1,000 − 250) ÷ 250 × 100 = +300%. Dividing by the new value gives +75%, and +400% is the ratio 1,000 ÷ 250 written as a percent rather than the change.",
    partNumber: 3,
    partTitle: "Endangered Species: Who Is at Risk and How Recovery Works",
  },

  {
    id: 'aebdc-ent-3b',
    question: "Under the Endangered Species Act, what must a decision to list a species as endangered or threatened be based on?",
    options: [
      "The economic cost to nearby landowners",
      "Whether the species is native to many states",
      "How popular the species is with voters",
      "The best available scientific data",
    ],
    correctIndex: 3,
    explanation: "The ESA requires listing decisions to rest on the best available scientific data about the species' status, not on economic cost. Popularity and range across states play no role in whether a species qualifies.",
    partNumber: 3,
    partTitle: "Endangered Species: Who Is at Risk and How Recovery Works",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Monitoring Populations: Sampling and Data
  // ═══════════════════════════════════════════════════
  {
    id: 'aebdc-ent-4a',
    question: "Yearly surveys estimate that a river otter population grew from 180 animals in 2010 to 330 animals in 2020 after trapping was banned. What was the average change per year?",
    options: [
      "150 otters per year",
      "33 otters per year",
      "15 otters per year",
      "1.5 otters per year",
    ],
    correctIndex: 2,
    explanation: "Average change = (330 − 180) ÷ (2020 − 2010) = 150 ÷ 10 = 15 otters per year. 150 is the total change, 33 divides the final count by the years, and 1.5 slips a decimal place.",
    partNumber: 4,
    partTitle: "Monitoring Populations: Sampling and Data",
  },

  {
    id: 'aebdc-ent-4b',
    question: "Surveyors place twelve 0.5-m² quadrats at random on a rocky shore and count 54 barnacles in all. What is the barnacle density?",
    options: [
      "9 per m²",
      "4.5 per m²",
      "2.25 per m²",
      "108 per m²",
    ],
    correctIndex: 0,
    explanation: "Area sampled = 12 × 0.5 = 6 m², so density = 54 ÷ 6 = 9 per m². 4.5 is the count per quadrat, not per square meter, and 108 multiplies the count by 2 without accounting for the number of quadrats.",
    partNumber: 4,
    partTitle: "Monitoring Populations: Sampling and Data",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Human Impacts, Solutions and Trade-offs
  // ═══════════════════════════════════════════════════
  {
    id: 'aebdc-ent-5a',
    question: "A country covers 800,000 km² and currently protects 21% of its land. How many more square kilometers must it protect to reach a 30% target?",
    options: [
      "72,000 km²",
      "168,000 km²",
      "240,000 km²",
      "7,200 km²",
    ],
    correctIndex: 0,
    explanation: "Additional area = (0.30 − 0.21) × 800,000 = 0.09 × 800,000 = 72,000 km². 240,000 km² is the full 30% target, 168,000 km² is the area already protected, and 7,200 km² slips a decimal place.",
    partNumber: 5,
    partTitle: "Human Impacts, Solutions and Trade-offs",
  },

  {
    id: 'aebdc-ent-5b',
    question: "For the yearly cost of a captive-breeding program for one bird, a conservation group could instead buy and manage about 7,000 hectares of habitat. What is the strongest argument for buying the habitat?",
    options: [
      "Captive-bred birds lose the ability to breed in the wild",
      "Protecting habitat helps many species at once, not one bird",
      "Habitat is a one-time purchase with little upkeep afterward",
      "Captive programs mostly help species that are already common",
    ],
    correctIndex: 1,
    explanation: "In-situ protection conserves the whole ecosystem and many species, not just one bird. Captive-bred birds such as California condors have bred in the wild after release, protected land still needs management and enforcement, and captive breeding targets rare species.",
    partNumber: 5,
    partTitle: "Human Impacts, Solutions and Trade-offs",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: AP Exam Practice
  // ═══════════════════════════════════════════════════
  {
    id: 'aebdc-ent-6a',
    question: "Zebra mussels average 2,500 per m² on 25 hectares of hard lake bottom. About how many zebra mussels live on the hard bottom? (1 ha = 10,000 m²)",
    options: [
      "62,500",
      "6.25 million",
      "6.25 billion",
      "625 million",
    ],
    correctIndex: 3,
    explanation: "25 ha × 10,000 m²/ha = 250,000 m², and 250,000 × 2,500 = 625,000,000, or 625 million. 62,500 skips the area conversion, and the other two values use the wrong number of square meters per hectare.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  {
    id: 'aebdc-ent-6b',
    question: "An FRQ asks you to propose one action that would keep zebra mussels from reaching a nearby uninfested lake and to describe one disadvantage. Which answer earns both points?",
    options: [
      "Stock fish that eat mussels; this plan has no real drawbacks",
      "Drain the infested lake; this would remove the mussels there",
      "Inspect and wash boats at ramps; staffing stations costs money",
      "Add chlorine to the whole lake; it is cheap and fully harmless",
    ],
    correctIndex: 2,
    explanation: "Boat inspection and washing removes attached adults and larvae before they travel, and a real disadvantage is the cost and delay of staffing stations. The other answers either name no genuine disadvantage or describe a benefit instead of a drawback.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis Review
  // ═══════════════════════════════════════════════════
  {
    id: 'aebdc-ent-7a',
    question: "On a 20 km² island reserve, traps show about 12 invasive rats per hectare. About how many rats live on the island? (1 km² = 100 ha)",
    options: [
      "24,000",
      "2,400",
      "240",
      "240,000",
    ],
    correctIndex: 0,
    explanation: "Area = 20 × 100 = 2,000 ha, so the population is about 12 × 2,000 = 24,000 rats. 240 skips the area conversion, and 2,400 and 240,000 use 10 or 1,000 hectares per square kilometer.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },

  {
    id: 'aebdc-ent-7b',
    question: "The island's rat index rose from 3 to 12 per hectare between 2015 and 2018, but only from 12 to 18 per hectare between 2018 and 2021. What does this pattern most likely indicate?",
    options: [
      "The rats are still growing exponentially without limits",
      "The rats have died out across most of the island already",
      "The rat population is probably nearing its carrying capacity",
      "The trap index has stopped tracking the rat numbers",
    ],
    correctIndex: 2,
    explanation: "Growth by a factor of 4 followed by only a factor of 1.5 shows the rate slowing as resources or space run short, the sign of a population approaching carrying capacity. The index is still rising, so the rats have neither died out nor kept growing exponentially.",
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
    { partNumber: 2, partTitle: "Invasive Species in Depth" },
    { partNumber: 3, partTitle: "Endangered Species: Who Is at Risk and How Recovery Works" },
    { partNumber: 4, partTitle: "Monitoring Populations: Sampling and Data" },
    { partNumber: 5, partTitle: "Human Impacts, Solutions and Trade-offs" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
