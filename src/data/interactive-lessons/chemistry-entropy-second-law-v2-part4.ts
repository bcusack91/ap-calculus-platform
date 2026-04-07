export const chemEntropySecondLawV2Part4Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en4v2-intro',
      type: 'text' as const,
      content: `
# 📊 Standard Molar Entropy

**Part 4 of 7 — Measuring and Using $S°$ Values**

Unlike enthalpy where we only measure **changes** ($\\Delta H$), entropy has **absolute values**. Every substance has a standard molar entropy $S°$ at 298 K and 1 atm. This is thanks to the **Third Law of Thermodynamics**.
      `
    },
    {
      id: 'en4v2-third-law',
      type: 'text' as const,
      content: `
## 📏 The Third Law of Thermodynamics

> A perfect crystal at absolute zero (0 K) has an entropy of exactly zero.

$$S_{\\text{perfect crystal at 0 K}} = 0 \\text{ J/(mol·K)}$$

This gives us a **starting point** for measuring entropy — unlike enthalpy, where we can only measure differences.


---

### Why Perfect Crystal?

At 0 K, a perfect crystal has exactly **one microstate**: every atom is in its fixed position with zero thermal motion. Since $S = k \\ln 1 = 0$.


---

### Building Up from Zero

We measure entropy by carefully adding heat from 0 K and tracking $\\Delta S = q_{\\text{rev}}/T$:

| Phase | Method |
|-------|--------|
| 0 K → solid | Heat solid, measure $C_p$ |
| Melting point | Add $\\Delta H_{\\text{fus}} / T_{\\text{fus}}$ |
| Liquid phase | Heat liquid, measure $C_p$ |
| Boiling point | Add $\\Delta H_{\\text{vap}} / T_{\\text{vap}}$ |
| Gas phase | Heat gas, measure $C_p$ |
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
| **Complexity** | Simple (e.g., Ar) | Complex (e.g., C₃H₈) | More vibrational modes |
| **Allotrope** | Diamond | Graphite | Graphite layers slide more freely |


---

### Example $S°$ Values (J/(mol·K) at 298 K)

| Substance | $S°$ | Notes |
|-----------|------|-------|
| C(diamond) | 2.4 | Rigid 3D network |
| C(graphite) | 5.7 | Layered, more flexibility |
| H₂O(l) | 69.9 | Liquid |
| H₂O(g) | 188.7 | Gas — huge increase |
| C₃H₈(g) | 270.3 | Large molecule, many vibrations |
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
$$= 377.4 - 466.2 = -88.8 \\text{ J/(mol·K)}$$

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

**3)** Does this make physical sense? A solid breaks into a solid + gas — more or fewer microstates? (type more or fewer)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['160.5', 'positive', 'more'],
        hint1: '$\\Delta S° = [S°(\\text{CaO}) + S°(\\text{CO}_2)] - S°(\\text{CaCO}_3)$',
        hint2: 'Check the sign of your answer.',
        hint3: 'A solid producing a gas dramatically increases the number of microstates.',
        explanation: '$\\Delta S° = (39.7 + 213.7) - 92.9 = 253.4 - 92.9 = 160.5$ J/(mol·K). Positive, as expected: producing a gas from a solid creates many more microstates.'
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
            label: 'At 0 K, a perfect crystal has entropy of',
            options: ['infinity', 'zero', 'k_B', 'negative']
          },
          {
            label: 'Between H₂O(l) and H₂O(g), which has higher $S°$?',
            options: ['H₂O(l)', 'H₂O(g)', 'Same', 'Cannot determine']
          },
          {
            label: 'A reaction producing more gas molecules will likely have $\\Delta S°$',
            options: ['negative', 'positive', 'zero', 'equal to $\\Delta H$']
          },
          {
            label: 'Unlike $\\Delta H_f°$, $S°$ values for elements at standard state are',
            options: ['always zero', 'always positive (at T > 0 K)', 'always negative', 'undefined']
          }
        ],
        correctAnswers: ['zero', 'H₂O(g)', 'positive', 'always positive (at T > 0 K)'],
        hint1: 'Third Law: $S = k \\ln 1 = 0$.',
        hint2: 'Gases have vastly more microstates.',
        hint3: 'More gas molecules = more microstates.',
        explanation: 'Third Law gives S = 0 at 0 K. Gas has higher S° than liquid. More gas → positive ΔS°. Unlike $\\Delta H_f°$ (zero for elements), $S°$ is measured from absolute zero and is always positive above 0 K.'
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
            question: 'Why can we assign absolute entropy values but not absolute enthalpy values?',
            options: [
              'Entropy is more fundamental than enthalpy',
              'The Third Law gives us a zero-point reference (perfect crystal at 0 K)',
              'Enthalpy cannot be measured',
              'Entropy is always positive'
            ],
            correctAnswer: 1,
            explanation: 'The Third Law provides an absolute reference: S = 0 for a perfect crystal at 0 K. No such reference exists for enthalpy, so we use formation values (ΔH°f) instead.'
          }
        ]
      }
    }
  ]
}
