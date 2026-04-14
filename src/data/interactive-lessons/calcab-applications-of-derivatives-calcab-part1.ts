export const calcabAppsDerivativesPart1Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps1-intro',
      type: 'text' as const,
      content: `# 📈 Applications of Derivatives

**Part 1 of 7 — Critical Points & Increasing/Decreasing**

| Part | Topic |
|------|-------|
| **1** | **Critical Points & Increasing/Decreasing** |
| 2 | Second Derivative & Concavity |
| 3 | Absolute (Global) Extrema |
| 4 | Curve Sketching |
| 5 | Mean Value Theorem |
| 6 | Optimization |
| 7 | Review & AP Applications |

### Critical Points

$$\\boxed{\\text{A critical point of } f \\text{ occurs where } f'(c) = 0 \\text{ or } f'(c) \\text{ is undefined (but } f(c) \\text{ exists)}}$$

> **Key Fact:** Critical points are the ONLY candidates for local extrema. If $f$ has a local max or min at $x = c$, then $c$ must be a critical point.

### Why Critical Points Matter

| Type | What Happens | Examples |
|:---:|:---:|:---:|
| $f'(c) = 0$ | Horizontal tangent line | Smooth peaks/valleys |
| $f'(c)$ undefined | Cusp, corner, or vertical tangent | $|x|$ at $x=0$, $x^{2/3}$ at $x=0$ |
| Not a critical point | $f$ cannot have a local extremum | Guaranteed by Fermat's Theorem |`
    },
    {
      id: 'apps1-incrdecr',
      type: 'text' as const,
      content: `### First Derivative Test for Increasing/Decreasing

$$\\boxed{f'(x) > 0 \\Rightarrow f \\text{ increasing} \\qquad f'(x) < 0 \\Rightarrow f \\text{ decreasing}}$$

### Worked Example

Find where $f(x) = x^3 - 3x + 1$ is increasing and decreasing.

$f'(x) = 3x^2 - 3 = 3(x+1)(x-1)$

Critical points: $x = -1$ and $x = 1$.

| Interval | Test Value | $f'(x)$ | Behavior |
|:---:|:---:|:---:|:---:|
| $(-\\infty, -1)$ | $x = -2$ | $3(4-1) = 9 > 0$ | **Increasing** |
| $(-1, 1)$ | $x = 0$ | $3(0-1) = -3 < 0$ | **Decreasing** |
| $(1, \\infty)$ | $x = 2$ | $3(4-1) = 9 > 0$ | **Increasing** |

> **AP Tip:** Always use a **sign chart** or **number line** to organize your analysis. Pick a test value in each interval — don't just guess the sign.`
    },
    {
      id: 'apps1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Critical Points** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the critical points of $f(x) = x^4 - 4x^3$.',
            options: ['$x = 0$ only', '$x = 3$ only', '$x = 0$ and $x = 3$', '$x = 0, 1, 3$'],
            correctAnswer: 2,
            explanation: '$f\'(x) = 4x^3 - 12x^2 = 4x^2(x - 3) = 0$. Solutions: $x = 0$ and $x = 3$.'
          },
          {
            question: 'On what intervals is $g(x) = xe^{-x}$ increasing?',
            options: ['$(-\\infty, 1)$', '$(1, \\infty)$', '$(-\\infty, 0)$', '$(0, 1)$'],
            correctAnswer: 0,
            explanation: '$g\'(x) = e^{-x}(1-x)$. Since $e^{-x} > 0$ always, $g\' > 0$ when $x < 1$. Increasing on $(-\\infty, 1)$.'
          },
          {
            question: 'How many critical points does $h(x) = \\sin(x)$ have on $[0, 2\\pi]$?',
            options: ['1', '2', '3', '4'],
            correctAnswer: 1,
            explanation: '$h\'(x) = \\cos(x) = 0$ at $x = \\frac{\\pi}{2}$ and $x = \\frac{3\\pi}{2}$. Two critical points.'
          }
        ]
      }
    },
    {
      id: 'apps1-fdt',
      type: 'text' as const,
      content: `### First Derivative Test for Local Extrema

At a critical point $c$:

| Sign Change of $f'$ | Conclusion | Mnemonic |
|:---:|:---:|:---:|
| $+ \\to -$ | **Local maximum** | Hill: going up then down |
| $- \\to +$ | **Local minimum** | Valley: going down then up |
| $+ \\to +$ or $- \\to -$ | **Neither** | No direction change |

### Complete Worked Example

For $f(x) = x^4 - 4x^3$: $f'(x) = 4x^2(x-3)$

| Interval | $4x^2$ | $(x-3)$ | $f'(x)$ |
|:---:|:---:|:---:|:---:|
| $x < 0$ | $+$ | $-$ | $-$ |
| $0 < x < 3$ | $+$ | $-$ | $-$ |
| $x > 3$ | $+$ | $+$ | $+$ |

- At $x = 0$: $f'$ stays negative ($- \\to -$) → **Neither** max nor min
- At $x = 3$: $f'$ changes $- \\to +$ → **Local minimum** at $f(3) = 81 - 108 = -27$

> **Key Concept:** A critical point where $f' = 0$ does NOT guarantee a local extremum. You must verify with a sign change analysis.`
    },
    {
      id: 'apps1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Classify Critical Points** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $f(x) = x^4 - 4x^3$, classify $x = 0$.',
            options: ['Local maximum', 'Local minimum', 'Neither', 'Cannot determine'],
            correctAnswer: 2,
            explanation: '$f\'(x) = 4x^2(x-3)$. No sign change at $x = 0$ ($-$ on both sides), so neither.'
          },
          {
            question: 'For $f(x) = x^4 - 4x^3$, classify $x = 3$.',
            options: ['Local maximum', 'Local minimum', 'Neither', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'Sign change $- \\to +$ at $x = 3$ means local minimum.'
          },
          {
            question: 'If $f\'(2) = 0$ and $f\'$ changes from positive to negative at $x = 2$, then $x = 2$ is a:',
            options: ['Local minimum', 'Local maximum', 'Inflection point', 'Absolute maximum'],
            correctAnswer: 1,
            explanation: '$+ \\to -$ sign change means the function goes from increasing to decreasing: local maximum.'
          }
        ]
      }
    },
    {
      id: 'apps1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Sign chart analysis** 🔍\n\nFor $f(x) = x^3 - 12x$, $f\'(x) = 3(x-2)(x+2)$. Classify each critical point.',
      exercise: {
        dropdowns: [
          {
            label: 'At $x = -2$, $f$ has a:',
            options: ['Local maximum', 'Local minimum', 'Neither', 'Inflection point'],
            correctAnswers: ['Local maximum'],
            hints: ['For $x < -2$: both factors negative → product positive. For $-2 < x < 2$: one negative → product negative.'],
            explanation: '$f\'$ goes from $+$ to $-$ at $x = -2$: local maximum. $f(-2) = -8 + 24 = 16$.'
          },
          {
            label: 'At $x = 2$, $f$ has a:',
            options: ['Local maximum', 'Local minimum', 'Neither', 'Inflection point'],
            correctAnswers: ['Local minimum'],
            hints: ['For $-2 < x < 2$: $f\' < 0$. For $x > 2$: $f\' > 0$.'],
            explanation: '$f\'$ goes from $-$ to $+$ at $x = 2$: local minimum. $f(2) = 8 - 24 = -16$.'
          },
          {
            label: 'The local max value is:',
            options: ['$16$', '$-16$', '$0$', '$12$'],
            correctAnswers: ['$16$'],
            hints: ['$f(-2) = (-2)^3 - 12(-2) = -8 + 24$.'],
            explanation: '$f(-2) = -8 + 24 = 16$.'
          }
        ]
      }
    },
    {
      id: 'apps1-input',
      type: 'input-box' as const,
      content: '**Find the critical points.** ✍️',
      exercise: {
        question: 'How many critical points does $f(x) = 2x^3 - 9x^2 + 12x - 4$ have?',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2.0'],
        hints: [
          'Find $f\'(x)$ and set it equal to zero.',
          '$f\'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2)$.',
          'Factor: $6(x-1)(x-2) = 0$.'
        ],
        explanation: '$f\'(x) = 6x^2 - 18x + 12 = 6(x-1)(x-2) = 0$.\\n\\nCritical points at $x = 1$ and $x = 2$. That is 2 critical points.'
      }
    },
    {
      id: 'apps1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

$$\\boxed{f'(c) = 0 \\text{ or } f'(c) \\text{ undefined} \\Rightarrow c \\text{ is a critical point}}$$

| Concept | Key Fact |
|:---:|:---:|
| Critical points | Where $f' = 0$ or $f'$ DNE |
| Increasing | $f' > 0$ on the interval |
| Decreasing | $f' < 0$ on the interval |
| Local max | $f'$ changes $+ \\to -$ |
| Local min | $f'$ changes $- \\to +$ |
| Neither | No sign change |

> **Up Next:** Part 2 — Second Derivative & Concavity.`
    }
  ]
};
