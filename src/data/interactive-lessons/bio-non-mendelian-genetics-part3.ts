export const bioNonMendelianPart3Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-3-intro-p3',
      type: 'text' as const,
      content: `
# ## Epistasis

**Part 3 of 7 — Epistasis**

1. One gene masks the expression of another
2. Example: coat color in Labrador retrievers (E gene masks B gene)
3. Modified dihybrid ratios: 9:3:4, 12:3:1, 9:7
4. Different from dominance (which is within one gene)
      `
    },
    {
      id: 'non-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes one gene masks the expression of another?',
            options: [
              'One gene masks the expression of another',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'One gene masks the expression of another'
          },
          {
            question: 'In the context of epistasis, which statement is accurate?',
            options: [
              'Modified dihybrid ratios: 9:3:4, 12:3:1, 9:7',
              'rehtona fo noisserpxe eht sksam eneg enO',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Modified dihybrid ratios: 9:3:4, 12:3:1, 9:7'
          }
        ]
      }
    },
    {
      id: 'non-3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **One gene masks the expression of another**
- **Example**: coat color in Labrador retrievers (E gene masks B gene)
- **Modified dihybrid ratios**: 9:3:4, 12:3:1, 9:7
- **Different from dominance (which is within one gene)**
      `
    },
    {
      id: 'non-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to epistasis?',
            options: [
              'Different from dominance (which is within one gene)',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Different from dominance (which is within one gene)'
          }
        ]
      }
    },
    {
      id: 'non-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'One gene masks the expression of another is important in epistasis because',
            options: ['One gene masks the expression of another', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Example is important in epistasis because',
            options: ['coat color in Labrador retrievers (E gene masks B ', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Modified dihybrid ratios is important in epistasis because',
            options: ['9:3:4, 12:3:1, 9:7', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['One gene masks the expression of another', 'coat color in Labrador retrievers (E gene masks B ', '9:3:4, 12:3:1, 9:7'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Epistasis.'
      }
    }
  ]
}
