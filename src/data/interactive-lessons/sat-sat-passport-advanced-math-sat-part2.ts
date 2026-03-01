export const satPassportAdvPart2Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-pa2-intro',
      type: 'text' as const,
      content: `
# 🔢 Factoring Strategies

**Part 2 of 7 — GCF, Grouping, Difference of Squares, Sum/Difference of Cubes**

Factoring is the **reverse** of multiplication. On the SAT, factoring lets you simplify expressions, solve equations, and find zeros.

**Always start by pulling out the Greatest Common Factor (GCF).**

**Example 1 — GCF:** Factor $6x^3 + 9x^2$.

$$6x^3 + 9x^2 = 3x^2(2x + 3)$$

**Example 2 — GCF with three terms:** Factor $10x^4 - 15x^3 + 5x^2$.

$$= 5x^2(2x^2 - 3x + 1) = 5x^2(2x - 1)(x - 1)$$

**SAT Tip:** If every term shares a variable factor, pull it out first — it simplifies everything that follows.
      `
    },
    {
      id: 'sat-pa2-special',
      type: 'text' as const,
      content: `
## Special Factoring Patterns

| Pattern | Formula |
|---------|---------|
| **Difference of squares** | $a^2 - b^2 = (a+b)(a-b)$ |
| **Perfect square trinomial** | $a^2 + 2ab + b^2 = (a+b)^2$ |
| **Perfect square trinomial** | $a^2 - 2ab + b^2 = (a-b)^2$ |
| **Sum of cubes** | $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ |
| **Difference of cubes** | $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$ |

**Example 3 — Difference of squares:** $x^2 - 49 = (x+7)(x-7)$

**Example 4 — Sum of cubes:** $8x^3 + 27$

$$= (2x)^3 + 3^3 = (2x + 3)(4x^2 - 6x + 9)$$

**Mnemonic for cubes:** "**SOAP**" — **S**ame sign, **O**pposite sign, **A**lways **P**ositive.
      `
    },
    {
      id: 'sat-pa2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Factoring Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Factor: $x^2 - 16$',
            options: ['$(x-4)^2$', '$(x+4)(x-4)$', '$(x+8)(x-2)$', '$(x-16)(x+1)$'],
            correctAnswer: 1,
            explanation: '$x^2 - 16 = x^2 - 4^2 = (x+4)(x-4)$. This is a difference of squares.'
          },
          {
            question: 'Factor: $x^3 - 8$',
            options: ['$(x-2)(x^2+4)$', '$(x-2)(x^2+2x+4)$', '$(x+2)(x^2-2x+4)$', '$(x-2)(x^2-2x+4)$'],
            correctAnswer: 1,
            explanation: '$x^3 - 8 = x^3 - 2^3 = (x-2)(x^2 + 2x + 4)$. Use the difference of cubes formula with $a=x$, $b=2$.'
          }
        ]
      }
    },
    {
      id: 'sat-pa2-grouping',
      type: 'text' as const,
      content: `
## Factoring by Grouping

When a polynomial has **four terms**, try grouping into two pairs and factoring each pair.

**Example 5:** Factor $x^3 + 3x^2 + 2x + 6$.

**Step 1:** Group: $(x^3 + 3x^2) + (2x + 6)$

**Step 2:** Factor each pair: $x^2(x + 3) + 2(x + 3)$

**Step 3:** Factor out the common binomial: $(x + 3)(x^2 + 2)$

**Example 6:** Factor $2x^3 - x^2 - 6x + 3$.

$(2x^3 - x^2) + (-6x + 3) = x^2(2x - 1) - 3(2x - 1) = (2x - 1)(x^2 - 3)$

**SAT Tip:** For a trinomial $ax^2 + bx + c$, find two numbers that multiply to $ac$ and add to $b$, then factor by grouping.
      `
    },
    {
      id: 'sat-pa2-input1',
      type: 'input-boxes' as const,
      content: `
**Factoring Coefficients** 🧮

1) Factor $x^2 - 9x + 20$. What are the two constant terms in the binomial factors? Give the **larger** one.
2) Factor $2x^2 + 7x + 3 = (2x + a)(x + b)$. What is $a$?
3) Factor $x^3 + 64$. In the trinomial factor $(x^2 + bx + c)$, what is $c$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-4', '1', '16'],
        hint1: 'Find two numbers that multiply to $20$ and add to $-9$: $-4$ and $-5$.',
        hint2: 'Find two numbers that multiply to $2 \\cdot 3 = 6$ and add to $7$: $6$ and $1$. Then group.',
        hint3: '$x^3 + 64 = x^3 + 4^3 = (x+4)(x^2 - 4x + 16)$.',
        explanation: '1) $x^2-9x+20 = (x-4)(x-5)$; the larger constant is $-4$. 2) $2x^2+7x+3 = (2x+1)(x+3)$, so $a=1$. 3) By the sum of cubes formula, $c = 4^2 = 16$.'
      }
    },
    {
      id: 'sat-pa2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Factoring Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$25x^2 - 1$ is an example of …',
            options: ['perfect square trinomial', 'difference of squares', 'sum of cubes', 'grouping']
          },
          {
            label: 'The correct factorisation of $x^2 + 6x + 9$ is …',
            options: ['$(x+3)(x-3)$', '$(x+3)^2$', '$(x+9)(x+1)$', '$(x-3)^2$']
          },
          {
            label: 'In the sum of cubes formula $a^3+b^3$, the trinomial factor has the sign pattern …',
            options: ['$+, +, +$', '$-, +, -$', '$-, -, +$', '$+, -, +$']
          }
        ],
        correctAnswers: ['difference of squares', '$(x+3)^2$', '$-, -, +$'],
        hint1: 'Two perfect squares separated by a minus sign.',
        hint2: '$x^2 + 6x + 9 = x^2 + 2(3)x + 3^2$.',
        hint3: '$a^3+b^3 = (a+b)(a^2 - ab + b^2)$. The signs in the trinomial are $-$, implicit $-$, $+$.',
        explanation: '$25x^2 - 1 = (5x)^2 - 1^2$ is a difference of squares. $x^2+6x+9 = (x+3)^2$. Sum of cubes: trinomial has signs $-ab$ then $+b^2$.'
      }
    },
    {
      id: 'sat-pa2-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $x^2 - 5x - 14 = 0$, what are the solutions?',
            options: ['$x = 7$ and $x = -2$', '$x = -7$ and $x = 2$', '$x = 7$ and $x = 2$', '$x = -7$ and $x = -2$'],
            correctAnswer: 0,
            explanation: '$x^2 - 5x - 14 = (x-7)(x+2) = 0$. So $x = 7$ or $x = -2$.'
          },
          {
            question: 'Which expression is equivalent to $4x^2 - 25$?',
            options: ['$(2x-5)^2$', '$(4x+5)(x-5)$', '$(2x+5)(2x-5)$', '$(2x-5)(2x-5)$'],
            correctAnswer: 2,
            explanation: '$4x^2 - 25 = (2x)^2 - 5^2 = (2x+5)(2x-5)$.'
          }
        ]
      }
    }
  ]
};
