export const oChemLipidsPart4Data = {
  topicSlug: 'lipids-nucleic-acids',
  sections: [
    {
      id: 'lipid4-intro',
      type: 'text' as const,
      content: `
# Nucleotide Structure

**Part 4 of 7 — Nucleotide Structure**

### 1. Nucleotides

base + sugar + phosphate

### 2. Purines (A, G)

two fused rings; Pyrimidines (C, T, U): one ring

### 3. DNA

deoxyribose + A, G, C, T

### 4. RNA

ribose + A, G, C, U
      `
    },
    {
      id: 'lipid4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of nucleotide structure?',
            options: [
              'Nucleotides',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Nucleotides: base + sugar + phosphate'
          },
          {
            question: 'In the context of nucleotide structure, which is accurate?',
            options: [
              'deoxyribose + A, G, C, T',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'DNA: deoxyribose + A, G, C, T'
          }
        ]
      }
    },
    {
      id: 'lipid4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Nucleotides**: base + sugar + phosphate
- **Purines (A, G)**: two fused rings; Pyrimidines (C, T, U): one ring
- **DNA**: deoxyribose + A, G, C, T
- **RNA**: ribose + A, G, C, U
      `
    },
    {
      id: 'lipid4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to nucleotide structure?',
            options: [
              'ribose + A, G, C, U',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'RNA: ribose + A, G, C, U'
          }
        ]
      }
    },
    {
      id: 'lipid4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nucleotides',
            options: ['base + sugar + phosphate', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Purines (A, G)',
            options: ['two fused rings; Pyrimidines (C, T, U): one ring', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'DNA',
            options: ['deoxyribose + A, G, C, T', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['base + sugar + phosphate', 'two fused rings; Pyrimidines (C, T, U): one ring', 'deoxyribose + A, G, C, T'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Nucleotide Structure.'
      }
    }
  ]
}
