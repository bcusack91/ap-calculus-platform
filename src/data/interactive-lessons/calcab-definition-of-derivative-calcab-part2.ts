export const calcABDerivativeDefPart2Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'defin2-intro',
      type: 'text' as const,
      content: `
# Limit Definition of the Derivative

**Part 2 of 7 — Limit Definition of the Derivative**

### 1. f'(x) = lim(h→0) [f(x+h) - f(x)]/h

f'(x) = lim(h→0) [f(x+h) - f(x)]/h

### 2. Alternative form

f'(a) = lim(x→a) [f(x) - f(a)]/(x - a)

### 3. The limit must exist for the derivative to exist

The limit must exist for the derivative to exist

### 4. This definition connects the slope concept to limits

This definition connects the slope concept to limits
      `
    },
    {
      id: 'defin2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of limit definition of the derivative?',
            options: [
              'f\'(x) = lim(h→0) [f(x+h) - f(x)]/h',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'f\'(x) = lim(h→0) [f(x+h) - f(x)]/h'
          },
          {
            question: 'In the context of limit definition of the derivative, which is accurate?',
            options: [
              'The limit must exist for the derivative to exist',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'The limit must exist for the derivative to exist'
          }
        ]
      }
    },
    {
      id: 'defin2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **f'(x) = lim(h→0) [f(x+h) - f(x)]/h**
- **Alternative form**: f'(a) = lim(x→a) [f(x) - f(a)]/(x - a)
- **The limit must exist for the derivative to exist**
- **This definition connects the slope concept to limits**
      `
    },
    {
      id: 'defin2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to limit definition of the derivative?',
            options: [
              'This definition connects the slope concept to limits',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'This definition connects the slope concept to limits'
          }
        ]
      }
    },
    {
      id: 'defin2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f\'(x) = lim(h→0) [f(x+h) - f(x)]/h',
            options: ['f\'(x) = lim(h→0) [f(x+h) - f(x)]/h', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Alternative form',
            options: ['f\'(a) = lim(x→a) [f(x) - f(a)]/(x - a)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'The limit must exist for the derivative to exist',
            options: ['The limit must exist for the derivative to exist', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['f\'(x) = lim(h→0) [f(x+h) - f(x)]/h', 'f\'(a) = lim(x→a) [f(x) - f(a)]/(x - a)', 'The limit must exist for the derivative to exist'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Limit Definition of the Derivative.'
      }
    }
  ]
}
