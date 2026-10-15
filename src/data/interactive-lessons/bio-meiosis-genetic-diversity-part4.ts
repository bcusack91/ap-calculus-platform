export const bioMeiosisPart4Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio4-intro-p4',
      type: 'text' as const,
      content: `
## Crossing Over & Recombination

**Part 4 of 7 — Crossing Over & Recombination**

Independent assortment shuffles **whole chromosomes**. Crossing over goes one level deeper: it shuffles alleles **within a chromosome**, building chromosomes that carry combinations of maternal and paternal alleles that neither parent's chromosome carried.

### The mechanism

During **prophase I**, while homologs are synapsed:

1. A chromatid of the maternal homolog and a chromatid of the paternal homolog (**nonsister chromatids**) are broken at **matching positions**.
2. The broken ends are joined **across** to the other homolog's chromatid, so the two chromatids trade corresponding segments.
3. The crossover point stays visible as a **chiasma**, an X-shaped connection that also helps hold the homologs together until anaphase I.

Because the exchange happens at matching positions on homologs, which carry the same genes in the same order, **no genes are gained or lost**. Each recombinant chromatid still has one copy of every gene; only the alleles have been reshuffled.

| Feature of crossing over | Detail |
|---|---|
| When | Prophase I of meiosis |
| Between | Nonsister chromatids of homologous chromosomes |
| Visible as | Chiasmata |
| Result | Recombinant chromatids with new allele combinations |
| Changes the number of genes? | No: segments are exchanged at matching positions |
| Creates new alleles? | No: it recombines alleles that already exist |
      `
    },
    {
      id: 'meio4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — The Mechanism
      `,
      exercise: {
        questions: [
          {
            question: 'Which description of crossing over is accurate?',
            options: [
              'Sister chromatids of one chromosome trade identical segments',
              'Two nonhomologous chromosomes swap pieces during metaphase I',
              'Homologous chromosomes trade whole chromosomes during anaphase II',
              'Nonsister chromatids of homologs exchange segments in prophase I'
            ],
            correctAnswer: 3,
            explanation: 'Crossing over occurs in prophase I, when nonsister chromatids of paired homologs exchange corresponding segments at chiasmata. Exchange between sister chromatids would produce no new combinations, and a swap between nonhomologous chromosomes is a translocation, a chromosomal mutation.'
          },
          {
            question: 'Why does crossing over between sister chromatids of the same chromosome produce no new allele combinations?',
            options: [
              'Sister chromatids carry identical alleles before any exchange',
              'Sister chromatids are separated before prophase I begins',
              'Sister chromatids carry alleles of different genes from each other',
              'Sister chromatids cannot form chiasmata with each other'
            ],
            correctAnswer: 0,
            explanation: 'Sister chromatids are replication copies, so trading segments between them swaps identical alleles and changes nothing. Sisters stay joined until anaphase II, and they carry the same genes, so neither of those explains it. New combinations need exchange between nonsister chromatids, which carry alleles from different parents.'
          }
        ]
      }
    },
    {
      id: 'meio4-worked',
      type: 'text' as const,
      content: `
### Worked Example: One Crossover, Four Chromatids

**Setup.** Two genes, A and B, lie on the same chromosome. An individual inherited a chromosome carrying **A** and **B** from its mother and a chromosome carrying **a** and **b** from its father. Its genotype is AaBb, with A and B on one homolog.

**Step 1 — After S phase.** The bivalent has four chromatids:

| Chromatid | Homolog | Alleles |
|---|---|---|
| 1 | Maternal | A — B |
| 2 | Maternal | A — B |
| 3 | Paternal | a — b |
| 4 | Paternal | a — b |

**Step 2 — One crossover.** Chromatid 2 and chromatid 3 (nonsisters) cross over at a point **between** gene A and gene B. They swap the segments that carry gene B.

**Step 3 — The four chromatids afterward.**

| Chromatid | Alleles | Type |
|---|---|---|
| 1 | A — B | Parental |
| 2 | A — b | **Recombinant** |
| 3 | a — B | **Recombinant** |
| 4 | a — b | Parental |

**Step 4 — Follow them into gametes.** Meiosis I separates the homologs (chromatids 1 and 2 go to one cell, 3 and 4 to the other). Meiosis II separates each pair of sisters. Each of the four gametes receives one chromatid:

**AB, Ab, aB, ab**: two parental and two recombinant gametes.

**Without the crossover**, this meiosis would have produced only **AB, AB, ab, ab**.

**General rule:** a single crossover between two genes involves **two of the four chromatids**, so it yields **2 recombinant and 2 parental** chromatids. Chromatids that did not take part keep the parental combination.
      `
    },
    {
      id: 'meio4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Predict the Chromatids** 🔽

A different individual has **D** and **e** on its maternal homolog and **d** and **E** on its paternal homolog. One crossover occurs between the two genes, involving one maternal and one paternal chromatid. Choose the allele combination for each chromatid after the crossover.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Maternal chromatid that did NOT cross over:',
            options: ['D — e', 'D — E', 'd — e', 'd — E']
          },
          {
            label: 'Maternal chromatid that DID cross over:',
            options: ['D — e', 'd — E', 'D — E', 'd — e']
          },
          {
            label: 'Paternal chromatid that DID cross over:',
            options: ['D — E', 'd — e', 'D — e', 'd — E']
          },
          {
            label: 'Paternal chromatid that did NOT cross over:',
            options: ['d — e', 'D — E', 'd — E', 'D — e']
          }
        ],
        correctAnswers: ['D — e', 'D — E', 'd — e', 'd — E'],
        hint1: 'Chromatids that did not take part keep their original (parental) combination.',
        hint2: 'The crossover swaps the segment carrying the second gene, so the first allele stays and the second changes.',
        hint3: 'The maternal crossover chromatid keeps D but picks up the paternal E.',
        explanation: 'The two non-crossover chromatids stay parental: D — e and d — E. The crossover swaps the E-gene segment between nonsisters, giving recombinants D — E and d — e. One crossover gives two parental and two recombinant chromatids.'
      }
    },
    {
      id: 'meio4-linkage',
      type: 'text' as const,
      content: `
### What crossing over does to genes on the same chromosome

Genes on the same chromosome are **linked**: without crossing over, they would always be inherited together, as one unit. Crossing over is what lets linked alleles be separated.

- **Crossovers happen at different places in different meioses.** Each meiotic cell has its own pattern of chiasmata.
- **The farther apart two genes are**, the more likely a crossover lands somewhere between them, so the more often they appear in new combinations.
- **Genes very close together** are rarely separated, so they are usually inherited together.

That is the qualitative idea. Using recombinant offspring counts to calculate how far apart genes are is taught in the Chromosomal Inheritance Patterns topic.

### Why it matters

Crossing over:

1. creates **chromosomes that never existed before** in either parent;
2. makes the sister chromatids that meiosis II separates **non-identical**, so all four products of a meiosis can differ;
3. multiplies the variation produced by independent assortment, so the number of genetically different gametes one person can make is effectively unlimited.

### Misconceptions to avoid

| Misconception | Reality |
|---|---|
| "Crossing over creates new alleles." | It creates new **combinations** of existing alleles; new alleles come from mutation. |
| "Crossing over happens in anaphase." | It happens in **prophase I**, during synapsis. |
| "Crossing over happens between sister chromatids." | The exchanges that matter are between **nonsister** chromatids of homologs. |
| "Every chromatid in a bivalent is recombinant." | A single crossover changes only the **two** chromatids involved. |

> **AP Connection:** The CED states that crossing over (recombination) during meiosis I increases genetic diversity among the resulting gametes. In an FRQ, name the stage (prophase I), the participants (nonsister chromatids of homologous chromosomes), and the outcome (new combinations of alleles on a chromosome).
      `
    },
    {
      id: 'meio4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Consequences of Crossing Over
      `,
      exercise: {
        questions: [
          {
            question: 'After crossing over between homologs, some chromatids carry:',
            options: [
              'new mutations made where the DNA strands were cut and rejoined',
              'two copies of every allele found in the original homologs',
              'only the alleles from the parent that gave the larger homolog',
              'a mix of maternal and paternal alleles'
            ],
            correctAnswer: 3,
            explanation: 'Crossing over produces recombinant chromatids: segments from the maternal and paternal homologs are joined, so one chromatid carries a combination of alleles not found on either original chromosome. It reshuffles existing alleles rather than creating mutations, and each chromatid still has one copy of each gene.'
          },
          {
            question: 'Genes J and K are far apart on one chromosome; genes M and N are next to each other on another. In a heterozygote, which pair is more often separated into new combinations?',
            options: [
              'J and K, because a crossover more often falls between them',
              'M and N, because neighboring genes are swapped as a single unit',
              'J and K, because distant genes are on different homologs',
              'Neither, because genes on the same chromosome never recombine'
            ],
            correctAnswer: 0,
            explanation: 'The farther apart two genes are, the more places a crossover can occur between them, so distant genes like J and K are recombined more often. Neighboring genes are rarely split because a crossover seldom falls between them. Linked genes can recombine, which is exactly what crossing over allows.'
          },
          {
            question: 'What is the main evolutionary significance of crossing over?',
            options: [
              'It repairs mutations so offspring inherit only functional alleles',
              'It ensures every gamete carries the same set of alleles',
              'It doubles the number of genes carried by each gamete',
              'It raises genetic variation among the offspring of one couple'
            ],
            correctAnswer: 3,
            explanation: 'By creating recombinant chromosomes, crossing over increases genetic variation among offspring, and that variation is the raw material natural selection acts on. It does not repair mutations, make gametes identical, or change the number of genes per gamete.'
          }
        ]
      }
    }
  ]
}
