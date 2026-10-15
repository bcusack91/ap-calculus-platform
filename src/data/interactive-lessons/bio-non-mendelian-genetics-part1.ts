export const bioNonMendelianPart1Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-1-intro-p1',
      type: 'text' as const,
      content: `
## Incomplete & Codominance

**Part 1 of 7 — Incomplete & Codominance**

1. Incomplete dominance: heterozygote is intermediate (red × white = pink)
2. Codominance: both alleles fully expressed (AB blood type)
3. Neither follows simple dominant/recessive pattern
4. Modified phenotypic ratios: 1:2:1 instead of 3:1
      `
    },
    {
      id: 'non-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Incomplete dominance?',
            options: [
              'Heterozygote shows both parental traits fully (red and white patches)',
              'Heterozygote has an intermediate phenotype (red × white gives pink)',
              'Heterozygote looks like the dominant parent (red × white gives red)',
              'Parental alleles blend permanently (pink F1 plants give only pink F2)'
            ],
            correctAnswer: 1,
            explanation: 'In incomplete dominance the heterozygote\'s phenotype is intermediate between the two homozygotes — red × white snapdragons give pink. Showing both parental traits fully is codominance, resembling one parent is complete dominance, and the alleles never blend permanently: red and white reappear when pink F1 plants are crossed.'
          },
          {
            question: 'Select the statement that correctly describes Neither follows simple…:',
            options: [
              'Neither incomplete dominance nor codominance follows Mendel\'s simple law of segregation',
              'Neither incomplete dominance nor codominance follows a simple dominant/recessive pattern',
              'Neither incomplete dominance nor codominance gives a heterozygote unlike both parents',
              'Neither incomplete dominance nor codominance alters the 3:1 F2 phenotypic ratio'
            ],
            correctAnswer: 1,
            explanation: 'In both patterns the heterozygote\'s phenotype differs from both homozygotes, so neither fits simple dominance, where one allele masks the other. Both still obey segregation — the alleles separate normally into gametes — and because each genotype has its own phenotype, the F2 shows a 1:2:1 phenotypic ratio instead of 3:1.'
          }
        ]
      }
    },
    {
      id: 'non-1-detail-p1',
      type: 'text' as const,
      content: `
### Key Details

- **Incomplete dominance**: heterozygote is intermediate (red × white = pink)
- **Codominance**: both alleles fully expressed (AB blood type)
- **Neither follows simple dominant/recessive pattern**
- **Modified phenotypic ratios**: 1:2:1 instead of 3:1
      `
    },
    {
      id: 'non-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Modified phenotypic ratios is correct?',
            options: [
              'An F1 × F1 cross gives 9:3:3:1 instead of 3:1, since each allele acts like a separate gene',
              'An F1 × F1 cross gives 1:1 instead of 3:1, since no heterozygotes can be produced',
              'An F1 × F1 cross still gives 3:1, since the heterozygote\'s phenotype matches a homozygote',
              'An F1 × F1 cross gives 1:2:1, since each genotype has its own distinct phenotype'
            ],
            correctAnswer: 3,
            explanation: 'When the heterozygote has its own phenotype (incomplete dominance or codominance), phenotype classes match genotype classes, so an F1 × F1 monohybrid cross gives 1:2:1 rather than 3:1. A 3:1 ratio appears only when the heterozygote looks like one homozygote, 9:3:3:1 requires two genes, and 1:1 is the ratio of a test cross.'
          }
        ]
      }
    },
    {
      id: 'non-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Incomplete dominance',
            options: ['1:2:1 instead of 3:1', 'Neither follows simple dominant/recessive pattern', 'heterozygote is intermediate (red × white = pink)', 'both alleles fully expressed (AB blood type)']
          },
          {
            label: 'Codominance',
            options: ['heterozygote is intermediate (red × white = pink)', '1:2:1 instead of 3:1', 'both alleles fully expressed (AB blood type)', 'Neither follows simple dominant/recessive pattern']
          },
          {
            label: 'Modified phenotypic ratios',
            options: ['1:2:1 instead of 3:1', 'Neither follows simple dominant/recessive pattern', 'heterozygote is intermediate (red × white = pink)', 'both alleles fully expressed (AB blood type)']
          }
        ],
        correctAnswers: ['heterozygote is intermediate (red × white = pink)', 'both alleles fully expressed (AB blood type)', '1:2:1 instead of 3:1'],
        hint1: 'Think about what each concept specifically describes in Incomplete & Codominance.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Incomplete & Codominance describes a specific idea. Incomplete dominance: heterozygote is intermediate (red × white = pink). Codominance: both alleles fully expressed (AB blood type). Modified phenotypic ratios: 1:2:1 instead of 3:1.'
      }
    }
  ]
}
