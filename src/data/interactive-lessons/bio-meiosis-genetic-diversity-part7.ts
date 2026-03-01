export const bioMeiosisPart7Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio7-intro-p7',
      type: 'text' as const,
      content: `
## Meiosis: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Meiosis as the basis for Mendel's laws
2. Connection to evolution (genetic variation)
3. Errors in meiosis: nondisjunction, trisomy
4. AP exam: comparing mitosis and meiosis
      `
    },
    {
      id: 'meio7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Meiosis as the basis for Mendel\'s laws?',
            options: [
              'nondisjunction, trisomy',
              'Meiosis as the basis for Mendel\'s laws',
              'comparing mitosis and meiosis',
              'Connection to evolution (genetic variation)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Meiosis as the basis for Mendel\'s laws. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Errors in meiosis?',
            options: [
              'nondisjunction, trisomy',
              'Meiosis as the basis for Mendel\'s laws',
              'Connection to evolution (genetic variation)',
              'comparing mitosis and meiosis'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Errors in meiosis: nondisjunction, trisomy. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'meio7-detail-p7',
      type: 'text' as const,
      content: `
### Key Details

- **Meiosis as the basis for Mendel's laws**
- **Connection to evolution (genetic variation)**
- **Errors in meiosis**: nondisjunction, trisomy
- **AP exam**: comparing mitosis and meiosis
      `
    },
    {
      id: 'meio7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Meiosis: Synthesis & AP Review, which correctly describes AP exam?',
            options: [
              'Meiosis as the basis for Mendel\'s laws',
              'nondisjunction, trisomy',
              'comparing mitosis and meiosis',
              'Connection to evolution (genetic variation)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — AP exam: comparing mitosis and meiosis. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'meio7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Errors in meiosis',
            options: ['Meiosis as the basis for Mendel\'s laws', 'Connection to evolution (genetic variation)', 'nondisjunction, trisomy', 'comparing mitosis and meiosis']
          },
          {
            label: 'AP exam',
            options: ['nondisjunction, trisomy', 'comparing mitosis and meiosis', 'Meiosis as the basis for Mendel\'s laws', 'Connection to evolution (genetic variation)']
          }
        ],
        correctAnswers: ['nondisjunction, trisomy', 'comparing mitosis and meiosis'],
        hint1: 'Think about what each concept specifically describes in Meiosis: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Meiosis: Synthesis & AP Review describes a specific idea. Errors in meiosis: nondisjunction, trisomy. AP exam: comparing mitosis and meiosis.'
      }
    }
  ]
}
