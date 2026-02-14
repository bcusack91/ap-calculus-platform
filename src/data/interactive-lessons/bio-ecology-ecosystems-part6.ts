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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes identifying biotic vs abiotic factors?',
            options: [
              'Identifying biotic vs abiotic factors',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Identifying biotic vs abiotic factors'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Predicting effects of species removal',
              'srotcaf citoiba sv citoib gniyfitnedI',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Predicting effects of species removal'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Evaluating niche overlap',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating niche overlap'
          }
        ]
      }
    },
    {
      id: 'ecol6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying biotic vs abiotic factors is important in problem-solving because',
            options: ['Identifying biotic vs abiotic factors', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Analyzing food webs is important in problem-solving because',
            options: ['Analyzing food webs', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Predicting effects of species removal is important in problem-solving because',
            options: ['Predicting effects of species removal', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Identifying biotic vs abiotic factors', 'Analyzing food webs', 'Predicting effects of species removal'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
