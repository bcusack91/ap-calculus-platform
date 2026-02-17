export const bioBiotechPart6Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'biot6-intro-p6',
      type: 'text' as const,
      content: `
# ## Biotechnology: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Designing PCR experiments
2. Interpreting gel electrophoresis results
3. Analyzing restriction enzyme maps
4. Evaluating biotechnology applications
      `
    },
    {
      id: 'biot6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Designing PCR experiments?',
            options: [
              'Designing PCR experiments',
              'Evaluating biotechnology applications',
              'Analyzing restriction enzyme maps',
              'Interpreting gel electrophoresis results'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Designing PCR experiments. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Analyzing restriction enzyme maps?',
            options: [
              'Designing PCR experiments',
              'Interpreting gel electrophoresis results',
              'Evaluating biotechnology applications',
              'Analyzing restriction enzyme maps'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Analyzing restriction enzyme maps. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'biot6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Designing PCR experiments**
- **Interpreting gel electrophoresis results**
- **Analyzing restriction enzyme maps**
- **Evaluating biotechnology applications**
      `
    },
    {
      id: 'biot6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Evaluating biotechnology applications is correct?',
            options: [
              'Designing PCR experiments',
              'Interpreting gel electrophoresis results',
              'Evaluating biotechnology applications',
              'Analyzing restriction enzyme maps'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Evaluating biotechnology applications. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'biot6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Designing PCR experiments',
            options: ['Designing PCR experiments', 'Evaluating biotechnology applications', 'Analyzing restriction enzyme maps', 'Interpreting gel electrophoresis results']
          },
          {
            label: 'Interpreting gel electrophoresis results',
            options: ['Interpreting gel electrophoresis results', 'Evaluating biotechnology applications', 'Analyzing restriction enzyme maps', 'Designing PCR experiments']
          },
          {
            label: 'Analyzing restriction enzyme maps',
            options: ['Evaluating biotechnology applications', 'Designing PCR experiments', 'Interpreting gel electrophoresis results', 'Analyzing restriction enzyme maps']
          }
        ],
        correctAnswers: ['Designing PCR experiments', 'Interpreting gel electrophoresis results', 'Analyzing restriction enzyme maps'],
        hint1: 'Think about what each concept specifically describes in Biotechnology: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Biotechnology: Problem-Solving Workshop describes a specific idea. Designing PCR experiments. Interpreting gel electrophoresis results. Analyzing restriction enzyme maps.'
      }
    }
  ]
}
