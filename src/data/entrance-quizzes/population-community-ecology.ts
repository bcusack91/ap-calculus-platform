/**
 * Entrance Quiz — Population & Community Ecology (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'pce-ent-1a', question: 'Exponential population growth (J-curve) occurs when:', options: ['Resources are limited and competition is high', 'The population is near carrying capacity', 'Resources are unlimited and the population grows as dN/dt = rN', 'Predation keeps the population in check'], correctIndex: 2, explanation: 'Exponential growth produces a J-shaped curve and occurs when resources are unlimited. The equation is dN/dt = rN, where r is the intrinsic rate of increase and N is population size.', partNumber: 1, partTitle: 'Population Growth' },
  { id: 'pce-ent-1b', question: 'Population growth rate is determined by:', options: ['Birth rate only', 'Birth rate minus death rate plus immigration minus emigration', 'The number of predators in the area', 'The total biomass of the population'], correctIndex: 1, explanation: 'Population growth rate = (births − deaths) + (immigration − emigration). All four factors contribute to whether a population increases, decreases, or stays the same.', partNumber: 1, partTitle: 'Population Growth' },

  // Part 2
  { id: 'pce-ent-2a', question: 'Carrying capacity (K) is defined as:', options: ['The maximum growth rate of a population', 'The maximum population size an environment can sustain indefinitely', 'The number of species in an ecosystem', 'The minimum population size needed to avoid extinction'], correctIndex: 1, explanation: 'Carrying capacity (K) is the maximum number of individuals of a species that an environment can support indefinitely given available resources.', partNumber: 2, partTitle: 'Carrying Capacity' },
  { id: 'pce-ent-2b', question: 'Logistic growth (S-curve) differs from exponential growth because:', options: ['It never increases', 'Growth rate slows as the population approaches carrying capacity (K); dN/dt = rN(K−N)/K', 'It only applies to plants', 'The population crashes immediately after starting to grow'], correctIndex: 1, explanation: 'Logistic growth produces an S-shaped curve. Growth rate slows as the population approaches K due to increasing competition for resources. The equation is dN/dt = rN(K−N)/K.', partNumber: 2, partTitle: 'Carrying Capacity' },

  // Part 3
  { id: 'pce-ent-3a', question: 'Which of the following describes an r-selected species?', options: ['Few offspring, extensive parental care, long lifespan', 'Rapid reproduction, many offspring, little parental care', 'Slow reproduction, late maturity, stable populations', 'Large body size, low mortality rate'], correctIndex: 1, explanation: 'r-selected species (insects, bacteria) reproduce rapidly, produce many offspring, invest little in parental care, and thrive in unstable environments.', partNumber: 3, partTitle: 'r vs K Selection' },
  { id: 'pce-ent-3b', question: 'Elephants and whales are examples of K-selected species because they:', options: ['Reproduce rapidly and produce many offspring', 'Have short lifespans and high mortality', 'Reproduce slowly, produce few offspring, and provide extensive parental care', 'Are not affected by carrying capacity'], correctIndex: 2, explanation: 'K-selected species (elephants, whales) reproduce slowly, have few offspring, invest heavily in parental care, and maintain populations near carrying capacity.', partNumber: 3, partTitle: 'r vs K Selection' },

  // Part 4
  { id: 'pce-ent-4a', question: 'The competitive exclusion principle states that:', options: ['Two species can always share the same niche', 'No two species can occupy the exact same ecological niche indefinitely', 'Competition always leads to extinction of both species', 'Only predators compete for resources'], correctIndex: 1, explanation: 'The competitive exclusion principle states that two species competing for the same limited resources cannot coexist—one will outcompete and exclude the other.', partNumber: 4, partTitle: 'Community Ecology' },
  { id: 'pce-ent-4b', question: 'Resource partitioning allows similar species to coexist by:', options: ['Eliminating competition entirely', 'Using different parts of a resource or the environment', 'Migrating to different habitats every season', 'Evolving to become the same species'], correctIndex: 1, explanation: 'Resource partitioning reduces competition by allowing species to use different portions of a resource (e.g., feeding at different heights in a tree), enabling coexistence.', partNumber: 4, partTitle: 'Community Ecology' },

  // Part 5
  { id: 'pce-ent-5a', question: 'Species diversity is measured by combining:', options: ['Population size and growth rate', 'Species richness (number of species) and relative abundance (evenness)', 'Body size and trophic level', 'Habitat area and temperature'], correctIndex: 1, explanation: 'Species diversity includes both species richness (how many different species are present) and relative abundance (how evenly individuals are distributed among those species).', partNumber: 5, partTitle: 'Biodiversity' },
  { id: 'pce-ent-5b', question: 'What is the leading cause of biodiversity loss worldwide?', options: ['Invasive species introduction', 'Pollution of waterways', 'Habitat destruction', 'Overexploitation of resources'], correctIndex: 2, explanation: 'Habitat destruction (deforestation, urbanization, agriculture) is the leading cause of biodiversity loss, eliminating the environments species need to survive.', partNumber: 5, partTitle: 'Biodiversity' },

  // Part 6
  { id: 'pce-ent-6a', question: 'If the carrying capacity (K) for a population is 500 and the current population (N) is 250, what is (K − N)/K?', options: ['0.25', '0.5', '0.75', '1.0'], correctIndex: 1, explanation: '(K − N)/K = (500 − 250)/500 = 250/500 = 0.5. This means the population is at half its carrying capacity, which is when growth rate is at its maximum in logistic growth.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'pce-ent-6b', question: 'In a mark-recapture study, 40 fish are captured, marked, and released. Later, 50 fish are captured and 10 have marks. What is the estimated population size?', options: ['100', '200', '250', '400'], correctIndex: 1, explanation: 'Mark-recapture formula: N = (marked × total recaptured) / recaptured marked = (40 × 50) / 10 = 2000 / 10 = 200.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7
  { id: 'pce-ent-7a', question: 'Density-dependent factors differ from density-independent factors because they:', options: ['Only affect aquatic populations', 'Increase in intensity as population density increases (e.g., predation, disease, competition)', 'Are always caused by human activity', 'Have no effect on population size'], correctIndex: 1, explanation: 'Density-dependent factors (predation, disease, competition) intensify as population density increases. Their impact scales with how crowded the population is.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'pce-ent-7b', question: 'A volcanic eruption kills half of a population of deer regardless of population size. This is an example of a:', options: ['Density-dependent factor', 'Density-independent factor', 'Keystone event', 'K-selected event'], correctIndex: 1, explanation: 'Density-independent factors (natural disasters, weather, volcanic eruptions) affect populations regardless of their size or density.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Population Growth' },
    { partNumber: 2, partTitle: 'Carrying Capacity' },
    { partNumber: 3, partTitle: 'r vs K Selection' },
    { partNumber: 4, partTitle: 'Community Ecology' },
    { partNumber: 5, partTitle: 'Biodiversity' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
