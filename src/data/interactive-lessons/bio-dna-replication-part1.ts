export const bioDnaReplicationPart1Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dna-1-intro-p1',
      type: 'text' as const,
      content: `
# ## Replication Overview

**Part 1 of 7 — Replication Overview**

1. Semiconservative replication: each new DNA has one old + one new strand
2. Meselson-Stahl experiment proved semiconservative model
3. Occurs during S phase of cell cycle
4. Bidirectional from origins of replication
      `
    },
    {
      id: 'dna-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes semiconservative replication?',
            options: [
              'each new DNA has one old + one new strand',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Semiconservative replication: each new DNA has one old + one new strand'
          },
          {
            question: 'In the context of replication overview, which statement is accurate?',
            options: [
              'Occurs during S phase of cell cycle',
              'dnarts wen eno + dlo eno sah AND wen hcae :noitacilper evitavresnocimeS',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Occurs during S phase of cell cycle'
          }
        ]
      }
    },
    {
      id: 'dna-1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Semiconservative replication**: each new DNA has one old + one new strand
- **Meselson-Stahl experiment proved semiconservative model**
- **Occurs during S phase of cell cycle**
- **Bidirectional from origins of replication**
      `
    },
    {
      id: 'dna-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to replication overview?',
            options: [
              'Bidirectional from origins of replication',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Bidirectional from origins of replication'
          }
        ]
      }
    },
    {
      id: 'dna-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Semiconservative replication is important in replication overview because',
            options: ['each new DNA has one old + one new strand', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Meselson-Stahl experiment proved semiconservative model is important in replication overview because',
            options: ['Meselson-Stahl experiment proved semiconservative ', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Occurs during S phase of cell cycle is important in replication overview because',
            options: ['Occurs during S phase of cell cycle', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['each new DNA has one old + one new strand', 'Meselson-Stahl experiment proved semiconservative ', 'Occurs during S phase of cell cycle'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Replication Overview.'
      }
    }
  ]
}
