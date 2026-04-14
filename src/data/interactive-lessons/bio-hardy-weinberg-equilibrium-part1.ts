export const bioHardyWeinbergEquilibriumPart1Data = {
  topicSlug: 'hardy-weinberg-equilibrium',
  sections: [
    {
      id: 'hw1-intro',
      type: 'text' as const,
      content: `
## Hardy-Weinberg Equilibrium: Foundations

**Part 1 of 7**

The Hardy-Weinberg principle is one of the most important mathematical models in population genetics. It describes a theoretical population in which **allele and genotype frequencies remain constant** from generation to generation — in other words, a population that is **not evolving**.

### Why does this matter?

If we know what a non-evolving population looks like mathematically, we can detect evolution by measuring how real populations **deviate** from Hardy-Weinberg predictions.

### Alleles and genotype frequencies

Consider a single gene with two alleles:

- **p** = frequency of the dominant allele (e.g., **A**)
- **q** = frequency of the recessive allele (e.g., **a**)

Since these are the only two alleles in the population:

$$p + q = 1$$

This simply means allele frequencies must add up to 100% of the alleles in the gene pool.
      `
    },
    {
      id: 'hw1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Allele Frequencies** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In a population where the frequency of the dominant allele (p) is 0.7, what is the frequency of the recessive allele (q)?',
            options: ['0.7', '0.3', '0.49', '0.09'],
            correctAnswer: 1,
            explanation: 'Since p + q = 1, if p = 0.7, then q = 1 − 0.7 = 0.3.'
          },
          {
            question: 'What does "p" represent in the Hardy-Weinberg equations?',
            options: [
              'The frequency of the homozygous dominant genotype',
              'The frequency of the dominant allele in the population',
              'The number of dominant individuals',
              'The probability of a dominant phenotype'
            ],
            correctAnswer: 1,
            explanation: 'In Hardy-Weinberg notation, p represents the frequency (proportion) of the dominant allele in the gene pool, not the genotype or phenotype frequency.'
          }
        ]
      }
    },
    {
      id: 'hw1-genotype-eq',
      type: 'text' as const,
      content: `
### The Genotype Frequency Equation

When individuals mate randomly, the expected genotype frequencies are found by expanding $(p + q)^2$:

$$p^2 + 2pq + q^2 = 1$$

| Term | Genotype | Meaning |
|------|----------|---------|
| $p^2$ | **AA** (homozygous dominant) | Frequency of individuals with two dominant alleles |
| $2pq$ | **Aa** (heterozygous) | Frequency of carriers — one of each allele |
| $q^2$ | **aa** (homozygous recessive) | Frequency of individuals with two recessive alleles |

### Example: Tongue rolling

Suppose in a population:
- $p = 0.6$ (frequency of the tongue-rolling allele **R**)
- $q = 0.4$ (frequency of the non-rolling allele **r**)

Then expected genotype frequencies are:
- $p^2 = 0.36$ → 36% **RR**
- $2pq = 0.48$ → 48% **Rr**
- $q^2 = 0.16$ → 16% **rr**

Notice: $0.36 + 0.48 + 0.16 = 1.00$ ✓
      `
    },
    {
      id: 'hw1-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks: Genotype Frequencies** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'In the equation p² + 2pq + q² = 1, the term 2pq represents the frequency of ___ individuals', options: ['homozygous dominant', 'heterozygous', 'homozygous recessive', 'all dominant'] },
          { label: 'If p = 0.8, then q² = ___', options: ['0.64', '0.04', '0.20', '0.32'] },
          { label: 'The Hardy-Weinberg equations assume the population is ___', options: ['evolving rapidly', 'not evolving', 'very small', 'undergoing selection'] }
        ],
        correctAnswers: ['heterozygous', '0.04', 'not evolving'],
        hint1: 'Think about what 2pq means — two different alleles in one individual.',
        hint2: 'If p = 0.8, then q = 0.2, and q² = (0.2)² = ?',
        hint3: 'Hardy-Weinberg describes a population in equilibrium — no evolutionary change.',
        explanation: '2pq represents heterozygotes (Aa). If p = 0.8, q = 0.2, so q² = 0.04. Hardy-Weinberg equilibrium describes a population that is NOT evolving — allele frequencies stay constant.'
      }
    },
    {
      id: 'hw1-equilibrium-meaning',
      type: 'text' as const,
      content: `
### What Does "Equilibrium" Mean?

A population is in **Hardy-Weinberg equilibrium** when:

1. **Allele frequencies** (p and q) do not change between generations
2. **Genotype frequencies** match the predicted $p^2$, $2pq$, and $q^2$ values
3. No evolutionary forces are acting on the population

Think of it like a null hypothesis in statistics: Hardy-Weinberg is the **baseline expectation** when nothing interesting is happening evolutionarily.

### Key insight for the AP exam

> Hardy-Weinberg equilibrium is a **mathematical model**, not a real-world expectation. Real populations almost never perfectly meet all five conditions. The power of the model is that it lets us **detect and measure** evolutionary change by comparing observed data to HW predictions.

### Summary of equations

| Equation | What it describes |
|----------|------------------|
| $p + q = 1$ | Allele frequencies must sum to 1 |
| $p^2 + 2pq + q^2 = 1$ | Genotype frequencies must sum to 1 |
| $p^2$ | Expected frequency of homozygous dominant (AA) |
| $2pq$ | Expected frequency of heterozygous (Aa) |
| $q^2$ | Expected frequency of homozygous recessive (aa) |
      `
    },
    {
      id: 'hw1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Putting It Together** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In a population of 500 individuals, 20 show the recessive phenotype. What is q²?',
            options: ['0.02', '0.04', '0.20', '0.96'],
            correctAnswer: 1,
            explanation: 'q² = number with recessive phenotype / total = 20/500 = 0.04. This is the frequency of the homozygous recessive genotype.'
          },
          {
            question: 'Hardy-Weinberg equilibrium serves as a:',
            options: [
              'Proof that populations always evolve',
              'Null model to detect evolutionary change',
              'Method to count alleles in a lab',
              'Way to predict which allele will become dominant'
            ],
            correctAnswer: 1,
            explanation: 'Hardy-Weinberg equilibrium is a null model — it predicts what frequencies should look like if NO evolution is occurring. Deviations from HW indicate that evolutionary forces are at work.'
          }
        ]
      }
    }
  ]
}
