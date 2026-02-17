export const psychOperantPart4Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'opera4-intro',
      type: 'text' as const,
      content: `
# ## Schedules of Reinforcement

**Part 4 of 7 — Schedules of Reinforcement**

### 1. Continuous reinforcement

reinforce every response

### 2. Fixed-ratio (FR)

reinforce after set number of responses

### 3. Variable-ratio (VR)

reinforce after unpredictable number (gambling, most resistant to extinction)

### 4. Fixed-interval (FI) and Variable-interval (VI) schedules

Fixed-interval (FI) and Variable-interval (VI) schedules
      `
    },
    {
      id: 'opera4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Continuous reinforcement?',
            options: [
              'reinforce after set number of responses',
              'reinforce after unpredictable number (gambling, most resistant to extinction)',
              'Fixed-interval (FI) and Variable-interval (VI) schedules',
              'reinforce every response'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Continuous reinforcement: reinforce every response. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Schedules of Reinforcement, which explains Variable-ratio (VR)?',
            options: [
              'Fixed-interval (FI) and Variable-interval (VI) schedules',
              'reinforce every response',
              'reinforce after unpredictable number (gambling, most resistant to extinction)',
              'reinforce after set number of responses'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Variable-ratio (VR): reinforce after unpredictable number (gambling, most resistant to extinction). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'opera4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Continuous reinforcement**: reinforce every response
- **Fixed-ratio (FR)**: reinforce after set number of responses
- **Variable-ratio (VR)**: reinforce after unpredictable number (gambling, most resistant to extinction)
- **Fixed-interval (FI) and Variable-interval (VI) schedules**
      `
    },
    {
      id: 'opera4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to schedules of reinforcement?',
            options: [
              'Fixed-interval (FI) and Variable-interval (VI) schedules',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Fixed-interval (FI) and Variable-interval (VI) schedules'
          }
        ]
      }
    },
    {
      id: 'opera4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Continuous reinforcement',
            options: ['reinforce after set number of responses', 'reinforce after unpredictable number (gambling, most resistant to extinction)', 'reinforce every response', 'Fixed-interval (FI) and Variable-interval (VI) schedules']
          },
          {
            label: 'Fixed-ratio (FR)',
            options: ['reinforce after set number of responses', 'Fixed-interval (FI) and Variable-interval (VI) schedules', 'reinforce every response', 'reinforce after unpredictable number (gambling, most resistant to extinction)']
          },
          {
            label: 'Variable-ratio (VR)',
            options: ['reinforce after set number of responses', 'reinforce every response', 'reinforce after unpredictable number (gambling, most resistant to extinction)', 'Fixed-interval (FI) and Variable-interval (VI) schedules']
          }
        ],
        correctAnswers: ['reinforce every response', 'reinforce after set number of responses', 'reinforce after unpredictable number (gambling, most resistant to extinction)'],
        hint1: 'Think about what each concept specifically describes in Schedules of Reinforcement.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Schedules of Reinforcement describes a specific idea. Continuous reinforcement: reinforce every response. Fixed-ratio (FR): reinforce after set number of responses. Variable-ratio (VR): reinforce after unpredictable number (gambling, most resistant to extinction).'
      }
    }
  ]
}
