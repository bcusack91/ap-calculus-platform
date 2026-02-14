export const psychRetrievalPart5Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retri5-intro',
      type: 'text' as const,
      content: `
# ## Improving Memory

**Part 5 of 7 — Improving Memory**

### 1. Spacing effect

distributed practice > massed practice

### 2. Testing effect

retrieval practice improves retention

### 3. Elaborative rehearsal

connecting to existing knowledge

### 4. Mnemonic devices

method of loci, acronyms, visual imagery
      `
    },
    {
      id: 'retri5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of improving memory?',
            options: [
              'Spacing effect',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Spacing effect: distributed practice > massed practice'
          },
          {
            question: 'In the context of improving memory, which is accurate?',
            options: [
              'connecting to existing knowledge',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Elaborative rehearsal: connecting to existing knowledge'
          }
        ]
      }
    },
    {
      id: 'retri5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Spacing effect**: distributed practice > massed practice
- **Testing effect**: retrieval practice improves retention
- **Elaborative rehearsal**: connecting to existing knowledge
- **Mnemonic devices**: method of loci, acronyms, visual imagery
      `
    },
    {
      id: 'retri5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to improving memory?',
            options: [
              'method of loci, acronyms, visual imagery',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Mnemonic devices: method of loci, acronyms, visual imagery'
          }
        ]
      }
    },
    {
      id: 'retri5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Spacing effect',
            options: ['distributed practice > massed practice', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Testing effect',
            options: ['retrieval practice improves retention', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Elaborative rehearsal',
            options: ['connecting to existing knowledge', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['distributed practice > massed practice', 'retrieval practice improves retention', 'connecting to existing knowledge'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Improving Memory.'
      }
    }
  ]
}
