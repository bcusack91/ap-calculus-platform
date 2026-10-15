export const bioMeiosisPart1Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio1-intro-p1',
      type: 'text' as const,
      content: `
## Meiosis Overview

**Part 1 of 7 — Meiosis Overview**

1. Meiosis produces gametes (sex cells)
2. Reduces chromosome number by half (2n → n)
3. Two divisions: meiosis I and meiosis II
4. Results in 4 haploid daughter cells
      `
    },
    {
      id: 'meio1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the main function of meiosis in sexually reproducing animals?',
            options: [
              'Producing genetically identical body cells for growth and tissue repair',
              'Producing haploid gametes that fuse at fertilization',
              'Replacing damaged cells by copying the parent cell\'s chromosomes exactly',
              'Doubling the chromosome number so that offspring receive extra copies'
            ],
            correctAnswer: 1,
            explanation: 'Meiosis produces haploid gametes (sex cells). Growth and tissue repair rely on mitosis, which makes genetically identical diploid cells. Meiosis halves the chromosome number so that fertilization restores the diploid number.'
          },
          {
            question: 'How many nuclear divisions occur during meiosis, and how many times is the DNA replicated?',
            options: [
              'One division, after one round of DNA replication',
              'Two divisions, with DNA replicated before each one',
              'Two divisions, after one round of DNA replication',
              'Two divisions, after two rounds of DNA replication'
            ],
            correctAnswer: 2,
            explanation: 'Meiosis has two divisions, meiosis I and meiosis II, but the DNA is replicated only once, during the S phase before meiosis I. One replication followed by two divisions is what halves the chromosome number.'
          }
        ]
      }
    },
    {
      id: 'meio1-detail-p1',
      type: 'text' as const,
      content: `
### Key Details

- **Meiosis produces gametes (sex cells)**
- **Reduces chromosome number by half (2n → n)**
- **Two divisions**: meiosis I and meiosis II
- **Results in 4 haploid daughter cells**
      `
    },
    {
      id: 'meio1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A diploid germ cell completes meiosis I and meiosis II. What is the result?',
            options: [
              'Two diploid cells, each genetically identical to the parent cell',
              'Two haploid cells, each with one chromosome from every homologous pair',
              'Four diploid cells, each carrying both members of every homologous pair',
              'Four haploid cells, each genetically different from the parent cell'
            ],
            correctAnswer: 3,
            explanation: 'Meiosis I separates homologs and meiosis II separates sister chromatids, giving four haploid cells. Crossing over and independent assortment make each of them genetically different from the parent cell and from one another. Two haploid cells is the state after meiosis I only.'
          }
        ]
      }
    },
    {
      id: 'meio1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Meiosis produces gametes (sex cells)',
            options: ['Reduces chromosome number by half (2n → n)', 'Results in 4 haploid daughter cells', 'meiosis I and meiosis II', 'Meiosis produces gametes (sex cells)']
          },
          {
            label: 'Reduces chromosome number by half (2n →…',
            options: ['Meiosis produces gametes (sex cells)', 'meiosis I and meiosis II', 'Reduces chromosome number by half (2n → n)', 'Results in 4 haploid daughter cells']
          },
          {
            label: 'Two divisions',
            options: ['Results in 4 haploid daughter cells', 'Reduces chromosome number by half (2n → n)', 'Meiosis produces gametes (sex cells)', 'meiosis I and meiosis II']
          }
        ],
        correctAnswers: ['Meiosis produces gametes (sex cells)', 'Reduces chromosome number by half (2n → n)', 'meiosis I and meiosis II'],
        hint1: 'Think about what each concept specifically describes in Meiosis Overview.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Meiosis Overview describes a specific idea. Meiosis produces gametes (sex cells). Reduces chromosome number by half (2n → n). Two divisions: meiosis I and meiosis II.'
      }
    }
  ]
}
