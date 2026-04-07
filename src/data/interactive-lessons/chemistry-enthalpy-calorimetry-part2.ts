export const chemEnthalpyCalorimetryPart2Data = {
  topicSlug: 'enthalpy-calorimetry',
  sections: [
    {
      id: 'eh2-intro',
      type: 'text' as const,
      content: `
# 🌡️ Enthalpy (ΔH) — The Heat of Reaction

**Part 2 of 7 — State Functions and Standard Enthalpy**

Enthalpy is the most commonly used thermodynamic quantity in chemistry. It tells us how much heat is absorbed or released during a reaction at constant pressure — which is how most reactions happen in the lab and in nature.
      `
    },
    {
      id: 'eh2-enthalpy-defined',
      type: 'text' as const,
      content: `
## 📖 What Is Enthalpy?

Enthalpy ($H$) is defined as:

$$H = E + PV$$

where $E$ is internal energy, $P$ is pressure, and $V$ is volume.

We can never measure absolute enthalpy — only the **change** in enthalpy:

$$\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}$$


---

### At Constant Pressure

At constant pressure (open beaker, atmospheric conditions):

$$\\Delta H = q_p$$

The enthalpy change equals the heat transferred at constant pressure. This is why chemists love enthalpy — it directly corresponds to the heat you can measure!


---

### Key Signs

| $\\Delta H$ | Meaning | Type |
|------------|---------|------|
| Negative (−) | Heat released | Exothermic |
| Positive (+) | Heat absorbed | Endothermic |
      `
    },
    {
      id: 'eh2-state-function',
      type: 'text' as const,
      content: `
## 🌡️ Enthalpy Is a State Function

A **state function** depends only on the current state of the system, not on how it got there.


---

### What This Means

- The enthalpy change $\\Delta H$ depends only on the **initial and final states**
- It does **not** depend on the pathway or mechanism
- The same reaction will have the same $\\Delta H$ regardless of how many steps it takes


---

### Analogy

Think of altitude: if you climb a mountain, your change in altitude depends only on your starting and ending positions — not whether you took the steep trail or the winding road. Enthalpy works the same way.


---

### Consequences

1. If a reaction can occur in one step or multiple steps, $\\Delta H$ is the same
2. This is the foundation of **Hess\'s Law** (Part 5)
3. We can calculate $\\Delta H$ for reactions we cannot directly measure
      `
    },
    {
      id: 'eh2-standard-conditions',
      type: 'text' as const,
      content: `
## 🌡️ Standard Enthalpy

Standard conditions in thermochemistry use the symbol $°$:

| Parameter | Standard Value |
|-----------|---------------|
| Pressure | $1$ atm (or $1$ bar) |
| Concentration | $1$ M (for solutions) |
| Temperature | Usually $25°\\text{C}$ ($298$ K), but must be specified |


---

### Standard Enthalpy of Reaction ($\\Delta H°_{\\text{rxn}}$)

The enthalpy change when reactants in their **standard states** are converted to products in their **standard states**.


---

### Standard State

The standard state of a substance is its most stable form at $1$ atm and the specified temperature:

| Substance | Standard State |
|-----------|---------------|
| Oxygen | $\\text{O}_2(g)$ |
| Carbon | $\\text{C}(s, \\text{graphite})$ |
| Iron | $\\text{Fe}(s)$ |
| Bromine | $\\text{Br}_2(l)$ |
| Mercury | $\\text{Hg}(l)$ |


---

### Important Relationships

If you multiply a reaction by a factor $n$:
$$\\Delta H_{\\text{new}} = n \\times \\Delta H_{\\text{original}}$$

If you reverse a reaction:
$$\\Delta H_{\\text{reverse}} = -\\Delta H_{\\text{forward}}$$
      `
    },
    {
      id: 'eh2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Enthalpy Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Enthalpy is a state function. This means:',
            options: [
              'It depends on the pathway of the reaction',
              'It can only be measured at standard conditions',
              'ΔH depends only on the initial and final states',
              'It is always positive'
            ],
            correctAnswer: 2,
            explanation: 'A state function depends only on the initial and final states, not on the path taken. This is why Hess\'s Law works — you can add up steps and get the same total ΔH.'
          },
          {
            question: 'If ΔH for 2H₂(g) + O₂(g) → 2H₂O(l) is −484 kJ, what is ΔH for H₂(g) + ½O₂(g) → H₂O(l)?',
            options: [
              '−484 kJ',
              '−242 kJ',
              '+242 kJ',
              '−968 kJ'
            ],
            correctAnswer: 1,
            explanation: 'The second equation is exactly half of the first. When you multiply a reaction by ½, you multiply ΔH by ½: $\\frac{-484}{2} = -242$ kJ.'
          },
          {
            question: 'The standard state of carbon is:',
            options: [
              'C(g)',
              'C(s, diamond)',
              'C(s, graphite)',
              'CO₂(g)'
            ],
            correctAnswer: 2,
            explanation: 'The standard state is the most stable form at 1 atm. Graphite is more stable than diamond under standard conditions, so C(s, graphite) is the standard state.'
          }
        ]
      }
    },
    {
      id: 'eh2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Enthalpy Scaling Practice** 🧮

Given: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g) \\quad \\Delta H = -92 \\text{ kJ}$

**1)** What is $\\Delta H$ for $\\frac{1}{2}\\text{N}_2(g) + \\frac{3}{2}\\text{H}_2(g) \\rightarrow \\text{NH}_3(g)$? (in kJ)

**2)** What is $\\Delta H$ for $2\\text{NH}_3(g) \\rightarrow \\text{N}_2(g) + 3\\text{H}_2(g)$? (in kJ)

**3)** What is $\\Delta H$ for $2\\text{N}_2(g) + 6\\text{H}_2(g) \\rightarrow 4\\text{NH}_3(g)$? (in kJ)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-46', '+92', '-184'],
        hint1: 'This is exactly half the original reaction, so multiply ΔH by ½.',
        hint2: 'This is the reverse of the original reaction — change the sign.',
        hint3: 'This is double the original reaction — multiply ΔH by 2.',
        explanation: '1) Half reaction: $\\frac{-92}{2} = -46$ kJ. 2) Reverse reaction: $-(-92) = +92$ kJ. 3) Doubled reaction: $2 \\times (-92) = -184$ kJ.'
      }
    },
    {
      id: 'eh2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Enthalpy Properties** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At constant pressure, ΔH equals',
            options: ['work done', 'heat transferred', 'internal energy', 'free energy']
          },
          {
            label: 'The standard state of bromine at 25°C is',
            options: ['Br₂(g)', 'Br₂(l)', 'Br(g)', 'Br₂(s)']
          },
          {
            label: 'Tripling a reaction multiplies ΔH by',
            options: ['1/3', '1', '3', '9']
          },
          {
            label: 'Enthalpy change does NOT depend on',
            options: ['initial state', 'final state', 'the reaction pathway', 'temperature']
          }
        ],
        correctAnswers: ['heat transferred', 'Br₂(l)', '3', 'the reaction pathway'],
        hint1: '$\\Delta H = q_p$ — enthalpy change equals heat at constant pressure.',
        hint2: 'Bromine is a liquid at room temperature and 1 atm.',
        hint3: 'ΔH scales linearly with the stoichiometric coefficients.',
        explanation: 'At constant pressure, ΔH = qₚ. Bromine is liquid at standard conditions. Scaling a reaction by factor n scales ΔH by n. As a state function, ΔH is path-independent.'
      }
    },
    {
      id: 'eh2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Enthalpy** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about enthalpy is FALSE?',
            options: [
              'ΔH is positive for endothermic reactions',
              'ΔH is a state function',
              'ΔH depends on the mechanism of the reaction',
              'Reversing a reaction changes the sign of ΔH'
            ],
            correctAnswer: 2,
            explanation: 'ΔH is a state function and does NOT depend on the mechanism or pathway. It depends only on the identity and states of reactants and products. All other statements are true.'
          },
          {
            question: 'Given: C(s) + O₂(g) → CO₂(g), ΔH = −393.5 kJ. What is ΔH for 3C(s) + 3O₂(g) → 3CO₂(g)?',
            options: [
              '−393.5 kJ',
              '−787.0 kJ',
              '−1180.5 kJ',
              '+1180.5 kJ'
            ],
            correctAnswer: 2,
            explanation: 'Multiplying the reaction by 3 multiplies ΔH by 3: $3 \\times (-393.5) = -1180.5$ kJ.'
          }
        ]
      }
    }
  ]
}
