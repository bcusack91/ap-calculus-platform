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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Drug therapy" refer to in psychology?',
            options: [
              'last resort (lobotomy is historical)',
              'antidepressants (SSRIs), antipsychotics, anxiolytics, mood stabilizers',
              'magnetic pulses to brain',
              'for severe depression'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Drug therapy: antidepressants (SSRIs), antipsychotics, anxiolytics, mood stabilizers. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Biomedical Treatments, which explains TMS (transcranial magnetic stimulation)?',
            options: [
              'antidepressants (SSRIs), antipsychotics, anxiolytics, mood stabilizers',
              'last resort (lobotomy is historical)',
              'for severe depression',
              'magnetic pulses to brain'
            ],
            correctAnswer: 3,
            explanation: 'Correct — TMS (transcranial magnetic stimulation): magnetic pulses to brain. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Drug therapy',
            options: ['last resort (lobotomy is historical)', 'magnetic pulses to brain', 'antidepressants (SSRIs), antipsychotics, anxiolytics, mood stabilizers', 'for severe depression']
          },
          {
            label: 'ECT (electroconvulsive therapy)',
            options: ['magnetic pulses to brain', 'last resort (lobotomy is historical)', 'antidepressants (SSRIs), antipsychotics, anxiolytics, mood stabilizers', 'for severe depression']
          },
          {
            label: 'TMS (transcranial magnetic stimulation)',
            options: ['antidepressants (SSRIs), antipsychotics, anxiolytics, mood stabilizers', 'for severe depression', 'magnetic pulses to brain', 'last resort (lobotomy is historical)']
          }
        ],
        correctAnswers: ['antidepressants (SSRIs), antipsychotics, anxiolytics, mood stabilizers', 'for severe depression', 'magnetic pulses to brain'],
        hint1: 'Think about what each concept specifically describes in Biomedical Treatments.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Biomedical Treatments describes a specific idea. Drug therapy: antidepressants (SSRIs), antipsychotics, anxiolytics, mood stabilizers. ECT (electroconvulsive therapy): for severe depression. TMS (transcranial magnetic stimulation): magnetic pulses to brain.'
      }
    }
  ]
}
