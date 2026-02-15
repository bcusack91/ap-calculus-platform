export const calcABAntiderivativesPart5Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'antid5-intro',
      type: 'text' as const,
      content: `
# Initial Value Problems

**Part 5 of 7 — Initial Value Problems**

### 1. Given f'(x) and an initial condition f(a) = b, find f(x)

Given f'(x) and an initial condition f(a) = b, find f(x)

### 2. Integrate f'(x) to get f(x) + C

Integrate f'(x) to get f(x) + C

### 3. Use the initial condition to solve for C

Use the initial condition to solve for C

### 4. Velocity → position and acceleration → velocity are common applications

Velocity → position and acceleration → velocity are common applications
      `
    },
    {
      id: 'antid5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of initial value problems?',
            options: [
              'Given f\'(x) and an initial condition f(a) = b, find f(x)',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Given f\'(x) and an initial condition f(a) = b, find f(x)'
          },
          {
            question: 'In the context of initial value problems, which is accurate?',
            options: [
              'Use the initial condition to solve for C',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Use the initial condition to solve for C'
          }
        ]
      }
    },
    {
      id: 'antid5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Given f'(x) and an initial condition f(a) = b, find f(x)**
- **Integrate f'(x) to get f(x) + C**
- **Use the initial condition to solve for C**
- **Velocity → position and acceleration → velocity are common applications**
      `
    },
    {
      id: 'antid5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to initial value problems?',
            options: [
              'Velocity → position and acceleration → velocity are common applications',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Velocity → position and acceleration → velocity are common applications'
          }
        ]
      }
    },
    {
      id: 'antid5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Given f\'(x) and an initial condition f(a) = b, find f(x)',
            options: ['Given f\'(x) and an initial condition f(a) = b, fin', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Integrate f\'(x) to get f(x) + C',
            options: ['Integrate f\'(x) to get f(x) + C', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Use the initial condition to solve for C',
            options: ['Use the initial condition to solve for C', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Given f\'(x) and an initial condition f(a) = b, fin', 'Integrate f\'(x) to get f(x) + C', 'Use the initial condition to solve for C'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Initial Value Problems.'
      }
    }
  ]
}
