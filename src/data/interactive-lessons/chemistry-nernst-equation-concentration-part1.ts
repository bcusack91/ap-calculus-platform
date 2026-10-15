export const chemNernstEquationConcentrationPart1Data = {
  topicSlug: 'nernst-equation-concentration',
  sections: [
    {
      id: 'ne1-intro',
      type: 'text' as const,
      content: `# 📉 Cell Potential Under Nonstandard Conditions

**Part 1 of 7 — Beyond Standard Potentials**

---

### Topics in This Part

| Section |
|---------|
| 🔋 What "Standard" Means |
| ⚖️ Cell Potential as a Driving Force |
| 🧭 The Nernst Equation, Used Qualitatively |
| 🧪 Worked Example — Reading Q for a Daniell Cell |

> 🔑 **Key Concept:** $E°$ describes a cell at one specific set of conditions. Real cells rarely sit at those conditions, and the AP exam asks you to reason about **which way** and **why** the potential moves when they do not (CED 9.10).

---

### What You'll Master in Part 1
- State the conditions that make a cell "standard"
- Explain why cell potential is a driving force toward equilibrium
- Use $Q$ to predict whether $E$ is above, below or equal to $E°$`
    },
    {
      id: 'ne1-standard',
      type: 'text' as const,
      content: `
## 🔋 What "Standard" Means

A standard cell potential, $E°$, is measured with every species in its **standard state**:

| Species | Standard state |
|---------|----------------|
| Dissolved ions and molecules | 1 M |
| Gases | 1 atm (the AP exam may also use 1 bar) |
| Solids and pure liquids | the pure substance |

Tabulated values are usually reported at 25°C (298 K).

Under these conditions every concentration term in the reaction quotient equals 1, so:

$$Q = 1 \\quad \\text{(standard conditions)}$$

> 💡 Solids and pure liquids never appear in $Q$. Changing the **size** of a zinc electrode does not change $Q$, so it does not change the cell potential. A bigger electrode only lets the cell run longer.

---

## ⚖️ Cell Potential as a Driving Force

The CED describes cell potential as a **driving force toward equilibrium** (9.10.A.1):

- The **farther** a cell is from equilibrium, the **larger** the magnitude of its potential.
- As the cell runs, the reaction moves toward equilibrium and $|E|$ shrinks.
- At equilibrium ($Q = K$) the potential is **zero**. Nothing drives electrons through the wire.

| Where the cell is | $Q$ compared with $K$ | Cell potential |
|-------------------|---------------------|----------------|
| Far from equilibrium | $Q \\ll K$ | Large and positive |
| Approaching equilibrium | $Q$ rising toward $K$ | Positive but shrinking |
| At equilibrium | $Q = K$ | $E = 0$ |

> ⚠️ The CED also notes that Le Châtelier's principle is **not** the right tool here (9.10.A.2): a working cell is not at equilibrium. Reason with $Q$ and the distance from equilibrium instead.
      `
    },
    {
      id: 'ne1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding — Standard Conditions and Driving Force** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A galvanic cell is built with every dissolved species at 1 M and every gas at 1 atm. What is the value of Q at the moment the cell is assembled?',
            options: [
              'Q = K',
              'Q = 1',
              'Q = 0',
              'Q = E°'
            ],
            correctAnswer: 1,
            explanation: 'With every concentration and pressure term equal to 1, the reaction quotient equals 1. That is the definition of standard conditions, so the cell potential equals $E°$. $Q$ equals $K$ only at equilibrium, and $Q$ is a ratio of concentrations, not a voltage.'
          },
          {
            question: 'A student replaces the small zinc strip in a Zn/Cu²⁺ cell with a much larger zinc block, keeping both solutions unchanged. What happens to the cell potential?',
            options: [
              'It rises, because more zinc atoms can be oxidized',
              'It falls, because the larger block shields the ions',
              'It stays the same, because solid zinc does not appear in Q',
              'It doubles, because the electrode surface area doubles'
            ],
            correctAnswer: 2,
            explanation: 'Solids are left out of the reaction quotient, so changing the amount of zinc does not change $Q$ and does not change $E$. A larger electrode lets the cell deliver charge for longer, but the voltage depends on the concentrations of the dissolved species.'
          },
          {
            question: 'Which statement best describes a galvanic cell whose potential has fallen to 0 V?',
            options: [
              'It is at equilibrium, with Q = K',
              'Its standard potential has dropped to zero',
              'Its reaction quotient has returned to exactly 1',
              'Its salt bridge has stopped carrying ions'
            ],
            correctAnswer: 0,
            explanation: 'A cell potential of zero means $Q = K$: the reaction is at equilibrium and there is no driving force. $E°$ is a fixed property of the reaction and does not change as the cell runs, and $Q = 1$ would give $E = E°$, not zero.'
          }
        ]
      }
    },
    {
      id: 'ne1-qualitative-nernst',
      type: 'text' as const,
      content: `
## 🧭 The Nernst Equation, Used Qualitatively

The relationship between $E$ and $Q$ is the **Nernst equation**, which appears in the CED:

$$E = E° - \\frac{RT}{nF}\\ln Q$$

The CED states that **algorithmic calculations** with this equation are not what the exam assesses (9.10.A.4). You are expected to use it **qualitatively**, by reading the sign of $\\ln Q$:

| Condition | $Q$ | $\\ln Q$ | Result |
|-----------|-----|---------|--------|
| Excess reactants (relative to standard) | $Q < 1$ | negative | $E > E°$ |
| Standard conditions | $Q = 1$ | zero | $E = E°$ |
| Excess products (relative to standard) | $Q > 1$ | positive | $E < E°$ |
| Equilibrium | $Q = K$ | — | $E = 0$ |

> 💡 **Memory hook:** a cell that has "more to do" than at standard conditions (more reactant, less product) pushes harder: $E$ rises above $E°$.

---

### Step-by-Step Reasoning Routine

1. Write the overall cell reaction.
2. Write $Q$ from it (aqueous species and gases only).
3. Decide whether the change makes $Q$ larger or smaller than 1.
4. Conclude: smaller $Q$ → larger $E$; larger $Q$ → smaller $E$.
      `
    },
    {
      id: 'ne1-worked-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example — Reading Q for a Daniell Cell

> **Problem:** A Daniell cell runs the reaction $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$ with $E° = +1.10$ V. The cell is built with $[\\text{Zn}^{2+}] = 0.10$ M and $[\\text{Cu}^{2+}] = 1.0$ M. Is the measured potential greater than, less than, or equal to 1.10 V?

### Step 1 — Write Q

Solid zinc and solid copper are left out:

$$Q = \\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]}$$

### Step 2 — Compare Q with 1

$$Q = \\frac{0.10}{1.0} = 0.10 < 1$$

### Step 3 — Read the Nernst equation

$\\ln Q$ is negative, so $-\\frac{RT}{nF}\\ln Q$ is positive and adds to $E°$.

### Step 4 — Conclude

$$E > 1.10 \\text{ V}$$

> ✅ **Particle-level check:** the product ion $\\text{Zn}^{2+}$ is scarce compared with standard conditions, so the cell is farther from equilibrium than a standard cell and pushes electrons harder.
      `
    },
    {
      id: 'ne1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Apply the Routine** 🔽

The Daniell cell, $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$, starts at standard conditions.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Adding solid Zn(NO₃)₂ to the zinc half-cell makes Q',
            options: ['increase', 'decrease', 'stay the same', 'equal K']
          },
          {
            label: 'After that addition, the cell potential is',
            options: ['above E°', 'below E°', 'equal to E°', 'equal to zero']
          },
          {
            label: 'Adding solid Cu(NO₃)₂ to the copper half-cell instead makes the potential',
            options: ['rise above E°', 'fall below E°', 'stay at E°', 'fall to zero']
          },
          {
            label: 'When the cell finally reaches equilibrium, the potential is',
            options: ['E°', 'twice E°', 'zero', 'negative E°']
          }
        ],
        correctAnswers: ['increase', 'below E°', 'rise above E°', 'zero'],
        hint1: '$\\text{Zn}^{2+}$ is a product, so it sits in the numerator of $Q$.',
        hint2: 'A larger $Q$ makes $\\ln Q$ positive, which subtracts from $E°$.',
        hint3: '$\\text{Cu}^{2+}$ is a reactant, in the denominator of $Q$.',
        explanation: 'More $\\text{Zn}^{2+}$ raises $Q$ above 1, so $E$ falls below $E°$. More $\\text{Cu}^{2+}$ lowers $Q$ below 1, so $E$ rises above $E°$. At equilibrium $Q = K$ and the potential is zero.'
      }
    },
    {
      id: 'ne1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Beyond Standard Potentials** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For the Daniell cell (E° = 1.10 V), the Cu²⁺ solution is diluted to 0.010 M while [Zn²⁺] stays at 1.0 M. How does the measured potential compare with E°?',
            options: [
              'It is lower, because Q is greater than 1',
              'It is higher, because Q is less than 1',
              'It equals E°, because only the copper side changed',
              'It is zero, because the cell is now at equilibrium'
            ],
            correctAnswer: 0,
            explanation: '$Q = [\\text{Zn}^{2+}]/[\\text{Cu}^{2+}] = 1.0/0.010 = 100$, which is greater than 1. A positive $\\ln Q$ subtracts from $E°$, so $E$ is below 1.10 V. The cell is still far from equilibrium (its $K$ is enormous), so the potential is not zero.'
          },
          {
            question: 'Why does the CED call cell potential a "driving force toward equilibrium"?',
            options: [
              'Because E° grows larger as the cell runs',
              'Because |E| is large when Q is far from K and zero when Q = K',
              'Because the salt bridge pushes the ions toward the electrodes',
              'Because the electrodes dissolve at a rate set by E°'
            ],
            correctAnswer: 1,
            explanation: 'The magnitude of the cell potential reflects how far the reaction is from equilibrium: it is large when $Q$ is far from $K$ and shrinks to zero when $Q = K$. $E°$ is a constant, and the salt bridge only keeps the half-cells electrically neutral.'
          },
          {
            question: 'Which change to a working Zn/Cu²⁺ galvanic cell leaves its cell potential unchanged?',
            options: [
              'Adding more Zn²⁺ ions to the zinc half-cell',
              'Adding more Cu²⁺ ions to the copper half-cell',
              'Replacing the copper strip with a larger copper strip',
              'Removing Cu²⁺ by precipitating it from the copper half-cell'
            ],
            correctAnswer: 2,
            explanation: 'Solid copper does not appear in $Q$, so a larger copper strip leaves $Q$ and $E$ unchanged. Adding $\\text{Zn}^{2+}$ raises $Q$ and lowers $E$, while adding or removing $\\text{Cu}^{2+}$ lowers or raises $Q$ and so raises or lowers $E$.'
          }
        ]
      }
    }
  ]
}
