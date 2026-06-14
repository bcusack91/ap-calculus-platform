export const mcatGeneticsPart5Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge5-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 5 of 7 — Evolution & Natural Selection**

### Mechanisms of Evolution

| Mechanism | Description | Direction |
|-----------|-------------|-----------|
| **Natural selection** | Differential survival/reproduction based on fitness | Adaptive |
| **Genetic drift** | Random changes in allele frequency | Random |
| **Gene flow** | Migration between populations | Reduces differences |
| **Mutation** | Introduces new alleles | Random, raw material |

### Types of Natural Selection

| Type | Effect on Distribution | Example |
|------|----------------------|---------|
| **Stabilizing** | Narrows distribution (favors the average) | Human birth weight |
| **Directional** | Shifts the mean toward one extreme | Antibiotic resistance |
| **Disruptive** | Favors both extremes, disfavors the average | Beak size in finches |

### Genetic Drift

- **Bottleneck effect**: A disaster sharply reduces population size → alleles lost at random
- **Founder effect**: A small group colonizes a new area → reduced, non-representative genetic diversity
- Both are **random** (unlike natural selection, which is adaptive)

### Fitness

$\\text{Fitness} = \\text{reproductive success (number of viable, fertile offspring)}$

Fitness is **not** about being the strongest or living the longest — it is about who leaves the most offspring that themselves reproduce.

### Sexual Selection

- A subset of natural selection acting on traits that improve mating success
- **Intersexual** (mate choice): e.g., peacock tail favored by peahens
- **Intrasexual** (competition): e.g., antler clashes between males
- Can produce sexual dimorphism and traits that lower survival but raise mating success`
    },
    {
      id: 'ge5-worked',
      type: 'text' as const,
      content: `### Worked Example — Identifying the Mode of Selection

**Problem.** A bird species lays eggs whose color ranges from very pale to very dark. Over many generations on a particular island, researchers find that the **average** egg color stays the same, but the **variance** keeps shrinking — pale and dark eggs are picked off by predators, while medium-colored eggs survive best. What mode of selection is operating, and how would a frequency-vs-trait graph change over time?

**Step 1 — Compare to the three modes.**
- *Directional* would shift the mean toward one extreme. The mean here is unchanged, so it is not directional.
- *Disruptive* would favor the two extremes and hollow out the middle. Here the middle is favored, so it is the opposite of disruptive.
- *Stabilizing* favors intermediate phenotypes and selects against both extremes. ✓

**Step 2 — Name it.** This is **stabilizing selection** — the classic example being a trait where intermediate values have the highest fitness.

**Step 3 — Predict the graph.** Plot frequency (y) against egg color (x). The distribution stays centered on the same mean but becomes **taller and narrower** over generations as extreme phenotypes are removed. Variance decreases; the mean is constant.

**Contrast.** If predators instead removed *medium* eggs (because they were easiest to see against a mottled background), you'd get **disruptive selection** — the curve would become bimodal (two peaks), and that mode can promote sympatric divergence and ultimately speciation.`
    },
    {
      id: 'ge5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Evolution** 🎯`,
      exercise: {
        questions: [
          {
            question: `After a hurricane destroys 90% of a lizard population, the surviving 10% have different allele frequencies than the original population. This is:`,
            options: [`Bottleneck effect (genetic drift) — random survivors, not selected by fitness`, `Natural selection`, `Gene flow`, `Directional selection`],
            correctAnswer: 0,
            explanation: `A bottleneck drastically reduces population size at random. Survivors aren't necessarily more fit — they were just lucky. Their allele frequencies may differ from the original population purely by chance.`
          },
          {
            question: `A population of bacteria is exposed to an antibiotic. Over time, the mean resistance of the population steadily increases as resistant cells out-reproduce susceptible ones. This is an example of:`,
            options: [`Directional selection`, `Stabilizing selection`, `Disruptive selection`, `Genetic drift`],
            correctAnswer: 0,
            explanation: `Directional selection shifts the population mean toward one extreme — here, increasing resistance. The antibiotic is a selective pressure favoring one tail of the distribution, so the mean moves in that direction over generations.`
          },
          {
            question: `On the MCAT, "evolutionary fitness" is BEST defined as:`,
            options: [`An organism's relative reproductive success — the number of viable, fertile offspring it contributes to the next generation`, `The physical strength and endurance of an organism`, `The longest lifespan within a population`, `The total body size of an organism`],
            correctAnswer: 0,
            explanation: `Fitness is reproductive success relative to others in the population, NOT strength or longevity. An organism that survives long but never reproduces has zero fitness, while a short-lived organism that leaves many fertile offspring has high fitness.`
          },
          {
            question: `A peacock's elaborate tail makes it more visible to predators yet persists in the population. The best explanation is:`,
            options: [`Intersexual selection — peahens preferentially mate with males bearing larger tails, so the mating advantage outweighs the survival cost`, `Genetic drift in a small population`, `Stabilizing selection on tail size`, `Gene flow from a neighboring population`],
            correctAnswer: 0,
            explanation: `This is sexual selection, specifically intersexual selection (mate choice). The trait reduces survival but increases mating success enough that its net effect on fitness is positive, so the alleles for large tails spread despite the predation cost.`
          },
          {
            question: `Two previously separated populations begin exchanging migrants each generation. Holding everything else constant, the expected effect of this gene flow is to:`,
            options: [`Reduce the genetic differences between the two populations`, `Increase the genetic differences between the two populations`, `Have no effect on allele frequencies`, `Immediately create a new species`],
            correctAnswer: 0,
            explanation: `Gene flow (migration) mixes alleles between populations, making their allele frequencies more similar over time. It is a homogenizing force that opposes the divergence produced by drift or differing selection — and it tends to PREVENT speciation rather than cause it.`
          }
        ]
      }
    },
    {
      id: 'ge5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Natural selection is adaptive; genetic drift is random
- Stabilizing: favors the average (variance shrinks). Directional: shifts the mean. Disruptive: favors extremes (becomes bimodal).
- Bottleneck and founder effects reduce genetic diversity randomly
- Fitness = relative reproductive success, not strength or survival alone
- Sexual selection can favor survival-costly traits when they raise mating success; gene flow homogenizes populations`
    }
  ]
};
