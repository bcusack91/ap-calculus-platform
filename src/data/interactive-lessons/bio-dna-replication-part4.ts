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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "DNA polymerase has 3\'→5\' exonuclease…" refer to in biology?',
            options: [
              'corrects base-pairing errors',
              '~1 per 10⁹ nucleotides after all repair',
              'DNA polymerase has 3\'→5\' exonuclease (proofreading) activity',
              'fixes UV damage (thymine dimers)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — DNA polymerase has 3\'→5\' exonuclease (proofreading) activity. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Nucleotide excision repair?',
            options: [
              'corrects base-pairing errors',
              'DNA polymerase has 3\'→5\' exonuclease (proofreading) activity',
              '~1 per 10⁹ nucleotides after all repair',
              'fixes UV damage (thymine dimers)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Nucleotide excision repair: fixes UV damage (thymine dimers). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Error rate is correct?',
            options: [
              'fixes UV damage (thymine dimers)',
              'DNA polymerase has 3\'→5\' exonuclease (proofreading) activity',
              '~1 per 10⁹ nucleotides after all repair',
              'corrects base-pairing errors'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Error rate: ~1 per 10⁹ nucleotides after all repair. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'dna-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mismatch repair',
            options: ['fixes UV damage (thymine dimers)', 'corrects base-pairing errors', 'DNA polymerase has 3\'→5\' exonuclease (proofreading) activity', '~1 per 10⁹ nucleotides after all repair']
          },
          {
            label: 'Nucleotide excision repair',
            options: ['corrects base-pairing errors', 'DNA polymerase has 3\'→5\' exonuclease (proofreading) activity', '~1 per 10⁹ nucleotides after all repair', 'fixes UV damage (thymine dimers)']
          },
          {
            label: 'Error rate',
            options: ['~1 per 10⁹ nucleotides after all repair', 'fixes UV damage (thymine dimers)', 'DNA polymerase has 3\'→5\' exonuclease (proofreading) activity', 'corrects base-pairing errors']
          }
        ],
        correctAnswers: ['corrects base-pairing errors', 'fixes UV damage (thymine dimers)', '~1 per 10⁹ nucleotides after all repair'],
        hint1: 'Think about what each concept specifically describes in Proofreading & Repair.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Proofreading & Repair describes a specific idea. Mismatch repair: corrects base-pairing errors. Nucleotide excision repair: fixes UV damage (thymine dimers). Error rate: ~1 per 10⁹ nucleotides after all repair.'
      }
    }
  ]
}
