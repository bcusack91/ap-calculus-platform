export const satGeometryPart6Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'sat-g6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Rectangular prism: V = lwh, SA = 2(lw + lh + wh).

Cylinder: V = πr²h, SA = 2πr² + 2πrh.
      `
    },
    {
      id: 'sat-g6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Rectangular prism?',
            options: [
              'Cone: V = (1/3)πr²h.',
              'V = πr²h, SA = 2πr² + 2πrh.',
              'Sphere: V = (4/3)πr³, SA = 4πr².',
              'V = lwh, SA = 2(lw + lh + wh).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Rectangular prism: V = lwh, SA = 2(lw + lh + wh). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Key Insight?',
            options: [
              'V = πr²h, SA = 2πr² + 2πrh.',
              'Sphere: V = (4/3)πr³, SA = 4πr².',
              'Cone: V = (1/3)πr²h.',
              'V = lwh, SA = 2(lw + lh + wh).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Cone: V = (1/3)πr²h. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-g6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Cone: V = (1/3)πr²h.

**SAT Tip:** Sphere: V = (4/3)πr³, SA = 4πr².
      `
    },
    {
      id: 'sat-g6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes SAT Tip?',
            options: [
              'Sphere: V = (4/3)πr³, SA = 4πr².',
              'V = πr²h, SA = 2πr² + 2πrh.',
              'V = lwh, SA = 2(lw + lh + wh).',
              'Cone: V = (1/3)πr²h.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Sphere: V = (4/3)πr³, SA = 4πr². Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-g6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rectangular prism',
            options: ['V = πr²h, SA = 2πr² + 2πrh.', 'V = lwh, SA = 2(lw + lh + wh).', 'Sphere: V = (4/3)πr³, SA = 4πr².', 'Cone: V = (1/3)πr²h.']
          },
          {
            label: 'Cylinder',
            options: ['V = πr²h, SA = 2πr² + 2πrh.', 'Sphere: V = (4/3)πr³, SA = 4πr².', 'V = lwh, SA = 2(lw + lh + wh).', 'Cone: V = (1/3)πr²h.']
          },
          {
            label: 'Key Insight',
            options: ['V = πr²h, SA = 2πr² + 2πrh.', 'Cone: V = (1/3)πr²h.', 'Sphere: V = (4/3)πr³, SA = 4πr².', 'V = lwh, SA = 2(lw + lh + wh).']
          }
        ],
        correctAnswers: ['V = lwh, SA = 2(lw + lh + wh).', 'V = πr²h, SA = 2πr² + 2πrh.', 'Cone: V = (1/3)πr²h.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Rectangular prism: V = lwh, SA = 2(lw + lh + wh). Cylinder: V = πr²h, SA = 2πr² + 2πrh. Key Insight: Cone: V = (1/3)πr²h.'
      }
    }
  ]
}
