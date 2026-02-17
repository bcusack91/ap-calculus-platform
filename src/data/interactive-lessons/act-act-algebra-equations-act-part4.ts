export const actAlgebraPart4Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-a4-intro',
      type: 'text' as const,
      content: `
# Absolute Value

**Part 4 of 7 — Absolute Value**

|x| = a means x = a or x = -a.

|x| < a means -a < x < a (AND compound inequality).
      `
    },
    {
      id: 'act-a4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "|x| = a means x = a or x = -a." refer to in ACT prep?',
            options: [
              '|x| < a means -a < x < a (AND compound inequality).',
              '|x| > a means x > a or x < -a (OR compound inequality).',
              '|x| = a means x = a or x = -a.',
              'Always isolate the absolute value expression first before splitting into cases.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — |x| = a means x = a or x = -a. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Absolute Value, which explains Key Insight?',
            options: [
              'Always isolate the absolute value expression first before splitting into cases.',
              '|x| > a means x > a or x < -a (OR compound inequality).',
              '|x| = a means x = a or x = -a.',
              '|x| < a means -a < x < a (AND compound inequality).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: |x| > a means x > a or x < -a (OR compound inequality). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-a4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** |x| > a means x > a or x < -a (OR compound inequality).

**ACT Tip:** Always isolate the absolute value expression first before splitting into cases.
      `
    },
    {
      id: 'act-a4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Absolute Value, which correctly describes ACT Tip?',
            options: [
              '|x| < a means -a < x < a (AND compound inequality).',
              '|x| = a means x = a or x = -a.',
              '|x| > a means x > a or x < -a (OR compound inequality).',
              'Always isolate the absolute value expression first before splitting into cases.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Always isolate the absolute value expression first before splitting into cases. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-a4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['|x| < a means -a < x < a (AND compound inequality).', 'Always isolate the absolute value expression first before splitting into cases.', '|x| = a means x = a or x = -a.', '|x| > a means x > a or x < -a (OR compound inequality).']
          },
          {
            label: 'ACT Tip',
            options: ['|x| > a means x > a or x < -a (OR compound inequality).', '|x| < a means -a < x < a (AND compound inequality).', '|x| = a means x = a or x = -a.', 'Always isolate the absolute value expression first before splitting into cases.']
          }
        ],
        correctAnswers: ['|x| > a means x > a or x < -a (OR compound inequality).', 'Always isolate the absolute value expression first before splitting into cases.'],
        hint1: 'Think about what each concept specifically describes in Absolute Value.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Absolute Value describes a specific idea. Key Insight: |x| > a means x > a or x < -a (OR compound inequality). ACT Tip: Always isolate the absolute value expression first before splitting into cases.'
      }
    }
  ]
}
