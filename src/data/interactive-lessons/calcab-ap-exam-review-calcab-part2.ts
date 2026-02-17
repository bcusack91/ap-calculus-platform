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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Power, product, quotient, chain rules?',
            options: [
              '(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))',
              'Derivatives of trig, exponential, and logarithmic functions',
              'Implicit differentiation and related rates',
              'Power, product, quotient, chain rules'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Power, product, quotient, chain rules. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Derivatives of trig, exponential, and…:',
            options: [
              'Derivatives of trig, exponential, and logarithmic functions',
              'Implicit differentiation and related rates',
              'Power, product, quotient, chain rules',
              '(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Derivatives of trig, exponential, and logarithmic functions. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Inverse function derivatives?',
            options: [
              'Implicit differentiation and related rates',
              'Derivatives of trig, exponential, and logarithmic functions',
              'Power, product, quotient, chain rules',
              '(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Inverse function derivatives: (f⁻¹)\'(a) = 1/f\'(f⁻¹(a)). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ap-ex2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Power, product, quotient, chain rules',
            options: ['Power, product, quotient, chain rules', '(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))', 'Implicit differentiation and related rates', 'Derivatives of trig, exponential, and logarithmic functions']
          },
          {
            label: 'Implicit differentiation and related…',
            options: ['Power, product, quotient, chain rules', 'Derivatives of trig, exponential, and logarithmic functions', 'Implicit differentiation and related rates', '(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))']
          },
          {
            label: 'Derivatives of trig, exponential, and…',
            options: ['Power, product, quotient, chain rules', 'Implicit differentiation and related rates', 'Derivatives of trig, exponential, and logarithmic functions', '(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))']
          }
        ],
        correctAnswers: ['Power, product, quotient, chain rules', 'Implicit differentiation and related rates', 'Derivatives of trig, exponential, and logarithmic functions'],
        hint1: 'Think about what each concept specifically describes in Derivatives Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Derivatives Review describes a specific idea. Power, product, quotient, chain rules. Implicit differentiation and related rates. Derivatives of trig, exponential, and logarithmic functions.'
      }
    }
  ]
}
