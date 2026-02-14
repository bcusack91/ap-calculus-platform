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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of adolescent development?',
            options: [
              'Puberty',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Puberty: biological changes, growth spurt'
          },
          {
            question: 'In the context of adolescent development, which is accurate?',
            options: [
              'prefrontal cortex not fully mature until ~25',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Brain development: prefrontal cortex not fully mature until ~25'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Puberty',
            options: ['biological changes, growth spurt', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Adolescent egocentrism',
            options: ['imaginary audience, personal fable', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Brain development',
            options: ['prefrontal cortex not fully mature until ~25', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['biological changes, growth spurt', 'imaginary audience, personal fable', 'prefrontal cortex not fully mature until ~25'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Adolescent Development.'
      }
    }
  ]
}
