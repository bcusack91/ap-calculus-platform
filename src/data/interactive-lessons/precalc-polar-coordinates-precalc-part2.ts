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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of converting between coordinate systems?',
            options: [
              'Polar to rectangular',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Polar to rectangular: x = r cos θ, y = r sin θ'
          },
          {
            question: 'In the context of converting between coordinate systems, which is accurate?',
            options: [
              'r² = x² + y²',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'r² = x² + y²'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Polar to rectangular',
            options: ['x = r cos θ, y = r sin θ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Rectangular to polar',
            options: ['r = √(x² + y²), θ = arctan(y/x) (adjust quadrant)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'r² = x² + y²',
            options: ['r² = x² + y²', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['x = r cos θ, y = r sin θ', 'r = √(x² + y²), θ = arctan(y/x) (adjust quadrant)', 'r² = x² + y²'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Converting Between Coordinate Systems.'
      }
    }
  ]
}
