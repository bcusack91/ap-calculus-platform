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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Sequence?',
            options: [
              'an ordered list of numbers following a pattern',
              'Sequences can be finite or infinite',
              'aₙ = f(aₙ₋₁) defines each term from the previous',
              'aₙ = f(n) gives the nth term directly'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Sequence: an ordered list of numbers following a pattern. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Recursive formula?',
            options: [
              'an ordered list of numbers following a pattern',
              'Sequences can be finite or infinite',
              'aₙ = f(n) gives the nth term directly',
              'aₙ = f(aₙ₋₁) defines each term from the previous'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Recursive formula: aₙ = f(aₙ₋₁) defines each term from the previous. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sequence',
            options: ['Sequences can be finite or infinite', 'aₙ = f(n) gives the nth term directly', 'aₙ = f(aₙ₋₁) defines each term from the previous', 'an ordered list of numbers following a pattern']
          },
          {
            label: 'Explicit formula',
            options: ['an ordered list of numbers following a pattern', 'Sequences can be finite or infinite', 'aₙ = f(n) gives the nth term directly', 'aₙ = f(aₙ₋₁) defines each term from the previous']
          },
          {
            label: 'Recursive formula',
            options: ['an ordered list of numbers following a pattern', 'aₙ = f(n) gives the nth term directly', 'aₙ = f(aₙ₋₁) defines each term from the previous', 'Sequences can be finite or infinite']
          }
        ],
        correctAnswers: ['an ordered list of numbers following a pattern', 'aₙ = f(n) gives the nth term directly', 'aₙ = f(aₙ₋₁) defines each term from the previous'],
        hint1: 'Think about what each concept specifically describes in Sequences Series.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Sequences Series describes a specific idea. Sequence: an ordered list of numbers following a pattern. Explicit formula: aₙ = f(n) gives the nth term directly. Recursive formula: aₙ = f(aₙ₋₁) defines each term from the previous.'
      }
    }
  ]
}
