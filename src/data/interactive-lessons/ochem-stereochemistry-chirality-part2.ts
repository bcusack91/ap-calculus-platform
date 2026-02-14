export const oChemStereoPart2Data = {
  topicSlug: 'stereochemistry-chirality',
  sections: [
    {
      id: 'stere2-intro',
      type: 'text' as const,
      content: `
# R/S Configuration

**Part 2 of 7 — R/S Configuration**

### 1. Cahn-Ingold-Prelog priority rules

atomic number

### 2. R configuration

clockwise (priority 1→2→3 with 4 pointing back)

### 3. S configuration

counterclockwise

### 4. Priority

higher atomic number = higher priority
      `
    },
    {
      id: 'stere2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of r/s configuration?',
            options: [
              'Cahn-Ingold-Prelog priority rules',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Cahn-Ingold-Prelog priority rules: atomic number'
          },
          {
            question: 'In the context of r/s configuration, which is accurate?',
            options: [
              'counterclockwise',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'S configuration: counterclockwise'
          }
        ]
      }
    },
    {
      id: 'stere2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Cahn-Ingold-Prelog priority rules**: atomic number
- **R configuration**: clockwise (priority 1→2→3 with 4 pointing back)
- **S configuration**: counterclockwise
- **Priority**: higher atomic number = higher priority
      `
    },
    {
      id: 'stere2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to r/s configuration?',
            options: [
              'higher atomic number = higher priority',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Priority: higher atomic number = higher priority'
          }
        ]
      }
    },
    {
      id: 'stere2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cahn-Ingold-Prelog priority rules',
            options: ['atomic number', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'R configuration',
            options: ['clockwise (priority 1→2→3 with 4 pointing back)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'S configuration',
            options: ['counterclockwise', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['atomic number', 'clockwise (priority 1→2→3 with 4 pointing back)', 'counterclockwise'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding R/S Configuration.'
      }
    }
  ]
}
