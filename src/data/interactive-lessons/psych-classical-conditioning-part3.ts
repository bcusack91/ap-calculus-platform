export const psychClassicalPart3Data = {
  topicSlug: 'classical-conditioning',
  sections: [
    {
      id: 'class3-intro',
      type: 'text' as const,
      content: `
# ## Acquisition & Extinction

**Part 3 of 7 — Acquisition & Extinction**

### 1. Acquisition

CS-UCS pairing builds the association

### 2. Extinction

CS presented alone → CR weakens

### 3. Spontaneous recovery

CR reappears after rest period

### 4. Higher-order conditioning

CS1 paired with CS2
      `
    },
    {
      id: 'class3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Acquisition?',
            options: [
              'CS1 paired with CS2',
              'CS-UCS pairing builds the association',
              'CR reappears after rest period',
              'CS presented alone → CR weakens'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Acquisition: CS-UCS pairing builds the association. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Spontaneous recovery:',
            options: [
              'CS-UCS pairing builds the association',
              'CR reappears after rest period',
              'CS presented alone → CR weakens',
              'CS1 paired with CS2'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Spontaneous recovery: CR reappears after rest period. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'class3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Acquisition**: CS-UCS pairing builds the association
- **Extinction**: CS presented alone → CR weakens
- **Spontaneous recovery**: CR reappears after rest period
- **Higher-order conditioning**: CS1 paired with CS2
      `
    },
    {
      id: 'class3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to acquisition & extinction?',
            options: [
              'CS1 paired with CS2',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Higher-order conditioning: CS1 paired with CS2'
          }
        ]
      }
    },
    {
      id: 'class3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Acquisition',
            options: ['CS-UCS pairing builds the association', 'CR reappears after rest period', 'CS1 paired with CS2', 'CS presented alone → CR weakens']
          },
          {
            label: 'Extinction',
            options: ['CS1 paired with CS2', 'CS-UCS pairing builds the association', 'CR reappears after rest period', 'CS presented alone → CR weakens']
          },
          {
            label: 'Spontaneous recovery',
            options: ['CS-UCS pairing builds the association', 'CS presented alone → CR weakens', 'CS1 paired with CS2', 'CR reappears after rest period']
          }
        ],
        correctAnswers: ['CS-UCS pairing builds the association', 'CS presented alone → CR weakens', 'CR reappears after rest period'],
        hint1: 'Think about what each concept specifically describes in Acquisition & Extinction.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Acquisition & Extinction describes a specific idea. Acquisition: CS-UCS pairing builds the association. Extinction: CS presented alone → CR weakens. Spontaneous recovery: CR reappears after rest period.'
      }
    }
  ]
}
