export const bioEcologyPart6Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'ecol6-intro-p6',
      type: 'text' as const,
      content: `
# ## Ecology: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Identifying biotic vs abiotic factors
2. Analyzing food webs
3. Predicting effects of species removal
4. Evaluating niche overlap
      `
    },
    {
      id: 'ecol6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Identifying biotic vs abiotic factors" refer to in biology?',
            options: [
              'Evaluating niche overlap',
              'Analyzing food webs',
              'Identifying biotic vs abiotic factors',
              'Predicting effects of species removal'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Identifying biotic vs abiotic factors. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Predicting effects of species removal:',
            options: [
              'Analyzing food webs',
              'Predicting effects of species removal',
              'Identifying biotic vs abiotic factors',
              'Evaluating niche overlap'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Predicting effects of species removal. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ecol6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Identifying biotic vs abiotic factors**
- **Analyzing food webs**
- **Predicting effects of species removal**
- **Evaluating niche overlap**
      `
    },
    {
      id: 'ecol6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Evaluating niche overlap is correct?',
            options: [
              'Analyzing food webs',
              'Identifying biotic vs abiotic factors',
              'Predicting effects of species removal',
              'Evaluating niche overlap'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Evaluating niche overlap. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ecol6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying biotic vs abiotic factors',
            options: ['Evaluating niche overlap', 'Predicting effects of species removal', 'Analyzing food webs', 'Identifying biotic vs abiotic factors']
          },
          {
            label: 'Analyzing food webs',
            options: ['Identifying biotic vs abiotic factors', 'Analyzing food webs', 'Evaluating niche overlap', 'Predicting effects of species removal']
          },
          {
            label: 'Predicting effects of species removal',
            options: ['Predicting effects of species removal', 'Analyzing food webs', 'Evaluating niche overlap', 'Identifying biotic vs abiotic factors']
          }
        ],
        correctAnswers: ['Identifying biotic vs abiotic factors', 'Analyzing food webs', 'Predicting effects of species removal'],
        hint1: 'Think about what each concept specifically describes in Ecology: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ecology: Problem-Solving Workshop describes a specific idea. Identifying biotic vs abiotic factors. Analyzing food webs. Predicting effects of species removal.'
      }
    }
  ]
}
