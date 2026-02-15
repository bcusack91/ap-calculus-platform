export const precalcTrigFunctionsPart5Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'trigo5-intro',
      type: 'text' as const,
      content: `
# Trig Function Graphs

**Part 5 of 7 — Trig Function Graphs**

### 1. y = a sin(b(x - c)) + d

amplitude |a|, period 2π/|b|, phase shift c, vertical shift d

### 2. y = a cos(b(x - c)) + d follows the same pattern

y = a cos(b(x - c)) + d follows the same pattern

### 3. tan graph has vertical asymptotes at x = π/2 + nπ

tan graph has vertical asymptotes at x = π/2 + nπ

### 4. Reciprocal functions have the same period as their base functions

Reciprocal functions have the same period as their base functions
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
            question: 'Which best describes a key concept of trig function graphs?',
            options: [
              'y = a sin(b(x - c)) + d',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'y = a sin(b(x - c)) + d: amplitude |a|, period 2π/|b|, phase shift c, vertical shift d'
          },
          {
            question: 'In the context of trig function graphs, which is accurate?',
            options: [
              'tan graph has vertical asymptotes at x = π/2 + nπ',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'tan graph has vertical asymptotes at x = π/2 + nπ'
          }
        ]
      }
    },
    {
      id: 'trigo5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **y = a sin(b(x - c)) + d**: amplitude |a|, period 2π/|b|, phase shift c, vertical shift d
- **y = a cos(b(x - c)) + d follows the same pattern**
- **tan graph has vertical asymptotes at x = π/2 + nπ**
- **Reciprocal functions have the same period as their base functions**
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
            question: 'Which concept relates directly to trig function graphs?',
            options: [
              'Reciprocal functions have the same period as their base functions',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Reciprocal functions have the same period as their base functions'
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
            label: 'y = a sin(b(x - c)) + d',
            options: ['amplitude |a|, period 2π/|b|, phase shift c, verti', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'y = a cos(b(x - c)) + d follows the same pattern',
            options: ['y = a cos(b(x - c)) + d follows the same pattern', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'tan graph has vertical asymptotes at x = π/2 + nπ',
            options: ['tan graph has vertical asymptotes at x = π/2 + nπ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['amplitude |a|, period 2π/|b|, phase shift c, verti', 'y = a cos(b(x - c)) + d follows the same pattern', 'tan graph has vertical asymptotes at x = π/2 + nπ'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Trig Function Graphs.'
      }
    }
  ]
}
