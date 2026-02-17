export const satReadingEvidencePart6Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 'sat-r6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Compare/contrast the two passages.

Questions may ask: how would Author 1 respond to Author 2?.
      `
    },
    {
      id: 'sat-r6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Compare/contrast the two passages.?',
            options: [
              'Find shared topics but differing perspectives.',
              'Compare/contrast the two passages.',
              'how would Author 1 respond to Author 2?.',
              'Some questions target just Passage 1 or Passage 2; others ask about both.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Compare/contrast the two passages. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Key Insight?',
            options: [
              'Find shared topics but differing perspectives.',
              'Compare/contrast the two passages.',
              'Some questions target just Passage 1 or Passage 2; others ask about both.',
              'how would Author 1 respond to Author 2?.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Find shared topics but differing perspectives. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-r6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Find shared topics but differing perspectives.

**SAT Tip:** Some questions target just Passage 1 or Passage 2; others ask about both.
      `
    },
    {
      id: 'sat-r6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Compare/contrast the two passages.',
              'Some questions target just Passage 1 or Passage 2; others ask about both.',
              'Find shared topics but differing perspectives.',
              'how would Author 1 respond to Author 2?.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Some questions target just Passage 1 or Passage 2; others ask about both. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-r6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Questions may ask',
            options: ['Compare/contrast the two passages.', 'how would Author 1 respond to Author 2?.', 'Find shared topics but differing perspectives.', 'Some questions target just Passage 1 or Passage 2; others ask about both.']
          },
          {
            label: 'Key Insight',
            options: ['Some questions target just Passage 1 or Passage 2; others ask about both.', 'how would Author 1 respond to Author 2?.', 'Compare/contrast the two passages.', 'Find shared topics but differing perspectives.']
          },
          {
            label: 'SAT Tip',
            options: ['Find shared topics but differing perspectives.', 'how would Author 1 respond to Author 2?.', 'Compare/contrast the two passages.', 'Some questions target just Passage 1 or Passage 2; others ask about both.']
          }
        ],
        correctAnswers: ['how would Author 1 respond to Author 2?.', 'Find shared topics but differing perspectives.', 'Some questions target just Passage 1 or Passage 2; others ask about both.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Questions may ask: how would Author 1 respond to Author 2?. Key Insight: Find shared topics but differing perspectives. SAT Tip: Some questions target just Passage 1 or Passage 2; others ask about both.'
      }
    }
  ]
}
