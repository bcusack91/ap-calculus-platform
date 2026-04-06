export const calcabInverseFunctionsPart1Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv1-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 1 of 7 — Derivative of an Inverse Function**

### The Key Formula

If $f$ and $g$ are inverses ($g = f^{-1}$), then:

$$(f^{-1})'(a) = \\frac{1}{f'(f^{-1}(a))}$$

Or equivalently: if $f(b) = a$, then $(f^{-1})'(a) = \\frac{1}{f'(b)}$.

### Why It Works

If $f(g(x)) = x$, differentiate both sides:

$f'(g(x)) \cdot g'(x) = 1$

$g'(x) = \\frac{1}{f'(g(x))}$

### Worked Example

$f(x) = x^3 + x$. Find $(f^{-1})'(2)$.

We need $f(b) = 2$: $b^3 + b = 2 \implies b = 1$.

$(f^{-1})'(2) = \\frac{1}{f'(1)} = \\frac{1}{3(1)^2 + 1} = \\frac{1}{4}$`
    },
    {
      id: 'inv1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Inverse Function Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = 2x + \\cos x$ and $f(0) = 1$, find $(f^{-1})\'(1)$.',
            options: ['$\\frac{1}{2}$', '$1$', '$2$', '$\\frac{1}{3}$'],
            correctAnswer: 0,
            explanation: '$f(0) = 0 + 1 = 1$, so $f^{-1}(1) = 0$. $f\'(x) = 2 - \\sin x$. $f\'(0) = 2$. $(f^{-1})\'(1) = \\frac{1}{f\'(0)} = \\frac{1}{2}$.'
          },
          {
            question: 'If $f(3) = 7$ and $f\'(3) = 5$, find $(f^{-1})\'(7)$.',
            options: ['$\\frac{1}{5}$', '$5$', '$\\frac{1}{7}$', '$\\frac{1}{3}$'],
            correctAnswer: 0,
            explanation: '$f(3) = 7$ means $f^{-1}(7) = 3$. $(f^{-1})\'(7) = \\frac{1}{f\'(3)} = \\frac{1}{5}$.'
          }
        ]
      }
    },
    {
      id: 'inv1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. $(f^{-1})'(a) = \\frac{1}{f'(f^{-1}(a))}$
2. First find the $x$-value where $f(x) = a$
3. Then take the reciprocal of $f'$ at that point`
    }
  ]
};
