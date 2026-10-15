export const chemEnthalpyCalorimetryPart2Data = {
  topicSlug: 'enthalpy-calorimetry',
  sections: [
    {
      id: 'eh2-intro',
      type: 'text' as const,
      content: `# 🌡️ Enthalpy (ΔH) — The Heat of Reaction

**Part 2 of 7 — Heat of Reaction, Amounts, and Standard Enthalpy**

---

### Topics in This Part

| Section |
|---------|
| 📖 What Is Enthalpy? |
| At Constant Pressure |
| Key Signs |
| ⚖️ Heat Depends on How Much Reacts |
| 🌡️ Standard Enthalpy |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 2
- Understanding the core concepts covered in Part 2
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'eh2-enthalpy-defined',
      type: 'text' as const,
      content: `
## 📖 What Is Enthalpy?

Enthalpy ($H$) is the heat content of a system. We can never measure absolute enthalpy — only the **change** in enthalpy:

$$\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}$$


---

### At Constant Pressure

At constant pressure (open beaker, atmospheric conditions):

$$\\boxed{\\Delta H = q_p}$$

The enthalpy change equals the heat transferred at constant pressure. This is why chemists use enthalpy — it directly corresponds to the heat you can measure (CED 6.6.A.1).

> 🔑 **Key Insight:** At constant pressure (like an open beaker), the enthalpy change IS the heat. This makes $\\Delta H$ the most practically useful thermodynamic quantity.


---

### Key Signs

| $\\Delta H$ | Meaning | Type |
|------------|---------|------|
| Negative (−) | Heat released | Exothermic |
| Positive (+) | Heat absorbed | Endothermic |
      `
    },
    {
      id: 'eh2-heat-amount',
      type: 'text' as const,
      content: `
## ⚖️ Heat Depends on How Much Reacts

A thermochemical equation's $\\Delta H$ is the heat for the reaction **exactly as written**, in moles. The heat for any other amount is proportional (CED 6.6.A):

$$\\boxed{q = n_{\\text{rxn}} \\times \\Delta H}$$

where $n_{\\text{rxn}}$ is the number of "moles of reaction" — the moles of a substance divided by its coefficient.


---

### Example

$$\\text{CH}_4(g) + 2\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l) \\quad \\Delta H = -890 \\text{ kJ}$$

| Amount burned | Moles of reaction | Heat |
|---------------|-------------------|------|
| 1.00 mol $\\text{CH}_4$ | 1.00 | 890 kJ released |
| 0.250 mol $\\text{CH}_4$ | 0.250 | 222 kJ released |
| 4.00 mol $\\text{O}_2$ | 4.00 ÷ 2 = 2.00 | 1780 kJ released |

> ⚠️ **Warning:** Divide by the coefficient of the substance you are given. 4.00 mol of $\\text{O}_2$ is only 2.00 moles of reaction, because the equation uses 2 mol $\\text{O}_2$ each time it runs.


---

### Physical State Matters

The states in the equation are part of $\\Delta H$. Forming liquid water releases more heat than forming water vapor, because condensing the vapor releases additional energy:

| Reaction | $\\Delta H$ |
|----------|------------|
| $2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(g)$ | −484 kJ |
| $2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(l)$ | −572 kJ |
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
            question: 'For $CH_{4}(g)$ + $2O_{2}(g)$ → $CO_{2}(g)$ + $2H_{2}O(l)$, ΔH = −890 kJ. How much heat is released when 0.500 mol of $CH_{4}$ burns?',
            options: [
              '890 kJ',
              '1780 kJ',
              '445 kJ',
              '223 kJ'
            ],
            correctAnswer: 2,
            explanation: 'The heat is proportional to the amount reacted: q = 0.500 mol × 890 kJ/mol = 445 kJ released. 890 kJ is the heat for one mole of reaction, 1780 kJ doubles instead of halving, and 223 kJ halves twice.'
          },
          {
            question: 'If ΔH for $2H_{2}(g)$ + $O_{2}(g)$ → $2H_{2}O(g)$ is −484 kJ, what is ΔH for $H_{2}(g)$ + $\\tfrac{1}{2} O_{2}(g)$ → $H_{2}O(g)$?',
            options: [
              '−484 kJ',
              '−242 kJ',
              '+242 kJ',
              '−968 kJ'
            ],
            correctAnswer: 1,
            explanation: 'The second equation is exactly half of the first. When you multiply a reaction by ½, you multiply ΔH by ½: $\\frac{-484}{2} = -242$ kJ. Forgetting to halve leaves −484 kJ, doubling instead gives −968 kJ, and flipping the sign gives +242 kJ (the reaction was not reversed).'
          },
          {
            question: 'The standard state of carbon is:',
            options: [
              'C(g)',
              'C(s, diamond)',
              'C(s, graphite)',
              '$CO_{2}(g)$'
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
            options: ['work done', 'heat transferred', 'activation energy', 'free energy']
          },
          {
            label: 'The standard state of bromine at 25°C is',
            options: ['$Br_{2}(g)$', '$Br_{2}(l)$', 'Br(g)', '$Br_{2}(s)$']
          },
          {
            label: 'Tripling a reaction multiplies ΔH by',
            options: ['1/3', '1', '3', '9']
          },
          {
            label: 'The heat released by an exothermic reaction is proportional to',
            options: ['the amount of reactant consumed', 'the volume of the container', 'the speed of the reaction', 'the activation energy']
          }
        ],
        correctAnswers: ['heat transferred', '$Br_{2}(l)$', '3', 'the amount of reactant consumed'],
        hint1: '$\\Delta H = q_p$ — enthalpy change equals heat at constant pressure.',
        hint2: 'Bromine is a liquid at room temperature and 1 atm.',
        hint3: 'ΔH scales linearly with the stoichiometric coefficients.',
        explanation: 'At constant pressure, ΔH = $q_{p}$. Bromine is liquid at standard conditions. Scaling a reaction by factor n scales ΔH by n. The heat released or absorbed is proportional to the moles that react (q = n × ΔH).'
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
              'The heat released is proportional to the amount that reacts',
              'ΔH for a reaction equals ΔH for its reverse reaction',
              'Tripling the coefficients triples ΔH'
            ],
            correctAnswer: 2,
            explanation: 'Reversing a reaction changes the sign of ΔH, so ΔH(reverse) = −ΔH(forward), not the same value. The other statements are true: endothermic means ΔH > 0, heat scales with the amount reacted, and tripling the coefficients triples ΔH.'
          },
          {
            question: 'Given: C(s) + $O_{2}(g)$ → $CO_{2}(g)$, ΔH = −393.5 kJ. What is ΔH for 3C(s) + $3O_{2}(g)$ → $3CO_{2}(g)$?',
            options: [
              '−393.5 kJ',
              '−787.0 kJ',
              '−1180.5 kJ',
              '+1180.5 kJ'
            ],
            correctAnswer: 2,
            explanation: 'Multiplying the reaction by 3 multiplies ΔH by 3: $3 \\times (-393.5) = -1180.5$ kJ. Multiplying by 2 instead gives −787.0 kJ, and flipping the sign gives +1180.5 kJ even though the reaction was not reversed.'
          }
        ]
      }
    }
  ]
}
