export const oChemCarbsPart2Data = {
  topicSlug: 'carbohydrates-biochemistry',
  sections: [
    {
      id: 'carbo2-intro',
      type: 'text' as const,
      content: `
# Fischer & Haworth Projections

**Part 2 of 7 — Fischer & Haworth Projections**

### 1. Fischer projection

vertical = going back, horizontal = coming forward

### 2. Haworth projection

shows cyclic hemiacetal form

### 3. α anomer

-OH on anomeric carbon is axial (down in Haworth)

### 4. β anomer

-OH on anomeric carbon is equatorial (up in Haworth)
      `
    },
    {
      id: 'carbo2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of fischer & haworth projections?',
            options: [
              'Fischer projection',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Fischer projection: vertical = going back, horizontal = coming forward'
          },
          {
            question: 'In the context of fischer & haworth projections, which is accurate?',
            options: [
              '-OH on anomeric carbon is axial (down in Haworth)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'α anomer: -OH on anomeric carbon is axial (down in Haworth)'
          }
        ]
      }
    },
    {
      id: 'carbo2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Fischer projection**: vertical = going back, horizontal = coming forward
- **Haworth projection**: shows cyclic hemiacetal form
- **α anomer**: -OH on anomeric carbon is axial (down in Haworth)
- **β anomer**: -OH on anomeric carbon is equatorial (up in Haworth)
      `
    },
    {
      id: 'carbo2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to fischer & haworth projections?',
            options: [
              '-OH on anomeric carbon is equatorial (up in Haworth)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'β anomer: -OH on anomeric carbon is equatorial (up in Haworth)'
          }
        ]
      }
    },
    {
      id: 'carbo2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fischer projection',
            options: ['vertical = going back, horizontal = coming forward', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Haworth projection',
            options: ['shows cyclic hemiacetal form', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'α anomer',
            options: ['-OH on anomeric carbon is axial (down in Haworth)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['vertical = going back, horizontal = coming forward', 'shows cyclic hemiacetal form', '-OH on anomeric carbon is axial (down in Haworth)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Fischer & Haworth Projections.'
      }
    }
  ]
}
