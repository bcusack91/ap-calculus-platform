export const bioNonMendelianPart6Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-6-intro-p6',
      type: 'text' as const,
      content: `
## Non-Mendelian Genetics: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Identifying inheritance patterns from crosses
2. Solving X-linked inheritance problems
3. Distinguishing codominance from incomplete dominance
4. Analyzing polygenic trait distributions
      `
    },
    {
      id: 'non-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Identifying inheritance patterns from…?',
            options: [
              'Infer the inheritance mode by comparing observed offspring ratios with predicted ones',
              'Infer the inheritance mode from the parents\' phenotypes alone, without the offspring',
              'Infer the inheritance mode by assuming the most common phenotype is the dominant one',
              'Infer the inheritance mode by assuming any trait seen mostly in males must be Y-linked'
            ],
            correctAnswer: 0,
            explanation: 'To identify an inheritance pattern, compare the offspring ratios you observe (1:2:1, 9:3:4, sex-biased ratios and so on) with those each model predicts, often checking the fit with a chi-square test. Parental phenotypes alone are not enough, the most common phenotype need not be dominant, and a male bias usually signals X-linked recessive inheritance rather than Y-linkage.'
          },
          {
            question: 'In the context of Non-Mendelian Genetics: Problem-Solving Workshop, which explains Distinguishing codominance from…?',
            options: [
              'In codominance the heterozygote is intermediate; in incomplete dominance it shows both parental traits',
              'In codominance the F2 ratio is 3:1; in incomplete dominance the F2 ratio is 1:2:1 for every cross',
              'In codominance the alleles blend permanently; in incomplete dominance they stay separate in gametes',
              'Codominant heterozygotes show both parental traits; incompletely dominant ones are intermediate'
            ],
            correctAnswer: 3,
            explanation: 'Both patterns give a 1:2:1 F2 ratio, so the heterozygote\'s phenotype is what distinguishes them: codominant heterozygotes express both alleles fully (AB blood, roan cattle), while incompletely dominant heterozygotes are intermediate (pink snapdragons). In neither case do the alleles blend permanently.'
          }
        ]
      }
    },
    {
      id: 'non-6-detail-p6',
      type: 'text' as const,
      content: `
### Key Details

- **Identifying inheritance patterns from crosses**
- **Solving X-linked inheritance problems**
- **Distinguishing codominance from incomplete dominance**
- **Analyzing polygenic trait distributions**
      `
    },
    {
      id: 'non-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Non-Mendelian Genetics: Problem-Solving Workshop, which correctly describes Analyzing polygenic trait distributions?',
            options: [
              'Expect a few discrete classes in a 9:3:3:1 ratio, because each gene acts independently',
              'Expect a bell-shaped spread, with extremes rarest because they need many alleles of one kind',
              'Expect a U-shaped spread, with extremes most common because each gene\'s alleles pair up',
              'Expect every offspring to match the midparent value, because the many genes blend evenly'
            ],
            correctAnswer: 1,
            explanation: 'With many additive genes, most offspring inherit a mix of "plus" and "minus" alleles and fall near the middle, while extreme phenotypes require many alleles of the same kind and are rare — producing a bell-shaped (normal) distribution. Discrete 9:3:3:1 classes come from two genes with clear dominance, and offspring vary around the parental mean rather than all matching it.'
          }
        ]
      }
    },
    {
      id: 'non-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying inheritance patterns from…',
            options: ['Solving X-linked inheritance problems', 'Analyzing polygenic trait distributions', 'Distinguishing codominance from incomplete dominance', 'Identifying inheritance patterns from crosses']
          },
          {
            label: 'Solving X-linked inheritance problems',
            options: ['Analyzing polygenic trait distributions', 'Solving X-linked inheritance problems', 'Identifying inheritance patterns from crosses', 'Distinguishing codominance from incomplete dominance']
          },
          {
            label: 'Distinguishing codominance from…',
            options: ['Distinguishing codominance from incomplete dominance', 'Analyzing polygenic trait distributions', 'Solving X-linked inheritance problems', 'Identifying inheritance patterns from crosses']
          }
        ],
        correctAnswers: ['Identifying inheritance patterns from crosses', 'Solving X-linked inheritance problems', 'Distinguishing codominance from incomplete dominance'],
        hint1: 'Think about what each concept specifically describes in Non-Mendelian Genetics: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Non-Mendelian Genetics: Problem-Solving Workshop describes a specific idea. Identifying inheritance patterns from crosses. Solving X-linked inheritance problems. Distinguishing codominance from incomplete dominance.'
      }
    }
  ]
}
