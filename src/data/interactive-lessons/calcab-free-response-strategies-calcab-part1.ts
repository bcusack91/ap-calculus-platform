export const calcABFreeResponsePart1Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'free-1-intro',
      type: 'text' as const,
      content: `
# ∫ Free Response Strategies

**Part 1 of 7 — Reading AP Free Response Questions**

### 1. Read the entire problem before starting

Read the entire problem before starting

### 2. Identify what each part asks

find, show, justify, explain

### 3. Label answers clearly with units

Label answers clearly with units

### 4. Show all work — no credit for answers without supporting work

Show all work — no credit for answers without supporting work
      `
    },
    {
      id: 'free-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Read the entire problem before starting?',
            options: [
              'Show all work — no credit for answers without supporting work',
              'Label answers clearly with units',
              'Read the entire problem before starting',
              'find, show, justify, explain'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Read the entire problem before starting. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Label answers clearly with units:',
            options: [
              'Read the entire problem before starting',
              'find, show, justify, explain',
              'Label answers clearly with units',
              'Show all work — no credit for answers without supporting work'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Label answers clearly with units. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'free-1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Read the entire problem before starting**
- **Identify what each part asks**: find, show, justify, explain
- **Label answers clearly with units**
- **Show all work — no credit for answers without supporting work**
      `
    },
    {
      id: 'free-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Free Response Strategies, which correctly describes Show all work — no credit for answers…?',
            options: [
              'Show all work — no credit for answers without supporting work',
              'Label answers clearly with units',
              'find, show, justify, explain',
              'Read the entire problem before starting'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Show all work — no credit for answers without supporting work. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'free-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Read the entire problem before starting',
            options: ['Label answers clearly with units', 'Read the entire problem before starting', 'Show all work — no credit for answers without supporting work', 'find, show, justify, explain']
          },
          {
            label: 'Identify what each part asks',
            options: ['find, show, justify, explain', 'Read the entire problem before starting', 'Show all work — no credit for answers without supporting work', 'Label answers clearly with units']
          },
          {
            label: 'Label answers clearly with units',
            options: ['find, show, justify, explain', 'Show all work — no credit for answers without supporting work', 'Read the entire problem before starting', 'Label answers clearly with units']
          }
        ],
        correctAnswers: ['Read the entire problem before starting', 'find, show, justify, explain', 'Label answers clearly with units'],
        hint1: 'Think about what each concept specifically describes in Free Response Strategies.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Free Response Strategies describes a specific idea. Read the entire problem before starting. Identify what each part asks: find, show, justify, explain. Label answers clearly with units.'
      }
    }
  ]
}
