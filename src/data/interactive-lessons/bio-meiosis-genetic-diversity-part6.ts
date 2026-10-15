export const bioMeiosisPart6Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio6-intro-p6',
      type: 'text' as const,
      content: `
## Meiosis: Problem-Solving Workshop

**Part 6 of 7 — Meiosis: Problem-Solving Workshop**

AP Biology questions on meiosis rarely ask you to recite stage names. They hand you a count, a described diagram, a graph or a genotype and ask you to reason. This workshop practices the five problem types that appear most often.

### Skill 1: Counting at any stage

Use three rules and you can fill in any count:

1. **Chromosomes = centromeres.** A duplicated chromosome is one chromosome.
2. **Chromatids** = chromosomes × 2 from S phase until sister chromatids separate (anaphase II); after that, one chromatid per chromosome.
3. **DNA content (c)** doubles in S phase and halves at the end of **each** division: 2c → 4c → 2c → 1c.

**Worked example.** An organism has $2n = 12$ (2c in G$_1$). Give the counts per cell at metaphase I and at metaphase II.

- **Metaphase I:** no division has happened yet, so 12 chromosomes, arranged as 6 bivalents; 12 × 2 = 24 chromatids; DNA = 4c.
- **Metaphase II:** meiosis I has halved the number, so 6 chromosomes; each still has two chromatids, so 12 chromatids; DNA = 2c.

Notice that the metaphase II cell has 12 chromatids, the same number as the diploid chromosome count, which tempts students to answer "12 chromosomes." Always ask: how many centromeres?
      `
    },
    {
      id: 'meio6-input',
      type: 'input-boxes' as const,
      content: `
**Counting Drill** 🧮

An organism has $2n = 16$ (2c in G$_1$). Enter the value **per cell**.

**1)** Bivalents at prophase I
**2)** Chromatids at metaphase I
**3)** Chromosomes at metaphase II
**4)** Chromatids at metaphase II
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['8', '32', '8', '16'],
        hint1: 'n = 8, so there are 8 homologous pairs to form bivalents.',
        hint2: 'At metaphase I all 16 chromosomes are present, each with 2 chromatids.',
        hint3: 'At metaphase II the cell is haploid (8 chromosomes) but sister chromatids are still joined.',
        explanation: '1) 8 bivalents. 2) 16 × 2 = 32 chromatids. 3) n = 8 chromosomes at metaphase II. 4) 8 × 2 = 16 chromatids.'
      }
    },
    {
      id: 'meio6-stages',
      type: 'text' as const,
      content: `
### Skill 2: Identifying a stage from a described diagram

Here the figures are described in words, as you would describe them to yourself when reading a micrograph. Use this decision table:

| What the cell shows | Stage |
|---|---|
| Homologs paired as bivalents, chiasmata visible, nuclear envelope breaking down | Prophase I |
| **Pairs** of homologs lined up at the plate | Metaphase I |
| Duplicated chromosomes (two chromatids each) moving to the poles | Anaphase I |
| **Single** chromosomes at the plate, number = **n** | Metaphase II |
| Single chromatids moving to the poles, n at each pole | Anaphase II |
| Single chromosomes at the plate, number = **2n** | Metaphase of mitosis |

**Shortcut for odd numbers.** If n is odd (say $2n = 6$, $n = 3$), any cell with an **odd** number of chromosomes at the plate must be haploid, so it is in meiosis II.

### Skill 3: Reading a DNA-content graph

A typical graph plots **DNA content per cell** against time:

- Flat at **2c** (G$_1$), then a ramp up to **4c** (S phase).
- Flat at 4c through prophase I to anaphase I.
- A sharp drop to **2c** at the end of meiosis I (cytokinesis).
- **No ramp** between the divisions (no S phase).
- A second sharp drop to **1c** at the end of meiosis II.

A mitosis graph, by contrast, goes 2c → 4c → 2c and then ramps back up if the cell divides again. **Two drops with no rise in between** is the signature of meiosis.
      `
    },
    {
      id: 'meio6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Stages and Graphs
      `,
      exercise: {
        questions: [
          {
            question: 'In an organism with 2n = 6, a cell shows three chromosomes lined up singly at the metaphase plate, each made of two chromatids. What stage is it in?',
            options: [
              'Metaphase I',
              'Metaphase II',
              'Mitotic metaphase',
              'Prophase I'
            ],
            correctAnswer: 1,
            explanation: 'Three chromosomes is the haploid number, so the cell has already completed meiosis I, and single chromosomes at the plate with two chromatids each mark metaphase II. Metaphase I would show three pairs, and mitotic metaphase would show six chromosomes.'
          },
          {
            question: 'A graph of DNA content per cell rises from 2c to 4c, falls to 2c, and then falls to 1c with no rise between the two drops. Which process does the graph show?',
            options: [
              'Two mitotic divisions back to back',
              'One mitosis, then a pause in G1',
              'Meiosis in a diploid germ cell',
              'DNA replication with no division'
            ],
            correctAnswer: 2,
            explanation: 'Meiosis has one S phase (2c to 4c) and two divisions (4c to 2c, then 2c to 1c) with no replication between them. Two rounds of mitosis would show a second rise back to 4c before the second drop, and a single mitosis ends at 2c.'
          },
          {
            question: 'A cell with 2n = 12 is in metaphase II. How many chromosomes and chromatids does it contain?',
            options: [
              '6 chromosomes, 12 chromatids',
              '12 chromosomes, 24 chromatids',
              '6 chromosomes, 6 chromatids',
              '12 chromosomes, 12 chromatids'
            ],
            correctAnswer: 0,
            explanation: 'Meiosis I halves the chromosome number, so a cell in metaphase II has n = 6 chromosomes. Sister chromatids have not yet separated, so each chromosome still has two chromatids: 12 chromatids in total.'
          }
        ]
      }
    },
    {
      id: 'meio6-gametes-errors',
      type: 'text' as const,
      content: `
### Skill 4: Gametes from a genotype

To list gametes, give each gamete **one allele of every gene**.

- **AaBb, genes on different chromosomes:** four types, AB, Ab, aB, ab, in equal proportions (independent assortment).
- **AaBbCc, all on different chromosomes:** $2^{3} = 8$ types.
- **AABb:** only two types, AB and Ab, because a homozygous gene contributes no variety. Count only heterozygous genes: $2^{(\\text{number of heterozygous genes})}$.
- **AaBb with A and B on the same homolog (linked):** mostly AB and ab (parental); Ab and aB appear only when a crossover occurs between the genes.

### Skill 5: Where errors lead (light treatment)

If chromosomes fail to separate properly (**nondisjunction**), the gametes carry the wrong number of chromosomes. The **division** in which the error happens decides how many gametes are affected:

| Error | Gametes from that meiosis |
|---|---|
| Homologs fail to separate in **meiosis I** | All 4 abnormal: 2 with an extra chromosome (n + 1), 2 missing one (n − 1) |
| Sister chromatids fail to separate in **one** cell in **meiosis II** | 2 normal (n), 1 with n + 1, 1 with n − 1 |

The resulting conditions in offspring are covered in the Chromosomal Inheritance Patterns topic.

### FRQ-style worked response

**Prompt.** *Explain how a single heterozygous parent can produce offspring with combinations of alleles that were not present on either of its own chromosomes.*

**Model answer.** During prophase I, homologous chromosomes synapse and nonsister chromatids exchange segments by crossing over. A chromatid that carried the maternal allele of one gene can then carry the paternal allele of a nearby gene, a combination found on neither original chromosome. After meiosis II, the gamete receiving this recombinant chromatid passes the new combination to the offspring.

Notice the structure: **stage → event → specific outcome → link to offspring.** Each claim is tied to a named step.
      `
    },
    {
      id: 'meio6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Gametes and Errors
      `,
      exercise: {
        questions: [
          {
            question: 'How many genetically different gametes can an individual with genotype AaBBCcDd make, if all four genes are on different chromosomes and crossing over is ignored?',
            options: [
              '4',
              '8',
              '16',
              '6'
            ],
            correctAnswer: 1,
            explanation: 'Only the heterozygous genes (A, C and D) add variety, so the count is $2^{3} = 8$. Using all four genes gives 16, which wrongly treats the homozygous BB gene as a source of different gametes.'
          },
          {
            question: 'In one meiosis, homologous chromosomes of one pair fail to separate in meiosis I, and meiosis II is normal. What chromosome numbers do the four gametes have?',
            options: [
              'Two have n + 1 and two have n − 1',
              'Two are normal; one is n + 1 and one is n − 1',
              'All four are normal because meiosis II corrects it',
              'All four gametes carry the diploid set'
            ],
            correctAnswer: 0,
            explanation: 'When both homologs go to the same cell in meiosis I, that cell and its two products carry an extra chromosome, while the other cell and its products lack one. Two normal gametes plus one extra and one missing is the pattern for an error in one cell during meiosis II.'
          }
        ]
      }
    }
  ]
}
