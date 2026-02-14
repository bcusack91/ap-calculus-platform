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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of nucleic acid chemistry?',
            options: [
              'Phosphodiester bonds link nucleotides 3\' → 5\'',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Phosphodiester bonds link nucleotides 3\' → 5\''
          },
          {
            question: 'In the context of nucleic acid chemistry, which is accurate?',
            options: [
              'antiparallel strands',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Double helix: antiparallel strands'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Phosphodiester bonds link nucleotides 3\' → 5\'',
            options: ['Phosphodiester bonds link nucleotides 3\' → 5\'', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Base pairing',
            options: ['A=T (2 H-bonds), G≡C (3 H-bonds)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Double helix',
            options: ['antiparallel strands', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Phosphodiester bonds link nucleotides 3\' → 5\'', 'A=T (2 H-bonds), G≡C (3 H-bonds)', 'antiparallel strands'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Nucleic Acid Chemistry.'
      }
    }
  ]
}
