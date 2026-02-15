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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'Ecology',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Ecology: population growth with limited resources'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'S-curve of market penetration',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Technology adoption: S-curve of market penetration'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'approach to equilibrium concentration',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Chemical reactions: approach to equilibrium concentration'
          }
        ]
      }
    },
    {
      id: 'logis7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ecology',
            options: ['population growth with limited resources', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Epidemiology',
            options: ['spread of disease through a population', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Technology adoption',
            options: ['S-curve of market penetration', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['population growth with limited resources', 'spread of disease through a population', 'S-curve of market penetration'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
