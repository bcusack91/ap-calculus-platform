export const precalcRatesOfChangePart4Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'rates4-intro',
      type: 'text' as const,
      content: `
# Tangent Lines (Preview)

**Part 4 of 7 — Tangent Lines (Preview)**

### 1. Tangent line

touches the curve at exactly one point (locally)

### 2. Slope = instantaneous rate of change = derivative at the point

Slope = instantaneous rate of change = derivative at the point

### 3. Equation

y - f(a) = f'(a)(x - a)

### 4. The tangent line is the best linear approximation near the point

The tangent line is the best linear approximation near the point
      `
    },
    {
      id: 'rates4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of tangent lines (preview)?',
            options: [
              'Tangent line',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Tangent line: touches the curve at exactly one point (locally)'
          },
          {
            question: 'In the context of tangent lines (preview), which is accurate?',
            options: [
              'y - f(a) = f\'(a)(x - a)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Equation: y - f(a) = f\'(a)(x - a)'
          }
        ]
      }
    },
    {
      id: 'rates4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Tangent line**: touches the curve at exactly one point (locally)
- **Slope = instantaneous rate of change = derivative at the point**
- **Equation**: y - f(a) = f'(a)(x - a)
- **The tangent line is the best linear approximation near the point**
      `
    },
    {
      id: 'rates4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to tangent lines (preview)?',
            options: [
              'The tangent line is the best linear approximation near the point',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'The tangent line is the best linear approximation near the point'
          }
        ]
      }
    },
    {
      id: 'rates4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Tangent line',
            options: ['touches the curve at exactly one point (locally)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Slope = instantaneous rate of change = derivative at the point',
            options: ['Slope = instantaneous rate of change = derivative ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Equation',
            options: ['y - f(a) = f\'(a)(x - a)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['touches the curve at exactly one point (locally)', 'Slope = instantaneous rate of change = derivative ', 'y - f(a) = f\'(a)(x - a)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Tangent Lines (Preview).'
      }
    }
  ]
}
