export const actPlaneGeomPart6Data = {
  topicSlug: 'act-plane-geometry-act',
  sections: [
    {
      id: 'act-p6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Rectangle: A = lw, P = 2l + 2w.

Triangle: A = ½bh.
      `
    },
    {
      id: 'act-p6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Rectangle?',
            options: [
              'A = lw, P = 2l + 2w.',
              'A = ½bh.',
              'Circle: A = $\\pi r^{2}$, C = 2πr.',
              'Composite figures: break into simple shapes, add/subtract areas.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Rectangle: A = lw, P = 2l + 2w. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Composite figures: break into simple shapes, add/subtract areas.',
              'Circle: A = $\\pi r^{2}$, C = 2πr.',
              'A = lw, P = 2l + 2w.',
              'A = ½bh.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Circle: A = $\\pi r^{2}$, C = 2πr. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-p6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Circle: A = $\\pi r^{2}$, C = 2πr.

**ACT Tip:** Composite figures: break into simple shapes, add/subtract areas.
      `
    },
    {
      id: 'act-p6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes ACT Tip?',
            options: [
              'A = ½bh.',
              'A = lw, P = 2l + 2w.',
              'Circle: A = $\\pi r^{2}$, C = 2πr.',
              'Composite figures: break into simple shapes, add/subtract areas.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Composite figures: break into simple shapes, add/subtract areas. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rectangle',
            options: ['A = ½bh.', 'Composite figures: break into simple shapes, add/subtract areas.', 'A = lw, P = 2l + 2w.', 'Circle: A = $\\pi r^{2}$, C = 2πr.']
          },
          {
            label: 'Triangle',
            options: ['Composite figures: break into simple shapes, add/subtract areas.', 'Circle: A = $\\pi r^{2}$, C = 2πr.', 'A = ½bh.', 'A = lw, P = 2l + 2w.']
          },
          {
            label: 'Key Insight',
            options: ['Composite figures: break into simple shapes, add/subtract areas.', 'A = lw, P = 2l + 2w.', 'Circle: A = $\\pi r^{2}$, C = 2πr.', 'A = ½bh.']
          }
        ],
        correctAnswers: ['A = lw, P = 2l + 2w.', 'A = ½bh.', 'Circle: A = $\\pi r^{2}$, C = 2πr.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Rectangle: A = lw, P = 2l + 2w. Triangle: A = ½bh. Key Insight: Circle: A = $\\pi r^{2}$, C = 2πr.'
      }
    }
  ]
}
