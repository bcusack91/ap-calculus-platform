export const calcabAppsDerivativesPart2Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps2-intro',
      type: 'text' as const,
      content: `# Applications of Derivatives

**Part 2 of 7 — Second Derivative & Concavity**

### Concavity

| $f''(x)$ | Concavity |
|----------|-----------|
| $f''(x) > 0$ | **Concave up** (opens upward, "cup") |
| $f''(x) < 0$ | **Concave down** (opens downward, "cap") |

### Inflection Points

An **inflection point** is where concavity **changes**. This occurs where $f'' = 0$ or $f''$ is undefined, AND $f''$ actually changes sign.

### Second Derivative Test

At a critical point where $f'(c) = 0$:
- If $f''(c) > 0$: **local minimum** (concave up)
- If $f''(c) < 0$: **local maximum** (concave down)
- If $f''(c) = 0$: **inconclusive** (use First Derivative Test)

### Worked Example

$f(x) = x^3 - 6x^2 + 9x + 1$

$f'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)$. Critical points: $x = 1, 3$.

$f''(x) = 6x - 12$.

- $f''(1) = -6 < 0$ → **local max** at $x = 1$
- $f''(3) = 6 > 0$ → **local min** at $x = 3$
- $f''(x) = 0$ at $x = 2$ → inflection point`
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
            explanation: '$f\'\'(x) = 12x^2 - 12 = 12(x^2-1) = 12(x-1)(x+1)$. $f\'\' = 0$ at $x = \\pm 1$. Sign changes at both, so inflection at $x = -1$ and $x = 1$.'
          },
          {
            question: 'Use the Second Derivative Test: $f(x) = x^3 - 12x$. Classify $x = 2$.',
            options: ['Local maximum', 'Local minimum', 'Inflection point', 'Inconclusive'],
            correctAnswer: 1,
            explanation: '$f\'(x) = 3x^2 - 12 = 0$ at $x = \\pm 2$. $f\'\'(x) = 6x$. $f\'\'(2) = 12 > 0$, so local minimum.'
          }
        ]
      }
    },
    {
      id: 'apps2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

1. $f'' > 0$: concave up; $f'' < 0$: concave down
2. Inflection points: where $f''$ changes sign
3. Second Derivative Test: faster than First Derivative Test when $f''(c) \\neq 0$`
    }
  ]
};
