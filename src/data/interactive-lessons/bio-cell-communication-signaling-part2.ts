export const bioCellCommPart2Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell2-intro-p2',
      type: 'text' as const,
      content: `
# ## Types of Signaling

**Part 2 of 7 — Types of Signaling**

1. Endocrine: long-distance via bloodstream (hormones)
2. Paracrine: local signaling to nearby cells
3. Autocrine: cell signals itself
4. Direct contact: gap junctions, plasmodesmata
      `
    },
    {
      id: 'cell2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes endocrine?',
            options: [
              'long-distance via bloodstream (hormones)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Endocrine: long-distance via bloodstream (hormones)'
          },
          {
            question: 'In the context of types of signaling, which statement is accurate?',
            options: [
              'Autocrine: cell signals itself',
              ')senomroh( maertsdoolb aiv ecnatsid-gnol :enircodnE',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Autocrine: cell signals itself'
          }
        ]
      }
    },
    {
      id: 'cell2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Endocrine**: long-distance via bloodstream (hormones)
- **Paracrine**: local signaling to nearby cells
- **Autocrine**: cell signals itself
- **Direct contact**: gap junctions, plasmodesmata
      `
    },
    {
      id: 'cell2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to types of signaling?',
            options: [
              'Direct contact: gap junctions, plasmodesmata',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Direct contact: gap junctions, plasmodesmata'
          }
        ]
      }
    },
    {
      id: 'cell2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Endocrine is important in types of signaling because',
            options: ['long-distance via bloodstream (hormones)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Paracrine is important in types of signaling because',
            options: ['local signaling to nearby cells', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Autocrine is important in types of signaling because',
            options: ['cell signals itself', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['long-distance via bloodstream (hormones)', 'local signaling to nearby cells', 'cell signals itself'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Types of Signaling.'
      }
    }
  ]
}
