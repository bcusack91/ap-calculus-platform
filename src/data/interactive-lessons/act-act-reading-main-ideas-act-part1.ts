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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Main idea = the central point or…?',
            options: [
              'Every paragraph should relate back to the main idea.',
              'Check the first and last paragraphs — they often state or reinforce the main idea.',
              'Eliminate answers that are too specific (a detail) or too broad (beyond the passage).',
              'Main idea = the central point or argument of the passage.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Main idea = the central point or argument of the passage. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Check the first and last paragraphs — they often state or reinforce the main idea.',
              'Main idea = the central point or argument of the passage.',
              'Every paragraph should relate back to the main idea.',
              'Eliminate answers that are too specific (a detail) or too broad (beyond the passage).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Eliminate answers that are too specific (a detail) or too broad (beyond the passage). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Main idea = the central point or argument of the passage.',
              'Check the first and last paragraphs — they often state or reinforce the main idea.',
              'Every paragraph should relate back to the main idea.',
              'Eliminate answers that are too specific (a detail) or too broad (beyond the passage).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Every paragraph should relate back to the main idea. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Eliminate answers that are too specific (a detail) or too broad (beyond the passage).', 'Every paragraph should relate back to the main idea.', 'Main idea = the central point or argument of the passage.', 'Check the first and last paragraphs — they often state or reinforce the main idea.']
          },
          {
            label: 'ACT Tip',
            options: ['Every paragraph should relate back to the main idea.', 'Eliminate answers that are too specific (a detail) or too broad (beyond the passage).', 'Check the first and last paragraphs — they often state or reinforce the main idea.', 'Main idea = the central point or argument of the passage.']
          }
        ],
        correctAnswers: ['Eliminate answers that are too specific (a detail) or too broad (beyond the passage).', 'Every paragraph should relate back to the main idea.'],
        hint1: 'Think about what each concept specifically describes in Reading Main Ideas.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Reading Main Ideas describes a specific idea. Key Insight: Eliminate answers that are too specific (a detail) or too broad (beyond the passage). ACT Tip: Every paragraph should relate back to the main idea.'
      }
    }
  ]
}
