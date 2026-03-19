/**
 * Entrance Quiz — Energy Flow & Nutrient Cycling (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'efnc-ent-1a', question: 'Which organisms occupy the first trophic level in an ecosystem?', options: ['Primary consumers (herbivores)', 'Producers (autotrophs)', 'Secondary consumers (carnivores)', 'Decomposers'], correctIndex: 1, explanation: 'Producers (autotrophs) are at trophic level 1 because they convert inorganic compounds into organic molecules. Primary consumers are at level 2.', partNumber: 1, partTitle: 'Trophic Levels' },
  { id: 'efnc-ent-1b', question: 'Decomposers play a critical role in ecosystems because they:', options: ['Produce oxygen through photosynthesis', 'Fix atmospheric nitrogen into ammonia', 'Break down dead organic matter, recycling nutrients at all trophic levels', 'Serve as the top predator in most food chains'], correctIndex: 2, explanation: 'Decomposers (fungi, bacteria) break down dead organic matter from all trophic levels, releasing nutrients back into the environment for producers to use.', partNumber: 1, partTitle: 'Trophic Levels' },

  // Part 2
  { id: 'efnc-ent-2a', question: 'Food webs are considered more accurate representations of ecosystems than food chains because they:', options: ['Are simpler and easier to understand', 'Show multiple interconnected feeding pathways', 'Only include producers and top predators', 'Ignore decomposers'], correctIndex: 1, explanation: 'Food webs show multiple interconnected pathways and relationships, reflecting the complexity of real ecosystems better than simple linear food chains.', partNumber: 2, partTitle: 'Food Webs' },
  { id: 'efnc-ent-2b', question: 'If a species is removed from a food web, the most likely result is:', options: ['No effect on other species', 'Cascading effects on populations of connected species', 'Only the species directly above it is affected', 'The food web becomes more stable'], correctIndex: 1, explanation: 'Removing one species from a food web can have cascading effects throughout the community because of the interconnected feeding relationships.', partNumber: 2, partTitle: 'Food Webs' },

  // Part 3
  { id: 'efnc-ent-3a', question: 'A pyramid of energy is always upright because:', options: ['Producers always have the most individuals', 'Energy is lost as heat at each trophic level, so less is available above', 'Higher trophic levels always have more biomass', 'Consumers are always larger than producers'], correctIndex: 1, explanation: 'Energy pyramids are always upright because energy is lost as heat (through cellular respiration) at each trophic level, leaving less available for the next level.', partNumber: 3, partTitle: 'Ecological Pyramids' },
  { id: 'efnc-ent-3b', question: 'In some aquatic ecosystems, the pyramid of biomass can be inverted. This occurs because:', options: ['Water provides unlimited energy', 'Phytoplankton reproduce rapidly (high turnover) despite low standing biomass', 'Aquatic consumers do not need as much energy', 'Decomposition does not occur in water'], correctIndex: 1, explanation: 'In aquatic ecosystems, phytoplankton have very high turnover rates—they reproduce so rapidly that their standing biomass at any given time can be less than the consumers that feed on them.', partNumber: 3, partTitle: 'Ecological Pyramids' },

  // Part 4
  { id: 'efnc-ent-4a', question: 'Which pair of processes balances the carbon cycle in an ecosystem?', options: ['Nitrogen fixation and denitrification', 'Photosynthesis removes CO₂; respiration and combustion add CO₂', 'Evaporation and condensation', 'Decomposition and fermentation only'], correctIndex: 1, explanation: 'Photosynthesis removes CO₂ from the atmosphere and fixes it into organic molecules. Respiration and combustion release CO₂ back into the atmosphere, balancing the cycle.', partNumber: 4, partTitle: 'Carbon Cycle' },
  { id: 'efnc-ent-4b', question: 'Burning fossil fuels contributes to climate change primarily because it:', options: ['Depletes oxygen in the atmosphere', 'Increases atmospheric CO₂, enhancing the greenhouse effect', 'Destroys the ozone layer directly', 'Reduces nitrogen in the soil'], correctIndex: 1, explanation: 'Fossil fuel combustion releases stored carbon as CO₂ into the atmosphere, increasing the greenhouse effect and contributing to global climate change.', partNumber: 4, partTitle: 'Carbon Cycle' },

  // Part 5
  { id: 'efnc-ent-5a', question: 'Nitrogen fixation is carried out by:', options: ['Plants through their leaves', 'Specialized bacteria such as Rhizobium in root nodules of legumes', 'Animals through digestion', 'Fungi through decomposition'], correctIndex: 1, explanation: 'Nitrogen fixation (N₂ → NH₃) is performed by specialized bacteria, including Rhizobium living in root nodules of legumes, because most organisms cannot break the strong triple bond in N₂.', partNumber: 5, partTitle: 'Nitrogen Cycle' },
  { id: 'efnc-ent-5b', question: 'Denitrification is the process by which:', options: ['N₂ is converted to NH₃ by bacteria', 'NO₃⁻ is converted back to N₂ gas, returning nitrogen to the atmosphere', 'NH₃ is converted to NO₃⁻ by nitrifying bacteria', 'Plants absorb nitrogen through their roots'], correctIndex: 1, explanation: 'Denitrification converts nitrates (NO₃⁻) back into atmospheric nitrogen gas (N₂), completing the nitrogen cycle by returning nitrogen to the atmosphere.', partNumber: 5, partTitle: 'Nitrogen Cycle' },

  // Part 6
  { id: 'efnc-ent-6a', question: 'Most organisms cannot use atmospheric nitrogen (N₂) directly because:', options: ['N₂ is toxic to most cells', 'The triple bond in N₂ requires too much energy to break', 'N₂ is not present in sufficient quantities', 'Only aquatic organisms need nitrogen'], correctIndex: 1, explanation: 'Atmospheric N₂ has a very strong triple covalent bond that most organisms lack the enzymes to break. Only nitrogen-fixing bacteria with nitrogenase can convert N₂ to usable NH₃.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'efnc-ent-6b', question: 'If all decomposers were removed from an ecosystem, what would most likely happen?', options: ['Energy flow would increase through the food web', 'Nutrients would remain locked in dead organic matter and not be recycled', 'Producers would compensate by fixing more carbon', 'Predator populations would increase'], correctIndex: 1, explanation: 'Without decomposers, dead organisms and waste would accumulate. Nutrients would remain locked in dead organic matter and would not be recycled back to the soil for producers to use.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7
  { id: 'efnc-ent-7a', question: 'The phosphorus cycle differs from other biogeochemical cycles because:', options: ['Phosphorus is not needed by living organisms', 'It has no atmospheric (gaseous) component — phosphorus cycles through rocks, water, and organisms', 'Phosphorus is only found in aquatic environments', 'It does not involve decomposers'], correctIndex: 1, explanation: 'Unlike carbon and nitrogen, phosphorus does not have a significant atmospheric phase. It cycles through rocks (weathering), water, soil, and living organisms.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'efnc-ent-7b', question: 'Human activities such as excessive fertilizer use and deforestation disrupt biogeochemical cycles by:', options: ['Increasing biodiversity in all ecosystems', 'Causing nutrient overload (eutrophication) and accelerating erosion', 'Having no measurable effect on nutrient cycles', 'Strengthening the ozone layer'], correctIndex: 1, explanation: 'Fertilizer runoff causes eutrophication (excessive nutrient enrichment in water bodies), and deforestation accelerates erosion and nutrient loss, disrupting natural biogeochemical cycles.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Trophic Levels' },
    { partNumber: 2, partTitle: 'Food Webs' },
    { partNumber: 3, partTitle: 'Ecological Pyramids' },
    { partNumber: 4, partTitle: 'Carbon Cycle' },
    { partNumber: 5, partTitle: 'Nitrogen Cycle' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
