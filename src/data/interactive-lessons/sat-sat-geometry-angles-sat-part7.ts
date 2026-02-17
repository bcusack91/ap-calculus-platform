export const satGeometryPart7Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'sat-g7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Rectangular prism: V = lwh, SA = 2(lw + lh + wh).

Cylinder: V = πr²h, SA = 2πr² + 2πrh.
      `
    },
    {
      id: 'sat-g7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Rectangular prism?',
            options: [
              'V = lwh, SA = 2(lw + lh + wh).',
              'Sphere: V = (4/3)πr³, SA = 4πr².',
              'V = πr²h, SA = 2πr² + 2πrh.',
              'Cone: V = (1/3)πr²h.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Rectangular prism: V = lwh, SA = 2(lw + lh + wh). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains Key Insight?',
            options: [
              'Cone: V = (1/3)πr²h.',
              'V = πr²h, SA = 2πr² + 2πrh.',
              'V = lwh, SA = 2(lw + lh + wh).',
              'Sphere: V = (4/3)πr³, SA = 4πr².'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Cone: V = (1/3)πr²h. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-g7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Cone: V = (1/3)πr²h.

**SAT Tip:** Sphere: V = (4/3)πr³, SA = 4πr².
      `
    },
    {
      id: 'sat-g7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'V = πr²h, SA = 2πr² + 2πrh.',
              'Cone: V = (1/3)πr²h.',
              'V = lwh, SA = 2(lw + lh + wh).',
              'Sphere: V = (4/3)πr³, SA = 4πr².'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Sphere: V = (4/3)πr³, SA = 4πr². Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-g7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rectangular prism',
            options: ['V = πr²h, SA = 2πr² + 2πrh.', 'Sphere: V = (4/3)πr³, SA = 4πr².', 'Cone: V = (1/3)πr²h.', 'V = lwh, SA = 2(lw + lh + wh).']
          },
          {
            label: 'Cylinder',
            options: ['Cone: V = (1/3)πr²h.', 'V = lwh, SA = 2(lw + lh + wh).', 'Sphere: V = (4/3)πr³, SA = 4πr².', 'V = πr²h, SA = 2πr² + 2πrh.']
          },
          {
            label: 'Key Insight',
            options: ['Sphere: V = (4/3)πr³, SA = 4πr².', 'V = lwh, SA = 2(lw + lh + wh).', 'Cone: V = (1/3)πr²h.', 'V = πr²h, SA = 2πr² + 2πrh.']
          }
        ],
        correctAnswers: ['V = lwh, SA = 2(lw + lh + wh).', 'V = πr²h, SA = 2πr² + 2πrh.', 'Cone: V = (1/3)πr²h.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Rectangular prism: V = lwh, SA = 2(lw + lh + wh). Cylinder: V = πr²h, SA = 2πr² + 2πrh. Key Insight: Cone: V = (1/3)πr²h.'
      }
    }
  ]
}
