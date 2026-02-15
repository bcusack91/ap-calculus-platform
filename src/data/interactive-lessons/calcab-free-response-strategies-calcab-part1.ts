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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of reading ap free response questions?',
            options: [
              'Read the entire problem before starting',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Read the entire problem before starting'
          },
          {
            question: 'In the context of reading ap free response questions, which is accurate?',
            options: [
              'Label answers clearly with units',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Label answers clearly with units'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to reading ap free response questions?',
            options: [
              'Show all work — no credit for answers without supporting work',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Show all work — no credit for answers without supporting work'
          }
        ]
      }
    },
    {
      id: 'free-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Read the entire problem before starting',
            options: ['Read the entire problem before starting', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Identify what each part asks',
            options: ['find, show, justify, explain', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Label answers clearly with units',
            options: ['Label answers clearly with units', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Read the entire problem before starting', 'find, show, justify, explain', 'Label answers clearly with units'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Reading AP Free Response Questions.'
      }
    }
  ]
}
