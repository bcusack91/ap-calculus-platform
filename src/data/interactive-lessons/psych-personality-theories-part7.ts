export const psychPersonalityPart7Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'perso7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Multiple perspectives offer different insights

Multiple perspectives offer different insights

### 2. Personality is shaped by biology, cognition, and environment

Personality is shaped by biology, cognition, and environment

### 3. Assessment methods have strengths and limitations

Assessment methods have strengths and limitations

### 4. AP exam

personality theory comparisons
      `
    },
    {
      id: 'perso7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Multiple perspectives offer different…" refer to in psychology?',
            options: [
              'Multiple perspectives offer different insights',
              'Personality is shaped by biology, cognition, and environment',
              'Assessment methods have strengths and limitations',
              'personality theory comparisons'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Multiple perspectives offer different insights. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Assessment methods have strengths and…?',
            options: [
              'personality theory comparisons',
              'Multiple perspectives offer different insights',
              'Personality is shaped by biology, cognition, and environment',
              'Assessment methods have strengths and limitations'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Assessment methods have strengths and limitations. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'perso7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Multiple perspectives offer different insights**
- **Personality is shaped by biology, cognition, and environment**
- **Assessment methods have strengths and limitations**
- **AP exam**: personality theory comparisons
      `
    },
    {
      id: 'perso7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'personality theory comparisons',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: personality theory comparisons'
          }
        ]
      }
    },
    {
      id: 'perso7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Multiple perspectives offer different…',
            options: ['Assessment methods have strengths and limitations', 'Personality is shaped by biology, cognition, and environment', 'personality theory comparisons', 'Multiple perspectives offer different insights']
          },
          {
            label: 'Personality is shaped by biology,…',
            options: ['personality theory comparisons', 'Personality is shaped by biology, cognition, and environment', 'Assessment methods have strengths and limitations', 'Multiple perspectives offer different insights']
          },
          {
            label: 'Assessment methods have strengths and…',
            options: ['Personality is shaped by biology, cognition, and environment', 'personality theory comparisons', 'Multiple perspectives offer different insights', 'Assessment methods have strengths and limitations']
          }
        ],
        correctAnswers: ['Multiple perspectives offer different insights', 'Personality is shaped by biology, cognition, and environment', 'Assessment methods have strengths and limitations'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Multiple perspectives offer different insights. Personality is shaped by biology, cognition, and environment. Assessment methods have strengths and limitations.'
      }
    }
  ]
}
