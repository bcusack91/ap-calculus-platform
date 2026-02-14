export const bioEvidencePart1Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'evid1-intro-p1',
      type: 'text' as const,
      content: `
# ## Fossil Record

**Part 1 of 7 — Fossil Record**

1. Fossils show organisms changed over time
2. Transitional fossils: features of two groups (Tiktaalik, Archaeopteryx)
3. Radiometric dating determines fossil age
4. Fossil record shows increasing complexity over time
      `
    },
    {
      id: 'evid1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes fossils show organisms changed over time?',
            options: [
              'Fossils show organisms changed over time',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Fossils show organisms changed over time'
          },
          {
            question: 'In the context of fossil record, which statement is accurate?',
            options: [
              'Radiometric dating determines fossil age',
              'emit revo degnahc smsinagro wohs slissoF',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Radiometric dating determines fossil age'
          }
        ]
      }
    },
    {
      id: 'evid1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Fossils show organisms changed over time**
- **Transitional fossils**: features of two groups (Tiktaalik, Archaeopteryx)
- **Radiometric dating determines fossil age**
- **Fossil record shows increasing complexity over time**
      `
    },
    {
      id: 'evid1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to fossil record?',
            options: [
              'Fossil record shows increasing complexity over time',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Fossil record shows increasing complexity over time'
          }
        ]
      }
    },
    {
      id: 'evid1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fossils show organisms changed over time is important in fossil record because',
            options: ['Fossils show organisms changed over time', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Transitional fossils is important in fossil record because',
            options: ['features of two groups (Tiktaalik, Archaeopteryx)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Radiometric dating determines fossil age is important in fossil record because',
            options: ['Radiometric dating determines fossil age', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Fossils show organisms changed over time', 'features of two groups (Tiktaalik, Archaeopteryx)', 'Radiometric dating determines fossil age'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Fossil Record.'
      }
    }
  ]
}
