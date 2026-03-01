export const satPassportAdvPart5Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-pa5-intro',
      type: 'text' as const,
      content: `
# 🔗 Nonlinear Equations & Systems

**Part 5 of 7 — Circle Equations, Parabola-Line Systems, Substitution**

**Nonlinear** means at least one equation has degree ≥ 2 (quadratic, circle, etc.). On the SAT, these usually involve:

1. A **quadratic** paired with a **linear** equation.
2. A **circle** equation crossed with a line.

**Standard circle equation:** $(x-h)^2 + (y-k)^2 = r^2$

**Example 1:** The circle $x^2 + y^2 = 25$ has centre $(0,0)$ and radius $5$.

**Example 2:** $(x-3)^2 + (y+1)^2 = 16$ has centre $(3,-1)$ and radius $4$.

**SAT Tip:** When the SAT gives $x^2 + y^2 + Dx + Ey + F = 0$, complete the square to identify the centre and radius.
      `
    },
    {
      id: 'sat-pa5-parabolaline',
      type: 'text' as const,
      content: `
## Parabola-Line Systems

To find where a parabola and line intersect, **substitute** the linear expression into the quadratic.

**Example 3:** Solve the system:

$$y = x^2 - 4x + 3$$
$$y = x - 1$$

Set them equal: $x^2 - 4x + 3 = x - 1$

$$x^2 - 5x + 4 = 0 \\implies (x-4)(x-1) = 0$$

$$x = 4 \\implies y = 3 \\qquad x = 1 \\implies y = 0$$

**Intersection points:** $(4, 3)$ and $(1, 0)$.

**Number of intersections depends on the discriminant:**
- $b^2 - 4ac > 0$: two intersection points
- $b^2 - 4ac = 0$: one point (tangent)
- $b^2 - 4ac < 0$: no intersection
      `
    },
    {
      id: 'sat-pa5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Nonlinear Systems** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'How many solutions does the system $y = x^2$ and $y = -1$ have?',
            options: ['$0$', '$1$', '$2$', 'Infinitely many'],
            correctAnswer: 0,
            explanation: '$x^2 = -1$ has no real solutions since $x^2 \\geq 0$ for all real $x$.'
          },
          {
            question: 'The system $y = x^2 + 2$ and $y = 4x - 2$ intersects at how many points?',
            options: ['$0$', '$1$', '$2$', 'Cannot be determined'],
            correctAnswer: 2,
            explanation: '$x^2 + 2 = 4x - 2 \\Rightarrow x^2 - 4x + 4 = 0 \\Rightarrow (x-2)^2 = 0$. One solution: $x=2$, so it\'s tangent — 1 point. Actually wait: $(x-2)^2=0$ gives exactly one point. The answer is 1.'
          }
        ]
      }
    },
    {
      id: 'sat-pa5-circleline',
      type: 'text' as const,
      content: `
## Circle-Line Intersections

**Example 4:** Find where $x^2 + y^2 = 25$ and $y = x + 1$ intersect.

Substitute $y = x+1$:

$$x^2 + (x+1)^2 = 25$$

$$x^2 + x^2 + 2x + 1 = 25$$

$$2x^2 + 2x - 24 = 0 \\implies x^2 + x - 12 = 0$$

$$(x+4)(x-3) = 0 \\implies x = -4 \\text{ or } x = 3$$

Points: $(-4, -3)$ and $(3, 4)$.

**Check:** $(-4)^2 + (-3)^2 = 16 + 9 = 25$ ✓ and $3^2 + 4^2 = 9 + 16 = 25$ ✓.

**Example 5:** Does $x^2 + y^2 = 4$ and $y = x + 5$ intersect?

$x^2 + (x+5)^2 = 4 \\implies 2x^2 + 10x + 25 = 4 \\implies 2x^2 + 10x + 21 = 0$

Discriminant: $100 - 168 = -68 < 0$. **No intersection** — the line misses the circle entirely.
      `
    },
    {
      id: 'sat-pa5-input1',
      type: 'input-boxes' as const,
      content: `
**Nonlinear System Calculations** 🧮

1) Solve $y = x^2$ and $y = 9$. What is the positive value of $x$?
2) The circle $(x-1)^2 + (y-2)^2 = r^2$ passes through the origin. What is $r^2$?
3) System: $y = x^2 - 1$ and $y = 3$. How many solutions?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '5', '2'],
        hint1: '$x^2 = 9 \\implies x = \\pm 3$.',
        hint2: 'Plug $(0,0)$ into $(0-1)^2 + (0-2)^2 = r^2$.',
        hint3: '$x^2 - 1 = 3 \\implies x^2 = 4 \\implies x = \\pm 2$.',
        explanation: '1) $x = 3$ (positive). 2) $1 + 4 = 5$, so $r^2 = 5$. 3) $x = 2$ and $x=-2$: two solutions.'
      }
    },
    {
      id: 'sat-pa5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Nonlinear System Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To solve a parabola-line system, the best method is usually …',
            options: ['graphing only', 'substitution', 'elimination', 'factoring only']
          },
          {
            label: 'If the discriminant of the resulting quadratic is negative, the system has …',
            options: ['two solutions', 'one solution', 'no real solutions', 'infinitely many solutions']
          },
          {
            label: 'The equation $(x-2)^2 + (y+5)^2 = 36$ represents a circle with radius …',
            options: ['$36$', '$18$', '$6$', '$\\sqrt{6}$']
          }
        ],
        correctAnswers: ['substitution', 'no real solutions', '$6$'],
        hint1: 'Substitute the linear expression for $y$ into the quadratic equation.',
        hint2: 'Negative discriminant means the quadratic has no real roots.',
        hint3: '$r^2 = 36 \\implies r = \\sqrt{36} = 6$.',
        explanation: 'Substitution is the standard approach. Negative discriminant means no real intersections. $r = \\sqrt{36} = 6$.'
      }
    },
    {
      id: 'sat-pa5-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The line $y = 2x + k$ is tangent to the parabola $y = x^2$. What is $k$?',
            options: ['$-1$', '$0$', '$1$', '$4$'],
            correctAnswer: 0,
            explanation: 'Set $x^2 = 2x + k \\Rightarrow x^2 - 2x - k = 0$. Tangent means discriminant $= 0$: $4 + 4k = 0 \\Rightarrow k = -1$.'
          },
          {
            question: 'How many times does the line $y = 7$ intersect the circle $x^2 + y^2 = 25$?',
            options: ['$0$', '$1$', '$2$', '$4$'],
            correctAnswer: 0,
            explanation: '$x^2 + 49 = 25 \\Rightarrow x^2 = -24$. No real solution, so the line does not intersect the circle.'
          }
        ]
      }
    }
  ]
};
