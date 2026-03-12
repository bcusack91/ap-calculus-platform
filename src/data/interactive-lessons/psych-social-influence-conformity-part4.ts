export const psychSocialInfluencePart4Data = {
  topicSlug: 'social-influence-conformity',
  sections: [
    {
      id: 'socia4-intro',
      type: 'text' as const,
      content: `
## Group Behavior

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Social facilitation?',
            options: [
              'perform better on simple tasks with audience',
              'desire for harmony overrides critical thinking',
              'groups become more extreme after discussion',
              'less effort in groups'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Social facilitation: perform better on simple tasks with audience. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Groupthink?',
            options: [
              'groups become more extreme after discussion',
              'perform better on simple tasks with audience',
              'less effort in groups',
              'desire for harmony overrides critical thinking'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Groupthink: desire for harmony overrides critical thinking. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'socia4-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Social facilitation',
            options: ['less effort in groups', 'desire for harmony overrides critical thinking', 'groups become more extreme after discussion', 'perform better on simple tasks with audience']
          },
          {
            label: 'Social loafing',
            options: ['groups become more extreme after discussion', 'perform better on simple tasks with audience', 'less effort in groups', 'desire for harmony overrides critical thinking']
          },
          {
            label: 'Groupthink',
            options: ['desire for harmony overrides critical thinking', 'groups become more extreme after discussion', 'perform better on simple tasks with audience', 'less effort in groups']
          }
        ],
        correctAnswers: ['perform better on simple tasks with audience', 'less effort in groups', 'desire for harmony overrides critical thinking'],
        hint1: 'Think about what each concept specifically describes in Group Behavior.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Group Behavior describes a specific idea. Social facilitation: perform better on simple tasks with audience. Social loafing: less effort in groups. Groupthink: desire for harmony overrides critical thinking.'
      }
    }
  ]
}
