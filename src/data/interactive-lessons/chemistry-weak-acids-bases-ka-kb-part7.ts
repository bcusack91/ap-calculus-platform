export const chemWeakAcidsBasesKaKbPart7Data = {
  topicSlug: 'weak-acids-bases-ka-kb',
  sections: [
    {
      id: 'wk7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Weak Acids, Bases, and $K_a$/$K_b$**

This final part provides comprehensive AP-style review covering all weak acid/base concepts: $K_a$/$K_b$ calculations, ICE tables, the 5% approximation, percent ionization, polyprotic acids, and salt solutions.
      `
    },
    {
      id: 'wk7-summary',
      type: 'text' as const,
      content: `
## Complete Summary

### Key Equations

| Concept | Equation |
|---------|----------|
| Weak acid $[H^+]$ | $[H^+] = \\sqrt{K_a \\cdot C}$ (with 5% check) |
| Weak base $[OH^-]$ | $[OH^-] = \\sqrt{K_b \\cdot C}$ |
| Conjugate pair link | $K_a \\times K_b = K_w = 1.0 \\times 10^{-14}$ |
| p-notation link | $pK_a + pK_b = 14$ |
| Percent ionization | $\\% = ([H^+]/C) \\times 100$ |
| 5% rule threshold | $C/K_a > 400$ |

### Decision Flowchart

1. **Strong acid/base?** → Use concentration directly
2. **Weak acid?** → ICE table with $K_a$
3. **Weak base?** → ICE table with $K_b$, find $[OH^-]$ first
4. **Salt?** → Identify hydrolyzable ion, use $K_b = K_w/K_a$ or $K_a = K_w/K_b$
5. **Always check** the 5% approximation!
      `
    },
    {
      id: 'wk7-ap-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.20 M solution of a weak acid ($K_a = 1.4 \\times 10^{-3}$) has $[H^+]$ closest to:',
            options: [
              '$0.20$ M',
              '$1.4 \\times 10^{-3}$ M',
              '$1.7 \\times 10^{-2}$ M',
              '$2.8 \\times 10^{-4}$ M'
            ],
            correctAnswer: 2,
            explanation: '$[H^+] = \\sqrt{K_a \\cdot C} = \\sqrt{(1.4 \\times 10^{-3})(0.20)} = \\sqrt{2.8 \\times 10^{-4}} = 1.67 \\times 10^{-2} \\approx 1.7 \\times 10^{-2}$ M. Note: $C/K_a = 143 < 400$, so the quadratic would give a more exact answer.'
          },
          {
            question: 'A 0.50 M $KCH_3COO$ solution has pH > 7 because:',
            options: [
              '$K^+$ reacts with water',
              '$CH_3COO^-$ is the conjugate base of weak acid $CH_3COOH$ and hydrolyzes',
              '$KCH_3COO$ is a weak acid',
              'The solution is concentrated'
            ],
            correctAnswer: 1,
            explanation: '$CH_3COO^-$ is the conjugate base of the weak acid $CH_3COOH$. It reacts with water: $CH_3COO^- + H_2O \\rightleftharpoons CH_3COOH + OH^-$, producing $OH^-$ and making the solution basic.'
          },
          {
            question: 'Which statement about polyprotic acids is FALSE?',
            options: [
              '$K_{a1} > K_{a2} > K_{a3}$',
              'pH is determined primarily by $K_{a1}$',
              '$[\\text{second anion}] \\approx K_{a2}$',
              'All dissociations contribute equally to $[H^+]$'
            ],
            correctAnswer: 3,
            explanation: 'The first dissociation contributes almost all the $[H^+]$. Each subsequent dissociation is much weaker ($K_{a1} \\gg K_{a2} \\gg K_{a3}$), so they do NOT contribute equally.'
          }
        ]
      }
    },
    {
      id: 'wk7-ap-calculation',
      type: 'input-boxes' as const,
      content: `
**AP Calculation Practice** 🧮

1) Calculate the pH of 0.35 M $NH_3$ ($K_b = 1.8 \\times 10^{-5}$). (2 decimal places)

2) What is $K_a$ for $NH_4^+$? (Enter in scientific notation, e.g. 5.6e-10)

3) A solution of 0.10 M $NH_4Cl$ has what pH? (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['11.40', '5.6e-10', '5.13', '11.400', '11.4', '0.000000', '5.130'],
        hint1: '$[OH^-] = \\sqrt{K_b \\cdot C}$; then $pH = 14 - pOH$.',
        hint2: '$K_a = K_w/K_b$.',
        hint3: '$NH_4^+$ is a weak acid; $[H^+] = \\sqrt{K_a \\cdot C}$.',
        explanation: '1) $[OH^-] = \\sqrt{(1.8 \\times 10^{-5})(0.35)} = 2.51 \\times 10^{-3}$; $pOH = 2.60$; $pH = 11.40$. 2) $K_a = 1.0 \\times 10^{-14}/(1.8 \\times 10^{-5}) = 5.56 \\times 10^{-10}$. 3) $[H^+] = \\sqrt{(5.56 \\times 10^{-10})(0.10)} = 7.45 \\times 10^{-6}$; $pH = 5.13$.'
      }
    },
    {
      id: 'wk7-ap-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A weak acid is 2.0% ionized in 0.50 M solution. Its $K_a$ is:',
            options: [
              '$2.0 \\times 10^{-4}$',
              '$1.0 \\times 10^{-4}$',
              '$4.0 \\times 10^{-5}$',
              '$2.0 \\times 10^{-2}$'
            ],
            correctAnswer: 0,
            explanation: '$[H^+] = 0.020 \\times 0.50 = 0.010$ M. $K_a = [H^+]^2/(C - [H^+]) = (0.010)^2/(0.50 - 0.010) = 1.0 \\times 10^{-4}/0.49 = 2.04 \\times 10^{-4} \\approx 2.0 \\times 10^{-4}$.'
          },
          {
            question: 'Rank these 0.10 M solutions from lowest to highest pH: (I) $HCl$, (II) $CH_3COOH$, (III) $NaCl$, (IV) $NaCH_3COO$',
            options: [
              'I < II < III < IV',
              'IV < III < II < I',
              'I < II < IV < III',
              'II < I < III < IV'
            ],
            correctAnswer: 0,
            explanation: '$HCl$ (strong acid, pH ≈ 1) < $CH_3COOH$ (weak acid, pH ≈ 2.9) < $NaCl$ (neutral, pH = 7) < $NaCH_3COO$ (basic salt, pH ≈ 8.9).'
          }
        ]
      }
    },
    {
      id: 'wk7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$K_a$ changes when you change the',
            options: ['concentration', 'temperature', 'volume', 'amount of acid']
          },
          {
            label: 'A weaker acid at the same concentration has',
            options: ['lower pH', 'higher pH', 'same pH', 'pH = 7']
          },
          {
            label: 'The 5% approximation is invalid when $C/K_a$ is',
            options: ['greater than 400', 'less than 400', 'equal to 1', 'equal to $K_w$']
          },
          {
            label: 'For $Na_2SO_4$ in water, the pH is approximately',
            options: ['acidic', 'basic', 'neutral (7)', 'cannot determine']
          }
        ],
        correctAnswers: ['temperature', 'higher pH', 'less than 400', 'neutral (7)'],
        hint1: '$K_a$ is an equilibrium constant — only temperature changes it.',
        hint2: 'Less dissociation = less $[H^+]$ = higher pH.',
        hint3: 'Below 400, the approximation error exceeds 5%.',
        explanation: '$K_a$ only changes with temperature. Weaker acid = higher pH. $C/K_a < 400$ means the approximation fails. $Na_2SO_4$ is the salt of strong acid ($H_2SO_4$) + strong base ($NaOH$) → neutral pH.'
      }
    },
    {
      id: 'wk7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Weak Acids & Bases** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'An unknown monoprotic acid (0.10 M) has pH = 2.50. Its $K_a$ is:',
            options: [
              '$1.1 \\times 10^{-4}$',
              '$3.2 \\times 10^{-3}$',
              '$1.0 \\times 10^{-5}$',
              '$5.0 \\times 10^{-3}$'
            ],
            correctAnswer: 0,
            explanation: '$[H^+] = 10^{-2.50} = 3.16 \\times 10^{-3}$ M. $K_a = (3.16 \\times 10^{-3})^2/(0.10 - 3.16 \\times 10^{-3}) = 9.99 \\times 10^{-6}/0.0968 = 1.03 \\times 10^{-4} \\approx 1.1 \\times 10^{-4}$.'
          },
          {
            question: 'The pH of 0.25 M $NaCN$ ($K_a$ of $HCN = 6.2 \\times 10^{-10}$) is closest to:',
            options: [
              '7.0',
              '9.3',
              '11.5',
              '5.2'
            ],
            correctAnswer: 2,
            explanation: '$K_b(CN^-) = K_w/K_a = 1.0 \\times 10^{-14}/(6.2 \\times 10^{-10}) = 1.61 \\times 10^{-5}$. $[OH^-] = \\sqrt{(1.61 \\times 10^{-5})(0.25)} = 2.01 \\times 10^{-3}$. $pOH = 2.70$; $pH = 11.30 \\approx 11.5$.'
          }
        ]
      }
    }
  ]
}
