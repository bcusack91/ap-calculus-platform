export const chemNernstEquationConcentrationPart7Data = {
  topicSlug: 'nernst-equation-concentration',
  sections: [
    {
      id: 'ne7-intro',
      type: 'text' as const,
      content: `# 🎯 Synthesis & AP Review — Nernst Equation

**Part 7 of 7 — Complete Mastery**

---

### Bringing It All Together

This comprehensive review connects every concept from Parts 1–6 with AP-style problems. The questions are designed to mirror what you'll see on the actual exam — multi-step, multi-concept, and requiring clear written explanations.

> 🔑 **Why this matters:** AP Chemistry exam questions rarely test one concept in isolation — success requires connecting ideas across topics.

---

### What You'll Master in Part 7
- Solving AP-style questions that integrate multiple concepts from this unit
- Writing clear, concise explanations using proper chemistry terminology
- Identifying and avoiding common AP exam traps and mistakes`
    },
    {
      id: 'ne7-master-summary',
      type: 'text' as const,
      content: `
## 📋 Master Equation Summary

### The Core Equations

| Equation | When to Use |
|----------|-------------|
| $E = E° - \\frac{0.0592}{n}\\log Q$ | Cell potential at non-standard conditions (25°C) |
| $E = E° - \\frac{RT}{nF}\\ln Q$ | Cell potential at any temperature |
| $E° = \\frac{0.0592}{n}\\log K$ | Relate standard potential to equilibrium constant |
| $\\Delta G° = -nFE°$ | Relate free energy to cell potential |


---

### The Thermodynamic Triangle (at 25°C)

$$\\Delta G° \\xleftrightarrow{-nF} E° \\xleftrightarrow{0.0592/n} \\log K \\xleftrightarrow{-RT\\ln} \\Delta G°$$


---

### Battery Classification

| Type | Rechargeable? | Example | Key Feature |
|------|:------------:|---------|-------------|
| Primary | No | Alkaline | One-time use |
| Secondary | Yes | Li-ion, lead-acid | Reversible reaction |
| Fuel cell | Continuous | $H_{2}/O_{2}$ | Reactants fed in |
| Concentration | Until equal | Same-metal | E° = 0 |

> 🔑 **Key Concept:** Know any one of $\\Delta G°$, $E°$, or $K$ — and you can calculate the other two. This "thermodynamic triangle" unifies equilibrium, electrochemistry, and thermodynamics.
      `
    },
    {
      id: 'ne7-comprehensive-quiz',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive AP Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Nernst equation shows that cell voltage depends on:',
            options: [
              'Temperature only',
              'Concentration only',
              'Temperature, concentration (Q), and E°',
              'E° only'
            ],
            correctAnswer: 2,
            explanation: '$E = E° - (RT/nF)\\ln Q$ depends on all three: the standard potential ($E°$), the temperature ($T$), and the reaction quotient ($Q$, which reflects concentrations).'
          },
          {
            question: 'A galvanic cell has E° = 0.50 V and n = 2. What is ΔG°?',
            options: [
              '−96.5 kJ',
              '+96.5 kJ',
              '−48.2 kJ',
              '+48.2 kJ'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta G° = -nFE° = -(2)(96{,}485)(0.50) = -96{,}485$ J $= -96.5$ kJ.'
          },
          {
            question: 'In a hydrogen fuel cell, the only product at the cathode is:',
            options: [
              '$CO_{2}$',
              '$H_{2}$',
              '$H_{2}O$',
              '$O_{2}$'
            ],
            correctAnswer: 2,
            explanation: 'Cathode: $\\text{O}_2 + 4\\text{H}^+ + 4e^- \\rightarrow 2\\text{H}_2\\text{O}$. The product is water — making hydrogen fuel cells environmentally clean.'
          }
        ]
      }
    },
    {
      id: 'ne7-integration-drill',
      type: 'input-boxes' as const,
      content: `
**Integration Problems** 🧮

**1)** E° = 0.80 V, n = 2, T = 298 K. What is $\\Delta G°$ in kJ? (to 1 decimal)

**2)** E° = 0.40 V, n = 2. What is $\\log K$? (to 1 decimal)

**3)** A dead battery has E = ___ V and Q = ___ (type "0" and "K" separated by a comma)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-154.4', '13.5', '0, K'],
        hint1: '$\\Delta G° = -(2)(96485)(0.80)$. Convert to kJ.',
        hint2: '$\\log K = (2)(0.40)/0.0592$',
        hint3: 'At equilibrium: E = 0 and Q = K.',
        explanation: '1) $\\Delta G° = -154{,}376$ J $= -154.4$ kJ. 2) $\\log K = 0.80/0.0592 = 13.5$. 3) Dead battery = equilibrium: E = 0 V, Q = K.'
      }
    },
    {
      id: 'ne7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Final Concept Review** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'As a battery discharges, E',
            options: ['increases', 'decreases toward 0', 'stays constant', 'oscillates']
          },
          {
            label: 'A concentration cell produces voltage because of',
            options: ['different metals', 'different concentrations', 'different temperatures', 'different E° values']
          },
          {
            label: '0.0592 V in the simplified Nernst equation applies only at',
            options: ['0°C', '25°C', '100°C', 'any temperature']
          },
          {
            label: 'The largest K comes from the cell with the',
            options: ['smallest E°', 'largest E° and largest n', 'E° = 0', 'smallest n']
          }
        ],
        correctAnswers: ['decreases toward 0', 'different concentrations', '25°C', 'largest E° and largest n'],
        hint1: 'Q increases → E decreases → E = 0 at equilibrium.',
        hint2: 'Both electrodes are the same; E° = 0.',
        hint3: '$0.0592 = RT \\times 2.303/F$ at T = 298 K.',
        explanation: 'Battery discharges: E → 0 as Q → K. Concentration cells: driven by [C] difference. 0.0592 V at 25°C only. K = 10^{nE°/0.0592}: larger nE° → larger K.'
      }
    },
    {
      id: 'ne7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Nernst Equation Mastery** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student measures a cell potential of 0.00 V for a Zn-Cu cell (E° = 1.10 V, n = 2). The student can conclude:',
            options: [
              'The electrodes are disconnected',
              'The cell has reached equilibrium (Q = K)',
              'There is an error — Zn-Cu always produces voltage',
              'The salt bridge is broken'
            ],
            correctAnswer: 1,
            explanation: '$E = 0$ means $Q = K$ — the cell has reached equilibrium. All the reactants have been consumed to the point where the forward and reverse reactions are balanced.'
          },
          {
            question: 'Which change would make a concentration cell produce MORE voltage?',
            options: [
              'Make the two concentrations more similar',
              'Make the two concentrations more different',
              'Use a longer salt bridge',
              'Use larger electrodes'
            ],
            correctAnswer: 1,
            explanation: '$E = (0.0592/n)\\log([\\text{conc}]/[\\text{dilute}])$. A larger ratio of concentrations → larger $\\log$ → higher $E$. More different concentrations produce more voltage.'
          }
        ]
      }
    }
  ]
}
