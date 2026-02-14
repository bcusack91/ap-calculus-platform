export const psychSensationPart7Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensa7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Sensation vs perception distinction

Sensation vs perception distinction

### 2. Sensory adaptation

decreased sensitivity over time

### 3. Synesthesia and sensory processing

Synesthesia and sensory processing

### 4. AP exam

sensory pathways and theories
      `
    },
    {
      id: 'sensa7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Sensation vs perception distinction',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Sensation vs perception distinction'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Synesthesia and sensory processing',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Synesthesia and sensory processing'
          }
        ]
      }
    },
    {
      id: 'sensa7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Sensation vs perception distinction**
- **Sensory adaptation**: decreased sensitivity over time
- **Synesthesia and sensory processing**
- **AP exam**: sensory pathways and theories
      `
    },
    {
      id: 'sensa7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'sensory pathways and theories',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: sensory pathways and theories'
          }
        ]
      }
    },
    {
      id: 'sensa7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sensation vs perception distinction',
            options: ['Sensation vs perception distinction', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Sensory adaptation',
            options: ['decreased sensitivity over time', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Synesthesia and sensory processing',
            options: ['Synesthesia and sensory processing', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Sensation vs perception distinction', 'decreased sensitivity over time', 'Synesthesia and sensory processing'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
