export const bioMeiosisPart6Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio6-intro-p6',
      type: 'text' as const,
      content: `
## Meiosis: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Chromosome counting through meiosis stages
2. Predicting gamete genotypes
3. Comparing mitosis and meiosis
4. Nondisjunction and its consequences
      `
    },
    {
      id: 'meio6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A cell with 2n = 12 is in metaphase II. How many chromosomes and chromatids does it contain?',
            options: [
              '6 chromosomes, 12 chromatids',
              '12 chromosomes, 24 chromatids',
              '6 chromosomes, 6 chromatids',
              '12 chromosomes, 12 chromatids'
            ],
            correctAnswer: 0,
            explanation: 'Meiosis I halves the chromosome number, so a cell in metaphase II has n = 6 chromosomes. Sister chromatids have not yet separated, so each chromosome still has two chromatids: 12 chromatids in total.'
          },
          {
            question: 'Which feature is found in meiosis but not in mitosis?',
            options: [
              'Separation of sister chromatids at anaphase',
              'Formation of a spindle from microtubules',
              'Pairing of homologous chromosomes in prophase',
              'Replication of DNA in the preceding S phase'
            ],
            correctAnswer: 2,
            explanation: 'Homologous chromosomes pair (synapsis) only in prophase I of meiosis. Sister chromatid separation, spindle formation, and DNA replication in the preceding S phase occur in both mitosis and meiosis.'
          }
        ]
      }
    },
    {
      id: 'meio6-detail-p6',
      type: 'text' as const,
      content: `
### Key Details

- **Chromosome counting through meiosis stages**
- **Predicting gamete genotypes**
- **Comparing mitosis and meiosis**
- **Nondisjunction and its consequences**
      `
    },
    {
      id: 'meio6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The two copies of chromosome 21 fail to separate in meiosis I in one parent. If a gamete with the extra copy fertilizes a normal gamete, the zygote will be:',
            options: [
              'monosomic, with 45 chromosomes',
              'trisomic, with 47 chromosomes',
              'triploid, with 69 chromosomes',
              'normal, with 46 chromosomes'
            ],
            correctAnswer: 1,
            explanation: 'Nondisjunction leaves one gamete with 24 chromosomes (two copies of chromosome 21). Fusing with a normal 23-chromosome gamete gives a zygote with 47 chromosomes and three copies of chromosome 21, a trisomy that causes Down syndrome.'
          }
        ]
      }
    },
    {
      id: 'meio6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chromosome counting through meiosis…',
            options: ['Chromosome counting through meiosis stages', 'Nondisjunction and its consequences', 'Comparing mitosis and meiosis', 'Predicting gamete genotypes']
          },
          {
            label: 'Predicting gamete genotypes',
            options: ['Chromosome counting through meiosis stages', 'Predicting gamete genotypes', 'Nondisjunction and its consequences', 'Comparing mitosis and meiosis']
          },
          {
            label: 'Comparing mitosis and meiosis',
            options: ['Comparing mitosis and meiosis', 'Chromosome counting through meiosis stages', 'Nondisjunction and its consequences', 'Predicting gamete genotypes']
          }
        ],
        correctAnswers: ['Chromosome counting through meiosis stages', 'Predicting gamete genotypes', 'Comparing mitosis and meiosis'],
        hint1: 'Think about what each concept specifically describes in Meiosis: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Meiosis: Problem-Solving Workshop describes a specific idea. Chromosome counting through meiosis stages. Predicting gamete genotypes. Comparing mitosis and meiosis.'
      }
    }
  ]
}
