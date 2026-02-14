export const bioMendelianPart5Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mend5-intro-p5',
      type: 'text' as const,
      content: `
# ## Chi-Square Analysis

**Part 5 of 7 — Chi-Square Analysis**

1. Tests if observed data fits expected ratios
2. χ² = Σ (observed - expected)² / expected
3. Degrees of freedom = categories - 1
4. p < 0.05: reject null hypothesis (results differ significantly)
      `
    },
    {
      id: 'mend5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes tests if observed data fits expected ratios?',
            options: [
              'Tests if observed data fits expected ratios',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Tests if observed data fits expected ratios'
          },
          {
            question: 'In the context of chi-square analysis, which statement is accurate?',
            options: [
              'Degrees of freedom = categories - 1',
              'soitar detcepxe stif atad devresbo fi stseT',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Degrees of freedom = categories - 1'
          }
        ]
      }
    },
    {
      id: 'mend5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Tests if observed data fits expected ratios**
- **χ² = Σ (observed - expected)² / expected**
- **Degrees of freedom = categories - 1**
- **p < 0.05**: reject null hypothesis (results differ significantly)
      `
    },
    {
      id: 'mend5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to chi-square analysis?',
            options: [
              'p < 0.05: reject null hypothesis (results differ significantly)',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'p < 0.05: reject null hypothesis (results differ significantly)'
          }
        ]
      }
    },
    {
      id: 'mend5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Tests if observed data fits expected ratios is important in chi-square analysis because',
            options: ['Tests if observed data fits expected ratios', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'χ² = Σ (observed - expected)² / expected is important in chi-square analysis because',
            options: ['χ² = Σ (observed - expected)² / expected', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Degrees of freedom = categories - 1 is important in chi-square analysis because',
            options: ['Degrees of freedom = categories - 1', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Tests if observed data fits expected ratios', 'χ² = Σ (observed - expected)² / expected', 'Degrees of freedom = categories - 1'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Chi-Square Analysis.'
      }
    }
  ]
}
