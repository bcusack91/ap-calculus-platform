export const psychLanguagePart4Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu4-intro',
      type: 'text' as const,
      content: `
## Intelligence Testing

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Stanford-Binet and Wechsler tests (IQ…?',
            options: [
              'Reliability and validity of intelligence tests',
              'IQ = (mental age / chronological age) × 100 (original formula)',
              'mean = 100, SD = 15',
              'Stanford-Binet and Wechsler tests (IQ tests)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Stanford-Binet and Wechsler tests (IQ tests). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Normal distribution?',
            options: [
              'Stanford-Binet and Wechsler tests (IQ tests)',
              'Reliability and validity of intelligence tests',
              'IQ = (mental age / chronological age) × 100 (original formula)',
              'mean = 100, SD = 15'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Normal distribution: mean = 100, SD = 15. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'langu4-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Stanford-Binet and Wechsler tests (IQ…',
            options: ['Reliability and validity of intelligence tests', 'mean = 100, SD = 15', 'Stanford-Binet and Wechsler tests (IQ tests)', 'IQ = (mental age / chronological age) × 100 (original formula)']
          },
          {
            label: 'IQ = (mental age / chronological age) ×…',
            options: ['Stanford-Binet and Wechsler tests (IQ tests)', 'IQ = (mental age / chronological age) × 100 (original formula)', 'mean = 100, SD = 15', 'Reliability and validity of intelligence tests']
          },
          {
            label: 'Normal distribution',
            options: ['Stanford-Binet and Wechsler tests (IQ tests)', 'Reliability and validity of intelligence tests', 'IQ = (mental age / chronological age) × 100 (original formula)', 'mean = 100, SD = 15']
          }
        ],
        correctAnswers: ['Stanford-Binet and Wechsler tests (IQ tests)', 'IQ = (mental age / chronological age) × 100 (original formula)', 'mean = 100, SD = 15'],
        hint1: 'Think about what each concept specifically describes in Intelligence Testing.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Intelligence Testing describes a specific idea. Stanford-Binet and Wechsler tests (IQ tests). IQ = (mental age / chronological age) × 100 (original formula). Normal distribution: mean = 100, SD = 15.'
      }
    }
  ]
}
