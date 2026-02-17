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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Asch\'s conformity experiments?',
            options: [
              'Normative social influence (be liked) vs informational (be right)',
              'line judgment task',
              'Conformity increases with group size (up to 4-5), unanimity',
              '~75% conformed at least once'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Asch\'s conformity experiments: line judgment task. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Conformity increases with group size…?',
            options: [
              'line judgment task',
              'Conformity increases with group size (up to 4-5), unanimity',
              '~75% conformed at least once',
              'Normative social influence (be liked) vs informational (be right)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Conformity increases with group size (up to 4-5), unanimity. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Asch\'s conformity experiments',
            options: ['~75% conformed at least once', 'Normative social influence (be liked) vs informational (be right)', 'line judgment task', 'Conformity increases with group size (up to 4-5), unanimity']
          },
          {
            label: '~75% conformed at least once',
            options: ['~75% conformed at least once', 'line judgment task', 'Normative social influence (be liked) vs informational (be right)', 'Conformity increases with group size (up to 4-5), unanimity']
          },
          {
            label: 'Conformity increases with group size…',
            options: ['line judgment task', 'Normative social influence (be liked) vs informational (be right)', 'Conformity increases with group size (up to 4-5), unanimity', '~75% conformed at least once']
          }
        ],
        correctAnswers: ['line judgment task', '~75% conformed at least once', 'Conformity increases with group size (up to 4-5), unanimity'],
        hint1: 'Think about what each concept specifically describes in Conformity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Conformity describes a specific idea. Asch\'s conformity experiments: line judgment task. ~75% conformed at least once. Conformity increases with group size (up to 4-5), unanimity.'
      }
    }
  ]
}
