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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Some integrals require multiple…" refer to in calculus?',
            options: [
              'Keep the overall strategy clear; don\'t get lost in algebra',
              'partial fractions then u-substitution',
              'Some integrals require multiple techniques in sequence',
              'u-sub then integration by parts'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Some integrals require multiple techniques in sequence. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Example:',
            options: [
              'This is a common misconception about the topic',
              'Some integrals require multiple techniques in sequence',
              'u-sub then integration by parts',
              'Keep the overall strategy clear; don\'t get lost in algebra'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Example: u-sub then integration by parts. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Combining Techniques, which correctly describes Keep the overall strategy clear; don\'t…?',
            options: [
              'Some integrals require multiple techniques in sequence',
              'partial fractions then u-substitution',
              'Keep the overall strategy clear; don\'t get lost in algebra',
              'u-sub then integration by parts'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Keep the overall strategy clear; don\'t get lost in algebra. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'advan3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Example',
            options: ['partial fractions then u-substitution', 'Keep the overall strategy clear; don\'t get lost in algebra', 'Some integrals require multiple techniques in sequence', 'u-sub then integration by parts']
          },
          {
            label: 'Example',
            options: ['Keep the overall strategy clear; don\'t get lost in algebra', 'u-sub then integration by parts', 'partial fractions then u-substitution', 'Some integrals require multiple techniques in sequence']
          }
        ],
        correctAnswers: ['partial fractions then u-substitution', 'u-sub then integration by parts'],
        hint1: 'Think about what each concept specifically describes in Combining Techniques.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Combining Techniques describes a specific idea. Example: partial fractions then u-substitution. Example: u-sub then integration by parts.'
      }
    }
  ]
}
