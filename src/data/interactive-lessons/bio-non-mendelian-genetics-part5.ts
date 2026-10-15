export const bioNonMendelianPart5Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-5-intro-p5',
      type: 'text' as const,
      content: `
## Environmental Effects on Phenotype

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
              'An organism\'s traits are fixed entirely by its genes, whatever its surroundings',
              'An organism\'s traits are set entirely by its surroundings, whatever its genes',
              'An organism\'s traits acquired from its surroundings pass directly to its offspring',
              'An organism\'s traits result from its genes interacting with its own surroundings'
            ],
            correctAnswer: 3,
            explanation: 'Phenotype depends on both genotype and environment: genes set the possible range, and conditions such as temperature, nutrition or soil pH influence where in that range the organism falls (Siamese cat coat color and hydrangea flower color are classic examples). Neither genes nor environment alone determines most traits, and traits acquired from the environment are not passed on through the DNA sequence.'
          },
          {
            question: 'In the context of Environmental Effects on Phenotype, which explains Nutrition affects height (polygenic)?',
            options: [
              'Diet rewrites the DNA sequence of height genes, so well-fed parents pass on taller genes',
              'Height is set by one gene whose dominant allele is switched on only by good nutrition',
              'Many genes set a range of possible heights, and diet influences where a person falls in it',
              'Nutrition replaces genetic control of height, so siblings fed alike always grow equally tall'
            ],
            correctAnswer: 2,
            explanation: 'Height is polygenic: many genes together set a person\'s potential height range, and nutrition (an environmental factor) influences how much of that potential is reached. Diet does not change the DNA sequence passed to offspring, height is not a single-gene trait, and genes still matter — siblings on the same diet can differ in height.'
          }
        ]
      }
    },
    {
      id: 'non-5-detail-p5',
      type: 'text' as const,
      content: `
### Key Details

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
              'Reversible changes in gene expression (such as DNA methylation) that leave the DNA sequence unchanged',
              'Permanent changes in the DNA base sequence caused by mutagens (such as ultraviolet light)',
              'Changes in gene expression caused by moving genes onto new chromosomes during crossing over',
              'Changes in phenotype caused solely by the environment, with no change in gene expression at all'
            ],
            correctAnswer: 0,
            explanation: 'Epigenetic changes — such as DNA methylation and histone modification — alter whether genes are expressed without changing the base sequence, and environmental factors such as diet or stress can trigger them. Mutations change the sequence itself, crossing over exchanges segments between homologs rather than regulating expression, and environmental effects on phenotype typically act THROUGH gene expression.'
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
