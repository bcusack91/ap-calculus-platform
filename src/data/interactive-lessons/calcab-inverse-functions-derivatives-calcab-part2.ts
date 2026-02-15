export const calcABInverseDerivPart2Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inver2-intro',
      type: 'text' as const,
      content: `
# Derivative of Inverse Functions

**Part 2 of 7 — Derivative of Inverse Functions**

### 1. (f⁻¹)'(a) = 1/f'(f⁻¹(a))

(f⁻¹)'(a) = 1/f'(f⁻¹(a))

### 2. This formula comes from differentiating f(f⁻¹(x)) = x implicitly

This formula comes from differentiating f(f⁻¹(x)) = x implicitly

### 3. You need both f⁻¹(a) and f' at that point

You need both f⁻¹(a) and f' at that point

### 4. Example

if f(3)=7 and f'(3)=4, then (f⁻¹)'(7) = 1/4
      `
    },
    {
      id: 'inver2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of derivative of inverse functions?',
            options: [
              '(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: '(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))'
          },
          {
            question: 'In the context of derivative of inverse functions, which is accurate?',
            options: [
              'You need both f⁻¹(a) and f\' at that point',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'You need both f⁻¹(a) and f\' at that point'
          }
        ]
      }
    },
    {
      id: 'inver2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **(f⁻¹)'(a) = 1/f'(f⁻¹(a))**
- **This formula comes from differentiating f(f⁻¹(x)) = x implicitly**
- **You need both f⁻¹(a) and f' at that point**
- **Example**: if f(3)=7 and f'(3)=4, then (f⁻¹)'(7) = 1/4
      `
    },
    {
      id: 'inver2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to derivative of inverse functions?',
            options: [
              'if f(3)=7 and f\'(3)=4, then (f⁻¹)\'(7) = 1/4',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Example: if f(3)=7 and f\'(3)=4, then (f⁻¹)\'(7) = 1/4'
          }
        ]
      }
    },
    {
      id: 'inver2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))',
            options: ['(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'This formula comes from differentiating f(f⁻¹(x)) = x implicitly',
            options: ['This formula comes from differentiating f(f⁻¹(x)) ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'You need both f⁻¹(a) and f\' at that point',
            options: ['You need both f⁻¹(a) and f\' at that point', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))', 'This formula comes from differentiating f(f⁻¹(x)) ', 'You need both f⁻¹(a) and f\' at that point'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Derivative of Inverse Functions.'
      }
    }
  ]
}
