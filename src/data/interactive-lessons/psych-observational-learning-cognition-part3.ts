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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Cognitive maps?',
            options: [
              'mental representations of space (Tolman)',
              'Seligman — giving up after uncontrollable events',
              'learning occurs but isn\'t demonstrated until motivated',
              'belief in one\'s ability to succeed (Bandura)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Cognitive maps: mental representations of space (Tolman). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Learned helplessness:',
            options: [
              'Seligman — giving up after uncontrollable events',
              'belief in one\'s ability to succeed (Bandura)',
              'mental representations of space (Tolman)',
              'learning occurs but isn\'t demonstrated until motivated'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Learned helplessness: Seligman — giving up after uncontrollable events. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cognitive maps',
            options: ['mental representations of space (Tolman)', 'Seligman — giving up after uncontrollable events', 'belief in one\'s ability to succeed (Bandura)', 'learning occurs but isn\'t demonstrated until motivated']
          },
          {
            label: 'Latent learning',
            options: ['mental representations of space (Tolman)', 'Seligman — giving up after uncontrollable events', 'learning occurs but isn\'t demonstrated until motivated', 'belief in one\'s ability to succeed (Bandura)']
          },
          {
            label: 'Learned helplessness',
            options: ['belief in one\'s ability to succeed (Bandura)', 'mental representations of space (Tolman)', 'Seligman — giving up after uncontrollable events', 'learning occurs but isn\'t demonstrated until motivated']
          }
        ],
        correctAnswers: ['mental representations of space (Tolman)', 'learning occurs but isn\'t demonstrated until motivated', 'Seligman — giving up after uncontrollable events'],
        hint1: 'Think about what each concept specifically describes in Cognitive Factors in Learning.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cognitive Factors in Learning describes a specific idea. Cognitive maps: mental representations of space (Tolman). Latent learning: learning occurs but isn\'t demonstrated until motivated. Learned helplessness: Seligman — giving up after uncontrollable events.'
      }
    }
  ]
}
