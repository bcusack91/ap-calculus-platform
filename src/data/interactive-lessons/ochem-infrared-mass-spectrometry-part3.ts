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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes O-H (alcohol)?',
            options: [
              '3300-3500 cm⁻¹',
              '~2150 cm⁻¹; C≡N (nitrile): ~2250 cm⁻¹',
              '1680-1750 cm⁻¹ (strong, sharp)',
              '3200-3600 cm⁻¹ (broad)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — O-H (alcohol): 3200-3600 cm⁻¹ (broad). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Key IR Absorptions, which explains C=O (carbonyl)?',
            options: [
              '~2150 cm⁻¹; C≡N (nitrile): ~2250 cm⁻¹',
              '3300-3500 cm⁻¹',
              '3200-3600 cm⁻¹ (broad)',
              '1680-1750 cm⁻¹ (strong, sharp)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — C=O (carbonyl): 1680-1750 cm⁻¹ (strong, sharp). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'O-H (alcohol)',
            options: ['3200-3600 cm⁻¹ (broad)', '3300-3500 cm⁻¹', '1680-1750 cm⁻¹ (strong, sharp)', '~2150 cm⁻¹; C≡N (nitrile): ~2250 cm⁻¹']
          },
          {
            label: 'N-H (amine)',
            options: ['~2150 cm⁻¹; C≡N (nitrile): ~2250 cm⁻¹', '3200-3600 cm⁻¹ (broad)', '1680-1750 cm⁻¹ (strong, sharp)', '3300-3500 cm⁻¹']
          },
          {
            label: 'C=O (carbonyl)',
            options: ['~2150 cm⁻¹; C≡N (nitrile): ~2250 cm⁻¹', '3200-3600 cm⁻¹ (broad)', '3300-3500 cm⁻¹', '1680-1750 cm⁻¹ (strong, sharp)']
          }
        ],
        correctAnswers: ['3200-3600 cm⁻¹ (broad)', '3300-3500 cm⁻¹', '1680-1750 cm⁻¹ (strong, sharp)'],
        hint1: 'Think about what each concept specifically describes in Key IR Absorptions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Key IR Absorptions describes a specific idea. O-H (alcohol): 3200-3600 cm⁻¹ (broad). N-H (amine): 3300-3500 cm⁻¹. C=O (carbonyl): 1680-1750 cm⁻¹ (strong, sharp).'
      }
    }
  ]
}
