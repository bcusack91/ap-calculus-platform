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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Always read the full sentence, not just…?',
            options: [
              'Some questions test transitions between paragraphs — read both.',
              'Read the sentence before and after for context.',
              'Always read the full sentence, not just the underlined portion.',
              'The correct answer must fit the tone and style of the surrounding text.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Always read the full sentence, not just the underlined portion. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Some questions test transitions between paragraphs — read both.',
              'The correct answer must fit the tone and style of the surrounding text.',
              'Read the sentence before and after for context.',
              'Always read the full sentence, not just the underlined portion.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Some questions test transitions between paragraphs — read both. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Some questions test transitions between paragraphs — read both.',
              'The correct answer must fit the tone and style of the surrounding text.',
              'Read the sentence before and after for context.',
              'Always read the full sentence, not just the underlined portion.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: The correct answer must fit the tone and style of the surrounding text. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['The correct answer must fit the tone and style of the surrounding text.', 'Read the sentence before and after for context.', 'Some questions test transitions between paragraphs — read both.', 'Always read the full sentence, not just the underlined portion.']
          },
          {
            label: 'ACT Tip',
            options: ['Some questions test transitions between paragraphs — read both.', 'The correct answer must fit the tone and style of the surrounding text.', 'Read the sentence before and after for context.', 'Always read the full sentence, not just the underlined portion.']
          }
        ],
        correctAnswers: ['Some questions test transitions between paragraphs — read both.', 'The correct answer must fit the tone and style of the surrounding text.'],
        hint1: 'Think about what each concept specifically describes in Reading in Context.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Reading in Context describes a specific idea. Key Insight: Some questions test transitions between paragraphs — read both. ACT Tip: The correct answer must fit the tone and style of the surrounding text.'
      }
    }
  ]
}
