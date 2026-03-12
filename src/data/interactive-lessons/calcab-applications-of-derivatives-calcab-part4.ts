export const calcabAppsDerivativesPart4Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps4-intro',
      type: 'text' as const,
      content: `# Applications of Derivatives

**Part 4 of 7 — Curve Sketching**

### Complete Curve Sketching Procedure

1. **Domain** of $f$
2. **Intercepts**: set $y = 0$ (x-intercepts) and $x = 0$ (y-intercept)
3. **Symmetry**: even ($f(-x) = f(x)$) or odd ($f(-x) = -f(x)$)
4. **First derivative**: critical points, increasing/decreasing, local extrema
5. **Second derivative**: concavity, inflection points
6. **End behavior**: $\\lim_{x \\to \\pm\\infty} f(x)$
7. **Asymptotes** (if any)

### Quick Example

$f(x) = x^4 - 4x^3$

- $f'(x) = 4x^3 - 12x^2 = 4x^2(x-3)$
  - Critical points: $x = 0, 3$
  - Decreasing on $(-\\infty, 3)$, increasing on $(3, \\infty)$
  - Local min at $x = 3$: $f(3) = 81 - 108 = -27$

- $f''(x) = 12x^2 - 24x = 12x(x-2)$
  - Inflection at $x = 0$ and $x = 2$
  - Concave up on $(-\\infty, 0)$ and $(2, \\infty)$
  - Concave down on $(0, 2)$`
    },
    {
      id: 'apps4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Curve Sketching from Derivatives** 🎯\n\nGiven $f\'(x) = (x-1)^2(x-4)$:',
      exercise: {
        questions: [
          {
            question: 'Where does $f$ have a local minimum?',
            options: ['$x = 1$', '$x = 4$', '$x = 1$ and $x = 4$', 'No local minimum'],
            correctAnswer: 1,
            explanation: '$f\' = 0$ at $x = 1$ and $x = 4$. At $x = 1$: $(x-1)^2$ is always $\\geq 0$, and $(x-4)$ is negative on both sides. So $f\' < 0$ on both sides of $x=1$ — no sign change, not a min. At $x = 4$: $f\'$ changes from $-$ to $+$, so local min at $x = 4$.'
          },
          {
            question: 'How many inflection points does $f$ have?',
            options: ['$0$', '$1$', '$2$', '$3$'],
            correctAnswer: 1,
            explanation: '$f\'(x) = (x-1)^2(x-4) = x^3 - 6x^2 + 9x - 4$. $f\'\'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)$. Sign changes at $x = 1$ and $x = 3$, giving 2 inflection points. Actually, $f\'\'$ changes sign at both $x=1$ and $x=3$, so there are 2 inflection points.'
          }
        ]
      }
    },
    {
      id: 'apps4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

1. A systematic approach using both $f'$ and $f''$ gives a complete picture
2. From a graph of $f'$, you can deduce everything about $f$'s shape
3. This is a frequent AP free-response topic`
    }
  ]
};
