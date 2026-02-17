export const bioCellRespirationPart6Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cell6-intro-p6',
      type: 'text' as const,
      content: `
# ## Cellular Respiration: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. ATP yield calculations
2. Identifying where each stage occurs
3. Predicting effects of ETC inhibitors
4. Comparing aerobic vs anaerobic pathways
      `
    },
    {
      id: 'cell6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains ATP yield calculations?',
            options: [
              'Predicting effects of ETC inhibitors',
              'Comparing aerobic vs anaerobic pathways',
              'Identifying where each stage occurs',
              'ATP yield calculations'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ATP yield calculations. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Cellular Respiration: Problem-Solving Workshop, which explains Predicting effects of ETC inhibitors?',
            options: [
              'Identifying where each stage occurs',
              'ATP yield calculations',
              'Predicting effects of ETC inhibitors',
              'Comparing aerobic vs anaerobic pathways'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Predicting effects of ETC inhibitors. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **ATP yield calculations**
- **Identifying where each stage occurs**
- **Predicting effects of ETC inhibitors**
- **Comparing aerobic vs anaerobic pathways**
      `
    },
    {
      id: 'cell6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Comparing aerobic vs anaerobic pathways?',
            options: [
              'Predicting effects of ETC inhibitors',
              'Identifying where each stage occurs',
              'ATP yield calculations',
              'Comparing aerobic vs anaerobic pathways'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Comparing aerobic vs anaerobic pathways. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'ATP yield calculations',
            options: ['ATP yield calculations', 'Identifying where each stage occurs', 'Comparing aerobic vs anaerobic pathways', 'Predicting effects of ETC inhibitors']
          },
          {
            label: 'Identifying where each stage occurs',
            options: ['Predicting effects of ETC inhibitors', 'ATP yield calculations', 'Comparing aerobic vs anaerobic pathways', 'Identifying where each stage occurs']
          },
          {
            label: 'Predicting effects of ETC inhibitors',
            options: ['Comparing aerobic vs anaerobic pathways', 'Identifying where each stage occurs', 'Predicting effects of ETC inhibitors', 'ATP yield calculations']
          }
        ],
        correctAnswers: ['ATP yield calculations', 'Identifying where each stage occurs', 'Predicting effects of ETC inhibitors'],
        hint1: 'Think about what each concept specifically describes in Cellular Respiration: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cellular Respiration: Problem-Solving Workshop describes a specific idea. ATP yield calculations. Identifying where each stage occurs. Predicting effects of ETC inhibitors.'
      }
    }
  ]
}
