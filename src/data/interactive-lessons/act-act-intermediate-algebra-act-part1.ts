export const actIntermAlgPart1Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-ia1-intro',
      type: 'text' as const,
      content: `
# 📐 Quadratic Equations

**Part 1 of 7 — Factoring, the Quadratic Formula & the Discriminant**

Quadratics are one of the **most tested** topics in the ACT Intermediate Algebra strand. A quadratic equation has the standard form:

$$ax^2 + bx + c = 0$$

Three core solving techniques:

| Method | When to Use |
|--------|-------------|
| Factoring | Coefficients are small and the expression factors neatly |
| Quadratic Formula | Any quadratic — the universal tool |
| Completing the Square | When you need vertex form or the problem asks for it |

**Quadratic Formula:**

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

The expression under the radical, $\\Delta = b^2 - 4ac$, is the **discriminant** and tells you how many real solutions exist.
      `
    },
    {
      id: 'act-ia1-factoring',
      type: 'text' as const,
      content: `
## Factoring — Worked Examples

**Example 1:** Solve $x^2 - 5x + 6 = 0$.

We need two numbers whose product is $6$ and sum is $-5$: that's $-2$ and $-3$.

$$(x - 2)(x - 3) = 0 \\implies x = 2 \\text{ or } x = 3$$

**Example 2:** Solve $2x^2 + 7x + 3 = 0$.

We look for factors of $2 \\cdot 3 = 6$ that add to $7$: that's $1$ and $6$.

$$2x^2 + x + 6x + 3 = x(2x + 1) + 3(2x + 1) = (2x + 1)(x + 3) = 0$$

$$x = -\\frac{1}{2} \\text{ or } x = -3$$

**Example 3:** Using the quadratic formula on $x^2 + 4x - 21 = 0$:

$$x = \\frac{-4 \\pm \\sqrt{16 + 84}}{2} = \\frac{-4 \\pm \\sqrt{100}}{2} = \\frac{-4 \\pm 10}{2}$$

$$x = 3 \\text{ or } x = -7$$
      `
    },
    {
      id: 'act-ia1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Solving Quadratics** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What are the solutions of $x^2 - 9x + 20 = 0$?',
            options: ['$x = 4, \\; x = 5$', '$x = -4, \\; x = -5$', '$x = 2, \\; x = 10$', '$x = -4, \\; x = 5$'],
            correctAnswer: 0,
            explanation: 'We need two numbers with product $20$ and sum $9$: $4$ and $5$. So $(x-4)(x-5)=0$ giving $x=4$ or $x=5$.'
          },
          {
            question: 'What are the solutions of $3x^2 - 12 = 0$?',
            options: ['$x = 4$', '$x = \\pm 2$', '$x = \\pm 4$', '$x = 2$'],
            correctAnswer: 1,
            explanation: '$3x^2 = 12 \\implies x^2 = 4 \\implies x = \\pm 2$.'
          }
        ]
      }
    },
    {
      id: 'act-ia1-discriminant',
      type: 'text' as const,
      content: `
## The Discriminant

The discriminant $\\Delta = b^2 - 4ac$ determines the nature of the roots:

| Discriminant | Number of Real Solutions |
|-------------|------------------------|
| $\\Delta > 0$ | Two distinct real roots |
| $\\Delta = 0$ | One repeated real root |
| $\\Delta < 0$ | No real roots (two complex roots) |

**Example 4:** How many real solutions does $x^2 + 6x + 9 = 0$ have?

$$\\Delta = 6^2 - 4(1)(9) = 36 - 36 = 0$$

One repeated root: $x = -3$.

**Example 5:** How many real solutions does $2x^2 + x + 5 = 0$ have?

$$\\Delta = 1 - 40 = -39 < 0$$

No real solutions.
      `
    },
    {
      id: 'act-ia1-input1',
      type: 'input-boxes' as const,
      content: `
**Quadratic Practice** 🧮

1) Solve $x^2 - 7x + 12 = 0$. Enter the **smaller** root.
2) What is the discriminant of $x^2 + 2x + 5 = 0$?
3) Solve $x^2 - 16 = 0$. Enter the **positive** root.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '-16', '4'],
        hint1: 'Factor: product 12, sum 7. The factors are 3 and 4.',
        hint2: '$\\Delta = 2^2 - 4(1)(5) = 4 - 20$.',
        hint3: '$x^2 = 16 \\implies x = \\pm 4$.',
        explanation: '$(x-3)(x-4)=0$ so roots are 3 and 4 (smaller is 3). $\\Delta = 4 - 20 = -16$. $x^2 = 16$ gives $x = \\pm 4$ (positive root is 4).'
      }
    },
    {
      id: 'act-ia1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If the discriminant is negative, the quadratic has …',
            options: ['two real roots', 'one repeated root', 'no real roots', 'infinitely many roots']
          },
          {
            label: 'To factor $x^2 + bx + c$, you look for two numbers whose product is $c$ and whose sum is …',
            options: ['$a$', '$b$', '$c$', '$-b$']
          },
          {
            label: 'The quadratic formula denominator for $ax^2+bx+c=0$ is …',
            options: ['$a$', '$2a$', '$-2a$', '$4a$']
          }
        ],
        correctAnswers: ['no real roots', '$b$', '$2a$'],
        hint1: 'A negative discriminant means the square root is of a negative number.',
        hint2: 'In $x^2 + bx + c$, the coefficient of $x$ is $b$.',
        hint3: 'The full formula is $\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$.',
        explanation: 'Negative discriminant → no real roots. You need two numbers summing to $b$. The denominator is $2a$.'
      }
    },
    {
      id: 'act-ia1-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'For the equation $2x^2 - 5x - 3 = 0$, what is the sum of the two solutions?',
            options: ['$\\frac{5}{2}$', '$-\\frac{5}{2}$', '$\\frac{3}{2}$', '$-\\frac{3}{2}$'],
            correctAnswer: 0,
            explanation: 'By Vieta\'s formulas the sum of the roots is $-b/a = -(-5)/2 = 5/2$.'
          },
          {
            question: 'How many real solutions does $x^2 - 4x + 7 = 0$ have?',
            options: ['0', '1', '2', 'Cannot be determined'],
            correctAnswer: 0,
            explanation: '$\\Delta = 16 - 28 = -12 < 0$, so there are no real solutions.'
          }
        ]
      }
    }
  ]
};
