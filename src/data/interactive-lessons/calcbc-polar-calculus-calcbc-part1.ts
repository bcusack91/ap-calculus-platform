export const calcBCPolarPart1Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar1-intro',
      type: 'text' as const,
      content: `
# ∮ Polar Calculus

**Part 1 of 7 — Polar Coordinates Review**

### 1. Polar coordinates

(r, θ); x = r cos θ, y = r sin θ

### 2. r = f(θ) defines a polar curve

r = f(θ) defines a polar curve

### 3. Common curves

circles, cardioids, limaçons, roses, lemniscates

### 4. r can be negative

the point is reflected through the origin
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
            question: 'What does "Polar coordinates" refer to in calculus?',
            options: [
              'circles, cardioids, limaçons, roses, lemniscates',
              'the point is reflected through the origin',
              'r = f(θ) defines a polar curve',
              '(r, θ); x = r cos θ, y = r sin θ'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Polar coordinates: (r, θ); x = r cos θ, y = r sin θ. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Common curves?',
            options: [
              '(r, θ); x = r cos θ, y = r sin θ',
              'r = f(θ) defines a polar curve',
              'the point is reflected through the origin',
              'circles, cardioids, limaçons, roses, lemniscates'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Common curves: circles, cardioids, limaçons, roses, lemniscates. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'polar1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Polar coordinates**: (r, θ); x = r cos θ, y = r sin θ
- **r = f(θ) defines a polar curve**
- **Common curves**: circles, cardioids, limaçons, roses, lemniscates
- **r can be negative**: the point is reflected through the origin
      `
    },
    {
      id: 'polar1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about r can be negative is correct?',
            options: [
              'r = f(θ) defines a polar curve',
              'the point is reflected through the origin',
              'circles, cardioids, limaçons, roses, lemniscates',
              '(r, θ); x = r cos θ, y = r sin θ'
            ],
            correctAnswer: 1,
            explanation: 'Correct — r can be negative: the point is reflected through the origin. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
            options: ['circles, cardioids, limaçons, roses, lemniscates', 'r = f(θ) defines a polar curve', 'the point is reflected through the origin', '(r, θ); x = r cos θ, y = r sin θ']
          },
          {
            label: 'Common curves',
            options: ['circles, cardioids, limaçons, roses, lemniscates', 'the point is reflected through the origin', '(r, θ); x = r cos θ, y = r sin θ', 'r = f(θ) defines a polar curve']
          },
          {
            label: 'r can be negative',
            options: ['the point is reflected through the origin', 'circles, cardioids, limaçons, roses, lemniscates', '(r, θ); x = r cos θ, y = r sin θ', 'r = f(θ) defines a polar curve']
          }
        ],
        correctAnswers: ['(r, θ); x = r cos θ, y = r sin θ', 'circles, cardioids, limaçons, roses, lemniscates', 'the point is reflected through the origin'],
        hint1: 'Think about what each concept specifically describes in ∮ Polar Calculus.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Polar Calculus describes a specific idea. Polar coordinates: (r, θ); x = r cos θ, y = r sin θ. Common curves: circles, cardioids, limaçons, roses, lemniscates. r can be negative: the point is reflected through the origin.'
      }
    }
  ]
}
