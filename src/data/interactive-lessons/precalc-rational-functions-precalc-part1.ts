export const precalcRationalPart1Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 📊 What Is a Rational Function?

**Part 1 of 7 — Definition, Domain & Excluded Values**

A **rational function** is a ratio of two polynomials:

$$\\boxed{f(x) = \\frac{p(x)}{q(x)}, \\quad q(x) \\neq 0}$$

Just as you can't divide numbers by zero, you can't divide polynomials by zero. This makes the **domain** — the set of all legal inputs — the first thing to determine when working with any rational function.
      `
    },
    {
      id: 'p1-examples',
      type: 'text' as const,
      content: `
## 📖 Recognizing Rational Functions

| Expression | Rational? | Why |
|:-----------|:---------:|:----|
| $\\frac{x^2 + 1}{x - 3}$ | ✅ | Polynomial over polynomial |
| $\\frac{5}{x}$ | ✅ | Constant (degree 0) over polynomial |
| $\\frac{\\sqrt{x}}{x + 1}$ | ❌ | Numerator is not a polynomial |
| $\\frac{x^3 - 2x}{1}$ | ✅ | Any polynomial is rational ($q(x) = 1$) |
| $\\frac{3x}{x^2 + 2x + 1}$ | ✅ | Polynomial over polynomial |

> 💡 Every polynomial is also a rational function — just one with denominator $1$.
      `
    },
    {
      id: 'p1-domain',
      type: 'text' as const,
      content: `
## 🔑 Finding the Domain

The domain of $f(x) = \\frac{p(x)}{q(x)}$ is **all real numbers except** where $q(x) = 0$.

### Step-by-Step Process

| Step | Action | Example: $f(x) = \\frac{x+1}{x^2 - 4}$ |
|:----:|--------|----------------------------------------|
| 1 | Set denominator equal to zero | $x^2 - 4 = 0$ |
| 2 | Solve for $x$ | $x^2 = 4 \\implies x = \\pm 2$ |
| 3 | Exclude those values | Domain: all reals except $x = 2$ and $x = -2$ |
| 4 | Write in interval notation | $(-\\infty, -2) \\cup (-2, 2) \\cup (2, \\infty)$ |

---

### Worked Examples

**Example 1:** $g(x) = \\frac{3x}{x + 5}$

Set $x + 5 = 0 \\implies x = -5$

$$\\text{Domain: } (-\\infty, -5) \\cup (-5, \\infty)$$

**Example 2:** $h(x) = \\frac{x^2}{x^2 + 1}$

Set $x^2 + 1 = 0 \\implies x^2 = -1$ — no real solutions!

$$\\text{Domain: } (-\\infty, \\infty) = \\text{all real numbers}$$

> ⚠️ Not every rational function has excluded values. If the denominator has no real roots, the domain is all reals.

**Example 3:** $k(x) = \\frac{1}{x^3 - x}$

Factor: $x^3 - x = x(x^2 - 1) = x(x-1)(x+1)$

Excluded: $x = 0, \\; x = 1, \\; x = -1$

$$\\text{Domain: } (-\\infty, -1) \\cup (-1, 0) \\cup (0, 1) \\cup (1, \\infty)$$
      `
    },
    {
      id: 'p1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Domain & Excluded Values Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the domain of $f(x) = \\frac{x}{x^2 - 9}$?',
            options: [
              'All reals except $x = 9$',
              'All reals except $x = 3$',
              'All reals except $x = 3$ and $x = -3$',
              'All real numbers'
            ],
            correctAnswer: 2,
            explanation: '$x^2 - 9 = (x-3)(x+3) = 0$ when $x = 3$ or $x = -3$. Both values must be excluded from the domain.'
          },
          {
            question: 'Which rational function has a domain of all real numbers?',
            options: [
              '$f(x) = \\frac{1}{x}$',
              '$f(x) = \\frac{x}{x^2 + 4}$',
              '$f(x) = \\frac{x}{x^2 - 4}$',
              '$f(x) = \\frac{1}{x - 1}$'
            ],
            correctAnswer: 1,
            explanation: '$x^2 + 4 = 0$ gives $x^2 = -4$, which has no real solutions. The denominator is never zero, so the domain is all reals.'
          },
          {
            question: 'How many values are excluded from the domain of $f(x) = \\frac{2}{x^3 - 4x}$?',
            options: [
              '1',
              '2',
              '3',
              '4'
            ],
            correctAnswer: 2,
            explanation: 'Factor: $x^3 - 4x = x(x^2 - 4) = x(x-2)(x+2)$. Three zeros: $x = 0, 2, -2$. Three values excluded.'
          }
        ]
      }
    },
    {
      id: 'p1-input-drill',
      type: 'input-boxes' as const,
      content: `
**Domain Drill** 🧮

**1)** For $f(x) = \\frac{7}{x - 6}$, what value of $x$ is excluded from the domain? (e.g., for $\\frac{1}{x-3}$, set $x - 3 = 0$ to get $x = 3$)

**2)** For $g(x) = \\frac{x}{2x + 10}$, what value of $x$ is excluded? (e.g., for $\\frac{x}{3x+12}$, set $3x + 12 = 0$ to get $x = -4$)

**3)** How many values are excluded from the domain of $h(x) = \\frac{1}{x^2 + 5}$? (e.g., for $\\frac{1}{x^2+1}$, $x^2 + 1 = 0$ has no real solutions → $0$ excluded)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '-5', '0'],
        hint1: 'Set $x - 6 = 0$ and solve.',
        hint2: 'Set $2x + 10 = 0$, then solve for $x$.',
        hint3: 'Can $x^2 + 5$ ever equal zero for any real $x$?',
        explanation: '1) $x - 6 = 0 \\Rightarrow x = 6$. 2) $2x + 10 = 0 \\Rightarrow x = -5$. 3) $x^2 + 5 > 0$ for all real $x$ (minimum value is $5$), so $0$ values are excluded.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Domain Concepts — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The domain of a rational function excludes values where the',
            options: ['numerator equals zero', 'denominator equals zero', 'function equals zero', 'derivative equals zero']
          },
          {
            label: 'If $q(x) = x^2 + 9$, then the domain is',
            options: ['all reals except $x = 3$', 'all reals except $x = \\pm 3$', 'all real numbers', 'no real numbers']
          },
          {
            label: 'To find excluded values, you should first',
            options: ['simplify the fraction', 'factor the denominator', 'evaluate the numerator', 'graph the function']
          },
          {
            label: 'The number of excluded domain values equals the number of',
            options: ['terms in the numerator', 'distinct real roots of the denominator', 'terms in the denominator', 'asymptotes']
          }
        ],
        correctAnswers: ['denominator equals zero', 'all real numbers', 'factor the denominator', 'distinct real roots of the denominator'],
        hint1: 'Division by zero is undefined — that is the only restriction.',
        hint2: 'Think about whether $x^2 + 9 = 0$ has real solutions.',
        hint3: 'Factoring lets you find each root individually.',
        explanation: 'Excluded values come from the denominator equaling zero. $x^2 + 9 > 0$ always, so no exclusions. Factor the denominator first to find its roots. The count of excluded values equals the number of distinct real roots of the denominator.'
      }
    },
    {
      id: 'p1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Domain & Excluded Values** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The domain of $f(x) = \\frac{x^2 - 1}{x^2 - 5x + 6}$ in interval notation is:',
            options: [
              '$(-\\infty, 1) \\cup (1, \\infty)$',
              '$(-\\infty, 2) \\cup (2, 3) \\cup (3, \\infty)$',
              '$(-\\infty, -1) \\cup (-1, 1) \\cup (1, \\infty)$',
              '$(-\\infty, 2) \\cup (2, \\infty)$'
            ],
            correctAnswer: 1,
            explanation: 'The denominator $x^2 - 5x + 6 = (x-2)(x-3)$ is zero at $x = 2$ and $x = 3$. The numerator zeros ($x = \\pm 1$) do NOT affect the domain. Domain: $(-\\infty, 2) \\cup (2, 3) \\cup (3, \\infty)$.'
          },
          {
            question: 'A student says the domain of $\\frac{x-3}{x^2 - 9}$ excludes only $x = 3$, because the $(x-3)$ cancels. Is this correct?',
            options: [
              'Yes — after canceling, there is no restriction at $x = 3$',
              'No — $x = 3$ is still excluded even though the factor cancels',
              'No — only $x = -3$ should be excluded',
              'No — both $x = 3$ and $x = -3$ must be excluded'
            ],
            correctAnswer: 3,
            explanation: 'The original denominator $x^2 - 9 = (x-3)(x+3)$ is zero at both $x = 3$ and $x = -3$. Canceling $(x-3)$ removes the vertical asymptote at $x = 3$ (creating a hole instead), but $x = 3$ is still NOT in the domain. Both values must be excluded.'
          }
        ]
      }
    }
  ]
};
