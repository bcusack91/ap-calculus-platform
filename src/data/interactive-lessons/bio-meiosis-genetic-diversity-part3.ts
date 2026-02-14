export const bioMeiosisPart3Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio3-intro-p3',
      type: 'text' as const,
      content: `
# ## Meiosis II

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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes similar to mitosis?',
            options: [
              'Similar to mitosis',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Similar to mitosis'
          },
          {
            question: 'In the context of meiosis ii, which statement is accurate?',
            options: [
              'No DNA replication between meiosis I and II',
              'sisotim ot ralimiS',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'No DNA replication between meiosis I and II'
          }
        ]
      }
    },
    {
      id: 'meio3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to meiosis ii?',
            options: [
              'Four haploid cells produced',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Four haploid cells produced'
          }
        ]
      }
    },
    {
      id: 'meio3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Similar to mitosis is important in meiosis ii because',
            options: ['Similar to mitosis', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Sister chromatids separate is important in meiosis ii because',
            options: ['Sister chromatids separate', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'No DNA replication between meiosis I and II is important in meiosis ii because',
            options: ['No DNA replication between meiosis I and II', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Similar to mitosis', 'Sister chromatids separate', 'No DNA replication between meiosis I and II'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Meiosis II.'
      }
    }
  ]
}
