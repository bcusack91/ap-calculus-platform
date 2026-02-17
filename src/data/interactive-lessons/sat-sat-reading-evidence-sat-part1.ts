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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Main idea = what the passage is mostly…?',
            options: [
              'Main idea = what the passage is mostly about.',
              'Eliminate answers that are too broad, too narrow, or not supported.',
              'The main idea is supported by the details in the passage — not the other way around.',
              'Look at the first and last paragraphs for the thesis.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Main idea = what the passage is mostly about. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Look at the first and last paragraphs for the thesis.',
              'Main idea = what the passage is mostly about.',
              'The main idea is supported by the details in the passage — not the other way around.',
              'Eliminate answers that are too broad, too narrow, or not supported.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Eliminate answers that are too broad, too narrow, or not supported. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Main idea = what the passage is mostly about.',
              'The main idea is supported by the details in the passage — not the other way around.',
              'Eliminate answers that are too broad, too narrow, or not supported.',
              'Look at the first and last paragraphs for the thesis.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: The main idea is supported by the details in the passage — not the other way around. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-r1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Main idea = what the passage is mostly about.', 'The main idea is supported by the details in the passage — not the other way around.', 'Look at the first and last paragraphs for the thesis.', 'Eliminate answers that are too broad, too narrow, or not supported.']
          },
          {
            label: 'SAT Tip',
            options: ['The main idea is supported by the details in the passage — not the other way around.', 'Look at the first and last paragraphs for the thesis.', 'Eliminate answers that are too broad, too narrow, or not supported.', 'Main idea = what the passage is mostly about.']
          }
        ],
        correctAnswers: ['Eliminate answers that are too broad, too narrow, or not supported.', 'The main idea is supported by the details in the passage — not the other way around.'],
        hint1: 'Think about what each concept specifically describes in Reading Evidence.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Reading Evidence describes a specific idea. Key Insight: Eliminate answers that are too broad, too narrow, or not supported. SAT Tip: The main idea is supported by the details in the passage — not the other way around.'
      }
    }
  ]
}
