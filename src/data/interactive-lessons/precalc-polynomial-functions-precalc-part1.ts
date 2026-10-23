export const precalcPolynomialPart1Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 📐 Introduction to Polynomial Functions

**Part 1 of 7 — Degree, Leading Term & End Behavior**

Polynomial functions are the backbone of algebra and calculus. They model everything from projectile motion to profit curves to population growth. Understanding their structure — degree, leading term, and end behavior — gives you the power to predict how they behave without ever touching a calculator.
      `
    },
    {
      id: 'p1-what-is-polynomial',
      type: 'text' as const,
      content: `
## 📖 What Is a Polynomial?

A **polynomial function** is a function of the form:

$$\\boxed{p(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0}$$

where:
- $a_n, a_{n-1}, \\ldots, a_0$ are real-number **coefficients**
- $n$ is a non-negative integer (the **degree**)
- $a_n \\neq 0$ (the **leading coefficient**)

> 🔑 **Key idea:** Every polynomial is a sum of terms, each with a whole-number exponent. No square roots, no variables in denominators, no absolute values.


---

### Quick Classification

| Expression | Polynomial? | Why / Why not |
|-----------|:-----------:|---------------|
| $3x^4 - 2x + 7$ | ✅ | All whole-number exponents |
| $5x^{-2} + x$ | ❌ | Negative exponent ($x^{-2} = 1/x^2$) |
| $\\sqrt{x} + 1$ | ❌ | Fractional exponent ($x^{1/2}$) |
| $\\pi x^3 - ex$ | ✅ | $\\pi$ and $e$ are just constant coefficients |
| $7$ | ✅ | Constant polynomial (degree 0) |
      `
    },
    {
      id: 'p1-degree-leading-term',
      type: 'text' as const,
      content: `
## 📌 Degree and Leading Term

The **degree** of a polynomial is the highest power of $x$ with a nonzero coefficient. The **leading term** is the term containing that highest power.

| Polynomial | Degree | Leading Term | Leading Coefficient |
|-----------|:------:|:------------:|:-------------------:|
| $4x^5 - 3x^2 + 1$ | 5 | $4x^5$ | $4$ |
| $-x^3 + 7x$ | 3 | $-x^3$ | $-1$ |
| $2x^2 - 8x + 6$ | 2 | $2x^2$ | $2$ |
| $9$ | 0 | $9$ | $9$ |


---

### Why Does the Degree Matter?

The degree tells you:

1. **Maximum number of zeros** — a degree-$n$ polynomial has at most $n$ real zeros
2. **Maximum number of turning points** — at most $n - 1$
3. **End behavior** — whether the graph ultimately rises or falls on each side

> 🔑 **Key idea:** The leading term dominates for large $|x|$. All other terms become negligible by comparison.
      `
    },
    {
      id: 'p1-end-behavior',
      type: 'text' as const,
      content: `
## 📈 End Behavior

**End behavior** describes what happens to $p(x)$ as $x \\to +\\infty$ and as $x \\to -\\infty$. It depends on only two things: the **degree** and the **sign of the leading coefficient**.

| Degree | Leading Coefficient | As $x \\to -\\infty$ | As $x \\to +\\infty$ | In limit notation | Memory Aid |
|:------:|:------------------:|:------------------:|:------------------:|:---|:----------:|
| Even | Positive ($+$) | $p(x) \\to +\\infty$ | $p(x) \\to +\\infty$ | $\\lim_{x \\to -\\infty} p(x) = +\\infty,\\ \\lim_{x \\to \\infty} p(x) = +\\infty$ | Both ends up ↑↑ |
| Even | Negative ($-$) | $p(x) \\to -\\infty$ | $p(x) \\to -\\infty$ | $\\lim_{x \\to -\\infty} p(x) = -\\infty,\\ \\lim_{x \\to \\infty} p(x) = -\\infty$ | Both ends down ↓↓ |
| Odd | Positive ($+$) | $p(x) \\to -\\infty$ | $p(x) \\to +\\infty$ | $\\lim_{x \\to -\\infty} p(x) = -\\infty,\\ \\lim_{x \\to \\infty} p(x) = +\\infty$ | Falls left, rises right ↙↗ |
| Odd | Negative ($-$) | $p(x) \\to +\\infty$ | $p(x) \\to -\\infty$ | $\\lim_{x \\to -\\infty} p(x) = +\\infty,\\ \\lim_{x \\to \\infty} p(x) = -\\infty$ | Rises left, falls right ↗↙ |

The exam states end behavior with **limit notation**: $\\lim_{x \\to \\infty} p(x) = +\\infty$ reads "as $x$ increases without bound, $p(x)$ increases without bound.

> ⚠️ **Common mistake:** Students sometimes check end behavior using the constant term or the coefficient of $x$. Only the **leading term** determines end behavior.


---

### Worked Example

> **Describe the end behavior of $f(x) = -2x^4 + 5x^3 - x + 3$.**

**Step 1:** Identify the leading term → $-2x^4$

**Step 2:** Degree is **4** (even), leading coefficient is **$-2$** (negative)

**Step 3:** From the table: both ends point **down**

$$\\boxed{\\lim_{x \\to -\\infty} f(x) = -\\infty \\quad \\text{and} \\quad \\lim_{x \\to \\infty} f(x) = -\\infty}$$
      `
    },
    {
      id: 'p1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Degree & End Behavior Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the degree of the polynomial $g(x) = 7x^3 - 4x^5 + 2x - 9$?',
            options: [
              '3',
              '4',
              '5',
              '7'
            ],
            correctAnswer: 2,
            explanation: 'The highest power of $x$ is $x^5$ (from the $-4x^5$ term), so the degree is 5. Don\'t be tricked by the order the terms are written — always find the largest exponent.'
          },
          {
            question: 'Which polynomial has end behavior where both ends point upward ($\\uparrow \\uparrow$)?',
            options: [
              '$f(x) = -x^4 + 3x$',
              '$f(x) = 2x^3 - x$',
              '$f(x) = x^6 - 5x^2 + 1$',
              '$f(x) = -3x^5 + x^4$'
            ],
            correctAnswer: 2,
            explanation: 'Both ends up requires an **even** degree with a **positive** leading coefficient. $x^6 - 5x^2 + 1$ has degree 6 (even) and leading coefficient $+1$ (positive).'
          },
          {
            question: 'As $x \\to +\\infty$, what happens to $h(x) = -5x^3 + 100x^2$?',
            options: [
              '$h(x) \\to +\\infty$',
              '$h(x) \\to -\\infty$',
              '$h(x) \\to 0$',
              'It depends on the other terms'
            ],
            correctAnswer: 1,
            explanation: 'The leading term is $-5x^3$: odd degree, negative coefficient. As $x \\to +\\infty$, $-5x^3 \\to -\\infty$. Despite the large $+100x^2$ term, the $x^3$ term dominates for large $x$.'
          }
        ]
      }
    },
    {
      id: 'p1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Polynomial Evaluation Drill** 🧮

**1)** Evaluate $p(3)$ for $p(x) = x^3 - 2x$. (e.g., for $p(1)$ you'd get $-1$)

**2)** What is the degree of the product $(x^2 + 1)(x^3 - x)$? (e.g., for $(x)(x^2)$ the degree would be $3$)

**3)** What is the leading coefficient of $f(x) = 4 - 7x + 3x^3$? (e.g., for $5x^2 - x$ the leading coefficient is $5$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['21', '5', '3'],
        hint1: 'Substitute $x = 3$: $p(3) = 3^3 - 2(3) = 27 - 6$.',
        hint2: 'When multiplying polynomials, add the degrees: $\\deg(fg) = \\deg f + \\deg g$.',
        hint3: 'Rewrite in standard form to find the highest-degree term: $3x^3 - 7x + 4$.',
        explanation: '1) $p(3) = 27 - 6 = 21$. 2) Degree $2 + 3 = 5$. 3) The highest-degree term is $3x^3$, so the leading coefficient is $3$.'
      }
    },
    {
      id: 'p1-successive-differences',
      type: 'text' as const,
      content: `
## 🔢 Degree from a Table: Successive Differences

When a polynomial is given only as a **table with equally spaced inputs**, its degree shows up in the differences of the outputs (CED 1.5): for a degree-$n$ polynomial the **$n$th successive differences are constant** (and nonzero).

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:--:|:--:|:--:|:--:|:--:|:--:|
| $p(x)$ | $1$ | $2$ | $9$ | $28$ | $65$ |
| 1st differences | | $1$ | $7$ | $19$ | $37$ |
| 2nd differences | | | $6$ | $12$ | $18$ |
| 3rd differences | | | | $6$ | $6$ |

The third differences are constant ($6$), so the table comes from a **cubic**. (It is $p(x) = x^3 + 1$.)

- Linear: 1st differences constant (constant rate of change).
- Quadratic: 2nd differences constant (the rate of change changes at a constant rate).
- Degree $n$: $n$th differences constant.

> ⚠️ This test needs **equal spacing** in $x$. Differences of a table with gaps of different sizes tell you nothing about the degree.
      `
    },
    {
      id: 'p1-differences-drill',
      type: 'input-boxes' as const,
      content: `
**Successive Differences Drill** 🧮

A table has equally spaced inputs $x = 0, 1, 2, 3, 4$ and outputs $3, 5, 11, 21, 35$.

**1)** The first differences are $2, 6, 10, 14$. What constant value do the second differences take?

**2)** What is the degree of the polynomial that produced this table?

**3)** For the table $p(x) = 1, 2, 9, 28, 65$ above, what constant value do the third differences take?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '2', '6'],
        hint1: '$6 - 2$, $10 - 6$, $14 - 10$.',
        hint2: 'Constant $n$th differences means degree $n$.',
        hint3: 'Second differences $6, 12, 18$; subtract neighbors.',
        explanation: '1) The second differences are $4, 4, 4$. 2) Constant second differences means a quadratic, degree $2$ (the table is $2x^2 + 3$). 3) $12 - 6 = 6$ and $18 - 12 = 6$.'
      }
    },
    {
      id: 'p1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**End Behavior — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'End behavior is determined by the',
            options: ['constant term', 'number of terms', 'leading term', 'y-intercept']
          },
          {
            label: 'A degree-4 polynomial has at most ______ turning points',
            options: ['3', '4', '5', '2']
          },
          {
            label: 'If the degree is odd and the leading coefficient is positive, the right end',
            options: ['goes to $-\\infty$', 'goes to $+\\infty$', 'approaches zero', 'oscillates']
          },
          {
            label: 'A polynomial of degree $n$ can have at most ______ real zeros',
            options: ['$n - 1$', '$n$', '$n + 1$', '$2n$']
          }
        ],
        correctAnswers: ['leading term', '3', 'goes to $+\\infty$', '$n$'],
        hint1: 'Which single term controls what happens for very large $|x|$?',
        hint2: 'The maximum number of turning points is always one less than the degree.',
        hint3: 'Odd degree + positive leading coefficient means the graph rises to the right.',
        explanation: 'End behavior depends on the leading term. A degree-$n$ polynomial has at most $n - 1$ turning points and at most $n$ real zeros. Odd degree with positive leading coefficient means the right end goes to $+\\infty$.'
      }
    },
    {
      id: 'p1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Degree & End Behavior** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A polynomial satisfies $\\lim_{x \\to -\\infty} p(x) = +\\infty$ and $\\lim_{x \\to \\infty} p(x) = -\\infty$. Which could be its leading term?',
            options: [
              '$2x^4$',
              '$-3x^3$',
              '$x^6$',
              '$-x^2$'
            ],
            correctAnswer: 1,
            explanation: 'The described behavior (rises left, falls right) requires **odd** degree with a **negative** leading coefficient. $-3x^3$ is the only option that fits: odd degree (3), negative coefficient ($-3$).'
          },
          {
            question: 'The polynomial $f(x) = 2x^5 - x^3 + 4$ has how many possible turning points at most?',
            options: [
              '3',
              '4',
              '5',
              '6'
            ],
            correctAnswer: 1,
            explanation: 'A degree-5 polynomial can have at most $5 - 1 = 4$ turning points.'
          }
        ]
      }
    }
  ]
};
