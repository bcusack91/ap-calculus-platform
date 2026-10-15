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
            question: 'An organism has n = 3 pairs of chromosomes. Ignoring crossing over, how many genetically different gametes can independent assortment produce?',
            options: [
              '3',
              '6',
              '8',
              '9'
            ],
            correctAnswer: 2,
            explanation: 'Each homologous pair orients independently at metaphase I, so the number of combinations is $2^{n}$. With n = 3, that is 2 × 2 × 2 = 8 different gametes.'
          },
          {
            question: 'Two siblings with the same parents are genetically different. Which source of variation acts at the moment the zygote forms?',
            options: [
              'Independent assortment',
              'Crossing over',
              'Gene duplication',
              'Random fertilization'
            ],
            correctAnswer: 3,
            explanation: 'Random fertilization means any sperm can fuse with any egg, and it acts when the zygote forms. Independent assortment and crossing over act earlier, during meiosis, when each parent\'s gametes are made.'
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
            question: 'Humans have 23 chromosome pairs. Ignoring crossing over, about how many genetically different zygotes can one couple produce?',
            options: [
              'About 70 trillion',
              'About 8.4 million',
              'About 16.8 million',
              'About 529'
            ],
            correctAnswer: 0,
            explanation: 'Each parent can make $2^{23}$ (about 8.4 million) different gametes by independent assortment. Random fertilization multiplies the two: $2^{23}$ × $2^{23}$ = about 70 trillion combinations, even before crossing over adds more.'
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
