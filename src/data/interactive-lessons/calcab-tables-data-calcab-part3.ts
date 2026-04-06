export const calcabTablesDataPart3Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td3-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 3 of 7 — MVT with Tables**

### Using MVT on Table Data

If $f$ is differentiable and the table shows:

| $x$ | 1 | 4 |
|-----|---|---|
| $f(x)$ | 3 | 12 |

Then by MVT, there exists $c \in (1, 4)$ where $f'(c) = \\frac{12 - 3}{4 - 1} = 3$.

> **AP Tip:** You MUST cite "by the Mean Value Theorem" and verify the hypotheses (continuous + differentiable).`
    },
    {
      id: 'td3-quiz1',
      type: 'multiple-choice' as const,
      content: '**MVT with Tables** 🎯\n\n$f$ is continuous and differentiable. $f(2) = 5$, $f(6) = 17$.',
      exercise: {
        questions: [
          {
            question: 'By MVT, there exists $c \\in (2, 6)$ where $f\'(c)$ equals:',
            options: ['$3$', '$12$', '$4$', '$2$'],
            correctAnswer: 0,
            explanation: '$f\'(c) = \\frac{17-5}{6-2} = \\frac{12}{4} = 3$.'
          }
        ]
      }
    },
    {
      id: 'td3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. MVT + tables is a very common AP pattern
2. Always state the theorem by name and verify conditions`
    }
  ]
};
