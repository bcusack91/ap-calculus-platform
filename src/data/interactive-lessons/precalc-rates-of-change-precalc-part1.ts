export const precalcRatesOfChangePart1Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'rates1-intro',
      type: 'text' as const,
      content: `
# 📈 Rates Of Change

**Part 1 of 7 — Average Rate of Change**

### 1. Average rate of change of f on [a,b]

(f(b) - f(a))/(b - a)

### 2. This is the slope of the secant line through (a, f(a)) and (b, f(b))

This is the slope of the secant line through (a, f(a)) and (b, f(b))

### 3. Units

(output units)/(input units)

### 4. Average rate of change = slope of secant line

Average rate of change = slope of secant line
      `
    },
    {
      id: 'rates1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of average rate of change?',
            options: [
              'Average rate of change of f on [a,b]',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Average rate of change of f on [a,b]: (f(b) - f(a))/(b - a)'
          },
          {
            question: 'In the context of average rate of change, which is accurate?',
            options: [
              '(output units)/(input units)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Units: (output units)/(input units)'
          }
        ]
      }
    },
    {
      id: 'rates1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Average rate of change of f on [a,b]**: (f(b) - f(a))/(b - a)
- **This is the slope of the secant line through (a, f(a)) and (b, f(b))**
- **Units**: (output units)/(input units)
- **Average rate of change = slope of secant line**
      `
    },
    {
      id: 'rates1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to average rate of change?',
            options: [
              'Average rate of change = slope of secant line',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Average rate of change = slope of secant line'
          }
        ]
      }
    },
    {
      id: 'rates1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Average rate of change of f on [a,b]',
            options: ['(f(b) - f(a))/(b - a)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'This is the slope of the secant line through (a, f(a)) and (b, f(b))',
            options: ['This is the slope of the secant line through (a, f', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Units',
            options: ['(output units)/(input units)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['(f(b) - f(a))/(b - a)', 'This is the slope of the secant line through (a, f', '(output units)/(input units)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Average Rate of Change.'
      }
    }
  ]
}
