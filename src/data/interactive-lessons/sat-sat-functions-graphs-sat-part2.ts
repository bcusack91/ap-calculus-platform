export const satFunctionsPart2Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-f2-intro',
      type: 'text' as const,
      content: `
# Domain and Range

**Part 2 of 7 — Domain and Range**

Domain: all possible input (x) values.

Range: all possible output (y) values.
      `
    },
    {
      id: 'sat-f2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Domain?',
            options: [
              'Restrictions: no division by zero, no square root of negatives (for reals).',
              'From a graph: domain is the horizontal extent, range is the vertical extent.',
              'all possible input (x) values.',
              'all possible output (y) values.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Domain: all possible input (x) values. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Restrictions: no division by zero, no square root of negatives (for reals).',
              'all possible output (y) values.',
              'From a graph: domain is the horizontal extent, range is the vertical extent.',
              'all possible input (x) values.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Restrictions: no division by zero, no square root of negatives (for reals). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-f2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Restrictions: no division by zero, no square root of negatives (for reals).

**SAT Tip:** From a graph: domain is the horizontal extent, range is the vertical extent.
      `
    },
    {
      id: 'sat-f2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Domain and Range, which correctly describes SAT Tip?',
            options: [
              'Restrictions: no division by zero, no square root of negatives (for reals).',
              'all possible input (x) values.',
              'all possible output (y) values.',
              'From a graph: domain is the horizontal extent, range is the vertical extent.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: From a graph: domain is the horizontal extent, range is the vertical extent. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-f2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Domain',
            options: ['all possible output (y) values.', 'all possible input (x) values.', 'Restrictions: no division by zero, no square root of negatives (for reals).', 'From a graph: domain is the horizontal extent, range is the vertical extent.']
          },
          {
            label: 'Range',
            options: ['all possible input (x) values.', 'all possible output (y) values.', 'From a graph: domain is the horizontal extent, range is the vertical extent.', 'Restrictions: no division by zero, no square root of negatives (for reals).']
          },
          {
            label: 'Key Insight',
            options: ['From a graph: domain is the horizontal extent, range is the vertical extent.', 'Restrictions: no division by zero, no square root of negatives (for reals).', 'all possible input (x) values.', 'all possible output (y) values.']
          }
        ],
        correctAnswers: ['all possible input (x) values.', 'all possible output (y) values.', 'Restrictions: no division by zero, no square root of negatives (for reals).'],
        hint1: 'Think about what each concept specifically describes in Domain and Range.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Domain and Range describes a specific idea. Domain: all possible input (x) values. Range: all possible output (y) values. Key Insight: Restrictions: no division by zero, no square root of negatives (for reals).'
      }
    }
  ]
}
