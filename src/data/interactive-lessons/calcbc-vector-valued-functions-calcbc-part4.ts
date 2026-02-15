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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of motion in the plane?',
            options: [
              'Position',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Position: r⃗(t) = ⟨x(t), y(t)⟩'
          },
          {
            question: 'In the context of motion in the plane, which is accurate?',
            options: [
              'a⃗(t) = v⃗\'(t) = ⟨x\'\'{t}, y\'\'{t}⟩',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Acceleration: a⃗(t) = v⃗\'(t) = ⟨x\'\'{t}, y\'\'{t}⟩'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to motion in the plane?',
            options: [
              'Each component of motion is analyzed independently',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Each component of motion is analyzed independently'
          }
        ]
      }
    },
    {
      id: 'vecto4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Position',
            options: ['r⃗(t) = ⟨x(t), y(t)⟩', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Velocity',
            options: ['v⃗(t) = r⃗\'(t) = ⟨x\'(t), y\'(t)⟩', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Acceleration',
            options: ['a⃗(t) = v⃗\'(t) = ⟨x\'\'{t}, y\'\'{t}⟩', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['r⃗(t) = ⟨x(t), y(t)⟩', 'v⃗(t) = r⃗\'(t) = ⟨x\'(t), y\'(t)⟩', 'a⃗(t) = v⃗\'(t) = ⟨x\'\'{t}, y\'\'{t}⟩'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Motion in the Plane.'
      }
    }
  ]
}
