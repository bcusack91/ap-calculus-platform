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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Resultant force?',
            options: [
              'vector sum of all forces acting on an object',
              'proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗',
              'W = F⃗ · d⃗ = |F||d|cos θ',
              'velocity vectors for wind and heading'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Resultant force: vector sum of all forces acting on an object. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Work:',
            options: [
              'vector sum of all forces acting on an object',
              'W = F⃗ · d⃗ = |F||d|cos θ',
              'proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗',
              'velocity vectors for wind and heading'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Work: W = F⃗ · d⃗ = |F||d|cos θ. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Resultant force',
            options: ['proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗', 'W = F⃗ · d⃗ = |F||d|cos θ', 'vector sum of all forces acting on an object', 'velocity vectors for wind and heading']
          },
          {
            label: 'Navigation',
            options: ['proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗', 'velocity vectors for wind and heading', 'W = F⃗ · d⃗ = |F||d|cos θ', 'vector sum of all forces acting on an object']
          },
          {
            label: 'Work',
            options: ['velocity vectors for wind and heading', 'proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗', 'W = F⃗ · d⃗ = |F||d|cos θ', 'vector sum of all forces acting on an object']
          }
        ],
        correctAnswers: ['vector sum of all forces acting on an object', 'velocity vectors for wind and heading', 'W = F⃗ · d⃗ = |F||d|cos θ'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Resultant force: vector sum of all forces acting on an object. Navigation: velocity vectors for wind and heading. Work: W = F⃗ · d⃗ = |F||d|cos θ.'
      }
    }
  ]
}
