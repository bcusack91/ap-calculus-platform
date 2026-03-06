export const satLinearEquationsPart4Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le4-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 4 of 7 — Parallel and Perpendicular Lines**

These concepts appear frequently in SAT geometry-meets-algebra questions.

### Parallel Lines

- Same slope, different y-intercepts
- $y = 3x + 2$ is parallel to $y = 3x - 5$

### Perpendicular Lines

- Slopes are **negative reciprocals**: $m_1 \\cdot m_2 = -1$
- $y = 2x + 1$ is perpendicular to $y = -\\frac{1}{2}x + 4$

### Finding the Equation of a Line

Given a point $(x_1, y_1)$ and slope $m$:

$$y - y_1 = m(x - x_1) \\quad \\text{(point-slope form)}$$

**Example:** Find the line perpendicular to $y = 3x + 1$ passing through $(6, 2)$.

- Perpendicular slope: $m = -1/3$
- $y - 2 = -\\frac{1}{3}(x - 6)$
- $y = -\\frac{1}{3}x + 4$

### Midpoint and Distance

- **Midpoint**: $\\left(\\frac{x_1 + x_2}{2},\\, \\frac{y_1 + y_2}{2}\\right)$
- **Distance**: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$`
    },
    {
      id: 'le4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Parallel & Perpendicular Lines** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which line is perpendicular to $y = -4x + 3$?',
            options: ['$y = \\frac{1}{4}x - 1$', '$y = -4x + 7$', '$y = 4x - 1$', '$y = -\\frac{1}{4}x + 2$'],
            correctAnswer: 0,
            explanation: 'The negative reciprocal of $-4$ is $1/4$. So the perpendicular line has slope $1/4$.'
          },
          {
            question: 'What is the midpoint of $(2, 5)$ and $(8, -1)$?',
            options: ['$(5, 2)$', '$(6, 4)$', '$(3, 3)$', '$(10, 4)$'],
            correctAnswer: 0,
            explanation: 'Midpoint $= ((2+8)/2,\\, (5+(-1))/2) = (5, 2)$.'
          },
          {
            question: 'Line $\\ell$ passes through $(0, 4)$ and is parallel to $2x + y = 7$. What is the equation of $\\ell$?',
            options: ['$y = -2x + 4$', '$y = 2x + 4$', '$y = -2x + 7$', '$y = \\frac{1}{2}x + 4$'],
            correctAnswer: 0,
            explanation: 'First, find the slope of $2x + y = 7$: $y = -2x + 7$, slope $= -2$. Parallel means same slope. Through $(0, 4)$: $y = -2x + 4$.'
          }
        ]
      }
    },
    {
      id: 'le4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Parallel**: same slope ($m_1 = m_2$)
- **Perpendicular**: negative reciprocal slopes ($m_1 \\cdot m_2 = -1$)
- **Point-slope form** is your friend: $y - y_1 = m(x - x_1)$
- Always convert standard form to slope-intercept before comparing slopes`
    }
  ]
};
