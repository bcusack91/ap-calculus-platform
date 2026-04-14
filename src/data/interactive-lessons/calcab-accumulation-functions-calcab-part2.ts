export const calcabAccumulationPart2Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc2-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 2 of 7 — Reading Graphs of $f$ to Analyze $F$**

### The Most Tested AP Skill

Given the **graph of $f$**, determine everything about $F(x) = \\int_a^x f(t)\\,dt$.

$$\\boxed{f \\text{ (graph given)} \\xrightarrow{\\text{integrate}} F \\text{ (properties to find)}}$$

### Complete Translation Guide

| Given about $f$ | Conclude about $F$ |
|:---:|:---:|
| $f(c) = 0$ | $F'(c) = 0$ (critical point) |
| $f > 0$ on interval | $F$ increasing |
| $f < 0$ on interval | $F$ decreasing |
| $f$ changes $+ \\to -$ | $F$ has local max |
| $f$ changes $- \\to +$ | $F$ has local min |
| $f$ increasing | $F$ concave up ($F'' = f' > 0$) |
| $f$ decreasing | $F$ concave down ($F'' = f' < 0$) |
| $f$ has local max or min | $F$ has inflection point |
| Area under $f$ above axis | Positive contribution to $F$ |
| Area under $f$ below axis | Negative contribution to $F$ |

> **AP Tip:** Always write $g' = f$ and $g'' = f'$ at the top of your work. This prevents confusion between the layers.`
    },
    {
      id: 'acc2-areas',
      type: 'text' as const,
      content: `### Computing $F(x)$ from Geometric Areas

When $f$ is piecewise linear, compute $F(x)$ using geometric shapes:

| Shape | Area Formula |
|:---:|:---:|
| Rectangle | $\\text{base} \\times \\text{height}$ |
| Triangle | $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$ |
| Trapezoid | $\\frac{1}{2}(b_1 + b_2) \\times h$ |
| Semicircle | $\\frac{1}{2}\\pi r^2$ |

### Worked Example

$f$ is piecewise linear: $f(0)=2$, $f(2)=2$, $f(4)=-2$, $f(6)=0$.

| Interval | Shape | Signed Area | Running Total $F(x)$ |
|:---:|:---:|:---:|:---:|
| $[0,2]$ | Rectangle | $2 \\times 2 = +4$ | $F(2) = 4$ |
| $[2,3]$ | Triangle | $\\frac{1}{2}(1)(2) = +1$ | $F(3) = 5$ |
| $[3,4]$ | Triangle | $\\frac{1}{2}(1)(-2) = -1$ | Lost: $f=0$ at $x=3$ |
| $[2,4]$ | Trapezoid | $\\frac{1}{2}(2)(2+(-2)) = 0$ | $F(4) = 4$ |
| $[4,6]$ | Triangle | $\\frac{1}{2}(2)(-2) = -2$ | $F(6) = 2$ |

Note: $f$ crosses zero at $x = 3$ (linear from $2$ to $-2$). $F$ has its **maximum** at $x = 3$.`
    },
    {
      id: 'acc2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Graph Analysis** 🎯\n\nSuppose $f$ is piecewise linear: $f(0)=2$, $f(2)=2$, $f(4)=-2$, $f(6)=0$. Let $g(x) = \\int_0^x f(t)\\,dt$.',
      exercise: {
        questions: [
          {
            question: 'What is $g(2)$?',
            options: ['$2$', '$4$', '$0$', '$1$'],
            correctAnswer: 1,
            explanation: '$g(2)$: $f = 2$ on $[0,2]$. Rectangle area $= 2 \\times 2 = 4$.'
          },
          {
            question: 'At what $x$ does $g$ reach its absolute maximum on $[0, 6]$?',
            options: ['$x = 2$', '$x = 3$', '$x = 4$', '$x = 6$'],
            correctAnswer: 1,
            explanation: '$g\'(x) = f(x)$. On $[2,4]$, $f$ is linear from $2$ to $-2$, crossing zero at $x = 3$. $f$ changes $+ \\to -$ at $x = 3$: local max.'
          },
          {
            question: 'On which interval is $g$ concave down?',
            options: ['$(0, 2)$', '$(2, 4)$', '$(4, 6)$', '$(0, 3)$'],
            correctAnswer: 1,
            explanation: '$g\'\'(x) = f\'(x)$. On $(2,4)$, $f$ is decreasing ($f\' < 0$), so $g$ is concave down.'
          }
        ]
      }
    },
    {
      id: 'acc2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match behavior to conclusions.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: 'On $[0,2]$, $f = 2$ (constant). On this interval, $g$ is:',
            options: ['Linear and increasing', 'Quadratic and increasing', 'Constant', 'Decreasing'],
            correctAnswers: ['Linear and increasing'],
            hints: ['If $f$ is constant, then $g = \\int f$ is linear.'],
            explanation: '$g\' = f = 2$ (constant), so $g$ increases at a constant rate: $g$ is linear.'
          },
          {
            label: 'On $[2,4]$, $f$ is linear from $2$ to $-2$. On this interval, $g$ is:',
            options: ['Linear', 'Quadratic (parabola)', 'Exponential', 'Piecewise linear'],
            correctAnswers: ['Quadratic (parabola)'],
            hints: ['If $f$ is linear (degree 1), then $g = \\int f$ is degree 2.'],
            explanation: 'Integrating a linear function gives a quadratic. $g$ is a parabola opening down on $[2,4]$.'
          },
          {
            label: 'At $x = 3$, $g$ has a local max because:',
            options: ['$f(3) = 0$ (that is enough)', '$f$ changes from positive to negative at $x=3$', '$f$ is decreasing at $x=3$', '$g(3) > g(2)$'],
            correctAnswers: ['$f$ changes from positive to negative at $x=3$'],
            hints: ['Critical point ($f=0$) is not sufficient. You must show the sign change.'],
            explanation: 'For a local max: $g\'(3) = f(3) = 0$ AND $f$ changes from $+$ to $-$.'
          }
        ]
      }
    },
    {
      id: 'acc2-input',
      type: 'input-box' as const,
      content: '**Compute from areas.** ✍️',
      exercise: {
        question: 'The graph of $f$ consists of a triangle with vertices $(0,0)$, $(3,6)$, $(6,0)$. Let $g(x) = \\int_0^x f(t)\\,dt$. Find $g(6)$.\n\n(Enter an integer.)',
        correctAnswer: '18',
        acceptableAnswers: ['18'],
        hints: [
          'The triangle has base $6$ and height $6$.',
          'Area $= \\frac{1}{2}(6)(6) = 18$.',
          'Since the triangle is entirely above the $x$-axis, the signed area is positive.'
        ],
        explanation: 'Triangle area: $\\frac{1}{2}(6)(6) = 18$. Since $f \\geq 0$ on $[0,6]$, $g(6) = 18$.'
      }
    },
    {
      id: 'acc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

| Concept | Key Point |
|:---:|:---:|
| $f > 0$ | $F$ increasing, positive area |
| $f < 0$ | $F$ decreasing, negative area |
| $f$ crosses zero | $F$ has local extremum |
| $f$ constant | $F$ is linear |
| $f$ linear | $F$ is quadratic |

> **Up Next:** Part 3 — FTC Part 1 with Chain Rule.`
    }
  ]
};
