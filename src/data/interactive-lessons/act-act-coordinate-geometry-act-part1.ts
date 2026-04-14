export const actCoordGeomPart1Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-cg1-intro',
      type: 'text' as const,
      content: `
# 📍 Coordinate Plane Basics

**Part 1 of 7 — Plotting, Quadrants, Distance & Midpoint**

The coordinate plane is a two-dimensional surface formed by the intersection of a horizontal number line (the **x-axis**) and a vertical number line (the **y-axis**). Every point is described by an ordered pair $(x, y)$.

| Quadrant | Signs | Example |
|----------|-------|---------|
| I   | $(+, +)$ | $(3, 5)$ |
| II  | $(-, +)$ | $(-4, 2)$ |
| III | $(-, -)$ | $(-1, -6)$ |
| IV  | $(+, -)$ | $(7, -3)$ |

**Key facts:**
- Points on the **x-axis** have $y = 0$.
- Points on the **y-axis** have $x = 0$.
- The **origin** is $(0, 0)$.
      `
    },
    {
      id: 'act-cg1-distance',
      type: 'text' as const,
      content: `
## The Distance Formula

The distance between two points $(x_1, y_1)$ and $(x_2, y_2)$ is:

$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

This comes directly from the **Pythagorean theorem** applied to the horizontal and vertical legs.

**Example 1:** Find the distance between $(1, 2)$ and $(4, 6)$.

$$d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

**Example 2:** Find the distance between $(-3, 1)$ and $(5, -5)$.

$$d = \\sqrt{(5-(-3))^2 + (-5-1)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$$

**ACT Tip:** When answer choices are integers, check whether the sum under the radical is a perfect square — it usually is on the ACT.
      `
    },
    {
      id: 'act-cg1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Distance Formula Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the distance between $(0, 0)$ and $(6, 8)$?',
            options: ['$8$', '$10$', '$14$', '$\\sqrt{48}$'],
            correctAnswer: 1,
            explanation: '$d = \\sqrt{36 + 64} = \\sqrt{100} = 10$.'
          },
          {
            question: 'Find the distance between $(2, -1)$ and $(-1, 3)$.',
            options: ['$7$', '$\\sqrt{7}$', '$5$', '$25$'],
            correctAnswer: 2,
            explanation: '$d = \\sqrt{(-3)^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.'
          }
        ]
      }
    },
    {
      id: 'act-cg1-midpoint',
      type: 'text' as const,
      content: `
## The Midpoint Formula

The midpoint of the segment joining $(x_1, y_1)$ and $(x_2, y_2)$ is:

$$M = \\left(\\frac{x_1 + x_2}{2},\\; \\frac{y_1 + y_2}{2}\\right)$$

Simply **average** the $x$-coordinates and **average** the $y$-coordinates.

**Example 3:** Find the midpoint of $(2, 8)$ and $(6, 4)$.

$$M = \\left(\\frac{2+6}{2},\\; \\frac{8+4}{2}\\right) = (4, 6)$$

**Example 4:** The midpoint of $(x, 3)$ and $(7, 11)$ is $(5, 7)$. Find $x$.

$$\\frac{x + 7}{2} = 5 \\implies x + 7 = 10 \\implies x = 3$$

**ACT Tip:** The ACT sometimes asks you to find an endpoint given the midpoint and the other endpoint. Use the midpoint formula in reverse: $x_1 = 2M_x - x_2$.
      `
    },
    {
      id: 'act-cg1-input1',
      type: 'input-boxes' as const,
      content: `
**Distance & Midpoint Calculations** 🧮

1) Distance between $(3, 0)$ and $(0, 4)$?

2) Midpoint of $(1, 5)$ and $(9, 1)$: what is the x-coordinate?

3) Midpoint of $(-2, 6)$ and $(4, -2)$: what is the y-coordinate?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '5', '2'],
        hint1: '$d = \\sqrt{9 + 16}$.',
        hint2: '$\\frac{1 + 9}{2}$.',
        hint3: '$\\frac{6 + (-2)}{2}$.',
        explanation: '1) $\\sqrt{9+16} = 5$. 2) $\\frac{10}{2} = 5$. 3) $\\frac{4}{2} = 2$.'
      }
    },
    {
      id: 'act-cg1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quadrant & Formula ID** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The point $(-5, 3)$ is in Quadrant …',
            options: ['I', 'II', 'III', 'IV']
          },
          {
            label: 'The distance formula is derived from …',
            options: ['The slope formula', 'The Pythagorean theorem', 'The quadratic formula', 'The midpoint formula']
          },
          {
            label: 'The midpoint formula returns …',
            options: ['A distance', 'A slope', 'A point', 'An equation']
          }
        ],
        correctAnswers: ['II', 'The Pythagorean theorem', 'A point'],
        hint1: 'Negative $x$, positive $y$.',
        hint2: 'Think of the horizontal and vertical legs of a right triangle.',
        hint3: 'The midpoint is a location, not a number.',
        explanation: '$(-5,3)$ has negative $x$ and positive $y$ → Quadrant II. The distance formula comes from the Pythagorean theorem. The midpoint is a point (an ordered pair).'
      }
    },
    {
      id: 'act-cg1-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Point $A$ is at $(1, 2)$ and point $B$ is at $(7, 10)$. What is the midpoint of $\\overline{AB}$?',
            options: ['$(3, 5)$', '$(4, 6)$', '$(8, 12)$', '$(6, 8)$'],
            correctAnswer: 1,
            explanation: '$M = \\left(\\frac{1+7}{2}, \\frac{2+10}{2}\\right) = (4, 6)$.'
          },
          {
            question: 'The endpoints of a diameter of a circle are $(2, -3)$ and $(8, 5)$. What is the length of the radius?',
            options: ['$5$', '$10$', '$\\sqrt{10}$', '$2\\sqrt{10}$'],
            correctAnswer: 0,
            explanation: 'Diameter $= \\sqrt{(8-2)^2 + (5-(-3))^2} = \\sqrt{36+64} = 10$. Radius $= 10/2 = 5$.'
          }
        ]
      }
    }
  ]
};
