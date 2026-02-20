export const calcbcAdvIntegrationPart1Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'adv1-intro',
      type: 'text' as const,
      content: `# Advanced Integration Techniques

**Part 1 of 7 — Choosing a Method**

### Integration Decision Tree

1. **Basic?** Power rule, trig, exponential → do it directly
2. **Composite?** $\int f(g(x))g'(x)\,dx$ → **u-substitution**
3. **Product of different types?** → **Integration by parts**
4. **Rational function?** → **Partial fractions**
5. **Trig powers?** → Trig identities
6. **Square root of quadratic?** → Trig substitution (beyond BC, but good to know)`
    },
    {
      id: 'adv1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Choose the Method** 🎯',
      exercise: {
        questions: [
          {
            question: 'Best method for $\\int x\\ln x\\,dx$:',
            options: ['Integration by parts', 'u-substitution', 'Partial fractions', 'Direct integration'],
            correctAnswer: 0,
            explanation: 'Product of polynomial and logarithm → integration by parts with $u = \\ln x$, $dv = x\\,dx$.'
          },
          {
            question: 'Best method for $\\int \\frac{3}{x^2 - 1}\\,dx$:',
            options: ['Partial fractions', 'u-substitution', 'Integration by parts', 'Power rule'],
            correctAnswer: 0,
            explanation: '$\\frac{3}{x^2-1} = \\frac{3}{(x-1)(x+1)}$ → partial fractions.'
          }
        ]
      }
    },
    {
      id: 'adv1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Recognize the pattern first. Choose the right technique.`
    }
  ]
};
