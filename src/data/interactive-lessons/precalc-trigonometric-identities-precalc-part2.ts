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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "sin²θ + cos²θ = 1" refer to in precalculus?',
            options: [
              'sin²θ + cos²θ = 1',
              '1 + cot²θ = csc²θ',
              '1 + tan²θ = sec²θ',
              'These can be rearranged to isolate any single function'
            ],
            correctAnswer: 0,
            explanation: 'Correct — sin²θ + cos²θ = 1. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Pythagorean Identities, which explains 1 + cot²θ = csc²θ?',
            options: [
              '1 + cot²θ = csc²θ',
              'These can be rearranged to isolate any single function',
              'sin²θ + cos²θ = 1',
              '1 + tan²θ = sec²θ'
            ],
            correctAnswer: 0,
            explanation: 'Correct — 1 + cot²θ = csc²θ. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'sin²θ + cos²θ = 1',
            options: ['sin²θ + cos²θ = 1', '1 + cot²θ = csc²θ', 'These can be rearranged to isolate any single function', '1 + tan²θ = sec²θ']
          },
          {
            label: '1 + tan²θ = sec²θ',
            options: ['sin²θ + cos²θ = 1', '1 + tan²θ = sec²θ', 'These can be rearranged to isolate any single function', '1 + cot²θ = csc²θ']
          },
          {
            label: '1 + cot²θ = csc²θ',
            options: ['1 + cot²θ = csc²θ', '1 + tan²θ = sec²θ', 'These can be rearranged to isolate any single function', 'sin²θ + cos²θ = 1']
          }
        ],
        correctAnswers: ['sin²θ + cos²θ = 1', '1 + tan²θ = sec²θ', '1 + cot²θ = csc²θ'],
        hint1: 'Think about what each concept specifically describes in Pythagorean Identities.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Pythagorean Identities describes a specific idea. sin²θ + cos²θ = 1. 1 + tan²θ = sec²θ. 1 + cot²θ = csc²θ.'
      }
    }
  ]
}
