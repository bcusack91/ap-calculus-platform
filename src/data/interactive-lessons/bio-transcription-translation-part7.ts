export const bioTranscriptionPart7Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran7-intro-p7',
      type: 'text' as const,
      content: `
## Transcription & Translation: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Central dogma applications
2. Mutation types and consequences
3. Gene expression regulation points
4. AP exam: codon table practice
      `
    },
    {
      id: 'tran7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An antibiotic binds the bacterial ribosome. Which step of gene expression does it directly block?',
            options: [
              'Replication of the bacterial chromosome before division',
              'Transcription of a bacterial gene into messenger RNA',
              'Splicing of the introns out of a bacterial pre-mRNA',
              'Translation of messenger RNA into a polypeptide'
            ],
            correctAnswer: 3,
            explanation: 'Ribosomes carry out translation, so a drug that binds the bacterial ribosome (such as tetracycline or streptomycin) directly blocks protein synthesis. Replication and transcription use polymerases, not ribosomes, and bacteria generally do not splice introns from their mRNA.'
          },
          {
            question: 'At which points can a eukaryotic cell regulate the expression of a gene?',
            options: [
              'At transcription alone, since mRNA levels set protein levels',
              'At translation alone, by changing how fast ribosomes move',
              'At many steps, from chromatin access to protein modification',
              'At DNA replication, by choosing which genes get copied'
            ],
            correctAnswer: 2,
            explanation: 'Eukaryotic gene expression can be regulated at many levels: chromatin accessibility, transcription, RNA processing, mRNA stability and export, translation, and post-translational modification. Transcription is a major control point but not the only one, and DNA replication copies the whole genome rather than selecting genes.'
          }
        ]
      }
    },
    {
      id: 'tran7-detail-p7',
      type: 'text' as const,
      content: `
### Key Details

- **Central dogma applications**
- **Mutation types and consequences**
- **Gene expression regulation points**
- **AP exam**: codon table practice
      `
    },
    {
      id: 'tran7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An mRNA codon reads 5\'-UGG-3\'. Which tRNA anticodon pairs with it?',
            options: [
              '3\'-ACC-5\'',
              '3\'-UGG-5\'',
              '5\'-ACC-3\'',
              '3\'-ACU-5\''
            ],
            correctAnswer: 0,
            explanation: 'The anticodon is complementary and antiparallel to the codon: 5\'-UGG-3\' pairs with 3\'-ACC-5\' (U-A, G-C, G-C). Writing ACC in the 5\'→3\' direction pairs it with a different codon, and 3\'-ACU-5\' pairs with UGA, a stop codon.'
          }
        ]
      }
    },
    {
      id: 'tran7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Central dogma applications',
            options: ['codon table practice', 'Mutation types and consequences', 'Gene expression regulation points', 'Central dogma applications']
          },
          {
            label: 'Mutation types and consequences',
            options: ['Mutation types and consequences', 'Gene expression regulation points', 'codon table practice', 'Central dogma applications']
          },
          {
            label: 'Gene expression regulation points',
            options: ['Gene expression regulation points', 'Central dogma applications', 'codon table practice', 'Mutation types and consequences']
          }
        ],
        correctAnswers: ['Central dogma applications', 'Mutation types and consequences', 'Gene expression regulation points'],
        hint1: 'Think about what each concept specifically describes in Transcription & Translation: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Transcription & Translation: Synthesis & AP Review describes a specific idea. Central dogma applications. Mutation types and consequences. Gene expression regulation points.'
      }
    }
  ]
}
