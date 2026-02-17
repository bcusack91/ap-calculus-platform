export const oChemMolRepPart7Data = {
  topicSlug: 'molecular-representations',
  sections: [
    {
      id: 'molec7-intro',
      type: 'text' as const,
      content: `
# Synthesis & Review

**Part 7 of 7 — Synthesis & Review**

### 1. Molecular representation is the language of organic chemistry

Molecular representation is the language of organic chemistry

### 2. Functional groups predict reactivity patterns

Functional groups predict reactivity patterns

### 3. Isomers demonstrate structure-property relationships

Isomers demonstrate structure-property relationships

### 4. Review

reading and drawing organic structures
      `
    },
    {
      id: 'molec7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Molecular representation is the…?',
            options: [
              'Functional groups predict reactivity patterns',
              'Molecular representation is the language of organic chemistry',
              'reading and drawing organic structures',
              'Isomers demonstrate structure-property relationships'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Molecular representation is the language of organic chemistry. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Isomers demonstrate structure-property…:',
            options: [
              'Molecular representation is the language of organic chemistry',
              'reading and drawing organic structures',
              'Isomers demonstrate structure-property relationships',
              'Functional groups predict reactivity patterns'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Isomers demonstrate structure-property relationships. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'molec7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Molecular representation is the language of organic chemistry**
- **Functional groups predict reactivity patterns**
- **Isomers demonstrate structure-property relationships**
- **Review**: reading and drawing organic structures
      `
    },
    {
      id: 'molec7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & review?',
            options: [
              'reading and drawing organic structures',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Review: reading and drawing organic structures'
          }
        ]
      }
    },
    {
      id: 'molec7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Molecular representation is the…',
            options: ['Molecular representation is the language of organic chemistry', 'reading and drawing organic structures', 'Functional groups predict reactivity patterns', 'Isomers demonstrate structure-property relationships']
          },
          {
            label: 'Functional groups predict reactivity…',
            options: ['Isomers demonstrate structure-property relationships', 'Functional groups predict reactivity patterns', 'reading and drawing organic structures', 'Molecular representation is the language of organic chemistry']
          },
          {
            label: 'Isomers demonstrate structure-property…',
            options: ['Molecular representation is the language of organic chemistry', 'Functional groups predict reactivity patterns', 'reading and drawing organic structures', 'Isomers demonstrate structure-property relationships']
          }
        ],
        correctAnswers: ['Molecular representation is the language of organic chemistry', 'Functional groups predict reactivity patterns', 'Isomers demonstrate structure-property relationships'],
        hint1: 'Think about what each concept specifically describes in Synthesis & Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & Review describes a specific idea. Molecular representation is the language of organic chemistry. Functional groups predict reactivity patterns. Isomers demonstrate structure-property relationships.'
      }
    }
  ]
}
