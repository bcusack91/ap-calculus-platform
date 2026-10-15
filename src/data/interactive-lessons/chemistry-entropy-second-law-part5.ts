export const chemEntropySecondLawPart5Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en5-intro',
      type: 'text' as const,
      content: `# 🔢 Calculating ΔS°_rxn from Standard Entropies

**Part 5 of 7 — The Entropy Version of the Master Equation**

---

### Topics in This Part

| Section |
|---------|
| 🌡️ The Entropy Master Equation |
| Key Differences from the Enthalpy Version |
| 🧪 Worked Example |
| Check: Does the Sign Make Sense? |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'en5-formula',
      type: 'text' as const,
      content: `
## 🌡️ The Entropy Master Equation

$$\\boxed{\\Delta S°_{\\text{rxn}} = \\sum n \\cdot S°(\\text{products}) - \\sum m \\cdot S°(\\text{reactants})}$$

where $n$ and $m$ are stoichiometric coefficients.


---

### Key Differences from the Enthalpy Version

| Feature | Enthalpy | Entropy |
|---------|----------|---------|
| Formula | $\\Delta H° = \\sum \\Delta H°_f(\\text{prod}) - \\sum \\Delta H°_f(\\text{react})$ | $\\Delta S° = \\sum S°(\\text{prod}) - \\sum S°(\\text{react})$ |
| Uses | $\\Delta H°_f$ (formation enthalpies) | $S°$ (absolute entropies) |
| Elements | $\\Delta H°_f = 0$ | $S° \\neq 0$ (always positive!) |
| Units | kJ | J/K |


---

> ⚠️ **Warning:** $S°$ for elements is **NOT zero**! This is the #1 mistake students make. Absolute entropies are always positive at temperatures above 0 K.

> ⚠️ **Warning:** Entropy is in **J/K** but enthalpy is in **kJ**. When computing $\\Delta G = \\Delta H - T\\Delta S$, divide $\\Delta S$ by 1000 (or multiply $\\Delta H$ by 1000) so units match.
      `
    },
    {
      id: 'en5-worked-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example

> **Problem:** Calculate $\\Delta S°$ for: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g)$

| Substance | $S°$ [J/(mol·K)] |
|-----------|-----------------|
| $\\text{N}_2(g)$ | 191.6 |
| $\\text{H}_2(g)$ | 130.7 |
| $\\text{NH}_3(g)$ | 192.5 |

**Solution:**

$$\\Delta S° = \\sum S°(\\text{products}) - \\sum S°(\\text{reactants})$$

$$\\Delta S° = [2(192.5)] - [1(191.6) + 3(130.7)]$$

$$\\Delta S° = 385.0 - [191.6 + 392.1]$$

$$\\Delta S° = 385.0 - 583.7 = -198.7 \\text{ J/K}$$


---

### Check: Does the Sign Make Sense?

$\\Delta n_{\\text{gas}} = 2 - 4 = -2$ (fewer moles of gas in products)

$\\Delta S < 0$ ✓ — consistent with our prediction!
      `
    },
    {
      id: 'en5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**ΔS° Calculation Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When calculating ΔS°_rxn, the standard entropy of $O_{2}(g)$ is:',
            options: [
              '0 J/(mol·K), as for any element in its standard state',
              '205.1 J/(mol·K), an absolute value',
              '−205.1 J/(mol·K), since $O_{2}$ is a reactant',
              'Undefined, since only compounds have tabulated S°'
            ],
            correctAnswer: 1,
            explanation: 'Unlike $\\Delta H°_f$ (which IS zero for elements), $S°$ is the absolute entropy and is positive for every substance at $T > 0$ K: $S°[\\text{O}_2(g)] = 205.1$ J/(mol·K). Reactant values are subtracted in $\\sum nS°_{\\text{products}} - \\sum nS°_{\\text{reactants}}$, but the tabulated $S°$ itself stays positive.'
          },
          {
            question: 'If ΔS°_rxn is negative, this tells us:',
            options: [
              'The reaction is nonspontaneous at any T',
              'The products have less entropy than the reactants',
              'The reaction must be endothermic overall',
              'The reaction has reached equilibrium'
            ],
            correctAnswer: 1,
            explanation: 'Negative $\\Delta S°$ means the products have less entropy (are more ordered) than the reactants. It does NOT by itself determine spontaneity, the sign of ΔH, or equilibrium — spontaneity requires considering both ΔH and ΔS (via ΔG).'
          },
          {
            question: 'The units of ΔS°_rxn are:',
            options: [
              'kJ/mol',
              '(J·K)/mol',
              'J/(mol·K)',
              'J/mol'
            ],
            correctAnswer: 2,
            explanation: 'Entropy changes are in J/K, or J/(mol·K) when expressed per mole of reaction. kJ/mol and J/mol are energy-per-mole units (like ΔH) with no temperature in them, and J·K/mol multiplies by temperature instead of dividing. Remember: joules, NOT kilojoules!'
          }
        ]
      }
    },
    {
      id: 'en5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**ΔS° Calculations** 🧮

> **Given:** 

| Substance | $S°$ [J/(mol·K)] |
|---|---|
| $\\text{CO}_2(g)$ | $213.7$ |
| $\\text{H}_2\\text{O}(g)$ | $188.8$ |
| $\\text{H}_2\\text{O}(l)$ | $69.9$ |
| $\\text{CH}_4(g)$ | $186.3$ |
| $\\text{O}_2(g)$ | $205.1$ |
| $\\text{C}(s)$ | $5.7$ |
| $\\text{H}_2(g)$ | $130.7$ |

**1)** Calculate $\\Delta S°$ for: $\\text{C}(s) + \\text{O}_2(g) \\rightarrow \\text{CO}_2(g)$ [J/K, to one decimal place]

**2)** Calculate $\\Delta S°$ for: $\\text{CH}_4(g) + 2\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(g)$ [J/K, to one decimal place]
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['2.9', '-5.2'],
        hint1: '$[213.7] - [5.7 + 205.1]$',
        hint2: '$[213.7 + 2(188.8)] - [186.3 + 2(205.1)]$',
        explanation: '1) $\\Delta S° = 213.7 - (5.7 + 205.1) = 213.7 - 210.8 = 2.9$ J/K. Note: despite $\\Delta n_{\\text{gas}} = 0$, ΔS° is slightly positive. 2) $\\Delta S° = [213.7 + 2(188.8)] - [186.3 + 2(205.1)] = 591.3 - 596.5 = -5.2$ J/K. With $\\Delta n_{\\text{gas}} = 3 - 3 = 0$, a value close to zero is expected. (If the water formed were liquid, using $S°[\\text{H}_2\\text{O}(l)] = 69.9$, the result would be $353.5 - 596.5 = -243.0$ J/K.)'
      }
    },
    {
      id: 'en5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**ΔS° Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When using the ΔS° formula, S° for elements like $N_{2}(g)$ is',
            options: ['zero by convention, like ΔH°f', 'negative, since elements are reactants', 'a positive value you must look up', 'undefined for pure elements']
          },
          {
            label: 'A reaction that produces more moles of gas will likely have ΔS°',
            options: ['negative', 'positive', 'zero', 'undefined']
          },
          {
            label: 'The main unit trap on the AP exam is mixing up',
            options: ['grams and moles of each species', 'joules and kilojoules for entropy', 'liters and moles for gases', 'atm and bar for standard pressure']
          },
          {
            label: 'ΔS° alone determines whether a reaction is',
            options: ['spontaneous at 298 K', 'fast or slow', 'neither — need ΔH too', 'exothermic or endothermic']
          }
        ],
        correctAnswers: ['a positive value you must look up', 'positive', 'joules and kilojoules for entropy', 'neither — need ΔH too'],
        hint1: 'S° ≠ 0 for elements! This is different from ΔH°_f.',
        hint2: 'More gas = more microstates = more entropy.',
        hint3: 'ΔH is in kJ, but ΔS is in J/K. Watch the conversion!',
        explanation: 'Elements have positive S° values (unlike ΔH°_f which is zero). More gas moles → positive ΔS°. The J vs kJ mismatch between ΔH and ΔS is a classic trap. Spontaneity requires both ΔH and ΔS (via ΔG = ΔH − TΔS).'
      }
    },
    {
      id: 'en5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Calculating ΔS°** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $2H_{2}(g)$ + $O_{2}(g)$ → $2H_{2}O(g)$, using S° values: $H_{2}$ = 130.7, $O_{2}$ = 205.1, $H_{2}O(g)$ = 188.8 [all in J/(mol·K)], ΔS° is:',
            options: [
              '+88.9 J/K',
              '−88.9 J/K',
              '−147.0 J/K',
              '+377.6 J/K'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta S° = \\sum nS°_{\\text{products}} - \\sum nS°_{\\text{reactants}} = 2(188.8) - [2(130.7) + 205.1] = 377.6 - 466.5 = -88.9$ J/K. The negative sign is expected since $\\Delta n_{\\text{gas}} = 2 - 3 = -1$. Reversing the subtraction gives +88.9, ignoring the coefficients gives 188.8 − 130.7 − 205.1 = −147.0, and treating the elements\' $S°$ as zero (as for $\\Delta H°_f$) gives +377.6.'
          },
          {
            question: 'A student calculates ΔS° = −100 J/K and ΔH° = −50 kJ. To use ΔG° = ΔH° − TΔS°, they should:',
            options: [
              'Use ΔS° = −100 kJ/K, keeping the same number',
              'Convert ΔS° to −0.100 kJ/K',
              'Use both as given, since the units cancel anyway',
              'Convert T to °C so it matches ΔH° in kJ'
            ],
            correctAnswer: 1,
            explanation: 'ΔH is in kJ and ΔS is in J/K, so one must be converted: either ΔS to kJ/K (divide by 1000: −0.100 kJ/K) or ΔH to J (multiply by 1000: −50,000 J). Relabeling −100 J/K as −100 kJ/K inflates it 1000-fold, the units do not cancel on their own, and temperature must stay in kelvins.'
          }
        ]
      }
    }
  ]
}
