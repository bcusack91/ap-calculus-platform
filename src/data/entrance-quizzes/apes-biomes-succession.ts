/**
 * Entrance Quiz — Biomes & Ecological Succession
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Core Concepts
 *  2 — Aquatic Biomes
 *  3 — Climate, Climatographs and Biome Distribution
 *  4 — Succession in Depth
 *  5 — Keystone Species, Indicator Species, Fire and Misconceptions
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
    id: 'aebms-ent-1a',
    question: "A landslide strips one hillside down to bare bedrock. On a nearby hillside, a hurricane flattens the trees but leaves the soil in place. How should the recovery at each site be classified?",
    options: [
      "Landslide site: primary; hurricane site: secondary",
      "Hurricane site: primary; landslide site: secondary",
      "Both sites: primary, since all plants were removed",
      "Both sites: secondary, since seeds blow in at once",
    ],
    correctIndex: 0,
    explanation: "The key difference is whether soil remains: bare bedrock must first be weathered and colonized by pioneers such as lichens (primary succession), while the hurricane site keeps its soil and seed bank (secondary succession). Loss of plants alone does not make succession primary.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  {
    id: 'aebms-ent-1b',
    question: "A biome is warm all year, has a long dry season each year, is covered by grasses with scattered trees, and burns often. Which biome is it?",
    options: [
      "Temperate grassland",
      "Hot desert",
      "Tropical rainforest",
      "Tropical savanna",
    ],
    correctIndex: 3,
    explanation: "Year-round warmth with distinct wet and dry seasons, grasses with scattered trees, and frequent fire define the tropical savanna. A temperate grassland has cold winters, a rainforest is wet all year, and a desert is too dry for continuous grass cover.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Aquatic Biomes
  // ═══════════════════════════════════════════════════
  {
    id: 'aebms-ent-2a',
    question: "At a site in an estuary, 2 parts river water (0 ppt) mix with 3 parts seawater (35 ppt). What is the salinity at the site?",
    options: [
      "17.5 ppt",
      "14 ppt",
      "52.5 ppt",
      "21 ppt",
    ],
    correctIndex: 3,
    explanation: "Use a weighted average: (2 × 0 + 3 × 35) ÷ (2 + 3) = 105 ÷ 5 = 21 ppt. 17.5 ppt ignores the unequal parts, 14 ppt swaps the weights, and 52.5 ppt divides by the river parts only.",
    partNumber: 2,
    partTitle: "Aquatic Biomes",
  },

  {
    id: 'aebms-ent-2b',
    question: "A researcher wants to sample rooted water lilies, snails and amphibian eggs in a lake. In which zone should she sample?",
    options: [
      "The littoral zone",
      "The profundal zone",
      "The limnetic zone",
      "The benthic zone",
    ],
    correctIndex: 0,
    explanation: "The littoral zone is the shallow water near shore where light reaches the bottom, so rooted plants, snails and amphibians live there. The limnetic zone is open sunlit water dominated by plankton, the profundal zone is too dark for plants, and the benthic zone is the bottom sediment at all depths.",
    partNumber: 2,
    partTitle: "Aquatic Biomes",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Climate, Climatographs and Biome Distribution
  // ═══════════════════════════════════════════════════
  {
    id: 'aebms-ent-3a',
    question: "A town at 800 m elevation has an average temperature of 20 °C. Using a cooling rate of 6.5 °C per 1,000 m, what is the estimated average temperature at a summit at 3,800 m?",
    options: [
      "13.5 °C",
      "39.5 °C",
      "−4.7 °C",
      "0.5 °C",
    ],
    correctIndex: 3,
    explanation: "The summit is 3,800 − 800 = 3,000 m higher, so it is 3.0 × 6.5 = 19.5 °C cooler: 20 − 19.5 = 0.5 °C. −4.7 °C uses the summit's full elevation instead of the gain, 13.5 °C cools for only 1,000 m, and 39.5 °C adds instead of subtracting.",
    partNumber: 3,
    partTitle: "Climate, Climatographs and Biome Distribution",
  },

  {
    id: 'aebms-ent-3b',
    question: "In a tropical rainforest, where are most of the ecosystem's nutrients stored at any given time?",
    options: [
      "In a deep layer of humus beneath the trees",
      "In acidic needle litter on the forest floor",
      "In the permafrost below the root zone",
      "In living plants, not in the soil",
    ],
    correctIndex: 3,
    explanation: "Warmth and moisture make decomposition so fast, and plant uptake so quick, that heavy rain leaches whatever is left, so most nutrients sit in living plants. Deep humus describes grassland soils, permafrost belongs to tundra, and acidic needle litter belongs to boreal forest.",
    partNumber: 3,
    partTitle: "Climate, Climatographs and Biome Distribution",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Succession in Depth
  // ═══════════════════════════════════════════════════
  {
    id: 'aebms-ent-4a',
    question: "Along a retreating glacier, the soil organic layer is 3 cm deep at a site exposed for 40 years and 15 cm deep at a site exposed for 160 years. What is the average rate of soil formation between the two sites?",
    options: [
      "0.094 cm/yr",
      "0.10 cm/yr",
      "10 cm/yr",
      "0.125 cm/yr",
    ],
    correctIndex: 1,
    explanation: "Rate = change in depth ÷ change in time = (15 − 3) ÷ (160 − 40) = 12 ÷ 120 = 0.10 cm/yr. 0.094 cm/yr divides the total depth by the total age, 0.125 cm/yr uses the total depth with the time difference, and 10 cm/yr inverts the ratio.",
    partNumber: 4,
    partTitle: "Succession in Depth",
  },

  {
    id: 'aebms-ent-4b',
    question: "An old-growth forest holds far more biomass than a nearby 30-year-old forest, yet its net primary productivity is lower. Why?",
    options: [
      "Old trees shed most of their leaves each summer",
      "Respiration in its huge living tissue uses much of the GPP",
      "Its soil has lost the nutrients that young forests still hold",
      "Its tall canopy reflects more sunlight than it absorbs",
    ],
    correctIndex: 1,
    explanation: "NPP = GPP − respiration, and the huge living biomass of a mature forest respires much of what it fixes, so little new biomass is added each year. Old trees keep their leaves in summer, canopies absorb most sunlight, and late-stage soils are usually deeper and richer than early ones.",
    partNumber: 4,
    partTitle: "Succession in Depth",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Keystone Species, Indicator Species, Fire and Misconceptions
  // ═══════════════════════════════════════════════════
  {
    id: 'aebms-ent-5a',
    question: "A kick-net sample from a stream contains 400 macroinvertebrates, of which 60 are mayfly, stonefly and caddisfly larvae, sensitive species that need high dissolved oxygen. What percent of the sample are these sensitive larvae?",
    options: [
      "15%",
      "85%",
      "6.7%",
      "60%",
    ],
    correctIndex: 0,
    explanation: "Percent = 60 ÷ 400 × 100 = 15%. 85% is the share of all other organisms, 6.7 divides the total by the sensitive count, and 60 is the raw count rather than a percent.",
    partNumber: 5,
    partTitle: "Keystone Species, Indicator Species, Fire and Misconceptions",
  },

  {
    id: 'aebms-ent-5b',
    question: "Jack pine cones stay sealed with resin for years and open only after the heat of a fire. What does this adaptation accomplish?",
    options: [
      "It keeps the seeds dormant until the tree dies of old age",
      "It prevents the tree itself from catching fire in a blaze",
      "It drops seeds onto sunlit, ash-rich ground with few rivals",
      "It lets seeds sprout under a dense canopy of mature pines",
    ],
    correctIndex: 2,
    explanation: "Serotinous cones release their seeds right after a fire, onto open, sunlit, nutrient-enriched ground where competitors have been cleared. The trigger is fire heat, not the tree's age; the cones do not protect the parent tree, and jack pine seedlings need sun, not deep shade.",
    partNumber: 5,
    partTitle: "Keystone Species, Indicator Species, Fire and Misconceptions",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: AP Exam Practice
  // ═══════════════════════════════════════════════════
  {
    id: 'aebms-ent-6a',
    question: "After a fire, a lodgepole pine stand has 8,000 stems per hectare at year 3 and 2,000 stems per hectare at year 50. What is the percent change in stem density?",
    options: [
      "−25%",
      "−75%",
      "−300%",
      "+75%",
    ],
    correctIndex: 1,
    explanation: "Percent change = (2,000 − 8,000) ÷ 8,000 × 100 = −75%. Dividing by the new value gives −300%, −25% is the fraction that remains, and +75% drops the sign of a decrease.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  {
    id: 'aebms-ent-6b',
    question: "In the same pine stand, why does the number of stems per hectare keep falling as the trees grow?",
    options: [
      "Fire returns every few years and kills the young pines",
      "Pine beetles attack the stand once it reaches full height",
      "Seedlings compete for light, and taller pines shade out smaller ones",
      "The pines stop making seeds once the soil has fully formed",
    ],
    correctIndex: 2,
    explanation: "Thousands of seedlings sprout together after a fire and compete for light, water and nutrients; taller trees shade the smaller ones, which die, leaving fewer, larger trees. A full answer names both the competition and the resource.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis Review
  // ═══════════════════════════════════════════════════
  {
    id: 'aebms-ent-7a',
    question: "A beaver pond drains, leaving a sediment-rich meadow in a temperate forest region. Which prediction for the next 150 years is best supported?",
    options: [
      "Soil and biomass grow as NPP peaks in a middle stage",
      "Species richness falls steadily as the meadow dries out",
      "Biomass rises steadily while the soil depth stays the same",
      "NPP is highest in the final shade-tolerant hardwood stage",
    ],
    correctIndex: 0,
    explanation: "In secondary succession, each generation of plants adds organic matter, so soil deepens and biomass rises, while NPP peaks in a middle stage before mature-forest respiration levels it off. Richness rises as new species arrive rather than falling.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },

  {
    id: 'aebms-ent-7b',
    question: "The average number of sensitive stonefly larvae per stream sample drops from 24 to 15 after a construction site upstream begins releasing silt. What is the percent change?",
    options: [
      "−9%",
      "−60%",
      "−37.5%",
      "+37.5%",
    ],
    correctIndex: 2,
    explanation: "Percent change = (15 − 24) ÷ 24 × 100 = −37.5%. Dividing by the new value gives −60%, −9 is the raw change in larvae per sample, and +37.5% drops the sign of a decline.",
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
    { partNumber: 2, partTitle: "Aquatic Biomes" },
    { partNumber: 3, partTitle: "Climate, Climatographs and Biome Distribution" },
    { partNumber: 4, partTitle: "Succession in Depth" },
    { partNumber: 5, partTitle: "Keystone Species, Indicator Species, Fire and Misconceptions" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
