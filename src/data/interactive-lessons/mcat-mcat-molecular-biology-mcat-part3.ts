export const mcatMolBioPart3Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Translation & Protein Synthesis

**Part 3 of 7 — Translation & Protein Synthesis**

Ribosome: small subunit reads mRNA; large subunit catalyzes peptide bond formation.

Start codon AUG (methionine) initiates translation; 3 stop codons: UAA, UAG, UGA.
      `
    },
    {
      id: 'mcat-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in translation & protein synthesis?',
            options: [
              'Ribosome: small subunit reads mRNA; large subunit catalyzes peptide bond formation',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Ribosome: small subunit reads mRNA; large subunit catalyzes peptide bond formation'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** tRNA anticodon pairs with mRNA codon; aminoacyl-tRNA synthetase charges tRNA with correct amino acid.

**MCAT Tip:** Post-translational modifications: phosphorylation, glycosylation, ubiquitination, proteolytic cleavage.
      `
    },
    {
      id: 'mcat-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to translation & protein synthesis?',
            options: [
              'tRNA anticodon pairs with mRNA codon; aminoacyl-tRNA synthetase charges tRNA with correct amino acid',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'tRNA anticodon pairs with mRNA codon; aminoacyl-tRNA synthetase charges tRNA with correct amino acid'
          }
        ]
      }
    },
    {
      id: 'mcat-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ribosome',
            options: ['Post-translational modifications: phosphorylation, glycosylation, ubiquitination, proteolytic cleavage.', 'tRNA anticodon pairs with mRNA codon; aminoacyl-tRNA synthetase charges tRNA with correct amino acid.', 'UAA, UAG, UGA.', 'small subunit reads mRNA; large subunit catalyzes peptide bond formation.']
          },
          {
            label: 'Start codon AUG (methionine) initiates translation; 3 stop codons',
            options: ['tRNA anticodon pairs with mRNA codon; aminoacyl-tRNA synthetase charges tRNA with correct amino acid.', 'Post-translational modifications: phosphorylation, glycosylation, ubiquitination, proteolytic cleavage.', 'small subunit reads mRNA; large subunit catalyzes peptide bond formation.', 'UAA, UAG, UGA.']
          },
          {
            label: 'Key Insight',
            options: ['tRNA anticodon pairs with mRNA codon; aminoacyl-tRNA synthetase charges tRNA with correct amino acid.', 'UAA, UAG, UGA.', 'Post-translational modifications: phosphorylation, glycosylation, ubiquitination, proteolytic cleavage.', 'small subunit reads mRNA; large subunit catalyzes peptide bond formation.']
          }
        ],
        correctAnswers: ['small subunit reads mRNA; large subunit catalyzes peptide bond formation.', 'UAA, UAG, UGA.', 'tRNA anticodon pairs with mRNA codon; aminoacyl-tRNA synthetase charges tRNA with correct amino acid.'],
        hint1: 'Think about what each concept specifically describes in Translation & Protein Synthesis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Translation & Protein Synthesis describes a specific idea. Ribosome: small subunit reads mRNA; large subunit catalyzes peptide bond formation. Start codon AUG (methionine) initiates translation; 3 stop codons: UAA, UAG, UGA. Key Insight: tRNA anticodon pairs with mRNA codon; aminoacyl-tRNA synthetase charges tRNA with correct amino acid.'
      }
    }
  ]
}
