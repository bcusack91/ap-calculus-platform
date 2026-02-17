export const calcBCPolarPart3Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar3-intro',
      type: 'text' as const,
      content: `
# Area in Polar Coordinates

**Part 3 of 7 — Area in Polar Coordinates**

### 1. Area enclosed by r = f(θ) from θ = α to θ = β

A = ½∫_α^β [f(θ)]² dθ

### 2. Area between two polar curves

A = ½∫_α^β ([r_outer]² - [r_inner]²) dθ

### 3. Determine correct bounds by finding intersection points

Determine correct bounds by finding intersection points

### 4. For rose curves

each petal may have different θ-bounds
      `
    },
    {
      id: 'polar3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Area enclosed by r = f(θ) from θ = α to θ = β" refer to in calculus?',
            options: [
              'Determine correct bounds by finding intersection points',
              'A = ½∫_α^β [f(θ)]² dθ',
              'each petal may have different θ-bounds',
              'A = ½∫_α^β ([r_outer]² - [r_inner]²) dθ'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Area enclosed by r = f(θ) from θ = α to θ = β: A = ½∫_α^β [f(θ)]² dθ. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Determine correct bounds by finding…?',
            options: [
              'Determine correct bounds by finding intersection points',
              'A = ½∫_α^β [f(θ)]² dθ',
              'A = ½∫_α^β ([r_outer]² - [r_inner]²) dθ',
              'each petal may have different θ-bounds'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Determine correct bounds by finding intersection points. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'polar3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Area enclosed by r = f(θ) from θ = α to θ = β**: A = ½∫_α^β [f(θ)]² dθ
- **Area between two polar curves**: A = ½∫_α^β ([r_outer]² - [r_inner]²) dθ
- **Determine correct bounds by finding intersection points**
- **For rose curves**: each petal may have different θ-bounds
      `
    },
    {
      id: 'polar3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents For rose curves?',
            options: [
              'A = ½∫_α^β ([r_outer]² - [r_inner]²) dθ',
              'A = ½∫_α^β [f(θ)]² dθ',
              'Determine correct bounds by finding intersection points',
              'each petal may have different θ-bounds'
            ],
            correctAnswer: 3,
            explanation: 'Correct — For rose curves: each petal may have different θ-bounds. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'polar3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Area enclosed by r = f(θ) from θ = α to θ = β',
            options: ['each petal may have different θ-bounds', 'A = ½∫_α^β [f(θ)]² dθ', 'A = ½∫_α^β ([r_outer]² - [r_inner]²) dθ', 'Determine correct bounds by finding intersection points']
          },
          {
            label: 'Area between two polar curves',
            options: ['each petal may have different θ-bounds', 'Determine correct bounds by finding intersection points', 'A = ½∫_α^β [f(θ)]² dθ', 'A = ½∫_α^β ([r_outer]² - [r_inner]²) dθ']
          },
          {
            label: 'For rose curves',
            options: ['A = ½∫_α^β ([r_outer]² - [r_inner]²) dθ', 'A = ½∫_α^β [f(θ)]² dθ', 'each petal may have different θ-bounds', 'Determine correct bounds by finding intersection points']
          }
        ],
        correctAnswers: ['A = ½∫_α^β [f(θ)]² dθ', 'A = ½∫_α^β ([r_outer]² - [r_inner]²) dθ', 'each petal may have different θ-bounds'],
        hint1: 'Think about what each concept specifically describes in Area in Polar Coordinates.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Area in Polar Coordinates describes a specific idea. Area enclosed by r = f(θ) from θ = α to θ = β: A = ½∫_α^β [f(θ)]² dθ. Area between two polar curves: A = ½∫_α^β ([r_outer]² - [r_inner]²) dθ. For rose curves: each petal may have different θ-bounds.'
      }
    }
  ]
}
