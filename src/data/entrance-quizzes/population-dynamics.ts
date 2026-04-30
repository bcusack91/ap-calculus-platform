/**
 * Entrance Quiz — Population Dynamics (AP Biology)
 * 8 questions · 4 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'pd-eq-1a', question: 'What are the two fundamental rates that determine population size?', options: ['Predation rate and starvation rate', 'Birth rate and death rate', 'Immigration and predation', 'Mutation rate and generation time'], correctIndex: 1, explanation: 'Birth rate (λ) and death rate (μ) are the primary demographic rates determining if a population grows, shrinks, or remains stable. Population change = births − deaths + immigration − emigration.', partNumber: 1, partTitle: 'Population Growth Rates' },
  { id: 'pd-eq-1b', question: 'What are immigration and emigration, and how do they differ?', options: ['They are the same process in different locations', 'Immigration is movement into a population; emigration is movement out of a population', 'Immigration increases death rate; emigration decreases it', 'Both refer to seasonal migration within a population'], correctIndex: 1, explanation: 'Immigration is the movement of individuals into a population (increasing population size). Emigration is the movement of individuals out of a population (decreasing population size).', partNumber: 1, partTitle: 'Population Growth Rates' },

  // Part 2
  { id: 'pd-eq-2a', question: 'What is exponential population growth, and under what conditions does it occur?', options: ['Continuous decline; occurs when death rate exceeds birth rate', 'Rapid growth where the population increases by a constant percentage each generation; occurs when births far exceed deaths with no limiting factors', 'Slow linear increase in population size', 'Population growth that always leads to extinction'], correctIndex: 1, explanation: 'Exponential growth (J-shaped curve) occurs when a population grows by a constant multiple each generation. It happens when resources are unlimited (few predators, abundant food) and there are no environmental resistance factors.', partNumber: 2, partTitle: 'Growth Patterns' },
  { id: 'pd-eq-2b', question: 'What is logistic population growth, and how does it differ from exponential growth?', options: ['It is faster than exponential growth', 'Growth slows as the population approaches carrying capacity, producing an S-shaped curve; limited by environmental resistance', 'It always results in population extinction', 'It occurs only in human populations'], correctIndex: 1, explanation: 'Logistic growth (S-shaped curve) is exponential at first but slows as the population approaches carrying capacity (K). Growth rate declines due to resource limitation, competition, and other density-dependent factors.', partNumber: 2, partTitle: 'Growth Patterns' },

  // Part 3
  { id: 'pd-eq-3a', question: 'What is the carrying capacity (K) of an environment?', options: ['The maximum population size the environment can sustain indefinitely given available resources', 'The minimum number of individuals needed to survive', 'The rate at which a population reproduces', 'The amount of food consumed per individual'], correctIndex: 0, explanation: 'The carrying capacity (K) is the maximum population size that an environment can support long-term based on available resources (food, space, water). Populations fluctuate around K in logistic growth.', partNumber: 3, partTitle: 'Carrying Capacity' },
  { id: 'pd-eq-3b', question: 'What happens to a population when it overshoots its carrying capacity?', options: ['The population continues growing indefinitely', 'The population declines due to increased death rate or decreased reproduction, falling back below K', 'The environment immediately expands to support more individuals', 'No change occurs; the population stays above K'], correctIndex: 1, explanation: 'When a population exceeds carrying capacity, resources become limiting. Death rate increases and/or birth rate decreases, causing population decline until it stabilizes at or below K.', partNumber: 3, partTitle: 'Carrying Capacity' },

  // Part 4
  { id: 'pd-eq-4a', question: 'What are density-dependent factors, and give an example.', options: ['Factors unaffected by population size, such as temperature', 'Factors whose effects increase with population density, such as disease, competition, and predation', 'Factors that only affect the carrying capacity', 'Factors that prevent evolution'], correctIndex: 1, explanation: 'Density-dependent factors intensify as population density increases. Examples include disease transmission (more contacts = more spread), competition for resources, and predation (easier to find concentrated prey).', partNumber: 4, partTitle: 'Limiting Factors' },
  { id: 'pd-eq-4b', question: 'What is an age structure pyramid, and what does it show?', options: ['A pyramid showing the physical location of organisms in an environment', 'A bar chart displaying the proportion of a population in different age groups; it reveals population growth potential', 'A ranking of species by age from oldest to youngest', 'A diagram showing predator-prey relationships'], correctIndex: 1, explanation: 'An age structure pyramid shows the number or percentage of males and females in different age groups. A wide base (many young individuals) indicates potential for rapid growth; a narrow base suggests slower growth or decline.', partNumber: 4, partTitle: 'Limiting Factors' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Population Growth Rates' },
    { partNumber: 2, partTitle: 'Growth Patterns' },
    { partNumber: 3, partTitle: 'Carrying Capacity' },
    { partNumber: 4, partTitle: 'Limiting Factors' },
  ]
}
