export const calcBCLogisticPart6Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'logis6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'logis6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Ecology" refer to in calculus?',
            options: [
              'approach to equilibrium concentration',
              'S-curve of market penetration',
              'spread of disease through a population',
              'population growth with limited resources'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Ecology: population growth with limited resources. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Technology adoption?',
            options: [
              'S-curve of market penetration',
              'spread of disease through a population',
              'population growth with limited resources',
              'approach to equilibrium concentration'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Technology adoption: S-curve of market penetration. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'logis6-detail',
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
      id: 'logis6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Chemical reactions?',
            options: [
              'S-curve of market penetration',
              'spread of disease through a population',
              'population growth with limited resources',
              'approach to equilibrium concentration'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Chemical reactions: approach to equilibrium concentration. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'logis6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ecology',
            options: ['S-curve of market penetration', 'population growth with limited resources', 'spread of disease through a population', 'approach to equilibrium concentration']
          },
          {
            label: 'Epidemiology',
            options: ['population growth with limited resources', 'approach to equilibrium concentration', 'S-curve of market penetration', 'spread of disease through a population']
          },
          {
            label: 'Technology adoption',
            options: ['S-curve of market penetration', 'population growth with limited resources', 'spread of disease through a population', 'approach to equilibrium concentration']
          }
        ],
        correctAnswers: ['population growth with limited resources', 'spread of disease through a population', 'S-curve of market penetration'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Ecology: population growth with limited resources. Epidemiology: spread of disease through a population. Technology adoption: S-curve of market penetration.'
      }
    }
  ]
}
