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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Pronouns must agree with antecedents in…?',
            options: [
              'Pronouns must agree with antecedents in number and gender.',
              'Its vs. it\'s: its = possessive, it\'s = it is/it has.',
              'Who/whom: who = subject, whom = object (try replacing with he/him).',
              'unclear which noun the pronoun refers to.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Pronouns must agree with antecedents in number and gender. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Pronouns must agree with antecedents in number and gender.',
              'Who/whom: who = subject, whom = object (try replacing with he/him).',
              'Its vs. it\'s: its = possessive, it\'s = it is/it has.',
              'unclear which noun the pronoun refers to.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Who/whom: who = subject, whom = object (try replacing with he/him). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Its vs. it\'s: its = possessive, it\'s = it is/it has.',
              'Who/whom: who = subject, whom = object (try replacing with he/him).',
              'unclear which noun the pronoun refers to.',
              'Pronouns must agree with antecedents in number and gender.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Its vs. it\'s: its = possessive, it\'s = it is/it has. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-g2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ambiguous pronoun reference',
            options: ['Who/whom: who = subject, whom = object (try replacing with he/him).', 'unclear which noun the pronoun refers to.', 'Its vs. it\'s: its = possessive, it\'s = it is/it has.', 'Pronouns must agree with antecedents in number and gender.']
          },
          {
            label: 'Key Insight',
            options: ['Who/whom: who = subject, whom = object (try replacing with he/him).', 'unclear which noun the pronoun refers to.', 'Its vs. it\'s: its = possessive, it\'s = it is/it has.', 'Pronouns must agree with antecedents in number and gender.']
          },
          {
            label: 'SAT Tip',
            options: ['Pronouns must agree with antecedents in number and gender.', 'Who/whom: who = subject, whom = object (try replacing with he/him).', 'Its vs. it\'s: its = possessive, it\'s = it is/it has.', 'unclear which noun the pronoun refers to.']
          }
        ],
        correctAnswers: ['unclear which noun the pronoun refers to.', 'Who/whom: who = subject, whom = object (try replacing with he/him).', 'Its vs. it\'s: its = possessive, it\'s = it is/it has.'],
        hint1: 'Think about what each concept specifically describes in Pronoun Usage.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Pronoun Usage describes a specific idea. Ambiguous pronoun reference: unclear which noun the pronoun refers to. Key Insight: Who/whom: who = subject, whom = object (try replacing with he/him). SAT Tip: Its vs. it\'s: its = possessive, it\'s = it is/it has.'
      }
    }
  ]
}
