export const bioMeiosisPart5Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio5-intro-p5',
      type: 'text' as const,
      content: `
## Sources of Genetic Variation

**Part 5 of 7 — Sources of Genetic Variation**

1. Independent assortment: $2^{n}$ possible combinations (n = # of chromosome pairs)
2. Crossing over: creates new allele combinations
3. Random fertilization: any sperm + any egg
4. Humans: $2^{23}$ × $2^{23}$ = ~70 trillion possible combinations (without crossing over)
      `
    },
    {
      id: 'meio5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Independent assortment?',
            options: [
              '$2^{23}$ × $2^{23}$ = ~70 trillion possible combinations (without crossing over)',
              'creates new allele combinations',
              '$2^{n}$ possible combinations (n = # of chromosome pairs)',
              'any sperm + any egg'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Independent assortment: $2^{n}$ possible combinations (n = # of chromosome pairs). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Random fertilization?',
            options: [
              '$2^{n}$ possible combinations (n = # of chromosome pairs)',
              'creates new allele combinations',
              '$2^{23}$ × $2^{23}$ = ~70 trillion possible combinations (without crossing over)',
              'any sperm + any egg'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Random fertilization: any sperm + any egg. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'meio5-detail-p5',
      type: 'text' as const,
      content: `
### Key Details

- **Independent assortment**: $2^{n}$ possible combinations (n = # of chromosome pairs)
- **Crossing over**: creates new allele combinations
- **Random fertilization**: any sperm + any egg
- **Humans**: $2^{23}$ × $2^{23}$ = ~70 trillion possible combinations (without crossing over)
      `
    },
    {
      id: 'meio5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Humans is correct?',
            options: [
              '$2^{23}$ × $2^{23}$ = ~70 trillion possible combinations (without crossing over)',
              '$2^{n}$ possible combinations (n = # of chromosome pairs)',
              'creates new allele combinations',
              'any sperm + any egg'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Humans: $2^{23}$ × $2^{23}$ = ~70 trillion possible combinations (without crossing over). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'meio5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Independent assortment',
            options: ['$2^{n}$ possible combinations (n = # of chromosome pairs)', 'creates new allele combinations', 'any sperm + any egg', '$2^{23}$ × $2^{23}$ = ~70 trillion possible combinations (without crossing over)']
          },
          {
            label: 'Crossing over',
            options: ['$2^{23}$ × $2^{23}$ = ~70 trillion possible combinations (without crossing over)', 'any sperm + any egg', 'creates new allele combinations', '$2^{n}$ possible combinations (n = # of chromosome pairs)']
          },
          {
            label: 'Random fertilization',
            options: ['any sperm + any egg', '$2^{n}$ possible combinations (n = # of chromosome pairs)', 'creates new allele combinations', '$2^{23}$ × $2^{23}$ = ~70 trillion possible combinations (without crossing over)']
          }
        ],
        correctAnswers: ['$2^{n}$ possible combinations (n = # of chromosome pairs)', 'creates new allele combinations', 'any sperm + any egg'],
        hint1: 'Think about what each concept specifically describes in Sources of Genetic Variation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Sources of Genetic Variation describes a specific idea. Independent assortment: $2^{n}$ possible combinations (n = # of chromosome pairs). Crossing over: creates new allele combinations. Random fertilization: any sperm + any egg.'
      }
    }
  ]
}
