export const bioMembraneTransportPart6Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'memb6-intro-p6',
      type: 'text' as const,
      content: `
# ## Membrane Transport: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Predicting water movement in different solutions
2. Designing osmosis experiments
3. Calculating water potential
4. Identifying transport mechanisms
      `
    },
    {
      id: 'memb6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Predicting water movement in different…?',
            options: [
              'Predicting water movement in different solutions',
              'Designing osmosis experiments',
              'Identifying transport mechanisms',
              'Calculating water potential'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Predicting water movement in different solutions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Calculating water potential?',
            options: [
              'Designing osmosis experiments',
              'Identifying transport mechanisms',
              'Predicting water movement in different solutions',
              'Calculating water potential'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Calculating water potential. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'memb6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Predicting water movement in different solutions**
- **Designing osmosis experiments**
- **Calculating water potential**
- **Identifying transport mechanisms**
      `
    },
    {
      id: 'memb6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Identifying transport mechanisms is correct?',
            options: [
              'Designing osmosis experiments',
              'Calculating water potential',
              'Identifying transport mechanisms',
              'Predicting water movement in different solutions'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Identifying transport mechanisms. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'memb6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Predicting water movement in different…',
            options: ['Calculating water potential', 'Identifying transport mechanisms', 'Designing osmosis experiments', 'Predicting water movement in different solutions']
          },
          {
            label: 'Designing osmosis experiments',
            options: ['Designing osmosis experiments', 'Calculating water potential', 'Identifying transport mechanisms', 'Predicting water movement in different solutions']
          },
          {
            label: 'Calculating water potential',
            options: ['Calculating water potential', 'Predicting water movement in different solutions', 'Identifying transport mechanisms', 'Designing osmosis experiments']
          }
        ],
        correctAnswers: ['Predicting water movement in different solutions', 'Designing osmosis experiments', 'Calculating water potential'],
        hint1: 'Think about what each concept specifically describes in Membrane Transport: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Membrane Transport: Problem-Solving Workshop describes a specific idea. Predicting water movement in different solutions. Designing osmosis experiments. Calculating water potential.'
      }
    }
  ]
}
