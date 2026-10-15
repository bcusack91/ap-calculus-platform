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
            question: 'Meiosis II is most similar to mitosis because in both processes:',
            options: [
              'sister chromatids separate and move to opposite poles',
              'homologous chromosomes pair up and exchange segments',
              'the chromosome number is reduced from diploid to haploid',
              'DNA is replicated just before the division begins'
            ],
            correctAnswer: 0,
            explanation: 'Like mitosis, meiosis II separates sister chromatids at anaphase. Homolog pairing and crossing over happen only in meiosis I, the reduction to haploid happens in meiosis I, and no DNA replication precedes meiosis II.'
          },
          {
            question: 'A cell has just completed meiosis I. Before meiosis II begins, the cell:',
            options: [
              'replicates its DNA so each chromosome again has two chromatids',
              'pairs its homologous chromosomes again to allow more crossing over',
              'separates its sister chromatids so that each cell becomes haploid',
              'skips DNA replication and goes directly into prophase II'
            ],
            correctAnswer: 3,
            explanation: 'There is no S phase between meiosis I and meiosis II. Each chromosome still consists of two sister chromatids from the original replication, so the cell proceeds to meiosis II without copying its DNA again. Sister chromatids separate during anaphase II, not before it.'
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
            question: 'A cell with 2n = 8 completes meiosis II. How many cells form, and how many chromosomes does each contain?',
            options: [
              'Two cells, each with 8 chromosomes',
              'Four cells, each with 4 chromosomes',
              'Four cells, each with 8 chromosomes',
              'Two cells, each with 4 chromosomes'
            ],
            correctAnswer: 1,
            explanation: 'Meiosis produces four haploid cells. With 2n = 8, each cell receives n = 4 chromosomes. Two cells with 4 chromosomes each describes the result after meiosis I only.'
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
