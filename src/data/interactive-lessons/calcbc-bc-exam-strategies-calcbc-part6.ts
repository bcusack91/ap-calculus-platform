export const calcbcExamStrategyPart6Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'str6-intro',
      type: 'text' as const,
      content: `# BC Exam Strategies

**Part 6 of 7 — Common Mistakes to Avoid**

### Top BC Mistakes

1. **Forgetting +C** on indefinite integrals
2. **Wrong limits** on definite integrals
3. **Mixing up convergence tests** (apply the right test!)
4. **Not checking endpoints** for power series
5. **Using wrong formula** for polar area vs. parametric arc length
6. **Not justifying** over/underestimate claims
7. **Dropping negative signs** in alternating series`
    },
    {
      id: 'str6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Common Mistakes** 🎯',
      exercise: {
        questions: [
          {
            question: 'The integral $\\int_0^{\\pi} \\sin\\theta\\,d\\theta = ?$',
            options: ['$2$', '$0$', '$\\pi$', '$-2$'],
            correctAnswer: 0,
            explanation: '$[-\\cos\\theta]_0^{\\pi} = -\\cos\\pi - (-\\cos 0) = -(-1) + 1 = 2$. Common mistake: getting $0$ by computing $\\cos\\pi - \\cos 0$.'
          }
        ]
      }
    },
    {
      id: 'str6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6
Check signs, check endpoints, justify everything. Read questions carefully!`
    }
  ]
};
