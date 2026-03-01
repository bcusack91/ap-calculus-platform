export const psychLanguagePart2Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu2-intro',
      type: 'text' as const,
      content: `
## Language Theories

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Chomsky?',
            options: [
              'language learned most easily before puberty',
              'language shapes thought',
              'language acquisition device (LAD), universal grammar',
              'language learned through operant conditioning'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Chomsky: language acquisition device (LAD), universal grammar. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Critical period?',
            options: [
              'language learned through operant conditioning',
              'language shapes thought',
              'language learned most easily before puberty',
              'language acquisition device (LAD), universal grammar'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Critical period: language learned most easily before puberty. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'langu2-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chomsky',
            options: ['language learned through operant conditioning', 'language acquisition device (LAD), universal grammar', 'language shapes thought', 'language learned most easily before puberty']
          },
          {
            label: 'Skinner',
            options: ['language acquisition device (LAD), universal grammar', 'language learned most easily before puberty', 'language shapes thought', 'language learned through operant conditioning']
          },
          {
            label: 'Critical period',
            options: ['language shapes thought', 'language learned most easily before puberty', 'language learned through operant conditioning', 'language acquisition device (LAD), universal grammar']
          }
        ],
        correctAnswers: ['language acquisition device (LAD), universal grammar', 'language learned through operant conditioning', 'language learned most easily before puberty'],
        hint1: 'Think about what each concept specifically describes in Language Theories.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Language Theories describes a specific idea. Chomsky: language acquisition device (LAD), universal grammar. Skinner: language learned through operant conditioning. Critical period: language learned most easily before puberty.'
      }
    }
  ]
}
