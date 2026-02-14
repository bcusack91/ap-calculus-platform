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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of social identity theory?',
            options: [
              'Social identity theory',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Social identity theory: we define ourselves by group memberships'
          },
          {
            question: 'In the context of social identity theory, which is accurate?',
            options: [
              'groups we don\'t belong to',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Outgroup: groups we don\'t belong to'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Social identity theory',
            options: ['we define ourselves by group memberships', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Ingroup',
            options: ['groups we belong to', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Outgroup',
            options: ['groups we don\'t belong to', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['we define ourselves by group memberships', 'groups we belong to', 'groups we don\'t belong to'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Social Identity Theory.'
      }
    }
  ]
}
