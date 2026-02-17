export const precalcVectors2DPart7Data = {
  topicSlug: 'vectors-two-dimensions-precalc',
  sections: [
    {
      id: 'vecto7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'vecto7-quiz1',
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
              'proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗',
              'vector sum of all forces acting on an object',
              'velocity vectors for wind and heading'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Resultant force: vector sum of all forces acting on an object. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains Work?',
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
      id: 'vecto7-detail',
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
      id: 'vecto7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
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
      id: 'vecto7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Resultant force',
            options: ['vector sum of all forces acting on an object', 'proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗', 'W = F⃗ · d⃗ = |F||d|cos θ', 'velocity vectors for wind and heading']
          },
          {
            label: 'Navigation',
            options: ['velocity vectors for wind and heading', 'proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗', 'vector sum of all forces acting on an object', 'W = F⃗ · d⃗ = |F||d|cos θ']
          },
          {
            label: 'Work',
            options: ['vector sum of all forces acting on an object', 'velocity vectors for wind and heading', 'proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗', 'W = F⃗ · d⃗ = |F||d|cos θ']
          }
        ],
        correctAnswers: ['vector sum of all forces acting on an object', 'velocity vectors for wind and heading', 'W = F⃗ · d⃗ = |F||d|cos θ'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Resultant force: vector sum of all forces acting on an object. Navigation: velocity vectors for wind and heading. Work: W = F⃗ · d⃗ = |F||d|cos θ.'
      }
    }
  ]
}
