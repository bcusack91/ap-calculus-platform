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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate…" refer to in calculus?',
            options: [
              'r⃗\'(t) is the velocity vector, tangent to the curve',
              'Direction of r⃗\'(t) gives the direction of motion',
              'R⃗(s) = r⃗(t₀) + s·r⃗\'(t₀)',
              'r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate component by component'
            ],
            correctAnswer: 3,
            explanation: 'Correct — r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate component by component. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Direction of r⃗\'(t) gives the direction…:',
            options: [
              'R⃗(s) = r⃗(t₀) + s·r⃗\'(t₀)',
              'r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate component by component',
              'Direction of r⃗\'(t) gives the direction of motion',
              'r⃗\'(t) is the velocity vector, tangent to the curve'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Direction of r⃗\'(t) gives the direction of motion. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Tangent line is correct?',
            options: [
              'Direction of r⃗\'(t) gives the direction of motion',
              'r⃗\'(t) is the velocity vector, tangent to the curve',
              'r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate component by component',
              'R⃗(s) = r⃗(t₀) + s·r⃗\'(t₀)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Tangent line: R⃗(s) = r⃗(t₀) + s·r⃗\'(t₀). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'vecto2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate…',
            options: ['Direction of r⃗\'(t) gives the direction of motion', 'R⃗(s) = r⃗(t₀) + s·r⃗\'(t₀)', 'r⃗\'(t) is the velocity vector, tangent to the curve', 'r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate component by component']
          },
          {
            label: 'r⃗\'(t) is the velocity vector, tangent…',
            options: ['R⃗(s) = r⃗(t₀) + s·r⃗\'(t₀)', 'Direction of r⃗\'(t) gives the direction of motion', 'r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate component by component', 'r⃗\'(t) is the velocity vector, tangent to the curve']
          },
          {
            label: 'Direction of r⃗\'(t) gives the direction…',
            options: ['r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate component by component', 'r⃗\'(t) is the velocity vector, tangent to the curve', 'Direction of r⃗\'(t) gives the direction of motion', 'R⃗(s) = r⃗(t₀) + s·r⃗\'(t₀)']
          }
        ],
        correctAnswers: ['r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate component by component', 'r⃗\'(t) is the velocity vector, tangent to the curve', 'Direction of r⃗\'(t) gives the direction of motion'],
        hint1: 'Think about what each concept specifically describes in Derivatives of Vector Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Derivatives of Vector Functions describes a specific idea. r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate component by component. r⃗\'(t) is the velocity vector, tangent to the curve. Direction of r⃗\'(t) gives the direction of motion.'
      }
    }
  ]
}
