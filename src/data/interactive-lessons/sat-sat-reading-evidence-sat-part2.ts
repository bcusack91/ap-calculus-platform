export const satReadingEvidencePart2Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 'sat-r2-intro',
      type: 'text' as const,
      content: `
# Textual Evidence Questions

**Part 2 of 7 — Textual Evidence Questions**

"Which choice provides the best evidence for the answer to the previous question?".

Work backwards: check each line reference against the previous answer.
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
            question: 'Which of the following correctly describes "Which choice provides the best…?',
            options: [
              'check each line reference against the previous answer.',
              'These are paired with command-of-evidence questions — tackle them together.',
              '"Which choice provides the best evidence for the answer to the previous question?".',
              'Evidence must directly support the claim, not just relate to the topic.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — "Which choice provides the best evidence for the answer to the previous question?". The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              '"Which choice provides the best evidence for the answer to the previous question?".',
              'Evidence must directly support the claim, not just relate to the topic.',
              'check each line reference against the previous answer.',
              'These are paired with command-of-evidence questions — tackle them together.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Evidence must directly support the claim, not just relate to the topic. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-r2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Evidence must directly support the claim, not just relate to the topic.

**SAT Tip:** These are paired with command-of-evidence questions — tackle them together.
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
            question: 'Regarding Textual Evidence Questions, which correctly describes SAT Tip?',
            options: [
              'check each line reference against the previous answer.',
              'These are paired with command-of-evidence questions — tackle them together.',
              'Evidence must directly support the claim, not just relate to the topic.',
              '"Which choice provides the best evidence for the answer to the previous question?".'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: These are paired with command-of-evidence questions — tackle them together. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
            label: 'Work backwards',
            options: ['"Which choice provides the best evidence for the answer to the previous question?".', 'These are paired with command-of-evidence questions — tackle them together.', 'check each line reference against the previous answer.', 'Evidence must directly support the claim, not just relate to the topic.']
          },
          {
            label: 'Key Insight',
            options: ['These are paired with command-of-evidence questions — tackle them together.', '"Which choice provides the best evidence for the answer to the previous question?".', 'check each line reference against the previous answer.', 'Evidence must directly support the claim, not just relate to the topic.']
          },
          {
            label: 'SAT Tip',
            options: ['These are paired with command-of-evidence questions — tackle them together.', '"Which choice provides the best evidence for the answer to the previous question?".', 'Evidence must directly support the claim, not just relate to the topic.', 'check each line reference against the previous answer.']
          }
        ],
        correctAnswers: ['check each line reference against the previous answer.', 'Evidence must directly support the claim, not just relate to the topic.', 'These are paired with command-of-evidence questions — tackle them together.'],
        hint1: 'Think about what each concept specifically describes in Textual Evidence Questions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Textual Evidence Questions describes a specific idea. Work backwards: check each line reference against the previous answer. Key Insight: Evidence must directly support the claim, not just relate to the topic. SAT Tip: These are paired with command-of-evidence questions — tackle them together.'
      }
    }
  ]
}
