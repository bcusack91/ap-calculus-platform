export const psychObservationalPart3Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser3-intro',
      type: 'text' as const,
      content: `
# ## Cognitive Factors in Learning

**Part 3 of 7 — Cognitive Factors in Learning**

### 1. Cognitive maps

mental representations of space (Tolman)

### 2. Latent learning

learning occurs but isn't demonstrated until motivated

### 3. Learned helplessness

Seligman — giving up after uncontrollable events

### 4. Self-efficacy

belief in one's ability to succeed (Bandura)
      `
    },
    {
      id: 'obser3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of cognitive factors in learning?',
            options: [
              'Cognitive maps',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Cognitive maps: mental representations of space (Tolman)'
          },
          {
            question: 'In the context of cognitive factors in learning, which is accurate?',
            options: [
              'Seligman — giving up after uncontrollable events',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Learned helplessness: Seligman — giving up after uncontrollable events'
          }
        ]
      }
    },
    {
      id: 'obser3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Cognitive maps**: mental representations of space (Tolman)
- **Latent learning**: learning occurs but isn't demonstrated until motivated
- **Learned helplessness**: Seligman — giving up after uncontrollable events
- **Self-efficacy**: belief in one's ability to succeed (Bandura)
      `
    },
    {
      id: 'obser3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to cognitive factors in learning?',
            options: [
              'belief in one\'s ability to succeed (Bandura)',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Self-efficacy: belief in one\'s ability to succeed (Bandura)'
          }
        ]
      }
    },
    {
      id: 'obser3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cognitive maps',
            options: ['mental representations of space (Tolman)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Latent learning',
            options: ['learning occurs but isn\'t demonstrated until motiv', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Learned helplessness',
            options: ['Seligman — giving up after uncontrollable events', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['mental representations of space (Tolman)', 'learning occurs but isn\'t demonstrated until motiv', 'Seligman — giving up after uncontrollable events'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Cognitive Factors in Learning.'
      }
    }
  ]
}
