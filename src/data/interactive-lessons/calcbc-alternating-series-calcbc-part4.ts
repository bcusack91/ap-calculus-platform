export const calcBCAlternatingPart4Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alter4-intro',
      type: 'text' as const,
      content: `
# Alternating Series Error Bound

**Part 4 of 7 — Alternating Series Error Bound**

### 1. Error bound

|S - Sₙ| ≤ bₙ₊₁ (the first omitted term)

### 2. The error is at most the absolute value of the next term

The error is at most the absolute value of the next term

### 3. This gives a quick estimate of how many terms are needed for desired accuracy

This gives a quick estimate of how many terms are needed for desired accuracy

### 4. Example

approximate ln 2 to within 0.01 — need bₙ₊₁ < 0.01
      `
    },
    {
      id: 'alter4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of alternating series error bound?',
            options: [
              'Error bound',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Error bound: |S - Sₙ| ≤ bₙ₊₁ (the first omitted term)'
          },
          {
            question: 'In the context of alternating series error bound, which is accurate?',
            options: [
              'This gives a quick estimate of how many terms are needed for desired accuracy',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'This gives a quick estimate of how many terms are needed for desired accuracy'
          }
        ]
      }
    },
    {
      id: 'alter4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Error bound**: |S - Sₙ| ≤ bₙ₊₁ (the first omitted term)
- **The error is at most the absolute value of the next term**
- **This gives a quick estimate of how many terms are needed for desired accuracy**
- **Example**: approximate ln 2 to within 0.01 — need bₙ₊₁ < 0.01
      `
    },
    {
      id: 'alter4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to alternating series error bound?',
            options: [
              'approximate ln 2 to within 0.01 — need bₙ₊₁ < 0.01',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Example: approximate ln 2 to within 0.01 — need bₙ₊₁ < 0.01'
          }
        ]
      }
    },
    {
      id: 'alter4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Error bound',
            options: ['|S - Sₙ| ≤ bₙ₊₁ (the first omitted term)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'The error is at most the absolute value of the next term',
            options: ['The error is at most the absolute value of the nex', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'This gives a quick estimate of how many terms are needed for desired accuracy',
            options: ['This gives a quick estimate of how many terms are ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['|S - Sₙ| ≤ bₙ₊₁ (the first omitted term)', 'The error is at most the absolute value of the nex', 'This gives a quick estimate of how many terms are '],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Alternating Series Error Bound.'
      }
    }
  ]
}
