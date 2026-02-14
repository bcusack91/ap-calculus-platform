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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Brain plasticity and lateralization',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Brain plasticity and lateralization'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Phineas Gage case study',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Phineas Gage case study'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Brain plasticity and lateralization',
            options: ['Brain plasticity and lateralization', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Split-brain research (Sperry)',
            options: ['Split-brain research (Sperry)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Phineas Gage case study',
            options: ['Phineas Gage case study', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Brain plasticity and lateralization', 'Split-brain research (Sperry)', 'Phineas Gage case study'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
