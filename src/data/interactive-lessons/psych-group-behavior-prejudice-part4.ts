export const psychGroupPart4Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group4-intro',
      type: 'text' as const,
      content: `
# ## Interpersonal Attraction

**Part 4 of 7 — Interpersonal Attraction**

### 1. Proximity effect

geographic closeness → attraction

### 2. Mere exposure effect

repeated exposure increases liking

### 3. Physical attractiveness

symmetry, averageness

### 4. Similarity

we're attracted to people similar to us
      `
    },
    {
      id: 'group4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Proximity effect?',
            options: [
              'geographic closeness → attraction',
              'repeated exposure increases liking',
              'symmetry, averageness',
              'we\'re attracted to people similar to us'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Proximity effect: geographic closeness → attraction. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Physical attractiveness?',
            options: [
              'geographic closeness → attraction',
              'repeated exposure increases liking',
              'symmetry, averageness',
              'we\'re attracted to people similar to us'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Physical attractiveness: symmetry, averageness. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'group4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Proximity effect**: geographic closeness → attraction
- **Mere exposure effect**: repeated exposure increases liking
- **Physical attractiveness**: symmetry, averageness
- **Similarity**: we're attracted to people similar to us
      `
    },
    {
      id: 'group4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to interpersonal attraction?',
            options: [
              'we\'re attracted to people similar to us',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Similarity: we\'re attracted to people similar to us'
          }
        ]
      }
    },
    {
      id: 'group4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Proximity effect',
            options: ['repeated exposure increases liking', 'symmetry, averageness', 'geographic closeness → attraction', 'we\'re attracted to people similar to us']
          },
          {
            label: 'Mere exposure effect',
            options: ['repeated exposure increases liking', 'we\'re attracted to people similar to us', 'geographic closeness → attraction', 'symmetry, averageness']
          },
          {
            label: 'Physical attractiveness',
            options: ['repeated exposure increases liking', 'geographic closeness → attraction', 'symmetry, averageness', 'we\'re attracted to people similar to us']
          }
        ],
        correctAnswers: ['geographic closeness → attraction', 'repeated exposure increases liking', 'symmetry, averageness'],
        hint1: 'Think about what each concept specifically describes in Interpersonal Attraction.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Interpersonal Attraction describes a specific idea. Proximity effect: geographic closeness → attraction. Mere exposure effect: repeated exposure increases liking. Physical attractiveness: symmetry, averageness.'
      }
    }
  ]
}
