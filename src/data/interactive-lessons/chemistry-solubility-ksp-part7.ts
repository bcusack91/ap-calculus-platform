export const chemSolubilityKspPart7Data = {
  topicSlug: 'solubility-ksp',
  sections: [
    {
      id: 'sk7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Solubility Equilibria and K_sp**

This final part reviews all solubility concepts: $K_{sp}$ expressions, molar solubility, common ion effect, precipitation predictions ($Q_{sp}$ vs $K_{sp}$), and selective precipitation. Questions mirror AP Chemistry exam formats.
      `
    },
    {
      id: 'sk7-summary',
      type: 'text' as const,
      content: `
## 📋 Complete Solubility Summary

### K_sp Expression

For $\\text{M}_a\\text{X}_b(s) \\rightleftharpoons a\\,\\text{M}^{n+} + b\\,\\text{X}^{m-}$:

$$K_{sp} = [\\text{M}^{n+}]^a[\\text{X}^{m-}]^b$$

(Solid excluded — pure solid activity = 1)


---

### Molar Solubility ($s$)

| Type | $K_{sp}$ in terms of $s$ | Solve for $s$ |
|------|--------------------------|---------------|
| MX | $s^2$ | $s = \\sqrt{K_{sp}}$ |
| MX₂ or M₂X | $4s^3$ | $s = \\sqrt[3]{K_{sp}/4}$ |
| M₂X₃ | $108s^5$ | $s = \\sqrt[5]{K_{sp}/108}$ |


---

### Common Ion Effect

Dissolving in a solution with a shared ion **decreases** solubility (Le Chatelier\'s).


---

### Precipitation

$Q_{sp} > K_{sp}$ → precipitate forms
$Q_{sp} < K_{sp}$ → no precipitate (unsaturated)
$Q_{sp} = K_{sp}$ → saturated (equilibrium)


---

### Selective Precipitation

Add reagent slowly → ion with smallest $K_{sp}$ precipitates first → filter → continue to next ion.
      `
    },
    {
      id: 'sk7-ap-mc1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following changes will increase the molar solubility of $\\text{AgCl}(s)$ in water?',
            options: [
              'Adding NaCl to the solution',
              'Adding AgNO₃ to the solution',
              'Removing some solid AgCl from the container',
              'Adding NaNO₃ (if it forms a complex with Ag⁺ or is none of the above — actually none of these common choices increases solubility simply). The correct choice: Adding NH₃, which complexes Ag⁺'
            ],
            correctAnswer: 3,
            explanation: 'Adding NaCl or AgNO₃ introduces common ions, decreasing solubility. Removing solid doesn\'t change the equilibrium (as long as some solid remains). Adding NH₃ complexes Ag⁺ (forming $\\text{Ag(NH}_3)_2^+$), removing it from solution and shifting equilibrium right, increasing solubility.'
          },
          {
            question: '$K_{sp}(\\text{BaCO}_3) = 2.6 \\times 10^{-9}$ and $K_{sp}(\\text{SrCO}_3) = 5.6 \\times 10^{-10}$. Both are 1:1 salts. Which is more soluble in pure water?',
            options: [
              'SrCO₃ (smaller $K_{sp}$)',
              'BaCO₃ (larger $K_{sp}$)',
              'They have equal solubility',
              'Cannot determine without calculating'
            ],
            correctAnswer: 1,
            explanation: 'For 1:1 salts, larger $K_{sp}$ directly means greater molar solubility ($s = \\sqrt{K_{sp}}$). $\\text{BaCO}_3$ has the larger $K_{sp}$, so it is more soluble.'
          },
          {
            question: 'A saturated solution of $\\text{CaF}_2$ is at equilibrium. Which change will cause more $\\text{CaF}_2$ to dissolve?',
            options: [
              'Adding solid CaF₂',
              'Adding NaF',
              'Adding HCl (which reacts with F⁻ to form HF)',
              'Adding CaCl₂'
            ],
            correctAnswer: 2,
            explanation: 'HCl reacts with F⁻: $\\text{H}^+ + \\text{F}^- \\rightarrow \\text{HF}$. This removes F⁻ from solution, shifting the dissolution equilibrium right, causing more CaF₂ to dissolve. Adding NaF or CaCl₂ would introduce common ions and decrease solubility.'
          }
        ]
      }
    },
    {
      id: 'sk7-ap-frq',
      type: 'input-boxes' as const,
      content: `
**AP Free-Response Style** 🧮

$\\text{Mg(OH)}_2(s) \\rightleftharpoons \\text{Mg}^{2+}(aq) + 2\\,\\text{OH}^-(aq)$, $K_{sp} = 5.6 \\times 10^{-12}$

**1)** Calculate the molar solubility of $\\text{Mg(OH)}_2$ in pure water. ($K_{sp} = 4s^3$) (Enter in scientific notation, e.g. 1.1e-4)

**2)** Calculate the molar solubility in a solution buffered at pH = 12.0 ($[\\text{OH}^-] = 0.010$ M). (Enter in scientific notation, e.g. 5.6e-8)

**3)** At pH = 12.0, what fraction of the pure-water solubility remains? (Enter as a percentage, e.g. 0.005)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.1e-4', '5.6e-8', '0.05'],
        hint1: '$s = \\sqrt[3]{K_{sp}/4} = \\sqrt[3]{5.6 \\times 10^{-12}/4}$',
        hint2: '$K_{sp} = (s)(0.010)^2 \\implies s = 5.6 \\times 10^{-12}/(1.0 \\times 10^{-4})$',
        hint3: 'Fraction = $s_{\\text{pH 12}}/s_{\\text{pure}} \\times 100\\%$',
        explanation: '1) $s = \\sqrt[3]{1.4 \\times 10^{-12}} = 1.12 \\times 10^{-4} \\approx 1.1 \\times 10^{-4}$ M. 2) $s = 5.6 \\times 10^{-12}/(0.010)^2 = 5.6 \\times 10^{-12}/10^{-4} = 5.6 \\times 10^{-8}$ M. 3) $(5.6 \\times 10^{-8})/(1.1 \\times 10^{-4}) \\times 100\\% = 0.051\\% \\approx 0.05\\%$.'
      }
    },
    {
      id: 'sk7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Final Concept Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The solid phase is excluded from K_sp because',
            options: ['it has zero concentration', 'pure solids have activity = 1', 'it doesn\'t participate in equilibrium', 'it is always in excess']
          },
          {
            label: 'The common ion effect decreases solubility by',
            options: ['changing K_sp', 'shifting equilibrium toward the solid (reactant)', 'increasing temperature', 'removing the solid']
          },
          {
            label: 'Precipitation occurs when',
            options: ['Q_sp < K_sp', 'Q_sp = K_sp', 'Q_sp > K_sp', 'Q_sp = 0']
          },
          {
            label: 'In selective precipitation, the salt with the smallest K_sp',
            options: ['precipitates last', 'never precipitates', 'precipitates first', 'dissolves more']
          }
        ],
        correctAnswers: [
          'pure solids have activity = 1',
          'shifting equilibrium toward the solid (reactant)',
          'Q_sp > K_sp',
          'precipitates first'
        ],
        hint1: 'Activity of a pure solid = 1 (constant), incorporated into K.',
        hint2: 'Adding a common ion increases product concentration → shifts left.',
        hint3: '$Q_{sp} > K_{sp}$ means supersaturated → ions precipitate.',
        explanation: 'Solid excluded because activity = 1. Common ion shifts equilibrium left (less dissolves). $Q_{sp} > K_{sp}$ → precipitation. Smallest $K_{sp}$ precipitates first.'
      }
    },
    {
      id: 'sk7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student adds excess $\\text{PbI}_2(s)$ to pure water at 25°C. At equilibrium, $[\\text{Pb}^{2+}] = 1.3 \\times 10^{-3}$ M. What is $K_{sp}$?',
            options: [
              '$K_{sp} = (1.3 \\times 10^{-3})^3 = 2.2 \\times 10^{-9}$',
              '$K_{sp} = (1.3 \\times 10^{-3})(2.6 \\times 10^{-3})^2 = 8.8 \\times 10^{-9}$',
              '$K_{sp} = (1.3 \\times 10^{-3})^2 = 1.7 \\times 10^{-6}$',
              '$K_{sp} = 4(1.3 \\times 10^{-3})^2 = 6.8 \\times 10^{-6}$'
            ],
            correctAnswer: 1,
            explanation: '$\\text{PbI}_2 \\rightleftharpoons \\text{Pb}^{2+} + 2\\,\\text{I}^-$. $[\\text{Pb}^{2+}] = s = 1.3 \\times 10^{-3}$, $[\\text{I}^-] = 2s = 2.6 \\times 10^{-3}$. $K_{sp} = (1.3 \\times 10^{-3})(2.6 \\times 10^{-3})^2 = (1.3 \\times 10^{-3})(6.76 \\times 10^{-6}) = 8.79 \\times 10^{-9} \\approx 8.8 \\times 10^{-9}$.'
          },
          {
            question: 'Which of the following correctly describes the relationship between $K_{sp}$ and solubility?',
            options: [
              '$K_{sp}$ is always equal to the molar solubility',
              '$K_{sp}$ is the product of ion concentrations at equilibrium, and molar solubility is the concentration of salt that dissolves',
              '$K_{sp}$ changes with the amount of solid added',
              'Molar solubility and $K_{sp}$ are independent of each other'
            ],
            correctAnswer: 1,
            explanation: '$K_{sp}$ is the product of equilibrium ion concentrations (raised to stoichiometric powers). Molar solubility ($s$) is the moles of salt per liter that dissolve. They are related through the stoichiometry: e.g., $K_{sp} = s^2$ for 1:1, $K_{sp} = 4s^3$ for 1:2.'
          }
        ]
      }
    }
  ]
}
