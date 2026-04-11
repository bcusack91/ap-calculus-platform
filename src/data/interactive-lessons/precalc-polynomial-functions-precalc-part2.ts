export const precalcPolynomialPart2Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 📐 Zeros and Factored Form

**Part 2 of 7 — Finding Zeros & Writing in Factored Form**

The **zeros** (or **roots**) of a polynomial are the $x$-values where the graph crosses or touches the $x$-axis. Finding them is one of the most important skills in algebra and precalculus — and the key is **factoring**.
      `
    },
    {
      id: 'p2-zeros-definition',
      type: 'text' as const,
      content: `
## 📖 What Are Zeros?

A **zero** of a polynomial $p(x)$ is any value $c$ such that $p(c) = 0$.

Zeros have several equivalent names:

| Term | Meaning |
|------|---------|
| **Zero** of $p(x)$ | Value $c$ where $p(c) = 0$ |
| **Root** of the equation | Solution to $p(x) = 0$ |
| **$x$-intercept** of the graph | Point $(c, 0)$ where the graph meets the $x$-axis |

> 🔑 **Key idea:** Zero, root, and $x$-intercept all refer to the same concept viewed from different perspectives — algebraic, equation, and graphical.


---

### Example

For $p(x) = x^2 - 5x + 6$:

$$p(2) = 4 - 10 + 6 = 0 \\quad \\checkmark$$
$$p(3) = 9 - 15 + 6 = 0 \\quad \\checkmark$$

So $x = 2$ and $x = 3$ are zeros. The graph crosses the $x$-axis at $(2, 0)$ and $(3, 0)$.
      `
    },
    {
      id: 'p2-factored-form',
      type: 'text' as const,
      content: `
## 📌 Factored Form

If a polynomial of degree $n$ has zeros at $r_1, r_2, \\ldots, r_n$, it can be written as:

$$\\boxed{p(x) = a(x - r_1)(x - r_2) \\cdots (x - r_n)}$$

where $a$ is the leading coefficient.

> ⚠️ **Watch the signs!** If a zero is $x = -3$, the factor is $(x - (-3)) = (x + 3)$, **not** $(x - 3)$.


---

### Standard vs. Factored Form

| Form | Example | What it reveals |
|------|---------|-----------------|
| Standard | $p(x) = 2x^3 - 10x^2 + 12x$ | Degree, leading coefficient, $y$-intercept |
| Factored | $p(x) = 2x(x - 2)(x - 3)$ | Zeros, sign changes, $x$-intercepts |


---

### Converting: Standard → Factored

> **Factor $p(x) = x^3 - 4x^2 + 3x$ completely.**

**Step 1:** Factor out the GCF:

$$p(x) = x(x^2 - 4x + 3)$$

**Step 2:** Factor the quadratic:

$$p(x) = x(x - 1)(x - 3)$$

**Zeros:** $x = 0, \\; x = 1, \\; x = 3$
      `
    },
    {
      id: 'p2-factoring-techniques',
      type: 'text' as const,
      content: `
## 🛠️ Factoring Techniques

Different polynomials require different factoring strategies:

| Technique | When to use | Example |
|-----------|------------|---------|
| **GCF** | All terms share a common factor | $6x^3 - 9x^2 = 3x^2(2x - 3)$ |
| **Trinomial** ($x^2 + bx + c$) | Leading coefficient is 1 | $x^2 - 7x + 12 = (x-3)(x-4)$ |
| **AC method** ($ax^2 + bx + c$) | Leading coefficient $\\neq 1$ | $2x^2 + 7x + 3 = (2x+1)(x+3)$ |
| **Difference of squares** | $a^2 - b^2$ | $x^2 - 9 = (x-3)(x+3)$ |
| **Sum/difference of cubes** | $a^3 \\pm b^3$ | $x^3 - 8 = (x-2)(x^2 + 2x + 4)$ |
| **Grouping** | 4+ terms with pairwise common factors | $x^3 + x^2 - 4x - 4 = (x+1)(x-2)(x+2)$ |


---

### The Factor Theorem

The **Factor Theorem** connects zeros and factors directly:

$$\\boxed{p(c) = 0 \\quad \\Longleftrightarrow \\quad (x - c) \\text{ is a factor of } p(x)}$$

This means: if you can verify that $p(c) = 0$ by substitution, then you know $(x - c)$ divides evenly into $p(x)$.
      `
    },
    {
      id: 'p2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Zeros & Factoring Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What are the zeros of $f(x) = (x + 4)(x - 1)(x - 7)$?',
            options: [
              '$x = 4, \\; x = -1, \\; x = -7$',
              '$x = -4, \\; x = 1, \\; x = 7$',
              '$x = -4, \\; x = -1, \\; x = -7$',
              '$x = 4, \\; x = 1, \\; x = 7$'
            ],
            correctAnswer: 1,
            explanation: 'Set each factor equal to zero: $x + 4 = 0 \\Rightarrow x = -4$, $x - 1 = 0 \\Rightarrow x = 1$, $x - 7 = 0 \\Rightarrow x = 7$. Watch the sign flip from factor to zero!'
          },
          {
            question: 'Which factoring technique would you use first on $3x^4 - 12x^2$?',
            options: [
              'Difference of cubes',
              'AC method',
              'Factor out the GCF, then difference of squares',
              'Trinomial factoring'
            ],
            correctAnswer: 2,
            explanation: '$3x^4 - 12x^2 = 3x^2(x^2 - 4) = 3x^2(x-2)(x+2)$. Always start with GCF, then recognize the remaining pattern.'
          },
          {
            question: 'If $p(5) = 0$, which statement must be true?',
            options: [
              '$(x + 5)$ is a factor of $p(x)$',
              '$(x - 5)$ is a factor of $p(x)$',
              '$p(x)$ has degree 5',
              'The leading coefficient is 5'
            ],
            correctAnswer: 1,
            explanation: 'By the Factor Theorem: $p(c) = 0$ means $(x - c)$ is a factor. Since $p(5) = 0$, $(x - 5)$ is a factor.'
          }
        ]
      }
    },
    {
      id: 'p2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Factoring & Zeros Drill** 🧮

**1)** How many real zeros does $p(x) = x(x-2)(x+5)$ have? (e.g., $(x-1)(x+1)$ has $2$ zeros)

**2)** What is the $y$-intercept of $p(x) = (x-1)(x+3)(x-4)$? Evaluate $p(0)$. (e.g., for $(x-2)(x+1)$, $p(0) = (-2)(1) = -2$)

**3)** Factor $x^2 - 16$ using difference of squares. What is the positive zero? (e.g., for $x^2 - 25$, the positive zero is $5$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '12', '4'],
        hint1: 'Count the distinct factors — each gives one zero.',
        hint2: 'The $y$-intercept is $p(0) = (0-1)(0+3)(0-4) = (-1)(3)(-4)$.',
        hint3: '$x^2 - 16 = (x-4)(x+4)$. The positive zero is the positive value.',
        explanation: '1) Three factors give 3 zeros: $x = 0, 2, -5$. 2) $p(0) = (-1)(3)(-4) = 12$. 3) $x^2 - 16 = (x-4)(x+4)$, positive zero is $4$.'
      }
    },
    {
      id: 'p2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Factoring Concepts — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If $p(c) = 0$, then $(x - c)$ is a ______ of $p(x)$',
            options: ['zero', 'factor', 'coefficient', 'degree']
          },
          {
            label: 'The expression $x^2 - 25$ is an example of',
            options: ['perfect square trinomial', 'sum of cubes', 'difference of squares', 'grouping pattern']
          },
          {
            label: 'To find the $y$-intercept of a polynomial, evaluate $p$ at',
            options: ['$x = 1$', '$x = -1$', '$x = 0$', 'the leading coefficient']
          },
          {
            label: 'A degree-4 polynomial can have at most ______ real zeros',
            options: ['3', '4', '5', '8']
          }
        ],
        correctAnswers: ['factor', 'difference of squares', '$x = 0$', '4'],
        hint1: 'The Factor Theorem connects zeros to what kind of expression?',
        hint2: '$a^2 - b^2$ is the classic pattern name.',
        hint3: 'The $y$-intercept occurs where the graph crosses the $y$-axis.',
        explanation: 'The Factor Theorem says $p(c) = 0$ iff $(x-c)$ is a factor. $x^2 - 25 = (x-5)(x+5)$ is difference of squares. The $y$-intercept is $p(0)$. Degree $n$ means at most $n$ real zeros.'
      }
    },
    {
      id: 'p2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Zeros & Factored Form** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which polynomial has zeros at $x = -2$, $x = 0$, and $x = 3$?',
            options: [
              '$p(x) = x(x-2)(x+3)$',
              '$p(x) = x(x+2)(x-3)$',
              '$p(x) = (x-2)(x+3)$',
              '$p(x) = x(x+2)(x+3)$'
            ],
            correctAnswer: 1,
            explanation: 'Zeros at $-2, 0, 3$ require factors $(x+2)$, $x$, and $(x-3)$. Only $x(x+2)(x-3)$ has all three.'
          },
          {
            question: 'The polynomial $g(x) = x^3 - x$ factors as:',
            options: [
              '$x(x^2 - 1)$',
              '$x(x - 1)(x + 1)$',
              '$(x - 1)(x^2 + x)$',
              'It cannot be factored further'
            ],
            correctAnswer: 1,
            explanation: '$x^3 - x = x(x^2 - 1) = x(x-1)(x+1)$. Recognize the difference of squares $x^2 - 1 = (x-1)(x+1)$ for the complete factorization.'
          }
        ]
      }
    }
  ]
};
