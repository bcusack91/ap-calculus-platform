export const bioBiotechPart1Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'biot1-intro-p1',
      type: 'text' as const,
      content: `
# ## Restriction Enzymes & Gel Electrophoresis

**Part 1 of 7 — Restriction Enzymes & Gel Electrophoresis**

1. Restriction enzymes cut DNA at specific sequences
2. Produces fragments with sticky or blunt ends
3. Gel electrophoresis separates DNA by size
4. Smaller fragments migrate farther through the gel
      `
    },
    {
      id: 'biot1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes restriction enzymes cut dna at specific sequences?',
            options: [
              'Restriction enzymes cut DNA at specific sequences',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Restriction enzymes cut DNA at specific sequences'
          },
          {
            question: 'In the context of restriction enzymes & gel electrophoresis, which statement is accurate?',
            options: [
              'Gel electrophoresis separates DNA by size',
              'secneuqes cificeps ta AND tuc semyzne noitcirtseR',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Gel electrophoresis separates DNA by size'
          }
        ]
      }
    },
    {
      id: 'biot1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Restriction enzymes cut DNA at specific sequences**
- **Produces fragments with sticky or blunt ends**
- **Gel electrophoresis separates DNA by size**
- **Smaller fragments migrate farther through the gel**
      `
    },
    {
      id: 'biot1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to restriction enzymes & gel electrophoresis?',
            options: [
              'Smaller fragments migrate farther through the gel',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Smaller fragments migrate farther through the gel'
          }
        ]
      }
    },
    {
      id: 'biot1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Restriction enzymes cut DNA at specific sequences is important in restriction enzymes & gel electrophoresis because',
            options: ['Restriction enzymes cut DNA at specific sequences', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Produces fragments with sticky or blunt ends is important in restriction enzymes & gel electrophoresis because',
            options: ['Produces fragments with sticky or blunt ends', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Gel electrophoresis separates DNA by size is important in restriction enzymes & gel electrophoresis because',
            options: ['Gel electrophoresis separates DNA by size', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Restriction enzymes cut DNA at specific sequences', 'Produces fragments with sticky or blunt ends', 'Gel electrophoresis separates DNA by size'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Restriction Enzymes & Gel Electrophoresis.'
      }
    }
  ]
}
