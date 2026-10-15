export const bioCellCommPart2Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell2-intro-p2',
      type: 'text' as const,
      content: `
## Types of Signaling

**Part 2 of 7 — Types of Signaling**

1. Endocrine: long-distance via bloodstream (hormones)
2. Paracrine: local signaling to nearby cells
3. Autocrine: cell signals itself
4. Direct contact: gap junctions, plasmodesmata
      `
    },
    {
      id: 'cell2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Endocrine?',
            options: [
              'Signals pass between touching cells via gap junctions or plasmodesmata',
              'Hormones travel long distances through the bloodstream',
              'A cell secretes a signal that binds receptors on itself',
              'Signals diffuse only to nearby cells a short distance away'
            ],
            correctAnswer: 1,
            explanation: 'Endocrine signaling uses hormones carried long distances in the bloodstream to target cells. Direct contact uses gap junctions or plasmodesmata, autocrine signals act on the secreting cell, and paracrine signals act locally.'
          },
          {
            question: 'Which of the following is true about Autocrine?',
            options: [
              'Signals pass between touching cells via gap junctions or plasmodesmata',
              'Hormones travel long distances through the bloodstream',
              'A cell secretes a signal that binds receptors on itself',
              'Signals diffuse only to nearby cells a short distance away'
            ],
            correctAnswer: 2,
            explanation: 'Autocrine signaling occurs when a cell secretes a signal that binds receptors on its own surface, as some immune and cancer cells do.'
          }
        ]
      }
    },
    {
      id: 'cell2-detail-p2',
      type: 'text' as const,
      content: `
### Key Details

- **Endocrine**: long-distance via bloodstream (hormones)
- **Paracrine**: local signaling to nearby cells
- **Autocrine**: cell signals itself
- **Direct contact**: gap junctions, plasmodesmata
      `
    },
    {
      id: 'cell2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Types of Signaling, which correctly describes Direct contact?',
            options: [
              'Signals diffuse only to nearby cells a short distance away',
              'Hormones travel long distances through the bloodstream',
              'Signals pass between touching cells via gap junctions or plasmodesmata',
              'A cell secretes a signal that binds receptors on itself'
            ],
            correctAnswer: 2,
            explanation: 'Direct-contact signaling passes signals between adjacent cells through gap junctions (animals) or plasmodesmata (plants), or by surface molecules touching.'
          }
        ]
      }
    },
    {
      id: 'cell2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Endocrine',
            options: ['local signaling to nearby cells', 'long-distance via bloodstream (hormones)', 'cell signals itself', 'gap junctions, plasmodesmata']
          },
          {
            label: 'Paracrine',
            options: ['local signaling to nearby cells', 'gap junctions, plasmodesmata', 'long-distance via bloodstream (hormones)', 'cell signals itself']
          },
          {
            label: 'Autocrine',
            options: ['local signaling to nearby cells', 'long-distance via bloodstream (hormones)', 'gap junctions, plasmodesmata', 'cell signals itself']
          }
        ],
        correctAnswers: ['long-distance via bloodstream (hormones)', 'local signaling to nearby cells', 'cell signals itself'],
        hint1: 'Think about what each concept specifically describes in Types of Signaling.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Types of Signaling describes a specific idea. Endocrine: long-distance via bloodstream (hormones). Paracrine: local signaling to nearby cells. Autocrine: cell signals itself.'
      }
    }
  ]
}
