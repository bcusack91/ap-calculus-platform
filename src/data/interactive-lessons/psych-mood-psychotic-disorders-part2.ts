export const psychMoodPsychPart2Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-2-intro',
      type: 'text' as const,
      content: `
# ## Bipolar Disorder

**Part 2 of 7 — Bipolar Disorder**

### 1. Bipolar I

manic episodes (elevated mood, energy, risky behavior)

### 2. Bipolar II

hypomanic episodes + major depressive episodes

### 3. Mania

decreased need for sleep, grandiosity, pressured speech

### 4. Treatment

mood stabilizers (lithium), psychotherapy
      `
    },
    {
      id: 'mood-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of bipolar disorder?',
            options: [
              'Bipolar I',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Bipolar I: manic episodes (elevated mood, energy, risky behavior)'
          },
          {
            question: 'In the context of bipolar disorder, which is accurate?',
            options: [
              'decreased need for sleep, grandiosity, pressured speech',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Mania: decreased need for sleep, grandiosity, pressured speech'
          }
        ]
      }
    },
    {
      id: 'mood-2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Bipolar I**: manic episodes (elevated mood, energy, risky behavior)
- **Bipolar II**: hypomanic episodes + major depressive episodes
- **Mania**: decreased need for sleep, grandiosity, pressured speech
- **Treatment**: mood stabilizers (lithium), psychotherapy
      `
    },
    {
      id: 'mood-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to bipolar disorder?',
            options: [
              'mood stabilizers (lithium), psychotherapy',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Treatment: mood stabilizers (lithium), psychotherapy'
          }
        ]
      }
    },
    {
      id: 'mood-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bipolar I',
            options: ['manic episodes (elevated mood, energy, risky behav', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Bipolar II',
            options: ['hypomanic episodes + major depressive episodes', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Mania',
            options: ['decreased need for sleep, grandiosity, pressured s', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['manic episodes (elevated mood, energy, risky behav', 'hypomanic episodes + major depressive episodes', 'decreased need for sleep, grandiosity, pressured s'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Bipolar Disorder.'
      }
    }
  ]
}
