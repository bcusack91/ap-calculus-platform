/**
 * Entrance Quiz — Genetics and Evolution (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Mendelian Genetics
  {
    id: 'mge-ent-1a',
    question: 'Two heterozygous parents (Aa × Aa) cross for a completely dominant trait. What fraction of offspring will express the dominant phenotype?',
    options: [
      '1/4',
      '1/2',
      '3/4',
      '1/1'
    ],
    correctIndex: 2,
    explanation: 'A Punnett square for Aa × Aa yields: AA (1/4), Aa (2/4), aa (1/4). Both AA and Aa express the dominant phenotype, giving 3/4 dominant : 1/4 recessive—the classic 3:1 ratio for a monohybrid cross.',
    partNumber: 1,
    partTitle: 'Mendelian Genetics'
  },
  {
    id: 'mge-ent-1b',
    question: 'Two parents are each carriers for cystic fibrosis (autosomal recessive, CF allele = f). What is the probability that their first child will have cystic fibrosis?',
    options: [
      '0% — carriers are not affected.',
      '25%',
      '50%',
      '75%'
    ],
    correctIndex: 1,
    explanation: 'Both parents are Ff. Cross: Ff × Ff → FF (1/4), Ff (2/4), ff (1/4). Only ff individuals have CF, giving a 25% (1/4) probability. Carriers (Ff) are unaffected but can pass the allele to offspring.',
    partNumber: 1,
    partTitle: 'Mendelian Genetics'
  },

  // Part 2: Non-Mendelian Patterns
  {
    id: 'mge-ent-2a',
    question: 'In codominance, a cross between a red-flowered plant (R¹R¹) and a white-flowered plant (R²R²) produces offspring with both red and white patches. This differs from incomplete dominance because:',
    options: [
      'In codominance, both alleles are fully expressed simultaneously; in incomplete dominance, a blended intermediate phenotype results.',
      'In codominance, only one allele is expressed; in incomplete dominance, both are equally silent.',
      'In incomplete dominance, heterozygotes look like one parent; in codominance, they look like neither parent.',
      'Codominance only occurs in plants; incomplete dominance only in animals.'
    ],
    correctIndex: 0,
    explanation: 'Codominance: both alleles are fully expressed (patches of each color). Incomplete dominance: the heterozygote shows a blended intermediate (e.g., pink from red × white). These are distinct patterns of inheritance that both deviate from simple dominance.',
    partNumber: 2,
    partTitle: 'Non-Mendelian Patterns'
  },
  {
    id: 'mge-ent-2b',
    question: 'Hemophilia A is an X-linked recessive disorder. A carrier mother (X^H X^h) and an unaffected father (X^H Y) have children. What fraction of their daughters will be carriers?',
    options: [
      '0%',
      '25%',
      '50%',
      '100%'
    ],
    correctIndex: 2,
    explanation: 'Mother is X^H X^h; father is X^H Y. Daughters receive the father\'s X^H plus either mother\'s X^H or X^h. Possible daughters: X^H X^H (normal, 1/2) and X^H X^h (carrier, 1/2). Sons: X^H Y (normal) and X^h Y (affected). So 50% of daughters are carriers.',
    partNumber: 2,
    partTitle: 'Non-Mendelian Patterns'
  },

  // Part 3: Genetic Mutations
  {
    id: 'mge-ent-3a',
    question: 'A frameshift mutation is more likely to disrupt protein function than a missense mutation because:',
    options: [
      'Frameshifts always introduce premature stop codons, while missense mutations never do.',
      'Frameshifts alter the reading frame, changing all downstream amino acids and often creating premature stops, whereas missense mutations alter only one amino acid.',
      'Missense mutations change the DNA sequence while frameshifts do not.',
      'Frameshifts are always in exons and missense mutations are always in introns.'
    ],
    correctIndex: 1,
    explanation: 'Insertion or deletion of nucleotides (not in multiples of 3) shifts the reading frame. Every codon downstream is altered, typically producing a completely different and often truncated protein. A missense mutation changes just one amino acid, which may or may not impair function.',
    partNumber: 3,
    partTitle: 'Genetic Mutations'
  },
  {
    id: 'mge-ent-3b',
    question: 'Silent mutations do not change the amino acid sequence because:',
    options: [
      'They occur only in non-coding intron sequences.',
      'They change a codon to a synonymous codon that specifies the same amino acid, due to the degeneracy of the genetic code.',
      'The ribosome can repair single-nucleotide changes during translation.',
      'They always affect the third wobble position and are recognized and corrected by tRNA.'
    ],
    correctIndex: 1,
    explanation: 'The genetic code is degenerate: most amino acids are encoded by more than one codon (synonymous codons). Silent mutations substitute a nucleotide to produce a different codon for the same amino acid. These changes are especially common at the third codon position (wobble position).',
    partNumber: 3,
    partTitle: 'Genetic Mutations'
  },

  // Part 4: Population Genetics
  {
    id: 'mge-ent-4a',
    question: 'In a population at Hardy-Weinberg equilibrium, the frequency of the recessive allele (q) is 0.3. What is the expected frequency of heterozygotes?',
    options: [
      '0.09',
      '0.42',
      '0.49',
      '0.21'
    ],
    correctIndex: 1,
    explanation: 'HWE: p + q = 1, so p = 0.7. Heterozygote frequency = 2pq = 2(0.7)(0.3) = 0.42. Homozygous dominant = p² = 0.49; homozygous recessive = q² = 0.09. Always check: 0.49 + 0.42 + 0.09 = 1.0 ✓',
    partNumber: 4,
    partTitle: 'Population Genetics'
  },
  {
    id: 'mge-ent-4b',
    question: 'Which of the following would VIOLATE Hardy-Weinberg equilibrium in a population?',
    options: [
      'Random mating among all genotypes.',
      'A very large population size with no migration.',
      'A significant portion of the population migrating out and being replaced by individuals from a genetically distinct population.',
      'No selection pressure on any genotype.'
    ],
    correctIndex: 2,
    explanation: 'Hardy-Weinberg equilibrium requires: random mating, large population, no mutation, no migration, no natural selection. Gene flow (migration) changes allele frequencies and violates HWE. Options A, B, and D describe conditions that maintain HWE.',
    partNumber: 4,
    partTitle: 'Population Genetics'
  },

  // Part 5: Natural Selection
  {
    id: 'mge-ent-5a',
    question: 'The sickle-cell allele (HbS) is maintained at high frequency in malaria-endemic regions because heterozygotes (HbA/HbS) have higher fitness than either homozygote. This is an example of:',
    options: [
      'Directional selection favoring the dominant HbA allele.',
      'Genetic drift eliminating the HbS allele.',
      'Balancing selection (heterozygote advantage/overdominance).',
      'Disruptive selection creating two distinct phenotypic classes.'
    ],
    correctIndex: 2,
    explanation: 'Balancing selection (specifically heterozygote advantage or overdominance) maintains both alleles. Heterozygotes have partial sickling protection against malaria without the severe anemia of HbS/HbS homozygotes. This explains the high frequency of HbS in malaria-endemic areas.',
    partNumber: 5,
    partTitle: 'Natural Selection'
  },
  {
    id: 'mge-ent-5b',
    question: 'Convergent evolution refers to:',
    options: [
      'Two populations of the same species diverging into separate species through geographic isolation.',
      'Unrelated species independently evolving similar traits in response to similar environmental pressures.',
      'The reversion of a derived trait back to an ancestral state.',
      'Rapid speciation following a mass extinction event.'
    ],
    correctIndex: 1,
    explanation: 'Convergent evolution occurs when distantly related organisms independently evolve similar adaptations to analogous environmental challenges. Classic examples: wings of bats (mammals) and birds; echolocation in bats and dolphins; streamlined body shape in sharks (fish) and dolphins (mammals).',
    partNumber: 5,
    partTitle: 'Natural Selection'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'mge-ent-6a',
    question: 'A pedigree shows that an autosomal dominant condition is present in every generation, affects both males and females equally, and an affected individual always has at least one affected parent. This pattern is most consistent with:',
    options: [
      'Autosomal recessive inheritance.',
      'X-linked recessive inheritance.',
      'Autosomal dominant inheritance.',
      'Mitochondrial inheritance.'
    ],
    correctIndex: 2,
    explanation: 'Autosomal dominant hallmarks: (1) every generation affected (vertical transmission), (2) both sexes equally affected, (3) affected individuals have an affected parent (except new mutations), (4) ~50% of children of an affected parent are affected.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'mge-ent-6b',
    question: 'In a dihybrid cross AaBb × AaBb (A and B independently assorting), what fraction of offspring are expected to be doubly homozygous recessive (aabb)?',
    options: [
      '1/16',
      '3/16',
      '1/4',
      '9/16'
    ],
    correctIndex: 0,
    explanation: 'For independently assorting genes: P(aa) = 1/4 and P(bb) = 1/4. By the multiplication rule: P(aabb) = 1/4 × 1/4 = 1/16. The classic 9:3:3:1 ratio allocates 1/16 to the doubly recessive class.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'mge-ent-7a',
    question: 'Allopatric speciation occurs when:',
    options: [
      'Two populations in the same geographic area develop reproductive isolation through behavioral differences.',
      'A geographic barrier physically separates a population, preventing gene flow and allowing divergence.',
      'Polyploidy doubles the chromosome number, instantly creating a new species.',
      'Natural selection eliminates all but one phenotype in a population.'
    ],
    correctIndex: 1,
    explanation: 'Allopatric speciation (allo = "other," patric = "homeland") requires geographic isolation. Separated populations undergo independent mutation and selection, accumulating genetic differences until reproductive isolation is complete—even if the barrier is later removed.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'mge-ent-7b',
    question: 'Genomic imprinting is an epigenetic phenomenon in which gene expression depends on the parental origin of the allele. Prader-Willi syndrome results when the paternal chromosome 15q11-13 region is deleted or silenced. This means the maternal copy of this region is:',
    options: [
      'Also deleted in Prader-Willi syndrome.',
      'Normally imprinted (silenced), so loss of the paternal copy leaves no functional gene.',
      'Overexpressed to compensate for the paternal loss.',
      'Translocated to another chromosome.'
    ],
    correctIndex: 1,
    explanation: 'In genomic imprinting, one parental copy is epigenetically silenced. The maternal chromosome 15q11-13 is normally imprinted (silenced). When the paternal copy is deleted, neither copy is expressed, causing Prader-Willi. The converse (maternal deletion) causes Angelman syndrome.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Mendelian Genetics' },
    { partNumber: 2, partTitle: 'Non-Mendelian Patterns' },
    { partNumber: 3, partTitle: 'Genetic Mutations' },
    { partNumber: 4, partTitle: 'Population Genetics' },
    { partNumber: 5, partTitle: 'Natural Selection' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' }
  ]
}
