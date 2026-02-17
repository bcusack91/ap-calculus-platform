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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Drawing Fischer and Haworth projections" refer to in this topic?',
            options: [
              'Predicting reducing vs nonreducing sugars',
              'Analyzing glycosidic bond types',
              'Drawing Fischer and Haworth projections',
              'Identifying anomers and epimers'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Drawing Fischer and Haworth projections. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Predicting reducing vs nonreducing…?',
            options: [
              'Identifying anomers and epimers',
              'Drawing Fischer and Haworth projections',
              'Analyzing glycosidic bond types',
              'Predicting reducing vs nonreducing sugars'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Predicting reducing vs nonreducing sugars. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Drawing Fischer and Haworth projections',
            options: ['Predicting reducing vs nonreducing sugars', 'Drawing Fischer and Haworth projections', 'Analyzing glycosidic bond types', 'Identifying anomers and epimers']
          },
          {
            label: 'Identifying anomers and epimers',
            options: ['Drawing Fischer and Haworth projections', 'Identifying anomers and epimers', 'Analyzing glycosidic bond types', 'Predicting reducing vs nonreducing sugars']
          },
          {
            label: 'Predicting reducing vs nonreducing…',
            options: ['Analyzing glycosidic bond types', 'Drawing Fischer and Haworth projections', 'Predicting reducing vs nonreducing sugars', 'Identifying anomers and epimers']
          }
        ],
        correctAnswers: ['Drawing Fischer and Haworth projections', 'Identifying anomers and epimers', 'Predicting reducing vs nonreducing sugars'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Drawing Fischer and Haworth projections. Identifying anomers and epimers. Predicting reducing vs nonreducing sugars.'
      }
    }
  ]
}
