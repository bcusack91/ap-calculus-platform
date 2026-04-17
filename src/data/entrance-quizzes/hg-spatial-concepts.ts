/**
 * Entrance Quiz — Spatial Concepts & Geographic Data (AP Human Geography)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'hgsp-ent-1a', question: 'Site refers to:', options: ['A place\'s relationship to surroundings', 'The physical characteristics of a location', 'The cultural meaning of a location', 'A type of map projection'], correctIndex: 1, explanation: 'Site describes the internal physical characteristics of a place — terrain, climate, water features, etc.', partNumber: 1, partTitle: 'Location & Place' },
  { id: 'hgsp-ent-1b', question: 'Situation is best described as:', options: ['Internal physical features', 'A place\'s location relative to other places', 'The population of a city', 'The climate of a region'], correctIndex: 1, explanation: 'Situation describes how a place relates to its surroundings — its relative position and connectivity.', partNumber: 1, partTitle: 'Location & Place' },
  { id: 'hgsp-ent-2a', question: 'Houses spread evenly across farmland show:', options: ['Clustered pattern', 'Dispersed pattern', 'Linear pattern', 'Random pattern'], correctIndex: 1, explanation: 'An even distribution across space is a dispersed (uniform) pattern, common in agricultural areas with homestead acts.', partNumber: 2, partTitle: 'Spatial Patterns' },
  { id: 'hgsp-ent-2b', question: 'Shops along a highway demonstrate:', options: ['Clustered pattern', 'Dispersed pattern', 'Linear pattern', 'Random pattern'], correctIndex: 2, explanation: 'Features arranged along a transportation route form a linear pattern.', partNumber: 2, partTitle: 'Spatial Patterns' },
  { id: 'hgsp-ent-3a', question: 'The Mercator projection is criticized because:', options: ['It distorts area near the poles, making high-latitude areas appear too large', 'It distorts shape', 'It cannot show direction', 'It is too small'], correctIndex: 0, explanation: 'The Mercator projection preserves shape and direction but greatly exaggerates the size of areas near the poles.', partNumber: 3, partTitle: 'Map Types & Projections' },
  { id: 'hgsp-ent-3b', question: 'A choropleth map uses:', options: ['Dots to show individual occurrences', 'Colors or shading to show data variation by area', 'Lines to show elevation', 'Arrows to show movement'], correctIndex: 1, explanation: 'Choropleth maps use color shading to show how a variable (like population density) varies across areas.', partNumber: 3, partTitle: 'Map Types & Projections' },
  { id: 'hgsp-ent-4a', question: 'Census data is an example of:', options: ['Qualitative data', 'Quantitative data', 'Remote sensing', 'Field observation'], correctIndex: 1, explanation: 'Census data provides numerical (quantitative) information about population, income, housing, etc.', partNumber: 4, partTitle: 'Geographic Data Sources' },
  { id: 'hgsp-ent-4b', question: 'Remote sensing involves:', options: ['Door-to-door surveys', 'Collecting data using satellites or aircraft', 'Reading historical documents', 'Conducting interviews'], correctIndex: 1, explanation: 'Remote sensing uses technology like satellites to collect data about Earth without direct contact.', partNumber: 4, partTitle: 'Geographic Data Sources' },
  { id: 'hgsp-ent-5a', question: 'The gravity model predicts that interaction between two cities will:', options: ['Increase with distance', 'Increase with population size and decrease with distance', 'Be the same regardless of distance', 'Only depend on transportation'], correctIndex: 1, explanation: 'The gravity model says larger populations generate more interaction, but distance reduces it.', partNumber: 5, partTitle: 'Spatial Interaction Models' },
  { id: 'hgsp-ent-5b', question: 'Tobler\'s first law states:', options: ['Distance doesn\'t matter', 'Near things are more related than distant things', 'All places are equally connected', 'Technology eliminates distance'], correctIndex: 1, explanation: 'Tobler\'s first law of geography: everything is related, but near things are more related than distant things.', partNumber: 5, partTitle: 'Spatial Interaction Models' },
  { id: 'hgsp-ent-6a', question: 'Changing the scale of analysis from local to national might:', options: ['Reveal different patterns than those visible at local scale', 'Show the exact same patterns', 'Make analysis impossible', 'Only work for physical geography'], correctIndex: 0, explanation: 'Different scales reveal different patterns — what appears clustered locally might appear dispersed nationally.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'hgsp-ent-6b', question: 'A spatial analysis of disease outbreaks would likely use:', options: ['GIS to map cases and identify clusters', 'Only literary analysis', 'Only chemical testing', 'Only historical documents'], correctIndex: 0, explanation: 'GIS mapping of disease cases reveals spatial clusters and helps identify sources and patterns of spread.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'hgsp-ent-7a', question: 'Environmental determinism argues that:', options: ['Humans shape the environment', 'The environment controls human behavior and development', 'Humans and environment have no relationship', 'Technology eliminates environmental constraints'], correctIndex: 1, explanation: 'Environmental determinism claims the physical environment dictates human activity and cultural development.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'hgsp-ent-7b', question: 'Possibilism differs from environmental determinism by arguing:', options: ['Environment has no effect on humans', 'Environment sets limitations but humans can adapt and choose', 'Technology is irrelevant', 'Culture doesn\'t matter'], correctIndex: 1, explanation: 'Possibilism holds that the environment offers possibilities and constraints, but humans make choices within those limits.', partNumber: 7, partTitle: 'AP Review' }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Location & Place' },
    { partNumber: 2, partTitle: 'Spatial Patterns' },
    { partNumber: 3, partTitle: 'Map Types & Projections' },
    { partNumber: 4, partTitle: 'Geographic Data Sources' },
    { partNumber: 5, partTitle: 'Spatial Interaction Models' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
