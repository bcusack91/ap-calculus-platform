export const calcBCVectorsPart2Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vecto2-intro',
      type: 'text' as const,
      content: `
# Derivatives of Vector Functions

**Part 2 of 7 — Derivatives of Vector Functions**

### 1. r⃗'(t) = ⟨f'(t), g'(t)⟩ — differentiate component by component

r⃗'(t) = ⟨f'(t), g'(t)⟩ — differentiate component by component

### 2. r⃗'(t) is the velocity vector, tangent to the curve

r⃗'(t) is the velocity vector, tangent to the curve

### 3. Direction of r⃗'(t) gives the direction of motion

Direction of r⃗'(t) gives the direction of motion

### 4. Tangent line

R⃗(s) = r⃗(t₀) + s·r⃗'(t₀)
      `
    },
    {
      id: 'vecto2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of derivatives of vector functions?',
            options: [
              'r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate component by component',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate component by component'
          },
          {
            question: 'In the context of derivatives of vector functions, which is accurate?',
            options: [
              'Direction of r⃗\'(t) gives the direction of motion',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Direction of r⃗\'(t) gives the direction of motion'
          }
        ]
      }
    },
    {
      id: 'vecto2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **r⃗'(t) = ⟨f'(t), g'(t)⟩ — differentiate component by component**
- **r⃗'(t) is the velocity vector, tangent to the curve**
- **Direction of r⃗'(t) gives the direction of motion**
- **Tangent line**: R⃗(s) = r⃗(t₀) + s·r⃗'(t₀)
      `
    },
    {
      id: 'vecto2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to derivatives of vector functions?',
            options: [
              'R⃗(s) = r⃗(t₀) + s·r⃗\'(t₀)',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Tangent line: R⃗(s) = r⃗(t₀) + s·r⃗\'(t₀)'
          }
        ]
      }
    },
    {
      id: 'vecto2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate component by component',
            options: ['r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate component ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'r⃗\'(t) is the velocity vector, tangent to the curve',
            options: ['r⃗\'(t) is the velocity vector, tangent to the curv', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Direction of r⃗\'(t) gives the direction of motion',
            options: ['Direction of r⃗\'(t) gives the direction of motion', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate component ', 'r⃗\'(t) is the velocity vector, tangent to the curv', 'Direction of r⃗\'(t) gives the direction of motion'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Derivatives of Vector Functions.'
      }
    }
  ]
}
