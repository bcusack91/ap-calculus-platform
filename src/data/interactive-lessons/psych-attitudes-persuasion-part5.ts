export const psychAttitudesPart5Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attit5-intro',
      type: 'text' as const,
      content: `
# ## Prosocial Behavior

**Part 5 of 7 — Prosocial Behavior**

### 1. Bystander effect

less likely to help when others are present

### 2. Diffusion of responsibility

each person assumes others will help

### 3. Altruism

selfless concern for others

### 4. Reciprocity norm

help those who help you
      `
    },
    {
      id: 'attit5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of prosocial behavior?',
            options: [
              'Bystander effect',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Bystander effect: less likely to help when others are present'
          },
          {
            question: 'In the context of prosocial behavior, which is accurate?',
            options: [
              'selfless concern for others',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Altruism: selfless concern for others'
          }
        ]
      }
    },
    {
      id: 'attit5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Bystander effect**: less likely to help when others are present
- **Diffusion of responsibility**: each person assumes others will help
- **Altruism**: selfless concern for others
- **Reciprocity norm**: help those who help you
      `
    },
    {
      id: 'attit5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to prosocial behavior?',
            options: [
              'help those who help you',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Reciprocity norm: help those who help you'
          }
        ]
      }
    },
    {
      id: 'attit5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bystander effect',
            options: ['less likely to help when others are present', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Diffusion of responsibility',
            options: ['each person assumes others will help', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Altruism',
            options: ['selfless concern for others', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['less likely to help when others are present', 'each person assumes others will help', 'selfless concern for others'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Prosocial Behavior.'
      }
    }
  ]
}
