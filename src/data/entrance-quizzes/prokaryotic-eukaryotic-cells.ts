/**
 * Entrance Quiz — Prokaryotic and Eukaryotic Cells (AP Biology)
 * 8 questions · 4 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'pec-eq-1a', question: 'What are the three main components of the cell theory?', options: ['Cells are energy sources; cells are rectangular; cells evolve', 'All living organisms are composed of cells; the cell is the basic unit of life; all cells arise from pre-existing cells', 'Cells must contain a nucleus; cells divide by mitosis; cells contain DNA', 'Cells are only found in plants; cells require sunlight; cells are the smallest unit of matter'], correctIndex: 1, explanation: 'Cell theory states: (1) all living things are made of cells, (2) the cell is the basic unit of life, and (3) all cells come from pre-existing cells (reproduction/heredity).', partNumber: 1, partTitle: 'Cell Theory' },
  { id: 'pec-eq-1b', question: 'What is the fundamental difference between prokaryotic and eukaryotic cells?', options: ['Prokaryotic cells are larger than eukaryotic cells', 'Eukaryotic cells have a membrane-bound nucleus; prokaryotic cells do not', 'Prokaryotic cells contain DNA; eukaryotic cells do not', 'Eukaryotic cells lack ribosomes; prokaryotic cells have many'], correctIndex: 1, explanation: 'The defining difference is the presence of a nucleus. Eukaryotes have a true nucleus and membrane-bound organelles; prokaryotes lack a nucleus and organelles (DNA is in a nucleoid region).', partNumber: 1, partTitle: 'Cell Theory' },

  // Part 2
  { id: 'pec-eq-2a', question: 'Which cellular structures are found in both prokaryotic and eukaryotic cells?', options: ['Nucleus, mitochondria, and endoplasmic reticulum', 'Ribosomes, cell membrane, and cytoplasm', 'Chloroplasts, cell wall, and centrosome', 'Lysosomes, golgi apparatus, and flagella'], correctIndex: 1, explanation: 'All cells, both prokaryotic and eukaryotic, have a cell (plasma) membrane, cytoplasm, and ribosomes. Other structures like the nucleus and organelles are unique to eukaryotes.', partNumber: 2, partTitle: 'Universal Cell Features' },
  { id: 'pec-eq-2b', question: 'What is the function of ribosomes, and are they unique to eukaryotes?', options: ['Ribosomes store energy; found only in eukaryotes', 'Ribosomes synthesize proteins; found in both prokaryotic and eukaryotic cells', 'Ribosomes break down nutrients; found only in prokaryotes', 'Ribosomes store genetic information; found in both cell types'], correctIndex: 1, explanation: 'Ribosomes synthesize proteins by reading mRNA. They are present in all cells—both prokaryotic (smaller, 70S) and eukaryotic (larger, 80S). Eukaryotic ribosomes are also found on rough ER.', partNumber: 2, partTitle: 'Universal Cell Features' },

  // Part 3
  { id: 'pec-eq-3a', question: 'Which organelles are unique to eukaryotic cells?', options: ['Cell wall and flagella', 'Nucleus, mitochondria, golgi apparatus, endoplasmic reticulum, and lysosomes', 'Ribosomes and cytoplasm', 'Nucleoid region and pili'], correctIndex: 1, explanation: 'Eukaryotic organelles include the nucleus (genetic control), mitochondria (energy), golgi apparatus (processing/shipping), endoplasmic reticulum (synthesis/transport), and lysosomes (digestion).', partNumber: 3, partTitle: 'Eukaryotic Organelles' },
  { id: 'pec-eq-3b', question: 'Which organisms would have a cell wall, and what is its function?', options: ['Only animals; provides flexibility to cells', 'Prokaryotes, plants, and some fungi; provides structural support and protection', 'Only viruses; stores genetic material', 'Only eukaryotes; stores proteins'], correctIndex: 1, explanation: 'Cell walls are found in prokaryotes (bacteria and archaea), plants, and fungi. They provide rigid structural support outside the cell membrane, protection, and help cells maintain shape.', partNumber: 3, partTitle: 'Eukaryotic Organelles' },

  // Part 4
  { id: 'pec-eq-4a', question: 'What are the three domains of life based on cellular features?', options: ['Archaea, Bacteria, and Eukarya', 'Plant, Animal, and Fungal', 'Prokaryotic and Eukaryotic', 'Aquatic, Terrestrial, and Aerial'], correctIndex: 0, explanation: 'The three domains are Archaea (prokaryotic, extreme environments), Bacteria (prokaryotic, diverse), and Eukarya (eukaryotic, includes protists, fungi, plants, and animals).', partNumber: 4, partTitle: 'Domains and Cell Origins' },
  { id: 'pec-eq-4b', question: 'According to endosymbiotic theory, how did mitochondria and chloroplasts originate?', options: ['They were created when eukaryotic cells evolved from prokaryotes by mutation', 'They were free-living prokaryotes that were engulfed by ancestral eukaryotic cells and became organelles', 'They were always part of eukaryotic cells and are unique to them', 'They developed from the nucleus splitting into smaller structures'], correctIndex: 1, explanation: 'Endosymbiotic theory proposes that mitochondria and chloroplasts were once free-living prokaryotes that were engulfed by ancestral eukaryotic cells. Over time, they became dependent organelles, a process called endosymbiosis.', partNumber: 4, partTitle: 'Domains and Cell Origins' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Cell Theory' },
    { partNumber: 2, partTitle: 'Universal Cell Features' },
    { partNumber: 3, partTitle: 'Eukaryotic Organelles' },
    { partNumber: 4, partTitle: 'Domains and Cell Origins' },
  ]
}
