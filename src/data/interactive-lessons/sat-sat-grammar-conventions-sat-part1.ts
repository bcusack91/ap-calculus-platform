export const satGrammarPart1Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-g1-intro',
      type: 'text' as const,
      content: `
# 📝 Grammar Conventions

**Part 1 of 7 — Subject-Verb Agreement**

The subject and verb must agree in number (singular/plural).

Ignore words between the subject and verb (prepositional phrases, appositives).
      `
    },
    {
      id: 'sat-g1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes the subject and verb must agree in number (singular/plural)?',
            options: [
              'The subject and verb must agree in number (singular/plural) is a fundamental concept in SAT Reading & Writing',
              'Ignore words between the subject and verb (prepositional phrases, appositives)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'The subject and verb must agree in number (singular/plural)'
          }
        ]
      }
    },
    {
      id: 'sat-g1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Compound subjects with "and" take plural verbs.

**SAT Tip:** Collective nouns (team, group) are typically singular.
      `
    },
    {
      id: 'sat-g1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for subject-verb agreement?',
            options: [
              'Compound subjects with "and" take plural verbs',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Compound subjects with "and" take plural verbs'
          }
        ]
      }
    },
    {
      id: 'sat-g1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Subject-Verb Agreement:',
            options: ['The subject and verb must agree in number (singula', 'Ignore words between the subject and verb (preposi', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Compound subjects with "and" take plural verbs', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['The subject and verb must agree in number (singula', 'Compound subjects with "and" take plural verbs'],
        hint1: 'Think about subject-verb agreement',
        hint2: 'Consider the best SAT strategy',
        explanation: 'The subject and verb must agree in number (singular/plural). Compound subjects with "and" take plural verbs.'
      }
    }
  ]
}
