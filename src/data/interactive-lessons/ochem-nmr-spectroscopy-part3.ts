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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Integration?',
            options: [
              '1 neighbor; Triplet: 2 neighbors; Quartet: 3 neighbors',
              'n equivalent neighbors → n+1 peaks',
              'distance between split peaks in Hz',
              'area under peak proportional to number of H\'s'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Integration: area under peak proportional to number of H\'s. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Integration & Splitting, which explains Doublet?',
            options: [
              'distance between split peaks in Hz',
              'n equivalent neighbors → n+1 peaks',
              '1 neighbor; Triplet: 2 neighbors; Quartet: 3 neighbors',
              'area under peak proportional to number of H\'s'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Doublet: 1 neighbor; Triplet: 2 neighbors; Quartet: 3 neighbors. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Integration',
            options: ['distance between split peaks in Hz', 'n equivalent neighbors → n+1 peaks', '1 neighbor; Triplet: 2 neighbors; Quartet: 3 neighbors', 'area under peak proportional to number of H\'s']
          },
          {
            label: 'Splitting (n+1 rule)',
            options: ['1 neighbor; Triplet: 2 neighbors; Quartet: 3 neighbors', 'n equivalent neighbors → n+1 peaks', 'area under peak proportional to number of H\'s', 'distance between split peaks in Hz']
          },
          {
            label: 'Doublet',
            options: ['1 neighbor; Triplet: 2 neighbors; Quartet: 3 neighbors', 'n equivalent neighbors → n+1 peaks', 'distance between split peaks in Hz', 'area under peak proportional to number of H\'s']
          }
        ],
        correctAnswers: ['area under peak proportional to number of H\'s', 'n equivalent neighbors → n+1 peaks', '1 neighbor; Triplet: 2 neighbors; Quartet: 3 neighbors'],
        hint1: 'Think about what each concept specifically describes in Integration & Splitting.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Integration & Splitting describes a specific idea. Integration: area under peak proportional to number of H\'s. Splitting (n+1 rule): n equivalent neighbors → n+1 peaks. Doublet: 1 neighbor; Triplet: 2 neighbors; Quartet: 3 neighbors.'
      }
    }
  ]
}
