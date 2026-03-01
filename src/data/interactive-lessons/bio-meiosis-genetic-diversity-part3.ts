export const bioMeiosisPart3Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio3-intro-p3',
      type: 'text' as const,
      content: `
## Meiosis II

**Part 3 of 7 — Meiosis II**

1. Similar to mitosis
2. Sister chromatids separate
3. No DNA replication between meiosis I and II
4. Four haploid cells produced
      `
    },
    {
      id: 'meio3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Similar to mitosis?',
            options: [
              'Similar to mitosis',
              'No DNA replication between meiosis I and II',
              'Four haploid cells produced',
              'Sister chromatids separate'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Similar to mitosis. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about No DNA replication between meiosis I…?',
            options: [
              'Four haploid cells produced',
              'Sister chromatids separate',
              'Similar to mitosis',
              'No DNA replication between meiosis I and II'
            ],
            correctAnswer: 3,
            explanation: 'Correct — No DNA replication between meiosis I and II. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'meio3-detail-p3',
      type: 'text' as const,
      content: `
### Key Details

- **Similar to mitosis**
- **Sister chromatids separate**
- **No DNA replication between meiosis I and II**
- **Four haploid cells produced**
      `
    },
    {
      id: 'meio3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Four haploid cells produced?',
            options: [
              'No DNA replication between meiosis I and II',
              'Four haploid cells produced',
              'Similar to mitosis',
              'Sister chromatids separate'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Four haploid cells produced. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'meio3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Similar to mitosis',
            options: ['Four haploid cells produced', 'Similar to mitosis', 'No DNA replication between meiosis I and II', 'Sister chromatids separate']
          },
          {
            label: 'Sister chromatids separate',
            options: ['Sister chromatids separate', 'Four haploid cells produced', 'No DNA replication between meiosis I and II', 'Similar to mitosis']
          },
          {
            label: 'No DNA replication between meiosis I…',
            options: ['Similar to mitosis', 'No DNA replication between meiosis I and II', 'Sister chromatids separate', 'Four haploid cells produced']
          }
        ],
        correctAnswers: ['Similar to mitosis', 'Sister chromatids separate', 'No DNA replication between meiosis I and II'],
        hint1: 'Think about what each concept specifically describes in Meiosis II.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Meiosis II describes a specific idea. Similar to mitosis. Sister chromatids separate. No DNA replication between meiosis I and II.'
      }
    }
  ]
}
