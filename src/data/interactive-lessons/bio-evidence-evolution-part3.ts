export const bioEvidencePart3Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'bio-evidence-evolution-p3-s1-intro',
      type: 'text' as const,
      content: `
# 🦴 Evidence of Evolution

**Part 3 of 7 — Molecular Evidence: DNA and Protein Sequences**

---

| Section |
|---------|
| Why sequences record ancestry |
| DNA differences versus protein differences |
| Worked example: counting differences and ranking relatedness |
| The molecular clock |
| When molecules and anatomy disagree |

> 🔑 **Key Concept:** Every organism carries a record of its ancestry in its DNA. Two species inherited their genes from a common ancestor, then accumulated mutations separately. The **fewer differences** in their DNA or protein sequences, the **more recently** they shared that ancestor.

### Why sequences record ancestry

When one ancestral population splits into two lineages, each lineage inherits the **same** version of every gene. From that moment, mutations arise independently in each lineage, and some spread through each population. Over time the two copies of each gene drift apart, one change at a time.

That gives a simple rule used throughout AP Biology:

| Pair of species | Sequence differences | Interpretation |
|-----------------|---------------------|----------------|
| Diverged recently | Few | Little time for separate mutations to accumulate |
| Diverged long ago | Many | Much time for separate mutations to accumulate |

The CED singles out **biochemical and genetic similarities, in particular DNA nucleotide sequences and protein (amino-acid) sequences**, as evidence for evolution and ancestry.

### Homologous genes across life

Sequence comparisons require a gene that the species being compared all have. Many genes qualify because they were inherited from very ancient ancestors:

- **Cytochrome c**, a protein of the electron transport chain, is found in eukaryotes from yeast to humans. Human and chimpanzee cytochrome c (104 amino acids) are **identical**, while the cytochrome c of more distant species differs at more positions.
- **Ribosomal RNA genes** are present in every cell on Earth, so they can compare bacteria, archaea, and eukaryotes.
- **Hox genes**, which control body layout along the head-to-tail axis, are shared by animals as different as fruit flies and mice, and their order on the chromosome matches the body regions they control.

Shared genes also carry **shared mistakes**. Humans and other apes, for example, carry a broken copy of the gene needed for the last step of vitamin C synthesis, disabled by some of the same changes. Inheriting a broken gene from a common ancestor explains this; separate origins of identical damage would not.
      `
    },
    {
      id: 'bio-evidence-evolution-p3-s2-dna-protein',
      type: 'text' as const,
      content: `
### DNA differences versus protein differences

The genetic code is **redundant**: most amino acids are specified by more than one codon. For example, GGU, GGC, GGA, and GGG all code for glycine. A mutation in the third base of a glycine codon changes the DNA but not the protein.

| Comparison | What it detects | Typical number of differences |
|------------|-----------------|-------------------------------|
| DNA sequence | Every base change, including silent ones | Higher |
| Amino-acid sequence | Only changes that alter an amino acid | Lower |

Consequences:

1. Two species can have **identical proteins but different DNA** for that protein.
2. DNA comparisons give **finer resolution** for closely related species, because silent changes accumulate even where the protein is constrained.
3. Protein comparisons are useful for **distant** relationships, because conserved proteins change slowly and do not become saturated with changes.

#### Why some genes change slowly

Changes that damage an essential protein are usually removed by natural selection, so **highly conserved** genes (ribosomal RNA, histones, cytochrome c) change slowly. Positions that do not affect function, such as many third codon positions and much noncoding DNA, change faster. Biologists choose a slow gene to compare distant groups and a fast-changing region to compare close relatives.
      `
    },
    {
      id: 'bio-evidence-evolution-p3-s3-check',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Reading the Molecular Record** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why do species that diverged recently generally share more identical DNA sequence than species that diverged long ago?',
            options: [
              'Recently diverged species have lower mutation rates in their cells',
              'Mutations in close relatives are repaired back to the ancestral form',
              'Shared habitats cause their DNA to change in the same direction',
              'Their two lineages have had less time to accumulate separate mutations'
            ],
            correctAnswer: 3,
            explanation: 'After a split, each lineage accumulates its own mutations, so less elapsed time means fewer differences. Mutation rates are not lower in close relatives, repair does not restore ancestral sequences, and environments do not direct which mutations occur.'
          },
          {
            question: 'Two species have identical protein sequences for an enzyme but differ at six positions in the DNA that codes for it. Which explanation accounts for this?',
            options: [
              'Several codons can encode the same amino acid',
              'Ribosomes correct mismatched codons during translation',
              'Base changes in DNA are not copied into the mRNA',
              'A protein folds into one shape whatever its sequence'
            ],
            correctAnswer: 0,
            explanation: 'The genetic code is redundant, so silent changes alter codons without altering the amino acid. Ribosomes do not correct codons, DNA changes are transcribed into mRNA, and amino-acid sequence does determine folding.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p3-s4-worked',
      type: 'text' as const,
      content: `
### Worked example: counting differences and ranking relatedness

The same 20-base stretch of a gene was sequenced in four species, W, X, Y, and Z, and aligned so that matching positions line up:

\`\`\`
Position   1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
W          A T G C C T A G G A  T  C  C  A  T  G  A  A  C  T
X          A T G C C T A G G A  C  C  C  G  T  G  A  A  C  T
Y          A T G C T T A G C A  T  C  C  G  T  G  A  T  C  T
Z          G T A C C A A C G A  T  T  C  G  T  C  A  A  C  A
\`\`\`

**Step 1 — Count differences for each pair, one position at a time.**

- W vs X: positions 11 and 14 differ → **2**
- W vs Y: positions 5, 9, 14, and 18 → **4**
- X vs Y: positions 5, 9, 11, and 18 → **4**
- W vs Z, X vs Z: **8** each; Y vs Z: **10**

**Step 2 — Put the counts in a difference matrix.**

| | W | X | Y | Z |
|---|---|---|---|---|
| **W** | — | 2 | 4 | 8 |
| **X** | | — | 4 | 8 |
| **Y** | | | — | 10 |

**Step 3 — Group from the smallest count outward.**

1. W and X differ least (2), so they share the **most recent** common ancestor.
2. Y differs from W and X equally (4 each), so Y branched off **before** W and X split.
3. Z differs most from every other species (8 to 10), so Z branched off **earliest**. It is the most distantly related of the four.

**Step 4 — State the conclusion with its evidence.** "W and X are most closely related because their sequences differ at only 2 of 20 positions, fewer than any other pair."

> 🔑 **AP Connection:** In a sequence-difference question, always compare pairs. Then group the closest pair first and work outward. A single small difference between two counts (for example 10 versus 11) is weak evidence on its own; real studies compare many genes.
      `
    },
    {
      id: 'bio-evidence-evolution-p3-s5-input',
      type: 'input-boxes' as const,
      content: `
**Count and Calculate** 🧮

An aligned 10-amino-acid stretch of a protein from three species (one letter per amino acid):

\`\`\`
Species 1   K G E K L V H T A Q
Species 2   K G E K I V H T S Q
Species 3   R G D K I V Q T S E
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'How many amino-acid differences are there between species 1 and species 2?',
            answer: '2',
            acceptableAnswers: ['two'],
            explanation: 'Species 1 and 2 differ only at position 5 (L vs I) and position 9 (A vs S), so 2 differences.'
          },
          {
            question: 'How many amino-acid differences are there between species 1 and species 3?',
            answer: '6',
            acceptableAnswers: ['six'],
            explanation: 'They differ at positions 1, 3, 5, 7, 9, and 10, so 6 differences; species 1 is therefore closer to species 2 than to species 3.'
          },
          {
            question: 'In a different gene, a species pair known from fossils to have split 20 million years ago differs at 8 positions. If the gene changes at a steady rate, how many millions of years ago did a pair differing at 14 positions split?',
            answer: '35',
            acceptableAnswers: ['35 million'],
            explanation: 'The rate is 8 differences per 20 million years, or 0.4 per million years, so 14 ÷ 0.4 = 35 million years.'
          }
        ],
        hint1: 'Go position by position and mark each column where the two letters are not the same.',
        hint2: 'Check positions 1, 3, 5, 7, 9, and 10 when comparing species 1 and 3.',
        hint3: 'Set up a proportion: 8 differences / 20 million years = 14 differences / t.'
      }
    },
    {
      id: 'bio-evidence-evolution-p3-s6-clock',
      type: 'text' as const,
      content: `
### The molecular clock

If a gene accumulates changes at a roughly **steady average rate**, the number of differences between two species can estimate **how long ago** they diverged. This idea is called a **molecular clock**.

#### Calibrating the clock

A clock must be set using an independent date, usually from the **fossil record**:

| Step | Example |
|------|---------|
| 1. Find a split dated by fossils | Two lineages diverged 20 million years ago (radiometric dates on the oldest fossils) |
| 2. Count differences in a gene | 8 differences |
| 3. Compute the rate | 8 ÷ 20 = 0.4 differences per million years |
| 4. Apply to an undated split | 14 differences ÷ 0.4 = **35 million years** |

#### Limits of the clock

- Rates differ **between genes**: conserved genes tick slowly, unconstrained regions tick quickly.
- Rates can differ **between lineages**, for example in species with short generation times.
- Estimates carry uncertainty, so molecular dates are best checked against fossil dates. When the two methods agree, the agreement is itself evidence: two independent clocks, one physical and one biological, telling the same time.

### When molecules and anatomy disagree

Molecular data are especially valuable when **convergent evolution** makes unrelated species look alike.

| Look-alikes | Anatomy suggests | DNA shows |
|-------------|------------------|-----------|
| Thylacine ("Tasmanian wolf") and gray wolf | Close relatives: similar skull, teeth, and body shape | Thylacine is a marsupial, far closer to kangaroos and Tasmanian devils than to wolves |
| Whales and fish | Similar streamlined bodies | Whales are mammals, closest among living groups to hippos |

In each case, the resemblance reflects similar lifestyles and selection pressures (convergence), while the thousands of differences or similarities in sequence reflect ancestry. Notice also that other anatomy agrees with the DNA: the thylacine carried its young in a pouch, and whales have mammalian bones and lungs. The strongest conclusions come when **independent lines of evidence agree**.
      `
    },
    {
      id: 'bio-evidence-evolution-p3-s7-apply',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice — Interpreting a Difference Matrix** 🎯

Number of amino-acid differences in a 150-amino-acid protein among four species:

| | P | Q | R | S |
|---|---|---|---|---|
| **P** | — | 2 | 11 | 19 |
| **Q** | | — | 10 | 18 |
| **R** | | | — | 17 |
      `,
      exercise: {
        questions: [
          {
            question: 'Based on the table, which two species most likely share the most recent common ancestor?',
            options: [
              'Species Q and R',
              'Species P and Q',
              'Species P and R',
              'Species R and S'
            ],
            correctAnswer: 1,
            explanation: 'P and Q differ at only 2 positions, the smallest count in the matrix, so they diverged most recently. Every pair involving R or S differs at 10 or more positions.'
          },
          {
            question: 'A student concludes that species R is more closely related to Q than to P, since R differs from Q at 10 positions and from P at 11. Which response best evaluates the conclusion?',
            options: [
              'R is closer to Q, since any lower count marks a more recent ancestor',
              'R is closer to P, since a larger count means a slower-changing lineage',
              'R is equally close to both, since P and Q split after R branched off',
              'R is ancestral to Q, since the two differ at only ten positions'
            ],
            correctAnswer: 2,
            explanation: 'P and Q share a common ancestor that R branched off from earlier, so R is equally related to both; the 10 versus 11 gap reflects chance mutations after P and Q split. Living species are not ancestors of one another, and difference counts do not measure lineage speed.'
          },
          {
            question: 'The extinct thylacine had a wolf-like skull and body, but its DNA is far more similar to that of kangaroos than to that of wolves. What best explains its wolf-like anatomy?',
            options: [
              'Convergent evolution as a predator',
              'Recent shared ancestry with gray wolves',
              'Hybridization with early wild dog species',
              'Errors in sequencing a single specimen'
            ],
            correctAnswer: 0,
            explanation: 'A predatory lifestyle selected for similar skull and body shapes in two unrelated lineages, which is convergent evolution. Marsupials and placental dogs cannot hybridize, and the marsupial placement is supported by many genes and by the thylacine pouch, not one sample.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p3-s8-summary',
      type: 'text' as const,
      content: `
### Part 3 Summary

| Concept | Key detail |
|---------|-----------|
| Core rule | Fewer sequence differences = more recent common ancestor |
| DNA vs protein | DNA shows silent changes too, so DNA differences ≥ protein differences |
| Conserved genes | Slow-changing genes (rRNA, cytochrome c) compare distant groups |
| Difference matrix | Group the closest pair first, then work outward |
| Molecular clock | Calibrate a rate with a fossil-dated split; differences ÷ rate = time |
| Convergence check | DNA reveals ancestry when similar lifestyles produce look-alike anatomy |

**Up next → Part 4: Common Ancestry Across All Life**
      `
    }
  ]
};
