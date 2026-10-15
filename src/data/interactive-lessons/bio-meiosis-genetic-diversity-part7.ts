export const bioMeiosisPart7Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio7-intro-p7',
      type: 'text' as const,
      content: `
## Meiosis: Synthesis & AP Review

**Part 7 of 7 — Meiosis: Synthesis & AP Review**

This part pulls the topic together. The CED asks you to do three things with meiosis: **explain** how it transmits chromosomes from one generation to the next, **compare** it with mitosis, and **explain** how it generates genetic diversity. The tables below are the whole topic in compressed form.

### Summary 1: Events and their consequences

| Event | Stage | Consequence |
|---|---|---|
| DNA replication | S phase, before meiosis I only | Each chromosome becomes two sister chromatids; DNA 2c → 4c |
| Synapsis | Prophase I | Homologs pair as bivalents (tetrads) |
| Crossing over | Prophase I | Recombinant chromatids with new allele combinations |
| Random orientation of pairs | Metaphase I | Independent assortment: $2^{n}$ chromosome combinations |
| Homologs separate | Anaphase I | Chromosome number halves (2n → n); basis of the law of segregation |
| Sister chromatids separate | Anaphase II | Four haploid cells with single-chromatid chromosomes; DNA → 1c |
| Fertilization | After meiosis | Diploid number restored; random gamete pairing adds variation |

### Summary 2: Meiosis I vs. meiosis II

| | Meiosis I | Meiosis II |
|---|---|---|
| Starting cell | Diploid, chromosomes duplicated | Haploid, chromosomes duplicated |
| Lines up at metaphase | Homologous pairs | Single chromosomes |
| Separates at anaphase | Homologs | Sister chromatids |
| Chromosome number | 2n → n (reductional) | n → n (equational) |
| DNA content per cell | 4c → 2c | 2c → 1c |
| Sources of variation | Crossing over, independent assortment | Separates sisters made non-identical by crossing over |
      `
    },
    {
      id: 'meio7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Practice — Set 1
      `,
      exercise: {
        questions: [
          {
            question: 'Which meiotic event is the physical basis of Mendel\'s law of segregation?',
            options: [
              'Crossing over between nonsister chromatids in prophase I',
              'Separation of homologous chromosomes in anaphase I',
              'Random fusion of a sperm and an egg at fertilization',
              'Replication of every chromosome during the earlier S phase'
            ],
            correctAnswer: 1,
            explanation: 'The law of segregation states that the two alleles of a gene separate into different gametes. That happens when homologous chromosomes, which carry the two alleles, separate in anaphase I. Crossing over and fertilization add variation but do not separate the two alleles of a gene.'
          },
          {
            question: 'Which statement explains why the four cells produced by one meiosis are genetically different from each other?',
            options: [
              'Each cell receives a different number of chromosomes from the parent',
              'Crossing over makes sister chromatids differ, and pairs orient randomly',
              'Mutations are made on purpose during meiosis II to create new alleles',
              'Each cell copies its DNA again after meiosis II with occasional errors'
            ],
            correctAnswer: 1,
            explanation: 'Crossing over makes the sister chromatids of a chromosome non-identical, so the two cells from each meiosis II differ, and the random orientation of pairs at metaphase I decides which homologs go together. All four cells receive the same chromosome number, and meiosis does not deliberately generate mutations or include an extra round of replication.'
          },
          {
            question: 'A cell is found to contain 2c DNA and n chromosomes, each made of two chromatids. Which stage could it be in?',
            options: [
              'G1 of a diploid cell',
              'Prophase II',
              'Prophase I',
              'Late telophase II'
            ],
            correctAnswer: 1,
            explanation: 'After meiosis I a cell is haploid but still has duplicated chromosomes, giving n chromosomes and 2c DNA, which fits prophase II. A G1 diploid cell has 2c but 2n unduplicated chromosomes, prophase I has 2n chromosomes and 4c, and cells at the end of meiosis II have 1c.'
          }
        ]
      }
    },
    {
      id: 'meio7-traps',
      type: 'text' as const,
      content: `
### The Seven Traps

1. **Haploid after meiosis I.** The cells are already n, even with two chromatids per chromosome.
2. **Metaphase II count.** It is n chromosomes but 2n chromatids. Count centromeres.
3. **No S phase before meiosis II.** DNA is copied once for two divisions.
4. **Sister chromatids stay together in anaphase I.** Homologs separate; sisters wait for anaphase II.
5. **Crossing over is between nonsister chromatids** of homologs, in prophase I, and makes 2 recombinant + 2 parental chromatids per single crossover.
6. **Recombination does not make new alleles.** Mutation does; meiosis rearranges.
7. **Use n, not 2n, as the exponent.** Independent assortment gives $2^{n}$ combinations, so humans make $2^{23}$, not $2^{46}$, gamete types.

### Writing for the free-response section

For "explain" prompts on this topic, connect a **stage**, an **event**, and an **outcome**:

- "In **anaphase I**, **homologous chromosomes separate**, so **each gamete receives one allele of each gene**."
- "In **prophase I**, **nonsister chromatids exchange segments**, so **gametes carry new combinations of alleles**."
- "At **metaphase I**, **each homologous pair orients independently**, so **gametes receive different mixtures of maternal and paternal chromosomes**."

When asked to **compare** with mitosis, give a matched pair: "Mitosis produces **two diploid** cells **identical** to the parent; meiosis produces **four haploid** cells that are **genetically different** from the parent and from each other."
      `
    },
    {
      id: 'meio7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**When Does It Happen?** 🔽

Choose the stage at which each event occurs.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nonsister chromatids exchange segments:',
            options: ['Prophase I', 'Metaphase I', 'Anaphase I', 'Anaphase II']
          },
          {
            label: 'Each homologous pair orients independently at the plate:',
            options: ['Anaphase II', 'Prophase I', 'Metaphase I', 'Anaphase I']
          },
          {
            label: 'Chromosome number is reduced from 2n to n:',
            options: ['Metaphase I', 'Anaphase II', 'Prophase I', 'Anaphase I']
          },
          {
            label: 'Sister chromatids move to opposite poles:',
            options: ['Anaphase I', 'Prophase I', 'Anaphase II', 'Metaphase I']
          }
        ],
        correctAnswers: ['Prophase I', 'Metaphase I', 'Anaphase I', 'Anaphase II'],
        hint1: 'Crossing over needs homologs to be synapsed.',
        hint2: 'Independent assortment is set by how pairs line up.',
        hint3: 'The reduction happens when homologs part; sisters part one division later.',
        explanation: 'Crossing over occurs in prophase I during synapsis. Random orientation of pairs occurs at metaphase I. Homologs separate in anaphase I, halving the chromosome number, and sister chromatids separate in anaphase II.'
      }
    },
    {
      id: 'meio7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Practice — Set 2
      `,
      exercise: {
        questions: [
          {
            question: 'A free-response question asks how mitosis and meiosis differ in outcome. Which comparison is accurate?',
            options: [
              'Mitosis makes four haploid cells; meiosis makes two diploid cells',
              'Both make genetically identical cells but differ in cell number',
              'Mitosis makes identical diploid cells; meiosis makes varied haploid cells',
              'Mitosis makes gametes only; meiosis makes body cells for growth'
            ],
            correctAnswer: 2,
            explanation: 'Mitosis produces two genetically identical diploid cells for growth and repair. Meiosis produces four genetically different haploid gametes. In animals, meiosis, not mitosis, is the division that makes gametes.'
          },
          {
            question: 'A researcher blocks the separation of sister chromatids in a germ cell but lets every other step of meiosis proceed. Which stage is directly disrupted?',
            options: [
              'Anaphase I',
              'Anaphase II',
              'Prophase I',
              'Metaphase I'
            ],
            correctAnswer: 1,
            explanation: 'Sister chromatids separate only in anaphase II of meiosis. In anaphase I the sisters stay together while homologs separate, so blocking sister separation leaves meiosis I unaffected and stalls the second division.'
          },
          {
            question: 'A species of aphid can reproduce asexually in summer and sexually in autumn. Which prediction best follows from the role of meiosis?',
            options: [
              'Offspring are clones in summer and genetically varied in autumn',
              'Offspring are genetically varied in summer and clones in autumn',
              'Offspring are genetically varied in both seasons, owing to mutation',
              'Offspring are clones in both seasons, as each comes from one mother'
            ],
            correctAnswer: 0,
            explanation: 'Asexual reproduction copies the mother\'s genome without meiosis, so summer offspring are essentially genetically identical to her. Sexual reproduction involves meiosis and fertilization, which reshuffle alleles and produce variation. Occasional mutations do not make asexual offspring routinely different from one another.'
          }
        ]
      }
    }
  ]
}
