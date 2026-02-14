export const bioCellCommPart6Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell6-intro-p6',
      type: 'text' as const,
      content: `
# ## Cell Communication: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Tracing a signal from reception to response
2. Predicting effects of pathway mutations
3. Analyzing signal amplification
4. Connecting signaling to disease (cancer)
      `
    },
    {
      id: 'cell6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes tracing a signal from reception to response?',
            options: [
              'Tracing a signal from reception to response',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Tracing a signal from reception to response'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Analyzing signal amplification',
              'esnopser ot noitpecer morf langis a gnicarT',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing signal amplification'
          }
        ]
      }
    },
    {
      id: 'cell6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Tracing a signal from reception to response**
- **Predicting effects of pathway mutations**
- **Analyzing signal amplification**
- **Connecting signaling to disease (cancer)**
      `
    },
    {
      id: 'cell6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Connecting signaling to disease (cancer)',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Connecting signaling to disease (cancer)'
          }
        ]
      }
    },
    {
      id: 'cell6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Tracing a signal from reception to response is important in problem-solving because',
            options: ['Tracing a signal from reception to response', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Predicting effects of pathway mutations is important in problem-solving because',
            options: ['Predicting effects of pathway mutations', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Analyzing signal amplification is important in problem-solving because',
            options: ['Analyzing signal amplification', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Tracing a signal from reception to response', 'Predicting effects of pathway mutations', 'Analyzing signal amplification'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
