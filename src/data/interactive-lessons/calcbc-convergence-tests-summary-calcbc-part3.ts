export const calcbcConvergencePart3Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conv3-intro',
      type: 'text' as const,
      content: `# Convergence Tests

**Part 3 of 7 — Common Pitfalls**

### Mistakes to Avoid

1. **Divergence test ≠ convergence test**: $a_n \to 0$ does NOT prove convergence
2. **Ratio test $L = 1$**: INCONCLUSIVE (try another test!)
3. **Comparison wrong direction**: bigger than convergent → NOT helpful
4. **Forgetting to check AST conditions**: must verify decreasing AND $\to 0$`
    },
    {
      id: 'conv3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Pitfalls** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum 1/n$: $a_n \\to 0$, so it converges. What is wrong?',
            options: ['$a_n \\to 0$ does not prove convergence; harmonic series diverges', 'Nothing, it does converge', 'Need to check $a_n$ is decreasing', 'Should use root test'],
            correctAnswer: 0,
            explanation: 'The divergence test only works one way: $a_n \\not\\to 0$ implies divergence. $a_n \\to 0$ is necessary but not sufficient.'
          }
        ]
      }
    },
    {
      id: 'conv3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
The divergence test can only prove divergence, never convergence.`
    }
  ]
};
