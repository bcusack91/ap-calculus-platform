export const oChemEnolatePart4Data = {
  topicSlug: 'enolate-chemistry',
  sections: [
    {
      id: 'enola4-intro',
      type: 'text' as const,
      content: `
# Claisen Condensation

**Part 4 of 7 — Claisen Condensation**

### 1. Claisen condensation

ester enolate + ester → β-keto ester

### 2. Requires at least 2 α-hydrogens on starting ester

Requires at least 2 α-hydrogens on starting ester

### 3. Dieckmann cyclization

intramolecular Claisen

### 4. Decarboxylation of β-keto acids → ketones

Decarboxylation of β-keto acids → ketones
      `
    },
    {
      id: 'enola4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Claisen condensation?',
            options: [
              'ester enolate + ester → β-keto ester',
              'Requires at least 2 α-hydrogens on starting ester',
              'Decarboxylation of β-keto acids → ketones',
              'intramolecular Claisen'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Claisen condensation: ester enolate + ester → β-keto ester. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Dieckmann cyclization:',
            options: [
              'Requires at least 2 α-hydrogens on starting ester',
              'Decarboxylation of β-keto acids → ketones',
              'ester enolate + ester → β-keto ester',
              'intramolecular Claisen'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Dieckmann cyclization: intramolecular Claisen. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'enola4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Claisen condensation**: ester enolate + ester → β-keto ester
- **Requires at least 2 α-hydrogens on starting ester**
- **Dieckmann cyclization**: intramolecular Claisen
- **Decarboxylation of β-keto acids → ketones**
      `
    },
    {
      id: 'enola4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to claisen condensation?',
            options: [
              'Decarboxylation of β-keto acids → ketones',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Decarboxylation of β-keto acids → ketones'
          }
        ]
      }
    },
    {
      id: 'enola4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Claisen condensation',
            options: ['Requires at least 2 α-hydrogens on starting ester', 'intramolecular Claisen', 'Decarboxylation of β-keto acids → ketones', 'ester enolate + ester → β-keto ester']
          },
          {
            label: 'Dieckmann cyclization',
            options: ['ester enolate + ester → β-keto ester', 'intramolecular Claisen', 'Decarboxylation of β-keto acids → ketones', 'Requires at least 2 α-hydrogens on starting ester']
          }
        ],
        correctAnswers: ['ester enolate + ester → β-keto ester', 'intramolecular Claisen'],
        hint1: 'Think about what each concept specifically describes in Claisen Condensation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Claisen Condensation describes a specific idea. Claisen condensation: ester enolate + ester → β-keto ester. Dieckmann cyclization: intramolecular Claisen.'
      }
    }
  ]
}
