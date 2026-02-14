export const psychTreatmentPart3Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treat3-intro',
      type: 'text' as const,
      content: `
# ## Behavioral & Cognitive Therapy

**Part 3 of 7 — Behavioral & Cognitive Therapy**

### 1. Systematic desensitization

gradually exposing to feared stimulus

### 2. Aversion therapy

pairing unwanted behavior with unpleasant stimulus

### 3. CBT

challenging and changing negative thought patterns

### 4. Cognitive restructuring

identifying and correcting distorted thinking
      `
    },
    {
      id: 'treat3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of behavioral & cognitive therapy?',
            options: [
              'Systematic desensitization',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Systematic desensitization: gradually exposing to feared stimulus'
          },
          {
            question: 'In the context of behavioral & cognitive therapy, which is accurate?',
            options: [
              'challenging and changing negative thought patterns',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'CBT: challenging and changing negative thought patterns'
          }
        ]
      }
    },
    {
      id: 'treat3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Systematic desensitization**: gradually exposing to feared stimulus
- **Aversion therapy**: pairing unwanted behavior with unpleasant stimulus
- **CBT**: challenging and changing negative thought patterns
- **Cognitive restructuring**: identifying and correcting distorted thinking
      `
    },
    {
      id: 'treat3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to behavioral & cognitive therapy?',
            options: [
              'identifying and correcting distorted thinking',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Cognitive restructuring: identifying and correcting distorted thinking'
          }
        ]
      }
    },
    {
      id: 'treat3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Systematic desensitization',
            options: ['gradually exposing to feared stimulus', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Aversion therapy',
            options: ['pairing unwanted behavior with unpleasant stimulus', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'CBT',
            options: ['challenging and changing negative thought patterns', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['gradually exposing to feared stimulus', 'pairing unwanted behavior with unpleasant stimulus', 'challenging and changing negative thought patterns'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Behavioral & Cognitive Therapy.'
      }
    }
  ]
}
