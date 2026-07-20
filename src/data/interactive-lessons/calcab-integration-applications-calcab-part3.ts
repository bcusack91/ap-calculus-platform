export const calcabIntAppsPart3Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia3-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 3 of 7 \u2014 Disk & Washer Methods**

### Disk Method (Solid with No Hole)

$$\\boxed{V = \\pi\\int_a^b [R(x)]^2\\,dx}$$

**Use when:** The region is rotated around an axis and there is no gap between the region and the axis.

### Washer Method (Solid with a Hole)

$$\\boxed{V = \\pi\\int_a^b \\left([R(x)]^2 - [r(x)]^2\\right)dx}$$

| Variable | Meaning |
|:---:|:---:|
| $R(x)$ | Outer radius (farther curve from axis) |
| $r(x)$ | Inner radius (closer curve to axis) |

> **Key Fact:** NEVER subtract the radii first. It\u2019s $R^2 - r^2$, NOT $(R-r)^2$.`
    },
    {
      id: 'ia3-rotation',
      type: 'text' as const,
      content: `### Rotation About Different Lines

| Axis of Rotation | Radius Setup |
|:---:|:---:|
| $x$-axis ($y=0$) | $R = f(x)$ |
| $y$-axis ($x=0$) | $R = f(y)$, integrate $dy$ |
| $y = k$ (horizontal) | $R = |f(x)-k|$ |
| $x = h$ (vertical) | $R = |f(y)-h|$, integrate $dy$ |

### Worked Example

Rotate $y = x^2$ about the $x$-axis from $x=0$ to $x=2$:

| Step | Work |
|:---:|:---:|
| Radius | $R = x^2$ |
| Integral | $V = \\pi\\int_0^2 (x^2)^2 dx = \\pi\\int_0^2 x^4\\,dx$ |
| Evaluate | $\\pi[\\frac{x^5}{5}]_0^2 = \\frac{32\\pi}{5}$ |

### Washer Example

Rotate region between $y=x$ and $y=x^2$ about $x$-axis on $[0,1]$:

$R = x$ (outer), $r = x^2$ (inner).

$V = \\pi\\int_0^1(x^2-x^4)dx = \\pi[\\frac{x^3}{3}-\\frac{x^5}{5}]_0^1 = \\pi(\\frac{1}{3}-\\frac{1}{5}) = \\frac{2\\pi}{15}$`
    },
    {
      id: 'ia3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Disk & Washer** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Rotate $y = \\sqrt{x}$ about the $x$-axis from $x=0$ to $x=4$. Volume:',
            options: ['$8\\pi$', '$4\\pi$', '$\\frac{32\\pi}{5}$', '$16\\pi$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^4(\\sqrt{x})^2 dx = \\pi\\int_0^4 x\\,dx = \\pi[\\frac{x^2}{2}]_0^4 = 8\\pi$.'
          },
          {
            question: 'Rotate $y = x^2$ about $y = 4$ from $x=0$ to $x=2$. The outer radius is:',
            options: ['$4-x^2$', '$x^2-4$', '$4$', '$x^2$'],
            correctAnswer: 0,
            explanation: 'Distance from curve to axis: $R = 4 - x^2$ (axis is above the curve).'
          },
          {
            question: 'The washer method is needed instead of disk when:',
            options: ['There is a gap between the region and the axis of rotation', 'The function is negative', 'Rotating about the $y$-axis', 'The region is unbounded'],
            correctAnswer: 0,
            explanation: 'A gap creates a hole in the solid, requiring outer minus inner radius: washer method.'
          }
        ]
      }
    },
    {
      id: 'ia3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the setup.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Rotate $y = x^2$ and $y = 4$ about $y = 4$. Method:',
            options: ['Disk: $R = 4-x^2$', 'Washer: $R = 4, r = x^2$', 'Disk: $R = x^2$', 'Washer: $R = 4-x^2, r = 0$'],
            correctAnswers: ['Disk: $R = 4-x^2$'],
            hints: ['The region touches the axis $y=4$, so no hole: disk method.'],
            explanation: 'Rotating about $y=4$: radius $= 4-x^2$. No gap: disk method.'
          },
          {
            label: 'Rotate $y = x$ and $y = x^2$ about $y = -1$ on $[0,1]$. Outer radius:',
            options: ['$x+1$', '$x^2+1$', '$x-(-1) = x+1$', '$x$'],
            correctAnswers: ['$x-(-1) = x+1$'],
            hints: ['Outer = farther curve from $y=-1$. On $[0,1]$: $x \\ge x^2$, so $x$ is farther from $y=-1$.'],
            explanation: '$R = x-(-1) = x+1$. $r = x^2+1$.'
          },
          {
            label: 'To rotate about $x = 3$, you should integrate with respect to:',
            options: ['$x$', '$y$ (expressing curves as $x = f(y)$)', 'Either works', '$t$'],
            correctAnswers: ['$y$ (expressing curves as $x = f(y)$)'],
            hints: ['Vertical axis of rotation: use horizontal slices ($dy$).'],
            explanation: 'Rotating about a vertical line: integrate with respect to $y$ with radii $= |f(y)-3|$.'
          }
        ]
      }
    },
    {
      id: 'ia3-input',
      type: 'input-box' as const,
      content: '**Compute the volume.** \u270d\ufe0f',
      exercise: {
        question: 'Rotate $y = \\sqrt{x}$ about the $y$-axis from $y=0$ to $y=2$ (disk method in terms of $y$). Express the volume as $\\frac{a\\pi}{b}$. Find $a+b$.\n\n(Enter an integer.)',
        correctAnswer: '37',
        acceptableAnswers: ['37'],
        hints: [
          '$x = y^2$. Disk: $R = y^2$.',
          '$V = \\pi\\int_0^2 (y^2)^2 dy = \\pi\\int_0^2 y^4\\,dy$.',
          '$= \\pi[\\frac{y^5}{5}]_0^2 = \\frac{32\\pi}{5}$. So $a=32, b=5$.'
        ],
        explanation: '$V = \\frac{32\\pi}{5}$. $a+b = 32+5 = 37$.'
      }
    },
    {
      id: 'ia3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

| Method | When to Use | Formula |
|:---:|:---:|:---:|
| Disk | No gap from axis | $\\pi\\int R^2\\,dx$ |
| Washer | Gap creates hole | $\\pi\\int (R^2-r^2)\\,dx$ |

> **Up Next:** Part 4 \u2014 Riemann Sums & Trapezoidal Rule.`
    }
  ]
};
