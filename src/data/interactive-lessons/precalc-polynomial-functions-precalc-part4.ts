export const precalcPolynomialPart4Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 📐 Polynomial Division

**Part 4 of 7 — Long Division, Synthetic Division & the Remainder Theorem**

When you can't factor a polynomial by inspection, **polynomial division** lets you break it down systematically. Combined with the Remainder and Factor Theorems, division becomes a powerful tool for finding zeros of higher-degree polynomials.
      `
    },
    {
      id: 'p4-long-division',
      type: 'text' as const,
      content: `
## 📖 Polynomial Long Division

Polynomial long division works just like numerical long division. We divide the **dividend** by the **divisor** to get a **quotient** and a **remainder**.

$$\\boxed{\\frac{p(x)}{d(x)} = q(x) + \\frac{r(x)}{d(x)}}$$

or equivalently: $p(x) = d(x) \\cdot q(x) + r(x)$


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
      `
    },
    {
      id: 'p4-synthetic-division',
      type: 'text' as const,
      content: `
## ⚡ Synthetic Division

**Synthetic division** is a shortcut that works when dividing by a **linear divisor** of the form $(x - c)$. It uses only the coefficients, making it faster and less error-prone.

### Steps for Synthetic Division

1. Write $c$ (the zero of the divisor) on the left
2. List all coefficients of the dividend (include $0$ for missing terms!)
3. Bring down the first coefficient
4. Multiply by $c$, add to next coefficient, repeat
5. The last number is the remainder


---

### Worked Example

> **Divide $x^3 - 6x^2 + 11x - 6$ by $(x - 2)$ using synthetic division.**

$$c = 2 \\qquad \\text{Coefficients: } 1, \\; -6, \\; 11, \\; -6$$

| | $1$ | $-6$ | $11$ | $-6$ |
|---|:---:|:---:|:---:|:---:|
| Bring down / Multiply by 2 | $\\downarrow$ | $+2$ | $-8$ | $+6$ |
| **Result** | $1$ | $-4$ | $3$ | $0$ |

$$\\text{Quotient: } x^2 - 4x + 3 \\qquad \\text{Remainder: } 0$$

Since the remainder is $0$, $(x - 2)$ is a factor! We can continue:

$$x^2 - 4x + 3 = (x - 1)(x - 3)$$

So: $x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3)$

> ⚠️ **Don't forget missing terms!** If dividing $x^3 - 8$, the coefficients are $1, 0, 0, -8$ — you must include the zeros for the $x^2$ and $x$ terms.
      `
    },
    {
      id: 'p4-remainder-factor-theorems',
      type: 'text' as const,
      content: `
## 🔑 The Remainder & Factor Theorems

These two theorems connect division, evaluation, and factoring:

### Remainder Theorem

$$\\boxed{\\text{When } p(x) \\text{ is divided by } (x - c), \\text{ the remainder equals } p(c).}$$

This means you can find the remainder **without doing the full division** — just substitute $c$ into $p(x)$.


---

### Factor Theorem

$$\\boxed{(x - c) \\text{ is a factor of } p(x) \\quad \\Longleftrightarrow \\quad p(c) = 0}$$

The Factor Theorem is a special case of the Remainder Theorem: if the remainder is zero, the divisor divides evenly.


---

### Example: Quick Remainder Check

> **Is $(x - 3)$ a factor of $p(x) = x^3 - 2x^2 - 5x + 6$?**

Just evaluate $p(3)$:

$$p(3) = 27 - 18 - 15 + 6 = 0 \\quad \\checkmark$$

Yes! Since $p(3) = 0$, $(x - 3)$ is a factor. No long division needed.
      `
    },
    {
      id: 'p4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Division & Remainder Theorem Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the remainder when $p(x) = x^3 + 2x - 5$ is divided by $(x - 1)$?',
            options: [
              '$0$',
              '$-2$',
              '$-4$',
              '$-1$'
            ],
            correctAnswer: 1,
            explanation: 'By the Remainder Theorem, the remainder equals $p(1) = 1 + 2 - 5 = -2$. No division needed — just evaluate!'
          },
          {
            question: 'When performing synthetic division of $2x^4 - x^2 + 3$ by $(x + 1)$, what value of $c$ do you use?',
            options: [
              '$c = 1$',
              '$c = -1$',
              '$c = 2$',
              '$c = -2$'
            ],
            correctAnswer: 1,
            explanation: 'For $(x + 1) = (x - (-1))$, we use $c = -1$. Always take the zero of the divisor, not the number you see.'
          },
          {
            question: 'If synthetic division of $p(x)$ by $(x - 4)$ gives a remainder of $0$, which must be true?',
            options: [
              '$p(x)$ has degree 4',
              '$x = 4$ is a zero of $p(x)$',
              'The leading coefficient is 4',
              '$p(x)$ has exactly 4 zeros'
            ],
            correctAnswer: 1,
            explanation: 'By the Factor Theorem: remainder $0$ means $(x - 4)$ is a factor, which means $p(4) = 0$, so $x = 4$ is a zero.'
          }
        ]
      }
    },
    {
      id: 'p4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Division Drill** 🧮

**1)** Use the Remainder Theorem: What is $p(2)$ for $p(x) = x^3 - 3x^2 + 2x + 1$? (e.g., for $p(x) = x^2 - 1$, $p(2) = 3$)

**2)** After dividing $x^3 - 7x + 6$ by $(x - 1)$, the quotient is $x^2 + x - 6$. What value makes the remainder zero? Enter the remainder. (e.g., if the division is exact, enter $0$)

**3)** What coefficients should you list for synthetic division of $x^4 - 16$ by $(x - 2)$? How many coefficients total? (e.g., $x^3 + 1$ needs $4$ coefficients: $1, 0, 0, 1$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '0', '5'],
        hint1: '$p(2) = 8 - 12 + 4 + 1$.',
        hint2: 'Check: does $(x-1)$ divide evenly? Evaluate $p(1) = 1 - 7 + 6$.',
        hint3: '$x^4 - 16 = x^4 + 0x^3 + 0x^2 + 0x - 16$, so list $1, 0, 0, 0, -16$ — that\'s 5 coefficients.',
        explanation: '1) $p(2) = 8 - 12 + 4 + 1 = 1$. 2) $p(1) = 1 - 7 + 6 = 0$, so the remainder is $0$. 3) Include zeros for missing $x^3$, $x^2$, and $x$ terms: 5 coefficients total.'
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
            label: 'The Remainder Theorem says the remainder when dividing by $(x - c)$ equals',
            options: ['$c$', '$p(c)$', '$p(0)$', 'the leading coefficient']
          },
          {
            label: 'Synthetic division can only be used when the divisor is',
            options: ['any polynomial', 'a quadratic', 'linear of the form $(x - c)$', 'a constant']
          },
          {
            label: 'If $p(c) = 0$, then $(x - c)$ is a ______ of $p(x)$',
            options: ['zero', 'factor', 'remainder', 'coefficient']
          },
          {
            label: 'When setting up synthetic division of $x^3 + 5$ by $(x + 2)$, you use $c =$',
            options: ['$2$', '$-2$', '$5$', '$3$']
          }
        ],
        correctAnswers: ['$p(c)$', 'linear of the form $(x - c)$', 'factor', '$-2$'],
        hint1: 'The remainder equals the polynomial evaluated at $c$.',
        hint2: 'Synthetic division is a shortcut — it only works for the simplest type of divisor.',
        hint3: 'This is exactly the Factor Theorem.',
        explanation: 'Remainder $= p(c)$. Synthetic division requires a linear divisor $(x - c)$. $p(c) = 0$ means $(x-c)$ is a factor. For $(x + 2) = (x - (-2))$, use $c = -2$.'
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
              'Use synthetic division to divide by $(x - 1)$ and factor the quotient',
              'Plug in $x = 1$ into the derivative',
              'Use long division to divide by $(x^2 - 1)$',
              'Conclude that all zeros are $x = 1$'
            ],
            correctAnswer: 0,
            explanation: 'Since $p(1) = 0$, $(x - 1)$ is a factor. Divide by $(x - 1)$ via synthetic division to get a quadratic quotient, then factor or use the quadratic formula to find the remaining zeros.'
          },
          {
            question: 'When dividing $2x^3 - 5x + 3$ by $(x - 1)$ using synthetic division, the coefficients you list are:',
            options: [
              '$2, -5, 3$',
              '$2, 0, -5, 3$',
              '$2, -1, -5, 3$',
              '$1, 2, -5, 3$'
            ],
            correctAnswer: 1,
            explanation: 'The polynomial is $2x^3 + 0x^2 - 5x + 3$ — you must include $0$ for the missing $x^2$ term. The coefficients are $2, 0, -5, 3$.'
          }
        ]
      }
    }
  ]
};
