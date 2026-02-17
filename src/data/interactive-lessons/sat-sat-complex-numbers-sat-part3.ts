export const satComplexPart3Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-c3-intro',
      type: 'text' as const,
      content: `
# Complex Number Applications

**Part 3 of 7 — Complex Number Applications**

Complex solutions come in conjugate pairs: a + bi and a - bi.

If the discriminant b² - 4ac < 0, the quadratic has complex roots.
      `
    },
    {
      id: 'sat-c3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Complex solutions come in conjugate pairs" refer to in SAT prep?',
            options: [
              'x = (-b ± i√(4ac - b²)) / (2a).',
              'If the discriminant b² - 4ac < 0, the quadratic has complex roots.',
              'Every polynomial of degree n has exactly n roots (counting complex and repeated).',
              'a + bi and a - bi.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Complex solutions come in conjugate pairs: a + bi and a - bi. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Every polynomial of degree n has exactly n roots (counting complex and repeated).',
              'x = (-b ± i√(4ac - b²)) / (2a).',
              'If the discriminant b² - 4ac < 0, the quadratic has complex roots.',
              'a + bi and a - bi.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: x = (-b ± i√(4ac - b²)) / (2a). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-c3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** x = (-b ± i√(4ac - b²)) / (2a).

**SAT Tip:** Every polynomial of degree n has exactly n roots (counting complex and repeated).
      `
    },
    {
      id: 'sat-c3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Complex Number Applications, which correctly describes SAT Tip?',
            options: [
              'x = (-b ± i√(4ac - b²)) / (2a).',
              'Every polynomial of degree n has exactly n roots (counting complex and repeated).',
              'If the discriminant b² - 4ac < 0, the quadratic has complex roots.',
              'a + bi and a - bi.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Every polynomial of degree n has exactly n roots (counting complex and repeated). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-c3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Complex solutions come in conjugate pairs',
            options: ['Every polynomial of degree n has exactly n roots (counting complex and repeated).', 'a + bi and a - bi.', 'If the discriminant b² - 4ac < 0, the quadratic has complex roots.', 'x = (-b ± i√(4ac - b²)) / (2a).']
          },
          {
            label: 'Key Insight',
            options: ['If the discriminant b² - 4ac < 0, the quadratic has complex roots.', 'x = (-b ± i√(4ac - b²)) / (2a).', 'Every polynomial of degree n has exactly n roots (counting complex and repeated).', 'a + bi and a - bi.']
          },
          {
            label: 'SAT Tip',
            options: ['a + bi and a - bi.', 'If the discriminant b² - 4ac < 0, the quadratic has complex roots.', 'Every polynomial of degree n has exactly n roots (counting complex and repeated).', 'x = (-b ± i√(4ac - b²)) / (2a).']
          }
        ],
        correctAnswers: ['a + bi and a - bi.', 'x = (-b ± i√(4ac - b²)) / (2a).', 'Every polynomial of degree n has exactly n roots (counting complex and repeated).'],
        hint1: 'Think about what each concept specifically describes in Complex Number Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Complex Number Applications describes a specific idea. Complex solutions come in conjugate pairs: a + bi and a - bi. Key Insight: x = (-b ± i√(4ac - b²)) / (2a). SAT Tip: Every polynomial of degree n has exactly n roots (counting complex and repeated).'
      }
    }
  ]
}
