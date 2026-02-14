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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Assigning R/S configuration to stereocenters',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Assigning R/S configuration to stereocenters'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Determining optical activity',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Determining optical activity'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Assigning R/S configuration to stereocenters',
            options: ['Assigning R/S configuration to stereocenters', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Identifying stereoisomer relationships',
            options: ['Identifying stereoisomer relationships', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Determining optical activity',
            options: ['Determining optical activity', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Assigning R/S configuration to stereocenters', 'Identifying stereoisomer relationships', 'Determining optical activity'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
