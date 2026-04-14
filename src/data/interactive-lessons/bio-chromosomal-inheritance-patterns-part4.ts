export const bioChromosomalInheritancePatternsPart4Data = {
  topicSlug: 'chromosomal-inheritance-patterns',
  sections: [
    {
      id: 'chr4-intro',
      type: 'text' as const,
      content: `# Chromosomal Mutations — Changes in Chromosome Number

**Chromosomal mutations** involve changes in the number or structure of chromosomes. These large-scale alterations can have dramatic effects on phenotype and are a significant source of genetic disorders.

## Nondisjunction

**Nondisjunction** is the failure of chromosomes (or chromatids) to separate properly during cell division.

### When It Occurs

| Stage | What fails to separate | Result |
|-------|----------------------|--------|
| **Meiosis I** | Homologous chromosomes | Both members of a pair go to one pole → all 4 gametes are abnormal |
| **Meiosis II** | Sister chromatids | Only 2 of 4 gametes are abnormal |
| **Mitosis** | Sister chromatids | Mosaic individual (some cells normal, some abnormal) |

### Consequences

After fertilization with a normal gamete:
- Gamete with **extra chromosome** → **trisomy** (2n + 1)
- Gamete with **missing chromosome** → **monosomy** (2n − 1)

> ⚠️ Most aneuploid embryos are **spontaneously aborted**. It is estimated that ~25% of all conceptions involve chromosomal abnormalities.`
    },
    {
      id: 'chr4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Nondisjunction during meiosis I differs from nondisjunction during meiosis II in that:',
            options: [
              'Meiosis I nondisjunction produces 4 abnormal gametes; meiosis II produces 2 abnormal and 2 normal',
              'Meiosis I nondisjunction affects only autosomes; meiosis II affects sex chromosomes',
              'Meiosis I nondisjunction is not heritable',
              'There is no difference in outcome'
            ],
            correctAnswer: 0,
            explanation: 'In meiosis I nondisjunction, homologs fail to separate, so all 4 resulting gametes are abnormal (2 have an extra chromosome, 2 are missing one). In meiosis II, sister chromatids fail to separate in one cell, producing 2 normal and 2 abnormal gametes.'
          },
          {
            question: 'A cell with 2n + 1 chromosomes is described as:',
            options: [
              'Trisomic',
              'Monosomic',
              'Triploid',
              'Tetraploid'
            ],
            correctAnswer: 0,
            explanation: 'Trisomy (2n + 1) means there is one extra chromosome — three copies of one particular chromosome instead of the normal two. This is a type of aneuploidy.'
          }
        ]
      }
    },
    {
      id: 'chr4-disorders',
      type: 'text' as const,
      content: `## Aneuploid Conditions in Humans

### Autosomal Aneuploidy

| Condition | Karyotype | Features |
|-----------|-----------|----------|
| **Down syndrome (Trisomy 21)** | 47, XX/XY, +21 | Intellectual disability, characteristic facial features, heart defects; incidence increases with maternal age |
| **Edwards syndrome (Trisomy 18)** | 47, XX/XY, +18 | Severe intellectual disability, organ defects; most die within first year |
| **Patau syndrome (Trisomy 13)** | 47, XX/XY, +13 | Severe defects; most die within first month |

> 💡 **Why chromosome 21?** Chromosome 21 is the smallest autosome with the fewest genes (~200), which is why trisomy 21 is the most survivable autosomal trisomy.

### Sex Chromosome Aneuploidy

| Condition | Karyotype | Phenotype | Features |
|-----------|-----------|-----------|----------|
| **Turner syndrome** | 45, X (monosomy X) | Female | Short stature, infertility, webbed neck; only viable human monosomy |
| **Klinefelter syndrome** | 47, XXY | Male | Tall, long limbs, reduced fertility, may have breast development |
| **Triple X** | 47, XXX | Female | Usually phenotypically normal; may have learning difficulties |
| **XYY syndrome** | 47, XYY | Male | Tall stature; usually phenotypically normal |

### Why Sex Chromosome Aneuploidies Are More Survivable

- **X-inactivation** (Lyon hypothesis): In any cell with more than one X, extra X chromosomes are inactivated as **Barr bodies**
- The Y chromosome carries few essential genes
- Therefore, sex chromosome aneuploidies cause less gene dosage imbalance`
    },
    {
      id: 'chr4-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Down syndrome results from trisomy of chromosome ___',
            options: ['21', '18', '13', 'X']
          },
          {
            label: 'Turner syndrome (45, X) is the only survivable human ___',
            options: ['monosomy', 'trisomy', 'triploidy', 'translocation']
          },
          {
            label: 'Extra X chromosomes are inactivated as ___ bodies',
            options: ['Barr', 'polar', 'Golgi', 'Nissl']
          },
          {
            label: 'Klinefelter syndrome has the karyotype ___',
            options: ['47, XXY', '47, XYY', '45, X', '47, XXX']
          }
        ],
        correctAnswers: ['21', 'monosomy', 'Barr', '47, XXY'],
        hint1: 'This is the smallest human autosome.',
        hint2: 'Having only one copy of a chromosome is called...',
        hint3: 'Named after Murray Barr, who discovered inactivated X chromosomes.',
        explanation: 'Down syndrome = trisomy 21. Turner syndrome (45, X) is the only viable monosomy. Extra X chromosomes form Barr bodies via X-inactivation. Klinefelter syndrome = 47, XXY (phenotypically male with an extra X).'
      }
    },
    {
      id: 'chr4-polyploidy',
      type: 'text' as const,
      content: `## Polyploidy

**Polyploidy** involves having more than two complete sets of chromosomes.

| Term | Chromosome sets | Notation |
|------|----------------|----------|
| **Triploid** | 3n | 3 sets |
| **Tetraploid** | 4n | 4 sets |
| **Hexaploid** | 6n | 6 sets |

### Polyploidy in Nature

- **Rare in animals** — usually lethal (disrupts sex determination and development)
- **Common in plants** — many crop species are polyploid:
  - Wheat (*Triticum aestivum*): **hexaploid (6n = 42)**
  - Potato (*Solanum tuberosum*): **tetraploid (4n = 48)**
  - Banana: **triploid (3n)** — seedless!
  - Strawberry: **octoploid (8n = 56)**

### Types of Polyploidy

- **Autopolyploidy**: Extra chromosome sets from the **same species** (e.g., failure of cell division)
- **Allopolyploidy**: Chromosome sets from **two different species** after hybridization followed by chromosome doubling
  - This is a mechanism of **instant speciation** — the allopolyploid is reproductively isolated from both parent species

> 🌾 Allopolyploidy has been critically important in the evolution of crop plants and is a major mechanism of speciation in plants.`
    },
    {
      id: 'chr4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A new plant species arises when two different species hybridize and the hybrid undergoes chromosome doubling. This is an example of:',
            options: [
              'Allopolyploidy',
              'Autopolyploidy',
              'Aneuploidy',
              'Nondisjunction'
            ],
            correctAnswer: 0,
            explanation: 'Allopolyploidy occurs when two different species hybridize and the resulting hybrid undergoes chromosome doubling. The allopolyploid has complete chromosome sets from both parent species and is reproductively isolated, making it a new species.'
          },
          {
            question: 'Which of the following is the best explanation for why sex chromosome aneuploidies are generally less severe than autosomal aneuploidies?',
            options: [
              'X-inactivation compensates for extra X chromosomes, and the Y carries few essential genes',
              'Sex chromosomes contain no essential genes',
              'Sex chromosome aneuploidies never cause phenotypic effects',
              'The immune system compensates for sex chromosome imbalances'
            ],
            correctAnswer: 0,
            explanation: 'X-inactivation silences extra X chromosomes (forming Barr bodies), minimizing gene dosage problems. The Y chromosome has relatively few genes. Together, these factors make sex chromosome aneuploidies more survivable than autosomal trisomies or monosomies.'
          }
        ]
      }
    }
  ]
};
