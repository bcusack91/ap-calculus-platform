export const calcBCExamStrategiesPart5Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'bc-ex5-intro',
      type: 'text' as const,
      content: `
# Full Exam Review

**Part 5 of 7 — Full Exam Review**

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
      id: 'bc-ex5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of full exam review?',
            options: [
              'Practice with released AP exams under timed conditions',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Practice with released AP exams under timed conditions'
          },
          {
            question: 'In the context of full exam review, which is accurate?',
            options: [
              'Show all work on free-response — communication matters',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Show all work on free-response — communication matters'
          }
        ]
      }
    },
    {
      id: 'bc-ex5-detail',
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
      id: 'bc-ex5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to full exam review?',
            options: [
              'don\'t spend too long on any one problem',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Time management: don\'t spend too long on any one problem'
          }
        ]
      }
    },
    {
      id: 'bc-ex5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Practice with released AP exams under timed conditions',
            options: ['Practice with released AP exams under timed condit', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Master the calculator',
            options: ['store functions, use numerical integration', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Show all work on free-response — communication matters',
            options: ['Show all work on free-response — communication mat', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Practice with released AP exams under timed condit', 'store functions, use numerical integration', 'Show all work on free-response — communication mat'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Full Exam Review.'
      }
    }
  ]
}
