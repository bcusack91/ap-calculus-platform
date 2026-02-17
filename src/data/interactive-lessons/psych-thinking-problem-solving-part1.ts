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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Concepts?',
            options: [
              'best example of a concept (robin = bird)',
              'mental categories for objects, events, ideas',
              'schemas for sequences of events (restaurant script)',
              'organized knowledge structures'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Concepts: mental categories for objects, events, ideas. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Thinking & Problem Solving, which explains Schemas?',
            options: [
              'mental categories for objects, events, ideas',
              'schemas for sequences of events (restaurant script)',
              'organized knowledge structures',
              'best example of a concept (robin = bird)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Schemas: organized knowledge structures. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Concepts',
            options: ['schemas for sequences of events (restaurant script)', 'organized knowledge structures', 'mental categories for objects, events, ideas', 'best example of a concept (robin = bird)']
          },
          {
            label: 'Prototypes',
            options: ['mental categories for objects, events, ideas', 'schemas for sequences of events (restaurant script)', 'best example of a concept (robin = bird)', 'organized knowledge structures']
          },
          {
            label: 'Schemas',
            options: ['mental categories for objects, events, ideas', 'best example of a concept (robin = bird)', 'organized knowledge structures', 'schemas for sequences of events (restaurant script)']
          }
        ],
        correctAnswers: ['mental categories for objects, events, ideas', 'best example of a concept (robin = bird)', 'organized knowledge structures'],
        hint1: 'Think about what each concept specifically describes in Thinking & Problem Solving.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Thinking & Problem Solving describes a specific idea. Concepts: mental categories for objects, events, ideas. Prototypes: best example of a concept (robin = bird). Schemas: organized knowledge structures.'
      }
    }
  ]
}
