export const psychLanguagePart5Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu5-intro',
      type: 'text' as const,
      content: `
# ## Intelligence Controversies

**Part 5 of 7 — Intelligence Controversies**

### 1. Nature vs nurture in intelligence

Nature vs nurture in intelligence

### 2. Flynn effect

IQ scores rising over generations

### 3. Stereotype threat

awareness of stereotypes impairs performance

### 4. Cultural bias in testing

test items may favor certain groups
      `
    },
    {
      id: 'langu5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of intelligence controversies?',
            options: [
              'Nature vs nurture in intelligence',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Nature vs nurture in intelligence'
          },
          {
            question: 'In the context of intelligence controversies, which is accurate?',
            options: [
              'awareness of stereotypes impairs performance',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Stereotype threat: awareness of stereotypes impairs performance'
          }
        ]
      }
    },
    {
      id: 'langu5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Nature vs nurture in intelligence**
- **Flynn effect**: IQ scores rising over generations
- **Stereotype threat**: awareness of stereotypes impairs performance
- **Cultural bias in testing**: test items may favor certain groups
      `
    },
    {
      id: 'langu5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to intelligence controversies?',
            options: [
              'test items may favor certain groups',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Cultural bias in testing: test items may favor certain groups'
          }
        ]
      }
    },
    {
      id: 'langu5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nature vs nurture in intelligence',
            options: ['Nature vs nurture in intelligence', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Flynn effect',
            options: ['IQ scores rising over generations', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Stereotype threat',
            options: ['awareness of stereotypes impairs performance', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Nature vs nurture in intelligence', 'IQ scores rising over generations', 'awareness of stereotypes impairs performance'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Intelligence Controversies.'
      }
    }
  ]
}
