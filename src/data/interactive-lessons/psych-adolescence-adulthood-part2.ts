export const psychAdolescencePart2Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adole2-intro',
      type: 'text' as const,
      content: `
## Identity Formation

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Erikson?',
            options: [
              'race, gender, culture, religion',
              'Peer influence increases during adolescence',
              'identity vs role confusion',
              'identity statuses (achievement, moratorium, foreclosure, diffusion)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Erikson: identity vs role confusion. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Social identity:',
            options: [
              'identity statuses (achievement, moratorium, foreclosure, diffusion)',
              'Peer influence increases during adolescence',
              'race, gender, culture, religion',
              'identity vs role confusion'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Social identity: race, gender, culture, religion. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'adole2-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Erikson',
            options: ['identity statuses (achievement, moratorium, foreclosure, diffusion)', 'identity vs role confusion', 'Peer influence increases during adolescence', 'race, gender, culture, religion']
          },
          {
            label: 'Marcia',
            options: ['identity vs role confusion', 'race, gender, culture, religion', 'identity statuses (achievement, moratorium, foreclosure, diffusion)', 'Peer influence increases during adolescence']
          },
          {
            label: 'Social identity',
            options: ['identity vs role confusion', 'race, gender, culture, religion', 'Peer influence increases during adolescence', 'identity statuses (achievement, moratorium, foreclosure, diffusion)']
          }
        ],
        correctAnswers: ['identity vs role confusion', 'identity statuses (achievement, moratorium, foreclosure, diffusion)', 'race, gender, culture, religion'],
        hint1: 'Think about what each concept specifically describes in Identity Formation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Identity Formation describes a specific idea. Erikson: identity vs role confusion. Marcia: identity statuses (achievement, moratorium, foreclosure, diffusion). Social identity: race, gender, culture, religion.'
      }
    }
  ]
}
