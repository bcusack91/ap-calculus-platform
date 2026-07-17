export const chemSolubilityKspPart6Data = {
  topicSlug: 'solubility-ksp',
  sections: [
    {
      id: 'sk6-intro',
      type: 'text' as const,
      content: `# 🧮 Problem-Solving Workshop: Solubility Equilibria

**Part 6 of 7 — Mixed Ksp Problems**

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
      id: 'sk6-strategy',
      type: 'text' as const,
      content: `
## 📂 Problem-Type Identification

| Problem Type | Key Clue | Approach |
|-------------|----------|----------|
| Find $K_{sp}$ | Given molar solubility | Convert $s$ to ion concentrations, substitute into $K_{sp}$ |
| Find solubility | Given $K_{sp}$ | Set up $K_{sp}$ in terms of $s$, solve |
| Common ion | Dissolving in a solution with a shared ion | Use the common ion as the initial concentration |
| Precipitation? | Mixing two solutions | Calculate $Q_{sp}$ (don\'t forget dilution!), compare to $K_{sp}$ |
| Selective precipitation | Multiple ions + one reagent | Find $[\\text{reagent}]$ to precipitate each, compare |

> 💡 **Tip:** Read each problem carefully for key clues — "in a solution of..." signals common ion, "mixed with..." signals precipitation, and "separate ions" signals selective precipitation.
      `
    },
    {
      id: 'sk6-problem1',
      type: 'input-boxes' as const,
      content: `
**Problem 1: Finding K_sp from Solubility** 🧮

The molar solubility of $\\text{Ag}_2\\text{CO}_3$ is $1.3 \\times 10^{-4}$ M.

$\\text{Ag}_2\\text{CO}_3(s) \\rightleftharpoons 2\\,\\text{Ag}^+(aq) + \\text{CO}_3^{2-}(aq)$

**1)** What is $[\\text{Ag}^+]$? (Enter in scientific notation, e.g. 2.6e-4)

**2)** What is $[\\text{CO}_3^{2-}]$? (Enter in scientific notation, e.g. 1.3e-4)

**3)** What is $K_{sp}$? (Enter in scientific notation, e.g. 8.8e-12)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.6e-4', '1.3e-4', '8.8e-12'],
        hint1: '$[\\text{Ag}^+] = 2s = 2(1.3 \\times 10^{-4})$',
        hint2: '$[\\text{CO}_3^{2-}] = s = 1.3 \\times 10^{-4}$',
        hint3: '$K_{sp} = [\\text{Ag}^+]^2[\\text{CO}_3^{2-}] = (2.6 \\times 10^{-4})^2(1.3 \\times 10^{-4})$',
        explanation: '1) $[\\text{Ag}^+] = 2(1.3 \\times 10^{-4}) = 2.6 \\times 10^{-4}$ M. 2) $[\\text{CO}_3^{2-}] = 1.3 \\times 10^{-4}$ M. 3) $K_{sp} = (2.6 \\times 10^{-4})^2(1.3 \\times 10^{-4}) = (6.76 \\times 10^{-8})(1.3 \\times 10^{-4}) = 8.79 \\times 10^{-12} \\approx 8.8 \\times 10^{-12}$.'
      }
    },
    {
      id: 'sk6-problem2',
      type: 'input-boxes' as const,
      content: `
**Problem 2: Common Ion Effect** 🧮

What is the molar solubility of $\\text{SrF}_2$ ($K_{sp} = 4.3 \\times 10^{-9}$) in 0.10 M NaF?

$\\text{SrF}_2(s) \\rightleftharpoons \\text{Sr}^{2+}(aq) + 2\\,\\text{F}^-(aq)$

$K_{sp} = (s)(0.10 + 2s)^2 \\approx (s)(0.10)^2$

**1)** What is the molar solubility in 0.10 M NaF? (Enter in scientific notation, e.g. 4.3e-7)

**2)** What is the molar solubility in pure water? ($K_{sp} = 4s^3$) (Enter in scientific notation, e.g. 1.0e-3)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['4.3e-7', '1.0e-3'],
        hint1: '$s = K_{sp}/(0.10)^2 = 4.3 \\times 10^{-9}/0.010$',
        hint2: '$s = \\sqrt[3]{K_{sp}/4} = \\sqrt[3]{4.3 \\times 10^{-9}/4}$',
        explanation: '1) $s = 4.3 \\times 10^{-9}/0.010 = 4.3 \\times 10^{-7}$ M. 2) $s = \\sqrt[3]{1.075 \\times 10^{-9}} = 1.02 \\times 10^{-3} \\approx 1.0 \\times 10^{-3}$ M. The common ion reduced solubility by a factor of about 2,300.'
      }
    },
    {
      id: 'sk6-problem3',
      type: 'multiple-choice' as const,
      content: `
**Problem 3: Precipitation Decision** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '10.0 mL of 0.0040 M $AgNO_{3}$ is mixed with 10.0 mL of 0.0060 M $K_{2}CrO_{4}$. $K_{sp}(\\text{Ag}_2\\text{CrO}_4) = 1.1 \\times 10^{-12}$. After dilution: $[\\text{Ag}^+] = 0.0020$ M, $[\\text{CrO}_4^{2-}] = 0.0030$ M. What is $Q_{sp}$?',
            options: [
              '$Q_{sp} = (0.0020)^2(0.0030) = 1.2 \\times 10^{-8}$',
              '$Q_{sp} = (0.0020)(0.0030) = 6.0 \\times 10^{-6}$',
              '$Q_{sp} = (0.0020)(0.0030)^2 = 1.8 \\times 10^{-8}$',
              '$Q_{sp} = (0.0040)^2(0.0060) = 9.6 \\times 10^{-8}$'
            ],
            correctAnswer: 0,
            explanation: '$Q_{sp} = [\\text{Ag}^+]^2[\\text{CrO}_4^{2-}] = (0.0020)^2(0.0030) = (4.0 \\times 10^{-6})(3.0 \\times 10^{-3}) = 1.2 \\times 10^{-8}$. Since $Q_{sp} = 1.2 \\times 10^{-8} \\gg K_{sp} = 1.1 \\times 10^{-12}$, a precipitate forms.'
          },
          {
            question: 'A solution has $[\\text{F}^-] = 0.020$ M. What is the minimum $[\\text{Ca}^{2+}]$ needed for $\\text{CaF}_2$ to precipitate? ($K_{sp} = 3.9 \\times 10^{-11}$)',
            options: [
              '$[\\text{Ca}^{2+}] = 3.9 \\times 10^{-11}/(0.020)^2 = 9.8 \\times 10^{-8}$ M',
              '$[\\text{Ca}^{2+}] = 3.9 \\times 10^{-11}/0.020 = 2.0 \\times 10^{-9}$ M',
              '$[\\text{Ca}^{2+}] = \\sqrt{3.9 \\times 10^{-11}} = 6.2 \\times 10^{-6}$ M',
              '$[\\text{Ca}^{2+}] = 3.9 \\times 10^{-11}$ M'
            ],
            correctAnswer: 0,
            explanation: 'Precipitation begins when $Q_{sp} = K_{sp}$: $[\\text{Ca}^{2+}][\\text{F}^-]^2 = 3.9 \\times 10^{-11}$. $[\\text{Ca}^{2+}] = 3.9 \\times 10^{-11}/(0.020)^2 = 3.9 \\times 10^{-11}/(4.0 \\times 10^{-4}) = 9.75 \\times 10^{-8} \\approx 9.8 \\times 10^{-8}$ M.'
          }
        ]
      }
    },
    {
      id: 'sk6-problem4',
      type: 'dropdown-select' as const,
      content: `
**Problem 4: Strategy Selection** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Find K_sp given that 0.0015 mol dissolves per liter" — this is a',
            options: ['precipitation problem', 'common ion problem', 'K_sp from solubility problem', 'selective precipitation problem']
          },
          {
            label: '"Will $BaSO_{4}$ precipitate when mixing $BaCl_{2}$ and $Na_{2}SO_{4}$?" — this requires',
            options: ['calculating molar solubility', 'comparing Q_sp to K_sp', 'finding K_sp', 'selective precipitation analysis']
          },
          {
            label: '"Find the solubility of $PbCl_{2}$ in 0.50 M NaCl" — this involves',
            options: ['precipitation prediction', 'finding K_sp', 'the common ion effect', 'selective precipitation']
          },
          {
            label: '"Separate $Ag^{+}$ from $Cu^{2+}$ using NaCl" — this is',
            options: ['a molar solubility problem', 'a K_sp determination', 'a common ion problem', 'selective precipitation']
          }
        ],
        correctAnswers: [
          'K_sp from solubility problem',
          'comparing Q_sp to K_sp',
          'the common ion effect',
          'selective precipitation'
        ],
        hint1: 'Given molar solubility, convert to ion concentrations and find $K_{sp}$.',
        hint2: 'Mixing solutions → dilution → calculate $Q_{sp}$ → compare to $K_{sp}$.',
        hint3: 'Dissolving in a solution with a common ion reduces solubility.',
        explanation: 'Match the problem to the method: solubility → find $K_{sp}$; mixing → $Q_{sp}$ vs $K_{sp}$; common ion → reduced solubility; separating ions → selective precipitation.'
      }
    },
    {
      id: 'sk6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The molar solubility of $\\text{PbI}_2$ is $1.3 \\times 10^{-3}$ M. $K_{sp}$ is:',
            options: [
              '$(1.3 \\times 10^{-3})^2 = 1.7 \\times 10^{-6}$',
              '$(1.3 \\times 10^{-3})(2.6 \\times 10^{-3})^2 = 8.8 \\times 10^{-9}$',
              '$(1.3 \\times 10^{-3})^3 = 2.2 \\times 10^{-9}$',
              '$4(1.3 \\times 10^{-3})^3 = 8.8 \\times 10^{-9}$'
            ],
            correctAnswer: 3,
            explanation: '$\\text{PbI}_2 \\rightleftharpoons \\text{Pb}^{2+} + 2\\,\\text{I}^-$. $K_{sp} = (s)(2s)^2 = 4s^3 = 4(1.3 \\times 10^{-3})^3 = 4(2.197 \\times 10^{-9}) = 8.79 \\times 10^{-9} \\approx 8.8 \\times 10^{-9}$.'
          },
          {
            question: 'Which factor does NOT affect the molar solubility of a sparingly soluble salt?',
            options: [
              'Temperature',
              'Presence of a common ion',
              'Adding an inert salt like $NaNO_{3}$ (at low concentrations)',
              'Changing $K_{sp}$'
            ],
            correctAnswer: 2,
            explanation: 'An inert salt (one that doesn\'t share ions with the dissolving compound) has minimal effect on solubility at low concentrations. Temperature changes $K_{sp}$ itself. Common ions reduce solubility via Le Chatelier\'s principle.'
          }
        ]
      }
    }
  ]
}
