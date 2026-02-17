export const bioFitnessPart2Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'fitn2-intro-p2',
      type: 'text' as const,
      content: `
# ## Phenotype & Environment

**Part 2 of 7 — Phenotype & Environment**

1. Phenotype = genotype + environment
2. Norm of reaction: range of phenotypes from one genotype
3. Phenotypic plasticity: ability to change phenotype
4. Examples: skin tanning, muscle growth, plant growth toward light
      `
    },
    {
      id: 'fitn2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Phenotype = genotype + environment?',
            options: [
              'skin tanning, muscle growth, plant growth toward light',
              'ability to change phenotype',
              'range of phenotypes from one genotype',
              'Phenotype = genotype + environment'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Phenotype = genotype + environment. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Phenotypic plasticity:',
            options: [
              'Phenotype = genotype + environment',
              'range of phenotypes from one genotype',
              'skin tanning, muscle growth, plant growth toward light',
              'ability to change phenotype'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Phenotypic plasticity: ability to change phenotype. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'fitn2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Phenotype = genotype + environment**
- **Norm of reaction**: range of phenotypes from one genotype
- **Phenotypic plasticity**: ability to change phenotype
- **Examples**: skin tanning, muscle growth, plant growth toward light
      `
    },
    {
      id: 'fitn2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Examples?',
            options: [
              'Phenotype = genotype + environment',
              'ability to change phenotype',
              'skin tanning, muscle growth, plant growth toward light',
              'range of phenotypes from one genotype'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Examples: skin tanning, muscle growth, plant growth toward light. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'fitn2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Norm of reaction',
            options: ['ability to change phenotype', 'Phenotype = genotype + environment', 'skin tanning, muscle growth, plant growth toward light', 'range of phenotypes from one genotype']
          },
          {
            label: 'Phenotypic plasticity',
            options: ['range of phenotypes from one genotype', 'Phenotype = genotype + environment', 'skin tanning, muscle growth, plant growth toward light', 'ability to change phenotype']
          },
          {
            label: 'Examples',
            options: ['ability to change phenotype', 'Phenotype = genotype + environment', 'range of phenotypes from one genotype', 'skin tanning, muscle growth, plant growth toward light']
          }
        ],
        correctAnswers: ['range of phenotypes from one genotype', 'ability to change phenotype', 'skin tanning, muscle growth, plant growth toward light'],
        hint1: 'Think about what each concept specifically describes in Phenotype & Environment.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Phenotype & Environment describes a specific idea. Norm of reaction: range of phenotypes from one genotype. Phenotypic plasticity: ability to change phenotype. Examples: skin tanning, muscle growth, plant growth toward light.'
      }
    }
  ]
}
