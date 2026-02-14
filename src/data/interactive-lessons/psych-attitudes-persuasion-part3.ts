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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of prejudice & discrimination?',
            options: [
              'Prejudice',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Prejudice: unjustified negative attitude toward a group'
          },
          {
            question: 'In the context of prejudice & discrimination, which is accurate?',
            options: [
              'generalized belief about a group',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Stereotype: generalized belief about a group'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Prejudice',
            options: ['unjustified negative attitude toward a group', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Discrimination',
            options: ['unjustified negative behavior toward a group', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Stereotype',
            options: ['generalized belief about a group', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['unjustified negative attitude toward a group', 'unjustified negative behavior toward a group', 'generalized belief about a group'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Prejudice & Discrimination.'
      }
    }
  ]
}
