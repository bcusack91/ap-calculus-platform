export const actEnglishStratPart3Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-e3-intro',
      type: 'text' as const,
      content: `
# Reading in Context

**Part 3 of 7 — Reading in Context**

Always read the full sentence, not just the underlined portion.

Read the sentence before and after for context.
      `
    },
    {
      id: 'act-e3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes always read the full sentence, not just the underlined portion?',
            options: [
              'Always read the full sentence, not just the underlined portion is a key concept for ACT English/Reading',
              'Read the sentence before and after for context',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Always read the full sentence, not just the underlined portion'
          }
        ]
      }
    },
    {
      id: 'act-e3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Some questions test transitions between paragraphs — read both.

**ACT Tip:** The correct answer must fit the tone and style of the surrounding text.
      `
    },
    {
      id: 'act-e3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for reading in context?',
            options: [
              'Some questions test transitions between paragraphs — read both',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Some questions test transitions between paragraphs — read both'
          }
        ]
      }
    },
    {
      id: 'act-e3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Reading in Context:',
            options: ['Always read the full sentence, not just the underl', 'Read the sentence before and after for context', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Some questions test transitions between paragraphs', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Always read the full sentence, not just the underl', 'Some questions test transitions between paragraphs'],
        hint1: 'Think about reading in context',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Always read the full sentence, not just the underlined portion. Some questions test transitions between paragraphs — read both.'
      }
    }
  ]
}
