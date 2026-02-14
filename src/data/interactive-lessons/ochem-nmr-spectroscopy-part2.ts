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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of chemical shift?',
            options: [
              'TMS (tetramethylsilane) = 0 ppm reference',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'TMS (tetramethylsilane) = 0 ppm reference'
          },
          {
            question: 'In the context of chemical shift, which is accurate?',
            options: [
              '2.0-2.5 ppm',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Allylic/adjacent to C=O: 2.0-2.5 ppm'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'TMS (tetramethylsilane) = 0 ppm reference',
            options: ['TMS (tetramethylsilane) = 0 ppm reference', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Alkyl H',
            options: ['0.8-1.5 ppm', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Allylic/adjacent to C=O',
            options: ['2.0-2.5 ppm', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['TMS (tetramethylsilane) = 0 ppm reference', '0.8-1.5 ppm', '2.0-2.5 ppm'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Chemical Shift.'
      }
    }
  ]
}
