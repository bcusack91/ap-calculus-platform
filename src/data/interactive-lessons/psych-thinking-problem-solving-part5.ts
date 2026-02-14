export const psychThinkingPart5Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think5-intro',
      type: 'text' as const,
      content: `
# ## Creativity

**Part 5 of 7 — Creativity**

### 1. Convergent thinking

one correct answer

### 2. Divergent thinking

generating many possible solutions

### 3. Components of creativity

expertise, imaginative thinking, motivation

### 4. Brainstorming and creative problem-solving

Brainstorming and creative problem-solving
      `
    },
    {
      id: 'think5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of creativity?',
            options: [
              'Convergent thinking',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Convergent thinking: one correct answer'
          },
          {
            question: 'In the context of creativity, which is accurate?',
            options: [
              'expertise, imaginative thinking, motivation',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Components of creativity: expertise, imaginative thinking, motivation'
          }
        ]
      }
    },
    {
      id: 'think5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Convergent thinking**: one correct answer
- **Divergent thinking**: generating many possible solutions
- **Components of creativity**: expertise, imaginative thinking, motivation
- **Brainstorming and creative problem-solving**
      `
    },
    {
      id: 'think5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to creativity?',
            options: [
              'Brainstorming and creative problem-solving',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Brainstorming and creative problem-solving'
          }
        ]
      }
    },
    {
      id: 'think5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Convergent thinking',
            options: ['one correct answer', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Divergent thinking',
            options: ['generating many possible solutions', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Components of creativity',
            options: ['expertise, imaginative thinking, motivation', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['one correct answer', 'generating many possible solutions', 'expertise, imaginative thinking, motivation'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Creativity.'
      }
    }
  ]
}
