export const bioPopulationPart6Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'popu6-intro-p6',
      type: 'text' as const,
      content: `
# ## Population Ecology: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Population growth calculations
2. Interpreting survivorship curves
3. Analyzing community interaction data
4. Predicting succession outcomes
      `
    },
    {
      id: 'popu6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Population growth calculations?',
            options: [
              'Analyzing community interaction data',
              'Interpreting survivorship curves',
              'Population growth calculations',
              'Predicting succession outcomes'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Population growth calculations. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Population Ecology: Problem-Solving Workshop, which explains Analyzing community interaction data?',
            options: [
              'Population growth calculations',
              'Analyzing community interaction data',
              'Interpreting survivorship curves',
              'Predicting succession outcomes'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Analyzing community interaction data. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'popu6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Population growth calculations**
- **Interpreting survivorship curves**
- **Analyzing community interaction data**
- **Predicting succession outcomes**
      `
    },
    {
      id: 'popu6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Predicting succession outcomes is correct?',
            options: [
              'Population growth calculations',
              'Interpreting survivorship curves',
              'Predicting succession outcomes',
              'Analyzing community interaction data'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Predicting succession outcomes. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'popu6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Population growth calculations',
            options: ['Analyzing community interaction data', 'Population growth calculations', 'Predicting succession outcomes', 'Interpreting survivorship curves']
          },
          {
            label: 'Interpreting survivorship curves',
            options: ['Population growth calculations', 'Analyzing community interaction data', 'Interpreting survivorship curves', 'Predicting succession outcomes']
          },
          {
            label: 'Analyzing community interaction data',
            options: ['Population growth calculations', 'Interpreting survivorship curves', 'Analyzing community interaction data', 'Predicting succession outcomes']
          }
        ],
        correctAnswers: ['Population growth calculations', 'Interpreting survivorship curves', 'Analyzing community interaction data'],
        hint1: 'Think about what each concept specifically describes in Population Ecology: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Population Ecology: Problem-Solving Workshop describes a specific idea. Population growth calculations. Interpreting survivorship curves. Analyzing community interaction data.'
      }
    }
  ]
}
