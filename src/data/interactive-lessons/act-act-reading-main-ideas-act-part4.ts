export const actReadingMainPart4Data = {
  topicSlug: 'act-reading-main-ideas-act',
  sections: [
    {
      id: 'act-r4-intro',
      type: 'text' as const,
      content: `
# Author Purpose

**Part 4 of 7 — Author Purpose**

Why did the author write this passage? (inform, persuade, entertain, describe).

Tone: positive, negative, neutral, critical, humorous, nostalgic, etc..
      `
    },
    {
      id: 'act-r4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Why did the author write this passage?…?',
            options: [
              'Why did the author write this passage? (inform, persuade, entertain, describe).',
              'Author\'s purpose affects how information is presented.',
              'positive, negative, neutral, critical, humorous, nostalgic, etc..',
              'Look at word choice (diction) for clues about attitude.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Why did the author write this passage? (inform, persuade, entertain, describe). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Why did the author write this passage? (inform, persuade, entertain, describe).',
              'Look at word choice (diction) for clues about attitude.',
              'Author\'s purpose affects how information is presented.',
              'positive, negative, neutral, critical, humorous, nostalgic, etc..'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Look at word choice (diction) for clues about attitude. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Look at word choice (diction) for clues about attitude.

**ACT Tip:** Author's purpose affects how information is presented.
      `
    },
    {
      id: 'act-r4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'positive, negative, neutral, critical, humorous, nostalgic, etc..',
              'Look at word choice (diction) for clues about attitude.',
              'Author\'s purpose affects how information is presented.',
              'Why did the author write this passage? (inform, persuade, entertain, describe).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Author\'s purpose affects how information is presented. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Tone',
            options: ['Author\'s purpose affects how information is presented.', 'positive, negative, neutral, critical, humorous, nostalgic, etc..', 'Why did the author write this passage? (inform, persuade, entertain, describe).', 'Look at word choice (diction) for clues about attitude.']
          },
          {
            label: 'Key Insight',
            options: ['Look at word choice (diction) for clues about attitude.', 'Author\'s purpose affects how information is presented.', 'positive, negative, neutral, critical, humorous, nostalgic, etc..', 'Why did the author write this passage? (inform, persuade, entertain, describe).']
          },
          {
            label: 'ACT Tip',
            options: ['Look at word choice (diction) for clues about attitude.', 'Why did the author write this passage? (inform, persuade, entertain, describe).', 'positive, negative, neutral, critical, humorous, nostalgic, etc..', 'Author\'s purpose affects how information is presented.']
          }
        ],
        correctAnswers: ['positive, negative, neutral, critical, humorous, nostalgic, etc..', 'Look at word choice (diction) for clues about attitude.', 'Author\'s purpose affects how information is presented.'],
        hint1: 'Think about what each concept specifically describes in Author Purpose.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Author Purpose describes a specific idea. Tone: positive, negative, neutral, critical, humorous, nostalgic, etc.. Key Insight: Look at word choice (diction) for clues about attitude. ACT Tip: Author\'s purpose affects how information is presented.'
      }
    }
  ]
}
