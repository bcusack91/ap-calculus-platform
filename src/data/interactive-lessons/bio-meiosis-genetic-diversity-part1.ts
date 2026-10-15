export const bioMeiosisPart1Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio1-intro-p1',
      type: 'text' as const,
      content: `
## Meiosis Overview

**Part 1 of 7 — Meiosis Overview**

Every sexually reproducing organism faces the same arithmetic problem. A human body cell carries 46 chromosomes. If a sperm and an egg each carried 46, the zygote would have 92, its children 184, and the number would double every generation. **Meiosis** solves the problem: it is a special pair of cell divisions that makes **gametes** (sperm and eggs) carrying exactly **half** the chromosome number, so that **fertilization** restores the full number.

### The sexual life cycle

A sexual life cycle alternates between two events:

1. **Meiosis** halves the chromosome number, turning a diploid cell into haploid gametes.
2. **Fertilization** fuses two haploid gametes into a diploid **zygote**.

The zygote then grows into a multicellular organism by **mitosis**, which copies the full chromosome set into every new body cell. Only a small population of **germ cells** in the gonads (ovaries and testes in animals) ever undergoes meiosis. All other cells are **somatic cells** (skin, liver, muscle, bone) and divide, when they divide at all, by mitosis.

| Cell type | Where found | Division it uses | Chromosome sets |
|---|---|---|---|
| Somatic cell | Almost all body tissues | Mitosis | Two (diploid) |
| Germ cell | Ovaries and testes | Meiosis (to make gametes) | Two (diploid) |
| Gamete | Sperm or egg | Does not divide; fuses at fertilization | One (haploid) |
| Zygote | Fertilized egg | Mitosis (to build the body) | Two (diploid) |
      `
    },
    {
      id: 'meio1-ploidy',
      type: 'text' as const,
      content: `
### Diploid, haploid, and the letter *n*

Biologists use **n** for the number of chromosomes in **one complete set**, the **haploid number**.

- A **diploid** cell has two complete sets, written **2n**. One set came from the mother and one from the father.
- A **haploid** cell has one complete set, written **n**.

In humans, $n = 23$ and $2n = 46$. A human skin cell is diploid (46 chromosomes); a human sperm or egg is haploid (23 chromosomes).

| Organism | Diploid number (2n) | Haploid number (n) |
|---|---|---|
| Fruit fly (*Drosophila melanogaster*) | 8 | 4 |
| Garden pea | 14 | 7 |
| Corn | 20 | 10 |
| Human | 46 | 23 |
| Dog | 78 | 39 |

Two points students often miss:

- **Chromosome number says nothing about complexity.** A dog has more chromosomes than a human.
- **n counts sets, not pairs of anything inside a gamete.** A haploid cell has *no* pairs at all: it holds one chromosome of each type. "n = 23" for a sperm means 23 different chromosomes, one of each kind.
      `
    },
    {
      id: 'meio1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Diploid and Haploid
      `,
      exercise: {
        questions: [
          {
            question: 'A human skin cell and a human egg cell are compared under a microscope after staining. Which statement about their chromosomes is accurate?',
            options: [
              'The skin cell has 46 in 23 pairs; the egg has 23, one of each type',
              'The skin cell has 46 in 23 pairs; the egg has 46, half of them inactive',
              'The skin cell has 23, one of each type; the egg has 46 in 23 pairs',
              'The skin cell has 46 in 23 pairs; the egg has 23 pairs of half-length ones'
            ],
            correctAnswer: 0,
            explanation: 'Skin cells are somatic and diploid, with 46 chromosomes in 23 homologous pairs. The egg is a haploid gamete with 23 chromosomes, one of each type and no pairs. Eggs do not carry extra inactive chromosomes or shortened pairs.'
          },
          {
            question: 'Why must gametes be haploid in a sexual life cycle?',
            options: [
              'So that fertilization restores the diploid number instead of doubling it',
              'So that each gamete carries a full diploid set to hand on to the zygote',
              'So that the zygote receives only the dominant allele of every gene',
              'So that gametes can divide by mitosis faster than diploid body cells'
            ],
            correctAnswer: 0,
            explanation: 'Fusing two haploid (n) gametes gives a diploid (2n) zygote, so the chromosome number stays constant from one generation to the next. If gametes were diploid, every generation would double the number. Haploidy has nothing to do with dominance, and gametes do not divide.'
          }
        ]
      }
    },
    {
      id: 'meio1-homologs',
      type: 'text' as const,
      content: `
### Homologous chromosomes vs. sister chromatids

These two terms are the foundation of everything in meiosis, and AP questions test the difference constantly.

**Homologous chromosomes** (homologs) are the two copies of the *same type* of chromosome in a diploid cell: one inherited from the mother (maternal) and one from the father (paternal). Homologs:

- are the same length, with the centromere in the same position;
- carry the **same genes in the same order** (the same loci);
- may carry **different alleles** of those genes. Your maternal chromosome 9 might carry the A allele of the ABO gene while your paternal chromosome 9 carries the O allele.

**Sister chromatids** are the two identical copies of **one** chromosome made during DNA replication in S phase. They are joined at the **centromere** and, before any crossing over, carry **identical alleles**.

| Feature | Homologous chromosomes | Sister chromatids |
|---|---|---|
| Origin | One from each parent | Copies made by DNA replication |
| Genes | Same genes, same order | Same genes, same order |
| Alleles | May differ | Identical (unless crossing over occurs) |
| Physically joined? | No, except when paired in prophase I | Yes, at the centromere |
| Separated in | Anaphase I of meiosis | Anaphase II of meiosis (and anaphase of mitosis) |

**Counting rule.** Count **centromeres** to count chromosomes. A replicated chromosome (two sister chromatids on one centromere) is still **one chromosome**. So a human cell right after S phase has 46 chromosomes but 92 chromatids.

> **AP Connection:** The sex chromosomes are a special case. In a human male, the X and Y pair and segregate during meiosis I even though they carry mostly different genes. Every other pair (the 22 autosome pairs, plus XX in females) is a true homologous pair.
      `
    },
    {
      id: 'meio1-counts',
      type: 'input-boxes' as const,
      content: `
**Count the Chromosomes** 🧮

A dog has a diploid number of $2n = 78$. Enter each value.

**1)** The haploid number, $n$
**2)** Chromosomes in a dog sperm cell
**3)** Homologous pairs in a dog liver cell
**4)** Chromosomes in a dog zygote
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['39', '39', '39', '78'],
        hint1: 'The haploid number is half the diploid number: 78 ÷ 2.',
        hint2: 'A sperm is a gamete, so it is haploid. A liver cell is diploid, and a diploid cell has n pairs.',
        hint3: 'A zygote forms when two haploid gametes fuse: n + n = 2n.',
        explanation: '1) n = 39. 2) A sperm is haploid, so 39. 3) A diploid liver cell has 39 homologous pairs (78 chromosomes). 4) Sperm (39) + egg (39) = 78 in the zygote.'
      }
    },
    {
      id: 'meio1-roadmap',
      type: 'text' as const,
      content: `
### The big picture: one replication, two divisions

Meiosis starts with a diploid germ cell that has gone through **one round of DNA replication** (S phase), exactly as a cell does before mitosis. What follows is different: **two divisions in a row with no DNA replication between them.**

| Stage | What separates | Cells | Ploidy of each cell |
|---|---|---|---|
| Start (after S phase) | Nothing yet | 1 | Diploid (2n), each chromosome duplicated |
| **Meiosis I** | **Homologous chromosomes** | 2 | Haploid (n), each chromosome still duplicated |
| **Meiosis II** | **Sister chromatids** | 4 | Haploid (n), each chromosome unduplicated |

- **Meiosis I is the reduction division.** Homologs separate, so each daughter cell receives one chromosome of each type: the chromosome number drops from 2n to n.
- **Meiosis II looks like mitosis** in a haploid cell. Sister chromatids separate, so the chromosome number stays at n while the DNA per cell halves again.

The four products are **haploid** and **genetically distinct** from the parent cell and from one another. That distinctness has three sources you will study in Parts 4 and 5: crossing over, the independent orientation of homologous pairs, and, after meiosis, random fertilization.

> **AP Connection:** The CED's core statement for this topic is that meiosis, a reduction division, followed by fertilization ensures genetic diversity in sexually reproducing organisms, and that meiosis gives each gamete **one complete set** of chromosomes. An FRQ answer that says "a gamete gets half the chromosomes" is weaker than "a gamete gets one chromosome from each homologous pair."
      `
    },
    {
      id: 'meio1-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — The Big Picture
      `,
      exercise: {
        questions: [
          {
            question: 'Which pair of structures are homologous chromosomes?',
            options: [
              'The maternal and paternal copies of chromosome 7 in a liver cell',
              'The two sister chromatids of one chromosome 7 after S phase',
              'Chromosome 7 and chromosome 8, both inherited from the mother',
              'The two complementary DNA strands of a single chromosome 7'
            ],
            correctAnswer: 0,
            explanation: 'Homologs are the two copies of the same chromosome type, one from each parent, carrying the same genes but possibly different alleles. Sister chromatids are replication copies of one chromosome, and chromosomes 7 and 8 carry different genes. The two DNA strands form a single double helix, not separate chromosomes.'
          },
          {
            question: 'How many nuclear divisions occur during meiosis, and how many times is the DNA replicated?',
            options: [
              'One division, after one round of DNA replication',
              'Two divisions, with DNA replicated before each one',
              'Two divisions, after one round of DNA replication',
              'Two divisions, after two rounds of DNA replication'
            ],
            correctAnswer: 2,
            explanation: 'Meiosis has two divisions, meiosis I and meiosis II, but the DNA is replicated only once, during the S phase before meiosis I. One replication followed by two divisions is what halves the chromosome number.'
          },
          {
            question: 'In a human, which cells carry out meiosis?',
            options: [
              'Germ cells in the ovaries and testes',
              'Every body cell that replaces worn-out tissue',
              'The zygote, just after the sperm and egg nuclei fuse',
              'Fast-dividing skin and bone marrow cells'
            ],
            correctAnswer: 0,
            explanation: 'Only germ cells in the gonads undergo meiosis, producing eggs and sperm. Tissue replacement, the zygote\'s early divisions, and rapidly dividing skin and marrow cells all use mitosis, which keeps cells diploid.'
          }
        ]
      }
    },
    {
      id: 'meio1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Term** 🔽

Choose the term that fits each description.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Two copies of the same chromosome type, one from each parent:',
            options: ['Sister chromatids', 'Homologous chromosomes', 'Haploid set', 'Gametes']
          },
          {
            label: 'Two identical copies of one chromosome joined at a centromere:',
            options: ['Homologous chromosomes', 'Gametes', 'Sister chromatids', 'Haploid set']
          },
          {
            label: 'One chromosome of each type, as in a sperm or egg:',
            options: ['Haploid set', 'Sister chromatids', 'Homologous chromosomes', 'Gametes']
          },
          {
            label: 'The cells that fuse at fertilization to form a zygote:',
            options: ['Haploid set', 'Gametes', 'Homologous chromosomes', 'Sister chromatids']
          }
        ],
        correctAnswers: ['Homologous chromosomes', 'Sister chromatids', 'Haploid set', 'Gametes'],
        hint1: 'Homologs come from two different parents; sister chromatids come from one replication.',
        hint2: 'A haploid set has no pairs: one chromosome of every type.',
        hint3: 'Sperm and eggs are the haploid cells that fuse.',
        explanation: 'Homologous chromosomes are the maternal and paternal copies of one chromosome type. Sister chromatids are the identical replication copies joined at a centromere. A haploid set is one chromosome of each type, the content of a gamete, and gametes fuse at fertilization.'
      }
    }
  ]
}
