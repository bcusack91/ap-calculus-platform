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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of area in polar coordinates?',
            options: [
              'Area enclosed by r = f(θ) from θ = α to θ = β',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Area enclosed by r = f(θ) from θ = α to θ = β: A = ½∫_α^β [f(θ)]² dθ'
          },
          {
            question: 'In the context of area in polar coordinates, which is accurate?',
            options: [
              'Determine correct bounds by finding intersection points',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Determine correct bounds by finding intersection points'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to area in polar coordinates?',
            options: [
              'each petal may have different θ-bounds',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'For rose curves: each petal may have different θ-bounds'
          }
        ]
      }
    },
    {
      id: 'polar3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Area enclosed by r = f(θ) from θ = α to θ = β',
            options: ['A = ½∫_α^β [f(θ)]² dθ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Area between two polar curves',
            options: ['A = ½∫_α^β ([r_outer]² - [r_inner]²) dθ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Determine correct bounds by finding intersection points',
            options: ['Determine correct bounds by finding intersection p', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['A = ½∫_α^β [f(θ)]² dθ', 'A = ½∫_α^β ([r_outer]² - [r_inner]²) dθ', 'Determine correct bounds by finding intersection p'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Area in Polar Coordinates.'
      }
    }
  ]
}
