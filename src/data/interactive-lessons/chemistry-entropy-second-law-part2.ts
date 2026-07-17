export const chemEntropySecondLawPart2Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en2-intro',
      type: 'text' as const,
      content: `# 📈 Predicting Entropy Changes

**Part 2 of 7 — More Gas = More Entropy**

---

### Topics in This Part

| Section |
|---------|
| 🌡️ Entropy and Phase |
| Why? |
| Phase Change Entropy |
| 📏 Rules for Predicting $\\Delta S$ of Reactions |
| Rule 1: Count Moles of Gas |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 2
- Understanding the core concepts covered in Part 2
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'en2-phase-changes',
      type: 'text' as const,
      content: `
## 🌡️ Entropy and Phase

Entropy increases dramatically as matter moves from solid to liquid to gas:

$$\\boxed{S_{\\text{solid}} < S_{\\text{liquid}} \\ll S_{\\text{gas}}}$$


---

### Why?

| Phase | Molecular Freedom | Relative Entropy |
|-------|-------------------|-----------------|
| Solid | Fixed positions, vibration only | Lowest |
| Liquid | Close together but mobile | Medium |
| Gas | Far apart, random motion | Highest |

The jump from liquid → gas is much larger than solid → liquid because gas molecules have vastly more accessible positions and velocities.


---

### Phase Change Entropy

| Process | $\\Delta S$ | Reason |
|---------|-----------|--------|
| Melting (fusion) | Positive | Solid → liquid (more freedom) |
| Vaporization | Positive (large) | Liquid → gas (much more freedom) |
| Sublimation | Positive (largest) | Solid → gas |
| Freezing | Negative | Liquid → solid (less freedom) |
| Condensation | Negative | Gas → liquid (less freedom) |
      `
    },
    {
      id: 'en2-predicting-rules',
      type: 'text' as const,
      content: `
## 📏 Rules for Predicting $\\Delta S$ of Reactions

### Rule 1: Count Moles of Gas

The **most reliable** predictor of $\\Delta S$:

$$\\boxed{\\Delta n_{\\text{gas}} = \\text{mol gas (products)} - \\text{mol gas (reactants)}}$$

- If $\\Delta n_{\\text{gas}} > 0$: $\\Delta S > 0$ (entropy increases)
- If $\\Delta n_{\\text{gas}} < 0$: $\\Delta S < 0$ (entropy decreases)
- If $\\Delta n_{\\text{gas}} = 0$: need other information


---

### Rule 2: Dissolving Usually Increases Entropy

When a solid dissolves in a solvent, entropy typically increases (solid → ions or molecules in solution).

**Exception:** Some ions become so heavily hydrated that they actually decrease the entropy of water molecules around them.


---

### Rule 3: More Molecules = More Entropy

A reaction that produces more total molecules than it consumes generally has $\\Delta S > 0$.


---

### Rule 4: Temperature Increases Entropy

Higher temperature means more kinetic energy and more accessible microstates.


---

### Rule 5: Molecular Complexity

More complex molecules (more atoms, more bonds, more ways to vibrate) have higher entropy than simpler ones.
      `
    },
    {
      id: 'en2-examples',
      type: 'text' as const,
      content: `
## 🧪 Practice Examples

| Reaction | $\\Delta n_{\\text{gas}}$ | Prediction |
|----------|----------------------|------------|
| $2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(g)$ | $2 - 3 = -1$ | $\\Delta S < 0$ |
| $\\text{CaCO}_3(s) \\rightarrow \\text{CaO}(s) + \\text{CO}_2(g)$ | $1 - 0 = +1$ | $\\Delta S > 0$ |
| $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g)$ | $2 - 4 = -2$ | $\\Delta S < 0$ |
| $2\\text{KClO}_3(s) \\rightarrow 2\\text{KCl}(s) + 3\\text{O}_2(g)$ | $3 - 0 = +3$ | $\\Delta S > 0$ |


---

> 🔑 **Key Concept:** When asked to "predict the sign of $\\Delta S$" — **always start by counting moles of gas**. If $\\Delta n_{\\text{gas}} = 0$, then consider total moles and phases.
      `
    },
    {
      id: 'en2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Predicting Entropy Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For the reaction $2SO_{2}(g)$ + $O_{2}(g)$ → $2SO_{3}(g)$, the sign of ΔS is:',
            options: [
              'Positive (entropy increases)',
              'Negative (entropy decreases)',
              'Zero',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta n_{\\text{gas}} = 2 - 3 = -1$. Fewer moles of gas in products means fewer microstates, so $\\Delta S < 0$.'
          },
          {
            question: 'Which phase transition has the largest positive ΔS?',
            options: [
              'Melting',
              'Vaporization',
              'Sublimation',
              'Condensation'
            ],
            correctAnswer: 2,
            explanation: 'Sublimation (solid → gas) skips the liquid phase entirely and has the largest increase in molecular freedom and microstates.'
          },
          {
            question: 'Dissolving NaCl in water generally:',
            options: [
              'Decreases entropy because ions are organized',
              'Increases entropy because the crystal lattice breaks apart',
              'Has no effect on entropy',
              'Decreases entropy because water molecules become ordered'
            ],
            correctAnswer: 1,
            explanation: 'Dissolving breaks the ordered crystal lattice, dispersing $Na^{+}$ and $Cl^{-}$ ions throughout the solution. Despite some ordering of water around ions, the overall entropy usually increases.'
          }
        ]
      }
    },
    {
      id: 'en2-prediction-drill',
      type: 'input-boxes' as const,
      content: `
**Predict ΔS Sign** 🧮

Type "+" or "−" for the sign of $\\Delta S$:

**1)** $\\text{H}_2\\text{O}(l) \\rightarrow \\text{H}_2\\text{O}(g)$

**2)** $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g)$

**3)** $\\text{2NH}_4\\text{NO}_3(s) \\rightarrow 2\\text{N}_2(g) + \\text{O}_2(g) + 4\\text{H}_2\\text{O}(g)$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['+', '-', '+'],
        hint1: 'Liquid → gas: a huge increase in molecular freedom.',
        hint2: '$\\Delta n_{\\text{gas}} = 2 - 4 = -2$. Fewer gas molecules.',
        hint3: '$\\Delta n_{\\text{gas}} = (2 + 1 + 4) - 0 = +7$. Many more gas molecules!',
        explanation: '1) Vaporization: liquid → gas, $\\Delta S > 0$. 2) $\\Delta n_{\\text{gas}} = 2 - 4 = -2$, $\\Delta S < 0$. 3) Solid → 7 mol of gas, $\\Delta S \\gg 0$ (very positive).'
      }
    },
    {
      id: 'en2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Entropy Predictions** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The most reliable predictor of ΔS for a reaction is',
            options: ['change in temperature', 'change in pressure', 'change in moles of gas', 'change in color']
          },
          {
            label: 'Compressing a gas into a smaller volume causes entropy to',
            options: ['increase', 'decrease', 'stay the same', 'become zero']
          },
          {
            label: 'Between $O_{2}(g)$ and $O_{3}(g)$ at the same temperature, the one with higher molar entropy is',
            options: ['$O_{2}$', '$O_{3}$', 'they are equal', 'cannot determine']
          },
          {
            label: 'The entropy change for condensation is',
            options: ['positive', 'negative', 'zero', 'undefined']
          }
        ],
        correctAnswers: ['change in moles of gas', 'decrease', '$O_{3}$', 'negative'],
        hint1: 'Gases dominate the entropy calculation.',
        hint2: 'Smaller volume = fewer positions available = fewer microstates.',
        hint3: '$O_{3}$ has more atoms and more vibrational modes.',
        explanation: 'Moles of gas is the strongest predictor. Compression reduces volume and microstates. $O_{3}$ has more complexity (more atoms, more vibrations) than $O_{2}$. Condensation (gas → liquid) always decreases entropy.'
      }
    },
    {
      id: 'en2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Predicting Entropy** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For which reaction is ΔS most likely POSITIVE?',
            options: [
              '$N_{2}(g)$ + $3H_{2}(g)$ → $2NH_{3}(g)$',
              '$Ag^{+}(aq)$ + $Cl^{-}(aq)$ → AgCl(s)',
              '$CaCO_{3}(s)$ → CaO(s) + $CO_{2}(g)$',
              '2CO(g) + $O_{2}(g)$ → $2CO_{2}(g)$'
            ],
            correctAnswer: 2,
            explanation: '$CaCO_{3}(s)$ → CaO(s) + $CO_{2}(g)$: $\\Delta n_{\\text{gas}} = 1 - 0 = +1$. A gas is produced from a solid, so entropy increases. All other options have $\\Delta n_{\\text{gas}} \\leq 0$.'
          },
          {
            question: 'Rank the following in order of increasing entropy: $H_{2}O(s)$, $H_{2}O(l)$, $H_{2}O(g)$',
            options: [
              '$H_{2}O(g)$ < $H_{2}O(l)$ < $H_{2}O(s)$',
              '$H_{2}O(s)$ < $H_{2}O(g)$ < $H_{2}O(l)$',
              '$H_{2}O(s)$ < $H_{2}O(l)$ < $H_{2}O(g)$',
              'All have the same entropy'
            ],
            correctAnswer: 2,
            explanation: 'Entropy increases as solid → liquid → gas. The solid has the most ordered structure (lowest S), the gas has the most freedom of motion (highest S).'
          }
        ]
      }
    }
  ]
}
