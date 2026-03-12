export const actPlaneGeomPart5Data = {
  topicSlug: 'act-plane-geometry-act',
  sections: [
    {
      id: 'act-p5-intro',
      type: 'text' as const,
      content: `
# Area & Perimeter

**Part 5 of 7 — Area & Perimeter**

Rectangle: A = lw, P = 2l + 2w.

Triangle: A = ½bh.
      `
    },
    {
      id: 'act-p5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Rectangle?',
            options: [
              'Circle: A = πr², C = 2πr.',
              'A = ½bh.',
              'Composite figures: break into simple shapes, add/subtract areas.',
              'A = lw, P = 2l + 2w.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Rectangle: A = lw, P = 2l + 2w. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'A = ½bh.',
              'A = lw, P = 2l + 2w.',
              'Circle: A = πr², C = 2πr.',
              'Composite figures: break into simple shapes, add/subtract areas.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Circle: A = πr², C = 2πr. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-p5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Circle: A = πr², C = 2πr.

**ACT Tip:** Composite figures: break into simple shapes, add/subtract areas.
      `
    },
    {
      id: 'act-p5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Composite figures: break into simple shapes, add/subtract areas.',
              'A = ½bh.',
              'Circle: A = πr², C = 2πr.',
              'A = lw, P = 2l + 2w.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Composite figures: break into simple shapes, add/subtract areas. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rectangle',
            options: ['A = ½bh.', 'A = lw, P = 2l + 2w.', 'Circle: A = πr², C = 2πr.', 'Composite figures: break into simple shapes, add/subtract areas.']
          },
          {
            label: 'Triangle',
            options: ['Composite figures: break into simple shapes, add/subtract areas.', 'A = ½bh.', 'A = lw, P = 2l + 2w.', 'Circle: A = πr², C = 2πr.']
          },
          {
            label: 'Key Insight',
            options: ['A = lw, P = 2l + 2w.', 'Composite figures: break into simple shapes, add/subtract areas.', 'A = ½bh.', 'Circle: A = πr², C = 2πr.']
          }
        ],
        correctAnswers: ['A = lw, P = 2l + 2w.', 'A = ½bh.', 'Circle: A = πr², C = 2πr.'],
        hint1: 'Think about what each concept specifically describes in Area & Perimeter.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Area & Perimeter describes a specific idea. Rectangle: A = lw, P = 2l + 2w. Triangle: A = ½bh. Key Insight: Circle: A = πr², C = 2πr.'
      }
    }
  ]
}
