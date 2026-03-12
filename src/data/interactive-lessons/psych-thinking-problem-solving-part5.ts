export const psychThinkingPart5Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think5-intro',
      type: 'text' as const,
      content: `
## Creativity

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Convergent thinking?',
            options: [
              'expertise, imaginative thinking, motivation',
              'one correct answer',
              'generating many possible solutions',
              'Brainstorming and creative problem-solving'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Convergent thinking: one correct answer. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Components of creativity?',
            options: [
              'one correct answer',
              'generating many possible solutions',
              'Brainstorming and creative problem-solving',
              'expertise, imaginative thinking, motivation'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Components of creativity: expertise, imaginative thinking, motivation. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'think5-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Convergent thinking',
            options: ['one correct answer', 'expertise, imaginative thinking, motivation', 'generating many possible solutions', 'Brainstorming and creative problem-solving']
          },
          {
            label: 'Divergent thinking',
            options: ['expertise, imaginative thinking, motivation', 'generating many possible solutions', 'one correct answer', 'Brainstorming and creative problem-solving']
          },
          {
            label: 'Components of creativity',
            options: ['generating many possible solutions', 'one correct answer', 'expertise, imaginative thinking, motivation', 'Brainstorming and creative problem-solving']
          }
        ],
        correctAnswers: ['one correct answer', 'generating many possible solutions', 'expertise, imaginative thinking, motivation'],
        hint1: 'Think about what each concept specifically describes in Creativity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Creativity describes a specific idea. Convergent thinking: one correct answer. Divergent thinking: generating many possible solutions. Components of creativity: expertise, imaginative thinking, motivation.'
      }
    }
  ]
}
