export const bioMeiosisPart7Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio7-intro-p7',
      type: 'text' as const,
      content: `
## Meiosis: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Meiosis as the basis for Mendel's laws
2. Connection to evolution (genetic variation)
3. Errors in meiosis: nondisjunction, trisomy
4. AP exam: comparing mitosis and meiosis
      `
    },
    {
      id: 'meio7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which meiotic event is the physical basis of Mendel\'s law of segregation?',
            options: [
              'Crossing over between nonsister chromatids in prophase I',
              'Separation of homologous chromosomes in anaphase I',
              'Random fusion of a sperm and an egg at fertilization',
              'Replication of every chromosome during the earlier S phase'
            ],
            correctAnswer: 1,
            explanation: 'The law of segregation states that the two alleles of a gene separate into different gametes. That happens when homologous chromosomes, which carry the two alleles, separate in anaphase I. Independent orientation of different homologous pairs at metaphase I is the basis of the law of independent assortment.'
          },
          {
            question: 'Which error during meiosis can produce a trisomy such as Down syndrome?',
            options: [
              'Nondisjunction',
              'Crossing over',
              'Independent assortment',
              'Synapsis'
            ],
            correctAnswer: 0,
            explanation: 'Nondisjunction is the failure of homologs (in meiosis I) or sister chromatids (in meiosis II) to separate. It produces gametes with an extra or missing chromosome, and fertilization of a gamete with an extra copy gives a trisomy. Crossing over, independent assortment, and synapsis are normal parts of meiosis.'
          }
        ]
      }
    },
    {
      id: 'meio7-detail-p7',
      type: 'text' as const,
      content: `
### Key Details

- **Meiosis as the basis for Mendel's laws**
- **Connection to evolution (genetic variation)**
- **Errors in meiosis**: nondisjunction, trisomy
- **AP exam**: comparing mitosis and meiosis
      `
    },
    {
      id: 'meio7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A free-response question asks how mitosis and meiosis differ in outcome. Which comparison is accurate?',
            options: [
              'Mitosis makes four haploid cells; meiosis makes two diploid cells',
              'Both make genetically identical cells but differ in cell number',
              'Mitosis makes identical diploid cells; meiosis makes varied haploid cells',
              'Mitosis makes gametes only; meiosis makes body cells for growth'
            ],
            correctAnswer: 2,
            explanation: 'Mitosis produces two genetically identical diploid cells for growth and repair. Meiosis produces four genetically different haploid gametes. In animals, meiosis, not mitosis, is the division that makes gametes.'
          }
        ]
      }
    },
    {
      id: 'meio7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Errors in meiosis',
            options: ['Meiosis as the basis for Mendel\'s laws', 'Connection to evolution (genetic variation)', 'nondisjunction, trisomy', 'comparing mitosis and meiosis']
          },
          {
            label: 'AP exam',
            options: ['nondisjunction, trisomy', 'comparing mitosis and meiosis', 'Meiosis as the basis for Mendel\'s laws', 'Connection to evolution (genetic variation)']
          }
        ],
        correctAnswers: ['nondisjunction, trisomy', 'comparing mitosis and meiosis'],
        hint1: 'Think about what each concept specifically describes in Meiosis: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Meiosis: Synthesis & AP Review describes a specific idea. Errors in meiosis: nondisjunction, trisomy. AP exam: comparing mitosis and meiosis.'
      }
    }
  ]
}
