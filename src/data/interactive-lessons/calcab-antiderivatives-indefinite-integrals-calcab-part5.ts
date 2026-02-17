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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Given f\'(x) and an initial condition…?',
            options: [
              'Integrate f\'(x) to get f(x) + C',
              'Given f\'(x) and an initial condition f(a) = b, find f(x)',
              'Velocity → position and acceleration → velocity are common applications',
              'Use the initial condition to solve for C'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Given f\'(x) and an initial condition f(a) = b, find f(x). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Use the initial condition to solve for C?',
            options: [
              'Velocity → position and acceleration → velocity are common applications',
              'Given f\'(x) and an initial condition f(a) = b, find f(x)',
              'Integrate f\'(x) to get f(x) + C',
              'Use the initial condition to solve for C'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Use the initial condition to solve for C. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Initial Value Problems, which correctly describes Velocity → position and acceleration →…?',
            options: [
              'Velocity → position and acceleration → velocity are common applications',
              'Integrate f\'(x) to get f(x) + C',
              'Use the initial condition to solve for C',
              'Given f\'(x) and an initial condition f(a) = b, find f(x)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Velocity → position and acceleration → velocity are common applications. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'antid5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Given f\'(x) and an initial condition…',
            options: ['Velocity → position and acceleration → velocity are common applications', 'Given f\'(x) and an initial condition f(a) = b, find f(x)', 'Use the initial condition to solve for C', 'Integrate f\'(x) to get f(x) + C']
          },
          {
            label: 'Integrate f\'(x) to get f(x) + C',
            options: ['Given f\'(x) and an initial condition f(a) = b, find f(x)', 'Integrate f\'(x) to get f(x) + C', 'Velocity → position and acceleration → velocity are common applications', 'Use the initial condition to solve for C']
          },
          {
            label: 'Use the initial condition to solve for C',
            options: ['Integrate f\'(x) to get f(x) + C', 'Use the initial condition to solve for C', 'Velocity → position and acceleration → velocity are common applications', 'Given f\'(x) and an initial condition f(a) = b, find f(x)']
          }
        ],
        correctAnswers: ['Given f\'(x) and an initial condition f(a) = b, find f(x)', 'Integrate f\'(x) to get f(x) + C', 'Use the initial condition to solve for C'],
        hint1: 'Think about what each concept specifically describes in Initial Value Problems.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Initial Value Problems describes a specific idea. Given f\'(x) and an initial condition f(a) = b, find f(x). Integrate f\'(x) to get f(x) + C. Use the initial condition to solve for C.'
      }
    }
  ]
}
