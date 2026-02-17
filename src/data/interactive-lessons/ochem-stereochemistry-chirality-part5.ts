export const oChemStereoPart5Data = {
  topicSlug: 'stereochemistry-chirality',
  sections: [
    {
      id: 'stere5-intro',
      type: 'text' as const,
      content: `
# Fischer Projections

**Part 5 of 7 — Fischer Projections**

### 1. Fischer projections

horizontal = coming toward you, vertical = going away

### 2. Used especially for sugars and amino acids

Used especially for sugars and amino acids

### 3. Rotating 90° inverts configuration

Rotating 90° inverts configuration

### 4. Switching two groups inverts R/S

Switching two groups inverts R/S
      `
    },
    {
      id: 'stere5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Fischer projections" refer to in this topic?',
            options: [
              'Used especially for sugars and amino acids',
              'Rotating 90° inverts configuration',
              'Switching two groups inverts R/S',
              'horizontal = coming toward you, vertical = going away'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Fischer projections: horizontal = coming toward you, vertical = going away. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Rotating 90° inverts configuration:',
            options: [
              'Switching two groups inverts R/S',
              'Rotating 90° inverts configuration',
              'horizontal = coming toward you, vertical = going away',
              'Used especially for sugars and amino acids'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Rotating 90° inverts configuration. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'stere5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Fischer projections**: horizontal = coming toward you, vertical = going away
- **Used especially for sugars and amino acids**
- **Rotating 90° inverts configuration**
- **Switching two groups inverts R/S**
      `
    },
    {
      id: 'stere5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to fischer projections?',
            options: [
              'Switching two groups inverts R/S',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Switching two groups inverts R/S'
          }
        ]
      }
    },
    {
      id: 'stere5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fischer projections',
            options: ['Used especially for sugars and amino acids', 'horizontal = coming toward you, vertical = going away', 'Rotating 90° inverts configuration', 'Switching two groups inverts R/S']
          },
          {
            label: 'Used especially for sugars and amino…',
            options: ['Switching two groups inverts R/S', 'horizontal = coming toward you, vertical = going away', 'Rotating 90° inverts configuration', 'Used especially for sugars and amino acids']
          },
          {
            label: 'Rotating 90° inverts configuration',
            options: ['Used especially for sugars and amino acids', 'Switching two groups inverts R/S', 'horizontal = coming toward you, vertical = going away', 'Rotating 90° inverts configuration']
          }
        ],
        correctAnswers: ['horizontal = coming toward you, vertical = going away', 'Used especially for sugars and amino acids', 'Rotating 90° inverts configuration'],
        hint1: 'Think about what each concept specifically describes in Fischer Projections.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Fischer Projections describes a specific idea. Fischer projections: horizontal = coming toward you, vertical = going away. Used especially for sugars and amino acids. Rotating 90° inverts configuration.'
      }
    }
  ]
}
