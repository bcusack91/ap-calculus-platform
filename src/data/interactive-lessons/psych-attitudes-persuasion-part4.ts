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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of aggression?',
            options: [
              'Biological',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Biological: testosterone, brain damage (amygdala)'
          },
          {
            question: 'In the context of aggression, which is accurate?',
            options: [
              'observing and imitating aggressive models',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Social learning: observing and imitating aggressive models'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Biological',
            options: ['testosterone, brain damage (amygdala)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Frustration-aggression hypothesis',
            options: ['frustration triggers aggression', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Social learning',
            options: ['observing and imitating aggressive models', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['testosterone, brain damage (amygdala)', 'frustration triggers aggression', 'observing and imitating aggressive models'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Aggression.'
      }
    }
  ]
}
