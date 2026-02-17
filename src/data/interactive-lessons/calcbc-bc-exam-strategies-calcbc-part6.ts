export const calcBCExamStrategiesPart6Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'bc-ex6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Practice with released AP exams under timed conditions

Practice with released AP exams under timed conditions

### 2. Master the calculator

store functions, use numerical integration

### 3. Show all work on free-response — communication matters

Show all work on free-response — communication matters

### 4. Time management

don't spend too long on any one problem
      `
    },
    {
      id: 'bc-ex6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Practice with released AP exams under…?',
            options: [
              'Show all work on free-response — communication matters',
              'don\'t spend too long on any one problem',
              'store functions, use numerical integration',
              'Practice with released AP exams under timed conditions'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Practice with released AP exams under timed conditions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Show all work on free-response —…:',
            options: [
              'Show all work on free-response — communication matters',
              'Practice with released AP exams under timed conditions',
              'store functions, use numerical integration',
              'don\'t spend too long on any one problem'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Show all work on free-response — communication matters. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'bc-ex6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Practice with released AP exams under timed conditions**
- **Master the calculator**: store functions, use numerical integration
- **Show all work on free-response — communication matters**
- **Time management**: don't spend too long on any one problem
      `
    },
    {
      id: 'bc-ex6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Time management is correct?',
            options: [
              'Practice with released AP exams under timed conditions',
              'store functions, use numerical integration',
              'Show all work on free-response — communication matters',
              'don\'t spend too long on any one problem'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Time management: don\'t spend too long on any one problem. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'bc-ex6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Master the calculator',
            options: ['Show all work on free-response — communication matters', 'store functions, use numerical integration', 'don\'t spend too long on any one problem', 'Practice with released AP exams under timed conditions']
          },
          {
            label: 'Time management',
            options: ['Practice with released AP exams under timed conditions', 'store functions, use numerical integration', 'don\'t spend too long on any one problem', 'Show all work on free-response — communication matters']
          }
        ],
        correctAnswers: ['store functions, use numerical integration', 'don\'t spend too long on any one problem'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Master the calculator: store functions, use numerical integration. Time management: don\'t spend too long on any one problem.'
      }
    }
  ]
}
