export const actIntermAlgPart3Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-ia3-intro',
      type: 'text' as const,
      content: `
# 📊 Polynomials

**Part 3 of 7 — Operations, Factoring, Zeros & the Remainder Theorem**

A **polynomial** in $x$ is an expression like:

$$P(x) = a_n x^n + a_{n-1}x^{n-1} + \\cdots + a_1 x + a_0$$

The **degree** is the highest power of $x$ with a nonzero coefficient.

| Degree | Name | Example |
|--------|------|---------|
| 1 | Linear | $3x + 2$ |
| 2 | Quadratic | $x^2 - 5x + 6$ |
| 3 | Cubic | $2x^3 - x + 4$ |
| 4 | Quartic | $x^4 + 3x^2 - 1$ |

**Key fact:** A polynomial of degree $n$ has at most $n$ real zeros.
      `
    },
    {
      id: 'act-ia3-operations',
      type: 'text' as const,
      content: `
## Polynomial Operations

**Adding/Subtracting:** Combine like terms.

$$(3x^2 + 2x - 1) + (x^2 - 5x + 4) = 4x^2 - 3x + 3$$

**Multiplying:** Distribute (FOIL for binomials).

$$(2x + 3)(x - 4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$$

**Example — Expand:** $(x + 2)^3$

$$(x + 2)^3 = x^3 + 3(x^2)(2) + 3(x)(4) + 8 = x^3 + 6x^2 + 12x + 8$$

**Factoring a cubic:** $x^3 - 27 = (x - 3)(x^2 + 3x + 9)$ (difference of cubes).
      `
    },
    {
      id: 'act-ia3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Polynomial Operations** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is $(x + 3)(x - 5)$?',
            options: ['$x^2 - 2x - 15$', '$x^2 + 2x - 15$', '$x^2 - 15$', '$x^2 - 8x - 15$'],
            correctAnswer: 0,
            explanation: '$(x+3)(x-5) = x^2 - 5x + 3x - 15 = x^2 - 2x - 15$.'
          },
          {
            question: 'What is the degree of $4x^5 - 3x^3 + 2x - 7$?',
            options: ['$3$', '$4$', '$5$', '$7$'],
            correctAnswer: 2,
            explanation: 'The highest power of $x$ is $5$, so the degree is 5.'
          }
        ]
      }
    },
    {
      id: 'act-ia3-remainder',
      type: 'text' as const,
      content: `
## Zeros & the Remainder Theorem

A **zero** (or root) of $P(x)$ is a value $c$ such that $P(c) = 0$.

**Factor Theorem:** $c$ is a zero of $P(x)$ if and only if $(x - c)$ is a factor.

**Remainder Theorem:** When $P(x)$ is divided by $(x - c)$, the remainder is $P(c)$.

**Example:** Let $P(x) = x^3 - 4x^2 + x + 6$. Find $P(2)$.

$$P(2) = 8 - 16 + 2 + 6 = 0$$

Since $P(2) = 0$, $(x - 2)$ is a factor. Dividing:

$$x^3 - 4x^2 + x + 6 = (x - 2)(x^2 - 2x - 3) = (x - 2)(x - 3)(x + 1)$$

Zeros: $x = 2, 3, -1$.
      `
    },
    {
      id: 'act-ia3-input1',
      type: 'input-boxes' as const,
      content: `
**Polynomial Practice** 🧮

1) What is the degree of $7x^4 + 2x^2 - x + 9$?

2) If $P(x) = x^2 - 5x + 6$, what is $P(3)$?

3) Expand: $(x + 1)(x - 1) = x^2 - \\;?$ (enter the constant)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '0', '1'],
        hint1: 'The highest power of $x$ present is $x^4$.',
        hint2: '$P(3) = 9 - 15 + 6$.',
        hint3: '$(x+1)(x-1) = x^2 - 1$ — difference of squares.',
        explanation: 'Degree is 4. $P(3) = 9 - 15 + 6 = 0$ (so $x = 3$ is a zero). $(x + 1)(x - 1) = x^2 - 1$.'
      }
    },
    {
      id: 'act-ia3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Polynomial Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A polynomial of degree 4 has at most … real zeros.',
            options: ['2', '3', '4', '8']
          },
          {
            label: 'If $P(c) = 0$, then $(x - c)$ is a … of $P(x)$.',
            options: ['term', 'coefficient', 'factor', 'remainder']
          },
          {
            label: '$x^3 + 8$ factors as $(x + 2)(x^2 - 2x + \\;?)$.',
            options: ['2', '4', '8', '16']
          }
        ],
        correctAnswers: ['4', 'factor', '4'],
        hint1: 'The Fundamental Theorem of Algebra: degree $n$ → at most $n$ real roots.',
        hint2: 'This is the Factor Theorem.',
        hint3: 'Sum of cubes: $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ with $a = x$, $b = 2$.',
        explanation: 'At most 4 real zeros. $P(c)=0$ means $(x-c)$ is a factor. $x^3+8 = (x+2)(x^2-2x+4)$.'
      }
    },
    {
      id: 'act-ia3-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'When $P(x) = 2x^3 - 3x^2 + 4x - 5$ is divided by $(x - 1)$, the remainder is:',
            options: ['$-2$', '$-1$', '$0$', '$-5$'],
            correctAnswer: 0,
            explanation: '$P(1) = 2 - 3 + 4 - 5 = -2$. By the Remainder Theorem, the remainder is $-2$.'
          },
          {
            question: 'If $(x - 4)$ is a factor of $x^2 - x - k$, what is $k$?',
            options: ['$8$', '$12$', '$16$', '$20$'],
            correctAnswer: 1,
            explanation: 'If $x = 4$ is a zero: $16 - 4 - k = 0 \\implies k = 12$.'
          }
        ]
      }
    }
  ]
};
