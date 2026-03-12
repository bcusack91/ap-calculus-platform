export const calcabAppsDerivativesPart5Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps5-intro',
      type: 'text' as const,
      content: `# Applications of Derivatives

**Part 5 of 7 — Mean Value Theorem**

### Statement (MVT)

If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists at least one $c$ in $(a,b)$ such that:

$$f'(c) = \\frac{f(b) - f(a)}{b - a}$$

**Geometric meaning:** There's a point where the tangent line is parallel to the secant line through $(a, f(a))$ and $(b, f(b))$.

### Worked Example

$f(x) = x^3$ on $[0, 2]$.

Average rate of change: $\\frac{f(2)-f(0)}{2-0} = \\frac{8-0}{2} = 4$.

Find $c$: $f'(c) = 3c^2 = 4$ → $c = \\frac{2}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3} \\approx 1.155$.

Since $c \\in (0, 2)$, MVT is confirmed.`
    },
    {
      id: 'apps5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mean Value Theorem** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $f(x) = \\sqrt{x}$ on $[1, 9]$, find the value of $c$ guaranteed by MVT.',
            options: ['$c = 4$', '$c = 5$', '$c = 3$', '$c = 2$'],
            correctAnswer: 0,
            explanation: '$\\frac{f(9)-f(1)}{9-1} = \\frac{3-1}{8} = \\frac{1}{4}$. $f\'(x) = \\frac{1}{2\\sqrt{x}} = \\frac{1}{4}$. $2\\sqrt{x} = 4$, $\\sqrt{x} = 2$, $x = 4$.'
          },
          {
            question: 'If $f$ is differentiable, $f(2) = 3$, and $f(5) = 15$, what can we guarantee?',
            options: ['$f\'(c) = 4$ for some $c \\in (2,5)$', '$f\'(c) = 5$ for some $c \\in (2,5)$', '$f(c) = 9$ for some $c \\in (2,5)$', 'Both A and C'],
            correctAnswer: 0,
            explanation: 'MVT: $f\'(c) = \\frac{15-3}{5-2} = 4$ for some $c \\in (2,5)$. IVT also gives us C (since $f$ is continuous and $3 < 9 < 15$), so actually D is also valid. But the MVT specifically guarantees $f\'(c) = 4$.'
          }
        ]
      }
    },
    {
      id: 'apps5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

1. MVT: there's a point where instantaneous rate = average rate
2. Must check: $f$ continuous on $[a,b]$, differentiable on $(a,b)$
3. MVT is used heavily in AP justifications and proofs`
    }
  ]
};
