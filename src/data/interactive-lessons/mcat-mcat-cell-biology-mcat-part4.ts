export const mcatCellBioPart4Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb4-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 4 of 7 — Meiosis & Genetic Diversity**

### Meiosis Overview

$$\\text{Diploid (2n, 4C)} \\xrightarrow{\\text{Meiosis I}} \\text{Haploid (1n, 2C)} \\xrightarrow{\\text{Meiosis II}} \\text{4 haploid gametes (1n, 1C)}$$

### Meiosis I vs. Meiosis II

| Feature | Meiosis I | Meiosis II |
|---------|----------|-----------|
| Starting cells | 1 diploid (2n, 4C) | 2 haploid (1n, 2C) |
| Result | 2 haploid cells (1n, 2C) | 4 haploid cells (1n, 1C) |
| Homologs separate? | YES (reduction division) | No |
| Sister chromatids separate? | No | YES |
| Crossing over? | YES (prophase I) | No |
| Unique to meiosis? | YES — homologous pairing, synapsis, crossing over | Similar to mitosis |

### Prophase I — The Key Stage

Prophase I is the longest and most complex phase:
1. **Synapsis**: Homologous chromosomes pair up (form a bivalent/tetrad)
2. **Synaptonemal complex**: Protein structure holds homologs together
3. **Crossing over**: Non-sister chromatids exchange DNA segments at **chiasmata**
4. This produces **recombinant chromosomes** with novel allele combinations

### Sources of Genetic Diversity

| Source | Mechanism | Magnitude |
|--------|-----------|-----------|
| Crossing over | DNA exchange between homologs in prophase I | Theoretically unlimited recombination |
| Independent assortment | Random orientation of bivalents at metaphase I | $2^{23} \\approx 8.4$ million combinations per parent |
| Random fertilization | Any sperm + any egg | $2^{23} \\times 2^{23} = 2^{46} \\approx 70$ trillion combinations |
| Random mutations | Errors in replication, environmental mutagens | Variable |

### Comparing Mitosis and Meiosis

| Feature | Mitosis | Meiosis |
|---------|---------|---------|
| Divisions | 1 | 2 |
| Daughter cells | 2 (identical, 2n) | 4 (unique, 1n) |
| Crossing over | No | Yes (prophase I) |
| Homolog pairing | No | Yes (synapsis) |
| Purpose | Growth, repair | Gamete production |
| Genetic variation | None | Extensive |`
    },
    {
      id: 'cb4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Meiosis Fundamentals** 🎯`,
      exercise: {
        questions: [
          {
            question: `Crossing over occurs between:`,
            options: [`Non-sister chromatids of homologous chromosomes during prophase I`, `Sister chromatids during prophase II`, `Homologous chromosomes during metaphase I`, `Non-homologous chromosomes during anaphase I`],
            correctAnswer: 0,
            explanation: `Crossing over exchanges genetic material between non-sister chromatids of homologous chromosomes during prophase I, forming chiasmata. Sister chromatid exchange would not produce new combinations because sisters are genetically identical (before crossing over).`
          },
          {
            question: `After meiosis I but before meiosis II, a human cell contains:`,
            options: [`23 chromosomes, each with 2 sister chromatids (1n, 2C)`, `46 chromosomes with 4C DNA content`, `23 chromosomes with 1C DNA content`, `46 chromosomes with 2C DNA content`],
            correctAnswer: 0,
            explanation: `Meiosis I is the reduction division: homologs separate, going from 2n to 1n. But sister chromatids are still joined, so each chromosome still has 2 chromatids (2C DNA). Meiosis II then separates sisters: 1n, 1C.`
          },
          {
            question: `Independent assortment generates diversity because:`,
            options: [`Each bivalent orients randomly at metaphase I, giving $2^n$ possible gamete combinations`, `Chromosomes always segregate in the same pattern`, `Crossing over is required for it to work`, `It only occurs during meiosis II`],
            correctAnswer: 0,
            explanation: `At metaphase I, each bivalent (pair of homologs) independently chooses which pole to face. With 23 bivalents in humans: $2^{23} \\approx 8.4$ million possible combinations per gamete, even without crossing over. This is Mendel's Law of Independent Assortment.`
          }
        ]
      }
    },
    {
      id: 'cb4-deep',
      type: 'text' as const,
      content: `### Nondisjunction — When Chromosome Separation Fails

| Error Timing | Affected Gametes | Result |
|--------------|-----------------|--------|
| Meiosis I nondisjunction | All 4 gametes are abnormal (either +1 or $-$1 chromosome) | More severe — affects ALL gametes |
| Meiosis II nondisjunction | 2 normal + 2 abnormal gametes | Less severe — only 2 of 4 affected |

**Common aneuploidies from nondisjunction:**
- **Trisomy 21** (Down syndrome): 3 copies of chromosome 21
- **Turner syndrome** (45, XO): only one X chromosome in females
- **Klinefelter syndrome** (47, XXY): extra X in males
- **Trisomy 18** (Edwards syndrome), **Trisomy 13** (Patau syndrome)

### Oogenesis vs. Spermatogenesis

| Feature | Spermatogenesis | Oogenesis |
|---------|----------------|-----------|
| Products per meiosis | 4 functional sperm | 1 functional egg + 3 polar bodies |
| Timing | Continuous from puberty | Begins in fetal life, arrested at prophase I until ovulation |
| Completion | ~64 days per cycle | May take decades (arrested at prophase I!) |
| Location | Seminiferous tubules (testes) | Ovarian follicles |

**Why this matters for MCAT**: Older maternal age → higher nondisjunction risk because oocytes arrested in prophase I for decades, cohesin proteins degrade over time.

### Ploidy vs. DNA Content — Master This Distinction

The MCAT loves to test this:
- **Ploidy (n)**: Number of unique chromosomes (haploid = n, diploid = 2n)
- **DNA content (C)**: Amount of DNA (doubles after S phase)
- A cell can be 1n but 2C (after meiosis I, before meiosis II)
- Always track both independently through the cell cycle`
    },
    {
      id: 'cb4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Nondisjunction & Gametogenesis** 🎯`,
      exercise: {
        questions: [
          {
            question: `Nondisjunction during meiosis I produces:`,
            options: [`Four abnormal gametes — all will have incorrect chromosome numbers`, `Two normal and two abnormal gametes`, `One abnormal gamete and three normal ones`, `No abnormal gametes if crossing over occurred`],
            correctAnswer: 0,
            explanation: `In meiosis I nondisjunction, both homologs go to one cell. After meiosis II: 2 gametes have an extra chromosome (n+1) and 2 are missing one (n-1). All 4 are abnormal. In meiosis II nondisjunction, only 2 of 4 gametes are affected.`
          },
          {
            question: `Female oocytes are arrested at prophase I until ovulation. This long arrest contributes to increased risk of aneuploidy in older mothers because:`,
            options: [`Cohesin proteins holding sister chromatids together degrade over decades`, `DNA replication errors accumulate during the arrest`, `Spindle fibers become less elastic with age`, `The nuclear envelope becomes more permeable`],
            correctAnswer: 0,
            explanation: `Oocytes can remain arrested in prophase I for 12-50+ years. During this time, cohesin complexes (which hold chromosomes together) gradually degrade. Weakened cohesion → increased chance of improper segregation → nondisjunction → aneuploid offspring (e.g., Down syndrome risk increases with maternal age).`
          }
        ]
      }
    },
    {
      id: 'cb4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Meiosis I: homologs separate (2n → 1n, reduction division). Meiosis II: sisters separate (like mitosis)
- Prophase I is unique: synapsis, crossing over at chiasmata, recombinant chromosomes
- Genetic diversity: crossing over + independent assortment ($2^{23}$) + random fertilization
- Nondisjunction in meiosis I → all 4 gametes abnormal; in meiosis II → 2 of 4 abnormal
- Spermatogenesis → 4 functional sperm; Oogenesis → 1 egg + 3 polar bodies
- Oocyte arrest at prophase I for decades → cohesin degradation → maternal age-related aneuploidy
- Always track ploidy (n) and DNA content (C) independently`
    }
  ]
};
