export const precalcRatesOfChangePart7Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'rates7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'rates7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Position → velocity" refer to in precalculus?',
            options: [
              'how fast a population is changing',
              'positive = increasing, negative = decreasing',
              'rate of change of total cost per unit',
              'rate of change of position with respect to time'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Position → velocity: rate of change of position with respect to time. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Population growth rate:',
            options: [
              'rate of change of position with respect to time',
              'how fast a population is changing',
              'rate of change of total cost per unit',
              'positive = increasing, negative = decreasing'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Population growth rate: how fast a population is changing. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'rates7-detail',
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
      id: 'rates7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
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
      id: 'rates7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Position → velocity',
            options: ['positive = increasing, negative = decreasing', 'how fast a population is changing', 'rate of change of total cost per unit', 'rate of change of position with respect to time']
          },
          {
            label: 'Cost → marginal cost',
            options: ['how fast a population is changing', 'positive = increasing, negative = decreasing', 'rate of change of total cost per unit', 'rate of change of position with respect to time']
          },
          {
            label: 'Population growth rate',
            options: ['positive = increasing, negative = decreasing', 'how fast a population is changing', 'rate of change of total cost per unit', 'rate of change of position with respect to time']
          }
        ],
        correctAnswers: ['rate of change of position with respect to time', 'rate of change of total cost per unit', 'how fast a population is changing'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Position → velocity: rate of change of position with respect to time. Cost → marginal cost: rate of change of total cost per unit. Population growth rate: how fast a population is changing.'
      }
    }
  ]
}
