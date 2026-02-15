export const satReadingEvidencePart1Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 'sat-r1-intro',
      type: 'text' as const,
      content: `
# 📝 Reading Evidence

**Part 1 of 7 — Finding Main Ideas**

Main idea = what the passage is mostly about.

Look at the first and last paragraphs for the thesis.
      `
    },
    {
      id: 'sat-r1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes main idea = what the passage is mostly about?',
            options: [
              'Main idea = what the passage is mostly about is a fundamental concept in SAT Reading & Writing',
              'Look at the first and last paragraphs for the thesis',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Main idea = what the passage is mostly about'
          }
        ]
      }
    },
    {
      id: 'sat-r1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Eliminate answers that are too broad, too narrow, or not supported.

**SAT Tip:** The main idea is supported by the details in the passage — not the other way around.
      `
    },
    {
      id: 'sat-r1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for finding main ideas?',
            options: [
              'Eliminate answers that are too broad, too narrow, or not supported',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Eliminate answers that are too broad, too narrow, or not supported'
          }
        ]
      }
    },
    {
      id: 'sat-r1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Finding Main Ideas:',
            options: ['Main idea = what the passage is mostly about', 'Look at the first and last paragraphs for the thes', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Eliminate answers that are too broad, too narrow, ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Main idea = what the passage is mostly about', 'Eliminate answers that are too broad, too narrow, '],
        hint1: 'Think about finding main ideas',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Main idea = what the passage is mostly about. Eliminate answers that are too broad, too narrow, or not supported.'
      }
    }
  ]
}
