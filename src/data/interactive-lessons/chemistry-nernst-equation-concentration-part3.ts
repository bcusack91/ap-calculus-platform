export const chemNernstEquationConcentrationPart3Data = {
  topicSlug: 'nernst-equation-concentration',
  sections: [
    {
      id: 'ne3-intro',
      type: 'text' as const,
      content: `
# 🔄 Concentration Cells

**Part 3 of 7 — Same Electrodes, Different Concentrations**

A concentration cell is a special galvanic cell where both electrodes are the **same metal** and the **same half-reaction** occurs in both compartments — but at different concentrations. The voltage comes entirely from the concentration difference.
      `
    },
    {
      id: 'ne3-how-they-work',
      type: 'text' as const,
      content: `
## 🔧 How Concentration Cells Work

### The Setup — Same Metal, Different Concentrations

Both half-cells contain the **same electrode** and the **same ion** — the only difference is concentration:

| | Dilute Side | Concentrated Side |
|--|-------------|-------------------|
| **Concentration** | $[\\text{M}^{n+}]_{\\text{dilute}}$ (low) | $[\\text{M}^{n+}]_{\\text{conc}}$ (high) |
| **Role** | Anode (oxidation) | Cathode (reduction) |
| **What happens** | Metal dissolves → ions enter solution | Ions plate out → metal deposits |
| **Concentration changes** | Increases ⬆️ | Decreases ⬇️ |

---

### ⚡ E° = 0 — But the Cell Still Works!

Since both half-reactions are identical:

$$E°_{\\text{cell}} = E°_{\\text{cathode}} - E°_{\\text{anode}} = E° - E° = 0$$

> 🔑 So where does the voltage come from? **Entirely from the concentration difference!**

---

### 📐 The Nernst Equation for Concentration Cells

Starting from the Nernst equation with $E° = 0$:

$$E = 0 - \\frac{0.0592}{n}\\log Q = -\\frac{0.0592}{n}\\log\\frac{[\\text{dilute}]}{[\\text{conc}]}$$

Flipping the fraction removes the negative sign:

$$\\boxed{E = \\frac{0.0592}{n}\\log\\frac{[\\text{conc}]}{[\\text{dilute}]}}$$

> 💡 The bigger the concentration ratio, the higher the voltage. A 10× ratio gives $0.0592/n$ V per factor of 10.

---

### 🧭 Why Does Dilute = Anode?

The system wants to reach **equilibrium** (equal concentrations). It does this by:

1. **Dissolving** metal on the dilute side → increases $[\\text{M}^{n+}]$ there (oxidation = anode)
2. **Plating out** ions on the concentrated side → decreases $[\\text{M}^{n+}]$ there (reduction = cathode)
3. **Equilibrium** is reached when both sides are equal → $Q = 1$ → $E = 0$
      `
    },
    {
      id: 'ne3-worked-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example — Copper Concentration Cell

### The Problem

A Cu/Cu²⁺ concentration cell at 25°C:

| Compartment | $[\\text{Cu}^{2+}]$ | Role |
|-------------|---------------------|------|
| Left | $0.010$ M (dilute) | Anode |
| Right | $1.0$ M (concentrated) | Cathode |

**Given:** $n = 2$ (from $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$), $E° = 0$

---

### Step 1 — Identify Anode and Cathode

> Dilute side = **anode** (metal dissolves to increase concentration)
> Concentrated side = **cathode** (ions plate out to decrease concentration)

---

### Step 2 — Calculate the Reaction Quotient

$$Q = \\frac{[\\text{Cu}^{2+}]_{\\text{anode}}}{[\\text{Cu}^{2+}]_{\\text{cathode}}} = \\frac{0.010}{1.0} = 0.010$$

---

### Step 3 — Apply the Nernst Equation

$$E = 0 - \\frac{0.0592}{2}\\log(0.010)$$

$$E = -0.0296 \\times (-2.00)$$

$$\\boxed{E = +0.0592 \\text{ V} = 59.2 \\text{ mV}}$$

> 📏 Small but measurable! This is exactly the principle behind **pH meters** and **ion-selective electrodes**.

---

### ⏱️ What Happens Over Time?

| Time | Dilute Side | Concentrated Side | $E$ |
|------|-------------|-------------------|-----|
| Start | 0.010 M | 1.0 M | 59.2 mV |
| Running | Increases ⬆️ | Decreases ⬇️ | Decreasing |
| Equilibrium | ~0.505 M | ~0.505 M | **0 mV** |

> The cell **spontaneously equalizes** the concentrations — just like entropy demands!
      `
    },
    {
      id: 'ne3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concentration Cell Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a concentration cell, E° equals:',
            options: [
              'A large positive value',
              'A large negative value',
              'Zero',
              'It depends on the metal used'
            ],
            correctAnswer: 2,
            explanation: 'Both half-cells have identical half-reactions, so $E° = E°_{\\text{cathode}} - E°_{\\text{anode}} = 0$. All voltage comes from the concentration difference.'
          },
          {
            question: 'In a concentration cell, which side is the anode?',
            options: [
              'The side with higher concentration',
              'The side with lower concentration',
              'Either side — it doesn\'t matter',
              'The side with the larger electrode'
            ],
            correctAnswer: 1,
            explanation: 'The dilute side is the anode: the metal dissolves to increase the ion concentration toward equilibrium. The concentrated side is the cathode where ions plate out.'
          },
          {
            question: 'A concentration cell reaches equilibrium when:',
            options: [
              'All the metal has dissolved',
              'The concentrations are equal in both compartments',
              'The voltage reaches E°',
              'The salt bridge is saturated'
            ],
            correctAnswer: 1,
            explanation: 'Equilibrium is reached when concentrations are equal ($Q = 1$, $\\log Q = 0$, $E = 0$). The driving force for the cell is the concentration difference.'
          }
        ]
      }
    },
    {
      id: 'ne3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Concentration Cell Calculations** 🧮

At 25°C:

**1)** An Ag concentration cell has $[\\text{Ag}^+]_{\\text{dilute}} = 0.0010$ M and $[\\text{Ag}^+]_{\\text{conc}} = 1.0$ M. $n = 1$. Calculate $E$. (in V, to 3 significant figures)

**2)** A Zn concentration cell has $[\\text{Zn}^{2+}] = 0.10$ M and $1.0$ M. $n = 2$. Calculate $E$. (in V, to 3 significant figures)

**3)** If both compartments have the same concentration, $E = ?$ (in V)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.1776', '0.0296', '0'],
        hint1: '$E = (0.0592/1)\\log(1.0/0.0010) = 0.0592 \\times 3$',
        hint2: '$E = (0.0592/2)\\log(1.0/0.10) = 0.0296 \\times 1$',
        hint3: 'Equal concentrations → $Q = 1$ → $\\log(1) = 0$.',
        explanation: '1) $E = 0.0592 \\times \\log(1000) = 0.0592 \\times 3 = 0.1776$ V. 2) $E = 0.0296 \\times \\log(10) = 0.0296$ V. 3) $Q = 1$ → $E = 0$ V.'
      }
    },
    {
      id: 'ne3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Concentration Cell Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The driving force of a concentration cell is',
            options: ['the difference in E° values', 'the concentration gradient', 'the size of the electrodes', 'the type of salt bridge']
          },
          {
            label: 'As a concentration cell operates, the concentrations become',
            options: ['more different', 'more equal', 'both increase', 'both decrease']
          },
          {
            label: 'A concentration cell with a 100× concentration ratio and n = 2 produces',
            options: ['0.0592 V', '0.0296 V', '0.1184 V', '0.1776 V']
          },
          {
            label: 'Concentration cells are used in practice as',
            options: ['high-voltage batteries', 'sensors for measuring ion concentrations', 'fuel cells', 'electrolytic cells']
          }
        ],
        correctAnswers: ['the concentration gradient', 'more equal', '0.0592 V', 'sensors for measuring ion concentrations'],
        hint1: 'E° = 0, so all voltage comes from ΔC.',
        hint2: 'The cell equalizes concentrations (approaches equilibrium).',
        hint3: '$E = (0.0592/2)\\log(100) = 0.0296 \\times 2 = 0.0592$ V.',
        explanation: 'Concentration cells are driven by the concentration gradient. They equalize concentrations. 100× ratio with n=2: E = 0.0592 V. They are commonly used as ion-selective sensors (like pH meters).'
      }
    },
    {
      id: 'ne3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Concentration Cells** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A Ni concentration cell has [Ni²⁺] = 0.001 M and 1.0 M (n = 2). The voltage at 25°C is:',
            options: [
              '0.0296 V',
              '0.0592 V',
              '0.0888 V',
              '0.1184 V'
            ],
            correctAnswer: 2,
            explanation: '$E = (0.0592/2)\\log(1.0/0.001) = 0.0296 \\times \\log(1000) = 0.0296 \\times 3 = 0.0888$ V.'
          },
          {
            question: 'In a Ag concentration cell, the anode compartment starts at 0.01 M. After the cell runs for a while, the concentration at the anode is:',
            options: [
              'Lower than 0.01 M',
              'Higher than 0.01 M',
              'Exactly 0.01 M',
              'Zero'
            ],
            correctAnswer: 1,
            explanation: 'At the anode, Ag dissolves: Ag → Ag⁺ + e⁻. This increases [Ag⁺] in the dilute compartment. The cell drives both compartments toward equal concentration.'
          }
        ]
      }
    }
  ]
}
