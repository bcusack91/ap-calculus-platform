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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Slope field?',
            options: [
              'Each segment shows the slope a solution curve would have at that point',
              'Solution curves follow the pattern of the slope field',
              'Draw by evaluating dy/dx at grid points and sketching segments',
              'grid of short line segments with slope dy/dx at each point'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Slope field: grid of short line segments with slope dy/dx at each point. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Solution curves follow the pattern of…:',
            options: [
              'grid of short line segments with slope dy/dx at each point',
              'Draw by evaluating dy/dx at grid points and sketching segments',
              'Solution curves follow the pattern of the slope field',
              'Each segment shows the slope a solution curve would have at that point'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Solution curves follow the pattern of the slope field. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Slope Fields, which correctly describes Draw by evaluating dy/dx at grid points…?',
            options: [
              'Draw by evaluating dy/dx at grid points and sketching segments',
              'Solution curves follow the pattern of the slope field',
              'Each segment shows the slope a solution curve would have at that point',
              'grid of short line segments with slope dy/dx at each point'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Draw by evaluating dy/dx at grid points and sketching segments. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'diffe2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Slope field',
            options: ['Draw by evaluating dy/dx at grid points and sketching segments', 'Solution curves follow the pattern of the slope field', 'Each segment shows the slope a solution curve would have at that point', 'grid of short line segments with slope dy/dx at each point']
          },
          {
            label: 'Each segment shows the slope a solution…',
            options: ['Each segment shows the slope a solution curve would have at that point', 'Draw by evaluating dy/dx at grid points and sketching segments', 'Solution curves follow the pattern of the slope field', 'grid of short line segments with slope dy/dx at each point']
          },
          {
            label: 'Solution curves follow the pattern of…',
            options: ['Each segment shows the slope a solution curve would have at that point', 'Draw by evaluating dy/dx at grid points and sketching segments', 'grid of short line segments with slope dy/dx at each point', 'Solution curves follow the pattern of the slope field']
          }
        ],
        correctAnswers: ['grid of short line segments with slope dy/dx at each point', 'Each segment shows the slope a solution curve would have at that point', 'Solution curves follow the pattern of the slope field'],
        hint1: 'Think about what each concept specifically describes in Slope Fields.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Slope Fields describes a specific idea. Slope field: grid of short line segments with slope dy/dx at each point. Each segment shows the slope a solution curve would have at that point. Solution curves follow the pattern of the slope field.'
      }
    }
  ]
}
