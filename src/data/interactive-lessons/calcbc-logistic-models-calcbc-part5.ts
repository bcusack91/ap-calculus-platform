export const calcBCLogisticPart5Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'logis5-intro',
      type: 'text' as const,
      content: `
# Real-World Logistic Models

**Part 5 of 7 — Real-World Logistic Models**

### 1. Ecology

population growth with limited resources

### 2. Epidemiology

spread of disease through a population

### 3. Technology adoption

S-curve of market penetration

### 4. Chemical reactions

approach to equilibrium concentration
      `
    },
    {
      id: 'logis5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Ecology" refer to in calculus?',
            options: [
              'population growth with limited resources',
              'S-curve of market penetration',
              'spread of disease through a population',
              'approach to equilibrium concentration'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Ecology: population growth with limited resources. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Technology adoption:',
            options: [
              'population growth with limited resources',
              'approach to equilibrium concentration',
              'S-curve of market penetration',
              'spread of disease through a population'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Technology adoption: S-curve of market penetration. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'logis5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Ecology**: population growth with limited resources
- **Epidemiology**: spread of disease through a population
- **Technology adoption**: S-curve of market penetration
- **Chemical reactions**: approach to equilibrium concentration
      `
    },
    {
      id: 'logis5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Chemical reactions is correct?',
            options: [
              'population growth with limited resources',
              'approach to equilibrium concentration',
              'spread of disease through a population',
              'S-curve of market penetration'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Chemical reactions: approach to equilibrium concentration. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'logis5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ecology',
            options: ['spread of disease through a population', 'S-curve of market penetration', 'population growth with limited resources', 'approach to equilibrium concentration']
          },
          {
            label: 'Epidemiology',
            options: ['S-curve of market penetration', 'approach to equilibrium concentration', 'spread of disease through a population', 'population growth with limited resources']
          },
          {
            label: 'Technology adoption',
            options: ['approach to equilibrium concentration', 'spread of disease through a population', 'S-curve of market penetration', 'population growth with limited resources']
          }
        ],
        correctAnswers: ['population growth with limited resources', 'spread of disease through a population', 'S-curve of market penetration'],
        hint1: 'Think about what each concept specifically describes in Real-World Logistic Models.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Real-World Logistic Models describes a specific idea. Ecology: population growth with limited resources. Epidemiology: spread of disease through a population. Technology adoption: S-curve of market penetration.'
      }
    }
  ]
}
