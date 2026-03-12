export const oChemMolRepPart4Data = {
  topicSlug: 'molecular-representations',
  sections: [
    {
      id: 'molec4-intro',
      type: 'text' as const,
      content: `
# Degrees of Unsaturation

**Part 4 of 7 — Degrees of Unsaturation**

### 1. Degrees of unsaturation (DoU) = (2C + 2 + N - H - X) / 2

Degrees of unsaturation (DoU) = (2C + 2 + N - H - X) / 2

### 2. 1 DoU = one ring OR one double bond

1 DoU = one ring OR one double bond

### 3. 2 DoU = two double bonds, one triple bond, or ring + double bond

2 DoU = two double bonds, one triple bond, or ring + double bond

### 4. Benzene ring = 4 DoU

Benzene ring = 4 DoU
      `
    },
    {
      id: 'molec4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Degrees of unsaturation (DoU) = (2C + 2…?',
            options: [
              '1 DoU = one ring OR one double bond',
              '2 DoU = two double bonds, one triple bond, or ring + double bond',
              'Benzene ring = 4 DoU',
              'Degrees of unsaturation (DoU) = (2C + 2 + N - H - X) / 2'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Degrees of unsaturation (DoU) = (2C + 2 + N - H - X) / 2. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes 2 DoU = two double bonds, one triple…:',
            options: [
              'Degrees of unsaturation (DoU) = (2C + 2 + N - H - X) / 2',
              '1 DoU = one ring OR one double bond',
              'Benzene ring = 4 DoU',
              '2 DoU = two double bonds, one triple bond, or ring + double bond'
            ],
            correctAnswer: 3,
            explanation: 'Correct — 2 DoU = two double bonds, one triple bond, or ring + double bond. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'molec4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Degrees of unsaturation (DoU) = (2C + 2 + N - H - X) / 2**
- **1 DoU = one ring OR one double bond**
- **2 DoU = two double bonds, one triple bond, or ring + double bond**
- **Benzene ring = 4 DoU**
      `
    },
    {
      id: 'molec4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to degrees of unsaturation?',
            options: [
              'Benzene ring = 4 DoU',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Benzene ring = 4 DoU'
          }
        ]
      }
    },
    {
      id: 'molec4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Degrees of unsaturation (DoU) = (2C + 2…',
            options: ['1 DoU = one ring OR one double bond', 'Degrees of unsaturation (DoU) = (2C + 2 + N - H - X) / 2', 'Benzene ring = 4 DoU', '2 DoU = two double bonds, one triple bond, or ring + double bond']
          },
          {
            label: '1 DoU = one ring OR one double bond',
            options: ['2 DoU = two double bonds, one triple bond, or ring + double bond', '1 DoU = one ring OR one double bond', 'Benzene ring = 4 DoU', 'Degrees of unsaturation (DoU) = (2C + 2 + N - H - X) / 2']
          },
          {
            label: '2 DoU = two double bonds, one triple…',
            options: ['2 DoU = two double bonds, one triple bond, or ring + double bond', 'Benzene ring = 4 DoU', '1 DoU = one ring OR one double bond', 'Degrees of unsaturation (DoU) = (2C + 2 + N - H - X) / 2']
          }
        ],
        correctAnswers: ['Degrees of unsaturation (DoU) = (2C + 2 + N - H - X) / 2', '1 DoU = one ring OR one double bond', '2 DoU = two double bonds, one triple bond, or ring + double bond'],
        hint1: 'Think about what each concept specifically describes in Degrees of Unsaturation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Degrees of Unsaturation describes a specific idea. Degrees of unsaturation (DoU) = (2C + 2 + N - H - X) / 2. 1 DoU = one ring OR one double bond. 2 DoU = two double bonds, one triple bond, or ring + double bond.'
      }
    }
  ]
}
