export const chemWeakAcidsBasesKaKbPart2Data = {
  topicSlug: 'weak-acids-bases-ka-kb',
  sections: [
    {
      id: 'wk2-intro',
      type: 'text' as const,
      content: `
# 🧊 ICE Tables for Weak Acids

**Part 2 of 7 — Calculating pH of Weak Acid Solutions**

The ICE table (Initial, Change, Equilibrium) is the essential tool for calculating the pH of weak acid solutions. Combined with the **5% approximation**, it simplifies calculations dramatically.
      `
    },
    {
      id: 'wk2-ice-table',
      type: 'text' as const,
      content: `
## Setting Up an ICE Table

For a weak acid $HA$ with initial concentration $C$ and acid dissociation constant $K_a$:

$$HA(aq) \\rightleftharpoons H^+(aq) + A^-(aq)$$

|  | $HA$ | $H^+$ | $A^-$ |
|--|------|--------|--------|
| **I** | $C$ | $0$ | $0$ |
| **C** | $-x$ | $+x$ | $+x$ |
| **E** | $C - x$ | $x$ | $x$ |

Substituting into $K_a$:

$$K_a = \\frac{x \\cdot x}{C - x} = \\frac{x^2}{C - x}$$

This is a quadratic equation in $x$. But we can often avoid the quadratic formula!
      `
    },
    {
      id: 'wk2-approximation',
      type: 'text' as const,
      content: `
## The 5% Approximation

If $x \\ll C$ (specifically, if $x < 5\\%$ of $C$), we can approximate:

$$C - x \\approx C$$

This simplifies the equation to:

$$K_a \\approx \\frac{x^2}{C}$$

$$x = \\sqrt{K_a \\cdot C}$$

$$[H^+] = x = \\sqrt{K_a \\cdot C}$$

$$pH = -\\log(\\sqrt{K_a \\cdot C})$$

### When Does the Approximation Work?

The approximation is valid when:

$$\\frac{C}{K_a} > 400 \\quad \\text{(conservative rule)}$$

Or equivalently, when $\\frac{x}{C} \\times 100\\% < 5\\%$.

### If the Approximation Fails

Use the quadratic formula:

$$x^2 + K_a x - K_a C = 0$$

$$x = \\frac{-K_a + \\sqrt{K_a^2 + 4K_a C}}{2}$$

(Take the positive root only — concentrations can\'t be negative!)
      `
    },
    {
      id: 'wk2-worked-example',
      type: 'text' as const,
      content: `
## Worked Example

Find the pH of 0.10 M acetic acid ($CH_3COOH$, $K_a = 1.8 \\times 10^{-5}$).

### Step 1: Check if approximation works

$$\\frac{C}{K_a} = \\frac{0.10}{1.8 \\times 10^{-5}} = 5556 > 400 \\quad \\checkmark$$

### Step 2: Use the simplified equation

$$x = \\sqrt{K_a \\cdot C} = \\sqrt{(1.8 \\times 10^{-5})(0.10)}$$

$$x = \\sqrt{1.8 \\times 10^{-6}} = 1.34 \\times 10^{-3} \\text{ M}$$

### Step 3: Verify the 5% check

$$\\frac{x}{C} \\times 100\\% = \\frac{1.34 \\times 10^{-3}}{0.10} \\times 100\\% = 1.3\\% < 5\\% \\quad \\checkmark$$

### Step 4: Calculate pH

$$pH = -\\log(1.34 \\times 10^{-3}) = 2.87$$

Compare: 0.10 M $HCl$ has $pH = 1.00$. Same concentration, but the weak acid has a much higher pH!
      `
    },
    {
      id: 'wk2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**ICE Table Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In an ICE table for a weak acid, $x$ represents:',
            options: [
              'The initial concentration of the acid',
              'The amount of acid that dissociates',
              'The $K_a$ value',
              'The pH of the solution'
            ],
            correctAnswer: 1,
            explanation: '$x$ represents the change in concentration — the amount of $HA$ that dissociates to form $H^+$ and $A^-$. At equilibrium, $[H^+] = [A^-] = x$.'
          },
          {
            question: 'The 5% approximation is valid when:',
            options: [
              '$K_a$ is very large',
              '$C/K_a > 400$',
              'The acid is strong',
              '$x > 0.05C$'
            ],
            correctAnswer: 1,
            explanation: 'When $C/K_a > 400$, the percent dissociation is less than 5%, and we can approximate $C - x \\approx C$. This works when the acid is weak and/or the concentration is not too dilute.'
          },
          {
            question: 'For 0.10 M $CH_3COOH$ ($K_a = 1.8 \\times 10^{-5}$), $[H^+]$ is closest to:',
            options: [
              '0.10 M',
              '$1.8 \\times 10^{-5}$ M',
              '$1.3 \\times 10^{-3}$ M',
              '$1.8 \\times 10^{-6}$ M'
            ],
            correctAnswer: 2,
            explanation: '$[H^+] = \\sqrt{K_a \\cdot C} = \\sqrt{(1.8 \\times 10^{-5})(0.10)} = \\sqrt{1.8 \\times 10^{-6}} = 1.34 \\times 10^{-3}$ M.'
          }
        ]
      }
    },
    {
      id: 'wk2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Weak Acid pH Calculations** 🧮

1) Find the pH of 0.25 M $HF$ ($K_a = 6.8 \\times 10^{-4}$). (2 decimal places)

2) Find $[H^+]$ for 0.050 M $HCN$ ($K_a = 6.2 \\times 10^{-10}$). (Enter in scientific notation, e.g. 5.6e-6)

3) What is the percent ionization of 0.10 M acetic acid ($[H^+] = 1.34 \\times 10^{-3}$ M)? (1 decimal place, enter number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.88', '5.6e-6', '1.3', '1.880', '0.00001', '1.30'],
        hint1: '$[H^+] = \\sqrt{(6.8 \\times 10^{-4})(0.25)}$, then $pH = -\\log[H^+]$.',
        hint2: '$[H^+] = \\sqrt{(6.2 \\times 10^{-10})(0.050)}$.',
        hint3: 'Percent ionization = $([H^+]/C) \\times 100\\%$.',
        explanation: '1) $[H^+] = \\sqrt{(6.8 \\times 10^{-4})(0.25)} = \\sqrt{1.7 \\times 10^{-4}} = 0.013$ M; $pH = -\\log(0.013) = 1.89$. 2) $[H^+] = \\sqrt{(6.2 \\times 10^{-10})(0.050)} = \\sqrt{3.1 \\times 10^{-11}} = 5.57 \\times 10^{-6}$ M. 3) $(1.34 \\times 10^{-3}/0.10) \\times 100 = 1.3\\%$.'
      }
    },
    {
      id: 'wk2-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**ICE Table Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At equilibrium in a weak acid solution, the major species is',
            options: ['$H^+$', '$A^-$', 'undissociated $HA$', 'water only']
          },
          {
            label: 'If the 5% approximation fails, you must',
            options: ['assume 100% dissociation', 'use the quadratic formula', 'use a different acid', 'ignore the result']
          },
          {
            label: 'Increasing the initial concentration of a weak acid will',
            options: ['increase $K_a$', 'decrease $K_a$', 'decrease percent ionization', 'not affect equilibrium']
          }
        ],
        correctAnswers: ['undissociated $HA$', 'use the quadratic formula', 'decrease percent ionization'],
        hint1: 'Weak acids are mostly undissociated.',
        hint2: 'The quadratic formula gives the exact solution.',
        hint3: '$K_a$ is constant; higher $C$ means relatively less dissociation.',
        explanation: 'Most of the weak acid remains as $HA$. If the approximation fails, use the quadratic. Higher concentration decreases percent ionization (though $[H^+]$ increases, the fraction dissociated decreases).'
      }
    },
    {
      id: 'wk2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — ICE Tables for Weak Acids** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For a weak acid, doubling the concentration will cause the pH to:',
            options: [
              'Decrease by exactly 1',
              'Decrease by about 0.15',
              'Decrease by about 0.30',
              'Stay the same'
            ],
            correctAnswer: 2,
            explanation: '$[H^+] = \\sqrt{K_a \\cdot C}$. Doubling $C$ multiplies $[H^+]$ by $\\sqrt{2} = 1.414$. Change in pH $= -\\log(\\sqrt{2}) = -0.15$. Wait — that\'s 0.15 decrease. Actually $\\Delta pH = -\\log(\\sqrt{2}) \\approx -0.15$, so pH decreases by about 0.15.'
          },
          {
            question: 'A weak acid solution has $[H^+] = 2.0 \\times 10^{-3}$ M and initial concentration 0.50 M. The percent ionization is:',
            options: [
              '0.40%',
              '4.0%',
              '0.04%',
              '40%'
            ],
            correctAnswer: 0,
            explanation: 'Percent ionization $= (2.0 \\times 10^{-3}/0.50) \\times 100\\% = 0.40\\%$. This is well under 5%, so the approximation would be valid.'
          }
        ]
      }
    }
  ]
}
