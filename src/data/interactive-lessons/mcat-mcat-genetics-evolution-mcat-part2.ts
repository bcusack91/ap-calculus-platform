export const mcatGeneticsPart2Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Non-Mendelian Inheritance

**Part 2 of 7 — Non-Mendelian Inheritance**

Incomplete dominance: heterozygote is intermediate (red x white = pink).

Codominance: both alleles fully expressed (AB blood type).
      `
    },
    {
      id: 'mcat-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in non-mendelian inheritance?',
            options: [
              'Incomplete dominance: heterozygote is intermediate (red x white = pink)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Incomplete dominance: heterozygote is intermediate (red x white = pink)'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** X-linked: gene on X chromosome; males are hemizygous (one copy determines phenotype).

**MCAT Tip:** Polygenic traits: multiple genes contribute (height, skin color); continuous distribution.
      `
    },
    {
      id: 'mcat-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to non-mendelian inheritance?',
            options: [
              'X-linked: gene on X chromosome; males are hemizygous (one copy determines phenotype)',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'X-linked: gene on X chromosome; males are hemizygous (one copy determines phenotype)'
          }
        ]
      }
    },
    {
      id: 'mcat-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Non-Mendelian Inheritance:',
            options: ['Incomplete dominance: heterozygote is intermediate (red x wh', 'Codominance: both alleles fully expressed (AB blood type)', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['X-linked: gene on X chromosome; males are hemizygous (one co', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Incomplete dominance: heterozygote is intermediate (red x wh', 'X-linked: gene on X chromosome; males are hemizygous (one co'],
        hint1: 'Think about non-mendelian inheritance',
        hint2: 'Consider the MCAT application',
        explanation: 'Incomplete dominance: heterozygote is intermediate (red x white = pink). X-linked: gene on X chromosome; males are hemizygous (one copy determines phenotype).'
      }
    }
  ]
}
