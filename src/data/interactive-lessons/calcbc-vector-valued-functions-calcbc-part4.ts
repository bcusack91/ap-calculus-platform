export const calcBCVectorsPart4Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vecto4-intro',
      type: 'text' as const,
      content: `
# Motion in the Plane

**Part 4 of 7 — Motion in the Plane**

### 1. Position

r⃗(t) = ⟨x(t), y(t)⟩

### 2. Velocity

v⃗(t) = r⃗'(t) = ⟨x'(t), y'(t)⟩

### 3. Acceleration

a⃗(t) = v⃗'(t) = ⟨x''{t}, y''{t}⟩

### 4. Each component of motion is analyzed independently

Each component of motion is analyzed independently
      `
    },
    {
      id: 'vecto4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Position?',
            options: [
              'v⃗(t) = r⃗\'(t) = ⟨x\'(t), y\'(t)⟩',
              'Each component of motion is analyzed independently',
              'r⃗(t) = ⟨x(t), y(t)⟩',
              'a⃗(t) = v⃗\'(t) = ⟨x\'\'{t}, y\'\'{t}⟩'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Position: r⃗(t) = ⟨x(t), y(t)⟩. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Acceleration?',
            options: [
              'r⃗(t) = ⟨x(t), y(t)⟩',
              'v⃗(t) = r⃗\'(t) = ⟨x\'(t), y\'(t)⟩',
              'Each component of motion is analyzed independently',
              'a⃗(t) = v⃗\'(t) = ⟨x\'\'{t}, y\'\'{t}⟩'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Acceleration: a⃗(t) = v⃗\'(t) = ⟨x\'\'{t}, y\'\'{t}⟩. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'vecto4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Position**: r⃗(t) = ⟨x(t), y(t)⟩
- **Velocity**: v⃗(t) = r⃗'(t) = ⟨x'(t), y'(t)⟩
- **Acceleration**: a⃗(t) = v⃗'(t) = ⟨x''{t}, y''{t}⟩
- **Each component of motion is analyzed independently**
      `
    },
    {
      id: 'vecto4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Each component of motion is analyzed…?',
            options: [
              'v⃗(t) = r⃗\'(t) = ⟨x\'(t), y\'(t)⟩',
              'Each component of motion is analyzed independently',
              'a⃗(t) = v⃗\'(t) = ⟨x\'\'{t}, y\'\'{t}⟩',
              'r⃗(t) = ⟨x(t), y(t)⟩'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Each component of motion is analyzed independently. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'vecto4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Position',
            options: ['a⃗(t) = v⃗\'(t) = ⟨x\'\'{t}, y\'\'{t}⟩', 'r⃗(t) = ⟨x(t), y(t)⟩', 'Each component of motion is analyzed independently', 'v⃗(t) = r⃗\'(t) = ⟨x\'(t), y\'(t)⟩']
          },
          {
            label: 'Velocity',
            options: ['v⃗(t) = r⃗\'(t) = ⟨x\'(t), y\'(t)⟩', 'Each component of motion is analyzed independently', 'a⃗(t) = v⃗\'(t) = ⟨x\'\'{t}, y\'\'{t}⟩', 'r⃗(t) = ⟨x(t), y(t)⟩']
          },
          {
            label: 'Acceleration',
            options: ['Each component of motion is analyzed independently', 'a⃗(t) = v⃗\'(t) = ⟨x\'\'{t}, y\'\'{t}⟩', 'r⃗(t) = ⟨x(t), y(t)⟩', 'v⃗(t) = r⃗\'(t) = ⟨x\'(t), y\'(t)⟩']
          }
        ],
        correctAnswers: ['r⃗(t) = ⟨x(t), y(t)⟩', 'v⃗(t) = r⃗\'(t) = ⟨x\'(t), y\'(t)⟩', 'a⃗(t) = v⃗\'(t) = ⟨x\'\'{t}, y\'\'{t}⟩'],
        hint1: 'Think about what each concept specifically describes in Motion in the Plane.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Motion in the Plane describes a specific idea. Position: r⃗(t) = ⟨x(t), y(t)⟩. Velocity: v⃗(t) = r⃗\'(t) = ⟨x\'(t), y\'(t)⟩. Acceleration: a⃗(t) = v⃗\'(t) = ⟨x\'\'{t}, y\'\'{t}⟩.'
      }
    }
  ]
}
