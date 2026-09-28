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

---

### Worked Example 1

**Find where $y = x^2 - 3x + 2$ and $y = x - 1$ intersect.**

| Step | Work |
|------|------|
| Set equal | $x^2 - 3x + 2 = x - 1$ |
| Rearrange | $x^2 - 4x + 3 = 0$ |
| Factor | $(x - 1)(x - 3) = 0$ |
| Solve | $x = 1$ or $x = 3$ |
| Find $y$-values | $y(1) = 0$, $y(3) = 2$ |
| Intersections | $(1, 0)$ and $(3, 2)$ |

### Worked Example 2

**For what values of $k$ is the line $y = kx - 1$ tangent to $y = x^2$?**

| Step | Work |
|------|------|
| Set equal | $x^2 = kx - 1$ → $x^2 - kx + 1 = 0$ |
| Tangent → $\\Delta = 0$ | $(-k)^2 - 4(1)(1) = 0$ → $k^2 = 4$ |
| Solve | $k = 2$ or $k = -2$ |
| Check $k = 2$ | $x^2 - 2x + 1 = (x - 1)^2 = 0$ → one touch point, $(1, 1)$ ✓ |

> **Why the y-intercept matters:** a line with a positive y-intercept, such as $y = kx + 2$, can never be tangent to $y = x^2$. Setting them equal gives $x^2 - kx - 2 = 0$ with $\\Delta = k^2 + 8$, which is always positive, so the line always crosses the parabola twice.`
    },
    {
      id: 'qe6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Line-Parabola Intersections** 🎯',
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
      id: 'qe6-text2',
      type: 'text' as const,
      content: `### Two Parabolas Intersecting

Set the equations equal: $f(x) = g(x)$, rearrange to standard form, then solve.

### Worked Example 3

**Find the intersection(s) of $y = x^2 + 1$ and $y = -x^2 + 5$.**

| Step | Work |
|------|------|
| Set equal | $x^2 + 1 = -x^2 + 5$ |
| Rearrange | $2x^2 = 4$ → $x^2 = 2$ |
| Solve | $x = \\pm\\sqrt{2}$ |
| Find $y$ | $y = (\\sqrt{2})^2 + 1 = 3$ |
| Intersections | $(\\sqrt{2}, 3)$ and $(-\\sqrt{2}, 3)$ |

### Worked Example 4

**$y = c$ intersects $y = x^2 - 4$ at exactly one point. What is $c$?**

| Step | Work |
|------|------|
| Set equal | $x^2 - 4 = c$ → $x^2 = c + 4$ |
| One solution → $x = 0$ | $c + 4 = 0$ → $c = -4$ |
| Check | The line $y = -4$ touches the vertex of the parabola |

> **SAT Tip:** A horizontal line $y = c$ intersects $y = ax^2 + bx + c'$ at exactly one point when $c$ equals the $y$-coordinate of the vertex.`
    },
    {
      id: 'qe6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Systems with Quadratics** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $y = x^2 + 2$ and $y = 2x^2 - 1$, at how many points do they intersect?',
            options: ['$2$', '$0$', '$1$', '$3$'],
            correctAnswer: 0,
            explanation: '$x^2 + 2 = 2x^2 - 1$ → $x^2 = 3$ → $x = \\pm\\sqrt{3}$. Two intersection points.'
          },
          {
            question: 'The line $y = mx$ intersects the parabola $y = x^2 - 4x$ at exactly one point. What is the value of $m$?',
            options: ['$-4$', '$0$', '$4$', '$-2$'],
            correctAnswer: 0,
            explanation: 'Set equal: $x^2 - 4x = mx$ → $x^2 - (4 + m)x = 0$ → $x(x - (4 + m)) = 0$. The solutions are $x = 0$ and $x = 4 + m$. Exactly one intersection means these coincide: $4 + m = 0$, so $m = -4$. (With $m = 0$ the line is the x-axis, which meets the parabola at $(0, 0)$ and $(4, 0)$.)'
          },
          {
            question: 'For the system $y = x^2$ and $y = 2x + k$, how many intersection points exist when $k = -1$?',
            options: ['$2$', '$1$', '$0$', '$3$'],
            correctAnswer: 1,
            explanation: '$x^2 = 2x - 1$ → $x^2 - 2x + 1 = 0$ → $(x-1)^2 = 0$. One intersection (tangent). $\\Delta = 4 - 4 = 0$.'
          }
        ]
      }
    },
    {
      id: 'qe6-dropdown',
      type: 'dropdown-select' as const,
      content: '**How Many Intersections?** 🔍\n\nDetermine the number of intersection points for each system.',
      exercise: {
        dropdowns: [
          { label: '$y = x^2$ and $y = 4$', options: ['0 points', '1 point', '2 points'] },
          { label: '$y = x^2$ and $y = -1$', options: ['0 points', '1 point', '2 points'] },
          { label: '$y = x^2$ and $y = 0$', options: ['0 points', '1 point', '2 points'] },
          { label: '$y = x^2 + 3$ and $y = x^2 - 1$', options: ['0 points', '1 point', '2 points'] }
        ],
        correctAnswers: ['2 points', '0 points', '1 point', '0 points'],
        hint1: '$x^2 = 4$ → $x = \\pm 2$.',
        hint2: '$x^2 = -1$? Can a square be negative?',
        hint3: 'Two parabolas with the same $a$ but different $c$ are parallel — they never intersect.',
        explanation: '$x^2 = 4$: two solutions → 2 points. $x^2 = -1$: impossible → 0 points. $x^2 = 0$: one solution $x = 0$ → 1 point. $x^2 + 3 = x^2 - 1$ → $3 = -1$: impossible → 0 points (parallel parabolas).'
      }
    },
    {
      id: 'qe6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| System Type | Method | # of Solutions |
|------------|--------|----------------|
| Line + Parabola | Set equal, get quadratic, check $\\Delta$ | 0, 1, or 2 |
| Two parabolas | Set equal, simplify | 0, 1, or 2 |
| Horizontal line + parabola | $c = ax^2 + bx + c'$ → solve | Depends on $c$ vs vertex |

- To find intersections: set equal → rearrange → solve
- **Tangent** = 1 intersection = $\\Delta = 0$
- A horizontal line through the vertex gives exactly 1 intersection
- Parallel parabolas (same $a$, different $c$) never intersect`
    }
  ]
};
