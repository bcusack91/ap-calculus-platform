export const calcBCArcLengthPart3Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc-l3-intro',
      type: 'text' as const,
      content: `
# Arc Length for Polar Curves

**Part 3 of 7 — Arc Length for Polar Curves**

### 1. Polar arc length

L = ∫_α^β √[r² + (dr/dθ)²] dθ

### 2. Derived from parametric formula with x = r cos θ, y = r sin θ

Derived from parametric formula with x = r cos θ, y = r sin θ

### 3. Often used for cardioids, roses, spirals

Often used for cardioids, roses, spirals

### 4. Simplifies when r = constant (circle

L = rΔθ)
      `
    },
    {
      id: 'arc-l3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of arc length for polar curves?',
            options: [
              'Polar arc length',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Polar arc length: L = ∫_α^β √[r² + (dr/dθ)²] dθ'
          },
          {
            question: 'In the context of arc length for polar curves, which is accurate?',
            options: [
              'Often used for cardioids, roses, spirals',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Often used for cardioids, roses, spirals'
          }
        ]
      }
    },
    {
      id: 'arc-l3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Polar arc length**: L = ∫_α^β √[r² + (dr/dθ)²] dθ
- **Derived from parametric formula with x = r cos θ, y = r sin θ**
- **Often used for cardioids, roses, spirals**
- **Simplifies when r = constant (circle**: L = rΔθ)
      `
    },
    {
      id: 'arc-l3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to arc length for polar curves?',
            options: [
              'L = rΔθ)',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Simplifies when r = constant (circle: L = rΔθ)'
          }
        ]
      }
    },
    {
      id: 'arc-l3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Polar arc length',
            options: ['L = ∫_α^β √[r² + (dr/dθ)²] dθ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Derived from parametric formula with x = r cos θ, y = r sin θ',
            options: ['Derived from parametric formula with x = r cos θ, ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Often used for cardioids, roses, spirals',
            options: ['Often used for cardioids, roses, spirals', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['L = ∫_α^β √[r² + (dr/dθ)²] dθ', 'Derived from parametric formula with x = r cos θ, ', 'Often used for cardioids, roses, spirals'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Arc Length for Polar Curves.'
      }
    }
  ]
}
