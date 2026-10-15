export const bioTranscriptionPart4Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran4-intro-p4',
      type: 'text' as const,
      content: `
## Translation

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does a ribosome read on an mRNA molecule during translation?',
            options: [
              'Single nucleotides, each one specifying a single amino acid',
              'Anticodons, three-base sequences found on the tRNA molecules',
              'Codons, three-nucleotide sequences that each specify an amino acid',
              'Promoters, DNA sequences where translation begins on the gene'
            ],
            correctAnswer: 2,
            explanation: 'Ribosomes read mRNA in codons, consecutive triplets of nucleotides; each codon specifies one amino acid or a stop signal. Anticodons are on tRNAs and pair with the codons, and promoters are DNA sequences that control transcription, not translation.'
          },
          {
            question: 'Which of the following is true about Start codon?',
            options: [
              'It is AUG and codes for methionine',
              'It is UAA and codes for no amino acid',
              'It is AUG and codes for no amino acid',
              'It is UGA and codes for methionine'
            ],
            correctAnswer: 0,
            explanation: 'The start codon is AUG, which also codes for methionine, so polypeptides begin with methionine (it may be removed later). UAA and UGA are stop codons and do not code for any amino acid.'
          }
        ]
      }
    },
    {
      id: 'tran4-detail-p4',
      type: 'text' as const,
      content: `
### Key Details

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Stop codons?',
            options: [
              'AUG, UAG, UGA',
              'UAA, UAG, UGA',
              'UAA, AUG, UGG',
              'UAC, UAG, UGA'
            ],
            correctAnswer: 1,
            explanation: 'The three stop codons are UAA, UAG and UGA; they code for no amino acid and signal release of the polypeptide. AUG is the start codon (methionine), UGG codes for tryptophan, and UAC codes for tyrosine.'
          }
        ]
      }
    },
    {
      id: 'tran4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Start codon',
            options: ['Ribosomes read mRNA codons (triplets of nucleotides)', 'UAA, UAG, UGA', 'tRNA carries amino acids; anticodon pairs with codon', 'AUG (methionine)']
          },
          {
            label: 'Stop codons',
            options: ['Ribosomes read mRNA codons (triplets of nucleotides)', 'AUG (methionine)', 'tRNA carries amino acids; anticodon pairs with codon', 'UAA, UAG, UGA']
          }
        ],
        correctAnswers: ['AUG (methionine)', 'UAA, UAG, UGA'],
        hint1: 'Think about what each concept specifically describes in Translation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Translation describes a specific idea. Start codon: AUG (methionine). Stop codons: UAA, UAG, UGA.'
      }
    }
  ]
}
