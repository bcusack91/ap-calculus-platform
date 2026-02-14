export const oChemIRMSPart3Data = {
  topicSlug: 'infrared-mass-spectrometry',
  sections: [
    {
      id: 'infra3-intro',
      type: 'text' as const,
      content: `
# Key IR Absorptions

**Part 3 of 7 — Key IR Absorptions**

### 1. O-H (alcohol)

3200-3600 cm⁻¹ (broad)

### 2. N-H (amine)

3300-3500 cm⁻¹

### 3. C=O (carbonyl)

1680-1750 cm⁻¹ (strong, sharp)

### 4. C≡C (alkyne)

~2150 cm⁻¹; C≡N (nitrile): ~2250 cm⁻¹
      `
    },
    {
      id: 'infra3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of key ir absorptions?',
            options: [
              'O-H (alcohol)',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'O-H (alcohol): 3200-3600 cm⁻¹ (broad)'
          },
          {
            question: 'In the context of key ir absorptions, which is accurate?',
            options: [
              '1680-1750 cm⁻¹ (strong, sharp)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'C=O (carbonyl): 1680-1750 cm⁻¹ (strong, sharp)'
          }
        ]
      }
    },
    {
      id: 'infra3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **O-H (alcohol)**: 3200-3600 cm⁻¹ (broad)
- **N-H (amine)**: 3300-3500 cm⁻¹
- **C=O (carbonyl)**: 1680-1750 cm⁻¹ (strong, sharp)
- **C≡C (alkyne)**: ~2150 cm⁻¹; C≡N (nitrile): ~2250 cm⁻¹
      `
    },
    {
      id: 'infra3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to key ir absorptions?',
            options: [
              '~2150 cm⁻¹; C≡N (nitrile): ~2250 cm⁻¹',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'C≡C (alkyne): ~2150 cm⁻¹; C≡N (nitrile): ~2250 cm⁻¹'
          }
        ]
      }
    },
    {
      id: 'infra3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'O-H (alcohol)',
            options: ['3200-3600 cm⁻¹ (broad)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'N-H (amine)',
            options: ['3300-3500 cm⁻¹', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'C=O (carbonyl)',
            options: ['1680-1750 cm⁻¹ (strong, sharp)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['3200-3600 cm⁻¹ (broad)', '3300-3500 cm⁻¹', '1680-1750 cm⁻¹ (strong, sharp)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Key IR Absorptions.'
      }
    }
  ]
}
