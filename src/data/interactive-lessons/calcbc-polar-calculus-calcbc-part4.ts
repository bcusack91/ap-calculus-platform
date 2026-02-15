export const calcBCPolarPart4Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar4-intro',
      type: 'text' as const,
      content: `
# Arc Length in Polar

**Part 4 of 7 — Arc Length in Polar**

### 1. Arc length

L = ∫_α^β √[r² + (dr/dθ)²] dθ

### 2. Derived from the parametric arc length formula

Derived from the parametric arc length formula

### 3. r² + (dr/dθ)² under the square root

r² + (dr/dθ)² under the square root

### 4. Can be quite complex — often requires numerical methods on AP exam

Can be quite complex — often requires numerical methods on AP exam
      `
    },
    {
      id: 'polar4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of arc length in polar?',
            options: [
              'Arc length',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Arc length: L = ∫_α^β √[r² + (dr/dθ)²] dθ'
          },
          {
            question: 'In the context of arc length in polar, which is accurate?',
            options: [
              'r² + (dr/dθ)² under the square root',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'r² + (dr/dθ)² under the square root'
          }
        ]
      }
    },
    {
      id: 'polar4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Arc length**: L = ∫_α^β √[r² + (dr/dθ)²] dθ
- **Derived from the parametric arc length formula**
- **r² + (dr/dθ)² under the square root**
- **Can be quite complex — often requires numerical methods on AP exam**
      `
    },
    {
      id: 'polar4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to arc length in polar?',
            options: [
              'Can be quite complex — often requires numerical methods on AP exam',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Can be quite complex — often requires numerical methods on AP exam'
          }
        ]
      }
    },
    {
      id: 'polar4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Arc length',
            options: ['L = ∫_α^β √[r² + (dr/dθ)²] dθ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Derived from the parametric arc length formula',
            options: ['Derived from the parametric arc length formula', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'r² + (dr/dθ)² under the square root',
            options: ['r² + (dr/dθ)² under the square root', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['L = ∫_α^β √[r² + (dr/dθ)²] dθ', 'Derived from the parametric arc length formula', 'r² + (dr/dθ)² under the square root'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Arc Length in Polar.'
      }
    }
  ]
}
