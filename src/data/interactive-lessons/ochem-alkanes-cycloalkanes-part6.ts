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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Naming alkanes and cycloalkanes?',
            options: [
              'Analyzing cyclohexane chair conformations',
              'Predicting most stable conformations',
              'Naming alkanes and cycloalkanes',
              'Drawing Newman projections'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Naming alkanes and cycloalkanes. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Analyzing cyclohexane chair…?',
            options: [
              'Analyzing cyclohexane chair conformations',
              'Predicting most stable conformations',
              'Drawing Newman projections',
              'Naming alkanes and cycloalkanes'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Analyzing cyclohexane chair conformations. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Naming alkanes and cycloalkanes',
            options: ['Drawing Newman projections', 'Naming alkanes and cycloalkanes', 'Predicting most stable conformations', 'Analyzing cyclohexane chair conformations']
          },
          {
            label: 'Drawing Newman projections',
            options: ['Predicting most stable conformations', 'Naming alkanes and cycloalkanes', 'Drawing Newman projections', 'Analyzing cyclohexane chair conformations']
          },
          {
            label: 'Analyzing cyclohexane chair…',
            options: ['Drawing Newman projections', 'Naming alkanes and cycloalkanes', 'Predicting most stable conformations', 'Analyzing cyclohexane chair conformations']
          }
        ],
        correctAnswers: ['Naming alkanes and cycloalkanes', 'Drawing Newman projections', 'Analyzing cyclohexane chair conformations'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Naming alkanes and cycloalkanes. Drawing Newman projections. Analyzing cyclohexane chair conformations.'
      }
    }
  ]
}
