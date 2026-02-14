export const bioMeiosisPart1Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio1-intro-p1',
      type: 'text' as const,
      content: `
# ## Meiosis Overview

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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes meiosis produces gametes (sex cells)?',
            options: [
              'Meiosis produces gametes (sex cells)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Meiosis produces gametes (sex cells)'
          },
          {
            question: 'In the context of meiosis overview, which statement is accurate?',
            options: [
              'Two divisions: meiosis I and meiosis II',
              ')sllec xes( setemag secudorp sisoieM',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Two divisions: meiosis I and meiosis II'
          }
        ]
      }
    },
    {
      id: 'meio1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to meiosis overview?',
            options: [
              'Results in 4 haploid daughter cells',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Results in 4 haploid daughter cells'
          }
        ]
      }
    },
    {
      id: 'meio1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Meiosis produces gametes (sex cells) is important in meiosis overview because',
            options: ['Meiosis produces gametes (sex cells)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Reduces chromosome number by half (2n → n) is important in meiosis overview because',
            options: ['Reduces chromosome number by half (2n → n)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Two divisions is important in meiosis overview because',
            options: ['meiosis I and meiosis II', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Meiosis produces gametes (sex cells)', 'Reduces chromosome number by half (2n → n)', 'meiosis I and meiosis II'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Meiosis Overview.'
      }
    }
  ]
}
