export const actRhetoricalPart4Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-e4-intro',
      type: 'text' as const,
      content: `
# Conciseness

**Part 4 of 7 — Conciseness**

Eliminate wordiness and redundancy.

"In order to" → "to"; "the reason is because" → "because".
      `
    },
    {
      id: 'act-e4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Eliminate wordiness and redundancy." refer to in ACT prep?',
            options: [
              'Eliminate wordiness and redundancy.',
              'If two choices say the same thing, pick the shorter one.',
              'OMIT is often the correct answer when a phrase adds nothing new.',
              '"In order to" → "to"; "the reason is because" → "because".'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Eliminate wordiness and redundancy. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Conciseness, which explains Key Insight?',
            options: [
              'Eliminate wordiness and redundancy.',
              '"In order to" → "to"; "the reason is because" → "because".',
              'OMIT is often the correct answer when a phrase adds nothing new.',
              'If two choices say the same thing, pick the shorter one.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: If two choices say the same thing, pick the shorter one. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** If two choices say the same thing, pick the shorter one.

**ACT Tip:** OMIT is often the correct answer when a phrase adds nothing new.
      `
    },
    {
      id: 'act-e4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Eliminate wordiness and redundancy.',
              'If two choices say the same thing, pick the shorter one.',
              'OMIT is often the correct answer when a phrase adds nothing new.',
              '"In order to" → "to"; "the reason is because" → "because".'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: OMIT is often the correct answer when a phrase adds nothing new. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['OMIT is often the correct answer when a phrase adds nothing new.', 'Eliminate wordiness and redundancy.', '"In order to" → "to"; "the reason is because" → "because".', 'If two choices say the same thing, pick the shorter one.']
          },
          {
            label: 'ACT Tip',
            options: ['Eliminate wordiness and redundancy.', 'OMIT is often the correct answer when a phrase adds nothing new.', 'If two choices say the same thing, pick the shorter one.', '"In order to" → "to"; "the reason is because" → "because".']
          }
        ],
        correctAnswers: ['If two choices say the same thing, pick the shorter one.', 'OMIT is often the correct answer when a phrase adds nothing new.'],
        hint1: 'Think about what each concept specifically describes in Conciseness.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Conciseness describes a specific idea. Key Insight: If two choices say the same thing, pick the shorter one. ACT Tip: OMIT is often the correct answer when a phrase adds nothing new.'
      }
    }
  ]
}
