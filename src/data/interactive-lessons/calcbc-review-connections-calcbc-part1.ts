export const calcbcReviewPart1Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rev1-intro',
      type: 'text' as const,
      content: `# BC Review & Connections

**Part 1 of 7 — The Big Picture**

### Core Themes of Calculus

1. **Limits** → foundation of everything
2. **Derivatives** → rates of change (local behavior)
3. **Integrals** → accumulation (global behavior)
4. **Series** → infinite sums (representation of functions)

### The FTC Connects Them

$$\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$$

Differentiation and integration are inverse operations.`
    },
    {
      id: 'rev1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Big Picture** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which concept unifies derivatives, integrals, and series?',
            options: ['Limits', 'Algebra', 'Geometry', 'Arithmetic'],
            correctAnswer: 0,
            explanation: 'Derivatives are limits of difference quotients, integrals are limits of Riemann sums, series are limits of partial sums. Limits underpin everything.'
          }
        ]
      }
    },
    {
      id: 'rev1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Everything in calculus is built on limits.`
    }
  ]
};
