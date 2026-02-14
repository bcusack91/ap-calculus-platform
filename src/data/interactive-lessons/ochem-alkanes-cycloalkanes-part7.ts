export const oChemAlkanesPart7Data = {
  topicSlug: 'alkanes-cycloalkanes',
  sections: [
    {
      id: 'alkan7-intro',
      type: 'text' as const,
      content: `
# Synthesis & Review

**Part 7 of 7 — Synthesis & Review**

### 1. Nomenclature is essential for communication

Nomenclature is essential for communication

### 2. Conformational analysis predicts stability

Conformational analysis predicts stability

### 3. Ring strain affects reactivity

Ring strain affects reactivity

### 4. Review

alkane naming and conformations
      `
    },
    {
      id: 'alkan7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & review?',
            options: [
              'Nomenclature is essential for communication',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Nomenclature is essential for communication'
          },
          {
            question: 'In the context of synthesis & review, which is accurate?',
            options: [
              'Ring strain affects reactivity',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Ring strain affects reactivity'
          }
        ]
      }
    },
    {
      id: 'alkan7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Nomenclature is essential for communication**
- **Conformational analysis predicts stability**
- **Ring strain affects reactivity**
- **Review**: alkane naming and conformations
      `
    },
    {
      id: 'alkan7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & review?',
            options: [
              'alkane naming and conformations',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Review: alkane naming and conformations'
          }
        ]
      }
    },
    {
      id: 'alkan7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nomenclature is essential for communication',
            options: ['Nomenclature is essential for communication', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Conformational analysis predicts stability',
            options: ['Conformational analysis predicts stability', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Ring strain affects reactivity',
            options: ['Ring strain affects reactivity', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Nomenclature is essential for communication', 'Conformational analysis predicts stability', 'Ring strain affects reactivity'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & Review.'
      }
    }
  ]
}
