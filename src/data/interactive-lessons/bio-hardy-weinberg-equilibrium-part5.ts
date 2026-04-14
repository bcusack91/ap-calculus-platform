export const bioHardyWeinbergEquilibriumPart5Data = {
  topicSlug: 'hardy-weinberg-equilibrium',
  sections: [
    {
      id: 'hw5-intro',
      type: 'text' as const,
      content: `
## Violations of Hardy-Weinberg: Microevolution in Action

**Part 5 of 7**

When Hardy-Weinberg conditions are violated, **allele frequencies change** — which is the definition of microevolution. Let's examine each major evolutionary mechanism and how it shifts allele frequencies away from equilibrium.

### The Four Evolutionary Forces

| Force | Directional? | Predictable? | Creates adaptation? |
|-------|-------------|-------------|-------------------|
| Natural selection | Yes | Yes | Yes |
| Genetic drift | No (random) | No | No |
| Gene flow | Depends | Partially | Sometimes |
| Mutation | No (random) | No | Provides raw material |
      `
    },
    {
      id: 'hw5-drift',
      type: 'text' as const,
      content: `
### Genetic Drift: Random Allele Frequency Changes

Genetic drift is the change in allele frequencies due to **random sampling** in small populations. Think of it like flipping a coin — with 1,000 flips, you expect close to 50% heads. With 10 flips, you might easily get 70% heads by chance.

#### Bottleneck Effect

A population is drastically reduced in size by a **catastrophic event** (earthquake, flood, disease epidemic).

**Example:** Northern elephant seals were hunted to ~20 individuals in the 1890s. Today, the population has recovered to over 100,000, but genetic diversity is extremely low — nearly all individuals are genetically identical at many loci.

- The surviving 20 seals had only a subset of the original alleles
- Many alleles were permanently lost
- The current population's allele frequencies reflect those **random survivors**, not selection

#### Founder Effect

A small number of individuals **colonize a new area**, carrying only a sample of the original population's alleles.

**Example:** Ellis-van Creveld syndrome (polydactyly, short stature, heart defects) occurs at unusually high frequency in the Old Order Amish community in Lancaster, PA. The community was founded by ~200 immigrants, and by chance, some carried the recessive allele. Subsequent isolation maintained the high frequency.

> 🔑 **Key distinction:** Both bottleneck and founder effects are types of genetic drift. The difference is the cause — bottleneck reduces an existing population, while founder effect starts a new one from a small sample.
      `
    },
    {
      id: 'hw5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Genetic Drift** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Genetic drift has the greatest effect on allele frequencies in:',
            options: [
              'Large populations with high genetic diversity',
              'Small populations regardless of selection pressure',
              'Populations undergoing strong directional selection',
              'Populations with high gene flow'
            ],
            correctAnswer: 1,
            explanation: 'Drift is most powerful in small populations because random sampling effects are magnified. In large populations, random fluctuations average out and have little impact on overall allele frequencies.'
          },
          {
            question: 'After a bottleneck event, the surviving population typically shows:',
            options: [
              'Increased genetic diversity',
              'Allele frequencies identical to the original population',
              'Reduced genetic diversity and altered allele frequencies',
              'Higher fitness due to selection for survivors'
            ],
            correctAnswer: 2,
            explanation: 'A bottleneck randomly eliminates most of the population, reducing genetic diversity. The survivors\' allele frequencies differ from the original population by chance, not because of selection for fitness.'
          }
        ]
      }
    },
    {
      id: 'hw5-selection',
      type: 'text' as const,
      content: `
### Natural Selection: Non-Random Allele Frequency Change

Unlike drift, natural selection is **directional** and **adaptive** — it increases the frequency of alleles that improve fitness in a given environment.

#### Directional Selection

One phenotypic extreme is favored, shifting the allele frequency in one direction.

**Example:** Antibiotic resistance in bacteria. When exposed to antibiotics, bacteria with resistance alleles survive and reproduce. The frequency of resistance alleles increases rapidly.

$$\\text{Before antibiotic: } q_{\\text{resistant}} = 0.01$$
$$\\text{After 10 generations: } q_{\\text{resistant}} = 0.85$$

#### Stabilizing Selection

The **intermediate** phenotype is favored; extremes are selected against.

**Example:** Human birth weight — babies that are too small or too large have higher mortality. Average-sized babies have the best survival rate.

#### Disruptive Selection

**Both extremes** are favored over the intermediate.

**Example:** African seedcracker finches — birds with very large or very small beaks can crack their preferred seed types efficiently, but intermediate-billed birds are less efficient at either.

#### Balancing Selection

**Multiple alleles** are maintained because heterozygotes have higher fitness.

**Example:** Sickle cell trait — in malaria regions, $HbA/HbS$ heterozygotes resist malaria better than $HbA/HbA$ and survive better than $HbS/HbS$.
      `
    },
    {
      id: 'hw5-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Match the Scenario** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'A hurricane wipes out 99% of a lizard population on an island → ___', options: ['Natural selection', 'Bottleneck effect', 'Founder effect', 'Gene flow'] },
          { label: 'Darker-colored mice survive better on dark lava rock → ___', options: ['Genetic drift', 'Directional selection', 'Stabilizing selection', 'Founder effect'] },
          { label: 'Birds carrying seeds colonize a newly formed volcanic island → ___', options: ['Bottleneck effect', 'Founder effect', 'Balancing selection', 'Mutation'] },
          { label: 'Pollen carried by wind between two flower populations → ___', options: ['Genetic drift', 'Mutation', 'Gene flow', 'Disruptive selection'] }
        ],
        correctAnswers: ['Bottleneck effect', 'Directional selection', 'Founder effect', 'Gene flow'],
        hint1: 'A catastrophic event reducing population size is a bottleneck.',
        hint2: 'One phenotype surviving better than others is directional selection.',
        hint3: 'A small group colonizing new territory is the founder effect.',
        explanation: 'Hurricane → bottleneck (catastrophic population reduction). Dark mice on dark rock → directional selection (one phenotype favored). Birds colonizing new island → founder effect (small sample starts new population). Pollen between populations → gene flow (alleles moving between populations).'
      }
    },
    {
      id: 'hw5-gene-flow',
      type: 'text' as const,
      content: `
### Gene Flow and Its Interactions

Gene flow is unique because it can either **promote** or **counter** the effects of other evolutionary forces.

#### Gene flow opposes drift
Small isolated populations tend to diverge by drift. Gene flow between them keeps allele frequencies similar.

#### Gene flow opposes selection
If selection favors different alleles in different environments, gene flow can prevent local adaptation by introducing maladaptive alleles.

**Example:** Heavy metal tolerance in plants near mines. Plants on contaminated soil evolve tolerance, but gene flow from nearby non-tolerant populations constantly introduces non-tolerant alleles. Tolerance is maintained only because selection is strong enough to counteract gene flow.

### Comparing the Forces

| Feature | Selection | Drift | Gene flow |
|---------|-----------|-------|-----------|
| Random or directional? | Directional | Random | Directional (toward source) |
| Increases adaptation? | Yes | No | Can oppose local adaptation |
| Strongest when... | Fitness differences are large | Population is small | Migration rate is high |
| Creates new alleles? | No | No | Introduces alleles from other populations |
      `
    },
    {
      id: 'hw5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Evolutionary Forces** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which evolutionary force is the ONLY mechanism that consistently leads to adaptation?',
            options: ['Genetic drift', 'Gene flow', 'Natural selection', 'Mutation'],
            correctAnswer: 2,
            explanation: 'Natural selection is the only evolutionary force that consistently leads to adaptation because it specifically increases the frequency of alleles that improve fitness. Drift is random, gene flow can counteract adaptation, and mutation is random.'
          },
          {
            question: 'In a scenario where two populations of the same species live in very different environments, high gene flow between them would:',
            options: [
              'Accelerate local adaptation in both populations',
              'Prevent local adaptation by mixing alleles between populations',
              'Have no effect on allele frequencies',
              'Cause both populations to go extinct'
            ],
            correctAnswer: 1,
            explanation: 'High gene flow moves alleles between populations, making them more genetically similar. This can prevent local adaptation by introducing alleles that are adaptive in one environment but maladaptive in another.'
          }
        ]
      }
    }
  ]
}
