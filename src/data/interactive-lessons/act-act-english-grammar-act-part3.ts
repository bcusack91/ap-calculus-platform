export const actEnglishGrammarPart3Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-e3-intro',
      type: 'text' as const,
      content: `
# Verb Tense

**Part 3 of 7 — Verb Tense**

Keep tenses consistent unless there is a clear time shift.

Past perfect (had + past participle) for events before another past event.
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
            question: 'What does "Keep tenses consistent unless there is…" refer to in ACT prep?',
            options: [
              'Past perfect (had + past participle) for events before another past event.',
              'Context clues: time words like "yesterday," "since," "by next year".',
              'Keep tenses consistent unless there is a clear time shift.',
              'Present perfect (has/have + past participle) for actions continuing to the present.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Keep tenses consistent unless there is a clear time shift. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Past perfect (had + past participle) for events before another past event.',
              'Context clues: time words like "yesterday," "since," "by next year".',
              'Keep tenses consistent unless there is a clear time shift.',
              'Present perfect (has/have + past participle) for actions continuing to the present.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Present perfect (has/have + past participle) for actions continuing to the present. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Present perfect (has/have + past participle) for actions continuing to the present.

**ACT Tip:** Context clues: time words like "yesterday," "since," "by next year".
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
              'Keep tenses consistent unless there is a clear time shift.',
              'Context clues: time words like "yesterday," "since," "by next year".',
              'Past perfect (had + past participle) for events before another past event.',
              'Present perfect (has/have + past participle) for actions continuing to the present.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Context clues: time words like "yesterday," "since," "by next year". Each option describes a real concept from this topic, so pay attention to the specific details.'
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
            options: ['Present perfect (has/have + past participle) for actions continuing to the present.', 'Context clues: time words like "yesterday," "since," "by next year".', 'Past perfect (had + past participle) for events before another past event.', 'Keep tenses consistent unless there is a clear time shift.']
          },
          {
            label: 'ACT Tip',
            options: ['Past perfect (had + past participle) for events before another past event.', 'Context clues: time words like "yesterday," "since," "by next year".', 'Keep tenses consistent unless there is a clear time shift.', 'Present perfect (has/have + past participle) for actions continuing to the present.']
          }
        ],
        correctAnswers: ['Present perfect (has/have + past participle) for actions continuing to the present.', 'Context clues: time words like "yesterday," "since," "by next year".'],
        hint1: 'Think about what each concept specifically describes in Verb Tense.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Verb Tense describes a specific idea. Key Insight: Present perfect (has/have + past participle) for actions continuing to the present. ACT Tip: Context clues: time words like "yesterday," "since," "by next year".'
      }
    }
  ]
}
