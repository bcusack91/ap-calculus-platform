export const bioCellStructurePart7Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'cell7-intro-p7',
      type: 'text' as const,
      content: `
# ## Cell Structure & Organelles: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Structure-function relationships in cells
2. Compartmentalization enables specialization
3. Endosymbiotic theory evidence
4. Cell biology connects to all AP Bio units
      `
    },
    {
      id: 'cell7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Structure-function relationships in…?',
            options: [
              'Endosymbiotic theory evidence',
              'Cell biology connects to all AP Bio units',
              'Compartmentalization enables specialization',
              'Structure-function relationships in cells'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Structure-function relationships in cells. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Endosymbiotic theory evidence:',
            options: [
              'Compartmentalization enables specialization',
              'Cell biology connects to all AP Bio units',
              'Endosymbiotic theory evidence',
              'Structure-function relationships in cells'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Endosymbiotic theory evidence. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Structure-function relationships in cells**
- **Compartmentalization enables specialization**
- **Endosymbiotic theory evidence**
- **Cell biology connects to all AP Bio units**
      `
    },
    {
      id: 'cell7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Cell biology connects to all AP Bio… is correct?',
            options: [
              'Cell biology connects to all AP Bio units',
              'Endosymbiotic theory evidence',
              'Compartmentalization enables specialization',
              'Structure-function relationships in cells'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Cell biology connects to all AP Bio units. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Structure-function relationships in…',
            options: ['Structure-function relationships in cells', 'Endosymbiotic theory evidence', 'Compartmentalization enables specialization', 'Cell biology connects to all AP Bio units']
          },
          {
            label: 'Compartmentalization enables…',
            options: ['Endosymbiotic theory evidence', 'Compartmentalization enables specialization', 'Structure-function relationships in cells', 'Cell biology connects to all AP Bio units']
          },
          {
            label: 'Endosymbiotic theory evidence',
            options: ['Cell biology connects to all AP Bio units', 'Structure-function relationships in cells', 'Endosymbiotic theory evidence', 'Compartmentalization enables specialization']
          }
        ],
        correctAnswers: ['Structure-function relationships in cells', 'Compartmentalization enables specialization', 'Endosymbiotic theory evidence'],
        hint1: 'Think about what each concept specifically describes in Cell Structure & Organelles: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cell Structure & Organelles: Synthesis & AP Review describes a specific idea. Structure-function relationships in cells. Compartmentalization enables specialization. Endosymbiotic theory evidence.'
      }
    }
  ]
}
