export const bioHardyWeinbergEquilibriumPart4Data = {
  topicSlug: 'hardy-weinberg-equilibrium',
  sections: [
    {
      id: 'hw4-intro',
      type: 'text' as const,
      content: `
## Testing for Hardy-Weinberg Equilibrium

**Part 4 of 7**

Now that you can calculate expected genotype frequencies, the next step is to compare **observed** genotype frequencies with **expected** (Hardy-Weinberg) frequencies. If they match, the population may be in equilibrium. If they differ significantly, some evolutionary force is at work.

### The General Approach

1. **Observe** actual genotype counts in the population
2. **Calculate** expected frequencies using HW equations
3. **Compare** observed vs. expected
4. **Determine** whether differences are due to chance or evolutionary forces

> This sets the stage for the chi-square test you will learn in Part 6.
      `
    },
    {
      id: 'hw4-codominance',
      type: 'text' as const,
      content: `
### When You Can Count All Genotypes: Codominance

With **codominant** alleles (like MN blood type), you can directly observe all three genotypes:

**Example: MN Blood Group**

In a sample of 200 individuals:
- 50 are type **MM** (homozygous M)
- 100 are type **MN** (heterozygous)
- 50 are type **NN** (homozygous N)

**Step 1:** Count alleles directly

Total alleles = $2 \\times 200 = 400$

- M alleles: $(2 \\times 50) + (1 \\times 100) = 200$
- N alleles: $(1 \\times 100) + (2 \\times 50) = 200$

**Step 2:** Calculate allele frequencies

$$p = \\frac{200}{400} = 0.5 \\quad\\quad q = \\frac{200}{400} = 0.5$$

**Step 3:** Calculate expected genotype frequencies

| Genotype | Expected frequency | Expected count (n=200) | Observed count |
|----------|-------------------|----------------------|----------------|
| **MM** | $p^2 = 0.25$ | 50 | 50 |
| **MN** | $2pq = 0.50$ | 100 | 100 |
| **NN** | $q^2 = 0.25$ | 50 | 50 |

Observed = Expected perfectly → This population is in HW equilibrium for the MN locus!
      `
    },
    {
      id: 'hw4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Codominance** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why are codominant traits particularly useful for testing Hardy-Weinberg equilibrium?',
            options: [
              'Codominant traits evolve faster',
              'All three genotypes can be distinguished by phenotype',
              'Codominant alleles are always at equal frequencies',
              'Selection does not act on codominant traits'
            ],
            correctAnswer: 1,
            explanation: 'With codominance, each genotype (AA, AB, BB) produces a distinct phenotype, so you can directly count genotype frequencies without needing to calculate from $q^{2}$. This makes testing HW equilibrium straightforward.'
          },
          {
            question: 'In the MN blood group example, how many total alleles are in a sample of 200 diploid individuals?',
            options: ['200', '400', '600', '100'],
            correctAnswer: 1,
            explanation: 'Each diploid individual carries 2 alleles, so 200 individuals have 2 × 200 = 400 total alleles for the MN locus.'
          }
        ]
      }
    },
    {
      id: 'hw4-deviation',
      type: 'text' as const,
      content: `
### Detecting Deviations from Equilibrium

**Example: Sickle Cell Allele in an African Population**

In a population of 500 people, genotype testing reveals:
- 305 **HbA/HbA** (normal homozygous)
- 170 **HbA/HbS** (sickle cell trait — carriers)
- 25 **HbS/HbS** (sickle cell disease)

**Step 1:** Calculate allele frequencies

Total alleles = $2 \\times 500 = 1000$

- HbA alleles: $(2 \\times 305) + (1 \\times 170) = 780$
- HbS alleles: $(1 \\times 170) + (2 \\times 25) = 220$

$$p = \\frac{780}{1000} = 0.78 \\quad\\quad q = \\frac{220}{1000} = 0.22$$

**Step 2:** Calculate expected HW genotype frequencies

| Genotype | Expected freq | Expected (n=500) | Observed |
|----------|--------------|-------------------|----------|
| HbA/HbA | $p^2 = 0.6084$ | 304.2 | 305 |
| HbA/HbS | $2pq = 0.3432$ | 171.6 | 170 |
| HbS/HbS | $q^2 = 0.0484$ | 24.2 | 25 |

The observed and expected values are very close! Despite sickle cell being under strong selection, this particular snapshot looks close to equilibrium. This is because **heterozygote advantage** (balancing selection) maintains both alleles — the population reaches a stable equilibrium where selection pressures balance.
      `
    },
    {
      id: 'hw4-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Practice: Observed vs. Expected** 🔍

A population of 400 beetles has two color morphs controlled by a single gene with codominance:
- 100 are Red (RR), 200 are Orange (RW), 100 are White (WW)`,
      exercise: {
        dropdowns: [
          { label: 'Frequency of allele R (p) = ___', options: ['0.25', '0.50', '0.75', '1.00'] },
          { label: 'Expected number of RR beetles = ___', options: ['50', '100', '150', '200'] },
          { label: 'Is this population in Hardy-Weinberg equilibrium?', options: ['Yes — observed matches expected', 'No — there is excess heterozygosity', 'No — there is a deficit of heterozygotes', 'Cannot determine'] }
        ],
        correctAnswers: ['0.50', '100', 'Yes — observed matches expected'],
        hint1: 'Count R alleles: 2(100) + 1(200) = 400 out of 800 total alleles.',
        hint2: 'Expected RR = $p^{2}$ × 400 = $(0.5)^{2}$ × 400.',
        hint3: 'Compare observed counts with expected counts for all three genotypes.',
        explanation: 'p = 400/800 = 0.50, q = 0.50. Expected: RR = 0.25 × 400 = 100, RW = 0.50 × 400 = 200, WW = 0.25 × 400 = 100. Observed matches expected perfectly, so the population is in HW equilibrium.'
      }
    },
    {
      id: 'hw4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Interpreting Deviations** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A population has MORE heterozygotes than Hardy-Weinberg predicts. Which mechanism could explain this?',
            options: [
              'Inbreeding',
              'Heterozygote advantage (balancing selection)',
              'Genetic drift in a small population',
              'Assortative mating'
            ],
            correctAnswer: 1,
            explanation: 'Heterozygote advantage (overdominance) occurs when heterozygotes have higher fitness than either homozygote. This maintains both alleles and leads to excess heterozygosity compared to HW expectations. Inbreeding and assortative mating would decrease heterozygotes.'
          },
          {
            question: 'A population shows FEWER heterozygotes than expected under HW. Which is the most likely explanation?',
            options: [
              'Gene flow from a neighboring population',
              'Disassortative mating',
              'Inbreeding or population substructure',
              'Stabilizing selection'
            ],
            correctAnswer: 2,
            explanation: 'Inbreeding increases homozygosity (and therefore decreases heterozygosity) because relatives share alleles. Population substructure (Wahlund effect) also produces a deficit of heterozygotes when subpopulations with different allele frequencies are pooled.'
          }
        ]
      }
    }
  ]
}
