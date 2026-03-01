export const satFunctionsPart1Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-fn1-intro',
      type: 'text' as const,
      content: `
# 📐 Function Notation

**Part 1 of 7 — What $f(x)$ Means, Evaluating Functions, Table Lookups**

Function notation is the language of the SAT Math section. The expression $f(x)$ is read "f of x" and simply means **the output of function $f$ when the input is $x$**.

**Key idea:** $f(x)$ is just a fancy name for $y$. The equation $y = 3x + 2$ and $f(x) = 3x + 2$ mean exactly the same thing.

| Notation | Meaning |
|----------|---------|
| $f(x)$ | The output for input $x$ |
| $f(3)$ | Plug $x = 3$ into the rule |
| $f(a + 1)$ | Plug $x = a + 1$ into the rule |
| $f(x) = 0$ | Find the input(s) where the output is zero |
      `
    },
    {
      id: 'sat-fn1-eval',
      type: 'text' as const,
      content: `
## Evaluating Functions — Worked Examples

**Example 1:** If $f(x) = 2x^2 - 5x + 1$, find $f(3)$.

$$f(3) = 2(3)^2 - 5(3) + 1 = 2(9) - 15 + 1 = 18 - 15 + 1 = 4$$

---

**Example 2:** If $g(x) = x^2 + 3x$, find $g(-2)$.

$$g(-2) = (-2)^2 + 3(-2) = 4 - 6 = -2$$

**Watch the signs!** When substituting a negative, wrap it in parentheses.

---

**Example 3 (Substituting an expression):** If $f(x) = 3x - 1$, find $f(a + 2)$.

Replace every $x$ with $(a + 2)$:

$$f(a + 2) = 3(a + 2) - 1 = 3a + 6 - 1 = 3a + 5$$

**SAT Tip:** When you see $f(\\text{something})$, just replace every $x$ in the formula with that something.
      `
    },
    {
      id: 'sat-fn1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Evaluate the Function** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x^2 - 4x + 7$, what is $f(5)$?',
            options: ['$7$', '$12$', '$2$', '$17$'],
            correctAnswer: 1,
            explanation: '$f(5) = (5)^2 - 4(5) + 7 = 25 - 20 + 7 = 12$.'
          },
          {
            question: 'If $g(x) = \\frac{x + 6}{2}$, what is $g(4)$?',
            options: ['$2$', '$3$', '$5$', '$7$'],
            correctAnswer: 2,
            explanation: '$g(4) = \\frac{4 + 6}{2} = \\frac{10}{2} = 5$.'
          }
        ]
      }
    },
    {
      id: 'sat-fn1-tables',
      type: 'text' as const,
      content: `
## Table Lookups

The SAT often gives you a table and asks you to evaluate $f(k)$ — just look up the row where $x = k$.

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|-----|------|-----|-----|-----|-----|
| $f(x)$ | $7$ | $4$ | $3$ | $4$ | $7$ |

From the table:
- $f(0) = 4$
- $f(3) = 7$
- $f(x) = 3$ when $x = 1$

**Common SAT twist:** "For what value of $x$ is $f(x) = 7$?"

Look across the $f(x)$ row for 7: it appears at $x = -1$ and $x = 3$. If the answer choices say "both $-1$ and $3$", pick that.

---

**Another twist:** "What is $f(f(1))$?"

- Step 1: $f(1) = 3$
- Step 2: $f(3) = 7$
- So $f(f(1)) = 7$

This is called **nested** evaluation — work from the inside out.
      `
    },
    {
      id: 'sat-fn1-input',
      type: 'input-boxes' as const,
      content: `
**Table Lookup Practice** 🧮

Use this table:

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|-----|-----|-----|-----|-----|-----|
| $h(x)$ | $10$ | $7$ | $4$ | $1$ | $-2$ |

1) What is $h(2)$?
2) What is $h(0) + h(4)$?
3) For what value of $x$ is $h(x) = 1$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '8', '3'],
        hint1: 'Look at the column where $x = 2$.',
        hint2: '$h(0) = 10$ and $h(4) = -2$. Add them.',
        hint3: 'Scan the $h(x)$ row for the value 1.',
        explanation: '$h(2) = 4$. $h(0) + h(4) = 10 + (-2) = 8$. $h(3) = 1$, so $x = 3$.'
      }
    },
    {
      id: 'sat-fn1-expressions',
      type: 'text' as const,
      content: `
## Substituting Expressions

When $f(x) = 2x + 1$, finding $f(3x)$ means replacing $x$ with $3x$:

$$f(3x) = 2(3x) + 1 = 6x + 1$$

**Common expression substitutions on the SAT:**

| Given $f(x) = x^2 + 1$ | Result |
|-------------------------|--------|
| $f(2a)$ | $(2a)^2 + 1 = 4a^2 + 1$ |
| $f(x - 1)$ | $(x-1)^2 + 1 = x^2 - 2x + 2$ |
| $f(x) + f(1)$ | $(x^2 + 1) + (1 + 1) = x^2 + 3$ |
| $2f(x)$ | $2(x^2 + 1) = 2x^2 + 2$ |

**Notice:** $f(2x) \\neq 2f(x)$ in general! $f(2x) = 4x^2 + 1$, but $2f(x) = 2x^2 + 2$.
      `
    },
    {
      id: 'sat-fn1-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = 3x - 2$ and $g(x) = x^2$, what is $f(g(2))$?',
            options: ['$4$', '$10$', '$16$', '$8$'],
            correctAnswer: 1,
            explanation: 'Work inside out. $g(2) = 2^2 = 4$. Then $f(4) = 3(4) - 2 = 10$.'
          },
          {
            question: 'The function $f$ is defined by $f(x) = 5 - 2x$. What is $f(a) - f(a + 1)$?',
            options: ['$-2$', '$2$', '$-2a$', '$7 - 4a$'],
            correctAnswer: 1,
            explanation: '$f(a) = 5 - 2a$. $f(a+1) = 5 - 2(a+1) = 3 - 2a$. So $f(a) - f(a+1) = (5-2a) - (3-2a) = 2$. This is constant, regardless of $a$!'
          }
        ]
      }
    }
  ]
};
