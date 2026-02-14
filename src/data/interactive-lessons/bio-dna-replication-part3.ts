export const bioDnaReplicationPart3Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dna-3-intro-p3',
      type: 'text' as const,
      content: `
# ## Leading & Lagging Strands

**Part 3 of 7 — Leading & Lagging Strands**

1. Leading strand: continuous synthesis toward replication fork
2. Lagging strand: discontinuous synthesis away from fork (Okazaki fragments)
3. Both strands synthesized 5'→3'
4. Primase must lay down primer for each Okazaki fragment
      `
    },
    {
      id: 'dna-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes leading strand?',
            options: [
              'continuous synthesis toward replication fork',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Leading strand: continuous synthesis toward replication fork'
          },
          {
            question: 'In the context of leading & lagging strands, which statement is accurate?',
            options: [
              'Both strands synthesized 5\'→3\'',
              'krof noitacilper drawot sisehtnys suounitnoc :dnarts gnidaeL',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Both strands synthesized 5\'→3\''
          }
        ]
      }
    },
    {
      id: 'dna-3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Leading strand**: continuous synthesis toward replication fork
- **Lagging strand**: discontinuous synthesis away from fork (Okazaki fragments)
- **Both strands synthesized 5'→3'**
- **Primase must lay down primer for each Okazaki fragment**
      `
    },
    {
      id: 'dna-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to leading & lagging strands?',
            options: [
              'Primase must lay down primer for each Okazaki fragment',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Primase must lay down primer for each Okazaki fragment'
          }
        ]
      }
    },
    {
      id: 'dna-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Leading strand is important in leading & lagging strands because',
            options: ['continuous synthesis toward replication fork', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Lagging strand is important in leading & lagging strands because',
            options: ['discontinuous synthesis away from fork (Okazaki fr', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Both strands synthesized 5\'→3\' is important in leading & lagging strands because',
            options: ['Both strands synthesized 5\'→3\'', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['continuous synthesis toward replication fork', 'discontinuous synthesis away from fork (Okazaki fr', 'Both strands synthesized 5\'→3\''],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Leading & Lagging Strands.'
      }
    }
  ]
}
