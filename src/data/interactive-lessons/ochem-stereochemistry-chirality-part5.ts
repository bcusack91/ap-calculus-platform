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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of fischer projections?',
            options: [
              'Fischer projections',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Fischer projections: horizontal = coming toward you, vertical = going away'
          },
          {
            question: 'In the context of fischer projections, which is accurate?',
            options: [
              'Rotating 90° inverts configuration',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Rotating 90° inverts configuration'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fischer projections',
            options: ['horizontal = coming toward you, vertical = going a', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Used especially for sugars and amino acids',
            options: ['Used especially for sugars and amino acids', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Rotating 90° inverts configuration',
            options: ['Rotating 90° inverts configuration', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['horizontal = coming toward you, vertical = going a', 'Used especially for sugars and amino acids', 'Rotating 90° inverts configuration'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Fischer Projections.'
      }
    }
  ]
}
