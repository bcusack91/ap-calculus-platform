export const calcABExamReviewPart2Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'ap-ex2-intro',
      type: 'text' as const,
      content: `
# Derivatives Review

**Part 2 of 7 — Derivatives Review**

### 1. Power, product, quotient, chain rules

Power, product, quotient, chain rules

### 2. Implicit differentiation and related rates

Implicit differentiation and related rates

### 3. Derivatives of trig, exponential, and logarithmic functions

Derivatives of trig, exponential, and logarithmic functions

### 4. Inverse function derivatives

(f⁻¹)'(a) = 1/f'(f⁻¹(a))
      `
    },
    {
      id: 'ap-ex2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of derivatives review?',
            options: [
              'Power, product, quotient, chain rules',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Power, product, quotient, chain rules'
          },
          {
            question: 'In the context of derivatives review, which is accurate?',
            options: [
              'Derivatives of trig, exponential, and logarithmic functions',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Derivatives of trig, exponential, and logarithmic functions'
          }
        ]
      }
    },
    {
      id: 'ap-ex2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Power, product, quotient, chain rules**
- **Implicit differentiation and related rates**
- **Derivatives of trig, exponential, and logarithmic functions**
- **Inverse function derivatives**: (f⁻¹)'(a) = 1/f'(f⁻¹(a))
      `
    },
    {
      id: 'ap-ex2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to derivatives review?',
            options: [
              '(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Inverse function derivatives: (f⁻¹)\'(a) = 1/f\'(f⁻¹(a))'
          }
        ]
      }
    },
    {
      id: 'ap-ex2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Power, product, quotient, chain rules',
            options: ['Power, product, quotient, chain rules', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Implicit differentiation and related rates',
            options: ['Implicit differentiation and related rates', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Derivatives of trig, exponential, and logarithmic functions',
            options: ['Derivatives of trig, exponential, and logarithmic ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Power, product, quotient, chain rules', 'Implicit differentiation and related rates', 'Derivatives of trig, exponential, and logarithmic '],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Derivatives Review.'
      }
    }
  ]
}
