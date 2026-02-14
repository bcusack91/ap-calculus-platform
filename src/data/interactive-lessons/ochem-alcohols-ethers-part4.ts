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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of ether nomenclature & synthesis?',
            options: [
              'Ethers',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Ethers: R-O-R; named as alkoxy + alkane'
          },
          {
            question: 'In the context of ether nomenclature & synthesis, which is accurate?',
            options: [
              'Ethers are relatively unreactive (good solvents)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Ethers are relatively unreactive (good solvents)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ethers',
            options: ['R-O-R; named as alkoxy + alkane', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Williamson ether synthesis',
            options: ['alkoxide + primary alkyl halide (SN2)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Ethers are relatively unreactive (good solvents)',
            options: ['Ethers are relatively unreactive (good solvents)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['R-O-R; named as alkoxy + alkane', 'alkoxide + primary alkyl halide (SN2)', 'Ethers are relatively unreactive (good solvents)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Ether Nomenclature & Synthesis.'
      }
    }
  ]
}
