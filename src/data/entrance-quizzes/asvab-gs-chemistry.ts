/**
 * Entrance Quiz — Chemistry: Matter and Reactions (ASVAB General Science) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 * Item ids 'gs-chemistry-ent-<part><a|b>'; partNumber/partTitle match the lesson.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Chemistry on the ASVAB
  {
    id: 'gs-chemistry-ent-1a',
    question: 'On the CAT-ASVAB, how many scored questions does the General Science subtest have?',
    options: ['15', '25', '10', '35'],
    correctIndex: 0,
    explanation: 'The CAT-ASVAB General Science subtest has 15 scored questions in 12 minutes. The paper version has 25 questions.',
    partNumber: 1,
    partTitle: 'Chemistry on the ASVAB',
  },
  {
    id: 'gs-chemistry-ent-1b',
    question: 'Which of these events produces a new substance?',
    options: ['Wood burning in a campfire', 'Water freezing into ice cubes', 'A puddle drying up in the sun', 'A sheet of paper being torn'],
    correctIndex: 0,
    explanation: 'Burning wood turns it into ash, smoke, carbon dioxide and water vapor, which are new substances: a chemical change. Freezing, drying and tearing change only the state or size of the material.',
    partNumber: 1,
    partTitle: 'Chemistry on the ASVAB',
  },
  // Part 2 — Matter, States and Changes
  {
    id: 'gs-chemistry-ent-2a',
    question: 'What is the name of the change from a liquid to a gas?',
    options: ['Vaporization', 'Condensation', 'Sublimation', 'Deposition'],
    correctIndex: 0,
    explanation: 'Liquid to gas is vaporization (boiling or evaporation). Condensation is gas to liquid, sublimation is solid to gas, and deposition is gas to solid.',
    partNumber: 2,
    partTitle: 'Matter, States and Changes',
  },
  {
    id: 'gs-chemistry-ent-2b',
    question: 'An object has a density of 0.7 g/cm³. What does it do when placed in fresh water?',
    options: ['It floats', 'It sinks', 'It dissolves', 'It hovers at mid-depth'],
    correctIndex: 0,
    explanation: 'Fresh water is about 1 g/cm³. An object less dense than the water floats, so 0.7 g/cm³ floats. Density alone says nothing about dissolving, and hovering would need a density equal to water\'s.',
    partNumber: 2,
    partTitle: 'Matter, States and Changes',
  },
  // Part 3 — Atoms and the Periodic Table
  {
    id: 'gs-chemistry-ent-3a',
    question: 'An atom has 8 protons and 8 neutrons. What is its mass number?',
    options: ['16', '8', '0', '24'],
    correctIndex: 0,
    explanation: 'Mass number = protons + neutrons = $8 + 8 = 16$. The atomic number is 8 (oxygen); 0 is the difference, and 24 counts the 8 electrons as well.',
    partNumber: 3,
    partTitle: 'Atoms and the Periodic Table',
  },
  {
    id: 'gs-chemistry-ent-3b',
    question: 'What do elements in the same group (column) of the periodic table have in common?',
    options: ['Similar chemical properties', 'The same atomic mass', 'The same number of protons', 'The same physical state'],
    correctIndex: 0,
    explanation: 'Elements in a group have the same number of outer electrons, so they react in similar ways. Their masses and proton counts increase down the group, and a group can contain both solids and gases.',
    partNumber: 3,
    partTitle: 'Atoms and the Periodic Table',
  },
  // Part 4 — Compounds, Mixtures and Solutions
  {
    id: 'gs-chemistry-ent-4a',
    question: 'Which of these is a heterogeneous mixture?',
    options: ['Sand mixed with gravel', 'Salt dissolved in water', 'Pure liquid water', 'Oxygen gas'],
    correctIndex: 0,
    explanation: 'In sand and gravel you can see and pick out the separate parts, so it is a heterogeneous mixture. Salt water is a homogeneous mixture (a solution), water is a compound and oxygen gas is an element.',
    partNumber: 4,
    partTitle: 'Compounds, Mixtures and Solutions',
  },
  {
    id: 'gs-chemistry-ent-4b',
    question: 'Table salt, sodium chloride, is held together by which kind of bond?',
    options: ['Ionic bonds', 'Covalent bonds', 'Metallic bonds', 'Hydrogen bonds'],
    correctIndex: 0,
    explanation: 'Sodium (a metal) gives an electron to chlorine (a nonmetal), and the $Na^{+}$ and $Cl^{-}$ ions attract: an ionic bond. Covalent bonds share electrons between nonmetals.',
    partNumber: 4,
    partTitle: 'Compounds, Mixtures and Solutions',
  },
  // Part 5 — Acids, Bases and Chemical Reactions
  {
    id: 'gs-chemistry-ent-5a',
    question: 'A solution has a pH of 9. How is it classified?',
    options: ['Basic', 'Acidic', 'Neutral', 'Salty'],
    correctIndex: 0,
    explanation: 'Above 7 on the pH scale is basic (alkaline), below 7 is acidic, and exactly 7 is neutral. "Salty" is not a pH category.',
    partNumber: 5,
    partTitle: 'Acids, Bases and Chemical Reactions',
  },
  {
    id: 'gs-chemistry-ent-5b',
    question: 'The enzymes in your digestive system speed up the breakdown of food without being used up. Enzymes are examples of:',
    options: ['Catalysts', 'Reactants', 'Products', 'Solvents'],
    correctIndex: 0,
    explanation: 'A substance that speeds up a reaction and comes out unchanged is a catalyst; enzymes are the body\'s catalysts. Reactants are used up, products are made, and solvents dissolve other substances.',
    partNumber: 5,
    partTitle: 'Acids, Bases and Chemical Reactions',
  },
  // Part 6 — Test Strategy and Common Traps
  {
    id: 'gs-chemistry-ent-6a',
    question: 'An ion has a charge of $-1$. Compared with its number of protons, how many electrons does it have?',
    options: ['One more electron', 'One fewer electron', 'The same number', 'Two more electrons'],
    correctIndex: 0,
    explanation: 'Charge = protons − electrons. A charge of $-1$ means there is one more electron than protons: the atom gained an electron.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  {
    id: 'gs-chemistry-ent-6b',
    question: 'A student says that stirring sugar into hot tea until it disappears is a chemical change. Why is the student wrong?',
    options: ['No new substance is formed', 'The sugar is destroyed', 'Heat is always given off', 'Tea is not a real liquid'],
    correctIndex: 0,
    explanation: 'Dissolving is a physical change: the sugar molecules spread out among the water molecules but stay sugar, and you could get the sugar back by evaporating the water. Nothing is destroyed, and a chemical change is defined by a new substance, not by heat.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'gs-chemistry-ent-7a',
    question: 'Which element has the chemical symbol Au?',
    options: ['Gold', 'Silver', 'Aluminum', 'Argon'],
    correctIndex: 0,
    explanation: 'Au is gold (Latin aurum). Silver is Ag, aluminum is Al and argon is Ar.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
  {
    id: 'gs-chemistry-ent-7b',
    question: 'After a log burns completely in a fireplace, the ash weighs much less than the log did. What is the best explanation?',
    options: ['Most of the mass left as gases', 'Burning destroyed most of the mass', 'Fire turned most of the mass into heat', 'The ash is less dense than the wood'],
    correctIndex: 0,
    explanation: 'Mass is conserved in a reaction. Burning turns most of the wood into carbon dioxide and water vapor, which drift up the chimney, so only the ash stays behind. Mass is not destroyed or turned into heat in an ordinary chemical reaction, and density does not explain a loss of total mass.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Chemistry on the ASVAB' },
    { partNumber: 2, partTitle: 'Matter, States and Changes' },
    { partNumber: 3, partTitle: 'Atoms and the Periodic Table' },
    { partNumber: 4, partTitle: 'Compounds, Mixtures and Solutions' },
    { partNumber: 5, partTitle: 'Acids, Bases and Chemical Reactions' },
    { partNumber: 6, partTitle: 'Test Strategy and Common Traps' },
    { partNumber: 7, partTitle: 'Mixed Mastery Set' },
  ]
}
