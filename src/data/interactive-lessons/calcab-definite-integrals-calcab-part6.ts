export const calcabDefiniteIntegralsPart6Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'int6-intro',
      type: 'text' as const,
      content: `# ∫ Definite Integrals

**Part 6 of 7 — Problem-Solving Workshop**

### Combining All Tools

This part brings together everything: Riemann sums, FTC, properties, and applications.

### Strategy Guide

| Problem Type | Key Approach |
|:---:|:---:|
| Evaluate $\\int_a^b f(x)\\,dx$ | Find antiderivative, apply FTC Part 2 |
| $\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt$ | FTC Part 1 (+ Chain Rule if needed) |
| Given integral values | Use linearity and additivity properties |
| Table data | Trapezoidal rule (unequal subintervals) |
| Rate → total change | Net Change Theorem: $\\int_a^b f\' = f(b) - f(a)$ |
| Even/odd symmetry | Simplify before computing |
| Absolute value | Split at zeros, negate on negative intervals |

> **AP Tip:** On FRQs, always show your setup (the integral expression) before evaluating. Setup points are awarded separately from answer points.`
    },
    {
      id: 'int6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Mixed Problems — Set 1** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $\\int_0^6 f(x)\\,dx = 15$ and $\\int_0^6 g(x)\\,dx = 7$, find $\\int_0^6 [3f(x) - 2g(x) + 4]\\,dx$.',
            options: ['$55$', '$31$', '$59$', '$45$'],
            correctAnswer: 0,
            explanation: '$3(15) - 2(7) + 4(6) = 45 - 14 + 24 = 55$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\int_1^{x^3} \\frac{1}{1+t^2}\\,dt$.',
            options: ['$\\frac{1}{1+x^6}$', '$\\frac{3x^2}{1+x^6}$', '$\\frac{3x^2}{1+x^2}$', '$\\frac{x^3}{1+x^6}$'],
            correctAnswer: 1,
            explanation: 'FTC Part 1 + Chain Rule: $\\frac{1}{1+(x^3)^2} \\cdot 3x^2 = \\frac{3x^2}{1+x^6}$.'
          },
          {
            question: 'Evaluate $\\int_{-1}^{1} (x^4 + x^3)\\,dx$.',
            options: ['$\\frac{2}{5}$', '$0$', '$\\frac{1}{5}$', '$\\frac{4}{5}$'],
            correctAnswer: 0,
            explanation: '$x^4$ is even: $2\\int_0^1 x^4\\,dx = 2/5$. $x^3$ is odd: $0$. Total: $2/5$.'
          }
        ]
      }
    },
    {
      id: 'int6-absvalue',
      type: 'text' as const,
      content: `### Absolute Value Integrals — Step by Step

To evaluate $\\int_a^b |f(x)|\\,dx$:

1. Find where $f(x) = 0$ (the zeros)
2. Determine sign of $f$ on each subinterval
3. Split the integral at each zero
4. Negate $f$ on intervals where $f < 0$

### Worked Example

$$\\int_0^4 |x - 2|\\,dx$$

$x - 2 = 0$ at $x = 2$.

- On $[0,2]$: $x - 2 < 0$, so $|x-2| = -(x-2) = 2-x$
- On $[2,4]$: $x - 2 > 0$, so $|x-2| = x-2$

$$= \\int_0^2 (2-x)\\,dx + \\int_2^4 (x-2)\\,dx = [2x - \\frac{x^2}{2}]_0^2 + [\\frac{x^2}{2} - 2x]_2^4$$

$$= (4 - 2) + (8 - 8) - (2 - 4) = 2 + 0 + 2 = 4$$

> **Geometric shortcut:** $|x-2|$ forms a V-shape — two right triangles each with base 2 and height 2. Area = $2 \\times \\frac{1}{2}(2)(2) = 4$. ✓`
    },
    {
      id: 'int6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Mixed Problems — Set 2** 🎯',
      exercise: {
        questions: [
          {
            question: 'A particle starts at $s(0) = 2$ with $v(t) = 3t^2 - 6t$. Find $s(3)$.',
            options: ['$2$', '$11$', '$-7$', '$5$'],
            correctAnswer: 0,
            explanation: '$s(3) = 2 + \\int_0^3 (3t^2 - 6t)\\,dt = 2 + [t^3 - 3t^2]_0^3 = 2 + (27 - 27) = 2$.'
          },
          {
            question: 'Evaluate $\\int_0^4 |x - 2|\\,dx$.',
            options: ['$0$', '$2$', '$4$', '$8$'],
            correctAnswer: 2,
            explanation: 'Split at $x = 2$: $\\int_0^2 (2-x)\\,dx + \\int_2^4 (x-2)\\,dx = 2 + 2 = 4$.'
          },
          {
            question: 'If $f$ is continuous with $\\int_0^4 f(x)\\,dx = 12$, what is the average value of $f$ on $[0,4]$?',
            options: ['$3$', '$4$', '$12$', '$48$'],
            correctAnswer: 0,
            explanation: '$f_{\\text{avg}} = \\frac{1}{4-0} \\cdot 12 = 3$.'
          }
        ]
      }
    },
    {
      id: 'int6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify each problem type.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '"Find $\\frac{d}{dx}\\int_2^{x^2} \\sin(t)\\,dt$" uses:',
            options: ['FTC Part 1 + Chain Rule', 'FTC Part 2', 'Net Change Theorem', 'Trapezoidal Rule'],
            correctAnswers: ['FTC Part 1 + Chain Rule'],
            hints: ['Differentiating an integral with a variable upper limit.'],
            explanation: 'FTC Part 1 with Chain Rule: $\\sin(x^2) \\cdot 2x$.'
          },
          {
            label: '"Water enters at rate $R(t)$. How much from $t = 0$ to $t = 5$?" uses:',
            options: ['FTC Part 1 + Chain Rule', 'FTC Part 2', 'Net Change Theorem', 'Trapezoidal Rule'],
            correctAnswers: ['Net Change Theorem'],
            hints: ['Integrating a rate to find total change.'],
            explanation: '$\\int_0^5 R(t)\\,dt$ = total water added (Net Change).'
          },
          {
            label: '"Given a table of values, approximate $\\int_a^b f$" uses:',
            options: ['FTC Part 1 + Chain Rule', 'FTC Part 2', 'Net Change Theorem', 'Trapezoidal Rule'],
            correctAnswers: ['Trapezoidal Rule'],
            hints: ['Data in a table, no formula given.'],
            explanation: 'With discrete data points, use the Trapezoidal Rule to approximate.'
          }
        ]
      }
    },
    {
      id: 'int6-input',
      type: 'input-box' as const,
      content: '**Trapezoidal Rule from a Table** ✍️\n\n| $t$ (min) | 0 | 3 | 7 | 10 |\n|:---:|:---:|:---:|:---:|:---:|\n| $R(t)$ (gal/min) | 4 | 6 | 10 | 8 |',
      exercise: {
        question: 'Use the trapezoidal rule to approximate $\\int_0^{10} R(t)\\,dt$ (total gallons).\n\n(Enter a whole number.)',
        correctAnswer: '74',
        acceptableAnswers: ['74', '74.0'],
        hints: [
          'Subintervals: $[0,3]$, $[3,7]$, $[7,10]$ with widths 3, 4, 3.',
          '$T = \\frac{3}{2}(4+6) + \\frac{4}{2}(6+10) + \\frac{3}{2}(10+8)$.',
          '$= 15 + 32 + 27$.'
        ],
        explanation: '$T = \\frac{3}{2}(4+6) + \\frac{4}{2}(6+10) + \\frac{3}{2}(10+8) = 15 + 32 + 27 = 74$.'
      }
    },
    {
      id: 'int6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| Problem Type | Go-To Tool |
|:---:|:---:|
| Evaluate definite integral | FTC Part 2 |
| Differentiate an integral | FTC Part 1 |
| Given values problems | Properties (linearity, additivity) |
| Rate → amount | Net Change Theorem |
| Table data | Trapezoidal Rule |
| Absolute value | Split at zeros |

> **Up Next:** Part 7 — Comprehensive Review.`
    }
  ]
};
