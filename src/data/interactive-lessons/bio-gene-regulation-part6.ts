export const bioGeneRegPart6Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'gene6-intro-p6',
      type: 'text' as const,
      content: `
# ## Gene Regulation: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Predicting gene expression in different conditions
2. Analyzing operon diagrams
3. Connecting regulation to differentiation
4. Evaluating epigenetic effects
      `
    },
    {
      id: 'gene6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Predicting gene expression in different…?',
            options: [
              'Evaluating epigenetic effects',
              'Analyzing operon diagrams',
              'Predicting gene expression in different conditions',
              'Connecting regulation to differentiation'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Predicting gene expression in different conditions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Connecting regulation to differentiation:',
            options: [
              'Evaluating epigenetic effects',
              'Predicting gene expression in different conditions',
              'Connecting regulation to differentiation',
              'Analyzing operon diagrams'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Connecting regulation to differentiation. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'gene6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Predicting gene expression in different conditions**
- **Analyzing operon diagrams**
- **Connecting regulation to differentiation**
- **Evaluating epigenetic effects**
      `
    },
    {
      id: 'gene6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Evaluating epigenetic effects is correct?',
            options: [
              'Analyzing operon diagrams',
              'Connecting regulation to differentiation',
              'Evaluating epigenetic effects',
              'Predicting gene expression in different conditions'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Evaluating epigenetic effects. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'gene6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Predicting gene expression in different…',
            options: ['Connecting regulation to differentiation', 'Evaluating epigenetic effects', 'Predicting gene expression in different conditions', 'Analyzing operon diagrams']
          },
          {
            label: 'Analyzing operon diagrams',
            options: ['Connecting regulation to differentiation', 'Evaluating epigenetic effects', 'Predicting gene expression in different conditions', 'Analyzing operon diagrams']
          },
          {
            label: 'Connecting regulation to differentiation',
            options: ['Connecting regulation to differentiation', 'Evaluating epigenetic effects', 'Analyzing operon diagrams', 'Predicting gene expression in different conditions']
          }
        ],
        correctAnswers: ['Predicting gene expression in different conditions', 'Analyzing operon diagrams', 'Connecting regulation to differentiation'],
        hint1: 'Think about what each concept specifically describes in Gene Regulation: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Gene Regulation: Problem-Solving Workshop describes a specific idea. Predicting gene expression in different conditions. Analyzing operon diagrams. Connecting regulation to differentiation.'
      }
    }
  ]
}
