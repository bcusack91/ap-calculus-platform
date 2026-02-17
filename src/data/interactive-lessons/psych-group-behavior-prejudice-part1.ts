export const psychGroupPart1Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group1-intro',
      type: 'text' as const,
      content: `
# 🧠 Group Behavior & Social Identity

**Part 1 of 7 — Social Identity Theory**

### 1. Social identity theory

we define ourselves by group memberships

### 2. Ingroup

groups we belong to

### 3. Outgroup

groups we don't belong to

### 4. Ingroup bias

favoring our own group members
      `
    },
    {
      id: 'group1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Social identity theory?',
            options: [
              'groups we belong to',
              'favoring our own group members',
              'groups we don\'t belong to',
              'we define ourselves by group memberships'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Social identity theory: we define ourselves by group memberships. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Outgroup:',
            options: [
              'favoring our own group members',
              'we define ourselves by group memberships',
              'groups we belong to',
              'groups we don\'t belong to'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Outgroup: groups we don\'t belong to. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'group1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Social identity theory**: we define ourselves by group memberships
- **Ingroup**: groups we belong to
- **Outgroup**: groups we don't belong to
- **Ingroup bias**: favoring our own group members
      `
    },
    {
      id: 'group1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to social identity theory?',
            options: [
              'favoring our own group members',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Ingroup bias: favoring our own group members'
          }
        ]
      }
    },
    {
      id: 'group1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Social identity theory',
            options: ['favoring our own group members', 'we define ourselves by group memberships', 'groups we don\'t belong to', 'groups we belong to']
          },
          {
            label: 'Ingroup',
            options: ['groups we belong to', 'favoring our own group members', 'groups we don\'t belong to', 'we define ourselves by group memberships']
          },
          {
            label: 'Outgroup',
            options: ['we define ourselves by group memberships', 'groups we belong to', 'favoring our own group members', 'groups we don\'t belong to']
          }
        ],
        correctAnswers: ['we define ourselves by group memberships', 'groups we belong to', 'groups we don\'t belong to'],
        hint1: 'Think about what each concept specifically describes in Group Behavior & Social Identity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Group Behavior & Social Identity describes a specific idea. Social identity theory: we define ourselves by group memberships. Ingroup: groups we belong to. Outgroup: groups we don\'t belong to.'
      }
    }
  ]
}
