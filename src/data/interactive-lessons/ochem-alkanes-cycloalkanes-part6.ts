export const oChemAlkanesPart6Data = {
  topicSlug: 'alkanes-cycloalkanes',
  sections: [
    {
      id: 'alkan6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Naming alkanes and cycloalkanes

Naming alkanes and cycloalkanes

### 2. Drawing Newman projections

Drawing Newman projections

### 3. Analyzing cyclohexane chair conformations

Analyzing cyclohexane chair conformations

### 4. Predicting most stable conformations

Predicting most stable conformations
      `
    },
    {
      id: 'alkan6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Naming alkanes and cycloalkanes',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Naming alkanes and cycloalkanes'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Analyzing cyclohexane chair conformations',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing cyclohexane chair conformations'
          }
        ]
      }
    },
    {
      id: 'alkan6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Naming alkanes and cycloalkanes**
- **Drawing Newman projections**
- **Analyzing cyclohexane chair conformations**
- **Predicting most stable conformations**
      `
    },
    {
      id: 'alkan6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Predicting most stable conformations',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Predicting most stable conformations'
          }
        ]
      }
    },
    {
      id: 'alkan6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Naming alkanes and cycloalkanes',
            options: ['Naming alkanes and cycloalkanes', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Drawing Newman projections',
            options: ['Drawing Newman projections', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Analyzing cyclohexane chair conformations',
            options: ['Analyzing cyclohexane chair conformations', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Naming alkanes and cycloalkanes', 'Drawing Newman projections', 'Analyzing cyclohexane chair conformations'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
