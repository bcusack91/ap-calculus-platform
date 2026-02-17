export const bioNatSelectionPart6Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'natu6-intro-p6',
      type: 'text' as const,
      content: `
# ## Natural Selection: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Hardy-Weinberg calculations
2. Identifying types of selection from data
3. Analyzing allele frequency changes
4. Predicting evolutionary outcomes
      `
    },
    {
      id: 'natu6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Hardy-Weinberg calculations?',
            options: [
              'Identifying types of selection from data',
              'Analyzing allele frequency changes',
              'Predicting evolutionary outcomes',
              'Hardy-Weinberg calculations'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Hardy-Weinberg calculations. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Analyzing allele frequency changes:',
            options: [
              'Identifying types of selection from data',
              'Analyzing allele frequency changes',
              'Predicting evolutionary outcomes',
              'Hardy-Weinberg calculations'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Analyzing allele frequency changes. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'natu6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Hardy-Weinberg calculations**
- **Identifying types of selection from data**
- **Analyzing allele frequency changes**
- **Predicting evolutionary outcomes**
      `
    },
    {
      id: 'natu6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Predicting evolutionary outcomes?',
            options: [
              'Analyzing allele frequency changes',
              'Hardy-Weinberg calculations',
              'Predicting evolutionary outcomes',
              'Identifying types of selection from data'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Predicting evolutionary outcomes. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'natu6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hardy-Weinberg calculations',
            options: ['Analyzing allele frequency changes', 'Hardy-Weinberg calculations', 'Predicting evolutionary outcomes', 'Identifying types of selection from data']
          },
          {
            label: 'Identifying types of selection from data',
            options: ['Analyzing allele frequency changes', 'Hardy-Weinberg calculations', 'Predicting evolutionary outcomes', 'Identifying types of selection from data']
          },
          {
            label: 'Analyzing allele frequency changes',
            options: ['Hardy-Weinberg calculations', 'Predicting evolutionary outcomes', 'Identifying types of selection from data', 'Analyzing allele frequency changes']
          }
        ],
        correctAnswers: ['Hardy-Weinberg calculations', 'Identifying types of selection from data', 'Analyzing allele frequency changes'],
        hint1: 'Think about what each concept specifically describes in Natural Selection: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Natural Selection: Problem-Solving Workshop describes a specific idea. Hardy-Weinberg calculations. Identifying types of selection from data. Analyzing allele frequency changes.'
      }
    }
  ]
}
