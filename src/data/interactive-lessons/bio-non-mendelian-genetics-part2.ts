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
              'Polygenic traits show continuous variation (bell curve)',
              'skin color, height, eye color',
              'more than 2 alleles in population (ABO blood type: Iᴬ, Iᴮ, i)',
              'multiple genes affect one trait'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Multiple alleles: more than 2 alleles in population (ABO blood type: Iᴬ, Iᴮ, i). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Examples:',
            options: [
              'Polygenic traits show continuous variation (bell curve)',
              'skin color, height, eye color',
              'multiple genes affect one trait',
              'more than 2 alleles in population (ABO blood type: Iᴬ, Iᴮ, i)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Examples: skin color, height, eye color. Be careful to distinguish between the different concepts in this topic.'
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
              'more than 2 alleles in population (ABO blood type: Iᴬ, Iᴮ, i)',
              'Polygenic traits show continuous variation (bell curve)',
              'multiple genes affect one trait',
              'skin color, height, eye color'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Polygenic traits show continuous variation (bell curve). Each option describes a real concept from this topic, so pay attention to the specific details.'
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
