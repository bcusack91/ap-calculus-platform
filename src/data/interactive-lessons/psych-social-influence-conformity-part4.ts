export const psychSocialInfluencePart4Data = {
  topicSlug: 'social-influence-conformity',
  sections: [
    {
      id: 'socia4-intro',
      type: 'text' as const,
      content: `
# ## Group Behavior

**Part 4 of 7 — Group Behavior**

### 1. Social facilitation

perform better on simple tasks with audience

### 2. Social loafing

less effort in groups

### 3. Groupthink

desire for harmony overrides critical thinking

### 4. Group polarization

groups become more extreme after discussion
      `
    },
    {
      id: 'socia4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of group behavior?',
            options: [
              'Social facilitation',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Social facilitation: perform better on simple tasks with audience'
          },
          {
            question: 'In the context of group behavior, which is accurate?',
            options: [
              'desire for harmony overrides critical thinking',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Groupthink: desire for harmony overrides critical thinking'
          }
        ]
      }
    },
    {
      id: 'socia4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Social facilitation**: perform better on simple tasks with audience
- **Social loafing**: less effort in groups
- **Groupthink**: desire for harmony overrides critical thinking
- **Group polarization**: groups become more extreme after discussion
      `
    },
    {
      id: 'socia4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to group behavior?',
            options: [
              'groups become more extreme after discussion',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Group polarization: groups become more extreme after discussion'
          }
        ]
      }
    },
    {
      id: 'socia4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Social facilitation',
            options: ['perform better on simple tasks with audience', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Social loafing',
            options: ['less effort in groups', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Groupthink',
            options: ['desire for harmony overrides critical thinking', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['perform better on simple tasks with audience', 'less effort in groups', 'desire for harmony overrides critical thinking'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Group Behavior.'
      }
    }
  ]
}
