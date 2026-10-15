export const chemNernstEquationConcentrationPart4Data = {
  topicSlug: 'nernst-equation-concentration',
  sections: [
    {
      id: 'ne4-intro',
      type: 'text' as const,
      content: `# 🔗 Relationship Between E°, ΔG° and K

**Part 4 of 7 — Linking E°, ΔG° and K**

---

### Topics in This Part

| Section |
|---------|
| 🔗 Two Equations From the CED |
| 🧭 The Sign Logic |
| 🧪 Worked Example — From E° to ΔG° to K |
| ⚖️ What E = 0 Means and What E° = 0 Means |

> 🔑 **Key Concept:** $E°$, $\\Delta G°$ and $K$ are three ways of describing how strongly a redox reaction favors products. Know the two equations that connect them, and know their signs cold.

---

### What You'll Master in Part 4
- Calculate $\\Delta G°$ from $E°$ with $\\Delta G° = -nFE°$
- Relate $\\Delta G°$ to $K$ with $\\Delta G° = -RT\\ln K$
- Distinguish $E = 0$ (equilibrium) from $E° = 0$ ($K = 1$)`
    },
    {
      id: 'ne4-equations',
      type: 'text' as const,
      content: `
## 🔗 Two Equations From the CED

| Equation | CED topic | Connects |
|----------|-----------|----------|
| $\\Delta G° = -nFE°$ | 9.9 | standard cell potential and standard free energy change |
| $\\Delta G° = -RT\\ln K$ (equivalently $K = e^{-\\Delta G°/RT}$) | 9.5 | standard free energy change and the equilibrium constant |

| Symbol | Meaning | Value / units |
|--------|---------|---------------|
| $n$ | moles of electrons transferred in the balanced equation | mol $e^-$ |
| $F$ | Faraday constant | 96,485 C/mol $e^-$ |
| $R$ | gas constant (energy units) | 8.314 J/(mol·K) |
| $T$ | temperature | K |

> ⚠️ **Units trap:** $nFE°$ comes out in **joules** (1 C × 1 V = 1 J). Convert to kJ only after multiplying, and use $R$ in J/(mol·K) so the units match.

---

## 🧭 The Sign Logic

| $E°$ | $\\Delta G°$ | $K$ | At standard conditions |
|------|-------------|-----|-------------------------|
| positive | negative | greater than 1 | thermodynamically favored (galvanic) |
| zero | zero | equal to 1 | neither direction favored |
| negative | positive | less than 1 | not favored; needs an external source (electrolytic) |

Because $K$ depends **exponentially** on $\\Delta G°$, a cell with an $E°$ of only a few tenths of a volt already has a very large $K$.
      `
    },
    {
      id: 'ne4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding — Signs and Magnitudes** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A redox reaction has E° = −0.25 V. Which description of its ΔG° and K is correct?',
            options: [
              'ΔG° > 0 and K < 1',
              'ΔG° < 0 and K > 1',
              'ΔG° > 0 and K > 1',
              'ΔG° < 0 and K < 1'
            ],
            correctAnswer: 0,
            explanation: 'From $\\Delta G° = -nFE°$, a negative $E°$ gives a positive $\\Delta G°$. From $\\Delta G° = -RT\\ln K$, a positive $\\Delta G°$ means $\\ln K < 0$, so $K < 1$. The reaction is not thermodynamically favored at standard conditions.'
          },
          {
            question: 'Two cells have the same E° = +0.40 V, but cell P transfers 1 mol of electrons per mole of reaction and cell Q transfers 2. How do their ΔG° values compare?',
            options: [
              'They are equal, because E° is the same',
              'ΔG° for Q is twice as negative as ΔG° for P',
              'ΔG° for Q is half as negative as ΔG° for P',
              'ΔG° for Q is positive, because more electrons move'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G° = -nFE°$ is proportional to $n$. With the same $E°$, doubling $n$ doubles the magnitude of $\\Delta G°$, so cell Q has a $\\Delta G°$ twice as negative. $E°$ is an intensive property, but $\\Delta G°$ depends on the amount of electrons transferred.'
          },
          {
            question: 'Which statement about a cell reaction with K = 1.0 × 10²⁰ at 298 K is correct?',
            options: [
              'Its E° is negative, so it must be run as an electrolytic cell',
              'Its E° is zero, because K is a ratio of concentrations',
              'Its E° is positive, because a large K means a negative ΔG°',
              'Its E° cannot be determined without the concentrations used'
            ],
            correctAnswer: 2,
            explanation: 'A $K$ far greater than 1 gives a negative $\\Delta G°$ ($\\Delta G° = -RT\\ln K$), and a negative $\\Delta G°$ means a positive $E°$ ($\\Delta G° = -nFE°$). $E°$ is a standard-state quantity, so no concentrations are needed.'
          }
        ]
      }
    },
    {
      id: 'ne4-worked-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example — From E° to ΔG° to K

> **Problem:** For $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$, $E° = +1.10$ V. Find $\\Delta G°$ at 298 K and decide whether $K$ is greater or less than 1.

### Step 1 — Find n

Each Zn atom gives up 2 electrons and each $\\text{Cu}^{2+}$ gains 2, so $n = 2$.

### Step 2 — Apply ΔG° = −nFE°

$$\\Delta G° = -(2)(96{,}485)(1.10) = -212{,}000 \\text{ J/mol}_{rxn} = -212 \\text{ kJ/mol}_{rxn}$$

### Step 3 — Relate to K

$$\\ln K = -\\frac{\\Delta G°}{RT} = \\frac{212{,}000}{(8.314)(298)} \\approx 85.6$$

$\\ln K$ is large and positive, so $K$ is enormous (about $10^{37}$).

### Step 4 — Interpret

$K \\gg 1$: at equilibrium almost all of the $\\text{Cu}^{2+}$ has been reduced. This is why a Daniell cell keeps a positive potential for most of its useful life.
      `
    },
    {
      id: 'ne4-input-practice',
      type: 'input-boxes' as const,
      content: `
**Calculate ΔG°** 🧮

A cell runs $\\text{Mg}(s) + 2\\text{Ag}^{+}(aq) \\rightarrow \\text{Mg}^{2+}(aq) + 2\\text{Ag}(s)$ with $E° = +3.17$ V. Use $F = 96{,}485$ C/mol $e^-$.

**1)** How many moles of electrons are transferred per mole of reaction?

**2)** What is $\\Delta G°$ in kJ/mol$_{rxn}$? (3 significant figures, include the sign)

**3)** Is $K$ greater than 1 or less than 1? (type "greater" or "less")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '-612', 'greater'],
        hint1: 'Mg goes from 0 to +2; each $\\text{Ag}^{+}$ gains one electron and there are two of them.',
        hint2: '$\\Delta G° = -nFE°$ gives joules; divide by 1000.',
        hint3: 'A negative $\\Delta G°$ means $\\ln K > 0$.',
        explanation: '1) Two electrons move from Mg to the two $\\text{Ag}^{+}$ ions, so $n = 2$. 2) $\\Delta G° = -(2)(96{,}485)(3.17) = -611{,}700$ J ≈ $-612$ kJ/mol$_{rxn}$. 3) A negative $\\Delta G°$ gives $\\ln K > 0$, so $K$ is greater than 1.'
      }
    },
    {
      id: 'ne4-zero-vs-standard',
      type: 'text' as const,
      content: `
## ⚖️ What E = 0 Means and What E° = 0 Means

These two statements look alike but describe different things:

| Statement | Meaning | Example |
|-----------|---------|---------|
| $E = 0$ | the cell, at its **current** concentrations, is at equilibrium ($Q = K$) | a fully discharged Daniell cell |
| $E° = 0$ | the reaction has $\\Delta G° = 0$ and $K = 1$ | any concentration cell |

> 💡 A Daniell cell always has $E° = +1.10$ V, even when it is dead. A concentration cell always has $E° = 0$, even when it is producing a voltage.
      `
    },
    {
      id: 'ne4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — E°, ΔG° and K** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For a reaction with n = 2, E° is +0.20 V. What is ΔG° at 298 K?',
            options: [
              '−19 kJ/mol',
              '−39 kJ/mol',
              '+39 kJ/mol',
              '−0.39 kJ/mol'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G° = -nFE° = -(2)(96{,}485)(0.20) = -38{,}600$ J ≈ $-39$ kJ/mol. Using $n = 1$ gives $-19$ kJ, a positive value comes from dropping the minus sign, and $-0.39$ kJ comes from a units slip.'
          },
          {
            question: 'A discharged Daniell cell reads 0.00 V. Which pair of values describes it?',
            options: [
              'E = 0 and E° = 0',
              'E = 0 and E° = +1.10 V',
              'E = +1.10 V and E° = 0',
              'E = E° = +1.10 V'
            ],
            correctAnswer: 1,
            explanation: 'The reading is the actual potential $E$, which is zero because the cell has reached equilibrium. $E°$ is a fixed property of the reaction at standard conditions and stays at +1.10 V.'
          },
          {
            question: 'Which observation would show that a redox reaction has K less than 1 at standard conditions?',
            options: [
              'Its standard cell potential is a large positive value',
              'Its standard free energy change is negative',
              'Its standard cell potential is negative',
              'Its cell potential falls as the reaction proceeds'
            ],
            correctAnswer: 2,
            explanation: 'A negative $E°$ gives a positive $\\Delta G°$ and therefore $K < 1$. A positive $E°$ or a negative $\\Delta G°$ means $K > 1$, and every working galvanic cell loses potential as it runs, whatever its $K$.'
          }
        ]
      }
    }
  ]
}
