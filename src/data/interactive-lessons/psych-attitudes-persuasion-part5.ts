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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Bystander effect" refer to in psychology?',
            options: [
              'each person assumes others will help',
              'less likely to help when others are present',
              'selfless concern for others',
              'help those who help you'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Bystander effect: less likely to help when others are present. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Prosocial Behavior, which explains Altruism?',
            options: [
              'selfless concern for others',
              'help those who help you',
              'less likely to help when others are present',
              'each person assumes others will help'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Altruism: selfless concern for others. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bystander effect',
            options: ['help those who help you', 'selfless concern for others', 'less likely to help when others are present', 'each person assumes others will help']
          },
          {
            label: 'Diffusion of responsibility',
            options: ['selfless concern for others', 'help those who help you', 'each person assumes others will help', 'less likely to help when others are present']
          },
          {
            label: 'Altruism',
            options: ['less likely to help when others are present', 'help those who help you', 'each person assumes others will help', 'selfless concern for others']
          }
        ],
        correctAnswers: ['less likely to help when others are present', 'each person assumes others will help', 'selfless concern for others'],
        hint1: 'Think about what each concept specifically describes in Prosocial Behavior.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Prosocial Behavior describes a specific idea. Bystander effect: less likely to help when others are present. Diffusion of responsibility: each person assumes others will help. Altruism: selfless concern for others.'
      }
    }
  ]
}
