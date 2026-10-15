export const bioNonMendelianPart7Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-7-intro-p7',
      type: 'text' as const,
      content: `
## Non-Mendelian Genetics: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Non-Mendelian patterns expand Mendel's laws
2. Multiple genes and environment create phenotypic diversity
3. Sex-linked traits on the AP exam
4. Connecting to evolution and natural selection
      `
    },
    {
      id: 'non-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Non-Mendelian patterns expand Mendel\'s…?',
            options: [
              'Non-Mendelian patterns overturn Mendel\'s laws, since alleles in these traits no longer segregate',
              'Non-Mendelian patterns build on Mendel\'s laws, since alleles still segregate but phenotypes map differently',
              'Non-Mendelian patterns replace Mendel\'s laws, since inheritance in these traits works by blending',
              'Non-Mendelian patterns are rare exceptions, since nearly all human traits follow simple dominance'
            ],
            correctAnswer: 1,
            explanation: 'Non-Mendelian patterns extend rather than overturn Mendel: alleles still segregate into gametes, but the mapping from genotype to phenotype is more complex (incomplete dominance, multiple alleles, epistasis, polygenic and sex-linked inheritance). Blending inheritance was disproved, and most human traits are not simple single-gene dominance.'
          },
          {
            question: 'In the context of Non-Mendelian Genetics: Synthesis & AP Review, which explains Sex-linked traits on the AP exam?',
            options: [
              'Expect Y-linked pedigrees in which affected females inherit the allele from their fathers',
              'Expect X-linked crosses where sons inherit their only X chromosome from their fathers',
              'Expect sex-linked traits to show the same ratios in males and females as autosomal traits',
              'Expect X-linked pedigrees in which affected males receive the allele from their mothers'
            ],
            correctAnswer: 3,
            explanation: 'AP questions on sex-linked inheritance usually involve X-linked recessive traits: males are hemizygous and receive their single X from their mother, so an affected son typically has a carrier mother, and the trait appears far more often in males. Sons get their father\'s Y, not his X, and Y-linked traits never appear in females.'
          }
        ]
      }
    },
    {
      id: 'non-7-detail-p7',
      type: 'text' as const,
      content: `
### Key Details

- **Non-Mendelian patterns expand Mendel's laws**
- **Multiple genes and environment create phenotypic diversity**
- **Sex-linked traits on the AP exam**
- **Connecting to evolution and natural selection**
      `
    },
    {
      id: 'non-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Connecting to evolution and natural… is correct?',
            options: [
              'Natural selection acts directly on genotypes, so non-Mendelian patterns have no effect on evolution',
              'Recessive alleles masked in heterozygotes are quickly removed from a population by selection',
              'Varied inheritance patterns create more phenotypes for natural selection to act on',
              'Polygenic traits cannot evolve, because their continuous variation is entirely environmental'
            ],
            correctAnswer: 2,
            explanation: 'Inheritance patterns such as incomplete dominance, multiple alleles and polygenic inheritance generate phenotypic variation, the raw material natural selection acts on. Selection acts on phenotypes, not directly on genotypes; recessive alleles hidden in heterozygotes are shielded from selection and can persist; and polygenic traits such as height clearly respond to selection.'
          }
        ]
      }
    },
    {
      id: 'non-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Non-Mendelian patterns expand Mendel\'s…',
            options: ['Multiple genes and environment create phenotypic diversity', 'Sex-linked traits on the AP exam', 'Non-Mendelian patterns expand Mendel\'s laws', 'Connecting to evolution and natural selection']
          },
          {
            label: 'Multiple genes and environment create…',
            options: ['Sex-linked traits on the AP exam', 'Non-Mendelian patterns expand Mendel\'s laws', 'Connecting to evolution and natural selection', 'Multiple genes and environment create phenotypic diversity']
          },
          {
            label: 'Sex-linked traits on the AP exam',
            options: ['Multiple genes and environment create phenotypic diversity', 'Connecting to evolution and natural selection', 'Non-Mendelian patterns expand Mendel\'s laws', 'Sex-linked traits on the AP exam']
          }
        ],
        correctAnswers: ['Non-Mendelian patterns expand Mendel\'s laws', 'Multiple genes and environment create phenotypic diversity', 'Sex-linked traits on the AP exam'],
        hint1: 'Think about what each concept specifically describes in Non-Mendelian Genetics: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Non-Mendelian Genetics: Synthesis & AP Review describes a specific idea. Non-Mendelian patterns expand Mendel\'s laws. Multiple genes and environment create phenotypic diversity. Sex-linked traits on the AP exam.'
      }
    }
  ]
}
