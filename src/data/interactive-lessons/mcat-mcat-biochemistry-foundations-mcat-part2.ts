export const mcatBiochemPart2Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc2-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 2 of 7 — Enzyme Kinetics (ULTRA HIGH YIELD)**

### Michaelis-Menten Equation

$$v = \\frac{V_{max}[S]}{K_m + [S]}$$

- $K_m$ = Michaelis constant = [S] at which $v = V_{max}/2$
- Low $K_m$ → high affinity (enzyme binds substrate tightly at low [S])
- $V_{max}$ depends on $[E]_{total}$ and $k_{cat}$: $V_{max} = k_{cat}[E]_T$

### Lineweaver-Burk (Double Reciprocal) Plot

$$\\frac{1}{v} = \\frac{K_m}{V_{max}} \\cdot \\frac{1}{[S]} + \\frac{1}{V_{max}}$$

- y-intercept = $1/V_{max}$
- x-intercept = $-1/K_m$
- Slope = $K_m/V_{max}$

### Inhibitor Types

| Type | Effect on $V_{max}$ | Effect on $K_m$ | Overcome by more [S]? |
|------|---------------------|-----------------|----------------------|
| Competitive | No change | Increases (apparent) | Yes |
| Uncompetitive | Decreases | Decreases | No |
| Noncompetitive | Decreases | No change | No |
| Mixed | Decreases | Can increase or decrease | No |`
    },
    {
      id: 'bc2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Enzyme Kinetics** 🎯`,
      exercise: {
        questions: [
          {
            question: `A researcher adds a molecule that binds ONLY to the enzyme-substrate complex. This is an example of:`,
            options: [`Uncompetitive inhibition`, `Competitive inhibition`, `Noncompetitive inhibition`, `Allosteric activation`],
            correctAnswer: 0,
            explanation: `Uncompetitive inhibitors bind ONLY to the ES complex (not free enzyme). This decreases both $V_{max}$ and $K_m$ (apparent). On a Lineweaver-Burk plot, lines are parallel.`
          },
          {
            question: `An enzyme has $K_m = 2$ mM and $V_{max} = 100$ $\\mu$mol/min. At $[S] = 18$ mM, the reaction velocity is approximately:`,
            options: [`90 $\\mu$mol/min`, `50 $\\mu$mol/min`, `100 $\\mu$mol/min`, `10 $\\mu$mol/min`],
            correctAnswer: 0,
            explanation: `$v = V_{max}[S]/(K_m + [S]) = 100(18)/(2 + 18) = 1800/20 = 90$ $\\mu$mol/min. At high [S] relative to $K_m$, the enzyme approaches $V_{max}$.`
          }
        ]
      }
    },
    {
      id: 'bc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- $K_m$ = [S] at half $V_{max}$. Low $K_m$ = high affinity.
- Competitive: same $V_{max}$, higher apparent $K_m$
- Noncompetitive: lower $V_{max}$, same $K_m$
- Lineweaver-Burk: know how each inhibitor changes the plot`
    }
  ]
};
