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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes 5\' cap?',
            options: [
              'one gene → multiple proteins',
              '~200 adenines at 3\' end (stability)',
              'introns removed, exons joined',
              'modified G nucleotide (stability, ribosome recognition)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — 5\' cap: modified G nucleotide (stability, ribosome recognition). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Splicing?',
            options: [
              'one gene → multiple proteins',
              'modified G nucleotide (stability, ribosome recognition)',
              '~200 adenines at 3\' end (stability)',
              'introns removed, exons joined'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Splicing: introns removed, exons joined. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding RNA Processing, which correctly describes Alternative splicing?',
            options: [
              '~200 adenines at 3\' end (stability)',
              'modified G nucleotide (stability, ribosome recognition)',
              'introns removed, exons joined',
              'one gene → multiple proteins'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Alternative splicing: one gene → multiple proteins. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
