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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Arc length" refer to in calculus?',
            options: [
              'r² + (dr/dθ)² under the square root',
              'Derived from the parametric arc length formula',
              'L = ∫_α^β √[r² + (dr/dθ)²] dθ',
              'Can be quite complex — often requires numerical methods on AP exam'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Arc length: L = ∫_α^β √[r² + (dr/dθ)²] dθ. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Arc Length in Polar, which explains r² + (dr/dθ)² under the square root?',
            options: [
              'r² + (dr/dθ)² under the square root',
              'Can be quite complex — often requires numerical methods on AP exam',
              'L = ∫_α^β √[r² + (dr/dθ)²] dθ',
              'Derived from the parametric arc length formula'
            ],
            correctAnswer: 0,
            explanation: 'Correct — r² + (dr/dθ)² under the square root. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Can be quite complex — often requires… is correct?',
            options: [
              'Derived from the parametric arc length formula',
              'L = ∫_α^β √[r² + (dr/dθ)²] dθ',
              'Can be quite complex — often requires numerical methods on AP exam',
              'r² + (dr/dθ)² under the square root'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Can be quite complex — often requires numerical methods on AP exam. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'polar4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Arc length',
            options: ['Can be quite complex — often requires numerical methods on AP exam', 'r² + (dr/dθ)² under the square root', 'Derived from the parametric arc length formula', 'L = ∫_α^β √[r² + (dr/dθ)²] dθ']
          },
          {
            label: 'Derived from the parametric arc length…',
            options: ['Derived from the parametric arc length formula', 'r² + (dr/dθ)² under the square root', 'L = ∫_α^β √[r² + (dr/dθ)²] dθ', 'Can be quite complex — often requires numerical methods on AP exam']
          },
          {
            label: 'r² + (dr/dθ)² under the square root',
            options: ['Can be quite complex — often requires numerical methods on AP exam', 'r² + (dr/dθ)² under the square root', 'L = ∫_α^β √[r² + (dr/dθ)²] dθ', 'Derived from the parametric arc length formula']
          }
        ],
        correctAnswers: ['L = ∫_α^β √[r² + (dr/dθ)²] dθ', 'Derived from the parametric arc length formula', 'r² + (dr/dθ)² under the square root'],
        hint1: 'Think about what each concept specifically describes in Arc Length in Polar.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Arc Length in Polar describes a specific idea. Arc length: L = ∫_α^β √[r² + (dr/dθ)²] dθ. Derived from the parametric arc length formula. r² + (dr/dθ)² under the square root.'
      }
    }
  ]
}
