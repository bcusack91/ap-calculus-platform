export const psychPrenatalPart1Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prena1-intro',
      type: 'text' as const,
      content: `
# 🧠 Prenatal & Childhood Development

**Part 1 of 7 — Prenatal Development**

### 1. Germinal stage (0-2 weeks)

zygote implants

### 2. Embryonic stage (2-8 weeks)

major organs form

### 3. Fetal stage (8 weeks-birth)

growth and maturation

### 4. Teratogens

harmful agents (alcohol → FAS, drugs, infections)
      `
    },
    {
      id: 'prena1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of prenatal development?',
            options: [
              'Germinal stage (0-2 weeks)',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Germinal stage (0-2 weeks): zygote implants'
          },
          {
            question: 'In the context of prenatal development, which is accurate?',
            options: [
              'growth and maturation',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Fetal stage (8 weeks-birth): growth and maturation'
          }
        ]
      }
    },
    {
      id: 'prena1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Germinal stage (0-2 weeks)**: zygote implants
- **Embryonic stage (2-8 weeks)**: major organs form
- **Fetal stage (8 weeks-birth)**: growth and maturation
- **Teratogens**: harmful agents (alcohol → FAS, drugs, infections)
      `
    },
    {
      id: 'prena1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to prenatal development?',
            options: [
              'harmful agents (alcohol → FAS, drugs, infections)',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Teratogens: harmful agents (alcohol → FAS, drugs, infections)'
          }
        ]
      }
    },
    {
      id: 'prena1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Germinal stage (0-2 weeks)',
            options: ['zygote implants', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Embryonic stage (2-8 weeks)',
            options: ['major organs form', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Fetal stage (8 weeks-birth)',
            options: ['growth and maturation', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['zygote implants', 'major organs form', 'growth and maturation'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Prenatal Development.'
      }
    }
  ]
}
