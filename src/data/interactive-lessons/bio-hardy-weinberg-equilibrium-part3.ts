export const bioHardyWeinbergEquilibriumPart3Data = {
  topicSlug: 'hardy-weinberg-equilibrium',
  sections: [
    {
      id: 'hw3-intro',
      type: 'text' as const,
      content: `
## Calculating Allele Frequencies from Phenotype Data

**Part 3 of 7**

On the AP exam, you will often be given **phenotype data** and asked to calculate allele frequencies. Since the recessive phenotype is the only one you can identify with certainty from phenotype alone, this is your starting point.

### The Strategy

For a trait with complete dominance:
1. **Count** the individuals with the recessive phenotype
2. **Calculate** $q^2$ = (recessive individuals) / (total individuals)
3. **Find** $q = \\sqrt{q^2}$
4. **Find** $p = 1 - q$
5. **Calculate** expected genotype frequencies: $p^2$, $2pq$, $q^2$

> 🔑 **Key insight:** You start with $q^2$ because homozygous recessive is the only genotype you can determine directly from phenotype when dominance is complete.
      `
    },
    {
      id: 'hw3-worked-example1',
      type: 'text' as const,
      content: `
### Worked Example 1: Cystic Fibrosis

Cystic fibrosis (CF) is an autosomal recessive disorder. In a population of 10,000 people, 4 have CF.

**Step 1:** Calculate $q^2$

$$q^2 = \\frac{4}{10{,}000} = 0.0004$$

**Step 2:** Find $q$

$$q = \\sqrt{0.0004} = 0.02$$

**Step 3:** Find $p$

$$p = 1 - q = 1 - 0.02 = 0.98$$

**Step 4:** Calculate genotype frequencies

| Genotype | Formula | Frequency | In 10,000 people |
|----------|---------|-----------|-------------------|
| **FF** (normal, homozygous) | $p^2$ | $(0.98)^2 = 0.9604$ | 9,604 |
| **Ff** (carrier) | $2pq$ | $2(0.98)(0.02) = 0.0392$ | 392 |
| **ff** (CF affected) | $q^2$ | $(0.02)^2 = 0.0004$ | 4 |
| **Total** | | **1.0000** | **10,000** |

> 📊 Notice that **392 out of 10,000** people (about 1 in 25) are carriers! Even though the disease is rare, the carrier frequency is surprisingly high.
      `
    },
    {
      id: 'hw3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: CF Example** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why do we start Hardy-Weinberg calculations with q² rather than p²?',
            options: [
              'Because q is always smaller than p',
              'Because homozygous recessive is the only genotype identifiable from phenotype alone',
              'Because the recessive allele is more common',
              'Because q² is easier to calculate'
            ],
            correctAnswer: 1,
            explanation: 'With complete dominance, individuals with the dominant phenotype can be either homozygous dominant (AA) or heterozygous (Aa) — you cannot distinguish them by looking. Only homozygous recessives (aa) can be identified by phenotype, so q² is the starting point.'
          },
          {
            question: 'In the CF example, approximately what fraction of the population are carriers (Ff)?',
            options: ['1 in 2,500', '1 in 250', '1 in 25', '1 in 10'],
            correctAnswer: 2,
            explanation: 'The carrier frequency is 2pq = 0.0392, which is approximately 392/10,000 or about 1 in 25 people. This is much higher than the disease frequency of 1 in 2,500.'
          }
        ]
      }
    },
    {
      id: 'hw3-worked-example2',
      type: 'text' as const,
      content: `
### Worked Example 2: Flower Color in a Plant Population

In a field of 200 snapdragons, you observe:
- 128 red flowers (dominant phenotype)
- 72 white flowers (recessive phenotype)

**Step 1:** Calculate $q^2$

$$q^2 = \\frac{72}{200} = 0.36$$

**Step 2:** Find $q$

$$q = \\sqrt{0.36} = 0.6$$

**Step 3:** Find $p$

$$p = 1 - 0.6 = 0.4$$

**Step 4:** Calculate all genotype frequencies

| Genotype | Frequency | Expected count (n=200) |
|----------|-----------|----------------------|
| **RR** | $p^2 = (0.4)^2 = 0.16$ | 32 |
| **Rr** | $2pq = 2(0.4)(0.6) = 0.48$ | 96 |
| **rr** | $q^2 = (0.6)^2 = 0.36$ | 72 |

**Check:** 32 + 96 + 72 = 200 ✓

**Check phenotypes:** Red (RR + Rr) = 32 + 96 = 128 ✓ | White (rr) = 72 ✓

> Notice that even though white flowers (recessive) outnumber red homozygotes, the **recessive allele** (q = 0.6) is actually more common than the dominant allele (p = 0.4). Dominant does not mean more frequent!
      `
    },
    {
      id: 'hw3-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Practice Problem: PTC Tasting** 🔍

In a class of 100 students, 36 cannot taste PTC paper (recessive phenotype). Calculate the allele and genotype frequencies.`,
      exercise: {
        dropdowns: [
          { label: 'q² = ___', options: ['0.36', '0.64', '0.60', '0.16'] },
          { label: 'q = ___', options: ['0.36', '0.60', '0.40', '0.16'] },
          { label: 'p = ___', options: ['0.36', '0.60', '0.40', '0.64'] },
          { label: '2pq (carrier frequency) = ___', options: ['0.24', '0.48', '0.36', '0.16'] }
        ],
        correctAnswers: ['0.36', '0.60', '0.40', '0.48'],
        hint1: 'q² = non-tasters / total = 36/100',
        hint2: 'q = √(q²) = √(0.36)',
        hint3: 'p = 1 − q, then 2pq = 2 × p × q',
        explanation: 'q² = 36/100 = 0.36. q = √0.36 = 0.6. p = 1 − 0.6 = 0.4. The carrier frequency 2pq = 2(0.4)(0.6) = 0.48, meaning 48% of the class are heterozygous tasters.'
      }
    },
    {
      id: 'hw3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Applying Calculations** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In a population of 1,000 mice, 90 are albino (recessive). What is the frequency of the dominant allele (p)?',
            options: ['0.09', '0.30', '0.70', '0.91'],
            correctAnswer: 2,
            explanation: 'q² = 90/1000 = 0.09. q = √0.09 = 0.3. p = 1 − 0.3 = 0.70.'
          },
          {
            question: 'A common misconception is that dominant alleles are always more frequent than recessive alleles. Which statement is correct?',
            options: [
              'Dominant alleles always increase in frequency over time',
              'Recessive alleles are always selected against',
              'Allele frequency and dominance are independent concepts',
              'The dominant allele must have frequency > 0.5'
            ],
            correctAnswer: 2,
            explanation: 'Dominance describes how alleles interact to produce a phenotype — it says nothing about how common an allele is. A recessive allele can be more frequent than a dominant allele (as in the snapdragon example where q = 0.6 > p = 0.4).'
          }
        ]
      }
    }
  ]
}
