export const bioEvidencePart5Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'evid5-intro-p5',
      type: 'text' as const,
      content: `
# ## Direct Observation

**Part 5 of 7 — Direct Observation**

1. Antibiotic resistance in bacteria
2. Pesticide resistance in insects
3. Darwin's finch beak changes during drought
4. Artificial selection demonstrates selection principle
      `
    },
    {
      id: 'evid5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes antibiotic resistance in bacteria?',
            options: [
              'Antibiotic resistance in bacteria',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Antibiotic resistance in bacteria'
          },
          {
            question: 'In the context of direct observation, which statement is accurate?',
            options: [
              'Darwin\'s finch beak changes during drought',
              'airetcab ni ecnatsiser citoibitnA',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Darwin\'s finch beak changes during drought'
          }
        ]
      }
    },
    {
      id: 'evid5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Antibiotic resistance in bacteria**
- **Pesticide resistance in insects**
- **Darwin's finch beak changes during drought**
- **Artificial selection demonstrates selection principle**
      `
    },
    {
      id: 'evid5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to direct observation?',
            options: [
              'Artificial selection demonstrates selection principle',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Artificial selection demonstrates selection principle'
          }
        ]
      }
    },
    {
      id: 'evid5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Antibiotic resistance in bacteria is important in direct observation because',
            options: ['Antibiotic resistance in bacteria', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Pesticide resistance in insects is important in direct observation because',
            options: ['Pesticide resistance in insects', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Darwin\'s finch beak changes during drought is important in direct observation because',
            options: ['Darwin\'s finch beak changes during drought', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Antibiotic resistance in bacteria', 'Pesticide resistance in insects', 'Darwin\'s finch beak changes during drought'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Direct Observation.'
      }
    }
  ]
}
