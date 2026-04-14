export const calcabFRQPart6Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq6-intro',
      type: 'text' as const,
      content: `# Free-Response Strategies \u2014 Area & Volume FRQs

**Part 6 of 7**

---

### Area & Volume FRQ Overview

These FRQs give you curves and ask you to find areas, volumes, and setup integral expressions.

### Setup Formulas

| Problem Type | Integral |
|:---|:---|
| Area between two curves | $\\int_a^b [f(x) - g(x)]\\,dx$ |
| Volume \u2014 Disk (about $x$-axis) | $\\pi\\int_a^b [f(x)]^2\\,dx$ |
| Volume \u2014 Washer (about $x$-axis) | $\\pi\\int_a^b \\left([R(x)]^2 - [r(x)]^2\\right)dx$ |
| Volume \u2014 Known cross-sections | $\\int_a^b A(x)\\,dx$ |

### Cross-Section Shapes

| Shape | Area Formula |
|:---|:---|
| Square | $A = s^2$ where $s = f(x)-g(x)$ |
| Semicircle | $A = \\frac{\\pi}{8}[f(x)-g(x)]^2$ |
| Equilateral triangle | $A = \\frac{\\sqrt{3}}{4}[f(x)-g(x)]^2$ |
| Isosceles right triangle | $A = \\frac{1}{2}[f(x)-g(x)]^2$ |

> **Key Fact:** Cross-section problems always say \u201cperpendicular to the $x$-axis (or $y$-axis).\u201d The side length equals the distance between curves.

---

### Worked Example \u2014 Area & Volume FRQ

Region $R$ is bounded by $y = x^2$ and $y = 2x$ for $0 \\le x \\le 2$.

**(a)** Area of $R$:

$$A = \\int_0^2 (2x - x^2)\\,dx = \\left[x^2 - \\frac{x^3}{3}\\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$$

**(b)** Volume when $R$ is revolved about the $x$-axis (washer):

$$V = \\pi\\int_0^2 \\left[(2x)^2 - (x^2)^2\\right]dx = \\pi\\int_0^2 (4x^2 - x^4)\\,dx$$

$$= \\pi\\left[\\frac{4x^3}{3} - \\frac{x^5}{5}\\right]_0^2 = \\pi\\left(\\frac{32}{3} - \\frac{32}{5}\\right) = \\frac{64\\pi}{15}$$

**(c)** Volume with square cross-sections perpendicular to $x$-axis:

$$V = \\int_0^2 (2x - x^2)^2\\,dx$$`
    },
    {
      id: 'frq6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Area & Volume FRQ Quiz** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'To revolve region $R$ about the line $y = -1$ instead of the $x$-axis, you must:',
            options: ['Add 1 to each radius: $R = f(x)+1$, $r = g(x)+1$', 'Subtract 1 from each function', 'Shift the integral limits', 'Use shells instead of washers'],
            correctAnswer: 0,
            explanation: 'Revolving about $y=-1$: distance from curve to axis of rotation = $f(x)-(-1) = f(x)+1$.'
          },
          {
            question: 'Cross-sections perpendicular to the $x$-axis are squares with side $s = f(x)-g(x)$. The volume is:',
            options: ['$\\int_a^b [f(x)-g(x)]^2\\,dx$', '$\\pi\\int_a^b [f(x)-g(x)]^2\\,dx$', '$\\int_a^b [f(x)-g(x)]\\,dx$', '$\\frac{\\pi}{4}\\int_a^b [f(x)-g(x)]^2\\,dx$'],
            correctAnswer: 0,
            explanation: 'Square: $A = s^2 = [f-g]^2$. No $\\pi$ \u2014 that\u2019s only for revolution.'
          },
          {
            question: 'When integrating with respect to $y$ for area, the integrand is:',
            options: ['$(\\text{right function}) - (\\text{left function})$', '$(\\text{top}) - (\\text{bottom})$', '$(\\text{outer}) - (\\text{inner})$', '$\\pi[(\\text{right})^2 - (\\text{left})^2]$'],
            correctAnswer: 0,
            explanation: 'Horizontal slices: $\\int_c^d [x_{\\text{right}}(y) - x_{\\text{left}}(y)]\\,dy$.'
          }
        ]
      }
    },
    {
      id: 'frq6-axis',
      type: 'text' as const,
      content: `### Revolution About Non-Standard Axes

| Axis of Revolution | Outer Radius $R$ | Inner Radius $r$ |
|:---|:---|:---|
| $x$-axis ($y=0$) | $f(x)$ | $g(x)$ |
| $y = k$ (above curves) | $k - g(x)$ | $k - f(x)$ |
| $y = k$ (below curves) | $f(x) - k$ | $g(x) - k$ |

> **AP Tip:** Draw the axis of revolution and each curve. Measure radii as **distances**, always positive.`
    },
    {
      id: 'frq6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Set up the integral.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Area between $y = \\sqrt{x}$ and $y = x/2$ from $x=0$ to $x=4$:',
            options: ['$\\int_0^4 (\\sqrt{x} - x/2)\\,dx$', '$\\int_0^4 (x/2 - \\sqrt{x})\\,dx$', '$\\int_0^2 (\\sqrt{x} - x/2)\\,dx$', '$\\pi\\int_0^4 (\\sqrt{x})^2\\,dx$'],
            correctAnswers: ['$\\int_0^4 (\\sqrt{x} - x/2)\\,dx$'],
            hints: ['Check: $\\sqrt{4} = 2$ and $4/2 = 2$, so they meet at $x=4$. On $(0,4)$, $\\sqrt{x} > x/2$.'],
            explanation: '$\\sqrt{x} \\ge x/2$ on $[0,4]$. Area $= \\int_0^4 (\\sqrt{x} - x/2)\\,dx$.'
          },
          {
            label: 'Disk volume for $y=x^3$ about the $x$-axis on $[0,2]$:',
            options: ['$\\pi\\int_0^2 x^6\\,dx$', '$\\pi\\int_0^2 x^3\\,dx$', '$\\int_0^2 x^6\\,dx$', '$\\pi\\int_0^8 y^{2/3}\\,dy$'],
            correctAnswers: ['$\\pi\\int_0^2 x^6\\,dx$'],
            hints: ['$R = x^3$, so $R^2 = x^6$.'],
            explanation: 'Disk: $\\pi\\int [R]^2\\,dx = \\pi\\int_0^2 (x^3)^2\\,dx = \\pi\\int_0^2 x^6\\,dx$.'
          },
          {
            label: 'Cross-sections are semicircles with diameter $= f(x)-g(x)$. Area of each cross-section:',
            options: ['$\\frac{\\pi}{8}[f(x)-g(x)]^2$', '$\\frac{\\pi}{2}[f(x)-g(x)]^2$', '$\\pi[f(x)-g(x)]^2$', '$\\frac{1}{2}[f(x)-g(x)]^2$'],
            correctAnswers: ['$\\frac{\\pi}{8}[f(x)-g(x)]^2$'],
            hints: ['Radius $= \\frac{\\text{diameter}}{2}$. Semicircle area $= \\frac{1}{2}\\pi r^2$.'],
            explanation: '$r = \\frac{f-g}{2}$. $A = \\frac{1}{2}\\pi r^2 = \\frac{\\pi}{8}(f-g)^2$.'
          }
        ]
      }
    },
    {
      id: 'frq6-input',
      type: 'input-box' as const,
      content: '**Compute the area.** \u270d\ufe0f',
      exercise: {
        question: 'Find the area between $y = x^2$ and $y = 4x - x^2$. Express as $\\frac{a}{b}$ in lowest terms. Enter $a + b$.',
        correctAnswer: '11',
        acceptableAnswers: ['11'],
        hints: [
          'Intersection: $x^2 = 4x - x^2 \\implies 2x^2 - 4x = 0 \\implies x = 0, 2$.',
          '$\\int_0^2 [(4x-x^2)-x^2]\\,dx = \\int_0^2 (4x-2x^2)\\,dx$.',
          '$= [2x^2 - \\frac{2x^3}{3}]_0^2 = 8 - \\frac{16}{3} = \\frac{8}{3}$. $a+b = 8+3 = 11$.'
        ],
        explanation: '$\\int_0^2 (4x-2x^2)\\,dx = 8 - \\frac{16}{3} = \\frac{8}{3}$. $a+b = 11$.'
      }
    },
    {
      id: 'frq6-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 6

- Area: $\\int [\\text{top} - \\text{bottom}]\\,dx$ or $\\int [\\text{right} - \\text{left}]\\,dy$
- Disk/washer: remember the $\\pi$ factor
- Cross-sections: match the shape formula; no $\\pi$ for squares/triangles
- Non-standard axes: adjust radii by the distance to the axis`
    }
  ]
};
