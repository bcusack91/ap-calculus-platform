export const bioPhotosynthesisPart1Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'phot1-intro-p1',
      type: 'text' as const,
      content: `
# ## Light Reactions Overview

**Part 1 of 7 — Light Reactions Overview**

1. Occur in thylakoid membranes
2. Light energy → ATP + NADPH + O₂
3. Water is split (photolysis): 2H₂O → 4H⁺ + 4e⁻ + O₂
4. Chlorophyll absorbs red and blue light, reflects green
      `
    },
    {
      id: 'phot1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes occur in thylakoid membranes?',
            options: [
              'Occur in thylakoid membranes',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Occur in thylakoid membranes'
          },
          {
            question: 'In the context of light reactions overview, which statement is accurate?',
            options: [
              'Water is split (photolysis): 2H₂O → 4H⁺ + 4e⁻ + O₂',
              'senarbmem diokalyht ni ruccO',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Water is split (photolysis): 2H₂O → 4H⁺ + 4e⁻ + O₂'
          }
        ]
      }
    },
    {
      id: 'phot1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Occur in thylakoid membranes**
- **Light energy → ATP + NADPH + O₂**
- **Water is split (photolysis)**: 2H₂O → 4H⁺ + 4e⁻ + O₂
- **Chlorophyll absorbs red and blue light, reflects green**
      `
    },
    {
      id: 'phot1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to light reactions overview?',
            options: [
              'Chlorophyll absorbs red and blue light, reflects green',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Chlorophyll absorbs red and blue light, reflects green'
          }
        ]
      }
    },
    {
      id: 'phot1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Occur in thylakoid membranes is important in light reactions overview because',
            options: ['Occur in thylakoid membranes', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Light energy → ATP + NADPH + O₂ is important in light reactions overview because',
            options: ['Light energy → ATP + NADPH + O₂', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Water is split (photolysis) is important in light reactions overview because',
            options: ['2H₂O → 4H⁺ + 4e⁻ + O₂', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Occur in thylakoid membranes', 'Light energy → ATP + NADPH + O₂', '2H₂O → 4H⁺ + 4e⁻ + O₂'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Light Reactions Overview.'
      }
    }
  ]
}
