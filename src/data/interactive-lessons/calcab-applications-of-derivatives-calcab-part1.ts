export const calcabAppsDerivativesPart1Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps1-intro',
      type: 'text' as const,
      content: `# Applications of Derivatives

**Part 1 of 7 — Critical Points & Increasing/Decreasing**

### Critical Points

A **critical point** of $f$ occurs where:
- $f'(x) = 0$, or
- $f'(x)$ is undefined (but $f(x)$ exists)

### First Derivative Test for Increasing/Decreasing

| $f'(x)$ | Behavior of $f$ |
|---------|----------------|
| $f'(x) > 0$ | $f$ is **increasing** |
| $f'(x) < 0$ | $f$ is **decreasing** |

### Worked Example

Find where $f(x) = x^3 - 3x + 1$ is increasing and decreasing.

$f'(x) = 3x^2 - 3 = 3(x+1)(x-1)$

Critical points: $x = -1$ and $x = 1$.

| Interval | $f'(x)$ | Behavior |
|----------|---------|----------|
| $(-\\infty, -1)$ | $+$ | Increasing |
| $(-1, 1)$ | $-$ | Decreasing |
| $(1, \\infty)$ | $+$ | Increasing |`
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
            explanation: '$g\'(x) = e^{-x} - xe^{-x} = e^{-x}(1-x)$. Since $e^{-x} > 0$ always, the sign depends on $(1-x)$. $g\' > 0$ when $x < 1$, so increasing on $(-\\infty, 1)$.'
          }
        ]
      }
    },
    {
      id: 'apps1-text2',
      type: 'text' as const,
      content: `### First Derivative Test for Local Extrema

At a critical point $c$:

| Sign change of $f'$ | Conclusion |
|---------------------|------------|
| $+ \\to -$ | **Local maximum** at $x = c$ |
| $- \\to +$ | **Local minimum** at $x = c$ |
| No sign change | **Neither** (e.g., inflection point) |

### Example (continued)

For $f(x) = x^3 - 3x + 1$:
- At $x = -1$: $f'$ changes from $+$ to $-$ → **local max** at $f(-1) = 3$
- At $x = 1$: $f'$ changes from $-$ to $+$ → **local min** at $f(1) = -1$`
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
            explanation: '$f\'(x) = 4x^2(x-3)$. For $x < 0$: $f\' < 0$. For $0 < x < 3$: $f\' < 0$. No sign change at $x = 0$, so neither max nor min.'
          },
          {
            question: 'For $f(x) = x^4 - 4x^3$, classify $x = 3$.',
            options: ['Local maximum', 'Local minimum', 'Neither', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'For $0 < x < 3$: $f\' < 0$. For $x > 3$: $f\' > 0$. Sign change $- \\to +$ means local minimum at $x = 3$.'
          }
        ]
      }
    },
    {
      id: 'apps1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

1. Critical points occur where $f' = 0$ or $f'$ is undefined
2. $f' > 0$ → increasing, $f' < 0$ → decreasing
3. First Derivative Test: sign change determines max/min/neither`
    }
  ]
};
