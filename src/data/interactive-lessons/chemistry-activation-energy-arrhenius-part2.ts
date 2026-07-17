export const chemActivationEnergyArrheniusPart2Data = {
  topicSlug: 'activation-energy-arrhenius',
  sections: [
    {
      id: 'ae2-intro',
      type: 'text' as const,
      content: `# ⛰️ Activation Energy & Energy Diagrams

**Part 2 of 7 — The Energy Landscape of Reactions**

---

### Reading an Energy Diagram

| Feature | What It Represents | How to Find It |
|---------|-------------------|----------------|
| Y-axis height of reactants | Potential energy of reactants | Starting level |
| Y-axis height of products | Potential energy of products | Ending level |
| Peak height | Transition state energy | Highest point on curve |
| $E_a$ (forward) | Activation energy | Peak − Reactants |
| $\\Delta H$ | Enthalpy change | Products − Reactants |

> 🔑 **Why this matters:** Energy diagrams appear frequently on the AP exam — you must be able to read, label, and calculate $E_a$ and $\\Delta H$ from them.

---

### What You'll Master in Part 2
- Labeling all parts of an energy diagram (reactants, products, $E_a$, transition state)
- Distinguishing exothermic ($\\Delta H < 0$) from endothermic ($\\Delta H > 0$) diagrams
- Calculating forward and reverse activation energies from diagram data`
    },
    {
      id: 'ae2-energy-diagram',
      type: 'text' as const,
      content: `
## 🏗️ Anatomy of an Energy Diagram

An energy diagram plots **potential energy** (y-axis) vs. **reaction progress** (x-axis):


---

### Key Features

| Feature | Description |
|---------|-------------|
| **Reactants** | Starting energy level (left side) |
| **Products** | Final energy level (right side) |
| **Transition state** (activated complex) | The peak — highest energy point |
| **$E_a$ (forward)** | Energy from reactants to transition state |
| **$E_a$ (reverse)** | Energy from products to transition state |
| **$\\Delta H$** | Energy difference between products and reactants |


---

### Mathematical Relationship

$$\\boxed{E_a(\\text{reverse}) = E_a(\\text{forward}) - \\Delta H}$$

Or equivalently:

$$\\boxed{\\Delta H = E_a(\\text{forward}) - E_a(\\text{reverse})}$$
      `
    },
    {
      id: 'ae2-exo-endo',
      type: 'text' as const,
      content: `
## 📌 Exothermic vs. Endothermic Diagrams

### Exothermic ($\\Delta H < 0$): Products LOWER than Reactants

- Products are more stable (lower energy)
- $E_a(\\text{forward}) < E_a(\\text{reverse})$
- Energy is **released** to surroundings
- Example: Combustion reactions

$$\\text{Reactants} \\xrightarrow{E_a} \\text{Transition State} \\rightarrow \\text{Products (lower energy)}$$


---

### Endothermic ($\\Delta H > 0$): Products HIGHER than Reactants

- Products are less stable (higher energy)
- $E_a(\\text{forward}) > E_a(\\text{reverse})$
- Energy is **absorbed** from surroundings
- Example: Dissolving $NH_{4}NO_{3}$

$$\\text{Reactants} \\xrightarrow{E_a} \\text{Transition State} \\rightarrow \\text{Products (higher energy)}$$


---

### Important

> ⚠️ $E_a$ is **always positive** — it is always an energy *barrier* that must be overcome, regardless of whether the reaction is exo- or endothermic.
      `
    },
    {
      id: 'ae2-diagram-quiz',
      type: 'multiple-choice' as const,
      content: `
**Energy Diagram Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction has Ea(forward) = 80 kJ/mol and ΔH = −50 kJ/mol. What is Ea(reverse)?',
            options: [
              '30 kJ/mol',
              '50 kJ/mol',
              '80 kJ/mol',
              '130 kJ/mol'
            ],
            correctAnswer: 3,
            explanation: 'Ea(reverse) = Ea(forward) − ΔH = 80 − (−50) = 80 + 50 = 130 kJ/mol.'
          },
          {
            question: 'For an endothermic reaction:',
            options: [
              'Ea(forward) < Ea(reverse)',
              'Ea(forward) > Ea(reverse)',
              'Ea(forward) = Ea(reverse)',
              'Ea(forward) = ΔH'
            ],
            correctAnswer: 1,
            explanation: 'For endothermic (ΔH > 0): Ea(forward) = Ea(reverse) + ΔH. Since ΔH > 0, Ea(forward) > Ea(reverse).'
          },
          {
            question: 'The transition state (activated complex) is:',
            options: [
              'A stable intermediate that can be isolated',
              'The highest energy point on the reaction coordinate',
              'The point where ΔG = 0',
              'The same as a reaction intermediate'
            ],
            correctAnswer: 1,
            explanation: 'The transition state is the highest energy configuration along the reaction path. It exists for only ~$10^{-13}$ s and cannot be isolated. It is NOT an intermediate (which sits in an energy valley between two peaks).'
          }
        ]
      }
    },
    {
      id: 'ae2-transition-state',
      type: 'text' as const,
      content: `
## 🧊 The Transition State

The **transition state** (or **activated complex**) is the configuration of atoms at the energy maximum. It is:

- **Not a real molecule** — it cannot be isolated or observed directly
- **Fleeting** — exists for approximately $10^{-13}$ seconds
- Characterized by **partial bonds** — old bonds are partially broken, new bonds are partially formed
- Denoted with a double dagger: $\\ddagger$ (e.g., $[ABC]^\\ddagger$)


---

### Example: SN2 Reaction

$$\\text{HO}^- + \\text{CH}_3\\text{Br} \\rightarrow [\\text{HO---CH}_3\\text{---Br}]^\\ddagger \\rightarrow \\text{CH}_3\\text{OH} + \\text{Br}^-$$

In the transition state, both O−C and C−Br bonds are partial.


---

### Transition State vs. Intermediate

| Feature | Transition State | Intermediate |
|---------|-----------------|-------------|
| Energy | Maximum (peak) | Minimum (valley between peaks) |
| Stability | Unstable | Somewhat stable |
| Lifetime | ~$10^{-13}$ s | Can sometimes be detected |
| On diagram | Top of a hill | Bottom of a valley |
      `
    },
    {
      id: 'ae2-reading-diagrams',
      type: 'input-boxes' as const,
      content: `
**Reading Energy Diagrams** 🧮

An energy diagram shows:
- Reactants at 100 kJ
- Transition state at 250 kJ
- Products at 60 kJ

**1)** What is $E_a$ (forward)? (in kJ)

**2)** What is $\\Delta H$? (in kJ, include sign)

**3)** What is $E_a$ (reverse)? (in kJ)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['150', '-40', '190'],
        hint1: 'Ea(forward) = transition state − reactants = 250 − 100.',
        hint2: 'ΔH = products − reactants = 60 − 100 = −40 kJ (exothermic).',
        hint3: 'Ea(reverse) = transition state − products = 250 − 60 = 190 kJ.',
        explanation: '1) Ea = 250 − 100 = 150 kJ. 2) ΔH = 60 − 100 = −40 kJ (exothermic). 3) Ea(reverse) = 250 − 60 = 190 kJ. Check: 150 − (−40) = 190 ✓.'
      }
    },
    {
      id: 'ae2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Energy Diagram Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If products are lower in energy than reactants, the reaction is',
            options: ['endothermic', 'exothermic', 'isothermal', 'adiabatic']
          },
          {
            label: 'A catalyst affects an energy diagram by',
            options: ['lowering the product energy', 'lowering the transition state energy', 'raising the reactant energy', 'changing ΔH']
          },
          {
            label: 'The activation energy is always',
            options: ['positive', 'negative', 'zero', 'equal to ΔH']
          },
          {
            label: 'A multi-step reaction has multiple',
            options: ['ΔH values', 'transition states (peaks)', 'overall Ea values', 'equilibrium constants']
          }
        ],
        correctAnswers: ['exothermic', 'lowering the transition state energy', 'positive', 'transition states (peaks)'],
        hint1: 'Products lower → energy released → exothermic.',
        hint2: 'Catalysts lower Ea by providing an alternative pathway with a lower-energy transition state.',
        hint3: 'Ea is a barrier height — always positive.',
        explanation: 'Products lower = exothermic. Catalysts lower the transition state energy (lower Ea). Ea is always positive (a barrier). Multi-step reactions have one transition state per elementary step.'
      }
    },
    {
      id: 'ae2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Energy Diagrams** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction has Ea(forward) = 40 kJ/mol and Ea(reverse) = 100 kJ/mol. The reaction is:',
            options: [
              'Endothermic with ΔH = +60 kJ/mol',
              'Exothermic with ΔH = −60 kJ/mol',
              'Endothermic with ΔH = +40 kJ/mol',
              'Exothermic with ΔH = −40 kJ/mol'
            ],
            correctAnswer: 1,
            explanation: 'ΔH = Ea(forward) − Ea(reverse) = 40 − 100 = −60 kJ/mol. Negative ΔH = exothermic.'
          },
          {
            question: 'On an energy diagram with two peaks (two-step mechanism), the valley between the peaks represents:',
            options: [
              'The transition state',
              'The products',
              'A reaction intermediate',
              'The activation energy'
            ],
            correctAnswer: 2,
            explanation: 'The valley between two peaks is a local energy minimum — this is where a reaction intermediate exists. It has lower energy than the transition states on either side.'
          }
        ]
      }
    }
  ]
}
