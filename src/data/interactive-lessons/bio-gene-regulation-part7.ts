export const bioGeneRegPart7Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'gene7-intro-p7',
      type: 'text' as const,
      content: `
# ## Gene Regulation: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Regulation at every level: DNA → RNA → protein
2. Dysregulation and disease (cancer)
3. Operons on the AP exam
4. Epigenetics as a growing field
      `
    },
    {
      id: 'gene7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Regulation at every level?',
            options: [
              'DNA → RNA → protein',
              'Operons on the AP exam',
              'Epigenetics as a growing field',
              'Dysregulation and disease (cancer)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Regulation at every level: DNA → RNA → protein. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Operons on the AP exam:',
            options: [
              'Operons on the AP exam',
              'Dysregulation and disease (cancer)',
              'Epigenetics as a growing field',
              'DNA → RNA → protein'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Operons on the AP exam. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'gene7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Regulation at every level**: DNA → RNA → protein
- **Dysregulation and disease (cancer)**
- **Operons on the AP exam**
- **Epigenetics as a growing field**
      `
    },
    {
      id: 'gene7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Gene Regulation: Synthesis & AP Review, which correctly describes Epigenetics as a growing field?',
            options: [
              'Operons on the AP exam',
              'Epigenetics as a growing field',
              'DNA → RNA → protein',
              'Dysregulation and disease (cancer)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Epigenetics as a growing field. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'gene7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Regulation at every level',
            options: ['DNA → RNA → protein', 'Operons on the AP exam', 'Epigenetics as a growing field', 'Dysregulation and disease (cancer)']
          },
          {
            label: 'Dysregulation and disease (cancer)',
            options: ['DNA → RNA → protein', 'Epigenetics as a growing field', 'Dysregulation and disease (cancer)', 'Operons on the AP exam']
          },
          {
            label: 'Operons on the AP exam',
            options: ['Operons on the AP exam', 'Dysregulation and disease (cancer)', 'DNA → RNA → protein', 'Epigenetics as a growing field']
          }
        ],
        correctAnswers: ['DNA → RNA → protein', 'Dysregulation and disease (cancer)', 'Operons on the AP exam'],
        hint1: 'Think about what each concept specifically describes in Gene Regulation: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Gene Regulation: Synthesis & AP Review describes a specific idea. Regulation at every level: DNA → RNA → protein. Dysregulation and disease (cancer). Operons on the AP exam.'
      }
    }
  ]
}
