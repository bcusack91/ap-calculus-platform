export const calcabIntAppsPart1Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia1-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 1 of 7 \u2014 Area Between Curves**

### In This Topic

| Part | Topic |
|:---:|:---:|
| **1** | **Area Between Curves** |
| 2 | Cross-Sectional Volumes |
| 3 | Disk & Washer Methods |
| 4 | Riemann Sums & Trapezoidal Rule |
| 5 | Rate Problems & Net Change |
| 6 | Problem-Solving Workshop |
| 7 | Comprehensive Assessment |

### Area Between Two Curves

$$\\boxed{A = \\int_a^b [f(x) - g(x)]\\,dx \\quad \\text{where } f(x) \\ge g(x)}$$

| Step | Action |
|:---:|:---:|
| 1 | Sketch and identify which curve is on top |
| 2 | Find intersection points (set $f = g$) |
| 3 | Set up $\\int [\\text{top} - \\text{bottom}]\\,dx$ |
| 4 | If curves cross, split at the crossing points |

> **Key Fact:** Always subtract bottom from top: $\\int (\\text{top} - \\text{bottom})\\,dx$. If you get a negative area, the curves were swapped.`
    },
    {
      id: 'ia1-worked',
      type: 'text' as const,
      content: `### Worked Examples

**Example 1:** Area between $y = x^2$ and $y = x$ on $[0,1]$.

| Step | Work |
|:---:|:---:|
| Intersections | $x^2 = x \\Rightarrow x=0,1$ |
| Top curve | $x \\ge x^2$ on $[0,1]$ |
| Integral | $\\int_0^1 (x-x^2)dx = [\\frac{x^2}{2}-\\frac{x^3}{3}]_0^1$ |
| Answer | $\\frac{1}{2}-\\frac{1}{3} = \\frac{1}{6}$ |

**Example 2:** Area enclosed by $y = x^2$ and $y = 2x$.

| Step | Work |
|:---:|:---:|
| Intersections | $x^2 = 2x \\Rightarrow x=0,2$ |
| Top curve | $2x \\ge x^2$ on $[0,2]$ |
| Integral | $\\int_0^2(2x-x^2)dx = [x^2-\\frac{x^3}{3}]_0^2$ |
| Answer | $4-\\frac{8}{3} = \\frac{4}{3}$ |

### Integrating with Respect to $y$

$$\\boxed{A = \\int_c^d [\\text{right} - \\text{left}]\\,dy}$$

Use when curves are easier to express as $x = f(y)$.

> **AP Tip:** If the region is bounded by $x = y^2$ and $x = 4$, integrate with respect to $y$. It avoids splitting the integral.`
    },
    {
      id: 'ia1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Area Between Curves** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Area between $y = \\sqrt{x}$ and $y = x^2$ on $[0,1]$:',
            options: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{x} \\ge x^2$ on $[0,1]$. $\\int_0^1(x^{1/2}-x^2)dx = [\\frac{2}{3}x^{3/2}-\\frac{x^3}{3}]_0^1 = \\frac{2}{3}-\\frac{1}{3} = \\frac{1}{3}$.'
          },
          {
            question: 'Area between $y = x+2$ and $y = x^2$ is:',
            options: ['$\\frac{9}{2}$', '$\\frac{4}{3}$', '$\\frac{7}{2}$', '$\\frac{9}{4}$'],
            correctAnswer: 0,
            explanation: '$x+2 = x^2 \\Rightarrow x=-1,2$. $\\int_{-1}^2(x+2-x^2)dx = [\\frac{x^2}{2}+2x-\\frac{x^3}{3}]_{-1}^2 = (2+4-\\frac{8}{3})-(\\frac{1}{2}-2+\\frac{1}{3}) = \\frac{10}{3}-(-\\frac{7}{6}) = \\frac{9}{2}$.'
          },
          {
            question: 'When should you integrate with respect to $y$?',
            options: ['When curves are functions of $y$, making setup simpler', 'Always', 'Only for circles', 'When the region touches the $y$-axis'],
            correctAnswer: 0,
            explanation: 'Integrate with respect to $y$ when expressing curves as $x = f(y)$ avoids splitting the integral.'
          }
        ]
      }
    },
    {
      id: 'ia1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Set up the integral.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Area between $y = 4-x^2$ and $y = 0$:',
            options: ['$\\int_{-2}^{2}(4-x^2)dx$', '$\\int_0^4(4-x^2)dx$', '$\\int_{-2}^{2}x^2\\,dx$', '$\\int_0^2(4-x^2)dx$'],
            correctAnswers: ['$\\int_{-2}^{2}(4-x^2)dx$'],
            hints: ['$4-x^2=0$ at $x=\\pm 2$. Top: $4-x^2$, bottom: $0$.'],
            explanation: 'Parabola opens down, $x$-intercepts at $\\pm 2$. Area $= \\int_{-2}^2(4-x^2)dx = \\frac{32}{3}$.'
          },
          {
            label: 'Area between $x = y^2$ and $x = 4$ should be integrated with respect to:',
            options: ['$x$ (splitting into two integrals)', '$y$ (single integral from $-2$ to $2$)', 'Either works equally well', 'Neither'],
            correctAnswers: ['$y$ (single integral from $-2$ to $2$)'],
            hints: ['$x = y^2$ is not a function of $x$ without splitting.'],
            explanation: 'With respect to $y$: $\\int_{-2}^{2}(4-y^2)dy$. Single integral, no splitting.'
          },
          {
            label: 'The area between $y = \\sin x$ and $y = \\cos x$ from $0$ to $\\pi/2$ requires:',
            options: ['No splitting needed', 'Splitting at $x = \\pi/4$ where they cross', 'Splitting at $x = \\pi/2$', 'Absolute value only'],
            correctAnswers: ['Splitting at $x = \\pi/4$ where they cross'],
            hints: ['$\\sin x = \\cos x$ at $x = \\pi/4$.'],
            explanation: '$\\cos x \\ge \\sin x$ on $[0,\\pi/4]$, then $\\sin x \\ge \\cos x$ on $[\\pi/4,\\pi/2]$.'
          }
        ]
      }
    },
    {
      id: 'ia1-input',
      type: 'input-box' as const,
      content: '**Compute the area.** \u270d\ufe0f',
      exercise: {
        question: 'Find the area enclosed by $y = x^2 - 1$ and $y = 3$.\n\n(Enter a fraction as a/b.)',
        correctAnswer: '32/3',
        acceptableAnswers: ['32/3'],
        hints: [
          'Find intersections: $x^2-1 = 3 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$.',
          'Top: $y=3$, bottom: $y=x^2-1$.',
          '$\\int_{-2}^{2}(3-(x^2-1))dx = \\int_{-2}^{2}(4-x^2)dx$.'
        ],
        explanation: '$\\int_{-2}^{2}(4-x^2)dx = [4x-\\frac{x^3}{3}]_{-2}^{2} = (8-\\frac{8}{3})-(-8+\\frac{8}{3}) = \\frac{16}{3}+\\frac{16}{3} = \\frac{32}{3}$.'
      }
    },
    {
      id: 'ia1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

| Concept | Formula |
|:---:|:---:|
| Area (horizontal) | $\\int_a^b [\\text{top}-\\text{bottom}]\\,dx$ |
| Area (vertical) | $\\int_c^d [\\text{right}-\\text{left}]\\,dy$ |
| Crossing curves | Split at intersection points |

> **Up Next:** Part 2 \u2014 Cross-Sectional Volumes.`
    }
  ]
};
