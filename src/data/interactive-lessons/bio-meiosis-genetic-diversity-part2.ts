export const bioMeiosisPart2Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio2-intro-p2',
      type: 'text' as const,
      content: `
## Meiosis I

**Part 2 of 7 — Meiosis I**

Meiosis I is the division that makes meiosis unique. Its job is to **separate homologous chromosomes**, so that each daughter cell ends up with one chromosome of each type. Because the chromosome number drops from 2n to n, meiosis I is called the **reductional division**.

### The starting cell

Meiosis I begins with a diploid germ cell that has already completed **S phase**. Every chromosome is replicated and consists of two sister chromatids joined at a centromere.

Throughout this part we will follow a model cell with $2n = 4$: one **long** pair and one **short** pair of homologs. In each pair, one homolog is maternal and one is paternal.

### Measuring DNA with *c*

Chromosome number and DNA amount are not the same thing, so biologists track DNA separately with the letter **c**, the amount of DNA in one haploid set of unreplicated chromosomes.

- A diploid cell in G$_1$ has **2c** (two sets, unreplicated).
- After S phase it has **4c** (two sets, each chromosome duplicated), but still **2n** chromosomes.

Replication doubles the DNA without changing the chromosome count, because each duplicated chromosome still has only one centromere.
      `
    },
    {
      id: 'meio2-prophase',
      type: 'text' as const,
      content: `
### Prophase I: pairing and exchange

Prophase I is the longest and most important stage of meiosis. Several things happen:

1. **Chromosomes condense**, the nuclear envelope breaks down, and the spindle begins to form (as in any division).
2. **Synapsis.** Each chromosome finds its homolog and the two pair up tightly along their entire length, gene for gene.
3. **Bivalents form.** A synapsed pair of homologs is called a **bivalent**. Because each homolog has two chromatids, a bivalent contains **four chromatids**, which is why it is also called a **tetrad**.
4. **Crossing over.** Nonsister chromatids (one from each homolog) exchange matching segments of DNA. The points where they remain visibly connected afterward are called **chiasmata** (singular: chiasma). Part 4 covers crossing over in detail.

Synapsis is the event that sets meiosis apart: in mitosis, homologs never pair. Every later difference between meiosis I and mitosis follows from it.

| Term | Meaning | Number in a human cell in prophase I |
|---|---|---|
| Bivalent (tetrad) | One synapsed homologous pair | 23 |
| Chromatids in one bivalent | Two homologs × two sisters | 4 |
| Chiasma | Visible site of a crossover | Usually one or more per bivalent |

> **Scope note:** The AP course does not require names for the substages of prophase I. Know what happens (synapsis, bivalents, crossing over, chiasmata), not the vocabulary that divides it into steps.
      `
    },
    {
      id: 'meio2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Prophase I
      `,
      exercise: {
        questions: [
          {
            question: 'During prophase I, what happens that does NOT happen in prophase of mitosis?',
            options: [
              'Sister chromatids separate and move toward opposite poles',
              'The DNA in each chromosome is replicated for the first time',
              'Homologous chromosomes pair up gene for gene along their length',
              'The nuclear envelope breaks down and spindle fibers begin to form'
            ],
            correctAnswer: 2,
            explanation: 'Synapsis, the close pairing of homologous chromosomes, happens only in prophase I of meiosis and allows crossing over. Nuclear envelope breakdown and spindle formation occur in both mitosis and meiosis, DNA was already replicated in S phase, and sister chromatids do not separate until anaphase.'
          },
          {
            question: 'A cell from an organism with 2n = 10 is in prophase I. How many bivalents and how many chromatids are present?',
            options: [
              '10 bivalents and 20 chromatids',
              '5 bivalents and 20 chromatids',
              '5 bivalents and 10 chromatids',
              '10 bivalents and 40 chromatids'
            ],
            correctAnswer: 1,
            explanation: 'Ten chromosomes form 5 homologous pairs, so there are 5 bivalents. Each bivalent holds 4 chromatids, giving 20 chromatids in total. Counting 10 bivalents treats each chromosome as its own pair.'
          }
        ]
      }
    },
    {
      id: 'meio2-meta-ana',
      type: 'text' as const,
      content: `
### Metaphase I: pairs at the plate

Spindle microtubules from opposite poles attach to the two homologs of each bivalent: all the kinetochore fibers from one pole attach to one homolog, and those from the other pole attach to its partner. The bivalents line up **as pairs** along the metaphase plate.

Each pair's orientation is **random and independent** of every other pair. In our $2n = 4$ cell, the maternal long homolog might face the left pole while the maternal short homolog faces the right pole, or both might face the same pole. This independent orientation is the physical basis of **independent assortment** (Part 5).

### Anaphase I: homologs separate

The homologs of each pair are pulled to **opposite poles**. The chiasmata release, but **sister chromatids stay attached at their centromeres** and travel together.

This is the step that reduces the chromosome number. Each pole receives **one homolog from every pair**, which is a complete haploid set. Note that the set is a **mix**: some chromosomes at a pole are maternal and some paternal, depending on how the pairs happened to line up.

### Telophase I and cytokinesis

Chromosomes arrive at the poles, nuclear envelopes may re-form, and the cytoplasm divides. The result is **two haploid cells**. Each chromosome in them is still a duplicated chromosome with two sister chromatids.

> **Common trap:** The cells after meiosis I are already **haploid (n)**, even though each chromosome still has two chromatids. Ploidy counts chromosome *sets*, not chromatids.
      `
    },
    {
      id: 'meio2-worked',
      type: 'text' as const,
      content: `
### Worked Example: Tracking the 2n = 4 Cell Through Meiosis I

**Problem.** For the model cell ($2n = 4$, DNA content 2c in G$_1$), give the chromosome number, chromatid number, and DNA content per cell at each stage of meiosis I.

**Step 1 — G$_1$.** Four unreplicated chromosomes, one chromatid each. DNA = **2c**.

**Step 2 — After S phase.** Still four centromeres, so **4 chromosomes**, now with 2 chromatids each: **8 chromatids**. DNA doubles to **4c**.

**Step 3 — Prophase I and metaphase I.** No change in amounts. The four chromosomes are arranged as **2 bivalents**.

**Step 4 — Anaphase I.** The cell still holds 4 chromosomes and 8 chromatids (nothing has left it yet), but two chromosomes move toward each pole.

**Step 5 — After telophase I and cytokinesis.** Each of the two cells holds **2 chromosomes** (one long, one short), each with 2 chromatids: **4 chromatids**, DNA = **2c**.

| Stage (per cell) | Chromosomes | Chromatids | DNA content | Ploidy |
|---|---|---|---|---|
| G$_1$ | 4 | 4 | 2c | 2n |
| Prophase I | 4 | 8 | 4c | 2n |
| Metaphase I | 4 | 8 | 4c | 2n |
| Anaphase I | 4 | 8 | 4c | 2n (splitting) |
| End of meiosis I | 2 | 4 | 2c | n |

**Check.** The chromosome number halved (4 → 2) and the DNA content halved (4c → 2c) at the same moment, when homologs went to different cells. Each daughter has one long and one short chromosome, so it holds one complete set.

> **AP Connection:** Many exam items give "DNA content per cell" graphs or tables. A cell with 2c DNA could be a G$_1$ diploid cell **or** a haploid cell at the end of meiosis I. Use chromosome number or chromatid structure to tell them apart.
      `
    },
    {
      id: 'meio2-input',
      type: 'input-boxes' as const,
      content: `
**Track a Human Germ Cell** 🧮

A human germ cell ($2n = 46$, 2c in G$_1$) enters meiosis. Enter each value.

**1)** Bivalents in prophase I
**2)** Chromatids in the cell at metaphase I
**3)** Chromosomes in each cell after telophase I
**4)** DNA content of each cell after telophase I (write as a multiple of c, such as 3c)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['23', '92', '23', '2c'],
        hint1: 'One bivalent per homologous pair; humans have 23 pairs.',
        hint2: 'After S phase each of the 46 chromosomes has 2 chromatids.',
        hint3: 'Meiosis I halves both the chromosome number and the DNA content: 46 → 23 and 4c → 2c.',
        explanation: '1) 23 bivalents. 2) 46 chromosomes × 2 chromatids = 92. 3) Homologs separate, so each cell gets 23 chromosomes. 4) DNA drops from 4c to 2c because each cell keeps both chromatids of 23 chromosomes.'
      }
    },
    {
      id: 'meio2-reduction',
      type: 'text' as const,
      content: `
### Why meiosis I is "reductional"

Compare what moves apart in the two kinds of anaphase you know:

| | Anaphase of mitosis | Anaphase I of meiosis |
|---|---|---|
| What lines up at the plate | Individual duplicated chromosomes | Homologous pairs (bivalents) |
| What separates | Sister chromatids | Homologous chromosomes |
| Chromosome number per daughter | Same as parent (2n → 2n) | Halved (2n → n) |
| Each daughter receives | Both homologs of every pair | One homolog of every pair |

Meiosis I is the only division in the life cycle that sends the two members of a homologous pair into different cells. That separation is also the physical basis of **Mendel's law of segregation**: a heterozygote's two alleles (say A and a) sit on the two homologs, so they end up in different cells.

**Three misconceptions to avoid:**

- *"Sister chromatids separate in meiosis I."* They do not; they stay joined until anaphase II.
- *"The cells after meiosis I are diploid because they still have double chromosomes."* They are haploid; they hold one set.
- *"All maternal chromosomes go to one pole."* Orientation is random for each pair, so each pole gets a mixture.
      `
    },
    {
      id: 'meio2-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Metaphase I to Telophase I
      `,
      exercise: {
        questions: [
          {
            question: 'At metaphase I, how are the chromosomes arranged at the cell\'s equator?',
            options: [
              'Duplicated chromosomes line up singly, just as they do in mitosis',
              'Homologous pairs line up, each pair oriented randomly toward the poles',
              'Homologous pairs line up with all maternal homologs facing one pole',
              'Homologous pairs line up with sister chromatids facing opposite poles'
            ],
            correctAnswer: 1,
            explanation: 'In metaphase I, homologous pairs line up at the metaphase plate, and each pair\'s orientation is random and independent of the other pairs. That randomness is the basis of independent assortment. Single chromosomes line up individually only in mitosis and meiosis II.'
          },
          {
            question: 'Which event makes meiosis I a reductional division?',
            options: [
              'Sister chromatids part as cohesion at each centromere is lost',
              'Homologs of each pair move to opposite poles',
              'Crossing over removes DNA segments from each homolog',
              'The cytoplasm divides so one cell gets fewer chromosomes'
            ],
            correctAnswer: 1,
            explanation: 'In anaphase I, the two homologs of each pair go to opposite poles, so each daughter cell receives one member of each pair and the chromosome number is halved. Sister chromatids stay together until meiosis II, crossing over swaps segments without removing them, and the chromosomes are divided evenly between the two cells.'
          },
          {
            question: 'In a cell with 2n = 6, DNA content is 2c in G1. What is the DNA content per cell at the end of meiosis I?',
            options: [
              '1c',
              '2c',
              '3c',
              '4c'
            ],
            correctAnswer: 1,
            explanation: 'S phase raises the DNA to 4c. Meiosis I splits that DNA between two cells, so each holds 2c: three chromosomes, each still made of two chromatids. 1c is reached only after meiosis II.'
          }
        ]
      }
    }
  ]
}
