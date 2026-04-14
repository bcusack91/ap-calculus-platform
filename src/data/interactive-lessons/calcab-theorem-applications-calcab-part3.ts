export const calcabTheoremsPart3Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm3-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 3 of 7 \u2014 The Extreme Value Theorem (EVT)**

### Statement

$$\\boxed{\\text{If } f \\text{ is continuous on } [a,b], \\text{ then } f \\text{ attains an absolute max and min on } [a,b]}$$

### The Closed Interval Method

| Step | Action |
|:---:|:---|
| 1 | Find all critical points: $f'(x) = 0$ or $f'(x)$ DNE |
| 2 | Evaluate $f$ at each critical point in $(a,b)$ |
| 3 | Evaluate $f$ at the endpoints $a$ and $b$ |
| 4 | The largest value is the absolute max, smallest is the absolute min |

> **Key Fact:** Absolute extrema on a closed interval can occur at critical points OR at endpoints. You must check ALL candidates.

### When Does EVT Fail?

| Situation | Problem |
|:---|:---|
| Open interval $(a,b)$ | No guaranteed max/min |
| $f$ is not continuous | May have a gap; extrema may not exist |
| $f$ on $(-\\infty, \\infty)$ | Unbounded domain |

### Worked Example

> Find the absolute extrema of $f(x) = x^3 - 3x + 1$ on $[-2, 2]$.

$f'(x) = 3x^2 - 3 = 3(x-1)(x+1) = 0$ at $x = \\pm 1$.

| $x$ | $-2$ | $-1$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $-1$ | $3$ | $-1$ | $3$ |

Absolute max $= 3$ (at $x = -1$ and $x = 2$). Absolute min $= -1$ (at $x = -2$ and $x = 1$).`
    },
    {
      id: 'thm3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 EVT** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$f(x) = x^2 - 4x + 5$ on $[0, 5]$. The absolute minimum is:',
            options: ['$1$ at $x = 2$', '$5$ at $x = 0$', '$10$ at $x = 5$', '$0$ at $x = 2$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = 2x - 4 = 0$ at $x = 2$. $f(0) = 5$, $f(2) = 1$, $f(5) = 10$. Min $= 1$.'
          },
          {
            question: 'If $f$ is continuous on $[1, 6]$, EVT guarantees:',
            options: ['$f$ attains both an absolute max and min', '$f\'(c) = 0$ at some $c$', '$f$ is differentiable', '$f$ is increasing'],
            correctAnswer: 0,
            explanation: 'EVT: continuous on closed interval $\\Rightarrow$ absolute extrema exist.'
          },
          {
            question: '$g(x) = \\frac{1}{x}$ on $(0, 2)$. Does EVT apply?',
            options: ['No \u2014 the interval is open', 'Yes \u2014 $g$ is continuous there', 'No \u2014 $g$ is not continuous at $0$', 'Yes \u2014 by IVT'],
            correctAnswer: 0,
            explanation: 'EVT requires a CLOSED interval $[a,b]$. The open interval $(0,2)$ does not satisfy this.'
          }
        ]
      }
    },
    {
      id: 'thm3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Find absolute extrema step by step.** \ud83d\udd0d\n\n$f(x) = 2x^3 - 3x^2$ on $[-1, 2]$.',
      exercise: {
        dropdowns: [
          {
            label: 'Critical points ($f\' = 0$):',
            options: ['$x = 0$ and $x = 1$', '$x = 1$ only', '$x = 0$ only', '$x = -1$ and $x = 2$'],
            correctAnswers: ['$x = 0$ and $x = 1$'],
            hints: ['$f\'(x) = 6x^2 - 6x = 6x(x-1) = 0$.'],
            explanation: '$6x(x-1) = 0$ at $x = 0$ and $x = 1$.'
          },
          {
            label: 'Evaluate: $f(-1), f(0), f(1), f(2)$:',
            options: ['$-5, 0, -1, 4$', '$-1, 0, 1, 4$', '$-5, 0, 1, 4$', '$-3, 0, -1, 2$'],
            correctAnswers: ['$-5, 0, -1, 4$'],
            hints: ['$f(-1) = -2-3 = -5$. $f(0)=0$. $f(1) = 2-3=-1$. $f(2)=16-12=4$.'],
            explanation: '$f(-1)=-5$, $f(0)=0$, $f(1)=-1$, $f(2)=4$.'
          },
          {
            label: 'Absolute max and min:',
            options: ['Max $= 4$ at $x=2$, Min $= -5$ at $x=-1$', 'Max $= 0$, Min $= -5$', 'Max $= 4$, Min $= -1$', 'Max $= 4$, Min $= 0$'],
            correctAnswers: ['Max $= 4$ at $x=2$, Min $= -5$ at $x=-1$'],
            hints: ['Largest of $\\{-5, 0, -1, 4\\}$ and smallest.'],
            explanation: 'Absolute max $= 4$ at $x = 2$. Absolute min $= -5$ at $x = -1$.'
          }
        ]
      }
    },
    {
      id: 'thm3-input',
      type: 'input-box' as const,
      content: '**Closed interval method.** \u270d\ufe0f',
      exercise: {
        question: '$f(x) = x^4 - 8x^2 + 12$ on $[-3, 3]$. Find the absolute minimum.\n\n(Enter an integer.)',
        correctAnswer: '-4',
        acceptableAnswers: ['-4'],
        hints: [
          '$f\'(x) = 4x^3 - 16x = 4x(x^2 - 4) = 0$ at $x = 0, \\pm 2$.',
          '$f(-3) = 81 - 72 + 12 = 21$.',
          '$f(-2) = 16 - 32 + 12 = -4$. $f(0) = 12$. $f(2) = -4$. $f(3) = 21$.',
          'Min $= -4$ at $x = \\pm 2$.'
        ],
        explanation: 'Critical: $x = 0, \\pm 2$. Values: $f(\\pm 3)=21$, $f(0)=12$, $f(\\pm 2)=-4$. Absolute min $= -4$.'
      }
    },
    {
      id: 'thm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

- EVT: continuous on $[a,b]$ $\\Rightarrow$ absolute max and min exist
- Use the closed interval method: check critical points AND endpoints
- EVT requires a **closed** interval and **continuity**
- Extrema can occur at endpoints!`
    }
  ]
};
