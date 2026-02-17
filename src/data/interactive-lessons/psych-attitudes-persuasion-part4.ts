export const psychAttitudesPart4Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attit4-intro',
      type: 'text' as const,
      content: `
# ## Aggression

**Part 4 of 7 — Aggression**

### 1. Biological

testosterone, brain damage (amygdala)

### 2. Frustration-aggression hypothesis

frustration triggers aggression

### 3. Social learning

observing and imitating aggressive models

### 4. Deindividuation

anonymity reduces self-awareness → aggression
      `
    },
    {
      id: 'attit4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Biological" refer to in psychology?',
            options: [
              'observing and imitating aggressive models',
              'anonymity reduces self-awareness → aggression',
              'testosterone, brain damage (amygdala)',
              'frustration triggers aggression'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Biological: testosterone, brain damage (amygdala). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Aggression, which explains Social learning?',
            options: [
              'frustration triggers aggression',
              'anonymity reduces self-awareness → aggression',
              'observing and imitating aggressive models',
              'testosterone, brain damage (amygdala)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Social learning: observing and imitating aggressive models. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'attit4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Biological**: testosterone, brain damage (amygdala)
- **Frustration-aggression hypothesis**: frustration triggers aggression
- **Social learning**: observing and imitating aggressive models
- **Deindividuation**: anonymity reduces self-awareness → aggression
      `
    },
    {
      id: 'attit4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to aggression?',
            options: [
              'anonymity reduces self-awareness → aggression',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Deindividuation: anonymity reduces self-awareness → aggression'
          }
        ]
      }
    },
    {
      id: 'attit4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Biological',
            options: ['anonymity reduces self-awareness → aggression', 'testosterone, brain damage (amygdala)', 'frustration triggers aggression', 'observing and imitating aggressive models']
          },
          {
            label: 'Frustration-aggression hypothesis',
            options: ['anonymity reduces self-awareness → aggression', 'observing and imitating aggressive models', 'testosterone, brain damage (amygdala)', 'frustration triggers aggression']
          },
          {
            label: 'Social learning',
            options: ['observing and imitating aggressive models', 'frustration triggers aggression', 'testosterone, brain damage (amygdala)', 'anonymity reduces self-awareness → aggression']
          }
        ],
        correctAnswers: ['testosterone, brain damage (amygdala)', 'frustration triggers aggression', 'observing and imitating aggressive models'],
        hint1: 'Think about what each concept specifically describes in Aggression.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Aggression describes a specific idea. Biological: testosterone, brain damage (amygdala). Frustration-aggression hypothesis: frustration triggers aggression. Social learning: observing and imitating aggressive models.'
      }
    }
  ]
}
