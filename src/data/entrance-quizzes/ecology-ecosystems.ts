/**
 * Entrance Quiz — Ecology & Ecosystems (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'eco-ent-1a', question: 'Which of the following is an abiotic factor in an ecosystem?', options: ['Predators', 'Temperature', 'Decomposers', 'Parasites'], correctIndex: 1, explanation: 'Abiotic factors are nonliving components such as temperature, water, light, and soil. Predators, decomposers, and parasites are biotic (living) factors.', partNumber: 1, partTitle: 'Ecosystem Components' },
  { id: 'eco-ent-1b', question: 'An ecosystem is best defined as:', options: ['All the organisms in a given area', 'A group of populations of different species in an area', 'A community of organisms plus the abiotic environment they interact with', 'The physical environment where organisms live'], correctIndex: 2, explanation: 'An ecosystem includes the biological community (all organisms) plus the abiotic environment (physical and chemical factors) they interact with.', partNumber: 1, partTitle: 'Ecosystem Components' },

  // Part 2
  { id: 'eco-ent-2a', question: 'Which statement about energy flow in an ecosystem is correct?', options: ['Energy cycles between trophic levels', 'Energy flows one way: producers → primary consumers → secondary consumers → tertiary consumers', 'Consumers create their own energy through chemosynthesis', 'Energy increases at each trophic level'], correctIndex: 1, explanation: 'Energy flows in one direction through an ecosystem: from producers to primary consumers to secondary consumers to tertiary consumers. It does not cycle.', partNumber: 2, partTitle: 'Energy Flow' },
  { id: 'eco-ent-2b', question: 'Approximately what percentage of energy is transferred from one trophic level to the next?', options: ['1%', '10%', '50%', '90%'], correctIndex: 1, explanation: 'Only about 10% of energy is transferred between trophic levels; the rest is lost as heat through cellular respiration (the 10% rule).', partNumber: 2, partTitle: 'Energy Flow' },

  // Part 3
  { id: 'eco-ent-3a', question: 'In the carbon cycle, how does carbon enter the biotic part of the ecosystem?', options: ['Through nitrogen fixation by bacteria', 'Through photosynthesis, which fixes $CO_{2}$ into organic molecules', 'Through the water cycle via precipitation', 'Through volcanic eruptions only'], correctIndex: 1, explanation: 'Carbon enters the living (biotic) part of the ecosystem when producers fix atmospheric $CO_{2}$ into organic molecules via photosynthesis. It is released back by respiration, combustion, and decomposition.', partNumber: 3, partTitle: 'Biogeochemical Cycles' },
  { id: 'eco-ent-3b', question: 'Nitrogen fixation is essential because it:', options: ['Converts $CO_{2}$ to glucose for plants', 'Converts atmospheric $N_{2}$ into ammonia $(NH_{3})$ usable by organisms', 'Breaks down dead organisms to release minerals', 'Converts water into hydrogen and oxygen'], correctIndex: 1, explanation: 'Nitrogen fixation converts atmospheric $N_{2}$ (which most organisms cannot use) into $NH_{3}$ by specialized bacteria. Nitrogen is essential for making amino acids and nucleotides.', partNumber: 3, partTitle: 'Biogeochemical Cycles' },

  // Part 4
  { id: 'eco-ent-4a', question: 'Which is NOT a type of community interaction?', options: ['Mutualism', 'Parasitism', 'Osmosis', 'Predation'], correctIndex: 2, explanation: 'Community interactions include competition, predation, mutualism, commensalism, and parasitism. Osmosis is a physical process (water movement across a membrane), not a community interaction.', partNumber: 4, partTitle: 'Community Interactions' },
  { id: 'eco-ent-4b', question: 'A keystone species is one that:', options: ['Is the most abundant species in a community', 'Has a disproportionately large effect on its community relative to its abundance', 'Is always at the top of the food chain', 'Was the first species to colonize an area'], correctIndex: 1, explanation: 'Keystone species have effects on community structure that are disproportionately large compared to their abundance. Removing them causes dramatic changes in the ecosystem.', partNumber: 4, partTitle: 'Community Interactions' },

  // Part 5
  { id: 'eco-ent-5a', question: 'Primary succession differs from secondary succession because primary succession:', options: ['Occurs faster than secondary succession', 'Begins on bare rock or newly formed land with no soil', 'Only occurs after a forest fire', 'Starts with a climax community'], correctIndex: 1, explanation: 'Primary succession begins on bare substrate (rock, lava, sand) where no soil exists. Secondary succession follows a disturbance in an area that already has soil.', partNumber: 5, partTitle: 'Ecological Succession' },
  { id: 'eco-ent-5b', question: 'Pioneer species in ecological succession are important because they:', options: ['Represent the final stable community', 'Are the largest organisms in the ecosystem', 'Colonize barren environments first and help build soil', 'Outcompete all other species permanently'], correctIndex: 2, explanation: 'Pioneer species (lichens, mosses) are the first to colonize harsh environments and help build soil, paving the way for later species. The climax community is the stable endpoint.', partNumber: 5, partTitle: 'Ecological Succession' },

  // Part 6
  { id: 'eco-ent-6a', question: 'If producers in an ecosystem fix 10,000 kcal of energy, approximately how much energy is available to tertiary consumers?', options: ['1,000 kcal', '100 kcal', '10 kcal', '1 kcal'], correctIndex: 2, explanation: 'Using the 10% rule: producers (10,000) → primary consumers (1,000) → secondary consumers (100) → tertiary consumers (10 kcal).', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'eco-ent-6b', question: 'If a keystone predator is removed from a community, what is the most likely outcome?', options: ['All species populations decrease equally', 'Prey populations increase, then competition among prey intensifies', 'The ecosystem immediately reaches a new equilibrium', 'Abiotic factors change dramatically'], correctIndex: 1, explanation: 'Removing a keystone predator allows prey populations to increase. This leads to intensified competition among prey species and can reduce biodiversity.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7
  { id: 'eco-ent-7a', question: 'Net primary productivity (NPP) is calculated as:', options: ['Total sunlight absorbed minus light reflected', 'Gross primary productivity minus plant respiration', 'Total biomass divided by area', 'Energy at the top trophic level minus energy at the bottom'], correctIndex: 1, explanation: 'NPP = GPP − respiration. Gross primary productivity is the total energy fixed by photosynthesis; subtracting the energy plants use for their own respiration gives net primary productivity.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'eco-ent-7b', question: 'Biomagnification refers to the process by which:', options: ['Organisms grow larger at higher trophic levels', 'Toxin concentrations increase at higher trophic levels', 'Biomass increases at each trophic level', 'Energy is amplified as it moves through the food web'], correctIndex: 1, explanation: 'Biomagnification is the increasing concentration of persistent toxins (like DDT or mercury) in organisms at successively higher trophic levels.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Ecosystem Components' },
    { partNumber: 2, partTitle: 'Energy Flow' },
    { partNumber: 3, partTitle: 'Biogeochemical Cycles' },
    { partNumber: 4, partTitle: 'Community Interactions' },
    { partNumber: 5, partTitle: 'Ecological Succession' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
