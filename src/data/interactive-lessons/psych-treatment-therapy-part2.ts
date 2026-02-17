export const psychTreatmentPart2Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treat2-intro',
      type: 'text' as const,
      content: `
# ## Psychodynamic & Humanistic Therapy

**Part 2 of 7 — Psychodynamic & Humanistic Therapy**

### 1. Psychoanalysis (Freud)

free association, dream analysis, transference

### 2. Psychodynamic

less intensive, focus on current relationships

### 3. Humanistic (Rogers)

client-centered, active listening, empathy

### 4. Unconditional positive regard

accepting the client without judgment
      `
    },
    {
      id: 'treat2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Psychoanalysis (Freud)" refer to in psychology?',
            options: [
              'accepting the client without judgment',
              'client-centered, active listening, empathy',
              'free association, dream analysis, transference',
              'less intensive, focus on current relationships'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Psychoanalysis (Freud): free association, dream analysis, transference. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Humanistic (Rogers):',
            options: [
              'client-centered, active listening, empathy',
              'accepting the client without judgment',
              'less intensive, focus on current relationships',
              'free association, dream analysis, transference'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Humanistic (Rogers): client-centered, active listening, empathy. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'treat2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Psychoanalysis (Freud)**: free association, dream analysis, transference
- **Psychodynamic**: less intensive, focus on current relationships
- **Humanistic (Rogers)**: client-centered, active listening, empathy
- **Unconditional positive regard**: accepting the client without judgment
      `
    },
    {
      id: 'treat2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to psychodynamic & humanistic therapy?',
            options: [
              'accepting the client without judgment',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Unconditional positive regard: accepting the client without judgment'
          }
        ]
      }
    },
    {
      id: 'treat2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Psychoanalysis (Freud)',
            options: ['accepting the client without judgment', 'free association, dream analysis, transference', 'less intensive, focus on current relationships', 'client-centered, active listening, empathy']
          },
          {
            label: 'Psychodynamic',
            options: ['less intensive, focus on current relationships', 'client-centered, active listening, empathy', 'accepting the client without judgment', 'free association, dream analysis, transference']
          },
          {
            label: 'Humanistic (Rogers)',
            options: ['free association, dream analysis, transference', 'client-centered, active listening, empathy', 'accepting the client without judgment', 'less intensive, focus on current relationships']
          }
        ],
        correctAnswers: ['free association, dream analysis, transference', 'less intensive, focus on current relationships', 'client-centered, active listening, empathy'],
        hint1: 'Think about what each concept specifically describes in Psychodynamic & Humanistic Therapy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Psychodynamic & Humanistic Therapy describes a specific idea. Psychoanalysis (Freud): free association, dream analysis, transference. Psychodynamic: less intensive, focus on current relationships. Humanistic (Rogers): client-centered, active listening, empathy.'
      }
    }
  ]
}
