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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Vertical asymptotes occur where q(x) =…" refer to in precalculus?',
            options: [
              'A factor in the denominator that does NOT cancel gives a vertical asymptote',
              'Vertical asymptotes occur where q(x) = 0 (after cancellation)',
              'The graph approaches ±∞ near vertical asymptotes',
              'Sign analysis determines whether the function goes to +∞ or -∞'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Vertical asymptotes occur where q(x) = 0 (after cancellation). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Sign analysis determines whether the…?',
            options: [
              'A factor in the denominator that does NOT cancel gives a vertical asymptote',
              'The graph approaches ±∞ near vertical asymptotes',
              'Vertical asymptotes occur where q(x) = 0 (after cancellation)',
              'Sign analysis determines whether the function goes to +∞ or -∞'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Sign analysis determines whether the function goes to +∞ or -∞. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Vertical asymptotes occur where q(x) =…',
            options: ['Sign analysis determines whether the function goes to +∞ or -∞', 'Vertical asymptotes occur where q(x) = 0 (after cancellation)', 'The graph approaches ±∞ near vertical asymptotes', 'A factor in the denominator that does NOT cancel gives a vertical asymptote']
          },
          {
            label: 'The graph approaches ±∞ near vertical…',
            options: ['A factor in the denominator that does NOT cancel gives a vertical asymptote', 'Vertical asymptotes occur where q(x) = 0 (after cancellation)', 'Sign analysis determines whether the function goes to +∞ or -∞', 'The graph approaches ±∞ near vertical asymptotes']
          },
          {
            label: 'Sign analysis determines whether the…',
            options: ['Sign analysis determines whether the function goes to +∞ or -∞', 'Vertical asymptotes occur where q(x) = 0 (after cancellation)', 'The graph approaches ±∞ near vertical asymptotes', 'A factor in the denominator that does NOT cancel gives a vertical asymptote']
          }
        ],
        correctAnswers: ['Vertical asymptotes occur where q(x) = 0 (after cancellation)', 'The graph approaches ±∞ near vertical asymptotes', 'Sign analysis determines whether the function goes to +∞ or -∞'],
        hint1: 'Think about what each concept specifically describes in Vertical Asymptotes.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Vertical Asymptotes describes a specific idea. Vertical asymptotes occur where q(x) = 0 (after cancellation). The graph approaches ±∞ near vertical asymptotes. Sign analysis determines whether the function goes to +∞ or -∞.'
      }
    }
  ]
}
