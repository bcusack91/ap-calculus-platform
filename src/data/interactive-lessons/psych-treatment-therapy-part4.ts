export const psychTreatmentPart4Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treat4-intro',
      type: 'text' as const,
      content: `
# ## Biomedical Treatments

**Part 4 of 7 — Biomedical Treatments**

### 1. Drug therapy

antidepressants (SSRIs), antipsychotics, anxiolytics, mood stabilizers

### 2. ECT (electroconvulsive therapy)

for severe depression

### 3. TMS (transcranial magnetic stimulation)

magnetic pulses to brain

### 4. Psychosurgery

last resort (lobotomy is historical)
      `
    },
    {
      id: 'treat4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of biomedical treatments?',
            options: [
              'Drug therapy',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Drug therapy: antidepressants (SSRIs), antipsychotics, anxiolytics, mood stabilizers'
          },
          {
            question: 'In the context of biomedical treatments, which is accurate?',
            options: [
              'magnetic pulses to brain',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'TMS (transcranial magnetic stimulation): magnetic pulses to brain'
          }
        ]
      }
    },
    {
      id: 'treat4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Drug therapy**: antidepressants (SSRIs), antipsychotics, anxiolytics, mood stabilizers
- **ECT (electroconvulsive therapy)**: for severe depression
- **TMS (transcranial magnetic stimulation)**: magnetic pulses to brain
- **Psychosurgery**: last resort (lobotomy is historical)
      `
    },
    {
      id: 'treat4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to biomedical treatments?',
            options: [
              'last resort (lobotomy is historical)',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Psychosurgery: last resort (lobotomy is historical)'
          }
        ]
      }
    },
    {
      id: 'treat4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Drug therapy',
            options: ['antidepressants (SSRIs), antipsychotics, anxiolyti', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'ECT (electroconvulsive therapy)',
            options: ['for severe depression', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'TMS (transcranial magnetic stimulation)',
            options: ['magnetic pulses to brain', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['antidepressants (SSRIs), antipsychotics, anxiolyti', 'for severe depression', 'magnetic pulses to brain'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Biomedical Treatments.'
      }
    }
  ]
}
