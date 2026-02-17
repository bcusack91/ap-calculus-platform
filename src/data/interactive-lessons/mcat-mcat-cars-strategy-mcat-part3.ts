export const mcatCarsStratPart3Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Main Idea & Argument

**Part 3 of 7 — Main Idea & Argument**

The main idea is the central claim the author is making — not just the topic.

Distinguish main idea from supporting details — details support the main idea.
      `
    },
    {
      id: 'mcat-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in main idea & argument?',
            options: [
              'The main idea is the central claim the author is making — not just the topic',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'The main idea is the central claim the author is making — not just the topic'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Wrong answers are often too narrow (one detail) or too broad (beyond the passage).

**MCAT Tip:** The thesis is usually in the first or last paragraph — but not always.
      `
    },
    {
      id: 'mcat-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to main idea & argument?',
            options: [
              'Wrong answers are often too narrow (one detail) or too broad (beyond the passage)',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Wrong answers are often too narrow (one detail) or too broad (beyond the passage)'
          }
        ]
      }
    },
    {
      id: 'mcat-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['The thesis is usually in the first or last paragraph — but not always.', 'The main idea is the central claim the author is making — not just the topic.', 'Distinguish main idea from supporting details — details support the main idea.', 'Wrong answers are often too narrow (one detail) or too broad (beyond the passage).']
          },
          {
            label: 'MCAT Tip',
            options: ['The main idea is the central claim the author is making — not just the topic.', 'Wrong answers are often too narrow (one detail) or too broad (beyond the passage).', 'The thesis is usually in the first or last paragraph — but not always.', 'Distinguish main idea from supporting details — details support the main idea.']
          }
        ],
        correctAnswers: ['Wrong answers are often too narrow (one detail) or too broad (beyond the passage).', 'The thesis is usually in the first or last paragraph — but not always.'],
        hint1: 'Think about what each concept specifically describes in Main Idea & Argument.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Main Idea & Argument describes a specific idea. Key Insight: Wrong answers are often too narrow (one detail) or too broad (beyond the passage). MCAT Tip: The thesis is usually in the first or last paragraph — but not always.'
      }
    }
  ]
}
