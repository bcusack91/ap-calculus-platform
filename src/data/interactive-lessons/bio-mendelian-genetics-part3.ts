export const bioMendelianPart3Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mend3-intro-p3',
      type: 'text' as const,
      content: `
# ## Dihybrid Crosses

**Part 3 of 7 — Dihybrid Crosses**

1. Two-gene Punnett square (4×4 = 16 outcomes)
2. Expected phenotypic ratio: 9:3:3:1
3. AaBb × AaBb cross
4. Deviation from 9:3:3:1 suggests gene linkage
      `
    },
    {
      id: 'mend3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Two-gene Punnett square (4×4 = 16…" refer to in biology?',
            options: [
              'Two-gene Punnett square (4×4 = 16 outcomes)',
              '9:3:3:1',
              '3:3:1 suggests gene linkage',
              'AaBb × AaBb cross'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Two-gene Punnett square (4×4 = 16 outcomes). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes AaBb × AaBb cross:',
            options: [
              '9:3:3:1',
              'AaBb × AaBb cross',
              'Two-gene Punnett square (4×4 = 16 outcomes)',
              '3:3:1 suggests gene linkage'
            ],
            correctAnswer: 1,
            explanation: 'Correct — AaBb × AaBb cross. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'mend3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Two-gene Punnett square (4×4 = 16 outcomes)**
- **Expected phenotypic ratio**: 9:3:3:1
- **AaBb × AaBb cross**
- **Deviation from 9**:3:3:1 suggests gene linkage
      `
    },
    {
      id: 'mend3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Dihybrid Crosses, which correctly describes Deviation from 9?',
            options: [
              '9:3:3:1',
              'Two-gene Punnett square (4×4 = 16 outcomes)',
              'AaBb × AaBb cross',
              '3:3:1 suggests gene linkage'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Deviation from 9: 3:3:1 suggests gene linkage. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'mend3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Expected phenotypic ratio',
            options: ['Two-gene Punnett square (4×4 = 16 outcomes)', 'AaBb × AaBb cross', '3:3:1 suggests gene linkage', '9:3:3:1']
          },
          {
            label: 'Deviation from 9',
            options: ['3:3:1 suggests gene linkage', 'Two-gene Punnett square (4×4 = 16 outcomes)', '9:3:3:1', 'AaBb × AaBb cross']
          }
        ],
        correctAnswers: ['9:3:3:1', '3:3:1 suggests gene linkage'],
        hint1: 'Think about what each concept specifically describes in Dihybrid Crosses.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Dihybrid Crosses describes a specific idea. Expected phenotypic ratio: 9:3:3:1. Deviation from 9: 3:3:1 suggests gene linkage.'
      }
    }
  ]
}
