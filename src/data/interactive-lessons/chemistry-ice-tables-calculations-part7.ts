export const chemIceTablesCalculationsPart7Data = {
  topicSlug: 'ice-tables-calculations',
  sections: [
    {
      id: 'ic7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — ICE Tables and Equilibrium Calculations**

This final part reviews all ICE table techniques: setup, solving for K, solving for concentrations, the 5% approximation, and the quadratic formula. These questions mirror AP Chemistry exam formats.
      `
    },
    {
      id: 'ic7-summary',
      type: 'text' as const,
      content: `
## Complete ICE Table Summary

### The ICE Table

|  | Reactant | Product |
|--|----------|---------|
| **I** | Initial concentration | Initial concentration (often 0) |
| **C** | $-($coeff$)(x)$ | $+($coeff$)(x)$ |
| **E** | I + C | I + C |

### Problem Types

| Given | Find | Method |
|-------|------|--------|
| All equilibrium conc. | K | Plug directly into K expression |
| Initial + one eq. conc. | K | Find x from ICE, then all eq. conc., then K |
| K + initial conc. | Eq. conc. | Full ICE → solve for x |

### Solving Strategies

| Condition | Strategy |
|-----------|----------|
| Perfect square | Take square root |
| $[\\text{init}]/K > 100$ | Small-x approximation |
| $[\\text{init}]/K < 100$ | Full quadratic |
| Approx gives > 5% | Switch to quadratic |

### Verification

Always check: Plug equilibrium concentrations back into K expression. The calculated K should match the given K.
      `
    },
    {
      id: 'ic7-ap-mc1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, $K_c = 0.042$. If 1.00 mol PCl₅ is placed in a 10.0 L flask, what approach is best?',
            options: [
              'Use the 5% approximation ($[\\text{init}]/K = 0.10/0.042 = 2.4 < 100$)',
              'Use the quadratic formula ($[\\text{init}]/K = 2.4 < 100$)',
              'Plug directly into K (all eq. conc. are known)',
              'No calculation needed'
            ],
            correctAnswer: 1,
            explanation: '$[\\text{PCl}_5]_0 = 1.00/10.0 = 0.10$ M. $0.10/0.042 = 2.4 < 100$. The ratio is too small for the approximation, so the quadratic formula is needed.'
          },
          {
            question: 'In an ICE table for $\\text{A} \\rightleftharpoons \\text{B} + \\text{C}$, the change row shows $-x$, $+x$, $+x$. This assumes the reaction shifts:',
            options: [
              'Left',
              'Right',
              'Neither direction',
              'Both directions equally'
            ],
            correctAnswer: 1,
            explanation: 'Reactant A decreases ($-x$) and products B, C increase ($+x$). This corresponds to a rightward shift (forward reaction).'
          },
          {
            question: 'After solving an ICE problem, a student gets $[\\text{B}] = -0.10$ M. What should the student do?',
            options: [
              'Report -0.10 M as the answer',
              'Take the absolute value to get 0.10 M',
              'Re-examine the problem — likely used the wrong quadratic root or assumed wrong shift direction',
              'Assume the reaction doesn\'t occur'
            ],
            correctAnswer: 2,
            explanation: 'A negative concentration is physically impossible. The student should check: (1) Did they pick the correct root of the quadratic? (2) Did they assume the correct direction of shift? (3) Is there an arithmetic error?'
          }
        ]
      }
    },
    {
      id: 'ic7-ap-frq',
      type: 'input-boxes' as const,
      content: `
**AP Free-Response Style** 🧮

$\\text{CO}(g) + \\text{Cl}_2(g) \\rightleftharpoons \\text{COCl}_2(g)$, $K_c = 255$ at 100°C

A 1.00 L flask is charged with 0.400 mol CO and 0.400 mol Cl₂. No COCl₂ is initially present.

1) Write the K expression and set up the ICE table. What is $[\\text{COCl}_2]$ at equilibrium in terms of x? (Enter, e.g., "x")

2) The K expression becomes $255 = \\frac{x}{(0.400-x)^2}$. Using the approximation ($0.400/255$ is small... actually $0.400/255 = 0.00157 < 100$). Should you use the quadratic? (Enter "yes" or "no")

3) Actually, $[\\text{init}]/K = 0.400/255 = 0.00157$, which is much LESS than 100. This means K is LARGE relative to the initial concentration, meaning the reaction goes nearly to completion. The limiting approach here is to assume the reaction goes to completion, then back-calculate. If the reaction goes to completion, what is the limiting reagent amount of COCl₂ formed? (Enter in mol)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['x', 'yes', '0.400'],
        hint1: 'COCl₂ starts at 0 and gains $+x$.',
        hint2: 'The ratio $[\\text{init}]/K < 100$ means the approximation fails (but for large K, not small K).',
        hint3: 'CO and Cl₂ are in a 1:1 ratio, both at 0.400 mol. They are equally limiting → 0.400 mol COCl₂.',
        explanation: '1) $[\\text{COCl}_2]_{eq} = x$. 2) Yes — when K is very large, the standard small-x approximation doesn\'t apply either; a quadratic or limiting-reagent approach is needed. 3) Both CO and Cl₂ start at 0.400 mol with 1:1 stoichiometry, so 0.400 mol COCl₂ can form at completion.'
      }
    },
    {
      id: 'ic7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Final Concept Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The E row in an ICE table equals',
            options: ['I × C', 'I + C', 'I − C', 'I / C']
          },
          {
            label: 'The 5% approximation works best when K is',
            options: ['very large', 'very small relative to initial concentration', 'equal to 1', 'negative']
          },
          {
            label: 'After solving for x, you should always',
            options: ['stop', 'check by substituting back into K', 'assume x is wrong', 'round to the nearest integer']
          },
          {
            label: 'Stoichiometric coefficients in the C row appear as',
            options: ['exponents', 'multipliers of x', 'additions', 'K values']
          }
        ],
        correctAnswers: [
          'I + C',
          'very small relative to initial concentration',
          'check by substituting back into K',
          'multipliers of x'
        ],
        hint1: 'Equilibrium = Initial + Change.',
        hint2: 'Small K → small x → valid approximation.',
        hint3: 'Always verify your answer by checking against the given K.',
        explanation: 'E = I + C. Small K (relative to initial conc.) → valid approximation. Always verify by plugging back into K. Coefficients are multipliers of x in the C row.'
      }
    },
    {
      id: 'ic7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{HA}(aq) \\rightleftharpoons \\text{H}^+(aq) + \\text{A}^-(aq)$, $K_a = 6.8 \\times 10^{-4}$, $[\\text{HA}]_0 = 0.10$ M. Using the approximation, $[\\text{H}^+]$ is:',
            options: [
              '$\\sqrt{(6.8 \\times 10^{-4})(0.10)} = 8.2 \\times 10^{-3}$ M',
              '$6.8 \\times 10^{-4}$ M',
              '$0.10$ M',
              '$\\sqrt{6.8 \\times 10^{-4}} = 0.026$ M'
            ],
            correctAnswer: 0,
            explanation: '$K_a = x^2/[\\text{HA}]_0 \\implies x = \\sqrt{K_a \\times [\\text{HA}]_0} = \\sqrt{(6.8 \\times 10^{-4})(0.10)} = \\sqrt{6.8 \\times 10^{-5}} = 8.2 \\times 10^{-3}$ M. 5% check: $8.2 \\times 10^{-3}/0.10 = 8.2\\%$ — this slightly exceeds 5%, so the quadratic would be more accurate.'
          },
          {
            question: 'An ICE table will always give you:',
            options: [
              'The rate of the reaction',
              'The equilibrium concentrations of all species',
              'The activation energy',
              'The enthalpy of reaction'
            ],
            correctAnswer: 1,
            explanation: 'ICE tables are designed to find equilibrium concentrations. They track how concentrations change from initial to equilibrium values. They do not provide kinetic information (rates, activation energy) or thermodynamic quantities like enthalpy.'
          }
        ]
      }
    }
  ]
}
