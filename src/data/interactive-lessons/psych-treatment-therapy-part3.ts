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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Systematic desensitization" refer to in psychology?',
            options: [
              'gradually exposing to feared stimulus',
              'pairing unwanted behavior with unpleasant stimulus',
              'challenging and changing negative thought patterns',
              'identifying and correcting distorted thinking'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Systematic desensitization: gradually exposing to feared stimulus. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Behavioral & Cognitive Therapy, which explains CBT?',
            options: [
              'challenging and changing negative thought patterns',
              'identifying and correcting distorted thinking',
              'gradually exposing to feared stimulus',
              'pairing unwanted behavior with unpleasant stimulus'
            ],
            correctAnswer: 0,
            explanation: 'Correct — CBT: challenging and changing negative thought patterns. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Systematic desensitization',
            options: ['gradually exposing to feared stimulus', 'challenging and changing negative thought patterns', 'pairing unwanted behavior with unpleasant stimulus', 'identifying and correcting distorted thinking']
          },
          {
            label: 'Aversion therapy',
            options: ['identifying and correcting distorted thinking', 'pairing unwanted behavior with unpleasant stimulus', 'challenging and changing negative thought patterns', 'gradually exposing to feared stimulus']
          },
          {
            label: 'CBT',
            options: ['pairing unwanted behavior with unpleasant stimulus', 'challenging and changing negative thought patterns', 'gradually exposing to feared stimulus', 'identifying and correcting distorted thinking']
          }
        ],
        correctAnswers: ['gradually exposing to feared stimulus', 'pairing unwanted behavior with unpleasant stimulus', 'challenging and changing negative thought patterns'],
        hint1: 'Think about what each concept specifically describes in Behavioral & Cognitive Therapy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Behavioral & Cognitive Therapy describes a specific idea. Systematic desensitization: gradually exposing to feared stimulus. Aversion therapy: pairing unwanted behavior with unpleasant stimulus. CBT: challenging and changing negative thought patterns.'
      }
    }
  ]
}
