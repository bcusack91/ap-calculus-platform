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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of polar coordinates review?',
            options: [
              'Polar coordinates',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Polar coordinates: (r, θ); x = r cos θ, y = r sin θ'
          },
          {
            question: 'In the context of polar coordinates review, which is accurate?',
            options: [
              'circles, cardioids, limaçons, roses, lemniscates',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Common curves: circles, cardioids, limaçons, roses, lemniscates'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to polar coordinates review?',
            options: [
              'the point is reflected through the origin',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'r can be negative: the point is reflected through the origin'
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
            options: ['(r, θ); x = r cos θ, y = r sin θ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'r = f(θ) defines a polar curve',
            options: ['r = f(θ) defines a polar curve', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Common curves',
            options: ['circles, cardioids, limaçons, roses, lemniscates', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['(r, θ); x = r cos θ, y = r sin θ', 'r = f(θ) defines a polar curve', 'circles, cardioids, limaçons, roses, lemniscates'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Polar Coordinates Review.'
      }
    }
  ]
}
