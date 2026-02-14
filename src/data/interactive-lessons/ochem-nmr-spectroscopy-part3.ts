export const oChemNMRPart3Data = {
  topicSlug: 'nmr-spectroscopy',
  sections: [
    {
      id: 'nmr-s3-intro',
      type: 'text' as const,
      content: `
# Integration & Splitting

**Part 3 of 7 — Integration & Splitting**

### 1. Integration

area under peak proportional to number of H's

### 2. Splitting (n+1 rule)

n equivalent neighbors → n+1 peaks

### 3. Doublet

1 neighbor; Triplet: 2 neighbors; Quartet: 3 neighbors

### 4. Coupling constant (J)

distance between split peaks in Hz
      `
    },
    {
      id: 'nmr-s3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of integration & splitting?',
            options: [
              'Integration',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Integration: area under peak proportional to number of H\'s'
          },
          {
            question: 'In the context of integration & splitting, which is accurate?',
            options: [
              '1 neighbor; Triplet: 2 neighbors; Quartet: 3 neighbors',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Doublet: 1 neighbor; Triplet: 2 neighbors; Quartet: 3 neighbors'
          }
        ]
      }
    },
    {
      id: 'nmr-s3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Integration**: area under peak proportional to number of H's
- **Splitting (n+1 rule)**: n equivalent neighbors → n+1 peaks
- **Doublet**: 1 neighbor; Triplet: 2 neighbors; Quartet: 3 neighbors
- **Coupling constant (J)**: distance between split peaks in Hz
      `
    },
    {
      id: 'nmr-s3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to integration & splitting?',
            options: [
              'distance between split peaks in Hz',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Coupling constant (J): distance between split peaks in Hz'
          }
        ]
      }
    },
    {
      id: 'nmr-s3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Integration',
            options: ['area under peak proportional to number of H\'s', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Splitting (n+1 rule)',
            options: ['n equivalent neighbors → n+1 peaks', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Doublet',
            options: ['1 neighbor; Triplet: 2 neighbors; Quartet: 3 neigh', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['area under peak proportional to number of H\'s', 'n equivalent neighbors → n+1 peaks', '1 neighbor; Triplet: 2 neighbors; Quartet: 3 neigh'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Integration & Splitting.'
      }
    }
  ]
}
