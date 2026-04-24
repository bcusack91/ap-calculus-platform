export const chemNernstEquationConcentrationPart1Data = {
  topicSlug: 'nernst-equation-concentration',
  sections: [
    {
      id: 'ne1-intro',
      type: 'text' as const,
      content: `# 📉 Non-Standard Conditions — The Nernst Equation

**Part 1 of 7 — Beyond Standard Potentials**

---

### Topics in This Part

| Section |
|---------|
| 🔋 Deriving the Nernst Equation |
| Starting Point — Free Energy and Equilibrium |
| The Derivation |
| 📊 Key Variables |
| 🧮 At 25°C (298 K) — The Simplified Form |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ne1-derivation',
      type: 'text' as const,
      content: `
## 🔋 Deriving the Nernst Equation

### Starting Point — Free Energy and Equilibrium

We know from thermodynamics:

$$\\Delta G = \\Delta G° + RT\\ln Q$$

And from electrochemistry:

$$\\Delta G = -nFE \\qquad \\text{and} \\qquad \\Delta G° = -nFE°$$

---

### The Derivation

Substituting both into the free energy equation:

$$-nFE = -nFE° + RT\\ln Q$$

Dividing every term by $-nF$:

$$\\boxed{E = E° - \\frac{RT}{nF}\\ln Q}$$

> 💡 This is the **general form** of the Nernst equation — valid at any temperature.

---

### 📊 Key Variables

| Symbol | Meaning | Value / Units |
|--------|---------|---------------|
| $E$ | Cell potential at current conditions | V |
| $E°$ | Standard cell potential | V |
| $R$ | Gas constant | $8.314$ J/(mol·K) |
| $T$ | Temperature | K |
| $n$ | Moles of $e^-$ transferred | dimensionless |
| $F$ | Faraday\'s constant | $96{,}485$ C/mol $e^-$ |
| $Q$ | Reaction quotient | dimensionless |

---

### 🧮 At 25°C (298 K) — The Simplified Form

At room temperature, the constants combine to give:

$$E = E° - \\frac{0.0257}{n}\\ln Q \\qquad \\text{or} \\qquad E = E° - \\frac{0.0592}{n}\\log Q$$

> The second form uses $\\log$ (base 10) instead of $\\ln$ — both are commonly seen on exams.
      `
    },
    {
      id: 'ne1-interpretation',
      type: 'text' as const,
      content: `
## 🧭 Interpreting the Nernst Equation

$$E = E° - \\frac{RT}{nF}\\ln Q$$

The correction term $\\frac{RT}{nF}\\ln Q$ shifts $E$ up or down from $E°$ depending on the value of $Q$.

---

### How Q Affects E

| Condition | $Q$ | $\\ln Q$ | Effect on $E$ |
|-----------|-----|---------|--------------|
| Mostly **reactants** | $Q < 1$ | Negative | $E > E°$ — **higher** voltage ⬆️ |
| **Standard** conditions | $Q = 1$ | Zero | $E = E°$ — no correction |
| Mostly **products** | $Q > 1$ | Positive | $E < E°$ — **lower** voltage ⬇️ |
| At **equilibrium** | $Q = K$ | — | $E = 0$ — cell is dead 💀 |

---

### 🔑 Key Insight — Why Batteries Die

As a galvanic cell operates:

1. **Reactants are consumed** → $Q$ increases
2. **$E$ decreases** as $Q$ approaches $K$
3. **When $Q = K$:** $E = 0$ — the battery is "dead"

> 💡 **Tip:** A "dead" battery is simply a cell that has **reached equilibrium** — there is no longer any thermodynamic driving force for the reaction.
      `
    },
    {
      id: 'ne1-worked-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example — Daniell Cell

> **Problem:** For the Daniell cell: $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$, with $E° = +1.10$ V, $n = 2$, $T = 298$ K. Find $E$ when $[\\text{Zn}^{2+}] = 0.10$ M and $[\\text{Cu}^{2+}] = 2.0$ M.

> **Solution:**

### Step 1 — Write the Reaction Quotient

> Remember: solids are excluded from $Q$!

$$Q = \\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]} = \\frac{0.10}{2.0} = 0.050$$

---

### Step 2 — Apply the Nernst Equation

$$E = E° - \\frac{RT}{nF}\\ln Q$$

$$E = 1.10 - \\frac{(8.314)(298)}{(2)(96{,}485)}\\ln(0.050)$$

$$E = 1.10 - \\frac{2478}{192{,}970}(-3.00)$$

$$E = 1.10 - (0.01284)(-3.00) = 1.10 + 0.039$$

$$\\boxed{E = 1.14 \\text{ V}}$$

---

### Step 3 — Check the Result

> ✅ $E > E°$ because $Q < 1$ — there are **excess reactants** ($\\text{Cu}^{2+}$ is high), which drives a **higher voltage** than standard conditions.
      `
    },
    {
      id: 'ne1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Nernst Equation Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When Q = 1, the Nernst equation gives:',
            options: [
              'E = 0',
              'E = E°',
              'E = RT/nF',
              'E = −E°'
            ],
            correctAnswer: 1,
            explanation: '$E = E° - (RT/nF)\\ln(1) = E° - 0 = E°$. At standard conditions ($Q = 1$), the cell potential equals the standard cell potential.'
          },
          {
            question: 'As a galvanic cell discharges, what happens to Q and E?',
            options: [
              'Q increases, E increases',
              'Q decreases, E decreases',
              'Q increases, E decreases',
              'Q decreases, E increases'
            ],
            correctAnswer: 2,
            explanation: 'As the cell operates, reactants are consumed and products form, so $Q$ increases. According to the Nernst equation, increasing $Q$ makes $\\ln Q$ larger, which decreases $E$.'
          },
          {
            question: 'A "dead" battery has:',
            options: [
              'E = E° and Q = 1',
              'E = 0 and Q = K',
              'E = E° and Q = K',
              'E = 0 and Q = 0'
            ],
            correctAnswer: 1,
            explanation: 'A dead battery has reached equilibrium: $Q = K$ and $E = 0$. There is no driving force for the reaction in either direction.'
          }
        ]
      }
    },
    {
      id: 'ne1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Nernst Equation Calculations** 🧮

For a cell with $E° = +0.80$ V and $n = 2$ at 298 K:

**1)** If $Q = 1$, what is $E$? (in V)

**2)** If $Q = 100$, is $E$ greater than or less than $E°$? (type "greater" or "less")

**3)** If $Q = K$, what is $E$? (in V)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.80', 'less', '0'],
        hint1: '$\\ln(1) = 0$, so the correction term vanishes.',
        hint2: '$Q > 1$ means $\\ln Q > 0$, which subtracts from $E°$.',
        hint3: 'At equilibrium, no driving force remains.',
        explanation: '1) $E = E° - 0 = 0.80$ V. 2) $Q > 1$ → $\\ln Q > 0$ → subtracted from $E°$ → $E < E°$. 3) At equilibrium, $E = 0$ V.'
      }
    },
    {
      id: 'ne1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Nernst Equation Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The Nernst equation is derived from combining ΔG = ΔG° + RT ln Q with',
            options: ['PV = nRT', 'ΔG = −nFE', 'q = mcΔT', 'rate = k[A]']
          },
          {
            label: 'Increasing reactant concentration causes Q to',
            options: ['increase', 'decrease', 'stay the same', 'equal K']
          },
          {
            label: 'When Q decreases, the cell potential E',
            options: ['decreases', 'increases', 'stays the same', 'equals zero']
          },
          {
            label: 'The Nernst equation reduces to E = E° when',
            options: ['T = 0 K', 'n = 0', 'Q = 1', 'Q = K']
          }
        ],
        correctAnswers: ['ΔG = −nFE', 'decrease', 'increases', 'Q = 1'],
        hint1: '$\\Delta G = -nFE$ connects free energy to cell potential.',
        hint2: 'More reactants in the denominator → smaller Q.',
        hint3: 'Lower Q → more negative $\\ln Q$ → less subtracted → higher E.',
        explanation: 'The Nernst equation comes from ΔG = −nFE and ΔG = ΔG° + RT ln Q. More reactants → smaller Q. Smaller Q → higher E (more driving force). Q = 1 → E = E°.'
      }
    },
    {
      id: 'ne1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Nernst Equation** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For a cell with E° = 1.10 V, if you increase [products] while keeping [reactants] constant:',
            options: [
              'E increases because there are more products',
              'E decreases because Q increases',
              'E stays the same because E° does not change',
              'E becomes negative'
            ],
            correctAnswer: 1,
            explanation: 'Increasing products increases $Q$. From the Nernst equation, larger $Q$ → larger $\\ln Q$ → more is subtracted from $E°$ → lower $E$.'
          },
          {
            question: 'Why does the voltage of a battery decrease as it discharges?',
            options: [
              'The electrodes wear out',
              'The temperature decreases',
              'Q approaches K, and the Nernst equation shows E → 0',
              'E° changes over time'
            ],
            correctAnswer: 2,
            explanation: 'As the cell operates, reactants are consumed and products accumulate, so $Q$ increases toward $K$. The Nernst equation shows that as $Q \\rightarrow K$, $E \\rightarrow 0$.'
          }
        ]
      }
    }
  ]
}
