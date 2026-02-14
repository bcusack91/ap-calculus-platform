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
## How Concentration Cells Work

### Setup

Both half-cells contain the same electrode and same ion, but at different concentrations:

- Dilute side: $[\\text{M}^{n+}]_{\\text{dilute}}$
- Concentrated side: $[\\text{M}^{n+}]_{\\text{conc}}$

### E° = 0!

Since both half-reactions are identical, $E° = 0$:

$$E°_{\\text{cell}} = E°_{\\text{cathode}} - E°_{\\text{anode}} = E° - E° = 0$$

### The Nernst Equation Gives the Voltage

$$E = 0 - \\frac{0.0592}{n}\\log Q = -\\frac{0.0592}{n}\\log\\frac{[\\text{dilute}]}{[\\text{conc}]}$$

$$E = \\frac{0.0592}{n}\\log\\frac{[\\text{conc}]}{[\\text{dilute}]}$$

### Which Side Is Which?

- **Anode** (oxidation): the **dilute** side — metal dissolves to increase $[\\text{M}^{n+}]$
- **Cathode** (reduction): the **concentrated** side — $\\text{M}^{n+}$ deposits to decrease concentration
- The cell drives toward **equal** concentrations (equilibrium)
      `
    },
    {
      id: 'ne3-worked-example',
      type: 'text' as const,
      content: `
## Worked Example

A Cu concentration cell at 25°C:

- Left compartment: $[\\text{Cu}^{2+}] = 0.010$ M
- Right compartment: $[\\text{Cu}^{2+}] = 1.0$ M

$n = 2$ (Cu²⁺ + 2e⁻ → Cu)

### Step 1: Identify Anode and Cathode

- Dilute side (0.010 M) = **anode** (oxidation)
- Concentrated side (1.0 M) = **cathode** (reduction)

### Step 2: Calculate Q

$$Q = \\frac{[\\text{Cu}^{2+}]_{\\text{anode}}}{[\\text{Cu}^{2+}]_{\\text{cathode}}} = \\frac{0.010}{1.0} = 0.010$$

### Step 3: Apply Nernst

$$E = 0 - \\frac{0.0592}{2}\\log(0.010)$$
$$= -0.0296 \\times (-2) = +0.0592 \\text{ V}$$

The cell produces 59.2 mV. Small but measurable!

### What Happens Over Time?

- Dilute side: $[\\text{Cu}^{2+}]$ increases (Cu dissolves)
- Concentrated side: $[\\text{Cu}^{2+}]$ decreases (Cu²⁺ plates out)
- Eventually: both sides equal → $E = 0$ (equilibrium)
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

1) An Ag concentration cell has $[\\text{Ag}^+]_{\\text{dilute}} = 0.0010$ M and $[\\text{Ag}^+]_{\\text{conc}} = 1.0$ M. $n = 1$. Calculate $E$. (in V, to 4 decimal places)

2) A Zn concentration cell has $[\\text{Zn}^{2+}] = 0.10$ M and $1.0$ M. $n = 2$. Calculate $E$. (in V, to 4 decimal places)

3) If both compartments have the same concentration, $E = ?$ (in V)
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
