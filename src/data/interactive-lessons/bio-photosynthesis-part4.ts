export const bioPhotosynthesisPart4Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'phot4-intro-p4',
      type: 'text' as const,
      content: `
# ## C4 & CAM Plants

**Part 4 of 7 — C4 & CAM Plants**

1. C3 plants: Calvin cycle directly (most plants)
2. C4 plants: fix CO₂ in mesophyll, Calvin cycle in bundle sheath
3. CAM plants: fix CO₂ at night, Calvin cycle by day
4. C4 and CAM adaptations reduce photorespiration
      `
    },
    {
      id: 'phot4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes c3 plants?',
            options: [
              'Calvin cycle directly (most plants)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'C3 plants: Calvin cycle directly (most plants)'
          },
          {
            question: 'In the context of c4 & cam plants, which statement is accurate?',
            options: [
              'CAM plants: fix CO₂ at night, Calvin cycle by day',
              ')stnalp tsom( yltcerid elcyc nivlaC :stnalp 3C',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'CAM plants: fix CO₂ at night, Calvin cycle by day'
          }
        ]
      }
    },
    {
      id: 'phot4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **C3 plants**: Calvin cycle directly (most plants)
- **C4 plants**: fix CO₂ in mesophyll, Calvin cycle in bundle sheath
- **CAM plants**: fix CO₂ at night, Calvin cycle by day
- **C4 and CAM adaptations reduce photorespiration**
      `
    },
    {
      id: 'phot4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to c4 & cam plants?',
            options: [
              'C4 and CAM adaptations reduce photorespiration',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'C4 and CAM adaptations reduce photorespiration'
          }
        ]
      }
    },
    {
      id: 'phot4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'C3 plants is important in c4 & cam plants because',
            options: ['Calvin cycle directly (most plants)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'C4 plants is important in c4 & cam plants because',
            options: ['fix CO₂ in mesophyll, Calvin cycle in bundle sheat', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'CAM plants is important in c4 & cam plants because',
            options: ['fix CO₂ at night, Calvin cycle by day', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Calvin cycle directly (most plants)', 'fix CO₂ in mesophyll, Calvin cycle in bundle sheat', 'fix CO₂ at night, Calvin cycle by day'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding C4 & CAM Plants.'
      }
    }
  ]
}
