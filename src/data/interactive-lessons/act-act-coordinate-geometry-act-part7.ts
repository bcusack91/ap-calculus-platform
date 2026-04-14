export const actCoordGeomPart7Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-cg7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Mixed Practice

**Part 7 of 7 — Formula Cheat Sheet & Mixed ACT Coordinate Geometry Problems**

Here is your complete **cheat sheet** of coordinate geometry formulas for the ACT:

| Formula | Expression |
|---------|-----------|
| Distance | $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ |
| Midpoint | $M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$ |
| Slope | $m = \\frac{y_2-y_1}{x_2-x_1}$ |
| Slope-intercept | $y = mx + b$ |
| Point-slope | $y - y_1 = m(x - x_1)$ |
| Circle | $(x-h)^2 + (y-k)^2 = r^2$ |
| Parabola vertex | $y = a(x-h)^2 + k$ |
| Parallel slopes | $m_1 = m_2$ |
| Perpendicular slopes | $m_1 \\cdot m_2 = -1$ |

**Strategy for ACT Coordinate Geometry:**
1. Identify what formula you need.
2. Label known values clearly.
3. Plug in and simplify.
4. Watch for sign errors (they are the #1 mistake!).
      `
    },
    {
      id: 'act-cg7-review',
      type: 'text' as const,
      content: `
## Quick Review — Key Concepts

**Quadrants:** Signs of $(x, y)$ — I: $(+,+)$, II: $(-,+)$, III: $(-,-)$, IV: $(+,-)$.

**Slope ideas:**
- Horizontal line: $m = 0$, equation $y = c$.
- Vertical line: $m$ undefined, equation $x = c$.
- Parallel $\\implies$ same slope.
- Perpendicular $\\implies$ negative reciprocal slopes.

**Circles:** Complete the square to go from general to standard form. Center and radius come directly from $(x-h)^2 + (y-k)^2 = r^2$.

**Transformations summary:**

| Type | Rule |
|------|------|
| Translate by $\\langle a, b \\rangle$ | $(x+a, y+b)$ |
| Reflect over x-axis | $(x, -y)$ |
| Reflect over y-axis | $(-x, y)$ |
| Rotate $90°$ CCW | $(-y, x)$ |
| Rotate $180°$ | $(-x, -y)$ |
| Dilate by $k$ | $(kx, ky)$ |

**ACT Tip:** You have about 60 seconds per question. Don't derive formulas — memorize them!
      `
    },
    {
      id: 'act-cg7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the distance between $(-1, 4)$ and $(5, -4)$?',
            options: ['$6$', '$8$', '$10$', '$14$'],
            correctAnswer: 2,
            explanation: '$d = \\sqrt{(5-(-1))^2 + (-4-4)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.'
          },
          {
            question: 'A line passes through $(0, -2)$ and $(3, 4)$. What is the equation of this line?',
            options: ['$y = 2x - 2$', '$y = -2x - 2$', '$y = 2x + 2$', '$y = \\frac{1}{2}x - 2$'],
            correctAnswer: 0,
            explanation: '$m = \\frac{4-(-2)}{3-0} = \\frac{6}{3} = 2$. y-intercept is $-2$. So $y = 2x - 2$.'
          }
        ]
      }
    },
    {
      id: 'act-cg7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations** 🧮

1) Slope of the line through $(2, 5)$ and $(8, 17)$?

2) The midpoint of $(0, 0)$ and $(10, 6)$: what is the x-coordinate?

3) A circle has equation $(x-1)^2 + (y+3)^2 = 64$. What is the radius?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '5', '8'],
        hint1: '$m = \\frac{17-5}{8-2} = \\frac{12}{6}$.',
        hint2: '$\\frac{0+10}{2} = 5$.',
        hint3: '$r = \\sqrt{64} = 8$.',
        explanation: '1) $m = 2$. 2) Midpoint x = $5$. 3) $r = 8$. Each uses a core formula directly.'
      }
    },
    {
      id: 'act-cg7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Formula Matching** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find how far apart two points are, use the …',
            options: ['Slope formula', 'Distance formula', 'Midpoint formula', 'Quadratic formula']
          },
          {
            label: 'To find the halfway point between two locations, use the …',
            options: ['Slope formula', 'Distance formula', 'Midpoint formula', 'Point-slope form']
          },
          {
            label: '$y - y_1 = m(x - x_1)$ is called …',
            options: ['Slope-intercept form', 'Standard form', 'Point-slope form', 'Vertex form']
          }
        ],
        correctAnswers: ['Distance formula', 'Midpoint formula', 'Point-slope form'],
        hint1: 'Distance = how far apart.',
        hint2: 'Halfway = midpoint.',
        hint3: 'It uses a specific point $(x_1, y_1)$ and the slope $m$.',
        explanation: 'Distance formula for separation. Midpoint formula for the halfway point. Point-slope form uses a point and slope.'
      }
    },
    {
      id: 'act-cg7-mixed',
      type: 'text' as const,
      content: `
## Mixed ACT-Style Practice

Try these without a calculator — ACT coordinate geometry usually involves clean numbers.

| # | Problem | Answer |
|---|---------|--------|
| 1 | Midpoint of $(-4, 8)$ and $(6, -2)$? | $(1, 3)$ |
| 2 | Slope of line perpendicular to $y = \\frac{5}{2}x + 1$? | $-\\frac{2}{5}$ |
| 3 | Distance from origin to $(5, 12)$? | $13$ |
| 4 | Center of $x^2 + y^2 - 6x + 2y = 0$ after completing the square? | $(3, -1)$ |
| 5 | Reflect $(4, -9)$ over the y-axis? | $(-4, -9)$ |

**ACT Tip:** On test day, write down the formulas you've memorized before starting. This saves time and reduces errors under pressure.
      `
    },
    {
      id: 'act-cg7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions — Final Set** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The endpoints of a line segment are $(-3, 2)$ and $(5, 6)$. The segment is translated $4$ units to the right and $3$ units down. What is the midpoint of the translated segment?',
            options: ['$(1, 4)$', '$(5, 1)$', '$(5, 4)$', '$(1, 1)$'],
            correctAnswer: 1,
            explanation: 'Original midpoint: $(\\frac{-3+5}{2}, \\frac{2+6}{2}) = (1, 4)$. Translate: $(1+4, 4-3) = (5, 1)$. (Translation preserves midpoint relationships.)'
          },
          {
            question: 'A circle passes through $(3, 4)$ and has its center at the origin. What is the equation of the circle?',
            options: ['$x^2 + y^2 = 7$', '$x^2 + y^2 = 25$', '$x^2 + y^2 = 12$', '$(x-3)^2 + (y-4)^2 = 25$'],
            correctAnswer: 1,
            explanation: '$r^2 = 3^2 + 4^2 = 9 + 16 = 25$. Center at origin: $x^2 + y^2 = 25$.'
          }
        ]
      }
    }
  ]
};
