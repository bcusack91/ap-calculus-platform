export const mcatSciPassagePart5Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp5-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 5 of 7 — Chemistry & Physics Passage Tactics**

### Chem/Phys Passage Features

- Heavy on calculations, equations, and graphs
- Often present novel experiments with familiar chemistry/physics concepts
- Reaction mechanisms and energy diagrams are common

### Calculation Strategy

1. **Estimate first**: Round numbers to make mental math easier
2. **Use scientific notation**: Convert large/small numbers
3. **Check units**: Answer must have correct units (dimensional analysis)
4. **Sanity check**: Does the answer make physical sense?

### Common Chem/Phys Passage Topics

| Topic | What to Look For |
|-------|-----------------|
| Acid-base | Henderson-Hasselbalch, titration curves, buffer capacity |
| Kinetics | Rate laws, Arrhenius equation, reaction order from data |
| Thermodynamics | $\\Delta G = \\Delta H - T\\Delta S$, spontaneity, coupled reactions |
| Circuits | Ohm's law, series vs. parallel, power |
| Optics | Snell's law, lens/mirror equations |

### Math Shortcuts

- $\\log(2) \\approx 0.3$, $\\log(3) \\approx 0.5$
- $e \\approx 2.718$
- For pH: $-\\log(2 \\times 10^{-3}) = 3 - \\log(2) \\approx 3 - 0.3 = 2.7$`
    },
    {
      id: 'sp5-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading Order from a Kinetics Table

A Chem/Phys passage gives initial-rate data for $A \\rightarrow \\text{products}$:

| Trial | $[A]$ (M) | Initial rate (M/s) |
|-------|-----------|--------------------|
| 1 | 0.10 | $2.0 \\times 10^{-3}$ |
| 2 | 0.20 | $8.0 \\times 10^{-3}$ |
| 3 | 0.40 | $3.2 \\times 10^{-2}$ |

**Step 1 — Pick two trials and compare.** From Trial 1 to Trial 2, $[A]$ **doubles** ($0.10 \\to 0.20$).

**Step 2 — See how the rate responds.** Rate goes $2.0\\times10^{-3} \\to 8.0\\times10^{-3}$, a factor of **4**.

**Step 3 — Solve for the order $n$.** For rate $= k[A]^n$, doubling $[A]$ multiplies rate by $2^n$. Here $2^n = 4$, so $n = 2$ — the reaction is **second order** in $A$.

**Step 4 — Confirm with a third trial.** Trial 2 → Trial 3: $[A]$ doubles again, rate goes $8.0\\times10^{-3} \\to 3.2\\times10^{-2}$, again $\\times 4$. Consistent with second order. ✓

**Step 5 — Get $k$ with correct units.** Using Trial 1: $k = \\frac{\\text{rate}}{[A]^2} = \\frac{2.0\\times10^{-3}}{(0.10)^2} = \\frac{2.0\\times10^{-3}}{1.0\\times10^{-2}} = 0.20\\ \\text{M}^{-1}\\text{s}^{-1}$. For a second-order rate constant, the units must be $\\text{M}^{-1}\\text{s}^{-1}$ — a built-in sanity check.`
    },
    {
      id: 'sp5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Chem/Phys Tactics** 🎯`,
      exercise: {
        questions: [
          {
            question: `What is the pH of a $5 \\times 10^{-4}$ M HCl solution? (Use $\\log(5) \\approx 0.7$)`,
            options: [`3.3 ($-\\log(5 \\times 10^{-4}) = 4 - 0.7 = 3.3$)`, `4.0`, `3.7`, `2.3`],
            correctAnswer: 0,
            explanation: `$\\text{pH} = -\\log[\\text{H}^+] = -\\log(5 \\times 10^{-4}) = -(\\log 5 + \\log 10^{-4}) = -(0.7 - 4) = 3.3$. HCl is a strong acid (complete dissociation), so $[H^+] = 5 \\times 10^{-4}$ M directly.`
          },
          {
            question: `In the kinetics worked example, doubling $[A]$ quadrupled the rate. The reaction order in $A$ is:`,
            options: [`Second order ($2^n = 4 \\Rightarrow n = 2$)`, `First order`, `Zero order`, `Third order`],
            correctAnswer: 0,
            explanation: `If doubling a reactant multiplies the rate by $2^n$, then a four-fold rate increase means $2^n = 4$, so $n = 2$. The reaction is second order in $A$.`
          },
          {
            question: `For that second-order reaction, the rate constant $k$ must carry units of:`,
            options: [`$\\text{M}^{-1}\\text{s}^{-1}$`, `$\\text{s}^{-1}$`, `$\\text{M}\\,\\text{s}^{-1}$`, `dimensionless`],
            correctAnswer: 0,
            explanation: `Rate has units M/s and $[A]^2$ has units M². So $k = \\text{rate}/[A]^2$ has units $\\frac{\\text{M/s}}{\\text{M}^2} = \\text{M}^{-1}\\text{s}^{-1}$. Matching $k$'s units to the order is a quick error check.`
          }
        ]
      }
    },
    {
      id: 'sp5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Estimation & Sanity Checks** 🎯`,
      exercise: {
        questions: [
          {
            question: `Approximate the pH of a $2 \\times 10^{-3}$ M strong acid using $\\log(2) \\approx 0.3$:`,
            options: [`About 2.7 ($3 - 0.3$)`, `About 3.3`, `About 2.0`, `About 1.7`],
            correctAnswer: 0,
            explanation: `$\\text{pH} = -\\log(2 \\times 10^{-3}) = 3 - \\log 2 \\approx 3 - 0.3 = 2.7$. Knowing $\\log 2 \\approx 0.3$ lets you nail these without a calculator.`
          },
          {
            question: `A thermodynamics passage gives $\\Delta H = -40$ kJ/mol and $\\Delta S = +50$ J/(mol·K). At any positive temperature, the reaction is:`,
            options: [`Spontaneous, because $\\Delta G = \\Delta H - T\\Delta S$ is negative for all $T > 0$`, `Never spontaneous`, `Spontaneous only at very low temperature`, `Impossible to evaluate without $\\Delta G$ given directly`],
            correctAnswer: 0,
            explanation: `With $\\Delta H < 0$ and $\\Delta S > 0$, the term $-T\\Delta S$ is also negative for any $T > 0$, so $\\Delta G < 0$ at all temperatures. Such reactions are always spontaneous.`
          },
          {
            question: `You compute a current of 5000 A flowing through a household resistor. The best response is to:`,
            options: [`Sanity-check the work — a household current that large is physically unreasonable`, `Accept it, since the math gave that number`, `Convert it to milliamps and move on`, `Assume the resistor is broken`],
            correctAnswer: 0,
            explanation: `A sanity check catches setup errors. Typical household currents are on the order of single amps; thousands of amps signal a misplaced exponent or wrong formula. Always ask whether the answer makes physical sense.`
          }
        ]
      }
    },
    {
      id: 'sp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Estimate calculations — mental math saves time even when a calculator is available
- Determine reaction order by comparing how rate responds to changes in concentration
- Match a rate constant's units to the reaction order as a built-in check
- Know log shortcuts: $\\log 2 \\approx 0.3$, $\\log 3 \\approx 0.5$, $\\log 5 \\approx 0.7$
- Always check units and do a physical sanity check on every answer`
    }
  ]
};
