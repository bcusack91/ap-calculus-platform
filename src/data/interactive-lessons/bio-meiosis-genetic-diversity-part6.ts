export const bioMeiosisPart6Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio6-intro-p6',
      type: 'text' as const,
      content: `
## Meiosis: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Chromosome counting through meiosis stages
2. Predicting gamete genotypes
3. Comparing mitosis and meiosis
4. Nondisjunction and its consequences
      `
    },
    {
      id: 'meio6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Chromosome counting through meiosis…?',
            options: [
              'Chromosome counting through meiosis stages',
              'Predicting gamete genotypes',
              'Comparing mitosis and meiosis',
              'Nondisjunction and its consequences'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Chromosome counting through meiosis stages. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Comparing mitosis and meiosis?',
            options: [
              'Chromosome counting through meiosis stages',
              'Nondisjunction and its consequences',
              'Comparing mitosis and meiosis',
              'Predicting gamete genotypes'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Comparing mitosis and meiosis. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'meio6-detail-p6',
      type: 'text' as const,
      content: `
### Key Details

- **Chromosome counting through meiosis stages**
- **Predicting gamete genotypes**
- **Comparing mitosis and meiosis**
- **Nondisjunction and its consequences**
      `
    },
    {
      id: 'meio6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Nondisjunction and its consequences?',
            options: [
              'Comparing mitosis and meiosis',
              'Nondisjunction and its consequences',
              'Chromosome counting through meiosis stages',
              'Predicting gamete genotypes'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Nondisjunction and its consequences. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'meio6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chromosome counting through meiosis…',
            options: ['Chromosome counting through meiosis stages', 'Nondisjunction and its consequences', 'Comparing mitosis and meiosis', 'Predicting gamete genotypes']
          },
          {
            label: 'Predicting gamete genotypes',
            options: ['Chromosome counting through meiosis stages', 'Predicting gamete genotypes', 'Nondisjunction and its consequences', 'Comparing mitosis and meiosis']
          },
          {
            label: 'Comparing mitosis and meiosis',
            options: ['Comparing mitosis and meiosis', 'Chromosome counting through meiosis stages', 'Nondisjunction and its consequences', 'Predicting gamete genotypes']
          }
        ],
        correctAnswers: ['Chromosome counting through meiosis stages', 'Predicting gamete genotypes', 'Comparing mitosis and meiosis'],
        hint1: 'Think about what each concept specifically describes in Meiosis: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Meiosis: Problem-Solving Workshop describes a specific idea. Chromosome counting through meiosis stages. Predicting gamete genotypes. Comparing mitosis and meiosis.'
      }
    }
  ]
}
