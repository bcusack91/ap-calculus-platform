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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Integrate with respect to y when…" refer to in calculus?',
            options: [
              'Integrate with respect to y when boundaries are horizontal',
              'Right function minus left function, integrated from bottom to top',
              'Sometimes integrating with respect to y is simpler than with respect to x',
              'A = ∫_c^d [right(y) - left(y)]dy'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Integrate with respect to y when boundaries are horizontal. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Right function minus left function,…:',
            options: [
              'Right function minus left function, integrated from bottom to top',
              'Sometimes integrating with respect to y is simpler than with respect to x',
              'A = ∫_c^d [right(y) - left(y)]dy',
              'Integrate with respect to y when boundaries are horizontal'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Right function minus left function, integrated from bottom to top. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Sometimes integrating with respect to y… is correct?',
            options: [
              'Sometimes integrating with respect to y is simpler than with respect to x',
              'Right function minus left function, integrated from bottom to top',
              'A = ∫_c^d [right(y) - left(y)]dy',
              'Integrate with respect to y when boundaries are horizontal'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Sometimes integrating with respect to y is simpler than with respect to x. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'area-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Integrate with respect to y when…',
            options: ['Sometimes integrating with respect to y is simpler than with respect to x', 'A = ∫_c^d [right(y) - left(y)]dy', 'Integrate with respect to y when boundaries are horizontal', 'Right function minus left function, integrated from bottom to top']
          },
          {
            label: 'A = ∫_c^d [right(y) - left(y)]dy',
            options: ['Right function minus left function, integrated from bottom to top', 'Integrate with respect to y when boundaries are horizontal', 'A = ∫_c^d [right(y) - left(y)]dy', 'Sometimes integrating with respect to y is simpler than with respect to x']
          },
          {
            label: 'Right function minus left function,…',
            options: ['Sometimes integrating with respect to y is simpler than with respect to x', 'Integrate with respect to y when boundaries are horizontal', 'A = ∫_c^d [right(y) - left(y)]dy', 'Right function minus left function, integrated from bottom to top']
          }
        ],
        correctAnswers: ['Integrate with respect to y when boundaries are horizontal', 'A = ∫_c^d [right(y) - left(y)]dy', 'Right function minus left function, integrated from bottom to top'],
        hint1: 'Think about what each concept specifically describes in Area Between Two Curves (Horizontal).',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Area Between Two Curves (Horizontal) describes a specific idea. Integrate with respect to y when boundaries are horizontal. A = ∫_c^d [right(y) - left(y)]dy. Right function minus left function, integrated from bottom to top.'
      }
    }
  ]
}
