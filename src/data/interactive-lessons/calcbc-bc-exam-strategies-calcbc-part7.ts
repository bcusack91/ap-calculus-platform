export const calcBCExamStrategiesPart7Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'bc-ex7-intro',
      type: 'text' as const,
      content: `
# Comprehensive Review

**Part 7 of 7 — Comprehensive Review**

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
      id: 'bc-ex7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Practice with released AP exams under…?',
            options: [
              'don\'t spend too long on any one problem',
              'Show all work on free-response — communication matters',
              'Practice with released AP exams under timed conditions',
              'store functions, use numerical integration'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Practice with released AP exams under timed conditions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Show all work on free-response —…:',
            options: [
              'Practice with released AP exams under timed conditions',
              'don\'t spend too long on any one problem',
              'Show all work on free-response — communication matters',
              'store functions, use numerical integration'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Show all work on free-response — communication matters. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'bc-ex7-detail',
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
      id: 'bc-ex7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Time management?',
            options: [
              'store functions, use numerical integration',
              'don\'t spend too long on any one problem',
              'Practice with released AP exams under timed conditions',
              'Show all work on free-response — communication matters'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Time management: don\'t spend too long on any one problem. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'bc-ex7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Master the calculator',
            options: ['Practice with released AP exams under timed conditions', 'don\'t spend too long on any one problem', 'store functions, use numerical integration', 'Show all work on free-response — communication matters']
          },
          {
            label: 'Time management',
            options: ['Practice with released AP exams under timed conditions', 'don\'t spend too long on any one problem', 'store functions, use numerical integration', 'Show all work on free-response — communication matters']
          }
        ],
        correctAnswers: ['store functions, use numerical integration', 'don\'t spend too long on any one problem'],
        hint1: 'Think about what each concept specifically describes in Comprehensive Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Comprehensive Review describes a specific idea. Master the calculator: store functions, use numerical integration. Time management: don\'t spend too long on any one problem.'
      }
    }
  ]
}
