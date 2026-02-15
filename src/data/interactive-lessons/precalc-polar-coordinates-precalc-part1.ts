export const precalcPolarPart1Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'polar1-intro',
      type: 'text' as const,
      content: `
# 📈 Polar Coordinates

**Part 1 of 7 — Polar Coordinate System**

### 1. Polar coordinates

(r, θ) where r is distance from origin and θ is angle from positive x-axis

### 2. Multiple representations

(r, θ) = (r, θ + 2πn) = (-r, θ + π)

### 3. Pole is the origin (r = 0)

Pole is the origin (r = 0)

### 4. Polar axis is the positive x-axis direction

Polar axis is the positive x-axis direction
      `
    },
    {
      id: 'polar1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of polar coordinate system?',
            options: [
              'Polar coordinates',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Polar coordinates: (r, θ) where r is distance from origin and θ is angle from positive x-axis'
          },
          {
            question: 'In the context of polar coordinate system, which is accurate?',
            options: [
              'Pole is the origin (r = 0)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Pole is the origin (r = 0)'
          }
        ]
      }
    },
    {
      id: 'polar1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Polar coordinates**: (r, θ) where r is distance from origin and θ is angle from positive x-axis
- **Multiple representations**: (r, θ) = (r, θ + 2πn) = (-r, θ + π)
- **Pole is the origin (r = 0)**
- **Polar axis is the positive x-axis direction**
      `
    },
    {
      id: 'polar1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to polar coordinate system?',
            options: [
              'Polar axis is the positive x-axis direction',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Polar axis is the positive x-axis direction'
          }
        ]
      }
    },
    {
      id: 'polar1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Polar coordinates',
            options: ['(r, θ) where r is distance from origin and θ is an', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Multiple representations',
            options: ['(r, θ) = (r, θ + 2πn) = (-r, θ + π)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Pole is the origin (r = 0)',
            options: ['Pole is the origin (r = 0)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['(r, θ) where r is distance from origin and θ is an', '(r, θ) = (r, θ + 2πn) = (-r, θ + π)', 'Pole is the origin (r = 0)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Polar Coordinate System.'
      }
    }
  ]
}
