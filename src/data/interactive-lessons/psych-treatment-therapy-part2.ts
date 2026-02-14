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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of psychodynamic & humanistic therapy?',
            options: [
              'Psychoanalysis (Freud)',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Psychoanalysis (Freud): free association, dream analysis, transference'
          },
          {
            question: 'In the context of psychodynamic & humanistic therapy, which is accurate?',
            options: [
              'client-centered, active listening, empathy',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Humanistic (Rogers): client-centered, active listening, empathy'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Psychoanalysis (Freud)',
            options: ['free association, dream analysis, transference', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Psychodynamic',
            options: ['less intensive, focus on current relationships', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Humanistic (Rogers)',
            options: ['client-centered, active listening, empathy', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['free association, dream analysis, transference', 'less intensive, focus on current relationships', 'client-centered, active listening, empathy'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Psychodynamic & Humanistic Therapy.'
      }
    }
  ]
}
