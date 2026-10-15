export const bioNonMendelianPart4Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-4-intro-p4',
      type: 'text' as const,
      content: `
## Sex-Linked Traits

**Part 4 of 7 — Sex-Linked Traits**

1. X-linked traits: genes on X chromosome
2. Males (XY) express all X-linked alleles (hemizygous)
3. Females (XX) can be carriers of recessive X-linked traits
4. Examples: color blindness, hemophilia, Duchenne muscular dystrophy
      `
    },
    {
      id: 'non-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes X-linked traits?',
            options: [
              'Traits coded by genes found only on the Y chromosome',
              'Traits controlled by genes carried on the X chromosome',
              'Traits expressed in only one sex but coded by autosomal genes',
              'Traits set by mitochondrial genes inherited from the mother'
            ],
            correctAnswer: 1,
            explanation: 'X-linked traits are controlled by genes located on the X chromosome, so their inheritance differs between the sexes (males have one X and are hemizygous). Y-linked genes pass father to son, sex-limited traits are autosomal genes expressed in one sex, and mitochondrial genes are inherited maternally but are not on the X.'
          },
          {
            question: 'In the context of Sex-Linked Traits, which explains Females (XX) can be carriers of…?',
            options: [
              'Females have two X chromosomes, so a normal allele on one X can mask a recessive allele on the other',
              'Females receive X-linked alleles only from their mothers, so they seldom inherit a recessive copy',
              'Females are hemizygous for the X, so they express every recessive X-linked allele they inherit',
              'Females store recessive X-linked alleles on autosomes, where those alleles are never expressed'
            ],
            correctAnswer: 0,
            explanation: 'A female (XX) has two copies of every X-linked gene, so she can be heterozygous: a normal allele on one X masks a recessive allele on the other, making her an unaffected carrier. Males are the hemizygous sex, with a single X, and females receive one X from each parent.'
          }
        ]
      }
    },
    {
      id: 'non-4-detail-p4',
      type: 'text' as const,
      content: `
### Key Details

- **X-linked traits**: genes on X chromosome
- **Males (XY) express all X-linked alleles (hemizygous)**
- **Females (XX) can be carriers of recessive X-linked traits**
- **Examples**: color blindness, hemophilia, Duchenne muscular dystrophy
      `
    },
    {
      id: 'non-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Examples is correct?',
            options: [
              'X-linked examples: cystic fibrosis, sickle-cell disease and Tay-Sachs disease',
              'X-linked examples: Huntington\'s disease, achondroplasia and Marfan syndrome',
              'X-linked examples: Down syndrome, Turner syndrome and Klinefelter syndrome (XXY)',
              'X-linked examples: red-green color blindness, hemophilia and Duchenne dystrophy'
            ],
            correctAnswer: 3,
            explanation: 'Red-green color blindness, hemophilia and Duchenne muscular dystrophy are caused by recessive alleles on the X chromosome, which is why they are far more common in males. Cystic fibrosis, sickle-cell and Tay-Sachs are autosomal recessive, Huntington\'s and Marfan are autosomal dominant, and Turner and Klinefelter syndromes are aneuploidies (changes in chromosome number), not single-gene X-linked traits.'
          }
        ]
      }
    },
    {
      id: 'non-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'X-linked traits',
            options: ['Females (XX) can be carriers of recessive X-linked traits', 'color blindness, hemophilia, Duchenne muscular dystrophy', 'genes on X chromosome', 'Males (XY) express all X-linked alleles (hemizygous)']
          },
          {
            label: 'Examples',
            options: ['Males (XY) express all X-linked alleles (hemizygous)', 'Females (XX) can be carriers of recessive X-linked traits', 'color blindness, hemophilia, Duchenne muscular dystrophy', 'genes on X chromosome']
          }
        ],
        correctAnswers: ['genes on X chromosome', 'color blindness, hemophilia, Duchenne muscular dystrophy'],
        hint1: 'Think about what each concept specifically describes in Sex-Linked Traits.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Sex-Linked Traits describes a specific idea. X-linked traits: genes on X chromosome. Examples: color blindness, hemophilia, Duchenne muscular dystrophy.'
      }
    }
  ]
}
