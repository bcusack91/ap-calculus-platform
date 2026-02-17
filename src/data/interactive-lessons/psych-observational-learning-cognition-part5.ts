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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Biological preparedness?',
            options: [
              'one-trial learning (biological significance)',
              'tendency to revert to innate behaviors',
              'some associations learned more easily',
              'Critical periods for certain types of learning'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Biological preparedness: some associations learned more easily. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Taste aversion?',
            options: [
              'one-trial learning (biological significance)',
              'tendency to revert to innate behaviors',
              'Critical periods for certain types of learning',
              'some associations learned more easily'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Taste aversion: one-trial learning (biological significance). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Biological preparedness',
            options: ['tendency to revert to innate behaviors', 'one-trial learning (biological significance)', 'Critical periods for certain types of learning', 'some associations learned more easily']
          },
          {
            label: 'Instinctive drift',
            options: ['Critical periods for certain types of learning', 'tendency to revert to innate behaviors', 'one-trial learning (biological significance)', 'some associations learned more easily']
          },
          {
            label: 'Taste aversion',
            options: ['Critical periods for certain types of learning', 'one-trial learning (biological significance)', 'some associations learned more easily', 'tendency to revert to innate behaviors']
          }
        ],
        correctAnswers: ['some associations learned more easily', 'tendency to revert to innate behaviors', 'one-trial learning (biological significance)'],
        hint1: 'Think about what each concept specifically describes in Biological Constraints.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Biological Constraints describes a specific idea. Biological preparedness: some associations learned more easily. Instinctive drift: tendency to revert to innate behaviors. Taste aversion: one-trial learning (biological significance).'
      }
    }
  ]
}
