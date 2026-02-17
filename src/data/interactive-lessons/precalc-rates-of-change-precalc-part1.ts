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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Average rate of change of f on [a,b]" refer to in precalculus?',
            options: [
              'Average rate of change = slope of secant line',
              '(output units)/(input units)',
              '(f(b) - f(a))/(b - a)',
              'This is the slope of the secant line through (a, f(a)) and (b, f(b))'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Average rate of change of f on [a,b]: (f(b) - f(a))/(b - a). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Units?',
            options: [
              '(output units)/(input units)',
              'Average rate of change = slope of secant line',
              'This is the slope of the secant line through (a, f(a)) and (b, f(b))',
              '(f(b) - f(a))/(b - a)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Units: (output units)/(input units). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Average rate of change of f on [a,b]',
            options: ['Average rate of change = slope of secant line', '(output units)/(input units)', 'This is the slope of the secant line through (a, f(a)) and (b, f(b))', '(f(b) - f(a))/(b - a)']
          },
          {
            label: 'Units',
            options: ['This is the slope of the secant line through (a, f(a)) and (b, f(b))', 'Average rate of change = slope of secant line', '(output units)/(input units)', '(f(b) - f(a))/(b - a)']
          }
        ],
        correctAnswers: ['(f(b) - f(a))/(b - a)', '(output units)/(input units)'],
        hint1: 'Think about what each concept specifically describes in Rates Of Change.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Rates Of Change describes a specific idea. Average rate of change of f on [a,b]: (f(b) - f(a))/(b - a). Units: (output units)/(input units).'
      }
    }
  ]
}
