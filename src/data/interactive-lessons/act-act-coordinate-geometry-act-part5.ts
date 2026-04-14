export const actCoordGeomPart5Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-cg5-intro',
      type: 'text' as const,
      content: `
# 🔵 Conic Sections Overview

**Part 5 of 7 — Parabola Vertex Form, Ellipses & Hyperbolas for the ACT**

A **conic section** is a curve obtained by slicing a cone with a plane. The four types are:

| Conic | Standard Form | Shape |
|-------|--------------|-------|
| Circle | $(x-h)^2 + (y-k)^2 = r^2$ | Round |
| Parabola | $y = a(x-h)^2 + k$ | U-shaped |
| Ellipse | $\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$ | Oval |
| Hyperbola | $\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1$ | Two branches |

On the ACT, **parabolas** appear most often. Ellipses and hyperbolas are rare but worth recognizing.
      `
    },
    {
      id: 'act-cg5-parabola',
      type: 'text' as const,
      content: `
## Parabolas in Vertex Form

The vertex form of a parabola is:

$$y = a(x - h)^2 + k$$

- **Vertex:** $(h, k)$ — the highest or lowest point.
- If $a > 0$: opens **upward** (vertex is a minimum).
- If $a < 0$: opens **downward** (vertex is a maximum).
- $|a|$ controls the **width**: larger $|a|$ = narrower parabola.

**Example 1:** $y = 2(x - 3)^2 + 1$

- Vertex: $(3, 1)$
- Opens up (since $a = 2 > 0$)
- Narrower than $y = x^2$ (since $|a| = 2 > 1$)

**Example 2:** $y = -(x + 4)^2 + 9$

- Vertex: $(-4, 9)$
- Opens down (since $a = -1 < 0$)
- Maximum value is $y = 9$

**Axis of symmetry:** $x = h$ (vertical line through the vertex).

**ACT Tip:** The vertex tells you the max/min value immediately — no calculus needed!
      `
    },
    {
      id: 'act-cg5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Parabola Properties** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the vertex of $y = 3(x + 2)^2 - 5$?',
            options: ['$(2, -5)$', '$(-2, -5)$', '$(3, -5)$', '$(-2, 5)$'],
            correctAnswer: 1,
            explanation: '$(x + 2) = (x - (-2))$, so $h = -2$. $k = -5$. Vertex $= (-2, -5)$.'
          },
          {
            question: 'The parabola $y = -4(x - 1)^2 + 7$ opens in which direction?',
            options: ['Upward', 'Downward', 'Left', 'Right'],
            correctAnswer: 1,
            explanation: '$a = -4 < 0$, so the parabola opens downward.'
          }
        ]
      }
    },
    {
      id: 'act-cg5-ellipse',
      type: 'text' as const,
      content: `
## Ellipses & Hyperbolas (ACT Basics)

**Ellipse:** $\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$

- Center: $(h, k)$
- The **larger denominator** determines the major axis direction.
- If $a^2 > b^2$: horizontal major axis (wider).
- If $b^2 > a^2$: vertical major axis (taller).

**Example 3:** $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$

- Center: $(0, 0)$, $a = 5$, $b = 3$.
- Horizontal major axis, stretches $5$ units left/right and $3$ units up/down.

**Hyperbola:** $\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1$

- Note the **minus sign** — this distinguishes it from an ellipse.
- Opens **left and right** when the $x$-term is positive.
- Opens **up and down** when the $y$-term is positive.

**ACT Tip:** On the ACT, you mainly need to **identify** the conic type and find the center/vertex. Deep analysis is rare.
      `
    },
    {
      id: 'act-cg5-input1',
      type: 'input-boxes' as const,
      content: `
**Conic Section Identification** 🧮

1) Vertex x-coordinate of $y = -(x - 6)^2 + 2$?

2) Vertex y-coordinate of $y = -(x - 6)^2 + 2$?

3) For $\\frac{x^2}{16} + \\frac{y^2}{4} = 1$, what is the value of $a$ (the larger semi-axis)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '2', '4'],
        hint1: 'In $y = a(x - h)^2 + k$, $h = 6$.',
        hint2: '$k = 2$.',
        hint3: '$a^2 = 16 \\implies a = 4$.',
        explanation: '1) $h = 6$. 2) $k = 2$. 3) $a = \\sqrt{16} = 4$, the semi-major axis length.'
      }
    },
    {
      id: 'act-cg5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Conic Type Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$x^2 + y^2 = 36$ is a …',
            options: ['Circle', 'Parabola', 'Ellipse', 'Hyperbola']
          },
          {
            label: '$\\frac{x^2}{9} - \\frac{y^2}{4} = 1$ is a …',
            options: ['Circle', 'Parabola', 'Ellipse', 'Hyperbola']
          },
          {
            label: '$y = 5(x-1)^2 + 3$ is a …',
            options: ['Circle', 'Parabola', 'Ellipse', 'Hyperbola']
          }
        ],
        correctAnswers: ['Circle', 'Hyperbola', 'Parabola'],
        hint1: 'Both variables squared with equal coefficients and a plus sign.',
        hint2: 'A minus sign between the squared terms.',
        hint3: 'Only one variable is squared.',
        explanation: 'Equal squared terms with + → circle. Minus between squared terms → hyperbola. One squared variable → parabola.'
      }
    },
    {
      id: 'act-cg5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A parabola has vertex $(2, -3)$ and passes through $(4, 5)$. What is the value of $a$ in $y = a(x-2)^2 - 3$?',
            options: ['$1$', '$2$', '$4$', '$-2$'],
            correctAnswer: 1,
            explanation: 'Plug in $(4, 5)$: $5 = a(4-2)^2 - 3 = 4a - 3$. So $4a = 8$, $a = 2$.'
          },
          {
            question: 'The maximum value of $y = -(x + 1)^2 + 10$ is:',
            options: ['$-1$', '$1$', '$10$', '$-10$'],
            correctAnswer: 2,
            explanation: 'Since $a < 0$, the parabola opens down and the vertex gives the maximum. The vertex is $(-1, 10)$, so the max value is $y = 10$.'
          }
        ]
      }
    }
  ]
};
