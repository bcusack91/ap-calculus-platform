export const bioMendelianPart2Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mend2-intro-p2',
      type: 'text' as const,
      content: `
# ## Monohybrid Crosses

**Part 2 of 7 — Monohybrid Crosses**

1. Punnett squares for single-gene crosses
2. Genotypic ratio: 1 AA : 2 Aa : 1 aa
3. Phenotypic ratio: 3 dominant : 1 recessive
4. Test cross: cross with homozygous recessive to determine genotype
      `
    },
    {
      id: 'mend2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Punnett squares for single-gene crosses" refer to in biology?',
            options: [
              'Punnett squares for single-gene crosses',
              '3 dominant : 1 recessive',
              'cross with homozygous recessive to determine genotype',
              '1 AA : 2 Aa : 1 aa'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Punnett squares for single-gene crosses. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Phenotypic ratio?',
            options: [
              'cross with homozygous recessive to determine genotype',
              '3 dominant : 1 recessive',
              '1 AA : 2 Aa : 1 aa',
              'Punnett squares for single-gene crosses'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Phenotypic ratio: 3 dominant : 1 recessive. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'mend2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Punnett squares for single-gene crosses**
- **Genotypic ratio**: 1 AA : 2 Aa : 1 aa
- **Phenotypic ratio**: 3 dominant : 1 recessive
- **Test cross**: cross with homozygous recessive to determine genotype
      `
    },
    {
      id: 'mend2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Test cross?',
            options: [
              'Punnett squares for single-gene crosses',
              '3 dominant : 1 recessive',
              'cross with homozygous recessive to determine genotype',
              '1 AA : 2 Aa : 1 aa'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Test cross: cross with homozygous recessive to determine genotype. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'mend2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Genotypic ratio',
            options: ['cross with homozygous recessive to determine genotype', '1 AA : 2 Aa : 1 aa', '3 dominant : 1 recessive', 'Punnett squares for single-gene crosses']
          },
          {
            label: 'Phenotypic ratio',
            options: ['Punnett squares for single-gene crosses', '1 AA : 2 Aa : 1 aa', '3 dominant : 1 recessive', 'cross with homozygous recessive to determine genotype']
          },
          {
            label: 'Test cross',
            options: ['3 dominant : 1 recessive', '1 AA : 2 Aa : 1 aa', 'cross with homozygous recessive to determine genotype', 'Punnett squares for single-gene crosses']
          }
        ],
        correctAnswers: ['1 AA : 2 Aa : 1 aa', '3 dominant : 1 recessive', 'cross with homozygous recessive to determine genotype'],
        hint1: 'Think about what each concept specifically describes in Monohybrid Crosses.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Monohybrid Crosses describes a specific idea. Genotypic ratio: 1 AA : 2 Aa : 1 aa. Phenotypic ratio: 3 dominant : 1 recessive. Test cross: cross with homozygous recessive to determine genotype.'
      }
    }
  ]
}
