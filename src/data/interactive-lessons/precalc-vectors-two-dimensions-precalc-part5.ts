export const precalcVectors2DPart5Data = {
  topicSlug: 'vectors-two-dimensions-precalc',
  sections: [
    {
      id: 'vecto5-intro',
      type: 'text' as const,
      content: `
# Applications of Vectors

**Part 5 of 7 — Applications of Vectors**

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
      id: 'vecto5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Resultant force?',
            options: [
              'W = F⃗ · d⃗ = |F||d|cos θ',
              'velocity vectors for wind and heading',
              'proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗',
              'vector sum of all forces acting on an object'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Resultant force: vector sum of all forces acting on an object. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Work:',
            options: [
              'vector sum of all forces acting on an object',
              'velocity vectors for wind and heading',
              'W = F⃗ · d⃗ = |F||d|cos θ',
              'proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Work: W = F⃗ · d⃗ = |F||d|cos θ. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'vecto5-detail',
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
      id: 'vecto5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to applications of vectors?',
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
      id: 'vecto5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Resultant force',
            options: ['W = F⃗ · d⃗ = |F||d|cos θ', 'vector sum of all forces acting on an object', 'velocity vectors for wind and heading', 'proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗']
          },
          {
            label: 'Navigation',
            options: ['vector sum of all forces acting on an object', 'W = F⃗ · d⃗ = |F||d|cos θ', 'velocity vectors for wind and heading', 'proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗']
          },
          {
            label: 'Work',
            options: ['velocity vectors for wind and heading', 'W = F⃗ · d⃗ = |F||d|cos θ', 'proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗', 'vector sum of all forces acting on an object']
          }
        ],
        correctAnswers: ['vector sum of all forces acting on an object', 'velocity vectors for wind and heading', 'W = F⃗ · d⃗ = |F||d|cos θ'],
        hint1: 'Think about what each concept specifically describes in Applications of Vectors.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Applications of Vectors describes a specific idea. Resultant force: vector sum of all forces acting on an object. Navigation: velocity vectors for wind and heading. Work: W = F⃗ · d⃗ = |F||d|cos θ.'
      }
    }
  ]
}
