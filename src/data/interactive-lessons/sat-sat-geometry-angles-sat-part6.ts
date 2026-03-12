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
    }
  ]
};