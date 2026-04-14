export const bioHardyWeinbergEquilibriumPart2Data = {
  topicSlug: 'hardy-weinberg-equilibrium',
  sections: [
    {
      id: 'hw2-intro',
      type: 'text' as const,
      content: `
## The Five Conditions for Hardy-Weinberg Equilibrium

**Part 2 of 7**

For a population to remain in Hardy-Weinberg equilibrium, **five conditions** must be met simultaneously. If any one condition is violated, allele frequencies can change — meaning evolution occurs.

These five conditions are tested heavily on the AP Biology exam. You need to know what each one means and what happens when it is violated.

### Overview of the Five Conditions

| # | Condition | What it means |
|---|-----------|---------------|
| 1 | No mutation | No new alleles are created or changed |
| 2 | Random mating | Mate choice is not based on genotype/phenotype |
| 3 | No natural selection | All genotypes have equal fitness |
| 4 | Large population size | No genetic drift |
| 5 | No gene flow (migration) | No alleles entering or leaving the population |
      `
    },
    {
      id: 'hw2-condition1-2',
      type: 'text' as const,
      content: `
### Condition 1: No Mutation

**Mutation** introduces new alleles into the gene pool or changes existing alleles. If mutations occur, allele frequencies shift.

- In reality, mutations happen constantly — but at very low rates (~$10^{-6}$ per gene per generation)
- By itself, mutation pressure changes allele frequencies very slowly
- Mutation is the **ultimate source** of all genetic variation

**Violation example:** A gene for coat color mutates from allele A to allele A* in several individuals, introducing a new allele into the population.

---

### Condition 2: Random Mating

Individuals must mate **without regard to genotype or phenotype**. Non-random mating changes genotype frequencies (though not allele frequencies directly).

Types of non-random mating:
- **Assortative mating**: Like mates with like (e.g., tall with tall)
- **Disassortative mating**: Unlike mates with unlike
- **Sexual selection**: Preference for certain traits (peacock tails, birdsong)
- **Inbreeding**: Mating between relatives — increases homozygosity

> ⚠️ **AP Exam Tip:** Non-random mating changes genotype frequencies but does NOT by itself change allele frequencies. However, it can expose recessive alleles to selection by increasing homozygosity.
      `
    },
    {
      id: 'hw2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Conditions 1 & 2** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which type of non-random mating increases the proportion of homozygotes in a population?',
            options: ['Disassortative mating', 'Inbreeding', 'Random mating', 'Gene flow'],
            correctAnswer: 1,
            explanation: 'Inbreeding (mating between relatives) increases homozygosity because related individuals are more likely to carry the same alleles. This shifts genotype frequencies away from HW expectations by increasing homozygotes and decreasing heterozygotes.'
          },
          {
            question: 'Mutation violates Hardy-Weinberg equilibrium because it:',
            options: [
              'Removes individuals from the population',
              'Introduces new alleles or changes existing ones',
              'Causes individuals to mate non-randomly',
              'Reduces population size dramatically'
            ],
            correctAnswer: 1,
            explanation: 'Mutation creates new alleles or converts one allele to another, which changes allele frequencies in the gene pool — violating the "no mutation" condition.'
          }
        ]
      }
    },
    {
      id: 'hw2-condition3-4',
      type: 'text' as const,
      content: `
### Condition 3: No Natural Selection

All genotypes must have **equal fitness** — equal survival and reproductive success. If one genotype produces more offspring, its alleles increase in frequency.

- **Directional selection**: One extreme phenotype is favored → allele frequency shifts in one direction
- **Stabilizing selection**: Intermediate phenotype favored → reduces variation
- **Disruptive selection**: Both extremes favored → can lead to speciation

**Example:** Sickle cell anemia — in malaria-prone regions, heterozygotes (HbA/HbS) have higher fitness than either homozygote. This is **balancing selection** that maintains both alleles.

---

### Condition 4: Large Population Size (No Genetic Drift)

In small populations, allele frequencies can change **by random chance alone** — this is **genetic drift**.

- Drift is most powerful in **small populations**
- It can cause alleles to be **fixed** (frequency = 1) or **lost** (frequency = 0)
- Drift is **random** — it does not lead to adaptation

Two special cases:
- **Bottleneck effect**: Population dramatically reduced (disease, disaster) → surviving alleles are a random sample
- **Founder effect**: Small group colonizes new area → starts with non-representative allele frequencies
      `
    },
    {
      id: 'hw2-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks: Conditions 3 & 4** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'When all genotypes have equal fitness, there is no ___', options: ['mutation', 'natural selection', 'gene flow', 'genetic drift'] },
          { label: 'Random changes in allele frequency due to small population size are called ___', options: ['natural selection', 'mutation', 'genetic drift', 'gene flow'] },
          { label: 'A volcanic eruption kills 95% of a population, leaving a random subset of survivors. This is the ___', options: ['founder effect', 'bottleneck effect', 'gene flow', 'natural selection'] }
        ],
        correctAnswers: ['natural selection', 'genetic drift', 'bottleneck effect'],
        hint1: 'Selection requires differences in fitness among genotypes.',
        hint2: 'Drift is the random fluctuation of allele frequencies — strongest in small populations.',
        hint3: 'A bottleneck dramatically reduces population size, leaving a random genetic sample.',
        explanation: 'No natural selection means all genotypes survive and reproduce equally. Genetic drift is random allele frequency change in small populations. The bottleneck effect occurs when a population is drastically reduced, randomly altering allele frequencies.'
      }
    },
    {
      id: 'hw2-condition5',
      type: 'text' as const,
      content: `
### Condition 5: No Gene Flow (Migration)

**Gene flow** is the movement of alleles between populations through migration of individuals or gametes (e.g., pollen).

- Gene flow **homogenizes** allele frequencies between populations — makes them more similar
- It can introduce **new alleles** to a population
- It counteracts the effects of drift and selection in local populations

**Example:** Wind carries pollen from a mainland plant population (where allele A has frequency 0.8) to an island population (where allele A has frequency 0.3). Over time, the island population's frequency of A increases.

---

### Summary: The Five Conditions

| Condition violated | Evolutionary mechanism | Effect on allele frequencies |
|-------------------|----------------------|------------------------------|
| Mutation occurs | Mutation | New alleles introduced (slow change) |
| Non-random mating | Sexual selection / inbreeding | Genotype frequencies shift; can expose alleles to selection |
| Unequal fitness | Natural selection | Adaptive alleles increase in frequency |
| Small population | Genetic drift | Random frequency changes; alleles can be lost or fixed |
| Migration occurs | Gene flow | Allele frequencies shift toward source population |
      `
    },
    {
      id: 'hw2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: All Five Conditions** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which evolutionary mechanism tends to make two separate populations more genetically similar over time?',
            options: ['Genetic drift', 'Natural selection', 'Gene flow', 'Mutation'],
            correctAnswer: 2,
            explanation: 'Gene flow (migration) moves alleles between populations, which tends to homogenize allele frequencies — making the populations more genetically similar.'
          },
          {
            question: 'A small group of birds is blown to a remote island by a storm and establishes a new population. Which HW condition is violated?',
            options: [
              'No mutation',
              'Random mating',
              'No natural selection',
              'Large population size'
            ],
            correctAnswer: 3,
            explanation: 'This is the founder effect — a type of genetic drift. The small founding population likely has allele frequencies that differ from the source population purely by chance. The "large population size" condition is violated.'
          }
        ]
      }
    }
  ]
}
