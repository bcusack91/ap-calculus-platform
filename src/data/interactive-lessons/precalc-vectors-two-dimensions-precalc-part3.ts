export const precalcVectors2DPart3Data = {
  topicSlug: 'vectors-two-dimensions-precalc',
  sections: [
    {
      id: 'vecto3-intro',
      type: 'text' as const,
      content: `
# Unit Vectors & Components

**Part 3 of 7 — Unit Vectors & Components**

### 1. Unit vector

magnitude 1; û = v⃗/|v⃗|

### 2. Standard unit vectors

i = ⟨1,0⟩, j = ⟨0,1⟩

### 3. Any vector v⃗ = ⟨a,b⟩ = ai + bj

Any vector v⃗ = ⟨a,b⟩ = ai + bj

### 4. Component form from magnitude and angle

v⃗ = |v⃗|cos θ i + |v⃗|sin θ j
      `
    },
    {
      id: 'vecto3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of unit vectors & components?',
            options: [
              'Unit vector',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Unit vector: magnitude 1; û = v⃗/|v⃗|'
          },
          {
            question: 'In the context of unit vectors & components, which is accurate?',
            options: [
              'Any vector v⃗ = ⟨a,b⟩ = ai + bj',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Any vector v⃗ = ⟨a,b⟩ = ai + bj'
          }
        ]
      }
    },
    {
      id: 'vecto3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Unit vector**: magnitude 1; û = v⃗/|v⃗|
- **Standard unit vectors**: i = ⟨1,0⟩, j = ⟨0,1⟩
- **Any vector v⃗ = ⟨a,b⟩ = ai + bj**
- **Component form from magnitude and angle**: v⃗ = |v⃗|cos θ i + |v⃗|sin θ j
      `
    },
    {
      id: 'vecto3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to unit vectors & components?',
            options: [
              'v⃗ = |v⃗|cos θ i + |v⃗|sin θ j',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Component form from magnitude and angle: v⃗ = |v⃗|cos θ i + |v⃗|sin θ j'
          }
        ]
      }
    },
    {
      id: 'vecto3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Unit vector',
            options: ['magnitude 1; û = v⃗/|v⃗|', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Standard unit vectors',
            options: ['i = ⟨1,0⟩, j = ⟨0,1⟩', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Any vector v⃗ = ⟨a,b⟩ = ai + bj',
            options: ['Any vector v⃗ = ⟨a,b⟩ = ai + bj', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['magnitude 1; û = v⃗/|v⃗|', 'i = ⟨1,0⟩, j = ⟨0,1⟩', 'Any vector v⃗ = ⟨a,b⟩ = ai + bj'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Unit Vectors & Components.'
      }
    }
  ]
}
