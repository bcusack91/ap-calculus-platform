export const psychLanguagePart4Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu4-intro',
      type: 'text' as const,
      content: `
# ## Intelligence Testing

**Part 4 of 7 — Intelligence Testing**

### 1. Stanford-Binet and Wechsler tests (IQ tests)

Stanford-Binet and Wechsler tests (IQ tests)

### 2. IQ = (mental age / chronological age) × 100 (original formula)

IQ = (mental age / chronological age) × 100 (original formula)

### 3. Normal distribution

mean = 100, SD = 15

### 4. Reliability and validity of intelligence tests

Reliability and validity of intelligence tests
      `
    },
    {
      id: 'langu4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of intelligence testing?',
            options: [
              'Stanford-Binet and Wechsler tests (IQ tests)',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Stanford-Binet and Wechsler tests (IQ tests)'
          },
          {
            question: 'In the context of intelligence testing, which is accurate?',
            options: [
              'mean = 100, SD = 15',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Normal distribution: mean = 100, SD = 15'
          }
        ]
      }
    },
    {
      id: 'langu4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Stanford-Binet and Wechsler tests (IQ tests)**
- **IQ = (mental age / chronological age) × 100 (original formula)**
- **Normal distribution**: mean = 100, SD = 15
- **Reliability and validity of intelligence tests**
      `
    },
    {
      id: 'langu4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to intelligence testing?',
            options: [
              'Reliability and validity of intelligence tests',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Reliability and validity of intelligence tests'
          }
        ]
      }
    },
    {
      id: 'langu4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Stanford-Binet and Wechsler tests (IQ tests)',
            options: ['Stanford-Binet and Wechsler tests (IQ tests)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'IQ = (mental age / chronological age) × 100 (original formula)',
            options: ['IQ = (mental age / chronological age) × 100 (origi', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Normal distribution',
            options: ['mean = 100, SD = 15', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Stanford-Binet and Wechsler tests (IQ tests)', 'IQ = (mental age / chronological age) × 100 (origi', 'mean = 100, SD = 15'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Intelligence Testing.'
      }
    }
  ]
}
