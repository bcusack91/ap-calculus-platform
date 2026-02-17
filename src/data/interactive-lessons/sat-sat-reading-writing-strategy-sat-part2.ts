export const satRWStrategyPart2Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'sat-r2-intro',
      type: 'text' as const,
      content: `
# Passage Strategy

**Part 2 of 7 — Passage Strategy**

Read the blurb (italicized intro) — it gives context.

Underline topic sentences and key transitions as you read.
      `
    },
    {
      id: 'sat-r2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Read the blurb (italicized intro) — it…?',
            options: [
              'Don\'t bring outside knowledge — answers must be supported by the passage text.',
              'Underline topic sentences and key transitions as you read.',
              'Main idea questions: what is the passage MOSTLY about?.',
              'Read the blurb (italicized intro) — it gives context.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Read the blurb (italicized intro) — it gives context. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Read the blurb (italicized intro) — it gives context.',
              'Main idea questions: what is the passage MOSTLY about?.',
              'Underline topic sentences and key transitions as you read.',
              'Don\'t bring outside knowledge — answers must be supported by the passage text.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Main idea questions: what is the passage MOSTLY about?. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-r2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Main idea questions: what is the passage MOSTLY about?.

**SAT Tip:** Don't bring outside knowledge — answers must be supported by the passage text.
      `
    },
    {
      id: 'sat-r2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Passage Strategy, which correctly describes SAT Tip?',
            options: [
              'Main idea questions: what is the passage MOSTLY about?.',
              'Underline topic sentences and key transitions as you read.',
              'Read the blurb (italicized intro) — it gives context.',
              'Don\'t bring outside knowledge — answers must be supported by the passage text.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Don\'t bring outside knowledge — answers must be supported by the passage text. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-r2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Don\'t bring outside knowledge — answers must be supported by the passage text.', 'Main idea questions: what is the passage MOSTLY about?.', 'Read the blurb (italicized intro) — it gives context.', 'Underline topic sentences and key transitions as you read.']
          },
          {
            label: 'SAT Tip',
            options: ['Main idea questions: what is the passage MOSTLY about?.', 'Don\'t bring outside knowledge — answers must be supported by the passage text.', 'Read the blurb (italicized intro) — it gives context.', 'Underline topic sentences and key transitions as you read.']
          }
        ],
        correctAnswers: ['Main idea questions: what is the passage MOSTLY about?.', 'Don\'t bring outside knowledge — answers must be supported by the passage text.'],
        hint1: 'Think about what each concept specifically describes in Passage Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Passage Strategy describes a specific idea. Key Insight: Main idea questions: what is the passage MOSTLY about?. SAT Tip: Don\'t bring outside knowledge — answers must be supported by the passage text.'
      }
    }
  ]
}
