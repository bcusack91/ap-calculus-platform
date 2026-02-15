export const calcABDiffEqPart2Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'diffe2-intro',
      type: 'text' as const,
      content: `
# Slope Fields

**Part 2 of 7 — Slope Fields**

### 1. Slope field

grid of short line segments with slope dy/dx at each point

### 2. Each segment shows the slope a solution curve would have at that point

Each segment shows the slope a solution curve would have at that point

### 3. Solution curves follow the pattern of the slope field

Solution curves follow the pattern of the slope field

### 4. Draw by evaluating dy/dx at grid points and sketching segments

Draw by evaluating dy/dx at grid points and sketching segments
      `
    },
    {
      id: 'diffe2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of slope fields?',
            options: [
              'Slope field',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Slope field: grid of short line segments with slope dy/dx at each point'
          },
          {
            question: 'In the context of slope fields, which is accurate?',
            options: [
              'Solution curves follow the pattern of the slope field',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Solution curves follow the pattern of the slope field'
          }
        ]
      }
    },
    {
      id: 'diffe2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Slope field**: grid of short line segments with slope dy/dx at each point
- **Each segment shows the slope a solution curve would have at that point**
- **Solution curves follow the pattern of the slope field**
- **Draw by evaluating dy/dx at grid points and sketching segments**
      `
    },
    {
      id: 'diffe2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to slope fields?',
            options: [
              'Draw by evaluating dy/dx at grid points and sketching segments',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Draw by evaluating dy/dx at grid points and sketching segments'
          }
        ]
      }
    },
    {
      id: 'diffe2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Slope field',
            options: ['grid of short line segments with slope dy/dx at ea', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Each segment shows the slope a solution curve would have at that point',
            options: ['Each segment shows the slope a solution curve woul', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Solution curves follow the pattern of the slope field',
            options: ['Solution curves follow the pattern of the slope fi', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['grid of short line segments with slope dy/dx at ea', 'Each segment shows the slope a solution curve woul', 'Solution curves follow the pattern of the slope fi'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Slope Fields.'
      }
    }
  ]
}
