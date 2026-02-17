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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Sensation vs perception distinction?',
            options: [
              'decreased sensitivity over time',
              'Synesthesia and sensory processing',
              'sensory pathways and theories',
              'Sensation vs perception distinction'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Sensation vs perception distinction. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Synesthesia and sensory processing?',
            options: [
              'decreased sensitivity over time',
              'Synesthesia and sensory processing',
              'sensory pathways and theories',
              'Sensation vs perception distinction'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Synesthesia and sensory processing. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sensory adaptation',
            options: ['decreased sensitivity over time', 'sensory pathways and theories', 'Synesthesia and sensory processing', 'Sensation vs perception distinction']
          },
          {
            label: 'AP exam',
            options: ['Sensation vs perception distinction', 'sensory pathways and theories', 'Synesthesia and sensory processing', 'decreased sensitivity over time']
          }
        ],
        correctAnswers: ['decreased sensitivity over time', 'sensory pathways and theories'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Sensory adaptation: decreased sensitivity over time. AP exam: sensory pathways and theories.'
      }
    }
  ]
}
