/**
 * Entrance Quiz — Population Distribution & Composition (AP Human Geography)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'hgpo-ent-1a', question: 'The ecumene refers to:', options: ['Uninhabited areas', 'The portion of Earth permanently inhabited by humans', 'Ocean areas', 'Areas with no vegetation'], correctIndex: 1, explanation: 'The ecumene is the habitable portion of Earth where humans have made permanent settlements.', partNumber: 1, partTitle: 'Population Distribution' },
  { id: 'hgpo-ent-1b', question: 'Arithmetic density is calculated by:', options: ['Dividing population by arable land', 'Dividing total population by total land area', 'Counting farmers per acre', 'Measuring urban population only'], correctIndex: 1, explanation: 'Arithmetic density is the simplest measure: total population divided by total land area.', partNumber: 1, partTitle: 'Population Distribution' },
  { id: 'hgpo-ent-2a', question: 'A wide-based population pyramid indicates:', options: ['An aging population', 'A youthful population with high birth rates', 'Zero population growth', 'A declining population'], correctIndex: 1, explanation: 'A wide base on a population pyramid indicates many young people — typical of countries with high birth rates.', partNumber: 2, partTitle: 'Population Composition' },
  { id: 'hgpo-ent-2b', question: 'The dependency ratio measures:', options: ['Immigration rates', 'The proportion of dependents relative to working-age population', 'Total population size', 'Birth rates only'], correctIndex: 1, explanation: 'The dependency ratio measures how many non-working (too young or old) people depend on the working-age population.', partNumber: 2, partTitle: 'Population Composition' },
  { id: 'hgpo-ent-3a', question: 'Physiological density differs from arithmetic density because it uses:', options: ['Total land area', 'Only arable (farmable) land', 'Only urban land', 'Only water area'], correctIndex: 1, explanation: 'Physiological density uses arable land in the denominator, giving a better picture of food production pressure.', partNumber: 3, partTitle: 'Population Density Measures' },
  { id: 'hgpo-ent-3b', question: 'A country with low agricultural density likely has:', options: ['Many subsistence farmers', 'Mechanized, efficient agriculture', 'No farmland', 'Overpopulation'], correctIndex: 1, explanation: 'Low agricultural density means few farmers per arable acre — indicating mechanized, efficient farming systems.', partNumber: 3, partTitle: 'Population Density Measures' },
  { id: 'hgpo-ent-4a', question: 'A pull factor for migration would be:', options: ['War in the home country', 'Job opportunities in a new city', 'Famine at home', 'Political persecution'], correctIndex: 1, explanation: 'Pull factors attract people to a destination — job opportunities, better education, safety, etc.', partNumber: 4, partTitle: 'Factors Influencing Distribution' },
  { id: 'hgpo-ent-4b', question: 'An intervening obstacle is:', options: ['A barrier that makes migration difficult', 'A reason to migrate', 'A type of map', 'A population pyramid'], correctIndex: 0, explanation: 'Intervening obstacles — like oceans, deserts, or border controls — make it harder to migrate between two places.', partNumber: 4, partTitle: 'Factors Influencing Distribution' },
  { id: 'hgpo-ent-5a', question: 'The largest population cluster in the world is:', options: ['Europe', 'East Asia', 'North America', 'South America'], correctIndex: 1, explanation: 'East Asia, centered on China, is the world\'s largest population cluster with over 1.5 billion people.', partNumber: 5, partTitle: 'World Population Clusters' },
  { id: 'hgpo-ent-5b', question: 'South Asia\'s population cluster is primarily located in:', options: ['The Himalayan mountains', 'The Indo-Gangetic Plain and coastal areas', 'The Sahara Desert', 'The Arctic region'], correctIndex: 1, explanation: 'South Asia\'s population concentrates on the fertile Indo-Gangetic Plain and along the coasts of India.', partNumber: 5, partTitle: 'World Population Clusters' },
  { id: 'hgpo-ent-6a', question: 'A demographic analysis typically includes:', options: ['Population size, composition, and distribution data', 'Only birth rates', 'Only death rates', 'Only migration data'], correctIndex: 0, explanation: 'Demographic analysis examines multiple population characteristics: size, age structure, distribution, growth rates, etc.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'hgpo-ent-6b', question: 'A cohort in demographic studies refers to:', options: ['The total population', 'A group sharing a common characteristic like birth year', 'A type of government', 'A migration pattern'], correctIndex: 1, explanation: 'A cohort is a group of people who share a characteristic — most commonly, people born in the same time period.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'hgpo-ent-7a', question: 'The demographic transition model describes:', options: ['How population changes as countries industrialize', 'Only birth rates', 'Only death rates', 'Immigration patterns'], correctIndex: 0, explanation: 'The DTM describes the transition from high birth and death rates to low birth and death rates as countries develop.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'hgpo-ent-7b', question: 'Overpopulation is best understood as:', options: ['Having many people in a country', 'Population exceeding the environment\'s carrying capacity', 'Having a high arithmetic density', 'Having more males than females'], correctIndex: 1, explanation: 'Overpopulation is not just about numbers — it occurs when population demands exceed environmental resources and carrying capacity.', partNumber: 7, partTitle: 'AP Review' }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Population Distribution' },
    { partNumber: 2, partTitle: 'Population Composition' },
    { partNumber: 3, partTitle: 'Population Density Measures' },
    { partNumber: 4, partTitle: 'Factors Influencing Distribution' },
    { partNumber: 5, partTitle: 'World Population Clusters' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
