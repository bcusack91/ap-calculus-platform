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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Spacing effect?',
            options: [
              'method of loci, acronyms, visual imagery',
              'distributed practice > massed practice',
              'connecting to existing knowledge',
              'retrieval practice improves retention'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Spacing effect: distributed practice > massed practice. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Improving Memory, which explains Elaborative rehearsal?',
            options: [
              'method of loci, acronyms, visual imagery',
              'retrieval practice improves retention',
              'connecting to existing knowledge',
              'distributed practice > massed practice'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Elaborative rehearsal: connecting to existing knowledge. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Spacing effect',
            options: ['distributed practice > massed practice', 'method of loci, acronyms, visual imagery', 'connecting to existing knowledge', 'retrieval practice improves retention']
          },
          {
            label: 'Testing effect',
            options: ['distributed practice > massed practice', 'connecting to existing knowledge', 'method of loci, acronyms, visual imagery', 'retrieval practice improves retention']
          },
          {
            label: 'Elaborative rehearsal',
            options: ['method of loci, acronyms, visual imagery', 'distributed practice > massed practice', 'connecting to existing knowledge', 'retrieval practice improves retention']
          }
        ],
        correctAnswers: ['distributed practice > massed practice', 'retrieval practice improves retention', 'connecting to existing knowledge'],
        hint1: 'Think about what each concept specifically describes in Improving Memory.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Improving Memory describes a specific idea. Spacing effect: distributed practice > massed practice. Testing effect: retrieval practice improves retention. Elaborative rehearsal: connecting to existing knowledge.'
      }
    }
  ]
}
