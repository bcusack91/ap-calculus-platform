export const bioDnaReplicationPart6Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dna-6-intro-p6',
      type: 'text' as const,
      content: `
# ## DNA Replication: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Identifying replication enzymes and their functions
2. Predicting effects of enzyme mutations
3. Diagramming the replication fork
4. Connecting replication errors to mutations
      `
    },
    {
      id: 'dna-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Identifying replication enzymes and…?',
            options: [
              'Diagramming the replication fork',
              'Predicting effects of enzyme mutations',
              'Connecting replication errors to mutations',
              'Identifying replication enzymes and their functions'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Identifying replication enzymes and their functions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Diagramming the replication fork?',
            options: [
              'Diagramming the replication fork',
              'Predicting effects of enzyme mutations',
              'Connecting replication errors to mutations',
              'Identifying replication enzymes and their functions'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Diagramming the replication fork. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'dna-6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Identifying replication enzymes and their functions**
- **Predicting effects of enzyme mutations**
- **Diagramming the replication fork**
- **Connecting replication errors to mutations**
      `
    },
    {
      id: 'dna-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding DNA Replication: Problem-Solving Workshop, which correctly describes Connecting replication errors to…?',
            options: [
              'Identifying replication enzymes and their functions',
              'Predicting effects of enzyme mutations',
              'Diagramming the replication fork',
              'Connecting replication errors to mutations'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Connecting replication errors to mutations. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'dna-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying replication enzymes and…',
            options: ['Connecting replication errors to mutations', 'Identifying replication enzymes and their functions', 'Predicting effects of enzyme mutations', 'Diagramming the replication fork']
          },
          {
            label: 'Predicting effects of enzyme mutations',
            options: ['Connecting replication errors to mutations', 'Predicting effects of enzyme mutations', 'Identifying replication enzymes and their functions', 'Diagramming the replication fork']
          },
          {
            label: 'Diagramming the replication fork',
            options: ['Connecting replication errors to mutations', 'Diagramming the replication fork', 'Predicting effects of enzyme mutations', 'Identifying replication enzymes and their functions']
          }
        ],
        correctAnswers: ['Identifying replication enzymes and their functions', 'Predicting effects of enzyme mutations', 'Diagramming the replication fork'],
        hint1: 'Think about what each concept specifically describes in DNA Replication: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in DNA Replication: Problem-Solving Workshop describes a specific idea. Identifying replication enzymes and their functions. Predicting effects of enzyme mutations. Diagramming the replication fork.'
      }
    }
  ]
}
