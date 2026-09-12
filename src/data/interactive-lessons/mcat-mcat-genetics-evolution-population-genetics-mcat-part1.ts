export const mcatPopGenPart1Data = {
  topicSlug: 'mcat-genetics-evolution-population-genetics-mcat',
  sections: [
    {
      id: 'pg1-intro',
      type: 'text' as const,
      content: `# Population Genetics — Deep Dive

**Part 1 of 4 — Allele Frequencies & Hardy-Weinberg Equilibrium**

### From Individuals to Populations

Population genetics tracks **allele frequencies** in a gene pool rather than the genotypes of single crosses. For a two-allele gene:

$p = \\text{frequency of allele } A, \\qquad q = \\text{frequency of allele } a, \\qquad p + q = 1$

**Counting alleles directly** (when you know genotype counts): each individual carries 2 alleles, so in a population of $N$ individuals with $n_{AA}$, $n_{Aa}$, $n_{aa}$:

$p = \\frac{2n_{AA} + n_{Aa}}{2N}$

Homozygotes contribute two copies, heterozygotes one — a step MCAT questions love to test.

### The Hardy-Weinberg Principle

If a population meets five conditions, allele frequencies do not change across generations, and genotype frequencies are locked to allele frequencies:

$p^2 + 2pq + q^2 = 1$

| Genotype | Frequency |
|----------|-----------|
| $AA$ | $p^2$ |
| $Aa$ | $2pq$ |
| $aa$ | $q^2$ |

### The Five Conditions (know them cold)

1. **No mutation**
2. **No natural selection** (equal survival and reproduction across genotypes)
3. **Random mating** (no assortative mating, no inbreeding)
4. **No gene flow** (no migration in or out)
5. **Very large population** (no genetic drift)

Violating any one of these is what we MEAN by evolution at the population level: a change in allele frequencies over generations.

### The Standard Solving Recipe

Almost every H-W problem is solved in the same order:

1. Start from the ONE quantity you can trust: the frequency of the **recessive phenotype** equals $q^2$ (recessive phenotype = one genotype). You cannot start from the dominant phenotype — it lumps $p^2$ and $2pq$ together.
2. $q = \\sqrt{q^2}$
3. $p = 1 - q$
4. Compute whatever is asked: carriers $= 2pq$, homozygous dominant $= p^2$, etc.

### Sanity Checks

- When $q$ is small, carriers ($2pq \\approx 2q$) vastly outnumber affected individuals ($q^2$). Example: $q = 0.01$ → affected $= 10^{-4}$, carriers $\\approx 0.02$ — a 200-fold difference.
- Heterozygosity $2pq$ is maximized at $p = q = 0.5$, where $2pq = 0.5$.
- One generation of random mating is enough to establish H-W **genotype** proportions at an autosomal locus, given the allele frequencies.`
    },
    {
      id: 'pg1-worked',
      type: 'text' as const,
      content: `### Worked Example — From Phenotype Counts to Carrier Frequency

**Problem.** In a population of 10,000 people in Hardy-Weinberg equilibrium, 36 have an autosomal recessive condition. How many people are expected to be carriers?

**Step 1 — Recessive phenotype gives $q^2$.**
$q^2 = \\frac{36}{10000} = 0.0036$

**Step 2 — Take the square root.**
$q = \\sqrt{0.0036} = 0.06$

**Step 3 — Find $p$.**
$p = 1 - 0.06 = 0.94$

**Step 4 — Carrier frequency and count.**
$2pq = 2(0.94)(0.06) = 0.1128$

Carriers $= 0.1128 \\times 10000 = 1128$ people.

**Fast MCAT approximation.** When $q$ is small, $p \\approx 1$, so $2pq \\approx 2q = 0.12$ → about 1200 carriers. Notice the exact answer (1128) is close; on a timed exam, $2q$ gets you to the right answer choice.

**Reverse-direction check.** If a question instead gives you "84% of the population shows the dominant phenotype," then the recessive phenotype is $16\\%$: $q^2 = 0.16$, $q = 0.4$, $p = 0.6$ — never take $\\sqrt{0.84}$.`
    },
    {
      id: 'pg1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Hardy-Weinberg Basics** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a sample of 200 individuals: 90 are AA, 60 are Aa, and 50 are aa. What is the frequency of allele a?`,
            options: [`0.40`, `0.25`, `0.55`, `0.30`],
            correctAnswer: 0,
            explanation: `Count alleles: $a$ copies $= 2(50) + 60 = 160$ out of $2 \\times 200 = 400$ total, so $q = 160/400 = 0.40$. Answer 0.25 is the aa GENOTYPE frequency (50/200) — genotype frequency and allele frequency are different quantities.`
          },
          {
            question: `A recessive condition affects 1 in 2,500 newborns in a large randomly mating population. The expected carrier frequency is approximately:`,
            options: [`1/2500`, `1/25`, `1/50`, `1/625`],
            correctAnswer: 1,
            explanation: `$q^2 = 1/2500$ → $q = 1/50 = 0.02$; $p = 0.98$. Carriers $= 2pq = 2(0.98)(0.02) \\approx 0.039 \\approx 1/25$. Shortcut: $2q = 2/50 = 1/25$. Choosing 1/50 confuses the ALLELE frequency with the carrier (heterozygote) frequency.`
          },
          {
            question: `Which situation still satisfies Hardy-Weinberg assumptions?`,
            options: [`Individuals preferentially mate with phenotypically similar partners`, `A small island population of 30 breeding adults`, `A very large population in which every genotype survives and reproduces equally well, with no migration or new mutations`, `Steady one-way migration from a neighboring population each generation`],
            correctAnswer: 2,
            explanation: `H-W requires all five conditions at once: no selection, no mutation, no migration, random mating, and large population size. Assortative mating violates random mating, 30 adults invites drift, and one-way migration is gene flow.`
          },
          {
            question: `In a Hardy-Weinberg population, 64% of individuals display the dominant phenotype. What fraction of the population is heterozygous?`,
            options: [`0.36`, `0.48`, `0.16`, `0.24`],
            correctAnswer: 1,
            explanation: `Recessive phenotype $= 1 - 0.64 = 0.36 = q^2$, so $q = 0.6$ and $p = 0.4$. Heterozygotes $= 2pq = 2(0.4)(0.6) = 0.48$. The trap is taking $\\sqrt{0.64}$: the dominant phenotype mixes $p^2$ and $2pq$, so it can never be square-rooted directly.`
          },
          {
            question: `Why must the Hardy-Weinberg solving process begin with the recessive phenotype frequency rather than the dominant one?`,
            options: [`Recessive alleles are more common than dominant alleles`, `Dominant phenotypes cannot be counted accurately in the field`, `The recessive allele frequency is always 0.5`, `The recessive phenotype corresponds to exactly one genotype ($q^2$), while the dominant phenotype pools two genotypes ($p^2 + 2pq$)`],
            correctAnswer: 3,
            explanation: `Only the recessive class maps one-to-one onto a genotype, so only it yields an allele frequency by a simple square root. Dominance says nothing about how COMMON an allele is — dominant alleles can be rare (e.g., Huntington), which eliminates the first distractor.`
          }
        ]
      }
    },
    {
      id: 'pg1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- $p + q = 1$; genotypes at equilibrium: $p^2 + 2pq + q^2 = 1$
- Allele counting: $p = (2n_{AA} + n_{Aa})/2N$ — homozygotes count twice
- Five H-W conditions: no mutation, no selection, random mating, no migration, infinite (very large) population
- Solving recipe: recessive phenotype $= q^2$ → $q$ → $p$ → whatever is asked; NEVER square-root the dominant phenotype frequency
- Rare alleles hide in heterozygotes: carriers $\\approx 2q$ dwarf the $q^2$ affected class; $2pq$ peaks at 0.5 when $p = q = 0.5$`
    }
  ]
};
