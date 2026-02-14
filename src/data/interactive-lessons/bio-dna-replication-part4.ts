export const bioDnaReplicationPart4Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dna-4-intro-p4',
      type: 'text' as const,
      content: `
# ## Proofreading & Repair

**Part 4 of 7 — Proofreading & Repair**

1. DNA polymerase has 3'→5' exonuclease (proofreading) activity
2. Mismatch repair: corrects base-pairing errors
3. Nucleotide excision repair: fixes UV damage (thymine dimers)
4. Error rate: ~1 per 10⁹ nucleotides after all repair
      `
    },
    {
      id: 'dna-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes dna polymerase has 3\'→5\' exonuclease (proofreading) activity?',
            options: [
              'DNA polymerase has 3\'→5\' exonuclease (proofreading) activity',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'DNA polymerase has 3\'→5\' exonuclease (proofreading) activity'
          },
          {
            question: 'In the context of proofreading & repair, which statement is accurate?',
            options: [
              'Nucleotide excision repair: fixes UV damage (thymine dimers)',
              'ytivitca )gnidaerfoorp( esaelcunoxe \'5→\'3 sah esaremylop AND',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Nucleotide excision repair: fixes UV damage (thymine dimers)'
          }
        ]
      }
    },
    {
      id: 'dna-4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **DNA polymerase has 3'→5' exonuclease (proofreading) activity**
- **Mismatch repair**: corrects base-pairing errors
- **Nucleotide excision repair**: fixes UV damage (thymine dimers)
- **Error rate**: ~1 per 10⁹ nucleotides after all repair
      `
    },
    {
      id: 'dna-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to proofreading & repair?',
            options: [
              'Error rate: ~1 per 10⁹ nucleotides after all repair',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Error rate: ~1 per 10⁹ nucleotides after all repair'
          }
        ]
      }
    },
    {
      id: 'dna-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'DNA polymerase has 3\'→5\' exonuclease (proofreading) activity is important in proofreading & repair because',
            options: ['DNA polymerase has 3\'→5\' exonuclease (proofreading', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Mismatch repair is important in proofreading & repair because',
            options: ['corrects base-pairing errors', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Nucleotide excision repair is important in proofreading & repair because',
            options: ['fixes UV damage (thymine dimers)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['DNA polymerase has 3\'→5\' exonuclease (proofreading', 'corrects base-pairing errors', 'fixes UV damage (thymine dimers)'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Proofreading & Repair.'
      }
    }
  ]
}
