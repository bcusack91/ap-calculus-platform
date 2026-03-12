export const satQuadraticsPart6Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe6-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 6 of 7 — Quadratic Systems and Intersections**

### Line Meets Parabola

To find where $y = x^2 + 2x - 3$ and $y = x + 1$ intersect:

Set equal: $x^2 + 2x - 3 = x + 1$ → $x^2 + x - 4 = 0$

Solve for $x$, then plug back in for $y$.

### Number of Intersections

The discriminant of the resulting equation tells you:
- $\\Delta > 0$: 2 intersection points
- $\\Delta = 0$: 1 point (line is tangent to parabola)
- $\\Delta < 0$: 0 points (no intersection)

### Two Parabolas

Set them equal: $x^2 + 3x + 1 = 2x^2 - x + 4$

Rearrange to get a quadratic in standard form, then solve.

### SAT Tip 💡

The SAT often asks: "At which point(s) does the line $y = c$ intersect $y = x^2 - 4$?"

This is just solving $x^2 - 4 = c$ → $x^2 = c + 4$ → $x = \\pm\\sqrt{c + 4}$

Two solutions when $c > -4$, one when $c = -4$, none when $c < -4$.`
    },
    {
      id: 'qe6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Quadratic Systems** 🎯',
      exercise: {
        questions: [
          {
            question: 'The line $y = 2x + k$ is tangent to the parabola $y = x^2$. What is $k$?',
            options: ['$-1$', '$1$', '$0$', '$-4$'],
            correctAnswer: 0,
            explanation: 'Set equal: $x^2 = 2x + k$ → $x^2 - 2x - k = 0$. Tangent means $\\Delta = 0$: $4 + 4k = 0$ → $k = -1$.'
          },
          {
            question: 'How many times does $y = 3$ intersect $y = x^2 - 1$?',
            options: ['$2$', '$0$', '$1$', '$3$'],
            correctAnswer: 0,
            explanation: '$x^2 - 1 = 3$ → $x^2 = 4$ → $x = \\pm 2$. Two intersection points: $(2, 3)$ and $(-2, 3)$.'
          },
          {
            question: 'If $y = x + 2$ and $y = x^2 - 2x + 2$ intersect at $(a, b)$ and $(c, d)$ where $a < c$, what is $a$?',
            options: ['$0$', '$1$', '$-1$', '$2$'],
            correctAnswer: 0,
            explanation: '$x + 2 = x^2 - 2x + 2$ → $x^2 - 3x = 0$ → $x(x - 3) = 0$ → $x = 0$ or $x = 3$. Since $a < c$, $a = 0$.'
          }
        ]
      }
    },
    {
      id: 'qe6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- To find intersections: set the equations equal, solve the resulting quadratic
- The discriminant of the combined equation → number of intersection points
- "Tangent" = exactly one intersection = discriminant equals zero
- $y = c$ intersects $y = x^2 + k$: solve $x^2 + k = c$ to find $x$ values`
    }
  ]
};
