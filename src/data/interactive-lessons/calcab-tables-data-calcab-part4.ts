export const calcabTablesDataPart4Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td4-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 4 of 7 — IVT with Tables**

### Using IVT on Table Data

If $f$ is continuous and the table shows values, you can conclude that $f$ takes every value between consecutive table entries.`
    },
    {
      id: 'td4-quiz1',
      type: 'multiple-choice' as const,
      content: '**IVT with Tables** 🎯\n\n$f$ is continuous. $f(1) = -2$, $f(3) = 4$, $f(5) = 1$, $f(7) = 6$.',
      exercise: {
        questions: [
          {
            question: 'Can we guarantee $f(c) = 3$ for some $c \\in (1, 3)$?',
            options: ['Yes, by IVT', 'No', 'Only by MVT', 'Need more info'],
            correctAnswer: 0,
            explanation: '$f(1) = -2 < 3 < 4 = f(3)$. By IVT, $f(c) = 3$ for some $c \\in (1, 3)$.'
          },
          {
            question: 'On what interval can we guarantee $f(c) = 2$ using the table?',
            options: ['$(3, 5)$ or $(5, 7)$', '$(1, 3)$ only', '$(5, 7)$ only', 'Cannot tell'],
            correctAnswer: 0,
            explanation: '$f(3)=4 > 2 > 1 = f(5)$: IVT on $(3,5)$. Also $f(5)=1 < 2 < 6 = f(7)$: IVT on $(5,7)$.'
          }
        ]
      }
    },
    {
      id: 'td4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
1. Look for the target value between consecutive $f$-values
2. The value must be between $f(a)$ and $f(b)$ to apply IVT`
    }
  ]
};
