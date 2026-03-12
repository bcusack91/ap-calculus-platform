export const psychLanguagePart5Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu5-intro',
      type: 'text' as const,
      content: `
## Intelligence Controversies

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Nature vs nurture in intelligence?',
            options: [
              'awareness of stereotypes impairs performance',
              'test items may favor certain groups',
              'Nature vs nurture in intelligence',
              'IQ scores rising over generations'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Nature vs nurture in intelligence. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Stereotype threat?',
            options: [
              'test items may favor certain groups',
              'Nature vs nurture in intelligence',
              'IQ scores rising over generations',
              'awareness of stereotypes impairs performance'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Stereotype threat: awareness of stereotypes impairs performance. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'langu5-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Flynn effect',
            options: ['IQ scores rising over generations', 'Nature vs nurture in intelligence', 'test items may favor certain groups', 'awareness of stereotypes impairs performance']
          },
          {
            label: 'Stereotype threat',
            options: ['Nature vs nurture in intelligence', 'IQ scores rising over generations', 'awareness of stereotypes impairs performance', 'test items may favor certain groups']
          },
          {
            label: 'Cultural bias in testing',
            options: ['test items may favor certain groups', 'awareness of stereotypes impairs performance', 'IQ scores rising over generations', 'Nature vs nurture in intelligence']
          }
        ],
        correctAnswers: ['IQ scores rising over generations', 'awareness of stereotypes impairs performance', 'test items may favor certain groups'],
        hint1: 'Think about what each concept specifically describes in Intelligence Controversies.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Intelligence Controversies describes a specific idea. Flynn effect: IQ scores rising over generations. Stereotype threat: awareness of stereotypes impairs performance. Cultural bias in testing: test items may favor certain groups.'
      }
    }
  ]
}
