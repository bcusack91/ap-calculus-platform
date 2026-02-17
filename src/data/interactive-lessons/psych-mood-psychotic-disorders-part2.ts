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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Bipolar I" refer to in psychology?',
            options: [
              'mood stabilizers (lithium), psychotherapy',
              'decreased need for sleep, grandiosity, pressured speech',
              'manic episodes (elevated mood, energy, risky behavior)',
              'hypomanic episodes + major depressive episodes'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Bipolar I: manic episodes (elevated mood, energy, risky behavior). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Bipolar Disorder, which explains Mania?',
            options: [
              'manic episodes (elevated mood, energy, risky behavior)',
              'mood stabilizers (lithium), psychotherapy',
              'decreased need for sleep, grandiosity, pressured speech',
              'hypomanic episodes + major depressive episodes'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Mania: decreased need for sleep, grandiosity, pressured speech. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bipolar I',
            options: ['manic episodes (elevated mood, energy, risky behavior)', 'hypomanic episodes + major depressive episodes', 'decreased need for sleep, grandiosity, pressured speech', 'mood stabilizers (lithium), psychotherapy']
          },
          {
            label: 'Bipolar II',
            options: ['manic episodes (elevated mood, energy, risky behavior)', 'decreased need for sleep, grandiosity, pressured speech', 'hypomanic episodes + major depressive episodes', 'mood stabilizers (lithium), psychotherapy']
          },
          {
            label: 'Mania',
            options: ['mood stabilizers (lithium), psychotherapy', 'manic episodes (elevated mood, energy, risky behavior)', 'hypomanic episodes + major depressive episodes', 'decreased need for sleep, grandiosity, pressured speech']
          }
        ],
        correctAnswers: ['manic episodes (elevated mood, energy, risky behavior)', 'hypomanic episodes + major depressive episodes', 'decreased need for sleep, grandiosity, pressured speech'],
        hint1: 'Think about what each concept specifically describes in Bipolar Disorder.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Bipolar Disorder describes a specific idea. Bipolar I: manic episodes (elevated mood, energy, risky behavior). Bipolar II: hypomanic episodes + major depressive episodes. Mania: decreased need for sleep, grandiosity, pressured speech.'
      }
    }
  ]
}
