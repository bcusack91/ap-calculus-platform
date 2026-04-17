/**
 * Entrance Quiz — Introduction to Geography (AP Human Geography)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'hgin-ent-1a', question: 'What is the primary focus of geography?', options: ['Historical timelines', 'Spatial patterns and processes', 'Chemical compounds', 'Literary analysis'], correctIndex: 1, explanation: 'Geography focuses on spatial patterns and processes — how things are distributed across Earth\'s surface.', partNumber: 1, partTitle: 'Geographic Thinking' },
  { id: 'hgin-ent-1b', question: 'Which perspective is unique to geography?', options: ['Temporal', 'Spatial', 'Biological', 'Economic'], correctIndex: 1, explanation: 'The spatial perspective is what distinguishes geography from other disciplines.', partNumber: 1, partTitle: 'Geographic Thinking' },
  { id: 'hgin-ent-2a', question: 'What is a thematic map?', options: ['A map showing political boundaries', 'A map displaying a particular pattern or theme', 'A map used for navigation', 'A map showing elevation'], correctIndex: 1, explanation: 'Thematic maps display specific themes or patterns like population density, climate, or economic activity.', partNumber: 2, partTitle: 'Maps and Spatial Data' },
  { id: 'hgin-ent-2b', question: 'What does GIS stand for?', options: ['Global Information Service', 'Geographic Information System', 'General Internet Source', 'Geological Investigation Software'], correctIndex: 1, explanation: 'GIS stands for Geographic Information System — it allows layering and analysis of spatial data.', partNumber: 2, partTitle: 'Maps and Spatial Data' },
  { id: 'hgin-ent-3a', question: 'A formal region is defined by:', options: ['A central node of activity', 'Uniform characteristics', 'People\'s perceptions', 'Government decree'], correctIndex: 1, explanation: 'Formal regions are defined by uniform or homogeneous characteristics, such as a language spoken or climate type.', partNumber: 3, partTitle: 'Regions and Regionalization' },
  { id: 'hgin-ent-3b', question: 'Which is an example of a functional region?', options: ['The Great Plains', 'A newspaper delivery area', 'The South', 'The Sahara Desert'], correctIndex: 1, explanation: 'A newspaper delivery area is organized around a central node (the newspaper office) and diminishes with distance — a functional region.', partNumber: 3, partTitle: 'Regions and Regionalization' },
  { id: 'hgin-ent-4a', question: 'Latitude and longitude give us:', options: ['Relative location', 'Absolute location', 'Site characteristics', 'Distance decay'], correctIndex: 1, explanation: 'Latitude and longitude provide the absolute (exact) location of any point on Earth.', partNumber: 4, partTitle: 'Spatial Concepts' },
  { id: 'hgin-ent-4b', question: 'Distance decay means:', options: ['Interaction increases with distance', 'Interaction decreases with distance', 'Distance has no effect on interaction', 'All places are equally connected'], correctIndex: 1, explanation: 'Distance decay is the principle that interaction between places decreases as distance increases.', partNumber: 4, partTitle: 'Spatial Concepts' },
  { id: 'hgin-ent-5a', question: 'Expansion diffusion involves:', options: ['Ideas moving to new locations while weakening at origin', 'Ideas spreading outward while remaining strong at the source', 'Ideas being carried by migrants', 'Ideas disappearing from origin'], correctIndex: 1, explanation: 'In expansion diffusion, the innovation spreads outward but also remains strong at its point of origin.', partNumber: 5, partTitle: 'Diffusion Patterns' },
  { id: 'hgin-ent-5b', question: 'Immigration spreading cuisine to new countries is:', options: ['Expansion diffusion', 'Relocation diffusion', 'Hierarchical diffusion', 'Contagious diffusion'], correctIndex: 1, explanation: 'When people physically move and bring their cultural practices, it is relocation diffusion.', partNumber: 5, partTitle: 'Diffusion Patterns' },
  { id: 'hgin-ent-6a', question: 'Which question best represents geographic inquiry?', options: ['When did Rome fall?', 'Why do cities develop along rivers?', 'Who invented the telephone?', 'What is photosynthesis?'], correctIndex: 1, explanation: 'Geographic inquiry asks about spatial relationships — why certain phenomena occur in certain locations.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'hgin-ent-6b', question: 'Identifying clusters of fast-food restaurants near highway exits demonstrates:', options: ['Historical analysis', 'Spatial pattern recognition', 'Chemical analysis', 'Literary criticism'], correctIndex: 1, explanation: 'Recognizing that businesses cluster near transportation nodes is spatial pattern recognition.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'hgin-ent-7a', question: 'The arrangement of cities, farms, and roads across a region reflects:', options: ['Spatial organization of human activity', 'Random chance', 'Biological processes', 'Chemical reactions'], correctIndex: 0, explanation: 'The distribution of human features across space reflects spatial organization — the core concept of geography.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'hgin-ent-7b', question: 'Which best describes cultural landscape?', options: ['Untouched wilderness', 'The visible imprint of human activity on the environment', 'Underground geological formations', 'Ocean currents'], correctIndex: 1, explanation: 'Cultural landscape is the visible result of human modification of the natural environment — buildings, farms, roads, etc.', partNumber: 7, partTitle: 'AP Review' }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Geographic Thinking' },
    { partNumber: 2, partTitle: 'Maps and Spatial Data' },
    { partNumber: 3, partTitle: 'Regions and Regionalization' },
    { partNumber: 4, partTitle: 'Spatial Concepts' },
    { partNumber: 5, partTitle: 'Diffusion Patterns' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
