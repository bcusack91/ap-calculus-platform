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
              'both alleles fully expressed (AB blood type)',
              'heterozygote is intermediate (red × white = pink)',
              'Neither follows simple dominant/recessive pattern',
              '1:2:1 instead of 3:1'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Incomplete dominance: heterozygote is intermediate (red × white = pink). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Neither follows simple…:',
            options: [
              '1:2:1 instead of 3:1',
              'Neither follows simple dominant/recessive pattern',
              'heterozygote is intermediate (red × white = pink)',
              'both alleles fully expressed (AB blood type)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Neither follows simple dominant/recessive pattern. Be careful to distinguish between the different concepts in this topic.'
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
              'Neither follows simple dominant/recessive pattern',
              'heterozygote is intermediate (red × white = pink)',
              'both alleles fully expressed (AB blood type)',
              '1:2:1 instead of 3:1'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Modified phenotypic ratios: 1:2:1 instead of 3:1. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
