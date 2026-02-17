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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Nucleotides?',
            options: [
              'two fused rings; Pyrimidines (C, T, U): one ring',
              'ribose + A, G, C, U',
              'deoxyribose + A, G, C, T',
              'base + sugar + phosphate'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Nucleotides: base + sugar + phosphate. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Nucleotide Structure, which explains DNA?',
            options: [
              'two fused rings; Pyrimidines (C, T, U): one ring',
              'ribose + A, G, C, U',
              'deoxyribose + A, G, C, T',
              'base + sugar + phosphate'
            ],
            correctAnswer: 2,
            explanation: 'Correct — DNA: deoxyribose + A, G, C, T. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nucleotides',
            options: ['deoxyribose + A, G, C, T', 'ribose + A, G, C, U', 'two fused rings; Pyrimidines (C, T, U): one ring', 'base + sugar + phosphate']
          },
          {
            label: 'Purines (A, G)',
            options: ['deoxyribose + A, G, C, T', 'base + sugar + phosphate', 'two fused rings; Pyrimidines (C, T, U): one ring', 'ribose + A, G, C, U']
          },
          {
            label: 'DNA',
            options: ['two fused rings; Pyrimidines (C, T, U): one ring', 'base + sugar + phosphate', 'ribose + A, G, C, U', 'deoxyribose + A, G, C, T']
          }
        ],
        correctAnswers: ['base + sugar + phosphate', 'two fused rings; Pyrimidines (C, T, U): one ring', 'deoxyribose + A, G, C, T'],
        hint1: 'Think about what each concept specifically describes in Nucleotide Structure.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Nucleotide Structure describes a specific idea. Nucleotides: base + sugar + phosphate. Purines (A, G): two fused rings; Pyrimidines (C, T, U): one ring. DNA: deoxyribose + A, G, C, T.'
      }
    }
  ]
}
