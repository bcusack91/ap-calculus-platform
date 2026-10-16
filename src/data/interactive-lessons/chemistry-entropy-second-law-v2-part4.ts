export const chemEntropySecondLawV2Part4Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en4v2-intro',
      type: 'text' as const,
      content: `
# 📊 Standard Molar Entropy

**Part 4 of 7 — Measuring and Using $S°$ Values**

Unlike enthalpy where we only measure **changes** ($\\Delta H$), entropy has **absolute values**. Every substance has a standard molar entropy $S°$ at 298 K and 1 atm.
      `
    },
    {
      id: 'en4v2-third-law',
      type: 'text' as const,
      content: `
## 📏 Absolute Entropies

A table of $S°$ values lists each substance's entropy **itself**, not a change from a chosen reference. That is the key difference from enthalpy, where we can only work with differences such as $\\Delta H°_f$.


---

### What a Tabulated $S°$ Reflects

A substance's entropy rises as it is warmed (energy disperses), with large jumps when it melts and especially when it boils (matter disperses). The tabulated value $S°$ is the total at 298 K and 1 atm, and it is positive for every substance, elements included. You never need to calculate an absolute entropy on the AP exam; you use tabulated $S°$ values (CED 9.2).
      `
    },
    {
      id: 'en4v2-trends',
      type: 'text' as const,
      content: `
## 📈 Trends in Standard Entropy

### What Makes $S°$ Larger?

| Factor | Lower $S°$ | Higher $S°$ | Why |
|--------|-----------|------------|-----|
| **Phase** | Solid | Gas | More freedom of motion |
| **Molar mass** | Light molecules | Heavy molecules | More energy levels accessible |
| **Complexity** | Simple (e.g., Ar) | Complex (e.g., $C_{3}H_{8}$) | More vibrational modes |
| **Allotrope** | Diamond | Graphite | Graphite layers slide more freely |


---

### Example $S°$ Values (J/(mol·K) at 298 K)

| Substance | $S°$ | Notes |
|-----------|------|-------|
| C(diamond) | 2.4 | Rigid 3D network |
| C(graphite) | 5.7 | Layered, more flexibility |
| $H_{2}O(l)$ | 69.9 | Liquid |
| $H_{2}O(g)$ | 188.7 | Gas — huge increase |
| $C_{3}H_{8}(g)$ | 270.3 | Large molecule, many vibrations |
      `
    },
    {
      id: 'en4v2-calculations',
      type: 'text' as const,
      content: `
## 🔢 Calculating $\\Delta S°_{\\text{rxn}}$

For any reaction:

$$\\Delta S°_{\\text{rxn}} = \\sum n \\cdot S°_{\\text{products}} - \\sum n \\cdot S°_{\\text{reactants}}$$


---

### Example

> **Problem:** For $\\text{2 H}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\to \\text{2 H}_2\\text{O(g)}$

**Solution:**

$$\\Delta S° = 2(188.7) - [2(130.6) + 205.0]$$
$$= 377.4 - 466.2 = -88.8 \\text{ J/(mol}\\cdot\\text{K)}$$

**Negative** because 3 mol of gas → 2 mol of gas (fewer molecules of gas = less entropy).
      `
    },
    {
      id: 'en4v2-practice',
      type: 'input-boxes' as const,
      content: `
**$\\Delta S°$ Calculations** 🧮

For the reaction: $\\text{CaCO}_3\\text{(s)} \\to \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$

Given: $S°$(CaCO₃) = 92.9, $S°$(CaO) = 39.7, $S°$(CO₂) = 213.7 J/(mol·K)

**1)** Calculate $\\Delta S°$ for this reaction in J/(mol·K). Round to 1 decimal place.

**2)** Is $\\Delta S°$ positive or negative? (type positive or negative)

**3)** Does this make physical sense? A solid breaks into a solid + gas — is matter more or less dispersed? (type more or less)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['160.5', 'positive', 'more'],
        hint1: '$\\Delta S° = [S°(\\text{CaO}) + S°(\\text{CO}_2)] - S°(\\text{CaCO}_3)$',
        hint2: 'Check the sign of your answer.',
        hint3: 'A solid producing a gas dramatically increases dispersal.',
        explanation: '$\\Delta S° = (39.7 + 213.7) - 92.9 = 253.4 - 92.9 = 160.5$ J/(mol·K). Positive, as expected: producing a gas from a solid makes matter much more dispersed.'
      }
    },
    {
      id: 'en4v2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Entropy Trends** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Increasing the volume of a gas at constant temperature makes its entropy',
            options: ['decrease', 'increase', 'stay the same', 'drop to zero']
          },
          {
            label: 'Between $H_{2}O(l)$ and $H_{2}O(g)$, which has higher $S°$?',
            options: ['$H_{2}O(l)$', '$H_{2}O(g)$', 'Same', 'Cannot determine']
          },
          {
            label: 'A reaction producing more gas molecules will likely have $\\Delta S°$',
            options: ['negative', 'positive', 'zero', 'equal to $\\Delta H$']
          },
          {
            label: 'Unlike $\\Delta H_f°$, $S°$ values for elements at standard state are',
            options: ['always zero', 'always positive', 'always negative', 'zero only for gases']
          }
        ],
        correctAnswers: ['increase', '$H_{2}O(g)$', 'positive', 'always positive'],
        hint1: 'A larger volume lets the gas particles spread out more.',
        hint2: 'Gas molecules are far more dispersed.',
        hint3: 'More gas molecules = more dispersal of matter.',
        explanation: 'A larger volume disperses the gas, so S increases. Gas has higher S° than liquid. More gas → positive ΔS°. Unlike $\\Delta H_f°$ (zero for elements), $S°$ is measured from absolute zero and is always positive above 0 K.'
      }
    },
    {
      id: 'en4v2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which substance has the greatest standard molar entropy at 298 K?',
            options: [
              '$CaCO_{3}(s)$',
              'Ar(g)',
              '$C_{2}H_{6}(g)$',
              '$C_{2}H_{5}OH(l)$'
            ],
            correctAnswer: 2,
            explanation: 'Gases are far more dispersed than solids or liquids, so the answer is one of the two gases; of those, $C_{2}H_{6}$ has many atoms that can vibrate and rotate, while Ar is a single atom. (S°: $C_{2}H_{6}$ 229.6, Ar 154.8, $C_{2}H_{5}OH(l)$ 160.7, $CaCO_{3}$ 92.9 J/(mol·K).)'
          }
        ]
      }
    }
  ]
}
