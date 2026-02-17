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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Tangent line" refer to in precalculus?',
            options: [
              'y - f(a) = f\'(a)(x - a)',
              'Slope = instantaneous rate of change = derivative at the point',
              'touches the curve at exactly one point (locally)',
              'The tangent line is the best linear approximation near the point'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Tangent line: touches the curve at exactly one point (locally). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Equation:',
            options: [
              'The tangent line is the best linear approximation near the point',
              'touches the curve at exactly one point (locally)',
              'Slope = instantaneous rate of change = derivative at the point',
              'y - f(a) = f\'(a)(x - a)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Equation: y - f(a) = f\'(a)(x - a). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Tangent line',
            options: ['The tangent line is the best linear approximation near the point', 'Slope = instantaneous rate of change = derivative at the point', 'y - f(a) = f\'(a)(x - a)', 'touches the curve at exactly one point (locally)']
          },
          {
            label: 'Equation',
            options: ['Slope = instantaneous rate of change = derivative at the point', 'The tangent line is the best linear approximation near the point', 'y - f(a) = f\'(a)(x - a)', 'touches the curve at exactly one point (locally)']
          }
        ],
        correctAnswers: ['touches the curve at exactly one point (locally)', 'y - f(a) = f\'(a)(x - a)'],
        hint1: 'Think about what each concept specifically describes in Tangent Lines (Preview).',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Tangent Lines (Preview) describes a specific idea. Tangent line: touches the curve at exactly one point (locally). Equation: y - f(a) = f\'(a)(x - a).'
      }
    }
  ]
}
