export const precalcInverseTrigPart1Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'inver1-intro',
      type: 'text' as const,
      content: `
# 📈 Inverse Trig Functions

**Part 1 of 7 — Inverse Sine (arcsin)**

### 1. arcsin(x) = sin⁻¹(x)

finds the angle whose sine is x

### 2. Domain

[-1, 1]; Range: [-π/2, π/2]

### 3. sin(sin⁻¹(x)) = x for x in [-1, 1]

sin(sin⁻¹(x)) = x for x in [-1, 1]

### 4. sin⁻¹(sin(x)) = x only for x in [-π/2, π/2]

sin⁻¹(sin(x)) = x only for x in [-π/2, π/2]
      `
    },
    {
      id: 'inver1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of inverse sine (arcsin)?',
            options: [
              'arcsin(x) = sin⁻¹(x)',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'arcsin(x) = sin⁻¹(x): finds the angle whose sine is x'
          },
          {
            question: 'In the context of inverse sine (arcsin), which is accurate?',
            options: [
              'sin(sin⁻¹(x)) = x for x in [-1, 1]',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'sin(sin⁻¹(x)) = x for x in [-1, 1]'
          }
        ]
      }
    },
    {
      id: 'inver1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **arcsin(x) = sin⁻¹(x)**: finds the angle whose sine is x
- **Domain**: [-1, 1]; Range: [-π/2, π/2]
- **sin(sin⁻¹(x)) = x for x in [-1, 1]**
- **sin⁻¹(sin(x)) = x only for x in [-π/2, π/2]**
      `
    },
    {
      id: 'inver1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to inverse sine (arcsin)?',
            options: [
              'sin⁻¹(sin(x)) = x only for x in [-π/2, π/2]',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'sin⁻¹(sin(x)) = x only for x in [-π/2, π/2]'
          }
        ]
      }
    },
    {
      id: 'inver1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'arcsin(x) = sin⁻¹(x)',
            options: ['finds the angle whose sine is x', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Domain',
            options: ['[-1, 1]; Range: [-π/2, π/2]', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'sin(sin⁻¹(x)) = x for x in [-1, 1]',
            options: ['sin(sin⁻¹(x)) = x for x in [-1, 1]', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['finds the angle whose sine is x', '[-1, 1]; Range: [-π/2, π/2]', 'sin(sin⁻¹(x)) = x for x in [-1, 1]'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Inverse Sine (arcsin).'
      }
    }
  ]
}
