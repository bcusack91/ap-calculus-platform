export const precalcVectors2DPart6Data = {
  topicSlug: 'vectors-two-dimensions-precalc',
  sections: [
    {
      id: 'vecto6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Resultant force

vector sum of all forces acting on an object

### 2. Navigation

velocity vectors for wind and heading

### 3. Work

W = F⃗ · d⃗ = |F||d|cos θ

### 4. Projection of u⃗ onto v⃗

proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗
      `
    },
    {
      id: 'vecto6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Resultant force',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Resultant force: vector sum of all forces acting on an object'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'W = F⃗ · d⃗ = |F||d|cos θ',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Work: W = F⃗ · d⃗ = |F||d|cos θ'
          }
        ]
      }
    },
    {
      id: 'vecto6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Resultant force**: vector sum of all forces acting on an object
- **Navigation**: velocity vectors for wind and heading
- **Work**: W = F⃗ · d⃗ = |F||d|cos θ
- **Projection of u⃗ onto v⃗**: proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗
      `
    },
    {
      id: 'vecto6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Projection of u⃗ onto v⃗: proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗'
          }
        ]
      }
    },
    {
      id: 'vecto6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Resultant force',
            options: ['vector sum of all forces acting on an object', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Navigation',
            options: ['velocity vectors for wind and heading', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Work',
            options: ['W = F⃗ · d⃗ = |F||d|cos θ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['vector sum of all forces acting on an object', 'velocity vectors for wind and heading', 'W = F⃗ · d⃗ = |F||d|cos θ'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
