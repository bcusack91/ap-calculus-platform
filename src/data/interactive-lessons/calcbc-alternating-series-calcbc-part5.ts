export const calcbcAlternatingPart5Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alt5-intro',
      type: 'text' as const,
      content: `# Alternating Series

**Part 5 of 7 — Rearrangement Theorem**

### Riemann Rearrangement Theorem

A **conditionally** convergent series can be rearranged to converge to ANY number, or to diverge!

An **absolutely** convergent series gives the same sum regardless of rearrangement.

This is why absolute convergence is "stronger" than conditional convergence.`
    },
    {
      id: 'alt5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rearrangement** 🎯',
      exercise: {
        questions: [
          {
            question: 'Can the alternating harmonic series be rearranged to sum to $42$?',
            options: ['Yes, it is conditionally convergent', 'No, it always sums to $\\ln 2$', 'Only if finitely many terms move', 'Need more info'],
            correctAnswer: 0,
            explanation: 'The alternating harmonic series is conditionally convergent, so by the Riemann Rearrangement Theorem, it can be rearranged to converge to any real number.'
          }
        ]
      }
    },
    {
      id: 'alt5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Conditional → rearrangement changes the sum. Absolute → sum is preserved.`
    }
  ]
};
