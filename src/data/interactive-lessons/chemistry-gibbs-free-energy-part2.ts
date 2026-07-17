export const chemGibbsFreeEnergyPart2Data = {
  topicSlug: 'gibbs-free-energy',
  sections: [
    {
      id: 'gf2-intro',
      type: 'text' as const,
      content: `# 🔀 Four ΔH/ΔS Combinations

**Part 2 of 7 — Always, Never, or Temperature-Dependent**

---

### Topics in This Part

| Section |
|---------|
| 📌 The Four Cases |
| Case 1: ΔH < 0, ΔS > 0 — Always Spontaneous ✅ |
| Case 2: ΔH > 0, ΔS < 0 — Never Spontaneous ❌ |
| Case 3: ΔH < 0, ΔS < 0 — Spontaneous at Low T 🥶 |
| Case 4: ΔH > 0, ΔS > 0 — Spontaneous at High T 🔥 |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 2
- Understanding the core concepts covered in Part 2
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'gf2-four-cases',
      type: 'text' as const,
      content: `
## 📌 The Four Cases

### Case 1: ΔH < 0, ΔS > 0 — Always Spontaneous ✅

$$\\Delta G = (\\text{negative}) - T(\\text{positive}) = \\text{always negative}$$

- Both terms favor spontaneity
- Spontaneous at **all temperatures**
- Example: combustion of hydrocarbons


---

### Case 2: ΔH > 0, ΔS < 0 — Never Spontaneous ❌

$$\\Delta G = (\\text{positive}) - T(\\text{negative}) = \\text{always positive}$$

- Both terms oppose spontaneity
- **Never** spontaneous (the reverse reaction is always spontaneous)
- Example: the reverse of combustion


---

### Case 3: ΔH < 0, ΔS < 0 — Spontaneous at Low T 🥶

$$\\Delta G = (\\text{negative}) - T(\\text{negative})$$

- Exothermic but entropy-decreasing
- At low T: $|\\Delta H| > |T\\Delta S|$ → $\\Delta G < 0$
- At high T: $|T\\Delta S| > |\\Delta H|$ → $\\Delta G > 0$
- Example: freezing of water


---

### Case 4: ΔH > 0, ΔS > 0 — Spontaneous at High T 🔥

$$\\Delta G = (\\text{positive}) - T(\\text{positive})$$

- Endothermic but entropy-increasing
- At high T: $|T\\Delta S| > |\\Delta H|$ → $\\Delta G < 0$
- At low T: $|\\Delta H| > |T\\Delta S|$ → $\\Delta G > 0$
- Example: melting of ice, vaporization
      `
    },
    {
      id: 'gf2-summary-table',
      type: 'text' as const,
      content: `
## 📋 Summary Table

| $\\Delta H$ | $\\Delta S$ | $\\Delta G$ | Spontaneous? |
|-----------|-----------|-----------|-------------|
| − | + | Always − | Always ✅ |
| + | − | Always + | Never ❌ |
| − | − | − at low T, + at high T | Low T only 🥶 |
| + | + | + at low T, − at high T | High T only 🔥 |

> 🔑 **Key Concept:** This table appears on nearly every AP Chemistry exam. Memorize all four cases and be ready to identify which case applies from ΔH/ΔS signs.

---

### The Crossover Temperature

For Cases 3 and 4, the temperature where $\\Delta G = 0$:

$$\\boxed{T_{\\text{crossover}} = \\frac{\\Delta H}{\\Delta S}}$$

> 💡 **Tip:** This equation only gives a physically meaningful (positive) temperature when $\\Delta H$ and $\\Delta S$ have the **same sign** (Cases 3 and 4).
      `
    },
    {
      id: 'gf2-real-examples',
      type: 'text' as const,
      content: `
## 🧪 Real-World Examples

### Case 1 (Always Spontaneous): Combustion

$$\\text{CH}_4(g) + 2\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(g)$$

- $\\Delta H < 0$ (releases heat)
- $\\Delta S > 0$ ($\\Delta n_{\\text{gas}} = 3 - 3 = 0$, but products are more complex — actually $\\Delta S$ can be slightly negative for this specific reaction at standard conditions)


---

### Case 3 (Low T): Freezing Water

$$\\text{H}_2\\text{O}(l) \\rightarrow \\text{H}_2\\text{O}(s)$$

- $\\Delta H < 0$ (releases heat — exothermic)
- $\\Delta S < 0$ (liquid → solid, more ordered)
- Spontaneous only below 273 K


---

### Case 4 (High T): Melting Ice

$$\\text{H}_2\\text{O}(s) \\rightarrow \\text{H}_2\\text{O}(l)$$

- $\\Delta H > 0$ (absorbs heat — endothermic)
- $\\Delta S > 0$ (solid → liquid, more disordered)
- Spontaneous only above 273 K
      `
    },
    {
      id: 'gf2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Four Cases Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction has ΔH = +150 kJ and ΔS = −80 J/K. This reaction is:',
            options: [
              'Always spontaneous',
              'Never spontaneous',
              'Spontaneous at low T',
              'Spontaneous at high T'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta H > 0$ and $\\Delta S < 0$: Case 2. $\\Delta G = (+) - T(-) = (+) + (+) = $ always positive. The reaction is never spontaneous.'
          },
          {
            question: 'A reaction is spontaneous at low temperatures but becomes nonspontaneous at high temperatures. What are the signs of ΔH and ΔS?',
            options: [
              'ΔH < 0, ΔS > 0',
              'ΔH > 0, ΔS < 0',
              'ΔH < 0, ΔS < 0',
              'ΔH > 0, ΔS > 0'
            ],
            correctAnswer: 2,
            explanation: 'Case 3: $\\Delta H < 0$ (exothermic) and $\\Delta S < 0$. At low T, the favorable enthalpy dominates. At high T, the unfavorable entropy term ($-T\\Delta S > 0$) overwhelms ΔH.'
          },
          {
            question: 'For a reaction with ΔH = +80 kJ and ΔS = +200 J/K, the crossover temperature is:',
            options: [
              '400 K',
              '250 K',
              '160 K',
              '0.4 K'
            ],
            correctAnswer: 0,
            explanation: '$T = \\Delta H/\\Delta S = 80{,}000/200 = 400$ K. Above 400 K: spontaneous. Below 400 K: nonspontaneous.'
          }
        ]
      }
    },
    {
      id: 'gf2-classify-drill',
      type: 'input-boxes' as const,
      content: `
**Classify the Reaction** 🧮

For each combination, type "always", "never", "low T", or "high T" for when the reaction is spontaneous:

**1)** $\\Delta H < 0$, $\\Delta S > 0$

**2)** $\\Delta H > 0$, $\\Delta S > 0$

**3)** $\\Delta H > 0$, $\\Delta S < 0$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['always', 'high T', 'never'],
        hint1: 'Both terms make ΔG negative.',
        hint2: 'The TΔS term must overcome the positive ΔH.',
        hint3: 'Both terms make ΔG positive.',
        explanation: '1) ΔH < 0, ΔS > 0: ΔG always negative → always spontaneous. 2) ΔH > 0, ΔS > 0: at high T, TΔS > ΔH → ΔG < 0. 3) ΔH > 0, ΔS < 0: ΔG always positive → never spontaneous.'
      }
    },
    {
      id: 'gf2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Spontaneity and Temperature** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Freezing water below 0°C is spontaneous because',
            options: ['ΔH < 0 dominates at low T', 'ΔS > 0 dominates at low T', 'ΔG is always negative', 'ice has more energy']
          },
          {
            label: 'The crossover temperature T = ΔH/ΔS only exists when',
            options: ['ΔH and ΔS have the same sign', 'ΔH and ΔS have opposite signs', 'ΔH = 0', 'ΔS = 0']
          },
          {
            label: 'Vaporization is endothermic with ΔS > 0. It becomes spontaneous at',
            options: ['low temperatures', 'high temperatures', 'all temperatures', 'no temperature']
          },
          {
            label: 'At the crossover temperature, the system is at',
            options: ['maximum entropy', 'minimum energy', 'equilibrium', 'absolute zero']
          }
        ],
        correctAnswers: ['ΔH < 0 dominates at low T', 'ΔH and ΔS have the same sign', 'high temperatures', 'equilibrium'],
        hint1: 'Freezing: ΔH < 0, ΔS < 0. At low T, the enthalpy term wins.',
        hint2: 'T = ΔH/ΔS must be positive (a real temperature).',
        hint3: 'Case 4: ΔH > 0, ΔS > 0 → spontaneous at high T.',
        explanation: 'Freezing is exothermic (ΔH < 0) with ΔS < 0; at low T, |ΔH| > |TΔS| so ΔG < 0. The crossover T = ΔH/ΔS only gives a positive T when both have the same sign. Vaporization is Case 4 (high T). At T_crossover, ΔG = 0 → equilibrium.'
      }
    },
    {
      id: 'gf2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Four Cases** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The decomposition of $CaCO_{3}(s)$ has ΔH° = +178 kJ and ΔS° = +161 J/K. At what temperature does decomposition become spontaneous?',
            options: [
              '554 K',
              '835 K',
              '1106 K',
              '1780 K'
            ],
            correctAnswer: 2,
            explanation: '$T = \\Delta H/\\Delta S = 178{,}000/161 = 1106$ K (about 833°C). Above this temperature, the entropy term overcomes the enthalpy cost, and the reaction becomes spontaneous.'
          },
          {
            question: 'A reaction with ΔH = −50 kJ and ΔS = −100 J/K becomes nonspontaneous above:',
            options: [
              '500 K',
              '200 K',
              '50 K',
              '5000 K'
            ],
            correctAnswer: 0,
            explanation: '$T = \\Delta H/\\Delta S = -50{,}000/(-100) = 500$ K. Below 500 K: $|\\Delta H| > |T\\Delta S|$, so ΔG < 0 (spontaneous). Above 500 K: ΔG > 0 (nonspontaneous).'
          }
        ]
      }
    }
  ]
}
