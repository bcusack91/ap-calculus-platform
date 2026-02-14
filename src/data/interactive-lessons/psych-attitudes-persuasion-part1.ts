export const psychAttitudesPart1Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attit1-intro',
      type: 'text' as const,
      content: `
# 🧠 Attitudes & Persuasion

**Part 1 of 7 — Attitude Formation**

### 1. Attitudes

evaluations of people, objects, ideas

### 2. Components

affective (feelings), behavioral (actions), cognitive (beliefs)

### 3. Attitudes predict behavior when specific and strong

Attitudes predict behavior when specific and strong

### 4. Attitudes formed through experience, conditioning, observation

Attitudes formed through experience, conditioning, observation
      `
    },
    {
      id: 'attit1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of attitude formation?',
            options: [
              'Attitudes',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Attitudes: evaluations of people, objects, ideas'
          },
          {
            question: 'In the context of attitude formation, which is accurate?',
            options: [
              'Attitudes predict behavior when specific and strong',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Attitudes predict behavior when specific and strong'
          }
        ]
      }
    },
    {
      id: 'attit1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Attitudes**: evaluations of people, objects, ideas
- **Components**: affective (feelings), behavioral (actions), cognitive (beliefs)
- **Attitudes predict behavior when specific and strong**
- **Attitudes formed through experience, conditioning, observation**
      `
    },
    {
      id: 'attit1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to attitude formation?',
            options: [
              'Attitudes formed through experience, conditioning, observation',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Attitudes formed through experience, conditioning, observation'
          }
        ]
      }
    },
    {
      id: 'attit1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Attitudes',
            options: ['evaluations of people, objects, ideas', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Components',
            options: ['affective (feelings), behavioral (actions), cognit', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Attitudes predict behavior when specific and strong',
            options: ['Attitudes predict behavior when specific and stron', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['evaluations of people, objects, ideas', 'affective (feelings), behavioral (actions), cognit', 'Attitudes predict behavior when specific and stron'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Attitude Formation.'
      }
    }
  ]
}
