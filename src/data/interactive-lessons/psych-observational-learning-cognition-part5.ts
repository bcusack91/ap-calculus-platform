export const psychObservationalPart5Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser5-intro',
      type: 'text' as const,
      content: `
# ## Biological Constraints

**Part 5 of 7 — Biological Constraints**

### 1. Biological preparedness

some associations learned more easily

### 2. Instinctive drift

tendency to revert to innate behaviors

### 3. Taste aversion

one-trial learning (biological significance)

### 4. Critical periods for certain types of learning

Critical periods for certain types of learning
      `
    },
    {
      id: 'obser5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of biological constraints?',
            options: [
              'Biological preparedness',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Biological preparedness: some associations learned more easily'
          },
          {
            question: 'In the context of biological constraints, which is accurate?',
            options: [
              'one-trial learning (biological significance)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Taste aversion: one-trial learning (biological significance)'
          }
        ]
      }
    },
    {
      id: 'obser5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Biological preparedness**: some associations learned more easily
- **Instinctive drift**: tendency to revert to innate behaviors
- **Taste aversion**: one-trial learning (biological significance)
- **Critical periods for certain types of learning**
      `
    },
    {
      id: 'obser5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to biological constraints?',
            options: [
              'Critical periods for certain types of learning',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Critical periods for certain types of learning'
          }
        ]
      }
    },
    {
      id: 'obser5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Biological preparedness',
            options: ['some associations learned more easily', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Instinctive drift',
            options: ['tendency to revert to innate behaviors', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Taste aversion',
            options: ['one-trial learning (biological significance)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['some associations learned more easily', 'tendency to revert to innate behaviors', 'one-trial learning (biological significance)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Biological Constraints.'
      }
    }
  ]
}
