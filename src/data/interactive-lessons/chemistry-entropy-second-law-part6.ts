export const chemEntropySecondLawPart6Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en6-intro',
      type: 'text' as const,
      content: `# 🛠️ Problem-Solving Workshop — Entropy

**Part 6 of 7 — Practice and Strategies**

---

### Practice Makes Perfect

This workshop features multi-step problems that mirror the AP Chemistry exam format. Each problem requires you to combine concepts from previous parts and show your work clearly.

> 🔑 **Why this matters:** The AP Chemistry exam rewards students who can apply concepts to unfamiliar problems — structured practice is the best preparation.

---

### What You'll Master in Part 6
- Working through complete multi-step problems from start to finish
- Building problem-solving strategies you can apply on the AP exam
- Identifying which concepts to apply and in what order`
    },
    {
      id: 'en6-strategy-review',
      type: 'text' as const,
      content: `
## 🛠️ Problem-Solving Strategies

---

### 📌 Strategy Reference

| Strategy | Formula / Method | Key Warning |
|----------|-----------------|-------------|
| Predict sign of ΔS | Count $\\Delta n_{\\text{gas}}$ (products − reactants) | If $\\Delta n = 0$, consider phase & complexity |
| Calculate ΔS° | $\\Delta S° = \\sum n \\cdot S°(\\text{prod}) - \\sum m \\cdot S°(\\text{react})$ | $S°$ for elements is **NOT** zero! |
| Unit conversion | Convert ΔS from J/K to kJ/K (÷ 1000) | Must match ΔH units before computing ΔG |
| Entropy of surroundings | $\\Delta S_{\\text{surr}} = -\\frac{\\Delta H_{\\text{sys}}}{T}$ | Exothermic → positive ΔSₛᵤᵣᵣ |

---

### ⚠️ Predicting the Sign of ΔS

| $\\Delta n_{\\text{gas}}$ | Sign of ΔS | Reasoning |
|--------------------------|------------|-----------|
| > 0 | Positive (+) | More gas moles = more disorder |
| < 0 | Negative (−) | Fewer gas moles = less disorder |
| = 0 | Check other factors | Phase changes, molecular complexity |

> ⚠️ **Critical:** $\\Delta H$ is in **kJ** but $\\Delta S$ is in **J/K**. Always convert before computing $\\Delta G = \\Delta H - T\\Delta S$!
      `
    },
    {
      id: 'en6-mixed-problems',
      type: 'multiple-choice' as const,
      content: `
**Mixed Entropy Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For 4Fe(s) + 3O₂(g) → 2Fe₂O₃(s), the sign of ΔS° is:',
            options: [
              'Positive',
              'Negative',
              'Zero',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta n_{\\text{gas}} = 0 - 3 = -3$. Three moles of gas are consumed with no gas produced. Entropy decreases significantly.'
          },
          {
            question: 'A reaction has ΔH = −80 kJ and ΔS = −200 J/K. At what temperature does the reaction switch from spontaneous to nonspontaneous?',
            options: [
              '400 K',
              '250 K',
              '0.4 K',
              '40,000 K'
            ],
            correctAnswer: 0,
            explanation: 'At the switchover: $\\Delta G = 0$, so $\\Delta H = T\\Delta S$. $T = \\Delta H/\\Delta S = -80{,}000/-200 = 400$ K. Below 400 K: spontaneous. Above 400 K: nonspontaneous.'
          },
          {
            question: 'The vaporization of water at 100°C and 1 atm has ΔH_vap = 40.7 kJ/mol. What is ΔS_vap?',
            options: [
              '40.7 J/(mol·K)',
              '109 J/(mol·K)',
              '0.407 J/(mol·K)',
              '373 J/(mol·K)'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta S = \\Delta H/T = 40{,}700/(373) = 109$ J/(mol·K). At the boiling point, the process is reversible so this formula applies directly.'
          }
        ]
      }
    },
    {
      id: 'en6-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Entropy Calculation Workshop** 🧮

**1)** A reaction has $\\Delta H = -150$ kJ and occurs at $T = 300$ K. What is $\\Delta S_{\\text{surroundings}}$? (in J/K)

**2)** The melting of ice at 0°C (273 K) has $\\Delta H_{\\text{fus}} = 6.01$ kJ/mol. What is $\\Delta S_{\\text{fus}}$? (in J/(mol·K), to 3 significant figures)

**3)** A reaction has $\\Delta S_{\\text{sys}} = -100$ J/K and $\\Delta S_{\\text{surr}} = +350$ J/K. What is $\\Delta S_{\\text{universe}}$? (in J/K)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['500', '22.0', '250'],
        hint1: '$\\Delta S_{\\text{surr}} = -\\Delta H/T = -(-150{,}000)/300$',
        hint2: '$\\Delta S = \\Delta H/T = 6010/273$',
        hint3: '$\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}}$',
        explanation: '1) $\\Delta S_{\\text{surr}} = -(-150{,}000)/300 = +500$ J/K. 2) $\\Delta S_{\\text{fus}} = 6010/273 = 22.0$ J/(mol·K). 3) $\\Delta S_{\\text{univ}} = -100 + 350 = +250$ J/K > 0, so the process is spontaneous.'
      }
    },
    {
      id: 'en6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Entropy Problem Strategies** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The formula ΔS = ΔH/T applies specifically at',
            options: ['any temperature', 'the equilibrium phase transition temperature', 'absolute zero', '25°C only']
          },
          {
            label: 'For ΔG = ΔH − TΔS, if ΔH < 0 and ΔS > 0, the reaction is',
            options: ['always spontaneous', 'never spontaneous', 'spontaneous only at high T', 'spontaneous only at low T']
          },
          {
            label: 'When ΔS is in J/K and ΔH is in kJ, you should',
            options: ['use them as-is', 'convert ΔS to kJ/K by dividing by 1000', 'convert ΔH to J/K', 'ignore the units']
          },
          {
            label: 'If a reaction has ΔH > 0 and ΔS > 0, it becomes spontaneous at',
            options: ['low temperatures', 'high temperatures', 'all temperatures', 'no temperature']
          }
        ],
        correctAnswers: ['the equilibrium phase transition temperature', 'always spontaneous', 'convert ΔS to kJ/K by dividing by 1000', 'high temperatures'],
        hint1: 'At the phase transition, the process is reversible and ΔG = 0.',
        hint2: 'Both terms in ΔG = ΔH − TΔS favor spontaneity.',
        hint3: 'Units must match before you can subtract.',
        explanation: 'ΔS = ΔH/T works at reversible phase transitions. ΔH < 0 and ΔS > 0 make ΔG negative at ALL temperatures. Convert units before combining. ΔH > 0, ΔS > 0: the TΔS term wins at high T, making ΔG < 0.'
      }
    },
    {
      id: 'en6-challenge',
      type: 'multiple-choice' as const,
      content: `
**Challenge Problem** 🏆
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction has ΔH° = +30.0 kJ and ΔS° = +100 J/K. Above what temperature is the reaction spontaneous?',
            options: [
              '30 K',
              '300 K',
              '3000 K',
              '0.30 K'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G = \\Delta H - T\\Delta S = 0$ at the switchover. $T = \\Delta H/\\Delta S = 30{,}000/100 = 300$ K. Above 300 K, $T\\Delta S > \\Delta H$, so $\\Delta G < 0$ (spontaneous).'
          },
          {
            question: 'At 200 K, a reaction has ΔH = +10 kJ and ΔS = +80 J/K. Is it spontaneous?',
            options: [
              'Yes — ΔG = −6 kJ',
              'No — ΔG = +26 kJ',
              'No — ΔG = −6 kJ',
              'Yes — ΔG = +26 kJ'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta G = \\Delta H - T\\Delta S = 10 - (200)(0.080) = 10 - 16 = -6$ kJ. Since $\\Delta G < 0$, the reaction is spontaneous at 200 K.'
          }
        ]
      }
    },
    {
      id: 'en6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Entropy Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction is spontaneous at all temperatures. What are the signs of ΔH and ΔS?',
            options: [
              'ΔH > 0, ΔS > 0',
              'ΔH < 0, ΔS < 0',
              'ΔH < 0, ΔS > 0',
              'ΔH > 0, ΔS < 0'
            ],
            correctAnswer: 2,
            explanation: 'For ΔG = ΔH − TΔS to be negative at ALL temperatures: ΔH must be negative (exothermic) and ΔS must be positive. Then both terms make ΔG more negative.'
          },
          {
            question: 'The dissolution of NH₄Cl in water is endothermic (ΔH > 0) and spontaneous at room temperature. What must be true?',
            options: [
              'ΔS must be negative',
              'ΔS must be positive and large enough that TΔS > ΔH',
              'The Second Law is violated',
              'Temperature must be below 0°C'
            ],
            correctAnswer: 1,
            explanation: 'For an endothermic process to be spontaneous: $\\Delta G = \\Delta H - T\\Delta S < 0$. Since $\\Delta H > 0$, we need $T\\Delta S > \\Delta H$, which requires a sufficiently large positive $\\Delta S$.'
          }
        ]
      }
    }
  ]
}
