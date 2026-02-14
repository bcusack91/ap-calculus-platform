export const psychLanguagePart2Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu2-intro',
      type: 'text' as const,
      content: `
# ## Language Theories

**Part 2 of 7 — Language Theories**

### 1. Chomsky

language acquisition device (LAD), universal grammar

### 2. Skinner

language learned through operant conditioning

### 3. Critical period

language learned most easily before puberty

### 4. Whorf's linguistic relativity

language shapes thought
      `
    },
    {
      id: 'langu2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of language theories?',
            options: [
              'Chomsky',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Chomsky: language acquisition device (LAD), universal grammar'
          },
          {
            question: 'In the context of language theories, which is accurate?',
            options: [
              'language learned most easily before puberty',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Critical period: language learned most easily before puberty'
          }
        ]
      }
    },
    {
      id: 'langu2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Chomsky**: language acquisition device (LAD), universal grammar
- **Skinner**: language learned through operant conditioning
- **Critical period**: language learned most easily before puberty
- **Whorf's linguistic relativity**: language shapes thought
      `
    },
    {
      id: 'langu2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to language theories?',
            options: [
              'language shapes thought',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Whorf\'s linguistic relativity: language shapes thought'
          }
        ]
      }
    },
    {
      id: 'langu2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chomsky',
            options: ['language acquisition device (LAD), universal gramm', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Skinner',
            options: ['language learned through operant conditioning', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Critical period',
            options: ['language learned most easily before puberty', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['language acquisition device (LAD), universal gramm', 'language learned through operant conditioning', 'language learned most easily before puberty'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Language Theories.'
      }
    }
  ]
}
