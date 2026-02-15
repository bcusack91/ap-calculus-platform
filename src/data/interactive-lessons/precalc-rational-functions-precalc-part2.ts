export const precalcRationalPart2Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'ratio2-intro',
      type: 'text' as const,
      content: `
# Vertical Asymptotes

**Part 2 of 7 — Vertical Asymptotes**

### 1. Vertical asymptotes occur where q(x) = 0 (after cancellation)

Vertical asymptotes occur where q(x) = 0 (after cancellation)

### 2. The graph approaches ±∞ near vertical asymptotes

The graph approaches ±∞ near vertical asymptotes

### 3. Sign analysis determines whether the function goes to +∞ or -∞

Sign analysis determines whether the function goes to +∞ or -∞

### 4. A factor in the denominator that does NOT cancel gives a vertical asymptote

A factor in the denominator that does NOT cancel gives a vertical asymptote
      `
    },
    {
      id: 'ratio2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of vertical asymptotes?',
            options: [
              'Vertical asymptotes occur where q(x) = 0 (after cancellation)',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Vertical asymptotes occur where q(x) = 0 (after cancellation)'
          },
          {
            question: 'In the context of vertical asymptotes, which is accurate?',
            options: [
              'Sign analysis determines whether the function goes to +∞ or -∞',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Sign analysis determines whether the function goes to +∞ or -∞'
          }
        ]
      }
    },
    {
      id: 'ratio2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Vertical asymptotes occur where q(x) = 0 (after cancellation)**
- **The graph approaches ±∞ near vertical asymptotes**
- **Sign analysis determines whether the function goes to +∞ or -∞**
- **A factor in the denominator that does NOT cancel gives a vertical asymptote**
      `
    },
    {
      id: 'ratio2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to vertical asymptotes?',
            options: [
              'A factor in the denominator that does NOT cancel gives a vertical asymptote',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'A factor in the denominator that does NOT cancel gives a vertical asymptote'
          }
        ]
      }
    },
    {
      id: 'ratio2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Vertical asymptotes occur where q(x) = 0 (after cancellation)',
            options: ['Vertical asymptotes occur where q(x) = 0 (after ca', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'The graph approaches ±∞ near vertical asymptotes',
            options: ['The graph approaches ±∞ near vertical asymptotes', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Sign analysis determines whether the function goes to +∞ or -∞',
            options: ['Sign analysis determines whether the function goes', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Vertical asymptotes occur where q(x) = 0 (after ca', 'The graph approaches ±∞ near vertical asymptotes', 'Sign analysis determines whether the function goes'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Vertical Asymptotes.'
      }
    }
  ]
}
