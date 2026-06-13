export const bioNatSelectionPart7Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'nsp7-intro',
      type: 'text' as const,
      content: `
## AP Review — Natural Selection and Adaptation

**Part 7 of 7**

This review pulls the unit together and inoculates you against the most common AP traps. Use the synthesis map to see how every concept connects, then drill the traps and finish with AP-style application questions (including a Hardy-Weinberg computation).

### Big-picture synthesis map

| Level | Concept | Key relationship |
|-------|---------|------------------|
| **Raw material** | Mutation (new alleles), recombination + gene flow (reshuffle/import) | Selection cannot act without variation |
| **Forces** | Natural selection, genetic drift, gene flow, mutation, non-random mating | Each is a Hardy-Weinberg violation |
| **Selection modes** | Directional, stabilizing, disruptive; plus sexual & balancing | Reshape the phenotype distribution |
| **Outcome** | Adaptation; descent with modification; speciation | Population-level change in allele frequencies |
| **Measurement** | Hardy-Weinberg ($p+q=1$; $p^2+2pq+q^2=1$); chi-square | Null model to detect & quantify evolution |

> **One-sentence summary of the unit:** Heritable variation (ultimately from mutation) is acted on by selection and other forces to change a **population's** allele frequencies over generations, producing adaptation — and Hardy-Weinberg is the no-evolution baseline we measure that change against.
      `
    },
    {
      id: 'nsp7-traps',
      type: 'text' as const,
      content: `
### The AP Trap Table — Misconceptions That Lose Points

| # | Trap (wrong) | Correct framing |
|---|--------------|-----------------|
| 1 | "Individuals evolve" | **Populations** evolve; individuals are born and die with fixed genotypes |
| 2 | "Fitness = strength/size/longevity" | Fitness = **relative reproductive success** (surviving offspring contributed) |
| 3 | "Selection acts on genotypes/alleles" | Selection acts on **phenotypes**; evolution is *tracked* via allele frequencies |
| 4 | "Organisms evolve traits *in order to* meet a need" | Evolution has **no goal/foresight**; variation arises first, then selection acts |
| 5 | "Antibiotics/environment *cause* the needed mutation" | Mutations are **random** w.r.t. need; the environment **selects** existing variants |
| 6 | "$q$ = recessive phenotype frequency" | Recessive phenotype frequency = **$q^2$**; take $q = \\sqrt{q^2}$ |
| 7 | "Drift is adaptive / matters in big populations" | Drift is **random** and strongest in **small** populations |
| 8 | "Non-random mating changes allele frequencies" | It changes **genotype** frequencies (more homozygotes); allele frequencies stay constant |
| 9 | "Hardy-Weinberg says real populations are static" | It is a **null model** for comparison, not a claim about reality |
| 10 | "Acquired traits are inherited" (Lamarck) | Only **heritable (genetic)** variation is passed on |

**The two distinctions students confuse most:**

- **Allele frequency vs. genotype frequency.** $p$ and $q$ are *allele* frequencies; $p^2$, $2pq$, $q^2$ are *genotype* frequencies. Selection and drift change *allele* frequencies; non-random mating changes only *genotype* frequencies.
- **Phenotype vs. genotype as the target.** Selection "sees" only the phenotype (what survives and reproduces), but evolution is the resulting change in the underlying genetic makeup.

> **Exam habit:** When you read an answer choice, check it against this table. Choices that say an individual "evolved," that equate fitness with strength, or that describe evolution as goal-directed are almost always distractors.
      `
    },
    {
      id: 'nsp7-keywords',
      type: 'text' as const,
      content: `
### Rapid Diagnosis — Match the Scenario to the Mechanism

On the AP exam you must read a short scenario and instantly name the right mechanism. Use these keyword triggers:

| If the scenario says... | Name this mechanism | Why |
|--------------------------|---------------------|-----|
| "Mean shifted toward one extreme" | **Directional selection** | One extreme favored |
| "Variance dropped; extremes selected against; intermediate favored" | **Stabilizing selection** | Middle favored |
| "Distribution became bimodal; both extremes favored" | **Disruptive selection** | Both extremes favored |
| "Trait lowers survival but raises mating success" | **Sexual selection** | Mating, not survival, drives it |
| "Small population; allele frequency changed by chance; no fitness difference" | **Genetic drift** | Random, small-N |
| "Disaster crashed the population; diversity dropped" | **Bottleneck** (drift) | Catastrophic size reduction |
| "A few colonists founded an isolated population" | **Founder effect** (drift) | Unrepresentative sample |
| "Migrants moved alleles between populations; populations became more similar" | **Gene flow** | Allele migration |
| "Inbreeding/assortative mating; more homozygotes, same p and q" | **Non-random mating** | Genotype-only change |
| "Two species reciprocally shaped each other (predator–prey, plant–pollinator)" | **Coevolution** | Mutual selective pressure |
| "Unrelated species independently evolved similar features" | **Convergent evolution** (analogous) | Same function, different origin |
| "Related species diverged from a common ancestor" | **Divergent evolution** (homologous) | Same origin, different function |

**Quantitative trigger phrases:**

- "____% show the recessive phenotype" → that percent **= $q^2$**; take $q = \\sqrt{q^2}$, then $p = 1 - q$.
- "How many carriers?" → **$2pq \\times N$** (heterozygotes only).
- "Is it in equilibrium?" → compute actual $p, q$ by **allele-counting**, predict $p^2, 2pq, q^2$ counts, compare (chi-square if needed).
- "Recessive homozygote is lethal; find next-gen $q$" → **$q' = \\frac{q}{1+q}$**.

> **FRQ tip:** When a free-response question asks you to "explain how the population evolved," structure your answer as: (1) source of variation → (2) the specific force acting → (3) differential reproduction / chance change → (4) resulting shift in **allele frequencies** across **generations**. Name the population, never the individual, as the unit that evolves.
      `
    },
    {
      id: 'nsp7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### AP Application — Conceptual Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'A population of moths is exposed to a new pesticide. Within a few generations, most of the population is resistant. Which sequence of statements is the MOST accurate evolutionary explanation?',
            options: [
              'The pesticide caused the moths to develop resistance mutations, which they passed to offspring',
              'Resistance alleles already existed by random mutation; the pesticide selectively killed susceptible moths, so resistant individuals reproduced more and the resistance allele frequency rose in the population',
              'Individual moths gradually became resistant during their lifetimes and transmitted this acquired resistance',
              'The moths evolved resistance in order to ensure their species would not go extinct',
              'Genetic drift randomly increased the resistance allele because the population was large'
            ],
            correctAnswer: 1,
            explanation: 'Resistance variation PRE-EXISTS by random mutation; the pesticide is the selective agent that favors those variants, raising the resistance allele frequency in the POPULATION — the textbook natural-selection narrative. Option A (pesticide "caused" the mutation) and option C (acquired during lifetime) are Lamarckian traps; option D is teleological ("in order to"); option E misattributes a directional, fitness-based change to random drift and wrongly says drift is strong in large populations.'
          },
          {
            question: 'Which of the following correctly pairs an evolutionary force with its effect on a population\'s genetics?',
            options: [
              'Non-random mating (inbreeding) → decreases the frequency of the recessive allele q',
              'Genetic drift → predictably increases the frequency of the most beneficial allele',
              'Non-random mating (inbreeding) → increases homozygote frequencies while leaving allele frequencies p and q unchanged',
              'Gene flow → makes two interbreeding populations genetically more different from each other',
              'Mutation → rapidly shifts allele frequencies within a single generation'
            ],
            correctAnswer: 2,
            explanation: 'Inbreeding (non-random mating) increases HOMOZYGOTE frequencies and decreases heterozygotes WITHOUT changing the underlying allele frequencies p and q — the correct pairing. Option B is the trap: drift is RANDOM, not predictable, and does not specifically favor beneficial alleles. Option D reverses gene flow\'s effect (it makes populations MORE similar), and option E overstates mutation, which is far too slow to shift allele frequencies in one generation.'
          }
        ]
      }
    },
    {
      id: 'nsp7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### AP Application — Quantitative Hardy-Weinberg
      `,
      exercise: {
        questions: [
          {
            question: 'In a population of 1000 rabbits in Hardy-Weinberg equilibrium, 160 rabbits have white fur (recessive, bb). Approximately how many rabbits are expected to be HETEROZYGOUS (Bb) carriers of the white allele?',
            options: [
              '40',
              '160',
              '360',
              '480'
            ],
            correctAnswer: 3,
            explanation: 'q² = 160/1000 = 0.16, so q = √0.16 = 0.4 and p = 0.6. Heterozygotes = 2pq = 2(0.6)(0.4) = 0.48; count = 0.48 × 1000 = 480. Option C (360) is the trap: that is p² × 1000 = 0.36 × 1000 = 360, the number of HOMOZYGOUS DOMINANT (BB) rabbits, not heterozygotes. Option B (160) is simply the given bb count (q² × N). Use 2pq for carriers.'
          },
          {
            question: 'A peacock population shows extreme male tail elaboration that lowers male survival but greatly increases mating success. A small subgroup of 8 peacocks then colonizes an isolated island, and by chance the island population has a much higher frequency of the long-tail allele than the mainland, with no difference in survival or mating involved in the change. Which two processes are illustrated by the tail elaboration and by the island shift, respectively?',
            options: [
              'Natural (survival) selection; gene flow',
              'Sexual selection; founder effect (genetic drift)',
              'Stabilizing selection; natural selection',
              'Sexual selection; gene flow',
              'Genetic drift; sexual selection'
            ],
            correctAnswer: 1,
            explanation: 'The tail trait spreads because it raises MATING success despite a survival cost — that is SEXUAL SELECTION. The island shift happens by CHANCE in a small founding group with no fitness difference — that is the FOUNDER EFFECT, a form of genetic drift. Option D is the trap: the island change is NOT gene flow (no ongoing migration of alleles between populations is described) but a one-time chance sampling of founders, which is drift, not gene flow.'
          },
          {
            question: 'A population is found to have genotype frequencies of exactly p² , 2pq , and q² that remain unchanged across many generations. A student concludes, "This proves the population can never evolve." What is the BEST evaluation of this conclusion?',
            options: [
              'Correct, because matching Hardy-Weinberg proportions guarantees the population is permanently non-evolving',
              'Incorrect, because Hardy-Weinberg equilibrium only indicates no detectable change at this locus under current conditions; it is a null model, and any of the five forces could act in the future',
              'Correct, because allele frequencies in equilibrium are fixed by the equation p² + 2pq + q² = 1',
              'Incorrect, because a population in equilibrium must have equal allele frequencies'
            ],
            correctAnswer: 1,
            explanation: 'Hardy-Weinberg equilibrium is a NULL MODEL: it indicates no current detectable evolution at this locus, but it does not prevent future change if selection, drift, gene flow, mutation, or non-random mating begins to act. Option C is the trap: the equation p² + 2pq + q² = 1 is just a mathematical identity that always sums to 1 for any p and q — it does not "fix" or guarantee anything about whether the population will evolve.'
          }
        ]
      }
    }
  ]
};
