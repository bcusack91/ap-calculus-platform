export const psychBrainPart7Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biolo7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Brain plasticity and lateralization

Brain plasticity and lateralization

### 2. Split-brain research (Sperry)

Split-brain research (Sperry)

### 3. Phineas Gage case study

Phineas Gage case study

### 4. AP exam

brain structure identification
      `
    },
    {
      id: 'biolo7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Brain plasticity and lateralization?',
            options: [
              'Split-brain research (Sperry)',
              'Brain plasticity and lateralization',
              'Phineas Gage case study',
              'brain structure identification'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Brain plasticity and lateralization. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Phineas Gage case study:',
            options: [
              'Brain plasticity and lateralization',
              'brain structure identification',
              'Phineas Gage case study',
              'Split-brain research (Sperry)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Phineas Gage case study. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'biolo7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Brain plasticity and lateralization**
- **Split-brain research (Sperry)**
- **Phineas Gage case study**
- **AP exam**: brain structure identification
      `
    },
    {
      id: 'biolo7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'brain structure identification',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: brain structure identification'
          }
        ]
      }
    },
    {
      id: 'biolo7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Brain plasticity and lateralization',
            options: ['Brain plasticity and lateralization', 'Phineas Gage case study', 'brain structure identification', 'Split-brain research (Sperry)']
          },
          {
            label: 'Split-brain research (Sperry)',
            options: ['Brain plasticity and lateralization', 'Split-brain research (Sperry)', 'Phineas Gage case study', 'brain structure identification']
          },
          {
            label: 'Phineas Gage case study',
            options: ['Brain plasticity and lateralization', 'Phineas Gage case study', 'Split-brain research (Sperry)', 'brain structure identification']
          }
        ],
        correctAnswers: ['Brain plasticity and lateralization', 'Split-brain research (Sperry)', 'Phineas Gage case study'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Brain plasticity and lateralization. Split-brain research (Sperry). Phineas Gage case study.'
      }
    }
  ]
}
