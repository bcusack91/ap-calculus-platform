export const calcbcConvergencePart6Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conv6-intro',
      type: 'text' as const,
      content: `# Convergence Tests

**Part 6 of 7 — AP Exam Strategies**

### Free Response Tips

1. **State the test** you're using ("By the Ratio Test...")
2. **Show the limit computation**
3. **State the conclusion** with the value of $L$
4. For absolute/conditional: test absolute first, then alternating if needed`
    },
    {
      id: 'conv6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP Format Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'On an AP FRQ asking about $\\sum \\frac{(-1)^n}{n^{0.9}}$: classify convergence.',
            options: ['Conditionally convergent', 'Absolutely convergent', 'Divergent', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'AST: $1/n^{0.9}$ decreasing, $\\to 0$. Converges. But $\\sum 1/n^{0.9}$ diverges ($p < 1$). Conditionally convergent.'
          }
        ]
      }
    },
    {
      id: 'conv6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6
Always explain which test and show your work on the AP exam.`
    }
  ]
};
