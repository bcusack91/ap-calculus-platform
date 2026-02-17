export const bioDnaReplicationPart7Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dna-7-intro-p7',
      type: 'text' as const,
      content: `
# ## DNA Replication: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Replication accuracy and mutation rates
2. Connection to cell cycle checkpoints
3. Telomeres and aging/cancer
4. AP exam: enzyme identification and function
      `
    },
    {
      id: 'dna-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Replication accuracy and mutation rates?',
            options: [
              'Telomeres and aging/cancer',
              'enzyme identification and function',
              'Replication accuracy and mutation rates',
              'Connection to cell cycle checkpoints'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Replication accuracy and mutation rates. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Telomeres and aging/cancer?',
            options: [
              'Telomeres and aging/cancer',
              'Connection to cell cycle checkpoints',
              'enzyme identification and function',
              'Replication accuracy and mutation rates'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Telomeres and aging/cancer. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'dna-7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Replication accuracy and mutation rates**
- **Connection to cell cycle checkpoints**
- **Telomeres and aging/cancer**
- **AP exam**: enzyme identification and function
      `
    },
    {
      id: 'dna-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about AP exam is correct?',
            options: [
              'Telomeres and aging/cancer',
              'Replication accuracy and mutation rates',
              'enzyme identification and function',
              'Connection to cell cycle checkpoints'
            ],
            correctAnswer: 2,
            explanation: 'Correct — AP exam: enzyme identification and function. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'dna-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Replication accuracy and mutation rates',
            options: ['Replication accuracy and mutation rates', 'Telomeres and aging/cancer', 'Connection to cell cycle checkpoints', 'enzyme identification and function']
          },
          {
            label: 'Connection to cell cycle checkpoints',
            options: ['enzyme identification and function', 'Connection to cell cycle checkpoints', 'Telomeres and aging/cancer', 'Replication accuracy and mutation rates']
          },
          {
            label: 'Telomeres and aging/cancer',
            options: ['Telomeres and aging/cancer', 'Connection to cell cycle checkpoints', 'Replication accuracy and mutation rates', 'enzyme identification and function']
          }
        ],
        correctAnswers: ['Replication accuracy and mutation rates', 'Connection to cell cycle checkpoints', 'Telomeres and aging/cancer'],
        hint1: 'Think about what each concept specifically describes in DNA Replication: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in DNA Replication: Synthesis & AP Review describes a specific idea. Replication accuracy and mutation rates. Connection to cell cycle checkpoints. Telomeres and aging/cancer.'
      }
    }
  ]
}
