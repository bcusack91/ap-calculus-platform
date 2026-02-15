export const precalcTrigIdentitiesPart2Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'trigo2-intro',
      type: 'text' as const,
      content: `
# Pythagorean Identities

**Part 2 of 7 — Pythagorean Identities**

### 1. sin²θ + cos²θ = 1

sin²θ + cos²θ = 1

### 2. 1 + tan²θ = sec²θ

1 + tan²θ = sec²θ

### 3. 1 + cot²θ = csc²θ

1 + cot²θ = csc²θ

### 4. These can be rearranged to isolate any single function

These can be rearranged to isolate any single function
      `
    },
    {
      id: 'trigo2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of pythagorean identities?',
            options: [
              'sin²θ + cos²θ = 1',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'sin²θ + cos²θ = 1'
          },
          {
            question: 'In the context of pythagorean identities, which is accurate?',
            options: [
              '1 + cot²θ = csc²θ',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: '1 + cot²θ = csc²θ'
          }
        ]
      }
    },
    {
      id: 'trigo2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **sin²θ + cos²θ = 1**
- **1 + tan²θ = sec²θ**
- **1 + cot²θ = csc²θ**
- **These can be rearranged to isolate any single function**
      `
    },
    {
      id: 'trigo2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to pythagorean identities?',
            options: [
              'These can be rearranged to isolate any single function',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'These can be rearranged to isolate any single function'
          }
        ]
      }
    },
    {
      id: 'trigo2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'sin²θ + cos²θ = 1',
            options: ['sin²θ + cos²θ = 1', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: '1 + tan²θ = sec²θ',
            options: ['1 + tan²θ = sec²θ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: '1 + cot²θ = csc²θ',
            options: ['1 + cot²θ = csc²θ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['sin²θ + cos²θ = 1', '1 + tan²θ = sec²θ', '1 + cot²θ = csc²θ'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Pythagorean Identities.'
      }
    }
  ]
}
