export const satFunctionsPart6Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-fn6-intro',
      type: 'text' as const,
      content: `
# 📐 Piecewise & Absolute Value Functions

**Part 6 of 7 — Reading Piecewise Rules, Evaluating, Absolute Value Equations**

A **piecewise function** uses different rules for different intervals of $x$:

$$f(x) = \\begin{cases} 2x + 1, & x < 3 \\\\ x^2 - 5, & x \\geq 3 \\end{cases}$$

To evaluate, **first check which interval** your input falls in, then use that rule.

- $f(1)$: Since $1 < 3$, use the top rule: $f(1) = 2(1) + 1 = 3$.
- $f(3)$: Since $3 \\geq 3$, use the bottom rule: $f(3) = 3^2 - 5 = 4$.
- $f(5)$: Since $5 \\geq 3$, use the bottom rule: $f(5) = 25 - 5 = 20$.

**SAT Tip:** Always check the boundary value! At $x = 3$ above, the $\\geq$ sign tells us to use the second piece.
      `
    },
    {
      id: 'sat-fn6-piecewise',
      type: 'text' as const,
      content: `
## Piecewise Functions — More Examples

**Example:** Evaluate at several points:

$$g(x) = \\begin{cases} -x + 4, & x \\leq 1 \\\\ 3, & 1 < x < 5 \\\\ 2x - 7, & x \\geq 5 \\end{cases}$$

| Input | Interval | Rule | Output |
|-------|----------|------|--------|
| $g(-2)$ | $-2 \\leq 1$ | $-(-2) + 4$ | $6$ |
| $g(1)$ | $1 \\leq 1$ | $-(1) + 4$ | $3$ |
| $g(3)$ | $1 < 3 < 5$ | constant $3$ | $3$ |
| $g(5)$ | $5 \\geq 5$ | $2(5) - 7$ | $3$ |
| $g(10)$ | $10 \\geq 5$ | $2(10) - 7$ | $13$ |

**Is $g$ continuous?** Check the boundaries:
- At $x = 1$: left piece gives $3$, middle piece approaches $3$ ✓
- At $x = 5$: middle piece is $3$, right piece gives $3$ ✓

Yes — the pieces "connect" without a jump.
      `
    },
    {
      id: 'sat-fn6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Piecewise Evaluation** 🔍

$$f(x) = \\begin{cases} x^2, & x < 0 \\\\ 2x + 1, & x \\geq 0 \\end{cases}$$
      `,
      exercise: {
        questions: [
          {
            question: 'What is $f(-3)$?',
            options: ['$-5$', '$9$', '$-9$', '$7$'],
            correctAnswer: 1,
            explanation: 'Since $-3 < 0$, use $x^2$: $f(-3) = (-3)^2 = 9$.'
          },
          {
            question: 'What is $f(0) + f(4)$?',
            options: ['$9$', '$10$', '$16$', '$17$'],
            correctAnswer: 1,
            explanation: '$f(0)$: Since $0 \\geq 0$, use $2x + 1$: $f(0) = 1$. $f(4)$: $2(4) + 1 = 9$. Sum: $1 + 9 = 10$.'
          }
        ]
      }
    },
    {
      id: 'sat-fn6-absval',
      type: 'text' as const,
      content: `
## Absolute Value Equations

The absolute value $|x|$ gives the distance from zero, so it's always $\\geq 0$.

**Key rule:** $|A| = B$ means $A = B$ or $A = -B$ (only when $B \\geq 0$).

**Example 1:** Solve $|x - 3| = 7$.

$$x - 3 = 7 \\quad \\text{or} \\quad x - 3 = -7$$
$$x = 10 \\quad \\text{or} \\quad x = -4$$

---

**Example 2:** Solve $|2x + 1| = 5$.

$$2x + 1 = 5 \\quad \\text{or} \\quad 2x + 1 = -5$$
$$2x = 4 \\implies x = 2 \\quad \\text{or} \\quad 2x = -6 \\implies x = -3$$

---

**Example 3:** Solve $|x - 4| = -2$.

**No solution!** Absolute value is never negative.

---

**Absolute value as piecewise:** $|x| = \\begin{cases} x, & x \\geq 0 \\\\ -x, & x < 0 \\end{cases}$

The graph of $y = |x|$ is a V-shape with vertex at the origin.
      `
    },
    {
      id: 'sat-fn6-input',
      type: 'input-boxes' as const,
      content: `
**Solve the Absolute Value Equations** 🧮

1) Solve $|x - 5| = 3$. What is the **larger** solution?
2) Solve $|2x + 4| = 10$. What is the **smaller** solution?
3) Solve $|x + 1| = 0$. What is $x$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '-7', '-1'],
        hint1: '$x - 5 = 3$ or $x - 5 = -3$. Find both and pick the larger.',
        hint2: '$2x + 4 = 10$ or $2x + 4 = -10$. Solve both.',
        hint3: '$|x + 1| = 0$ means $x + 1 = 0$ (only one case).',
        explanation: '$x = 8$ or $x = 2$, larger is 8. $2x = 6$ or $2x = -14$, so $x = 3$ or $x = -7$, smaller is $-7$. $|x+1| = 0 \\implies x = -1$.'
      }
    },
    {
      id: 'sat-fn6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Piecewise & Absolute Value** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$|x - 2| = 6$ has how many solutions?',
            options: ['0', '1', '2', 'Infinitely many']
          },
          {
            label: '$|x + 3| = -1$ has how many solutions?',
            options: ['0', '1', '2', 'Infinitely many']
          },
          {
            label: 'The vertex of $y = |x - 4| + 2$ is at',
            options: ['$(4, 2)$', '$(-4, 2)$', '$(4, -2)$', '$(2, 4)$']
          }
        ],
        correctAnswers: ['2', '0', '$(4, 2)$'],
        hint1: 'Two cases: $x - 2 = 6$ or $x - 2 = -6$.',
        hint2: 'Can absolute value equal a negative number?',
        hint3: '$|x - h| + k$ has vertex at $(h, k)$.',
        explanation: '$|x - 2| = 6$: two solutions ($x = 8, -4$). $|x + 3| = -1$: no solution (absolute value $\\geq 0$). $|x - 4| + 2$ has vertex at $(4, 2)$.'
      }
    },
    {
      id: 'sat-fn6-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $|3x - 6| = 12$, what is the sum of all possible values of $x$?',
            options: ['$4$', '$2$', '$6$', '$8$'],
            correctAnswer: 0,
            explanation: '$3x - 6 = 12 \\implies x = 6$. $3x - 6 = -12 \\implies x = -2$. Sum: $6 + (-2) = 4$.'
          },
          {
            question: 'A piecewise function $f$ is defined as $f(x) = x + 3$ for $x < 2$ and $f(x) = 2x - 1$ for $x \\geq 2$. What is $f(f(1))$?',
            options: ['$5$', '$7$', '$9$', '$6$'],
            correctAnswer: 1,
            explanation: '$f(1)$: Since $1 < 2$, $f(1) = 1 + 3 = 4$. $f(4)$: Since $4 \\geq 2$, $f(4) = 2(4) - 1 = 7$.'
          }
        ]
      }
    }
  ]
};
