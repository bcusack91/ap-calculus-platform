export const actEnglishGrammarPart1Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-e1-intro',
      type: 'text' as const,
      content: `
# 📋 English Grammar

**Part 1 of 7 — Subject-Verb Agreement**

Subject and verb must agree in number.

Ignore prepositional phrases between subject and verb.
      `
    },
    {
      id: 'act-e1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes subject and verb must agree in number?',
            options: [
              'Subject and verb must agree in number is a key concept for ACT English/Reading',
              'Ignore prepositional phrases between subject and verb',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Subject and verb must agree in number'
          }
        ]
      }
    },
    {
      id: 'act-e1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Compound subjects with "and" = plural verb.

**ACT Tip:** Collective nouns (team, jury) are usually singular.
      `
    },
    {
      id: 'act-e1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for subject-verb agreement?',
            options: [
              'Compound subjects with "and" = plural verb',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Compound subjects with "and" = plural verb'
          }
        ]
      }
    },
    {
      id: 'act-e1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Subject-Verb Agreement:',
            options: ['Subject and verb must agree in number', 'Ignore prepositional phrases between subject and v', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Compound subjects with "and" = plural verb', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Subject and verb must agree in number', 'Compound subjects with "and" = plural verb'],
        hint1: 'Think about subject-verb agreement',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Subject and verb must agree in number. Compound subjects with "and" = plural verb.'
      }
    }
  ]
}
