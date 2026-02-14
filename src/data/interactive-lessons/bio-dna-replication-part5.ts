export const bioDnaReplicationPart5Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dna-5-intro-p5',
      type: 'text' as const,
      content: `
# ## Telomeres & Telomerase

**Part 5 of 7 — Telomeres & Telomerase**

1. Telomeres: repetitive sequences at chromosome ends (TTAGGG)
2. Shorten with each replication (end replication problem)
3. Telomerase: enzyme that extends telomeres
4. Active in stem cells and cancer cells; inactive in most somatic cells
      `
    },
    {
      id: 'dna-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes telomeres?',
            options: [
              'repetitive sequences at chromosome ends (TTAGGG)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Telomeres: repetitive sequences at chromosome ends (TTAGGG)'
          },
          {
            question: 'In the context of telomeres & telomerase, which statement is accurate?',
            options: [
              'Telomerase: enzyme that extends telomeres',
              ')GGGATT( sdne emosomorhc ta secneuqes evititeper :seremoleT',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Telomerase: enzyme that extends telomeres'
          }
        ]
      }
    },
    {
      id: 'dna-5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Telomeres**: repetitive sequences at chromosome ends (TTAGGG)
- **Shorten with each replication (end replication problem)**
- **Telomerase**: enzyme that extends telomeres
- **Active in stem cells and cancer cells; inactive in most somatic cells**
      `
    },
    {
      id: 'dna-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to telomeres & telomerase?',
            options: [
              'Active in stem cells and cancer cells; inactive in most somatic cells',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Active in stem cells and cancer cells; inactive in most somatic cells'
          }
        ]
      }
    },
    {
      id: 'dna-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Telomeres is important in telomeres & telomerase because',
            options: ['repetitive sequences at chromosome ends (TTAGGG)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Shorten with each replication (end replication problem) is important in telomeres & telomerase because',
            options: ['Shorten with each replication (end replication pro', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Telomerase is important in telomeres & telomerase because',
            options: ['enzyme that extends telomeres', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['repetitive sequences at chromosome ends (TTAGGG)', 'Shorten with each replication (end replication pro', 'enzyme that extends telomeres'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Telomeres & Telomerase.'
      }
    }
  ]
}
