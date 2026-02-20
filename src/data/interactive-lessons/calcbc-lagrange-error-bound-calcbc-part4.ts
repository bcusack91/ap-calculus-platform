export const calcbcLagrangePart4Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lag4-intro',
      type: 'text' as const,
      content: `# Lagrange Error

**Part 4 of 7 — Alternating Series Error vs Lagrange**

### When to Use Which?

| Scenario | Use |
|----------|-----|
| Alternating series | AS Error Bound ($|S - S_n| \\leq b_{n+1}$) |
| General Taylor polynomial | Lagrange Error Bound |
| Either applies | AS bound is usually tighter! |

### Key Insight

For alternating Taylor series (like $\\sin x$, $\\cos x$, $e^{-x}$), the **alternating series error bound** is often easier and tighter.`
    },
    {
      id: 'lag4-quiz1',
      type: 'multiple-choice' as const,
      content: '**AS vs Lagrange** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $\\cos(0.5)$ using $P_4(x)$, which error bound is simpler?',
            options: ['AS bound: error $\\leq (0.5)^6/6! = 1/46080$', 'Lagrange: same answer but more work', 'Cannot use AS bound', 'They give different answers'],
            correctAnswer: 0,
            explanation: '$\\cos x$ is alternating. AS bound: first omitted term $= \\frac{(0.5)^6}{6!} = \\frac{1}{46080}$. Same result as Lagrange but easier to apply.'
          }
        ]
      }
    },
    {
      id: 'lag4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
AS bound is simpler for alternating Taylor series. Lagrange works for all Taylor polys.`
    }
  ]
};
