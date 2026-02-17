export const bioMendelianPart1Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mend1-intro-p1',
      type: 'text' as const,
      content: `
# ## Mendel's Laws

**Part 1 of 7 — Mendel's Laws**

1. Law of Segregation: two alleles separate during gamete formation
2. Law of Independent Assortment: genes on different chromosomes sort independently
3. Dominant alleles mask recessive alleles
4. Mendel's experimental approach with pea plants
      `
    },
    {
      id: 'mend1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Law of Segregation" refer to in biology?',
            options: [
              'genes on different chromosomes sort independently',
              'Mendel\'s experimental approach with pea plants',
              'two alleles separate during gamete formation',
              'Dominant alleles mask recessive alleles'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Law of Segregation: two alleles separate during gamete formation. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Dominant alleles mask recessive alleles?',
            options: [
              'two alleles separate during gamete formation',
              'genes on different chromosomes sort independently',
              'Dominant alleles mask recessive alleles',
              'Mendel\'s experimental approach with pea plants'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Dominant alleles mask recessive alleles. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'mend1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Law of Segregation**: two alleles separate during gamete formation
- **Law of Independent Assortment**: genes on different chromosomes sort independently
- **Dominant alleles mask recessive alleles**
- **Mendel's experimental approach with pea plants**
      `
    },
    {
      id: 'mend1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Mendel\'s experimental approach with pea… is correct?',
            options: [
              'Mendel\'s experimental approach with pea plants',
              'Dominant alleles mask recessive alleles',
              'genes on different chromosomes sort independently',
              'two alleles separate during gamete formation'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Mendel\'s experimental approach with pea plants. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'mend1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Law of Segregation',
            options: ['genes on different chromosomes sort independently', 'two alleles separate during gamete formation', 'Mendel\'s experimental approach with pea plants', 'Dominant alleles mask recessive alleles']
          },
          {
            label: 'Law of Independent Assortment',
            options: ['two alleles separate during gamete formation', 'Dominant alleles mask recessive alleles', 'Mendel\'s experimental approach with pea plants', 'genes on different chromosomes sort independently']
          }
        ],
        correctAnswers: ['two alleles separate during gamete formation', 'genes on different chromosomes sort independently'],
        hint1: 'Think about what each concept specifically describes in Mendel\'s Laws.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Mendel\'s Laws describes a specific idea. Law of Segregation: two alleles separate during gamete formation. Law of Independent Assortment: genes on different chromosomes sort independently.'
      }
    }
  ]
}
