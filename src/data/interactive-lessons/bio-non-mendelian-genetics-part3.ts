export const bioNonMendelianPart3Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-3-intro-p3',
      type: 'text' as const,
      content: `
# ## Epistasis

**Part 3 of 7 — Epistasis**

1. One gene masks the expression of another
2. Example: coat color in Labrador retrievers (E gene masks B gene)
3. Modified dihybrid ratios: 9:3:4, 12:3:1, 9:7
4. Different from dominance (which is within one gene)
      `
    },
    {
      id: 'non-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes One gene masks the expression of another?',
            options: [
              'One gene masks the expression of another',
              '9:3:4, 12:3:1, 9:7',
              'coat color in Labrador retrievers (E gene masks B gene)',
              'Different from dominance (which is within one gene)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — One gene masks the expression of another. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Epistasis, which explains Modified dihybrid ratios?',
            options: [
              'coat color in Labrador retrievers (E gene masks B gene)',
              'Different from dominance (which is within one gene)',
              '9:3:4, 12:3:1, 9:7',
              'One gene masks the expression of another'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Modified dihybrid ratios: 9:3:4, 12:3:1, 9:7. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'non-3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **One gene masks the expression of another**
- **Example**: coat color in Labrador retrievers (E gene masks B gene)
- **Modified dihybrid ratios**: 9:3:4, 12:3:1, 9:7
- **Different from dominance (which is within one gene)**
      `
    },
    {
      id: 'non-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Epistasis, which correctly describes Different from dominance (which is…?',
            options: [
              '9:3:4, 12:3:1, 9:7',
              'Different from dominance (which is within one gene)',
              'One gene masks the expression of another',
              'coat color in Labrador retrievers (E gene masks B gene)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Different from dominance (which is within one gene). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'non-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Example',
            options: ['One gene masks the expression of another', 'Different from dominance (which is within one gene)', '9:3:4, 12:3:1, 9:7', 'coat color in Labrador retrievers (E gene masks B gene)']
          },
          {
            label: 'Modified dihybrid ratios',
            options: ['coat color in Labrador retrievers (E gene masks B gene)', 'One gene masks the expression of another', 'Different from dominance (which is within one gene)', '9:3:4, 12:3:1, 9:7']
          }
        ],
        correctAnswers: ['coat color in Labrador retrievers (E gene masks B gene)', '9:3:4, 12:3:1, 9:7'],
        hint1: 'Think about what each concept specifically describes in Epistasis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Epistasis describes a specific idea. Example: coat color in Labrador retrievers (E gene masks B gene). Modified dihybrid ratios: 9:3:4, 12:3:1, 9:7.'
      }
    }
  ]
}
