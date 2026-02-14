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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of acquisition & extinction?',
            options: [
              'Acquisition',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Acquisition: CS-UCS pairing builds the association'
          },
          {
            question: 'In the context of acquisition & extinction, which is accurate?',
            options: [
              'CR reappears after rest period',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Spontaneous recovery: CR reappears after rest period'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Acquisition',
            options: ['CS-UCS pairing builds the association', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Extinction',
            options: ['CS presented alone → CR weakens', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Spontaneous recovery',
            options: ['CR reappears after rest period', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['CS-UCS pairing builds the association', 'CS presented alone → CR weakens', 'CR reappears after rest period'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Acquisition & Extinction.'
      }
    }
  ]
}
