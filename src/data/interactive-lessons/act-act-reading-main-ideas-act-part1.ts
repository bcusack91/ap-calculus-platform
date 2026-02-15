export const actReadingMainPart1Data = {
  topicSlug: 'act-reading-main-ideas-act',
  sections: [
    {
      id: 'act-r1-intro',
      type: 'text' as const,
      content: `
# 📋 Reading Main Ideas

**Part 1 of 7 — Finding the Main Idea**

Main idea = the central point or argument of the passage.

Check the first and last paragraphs — they often state or reinforce the main idea.
      `
    },
    {
      id: 'act-r1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes main idea = the central point or argument of the passage?',
            options: [
              'Main idea = the central point or argument of the passage is a key concept for ACT English/Reading',
              'Check the first and last paragraphs — they often state or reinforce the main idea',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Main idea = the central point or argument of the passage'
          }
        ]
      }
    },
    {
      id: 'act-r1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Eliminate answers that are too specific (a detail) or too broad (beyond the passage).

**ACT Tip:** Every paragraph should relate back to the main idea.
      `
    },
    {
      id: 'act-r1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for finding the main idea?',
            options: [
              'Eliminate answers that are too specific (a detail) or too broad (beyond the passage)',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Eliminate answers that are too specific (a detail) or too broad (beyond the passage)'
          }
        ]
      }
    },
    {
      id: 'act-r1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Finding the Main Idea:',
            options: ['Main idea = the central point or argument of the p', 'Check the first and last paragraphs — they often s', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Eliminate answers that are too specific (a detail)', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Main idea = the central point or argument of the p', 'Eliminate answers that are too specific (a detail)'],
        hint1: 'Think about finding the main idea',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Main idea = the central point or argument of the passage. Eliminate answers that are too specific (a detail) or too broad (beyond the passage).'
      }
    }
  ]
}
