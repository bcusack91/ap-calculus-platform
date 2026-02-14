export const bioTranscriptionPart4Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran4-intro-p4',
      type: 'text' as const,
      content: `
# ## Translation

**Part 4 of 7 — Translation**

1. Ribosomes read mRNA codons (triplets of nucleotides)
2. tRNA carries amino acids; anticodon pairs with codon
3. Start codon: AUG (methionine)
4. Stop codons: UAA, UAG, UGA
      `
    },
    {
      id: 'tran4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes ribosomes read mrna codons (triplets of nucleotides)?',
            options: [
              'Ribosomes read mRNA codons (triplets of nucleotides)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Ribosomes read mRNA codons (triplets of nucleotides)'
          },
          {
            question: 'In the context of translation, which statement is accurate?',
            options: [
              'Start codon: AUG (methionine)',
              ')seditoelcun fo stelpirt( snodoc ANRm daer semosobiR',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Start codon: AUG (methionine)'
          }
        ]
      }
    },
    {
      id: 'tran4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Ribosomes read mRNA codons (triplets of nucleotides)**
- **tRNA carries amino acids; anticodon pairs with codon**
- **Start codon**: AUG (methionine)
- **Stop codons**: UAA, UAG, UGA
      `
    },
    {
      id: 'tran4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to translation?',
            options: [
              'Stop codons: UAA, UAG, UGA',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Stop codons: UAA, UAG, UGA'
          }
        ]
      }
    },
    {
      id: 'tran4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ribosomes read mRNA codons (triplets of nucleotides) is important in translation because',
            options: ['Ribosomes read mRNA codons (triplets of nucleotide', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'tRNA carries amino acids; anticodon pairs with codon is important in translation because',
            options: ['tRNA carries amino acids; anticodon pairs with cod', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Start codon is important in translation because',
            options: ['AUG (methionine)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Ribosomes read mRNA codons (triplets of nucleotide', 'tRNA carries amino acids; anticodon pairs with cod', 'AUG (methionine)'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Translation.'
      }
    }
  ]
}
