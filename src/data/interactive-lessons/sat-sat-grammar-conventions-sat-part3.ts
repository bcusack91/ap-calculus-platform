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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Keep verb tenses consistent within a…?',
            options: [
              'Subjunctive mood: "If I were" (contrary to fact), "It is essential that she be present".',
              'action completed before another past action.',
              'Keep verb tenses consistent within a passage unless there\'s a time shift.',
              'SAT loves testing tense consistency and unnecessary tense shifts.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Keep verb tenses consistent within a passage unless there\'s a time shift. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'SAT loves testing tense consistency and unnecessary tense shifts.',
              'action completed before another past action.',
              'Subjunctive mood: "If I were" (contrary to fact), "It is essential that she be present".',
              'Keep verb tenses consistent within a passage unless there\'s a time shift.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Subjunctive mood: "If I were" (contrary to fact), "It is essential that she be present". Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Verb Tense & Mood, which correctly describes SAT Tip?',
            options: [
              'SAT loves testing tense consistency and unnecessary tense shifts.',
              'Subjunctive mood: "If I were" (contrary to fact), "It is essential that she be present".',
              'action completed before another past action.',
              'Keep verb tenses consistent within a passage unless there\'s a time shift.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: SAT loves testing tense consistency and unnecessary tense shifts. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-g3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Past perfect (had + past participle)',
            options: ['Keep verb tenses consistent within a passage unless there\'s a time shift.', 'Subjunctive mood: "If I were" (contrary to fact), "It is essential that she be present".', 'SAT loves testing tense consistency and unnecessary tense shifts.', 'action completed before another past action.']
          },
          {
            label: 'Key Insight',
            options: ['Keep verb tenses consistent within a passage unless there\'s a time shift.', 'SAT loves testing tense consistency and unnecessary tense shifts.', 'action completed before another past action.', 'Subjunctive mood: "If I were" (contrary to fact), "It is essential that she be present".']
          },
          {
            label: 'SAT Tip',
            options: ['SAT loves testing tense consistency and unnecessary tense shifts.', 'action completed before another past action.', 'Keep verb tenses consistent within a passage unless there\'s a time shift.', 'Subjunctive mood: "If I were" (contrary to fact), "It is essential that she be present".']
          }
        ],
        correctAnswers: ['action completed before another past action.', 'Subjunctive mood: "If I were" (contrary to fact), "It is essential that she be present".', 'SAT loves testing tense consistency and unnecessary tense shifts.'],
        hint1: 'Think about what each concept specifically describes in Verb Tense & Mood.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Verb Tense & Mood describes a specific idea. Past perfect (had + past participle): action completed before another past action. Key Insight: Subjunctive mood: "If I were" (contrary to fact), "It is essential that she be present". SAT Tip: SAT loves testing tense consistency and unnecessary tense shifts.'
      }
    }
  ]
}
