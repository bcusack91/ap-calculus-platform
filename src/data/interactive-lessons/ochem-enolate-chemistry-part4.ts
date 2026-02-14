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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of claisen condensation?',
            options: [
              'Claisen condensation',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Claisen condensation: ester enolate + ester → β-keto ester'
          },
          {
            question: 'In the context of claisen condensation, which is accurate?',
            options: [
              'intramolecular Claisen',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Dieckmann cyclization: intramolecular Claisen'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Claisen condensation',
            options: ['ester enolate + ester → β-keto ester', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Requires at least 2 α-hydrogens on starting ester',
            options: ['Requires at least 2 α-hydrogens on starting ester', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Dieckmann cyclization',
            options: ['intramolecular Claisen', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['ester enolate + ester → β-keto ester', 'Requires at least 2 α-hydrogens on starting ester', 'intramolecular Claisen'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Claisen Condensation.'
      }
    }
  ]
}
