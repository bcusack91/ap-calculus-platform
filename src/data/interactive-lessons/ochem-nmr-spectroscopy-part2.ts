export const oChemNMRPart2Data = {
  topicSlug: 'nmr-spectroscopy',
  sections: [
    {
      id: 'nmr-s2-intro',
      type: 'text' as const,
      content: `
# Chemical Shift

**Part 2 of 7 — Chemical Shift**

### 1. TMS (tetramethylsilane) = 0 ppm reference

TMS (tetramethylsilane) = 0 ppm reference

### 2. Alkyl H

0.8-1.5 ppm

### 3. Allylic/adjacent to C=O

2.0-2.5 ppm

### 4. Aromatic H

6.5-8.0 ppm; Aldehyde H: 9-10 ppm; Carboxylic acid: 10-12 ppm
      `
    },
    {
      id: 'nmr-s2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes TMS (tetramethylsilane) = 0 ppm…?',
            options: [
              '0.8-1.5 ppm',
              'TMS (tetramethylsilane) = 0 ppm reference',
              '2.0-2.5 ppm',
              '6.5-8.0 ppm; Aldehyde H: 9-10 ppm; Carboxylic acid: 10-12 ppm'
            ],
            correctAnswer: 1,
            explanation: 'Correct — TMS (tetramethylsilane) = 0 ppm reference. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Chemical Shift, which explains Allylic/adjacent to C=O?',
            options: [
              'TMS (tetramethylsilane) = 0 ppm reference',
              '2.0-2.5 ppm',
              '0.8-1.5 ppm',
              '6.5-8.0 ppm; Aldehyde H: 9-10 ppm; Carboxylic acid: 10-12 ppm'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Allylic/adjacent to C=O: 2.0-2.5 ppm. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'nmr-s2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **TMS (tetramethylsilane) = 0 ppm reference**
- **Alkyl H**: 0.8-1.5 ppm
- **Allylic/adjacent to C=O**: 2.0-2.5 ppm
- **Aromatic H**: 6.5-8.0 ppm; Aldehyde H: 9-10 ppm; Carboxylic acid: 10-12 ppm
      `
    },
    {
      id: 'nmr-s2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to chemical shift?',
            options: [
              '6.5-8.0 ppm; Aldehyde H: 9-10 ppm; Carboxylic acid: 10-12 ppm',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Aromatic H: 6.5-8.0 ppm; Aldehyde H: 9-10 ppm; Carboxylic acid: 10-12 ppm'
          }
        ]
      }
    },
    {
      id: 'nmr-s2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Alkyl H',
            options: ['6.5-8.0 ppm; Aldehyde H: 9-10 ppm; Carboxylic acid: 10-12 ppm', '0.8-1.5 ppm', '2.0-2.5 ppm', 'TMS (tetramethylsilane) = 0 ppm reference']
          },
          {
            label: 'Allylic/adjacent to C=O',
            options: ['TMS (tetramethylsilane) = 0 ppm reference', '6.5-8.0 ppm; Aldehyde H: 9-10 ppm; Carboxylic acid: 10-12 ppm', '2.0-2.5 ppm', '0.8-1.5 ppm']
          },
          {
            label: 'Aromatic H',
            options: ['TMS (tetramethylsilane) = 0 ppm reference', '0.8-1.5 ppm', '6.5-8.0 ppm; Aldehyde H: 9-10 ppm; Carboxylic acid: 10-12 ppm', '2.0-2.5 ppm']
          }
        ],
        correctAnswers: ['0.8-1.5 ppm', '2.0-2.5 ppm', '6.5-8.0 ppm; Aldehyde H: 9-10 ppm; Carboxylic acid: 10-12 ppm'],
        hint1: 'Think about what each concept specifically describes in Chemical Shift.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Chemical Shift describes a specific idea. Alkyl H: 0.8-1.5 ppm. Allylic/adjacent to C=O: 2.0-2.5 ppm. Aromatic H: 6.5-8.0 ppm; Aldehyde H: 9-10 ppm; Carboxylic acid: 10-12 ppm.'
      }
    }
  ]
}
