export const mcatCellBioPart4Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb4-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 4 of 7 — Meiosis & Genetic Diversity**

### Meiosis Overview

$$\\text{Diploid (2n)} \\xrightarrow{\\text{Meiosis I}} \\text{Haploid (1n)} \\xrightarrow{\\text{Meiosis II}} \\text{4 haploid gametes}$$

### Meiosis I vs. Meiosis II

| Feature | Meiosis I | Meiosis II |
|---------|----------|-----------|
| Starting cells | 1 diploid | 2 haploid |
| Result | 2 haploid cells | 4 haploid cells |
| Homologs separate? | YES | No |
| Sister chromatids separate? | No | YES |
| Crossing over? | YES (prophase I) | No |
| Reduction division? | YES (2n → n) | No (n → n) |

### Sources of Genetic Diversity

1. **Crossing over** (prophase I): Exchange of segments between homologs
2. **Independent assortment**: Random orientation of homologs at metaphase I ($2^{23}$ possible combinations in humans!)
3. **Random fertilization**: Any sperm + any egg

### Nondisjunction

Failure of chromosomes to separate properly:
- Meiosis I: both homologs go to one cell → affects ALL gametes
- Meiosis II: sister chromatids fail to separate → affects 2 of 4 gametes`
    },
    {
      id: 'cb4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Meiosis** 🎯`,
      exercise: {
        questions: [
          {
            question: `Crossing over occurs between:`,
            options: [`Non-sister chromatids of homologous chromosomes during prophase I`, `Sister chromatids during prophase II`, `Homologous chromosomes during metaphase I`, `Any chromosomes during S phase`],
            correctAnswer: 0,
            explanation: `Crossing over exchanges genetic material between non-sister chromatids of homologous chromosomes during prophase I, forming chiasmata. This produces recombinant chromosomes with new allele combinations.`
          }
        ]
      }
    },
    {
      id: 'cb4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Meiosis I: homologs separate (reduction division). Meiosis II: sisters separate (like mitosis).
- Genetic diversity: crossing over + independent assortment + random fertilization
- Nondisjunction in meiosis I affects all 4 gametes; in meiosis II affects only 2
- Meiosis produces 4 UNIQUE haploid cells; mitosis produces 2 IDENTICAL diploid cells`
    }
  ]
};
