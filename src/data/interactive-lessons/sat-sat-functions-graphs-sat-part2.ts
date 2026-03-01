export const satFunctionsPart2Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-fn2-intro',
      type: 'text' as const,
      content: `
# 🔢 Domain & Range

**Part 2 of 7 — Identifying from Equations and Graphs, Restricted Domains**

The **domain** is the set of all valid inputs ($x$-values). The **range** is the set of all possible outputs ($y$-values).

| Term | Question It Answers |
|------|-------------------|
| **Domain** | "What can I plug in?" |
| **Range** | "What can come out?" |

**Most functions have domain = all real numbers.** The SAT focuses on two important exceptions:

1. **Division by zero:** You cannot divide by zero, so exclude $x$-values that make a denominator $= 0$.
2. **Square roots of negatives:** $\\sqrt{\\text{negative}}$ is undefined in the reals, so the expression under the radical must be $\\geq 0$.
      `
    },
    {
      id: 'sat-fn2-restrictions',
      type: 'text' as const,
      content: `
## Finding Domain Restrictions

**Example 1 — Rational function:** $f(x) = \\frac{x + 3}{x - 2}$

Set the denominator $\\neq 0$: $x - 2 \\neq 0 \\implies x \\neq 2$.

Domain: all real numbers except $x = 2$.

---

**Example 2 — Square root:** $g(x) = \\sqrt{x - 5}$

Need $x - 5 \\geq 0 \\implies x \\geq 5$.

Domain: $[5, \\infty)$.

---

**Example 3 — Both restrictions:** $h(x) = \\frac{1}{\\sqrt{x + 4}}$

Need $x + 4 > 0$ (strict, because the root is in the denominator).

$x > -4$. Domain: $(-4, \\infty)$.

---

**SAT Tip:** If a question says "for what value of $x$ is $f(x)$ undefined?", set the denominator $= 0$ and solve.
      `
    },
    {
      id: 'sat-fn2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Find the Domain** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What value of $x$ makes $f(x) = \\frac{2x}{x + 5}$ undefined?',
            options: ['$x = 0$', '$x = 2$', '$x = -5$', '$x = 5$'],
            correctAnswer: 2,
            explanation: 'Set $x + 5 = 0 \\implies x = -5$. At $x = -5$ the denominator is zero, so $f(-5)$ is undefined.'
          },
          {
            question: 'What is the domain of $g(x) = \\sqrt{3 - x}$?',
            options: ['$x \\geq 3$', '$x \\leq 3$', '$x > 3$', '$x \\neq 3$'],
            correctAnswer: 1,
            explanation: 'Need $3 - x \\geq 0 \\implies -x \\geq -3 \\implies x \\leq 3$. Remember to flip the inequality when dividing by a negative.'
          }
        ]
      }
    },
    {
      id: 'sat-fn2-range',
      type: 'text' as const,
      content: `
## Finding Range

Range is harder to determine algebraically, but the SAT usually tests it via graphs or simple functions.

**Key ranges to know:**

| Function | Range |
|----------|-------|
| $f(x) = x^2$ | $[0, \\infty)$ |
| $f(x) = x^2 + 3$ | $[3, \\infty)$ |
| $f(x) = -(x-1)^2 + 4$ | $(-\\infty, 4]$ |
| $f(x) = |x|$ | $[0, \\infty)$ |
| $f(x) = \\sqrt{x}$ | $[0, \\infty)$ |
| $f(x) = \\frac{1}{x}$ | All reals except $0$ |

**Quadratic shortcut:** For $f(x) = a(x-h)^2 + k$:
- If $a > 0$ (opens up): range is $[k, \\infty)$
- If $a < 0$ (opens down): range is $(-\\infty, k]$

The vertex gives you the minimum (or maximum) output value.
      `
    },
    {
      id: 'sat-fn2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Domain** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$f(x) = \\frac{1}{x - 7}$ — domain excludes',
            options: ['$x = 0$', '$x = 1$', '$x = 7$', '$x = -7$']
          },
          {
            label: '$g(x) = \\sqrt{2x - 8}$ — domain is',
            options: ['$x \\geq 4$', '$x \\geq 8$', '$x \\geq 2$', '$x \\leq 4$']
          },
          {
            label: '$h(x) = x^2 + 1$ — range is',
            options: ['$[0, \\infty)$', '$[1, \\infty)$', '$(-\\infty, 1]$', 'All real numbers']
          }
        ],
        correctAnswers: ['$x = 7$', '$x \\geq 4$', '$[1, \\infty)$'],
        hint1: 'Set $x - 7 = 0$.',
        hint2: '$2x - 8 \\geq 0 \\implies 2x \\geq 8 \\implies x \\geq ?$',
        hint3: '$x^2 \\geq 0$ for all $x$, so $x^2 + 1 \\geq 1$.',
        explanation: '$x - 7 = 0$ at $x = 7$. $2x \\geq 8$ gives $x \\geq 4$. Since $x^2 \\geq 0$, the minimum of $x^2 + 1$ is 1.'
      }
    },
    {
      id: 'sat-fn2-input',
      type: 'input-boxes' as const,
      content: `
**Domain & Range Practice** 🧮

1) For $f(x) = \\frac{x}{x - 3}$, what value is excluded from the domain?
2) For $g(x) = \\sqrt{x + 2}$, the smallest value in the domain is?
3) For $h(x) = -(x + 1)^2 + 9$, the maximum output value is?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '-2', '9'],
        hint1: 'Set the denominator equal to zero: $x - 3 = 0$.',
        hint2: 'Set $x + 2 \\geq 0$ and solve.',
        hint3: 'The vertex form $-(x+1)^2 + 9$ opens downward. The vertex is the max.',
        explanation: '$x - 3 = 0 \\implies x = 3$. $x + 2 \\geq 0 \\implies x \\geq -2$. The vertex of $-(x+1)^2 + 9$ is $(-1, 9)$, so maximum $y = 9$.'
      }
    },
    {
      id: 'sat-fn2-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The function $f(x) = \\frac{\\sqrt{x}}{x - 4}$ is defined for which values of $x$?',
            options: ['$x \\geq 0$', '$x > 0$', '$x \\geq 0$ and $x \\neq 4$', '$x > 4$'],
            correctAnswer: 2,
            explanation: 'Need $x \\geq 0$ for $\\sqrt{x}$ AND $x \\neq 4$ for the denominator. Both conditions must hold simultaneously.'
          },
          {
            question: 'If $g(x) = 2(x - 3)^2 - 8$, what is the range of $g$?',
            options: ['$[-8, \\infty)$', '$[3, \\infty)$', '$(-\\infty, -8]$', 'All real numbers'],
            correctAnswer: 0,
            explanation: '$a = 2 > 0$ so the parabola opens up. The vertex is $(3, -8)$, making the minimum output $-8$. Range: $[-8, \\infty)$.'
          }
        ]
      }
    }
  ]
};
