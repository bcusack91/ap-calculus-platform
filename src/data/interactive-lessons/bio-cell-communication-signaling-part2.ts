export const bioCellCommPart2Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell2-intro-p2',
      type: 'text' as const,
      content: `
# ## Types of Signaling

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
              'gap junctions, plasmodesmata',
              'long-distance via bloodstream (hormones)',
              'cell signals itself',
              'local signaling to nearby cells'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Endocrine: long-distance via bloodstream (hormones). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Autocrine?',
            options: [
              'gap junctions, plasmodesmata',
              'long-distance via bloodstream (hormones)',
              'cell signals itself',
              'local signaling to nearby cells'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Autocrine: cell signals itself. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

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
              'local signaling to nearby cells',
              'long-distance via bloodstream (hormones)',
              'gap junctions, plasmodesmata',
              'cell signals itself'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Direct contact: gap junctions, plasmodesmata. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
