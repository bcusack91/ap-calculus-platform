export const bioChromosomalInheritancePatternsPart5Data = {
  topicSlug: 'chromosomal-inheritance-patterns',
  sections: [
    {
      id: 'chr5-intro',
      type: 'text' as const,
      content: `# Structural Chromosomal Changes

Structural chromosomal abnormalities involve **rearrangements** of chromosome segments rather than changes in chromosome number. These can arise from errors in DNA repair, recombination, or breakage.

## Four Major Types

| Type | What happens | Diagram |
|------|-------------|---------|
| **Deletion** | A segment is lost | ABCDEFG → ABEFG (CD deleted) |
| **Duplication** | A segment is copied | ABCDEFG → ABCBCDEFG (BC duplicated) |
| **Inversion** | A segment is reversed | ABCDEFG → ABEDCFG (CDE inverted) |
| **Translocation** | A segment moves to a non-homologous chromosome | Part of chr. 9 moves to chr. 22 |

> 💡 These changes affect **gene dosage**, **gene regulation**, and can **disrupt genes** at breakpoints.`
    },
    {
      id: 'chr5-deldup',
      type: 'text' as const,
      content: `## Deletions

A **deletion** occurs when a chromosomal segment is lost.

### Effects
- **Loss of genes** → usually detrimental
- **Pseudodominance**: A recessive allele on the normal homolog is expressed because the dominant allele is deleted
- Large deletions are often **lethal**

### Human Example: Cri-du-chat Syndrome
- **Deletion of part of chromosome 5p** (short arm)
- Characteristic high-pitched cry (like a cat) in infants
- Intellectual disability, microcephaly, distinctive facial features
- Karyotype notation: 46, XX/XY, del(5p)

## Duplications

A **duplication** occurs when a chromosomal segment is copied, resulting in extra genetic material.

### Effects
- Generally **less harmful** than deletions (extra genes vs. missing genes)
- Can lead to **gene redundancy** → evolutionary raw material for new gene functions
- May cause problems through **gene dosage effects**

### Evolutionary Importance
- The **globin gene family** (α-globin, β-globin, myoglobin) evolved through ancient gene duplications
- Duplicated genes can diverge over time through mutation:
  - One copy maintains the original function
  - The other copy can evolve a **new function** (neofunctionalization)
  - Or both copies may **specialize** (subfunctionalization)
  - Or the extra copy may accumulate mutations and become a **pseudogene**`
    },
    {
      id: 'chr5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Pseudodominance occurs when:',
            options: [
              'A deletion on one homolog unmasks a recessive allele on the other homolog',
              'A dominant allele is duplicated',
              'Two recessive alleles are present',
              'A translocation creates a new dominant allele'
            ],
            correctAnswer: 0,
            explanation: 'Pseudodominance happens when a deletion removes the dominant allele from one homolog, allowing the recessive allele on the other homolog to be expressed. The individual appears to have a dominant trait but actually has only one (recessive) allele.'
          },
          {
            question: 'Gene duplications are evolutionarily important because:',
            options: [
              'Duplicated genes can diverge and acquire new functions over time',
              'They always cause harmful dosage effects',
              'They reduce genetic variation',
              'They prevent crossing over'
            ],
            correctAnswer: 0,
            explanation: 'Gene duplication creates redundant copies. One copy can maintain the original function while the other is free to accumulate mutations and potentially develop new functions (neofunctionalization) — a major source of evolutionary novelty.'
          }
        ]
      }
    },
    {
      id: 'chr5-invtrans',
      type: 'text' as const,
      content: `## Inversions

An **inversion** occurs when a chromosome segment breaks at two points, flips 180°, and reinserts.

### Types
- **Paracentric inversion**: Does NOT include the centromere
- **Pericentric inversion**: INCLUDES the centromere

### Effects
- The organism may be **phenotypically normal** (all genes are present, just rearranged)
- Problems arise during **meiosis**: crossing over within an inversion loop produces abnormal gametes
  - Paracentric: produces acentric fragments and dicentric chromosomes
  - Pericentric: produces unbalanced gametes (deletions/duplications)
- Inversions can act as **crossover suppressors**, keeping linked allele combinations intact

## Translocations

A **translocation** is the transfer of a chromosomal segment to a non-homologous chromosome.

### Types
- **Reciprocal translocation**: Segments are exchanged between two non-homologous chromosomes
- **Robertsonian translocation**: Two acrocentric chromosomes fuse at their centromeres, reducing chromosome number

### Human Example: Philadelphia Chromosome
- **Reciprocal translocation t(9;22)**
- The ABL proto-oncogene (chromosome 9) fuses with the BCR gene (chromosome 22)
- Creates the **BCR-ABL fusion gene** → constitutively active tyrosine kinase
- Causes **chronic myelogenous leukemia (CML)**
- Targeted by the drug **imatinib (Gleevec)**

### Robertsonian Translocation & Down Syndrome
- ~4% of Down syndrome cases result from a **Robertsonian translocation** involving chromosome 21
- Most commonly **t(14;21)**: chromosome 21 fuses to chromosome 14
- The individual has 45 chromosomes but effectively three copies of chromosome 21 genes
- Unlike trisomy 21, translocation Down syndrome is **not related to maternal age** and may recur in families`
    },
    {
      id: 'chr5-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The Philadelphia chromosome results from a reciprocal translocation between chromosomes ___ and ___',
            options: ['9 and 22', '14 and 21', '8 and 14', '11 and 22']
          },
          {
            label: 'An inversion that includes the centromere is called a ___ inversion',
            options: ['pericentric', 'paracentric', 'reciprocal', 'Robertsonian']
          },
          {
            label: 'Cri-du-chat syndrome is caused by a ___ on chromosome 5',
            options: ['deletion', 'duplication', 'inversion', 'translocation']
          },
          {
            label: 'The evolution of the globin gene family is best explained by ___',
            options: ['gene duplication and divergence', 'chromosomal deletion', 'polyploidy', 'nondisjunction']
          }
        ],
        correctAnswers: ['9 and 22', 'pericentric', 'deletion', 'gene duplication and divergence'],
        hint1: 'The BCR-ABL fusion gene causes CML.',
        hint2: '"Peri-" means around, "para-" means beside.',
        hint3: 'This syndrome involves loss of genetic material from the short arm.',
        explanation: 'Philadelphia chromosome = t(9;22) creating BCR-ABL. Pericentric inversions include the centromere. Cri-du-chat = del(5p). The globin gene family evolved through duplication followed by divergence of duplicated copies.'
      }
    },
    {
      id: 'chr5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A carrier of a Robertsonian translocation t(14;21) has ___ chromosomes but is phenotypically normal.',
            options: [
              '45',
              '46',
              '47',
              '44'
            ],
            correctAnswer: 0,
            explanation: 'In a Robertsonian translocation, two acrocentric chromosomes (14 and 21) fuse into one. The carrier has the normal amount of genetic material but packaged in 45 chromosomes instead of 46. They are phenotypically normal but at risk of producing offspring with translocation Down syndrome.'
          },
          {
            question: 'Why might inversions be considered "crossover suppressors"?',
            options: [
              'Recombinant gametes from crossovers within the inversion are usually inviable, effectively preserving the original allele combination',
              'Inversions physically prevent crossing over from occurring',
              'Inversions eliminate the synaptonemal complex',
              'Inversions convert crossing over into gene conversion'
            ],
            correctAnswer: 0,
            explanation: 'Crossing over CAN occur within inversions, but the resulting recombinant chromosomes are usually unbalanced (containing deletions and duplications) and produce inviable gametes. This effectively suppresses recombination, keeping allele combinations together.'
          }
        ]
      }
    }
  ]
};
