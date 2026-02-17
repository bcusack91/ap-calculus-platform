export const bioEnergyFlowPart6Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'ener6-intro-p6',
      type: 'text' as const,
      content: `
# ## Energy Flow: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Calculating energy transfer between trophic levels
2. Analyzing ecosystem productivity
3. Tracing nutrients through cycles
4. Predicting effects of human disruption
      `
    },
    {
      id: 'ener6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Calculating energy transfer between…" refer to in biology?',
            options: [
              'Predicting effects of human disruption',
              'Analyzing ecosystem productivity',
              'Tracing nutrients through cycles',
              'Calculating energy transfer between trophic levels'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Calculating energy transfer between trophic levels. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Tracing nutrients through cycles:',
            options: [
              'Analyzing ecosystem productivity',
              'Predicting effects of human disruption',
              'Tracing nutrients through cycles',
              'Calculating energy transfer between trophic levels'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Tracing nutrients through cycles. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ener6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Calculating energy transfer between trophic levels**
- **Analyzing ecosystem productivity**
- **Tracing nutrients through cycles**
- **Predicting effects of human disruption**
      `
    },
    {
      id: 'ener6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Predicting effects of human disruption is correct?',
            options: [
              'Calculating energy transfer between trophic levels',
              'Tracing nutrients through cycles',
              'Predicting effects of human disruption',
              'Analyzing ecosystem productivity'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Predicting effects of human disruption. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ener6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Calculating energy transfer between…',
            options: ['Tracing nutrients through cycles', 'Predicting effects of human disruption', 'Calculating energy transfer between trophic levels', 'Analyzing ecosystem productivity']
          },
          {
            label: 'Analyzing ecosystem productivity',
            options: ['Calculating energy transfer between trophic levels', 'Predicting effects of human disruption', 'Analyzing ecosystem productivity', 'Tracing nutrients through cycles']
          },
          {
            label: 'Tracing nutrients through cycles',
            options: ['Analyzing ecosystem productivity', 'Tracing nutrients through cycles', 'Calculating energy transfer between trophic levels', 'Predicting effects of human disruption']
          }
        ],
        correctAnswers: ['Calculating energy transfer between trophic levels', 'Analyzing ecosystem productivity', 'Tracing nutrients through cycles'],
        hint1: 'Think about what each concept specifically describes in Energy Flow: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Energy Flow: Problem-Solving Workshop describes a specific idea. Calculating energy transfer between trophic levels. Analyzing ecosystem productivity. Tracing nutrients through cycles.'
      }
    }
  ]
}
