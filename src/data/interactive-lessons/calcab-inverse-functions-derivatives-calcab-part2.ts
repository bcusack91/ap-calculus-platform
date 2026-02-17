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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes (f⁻¹)\'(a) = 1/f\'(f⁻¹(a))?',
            options: [
              'if f(3)=7 and f\'(3)=4, then (f⁻¹)\'(7) = 1/4',
              'This formula comes from differentiating f(f⁻¹(x)) = x implicitly',
              'You need both f⁻¹(a) and f\' at that point',
              '(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))'
            ],
            correctAnswer: 3,
            explanation: 'Correct — (f⁻¹)\'(a) = 1/f\'(f⁻¹(a)). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Derivative of Inverse Functions, which explains You need both f⁻¹(a) and f\' at that…?',
            options: [
              '(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))',
              'if f(3)=7 and f\'(3)=4, then (f⁻¹)\'(7) = 1/4',
              'This formula comes from differentiating f(f⁻¹(x)) = x implicitly',
              'You need both f⁻¹(a) and f\' at that point'
            ],
            correctAnswer: 3,
            explanation: 'Correct — You need both f⁻¹(a) and f\' at that point. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Example?',
            options: [
              '(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))',
              'You need both f⁻¹(a) and f\' at that point',
              'if f(3)=7 and f\'(3)=4, then (f⁻¹)\'(7) = 1/4',
              'This formula comes from differentiating f(f⁻¹(x)) = x implicitly'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Example: if f(3)=7 and f\'(3)=4, then (f⁻¹)\'(7) = 1/4. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'inver2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))',
            options: ['(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))', 'if f(3)=7 and f\'(3)=4, then (f⁻¹)\'(7) = 1/4', 'This formula comes from differentiating f(f⁻¹(x)) = x implicitly', 'You need both f⁻¹(a) and f\' at that point']
          },
          {
            label: 'This formula comes from differentiating…',
            options: ['This formula comes from differentiating f(f⁻¹(x)) = x implicitly', '(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))', 'You need both f⁻¹(a) and f\' at that point', 'if f(3)=7 and f\'(3)=4, then (f⁻¹)\'(7) = 1/4']
          },
          {
            label: 'You need both f⁻¹(a) and f\' at that…',
            options: ['(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))', 'You need both f⁻¹(a) and f\' at that point', 'if f(3)=7 and f\'(3)=4, then (f⁻¹)\'(7) = 1/4', 'This formula comes from differentiating f(f⁻¹(x)) = x implicitly']
          }
        ],
        correctAnswers: ['(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))', 'This formula comes from differentiating f(f⁻¹(x)) = x implicitly', 'You need both f⁻¹(a) and f\' at that point'],
        hint1: 'Think about what each concept specifically describes in Derivative of Inverse Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Derivative of Inverse Functions describes a specific idea. (f⁻¹)\'(a) = 1/f\'(f⁻¹(a)). This formula comes from differentiating f(f⁻¹(x)) = x implicitly. You need both f⁻¹(a) and f\' at that point.'
      }
    }
  ]
}
