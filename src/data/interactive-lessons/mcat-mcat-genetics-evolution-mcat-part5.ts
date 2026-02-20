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
| **Mutation** | New alleles introduced | Random, raw material |

### Types of Natural Selection

| Type | Effect on Distribution | Example |
|------|----------------------|---------|
| **Stabilizing** | Narrows distribution (favors average) | Birth weight in humans |
| **Directional** | Shifts mean one way | Antibiotic resistance |
| **Disruptive** | Favors extremes, disfavors average | Beak size in finches |

### Genetic Drift

- **Bottleneck effect**: Disaster reduces population → random alleles lost
- **Founder effect**: Small group colonizes new area → reduced genetic diversity
- Both are RANDOM (unlike natural selection, which is adaptive)

### Fitness

$$\\text{Fitness} = \\text{Reproductive success (# of viable offspring)}$$

It's NOT about being strongest — it's about who reproduces most successfully.`
    },
    {
      id: 'ge5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Evolution** 🎯',
      exercise: {
        questions: [
          {
            question: 'After a hurricane destroys 90% of a lizard population, the surviving 10% have different allele frequencies than the original population. This is:',
            options: ['Bottleneck effect (genetic drift) — random survivors, not selected by fitness', 'Natural selection', 'Gene flow', 'Directional selection'],
            correctAnswer: 0,
            explanation: 'A bottleneck drastically reduces population size randomly. Survivors aren\'t necessarily more fit — they were just lucky. Their allele frequencies may differ from the original population purely by chance.'
          }
        ]
      }
    },
    {
      id: 'ge5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Natural selection is adaptive; genetic drift is random
- Stabilizing: favors average. Directional: shifts mean. Disruptive: favors extremes.
- Bottleneck and founder effects reduce genetic diversity randomly
- Fitness = reproductive success, not strength or survival alone`
    }
  ]
};
