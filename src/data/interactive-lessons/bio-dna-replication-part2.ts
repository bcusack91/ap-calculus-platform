export const bioDnaReplicationPart2Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dna-2-intro-p2',
      type: 'text' as const,
      content: `
# ## Enzymes of Replication

**Part 2 of 7 — Enzymes of Replication**

1. Helicase: unwinds double helix
2. Primase: synthesizes RNA primer
3. DNA polymerase III: adds nucleotides 5'→3'
4. Ligase: seals gaps between Okazaki fragments
      `
    },
    {
      id: 'dna-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes helicase?',
            options: [
              'unwinds double helix',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Helicase: unwinds double helix'
          },
          {
            question: 'In the context of enzymes of replication, which statement is accurate?',
            options: [
              'DNA polymerase III: adds nucleotides 5\'→3\'',
              'xileh elbuod sdniwnu :esacileH',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'DNA polymerase III: adds nucleotides 5\'→3\''
          }
        ]
      }
    },
    {
      id: 'dna-2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Helicase**: unwinds double helix
- **Primase**: synthesizes RNA primer
- **DNA polymerase III**: adds nucleotides 5'→3'
- **Ligase**: seals gaps between Okazaki fragments
      `
    },
    {
      id: 'dna-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to enzymes of replication?',
            options: [
              'Ligase: seals gaps between Okazaki fragments',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Ligase: seals gaps between Okazaki fragments'
          }
        ]
      }
    },
    {
      id: 'dna-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Helicase is important in enzymes of replication because',
            options: ['unwinds double helix', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Primase is important in enzymes of replication because',
            options: ['synthesizes RNA primer', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'DNA polymerase III is important in enzymes of replication because',
            options: ['adds nucleotides 5\'→3\'', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['unwinds double helix', 'synthesizes RNA primer', 'adds nucleotides 5\'→3\''],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Enzymes of Replication.'
      }
    }
  ]
}
