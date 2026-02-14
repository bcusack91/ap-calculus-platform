export const bioTranscriptionPart3Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran3-intro-p3',
      type: 'text' as const,
      content: `
# ## RNA Processing

**Part 3 of 7 — RNA Processing**

1. 5' cap: modified G nucleotide (stability, ribosome recognition)
2. Poly-A tail: ~200 adenines at 3' end (stability)
3. Splicing: introns removed, exons joined
4. Alternative splicing: one gene → multiple proteins
      `
    },
    {
      id: 'tran3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes 5\' cap?',
            options: [
              'modified G nucleotide (stability, ribosome recognition)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: '5\' cap: modified G nucleotide (stability, ribosome recognition)'
          },
          {
            question: 'In the context of rna processing, which statement is accurate?',
            options: [
              'Splicing: introns removed, exons joined',
              ')noitingocer emosobir ,ytilibats( editoelcun G deifidom :pac \'5',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Splicing: introns removed, exons joined'
          }
        ]
      }
    },
    {
      id: 'tran3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **5' cap**: modified G nucleotide (stability, ribosome recognition)
- **Poly-A tail**: ~200 adenines at 3' end (stability)
- **Splicing**: introns removed, exons joined
- **Alternative splicing**: one gene → multiple proteins
      `
    },
    {
      id: 'tran3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to rna processing?',
            options: [
              'Alternative splicing: one gene → multiple proteins',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Alternative splicing: one gene → multiple proteins'
          }
        ]
      }
    },
    {
      id: 'tran3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '5\' cap is important in rna processing because',
            options: ['modified G nucleotide (stability, ribosome recogni', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Poly-A tail is important in rna processing because',
            options: ['~200 adenines at 3\' end (stability)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Splicing is important in rna processing because',
            options: ['introns removed, exons joined', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['modified G nucleotide (stability, ribosome recogni', '~200 adenines at 3\' end (stability)', 'introns removed, exons joined'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding RNA Processing.'
      }
    }
  ]
}
