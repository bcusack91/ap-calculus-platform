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
            question: 'Which of the following correctly describes Ribosomes read mRNA codons (triplets of…?',
            options: [
              'AUG (methionine)',
              'tRNA carries amino acids; anticodon pairs with codon',
              'Ribosomes read mRNA codons (triplets of nucleotides)',
              'UAA, UAG, UGA'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Ribosomes read mRNA codons (triplets of nucleotides). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Start codon?',
            options: [
              'AUG (methionine)',
              'Ribosomes read mRNA codons (triplets of nucleotides)',
              'tRNA carries amino acids; anticodon pairs with codon',
              'UAA, UAG, UGA'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Start codon: AUG (methionine). Be careful to distinguish between the different concepts in this topic.'
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
              'Ribosomes read mRNA codons (triplets of nucleotides)',
              'UAA, UAG, UGA',
              'AUG (methionine)',
              'tRNA carries amino acids; anticodon pairs with codon'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Stop codons: UAA, UAG, UGA. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
