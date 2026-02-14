export const psychTreatmentPart5Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treat5-intro',
      type: 'text' as const,
      content: `
# ## Evaluating Treatments

**Part 5 of 7 — Evaluating Treatments**

### 1. Meta-analysis

combining results of many studies

### 2. Common factors

therapeutic alliance most important predictor

### 3. Evidence-based practice

using research to guide treatment

### 4. Some therapies are more effective for specific disorders

Some therapies are more effective for specific disorders
      `
    },
    {
      id: 'treat5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of evaluating treatments?',
            options: [
              'Meta-analysis',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Meta-analysis: combining results of many studies'
          },
          {
            question: 'In the context of evaluating treatments, which is accurate?',
            options: [
              'using research to guide treatment',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Evidence-based practice: using research to guide treatment'
          }
        ]
      }
    },
    {
      id: 'treat5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Meta-analysis**: combining results of many studies
- **Common factors**: therapeutic alliance most important predictor
- **Evidence-based practice**: using research to guide treatment
- **Some therapies are more effective for specific disorders**
      `
    },
    {
      id: 'treat5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to evaluating treatments?',
            options: [
              'Some therapies are more effective for specific disorders',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Some therapies are more effective for specific disorders'
          }
        ]
      }
    },
    {
      id: 'treat5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Meta-analysis',
            options: ['combining results of many studies', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Common factors',
            options: ['therapeutic alliance most important predictor', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Evidence-based practice',
            options: ['using research to guide treatment', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['combining results of many studies', 'therapeutic alliance most important predictor', 'using research to guide treatment'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Evaluating Treatments.'
      }
    }
  ]
}
