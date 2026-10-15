export const chemNernstEquationConcentrationPart7Data = {
  topicSlug: 'nernst-equation-concentration',
  sections: [
    {
      id: 'ne7-intro',
      type: 'text' as const,
      content: `# 📉 Cell Potential Under Nonstandard Conditions

**Part 7 of 7 — Complete Mastery**

---

### Topics in This Part

| Section |
|---------|
| 📋 Master Summary |
| 🎯 Comprehensive Review |
| 🏁 Final Check |

> 🔑 **Key Concept:** This part pulls together standard conditions, the qualitative Nernst equation, concentration cells, the $E°$–$\\Delta G°$–$K$ links, and a cell's behavior over time.`
    },
    {
      id: 'ne7-master-summary',
      type: 'text' as const,
      content: `
## 📋 Master Summary

### Equations you use

| Equation | How the AP exam uses it |
|----------|-------------------------|
| $E = E° - \\frac{RT}{nF}\\ln Q$ | **Qualitatively**: the sign of $\\ln Q$ tells you whether $E$ is above or below $E°$ (9.10) |
| $\\Delta G° = -nFE°$ | Calculate $\\Delta G°$ from $E°$; link the signs (9.9) |
| $\\Delta G° = -RT\\ln K$ | Link $\\Delta G°$ to $K$ (9.5) |

### Decision table

| Situation | $Q$ | $E$ |
|-----------|-----|-----|
| Standard conditions | $= 1$ | $= E°$ |
| More reactant or less product than standard | $< 1$ | $> E°$ |
| More product or less reactant than standard | $> 1$ | $< E°$ |
| Equilibrium | $= K$ | $= 0$ |

### Concentration cells

- $E° = 0$; $E > 0$ while the concentrations differ.
- Dilute side = **anode**; concentrated side = **cathode**.
- Electrons flow from the dilute side to the concentrated side.
- The cell stops when the concentrations are equal.

### Cell over time

- Reactant ions are consumed, product ions build up, so $Q$ rises toward $K$.
- $E$ falls slowly at first, then steeply as the limiting ion runs out, reaching 0 at equilibrium.
- Recharging requires an external source (the reverse reaction has $\\Delta G° > 0$).
      `
    },
    {
      id: 'ne7-comprehensive-quiz',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For Sn(s) + 2Ag⁺(aq) → Sn²⁺(aq) + 2Ag(s), E° = +0.94 V. A student sets up the cell with [Sn²⁺] = 1.0 M and [Ag⁺] = 0.050 M. The measured E is',
            options: [
              'greater than 0.94 V, because Q < 1',
              'less than 0.94 V, because Q > 1',
              'equal to 0.94 V, because the electrodes are standard',
              'zero, because [Ag⁺] is below 1 M'
            ],
            correctAnswer: 1,
            explanation: '$Q = [\\text{Sn}^{2+}]/[\\text{Ag}^{+}]^2 = 1.0/(0.050)^2 = 400$, which is greater than 1, so $E$ is below $E°$. A low reactant concentration moves the cell closer to equilibrium but does not put it at equilibrium.'
          },
          {
            question: 'Which change makes the measured potential of a Cu²⁺/Cu concentration cell larger?',
            options: [
              'Adding water to the more concentrated solution',
              'Diluting the less concentrated solution',
              'Making both solutions 1.0 M',
              'Using larger copper electrodes'
            ],
            correctAnswer: 1,
            explanation: 'Diluting the dilute side widens the concentration difference, moving the cell farther from equilibrium and raising $E$. Diluting the concentrated side narrows the difference, equal concentrations give zero, and electrode size does not affect $Q$.'
          },
          {
            question: 'A cell reaction has E° = +0.15 V and n = 2. Which statement is correct at 298 K?',
            options: [
              'ΔG° ≈ −29 kJ/mol and K > 1',
              'ΔG° ≈ +29 kJ/mol and K < 1',
              'ΔG° ≈ −14 kJ/mol and K > 1',
              'ΔG° ≈ −29 kJ/mol and K < 1'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta G° = -nFE° = -(2)(96{,}485)(0.15) \\approx -28{,}900$ J ≈ $-29$ kJ/mol. A negative $\\Delta G°$ means $\\ln K > 0$, so $K > 1$. Using $n = 1$ gives $-14$ kJ, and a negative $\\Delta G°$ can never pair with $K < 1$.'
          }
        ]
      }
    },
    {
      id: 'ne7-frq-walkthrough',
      type: 'text' as const,
      content: `
## 🎯 Comprehensive Review — FRQ Walkthrough

> **Prompt:** A Zn/Cu²⁺ cell ($E° = +1.10$ V) is assembled with 1.0 M solutions and run for several hours. (a) Identify the half-cell whose electrode gains mass. (b) Predict how $E$ after several hours compares with 1.10 V and justify. (c) The cell is then connected to an external source that restores the original concentrations. Is this process thermodynamically favored? Justify.

**(a)** The copper electrode (cathode) gains mass, because $\\text{Cu}^{2+}$ is reduced to Cu there.

**(b)** Less than 1.10 V. $\\text{Cu}^{2+}$ has been consumed and $\\text{Zn}^{2+}$ produced, so $Q = [\\text{Zn}^{2+}]/[\\text{Cu}^{2+}] > 1$; the cell is closer to equilibrium, so $E < E°$.

**(c)** Not favored. Restoring the concentrations runs the reaction in reverse, which has $E° = -1.10$ V and $\\Delta G° > 0$, so it occurs only because the external source supplies energy.
      `
    },
    {
      id: 'ne7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Check** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about cell potential under nonstandard conditions matches the AP Chemistry framework?',
            options: [
              'E shrinks to zero as the cell approaches Q = K',
              'Cell potential equals E° whenever the electrodes are pure metals',
              'Cell potential grows as the cell runs, because products accumulate',
              'Cell potential can only be found by a full Nernst calculation'
            ],
            correctAnswer: 0,
            explanation: 'The CED describes cell potential as a driving force toward equilibrium that shrinks to zero at $Q = K$, and it expects qualitative reasoning with the Nernst equation rather than algorithmic calculation. Accumulating products lower $E$, and pure-metal electrodes do not make the cell standard.'
          },
          {
            question: 'In a working galvanic cell, Q = 1 × 10⁻³ and K = 1 × 10¹⁵. Which statement is correct?',
            options: [
              'E is exactly zero',
              'E is below zero',
              'E is below E°',
              'E exceeds E°'
            ],
            correctAnswer: 3,
            explanation: '$Q < 1$ makes $\\ln Q$ negative, so $E$ exceeds $E°$. The cell is far from equilibrium ($Q \\ll K$), so the potential is large and positive, not zero or negative.'
          },
          {
            question: 'A nickel concentration cell starts with 0.0010 M and 1.0 M Ni²⁺. Which describes the cell after it has run for a long time but before it stops?',
            options: [
              'E has increased, because more Ni²⁺ has formed',
              'E has decreased, because the two molarities are now closer',
              'E is unchanged, because E° is still zero',
              'E has become negative, because the anode and cathode swap'
            ],
            correctAnswer: 1,
            explanation: 'As the cell runs, the dilute side becomes more concentrated and the concentrated side more dilute. The smaller difference puts the cell closer to equilibrium, so $E$ decreases toward zero. $E° = 0$ throughout, and the electrode roles do not swap.'
          }
        ]
      }
    }
  ]
}
