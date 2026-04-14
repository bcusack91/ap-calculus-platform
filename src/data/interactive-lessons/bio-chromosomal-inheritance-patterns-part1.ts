export const bioChromosomalInheritancePatternsPart1Data = {
  topicSlug: 'chromosomal-inheritance-patterns',
  sections: [
    {
      id: 'chr1-intro',
      type: 'text' as const,
      content: `# Chromosome Theory of Inheritance

The **chromosome theory of inheritance** states that genes are located on chromosomes and that the behavior of chromosomes during meiosis accounts for Mendel's laws of segregation and independent assortment.

## Key Principles

- **Genes have specific loci** (positions) on chromosomes
- Chromosomes undergo **segregation** during meiosis I → explains Mendel's Law of Segregation
- Chromosomes on **different pairs** assort independently → explains Mendel's Law of Independent Assortment
- Each chromosome carries **hundreds to thousands** of genes

## Historical Development

| Scientist | Contribution |
|-----------|-------------|
| **Walter Sutton** (1902) | Observed parallels between chromosome behavior and Mendel's factors |
| **Theodor Boveri** (1902) | Demonstrated chromosomes are required for proper development in sea urchins |
| **Thomas Hunt Morgan** (1910) | Provided first direct evidence linking a gene to a specific chromosome |

The Sutton-Boveri hypothesis proposed that chromosomes are the physical carriers of genes — a revolutionary idea that unified cytology and genetics.`
    },
    {
      id: 'chr1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The chromosome theory of inheritance states that:',
            options: [
              'Genes are located on chromosomes and chromosome behavior explains Mendelian inheritance',
              'Chromosomes are made entirely of protein',
              'All genes assort independently regardless of chromosome location',
              'Inheritance is determined by cytoplasmic factors only'
            ],
            correctAnswer: 0,
            explanation: 'The chromosome theory states that genes reside at specific loci on chromosomes, and the segregation and independent assortment of chromosomes during meiosis explain Mendel\'s laws.'
          },
          {
            question: 'Which scientists independently proposed the chromosome theory of inheritance?',
            options: [
              'Walter Sutton and Theodor Boveri',
              'Gregor Mendel and Charles Darwin',
              'Watson and Crick',
              'Thomas Morgan and Alfred Sturtevant'
            ],
            correctAnswer: 0,
            explanation: 'Walter Sutton and Theodor Boveri independently proposed in 1902 that chromosomes carry the hereditary factors described by Mendel. This became known as the Sutton-Boveri chromosome theory.'
          }
        ]
      }
    },
    {
      id: 'chr1-linkage',
      type: 'text' as const,
      content: `## Linkage Groups

A **linkage group** is a set of genes located on the same chromosome that tend to be inherited together.

### Why Linkage Matters

- Mendel's Law of Independent Assortment applies only to genes on **different chromosomes**
- Genes on the **same chromosome** do NOT assort independently — they are **linked**
- The number of linkage groups equals the **haploid chromosome number** (n)

| Organism | Haploid Number (n) | Number of Linkage Groups |
|----------|-------------------|--------------------------|
| Humans | 23 | 23 |
| *Drosophila* | 4 | 4 |
| Peas | 7 | 7 |
| Corn | 10 | 10 |

### Linked vs. Unlinked Genes

- **Unlinked genes** (on different chromosomes): produce a **1:1:1:1** ratio in test cross offspring
- **Completely linked genes**: produce only **parental types** (no recombinants)
- **Partially linked genes**: produce mostly parental types with some **recombinant types**

> 💡 Crossing over during prophase I of meiosis can separate linked genes, producing recombinant chromosomes.`
    },
    {
      id: 'chr1-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Genes on the same chromosome belong to the same ___',
            options: ['linkage group', 'allele pair', 'gene pool', 'phenotype class']
          },
          {
            label: 'The number of linkage groups equals the ___ chromosome number',
            options: ['haploid', 'diploid', 'triploid', 'tetraploid']
          },
          {
            label: 'Linked genes can be separated by ___ during prophase I',
            options: ['crossing over', 'nondisjunction', 'mutation', 'gene flow']
          }
        ],
        correctAnswers: ['linkage group', 'haploid', 'crossing over'],
        hint1: 'Think about what we call a set of genes on one chromosome.',
        hint2: 'Each unique chromosome defines one linkage group — how many unique chromosomes are in a gamete?',
        hint3: 'This process involves physical exchange of chromosome segments between homologs.',
        explanation: 'Genes on the same chromosome form a linkage group. The number of linkage groups equals n (haploid number). Crossing over during prophase I can recombine linked genes.'
      }
    },
    {
      id: 'chr1-morgan',
      type: 'text' as const,
      content: `## Morgan's Drosophila Experiments

Thomas Hunt Morgan used the fruit fly *Drosophila melanogaster* as a model organism because of its advantages:

- **Short generation time** (~2 weeks)
- **Prolific reproduction** (hundreds of offspring)
- **Only 4 pairs of chromosomes** (easy to study)
- **Many visible mutations** (eye color, wing shape, body color)

### The White-Eye Discovery (1910)

Morgan crossed a **white-eyed male** fly with a **red-eyed (wild-type) female**:

**P cross**: ♀ red-eyed × ♂ white-eyed
**F₁**: All red-eyed (red is dominant)

**F₁ × F₁ cross**:
- F₂ females: **all red-eyed**
- F₂ males: **½ red-eyed, ½ white-eyed**

### Morgan's Conclusion

The white-eye gene must be on the **X chromosome**:
- Males have only **one X** → a single recessive allele is expressed
- Females have **two X chromosomes** → need two copies of the recessive allele

This was the **first gene mapped to a specific chromosome**, directly supporting the chromosome theory of inheritance.

> 🔬 Morgan won the Nobel Prize in Physiology or Medicine in 1933 for his discoveries concerning the role of chromosomes in heredity.`
    },
    {
      id: 'chr1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In Morgan\'s experiment, F₂ white-eyed flies were:',
            options: [
              'All male',
              'All female',
              'Both male and female in equal numbers',
              'Only found in the F₃ generation'
            ],
            correctAnswer: 0,
            explanation: 'Because the white-eye allele is X-linked recessive, only males (XʷY) expressed the white-eye phenotype in the F₂ generation. F₂ females were either homozygous red (X⁺X⁺) or heterozygous carriers (X⁺Xʷ).'
          },
          {
            question: 'Why is Drosophila melanogaster an ideal organism for genetics research?',
            options: [
              'Short generation time, many offspring, few chromosomes, and visible mutations',
              'It has the largest genome of any insect',
              'It reproduces only once per year allowing careful observation',
              'It has no sex chromosomes'
            ],
            correctAnswer: 0,
            explanation: 'Drosophila has a 2-week generation time, produces hundreds of offspring, has only 4 chromosome pairs, and displays many easily observable mutations — all ideal traits for genetic studies.'
          }
        ]
      }
    }
  ]
};
