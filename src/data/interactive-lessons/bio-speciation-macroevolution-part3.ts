export const bioSpeciationPart3Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'spec3-intro-p3',
      type: 'text' as const,
      content: `
# ## Sympatric Speciation

**Part 3 of 7 — Sympatric Speciation**

1. Speciation without geographic isolation
2. Polyploidy in plants (most common mechanism)
3. Habitat differentiation within same area
4. Temporal isolation: different breeding seasons
      `
    },
    {
      id: 'spec3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes speciation without geographic isolation?',
            options: [
              'Speciation without geographic isolation',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Speciation without geographic isolation'
          },
          {
            question: 'In the context of sympatric speciation, which statement is accurate?',
            options: [
              'Habitat differentiation within same area',
              'noitalosi cihpargoeg tuohtiw noitaicepS',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Habitat differentiation within same area'
          }
        ]
      }
    },
    {
      id: 'spec3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Speciation without geographic isolation**
- **Polyploidy in plants (most common mechanism)**
- **Habitat differentiation within same area**
- **Temporal isolation**: different breeding seasons
      `
    },
    {
      id: 'spec3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to sympatric speciation?',
            options: [
              'Temporal isolation: different breeding seasons',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Temporal isolation: different breeding seasons'
          }
        ]
      }
    },
    {
      id: 'spec3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Speciation without geographic isolation is important in sympatric speciation because',
            options: ['Speciation without geographic isolation', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Polyploidy in plants (most common mechanism) is important in sympatric speciation because',
            options: ['Polyploidy in plants (most common mechanism)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Habitat differentiation within same area is important in sympatric speciation because',
            options: ['Habitat differentiation within same area', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Speciation without geographic isolation', 'Polyploidy in plants (most common mechanism)', 'Habitat differentiation within same area'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Sympatric Speciation.'
      }
    }
  ]
}
