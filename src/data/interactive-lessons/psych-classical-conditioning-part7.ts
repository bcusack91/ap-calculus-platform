export const psychClassicalPart7Data = {
  topicSlug: 'classical-conditioning',
  sections: [
    {
      id: 'class7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Classical conditioning = involuntary responses

Classical conditioning = involuntary responses

### 2. Biological preparedness

some associations learned easier

### 3. Conditioning in everyday life

Conditioning in everyday life

### 4. AP exam

scenario analysis
      `
    },
    {
      id: 'class7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Classical conditioning = involuntary responses',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Classical conditioning = involuntary responses'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Conditioning in everyday life',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Conditioning in everyday life'
          }
        ]
      }
    },
    {
      id: 'class7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Classical conditioning = involuntary responses**
- **Biological preparedness**: some associations learned easier
- **Conditioning in everyday life**
- **AP exam**: scenario analysis
      `
    },
    {
      id: 'class7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'scenario analysis',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: scenario analysis'
          }
        ]
      }
    },
    {
      id: 'class7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Classical conditioning = involuntary responses',
            options: ['Classical conditioning = involuntary responses', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Biological preparedness',
            options: ['some associations learned easier', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Conditioning in everyday life',
            options: ['Conditioning in everyday life', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Classical conditioning = involuntary responses', 'some associations learned easier', 'Conditioning in everyday life'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
