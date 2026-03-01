export const satQuadraticsPart5Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q5-intro',
      type: 'text' as const,
      content: `
# 🔗 Systems with Quadratics

**Part 5 of 7 — Line-Parabola Intersections**

The SAT frequently asks about systems where one equation is linear and the other is quadratic:
$$y = ax^2 + bx + c \\quad \\text{and} \\quad y = mx + d$$

To solve: **set them equal** and simplify into a single quadratic:
$$ax^2 + bx + c = mx + d \\Rightarrow ax^2 + (b - m)x + (c - d) = 0$$

The number of intersection points depends on the discriminant of this resulting quadratic:

| $\\Delta$ of the new equation | Intersections |
|-------------------------------|--------------|
| $\\Delta > 0$ | **2** intersection points |
| $\\Delta = 0$ | **1** point (line is tangent) |
| $\\Delta < 0$ | **0** points (no intersection) |

**SAT Insight:** "The line is tangent to the parabola" always means $\\Delta = 0$.
      `
    },
    {
      id: 'sat-q5-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The system $y = x^2$ and $y = 4$ has how many solutions?',
            options: [
              '$0$',
              '$1$',
              '$2$',
              '$4$'
            ],
            correctAnswer: 2,
            explanation: 'Set equal: $x^2 = 4$, so $x = \\pm 2$. Two solutions: $(2, 4)$ and $(-2, 4)$. The horizontal line $y = 4$ cuts the parabola at two points.'
          },
          {
            question: 'How many times does $y = x + 3$ intersect $y = x^2 + 2x + 3$?',
            options: [
              '$0$',
              '$1$',
              '$2$',
              'Infinitely many'
            ],
            correctAnswer: 2,
            explanation: 'Set equal: $x + 3 = x^2 + 2x + 3$. Simplify: $0 = x^2 + x = x(x+1)$. So $x = 0$ or $x = -1$. Two intersection points.'
          }
        ]
      }
    },
    {
      id: 'sat-q5-substitution',
      type: 'text' as const,
      content: `
**Substitution Method — Worked Example**

Find the intersection of $y = x^2 - 3x + 2$ and $y = x - 1$.

**Step 1:** Set equal: $x^2 - 3x + 2 = x - 1$

**Step 2:** Move everything to one side: $x^2 - 4x + 3 = 0$

**Step 3:** Factor: $(x-1)(x-3) = 0 \\Rightarrow x = 1$ or $x = 3$

**Step 4:** Find y-values using the simpler equation ($y = x - 1$):
- $x = 1$: $y = 0$ → $(1, 0)$
- $x = 3$: $y = 2$ → $(3, 2)$

**Step 5:** Verify in the quadratic:
- $(1, 0)$: $1 - 3 + 2 = 0$ ✓
- $(3, 2)$: $9 - 9 + 2 = 2$ ✓

---

**SAT Tip:** Always plug back into the **simpler** equation to find y. It's faster and less error-prone.
      `
    },
    {
      id: 'sat-q5-practice',
      type: 'input-boxes' as const,
      content: `
**Find all intersection points.** 🧮

**System:** $y = x^2$ and $y = 2x + 3$

1) The negative x-solution is $x =$ ?

2) The positive x-solution is $x =$ ?

3) The y-value at the positive solution is $y =$ ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-1', '3', '9'],
        hint1: 'Set $x^2 = 2x + 3$, so $x^2 - 2x - 3 = 0$. Factor: $(x-3)(x+1) = 0$.',
        hint2: 'The two x-values from the factored equation are $x = 3$ and $x = -1$.',
        hint3: 'Use $y = x^2$: when $x = 3$, $y = 9$. (Or use $y = 2(3)+3 = 9$.)',
        explanation: '$x^2 = 2x+3 \\Rightarrow x^2-2x-3=0 \\Rightarrow (x-3)(x+1)=0$. Solutions: $(-1, 1)$ and $(3, 9)$.'
      }
    },
    {
      id: 'sat-q5-tangent',
      type: 'text' as const,
      content: `
**Tangent Lines — When the Line Just Touches**

A line is **tangent** to a parabola when $\\Delta = 0$ (exactly one intersection).

**Example:** For what value of $k$ is $y = 2x + k$ tangent to $y = x^2$?

Set equal: $x^2 = 2x + k \\Rightarrow x^2 - 2x - k = 0$

For tangency: $\\Delta = 0$
$$(-2)^2 - 4(1)(-k) = 0 \\Rightarrow 4 + 4k = 0 \\Rightarrow k = -1$$

The tangent line is $y = 2x - 1$, touching the parabola at $x = 1$, $y = 1$.

---

**Two-Quadratic Systems:**

Sometimes both equations are quadratic: $y = x^2 + 2$ and $y = 2x^2 - x$

Set equal: $x^2 + 2 = 2x^2 - x \\Rightarrow 0 = x^2 - x - 2 = (x-2)(x+1)$

Same process — subtract to get a simpler equation, then solve.
      `
    },
    {
      id: 'sat-q5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each system to its number of intersections.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$y = x^2$ and $y = -1$',
            options: ['0 intersections', '1 intersection', '2 intersections']
          },
          {
            label: '$y = x^2$ and $y = 0$',
            options: ['0 intersections', '1 intersection', '2 intersections']
          },
          {
            label: '$y = x^2$ and $y = 4$',
            options: ['0 intersections', '1 intersection', '2 intersections']
          }
        ],
        correctAnswers: ['0 intersections', '1 intersection', '2 intersections'],
        hint1: '$x^2 = -1$ has no real solution (a square can\'t be negative).',
        hint2: '$x^2 = 0$ has exactly one solution: $x = 0$.',
        hint3: '$x^2 = 4$ gives $x = 2$ and $x = -2$ — two solutions.',
        explanation: '$y=-1$ is below the vertex of $y=x^2$, so 0 intersections. $y=0$ touches at the vertex, so 1. $y=4$ cuts at two points.'
      }
    },
    {
      id: 'sat-q5-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'For what value of $k$ is the line $y = 4x + k$ tangent to $y = x^2 + 2$?',
            options: [
              '$k = -2$',
              '$k = 2$',
              '$k = -4$',
              '$k = 6$'
            ],
            correctAnswer: 0,
            explanation: 'Set equal: $x^2 + 2 = 4x + k \\Rightarrow x^2 - 4x + (2-k) = 0$. Tangent: $\\Delta = 0 \\Rightarrow 16 - 4(2-k) = 0 \\Rightarrow 16 - 8 + 4k = 0 \\Rightarrow 4k = -8 \\Rightarrow k = -2$.'
          },
          {
            question: 'The system $y = x^2 - 2x$ and $y = -x + 2$ has solutions at which points?',
            options: [
              '$(1, 1)$ and $(2, 0)$',
              '$(-1, 3)$ and $(2, 0)$',
              '$(1, 1)$ and $(-2, 4)$',
              '$(-1, 3)$ and $(1, 1)$'
            ],
            correctAnswer: 1,
            explanation: 'Set equal: $x^2 - 2x = -x + 2 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1)=0$. So $x = 2$ or $x = -1$. Using $y=-x+2$: $x=2 \\Rightarrow y=0$, $x=-1 \\Rightarrow y=3$. Points: $(-1, 3)$ and $(2, 0)$.'
          }
        ]
      }
    }
  ]
}
