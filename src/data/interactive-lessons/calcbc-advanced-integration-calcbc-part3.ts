export const calcBCAdvIntegrationPart3Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'advan3-intro',
      type: 'text' as const,
      content: `
# Combining Techniques

**Part 3 of 7 — Combining Techniques**

### 1. Some integrals require multiple techniques in sequence

Some integrals require multiple techniques in sequence

### 2. Example

partial fractions then u-substitution

### 3. Example

u-sub then integration by parts

### 4. Keep the overall strategy clear; don't get lost in algebra

Keep the overall strategy clear; don't get lost in algebra
      `
    },
    {
      id: 'advan3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of combining techniques?',
            options: [
              'Some integrals require multiple techniques in sequence',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Some integrals require multiple techniques in sequence'
          },
          {
            question: 'In the context of combining techniques, which is accurate?',
            options: [
              'u-sub then integration by parts',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Example: u-sub then integration by parts'
          }
        ]
      }
    },
    {
      id: 'advan3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Some integrals require multiple techniques in sequence**
- **Example**: partial fractions then u-substitution
- **Example**: u-sub then integration by parts
- **Keep the overall strategy clear; don't get lost in algebra**
      `
    },
    {
      id: 'advan3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to combining techniques?',
            options: [
              'Keep the overall strategy clear; don\'t get lost in algebra',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Keep the overall strategy clear; don\'t get lost in algebra'
          }
        ]
      }
    },
    {
      id: 'advan3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Some integrals require multiple techniques in sequence',
            options: ['Some integrals require multiple techniques in sequ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Example',
            options: ['partial fractions then u-substitution', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Example',
            options: ['u-sub then integration by parts', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Some integrals require multiple techniques in sequ', 'partial fractions then u-substitution', 'u-sub then integration by parts'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Combining Techniques.'
      }
    }
  ]
}
