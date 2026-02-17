export const bioMendelianPart6Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mend6-intro-p6',
      type: 'text' as const,
      content: `
# ## Mendelian Genetics: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Solving Punnett square problems
2. Determining inheritance patterns from pedigrees
3. Performing chi-square calculations
4. Predicting offspring ratios
      `
    },
    {
      id: 'mend6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Solving Punnett square problems" refer to in biology?',
            options: [
              'Solving Punnett square problems',
              'Predicting offspring ratios',
              'Performing chi-square calculations',
              'Determining inheritance patterns from pedigrees'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Solving Punnett square problems. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Performing chi-square calculations:',
            options: [
              'Determining inheritance patterns from pedigrees',
              'Predicting offspring ratios',
              'Performing chi-square calculations',
              'Solving Punnett square problems'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Performing chi-square calculations. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'mend6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Solving Punnett square problems**
- **Determining inheritance patterns from pedigrees**
- **Performing chi-square calculations**
- **Predicting offspring ratios**
      `
    },
    {
      id: 'mend6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Mendelian Genetics: Problem-Solving Workshop, which correctly describes Predicting offspring ratios?',
            options: [
              'Performing chi-square calculations',
              'Determining inheritance patterns from pedigrees',
              'Solving Punnett square problems',
              'Predicting offspring ratios'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Predicting offspring ratios. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'mend6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Solving Punnett square problems',
            options: ['Performing chi-square calculations', 'Determining inheritance patterns from pedigrees', 'Predicting offspring ratios', 'Solving Punnett square problems']
          },
          {
            label: 'Determining inheritance patterns from…',
            options: ['Solving Punnett square problems', 'Performing chi-square calculations', 'Determining inheritance patterns from pedigrees', 'Predicting offspring ratios']
          },
          {
            label: 'Performing chi-square calculations',
            options: ['Performing chi-square calculations', 'Solving Punnett square problems', 'Predicting offspring ratios', 'Determining inheritance patterns from pedigrees']
          }
        ],
        correctAnswers: ['Solving Punnett square problems', 'Determining inheritance patterns from pedigrees', 'Performing chi-square calculations'],
        hint1: 'Think about what each concept specifically describes in Mendelian Genetics: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Mendelian Genetics: Problem-Solving Workshop describes a specific idea. Solving Punnett square problems. Determining inheritance patterns from pedigrees. Performing chi-square calculations.'
      }
    }
  ]
}
