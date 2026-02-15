export const mcatGeneticsPart1Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Genetics Evolution

**Part 1 of 7 — Mendelian Genetics**

Mendels laws: segregation (alleles separate in meiosis) and independent assortment (genes on different chromosomes).

Dominant/recessive: heterozygote shows dominant phenotype; homozygous recessive shows recessive.
      `
    },
    {
      id: 'mcat-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in mendelian genetics?',
            options: [
              'Mendels laws: segregation (alleles separate in meiosis) and independent assortment (genes on different chromosomes)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Mendels laws: segregation (alleles separate in meiosis) and independent assortment (genes on different chromosomes)'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Punnett squares: predict offspring ratios; monohybrid cross Aa x Aa = 1:2:1 genotype, 3:1 phenotype.

**MCAT Tip:** Test cross: cross with homozygous recessive to determine unknown genotype.
      `
    },
    {
      id: 'mcat-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to mendelian genetics?',
            options: [
              'Punnett squares: predict offspring ratios; monohybrid cross Aa x Aa = 1:2:1 genotype, 3:1 phenotype',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Punnett squares: predict offspring ratios; monohybrid cross Aa x Aa = 1:2:1 genotype, 3:1 phenotype'
          }
        ]
      }
    },
    {
      id: 'mcat-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Mendelian Genetics:',
            options: ['Mendels laws: segregation (alleles separate in meiosis) and ', 'Dominant/recessive: heterozygote shows dominant phenotype; h', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Punnett squares: predict offspring ratios; monohybrid cross ', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Mendels laws: segregation (alleles separate in meiosis) and ', 'Punnett squares: predict offspring ratios; monohybrid cross '],
        hint1: 'Think about mendelian genetics',
        hint2: 'Consider the MCAT application',
        explanation: 'Mendels laws: segregation (alleles separate in meiosis) and independent assortment (genes on different chromosomes). Punnett squares: predict offspring ratios; monohybrid cross Aa x Aa = 1:2:1 genotype, 3:1 phenotype.'
      }
    }
  ]
}
