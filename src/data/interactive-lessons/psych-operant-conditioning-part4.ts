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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of schedules of reinforcement?',
            options: [
              'Continuous reinforcement',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Continuous reinforcement: reinforce every response'
          },
          {
            question: 'In the context of schedules of reinforcement, which is accurate?',
            options: [
              'reinforce after unpredictable number (gambling, most resistant to extinction)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Variable-ratio (VR): reinforce after unpredictable number (gambling, most resistant to extinction)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Continuous reinforcement',
            options: ['reinforce every response', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Fixed-ratio (FR)',
            options: ['reinforce after set number of responses', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Variable-ratio (VR)',
            options: ['reinforce after unpredictable number (gambling, mo', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['reinforce every response', 'reinforce after set number of responses', 'reinforce after unpredictable number (gambling, mo'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Schedules of Reinforcement.'
      }
    }
  ]
}
