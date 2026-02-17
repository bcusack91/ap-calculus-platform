export const bioDnaReplicationPart1Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dna-1-intro-p1',
      type: 'text' as const,
      content: `
# ## Replication Overview

**Part 1 of 7 — Replication Overview**

1. Semiconservative replication: each new DNA has one old + one new strand
2. Meselson-Stahl experiment proved semiconservative model
3. Occurs during S phase of cell cycle
4. Bidirectional from origins of replication
      `
    },
    {
      id: 'dna-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Semiconservative replication" refer to in biology?',
            options: [
              'Occurs during S phase of cell cycle',
              'each new DNA has one old + one new strand',
              'Bidirectional from origins of replication',
              'Meselson-Stahl experiment proved semiconservative model'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Semiconservative replication: each new DNA has one old + one new strand. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Replication Overview, which explains Occurs during S phase of cell cycle?',
            options: [
              'Bidirectional from origins of replication',
              'Occurs during S phase of cell cycle',
              'each new DNA has one old + one new strand',
              'Meselson-Stahl experiment proved semiconservative model'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Occurs during S phase of cell cycle. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'dna-1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Semiconservative replication**: each new DNA has one old + one new strand
- **Meselson-Stahl experiment proved semiconservative model**
- **Occurs during S phase of cell cycle**
- **Bidirectional from origins of replication**
      `
    },
    {
      id: 'dna-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Bidirectional from origins of… is correct?',
            options: [
              'Occurs during S phase of cell cycle',
              'Bidirectional from origins of replication',
              'each new DNA has one old + one new strand',
              'Meselson-Stahl experiment proved semiconservative model'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Bidirectional from origins of replication. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'dna-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Semiconservative replication',
            options: ['Occurs during S phase of cell cycle', 'each new DNA has one old + one new strand', 'Meselson-Stahl experiment proved semiconservative model', 'Bidirectional from origins of replication']
          },
          {
            label: 'Meselson-Stahl experiment proved…',
            options: ['Occurs during S phase of cell cycle', 'each new DNA has one old + one new strand', 'Meselson-Stahl experiment proved semiconservative model', 'Bidirectional from origins of replication']
          },
          {
            label: 'Occurs during S phase of cell cycle',
            options: ['Occurs during S phase of cell cycle', 'Bidirectional from origins of replication', 'Meselson-Stahl experiment proved semiconservative model', 'each new DNA has one old + one new strand']
          }
        ],
        correctAnswers: ['each new DNA has one old + one new strand', 'Meselson-Stahl experiment proved semiconservative model', 'Occurs during S phase of cell cycle'],
        hint1: 'Think about what each concept specifically describes in Replication Overview.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Replication Overview describes a specific idea. Semiconservative replication: each new DNA has one old + one new strand. Meselson-Stahl experiment proved semiconservative model. Occurs during S phase of cell cycle.'
      }
    }
  ]
}
