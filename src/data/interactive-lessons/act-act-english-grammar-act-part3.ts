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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes keep tenses consistent unless there is a clear time shift?',
            options: [
              'Keep tenses consistent unless there is a clear time shift is a key concept for ACT English/Reading',
              'Past perfect (had + past participle) for events before another past event',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Keep tenses consistent unless there is a clear time shift'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for verb tense?',
            options: [
              'Present perfect (has/have + past participle) for actions continuing to the present',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Present perfect (has/have + past participle) for actions continuing to the present'
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
            label: 'Key concept for Verb Tense:',
            options: ['Keep tenses consistent unless there is a clear tim', 'Past perfect (had + past participle) for events be', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Present perfect (has/have + past participle) for a', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Keep tenses consistent unless there is a clear tim', 'Present perfect (has/have + past participle) for a'],
        hint1: 'Think about verb tense',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Keep tenses consistent unless there is a clear time shift. Present perfect (has/have + past participle) for actions continuing to the present.'
      }
    }
  ]
}
