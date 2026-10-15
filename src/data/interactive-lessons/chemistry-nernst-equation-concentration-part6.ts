export const chemNernstEquationConcentrationPart6Data = {
  topicSlug: 'nernst-equation-concentration',
  sections: [
    {
      id: 'ne6-intro',
      type: 'text' as const,
      content: `# 📉 Cell Potential Under Nonstandard Conditions

**Part 6 of 7 — Practice and Integration**

---

### Topics in This Part

| Section |
|---------|
| 🛠️ Problem-Solving Toolkit |
| ✍️ Writing a Full Justification |
| 🎯 Mixed Practice |

> 🔑 **Key Concept:** AP questions on nonstandard cells reward a clear chain of reasoning: change → $Q$ → distance from equilibrium → $E$. This part practices writing that chain.`
    },
    {
      id: 'ne6-strategy',
      type: 'text' as const,
      content: `
## 🛠️ Problem-Solving Toolkit

| Question type | First move | Key idea |
|---------------|-----------|----------|
| "How does E change when…?" | Write $Q$ from the balanced reaction | Smaller $Q$ → larger $E$; larger $Q$ → smaller $E$ |
| Dilution of both half-cells | Check the exponents in $Q$ | Equal coefficients → no change; unequal → $Q$ shifts |
| Concentration cell | Find the dilute side | Dilute side is the anode; $E \\to 0$ as concentrations match |
| Cell over time | Track which ion is consumed | $Q$ rises toward $K$; $E$ falls toward 0 |
| $E°$, $\\Delta G°$, $K$ | Check signs first | $E° > 0 \\Leftrightarrow \\Delta G° < 0 \\Leftrightarrow K > 1$ |

> ⚠️ **Common errors**
> - Putting solids into $Q$.
> - Forgetting that the exponent in $Q$ comes from the **balanced overall** equation.
> - Saying $E°$ changes when concentrations change. Only $E$ changes.
> - Using Le Châtelier's principle as the justification. The CED wants reasoning about $Q$ and the approach to equilibrium.
      `
    },
    {
      id: 'ne6-mixed-problems',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A cell runs Fe(s) + 2Fe³⁺(aq) → 3Fe²⁺(aq). Which change increases its cell potential?',
            options: [
              'Adding Fe²⁺ to the cell',
              'Adding Fe³⁺ to the cell',
              'Using a larger iron electrode',
              'Diluting the Fe³⁺ solution'
            ],
            correctAnswer: 1,
            explanation: '$Q = [\\text{Fe}^{2+}]^3/[\\text{Fe}^{3+}]^2$. Adding $\\text{Fe}^{3+}$ enlarges the denominator, lowering $Q$ and raising $E$. Adding $\\text{Fe}^{2+}$ or diluting $\\text{Fe}^{3+}$ raises $Q$, and solid iron is not in $Q$.'
          },
          {
            question: 'For the cell in the previous question, a student claims "adding Fe²⁺ lowers E because Le Châtelier\'s principle shifts the reaction left." What is the best correction?',
            options: [
              'The conclusion fails, since added ions make the cell conduct better',
              'The conclusion holds, but the reason is that Q rises toward K',
              'The conclusion fails, since Fe²⁺ is left out of Q',
              'The conclusion holds, since E° falls whenever ions are added'
            ],
            correctAnswer: 1,
            explanation: 'The potential does fall, but the CED notes that equilibrium arguments such as Le Châtelier do not apply to a working cell, which is not at equilibrium. The correct justification is that a larger $Q$ brings the cell closer to equilibrium, which lowers the driving force.'
          },
          {
            question: 'A copper concentration cell has 0.20 M Cu²⁺ on the left and 0.020 M Cu²⁺ on the right. Where does reduction occur?',
            options: [
              'In the right half-cell, with 0.020 M Cu²⁺',
              'In the left half-cell, with 0.20 M Cu²⁺',
              'In the salt bridge, where ions from both sides meet',
              'In neither half-cell, because E° is zero'
            ],
            correctAnswer: 1,
            explanation: 'Reduction removes $\\text{Cu}^{2+}$ from solution, so it occurs where the concentration is higher, bringing the two sides toward equal concentration. The dilute right side is the anode.'
          }
        ]
      }
    },
    {
      id: 'ne6-justification',
      type: 'text' as const,
      content: `
## ✍️ Writing a Full Justification

> **Prompt (FRQ style):** A galvanic cell is based on $\\text{Cu}(s) + 2\\text{Ag}^{+}(aq) \\rightarrow \\text{Cu}^{2+}(aq) + 2\\text{Ag}(s)$, $E° = +0.46$ V. The student replaces the 1.0 M $\\text{AgNO}_3$ with 0.10 M $\\text{AgNO}_3$. Will the measured potential be greater than, less than, or equal to 0.46 V? Justify your answer.

### A full-credit answer has three links

1. **Q expression:** $Q = [\\text{Cu}^{2+}]/[\\text{Ag}^{+}]^2$.
2. **Effect of the change:** lowering $[\\text{Ag}^{+}]$ makes $Q = 1.0/(0.10)^2 = 100$, which is greater than 1.
3. **Conclusion with reason:** with $Q > 1$ the cell is closer to equilibrium than at standard conditions, so the potential is **less than** 0.46 V.

> 💡 A bare "less than" with no reasoning earns no credit. A memorized Nernst number with no explanation of why $Q$ changed is also weak.

---

### Sentence frame

"Decreasing/increasing [species] makes $Q$ larger/smaller than 1, so the cell is closer to/farther from equilibrium than under standard conditions, and $E$ is less than/greater than $E°$."
      `
    },
    {
      id: 'ne6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Build the Justification** 🔽

Cell: $\\text{Pb}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Pb}^{2+}(aq) + \\text{Cu}(s)$. The $\\text{Pb}^{2+}$ solution is changed from 1.0 M to 0.0010 M.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The reaction quotient for the cell is',
            options: ['[Pb²⁺]/[Cu²⁺]', '[Cu²⁺]/[Pb²⁺]', '[Pb²⁺][Cu²⁺]', '[Cu]/[Pb]']
          },
          {
            label: 'After the change, Q is',
            options: ['less than 1', 'equal to 1', 'greater than 1', 'equal to K']
          },
          {
            label: 'Compared with standard conditions, the cell is',
            options: ['farther from equilibrium', 'closer to equilibrium', 'at equilibrium', 'past equilibrium']
          },
          {
            label: 'So the measured potential is',
            options: ['greater than E°', 'less than E°', 'equal to E°', 'zero']
          }
        ],
        correctAnswers: ['[Pb²⁺]/[Cu²⁺]', 'less than 1', 'farther from equilibrium', 'greater than E°'],
        hint1: 'Products over reactants; leave out the solids.',
        hint2: '0.0010 / 1.0 is much smaller than 1.',
        hint3: 'A smaller $Q$ means the reaction has further to go to reach $K$.',
        explanation: '$Q = [\\text{Pb}^{2+}]/[\\text{Cu}^{2+}] = 0.0010/1.0 = 0.0010$, which is less than 1. The cell is farther from equilibrium than a standard cell, so its potential is greater than $E°$.'
      }
    },
    {
      id: 'ne6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Practice and Integration** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A cell runs 2Al(s) + 3Cu²⁺(aq) → 2Al³⁺(aq) + 3Cu(s). Both solutions are diluted from 1.0 M to 0.10 M. How does E change?',
            options: [
              'It decreases, because Q rises above 1',
              'It increases, because Q falls below 1',
              'It stays the same, because both were diluted equally',
              'It becomes zero, because the cell reaches equilibrium'
            ],
            correctAnswer: 0,
            explanation: '$Q = [\\text{Al}^{3+}]^2/[\\text{Cu}^{2+}]^3 = (0.10)^2/(0.10)^3 = 0.010/0.0010 = 10$. The reactant ion carries the larger exponent, so dilution shrinks the denominator more than the numerator. $Q > 1$ means the cell is closer to equilibrium and $E$ decreases; equal dilution leaves $E$ unchanged only when the exponents match.'
          },
          {
            question: 'Which quantity changes as a galvanic cell discharges?',
            options: [
              'E°',
              'ΔG°',
              'K',
              'E'
            ],
            correctAnswer: 3,
            explanation: '$E°$, $\\Delta G°$ and $K$ are fixed properties of the reaction at a given temperature. Only the actual potential $E$, which depends on the current concentrations through $Q$, changes as the cell runs.'
          },
          {
            question: 'A silver concentration cell has 0.010 M Ag⁺ in beaker A and 1.0 M Ag⁺ in beaker B. Which observation is expected as it runs?',
            options: [
              'The silver electrode in A gains mass',
              'The silver electrode in B gains mass',
              'The silver electrode in A keeps its mass',
              '[Ag⁺] in B increases'
            ],
            correctAnswer: 1,
            explanation: 'B is the concentrated side, so $\\text{Ag}^{+}$ is reduced there and silver plates onto B\'s electrode. In A, silver is oxidized, so A\'s electrode loses mass and its $[\\text{Ag}^{+}]$ rises, while B\'s $[\\text{Ag}^{+}]$ falls.'
          }
        ]
      }
    }
  ]
}
