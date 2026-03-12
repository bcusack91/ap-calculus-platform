export const oChemAlcoholsPart4Data = {
  topicSlug: 'alcohols-ethers',
  sections: [
    {
      id: 'alcoh4-intro',
      type: 'text' as const,
      content: `
# Ether Nomenclature & Synthesis

**Part 4 of 7 — Ether Nomenclature & Synthesis**

### 1. Ethers

R-O-R; named as alkoxy + alkane

### 2. Williamson ether synthesis

alkoxide + primary alkyl halide (SN2)

### 3. Ethers are relatively unreactive (good solvents)

Ethers are relatively unreactive (good solvents)

### 4. Crown ethers

cyclic ethers that complex cations
      `
    },
    {
      id: 'alcoh4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Ethers?',
            options: [
              'cyclic ethers that complex cations',
              'Ethers are relatively unreactive (good solvents)',
              'alkoxide + primary alkyl halide (SN2)',
              'R-O-R; named as alkoxy + alkane'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Ethers: R-O-R; named as alkoxy + alkane. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Ethers are relatively unreactive (good…?',
            options: [
              'Ethers are relatively unreactive (good solvents)',
              'cyclic ethers that complex cations',
              'R-O-R; named as alkoxy + alkane',
              'alkoxide + primary alkyl halide (SN2)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Ethers are relatively unreactive (good solvents). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'alcoh4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Ethers**: R-O-R; named as alkoxy + alkane
- **Williamson ether synthesis**: alkoxide + primary alkyl halide (SN2)
- **Ethers are relatively unreactive (good solvents)**
- **Crown ethers**: cyclic ethers that complex cations
      `
    },
    {
      id: 'alcoh4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to ether nomenclature & synthesis?',
            options: [
              'cyclic ethers that complex cations',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Crown ethers: cyclic ethers that complex cations'
          }
        ]
      }
    },
    {
      id: 'alcoh4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ethers',
            options: ['alkoxide + primary alkyl halide (SN2)', 'R-O-R; named as alkoxy + alkane', 'cyclic ethers that complex cations', 'Ethers are relatively unreactive (good solvents)']
          },
          {
            label: 'Williamson ether synthesis',
            options: ['cyclic ethers that complex cations', 'alkoxide + primary alkyl halide (SN2)', 'R-O-R; named as alkoxy + alkane', 'Ethers are relatively unreactive (good solvents)']
          },
          {
            label: 'Crown ethers',
            options: ['cyclic ethers that complex cations', 'R-O-R; named as alkoxy + alkane', 'alkoxide + primary alkyl halide (SN2)', 'Ethers are relatively unreactive (good solvents)']
          }
        ],
        correctAnswers: ['R-O-R; named as alkoxy + alkane', 'alkoxide + primary alkyl halide (SN2)', 'cyclic ethers that complex cations'],
        hint1: 'Think about what each concept specifically describes in Ether Nomenclature & Synthesis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ether Nomenclature & Synthesis describes a specific idea. Ethers: R-O-R; named as alkoxy + alkane. Williamson ether synthesis: alkoxide + primary alkyl halide (SN2). Crown ethers: cyclic ethers that complex cations.'
      }
    }
  ]
}
