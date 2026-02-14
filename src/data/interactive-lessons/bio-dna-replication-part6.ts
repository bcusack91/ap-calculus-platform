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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes identifying replication enzymes and their functions?',
            options: [
              'Identifying replication enzymes and their functions',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Identifying replication enzymes and their functions'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Diagramming the replication fork',
              'snoitcnuf rieht dna semyzne noitacilper gniyfitnedI',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Diagramming the replication fork'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Connecting replication errors to mutations',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Connecting replication errors to mutations'
          }
        ]
      }
    },
    {
      id: 'dna-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying replication enzymes and their functions is important in problem-solving because',
            options: ['Identifying replication enzymes and their function', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Predicting effects of enzyme mutations is important in problem-solving because',
            options: ['Predicting effects of enzyme mutations', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Diagramming the replication fork is important in problem-solving because',
            options: ['Diagramming the replication fork', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Identifying replication enzymes and their function', 'Predicting effects of enzyme mutations', 'Diagramming the replication fork'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
