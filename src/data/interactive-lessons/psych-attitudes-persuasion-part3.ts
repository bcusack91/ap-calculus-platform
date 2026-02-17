export const psychAttitudesPart3Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attit3-intro',
      type: 'text' as const,
      content: `
# ## Prejudice & Discrimination

**Part 3 of 7 — Prejudice & Discrimination**

### 1. Prejudice

unjustified negative attitude toward a group

### 2. Discrimination

unjustified negative behavior toward a group

### 3. Stereotype

generalized belief about a group

### 4. Sources

social learning, us vs them (ingroup bias), scapegoating
      `
    },
    {
      id: 'attit3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Prejudice" refer to in psychology?',
            options: [
              'unjustified negative behavior toward a group',
              'generalized belief about a group',
              'social learning, us vs them (ingroup bias), scapegoating',
              'unjustified negative attitude toward a group'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Prejudice: unjustified negative attitude toward a group. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Prejudice & Discrimination, which explains Stereotype?',
            options: [
              'generalized belief about a group',
              'unjustified negative attitude toward a group',
              'unjustified negative behavior toward a group',
              'social learning, us vs them (ingroup bias), scapegoating'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Stereotype: generalized belief about a group. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'attit3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Prejudice**: unjustified negative attitude toward a group
- **Discrimination**: unjustified negative behavior toward a group
- **Stereotype**: generalized belief about a group
- **Sources**: social learning, us vs them (ingroup bias), scapegoating
      `
    },
    {
      id: 'attit3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to prejudice & discrimination?',
            options: [
              'social learning, us vs them (ingroup bias), scapegoating',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Sources: social learning, us vs them (ingroup bias), scapegoating'
          }
        ]
      }
    },
    {
      id: 'attit3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Prejudice',
            options: ['social learning, us vs them (ingroup bias), scapegoating', 'generalized belief about a group', 'unjustified negative behavior toward a group', 'unjustified negative attitude toward a group']
          },
          {
            label: 'Discrimination',
            options: ['unjustified negative behavior toward a group', 'social learning, us vs them (ingroup bias), scapegoating', 'unjustified negative attitude toward a group', 'generalized belief about a group']
          },
          {
            label: 'Stereotype',
            options: ['unjustified negative attitude toward a group', 'social learning, us vs them (ingroup bias), scapegoating', 'generalized belief about a group', 'unjustified negative behavior toward a group']
          }
        ],
        correctAnswers: ['unjustified negative attitude toward a group', 'unjustified negative behavior toward a group', 'generalized belief about a group'],
        hint1: 'Think about what each concept specifically describes in Prejudice & Discrimination.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Prejudice & Discrimination describes a specific idea. Prejudice: unjustified negative attitude toward a group. Discrimination: unjustified negative behavior toward a group. Stereotype: generalized belief about a group.'
      }
    }
  ]
}
