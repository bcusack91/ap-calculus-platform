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
| Crossover temperature | $T = \\Delta H / \\Delta S$ (where $\\Delta G = 0$) | Convert ΔS to kJ/K first |

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
            question: 'For 4Fe(s) + $3O_{2}(g)$ → $2Fe_{2}O_{3}(s)$, the sign of ΔS° is:',
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
              '0.4 K',
              '2.5 K',
              '16,000 K'
            ],
            correctAnswer: 0,
            explanation: 'At the switchover: $\\Delta G = 0$, so $\\Delta H = T\\Delta S$. $T = \\Delta H/\\Delta S = -80{,}000/-200 = 400$ K. Below 400 K: spontaneous. Above 400 K: nonspontaneous. Leaving ΔH in kJ gives 0.4 K, dividing ΔS by ΔH gives 2.5 K, and multiplying (80 × 200) instead of dividing gives 16,000 K.'
          },
          {
            question: 'For $2H_{2}(g) + O_{2}(g) \\rightarrow 2H_{2}O(l)$, use S°: $H_{2}$ = 130.7, $O_{2}$ = 205.1, $H_{2}O(l)$ = 69.9 J/(mol·K). What is ΔS°?',
            options: [
              '−265.9 J/K',
              '−326.7 J/K',
              '+326.7 J/K',
              '−396.6 J/K'
            ],
            correctAnswer: 1,
            explanation: 'ΔS° = 2(69.9) − [2(130.7) + 205.1] = 139.8 − 466.5 = −326.7 J/K, negative because three moles of gas become a liquid. Ignoring all the coefficients gives −265.9, leaving the 2 off water only gives −396.6, and +326.7 subtracts in the wrong order.'
          }
        ]
      }
    },
    {
      id: 'en6-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Entropy Calculation Workshop** 🧮

**1)** For $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g)$, use $S°$: $\\text{N}_2$ = 191.6, $\\text{H}_2$ = 130.7, $\\text{NH}_3$ = 192.5 J/(mol·K) to find $\\Delta S°$. (in J/K, to 4 significant figures)

**2)** For $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{SO}_3(g)$, use $S°$: $\\text{SO}_2$ = 248.2, $\\text{O}_2$ = 205.1, $\\text{SO}_3$ = 256.8 J/(mol·K) to find $\\Delta S°$. (in J/K, to 4 significant figures)

**3)** A reaction has $\\Delta H° = -92$ kJ and $\\Delta S° = -199$ J/K. Below what temperature is it thermodynamically favored? (in K, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-198.7', '-187.9', '462'],
        hint1: '$\\Delta S° = 2(192.5) - [191.6 + 3(130.7)]$',
        hint2: '$\\Delta S° = 2(256.8) - [2(248.2) + 205.1]$',
        hint3: 'Set $\\Delta G = 0$: $T = \\Delta H/\\Delta S = -92{,}000/-199$.',
        explanation: '1) $\\Delta S° = 385.0 - (191.6 + 392.1) = 385.0 - 583.7 = -198.7$ J/K (fewer moles of gas, so negative). 2) $\\Delta S° = 513.6 - (496.4 + 205.1) = 513.6 - 701.5 = -187.9$ J/K (three moles of gas become two). 3) $T = -92{,}000/-199 = 462$ K; below this temperature the favorable ΔH outweighs the unfavorable $-T\\Delta S$ term.'
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
            label: 'At the crossover temperature T = ΔH/ΔS, the value of ΔG is',
            options: ['zero', 'equal to ΔH', 'equal to −TΔS', 'equal to ΔS']
          },
          {
            label: 'For ΔG = ΔH − TΔS, if ΔH < 0 and ΔS > 0, the reaction is',
            options: ['always spontaneous', 'never spontaneous', 'spontaneous only at high T', 'spontaneous only at low T']
          },
          {
            label: 'When ΔS is in J/K and ΔH is in kJ, you should',
            options: ['use them as-is, since T fixes the units', 'convert ΔS to kJ/K by dividing by 1000', 'convert ΔS to kJ/K by multiplying by 1000', 'convert ΔH to kJ/K by dividing by 1000']
          },
          {
            label: 'If a reaction has ΔH > 0 and ΔS > 0, it becomes spontaneous at',
            options: ['low temperatures', 'high temperatures', 'all temperatures', 'no temperature']
          }
        ],
        correctAnswers: ['zero', 'always spontaneous', 'convert ΔS to kJ/K by dividing by 1000', 'high temperatures'],
        hint1: 'The crossover temperature comes from setting ΔH − TΔS equal to zero.',
        hint2: 'Both terms in ΔG = ΔH − TΔS favor spontaneity.',
        hint3: 'Units must match before you can subtract.',
        explanation: 'T = ΔH/ΔS is found by setting ΔG = 0, so ΔG is zero there. ΔH < 0 and ΔS > 0 make ΔG negative at ALL temperatures. Convert units before combining. ΔH > 0, ΔS > 0: the TΔS term wins at high T, making ΔG < 0.'
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
              '0.300 K',
              '300 K',
              '3.33 K',
              '3,000,000 K'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G = \\Delta H - T\\Delta S = 0$ at the switchover. $T = \\Delta H/\\Delta S = 30{,}000/100 = 300$ K. Above 300 K, $T\\Delta S > \\Delta H$, so $\\Delta G < 0$ (spontaneous). Leaving ΔH in kJ gives 0.300 K, dividing ΔS by ΔH gives 3.33 K, and multiplying (30,000 × 100) gives 3,000,000 K.'
          },
          {
            question: 'At 200 K, a reaction has ΔH = +10 kJ and ΔS = +80 J/K. Is it spontaneous?',
            options: [
              'Yes — ΔG = −6 kJ',
              'No — ΔG = +26 kJ',
              'Yes — ΔG = −15,990 kJ',
              'No — ΔG = +6 kJ'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta G = \\Delta H - T\\Delta S = 10 - (200)(0.080) = 10 - 16 = -6$ kJ. Since $\\Delta G < 0$, the reaction is spontaneous at 200 K. Adding TΔS instead of subtracting gives +26 kJ, using ΔS in J/K alongside ΔH in kJ gives 10 − 16,000 = −15,990 kJ, and subtracting in the wrong order (TΔS − ΔH) gives +6 kJ.'
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
            question: 'The dissolution of $NH_{4}Cl$ in water is endothermic (ΔH > 0) and spontaneous at room temperature. What must be true?',
            options: [
              'ΔS must be negative so that −TΔS offsets ΔH',
              'ΔS must be positive and large enough that TΔS > ΔH',
              'ΔH must become negative once the solid dissolves',
              'T must be low so TΔS stays below ΔH'
            ],
            correctAnswer: 1,
            explanation: 'For an endothermic process to be spontaneous: $\\Delta G = \\Delta H - T\\Delta S < 0$. Since $\\Delta H > 0$, we need $T\\Delta S > \\Delta H$, which requires a sufficiently large positive $\\Delta S$.'
          }
        ]
      }
    }
  ]
}
