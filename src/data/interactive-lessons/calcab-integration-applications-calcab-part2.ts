export const calcabIntAppsPart2Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia2-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 2 of 7 \u2014 Cross-Sectional Volumes**

### Volume with Known Cross Sections

$$\\boxed{V = \\int_a^b A(x)\\,dx}$$

where $A(x)$ is the area of the cross section at position $x$.

### Cross-Section Area Formulas

If the **side length** (or diameter) of each cross section is $s(x) = f(x) - g(x)$:

| Shape | Area $A(x)$ | Common AP form |
|:---:|:---:|:---:|
| Square | $s^2$ | $(f(x)-g(x))^2$ |
| Semicircle | $\\frac{\\pi}{8}s^2$ | $\\frac{\\pi}{8}(f(x)-g(x))^2$ |
| Equilateral triangle | $\\frac{\\sqrt{3}}{4}s^2$ | $\\frac{\\sqrt{3}}{4}(f(x)-g(x))^2$ |
| Isosceles right triangle (leg) | $\\frac{1}{2}s^2$ | $\\frac{1}{2}(f(x)-g(x))^2$ |
| Rectangle ($h = 2s$) | $2s^2$ | $2(f(x)-g(x))^2$ |

> **Key Fact:** The shape of the cross section only affects the constant multiplier. The integral setup is always $\\int_a^b (\\text{constant}) \\cdot s^2\\,dx$.`
    },
    {
      id: 'ia2-worked',
      type: 'text' as const,
      content: `### Worked Example

**Base region:** Between $y = \\sqrt{x}$ and $y = 0$ from $x=0$ to $x=4$.

**Cross sections (perpendicular to $x$-axis) are squares.**

| Step | Work |
|:---:|:---:|
| Side length | $s(x) = \\sqrt{x} - 0 = \\sqrt{x}$ |
| Cross-section area | $A(x) = (\\sqrt{x})^2 = x$ |
| Volume integral | $V = \\int_0^4 x\\,dx$ |
| Evaluate | $[\\frac{x^2}{2}]_0^4 = 8$ |

**Same base, semicircular cross sections:**

| Step | Work |
|:---:|:---:|
| Diameter | $d = \\sqrt{x}$, radius $= \\sqrt{x}/2$ |
| Area | $\\frac{\\pi}{2}(\\sqrt{x}/2)^2 = \\frac{\\pi x}{8}$ |
| Volume | $\\int_0^4 \\frac{\\pi x}{8}dx = \\frac{\\pi}{8} \\cdot 8 = \\pi$ |

> **AP Tip:** Cross-section volumes are a favorite AP FRQ topic. Make sure you can set up the integral for any shape.`
    },
    {
      id: 'ia2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Cross-Sectional Volumes** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Base between $y = x$ and $y = x^2$ on $[0,1]$. Square cross sections perpendicular to $x$-axis. Volume:',
            options: ['$\\frac{1}{30}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{2}{15}$'],
            correctAnswer: 0,
            explanation: '$s = x-x^2$. $V = \\int_0^1(x-x^2)^2 dx = \\int_0^1(x^2-2x^3+x^4)dx = [\\frac{x^3}{3}-\\frac{x^4}{2}+\\frac{x^5}{5}]_0^1 = \\frac{1}{3}-\\frac{1}{2}+\\frac{1}{5} = \\frac{1}{30}$.'
          },
          {
            question: 'Changing the cross section from squares to equilateral triangles multiplies the volume by:',
            options: ['$\\frac{\\sqrt{3}}{4}$', '$\\frac{\\pi}{4}$', '$\\frac{1}{2}$', '$\\sqrt{3}$'],
            correctAnswer: 0,
            explanation: 'Square area: $s^2$. Equilateral triangle area: $\\frac{\\sqrt{3}}{4}s^2$. Ratio: $\\frac{\\sqrt{3}}{4}$.'
          },
          {
            question: 'Cross sections perpendicular to the $y$-axis means you integrate with respect to:',
            options: ['$y$', '$x$', 'Either', 'Neither'],
            correctAnswer: 0,
            explanation: 'Perpendicular to $y$-axis $\\Rightarrow$ slice at each $y$-value $\\Rightarrow \\int dy$.'
          }
        ]
      }
    },
    {
      id: 'ia2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Set up the volume integral.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Base between $y=0$ and $y=\\sin x$ on $[0,\\pi]$. Cross sections are squares. Volume integral:',
            options: ['$\\int_0^{\\pi} \\sin^2 x\\,dx$', '$\\int_0^{\\pi} \\sin x\\,dx$', '$\\pi \\int_0^{\\pi} \\sin^2 x\\,dx$', '$\\int_0^{\\pi} \\sqrt{\\sin x}\\,dx$'],
            correctAnswers: ['$\\int_0^{\\pi} \\sin^2 x\\,dx$'],
            hints: ['$s = \\sin x$, square area $= s^2 = \\sin^2 x$.'],
            explanation: '$V = \\int_0^{\\pi} \\sin^2 x\\,dx$.'
          },
          {
            label: 'For semicircular cross sections, the area formula uses which constant?',
            options: ['$\\pi/8$', '$\\pi/4$', '$\\pi/2$', '$\\sqrt{3}/4$'],
            correctAnswers: ['$\\pi/8$'],
            hints: ['Diameter $= s$, radius $= s/2$. $A = \\frac{1}{2}\\pi(s/2)^2 = \\frac{\\pi s^2}{8}$.'],
            explanation: '$A = \\frac{\\pi}{8}s^2$ where $s$ is the diameter of the semicircle.'
          },
          {
            label: 'Base: circle $x^2+y^2=4$. Square cross sections $\\perp$ to $x$-axis. Side length at position $x$:',
            options: ['$2\\sqrt{4-x^2}$', '$\\sqrt{4-x^2}$', '$4-x^2$', '$2x$'],
            correctAnswers: ['$2\\sqrt{4-x^2}$'],
            hints: ['Top: $y=\\sqrt{4-x^2}$, bottom: $y=-\\sqrt{4-x^2}$. Side = top $-$ bottom.'],
            explanation: 'Side $= \\sqrt{4-x^2}-(-\\sqrt{4-x^2}) = 2\\sqrt{4-x^2}$.'
          }
        ]
      }
    },
    {
      id: 'ia2-input',
      type: 'input-box' as const,
      content: '**Compute the volume.** \u270d\ufe0f',
      exercise: {
        question: 'Base between $y=0$ and $y=1-x^2$ (for $-1 \\le x \\le 1$). Cross sections perpendicular to the $x$-axis are squares. Find the volume.\n\n(Enter a fraction as a/b.)',
        correctAnswer: '16/15',
        acceptableAnswers: ['16/15'],
        hints: [
          'Side length $s = 1-x^2$. Area $= (1-x^2)^2$.',
          '$V = \\int_{-1}^{1}(1-x^2)^2 dx = 2\\int_0^1(1-2x^2+x^4)dx$.',
          '$= 2[x-\\frac{2x^3}{3}+\\frac{x^5}{5}]_0^1 = 2(1-\\frac{2}{3}+\\frac{1}{5})$.'
        ],
        explanation: '$2(1-\\frac{2}{3}+\\frac{1}{5}) = 2 \\cdot \\frac{15-10+3}{15} = 2 \\cdot \\frac{8}{15} = \\frac{16}{15}$.'
      }
    },
    {
      id: 'ia2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

| Shape | Area multiplier |
|:---:|:---:|
| Square | $1 \\cdot s^2$ |
| Semicircle | $\\frac{\\pi}{8}s^2$ |
| Equilateral $\\triangle$ | $\\frac{\\sqrt{3}}{4}s^2$ |
| Isosceles right $\\triangle$ | $\\frac{1}{2}s^2$ |

> **Up Next:** Part 3 \u2014 Disk & Washer Methods.`
    }
  ]
};
