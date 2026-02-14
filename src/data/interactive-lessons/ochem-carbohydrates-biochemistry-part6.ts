export const oChemCarbsPart6Data = {
  topicSlug: 'carbohydrates-biochemistry',
  sections: [
    {
      id: 'carbo6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Drawing Fischer and Haworth projections

Drawing Fischer and Haworth projections

### 2. Identifying anomers and epimers

Identifying anomers and epimers

### 3. Predicting reducing vs nonreducing sugars

Predicting reducing vs nonreducing sugars

### 4. Analyzing glycosidic bond types

Analyzing glycosidic bond types
      `
    },
    {
      id: 'carbo6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Drawing Fischer and Haworth projections',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Drawing Fischer and Haworth projections'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Predicting reducing vs nonreducing sugars',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Predicting reducing vs nonreducing sugars'
          }
        ]
      }
    },
    {
      id: 'carbo6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Drawing Fischer and Haworth projections**
- **Identifying anomers and epimers**
- **Predicting reducing vs nonreducing sugars**
- **Analyzing glycosidic bond types**
      `
    },
    {
      id: 'carbo6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Analyzing glycosidic bond types',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing glycosidic bond types'
          }
        ]
      }
    },
    {
      id: 'carbo6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Drawing Fischer and Haworth projections',
            options: ['Drawing Fischer and Haworth projections', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Identifying anomers and epimers',
            options: ['Identifying anomers and epimers', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Predicting reducing vs nonreducing sugars',
            options: ['Predicting reducing vs nonreducing sugars', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Drawing Fischer and Haworth projections', 'Identifying anomers and epimers', 'Predicting reducing vs nonreducing sugars'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
