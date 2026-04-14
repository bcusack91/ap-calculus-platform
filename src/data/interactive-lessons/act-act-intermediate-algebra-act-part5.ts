export const actIntermAlgPart5Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-ia5-intro',
      type: 'text' as const,
      content: `
# 📈 Logarithms & Exponents

**Part 5 of 7 — Log Rules, Solving Log Equations & Change of Base**

The **logarithm** $\\log_b a = c$ means $b^c = a$.

| Exponential | Logarithmic |
|------------|-------------|
| $2^3 = 8$ | $\\log_2 8 = 3$ |
| $10^2 = 100$ | $\\log_{10} 100 = 2$ |
| $5^0 = 1$ | $\\log_5 1 = 0$ |

**Key log rules:**

| Rule | Formula |
|------|---------|
| Product | $\\log_b(MN) = \\log_b M + \\log_b N$ |
| Quotient | $\\log_b\\!\\left(\\frac{M}{N}\\right) = \\log_b M - \\log_b N$ |
| Power | $\\log_b(M^k) = k\\log_b M$ |
| Change of base | $\\log_b a = \\frac{\\log a}{\\log b}$ |

Also remember: $\\log_b b = 1$ and $\\log_b 1 = 0$ for any valid base $b$.
      `
    },
    {
      id: 'act-ia5-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** Evaluate $\\log_3 81$.

$3^4 = 81$, so $\\log_3 81 = 4$.

**Example 2:** Simplify $\\log_2 32 - \\log_2 4$.

$$\\log_2\\!\\left(\\frac{32}{4}\\right) = \\log_2 8 = 3$$

**Example 3:** Solve $\\log_5 x = 3$.

$$x = 5^3 = 125$$

**Example 4:** Solve $2^{x+1} = 16$.

$$2^{x+1} = 2^4 \\implies x + 1 = 4 \\implies x = 3$$

**Example 5 — Change of base:** Express $\\log_3 7$ using common log.

$$\\log_3 7 = \\frac{\\log 7}{\\log 3} \\approx \\frac{0.845}{0.477} \\approx 1.771$$
      `
    },
    {
      id: 'act-ia5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Log Evaluation** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is $\\log_2 64$?',
            options: ['$4$', '$5$', '$6$', '$8$'],
            correctAnswer: 2,
            explanation: '$2^6 = 64$, so $\\log_2 64 = 6$.'
          },
          {
            question: '$\\log_4 1 = \\;?$',
            options: ['$1$', '$0$', '$4$', 'undefined'],
            correctAnswer: 1,
            explanation: '$4^0 = 1$, so $\\log_4 1 = 0$. This holds for any base.'
          }
        ]
      }
    },
    {
      id: 'act-ia5-solving',
      type: 'text' as const,
      content: `
## Solving Logarithmic & Exponential Equations

**Example 6:** Solve $\\log(x) + \\log(x - 3) = 1$ (base 10).

$$\\log[x(x-3)] = 1 \\implies x(x-3) = 10$$

$$x^2 - 3x - 10 = 0 \\implies (x - 5)(x + 2) = 0$$

$x = 5$ or $x = -2$. Since the argument of a log must be positive, $x = -2$ is extraneous. **Answer: $x = 5$.**

**Example 7:** Solve $3^x = 27^{x-2}$.

Write both sides with base 3: $3^x = (3^3)^{x-2} = 3^{3x-6}$.

$$x = 3x - 6 \\implies -2x = -6 \\implies x = 3$$
      `
    },
    {
      id: 'act-ia5-input1',
      type: 'input-boxes' as const,
      content: `
**Logarithm Practice** 🧮

1) What is $\\log_5 125$?

2) Solve $\\log_2 x = 5$. What is $x$?

3) Simplify $\\log_3 9 + \\log_3 3$. (enter the numerical answer)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '32', '3'],
        hint1: '$5^3 = 125$.',
        hint2: '$x = 2^5$.',
        hint3: '$\\log_3 9 = 2$ and $\\log_3 3 = 1$.',
        explanation: '$5^3 = 125$ so $\\log_5 125 = 3$. $2^5 = 32$. $\\log_3 9 + \\log_3 3 = 2 + 1 = 3$.'
      }
    },
    {
      id: 'act-ia5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Log Rule Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\log_b(MN)$ equals …',
            options: ['$\\log_b M \\cdot \\log_b N$', '$\\log_b M + \\log_b N$', '$\\log_b M - \\log_b N$', '$\\frac{\\log_b M}{\\log_b N}$']
          },
          {
            label: 'The change-of-base formula says $\\log_b a = $ …',
            options: ['$\\frac{\\log b}{\\log a}$', '$\\frac{\\log a}{\\log b}$', '$\\log a - \\log b$', '$\\log a \\cdot \\log b$']
          },
          {
            label: 'To solve $\\log_b x = c$, rewrite as $x = $ …',
            options: ['$c^b$', '$b^c$', '$b \\cdot c$', '$\\frac{b}{c}$']
          }
        ],
        correctAnswers: ['$\\log_b M + \\log_b N$', '$\\frac{\\log a}{\\log b}$', '$b^c$'],
        hint1: 'Product rule: log of a product is the sum of the logs.',
        hint2: 'Change of base puts $a$ on top and $b$ on the bottom.',
        hint3: '$\\log_b x = c$ means $b^c = x$.',
        explanation: 'Product rule gives a sum. Change of base: $\\log a / \\log b$. $\\log_b x = c$ means $x = b^c$.'
      }
    },
    {
      id: 'act-ia5-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\log_2 x + \\log_2 8 = 7$, what is $x$?',
            options: ['$8$', '$16$', '$32$', '$64$'],
            correctAnswer: 1,
            explanation: '$\\log_2 8 = 3$, so $\\log_2 x = 4$, giving $x = 2^4 = 16$.'
          },
          {
            question: 'Solve $5^{2x} = 625$.',
            options: ['$x = 1$', '$x = 2$', '$x = 3$', '$x = 4$'],
            correctAnswer: 1,
            explanation: '$625 = 5^4$, so $5^{2x} = 5^4 \\implies 2x = 4 \\implies x = 2$.'
          }
        ]
      }
    }
  ]
};
