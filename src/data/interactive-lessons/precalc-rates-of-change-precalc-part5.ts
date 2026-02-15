export const precalcRatesOfChangePart5Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'rates5-intro',
      type: 'text' as const,
      content: `
# Modeling with Rates of Change

**Part 5 of 7 — Modeling with Rates of Change**

### 1. Position → velocity

rate of change of position with respect to time

### 2. Cost → marginal cost

rate of change of total cost per unit

### 3. Population growth rate

how fast a population is changing

### 4. Interpreting the sign of the rate

positive = increasing, negative = decreasing
      `
    },
    {
      id: 'rates5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of modeling with rates of change?',
            options: [
              'Position → velocity',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Position → velocity: rate of change of position with respect to time'
          },
          {
            question: 'In the context of modeling with rates of change, which is accurate?',
            options: [
              'how fast a population is changing',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Population growth rate: how fast a population is changing'
          }
        ]
      }
    },
    {
      id: 'rates5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Position → velocity**: rate of change of position with respect to time
- **Cost → marginal cost**: rate of change of total cost per unit
- **Population growth rate**: how fast a population is changing
- **Interpreting the sign of the rate**: positive = increasing, negative = decreasing
      `
    },
    {
      id: 'rates5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to modeling with rates of change?',
            options: [
              'positive = increasing, negative = decreasing',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Interpreting the sign of the rate: positive = increasing, negative = decreasing'
          }
        ]
      }
    },
    {
      id: 'rates5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Position → velocity',
            options: ['rate of change of position with respect to time', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Cost → marginal cost',
            options: ['rate of change of total cost per unit', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Population growth rate',
            options: ['how fast a population is changing', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['rate of change of position with respect to time', 'rate of change of total cost per unit', 'how fast a population is changing'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Modeling with Rates of Change.'
      }
    }
  ]
}
