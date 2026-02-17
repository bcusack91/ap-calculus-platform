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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Tests if observed data fits expected…" refer to in biology?',
            options: [
              'Tests if observed data fits expected ratios',
              'χ² = Σ (observed - expected)² / expected',
              'Degrees of freedom = categories - 1',
              'reject null hypothesis (results differ significantly)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Tests if observed data fits expected ratios. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Degrees of freedom = categories - 1:',
            options: [
              'Degrees of freedom = categories - 1',
              'Tests if observed data fits expected ratios',
              'reject null hypothesis (results differ significantly)',
              'χ² = Σ (observed - expected)² / expected'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Degrees of freedom = categories - 1. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents p < 0.05?',
            options: [
              'reject null hypothesis (results differ significantly)',
              'Tests if observed data fits expected ratios',
              'Degrees of freedom = categories - 1',
              'χ² = Σ (observed - expected)² / expected'
            ],
            correctAnswer: 0,
            explanation: 'Correct — p < 0.05: reject null hypothesis (results differ significantly). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'mend5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Tests if observed data fits expected…',
            options: ['Tests if observed data fits expected ratios', 'reject null hypothesis (results differ significantly)', 'Degrees of freedom = categories - 1', 'χ² = Σ (observed - expected)² / expected']
          },
          {
            label: 'χ² = Σ (observed - expected)² / expected',
            options: ['Tests if observed data fits expected ratios', 'Degrees of freedom = categories - 1', 'reject null hypothesis (results differ significantly)', 'χ² = Σ (observed - expected)² / expected']
          },
          {
            label: 'Degrees of freedom = categories - 1',
            options: ['Tests if observed data fits expected ratios', 'reject null hypothesis (results differ significantly)', 'χ² = Σ (observed - expected)² / expected', 'Degrees of freedom = categories - 1']
          }
        ],
        correctAnswers: ['Tests if observed data fits expected ratios', 'χ² = Σ (observed - expected)² / expected', 'Degrees of freedom = categories - 1'],
        hint1: 'Think about what each concept specifically describes in Chi-Square Analysis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Chi-Square Analysis describes a specific idea. Tests if observed data fits expected ratios. χ² = Σ (observed - expected)² / expected. Degrees of freedom = categories - 1.'
      }
    }
  ]
}
