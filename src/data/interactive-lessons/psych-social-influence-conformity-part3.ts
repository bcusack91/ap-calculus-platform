export const psychSocialInfluencePart3Data = {
  topicSlug: 'social-influence-conformity',
  sections: [
    {
      id: 'socia3-intro',
      type: 'text' as const,
      content: `
# ## Obedience

**Part 3 of 7 — Obedience**

### 1. Milgram's obedience study

65% delivered maximum shock

### 2. Factors increasing obedience

authority figure presence, proximity, legitimacy

### 3. Factors decreasing obedience

dissenting peers, personal responsibility

### 4. Zimbardo's Stanford Prison Experiment

power of roles
      `
    },
    {
      id: 'socia3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of obedience?',
            options: [
              'Milgram\'s obedience study',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Milgram\'s obedience study: 65% delivered maximum shock'
          },
          {
            question: 'In the context of obedience, which is accurate?',
            options: [
              'dissenting peers, personal responsibility',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Factors decreasing obedience: dissenting peers, personal responsibility'
          }
        ]
      }
    },
    {
      id: 'socia3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Milgram's obedience study**: 65% delivered maximum shock
- **Factors increasing obedience**: authority figure presence, proximity, legitimacy
- **Factors decreasing obedience**: dissenting peers, personal responsibility
- **Zimbardo's Stanford Prison Experiment**: power of roles
      `
    },
    {
      id: 'socia3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to obedience?',
            options: [
              'power of roles',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Zimbardo\'s Stanford Prison Experiment: power of roles'
          }
        ]
      }
    },
    {
      id: 'socia3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Milgram\'s obedience study',
            options: ['65% delivered maximum shock', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Factors increasing obedience',
            options: ['authority figure presence, proximity, legitimacy', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Factors decreasing obedience',
            options: ['dissenting peers, personal responsibility', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['65% delivered maximum shock', 'authority figure presence, proximity, legitimacy', 'dissenting peers, personal responsibility'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Obedience.'
      }
    }
  ]
}
