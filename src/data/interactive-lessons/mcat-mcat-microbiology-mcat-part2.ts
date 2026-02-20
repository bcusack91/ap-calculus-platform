export const mcatMicroPart2Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mi2-intro',
      type: 'text' as const,
      content: `# Microbiology for the MCAT

**Part 2 of 7 — Bacterial Growth & Metabolism**

### Bacterial Growth Curve

| Phase | Description |
|-------|-------------|
| **Lag** | Adapting to environment, synthesizing enzymes |
| **Log (Exponential)** | Rapid binary fission, most sensitive to antibiotics |
| **Stationary** | Growth rate = death rate (resources depleted) |
| **Death** | Death rate > growth rate |

### Binary Fission

$$N = N_0 \\times 2^n$$

Where $N$ = final number, $N_0$ = initial number, $n$ = number of generations

### Bacterial Metabolism

| Type | Energy Source | Carbon Source |
|------|-------------|-------------|
| Photoautotroph | Light | CO$_2$ |
| Photoheterotroph | Light | Organic compounds |
| Chemoautotroph | Inorganic chemicals | CO$_2$ |
| Chemoheterotroph | Organic compounds | Organic compounds |

### Oxygen Requirements

| Type | O$_2$ Needed? | Example |
|------|-------------|---------|
| Obligate aerobe | Yes | *M. tuberculosis* |
| Obligate anaerobe | No (O$_2$ is toxic!) | *Clostridium spp.* |
| Facultative anaerobe | Either way (prefers O$_2$) | *E. coli* |`
    },
    {
      id: 'mi2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Bacterial Growth** 🎯`,
      exercise: {
        questions: [
          {
            question: `Antibiotics are most effective during which growth phase?`,
            options: [`Log (exponential) phase — bacteria are actively dividing and most vulnerable`, `Lag phase`, `Stationary phase`, `Death phase`],
            correctAnswer: 0,
            explanation: `During the log phase, bacteria are rapidly dividing. Many antibiotics target processes active during division (cell wall synthesis, DNA replication, translation), making this the most effective time to administer them.`
          }
        ]
      }
    },
    {
      id: 'mi2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Growth curve: Lag → Log → Stationary → Death
- Binary fission: $N = N_0 \\times 2^n$ (exponential growth)
- Obligate aerobes need O$_2$; obligate anaerobes are killed by O$_2$
- Antibiotics most effective during log phase (active division)`
    }
  ]
};
