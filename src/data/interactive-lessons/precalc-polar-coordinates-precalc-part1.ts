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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Polar coordinates?',
            options: [
              '(r, θ) = (r, θ + 2πn) = (-r, θ + π)',
              '(r, θ) where r is distance from origin and θ is angle from positive x-axis',
              'Pole is the origin (r = 0)',
              'Polar axis is the positive x-axis direction'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Polar coordinates: (r, θ) where r is distance from origin and θ is angle from positive x-axis. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Polar Coordinates, which explains Pole is the origin (r = 0)?',
            options: [
              'Polar axis is the positive x-axis direction',
              '(r, θ) = (r, θ + 2πn) = (-r, θ + π)',
              '(r, θ) where r is distance from origin and θ is angle from positive x-axis',
              'Pole is the origin (r = 0)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Pole is the origin (r = 0). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Polar coordinates',
            options: ['(r, θ) where r is distance from origin and θ is angle from positive x-axis', 'Polar axis is the positive x-axis direction', 'Pole is the origin (r = 0)', '(r, θ) = (r, θ + 2πn) = (-r, θ + π)']
          },
          {
            label: 'Multiple representations',
            options: ['(r, θ) = (r, θ + 2πn) = (-r, θ + π)', 'Pole is the origin (r = 0)', '(r, θ) where r is distance from origin and θ is angle from positive x-axis', 'Polar axis is the positive x-axis direction']
          }
        ],
        correctAnswers: ['(r, θ) where r is distance from origin and θ is angle from positive x-axis', '(r, θ) = (r, θ + 2πn) = (-r, θ + π)'],
        hint1: 'Think about what each concept specifically describes in Polar Coordinates.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Polar Coordinates describes a specific idea. Polar coordinates: (r, θ) where r is distance from origin and θ is angle from positive x-axis. Multiple representations: (r, θ) = (r, θ + 2πn) = (-r, θ + π).'
      }
    }
  ]
}
