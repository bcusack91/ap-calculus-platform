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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Pronouns must agree with antecedents in…" refer to in ACT prep?',
            options: [
              'Its (possessive) vs. it\'s (it is).',
              'Pronouns must agree with antecedents in number, person, and gender.',
              'Avoid ambiguous pronoun references — the reader should know exactly what "it" or "they" refers to.',
              'Who = subject (he/she); Whom = object (him/her).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Pronouns must agree with antecedents in number, person, and gender. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Its (possessive) vs. it\'s (it is).',
              'Pronouns must agree with antecedents in number, person, and gender.',
              'Avoid ambiguous pronoun references — the reader should know exactly what "it" or "they" refers to.',
              'Who = subject (he/she); Whom = object (him/her).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Who = subject (he/she); Whom = object (him/her). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Pronoun Rules, which correctly describes ACT Tip?',
            options: [
              'Who = subject (he/she); Whom = object (him/her).',
              'Its (possessive) vs. it\'s (it is).',
              'Pronouns must agree with antecedents in number, person, and gender.',
              'Avoid ambiguous pronoun references — the reader should know exactly what "it" or "they" refers to.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Its (possessive) vs. it\'s (it is). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Its (possessive) vs. it\'s (it is).', 'Pronouns must agree with antecedents in number, person, and gender.', 'Avoid ambiguous pronoun references — the reader should know exactly what "it" or "they" refers to.', 'Who = subject (he/she); Whom = object (him/her).']
          },
          {
            label: 'ACT Tip',
            options: ['Pronouns must agree with antecedents in number, person, and gender.', 'Who = subject (he/she); Whom = object (him/her).', 'Its (possessive) vs. it\'s (it is).', 'Avoid ambiguous pronoun references — the reader should know exactly what "it" or "they" refers to.']
          }
        ],
        correctAnswers: ['Who = subject (he/she); Whom = object (him/her).', 'Its (possessive) vs. it\'s (it is).'],
        hint1: 'Think about what each concept specifically describes in Pronoun Rules.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Pronoun Rules describes a specific idea. Key Insight: Who = subject (he/she); Whom = object (him/her). ACT Tip: Its (possessive) vs. it\'s (it is).'
      }
    }
  ]
}
