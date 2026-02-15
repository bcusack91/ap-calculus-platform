export const precalcTrigIdentitiesPart5Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'trigo5-intro',
      type: 'text' as const,
      content: `
# Verifying Identities

**Part 5 of 7 — Verifying Identities**

### 1. Work with one side at a time to transform it into the other

Work with one side at a time to transform it into the other

### 2. Convert everything to sine and cosine as a strategy

Convert everything to sine and cosine as a strategy

### 3. Factor, combine fractions, or multiply by conjugates

Factor, combine fractions, or multiply by conjugates

### 4. Use Pythagorean identities to simplify

Use Pythagorean identities to simplify
      `
    },
    {
      id: 'trigo5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of verifying identities?',
            options: [
              'Work with one side at a time to transform it into the other',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Work with one side at a time to transform it into the other'
          },
          {
            question: 'In the context of verifying identities, which is accurate?',
            options: [
              'Factor, combine fractions, or multiply by conjugates',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Factor, combine fractions, or multiply by conjugates'
          }
        ]
      }
    },
    {
      id: 'trigo5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Work with one side at a time to transform it into the other**
- **Convert everything to sine and cosine as a strategy**
- **Factor, combine fractions, or multiply by conjugates**
- **Use Pythagorean identities to simplify**
      `
    },
    {
      id: 'trigo5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to verifying identities?',
            options: [
              'Use Pythagorean identities to simplify',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Use Pythagorean identities to simplify'
          }
        ]
      }
    },
    {
      id: 'trigo5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Work with one side at a time to transform it into the other',
            options: ['Work with one side at a time to transform it into ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Convert everything to sine and cosine as a strategy',
            options: ['Convert everything to sine and cosine as a strateg', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Factor, combine fractions, or multiply by conjugates',
            options: ['Factor, combine fractions, or multiply by conjugat', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Work with one side at a time to transform it into ', 'Convert everything to sine and cosine as a strateg', 'Factor, combine fractions, or multiply by conjugat'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Verifying Identities.'
      }
    }
  ]
}
