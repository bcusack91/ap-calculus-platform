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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of interpersonal attraction?',
            options: [
              'Proximity effect',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Proximity effect: geographic closeness → attraction'
          },
          {
            question: 'In the context of interpersonal attraction, which is accurate?',
            options: [
              'symmetry, averageness',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Physical attractiveness: symmetry, averageness'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Proximity effect',
            options: ['geographic closeness → attraction', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Mere exposure effect',
            options: ['repeated exposure increases liking', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Physical attractiveness',
            options: ['symmetry, averageness', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['geographic closeness → attraction', 'repeated exposure increases liking', 'symmetry, averageness'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Interpersonal Attraction.'
      }
    }
  ]
}
