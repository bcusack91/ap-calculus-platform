export const psychAdolescencePart1Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adole1-intro',
      type: 'text' as const,
      content: `
# 🧠 Adolescence & Adulthood

**Part 1 of 7 — Adolescent Development**

### 1. Puberty

biological changes, growth spurt

### 2. Adolescent egocentrism

imaginary audience, personal fable

### 3. Brain development

prefrontal cortex not fully mature until ~25

### 4. Risk-taking behavior linked to brain development

Risk-taking behavior linked to brain development
      `
    },
    {
      id: 'adole1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Puberty?',
            options: [
              'Risk-taking behavior linked to brain development',
              'biological changes, growth spurt',
              'imaginary audience, personal fable',
              'prefrontal cortex not fully mature until ~25'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Puberty: biological changes, growth spurt. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Brain development:',
            options: [
              'Risk-taking behavior linked to brain development',
              'prefrontal cortex not fully mature until ~25',
              'biological changes, growth spurt',
              'imaginary audience, personal fable'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Brain development: prefrontal cortex not fully mature until ~25. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'adole1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Puberty**: biological changes, growth spurt
- **Adolescent egocentrism**: imaginary audience, personal fable
- **Brain development**: prefrontal cortex not fully mature until ~25
- **Risk-taking behavior linked to brain development**
      `
    },
    {
      id: 'adole1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to adolescent development?',
            options: [
              'Risk-taking behavior linked to brain development',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Risk-taking behavior linked to brain development'
          }
        ]
      }
    },
    {
      id: 'adole1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Puberty',
            options: ['Risk-taking behavior linked to brain development', 'biological changes, growth spurt', 'prefrontal cortex not fully mature until ~25', 'imaginary audience, personal fable']
          },
          {
            label: 'Adolescent egocentrism',
            options: ['imaginary audience, personal fable', 'biological changes, growth spurt', 'prefrontal cortex not fully mature until ~25', 'Risk-taking behavior linked to brain development']
          },
          {
            label: 'Brain development',
            options: ['Risk-taking behavior linked to brain development', 'imaginary audience, personal fable', 'biological changes, growth spurt', 'prefrontal cortex not fully mature until ~25']
          }
        ],
        correctAnswers: ['biological changes, growth spurt', 'imaginary audience, personal fable', 'prefrontal cortex not fully mature until ~25'],
        hint1: 'Think about what each concept specifically describes in Adolescence & Adulthood.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Adolescence & Adulthood describes a specific idea. Puberty: biological changes, growth spurt. Adolescent egocentrism: imaginary audience, personal fable. Brain development: prefrontal cortex not fully mature until ~25.'
      }
    }
  ]
}
