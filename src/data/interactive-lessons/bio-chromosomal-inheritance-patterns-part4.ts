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
              'Meiosis I nondisjunction affects only autosomes; meiosis II affects only sex chromosomes',
              'Meiosis I nondisjunction produces 2 abnormal gametes; meiosis II produces 4 abnormal ones',
              'Meiosis I nondisjunction is not heritable; only meiosis II errors reach the offspring'
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
      content: `## Why Changes in Chromosome Number Disrupt Development

The CED states that changes in chromosome number often result in **new phenotypes** and in **disorders with developmental limitations**. The reason is **gene dosage**.

### Gene dosage

A single chromosome carries hundreds to thousands of genes. A diploid cell normally has two copies of each, and development depends on gene products being made in **balanced amounts**.

| Karyotype change | Copies of each gene on that chromosome | Amount of those gene products |
|------------------|----------------------------------------|-------------------------------|
| Normal (2n) | 2 | Normal |
| Trisomy (2n + 1) | 3 | About 1.5 times normal |
| Monosomy (2n − 1) | 1 | About half of normal |

Because the change affects **every gene** on the chromosome at once, many proteins are out of balance together. That is why aneuploidy usually changes development far more than a mutation in one gene does.

### Predictable patterns

- **More genes, bigger effect.** Trisomies of large, gene-rich chromosomes are almost always lethal early in development; the few that survive to birth involve small chromosomes carrying relatively few genes.
- **Sex chromosomes are a special case.** Extra or missing sex chromosomes are often less severe, partly because the Y chromosome carries few genes.
- **Every cell is affected.** An error in meiosis produces a gamete, so the resulting zygote, and every cell that descends from it, carries the abnormal number.

### Worked Example: Tracing an aneuploid zygote

**Problem.** In a human, the two homologs of one chromosome pair fail to separate in meiosis I. One of the resulting gametes is fertilized by a normal gamete. Give the possible chromosome numbers of the zygote.

**Step 1.** Nondisjunction in meiosis I gives two gametes with 24 chromosomes (n + 1) and two with 22 (n − 1).

**Step 2.** A normal gamete carries 23 chromosomes.

**Step 3.** 24 + 23 = **47** (trisomic, 2n + 1), or 22 + 23 = **45** (monosomic, 2n − 1).

> 📝 **Scope note:** You should be able to predict and explain the effects of changes in chromosome number, but the names of specific disorders caused by them are not tested on the AP exam.`
    },
    {
      id: 'chr4-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'A zygote formed from an n + 1 gamete and a normal gamete is ___',
            options: ['trisomic', 'monosomic', 'triploid', 'haploid']
          },
          {
            label: 'A zygote formed from an n − 1 gamete and a normal gamete is ___',
            options: ['trisomic', 'monosomic', 'tetraploid', 'diploid']
          },
          {
            label: 'A human cell with 47 chromosomes has ___ extra chromosome',
            options: ['one', 'two', 'a whole set of', 'no']
          },
          {
            label: 'Aneuploidy disrupts development mainly by changing gene ___',
            options: ['dosage', 'sequence', 'order', 'dominance']
          }
        ],
        correctAnswers: ['trisomic', 'monosomic', 'one', 'dosage'],
        hint1: 'Add the chromosomes in the two gametes: (n + 1) + n and (n − 1) + n.',
        hint2: 'Humans normally have 46 chromosomes.',
        hint3: 'An extra or missing chromosome changes how many copies of every gene on it are present.',
        explanation: 'An n + 1 gamete plus a normal gamete gives 2n + 1 (trisomy), and an n − 1 gamete gives 2n − 1 (monosomy). A human cell with 47 chromosomes has one extra. Aneuploidy changes the number of copies, and so the amount of product, of every gene on the affected chromosome.'
      }
    },
    {
      id: 'chr4-polyploidy',
      type: 'text' as const,
      content: `## Polyploidy

**Polyploidy** involves having more than two complete sets of chromosomes. It can arise when an error in mitosis or meiosis leaves a whole set of chromosomes in one cell.

| Term | Chromosome sets | Notation |
|------|----------------|----------|
| **Triploid** | 3 sets | 3n |
| **Tetraploid** | 4 sets | 4n |
| **Hexaploid** | 6 sets | 6n |

### Polyploidy in Nature

- **Rare in animals**, where it is usually lethal because it disrupts development.
- **Common in plants.** Many crop plants, including wheat, potatoes and strawberries, are polyploid.
- **Triploids are usually sterile.** With three copies of each chromosome, homologs cannot pair and separate evenly in meiosis, so most gametes are unbalanced. Seedless bananas and watermelons are triploid.

### Polyploidy and Speciation

Suppose a diploid plant produces a tetraploid offspring through an error in cell division. The tetraploid can often self-fertilize and produce fertile tetraploid offspring. If it crosses with a diploid plant, however, the offspring are triploid and sterile. The tetraploid is therefore **reproductively isolated** from its parent population after a single generation, even though the two grow side by side. This is an example of **sympatric speciation** (Topic 7.10).`
    },
    {
      id: 'chr4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A tetraploid plant arises in one generation within a diploid population. It self-fertilizes successfully, but its crosses with the diploid plants produce only sterile triploid offspring. What does this show?',
            options: [
              'It is reproductively isolated, so a new species arose without geographic separation',
              'It is the same species, since it arose from plants in the same population',
              'It carries a new point mutation that makes all of its own offspring sterile',
              'It will return to the diploid number after a single round of normal meiosis'
            ],
            correctAnswer: 0,
            explanation: 'Because crosses with the diploid parents give only sterile offspring, the tetraploid cannot exchange genes with them: it is reproductively isolated, which is sympatric speciation. Arising from the same population does not prevent isolation, the sterility comes from a change in chromosome number rather than a point mutation, and meiosis in a tetraploid gives diploid gametes, not a return to the diploid state.'
          },
          {
            question: 'Why is an extra copy of a large chromosome usually more harmful to development than an extra copy of a very small one?',
            options: [
              'Small chromosomes carry no genes at all, so an extra copy has no effect',
              'More genes sit on the larger one, so more gene products are out of balance',
              'The larger chromosome is too big to pass through the nuclear pores during interphase',
              'Cells always destroy an extra small chromosome before they next divide'
            ],
            correctAnswer: 1,
            explanation: 'Aneuploidy changes the dosage of every gene on the affected chromosome, and a large chromosome usually carries more genes, so more gene products are made in the wrong amounts. Small chromosomes still carry genes, chromosomes do not pass through nuclear pores, and cells do not reliably remove an extra chromosome.'
          }
        ]
      }
    }
  ]
};
