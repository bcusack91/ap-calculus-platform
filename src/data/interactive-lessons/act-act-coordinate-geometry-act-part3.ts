export const actCoordGeomPart3Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-cg3-intro',
      type: 'text' as const,
      content: `
# 📊 Graphing Lines & Inequalities

**Part 3 of 7 — Intercepts, Graphing Methods, Shading Regions**

There are three standard ways to graph a line:

| Method | What You Need |
|--------|---------------|
| Slope-intercept | Slope $m$ and y-intercept $b$ |
| Intercept method | x-intercept and y-intercept |
| Table of values | Pick $x$-values, compute $y$ |

**Finding intercepts:**
- **x-intercept:** Set $y = 0$ and solve for $x$.
- **y-intercept:** Set $x = 0$ and solve for $y$.

**Example 1:** $3x + 2y = 12$

- x-intercept: $3x = 12 \\implies x = 4$ → point $(4, 0)$
- y-intercept: $2y = 12 \\implies y = 6$ → point $(0, 6)$
      `
    },
    {
      id: 'act-cg3-graphing',
      type: 'text' as const,
      content: `
## Graphing with Slope-Intercept Form

Given $y = mx + b$:

1. Plot the y-intercept $(0, b)$.
2. From that point, use the slope $m = \\frac{\\text{rise}}{\\text{run}}$ to find the next point.
3. Draw the line through both points.

**Example 2:** Graph $y = -\\frac{2}{3}x + 4$.

- Start at $(0, 4)$.
- Slope $= -\\frac{2}{3}$: go down 2, right 3 → $(3, 2)$.
- Draw a line through $(0, 4)$ and $(3, 2)$.

**Inequalities change two things:**
- $<$ or $>$: **dashed** line (boundary NOT included).
- $\\le$ or $\\ge$: **solid** line (boundary included).
- Shade **above** the line for $y > mx + b$ or $y \\ge mx + b$.
- Shade **below** the line for $y < mx + b$ or $y \\le mx + b$.

**ACT Tip:** To check which side to shade, test the point $(0, 0)$. If it satisfies the inequality, shade the side containing the origin.
      `
    },
    {
      id: 'act-cg3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Intercepts & Graphing** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the x-intercept of $5x - 2y = 20$?',
            options: ['$(0, -10)$', '$(4, 0)$', '$(20, 0)$', '$(0, 4)$'],
            correctAnswer: 1,
            explanation: 'Set $y = 0$: $5x = 20 \\implies x = 4$. The x-intercept is $(4, 0)$.'
          },
          {
            question: 'For $y > 3x - 1$, the boundary line is …',
            options: ['Solid and shade below', 'Dashed and shade above', 'Solid and shade above', 'Dashed and shade below'],
            correctAnswer: 1,
            explanation: 'Strict inequality ($>$) means dashed line, and $y >$ means shade above.'
          }
        ]
      }
    },
    {
      id: 'act-cg3-input1',
      type: 'input-boxes' as const,
      content: `
**Finding Intercepts** 🧮

For each equation, find the requested intercept value.

1) y-intercept of $4x + y = 9$? (just the y-value)

2) x-intercept of $2x - 6y = 18$? (just the x-value)

3) y-intercept of $y = 5x - 15$? (just the y-value)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9', '9', '-15'],
        hint1: 'Set $x = 0$: $y = 9$.',
        hint2: 'Set $y = 0$: $2x = 18$.',
        hint3: 'Set $x = 0$: $y = -15$.',
        explanation: '1) $y = 9$. 2) $x = 9$. 3) $y = -15$. For each, substitute $0$ for the other variable.'
      }
    },
    {
      id: 'act-cg3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Inequality Graphing** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For $y \\le 2x + 3$, the boundary line is …',
            options: ['Dashed', 'Solid', 'Dotted', 'No line']
          },
          {
            label: 'For $y \\le 2x + 3$, you shade …',
            options: ['Above the line', 'Below the line', 'Left of the line', 'Right of the line']
          },
          {
            label: 'To test which side to shade, a convenient point to test is …',
            options: ['$(1, 1)$', '$(0, 0)$', 'The y-intercept', 'Any point on the line']
          }
        ],
        correctAnswers: ['Solid', 'Below the line', '$(0, 0)$'],
        hint1: '$\\le$ includes equality, so the boundary is part of the solution.',
        hint2: '$y \\le$ means $y$ values are less than or equal to the line.',
        hint3: 'The origin is easy to substitute.',
        explanation: '$\\le$ gives a solid line. Shade below because $y$ is less than or equal to the expression. Test $(0, 0)$ for a quick check.'
      }
    },
    {
      id: 'act-cg3-systems',
      type: 'text' as const,
      content: `
## Systems of Inequalities

When two inequalities are graphed together, the **solution region** is where the shading **overlaps**.

**Example 3:** Graph the system:

$$y \\ge x - 1$$
$$y < -2x + 5$$

- First inequality: solid line through $(0, -1)$ with slope $1$; shade above.
- Second inequality: dashed line through $(0, 5)$ with slope $-2$; shade below.
- The solution is the region that satisfies **both** — the overlap area.

**ACT Tip:** On the ACT, they often ask which point is in the solution region. Plug each answer choice into **both** inequalities — the correct answer satisfies both.

| Test point | $y \\ge x - 1$? | $y < -2x + 5$? | In solution? |
|-----------|------------------|-----------------|-------------|
| $(0, 0)$ | $0 \\ge -1$ ✓ | $0 < 5$ ✓ | **Yes** |
| $(3, 0)$ | $0 \\ge 2$ ✗ | — | No |
      `
    },
    {
      id: 'act-cg3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The line $2x + 3y = 12$ passes through which of the following points?',
            options: ['$(3, 2)$', '$(6, 2)$', '$(0, 6)$', '$(2, 3)$'],
            correctAnswer: 0,
            explanation: 'Test $(3, 2)$: $2(3) + 3(2) = 6 + 6 = 12$ ✓.'
          },
          {
            question: 'Which point is in the solution region of $y > x + 1$ AND $y < 5$?',
            options: ['$(0, 0)$', '$(0, 3)$', '$(3, 3)$', '$(0, 6)$'],
            correctAnswer: 1,
            explanation: 'Test $(0, 3)$: $3 > 0 + 1 = 1$ ✓ and $3 < 5$ ✓. Both inequalities satisfied.'
          }
        ]
      }
    }
  ]
};
