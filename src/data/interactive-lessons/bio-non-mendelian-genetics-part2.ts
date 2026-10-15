export const bioNonMendelianPart2Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-2-intro-p2',
      type: 'text' as const,
      content: `
## Multiple Alleles & Polygenic

**Part 2 of 7 — Multiple Alleles & Polygenic**

1. Multiple alleles: more than 2 alleles in population (ABO blood type: Iᴬ, Iᴮ, i)
2. Polygenic traits: multiple genes affect one trait
3. Examples: skin color, height, eye color
4. Polygenic traits show continuous variation (bell curve)
      `
    },
    {
      id: 'non-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Multiple alleles?',
            options: [
              'Several genes at different loci each add a small effect to one trait (height)',
              'One gene affects several unrelated traits at the same time (sickle-cell disease)',
              'More than two alleles of one gene exist in the population (ABO\'s Iᴬ, Iᴮ and i)',
              'Each diploid person carries three or more alleles of one gene (ABO blood type)'
            ],
            correctAnswer: 2,
            explanation: 'Multiple alleles means a gene has more than two allele versions in the POPULATION — ABO has Iᴬ, Iᴮ and i — but each diploid individual still carries only two of them. Many genes adding to one trait is polygenic inheritance, and one gene affecting several traits is pleiotropy.'
          },
          {
            question: 'Select the statement that correctly describes Examples:',
            options: [
              'Polygenic examples: ABO blood type, cystic fibrosis and Huntington\'s disease',
              'Polygenic examples: skin color, height and eye color',
              'Polygenic examples: hemophilia, color blindness and Duchenne dystrophy',
              'Polygenic examples: pea flower color, seed shape and pod color'
            ],
            correctAnswer: 1,
            explanation: 'Skin color, height and eye color vary over a wide range because several genes contribute to each. ABO, cystic fibrosis and Huntington\'s are single-gene traits, hemophilia and color blindness are single X-linked genes, and Mendel\'s pea traits are each controlled by one gene.'
          }
        ]
      }
    },
    {
      id: 'non-2-detail-p2',
      type: 'text' as const,
      content: `
### Key Details

- **Multiple alleles**: more than 2 alleles in population (ABO blood type: Iᴬ, Iᴮ, i)
- **Polygenic traits**: multiple genes affect one trait
- **Examples**: skin color, height, eye color
- **Polygenic traits show continuous variation (bell curve)**
      `
    },
    {
      id: 'non-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Polygenic traits show continuous…?',
            options: [
              'Polygenic traits fall into a few discrete classes (a 3:1 ratio)',
              'Polygenic traits form a smooth range of values (a bell curve)',
              'Polygenic traits show two separate peaks (a bimodal curve)',
              'Polygenic traits ignore the environment (fixed, inborn values)'
            ],
            correctAnswer: 1,
            explanation: 'Because many genes each add a small effect — and the environment adds more — polygenic traits produce a smooth, continuous range of phenotypes that forms a bell-shaped curve, not a few discrete Mendelian classes. Environment often shifts them further, as nutrition does for height.'
          }
        ]
      }
    },
    {
      id: 'non-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Multiple alleles',
            options: ['skin color, height, eye color', 'more than 2 alleles in population (ABO blood type: Iᴬ, Iᴮ, i)', 'multiple genes affect one trait', 'Polygenic traits show continuous variation (bell curve)']
          },
          {
            label: 'Polygenic traits',
            options: ['multiple genes affect one trait', 'Polygenic traits show continuous variation (bell curve)', 'skin color, height, eye color', 'more than 2 alleles in population (ABO blood type: Iᴬ, Iᴮ, i)']
          },
          {
            label: 'Examples',
            options: ['more than 2 alleles in population (ABO blood type: Iᴬ, Iᴮ, i)', 'multiple genes affect one trait', 'Polygenic traits show continuous variation (bell curve)', 'skin color, height, eye color']
          }
        ],
        correctAnswers: ['more than 2 alleles in population (ABO blood type: Iᴬ, Iᴮ, i)', 'multiple genes affect one trait', 'skin color, height, eye color'],
        hint1: 'Think about what each concept specifically describes in Multiple Alleles & Polygenic.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Multiple Alleles & Polygenic describes a specific idea. Multiple alleles: more than 2 alleles in population (ABO blood type: Iᴬ, Iᴮ, i). Polygenic traits: multiple genes affect one trait. Examples: skin color, height, eye color.'
      }
    }
  ]
}
