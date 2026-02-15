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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Main Idea & Argument:',
            options: ['The main idea is the central claim the author is making — no', 'Distinguish main idea from supporting details — details supp', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Wrong answers are often too narrow (one detail) or too broad', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['The main idea is the central claim the author is making — no', 'Wrong answers are often too narrow (one detail) or too broad'],
        hint1: 'Think about main idea & argument',
        hint2: 'Consider the MCAT application',
        explanation: 'The main idea is the central claim the author is making — not just the topic. Wrong answers are often too narrow (one detail) or too broad (beyond the passage).'
      }
    }
  ]
}
