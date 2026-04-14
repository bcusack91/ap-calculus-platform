export const calcabVolumesPart2Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol2-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 2 of 7 \u2014 The Washer Method**

### When There\u2019s a Hole

When the region does **not** touch the axis of rotation, each cross-section is a **washer** (ring):

$$\\boxed{V = \\pi\\int_a^b\\left([R(x)]^2 - [r(x)]^2\\right)dx}$$

| Term | Meaning |
|:---:|:---:|
| $R(x)$ | **Outer** radius (curve farther from axis) |
| $r(x)$ | **Inner** radius (curve closer to axis) |

> **Key Fact:** NEVER subtract radii first! It\u2019s $R^2 - r^2$, NOT $(R-r)^2$. This is the most common washer mistake.

### Worked Example

> Region between $y = x$ and $y = x^2$ on $[0,1]$, rotated about $x$-axis.

Outer: $R = x$ (farther from axis). Inner: $r = x^2$ (closer).

$$V = \\pi\\int_0^1(x^2 - x^4)\\,dx = \\pi\\left[\\frac{x^3}{3}-\\frac{x^5}{5}\\right]_0^1 = \\pi\\left(\\frac{1}{3}-\\frac{1}{5}\\right) = \\boxed{\\frac{2\\pi}{15}}$$

### Disk vs Washer

| Feature | Disk | Washer |
|:---:|:---:|:---:|
| Region touches axis? | Yes | No |
| Cross-section | Full circle | Ring (annulus) |
| Formula | $\\pi\\int R^2$ | $\\pi\\int(R^2-r^2)$ |
| Inner radius | $r = 0$ | $r \\neq 0$ |`
    },
    {
      id: 'vol2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Washer Method** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Region between $y = \\sqrt{x}$ and $y = x$ rotated about $x$-axis. Volume:',
            options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{3}$', '$\\frac{2\\pi}{3}$', '$\\frac{\\pi}{2}$'],
            correctAnswer: 0,
            explanation: '$R = \\sqrt{x}$, $r = x$ on $[0,1]$. $V = \\pi\\int_0^1(x-x^2)\\,dx = \\pi(\\frac{1}{2}-\\frac{1}{3}) = \\frac{\\pi}{6}$.'
          },
          {
            question: 'Region between $y = 4-x^2$ and $y = 0$ rotated about $x$-axis. This is a:',
            options: ['Disk problem ($r = 0$)', 'Washer problem', 'Cross-section problem', 'Shell method problem'],
            correctAnswer: 0,
            explanation: 'The region touches the $x$-axis ($y = 0$), so no hole. Just a disk.'
          },
          {
            question: 'Region between $y = 2$ and $y = x^2$ on $[-\\sqrt{2}, \\sqrt{2}]$ about $x$-axis. Outer radius:',
            options: ['$R = 2$', '$R = x^2$', '$R = 2-x^2$', '$R = x^2-2$'],
            correctAnswer: 0,
            explanation: '$y=2$ is farther from $x$-axis. $R = 2$, $r = x^2$.'
          }
        ]
      }
    },
    {
      id: 'vol2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify each setup.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Between $y=1$ and $y=3$ about $x$-axis. Inner radius is:',
            options: ['$r = 1$', '$r = 3$', '$r = 2$', '$r = 0$'],
            correctAnswers: ['$r = 1$'],
            hints: ['Which line is closer to the $x$-axis?'],
            explanation: '$y=1$ is closer to the axis. $r=1$, $R=3$.'
          },
          {
            label: '$R^2 - r^2$ vs $(R-r)^2$: the difference matters because:',
            options: ['$R^2-r^2 \\neq (R-r)^2$ in general', 'They are the same', 'One gives negative volume', 'The $\\pi$ cancels'],
            correctAnswers: ['$R^2-r^2 \\neq (R-r)^2$ in general'],
            hints: ['$(R-r)^2 = R^2-2Rr+r^2$. Compare with $R^2-r^2$.'],
            explanation: '$(R-r)^2$ drops the $2Rr$ cross term and changes the sign on $r^2$. They are NOT equal.'
          },
          {
            label: 'Rotate region between $y=e^x$ and $y=1$ ($x \\in [0,1]$). Method:',
            options: ['Washer (gap between region and axis possible, but $y=1$ sits above axis)', 'Disk', 'Cross-section', 'Cannot determine'],
            correctAnswers: ['Washer (gap between region and axis possible, but $y=1$ sits above axis)'],
            hints: ['The inner boundary $y=1$ does not touch the $x$-axis.'],
            explanation: 'Washer: outer $R=e^x$, inner $r=1$.'
          }
        ]
      }
    },
    {
      id: 'vol2-input',
      type: 'input-box' as const,
      content: '**Calculate.** \u270d\ufe0f',
      exercise: {
        question: 'Region between $y=4$ and $y=x^2$ rotated about the $x$-axis. Volume $= \\frac{a\\pi}{b}$. Find $a+b$ where $\\frac{a}{b}$ is in lowest terms.\n\n(Enter an integer.)',
        correctAnswer: '261',
        acceptableAnswers: ['261'],
        hints: [
          'Intersect at $x = \\pm 2$. $R=4$, $r=x^2$.',
          '$V = \\pi\\int_{-2}^2(16-x^4)\\,dx = 2\\pi\\int_0^2(16-x^4)\\,dx$.',
          '$= 2\\pi[16x-\\frac{x^5}{5}]_0^2 = 2\\pi(32-\\frac{32}{5})$.',
          '$= 2\\pi \\cdot \\frac{128}{5} = \\frac{256\\pi}{5}$. So $a=256$, $b=5$.'
        ],
        explanation: '$V = \\frac{256\\pi}{5}$. $a=256$, $b=5$, so $a+b=261$.'
      }
    },
    {
      id: 'vol2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

- **Washer method:** $V = \\pi\\int(R^2-r^2)\\,dx$
- $R$ = outer radius, $r$ = inner radius (from axis)
- NEVER square $(R-r)$ \u2014 always $R^2 - r^2$
- Disk method is a washer with $r = 0$`
    }
  ]
};
