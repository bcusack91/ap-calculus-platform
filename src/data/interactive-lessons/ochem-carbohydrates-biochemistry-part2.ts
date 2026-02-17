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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Fischer projection" refer to in this topic?',
            options: [
              '-OH on anomeric carbon is equatorial (up in Haworth)',
              'vertical = going back, horizontal = coming forward',
              'shows cyclic hemiacetal form',
              '-OH on anomeric carbon is axial (down in Haworth)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Fischer projection: vertical = going back, horizontal = coming forward. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Fischer & Haworth Projections, which explains α anomer?',
            options: [
              '-OH on anomeric carbon is equatorial (up in Haworth)',
              '-OH on anomeric carbon is axial (down in Haworth)',
              'vertical = going back, horizontal = coming forward',
              'shows cyclic hemiacetal form'
            ],
            correctAnswer: 1,
            explanation: 'Correct — α anomer: -OH on anomeric carbon is axial (down in Haworth). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fischer projection',
            options: ['-OH on anomeric carbon is axial (down in Haworth)', '-OH on anomeric carbon is equatorial (up in Haworth)', 'shows cyclic hemiacetal form', 'vertical = going back, horizontal = coming forward']
          },
          {
            label: 'Haworth projection',
            options: ['-OH on anomeric carbon is axial (down in Haworth)', 'vertical = going back, horizontal = coming forward', 'shows cyclic hemiacetal form', '-OH on anomeric carbon is equatorial (up in Haworth)']
          },
          {
            label: 'α anomer',
            options: ['vertical = going back, horizontal = coming forward', 'shows cyclic hemiacetal form', '-OH on anomeric carbon is axial (down in Haworth)', '-OH on anomeric carbon is equatorial (up in Haworth)']
          }
        ],
        correctAnswers: ['vertical = going back, horizontal = coming forward', 'shows cyclic hemiacetal form', '-OH on anomeric carbon is axial (down in Haworth)'],
        hint1: 'Think about what each concept specifically describes in Fischer & Haworth Projections.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Fischer & Haworth Projections describes a specific idea. Fischer projection: vertical = going back, horizontal = coming forward. Haworth projection: shows cyclic hemiacetal form. α anomer: -OH on anomeric carbon is axial (down in Haworth).'
      }
    }
  ]
}
