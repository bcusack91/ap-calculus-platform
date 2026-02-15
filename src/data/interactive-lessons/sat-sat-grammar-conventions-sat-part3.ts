export const satGrammarPart3Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-g3-intro',
      type: 'text' as const,
      content: `
# Verb Tense & Mood

**Part 3 of 7 — Verb Tense & Mood**

Keep verb tenses consistent within a passage unless there's a time shift.

Past perfect (had + past participle): action completed before another past action.
      `
    },
    {
      id: 'sat-g3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes keep verb tenses consistent within a passage unless there\'s a time shift?',
            options: [
              'Keep verb tenses consistent within a passage unless there\'s a time shift is a fundamental concept in SAT Reading & Writing',
              'Past perfect (had + past participle): action completed before another past action',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Keep verb tenses consistent within a passage unless there\'s a time shift'
          }
        ]
      }
    },
    {
      id: 'sat-g3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Subjunctive mood: "If I were" (contrary to fact), "It is essential that she be present".

**SAT Tip:** SAT loves testing tense consistency and unnecessary tense shifts.
      `
    },
    {
      id: 'sat-g3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for verb tense & mood?',
            options: [
              'Subjunctive mood: "If I were" (contrary to fact), "It is essential that she be present"',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Subjunctive mood: "If I were" (contrary to fact), "It is essential that she be present"'
          }
        ]
      }
    },
    {
      id: 'sat-g3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Verb Tense & Mood:',
            options: ['Keep verb tenses consistent within a passage unles', 'Past perfect (had + past participle): action compl', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Subjunctive mood: "If I were" (contrary to fact), ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Keep verb tenses consistent within a passage unles', 'Subjunctive mood: "If I were" (contrary to fact), '],
        hint1: 'Think about verb tense & mood',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Keep verb tenses consistent within a passage unless there\'s a time shift. Subjunctive mood: "If I were" (contrary to fact), "It is essential that she be present".'
      }
    }
  ]
}
