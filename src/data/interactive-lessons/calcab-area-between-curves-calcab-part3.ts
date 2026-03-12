export const calcabAreaCurvesPart3Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area3-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 3 of 7 — Integrating with Respect to $y$**

### When to Use $dy$

Sometimes it's easier to integrate horizontally (with respect to $y$):

$$A = \\int_c^d [\\text{right}(y) - \\text{left}(y)]\\,dy$$

### Worked Example

Find the area between $x = y^2$ and $x = 4$.

Intersect: $y^2 = 4$ → $y = \\pm 2$

Right curve: $x = 4$. Left curve: $x = y^2$.

$$A = \\int_{-2}^{2} (4 - y^2)\\,dy = 2\\int_0^2 (4-y^2)\\,dy = 2\\left[4y - \\frac{y^3}{3}\\right]_0^2 = 2\\left(8 - \\frac{8}{3}\\right) = \\frac{32}{3}$$`
    },
    {
      id: 'area3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integrating in $y$** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the area enclosed by $x = y^2 - 1$ and $x = y + 1$.',
            options: ['$\\frac{9}{2}$', '$\\frac{7}{2}$', '$3$', '$\\frac{11}{2}$'],
            correctAnswer: 0,
            explanation: 'Intersect: $y^2 - 1 = y + 1$ → $y^2 - y - 2 = 0$ → $y = -1, 2$. Right: $y+1$, Left: $y^2-1$. $A = \\int_{-1}^2 [(y+1)-(y^2-1)]\\,dy = \\int_{-1}^2 (2+y-y^2)\\,dy = [2y+\\frac{y^2}{2}-\\frac{y^3}{3}]_{-1}^2 = (4+2-\\frac{8}{3})-(-2+\\frac{1}{2}+\\frac{1}{3}) = \\frac{10}{3} + \\frac{7}{6} = \\frac{9}{2}$.'
          }
        ]
      }
    },
    {
      id: 'area3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

1. Use $\\int dy$ when curves are functions of $y$ (like $x = y^2$)
2. Right minus left (instead of top minus bottom)
3. Limits are $y$-values when integrating in $y$`
    }
  ]
};
