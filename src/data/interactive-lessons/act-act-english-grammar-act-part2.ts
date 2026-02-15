export const actEnglishGrammarPart2Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-e2-intro',
      type: 'text' as const,
      content: `
# Pronoun Rules

**Part 2 of 7 — Pronoun Rules**

Pronouns must agree with antecedents in number, person, and gender.

Avoid ambiguous pronoun references — the reader should know exactly what "it" or "they" refers to.
      `
    },
    {
      id: 'act-e2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes pronouns must agree with antecedents in number, person, and gender?',
            options: [
              'Pronouns must agree with antecedents in number, person, and gender is a key concept for ACT English/Reading',
              'Avoid ambiguous pronoun references — the reader should know exactly what "it" or "they" refers to',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Pronouns must agree with antecedents in number, person, and gender'
          }
        ]
      }
    },
    {
      id: 'act-e2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Who = subject (he/she); Whom = object (him/her).

**ACT Tip:** Its (possessive) vs. it's (it is).
      `
    },
    {
      id: 'act-e2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for pronoun rules?',
            options: [
              'Who = subject (he/she); Whom = object (him/her)',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Who = subject (he/she); Whom = object (him/her)'
          }
        ]
      }
    },
    {
      id: 'act-e2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Pronoun Rules:',
            options: ['Pronouns must agree with antecedents in number, pe', 'Avoid ambiguous pronoun references — the reader sh', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Who = subject (he/she); Whom = object (him/her)', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Pronouns must agree with antecedents in number, pe', 'Who = subject (he/she); Whom = object (him/her)'],
        hint1: 'Think about pronoun rules',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Pronouns must agree with antecedents in number, person, and gender. Who = subject (he/she); Whom = object (him/her).'
      }
    }
  ]
}
