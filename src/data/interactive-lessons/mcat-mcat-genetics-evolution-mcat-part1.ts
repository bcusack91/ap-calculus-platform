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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mendels laws',
            options: ['Punnett squares: predict offspring ratios; monohybrid cross Aa x Aa = 1:2:1 genotype, 3:1 phenotype.', 'Test cross: cross with homozygous recessive to determine unknown genotype.', 'segregation (alleles separate in meiosis) and independent assortment (genes on different chromosomes).', 'heterozygote shows dominant phenotype; homozygous recessive shows recessive.']
          },
          {
            label: 'Dominant/recessive',
            options: ['segregation (alleles separate in meiosis) and independent assortment (genes on different chromosomes).', 'heterozygote shows dominant phenotype; homozygous recessive shows recessive.', 'Test cross: cross with homozygous recessive to determine unknown genotype.', 'Punnett squares: predict offspring ratios; monohybrid cross Aa x Aa = 1:2:1 genotype, 3:1 phenotype.']
          },
          {
            label: 'Key Insight',
            options: ['Punnett squares: predict offspring ratios; monohybrid cross Aa x Aa = 1:2:1 genotype, 3:1 phenotype.', 'heterozygote shows dominant phenotype; homozygous recessive shows recessive.', 'Test cross: cross with homozygous recessive to determine unknown genotype.', 'segregation (alleles separate in meiosis) and independent assortment (genes on different chromosomes).']
          }
        ],
        correctAnswers: ['segregation (alleles separate in meiosis) and independent assortment (genes on different chromosomes).', 'heterozygote shows dominant phenotype; homozygous recessive shows recessive.', 'Punnett squares: predict offspring ratios; monohybrid cross Aa x Aa = 1:2:1 genotype, 3:1 phenotype.'],
        hint1: 'Think about what each concept specifically describes in Genetics Evolution.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Genetics Evolution describes a specific idea. Mendels laws: segregation (alleles separate in meiosis) and independent assortment (genes on different chromosomes). Dominant/recessive: heterozygote shows dominant phenotype; homozygous recessive shows recessive. Key Insight: Punnett squares: predict offspring ratios; monohybrid cross Aa x Aa = 1:2:1 genotype, 3:1 phenotype.'
      }
    }
  ]
}
