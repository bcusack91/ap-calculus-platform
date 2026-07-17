export const chemEntropySecondLawV3Part4Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    { id: 'en4v3-intro', type: 'text' as const, content: `
# 📋 Standard Entropy — Practice Heavy

**Part 4 of 7 — Master $S°$ Values and $\\Delta S°$ Calculations**

This section focuses on building calculation fluency with standard entropy values.
    ` },
    { id: 'en4v3-review', type: 'text' as const, content: `
## Quick Reference

### Third Law

A perfect crystal at 0 K has $S = 0$. This gives us absolute entropy values.

### The Calculation Formula

$$\\Delta S°_{\\text{rxn}} = \\sum n \\cdot S°_{\\text{products}} - \\sum n \\cdot S°_{\\text{reactants}}$$

### Common $S°$ Values (J/(mol·K) at 298 K)

| Substance | $S°$ | Substance | $S°$ |
|-----------|------|-----------|------|
| $H_{2}(g)$ | 130.6 | $O_{2}(g)$ | 205.0 |
| $N_{2}(g)$ | 191.5 | $CO_{2}(g)$ | 213.7 |
| $H_{2}O(l)$ | 69.9 | $H_{2}O(g)$ | 188.7 |
| $CH_{4}(g)$ | 186.3 | $NH_{3}(g)$ | 192.3 |
| C(graphite) | 5.7 | Fe(s) | 27.3 |
    ` },
    { id: 'en4v3-calc1', type: 'input-boxes' as const, content: `
**Calculation Set 1** 🧮

$\\text{N}_2\\text{(g)} + \\text{3 H}_2\\text{(g)} \\to \\text{2 NH}_3\\text{(g)}$

Using the table: $S°$(N₂) = 191.5, $S°$(H₂) = 130.6, $S°$(NH₃) = 192.3

**1)** Calculate $\\sum nS°_{\\text{products}}$ in J/(mol·K).

**2)** Calculate $\\sum nS°_{\\text{reactants}}$ in J/(mol·K).

**3)** Calculate $\\Delta S°_{\\text{rxn}}$ in J/(mol·K).
    `, exercise: { boxes: 3, correctAnswers: ['384.6', '583.3', '-198.7'],
        hint1: '$2 \\times 192.3$',
        hint2: '$191.5 + 3 \\times 130.6$',
        hint3: 'Products − Reactants',
        explanation: '1) $2(192.3) = 384.6$. 2) $191.5 + 3(130.6) = 191.5 + 391.8 = 583.3$. 3) $384.6 - 583.3 = -198.7$ J/(mol·K). Negative because 4 mol gas → 2 mol gas.' } },
    { id: 'en4v3-calc2', type: 'input-boxes' as const, content: `
**Calculation Set 2** 🧮

$\\text{C(graphite)} + \\text{O}_2\\text{(g)} \\to \\text{CO}_2\\text{(g)}$

Using: $S°$(C) = 5.7, $S°$(O₂) = 205.0, $S°$(CO₂) = 213.7

**1)** Calculate $\\Delta S°_{\\text{rxn}}$ in J/(mol·K). Round to 1 decimal.

**2)** Is this positive or negative? (type positive or negative)

**3)** Does this make sense? Same number of gas moles, but $CO_{2}$ is more complex than $O_{2}$. (type yes or no)
    `, exercise: { boxes: 3, correctAnswers: ['3.0', 'positive', 'yes'],
        hint1: '$213.7 - (5.7 + 205.0)$',
        hint2: 'Check the sign.',
        hint3: '$CO_{2}$ is triatomic (more vibrational modes) vs $O_{2}$ diatomic, and a solid is consumed.',
        explanation: '$\\Delta S° = 213.7 - (5.7 + 205.0) = 213.7 - 210.7 = 3.0$ J/(mol·K). Slightly positive: same gas moles but solid consumed and $CO_{2}$ has more complexity.' } },
    { id: 'en4v3-quiz', type: 'multiple-choice' as const, content: `
**Trends Check** 🎯
    `, exercise: { questions: [
          { question: 'Why is $S°$ for elements NOT zero (unlike $\\Delta H_f°$)?', options: ['It should be zero — this is an error', 'Because the Third Law gives a non-zero reference', 'Because entropy is measured from 0 K where $S = 0$, and substances gain entropy as they warm to 298 K', 'Because entropy is relative'], correctAnswer: 2, explanation: '$\\Delta H_f°$ for elements is zero by convention (chosen reference). But $S°$ is measured absolutely from 0 K (Third Law), and warming from 0 K to 298 K adds entropy.' },
          { question: 'Between Ne(g) and Xe(g) at 298 K, which has higher $S°$?', options: ['Ne — lighter, moves faster', 'Xe — heavier, more closely spaced energy levels', 'Equal — both are noble gases', 'Cannot determine without data'], correctAnswer: 1, explanation: 'Heavier atoms have more closely spaced energy levels, meaning more energy microstates are accessible at the same temperature. $S°$(Xe) > $S°$(Ne).' }
        ] } },
    { id: 'en4v3-dropdown', type: 'dropdown-select' as const, content: `
**Quick Checks** 🔽
    `, exercise: { dropdowns: [
          { label: '$S°$(H₂O(g)) compared to $S°$(H₂O(l)) is', options: ['smaller', 'much larger', 'the same', 'negative'] },
          { label: 'The unit for $S°$ is', options: ['kJ/mol', 'J/(mol·K)', 'atm', 'mol/L'] },
          { label: '$S°$ for a substance is always', options: ['zero', 'negative', 'positive (at T > 0 K)', 'equal to $\\Delta H_f°$'] }
        ], correctAnswers: ['much larger', 'J/(mol·K)', 'positive (at T > 0 K)'],
        hint1: 'Gas vs liquid — enormous difference in microstates.',
        hint2: 'Watch: J not kJ!',
        hint3: 'Third Law: only a perfect crystal at 0 K has S = 0.',
        explanation: 'Gas has much higher S° than liquid (188.7 vs 69.9 for water). Units are J/(mol·K). S° is always positive above 0 K.' } },
    { id: 'en4v3-exit', type: 'multiple-choice' as const, content: `
**Exit Check** ✅
    `, exercise: { questions: [
          { question: 'For the reaction $\\text{2 H}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\to \\text{2 H}_2\\text{O(l)}$, you expect $\\Delta S°$ to be:', options: ['Very positive — water is formed', 'Very negative — 3 mol gas → 0 mol gas (all liquid)', 'Slightly positive', 'Zero'], correctAnswer: 1, explanation: '3 moles of gas become 2 moles of liquid. This massive loss of gas-phase molecules means a very negative $\\Delta S°$.' }
        ] } }
  ]
}
