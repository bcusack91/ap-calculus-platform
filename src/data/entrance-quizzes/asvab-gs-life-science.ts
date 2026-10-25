/**
 * Entrance Quiz — Life Science: Cells, Body Systems and Ecology (ASVAB General Science) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Life Science on the ASVAB
  {
    id: 'gs-life-science-ent-1a',
    question: 'Which branch of life science is the study of animals?',
    options: ['Zoology', 'Botany', 'Ecology', 'Geology'],
    correctIndex: 0,
    explanation: 'Zoology studies animals. Botany studies plants, ecology studies how living things interact with their environment, and geology is an earth science.',
    partNumber: 1,
    partTitle: 'Life Science on the ASVAB',
  },
  {
    id: 'gs-life-science-ent-1b',
    question: 'The root "neur-", as in "neuron", refers to:',
    options: ['Nerves', 'Blood', 'Skin', 'Muscles'],
    correctIndex: 0,
    explanation: '"Neur-" means nerve: a neuron is a nerve cell and neurology is the study of the nervous system. Blood is "hem-", skin is "derm-" and muscle is "my-" (as in myocardium, the heart muscle).',
    partNumber: 1,
    partTitle: 'Life Science on the ASVAB',
  },
  // Part 2 — Cells and Organelles
  {
    id: 'gs-life-science-ent-2a',
    question: 'In a plant or animal cell, which organelle holds the DNA?',
    options: ['Nucleus', 'Ribosome', 'Vacuole', 'Cell wall'],
    correctIndex: 0,
    explanation: 'Eukaryotic cells keep their DNA inside the nucleus, which controls the cell. Ribosomes build proteins, vacuoles store materials and the cell wall supports plant cells.',
    partNumber: 2,
    partTitle: 'Cells and Organelles',
  },
  {
    id: 'gs-life-science-ent-2b',
    question: 'Which type of cell division produces sperm and egg cells?',
    options: ['Meiosis', 'Mitosis', 'Osmosis', 'Fertilization'],
    correctIndex: 0,
    explanation: 'Meiosis makes sex cells with half the usual number of chromosomes. Mitosis makes identical body cells, osmosis is water moving across a membrane and fertilization is sperm joining egg.',
    partNumber: 2,
    partTitle: 'Cells and Organelles',
  },
  // Part 3 — Genetics, DNA and Classification
  {
    id: 'gs-life-science-ent-3a',
    question: 'In pea plants, purple flowers (P) are dominant over white flowers (p). What fraction of the offspring of Pp × Pp are expected to have white flowers?',
    options: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{3}{4}$', '$0$'],
    correctIndex: 0,
    explanation: 'Pp × Pp gives PP, Pp, Pp and pp. Only pp (1 of 4) shows the recessive white color, so the expected fraction is $\\frac{1}{4}$.',
    partNumber: 3,
    partTitle: 'Genetics, DNA and Classification',
  },
  {
    id: 'gs-life-science-ent-3b',
    question: 'Which list gives classification levels in order from broadest to narrowest?',
    options: ['Kingdom, phylum, class, order', 'Phylum, kingdom, order, class', 'Kingdom, class, phylum, order', 'Order, class, phylum, kingdom'],
    correctIndex: 0,
    explanation: 'The order is domain, kingdom, phylum, class, order, family, genus, species ("Dear King Philip Came Over For Good Soup"). Only the first list keeps that order.',
    partNumber: 3,
    partTitle: 'Genetics, DNA and Classification',
  },
  // Part 4 — Human Body Systems, Nutrition and Health
  {
    id: 'gs-life-science-ent-4a',
    question: 'Which body system\'s main job is to take in oxygen and get rid of carbon dioxide?',
    options: ['Respiratory', 'Circulatory', 'Digestive', 'Excretory'],
    correctIndex: 0,
    explanation: 'The respiratory system (lungs, trachea, diaphragm) exchanges oxygen and carbon dioxide with the air. The circulatory system carries those gases around the body but does not exchange them with the air.',
    partNumber: 4,
    partTitle: 'Human Body Systems, Nutrition and Health',
  },
  {
    id: 'gs-life-science-ent-4b',
    question: 'Which nutrient is the body\'s main source of quick energy?',
    options: ['Carbohydrates', 'Unsaturated fats', 'Vitamins', 'Minerals'],
    correctIndex: 0,
    explanation: 'Carbohydrates (sugars and starches) are the body\'s main, fastest fuel. Fats, including unsaturated fats, are mainly stored, longer-term energy, and vitamins and minerals supply no Calories.',
    partNumber: 4,
    partTitle: 'Human Body Systems, Nutrition and Health',
  },
  // Part 5 — Plants, Ecology and Energy Flow
  {
    id: 'gs-life-science-ent-5a',
    question: 'Along with water and light energy, what do plants take in to make glucose by photosynthesis?',
    options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Carbon monoxide'],
    correctIndex: 0,
    explanation: 'Photosynthesis combines carbon dioxide and water, using light energy, to make glucose and release oxygen. Oxygen is a product, not an ingredient, and carbon monoxide is a poisonous gas plants do not use.',
    partNumber: 5,
    partTitle: 'Plants, Ecology and Energy Flow',
  },
  {
    id: 'gs-life-science-ent-5b',
    question: 'In a field, rabbits eat clover and foxes eat rabbits. What is the fox?',
    options: ['Secondary consumer', 'Primary consumer', 'Producer', 'Decomposer'],
    correctIndex: 0,
    explanation: 'Clover is the producer and the rabbit, which eats it, is the primary consumer. The fox eats the primary consumer, so it is a secondary consumer.',
    partNumber: 5,
    partTitle: 'Plants, Ecology and Energy Flow',
  },
  // Part 6 — Test Strategy and Common Traps
  {
    id: 'gs-life-science-ent-6a',
    question: 'Which of these animals is a bird?',
    options: ['Penguin', 'Bat', 'Platypus', 'Flying fish'],
    correctIndex: 0,
    explanation: 'Penguins have feathers and lay hard-shelled eggs, so they are birds even though they cannot fly. Bats and platypuses are mammals, and flying fish are fish.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  {
    id: 'gs-life-science-ent-6b',
    question: 'A doctor tells a patient with the flu that an antibiotic will not help. Why not?',
    options: ['The flu is caused by a virus', 'The flu is caused by bacteria', 'Antibiotics only work on fungi', 'The flu is not contagious'],
    correctIndex: 0,
    explanation: 'Antibiotics kill bacteria, and the flu is caused by a virus, which is not a cell and is not affected by antibiotics. If the flu were bacterial, an antibiotic would help; antibiotics do not target fungi, and the flu spreads easily from person to person.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'gs-life-science-ent-7a',
    question: 'Which blood vessels are the smallest, with walls thin enough for oxygen and nutrients to pass into body cells?',
    options: ['Capillaries', 'Arteries', 'Veins', 'Pulmonary veins'],
    correctIndex: 0,
    explanation: 'Capillaries connect arteries to veins, and their walls are one cell thick, so materials pass between the blood and the cells there. Arteries and veins, including the large pulmonary veins, have walls too thick for this exchange.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
  {
    id: 'gs-life-science-ent-7b',
    question: 'A lichen is a fungus and an alga living together: the alga makes food for both, and the fungus gives the alga shelter and water. This relationship is:',
    options: ['Mutualism', 'Commensalism', 'Parasitism', 'Competition'],
    correctIndex: 0,
    explanation: 'Both partners benefit, which is mutualism. Commensalism leaves one partner unaffected, parasitism harms one, and competing species fight over the same resources.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Life Science on the ASVAB' },
    { partNumber: 2, partTitle: 'Cells and Organelles' },
    { partNumber: 3, partTitle: 'Genetics, DNA and Classification' },
    { partNumber: 4, partTitle: 'Human Body Systems, Nutrition and Health' },
    { partNumber: 5, partTitle: 'Plants, Ecology and Energy Flow' },
    { partNumber: 6, partTitle: 'Test Strategy and Common Traps' },
    { partNumber: 7, partTitle: 'Mixed Mastery Set' },
  ]
}
