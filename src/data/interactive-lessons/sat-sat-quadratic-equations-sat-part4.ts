export const satQuadraticsPart4Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe4-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 4 of 7 — Graphing Parabolas**

### Key Features of $y = ax^2 + bx + c$

- **y-intercept**: The point $(0, c)$ — just read the constant
- **x-intercepts** (roots/zeros): Set $y = 0$ and solve
- **Vertex**: $\\left(-\\frac{b}{2a},\\, f\\left(-\\frac{b}{2a}\\right)\\right)$
- **Axis of symmetry**: $x = -\\frac{b}{2a}$ (vertical line through vertex)
- **Direction**: Up if $a > 0$, down if $a < 0$

### The Symmetry Trick

If the roots are at $x = r$ and $x = s$, then the axis of symmetry is at:

$$x = \\frac{r + s}{2}$$

This is the midpoint of the roots!

### SAT Graph Reading Skills

When the SAT shows you a parabola:
- The vertex tells you the min/max
- The x-intercepts are the solutions to $f(x) = 0$
- The y-intercept is $f(0)$
- $f(x) > 0$ is where the graph is **above** the x-axis
- $f(x) < 0$ is where the graph is **below** the x-axis`
    },
    {
      id: 'qe4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Parabola Graphs** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x^2 - 4x - 5$ and the roots are $x = -1$ and $x = 5$, what is the axis of symmetry?',
            options: ['$x = 2$', '$x = 3$', '$x = -3$', '$x = 0$'],
            correctAnswer: 0,
            explanation: 'Axis of symmetry = midpoint of roots = $(-1 + 5)/2 = 2$. Or use $x = -b/(2a) = 4/2 = 2$.'
          },
          {
            question: 'A parabola opens downward and has vertex $(3, 10)$. Which statement MUST be true?',
            options: ['The maximum value of the function is $10$', 'The function has no x-intercepts', 'The y-intercept is $10$', 'The function is always negative'],
            correctAnswer: 0,
            explanation: 'Opening downward means the vertex is a maximum. The maximum y-value is $10$ at $x = 3$.'
          },
          {
            question: 'The function $g(x) = x^2 - 6x + 9$ touches the x-axis at exactly one point. That point is:',
            options: ['$(3, 0)$', '$(9, 0)$', '$(-3, 0)$', '$(6, 0)$'],
            correctAnswer: 0,
            explanation: '$x^2 - 6x + 9 = (x-3)^2 = 0$ → $x = 3$. One touch point = one repeated root = the vertex is ON the x-axis.'
          }
        ]
      }
    },
    {
      id: 'qe4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Read the y-intercept directly from the constant $c$
- X-intercepts come from factoring or the quadratic formula
- Axis of symmetry = midpoint of roots = $-b/(2a)$
- Opens up ($a > 0$) → vertex is minimum; opens down ($a < 0$) → vertex is maximum
- "$f(x) > 0$" means "where is the graph above the x-axis?"`
    }
  ]
};
