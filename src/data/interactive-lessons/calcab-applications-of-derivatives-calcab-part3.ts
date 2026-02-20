export const calcabAppsDerivativesPart3Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps3-intro',
      type: 'text' as const,
      content: `# Applications of Derivatives

**Part 3 of 7 — Absolute (Global) Extrema**

### Extreme Value Theorem (EVT)

If $f$ is continuous on a **closed interval** $[a, b]$, then $f$ attains an **absolute maximum** and **absolute minimum** on $[a, b]$.

### Candidates Test (Closed Interval Method)

1. Find all critical points in $(a, b)$
2. Evaluate $f$ at each critical point AND at the endpoints $a$ and $b$
3. The **largest** value is the absolute max; the **smallest** is the absolute min

### Worked Example

Find the absolute extrema of $f(x) = x^3 - 3x + 1$ on $[-2, 2]$.

$f'(x) = 3x^2 - 3 = 0$ → $x = \\pm 1$ (both in the interval).

| $x$ | $f(x)$ |
|-----|--------|
| $-2$ | $-8+6+1 = -1$ |
| $-1$ | $-1+3+1 = 3$ |
| $1$ | $1-3+1 = -1$ |
| $2$ | $8-6+1 = 3$ |

**Absolute max = 3** (at $x = -1$ and $x = 2$). **Absolute min = $-1$** (at $x = -2$ and $x = 1$).`
    },
    {
      id: 'apps3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Absolute Extrema** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the absolute maximum of $f(x) = -x^2 + 4x - 1$ on $[0, 5]$.',
            options: ['$3$', '$4$', '$-1$', '$-6$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = -2x + 4 = 0$ at $x = 2$. $f(0) = -1$, $f(2) = -4+8-1 = 3$, $f(5) = -25+20-1 = -6$. Absolute max = $3$ at $x = 2$.'
          },
          {
            question: 'Find the absolute minimum of $g(x) = x + \\frac{4}{x}$ on $[1, 8]$.',
            options: ['$4$', '$5$', '$8.5$', '$3$'],
            correctAnswer: 0,
            explanation: '$g\'(x) = 1 - \\frac{4}{x^2} = 0$ at $x = 2$. $g(1) = 5$, $g(2) = 4$, $g(8) = 8.5$. Absolute min = $4$ at $x = 2$.'
          }
        ]
      }
    },
    {
      id: 'apps3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

1. EVT guarantees extrema on closed intervals for continuous functions
2. **Candidates Test**: evaluate at critical points AND endpoints
3. Compare all values to find the absolute max and min`
    }
  ]
};
