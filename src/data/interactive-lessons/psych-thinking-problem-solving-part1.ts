export const psychThinkingPart1Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think1-intro',
      type: 'text' as const,
      content: `
# 🧠 Thinking & Problem Solving

**Part 1 of 7 — Concepts & Categories**

### 1. Concepts

mental categories for objects, events, ideas

### 2. Prototypes

best example of a concept (robin = bird)

### 3. Schemas

organized knowledge structures

### 4. Scripts

schemas for sequences of events (restaurant script)
      `
    },
    {
      id: 'think1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of concepts & categories?',
            options: [
              'Concepts',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Concepts: mental categories for objects, events, ideas'
          },
          {
            question: 'In the context of concepts & categories, which is accurate?',
            options: [
              'organized knowledge structures',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Schemas: organized knowledge structures'
          }
        ]
      }
    },
    {
      id: 'think1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Concepts**: mental categories for objects, events, ideas
- **Prototypes**: best example of a concept (robin = bird)
- **Schemas**: organized knowledge structures
- **Scripts**: schemas for sequences of events (restaurant script)
      `
    },
    {
      id: 'think1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to concepts & categories?',
            options: [
              'schemas for sequences of events (restaurant script)',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Scripts: schemas for sequences of events (restaurant script)'
          }
        ]
      }
    },
    {
      id: 'think1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Concepts',
            options: ['mental categories for objects, events, ideas', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Prototypes',
            options: ['best example of a concept (robin = bird)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Schemas',
            options: ['organized knowledge structures', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['mental categories for objects, events, ideas', 'best example of a concept (robin = bird)', 'organized knowledge structures'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Concepts & Categories.'
      }
    }
  ]
}
