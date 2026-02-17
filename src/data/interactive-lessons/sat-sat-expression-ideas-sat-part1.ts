export const satExpressionPart1Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'sat-e1-intro',
      type: 'text' as const,
      content: `
# 📝 Expression Ideas

**Part 1 of 7 — Conciseness & Redundancy**

Avoid redundancy: don't say the same thing twice in different words.

Shorter is usually better on the SAT (if meaning is preserved).
      `
    },
    {
      id: 'sat-e1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Avoid redundancy?',
            options: [
              'Shorter is usually better on the SAT (if meaning is preserved).',
              'Eliminate wordy phrases: "due to the fact that" → "because".',
              'don\'t say the same thing twice in different words.',
              'If two answers convey the same meaning, choose the more concise one.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Avoid redundancy: don\'t say the same thing twice in different words. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Expression Ideas, which explains Key Insight?',
            options: [
              'Shorter is usually better on the SAT (if meaning is preserved).',
              'Eliminate wordy phrases: "due to the fact that" → "because".',
              'don\'t say the same thing twice in different words.',
              'If two answers convey the same meaning, choose the more concise one.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Eliminate wordy phrases: "due to the fact that" → "because". Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-e1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Eliminate wordy phrases: "due to the fact that" → "because".

**SAT Tip:** If two answers convey the same meaning, choose the more concise one.
      `
    },
    {
      id: 'sat-e1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Shorter is usually better on the SAT (if meaning is preserved).',
              'If two answers convey the same meaning, choose the more concise one.',
              'don\'t say the same thing twice in different words.',
              'Eliminate wordy phrases: "due to the fact that" → "because".'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: If two answers convey the same meaning, choose the more concise one. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Avoid redundancy',
            options: ['If two answers convey the same meaning, choose the more concise one.', 'don\'t say the same thing twice in different words.', 'Shorter is usually better on the SAT (if meaning is preserved).', 'Eliminate wordy phrases: "due to the fact that" → "because".']
          },
          {
            label: 'Key Insight',
            options: ['Eliminate wordy phrases: "due to the fact that" → "because".', 'don\'t say the same thing twice in different words.', 'If two answers convey the same meaning, choose the more concise one.', 'Shorter is usually better on the SAT (if meaning is preserved).']
          },
          {
            label: 'SAT Tip',
            options: ['Eliminate wordy phrases: "due to the fact that" → "because".', 'Shorter is usually better on the SAT (if meaning is preserved).', 'If two answers convey the same meaning, choose the more concise one.', 'don\'t say the same thing twice in different words.']
          }
        ],
        correctAnswers: ['don\'t say the same thing twice in different words.', 'Eliminate wordy phrases: "due to the fact that" → "because".', 'If two answers convey the same meaning, choose the more concise one.'],
        hint1: 'Think about what each concept specifically describes in Expression Ideas.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Expression Ideas describes a specific idea. Avoid redundancy: don\'t say the same thing twice in different words. Key Insight: Eliminate wordy phrases: "due to the fact that" → "because". SAT Tip: If two answers convey the same meaning, choose the more concise one.'
      }
    }
  ]
}
