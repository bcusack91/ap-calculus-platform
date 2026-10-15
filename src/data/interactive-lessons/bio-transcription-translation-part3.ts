export const bioTranscriptionPart3Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran3-intro-p3',
      type: 'text' as const,
      content: `
## RNA Processing

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes 5\' cap?',
            options: [
              'A string of adenines added to protect the 3\' end of the mRNA',
              'The removal of introns before mRNA leaves the nucleus',
              'A sequence that lets one gene code for several proteins',
              'A modified guanine that aids stability and ribosome binding'
            ],
            correctAnswer: 3,
            explanation: 'The 5\' cap is a modified guanine nucleotide added to the 5\' end of pre-mRNA. It protects the mRNA from degradation and helps the ribosome recognize and bind the mRNA. The string of adenines is the poly-A tail at the 3\' end, and intron removal is splicing.'
          },
          {
            question: 'Which of the following is true about Splicing?',
            options: [
              'Adding a modified guanine to the 5\' end of the pre-mRNA',
              'Adding a tail of adenines to the 3\' end of the pre-mRNA',
              'Removing exons and joining the introns into mature mRNA',
              'Removing introns and joining the exons into mature mRNA'
            ],
            correctAnswer: 3,
            explanation: 'Splicing removes the noncoding introns from pre-mRNA and joins the exons together (introns are removed, exons are expressed). Adding the 5\' cap and the poly-A tail are the other two RNA-processing steps.'
          }
        ]
      }
    },
    {
      id: 'tran3-detail-p3',
      type: 'text' as const,
      content: `
### Key Details

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding RNA Processing, which correctly describes Alternative splicing?',
            options: [
              'Adding a poly-A tail of a different length to each copy of an mRNA',
              'Removing every intron the same way so that each mRNA is identical',
              'Changing the DNA of each cell so that different cells carry new genes',
              'Joining exons in different combinations so one gene makes several proteins'
            ],
            correctAnswer: 3,
            explanation: 'In alternative splicing, different combinations of exons are kept in the mature mRNA, so a single gene can produce several related proteins. The DNA itself is not changed, and the variation comes from which exons are joined, not from the poly-A tail.'
          }
        ]
      }
    },
    {
      id: 'tran3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '5\' cap',
            options: ['~200 adenines at 3\' end (stability)', 'one gene → multiple proteins', 'modified G nucleotide (stability, ribosome recognition)', 'introns removed, exons joined']
          },
          {
            label: 'Poly-A tail',
            options: ['modified G nucleotide (stability, ribosome recognition)', '~200 adenines at 3\' end (stability)', 'introns removed, exons joined', 'one gene → multiple proteins']
          },
          {
            label: 'Splicing',
            options: ['modified G nucleotide (stability, ribosome recognition)', '~200 adenines at 3\' end (stability)', 'introns removed, exons joined', 'one gene → multiple proteins']
          }
        ],
        correctAnswers: ['modified G nucleotide (stability, ribosome recognition)', '~200 adenines at 3\' end (stability)', 'introns removed, exons joined'],
        hint1: 'Think about what each concept specifically describes in RNA Processing.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in RNA Processing describes a specific idea. 5\' cap: modified G nucleotide (stability, ribosome recognition). Poly-A tail: ~200 adenines at 3\' end (stability). Splicing: introns removed, exons joined.'
      }
    }
  ]
}
