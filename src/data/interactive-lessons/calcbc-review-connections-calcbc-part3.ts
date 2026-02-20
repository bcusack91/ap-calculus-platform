export const calcbcReviewPart3Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rev3-intro',
      type: 'text' as const,
      content: `# BC Review

**Part 3 of 7 — Integration Techniques Summary**

### Integration Toolkit

1. **Direct**: power, trig, exponential
2. **u-Substitution**: $\int f(g(x))g'(x)\,dx$
3. **Integration by Parts** (BC): $\int u\,dv = uv - \int v\,du$
4. **Partial Fractions** (BC): for rational functions
5. **Improper Integrals** (BC): limits at $\pm\infty$ or discontinuities
6. **Series Integration** (BC): term-by-term for power series`
    },
    {
      id: 'rev3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integration** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{2x}{x^2+1}\\,dx = $',
            options: ['$\\ln(x^2+1) + C$', '$\\arctan x + C$', '$2\\arctan x + C$', '$x^2/(x^2+1) + C$'],
            correctAnswer: 0,
            explanation: '$u = x^2 + 1$, $du = 2x\\,dx$. $\\int du/u = \\ln|u| + C = \\ln(x^2+1) + C$.'
          }
        ]
      }
    },
    {
      id: 'rev3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Master all six integration techniques. Know when to use each.`
    }
  ]
};
