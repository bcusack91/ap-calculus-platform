/**
 * Entrance Quiz — Speciation & Macroevolution (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'sm-ent-1a', question: 'According to the biological species concept, a species is defined as:', options: ['A group of organisms that look similar', 'Populations that can interbreed and produce fertile offspring', 'Organisms that share the same ecological niche', 'A group defined by DNA sequence similarity'], correctIndex: 1, explanation: 'The biological species concept defines a species as populations that can interbreed in nature and produce viable, fertile offspring.', partNumber: 1, partTitle: 'Species Concepts' },
  { id: 'sm-ent-1b', question: 'Which species concept classifies organisms based on shared derived characteristics and evolutionary history?', options: ['Morphological species concept', 'Ecological species concept', 'Phylogenetic species concept', 'Biological species concept'], correctIndex: 2, explanation: 'The phylogenetic species concept uses evolutionary history and shared derived traits. Other concepts include morphological (physical appearance) and ecological (niche-based).', partNumber: 1, partTitle: 'Species Concepts' },

  // Part 2
  { id: 'sm-ent-2a', question: 'Allopatric speciation occurs when:', options: ['Two species merge into one through hybridization', 'A geographic barrier separates a population, leading to divergence', 'Polyploidy creates a new species instantly', 'Natural selection favors intermediate phenotypes'], correctIndex: 1, explanation: 'Allopatric speciation occurs when a geographic barrier (mountain, river, canyon) physically separates populations, which then diverge independently over time.', partNumber: 2, partTitle: 'Allopatric Speciation' },
  { id: 'sm-ent-2b', question: 'The Kaibab and Abert squirrels on opposite sides of the Grand Canyon are an example of:', options: ['Sympatric speciation', 'Allopatric speciation', 'Artificial selection', 'Adaptive radiation'], correctIndex: 1, explanation: 'The Grand Canyon separates the two squirrel populations geographically, preventing gene flow and allowing them to diverge—a classic example of allopatric speciation.', partNumber: 2, partTitle: 'Allopatric Speciation' },

  // Part 3
  { id: 'sm-ent-3a', question: 'Sympatric speciation differs from allopatric speciation because it:', options: ['Requires a geographic barrier', 'Occurs without geographic isolation', 'Only happens in animal populations', 'Takes much longer to occur'], correctIndex: 1, explanation: 'Sympatric speciation occurs within the same geographic area without physical separation. It is common in plants, often through polyploidy.', partNumber: 3, partTitle: 'Sympatric Speciation' },
  { id: 'sm-ent-3b', question: 'Polyploidy (having more than two sets of chromosomes) can lead to instant speciation because:', options: ['It increases mutation rates dramatically', 'It prevents the organism from reproducing entirely', 'It creates immediate reproductive isolation from the parent population', 'It always improves fitness'], correctIndex: 2, explanation: 'A polyploid individual cannot produce fertile offspring with diploid members of the parent population, creating instant reproductive isolation and potentially a new species.', partNumber: 3, partTitle: 'Sympatric Speciation' },

  // Part 4
  { id: 'sm-ent-4a', question: 'Which of the following is a prezygotic reproductive barrier?', options: ['Hybrid sterility', 'Hybrid inviability', 'Temporal isolation (breeding at different times)', 'Hybrid breakdown'], correctIndex: 2, explanation: 'Prezygotic barriers prevent mating or fertilization. Temporal isolation (different breeding seasons/times) is prezygotic. Hybrid sterility, inviability, and breakdown are postzygotic.', partNumber: 4, partTitle: 'Reproductive Isolation' },
  { id: 'sm-ent-4b', question: 'A horse and donkey can mate and produce a mule, but mules are sterile. This is an example of:', options: ['Prezygotic mechanical isolation', 'Prezygotic gametic isolation', 'Postzygotic hybrid sterility', 'Postzygotic hybrid breakdown'], correctIndex: 2, explanation: 'Postzygotic barriers act after fertilization. The mule is a hybrid that develops normally but is sterile, making this hybrid sterility—a postzygotic barrier.', partNumber: 4, partTitle: 'Reproductive Isolation' },

  // Part 5
  { id: 'sm-ent-5a', question: 'Darwin\'s finches on the Galápagos Islands are an example of:', options: ['Convergent evolution', 'Adaptive radiation', 'Gradualism', 'Gene flow'], correctIndex: 1, explanation: 'Adaptive radiation is the rapid speciation of a single common ancestor into many species that fill different ecological niches, as seen with Darwin\'s finches evolving different beak shapes.', partNumber: 5, partTitle: 'Macroevolution Patterns' },
  { id: 'sm-ent-5b', question: 'Mass extinctions are significant to macroevolution because they:', options: ['Eliminate all life and restart evolution', 'Open ecological niches for surviving lineages to diversify', 'Only affect organisms that are poorly adapted', 'Have no lasting impact on biodiversity'], correctIndex: 1, explanation: 'Mass extinctions remove dominant species and open ecological niches, allowing surviving lineages to undergo rapid diversification and adaptive radiation.', partNumber: 5, partTitle: 'Macroevolution Patterns' },

  // Part 6
  { id: 'sm-ent-6a', question: 'A mule (horse × donkey cross) is viable but sterile. What type of reproductive barrier does this represent?', options: ['Prezygotic — gametic isolation', 'Prezygotic — mechanical isolation', 'Postzygotic — hybrid sterility', 'Postzygotic — hybrid inviability'], correctIndex: 2, explanation: 'The mule develops normally (so it is not inviable) but cannot reproduce (sterile). This is postzygotic hybrid sterility.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sm-ent-6b', question: 'Two closely related frog species live in the same pond but breed in different seasons. What type of reproductive isolation is this?', options: ['Habitat isolation', 'Temporal isolation (prezygotic)', 'Behavioral isolation', 'Postzygotic hybrid breakdown'], correctIndex: 1, explanation: 'Breeding at different times of year is temporal isolation, a prezygotic barrier that prevents mating from occurring in the first place.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7
  { id: 'sm-ent-7a', question: 'Punctuated equilibrium proposes that:', options: ['Species evolve at a constant, gradual rate', 'Species remain stable for long periods, then change rapidly during speciation events', 'All evolution occurs through genetic drift', 'Macroevolution is simply accumulated microevolution'], correctIndex: 1, explanation: 'Punctuated equilibrium proposes long periods of stasis (little change) punctuated by brief, rapid episodes of speciation, as seen in the fossil record.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'sm-ent-7b', question: 'Gradualism differs from punctuated equilibrium in that it proposes:', options: ['Evolution occurs only during mass extinctions', 'Species evolve slowly through continuous accumulation of small changes', 'Speciation always requires geographic isolation', 'Genetic drift is the main mechanism of evolution'], correctIndex: 1, explanation: 'Gradualism proposes that species evolve slowly and steadily through the continuous accumulation of small changes over long periods.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Species Concepts' },
    { partNumber: 2, partTitle: 'Allopatric Speciation' },
    { partNumber: 3, partTitle: 'Sympatric Speciation' },
    { partNumber: 4, partTitle: 'Reproductive Isolation' },
    { partNumber: 5, partTitle: 'Macroevolution Patterns' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
