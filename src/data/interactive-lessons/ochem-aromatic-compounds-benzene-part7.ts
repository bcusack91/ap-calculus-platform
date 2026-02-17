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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Aromaticity is a fundamental concept in…" refer to in this topic?',
            options: [
              'Hückel\'s rule predicts stability',
              'Aromatic compounds prefer substitution over addition',
              'Aromaticity is a fundamental concept in organic chemistry',
              'aromaticity and nomenclature'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Aromaticity is a fundamental concept in organic chemistry. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Synthesis & Review, which explains Aromatic compounds prefer substitution…?',
            options: [
              'Hückel\'s rule predicts stability',
              'aromaticity and nomenclature',
              'Aromaticity is a fundamental concept in organic chemistry',
              'Aromatic compounds prefer substitution over addition'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Aromatic compounds prefer substitution over addition. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Aromaticity is a fundamental concept in…',
            options: ['Hückel\'s rule predicts stability', 'Aromaticity is a fundamental concept in organic chemistry', 'aromaticity and nomenclature', 'Aromatic compounds prefer substitution over addition']
          },
          {
            label: 'Hückel\'s rule predicts stability',
            options: ['Hückel\'s rule predicts stability', 'Aromaticity is a fundamental concept in organic chemistry', 'Aromatic compounds prefer substitution over addition', 'aromaticity and nomenclature']
          },
          {
            label: 'Aromatic compounds prefer substitution…',
            options: ['aromaticity and nomenclature', 'Aromatic compounds prefer substitution over addition', 'Hückel\'s rule predicts stability', 'Aromaticity is a fundamental concept in organic chemistry']
          }
        ],
        correctAnswers: ['Aromaticity is a fundamental concept in organic chemistry', 'Hückel\'s rule predicts stability', 'Aromatic compounds prefer substitution over addition'],
        hint1: 'Think about what each concept specifically describes in Synthesis & Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & Review describes a specific idea. Aromaticity is a fundamental concept in organic chemistry. Hückel\'s rule predicts stability. Aromatic compounds prefer substitution over addition.'
      }
    }
  ]
}
