export const bioMeiosisPart3Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio3-intro-p3',
      type: 'text' as const,
      content: `
## Meiosis II

**Part 3 of 7 — Meiosis II**

At the end of meiosis I there are two haploid cells, and every chromosome in them still consists of two sister chromatids. Meiosis II finishes the job: it **separates the sister chromatids**, producing four cells whose chromosomes are single, unreplicated chromatids.

### No S phase in between

The single most tested fact about meiosis II is what happens **before** it: nothing is replicated. The brief pause between the two divisions (sometimes called interkinesis) has **no S phase**. If the DNA were copied again, meiosis would not reduce the DNA content to 1c.

### The stages of meiosis II

| Stage | What happens |
|---|---|
| Prophase II | Chromosomes (still two chromatids each) condense again; a new spindle forms in each haploid cell. |
| Metaphase II | Chromosomes line up **singly** at the metaphase plate; kinetochores of the two sister chromatids face opposite poles. |
| Anaphase II | Cohesion at the centromeres is released and **sister chromatids separate**, moving to opposite poles as individual chromosomes. |
| Telophase II and cytokinesis | Nuclei form and the cytoplasm divides, giving **four haploid cells** in total. |

Because sister chromatids separate, meiosis II is called the **equational division**: the chromosome number per cell stays at n (each daughter has as many chromosomes as the cell that divided), while the DNA per cell drops from 2c to 1c.

> **Why the sisters are not identical:** If crossing over occurred in prophase I, the two sister chromatids of a chromosome now carry different alleles in the exchanged region. Meiosis II therefore separates chromatids that are **not** perfect copies, which is one reason all four products of meiosis differ.
      `
    },
    {
      id: 'meio3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Meiosis II Basics
      `,
      exercise: {
        questions: [
          {
            question: 'Meiosis II is most similar to mitosis because in both processes:',
            options: [
              'sister chromatids separate and move to opposite poles',
              'homologous chromosomes pair up and exchange segments',
              'the chromosome number is reduced from diploid to haploid',
              'DNA is replicated just before the division begins'
            ],
            correctAnswer: 0,
            explanation: 'Like mitosis, meiosis II separates sister chromatids at anaphase. Homolog pairing and crossing over happen only in meiosis I, the reduction to haploid happens in meiosis I, and no DNA replication precedes meiosis II.'
          },
          {
            question: 'A cell has just completed meiosis I. Before meiosis II begins, the cell:',
            options: [
              'replicates its DNA so each chromosome again has two chromatids',
              'pairs its homologs once more to allow a second round of crossing over',
              'separates its sister chromatids so that each cell becomes haploid',
              'proceeds into prophase II without copying its DNA'
            ],
            correctAnswer: 3,
            explanation: 'There is no S phase between meiosis I and meiosis II. Each chromosome still consists of two sister chromatids from the original replication, so the cell enters meiosis II without copying its DNA. The cell is already haploid, and sister chromatids separate during anaphase II, not before it.'
          }
        ]
      }
    },
    {
      id: 'meio3-table',
      type: 'text' as const,
      content: `
### The Full Counting Table

Here is a human germ cell ($2n = 46$) from G$_1$ to the end of meiosis. Values are **per cell**. Recall the rule from Part 1: count centromeres to count chromosomes.

| Stage | Chromosomes | Chromatids per chromosome | DNA content | Ploidy |
|---|---|---|---|---|
| G$_1$ (before S) | 46 | 1 | 2c | 2n |
| Prophase I / metaphase I | 46 (23 bivalents) | 2 | 4c | 2n |
| End of meiosis I (each of 2 cells) | 23 | 2 | 2c | n |
| Metaphase II | 23 | 2 | 2c | n |
| Anaphase II | 46 (moving apart, 23 to each pole) | 1 | 2c | n + n splitting |
| End of meiosis II (each of 4 cells) | 23 | 1 | 1c | n |

**Reading the table:**

- The **chromosome number** halves only once, in meiosis I (46 → 23).
- The **DNA content** halves twice (4c → 2c → 1c), once in each division.
- In anaphase II the chromosome count briefly doubles to 46 because each separated chromatid now has its own centromere and counts as a chromosome. It drops back to 23 per cell after cytokinesis.

> **Trap watch:** "How many chromosomes are in a cell at metaphase II?" The answer is **n** (23 in humans), not 2n. The cell has 46 chromatids, which is what tempts students to answer 46.
      `
    },
    {
      id: 'meio3-input',
      type: 'input-boxes' as const,
      content: `
**Fill In the Table** 🧮

A fruit fly has $2n = 8$, with 2c DNA in G$_1$. Enter the value **per cell**.

**1)** Chromosomes at metaphase II
**2)** Chromatids at metaphase II
**3)** Chromosomes in each cell at the end of meiosis II
**4)** DNA content of each cell at the end of meiosis II (as a multiple of c)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['4', '8', '4', '1c'],
        hint1: 'Metaphase II happens in a haploid cell: n = 4 chromosomes.',
        hint2: 'At metaphase II each chromosome still has two sister chromatids.',
        hint3: 'Meiosis II keeps n the same but halves the DNA again: 2c → 1c.',
        explanation: '1) n = 4 chromosomes. 2) 4 × 2 = 8 chromatids. 3) Each of the four products has 4 single-chromatid chromosomes. 4) DNA content falls from 2c to 1c.'
      }
    },
    {
      id: 'meio3-compare',
      type: 'text' as const,
      content: `
### Meiosis vs. Mitosis: The Comparison the CED Asks For

The CED states that mitosis and meiosis are **similar in the way chromosomes segregate** (spindles pull chromosomes or chromatids to opposite poles) but **differ in the number of cells produced and the genetic content of the daughter cells**. The table puts the differences side by side. (The stages of mitosis themselves are taught in the Cell Cycle and Mitosis topic.)

| Feature | Mitosis | Meiosis |
|---|---|---|
| DNA replications | One | One |
| Divisions | One | Two |
| Synapsis of homologs | No | Yes, prophase I |
| Crossing over | No | Yes, prophase I |
| What lines up at metaphase | Single chromosomes | Pairs (meiosis I); single chromosomes (meiosis II) |
| What separates at anaphase | Sister chromatids | Homologs (I); sister chromatids (II) |
| Number of daughter cells | 2 | 4 |
| Ploidy of daughter cells | Same as parent (2n → 2n) | Half of parent (2n → n) |
| Genetic content of daughters | Identical to parent and each other | Different from parent and each other |
| Role in animals | Growth, repair, asexual reproduction | Making gametes |

### Telling metaphase II from mitotic metaphase

Both show chromosomes lined up singly. The difference is the **count**. In an organism with $2n = 8$:

- a cell with **8** chromosomes lined up singly is in **mitotic metaphase**;
- a cell with **4** chromosomes lined up singly is in **metaphase II**;
- a cell with **4 pairs** lined up is in **metaphase I**.

If $n$ is odd, the clue is even easier: a cell with an odd number of chromosomes lined up must be haploid, so it is in meiosis II.

> **AP Connection:** An FRQ asking you to "describe a difference between mitosis and meiosis" earns the point only for a specific, accurate contrast, such as "meiosis produces four haploid cells that differ genetically, while mitosis produces two diploid cells genetically identical to the parent." Vague answers ("meiosis is for sex cells") rarely earn full credit.
      `
    },
    {
      id: 'meio3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Comparing the Divisions
      `,
      exercise: {
        questions: [
          {
            question: 'In an organism with 2n = 8, one cell shows 4 chromosomes lined up singly at the plate and a second cell shows 8 chromosomes lined up singly. Which stages are shown?',
            options: [
              'First cell in metaphase I; second cell in metaphase II',
              'First cell in metaphase II; second cell in mitotic metaphase',
              'First cell in mitotic metaphase; second cell in metaphase I',
              'First cell in metaphase II; second cell in metaphase I'
            ],
            correctAnswer: 1,
            explanation: 'Single chromosomes at the plate occur in metaphase II and in mitotic metaphase. Four chromosomes is the haploid number, so the first cell is in metaphase II; eight is the diploid number, so the second is in mitosis. Metaphase I would show pairs, not single chromosomes.'
          },
          {
            question: 'A cell with 2n = 8 completes meiosis II. How many cells form, and how many chromosomes does each contain?',
            options: [
              '2 cells with 8 chromosomes each',
              '4 cells with 4 chromosomes each',
              '4 cells with 8 chromosomes each',
              '2 cells with 4 chromosomes each'
            ],
            correctAnswer: 1,
            explanation: 'Meiosis produces four haploid cells. With 2n = 8, each cell receives n = 4 chromosomes. Two cells with 4 chromosomes each describes the result after meiosis I only.'
          },
          {
            question: 'Which statement about the daughter cells of mitosis and meiosis is accurate?',
            options: [
              'Mitosis yields 2 cells identical to the parent; meiosis yields 4 that differ',
              'Mitosis yields 2 cells that differ; meiosis yields 4 identical to the parent',
              'Both yield cells identical to the parent, but meiosis makes twice as many',
              'Mitosis yields 4 haploid cells; meiosis yields 2 diploid cells'
            ],
            correctAnswer: 0,
            explanation: 'Mitosis produces two diploid daughters genetically identical to the parent cell. Meiosis produces four haploid cells that differ from the parent and from each other because of crossing over and independent assortment. The remaining options reverse the cell numbers, ploidy, or genetic outcomes.'
          }
        ]
      }
    }
  ]
}
