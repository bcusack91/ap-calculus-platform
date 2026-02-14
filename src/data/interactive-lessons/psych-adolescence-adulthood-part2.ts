export const psychAdolescencePart2Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adole2-intro',
      type: 'text' as const,
      content: `
# ## Identity Formation

**Part 2 of 7 — Identity Formation**

### 1. Erikson

identity vs role confusion

### 2. Marcia

identity statuses (achievement, moratorium, foreclosure, diffusion)

### 3. Social identity

race, gender, culture, religion

### 4. Peer influence increases during adolescence

Peer influence increases during adolescence
      `
    },
    {
      id: 'adole2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of identity formation?',
            options: [
              'Erikson',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Erikson: identity vs role confusion'
          },
          {
            question: 'In the context of identity formation, which is accurate?',
            options: [
              'race, gender, culture, religion',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Social identity: race, gender, culture, religion'
          }
        ]
      }
    },
    {
      id: 'adole2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Erikson**: identity vs role confusion
- **Marcia**: identity statuses (achievement, moratorium, foreclosure, diffusion)
- **Social identity**: race, gender, culture, religion
- **Peer influence increases during adolescence**
      `
    },
    {
      id: 'adole2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to identity formation?',
            options: [
              'Peer influence increases during adolescence',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Peer influence increases during adolescence'
          }
        ]
      }
    },
    {
      id: 'adole2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Erikson',
            options: ['identity vs role confusion', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Marcia',
            options: ['identity statuses (achievement, moratorium, forecl', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Social identity',
            options: ['race, gender, culture, religion', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['identity vs role confusion', 'identity statuses (achievement, moratorium, forecl', 'race, gender, culture, religion'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Identity Formation.'
      }
    }
  ]
}
