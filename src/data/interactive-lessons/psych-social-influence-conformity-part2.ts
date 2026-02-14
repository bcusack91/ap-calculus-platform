export const psychSocialInfluencePart2Data = {
  topicSlug: 'social-influence-conformity',
  sections: [
    {
      id: 'socia2-intro',
      type: 'text' as const,
      content: `
# ## Conformity

**Part 2 of 7 — Conformity**

### 1. Asch's conformity experiments

line judgment task

### 2. ~75% conformed at least once

~75% conformed at least once

### 3. Conformity increases with group size (up to 4-5), unanimity

Conformity increases with group size (up to 4-5), unanimity

### 4. Normative social influence (be liked) vs informational (be right)

Normative social influence (be liked) vs informational (be right)
      `
    },
    {
      id: 'socia2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of conformity?',
            options: [
              'Asch\'s conformity experiments',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Asch\'s conformity experiments: line judgment task'
          },
          {
            question: 'In the context of conformity, which is accurate?',
            options: [
              'Conformity increases with group size (up to 4-5), unanimity',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Conformity increases with group size (up to 4-5), unanimity'
          }
        ]
      }
    },
    {
      id: 'socia2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Asch's conformity experiments**: line judgment task
- **~75% conformed at least once**
- **Conformity increases with group size (up to 4-5), unanimity**
- **Normative social influence (be liked) vs informational (be right)**
      `
    },
    {
      id: 'socia2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to conformity?',
            options: [
              'Normative social influence (be liked) vs informational (be right)',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Normative social influence (be liked) vs informational (be right)'
          }
        ]
      }
    },
    {
      id: 'socia2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Asch\'s conformity experiments',
            options: ['line judgment task', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: '~75% conformed at least once',
            options: ['~75% conformed at least once', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Conformity increases with group size (up to 4-5), unanimity',
            options: ['Conformity increases with group size (up to 4-5), ', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['line judgment task', '~75% conformed at least once', 'Conformity increases with group size (up to 4-5), '],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Conformity.'
      }
    }
  ]
}
