export const psychLanguagePart1Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu1-intro',
      type: 'text' as const,
      content: `
# 🧠 Language & Intelligence

**Part 1 of 7 — Language Structure & Development**

### 1. Phonemes

basic sound units (~40 in English)

### 2. Morphemes

smallest meaningful units (prefixes, suffixes, words)

### 3. Syntax

rules for combining words into sentences (grammar)

### 4. Language milestones

babbling (4mo), first words (12mo), two-word stage (24mo)
      `
    },
    {
      id: 'langu1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of language structure & development?',
            options: [
              'Phonemes',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Phonemes: basic sound units (~40 in English)'
          },
          {
            question: 'In the context of language structure & development, which is accurate?',
            options: [
              'rules for combining words into sentences (grammar)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Syntax: rules for combining words into sentences (grammar)'
          }
        ]
      }
    },
    {
      id: 'langu1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Phonemes**: basic sound units (~40 in English)
- **Morphemes**: smallest meaningful units (prefixes, suffixes, words)
- **Syntax**: rules for combining words into sentences (grammar)
- **Language milestones**: babbling (4mo), first words (12mo), two-word stage (24mo)
      `
    },
    {
      id: 'langu1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to language structure & development?',
            options: [
              'babbling (4mo), first words (12mo), two-word stage (24mo)',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Language milestones: babbling (4mo), first words (12mo), two-word stage (24mo)'
          }
        ]
      }
    },
    {
      id: 'langu1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Phonemes',
            options: ['basic sound units (~40 in English)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Morphemes',
            options: ['smallest meaningful units (prefixes, suffixes, wor', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Syntax',
            options: ['rules for combining words into sentences (grammar)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['basic sound units (~40 in English)', 'smallest meaningful units (prefixes, suffixes, wor', 'rules for combining words into sentences (grammar)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Language Structure & Development.'
      }
    }
  ]
}
