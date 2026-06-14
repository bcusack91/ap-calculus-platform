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

$N = N_0 \\times 2^n$

Where $N$ = final number, $N_0$ = initial number, $n$ = number of generations. The **generation (doubling) time** is the time required for one division.

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
| Facultative anaerobe | Either way (prefers O$_2$) | *E. coli* |
| Aerotolerant anaerobe | No, but tolerates O$_2$ | *Lactobacillus* |`
    },
    {
      id: 'mi2-worked',
      type: 'text' as const,
      content: `### Worked Example — Calculating Growth with Binary Fission

**Scenario:** A culture starts with $5 \\times 10^3$ *E. coli* cells. The generation (doubling) time is 20 minutes. Assuming uninterrupted exponential growth, how many cells are present after 2 hours?

**Step 1 — Find the number of generations.** Total time = 2 hours = 120 minutes. With a 20-minute doubling time:

$n = \\frac{120 \\text{ min}}{20 \\text{ min/generation}} = 6 \\text{ generations}$

**Step 2 — Apply the binary-fission formula.** Using $N = N_0 \\times 2^n$:

$N = (5 \\times 10^3) \\times 2^6 = (5 \\times 10^3) \\times 64 = 3.2 \\times 10^5 \\text{ cells}$

**Step 3 — Sanity check the model.** This assumes the **log phase** persists the entire time. In reality, nutrients deplete and waste accumulates, so the culture eventually enters stationary phase and the true count is lower. The MCAT rewards recognizing that pure exponential growth is an idealization.

> **MCAT takeaway:** Exponential growth uses $N = N_0 \\times 2^n$, where $n$ = (elapsed time) / (generation time). Real cultures only follow this during the log phase. Antibiotics that target active division work best precisely here.`
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
          },
          {
            question: `A culture of 1,000 cells with a 30-minute doubling time grows exponentially for 2 hours. Approximately how many cells result?`,
            options: [`16,000`, `4,000`, `8,000`, `2,000`],
            correctAnswer: 0,
            explanation: `2 hours = 120 minutes; with a 30-minute doubling time, $n = 4$ generations. $N = 1000 \\times 2^4 = 1000 \\times 16 = 16{,}000$ cells.`
          },
          {
            question: `During the stationary phase of the growth curve, the number of viable cells stays roughly constant because:`,
            options: [`The rate of cell division equals the rate of cell death`, `All cells have stopped metabolizing entirely`, `Binary fission has become impossible`, `Oxygen has been completely consumed`],
            correctAnswer: 0,
            explanation: `In stationary phase, nutrient depletion and waste accumulation slow division until it just balances the death rate, so the net population plateaus. Cells are still alive and metabolizing, just not net-growing.`
          },
          {
            question: `An organism that uses light for energy and CO$_2$ as its carbon source is best classified as a:`,
            options: [`Photoautotroph`, `Chemoautotroph`, `Photoheterotroph`, `Chemoheterotroph`],
            correctAnswer: 0,
            explanation: `"Photo-" = light energy; "-autotroph" = fixes CO$_2$ for carbon. Cyanobacteria are classic photoautotrophs. A photoheterotroph would use light for energy but organic molecules for carbon.`
          },
          {
            question: `A bacterium is killed by exposure to oxygen because it lacks superoxide dismutase and catalase. It is most likely a(n):`,
            options: [`Obligate anaerobe`, `Obligate aerobe`, `Facultative anaerobe`, `Aerotolerant anaerobe`],
            correctAnswer: 0,
            explanation: `Obligate anaerobes (e.g., Clostridium) lack the enzymes to detoxify reactive oxygen species (superoxide, peroxide), so O$_2$ is lethal. Aerotolerant anaerobes have some of these enzymes and merely tolerate O$_2$ without using it.`
          },
          {
            question: `Which statement about the lag phase is correct?`,
            options: [`Cells are metabolically active and synthesizing enzymes but not yet dividing rapidly`, `Cells are dying faster than they divide`, `Cells are dividing at their maximum rate`, `No cellular activity occurs`],
            correctAnswer: 0,
            explanation: `In lag phase, the population size is roughly constant, but cells are far from dormant: they synthesize ribosomes, enzymes, and metabolites needed to adapt to the new medium before entering rapid (log-phase) division.`
          }
        ]
      }
    },
    {
      id: 'mi2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Growth curve: Lag → Log → Stationary → Death
- Binary fission: $N = N_0 \\times 2^n$, where $n$ = elapsed time / generation time
- Obligate aerobes need O$_2$; obligate anaerobes are killed by O$_2$ (they lack detox enzymes)
- Metabolic classes combine an energy source (photo/chemo) and a carbon source (auto/hetero)
- Antibiotics are most effective during log phase (active division)`
    }
  ]
};
