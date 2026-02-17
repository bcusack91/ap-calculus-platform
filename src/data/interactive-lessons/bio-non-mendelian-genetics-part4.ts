export const bioNonMendelianPart4Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-4-intro-p4',
      type: 'text' as const,
      content: `
# ## Sex-Linked Traits

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
              'Males (XY) express all X-linked alleles (hemizygous)',
              'genes on X chromosome',
              'Females (XX) can be carriers of recessive X-linked traits',
              'color blindness, hemophilia, Duchenne muscular dystrophy'
            ],
            correctAnswer: 1,
            explanation: 'Correct — X-linked traits: genes on X chromosome. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Sex-Linked Traits, which explains Females (XX) can be carriers of…?',
            options: [
              'Females (XX) can be carriers of recessive X-linked traits',
              'genes on X chromosome',
              'Males (XY) express all X-linked alleles (hemizygous)',
              'color blindness, hemophilia, Duchenne muscular dystrophy'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Females (XX) can be carriers of recessive X-linked traits. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'non-4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

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
              'Females (XX) can be carriers of recessive X-linked traits',
              'genes on X chromosome',
              'Males (XY) express all X-linked alleles (hemizygous)',
              'color blindness, hemophilia, Duchenne muscular dystrophy'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Examples: color blindness, hemophilia, Duchenne muscular dystrophy. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
