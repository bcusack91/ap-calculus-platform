export const precalcSequencesPart1Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'seque1-intro',
      type: 'text' as const,
      content: `
# 📈 Sequences Series

**Part 1 of 7 — Sequences & Notation**

### 1. Sequence

an ordered list of numbers following a pattern

### 2. Explicit formula

aₙ = f(n) gives the nth term directly

### 3. Recursive formula

aₙ = f(aₙ₋₁) defines each term from the previous

### 4. Sequences can be finite or infinite

Sequences can be finite or infinite
      `
    },
    {
      id: 'seque1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of sequences & notation?',
            options: [
              'Sequence',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Sequence: an ordered list of numbers following a pattern'
          },
          {
            question: 'In the context of sequences & notation, which is accurate?',
            options: [
              'aₙ = f(aₙ₋₁) defines each term from the previous',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Recursive formula: aₙ = f(aₙ₋₁) defines each term from the previous'
          }
        ]
      }
    },
    {
      id: 'seque1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Sequence**: an ordered list of numbers following a pattern
- **Explicit formula**: aₙ = f(n) gives the nth term directly
- **Recursive formula**: aₙ = f(aₙ₋₁) defines each term from the previous
- **Sequences can be finite or infinite**
      `
    },
    {
      id: 'seque1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to sequences & notation?',
            options: [
              'Sequences can be finite or infinite',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Sequences can be finite or infinite'
          }
        ]
      }
    },
    {
      id: 'seque1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sequence',
            options: ['an ordered list of numbers following a pattern', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Explicit formula',
            options: ['aₙ = f(n) gives the nth term directly', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Recursive formula',
            options: ['aₙ = f(aₙ₋₁) defines each term from the previous', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['an ordered list of numbers following a pattern', 'aₙ = f(n) gives the nth term directly', 'aₙ = f(aₙ₋₁) defines each term from the previous'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Sequences & Notation.'
      }
    }
  ]
}
