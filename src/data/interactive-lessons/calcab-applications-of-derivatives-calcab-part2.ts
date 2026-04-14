export const calcabAppsDerivativesPart2Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps2-intro',
      type: 'text' as const,
      content: `# 📈 Applications of Derivatives

**Part 2 of 7 — Second Derivative & Concavity**

### Concavity

$$\\boxed{f''(x) > 0 \\Rightarrow \\text{Concave UP (cup)} \\qquad f''(x) < 0 \\Rightarrow \\text{Concave DOWN (cap)}}$$

| $f''(x)$ | Concavity | Shape | Tangent Lines |
|:---:|:---:|:---:|:---:|
| $f''(x) > 0$ | Concave up | $\\cup$ | Lie BELOW the curve |
| $f''(x) < 0$ | Concave down | $\\cap$ | Lie ABOVE the curve |

> **Key Concept:** Concavity tells you how the SLOPE is changing. Concave up means the slope is increasing (even if the function is decreasing). Concave down means the slope is decreasing.`
    },
    {
      id: 'apps2-inflection',
      type: 'text' as const,
      content: `### Inflection Points

An **inflection point** is where concavity **changes**.

$$\\boxed{\\text{Inflection point at } x = c \\iff f'' \\text{ changes sign at } x = c}$$

> **Warning:** $f''(c) = 0$ does NOT guarantee an inflection point! You must verify the sign change. Example: $f(x) = x^4$ has $f''(0) = 0$ but NO inflection point (concave up on both sides).

### Second Derivative Test for Extrema

At a critical point where $f'(c) = 0$:

| $f''(c)$ | Conclusion | Reason |
|:---:|:---:|:---:|
| $f''(c) > 0$ | **Local minimum** | Concave up = valley |
| $f''(c) < 0$ | **Local maximum** | Concave down = hill |
| $f''(c) = 0$ | **Inconclusive** | Use First Derivative Test |

### Worked Example

$f(x) = x^3 - 6x^2 + 9x + 1$

| Derivative | Expression | Critical Points |
|:---:|:---:|:---:|
| $f'(x)$ | $3x^2 - 12x + 9 = 3(x-1)(x-3)$ | $x = 1, 3$ |
| $f''(x)$ | $6x - 12$ | $x = 2$ |

**Classify using Second Derivative Test:**
- $f''(1) = 6(1) - 12 = -6 < 0$ → **Local max** at $x = 1$
- $f''(3) = 6(3) - 12 = 6 > 0$ → **Local min** at $x = 3$
- $f''(2) = 0$ and sign changes ($- \\to +$) → **Inflection point** at $x = 2$`
    },
    {
      id: 'apps2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Second Derivative Analysis** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the inflection point(s) of $f(x) = x^4 - 6x^2 + 5$.',
            options: ['$x = 0$', '$x = \\pm 1$', '$x = \\pm\\sqrt{3}$', '$x = \\pm\\frac{1}{\\sqrt{3}}$'],
            correctAnswer: 1,
            explanation: '$f\'\'(x) = 12x^2 - 12 = 12(x-1)(x+1) = 0$ at $x = \\pm 1$. Sign changes at both: inflection points.'
          },
          {
            question: 'Use the Second Derivative Test: $f(x) = x^3 - 12x$. Classify $x = 2$.',
            options: ['Local maximum', 'Local minimum', 'Inflection point', 'Inconclusive'],
            correctAnswer: 1,
            explanation: '$f\'(x) = 3x^2 - 12 = 0$ at $x = \\pm 2$. $f\'\'(x) = 6x$. $f\'\'(2) = 12 > 0$: local minimum.'
          },
          {
            question: 'For $g(x) = x^4$, is $x = 0$ an inflection point?',
            options: ['Yes, because $g\'\'(0) = 0$', 'No, because $g\'\'$ does not change sign', 'Yes, because $g\'(0) = 0$', 'Cannot determine'],
            correctAnswer: 1,
            explanation: '$g\'\'(x) = 12x^2 \\geq 0$ for all $x$. No sign change at $x = 0$: NOT an inflection point.'
          }
        ]
      }
    },
    {
      id: 'apps2-comparison',
      type: 'text' as const,
      content: `### First vs Second Derivative Test

| Feature | First Derivative Test | Second Derivative Test |
|:---:|:---:|:---:|
| What you check | Sign change of $f'$ | Sign of $f''$ at critical point |
| Requires | Sign chart around $c$ | Just $f''(c)$ |
| Always works? | **Yes** | No ($f''(c) = 0$ is inconclusive) |
| Finds inflection points? | No | Yes (as a byproduct) |
| AP recommendation | Use for justifications | Use when $f''$ is easy to compute |

> **AP Tip:** On free-response questions, use the First Derivative Test for justifications — it ALWAYS gives a definitive answer. The Second Derivative Test is faster for multiple-choice when $f''$ is easy to compute.

### Connecting $f$, $f'$, and $f''$

| If $f'$ is... | Then $f$ is... |
|:---:|:---:|
| Positive | Increasing |
| Negative | Decreasing |
| Zero (with sign change) | Has local extremum |
| Increasing | Concave up ($f'' > 0$) |
| Decreasing | Concave down ($f'' < 0$) |
| Has a local extremum | $f$ has an inflection point |`
    },
    {
      id: 'apps2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Concavity & Inflection** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f\'\'(x) > 0$ for all $x$ in $(a, b)$, which MUST be true?',
            options: ['$f$ is increasing on $(a,b)$', '$f$ is concave up on $(a,b)$', '$f$ has a minimum on $(a,b)$', '$f\'(x) > 0$ on $(a,b)$'],
            correctAnswer: 1,
            explanation: '$f\'\' > 0$ means concave up. It does NOT mean $f$ is increasing or that $f\' > 0$.'
          },
          {
            question: 'At an inflection point of $f$, which is true?',
            options: ['$f\'$ must equal zero', '$f\'\'$ must equal zero', '$f\'\'$ must change sign', '$f$ must have a local extremum'],
            correctAnswer: 2,
            explanation: 'An inflection point requires a sign change in $f\'\'$. $f\'\'$ is usually zero but could also be undefined.'
          }
        ]
      }
    },
    {
      id: 'apps2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Analyze $f(x) = x^3 - 3x^2 + 2$** 🔍\n\n$f\'(x) = 3x^2 - 6x = 3x(x-2)$, $f\'\'(x) = 6x - 6 = 6(x-1)$',
      exercise: {
        dropdowns: [
          {
            label: '$x = 0$ is a:',
            options: ['Local max', 'Local min', 'Inflection point', 'Neither'],
            correctAnswers: ['Local max'],
            hints: ['$f\'(0) = 0$ and $f\'\'(0) = -6 < 0$.'],
            explanation: 'Second Derivative Test: $f\'\'(0) = -6 < 0$ means concave down → local maximum.'
          },
          {
            label: '$x = 1$ is a:',
            options: ['Local max', 'Local min', 'Inflection point', 'Neither'],
            correctAnswers: ['Inflection point'],
            hints: ['$f\'\'(1) = 0$ and $f\'\'$ changes sign ($- \\to +$) at $x = 1$.'],
            explanation: '$f\'\'$ changes from negative to positive at $x = 1$: inflection point.'
          },
          {
            label: '$x = 2$ is a:',
            options: ['Local max', 'Local min', 'Inflection point', 'Neither'],
            correctAnswers: ['Local min'],
            hints: ['$f\'(2) = 0$ and $f\'\'(2) = 6 > 0$.'],
            explanation: 'Second Derivative Test: $f\'\'(2) = 6 > 0$ means concave up → local minimum.'
          }
        ]
      }
    },
    {
      id: 'apps2-input',
      type: 'input-box' as const,
      content: '**Find the inflection point.** ✍️',
      exercise: {
        question: 'For $f(x) = x^3 - 6x^2 + 9x + 1$, at what $x$-value does the inflection point occur?',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2.0'],
        hints: [
          'Find $f\'\'(x)$ and set it equal to zero.',
          '$f\'\'(x) = 6x - 12 = 0$.',
          'Verify that $f\'\'$ changes sign at this value.'
        ],
        explanation: '$f\'\'(x) = 6x - 12 = 0 \\Rightarrow x = 2$.\\n\\nFor $x < 2$: $f\'\'(x) < 0$. For $x > 2$: $f\'\'(x) > 0$. Sign change confirmed: inflection at $x = 2$.'
      }
    },
    {
      id: 'apps2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

$$\\boxed{f'' > 0: \\text{ concave up} \\qquad f'' < 0: \\text{ concave down}}$$

| Concept | Key Rule |
|:---:|:---:|
| Concave up | $f'' > 0$, tangent lines below curve |
| Concave down | $f'' < 0$, tangent lines above curve |
| Inflection point | $f''$ changes sign |
| 2nd Deriv Test (min) | $f'(c) = 0$ and $f''(c) > 0$ |
| 2nd Deriv Test (max) | $f'(c) = 0$ and $f''(c) < 0$ |
| Inconclusive | $f'(c) = 0$ and $f''(c) = 0$ |

> **Up Next:** Part 3 — Absolute (Global) Extrema.`
    }
  ]
};
