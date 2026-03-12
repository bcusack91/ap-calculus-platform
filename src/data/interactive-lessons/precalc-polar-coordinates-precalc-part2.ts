export const precalcPolarPart2Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'polar2-intro',
      type: 'text' as const,
      content: `
# Converting Between Coordinate Systems

**Part 2 of 7 — Converting Between Coordinate Systems**

### 1. Polar to rectangular

x = r cos θ, y = r sin θ

### 2. Rectangular to polar

r = √(x² + y²), θ = arctan(y/x) (adjust quadrant)

### 3. r² = x² + y²

r² = x² + y²

### 4. Convert equations by substituting x, y, r, θ relationships

Convert equations by substituting x, y, r, θ relationships
      `
    },
    {
      id: 'polar2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Polar to rectangular?',
            options: [
              'x = r cos θ, y = r sin θ',
              'Convert equations by substituting x, y, r, θ relationships',
              'r² = x² + y²',
              'r = √(x² + y²), θ = arctan(y/x) (adjust quadrant)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Polar to rectangular: x = r cos θ, y = r sin θ. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Converting Between Coordinate Systems, which explains r² = x² + y²?',
            options: [
              'x = r cos θ, y = r sin θ',
              'r = √(x² + y²), θ = arctan(y/x) (adjust quadrant)',
              'Convert equations by substituting x, y, r, θ relationships',
              'r² = x² + y²'
            ],
            correctAnswer: 3,
            explanation: 'Correct — r² = x² + y². Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'polar2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Polar to rectangular**: x = r cos θ, y = r sin θ
- **Rectangular to polar**: r = √(x² + y²), θ = arctan(y/x) (adjust quadrant)
- **r² = x² + y²**
- **Convert equations by substituting x, y, r, θ relationships**
      `
    },
    {
      id: 'polar2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to converting between coordinate systems?',
            options: [
              'Convert equations by substituting x, y, r, θ relationships',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Convert equations by substituting x, y, r, θ relationships'
          }
        ]
      }
    },
    {
      id: 'polar2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Polar to rectangular',
            options: ['r = √(x² + y²), θ = arctan(y/x) (adjust quadrant)', 'Convert equations by substituting x, y, r, θ relationships', 'r² = x² + y²', 'x = r cos θ, y = r sin θ']
          },
          {
            label: 'Rectangular to polar',
            options: ['Convert equations by substituting x, y, r, θ relationships', 'r² = x² + y²', 'r = √(x² + y²), θ = arctan(y/x) (adjust quadrant)', 'x = r cos θ, y = r sin θ']
          }
        ],
        correctAnswers: ['x = r cos θ, y = r sin θ', 'r = √(x² + y²), θ = arctan(y/x) (adjust quadrant)'],
        hint1: 'Think about what each concept specifically describes in Converting Between Coordinate Systems.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Converting Between Coordinate Systems describes a specific idea. Polar to rectangular: x = r cos θ, y = r sin θ. Rectangular to polar: r = √(x² + y²), θ = arctan(y/x) (adjust quadrant).'
      }
    }
  ]
}
