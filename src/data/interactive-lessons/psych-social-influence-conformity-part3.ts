export const psychSocialInfluencePart3Data = {
  topicSlug: 'social-influence-conformity',
  sections: [
    {
      id: 'socia3-intro',
      type: 'text' as const,
      content: `
## Obedience

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Milgram\'s obedience study?',
            options: [
              'authority figure presence, proximity, legitimacy',
              '65% delivered maximum shock',
              'dissenting peers, personal responsibility',
              'power of roles'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Milgram\'s obedience study: 65% delivered maximum shock. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Factors decreasing obedience?',
            options: [
              'authority figure presence, proximity, legitimacy',
              'power of roles',
              '65% delivered maximum shock',
              'dissenting peers, personal responsibility'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Factors decreasing obedience: dissenting peers, personal responsibility. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'socia3-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Milgram\'s obedience study',
            options: ['power of roles', 'dissenting peers, personal responsibility', '65% delivered maximum shock', 'authority figure presence, proximity, legitimacy']
          },
          {
            label: 'Factors increasing obedience',
            options: ['power of roles', 'authority figure presence, proximity, legitimacy', '65% delivered maximum shock', 'dissenting peers, personal responsibility']
          },
          {
            label: 'Factors decreasing obedience',
            options: ['power of roles', 'authority figure presence, proximity, legitimacy', 'dissenting peers, personal responsibility', '65% delivered maximum shock']
          }
        ],
        correctAnswers: ['65% delivered maximum shock', 'authority figure presence, proximity, legitimacy', 'dissenting peers, personal responsibility'],
        hint1: 'Think about what each concept specifically describes in Obedience.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Obedience describes a specific idea. Milgram\'s obedience study: 65% delivered maximum shock. Factors increasing obedience: authority figure presence, proximity, legitimacy. Factors decreasing obedience: dissenting peers, personal responsibility.'
      }
    }
  ]
}
