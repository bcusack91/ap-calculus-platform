export const precalcInverseTrigPart2Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'inver2-intro',
      type: 'text' as const,
      content: `
# Inverse Cosine (arccos)

**Part 2 of 7 — Inverse Cosine (arccos)**

### 1. arccos(x) = cos⁻¹(x)

finds the angle whose cosine is x

### 2. Domain

[-1, 1]; Range: [0, π]

### 3. cos(cos⁻¹(x)) = x for x in [-1, 1]

cos(cos⁻¹(x)) = x for x in [-1, 1]

### 4. cos⁻¹(cos(x)) = x only for x in [0, π]

cos⁻¹(cos(x)) = x only for x in [0, π]
      `
    },
    {
      id: 'inver2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of inverse cosine (arccos)?',
            options: [
              'arccos(x) = cos⁻¹(x)',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'arccos(x) = cos⁻¹(x): finds the angle whose cosine is x'
          },
          {
            question: 'In the context of inverse cosine (arccos), which is accurate?',
            options: [
              'cos(cos⁻¹(x)) = x for x in [-1, 1]',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'cos(cos⁻¹(x)) = x for x in [-1, 1]'
          }
        ]
      }
    },
    {
      id: 'inver2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **arccos(x) = cos⁻¹(x)**: finds the angle whose cosine is x
- **Domain**: [-1, 1]; Range: [0, π]
- **cos(cos⁻¹(x)) = x for x in [-1, 1]**
- **cos⁻¹(cos(x)) = x only for x in [0, π]**
      `
    },
    {
      id: 'inver2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to inverse cosine (arccos)?',
            options: [
              'cos⁻¹(cos(x)) = x only for x in [0, π]',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'cos⁻¹(cos(x)) = x only for x in [0, π]'
          }
        ]
      }
    },
    {
      id: 'inver2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'arccos(x) = cos⁻¹(x)',
            options: ['finds the angle whose cosine is x', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Domain',
            options: ['[-1, 1]; Range: [0, π]', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'cos(cos⁻¹(x)) = x for x in [-1, 1]',
            options: ['cos(cos⁻¹(x)) = x for x in [-1, 1]', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['finds the angle whose cosine is x', '[-1, 1]; Range: [0, π]', 'cos(cos⁻¹(x)) = x for x in [-1, 1]'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Inverse Cosine (arccos).'
      }
    }
  ]
}
