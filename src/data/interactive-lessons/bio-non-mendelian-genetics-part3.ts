export const bioNonMendelianPart3Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-3-intro-p3',
      type: 'text' as const,
      content: `
## Epistasis

**Part 3 of 7 — Epistasis**

1. One gene masks the expression of another
2. Example: coat color in Labrador retrievers (E gene masks B gene)
3. Modified dihybrid ratios: 9:3:4, 12:3:1, 9:7
4. Different from dominance (which is within one gene)
      `
    },
    {
      id: 'non-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes One gene masks the expression of another?',
            options: [
              'Epistasis, as when Labrador gene E blocks pigment from gene B',
              'Pleiotropy, as when one sickle-cell allele affects blood, joints and spleen',
              'Codominance, as when both Iᴬ and Iᴮ are expressed in type AB blood',
              'Dominance, as when allele T masks allele t of the same pea height gene'
            ],
            correctAnswer: 0,
            explanation: 'One gene masking the expression of a DIFFERENT gene is epistasis: in Labrador retrievers, ee dogs are yellow whatever alleles they carry at the B (black/brown) gene. Dominance is masking between alleles of the SAME gene, codominance is both alleles of one gene expressed, and pleiotropy is one gene affecting several traits.'
          },
          {
            question: 'In the context of Epistasis, which explains Modified dihybrid ratios?',
            options: [
              'Linkage of the two genes merges classes, turning 9:3:3:1 into ratios like 1:2:1',
              'Masking makes the two genes blend, turning 9:3:3:1 into a continuous bell curve',
              'Masking merges phenotype classes, turning 9:3:3:1 into ratios like 9:3:4 or 9:7',
              'Masking stops one gene from segregating, turning 9:3:3:1 into a simple 3:1'
            ],
            correctAnswer: 2,
            explanation: 'Epistasis does not change how alleles segregate or assort; all 16 genotype combinations still occur. Because one gene hides the other\'s phenotype, some of the four dihybrid classes look alike and merge — giving 9:3:4 (recessive epistasis, as in Labradors), 12:3:1 (dominant epistasis) or 9:7 (complementary genes). The genes do not blend, and linked genes distort ratios by changing gamete frequencies, not by masking.'
          }
        ]
      }
    },
    {
      id: 'non-3-detail-p3',
      type: 'text' as const,
      content: `
### Key Details

- **One gene masks the expression of another**
- **Example**: coat color in Labrador retrievers (E gene masks B gene)
- **Modified dihybrid ratios**: 9:3:4, 12:3:1, 9:7
- **Different from dominance (which is within one gene)**
      `
    },
    {
      id: 'non-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Epistasis, which correctly describes Different from dominance (which is…?',
            options: [
              'Epistasis acts between alleles of one gene, while dominance acts between different genes',
              'Epistasis acts between different genes, while dominance acts between alleles of one gene',
              'Epistasis acts between linked genes, while dominance acts between unlinked genes',
              'Epistasis acts only in heterozygotes, while dominance acts only in homozygotes'
            ],
            correctAnswer: 1,
            explanation: 'Dominance is an interaction between two alleles of the SAME gene (T masks t). Epistasis is an interaction between DIFFERENT genes: the genotype at one locus masks the phenotype set by another (Labrador E masks B). Neither depends on linkage, and epistasis often works through a homozygous recessive genotype such as ee.'
          }
        ]
      }
    },
    {
      id: 'non-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Example',
            options: ['One gene masks the expression of another', 'Different from dominance (which is within one gene)', '9:3:4, 12:3:1, 9:7', 'coat color in Labrador retrievers (E gene masks B gene)']
          },
          {
            label: 'Modified dihybrid ratios',
            options: ['coat color in Labrador retrievers (E gene masks B gene)', 'One gene masks the expression of another', 'Different from dominance (which is within one gene)', '9:3:4, 12:3:1, 9:7']
          }
        ],
        correctAnswers: ['coat color in Labrador retrievers (E gene masks B gene)', '9:3:4, 12:3:1, 9:7'],
        hint1: 'Think about what each concept specifically describes in Epistasis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Epistasis describes a specific idea. Example: coat color in Labrador retrievers (E gene masks B gene). Modified dihybrid ratios: 9:3:4, 12:3:1, 9:7.'
      }
    }
  ]
}
