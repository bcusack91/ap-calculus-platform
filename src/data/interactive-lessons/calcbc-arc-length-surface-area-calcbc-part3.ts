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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Polar arc length" refer to in calculus?',
            options: [
              'Often used for cardioids, roses, spirals',
              'Derived from parametric formula with x = r cos θ, y = r sin θ',
              'L = rΔθ)',
              'L = ∫_α^β √[r² + (dr/dθ)²] dθ'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Polar arc length: L = ∫_α^β √[r² + (dr/dθ)²] dθ. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Often used for cardioids, roses, spirals:',
            options: [
              'Derived from parametric formula with x = r cos θ, y = r sin θ',
              'L = ∫_α^β √[r² + (dr/dθ)²] dθ',
              'Often used for cardioids, roses, spirals',
              'L = rΔθ)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Often used for cardioids, roses, spirals. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Simplifies when r = constant (circle is correct?',
            options: [
              'Often used for cardioids, roses, spirals',
              'L = rΔθ)',
              'L = ∫_α^β √[r² + (dr/dθ)²] dθ',
              'Derived from parametric formula with x = r cos θ, y = r sin θ'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Simplifies when r = constant (circle: L = rΔθ). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'arc-l3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Polar arc length',
            options: ['Often used for cardioids, roses, spirals', 'Derived from parametric formula with x = r cos θ, y = r sin θ', 'L = rΔθ)', 'L = ∫_α^β √[r² + (dr/dθ)²] dθ']
          },
          {
            label: 'Simplifies when r = constant (circle',
            options: ['L = rΔθ)', 'L = ∫_α^β √[r² + (dr/dθ)²] dθ', 'Derived from parametric formula with x = r cos θ, y = r sin θ', 'Often used for cardioids, roses, spirals']
          }
        ],
        correctAnswers: ['L = ∫_α^β √[r² + (dr/dθ)²] dθ', 'L = rΔθ)'],
        hint1: 'Think about what each concept specifically describes in Arc Length for Polar Curves.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Arc Length for Polar Curves describes a specific idea. Polar arc length: L = ∫_α^β √[r² + (dr/dθ)²] dθ. Simplifies when r = constant (circle: L = rΔθ).'
      }
    }
  ]
}
