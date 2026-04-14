export const calcabDefiniteIntegralsPart3Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'int3-intro',
      type: 'text' as const,
      content: `# ∫ Definite Integrals

**Part 3 of 7 — Properties of Integrals**

### Essential Properties

$$\\boxed{\\int_a^b [cf(x)]\\,dx = c\\int_a^b f(x)\\,dx}$$

$$\\boxed{\\int_a^b [f(x) \\pm g(x)]\\,dx = \\int_a^b f(x)\\,dx \\pm \\int_a^b g(x)\\,dx}$$

| Property | Formula | Interpretation |
|:---:|:---:|:---:|
| Constant Multiple | $\\int_a^b cf\\,dx = c\\int_a^b f\\,dx$ | Factor constants out |
| Sum/Difference | $\\int_a^b (f \\pm g)\\,dx = \\int f \\pm \\int g$ | Split into separate integrals |
| Additivity | $\\int_a^b f\\,dx + \\int_b^c f\\,dx = \\int_a^c f\\,dx$ | Combine adjacent intervals |
| Reversal | $\\int_a^b f\\,dx = -\\int_b^a f\\,dx$ | Swap limits = flip sign |
| Zero Width | $\\int_a^a f\\,dx = 0$ | No interval = no area |
| Comparison | $f \\geq g \\Rightarrow \\int f \\geq \\int g$ | Bigger function = bigger integral |

> **Key Concept:** Integrals are **linear** — they respect addition and scalar multiplication. This is used constantly on the AP Exam!`
    },
    {
      id: 'int3-worked',
      type: 'text' as const,
      content: `### Worked Examples — Given-Value Problems

A common AP question gives you known integral values and asks you to find others.

**Given:** $\\int_0^5 f(x)\\,dx = 10$, $\\int_0^5 g(x)\\,dx = 3$, $\\int_0^3 f(x)\\,dx = 7$.

| Find | Work | Answer |
|:---:|:---:|:---:|
| $\\int_0^5 [2f(x) - 3g(x)]\\,dx$ | $2(10) - 3(3)$ | $11$ |
| $\\int_3^5 f(x)\\,dx$ | $10 - 7$ (additivity) | $3$ |
| $\\int_5^0 f(x)\\,dx$ | $-(10)$ (reversal) | $-10$ |
| $\\int_0^5 [f(x) + 4]\\,dx$ | $10 + \\int_0^5 4\\,dx = 10 + 20$ | $30$ |

> **AP Tip:** Don't forget that $\\int_a^b k\\,dx = k(b-a)$ for a constant $k$. Many students miss the constant term!`
    },
    {
      id: 'int3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Apply Integral Properties** 🎯\n\nGiven: $\\int_0^5 f(x)\\,dx = 10$ and $\\int_0^5 g(x)\\,dx = 3$.',
      exercise: {
        questions: [
          {
            question: 'Find $\\int_0^5 [2f(x) - 3g(x)]\\,dx$.',
            options: ['$11$', '$7$', '$20$', '$1$'],
            correctAnswer: 0,
            explanation: '$2(10) - 3(3) = 20 - 9 = 11$.'
          },
          {
            question: 'If $\\int_0^3 f(x)\\,dx = 7$, find $\\int_3^5 f(x)\\,dx$.',
            options: ['$3$', '$17$', '$7$', '$-3$'],
            correctAnswer: 0,
            explanation: 'Additivity: $\\int_0^3 f + \\int_3^5 f = \\int_0^5 f$. So $7 + \\int_3^5 f = 10$, giving $\\int_3^5 f = 3$.'
          },
          {
            question: 'Find $\\int_5^0 f(x)\\,dx$.',
            options: ['$10$', '$-10$', '$0$', '$5$'],
            correctAnswer: 1,
            explanation: 'Reversing limits: $\\int_5^0 f = -\\int_0^5 f = -10$.'
          }
        ]
      }
    },
    {
      id: 'int3-avgvalue',
      type: 'text' as const,
      content: `### Average Value of a Function

$$\\boxed{f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx}$$

**Interpretation:** The average height of the function over $[a,b]$.

**Geometric meaning:** $f_{\\text{avg}} \\cdot (b-a) = \\int_a^b f(x)\\,dx$. The rectangle with height $f_{\\text{avg}}$ has the SAME area as the region under the curve.

### Worked Example

Find the average value of $f(x) = x^2$ on $[0, 3]$.

$$f_{\\text{avg}} = \\frac{1}{3-0}\\int_0^3 x^2\\,dx = \\frac{1}{3} \\cdot \\left[\\frac{x^3}{3}\\right]_0^3 = \\frac{1}{3} \\cdot 9 = 3$$

> **AP Tip:** The Mean Value Theorem for Integrals guarantees there exists a $c \\in [a,b]$ where $f(c) = f_{\\text{avg}}$ (if $f$ is continuous). They may ask you to find this $c$.`
    },
    {
      id: 'int3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Average Value** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the average value of $f(x) = 6x^2$ on $[0, 2]$.',
            options: ['$4$', '$8$', '$12$', '$6$'],
            correctAnswer: 1,
            explanation: '$f_{\\text{avg}} = \\frac{1}{2}\\int_0^2 6x^2\\,dx = \\frac{1}{2}[2x^3]_0^2 = \\frac{1}{2}(16) = 8$.'
          },
          {
            question: 'If the average value of $f$ on $[1, 5]$ is $7$, what is $\\int_1^5 f(x)\\,dx$?',
            options: ['$7$', '$28$', '$35$', '$1.75$'],
            correctAnswer: 1,
            explanation: '$f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f\\,dx$. So $\\int_1^5 f = f_{\\text{avg}} \\cdot (5-1) = 7 \\cdot 4 = 28$.'
          }
        ]
      }
    },
    {
      id: 'int3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Apply Properties** 🔍\n\nGiven: $\\int_0^6 f(x)\\,dx = 15$, $\\int_0^6 g(x)\\,dx = 7$, $\\int_0^4 f(x)\\,dx = 9$.',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_4^6 f(x)\\,dx$ equals:',
            options: ['$6$', '$9$', '$24$', '$-6$'],
            correctAnswers: ['$6$'],
            hints: ['Additivity: $\\int_0^4 f + \\int_4^6 f = \\int_0^6 f$.'],
            explanation: '$15 - 9 = 6$.'
          },
          {
            label: '$\\int_0^6 [f(x) - g(x) + 2]\\,dx$ equals:',
            options: ['$8$', '$20$', '$12$', '$32$'],
            correctAnswers: ['$20$'],
            hints: ['Split: $\\int f - \\int g + \\int 2\\,dx$. Remember $\\int_0^6 2\\,dx = 12$.'],
            explanation: '$15 - 7 + 2(6) = 15 - 7 + 12 = 20$.'
          },
          {
            label: 'The average value of $f$ on $[0, 6]$ is:',
            options: ['$15$', '$2.5$', '$5/2$', '$5$'],
            correctAnswers: ['$5/2$'],
            hints: ['$f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f\\,dx = \\frac{1}{6}(15)$.'],
            explanation: '$f_{\\text{avg}} = \\frac{15}{6} = \\frac{5}{2}$.'
          }
        ]
      }
    },
    {
      id: 'int3-input',
      type: 'input-box' as const,
      content: '**Compute with Properties** ✍️',
      exercise: {
        question: 'Given $\\int_0^8 f(x)\\,dx = 20$ and $\\int_0^8 g(x)\\,dx = 6$, find:\n\n$$\\int_0^8 [3f(x) + 2g(x) - 5]\\,dx$$\n\n(Enter a whole number.)',
        correctAnswer: '32',
        acceptableAnswers: ['32', '32.0'],
        hints: [
          'Use linearity: $3\\int f + 2\\int g - \\int_0^8 5\\,dx$.',
          '$3(20) + 2(6) - 5(8)$.',
          '$60 + 12 - 40$.'
        ],
        explanation: '$3(20) + 2(6) - 5(8) = 60 + 12 - 40 = 32$.'
      }
    },
    {
      id: 'int3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

| Property | Formula |
|:---:|:---:|
| Linearity | Constants factor out, sums split |
| Additivity | $\\int_a^b + \\int_b^c = \\int_a^c$ |
| Reversal | Swap limits → flip sign |
| Average value | $\\frac{1}{b-a}\\int_a^b f\\,dx$ |
| Constant integral | $\\int_a^b k\\,dx = k(b-a)$ |

> **Up Next:** Part 4 — FTC Part 1.`
    }
  ]
};
