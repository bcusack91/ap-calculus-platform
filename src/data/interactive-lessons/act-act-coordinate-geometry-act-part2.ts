export const actCoordGeomPart2Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-cg2-intro',
      type: 'text' as const,
      content: `
# 📈 Slope & Linear Equations

**Part 2 of 7 — Slope Formula, Slope-Intercept, Point-Slope, Parallel & Perpendicular**

The **slope** of a line through $(x_1, y_1)$ and $(x_2, y_2)$ is:

$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$$

| Slope Type | Value | Visual |
|------------|-------|--------|
| Positive | $m > 0$ | Rising left → right |
| Negative | $m < 0$ | Falling left → right |
| Zero | $m = 0$ | Horizontal line |
| Undefined | $\\frac{a}{0}$ | Vertical line |

**Linear equation forms:**
- **Slope-intercept:** $y = mx + b$ (slope $m$, y-intercept $b$)
- **Point-slope:** $y - y_1 = m(x - x_1)$
- **Standard form:** $Ax + By = C$
      `
    },
    {
      id: 'act-cg2-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Slope:** Find the slope through $(2, 3)$ and $(6, 11)$.

$$m = \\frac{11 - 3}{6 - 2} = \\frac{8}{4} = 2$$

**Example 2 — Slope-intercept:** A line has slope $3$ and y-intercept $-5$. Write its equation.

$$y = 3x - 5$$

**Example 3 — Point-slope:** Write the equation of the line through $(4, 1)$ with slope $-2$.

$$y - 1 = -2(x - 4) \\implies y = -2x + 9$$

**Parallel & Perpendicular:**
- **Parallel lines** have the **same slope**: $m_1 = m_2$.
- **Perpendicular lines** have **negative reciprocal slopes**: $m_1 \\cdot m_2 = -1$.

**Example 4:** A line has slope $\\frac{3}{4}$. A perpendicular line has slope $-\\frac{4}{3}$.

**ACT Tip:** If two answer choices have the same slope, neither can be perpendicular to a given line — eliminate both quickly.
      `
    },
    {
      id: 'act-cg2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Slope & Equations** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the slope of the line through $(1, -2)$ and $(4, 7)$?',
            options: ['$-3$', '$3$', '$\\frac{1}{3}$', '$9$'],
            correctAnswer: 1,
            explanation: '$m = \\frac{7 - (-2)}{4 - 1} = \\frac{9}{3} = 3$.'
          },
          {
            question: 'Which equation is parallel to $y = 2x + 5$?',
            options: ['$y = -2x + 1$', '$y = \\frac{1}{2}x + 3$', '$y = 2x - 7$', '$y = -\\frac{1}{2}x + 5$'],
            correctAnswer: 2,
            explanation: 'Parallel lines share the same slope. $y = 2x - 7$ has slope $2$, matching the given line.'
          }
        ]
      }
    },
    {
      id: 'act-cg2-input1',
      type: 'input-boxes' as const,
      content: `
**Slope Calculations** 🧮

1) Slope through $(0, 4)$ and $(2, 10)$?

2) y-intercept of $y = -3x + 7$? (just the number)

3) If a line has slope $5$, its perpendicular has slope $-1/k$. What is $k$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '7', '5'],
        hint1: '$m = \\frac{10-4}{2-0}$.',
        hint2: 'In $y = mx + b$, the y-intercept is $b$.',
        hint3: 'Perpendicular slope is the negative reciprocal: $-\\frac{1}{5}$.',
        explanation: '1) $m = 6/2 = 3$. 2) $b = 7$. 3) The perpendicular slope is $-1/5$, so $k = 5$.'
      }
    },
    {
      id: 'act-cg2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Line Relationships** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A vertical line has … slope.',
            options: ['Zero', 'Undefined', 'Positive', 'Negative']
          },
          {
            label: 'Parallel lines have …',
            options: ['Negative reciprocal slopes', 'The same slope', 'Opposite slopes', 'Slopes that multiply to −1']
          },
          {
            label: 'In $y = mx + b$, the letter $b$ represents the …',
            options: ['slope', 'y-intercept', 'x-intercept', 'distance']
          }
        ],
        correctAnswers: ['Undefined', 'The same slope', 'y-intercept'],
        hint1: 'Vertical lines have $\\Delta x = 0$ in the denominator.',
        hint2: 'Same direction means same steepness.',
        hint3: 'Set $x = 0$ in $y = mx + b$.',
        explanation: 'Vertical lines have undefined slope (division by zero). Parallel lines share slopes. In slope-intercept form, $b$ is the y-intercept.'
      }
    },
    {
      id: 'act-cg2-perpworked',
      type: 'text' as const,
      content: `
## Perpendicular Lines — Full Example

**Problem:** Find the equation of the line perpendicular to $y = \\frac{2}{3}x + 4$ that passes through $(6, 1)$.

**Step 1:** The given slope is $\\frac{2}{3}$. The perpendicular slope is $m = -\\frac{3}{2}$.

**Step 2:** Use point-slope form with $(6, 1)$:

$$y - 1 = -\\frac{3}{2}(x - 6)$$

$$y - 1 = -\\frac{3}{2}x + 9$$

$$y = -\\frac{3}{2}x + 10$$

**ACT Tip:** Convert to slope-intercept form ($y = mx + b$) to match answer choices quickly.
      `
    },
    {
      id: 'act-cg2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The line through $(3, k)$ and $(7, 12)$ has slope $2$. What is $k$?',
            options: ['$2$', '$4$', '$8$', '$6$'],
            correctAnswer: 1,
            explanation: '$\\frac{12 - k}{7 - 3} = 2 \\implies 12 - k = 8 \\implies k = 4$.'
          },
          {
            question: 'Which line is perpendicular to $y = -\\frac{1}{4}x + 2$?',
            options: ['$y = -4x + 1$', '$y = \\frac{1}{4}x + 3$', '$y = 4x - 5$', '$y = -\\frac{1}{4}x + 7$'],
            correctAnswer: 2,
            explanation: 'Perpendicular slope $= -\\frac{1}{-1/4} = 4$. The line $y = 4x - 5$ has slope $4$.'
          }
        ]
      }
    }
  ]
};
