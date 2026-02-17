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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Cognitive dissonance (Festinger)" refer to in psychology?',
            options: [
              'People change attitudes to reduce dissonance',
              'discomfort from contradictory beliefs/actions',
              'smoker who knows smoking is harmful',
              'less reward → more attitude change'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Cognitive dissonance (Festinger): discomfort from contradictory beliefs/actions. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Cognitive Dissonance, which explains Insufficient justification?',
            options: [
              'People change attitudes to reduce dissonance',
              'smoker who knows smoking is harmful',
              'less reward → more attitude change',
              'discomfort from contradictory beliefs/actions'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Insufficient justification: less reward → more attitude change. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cognitive dissonance (Festinger)',
            options: ['less reward → more attitude change', 'smoker who knows smoking is harmful', 'discomfort from contradictory beliefs/actions', 'People change attitudes to reduce dissonance']
          },
          {
            label: 'Insufficient justification',
            options: ['People change attitudes to reduce dissonance', 'smoker who knows smoking is harmful', 'less reward → more attitude change', 'discomfort from contradictory beliefs/actions']
          },
          {
            label: 'Example',
            options: ['less reward → more attitude change', 'smoker who knows smoking is harmful', 'People change attitudes to reduce dissonance', 'discomfort from contradictory beliefs/actions']
          }
        ],
        correctAnswers: ['discomfort from contradictory beliefs/actions', 'less reward → more attitude change', 'smoker who knows smoking is harmful'],
        hint1: 'Think about what each concept specifically describes in Cognitive Dissonance.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cognitive Dissonance describes a specific idea. Cognitive dissonance (Festinger): discomfort from contradictory beliefs/actions. Insufficient justification: less reward → more attitude change. Example: smoker who knows smoking is harmful.'
      }
    }
  ]
}
