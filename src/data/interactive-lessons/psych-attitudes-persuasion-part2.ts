export const psychAttitudesPart2Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attit2-intro',
      type: 'text' as const,
      content: `
# ## Cognitive Dissonance

**Part 2 of 7 — Cognitive Dissonance**

### 1. Cognitive dissonance (Festinger)

discomfort from contradictory beliefs/actions

### 2. People change attitudes to reduce dissonance

People change attitudes to reduce dissonance

### 3. Insufficient justification

less reward → more attitude change

### 4. Example

smoker who knows smoking is harmful
      `
    },
    {
      id: 'attit2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of cognitive dissonance?',
            options: [
              'Cognitive dissonance (Festinger)',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Cognitive dissonance (Festinger): discomfort from contradictory beliefs/actions'
          },
          {
            question: 'In the context of cognitive dissonance, which is accurate?',
            options: [
              'less reward → more attitude change',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Insufficient justification: less reward → more attitude change'
          }
        ]
      }
    },
    {
      id: 'attit2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Cognitive dissonance (Festinger)**: discomfort from contradictory beliefs/actions
- **People change attitudes to reduce dissonance**
- **Insufficient justification**: less reward → more attitude change
- **Example**: smoker who knows smoking is harmful
      `
    },
    {
      id: 'attit2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to cognitive dissonance?',
            options: [
              'smoker who knows smoking is harmful',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Example: smoker who knows smoking is harmful'
          }
        ]
      }
    },
    {
      id: 'attit2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cognitive dissonance (Festinger)',
            options: ['discomfort from contradictory beliefs/actions', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'People change attitudes to reduce dissonance',
            options: ['People change attitudes to reduce dissonance', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Insufficient justification',
            options: ['less reward → more attitude change', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['discomfort from contradictory beliefs/actions', 'People change attitudes to reduce dissonance', 'less reward → more attitude change'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Cognitive Dissonance.'
      }
    }
  ]
}
