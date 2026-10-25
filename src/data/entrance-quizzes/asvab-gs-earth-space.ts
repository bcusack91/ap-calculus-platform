/**
 * Entrance Quiz — Earth and Space Science (ASVAB General Science) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Earth and Space Science on the ASVAB
  {
    id: 'gs-earth-space-ent-1a',
    question: 'Where does General Science fall in the order of subtests on the CAT-ASVAB?',
    options: ['It is the first subtest', 'It is the third subtest', 'It is the fifth subtest', 'It is the last subtest'],
    correctIndex: 0,
    explanation: 'General Science comes first on the CAT-ASVAB, followed by Arithmetic Reasoning, Word Knowledge and the rest. Assembling Objects is last.',
    partNumber: 1,
    partTitle: 'Earth and Space Science on the ASVAB',
  },
  {
    id: 'gs-earth-space-ent-1b',
    question: 'How many scored questions and how many minutes does the CAT-ASVAB give for General Science?',
    options: ['15 questions in 12 minutes', '25 questions in 11 minutes', '10 questions in 27 minutes', '15 questions in 55 minutes'],
    correctIndex: 0,
    explanation: 'The CAT-ASVAB gives 15 scored GS questions in 12 minutes. The paper test gives 25 in 11 minutes; 10 in 27 minutes is Paragraph Comprehension and 15 in 55 minutes is Arithmetic Reasoning.',
    partNumber: 1,
    partTitle: 'Earth and Space Science on the ASVAB',
  },
  // Part 2 — Rocks, Minerals and the Rock Cycle
  {
    id: 'gs-earth-space-ent-2a',
    question: 'Which type of rock forms when heat and pressure change an existing rock without melting it?',
    options: ['Metamorphic', 'Igneous', 'Sedimentary', 'Volcanic'],
    correctIndex: 0,
    explanation: 'Metamorphic rock ("changed form") is an existing rock altered by heat and pressure while staying solid. Igneous rock forms from melted rock that cools, sedimentary rock from pressed sediment, and volcanic rock is a kind of igneous rock.',
    partNumber: 2,
    partTitle: 'Rocks, Minerals and the Rock Cycle',
  },
  {
    id: 'gs-earth-space-ent-2b',
    question: 'Rainwater that is slightly acidic slowly eats away at a marble gravestone. This is an example of:',
    options: ['Chemical weathering', 'Mechanical weathering', 'Erosion', 'Deposition'],
    correctIndex: 0,
    explanation: 'The acid reacts with the minerals in the marble and changes them, which is chemical weathering. Mechanical weathering only breaks rock physically, erosion carries material away, and deposition drops it.',
    partNumber: 2,
    partTitle: 'Rocks, Minerals and the Rock Cycle',
  },
  // Part 3 — Earth's Layers, Plate Tectonics and Earthquakes
  {
    id: 'gs-earth-space-ent-3a',
    question: 'At what kind of plate boundary do two plates move away from each other?',
    options: ['Divergent', 'Convergent', 'Transform', 'Subducting'],
    correctIndex: 0,
    explanation: 'Plates that move apart form a divergent boundary, where magma rises and makes new crust. Convergent plates move together, transform plates slide past each other, and subduction happens at some convergent boundaries.',
    partNumber: 3,
    partTitle: 'Earth\'s Layers, Plate Tectonics and Earthquakes',
  },
  {
    id: 'gs-earth-space-ent-3b',
    question: 'Where are most of the world\'s volcanoes found?',
    options: ['Along tectonic plate boundaries', 'In the middle of large plates', 'Mostly near the North and South Poles', 'Where the crust is thickest'],
    correctIndex: 0,
    explanation: 'Most volcanoes form where plates pull apart or where one plate sinks beneath another, so they line up along plate boundaries, such as the Ring of Fire around the Pacific. A few (like Hawaii) sit over hot spots in mid-plate, but they are the exception.',
    partNumber: 3,
    partTitle: 'Earth\'s Layers, Plate Tectonics and Earthquakes',
  },
  // Part 4 — Water, Atmosphere and Weather
  {
    id: 'gs-earth-space-ent-4a',
    question: 'Which gas makes up the largest share of Earth\'s atmosphere?',
    options: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
    correctIndex: 0,
    explanation: 'Nitrogen is about 78% of dry air. Oxygen is about 21%, argon about 0.9%, and carbon dioxide only about 0.04%.',
    partNumber: 4,
    partTitle: 'Water, Atmosphere and Weather',
  },
  {
    id: 'gs-earth-space-ent-4b',
    question: 'A low-pressure system is moving toward your area. What weather does it usually bring?',
    options: ['Clouds and precipitation', 'Clear skies and calm air', 'Dry air and sunshine', 'Cold, cloudless nights'],
    correctIndex: 0,
    explanation: 'In a low, air rises and cools, and its water vapor condenses into clouds and rain or snow. Clear, calm, dry weather goes with high pressure.',
    partNumber: 4,
    partTitle: 'Water, Atmosphere and Weather',
  },
  // Part 5 — The Solar System, Stars and Seasons
  {
    id: 'gs-earth-space-ent-5a',
    question: 'What is the main cause of Earth\'s seasons?',
    options: ['The tilt of Earth\'s axis', 'Earth\'s changing distance from the Sun', 'Changes in the Sun\'s energy output', 'The Moon\'s pull on Earth\'s oceans'],
    correctIndex: 0,
    explanation: 'Earth\'s axis is tilted about 23.5°, so each hemisphere takes turns leaning toward the Sun and getting more direct light and longer days. Earth is actually closest to the Sun in January. The Sun\'s output is steady, and the Moon\'s pull causes tides.',
    partNumber: 5,
    partTitle: 'The Solar System, Stars and Seasons',
  },
  {
    id: 'gs-earth-space-ent-5b',
    question: 'A lunar eclipse happens when:',
    options: ['Earth passes between the Sun and the Moon', 'The Moon passes between the Sun and Earth', 'The Sun passes between Earth and the Moon', 'The Moon is at its first quarter phase'],
    correctIndex: 0,
    explanation: 'In a lunar eclipse Earth is in the middle, and its shadow darkens the full Moon. When the Moon is in the middle, it is a solar eclipse. The Sun is never between Earth and the Moon, and quarter moons are not lined up for eclipses.',
    partNumber: 5,
    partTitle: 'The Solar System, Stars and Seasons',
  },
  // Part 6 — Test Strategy and Common Traps
  {
    id: 'gs-earth-space-ent-6a',
    question: 'A space rock burns up in the air and makes a bright streak across the night sky. What is the streak called?',
    options: ['A meteor', 'A meteorite', 'A comet', 'An asteroid'],
    correctIndex: 0,
    explanation: 'The streak of light is a meteor. A meteorite is a piece that survives and lands on the ground, a comet is an icy body with a tail far out in space, and an asteroid is a rocky body orbiting the Sun, mostly between Mars and Jupiter.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  {
    id: 'gs-earth-space-ent-6b',
    question: 'On the CAT-ASVAB, what happens after you answer a question?',
    options: ['You cannot go back to change it', 'You can return at the end of the subtest', 'You can skip it and return later', 'You can change it during the next subtest'],
    correctIndex: 0,
    explanation: 'The official guidance is that you are not allowed to return to a question once you have answered it. Read carefully and commit to each answer.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'gs-earth-space-ent-7a',
    question: 'In which type of rock are fossils most often found?',
    options: ['Sedimentary', 'Igneous', 'Metamorphic', 'Volcanic glass'],
    correctIndex: 0,
    explanation: 'Fossils are preserved when plants and animals are buried in layers of sediment that harden into sedimentary rock. The heat that forms igneous and metamorphic rock (and volcanic glass) destroys remains.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
  {
    id: 'gs-earth-space-ent-7b',
    question: 'The Hawaiian Islands are volcanoes far from any plate boundary. What formed them?',
    options: ['A hot spot under the Pacific plate', 'A transform fault between plates', 'Two continents colliding head-on', 'A mid-ocean ridge pulling apart'],
    correctIndex: 0,
    explanation: 'Hawaii sits over a hot spot, a plume of hot mantle rising under the middle of the Pacific plate. Transform faults, continental collisions and mid-ocean ridges are all plate boundaries.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Earth and Space Science on the ASVAB' },
    { partNumber: 2, partTitle: 'Rocks, Minerals and the Rock Cycle' },
    { partNumber: 3, partTitle: 'Earth\'s Layers, Plate Tectonics and Earthquakes' },
    { partNumber: 4, partTitle: 'Water, Atmosphere and Weather' },
    { partNumber: 5, partTitle: 'The Solar System, Stars and Seasons' },
    { partNumber: 6, partTitle: 'Test Strategy and Common Traps' },
    { partNumber: 7, partTitle: 'Mixed Mastery Set' },
  ]
}
