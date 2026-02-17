export const oChemLipidsPart5Data = {
  topicSlug: 'lipids-nucleic-acids',
  sections: [
    {
      id: 'lipid5-intro',
      type: 'text' as const,
      content: `
# Nucleic Acid Chemistry

**Part 5 of 7 — Nucleic Acid Chemistry**

### 1. Phosphodiester bonds link nucleotides 3' → 5'

Phosphodiester bonds link nucleotides 3' → 5'

### 2. Base pairing

A=T (2 H-bonds), G≡C (3 H-bonds)

### 3. Double helix

antiparallel strands

### 4. Denaturation and renaturation of DNA

Denaturation and renaturation of DNA
      `
    },
    {
      id: 'lipid5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Phosphodiester bonds link nucleotides…?',
            options: [
              'A=T (2 H-bonds), G≡C (3 H-bonds)',
              'Denaturation and renaturation of DNA',
              'Phosphodiester bonds link nucleotides 3\' → 5\'',
              'antiparallel strands'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Phosphodiester bonds link nucleotides 3\' → 5\'. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Nucleic Acid Chemistry, which explains Double helix?',
            options: [
              'antiparallel strands',
              'Phosphodiester bonds link nucleotides 3\' → 5\'',
              'A=T (2 H-bonds), G≡C (3 H-bonds)',
              'Denaturation and renaturation of DNA'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Double helix: antiparallel strands. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'lipid5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Phosphodiester bonds link nucleotides 3' → 5'**
- **Base pairing**: A=T (2 H-bonds), G≡C (3 H-bonds)
- **Double helix**: antiparallel strands
- **Denaturation and renaturation of DNA**
      `
    },
    {
      id: 'lipid5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to nucleic acid chemistry?',
            options: [
              'Denaturation and renaturation of DNA',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Denaturation and renaturation of DNA'
          }
        ]
      }
    },
    {
      id: 'lipid5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Base pairing',
            options: ['Phosphodiester bonds link nucleotides 3\' → 5\'', 'A=T (2 H-bonds), G≡C (3 H-bonds)', 'Denaturation and renaturation of DNA', 'antiparallel strands']
          },
          {
            label: 'Double helix',
            options: ['Denaturation and renaturation of DNA', 'Phosphodiester bonds link nucleotides 3\' → 5\'', 'A=T (2 H-bonds), G≡C (3 H-bonds)', 'antiparallel strands']
          }
        ],
        correctAnswers: ['A=T (2 H-bonds), G≡C (3 H-bonds)', 'antiparallel strands'],
        hint1: 'Think about what each concept specifically describes in Nucleic Acid Chemistry.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Nucleic Acid Chemistry describes a specific idea. Base pairing: A=T (2 H-bonds), G≡C (3 H-bonds). Double helix: antiparallel strands.'
      }
    }
  ]
}
