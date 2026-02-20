export const calcbcConvergencePart2Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conv2-intro',
      type: 'text' as const,
      content: `# Convergence Tests

**Part 2 of 7 — Decision Flowchart**

### Step-by-Step Strategy

1. Is $a_n \to 0$? If not → **diverges** ✅
2. Is it geometric ($ar^n$)? → Check $|r|$
3. Is it $p$-series ($1/n^p$)? → Check $p > 1$
4. Is it alternating? → AST
5. Has factorials or $n$th powers? → Ratio/Root test
6. Resembles known series? → Comparison/Limit Comparison
7. Can write $a_n = f(n)$ nicely? → Integral test`
    },
    {
      id: 'conv2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Flowchart Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'What test for $\\sum \\frac{(-1)^n}{n^2}$?',
            options: ['AST (or note absolute convergence since $\\sum 1/n^2$ converges)', 'Ratio test only', 'Root test', 'Integral test'],
            correctAnswer: 0,
            explanation: 'It is alternating, so AST works. Even better: $\\sum 1/n^2$ converges, so it converges absolutely.'
          }
        ]
      }
    },
    {
      id: 'conv2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Follow the flowchart: divergence test first, then identify the series type.`
    }
  ]
};
