export const calcBCImproperPart6Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'impro6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Probability

∫₋∞^∞ f(x)dx = 1 for probability density functions

### 2. Laplace transforms use improper integrals

Laplace transforms use improper integrals

### 3. Area under curves that extend to infinity

Area under curves that extend to infinity

### 4. Gabriel's Horn

finite volume but infinite surface area
      `
    },
    {
      id: 'impro6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Probability',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Probability: ∫₋∞^∞ f(x)dx = 1 for probability density functions'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Area under curves that extend to infinity',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Area under curves that extend to infinity'
          }
        ]
      }
    },
    {
      id: 'impro6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Probability**: ∫₋∞^∞ f(x)dx = 1 for probability density functions
- **Laplace transforms use improper integrals**
- **Area under curves that extend to infinity**
- **Gabriel's Horn**: finite volume but infinite surface area
      `
    },
    {
      id: 'impro6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'finite volume but infinite surface area',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Gabriel\'s Horn: finite volume but infinite surface area'
          }
        ]
      }
    },
    {
      id: 'impro6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Probability',
            options: ['∫₋∞^∞ f(x)dx = 1 for probability density functions', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Laplace transforms use improper integrals',
            options: ['Laplace transforms use improper integrals', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Area under curves that extend to infinity',
            options: ['Area under curves that extend to infinity', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['∫₋∞^∞ f(x)dx = 1 for probability density functions', 'Laplace transforms use improper integrals', 'Area under curves that extend to infinity'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
