export const oChemStereoPart6Data = {
  topicSlug: 'stereochemistry-chirality',
  sections: [
    {
      id: 'stere6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Assigning R/S configuration to stereocenters

Assigning R/S configuration to stereocenters

### 2. Identifying stereoisomer relationships

Identifying stereoisomer relationships

### 3. Determining optical activity

Determining optical activity

### 4. Drawing and interpreting Fischer projections

Drawing and interpreting Fischer projections
      `
    },
    {
      id: 'stere6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Assigning R/S configuration to…" refer to in this topic?',
            options: [
              'Identifying stereoisomer relationships',
              'Assigning R/S configuration to stereocenters',
              'Determining optical activity',
              'Drawing and interpreting Fischer projections'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Assigning R/S configuration to stereocenters. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Determining optical activity?',
            options: [
              'Determining optical activity',
              'Identifying stereoisomer relationships',
              'Assigning R/S configuration to stereocenters',
              'Drawing and interpreting Fischer projections'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Determining optical activity. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'stere6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Assigning R/S configuration to stereocenters**
- **Identifying stereoisomer relationships**
- **Determining optical activity**
- **Drawing and interpreting Fischer projections**
      `
    },
    {
      id: 'stere6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Drawing and interpreting Fischer projections',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Drawing and interpreting Fischer projections'
          }
        ]
      }
    },
    {
      id: 'stere6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Assigning R/S configuration to…',
            options: ['Assigning R/S configuration to stereocenters', 'Identifying stereoisomer relationships', 'Drawing and interpreting Fischer projections', 'Determining optical activity']
          },
          {
            label: 'Identifying stereoisomer relationships',
            options: ['Assigning R/S configuration to stereocenters', 'Identifying stereoisomer relationships', 'Drawing and interpreting Fischer projections', 'Determining optical activity']
          },
          {
            label: 'Determining optical activity',
            options: ['Drawing and interpreting Fischer projections', 'Assigning R/S configuration to stereocenters', 'Identifying stereoisomer relationships', 'Determining optical activity']
          }
        ],
        correctAnswers: ['Assigning R/S configuration to stereocenters', 'Identifying stereoisomer relationships', 'Determining optical activity'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Assigning R/S configuration to stereocenters. Identifying stereoisomer relationships. Determining optical activity.'
      }
    }
  ]
}
