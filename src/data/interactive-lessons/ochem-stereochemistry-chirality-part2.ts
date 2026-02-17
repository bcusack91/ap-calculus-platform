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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Cahn-Ingold-Prelog priority rules" refer to in this topic?',
            options: [
              'clockwise (priority 1→2→3 with 4 pointing back)',
              'counterclockwise',
              'atomic number',
              'higher atomic number = higher priority'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Cahn-Ingold-Prelog priority rules: atomic number. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes S configuration:',
            options: [
              'higher atomic number = higher priority',
              'clockwise (priority 1→2→3 with 4 pointing back)',
              'counterclockwise',
              'atomic number'
            ],
            correctAnswer: 2,
            explanation: 'Correct — S configuration: counterclockwise. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cahn-Ingold-Prelog priority rules',
            options: ['atomic number', 'clockwise (priority 1→2→3 with 4 pointing back)', 'counterclockwise', 'higher atomic number = higher priority']
          },
          {
            label: 'R configuration',
            options: ['atomic number', 'higher atomic number = higher priority', 'counterclockwise', 'clockwise (priority 1→2→3 with 4 pointing back)']
          },
          {
            label: 'S configuration',
            options: ['higher atomic number = higher priority', 'counterclockwise', 'clockwise (priority 1→2→3 with 4 pointing back)', 'atomic number']
          }
        ],
        correctAnswers: ['atomic number', 'clockwise (priority 1→2→3 with 4 pointing back)', 'counterclockwise'],
        hint1: 'Think about what each concept specifically describes in R/S Configuration.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in R/S Configuration describes a specific idea. Cahn-Ingold-Prelog priority rules: atomic number. R configuration: clockwise (priority 1→2→3 with 4 pointing back). S configuration: counterclockwise.'
      }
    }
  ]
}
