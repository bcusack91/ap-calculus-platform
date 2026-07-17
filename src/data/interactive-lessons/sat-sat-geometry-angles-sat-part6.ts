export const satGeometryPart6Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo6-intro',
      type: 'text' as const,
      content: `# Coordinate Geometry

**Part 6 of 7 — Distance, Midpoint, and Equations of Lines/Circles**

### Distance Formula

$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

This is just the Pythagorean theorem applied to the coordinate plane.

### Midpoint Formula

$$M = \\left(\\frac{x_1 + x_2}{2},\\, \\frac{y_1 + y_2}{2}\\right)$$

### Slope

$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$$

**Parallel lines:** Same slope ($m_1 = m_2$)  
**Perpendicular lines:** Negative reciprocal slopes ($m_1 \\times m_2 = -1$)

### Equation of a Circle

Standard form: $(x - h)^2 + (y - k)^2 = r^2$

- Center: $(h, k)$
- Radius: $r$

**Example:** $(x - 3)^2 + (y + 2)^2 = 25$
- Center: $(3, -2)$ ← note: $y + 2$ means $k = -2$
- Radius: $\\sqrt{25} = 5$

### Converting General Form to Standard Form (Completing the Square)

$x^2 + y^2 - 6x + 4y - 12 = 0$

Group and complete the square:
$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$
$(x - 3)^2 + (y + 2)^2 = 25$

### SAT Trap ⚠️

When reading circle equations, remember: $(x - h)^2$ means the center's x-coordinate is $+h$, and $(y + k)^2$ means the center's y-coordinate is $-k$. The signs flip!`
    },
    {
      id: 'geo6-quiz',
      type: 'multiple-choice' as const,
      content: '**Coordinate Geometry Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the distance between $(1, 4)$ and $(7, 12)$?',
            options: ['$10$', '$8$', '$6\\sqrt{2}$', '$14$'],
            correctAnswer: 0,
            explanation: '$d = \\sqrt{(7-1)^2 + (12-4)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.'
          },
          {
            question: 'A line passes through $(2, 5)$ and has slope $-3$. A perpendicular line through the same point has slope:',
            options: ['$\\frac{1}{3}$', '$3$', '$-\\frac{1}{3}$', '$-3$'],
            correctAnswer: 0,
            explanation: 'Perpendicular slopes are negative reciprocals. The negative reciprocal of $-3$ is $\\frac{1}{3}$ (flip and change sign).'
          },
          {
            question: 'The equation $x^2 + y^2 + 8x - 6y = 0$ represents a circle. What is its center?',
            options: ['$(-4, 3)$', '$(4, -3)$', '$(8, -6)$', '$(-8, 6)$'],
            correctAnswer: 0,
            explanation: 'Complete the square: $(x^2 + 8x + 16) + (y^2 - 6y + 9) = 0 + 16 + 9$ → $(x+4)^2 + (y-3)^2 = 25$. Center: $(-4, 3)$.'
          }
        ]
      }
    },
    {
      id: 'geo6-text2',
      type: 'text' as const,
      content: `## Deep Dive: Coordinate Geometry Problem Solving

### Worked Example 1: Finding a Missing Vertex

| Step | Work |
|---|---|
| **Problem** | A rectangle has three vertices at $A(1, 1)$, $B(7, 1)$, $C(7, 5)$. Find vertex $D$. |
| **Strategy** | Opposite sides of a rectangle are equal and parallel. |
| **Reasoning** | $D$ has the same $x$ as $A$ and same $y$ as $C$: $D(1, 5)$. |
| **Verify** | $AB = 6$, $CD = 6$ ✓. $BC = 4$, $AD = 4$ ✓. |

### Worked Example 2: Is It a Right Triangle?

| Step | Work |
|---|---|
| **Problem** | Triangle with vertices $P(0, 0)$, $Q(4, 0)$, $R(0, 3)$. Is it a right triangle? |
| **Slopes** | $PQ$: slope $= 0$ (horizontal). $PR$: slope undefined (vertical). |
| **Check** | Horizontal ⊥ vertical → YES, right angle at $P$. |
| **Confirm with lengths** | $PQ = 4$, $PR = 3$, $QR = \\sqrt{16 + 9} = 5$. Since $3^2 + 4^2 = 5^2$, it's a 3-4-5 right triangle ✓ |

### Equation of a Line — Forms You Need

| Form | Equation | When to Use |
|---|---|---|
| Slope-intercept | $y = mx + b$ | Know slope and y-intercept |
| Point-slope | $y - y_1 = m(x - x_1)$ | Know slope and a point |
| Standard | $Ax + By = C$ | SAT often gives this form |

### Perpendicular Bisector Strategy

To find the perpendicular bisector of segment $\\overline{AB}$:
1. Find the **midpoint** of $AB$
2. Find the **slope** of $AB$
3. Take the **negative reciprocal** for the perpendicular slope
4. Write the line through the midpoint with that slope`
    },
    {
      id: 'geo6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Coordinate Geometry** 🎯',
      exercise: {
        questions: [
          {
            question: 'The midpoint of segment $\\overline{AB}$ is $(5, 3)$. If $A = (2, 7)$, what are the coordinates of $B$?',
            options: ['$(8, -1)$', '$(3.5, 5)$', '$(7, 10)$', '$(3, -1)$'],
            correctAnswer: 0,
            explanation: 'Midpoint: $\\left(\\frac{2 + x}{2}, \\frac{7 + y}{2}\\right) = (5, 3)$. So $\\frac{2+x}{2} = 5$ → $x = 8$; $\\frac{7+y}{2} = 3$ → $y = -1$. $B = (8, -1)$.'
          },
          {
            question: 'Line $l$ has equation $2x + 3y = 12$. What is the slope of a line perpendicular to $l$?',
            options: ['$\\frac{3}{2}$', '$-\\frac{2}{3}$', '$-\\frac{3}{2}$', '$\\frac{2}{3}$'],
            correctAnswer: 0,
            explanation: 'Rewrite: $3y = -2x + 12$ → $y = -\\frac{2}{3}x + 4$. Slope $= -\\frac{2}{3}$. Perpendicular slope $= \\frac{3}{2}$.'
          },
          {
            question: 'The circle $(x + 1)^2 + (y - 4)^2 = 36$ passes through which of these points?',
            options: ['$(5, 4)$', '$(0, 0)$', '$(3, 3)$', '$(1, 4)$'],
            correctAnswer: 0,
            explanation: 'Center $(-1, 4)$, radius $= 6$. Check $(5, 4)$: $(5+1)^2 + (4-4)^2 = 36 + 0 = 36$ ✓. This point is exactly on the circle.'
          }
        ]
      }
    },
    {
      id: 'geo6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Coordinate Geometry Quick Checks** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'Midpoint of (0, 0) and (8, 6) → [(4, 3)|(4, 6)|(8, 3)|(3, 4)]',
          'Slope of line perpendicular to slope 4 → [-1/4|1/4|-4|4]',
          'Circle $(x - 2)^{2}$ + $(y + 5)^{2}$ = 49, center = [(2, -5)|(-2, 5)|(2, 5)|(-2, -5)]',
          'Distance from (0, 0) to (5, 12) = [13|17|7|$\\sqrt{17}$]'
        ],
        correctAnswers: ['(4, 3)', '-1/4', '(2, -5)', '13'],
        hint1: 'Midpoint: average the x\'s and average the y\'s.',
        hint2: 'Perpendicular slope = negative reciprocal.',
        hint3: 'In $(x - h)^{2}$, the center coordinate is +h. In $(y + 5)^{2}$, think $(y - (-5))^{2}$.',
        explanation: 'Midpoint: ((0+8)/2, (0+6)/2) = (4,3). Perpendicular to 4: -1/4. Circle center: (2, -5) since (y+5) = (y-(-5)). Distance: $\\sqrt{25+144}$ = $\\sqrt{169}$ = 13 (5-12-13 triple).'
      }
    },
    {
      id: 'geo6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary: Coordinate Geometry

| Tool | Formula | Key Fact |
|---|---|---|
| Distance | $\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ | Same as Pythagorean theorem |
| Midpoint | $\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$ | Average the coordinates |
| Slope | $\\frac{y_2-y_1}{x_2-x_1}$ | Rise over run |
| Parallel lines | $m_1 = m_2$ | Same slope |
| Perpendicular lines | $m_1 \\cdot m_2 = -1$ | Negative reciprocals |
| Circle (standard) | $(x-h)^2 + (y-k)^2 = r^2$ | Signs flip for center |

### SAT Strategy
- **Know your Pythagorean triples** — saves time on distance problems.
- **Completing the square** converts general form circles to standard form.
- Watch the **sign flip** in circle equations: $(x + 3)^2$ means center $x = -3$.

*Next: Comprehensive geometry review and SAT strategy →*`
    }
  ]
};