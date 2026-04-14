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

---

### Worked Example 1

**Sketch the key features of $f(x) = x^2 - 6x + 5$.**

| Feature | Calculation | Result |
|---------|------------|--------|
| y-intercept | $f(0) = 5$ | $(0, 5)$ |
| x-intercepts | $(x-1)(x-5) = 0$ | $(1, 0)$ and $(5, 0)$ |
| Axis of symmetry | $x = (1+5)/2$ | $x = 3$ |
| Vertex | $f(3) = 9 - 18 + 5$ | $(3, -4)$ |
| Direction | $a = 1 > 0$ | Opens up |

### Worked Example 2

**From a graph: a parabola has vertex at $(2, 6)$ and passes through $(0, 2)$. Find the equation.**

| Step | Work |
|------|------|
| Vertex form | $y = a(x - 2)^2 + 6$ |
| Use point $(0, 2)$ | $2 = a(0-2)^2 + 6 = 4a + 6$ |
| Solve for $a$ | $4a = -4$ → $a = -1$ |
| Equation | $y = -(x - 2)^2 + 6$ |`
    },
    {
      id: 'qe4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Graph Features** 🎯',
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
      id: 'qe4-text2',
      type: 'text' as const,
      content: `### Reading Quadratic Graphs on the SAT

The SAT often shows you a graph and asks questions without giving the equation. Here's what to extract:

### Graph Reading Checklist

| What They Ask | Where to Look |
|--------------|---------------|
| "For what values is $f(x) > 0$?" | Where the graph is ABOVE the x-axis |
| "For what values is $f(x) < 0$?" | Where the graph is BELOW the x-axis |
| "What is the range?" | From vertex $k$ to $\\infty$ (up) or $-\\infty$ to $k$ (down) |
| "How many solutions does $f(x) = 3$ have?" | Draw $y = 3$ and count intersections |

### Worked Example 3

**A parabola has roots at $x = -2$ and $x = 4$ and passes through $(0, -8)$. Find the vertex.**

| Step | Work |
|------|------|
| Factored form | $y = a(x + 2)(x - 4)$ |
| Use $(0, -8)$ | $-8 = a(2)(-4) = -8a$ → $a = 1$ |
| Equation | $y = (x + 2)(x - 4) = x^2 - 2x - 8$ |
| Vertex $x$ | $(-2 + 4)/2 = 1$ |
| Vertex $y$ | $f(1) = 1 - 2 - 8 = -9$ |
| Vertex | $(1, -9)$ |

### Worked Example 4

**Where is $f(x) = x^2 - 4$ positive?**

| Step | Work |
|------|------|
| Find zeros | $x^2 - 4 = 0$ → $x = \\pm 2$ |
| Opens up | $a = 1 > 0$ |
| Above x-axis | $f(x) > 0$ when $x < -2$ or $x > 2$ |

> **SAT Tip:** To determine where a parabola is positive/negative, find the roots and use the direction ($a > 0$ or $a < 0$) to decide.`
    },
    {
      id: 'qe4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Graph Analysis** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = -(x-1)(x-5)$, for what values of $x$ is $f(x) > 0$?',
            options: ['$1 < x < 5$', '$x < 1$ or $x > 5$', '$x < -1$ or $x > -5$', '$-5 < x < -1$'],
            correctAnswer: 0,
            explanation: 'Roots at $x = 1$ and $x = 5$. Since $a < 0$ (opens down), the parabola is above the x-axis BETWEEN the roots: $1 < x < 5$.'
          },
          {
            question: 'A parabola $y = ax^2 + bx + c$ has vertex $(4, -3)$ and opens upward. How many x-intercepts does it have?',
            options: ['$2$', '$0$', '$1$', 'Cannot be determined'],
            correctAnswer: 0,
            explanation: 'Opens up with vertex below the x-axis (at $y = -3$) → the parabola must cross the x-axis twice → 2 x-intercepts.'
          },
          {
            question: 'The graph of $y = 2x^2 + 4x - 6$ crosses the y-axis at:',
            options: ['$(0, -6)$', '$(0, 6)$', '$(0, -3)$', '$(0, 2)$'],
            correctAnswer: 0,
            explanation: 'The y-intercept is always $c$. Here $c = -6$, so the graph crosses at $(0, -6)$.'
          }
        ]
      }
    },
    {
      id: 'qe4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Vertex Location vs. X-Intercepts** 🔍\n\nBased on the vertex location and direction, how many x-intercepts does the parabola have?',
      exercise: {
        dropdowns: [
          { label: 'Opens up, vertex at $(2, -5)$', options: ['0 x-intercepts', '1 x-intercept', '2 x-intercepts'] },
          { label: 'Opens down, vertex at $(3, -1)$', options: ['0 x-intercepts', '1 x-intercept', '2 x-intercepts'] },
          { label: 'Opens up, vertex at $(0, 0)$', options: ['0 x-intercepts', '1 x-intercept', '2 x-intercepts'] },
          { label: 'Opens down, vertex at $(-1, 4)$', options: ['0 x-intercepts', '1 x-intercept', '2 x-intercepts'] }
        ],
        correctAnswers: ['2 x-intercepts', '0 x-intercepts', '1 x-intercept', '2 x-intercepts'],
        hint1: 'Opens up with vertex below x-axis → must cross twice.',
        hint2: 'Opens down with vertex below x-axis → never reaches x-axis.',
        hint3: 'Vertex ON the x-axis → touches exactly once.',
        explanation: 'Up + below → 2 intercepts. Down + below → 0 intercepts (entirely below). Up + on axis → 1 intercept (touches). Down + above → 2 intercepts (crosses both sides).'
      }
    },
    {
      id: 'qe4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Feature | How to Find |
|---------|-------------|
| Y-intercept | Read $c$ from standard form, or plug $x = 0$ |
| X-intercepts | Factor, quadratic formula, or read from graph |
| Vertex | $x = -b/(2a)$, then compute $y$ |
| Axis of symmetry | $x = -b/(2a)$ or midpoint of roots |
| Direction | $a > 0$: up, $a < 0$: down |
| $f(x) > 0$ | Where graph is above x-axis |
| # of x-intercepts | Sign of discriminant, or vertex position + direction |

- Vertex below x-axis + opens up = 2 x-intercepts
- Vertex above x-axis + opens down = 2 x-intercepts
- Vertex on x-axis = 1 x-intercept (tangent)
- Vertex on wrong side of x-axis = 0 x-intercepts`
    }
  ]
};
