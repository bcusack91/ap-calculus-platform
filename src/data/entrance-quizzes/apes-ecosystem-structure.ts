/**
 * Entrance Quiz — Ecosystem Structure
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Core Concepts
 *  2 — Primary Productivity in Depth
 *  3 — Energy Transfer Calculations
 *  4 — Food Webs, Pyramids and Trophic Cascades
 *  5 — Species Interactions and Common Misconceptions
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
    id: 'aeest-ent-1a',
    question: "Herbivorous zooplankton (primary consumers) in a pond store 6,000 kcal of energy. Using the 10% rule, about how much energy is stored in the pond's tertiary consumers?",
    options: [
      "600 kcal",
      "6 kcal",
      "60 kcal",
      "0.6 kcal",
    ],
    correctIndex: 2,
    explanation: "Primary consumers are level 2 and tertiary consumers are level 4, so there are two transfers: 6,000 × 0.1 × 0.1 = 60 kcal. 600 kcal stops one transfer short, 6 kcal applies three transfers instead of two, and 0.6 kcal applies four.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  {
    id: 'aeest-ent-1b',
    question: "Tundra and hot desert both have very low net primary productivity. Which statement correctly identifies what limits plant growth in each?",
    options: [
      "In tundra, scarce rainfall; in desert, a short growing season",
      "In both, nutrient-poor soil rather than the climate itself",
      "In tundra, weak sunlight all year; in desert, too much sunlight",
      "In tundra, cold and a short season; in desert, scarce water",
    ],
    correctIndex: 3,
    explanation: "Terrestrial NPP depends on temperature and precipitation together: tundra is limited by cold and a brief growing season, while deserts are limited by lack of water. Swapping the two limits, or blaming soil alone, ignores the climate controls the biome comparison is built on.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Primary Productivity in Depth
  // ═══════════════════════════════════════════════════
  {
    id: 'aeest-ent-2a',
    question: "A lake sample starts at 7.5 mg O₂/L. After 24 hours the light bottle reads 9.1 mg O₂/L and the dark bottle reads 6.3 mg O₂/L. What is the gross primary productivity?",
    options: [
      "1.2 mg O₂/L/day",
      "2.8 mg O₂/L/day",
      "0.4 mg O₂/L/day",
      "1.6 mg O₂/L/day",
    ],
    correctIndex: 1,
    explanation: "GPP = light − dark = 9.1 − 6.3 = 2.8 mg O₂/L/day, which equals NPP (9.1 − 7.5 = 1.6) plus respiration (7.5 − 6.3 = 1.2). The 1.6 value is only NPP, 1.2 is only respiration, and 0.4 subtracts respiration from NPP instead of adding.",
    partNumber: 2,
    partTitle: "Primary Productivity in Depth",
  },

  {
    id: 'aeest-ent-2b',
    question: "After a storm washes large amounts of sediment into a clear lake, how would phytoplankton productivity at a depth of 8 m most likely change?",
    options: [
      "It would fall, as murkier water shrinks the photic zone",
      "It would rise, since sediment adds nutrients at that depth",
      "It would stay the same, since depth sets the light level",
      "It would rise, since cloudier water traps heat for algae",
    ],
    correctIndex: 0,
    explanation: "Turbidity absorbs and scatters light, so the photic zone becomes shallower and less light reaches 8 m, lowering photosynthesis there. Light, not nutrients, is the main limit at depth, and the light reaching a given depth depends on water clarity as well as depth.",
    partNumber: 2,
    partTitle: "Primary Productivity in Depth",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Energy Transfer Calculations
  // ═══════════════════════════════════════════════════
  {
    id: 'aeest-ent-3a',
    question: "In a cold-water food web, energy transfer efficiency averages 20%. A population of seals feeding as tertiary consumers needs 160 kcal per day. How much energy must the producers fix each day to support them?",
    options: [
      "4,000 kcal",
      "800 kcal",
      "160,000 kcal",
      "20,000 kcal",
    ],
    correctIndex: 3,
    explanation: "Working down three transfers, divide by 0.2 each time: 160 ÷ 0.2 ÷ 0.2 ÷ 0.2 = 160 ÷ 0.008 = 20,000 kcal. 4,000 kcal stops after two transfers, 800 kcal after one, and 160,000 kcal uses the default 10% rule instead of the 20% given.",
    partNumber: 3,
    partTitle: "Energy Transfer Calculations",
  },

  {
    id: 'aeest-ent-3b',
    question: "A farm's grain harvest could feed 50 people for a year if they ate the grain directly. Using the 10% rule, about how many people could be fed for a year if the grain were fed to cattle and the people ate the beef?",
    options: [
      "45 people",
      "5 people",
      "25 people",
      "0.5 people",
    ],
    correctIndex: 1,
    explanation: "Feeding the grain to cattle adds one trophic transfer, so only about 10% of the energy reaches people as beef: 50 × 0.1 = 5 people. Subtracting 10% (45 people) treats the loss as 10% instead of the transfer, and 0.5 applies two transfers.",
    partNumber: 3,
    partTitle: "Energy Transfer Calculations",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Food Webs, Pyramids and Trophic Cascades
  // ═══════════════════════════════════════════════════
  {
    id: 'aeest-ent-4a',
    question: "In a stream, algae are eaten by snails, snails are eaten by crayfish, and crayfish are eaten by raccoons. If a disease kills most of the crayfish, what will most likely happen to the algae first?",
    options: [
      "They will increase, since crayfish no longer compete with them",
      "They will increase, since raccoons will switch to eating snails",
      "They will stay the same, since crayfish do not eat algae",
      "They will decrease, since more snails will survive to graze them",
    ],
    correctIndex: 3,
    explanation: "Removing the crayfish releases the snails from predation; the larger snail population then grazes more algae, so algae decline. Effects alternate up and down the chain, so a species two levels away is affected even though crayfish never eat algae.",
    partNumber: 4,
    partTitle: "Food Webs, Pyramids and Trophic Cascades",
  },

  {
    id: 'aeest-ent-4b',
    question: "A few large trees in a woodland support thousands of leaf-eating insects, which feed a few dozen songbirds. If an ecologist draws pyramids for these three levels, which one would most likely be inverted?",
    options: [
      "The pyramid of numbers",
      "The pyramid of energy",
      "The pyramid of biomass",
      "Every one of the three",
    ],
    correctIndex: 0,
    explanation: "Counting individuals gives a narrow base of a few trees beneath thousands of insects, so the numbers pyramid inverts. The trees still outweigh the insects, so the biomass pyramid stays upright, and the energy pyramid can never invert because energy is lost as heat at every step.",
    partNumber: 4,
    partTitle: "Food Webs, Pyramids and Trophic Cascades",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Species Interactions and Common Misconceptions
  // ═══════════════════════════════════════════════════
  {
    id: 'aeest-ent-5a',
    question: "Ants live inside the hollow thorns of an acacia tree and feed on its nectar, and they attack insects and mammals that try to eat its leaves. When the ants are removed, the tree suffers heavy damage. This relationship is",
    options: [
      "parasitism",
      "commensalism",
      "mutualism",
      "competition",
    ],
    correctIndex: 2,
    explanation: "Both partners benefit (+/+): the ants get shelter and food, and the tree gets protection, as shown by the damage when the ants are removed. Commensalism would leave the tree unaffected, and parasitism would harm it.",
    partNumber: 5,
    partTitle: "Species Interactions and Common Misconceptions",
  },

  {
    id: 'aeest-ent-5b',
    question: "Two sandpiper species feed on the same mudflat. One has a long bill and probes deep for worms; the other has a short bill and picks prey from the surface. What does this difference most likely allow?",
    options: [
      "Lower competition so both species can coexist on the flat",
      "Temporal partitioning that separates their feeding hours",
      "Competitive exclusion of the short-billed species over time",
      "A mutualism in which each species supplies the other prey",
    ],
    correctIndex: 0,
    explanation: "Different bill lengths let the species take prey from different depths, a form of morphological resource partitioning that reduces competition and allows coexistence. Competitive exclusion is what happens without such partitioning, and the birds feed at the same time, so the split is not temporal.",
    partNumber: 5,
    partTitle: "Species Interactions and Common Misconceptions",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: AP Exam Practice
  // ═══════════════════════════════════════════════════
  {
    id: 'aeest-ent-6a',
    question: "After part of a wetland is drained, its total NPP falls from 5.0 × 10⁹ kcal/yr to 3.5 × 10⁹ kcal/yr. What is the percent change in total NPP?",
    options: [
      "−43%",
      "−30%",
      "−70%",
      "+30%",
    ],
    correctIndex: 1,
    explanation: "Percent change = (new − old) ÷ old × 100 = (3.5 − 5.0) ÷ 5.0 × 100 = −30%. Dividing by the new value gives −43%, dropping the sign gives +30%, and −70% confuses the fraction remaining with the change.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  {
    id: 'aeest-ent-6b',
    question: "A student uses light and dark bottles to test whether added nitrate raises algal productivity, setting up bottles with 0, 1, 2 and 4 mg/L of nitrate. What is the dependent variable?",
    options: [
      "The amount of nitrate added to each bottle",
      "The dark bottle kept at each nitrate level",
      "The depth at which all bottles are placed",
      "The change in dissolved oxygen over 24 hours",
    ],
    correctIndex: 3,
    explanation: "The dependent variable is what is measured in response: the change in dissolved oxygen, from which NPP and GPP are calculated. Nitrate amount is the independent variable, depth is a controlled variable, and the dark bottle is the control for respiration.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis Review
  // ═══════════════════════════════════════════════════
  {
    id: 'aeest-ent-7a',
    question: "A 20-hectare meadow has grass GPP of 8,000 kcal/m²/yr and grass respiration of 5,000 kcal/m²/yr. The food chain is grass → grasshoppers → shrews → owls, and each owl needs 50,000 kcal per year. Using the 10% rule, how many owls can the meadow support? (1 ha = 10,000 m²)",
    options: [
      "32 owls",
      "120 owls",
      "12 owls",
      "1,200 owls",
    ],
    correctIndex: 2,
    explanation: "NPP = 8,000 − 5,000 = 3,000 kcal/m²/yr; area = 200,000 m², so total NPP = 6.0 × 10⁸ kcal/yr. Owls are three transfers up: 6.0 × 10⁸ × 0.001 = 6.0 × 10⁵ kcal, and 6.0 × 10⁵ ÷ 50,000 = 12 owls. Using GPP gives 32, and stopping after one or two transfers gives 1,200 or 120.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },

  {
    id: 'aeest-ent-7b',
    question: "During a heat wave, the meadow grasses' respiration increases while their GPP stays the same. What happens to the energy available to the owls at the top of the chain?",
    options: [
      "It stays the same, because GPP has not changed",
      "It rises, because faster respiration speeds energy flow",
      "It falls, because NPP shrinks and each level above relies on it",
      "It falls for grasshoppers, while shrews buffer the owls",
    ],
    correctIndex: 2,
    explanation: "NPP = GPP − respiration, so higher respiration lowers NPP, and NPP is the energy budget for every consumer level above the producers. GPP is not available to consumers, and a smaller base passes less energy all the way up the chain, so the owls get less too.",
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
    { partNumber: 2, partTitle: "Primary Productivity in Depth" },
    { partNumber: 3, partTitle: "Energy Transfer Calculations" },
    { partNumber: 4, partTitle: "Food Webs, Pyramids and Trophic Cascades" },
    { partNumber: 5, partTitle: "Species Interactions and Common Misconceptions" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
