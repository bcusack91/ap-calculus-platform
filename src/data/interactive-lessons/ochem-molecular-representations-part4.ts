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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of degrees of unsaturation?',
            options: [
              'Degrees of unsaturation (DoU) = (2C + 2 + N - H - X) / 2',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Degrees of unsaturation (DoU) = (2C + 2 + N - H - X) / 2'
          },
          {
            question: 'In the context of degrees of unsaturation, which is accurate?',
            options: [
              '2 DoU = two double bonds, one triple bond, or ring + double bond',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: '2 DoU = two double bonds, one triple bond, or ring + double bond'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Degrees of unsaturation (DoU) = (2C + 2 + N - H - X) / 2',
            options: ['Degrees of unsaturation (DoU) = (2C + 2 + N - H - ', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: '1 DoU = one ring OR one double bond',
            options: ['1 DoU = one ring OR one double bond', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: '2 DoU = two double bonds, one triple bond, or ring + double bond',
            options: ['2 DoU = two double bonds, one triple bond, or ring', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Degrees of unsaturation (DoU) = (2C + 2 + N - H - ', '1 DoU = one ring OR one double bond', '2 DoU = two double bonds, one triple bond, or ring'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Degrees of Unsaturation.'
      }
    }
  ]
}
