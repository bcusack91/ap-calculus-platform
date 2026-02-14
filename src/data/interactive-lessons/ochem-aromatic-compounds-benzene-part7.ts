export const oChemAromaticPart7Data = {
  topicSlug: 'aromatic-compounds-benzene',
  sections: [
    {
      id: 'aroma7-intro',
      type: 'text' as const,
      content: `
# Synthesis & Review

**Part 7 of 7 — Synthesis & Review**

### 1. Aromaticity is a fundamental concept in organic chemistry

Aromaticity is a fundamental concept in organic chemistry

### 2. Hückel's rule predicts stability

Hückel's rule predicts stability

### 3. Aromatic compounds prefer substitution over addition

Aromatic compounds prefer substitution over addition

### 4. Review

aromaticity and nomenclature
      `
    },
    {
      id: 'aroma7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & review?',
            options: [
              'Aromaticity is a fundamental concept in organic chemistry',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Aromaticity is a fundamental concept in organic chemistry'
          },
          {
            question: 'In the context of synthesis & review, which is accurate?',
            options: [
              'Aromatic compounds prefer substitution over addition',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Aromatic compounds prefer substitution over addition'
          }
        ]
      }
    },
    {
      id: 'aroma7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Aromaticity is a fundamental concept in organic chemistry**
- **Hückel's rule predicts stability**
- **Aromatic compounds prefer substitution over addition**
- **Review**: aromaticity and nomenclature
      `
    },
    {
      id: 'aroma7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & review?',
            options: [
              'aromaticity and nomenclature',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Review: aromaticity and nomenclature'
          }
        ]
      }
    },
    {
      id: 'aroma7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Aromaticity is a fundamental concept in organic chemistry',
            options: ['Aromaticity is a fundamental concept in organic ch', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Hückel\'s rule predicts stability',
            options: ['Hückel\'s rule predicts stability', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Aromatic compounds prefer substitution over addition',
            options: ['Aromatic compounds prefer substitution over additi', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Aromaticity is a fundamental concept in organic ch', 'Hückel\'s rule predicts stability', 'Aromatic compounds prefer substitution over additi'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & Review.'
      }
    }
  ]
}
