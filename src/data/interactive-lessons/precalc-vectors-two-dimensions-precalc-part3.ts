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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Unit vector?',
            options: [
              'magnitude 1; û = v⃗/|v⃗|',
              'i = ⟨1,0⟩, j = ⟨0,1⟩',
              'v⃗ = |v⃗|cos θ i + |v⃗|sin θ j',
              'Any vector v⃗ = ⟨a,b⟩ = ai + bj'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Unit vector: magnitude 1; û = v⃗/|v⃗|. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Any vector v⃗ = ⟨a,b⟩ = ai + bj:',
            options: [
              'v⃗ = |v⃗|cos θ i + |v⃗|sin θ j',
              'magnitude 1; û = v⃗/|v⃗|',
              'Any vector v⃗ = ⟨a,b⟩ = ai + bj',
              'i = ⟨1,0⟩, j = ⟨0,1⟩'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Any vector v⃗ = ⟨a,b⟩ = ai + bj. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Unit vector',
            options: ['Any vector v⃗ = ⟨a,b⟩ = ai + bj', 'i = ⟨1,0⟩, j = ⟨0,1⟩', 'v⃗ = |v⃗|cos θ i + |v⃗|sin θ j', 'magnitude 1; û = v⃗/|v⃗|']
          },
          {
            label: 'Standard unit vectors',
            options: ['v⃗ = |v⃗|cos θ i + |v⃗|sin θ j', 'i = ⟨1,0⟩, j = ⟨0,1⟩', 'Any vector v⃗ = ⟨a,b⟩ = ai + bj', 'magnitude 1; û = v⃗/|v⃗|']
          },
          {
            label: 'Component form from magnitude and angle',
            options: ['v⃗ = |v⃗|cos θ i + |v⃗|sin θ j', 'Any vector v⃗ = ⟨a,b⟩ = ai + bj', 'magnitude 1; û = v⃗/|v⃗|', 'i = ⟨1,0⟩, j = ⟨0,1⟩']
          }
        ],
        correctAnswers: ['magnitude 1; û = v⃗/|v⃗|', 'i = ⟨1,0⟩, j = ⟨0,1⟩', 'v⃗ = |v⃗|cos θ i + |v⃗|sin θ j'],
        hint1: 'Think about what each concept specifically describes in Unit Vectors & Components.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Unit Vectors & Components describes a specific idea. Unit vector: magnitude 1; û = v⃗/|v⃗|. Standard unit vectors: i = ⟨1,0⟩, j = ⟨0,1⟩. Component form from magnitude and angle: v⃗ = |v⃗|cos θ i + |v⃗|sin θ j.'
      }
    }
  ]
}
