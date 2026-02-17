export const bioNonMendelianPart5Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-5-intro-p5',
      type: 'text' as const,
      content: `
# ## Environmental Effects on Phenotype

**Part 5 of 7 — Environmental Effects on Phenotype**

1. Phenotype = genotype + environment
2. Temperature-sensitive alleles: Siamese cats
3. Nutrition affects height (polygenic)
4. Epigenetics: environmental factors affect gene expression
      `
    },
    {
      id: 'non-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Phenotype = genotype + environment?',
            options: [
              'Nutrition affects height (polygenic)',
              'Siamese cats',
              'environmental factors affect gene expression',
              'Phenotype = genotype + environment'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Phenotype = genotype + environment. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Environmental Effects on Phenotype, which explains Nutrition affects height (polygenic)?',
            options: [
              'environmental factors affect gene expression',
              'Siamese cats',
              'Nutrition affects height (polygenic)',
              'Phenotype = genotype + environment'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Nutrition affects height (polygenic). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'non-5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Phenotype = genotype + environment**
- **Temperature-sensitive alleles**: Siamese cats
- **Nutrition affects height (polygenic)**
- **Epigenetics**: environmental factors affect gene expression
      `
    },
    {
      id: 'non-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Epigenetics?',
            options: [
              'environmental factors affect gene expression',
              'Phenotype = genotype + environment',
              'Siamese cats',
              'Nutrition affects height (polygenic)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Epigenetics: environmental factors affect gene expression. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'non-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Temperature-sensitive alleles',
            options: ['Siamese cats', 'environmental factors affect gene expression', 'Phenotype = genotype + environment', 'Nutrition affects height (polygenic)']
          },
          {
            label: 'Epigenetics',
            options: ['environmental factors affect gene expression', 'Phenotype = genotype + environment', 'Nutrition affects height (polygenic)', 'Siamese cats']
          }
        ],
        correctAnswers: ['Siamese cats', 'environmental factors affect gene expression'],
        hint1: 'Think about what each concept specifically describes in Environmental Effects on Phenotype.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Environmental Effects on Phenotype describes a specific idea. Temperature-sensitive alleles: Siamese cats. Epigenetics: environmental factors affect gene expression.'
      }
    }
  ]
}
