export const actPassageTypesPart2Data = {
  topicSlug: 'act-reading-passage-types-act',
  sections: [
    {
      id: 'act-r2-intro',
      type: 'text' as const,
      content: `
# Social Science

**Part 2 of 7 — Social Science**

Factual, objective passages about psychology, sociology, economics, etc..

Focus on the argument or thesis.
      `
    },
    {
      id: 'act-r2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Factual, objective passages about…" refer to in ACT prep?',
            options: [
              'Questions test comprehension of the author\'s claims and supporting data.',
              'Factual, objective passages about psychology, sociology, economics, etc..',
              'Focus on the argument or thesis.',
              'Look for cause-effect relationships and evidence.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Factual, objective passages about psychology, sociology, economics, etc.. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Focus on the argument or thesis.',
              'Questions test comprehension of the author\'s claims and supporting data.',
              'Factual, objective passages about psychology, sociology, economics, etc..',
              'Look for cause-effect relationships and evidence.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Look for cause-effect relationships and evidence. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Look for cause-effect relationships and evidence.

**ACT Tip:** Questions test comprehension of the author's claims and supporting data.
      `
    },
    {
      id: 'act-r2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Focus on the argument or thesis.',
              'Questions test comprehension of the author\'s claims and supporting data.',
              'Look for cause-effect relationships and evidence.',
              'Factual, objective passages about psychology, sociology, economics, etc..'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Questions test comprehension of the author\'s claims and supporting data. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Look for cause-effect relationships and evidence.', 'Factual, objective passages about psychology, sociology, economics, etc..', 'Questions test comprehension of the author\'s claims and supporting data.', 'Focus on the argument or thesis.']
          },
          {
            label: 'ACT Tip',
            options: ['Factual, objective passages about psychology, sociology, economics, etc..', 'Focus on the argument or thesis.', 'Look for cause-effect relationships and evidence.', 'Questions test comprehension of the author\'s claims and supporting data.']
          }
        ],
        correctAnswers: ['Look for cause-effect relationships and evidence.', 'Questions test comprehension of the author\'s claims and supporting data.'],
        hint1: 'Think about what each concept specifically describes in Social Science.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Social Science describes a specific idea. Key Insight: Look for cause-effect relationships and evidence. ACT Tip: Questions test comprehension of the author\'s claims and supporting data.'
      }
    }
  ]
}
