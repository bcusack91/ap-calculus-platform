export const satQuadraticsPart4Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q4-intro',
      type: 'text' as const,
      content: `
# 📈 Graphing Parabolas

**Part 4 of 7 — Understanding the Shape**

Every quadratic $y = ax^2 + bx + c$ graphs a **parabola**. The SAT tests whether you can read and interpret the graph, not just draw one.

**Key features at a glance:**

| Feature | How to Find | What It Tells You |
|---------|------------|------------------|
| **Direction** | Sign of $a$ | $a > 0$: opens up (smile); $a < 0$: opens down (frown) |
| **Vertex** | $\\left(-\\frac{b}{2a},\\ f\\left(-\\frac{b}{2a}\\right)\\right)$ | Min (if $a>0$) or Max (if $a<0$) |
| **Axis of symmetry** | $x = -\\frac{b}{2a}$ | Mirror line through vertex |
| **y-intercept** | Set $x = 0$: $y = c$ | Where parabola crosses y-axis |
| **x-intercepts** | Solve $ax^2+bx+c=0$ | Where parabola crosses x-axis (if real roots exist) |

**SAT Insight:** The number of x-intercepts equals the number of real roots, which is determined by the discriminant $\\Delta$.
      `
    },
    {
      id: 'sat-q4-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A parabola has equation $y = -x^2 + 4x - 3$. Which direction does it open, and what is the y-intercept?',
            options: [
              'Opens up, y-intercept $-3$',
              'Opens down, y-intercept $-3$',
              'Opens down, y-intercept $3$',
              'Opens up, y-intercept $4$'
            ],
            correctAnswer: 1,
            explanation: '$a = -1 < 0$, so it opens **down**. The y-intercept is $c = -3$ (set $x = 0$: $y = 0 + 0 - 3 = -3$).'
          },
          {
            question: 'The graph of $y = 2x^2 - 8x + 6$ crosses the x-axis at how many points?',
            options: [
              '$0$',
              '$1$',
              '$2$',
              'Cannot determine'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta = (-8)^2 - 4(2)(6) = 64 - 48 = 16 > 0$. Since the discriminant is positive, there are **2** x-intercepts. (They are $x = 1$ and $x = 3$.)'
          }
        ]
      }
    },
    {
      id: 'sat-q4-symmetry',
      type: 'text' as const,
      content: `
**Axis of Symmetry and Symmetric Points**

A parabola is always symmetric about the vertical line $x = -\\frac{b}{2a}$.

This means: if $(1, 5)$ is on the parabola and the axis of symmetry is $x = 3$, then $(5, 5)$ is also on the parabola (same distance from axis, same y-value).

**Finding x-intercepts from the axis:**

If you know one root and the axis, you can find the other:

**Example:** One root of $y = x^2 - 6x + 5$ is $x = 1$. Axis: $x = 3$. The other root is at $x = 3 + (3-1) = 5$.

---

**Worked Example — Full Analysis:**

Graph $y = x^2 - 4x - 5$:

| Feature | Calculation | Result |
|---------|------------|--------|
| Direction | $a = 1 > 0$ | Opens up |
| Axis | $x = -(-4)/(2 \\cdot 1) = 2$ | $x = 2$ |
| Vertex | $y = 4 - 8 - 5 = -9$ | $(2, -9)$ |
| y-intercept | $c = -5$ | $(0, -5)$ |
| x-intercepts | $(x-5)(x+1)=0$ | $(-1, 0)$ and $(5, 0)$ |

**SAT Tip:** The x-intercepts $-1$ and $5$ are symmetric about $x = 2$. Check: $(-1+5)/2 = 2$ ✓
      `
    },
    {
      id: 'sat-q4-practice',
      type: 'input-boxes' as const,
      content: `
**Analyze the parabola $y = x^2 + 2x - 8$.** 🧮

1) The axis of symmetry is $x =$ ?

2) The y-coordinate of the vertex is ?

3) The positive x-intercept is $x =$ ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-1', '-9', '2'],
        hint1: 'Axis of symmetry: $x = -b/(2a) = -2/(2 \\cdot 1)$.',
        hint2: 'Plug $x = -1$ into the equation: $(-1)^2 + 2(-1) - 8$.',
        hint3: 'Factor: $x^2 + 2x - 8 = (x+4)(x-2) = 0$.',
        explanation: '1) $x = -2/2 = -1$. 2) $y = 1 - 2 - 8 = -9$. 3) $(x+4)(x-2)=0$: roots are $x=-4$ and $x=2$. Positive root: $2$.'
      }
    },
    {
      id: 'sat-q4-transformations',
      type: 'text' as const,
      content: `
**Graph Transformations — Reading Changes from Equations**

Starting from the parent function $y = x^2$:

| Transformation | Equation | Effect on Graph |
|---------------|----------|----------------|
| Vertical shift up $k$ | $y = x^2 + k$ | Moves graph **up** $k$ units |
| Vertical shift down $k$ | $y = x^2 - k$ | Moves graph **down** $k$ units |
| Horizontal shift right $h$ | $y = (x-h)^2$ | Moves graph **right** $h$ units |
| Horizontal shift left $h$ | $y = (x+h)^2$ | Moves graph **left** $h$ units |
| Vertical stretch by $a$ | $y = ax^2,\\ a > 1$ | **Narrower** parabola |
| Vertical compress by $a$ | $y = ax^2,\\ 0 < a < 1$ | **Wider** parabola |
| Reflection | $y = -x^2$ | Flips **upside down** |

**SAT Trap:** Horizontal shifts are *opposite* to the sign: $(x - 3)^2$ shifts **right**, $(x + 3)^2$ shifts **left**.
      `
    },
    {
      id: 'sat-q4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each equation to its graph description.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$y = (x-1)^2 - 4$',
            options: ['Vertex at $(1, -4)$, opens up', 'Vertex at $(-1, -4)$, opens up', 'Vertex at $(1, 4)$, opens down', 'Vertex at $(-1, 4)$, opens down']
          },
          {
            label: '$y = -2(x+3)^2 + 5$',
            options: ['Vertex at $(-3, 5)$, opens down', 'Vertex at $(3, 5)$, opens up', 'Vertex at $(-3, -5)$, opens up', 'Vertex at $(3, -5)$, opens down']
          },
          {
            label: '$y = \\frac{1}{2}x^2 + 3$',
            options: ['Vertex at $(0, 3)$, wide, opens up', 'Vertex at $(0, 3)$, narrow, opens up', 'Vertex at $(3, 0)$, wide, opens up', 'Vertex at $(0, -3)$, wide, opens down']
          }
        ],
        correctAnswers: ['Vertex at $(1, -4)$, opens up', 'Vertex at $(-3, 5)$, opens down', 'Vertex at $(0, 3)$, wide, opens up'],
        hint1: '$(x-1)^2$ means $h=1$, and $-4$ means $k=-4$. $a=1>0$ so opens up.',
        hint2: '$(x+3)$ means $h=-3$. $a=-2<0$ so opens down.',
        hint3: '$a=1/2$ is between 0 and 1, so the parabola is wider than $y=x^2$. No horizontal shift, vertical shift up 3.',
        explanation: '$(x-1)^2-4$: vertex $(1,-4)$, opens up. $-2(x+3)^2+5$: vertex $(-3,5)$, opens down. $\\frac{1}{2}x^2+3$: vertex $(0,3)$, wider, opens up.'
      }
    },
    {
      id: 'sat-q4-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If the graph of $y = ax^2 + bx + c$ has vertex $(3, -2)$ and passes through $(0, 7)$, what is the value of $a$?',
            options: [
              '$1$',
              '$-1$',
              '$2$',
              '$-2$'
            ],
            correctAnswer: 0,
            explanation: 'Using vertex form: $y = a(x-3)^2 - 2$. Plug in $(0,7)$: $7 = a(0-3)^2 - 2 = 9a - 2$. So $9a = 9$, meaning $a = 1$.'
          },
          {
            question: 'A parabola crosses the x-axis at $x = -2$ and $x = 6$. What is the x-coordinate of the vertex?',
            options: [
              '$4$',
              '$-4$',
              '$2$',
              '$8$'
            ],
            correctAnswer: 2,
            explanation: 'The vertex lies on the axis of symmetry, which is the midpoint of the roots: $x = \\frac{-2+6}{2} = 2$.'
          }
        ]
      }
    }
  ]
}
