export const bioBiodiversityConservationPart4Data = {
  topicSlug: 'biodiversity-conservation',
  sections: [
    {
      id: 'bco4-intro',
      type: 'text' as const,
      content: `# Population Ecology & Conservation

**Part 4 of 7 — Biodiversity & Conservation**

Conservation biology applies principles of **population ecology** and **genetics** to prevent extinctions. Small, isolated populations face unique threats — even if habitat is preserved, the population itself may spiral toward extinction through genetic and demographic processes. Understanding these processes is critical for designing effective recovery plans.
`
    },
    {
      id: 'bco4-mvp',
      type: 'text' as const,
      content: `## Minimum Viable Population (MVP)

The **minimum viable population** is the smallest population size that has a high probability (usually ≥95%) of persisting for a specified time period (often 100–1,000 years).

### Factors That Determine MVP

1. **Demographic stochasticity** — random variation in birth and death rates. In small populations, a run of bad luck (e.g., several females producing only male offspring) can drive the population to extinction.

2. **Environmental stochasticity** — unpredictable events (drought, storms, disease outbreaks) that affect all individuals. Small populations are less likely to contain individuals that survive extreme events.

3. **Genetic stochasticity** — genetic drift removes alleles faster in small populations; inbreeding becomes more likely.

4. **Catastrophes** — fires, floods, epidemics can eliminate a large fraction of a small population in a single event.

### The 50/500 Rule (A General Guideline)
- **50** — minimum effective population size ($N_e$) to avoid severe inbreeding depression in the short term.
- **500** — minimum $N_e$ to maintain enough genetic variation for long-term evolutionary adaptation.

> The actual MVP varies enormously by species — large-bodied species with low reproductive rates generally need much larger populations than small, rapidly reproducing species.
`
    },
    {
      id: 'bco4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Small Population Vulnerability** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A population of 30 endangered frogs lives in one isolated pond. A drought dries the pond for two years, killing 25 frogs. The 5 survivors eventually breed and the population recovers to 30. Which of the following threats is MOST likely to persist even after population numbers recover?',
            options: [
              'Overexploitation by predators',
              'Increased competition for resources',
              'Reduced genetic diversity due to a genetic bottleneck',
              'Increased species richness in the pond'
            ],
            correctAnswer: 2,
            explanation: 'The drought caused a genetic bottleneck — only 5 individuals survived to reproduce. Even though numbers recovered to 30, the population now carries only the genetic variation present in those 5 survivors. This reduced genetic diversity persists for many generations and increases vulnerability to disease and environmental change.'
          },
          {
            question: 'The "50/500 rule" in conservation genetics suggests that an effective population size of at least 500 is needed to:',
            options: [
              'Prevent all demographic stochasticity',
              'Maintain sufficient genetic variation for long-term adaptation',
              'Guarantee the population will never go extinct',
              'Ensure Hardy-Weinberg equilibrium is maintained'
            ],
            correctAnswer: 1,
            explanation: 'The "500" part of the rule indicates the minimum effective population size needed to retain enough genetic variation for long-term evolutionary potential. The "50" addresses short-term inbreeding avoidance. Neither guarantees survival — they are guidelines, not absolutes.'
          }
        ]
      }
    },
    {
      id: 'bco4-genetics',
      type: 'text' as const,
      content: `## Genetic Bottleneck, Inbreeding Depression & Effective Population Size

### Genetic Bottleneck
A **genetic bottleneck** occurs when a population is drastically reduced in size, then recovers. The surviving population has only a subset of the original genetic variation.

- **Founder effect** — a special type of bottleneck where a few individuals colonize a new habitat.
- Bottlenecks can eliminate rare alleles entirely, including potentially beneficial ones.
- Example: Northern elephant seals were hunted to ~20 individuals by the 1890s. The current population (~175,000) has nearly zero genetic variation at some loci.

### Inbreeding Depression
When related individuals mate, offspring are more likely to be **homozygous for deleterious recessive alleles**:

- Reduced fitness: lower survival, fertility, and disease resistance.
- **Florida panther** — inbreeding caused cryptorchidism (undescended testes), heart defects, and kinked tails before genetic rescue with Texas puma introductions.
- **Isle Royale wolves** — inbreeding led to spinal deformities; the population crashed from 50 to 2 individuals.

### Effective Population Size ($N_e$)
The **effective population size** is the number of individuals that actually contribute genes to the next generation — always smaller than the census size ($N$).

$$N_e = \\frac{4 N_f N_m}{N_f + N_m}$$

where $N_f$ = number of breeding females and $N_m$ = number of breeding males.

**Why $N_e < N$:**
- Unequal sex ratios (e.g., one bull elk mates with 20 cows → $N_e$ is much lower than $N$).
- Variation in reproductive success (some individuals produce many offspring, others none).
- Fluctuating population sizes (bottleneck years reduce $N_e$ disproportionately).

**Example:** A population of 500 elephants with 100 breeding females and 20 breeding males:

$$N_e = \\frac{4 \\times 100 \\times 20}{100 + 20} = \\frac{8000}{120} = 66.7$$

Despite 500 total elephants, the effective population size is only ~67!
`
    },
    {
      id: 'bco4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Population Genetics & Conservation** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'A drastic reduction in population size followed by recovery is called a genetic ___.',
            options: ['drift', 'bottleneck', 'mutation', 'recombination']
          },
          {
            label: 'Mating between close relatives increases homozygosity for deleterious recessive alleles, causing ___.',
            options: ['genetic drift', 'gene flow', 'inbreeding depression', 'disruptive selection']
          },
          {
            label: 'The effective population size ($N_e$) is typically ___ the census population size ($N$).',
            options: ['larger than', 'equal to', 'smaller than', 'unrelated to']
          },
          {
            label: 'According to the 50/500 rule, a minimum $N_e$ of ___ is needed to avoid severe short-term inbreeding.',
            options: ['10', '50', '100', '500']
          }
        ],
        correctAnswers: ['bottleneck', 'inbreeding depression', 'smaller than', '50'],
        hint1: 'Think of a narrow bottle neck — only some of the contents (alleles) pass through.',
        hint2: 'Inbreeding increases the chance of expressing harmful recessive traits.',
        hint3: 'Not all individuals of census size breed equally, so Ne < N.',
        explanation: 'A genetic bottleneck drastically reduces allelic diversity even after population numbers recover. Inbreeding depression is the reduced fitness from increased homozygosity of deleterious recessive alleles. Effective population size (Ne) accounts for unequal sex ratios, variance in reproductive success, and fluctuating sizes, so it is virtually always smaller than census size. The 50/500 rule sets Ne ≥ 50 for short-term inbreeding avoidance and Ne ≥ 500 for long-term adaptive potential.'
      }
    },
    {
      id: 'bco4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary — Population Ecology & Conservation

### Key Takeaways
1. **Minimum viable population (MVP)** integrates demographic, environmental, genetic, and catastrophic risk factors.
2. **Genetic bottlenecks** reduce allelic diversity; effects persist long after population numbers recover.
3. **Inbreeding depression** exposes deleterious recessive alleles, reducing fitness.
4. **Effective population size ($N_e$)** is always smaller than census size due to unequal sex ratios and reproductive skew.
5. The **50/500 rule** provides guidelines for minimum $N_e$ to avoid inbreeding (50) and maintain adaptive potential (500).
6. **Extinction vortex** — small populations can enter a positive feedback loop: small population → inbreeding → reduced fitness → fewer offspring → even smaller population.

### AP Exam Connection
- Calculate $N_e$ from breeding sex ratios.
- Explain why a population that recovers numerically may still be genetically vulnerable.
- Connect genetic drift in small populations to departure from Hardy-Weinberg equilibrium.
- Distinguish demographic stochasticity from environmental stochasticity.

**Next up:** Part 5 — Conservation Strategies
`
    }
  ]
};
