/**
 * Entrance Quiz — Phylogeny and Classification (AP Biology)
 * 8 questions · 4 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'pc-eq-1a', question: 'What is the correct order of the taxonomic hierarchy from broadest to most specific?', options: ['Species, family, order, class, phylum, kingdom, domain', 'Domain, kingdom, phylum, class, order, family, genus, species', 'Kingdom, phylum, class, order, family, species, genus, domain', 'Genus, species, family, order, class, phylum, kingdom, domain'], correctIndex: 1, explanation: 'The taxonomic hierarchy from broadest to most specific is: Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species. Each level narrows to more closely related organisms.', partNumber: 1, partTitle: 'Taxonomic Hierarchy' },
  { id: 'pc-eq-1b', question: 'What does binomial nomenclature describe, and how is it structured?', options: ['The DNA sequence of an organism', 'A two-part scientific name using genus (capitalized) and species (lowercase), both italicized', 'A classification system based only on physical size', 'The complete chromosome map of a species'], correctIndex: 1, explanation: 'Binomial nomenclature assigns a two-part scientific name: the genus (capitalized) and the species (lowercase), both italicized (e.g., Homo sapiens). This system provides a unique identifier for each species.', partNumber: 1, partTitle: 'Taxonomic Hierarchy' },

  // Part 2
  { id: 'pc-eq-2a', question: 'What does a cladogram show, and what do its nodes represent?', options: ['The physical appearance of organisms over time', 'A branching diagram showing evolutionary relationships; nodes represent common ancestors of diverging lineages', 'A bar graph comparing the size of different species', 'A timeline showing extinction events'], correctIndex: 1, explanation: 'A cladogram is a phylogenetic tree showing evolutionary relationships. Each branch point (node) represents a common ancestor from which two lineages diverged. More recent nodes represent more recent common ancestors.', partNumber: 2, partTitle: 'Reading Cladograms' },
  { id: 'pc-eq-2b', question: 'On a cladogram, what do the branch lengths typically represent?', options: ['The size differences between species', 'The relative amount of evolutionary time or genetic change; longer branches usually indicate more time or greater change', 'The geographic distance between species', 'The number of genes each species possesses'], correctIndex: 1, explanation: 'In many cladograms, branch length indicates the amount of evolutionary time since divergence or the degree of genetic change. Species with longer branches have diverged further in time or accumulated more mutations.', partNumber: 2, partTitle: 'Reading Cladograms' },

  // Part 3
  { id: 'pc-eq-3a', question: 'What is the difference between homologous and analogous structures?', options: ['Homologous structures are identical in all organisms; analogous are not', 'Homologous structures share common evolutionary origin (same ancestor) despite different functions; analogous structures have similar functions but different evolutionary origins', 'Homologous structures are vestigial; analogous structures are fully functional', 'Analogous structures prove evolution; homologous structures do not'], correctIndex: 1, explanation: 'Homologous structures (e.g., bat wings, human arms) evolved from a common ancestor and share similar bone structure despite different functions. Analogous structures (e.g., bird wings, insect wings) perform similar functions but evolved independently.', partNumber: 3, partTitle: 'Evolutionary Traits' },
  { id: 'pc-eq-3b', question: 'What are derived and ancestral characters, and how do they differ?', options: ['Derived characters are newer features; ancestral characters are older, shared by a distant common ancestor', 'Ancestral characters are found in all organisms; derived characters appear only in modern species', 'Derived characters are harmful mutations; ancestral characters are beneficial', 'They are the same thing called by different names'], correctIndex: 0, explanation: 'An ancestral character is a primitive trait inherited from a distant common ancestor (e.g., four limbs in mammals). A derived character is a newer trait that evolved more recently in a lineage (e.g., feathers in birds).', partNumber: 3, partTitle: 'Evolutionary Traits' },

  // Part 4
  { id: 'pc-eq-4a', question: 'What is a monophyletic group (clade), and why is it important in classification?', options: ['A group of species with no common ancestor', 'A group of all organisms descended from a single common ancestor (including the ancestor); forms a valid evolutionary unit', 'A group of similar-looking species regardless of ancestry', 'A classification used only for animals, not plants'], correctIndex: 1, explanation: 'A monophyletic group (clade) consists of a common ancestor and all its descendants. It represents a natural evolutionary unit. Modern phylogenetic classification aims to classify organisms into clades rather than arbitrary groups.', partNumber: 4, partTitle: 'Monophyletic Groups' },
  { id: 'pc-eq-4b', question: 'What makes a classification system "natural" from a phylogenetic perspective?', options: ['It groups organisms by size and color only', 'It reflects evolutionary history by grouping organisms into monophyletic clades based on shared ancestry', 'It includes all known species in a single category', 'It is based on geographic location of organisms'], correctIndex: 1, explanation: 'A natural classification reflects true evolutionary relationships. It groups organisms into monophyletic clades based on common ancestry, not arbitrary features. This approach reveals how life actually evolved.', partNumber: 4, partTitle: 'Monophyletic Groups' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Taxonomic Hierarchy' },
    { partNumber: 2, partTitle: 'Reading Cladograms' },
    { partNumber: 3, partTitle: 'Evolutionary Traits' },
    { partNumber: 4, partTitle: 'Monophyletic Groups' },
  ]
}
