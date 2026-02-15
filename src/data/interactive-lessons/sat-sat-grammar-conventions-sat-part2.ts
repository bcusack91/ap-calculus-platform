export const satGrammarPart2Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-g2-intro',
      type: 'text' as const,
      content: `
# Pronoun Usage

**Part 2 of 7 — Pronoun Usage**

Pronouns must agree with antecedents in number and gender.

Ambiguous pronoun reference: unclear which noun the pronoun refers to.
      `
    },
    {
      id: 'sat-g2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes pronouns must agree with antecedents in number and gender?',
            options: [
              'Pronouns must agree with antecedents in number and gender is a fundamental concept in SAT Reading & Writing',
              'Ambiguous pronoun reference: unclear which noun the pronoun refers to',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Pronouns must agree with antecedents in number and gender'
          }
        ]
      }
    },
    {
      id: 'sat-g2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Who/whom: who = subject, whom = object (try replacing with he/him).

**SAT Tip:** Its vs. it's: its = possessive, it's = it is/it has.
      `
    },
    {
      id: 'sat-g2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for pronoun usage?',
            options: [
              'Who/whom: who = subject, whom = object (try replacing with he/him)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Who/whom: who = subject, whom = object (try replacing with he/him)'
          }
        ]
      }
    },
    {
      id: 'sat-g2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Pronoun Usage:',
            options: ['Pronouns must agree with antecedents in number and', 'Ambiguous pronoun reference: unclear which noun th', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Who/whom: who = subject, whom = object (try replac', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Pronouns must agree with antecedents in number and', 'Who/whom: who = subject, whom = object (try replac'],
        hint1: 'Think about pronoun usage',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Pronouns must agree with antecedents in number and gender. Who/whom: who = subject, whom = object (try replacing with he/him).'
      }
    }
  ]
}
