export const chemIceTablesCalculationsPart4Data = {
  topicSlug: 'ice-tables-calculations',
  sections: [
    {
      id: 'ic4-intro',
      type: 'text' as const,
      content: `
# 🧊 The 5% Approximation

**Part 4 of 7 — When x Is Small Enough to Ignore**

When K is very small ($K < 10^{-3}$) relative to initial concentrations, the change $x$ is often negligible compared to the initial values. This allows us to simplify the algebra dramatically.
      `
    },
    {
      id: 'ic4-when-to-use',
      type: 'text' as const,
      content: `
## When Can You Use the Approximation?

### The Rule of Thumb

If $\\frac{[\\text{initial}]}{K} > 100$ (or equivalently, $K < 0.01 \\times [\\text{initial}]$), then $x$ is small enough to approximate:

$$[\\text{initial}] - x \\approx [\\text{initial}]$$

### Why This Works

When K is very small, the reaction barely shifts — very little product forms. So $x$ is tiny compared to the initial concentration, and subtracting it doesn\'t meaningfully change the value.

### The 5% Test

After solving, check: $\\frac{x}{[\\text{initial}]} \\times 100\\% < 5\\%$

If the change is less than 5% of the initial concentration, the approximation is valid.
      `
    },
    {
      id: 'ic4-example',
      type: 'text' as const,
      content: `
## Worked Example

$\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{NO}(g)$, $K_c = 4.0 \\times 10^{-4}$

Initial: $[\\text{N}_2] = 0.80$ M, $[\\text{O}_2] = 0.20$ M, $[\\text{NO}] = 0$

**Check:** $0.20 / (4.0 \\times 10^{-4}) = 500 > 100$ ✓ → approximation valid

|  | N₂ | O₂ | NO |
|--|-----|-----|-----|
| **I** | 0.80 | 0.20 | 0 |
| **C** | $-x$ | $-x$ | $+2x$ |
| **E** | $0.80 - x$ | $0.20 - x$ | $2x$ |

$$K_c = \\frac{(2x)^2}{(0.80 - x)(0.20 - x)}$$

**With approximation** ($x \\ll 0.20$):

$$4.0 \\times 10^{-4} = \\frac{4x^2}{(0.80)(0.20)} = \\frac{4x^2}{0.16}$$

$$4x^2 = (4.0 \\times 10^{-4})(0.16) = 6.4 \\times 10^{-5}$$

$$x^2 = 1.6 \\times 10^{-5} \\implies x = 4.0 \\times 10^{-3}$$

**5% Check:** $\\frac{x}{0.20} \\times 100\\% = \\frac{4.0 \\times 10^{-3}}{0.20} \\times 100\\% = 2.0\\%$ ✓ (< 5%)

**Equilibrium:**
- $[\\text{NO}] = 2(4.0 \\times 10^{-3}) = 8.0 \\times 10^{-3}$ M
- $[\\text{N}_2] \\approx 0.80$ M
- $[\\text{O}_2] \\approx 0.20$ M
      `
    },
    {
      id: 'ic4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**The 5% Approximation** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The small-x approximation is valid when:',
            options: [
              'K is very large',
              'K is very small relative to initial concentrations',
              'K equals 1',
              'The reaction is exothermic'
            ],
            correctAnswer: 1,
            explanation: 'When K is very small (typically $< 10^{-3}$) relative to initial concentrations, very little product forms and $x$ is negligible.'
          },
          {
            question: 'After using the approximation, you find $x = 0.15$ and $[\\text{A}]_0 = 1.00$ M. Is the approximation valid?',
            options: [
              'Yes — 15% is close enough',
              'No — 15% exceeds the 5% threshold',
              'Yes — any value of x is fine',
              'No — x must be exactly zero'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{0.15}{1.00} \\times 100\\% = 15\\%$, which exceeds 5%. The approximation is NOT valid. You must solve the full quadratic.'
          },
          {
            question: 'Which simplification does the small-x approximation make?',
            options: [
              '$K \\approx 0$',
              '$[\\text{initial}] - x \\approx [\\text{initial}]$',
              '$x \\approx [\\text{initial}]$',
              '$K \\approx 1$'
            ],
            correctAnswer: 1,
            explanation: 'The approximation says that $x$ is so small that subtracting it from the initial concentration doesn\'t significantly change the value: $[\\text{A}]_0 - x \\approx [\\text{A}]_0$.'
          }
        ]
      }
    },
    {
      id: 'ic4-practice',
      type: 'input-boxes' as const,
      content: `
**Practice: Using the Approximation** 🧮

$\\text{A}(g) \\rightleftharpoons \\text{B}(g) + \\text{C}(g)$, $K_c = 1.0 \\times 10^{-6}$

Initial: $[\\text{A}] = 0.50$ M, $[\\text{B}] = [\\text{C}] = 0$

Using the approximation $0.50 - x \\approx 0.50$:

$$1.0 \\times 10^{-6} = \\frac{x^2}{0.50}$$

1) Solve for $x$. (Enter in scientific notation, e.g. 7.1e-4)

2) What percent of the initial [A] is $x$? (Enter as a percentage to 3 significant figures, e.g. 0.14)

3) Is the approximation valid? (Enter "yes" or "no")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7.1e-4', '0.14', 'yes', '0.00071', '0.140'],
        hint1: '$x^2 = (1.0 \\times 10^{-6})(0.50) = 5.0 \\times 10^{-7}$. $x = \\sqrt{5.0 \\times 10^{-7}}$',
        hint2: '$\\frac{7.1 \\times 10^{-4}}{0.50} \\times 100\\%$',
        hint3: 'Less than 5% means the approximation is valid.',
        explanation: '1) $x = \\sqrt{5.0 \\times 10^{-7}} = 7.07 \\times 10^{-4} \\approx 7.1 \\times 10^{-4}$. 2) $\\frac{7.1 \\times 10^{-4}}{0.50} \\times 100\\% = 0.14\\%$. 3) $0.14\\% < 5\\%$, so yes, the approximation is valid.'
      }
    },
    {
      id: 'ic4-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Approximation Guidelines** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The approximation is most useful when K is',
            options: ['very large', 'very small', 'equal to 1', 'negative']
          },
          {
            label: 'The 5% test checks whether',
            options: ['K is valid', 'x is small enough relative to initial concentrations', 'the reaction reached equilibrium', 'temperature is constant']
          },
          {
            label: 'If the 5% test fails, you must',
            options: ['use a different K', 'solve the full quadratic equation', 'ignore the result', 'add more reactant']
          },
          {
            label: 'The approximation converts a quadratic equation into a',
            options: ['cubic equation', 'simple algebra problem', 'differential equation', 'linear equation with no solution']
          }
        ],
        correctAnswers: [
          'very small',
          'x is small enough relative to initial concentrations',
          'solve the full quadratic equation',
          'simple algebra problem'
        ],
        hint1: 'Small K means the reaction barely proceeds → x is small.',
        hint2: '5% test: is $x/[\\text{initial}] < 0.05$?',
        hint3: 'If the approximation fails, fall back to the quadratic formula.',
        explanation: 'Small K → small x → valid approximation. The 5% test verifies this. If it fails, use the quadratic. The approximation simplifies the quadratic into simple algebra.'
      }
    },
    {
      id: 'ic4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — 5% Approximation** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{HA}(aq) \\rightleftharpoons \\text{H}^+(aq) + \\text{A}^-(aq)$, $K_a = 1.8 \\times 10^{-5}$, $[\\text{HA}]_0 = 0.10$ M. Is the approximation likely valid?',
            options: [
              'Yes — $0.10 / (1.8 \\times 10^{-5}) = 5556 > 100$',
              'No — K is too large',
              'No — the concentration is too low',
              'Cannot determine'
            ],
            correctAnswer: 0,
            explanation: '$[\\text{initial}]/K = 0.10/(1.8 \\times 10^{-5}) = 5556 \\gg 100$. The ratio is far greater than 100, so the approximation will be valid.'
          },
          {
            question: 'Using the approximation for the problem above, $x \\approx$:',
            options: [
              '$1.8 \\times 10^{-5}$',
              '$1.3 \\times 10^{-3}$',
              '$4.2 \\times 10^{-3}$',
              '$0.10$'
            ],
            correctAnswer: 1,
            explanation: '$K_a = x^2/0.10 \\implies x^2 = (1.8 \\times 10^{-5})(0.10) = 1.8 \\times 10^{-6} \\implies x = \\sqrt{1.8 \\times 10^{-6}} = 1.34 \\times 10^{-3} \\approx 1.3 \\times 10^{-3}$.'
          }
        ]
      }
    }
  ]
}
