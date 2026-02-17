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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Germinal stage (0-2 weeks)?',
            options: [
              'major organs form',
              'growth and maturation',
              'zygote implants',
              'harmful agents (alcohol → FAS, drugs, infections)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Germinal stage (0-2 weeks): zygote implants. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Fetal stage (8 weeks-birth):',
            options: [
              'harmful agents (alcohol → FAS, drugs, infections)',
              'major organs form',
              'growth and maturation',
              'zygote implants'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Fetal stage (8 weeks-birth): growth and maturation. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Germinal stage (0-2 weeks)',
            options: ['growth and maturation', 'major organs form', 'zygote implants', 'harmful agents (alcohol → FAS, drugs, infections)']
          },
          {
            label: 'Embryonic stage (2-8 weeks)',
            options: ['major organs form', 'harmful agents (alcohol → FAS, drugs, infections)', 'growth and maturation', 'zygote implants']
          },
          {
            label: 'Fetal stage (8 weeks-birth)',
            options: ['growth and maturation', 'zygote implants', 'major organs form', 'harmful agents (alcohol → FAS, drugs, infections)']
          }
        ],
        correctAnswers: ['zygote implants', 'major organs form', 'growth and maturation'],
        hint1: 'Think about what each concept specifically describes in Prenatal & Childhood Development.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Prenatal & Childhood Development describes a specific idea. Germinal stage (0-2 weeks): zygote implants. Embryonic stage (2-8 weeks): major organs form. Fetal stage (8 weeks-birth): growth and maturation.'
      }
    }
  ]
}
