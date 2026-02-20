export const calcbcEulerPart3Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'eul3-intro',
      type: 'text' as const,
      content: `# Euler's Method

**Part 3 of 7 — Over- and Under-Estimates**

### When Does Euler Over/Under-Estimate?

| Concavity | Euler Tangent Lines | Result |
|-----------|-------------------|--------|
| Concave Up ($f'' > 0$) | Below curve | **Underestimate** |
| Concave Down ($f'' < 0$) | Above curve | **Overestimate** |

This is because tangent lines on a concave-up curve lie below the curve, and vice versa.`
    },
    {
      id: 'eul3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Over/Under** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $y\' = y$ and $y > 0$, is Euler\'s method an over- or under-estimate?',
            options: ['Underestimate (solution is concave up)', 'Overestimate', 'Exact', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$y\' = y > 0$ and $y\'\' = y\' = y > 0$, so concave up. Tangent lines are below the curve: underestimate.'
          }
        ]
      }
    },
    {
      id: 'eul3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Concave up → underestimate. Concave down → overestimate.`
    }
  ]
};
