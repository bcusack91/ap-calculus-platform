export const precalcPolynomialPart4Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 📐 Polynomial Division

**Part 4 of 7 — Long Division, Equivalent Forms & the Factor Theorem**

When you cannot factor a polynomial by inspection, **polynomial long division** rewrites it in the equivalent form $p(x) = d(x)\\,q(x) + r(x)$. With the Factor Theorem it lets you find every zero once one zero is known.
      `
    },
    {
      id: 'p4-long-division',
      type: 'text' as const,
      content: `
## 📖 Polynomial Long Division

Polynomial long division works just like numerical long division. We divide the **dividend** by the **divisor** to get a **quotient** and a **remainder** whose degree is less than the divisor's.

$$\\boxed{\\frac{p(x)}{d(x)} = q(x) + \\frac{r(x)}{d(x)}}$$

or equivalently: $p(x) = d(x) \\cdot q(x) + r(x)$ with $\\deg r < \\deg d$. Both are **equivalent forms** of the same function (for $d(x) \\neq 0$); each shows something different — the second form shows factors, the first shows end behavior.


---

### Worked Example

> **Divide $p(x) = 2x^3 + 3x^2 - 5x + 1$ by $d(x) = x - 2$.**

| Step | Action | Result |
|:----:|--------|--------|
| 1 | Divide leading terms: $2x^3 \\div x = 2x^2$ | First term of quotient: $2x^2$ |
| 2 | Multiply: $2x^2(x - 2) = 2x^3 - 4x^2$ | Subtract from dividend |
| 3 | Subtract: $(2x^3 + 3x^2) - (2x^3 - 4x^2) = 7x^2$ | Bring down $-5x$ |
| 4 | Divide: $7x^2 \\div x = 7x$ | Next term of quotient: $7x$ |
| 5 | Multiply: $7x(x - 2) = 7x^2 - 14x$ | Subtract |
| 6 | Subtract: $(7x^2 - 5x) - (7x^2 - 14x) = 9x$ | Bring down $+1$ |
| 7 | Divide: $9x \\div x = 9$ | Final term of quotient: $9$ |
| 8 | Multiply: $9(x - 2) = 9x - 18$ | Subtract |
| 9 | Subtract: $(9x + 1) - (9x - 18) = 19$ | Remainder: $19$ |

$$\\boxed{\\frac{2x^3 + 3x^2 - 5x + 1}{x - 2} = 2x^2 + 7x + 9 + \\frac{19}{x - 2}}$$

**Check by multiplying back:** $(x - 2)(2x^2 + 7x + 9) + 19 = 2x^3 + 3x^2 - 5x - 18 + 19 = 2x^3 + 3x^2 - 5x + 1$ ✓

> 💡 For a divisor of the form $x - c$ there is a shortcut layout called **synthetic division**; it gives the same quotient and remainder and is optional.
      `
    },
    {
      id: 'p4-remainder-factor-theorems',
      type: 'text' as const,
      content: `
## 🔑 The Factor Theorem

Division connects evaluation and factoring. Dividing $p(x)$ by $(x - c)$ gives $p(x) = (x - c)\\,q(x) + r$ with a constant remainder $r$; substituting $x = c$ shows $p(c) = r$. So the remainder is $0$ exactly when $p(c) = 0$:

### Factor Theorem

$$\\boxed{(x - c) \\text{ is a factor of } p(x) \\quad \\Longleftrightarrow \\quad p(c) = 0}$$

A zero $c$, a factor $(x - c)$, and an $x$-intercept $(c, 0)$ are three views of the same fact.


---

### Example: From One Known Factor to All the Zeros

> **Is $(x - 3)$ a factor of $p(x) = x^3 - 2x^2 - 5x + 6$?**

Evaluate $p(3) = 27 - 18 - 15 + 6 = 0$, so yes — and dividing by $(x - 3)$ gives $x^2 + x - 2 = (x + 2)(x - 1)$, so

$$p(x) = (x - 3)(x + 2)(x - 1), \\qquad \\text{zeros } 3,\\ -2,\\ 1.$$

Check the division: $(x - 3)(x^2 + x - 2) = x^3 + x^2 - 2x - 3x^2 - 3x + 6 = x^3 - 2x^2 - 5x + 6$ ✓
      `
    },
    {
      id: 'p4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Division & Equivalent Forms Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Divide $p(x) = x^3 + 2x - 5$ by $(x - 1)$. Which equivalent form is correct?',
            options: [
              '$p(x) = (x-1)(x^2 + x + 3) - 2$',
              '$p(x) = (x-1)(x^2 + x + 3) + 2$',
              '$p(x) = (x-1)(x^2 - x + 3) - 2$',
              '$p(x) = (x-1)(x^2 + 2) - 5$'
            ],
            correctAnswer: 0,
            explanation: 'Multiply back: $(x-1)(x^2 + x + 3) = x^3 + x^2 + 3x - x^2 - x - 3 = x^3 + 2x - 3$, so $p(x) = x^3 + 2x - 3 - 2$, remainder $-2$. The $+2$ form has the wrong sign; $x^2 - x + 3$ gives $x^3 - 2x^2 + 4x - 3$; and $(x-1)(x^2+2) - 5 = x^3 - x^2 + 2x - 7$.'
          },
          {
            question: 'Which statement is TRUE about $p(x) = (x + 2)(x^2 - 3x + 1) + 4$?',
            options: [
              '$p(-2) = 4$',
              '$p(-2) = 0$',
              '$p(2) = 4$',
              '$(x + 2)$ is a factor of $p(x)$'
            ],
            correctAnswer: 0,
            explanation: 'Substituting $x = -2$ makes the first product zero, leaving $p(-2) = 4$. A nonzero remainder means $(x + 2)$ is NOT a factor; and $x = 2$ does not make $(x + 2)$ zero, so $p(2) = 4(-1) + 4 = 0$, not $4$.'
          },
          {
            question: 'If dividing $p(x)$ by $(x - 4)$ leaves remainder $0$, which must be true?',
            options: [
              '$p(x)$ has degree 4',
              '$x = 4$ is a zero of $p(x)$',
              'The leading coefficient is 4',
              '$p(x)$ has exactly 4 zeros'
            ],
            correctAnswer: 1,
            explanation: 'By the Factor Theorem: remainder $0$ means $(x - 4)$ is a factor, which means $p(4) = 0$, so $x = 4$ is a zero. The degree, the leading coefficient and the number of zeros are not determined by one factor.'
          }
        ]
      }
    },
    {
      id: 'p4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Division Drill** 🧮

**1)** Evaluate $p(2)$ for $p(x) = x^3 - 3x^2 + 2x + 1$. (e.g., for $p(x) = x^2 - 1$, $p(2) = 3$)

**2)** Divide $x^3 - 7x + 6$ by $(x - 1)$: the quotient is $x^2 + x - 6$. What is the remainder?

**3)** The division $\\frac{x^4 - 16}{x - 2}$ has quotient $x^3 + 2x^2 + 4x + 8$. What is the remainder?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '0', '0'],
        hint1: '$p(2) = 8 - 12 + 4 + 1$.',
        hint2: 'Multiply back: $(x - 1)(x^2 + x - 6) = x^3 - 7x + 6$, or evaluate $p(1) = 1 - 7 + 6$.',
        hint3: '$(x - 2)(x^3 + 2x^2 + 4x + 8) = x^4 - 16$: the remainder is what is left over, and $2^4 - 16 = 0$.',
        explanation: '1) $p(2) = 8 - 12 + 4 + 1 = 1$. 2) $(x-1)(x^2 + x - 6) = x^3 - 7x + 6$, so the remainder is $0$ and $x = 1$ is a zero. 3) $(x-2)(x^3 + 2x^2 + 4x + 8) = x^4 - 16$, remainder $0$; $x = 2$ is a zero of $x^4 - 16$.'
      }
    },
    {
      id: 'p4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Division Concepts — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dividing $p(x)$ by $(x - c)$ leaves a remainder equal to',
            options: ['$c$', '$p(c)$', '$p(0)$', 'the leading coefficient']
          },
          {
            label: 'Polynomial long division writes $p(x)$ as $d(x) \\cdot q(x) +$',
            options: ['$r(x)$ with $\\deg r < \\deg d$', '$r(x)$ with $\\deg r = \\deg d$', '$q(x)$', '$p(x)$']
          },
          {
            label: 'If $p(c) = 0$, then $(x - c)$ is a ______ of $p(x)$',
            options: ['zero', 'factor', 'remainder', 'coefficient']
          },
          {
            label: 'If $(x - c)$ divides $p(x)$ with remainder $0$, then',
            options: ['$p(c) = 0$', '$p(0) = c$', '$c$ is the leading coefficient', '$p(c) = c$']
          }
        ],
        correctAnswers: ['$p(c)$', '$r(x)$ with $\\deg r < \\deg d$', 'factor', '$p(c) = 0$'],
        hint1: 'Substitute $x = c$ into $p(x) = (x - c)q(x) + r$.',
        hint2: 'Division stops when what is left has smaller degree than the divisor.',
        hint3: 'This is exactly the Factor Theorem, read in both directions.',
        explanation: 'Remainder $= p(c)$. Long division gives $p = d \\cdot q + r$ with $\\deg r < \\deg d$. $p(c) = 0$ means $(x-c)$ is a factor, and a zero remainder on dividing by $(x - c)$ means $p(c) = 0$.'
      }
    },
    {
      id: 'p4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Polynomial Division** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'You need to find all zeros of $p(x) = x^3 - 6x^2 + 11x - 6$. You discover $p(1) = 0$. What should your next step be?',
            options: [
              'Divide by $(x - 1)$ and factor the quadratic quotient',
              'Evaluate $p(-1)$ to find a second factor',
              'Use long division to divide by $(x^2 - 1)$',
              'Conclude that all zeros are $x = 1$'
            ],
            correctAnswer: 0,
            explanation: 'Since $p(1) = 0$, $(x - 1)$ is a factor. Divide by $(x - 1)$ to get a quadratic quotient ($x^2 - 5x + 6$), then factor it to find the remaining zeros $2$ and $3$.'
          },
          {
            question: 'Which is an equivalent form of $f(x) = \\dfrac{2x^3 - 5x + 3}{x - 1}$ for $x \\neq 1$?',
            options: [
              '$2x^2 + 2x - 3$',
              '$2x^2 - 2x - 3$',
              '$2x^2 + 2x - 3 + \\dfrac{6}{x-1}$',
              '$2x^2 - 3$'
            ],
            correctAnswer: 0,
            explanation: 'Multiply back: $(x-1)(2x^2 + 2x - 3) = 2x^3 + 2x^2 - 3x - 2x^2 - 2x + 3 = 2x^3 - 5x + 3$, so the division is exact and $x = 1$ is a zero of the numerator (a hole of $f$, not an asymptote). The other forms do not multiply back to the numerator.'
          }
        ]
      }
    }
  ]
};
