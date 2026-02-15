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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes "which choice provides the best evidence for the answer to the previous question?"?',
            options: [
              '"Which choice provides the best evidence for the answer to the previous question?" is a fundamental concept in SAT Reading & Writing',
              'Work backwards: check each line reference against the previous answer',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: '"Which choice provides the best evidence for the answer to the previous question?"'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for textual evidence questions?',
            options: [
              'Evidence must directly support the claim, not just relate to the topic',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Evidence must directly support the claim, not just relate to the topic'
          }
        ]
      }
    },
    {
      id: 'sat-r2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Textual Evidence Questions:',
            options: ['"Which choice provides the best evidence for the a', 'Work backwards: check each line reference against ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Evidence must directly support the claim, not just', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['"Which choice provides the best evidence for the a', 'Evidence must directly support the claim, not just'],
        hint1: 'Think about textual evidence questions',
        hint2: 'Consider the best SAT strategy',
        explanation: '"Which choice provides the best evidence for the answer to the previous question?". Evidence must directly support the claim, not just relate to the topic.'
      }
    }
  ]
}
