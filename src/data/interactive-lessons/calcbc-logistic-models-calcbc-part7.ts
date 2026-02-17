export const calcBCLogisticPart7Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'logis7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'logis7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Ecology" refer to in calculus?',
            options: [
              'spread of disease through a population',
              'population growth with limited resources',
              'S-curve of market penetration',
              'approach to equilibrium concentration'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Ecology: population growth with limited resources. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains Technology adoption?',
            options: [
              'S-curve of market penetration',
              'population growth with limited resources',
              'approach to equilibrium concentration',
              'spread of disease through a population'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Technology adoption: S-curve of market penetration. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'logis7-detail',
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
      id: 'logis7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Review & Applications, which correctly describes Chemical reactions?',
            options: [
              'S-curve of market penetration',
              'spread of disease through a population',
              'approach to equilibrium concentration',
              'population growth with limited resources'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Chemical reactions: approach to equilibrium concentration. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'logis7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ecology',
            options: ['population growth with limited resources', 'S-curve of market penetration', 'spread of disease through a population', 'approach to equilibrium concentration']
          },
          {
            label: 'Epidemiology',
            options: ['S-curve of market penetration', 'spread of disease through a population', 'approach to equilibrium concentration', 'population growth with limited resources']
          },
          {
            label: 'Technology adoption',
            options: ['spread of disease through a population', 'population growth with limited resources', 'approach to equilibrium concentration', 'S-curve of market penetration']
          }
        ],
        correctAnswers: ['population growth with limited resources', 'spread of disease through a population', 'S-curve of market penetration'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Ecology: population growth with limited resources. Epidemiology: spread of disease through a population. Technology adoption: S-curve of market penetration.'
      }
    }
  ]
}
