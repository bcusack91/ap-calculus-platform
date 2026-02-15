export const calcABFreeResponsePart5Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'free-5-intro',
      type: 'text' as const,
      content: `
# Differential Equation Problems

**Part 5 of 7 — Differential Equation Problems**

### 1. Sketch solution curve on slope field through given initial condition

Sketch solution curve on slope field through given initial condition

### 2. Separate and integrate with proper technique

Separate and integrate with proper technique

### 3. Apply initial condition to find particular solution

Apply initial condition to find particular solution

### 4. State the domain of the particular solution

State the domain of the particular solution
      `
    },
    {
      id: 'free-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of differential equation problems?',
            options: [
              'Sketch solution curve on slope field through given initial condition',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Sketch solution curve on slope field through given initial condition'
          },
          {
            question: 'In the context of differential equation problems, which is accurate?',
            options: [
              'Apply initial condition to find particular solution',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Apply initial condition to find particular solution'
          }
        ]
      }
    },
    {
      id: 'free-5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Sketch solution curve on slope field through given initial condition**
- **Separate and integrate with proper technique**
- **Apply initial condition to find particular solution**
- **State the domain of the particular solution**
      `
    },
    {
      id: 'free-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to differential equation problems?',
            options: [
              'State the domain of the particular solution',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'State the domain of the particular solution'
          }
        ]
      }
    },
    {
      id: 'free-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sketch solution curve on slope field through given initial condition',
            options: ['Sketch solution curve on slope field through given', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Separate and integrate with proper technique',
            options: ['Separate and integrate with proper technique', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Apply initial condition to find particular solution',
            options: ['Apply initial condition to find particular solutio', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Sketch solution curve on slope field through given', 'Separate and integrate with proper technique', 'Apply initial condition to find particular solutio'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Differential Equation Problems.'
      }
    }
  ]
}
