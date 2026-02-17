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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Error bound" refer to in calculus?',
            options: [
              'approximate ln 2 to within 0.01 — need bₙ₊₁ < 0.01',
              'The error is at most the absolute value of the next term',
              'This gives a quick estimate of how many terms are needed for desired accuracy',
              '|S - Sₙ| ≤ bₙ₊₁ (the first omitted term)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Error bound: |S - Sₙ| ≤ bₙ₊₁ (the first omitted term). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about This gives a quick estimate of how many…?',
            options: [
              'The error is at most the absolute value of the next term',
              'This gives a quick estimate of how many terms are needed for desired accuracy',
              '|S - Sₙ| ≤ bₙ₊₁ (the first omitted term)',
              'approximate ln 2 to within 0.01 — need bₙ₊₁ < 0.01'
            ],
            correctAnswer: 1,
            explanation: 'Correct — This gives a quick estimate of how many terms are needed for desired accuracy. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Alternating Series Error Bound, which correctly describes Example?',
            options: [
              'approximate ln 2 to within 0.01 — need bₙ₊₁ < 0.01',
              'This gives a quick estimate of how many terms are needed for desired accuracy',
              '|S - Sₙ| ≤ bₙ₊₁ (the first omitted term)',
              'The error is at most the absolute value of the next term'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Example: approximate ln 2 to within 0.01 — need bₙ₊₁ < 0.01. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'alter4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Error bound',
            options: ['The error is at most the absolute value of the next term', 'approximate ln 2 to within 0.01 — need bₙ₊₁ < 0.01', '|S - Sₙ| ≤ bₙ₊₁ (the first omitted term)', 'This gives a quick estimate of how many terms are needed for desired accuracy']
          },
          {
            label: 'Example',
            options: ['|S - Sₙ| ≤ bₙ₊₁ (the first omitted term)', 'This gives a quick estimate of how many terms are needed for desired accuracy', 'The error is at most the absolute value of the next term', 'approximate ln 2 to within 0.01 — need bₙ₊₁ < 0.01']
          }
        ],
        correctAnswers: ['|S - Sₙ| ≤ bₙ₊₁ (the first omitted term)', 'approximate ln 2 to within 0.01 — need bₙ₊₁ < 0.01'],
        hint1: 'Think about what each concept specifically describes in Alternating Series Error Bound.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Alternating Series Error Bound describes a specific idea. Error bound: |S - Sₙ| ≤ bₙ₊₁ (the first omitted term). Example: approximate ln 2 to within 0.01 — need bₙ₊₁ < 0.01.'
      }
    }
  ]
}
