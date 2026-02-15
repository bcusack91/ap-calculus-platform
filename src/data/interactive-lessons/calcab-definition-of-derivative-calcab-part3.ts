export const calcABDerivativeDefPart3Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'defin3-intro',
      type: 'text' as const,
      content: `
# Derivative as a Function

**Part 3 of 7 — Derivative as a Function**

### 1. f'(x) is itself a function — it has its own domain, range, and graph

f'(x) is itself a function — it has its own domain, range, and graph

### 2. f'(x) > 0 means f is increasing; f'(x) < 0 means f is decreasing

f'(x) > 0 means f is increasing; f'(x) < 0 means f is decreasing

### 3. f'(x) = 0 at horizontal tangent lines (potential extrema)

f'(x) = 0 at horizontal tangent lines (potential extrema)

### 4. The derivative of a polynomial of degree n has degree n-1

The derivative of a polynomial of degree n has degree n-1
      `
    },
    {
      id: 'defin3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of derivative as a function?',
            options: [
              'f\'(x) is itself a function — it has its own domain, range, and graph',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'f\'(x) is itself a function — it has its own domain, range, and graph'
          },
          {
            question: 'In the context of derivative as a function, which is accurate?',
            options: [
              'f\'(x) = 0 at horizontal tangent lines (potential extrema)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'f\'(x) = 0 at horizontal tangent lines (potential extrema)'
          }
        ]
      }
    },
    {
      id: 'defin3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **f'(x) is itself a function — it has its own domain, range, and graph**
- **f'(x) > 0 means f is increasing; f'(x) < 0 means f is decreasing**
- **f'(x) = 0 at horizontal tangent lines (potential extrema)**
- **The derivative of a polynomial of degree n has degree n-1**
      `
    },
    {
      id: 'defin3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to derivative as a function?',
            options: [
              'The derivative of a polynomial of degree n has degree n-1',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'The derivative of a polynomial of degree n has degree n-1'
          }
        ]
      }
    },
    {
      id: 'defin3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f\'(x) is itself a function — it has its own domain, range, and graph',
            options: ['f\'(x) is itself a function — it has its own domain', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'f\'(x) > 0 means f is increasing; f\'(x) < 0 means f is decreasing',
            options: ['f\'(x) > 0 means f is increasing; f\'(x) < 0 means f', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'f\'(x) = 0 at horizontal tangent lines (potential extrema)',
            options: ['f\'(x) = 0 at horizontal tangent lines (potential e', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['f\'(x) is itself a function — it has its own domain', 'f\'(x) > 0 means f is increasing; f\'(x) < 0 means f', 'f\'(x) = 0 at horizontal tangent lines (potential e'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Derivative as a Function.'
      }
    }
  ]
}
