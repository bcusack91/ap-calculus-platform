export const calcABAreaCurvesPart3Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area-3-intro',
      type: 'text' as const,
      content: `
# Area Between Two Curves (Horizontal)

**Part 3 of 7 — Area Between Two Curves (Horizontal)**

### 1. Integrate with respect to y when boundaries are horizontal

Integrate with respect to y when boundaries are horizontal

### 2. A = ∫_c^d [right(y) - left(y)]dy

A = ∫_c^d [right(y) - left(y)]dy

### 3. Right function minus left function, integrated from bottom to top

Right function minus left function, integrated from bottom to top

### 4. Sometimes integrating with respect to y is simpler than with respect to x

Sometimes integrating with respect to y is simpler than with respect to x
      `
    },
    {
      id: 'area-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of area between two curves (horizontal)?',
            options: [
              'Integrate with respect to y when boundaries are horizontal',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Integrate with respect to y when boundaries are horizontal'
          },
          {
            question: 'In the context of area between two curves (horizontal), which is accurate?',
            options: [
              'Right function minus left function, integrated from bottom to top',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Right function minus left function, integrated from bottom to top'
          }
        ]
      }
    },
    {
      id: 'area-3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Integrate with respect to y when boundaries are horizontal**
- **A = ∫_c^d [right(y) - left(y)]dy**
- **Right function minus left function, integrated from bottom to top**
- **Sometimes integrating with respect to y is simpler than with respect to x**
      `
    },
    {
      id: 'area-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to area between two curves (horizontal)?',
            options: [
              'Sometimes integrating with respect to y is simpler than with respect to x',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Sometimes integrating with respect to y is simpler than with respect to x'
          }
        ]
      }
    },
    {
      id: 'area-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Integrate with respect to y when boundaries are horizontal',
            options: ['Integrate with respect to y when boundaries are ho', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'A = ∫_c^d [right(y) - left(y)]dy',
            options: ['A = ∫_c^d [right(y) - left(y)]dy', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Right function minus left function, integrated from bottom to top',
            options: ['Right function minus left function, integrated fro', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Integrate with respect to y when boundaries are ho', 'A = ∫_c^d [right(y) - left(y)]dy', 'Right function minus left function, integrated fro'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Area Between Two Curves (Horizontal).'
      }
    }
  ]
}
