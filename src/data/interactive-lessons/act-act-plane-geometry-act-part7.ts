export const actPlaneGeomPart7Data = {
  topicSlug: 'act-plane-geometry-act',
  sections: [
    {
      id: 'act-p7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Rectangle: A = lw, P = 2l + 2w.

Triangle: A = ½bh.
      `
    },
    {
      id: 'act-p7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Rectangle?',
            options: [
              'Composite figures: break into simple shapes, add/subtract areas.',
              'Circle: A = $\\pi r^{2}$, C = 2πr.',
              'A = lw, P = 2l + 2w.',
              'A = ½bh.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Rectangle: A = lw, P = 2l + 2w. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'A = lw, P = 2l + 2w.',
              'Composite figures: break into simple shapes, add/subtract areas.',
              'Circle: A = $\\pi r^{2}$, C = 2πr.',
              'A = ½bh.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Circle: A = $\\pi r^{2}$, C = 2πr. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-p7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Circle: A = $\\pi r^{2}$, C = 2πr.

**ACT Tip:** Composite figures: break into simple shapes, add/subtract areas.
      `
    },
    {
      id: 'act-p7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'A = ½bh.',
              'Composite figures: break into simple shapes, add/subtract areas.',
              'Circle: A = $\\pi r^{2}$, C = 2πr.',
              'A = lw, P = 2l + 2w.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Composite figures: break into simple shapes, add/subtract areas. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rectangle',
            options: ['Composite figures: break into simple shapes, add/subtract areas.', 'A = ½bh.', 'Circle: A = $\\pi r^{2}$, C = 2πr.', 'A = lw, P = 2l + 2w.']
          },
          {
            label: 'Triangle',
            options: ['Circle: A = $\\pi r^{2}$, C = 2πr.', 'A = ½bh.', 'A = lw, P = 2l + 2w.', 'Composite figures: break into simple shapes, add/subtract areas.']
          },
          {
            label: 'Key Insight',
            options: ['Circle: A = $\\pi r^{2}$, C = 2πr.', 'Composite figures: break into simple shapes, add/subtract areas.', 'A = ½bh.', 'A = lw, P = 2l + 2w.']
          }
        ],
        correctAnswers: ['A = lw, P = 2l + 2w.', 'A = ½bh.', 'Circle: A = $\\pi r^{2}$, C = 2πr.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Rectangle: A = lw, P = 2l + 2w. Triangle: A = ½bh. Key Insight: Circle: A = $\\pi r^{2}$, C = 2πr.'
      }
    }
  ]
}
