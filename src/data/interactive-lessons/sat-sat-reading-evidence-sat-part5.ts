export const satReadingEvidencePart5Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 'sat-r5-intro',
      type: 'text' as const,
      content: `
# Paired Passages

**Part 5 of 7 — Paired Passages**

Compare/contrast the two passages.

Questions may ask: how would Author 1 respond to Author 2?.
      `
    },
    {
      id: 'sat-r5-quiz1',
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
              'Some questions target just Passage 1 or Passage 2; others ask about both.',
              'Compare/contrast the two passages.',
              'how would Author 1 respond to Author 2?.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Compare/contrast the two passages. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Paired Passages, which explains Key Insight?',
            options: [
              'how would Author 1 respond to Author 2?.',
              'Compare/contrast the two passages.',
              'Find shared topics but differing perspectives.',
              'Some questions target just Passage 1 or Passage 2; others ask about both.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Find shared topics but differing perspectives. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-r5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Find shared topics but differing perspectives.

**SAT Tip:** Some questions target just Passage 1 or Passage 2; others ask about both.
      `
    },
    {
      id: 'sat-r5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Paired Passages, which correctly describes SAT Tip?',
            options: [
              'Some questions target just Passage 1 or Passage 2; others ask about both.',
              'how would Author 1 respond to Author 2?.',
              'Compare/contrast the two passages.',
              'Find shared topics but differing perspectives.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Some questions target just Passage 1 or Passage 2; others ask about both. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-r5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Questions may ask',
            options: ['Some questions target just Passage 1 or Passage 2; others ask about both.', 'Compare/contrast the two passages.', 'how would Author 1 respond to Author 2?.', 'Find shared topics but differing perspectives.']
          },
          {
            label: 'Key Insight',
            options: ['Some questions target just Passage 1 or Passage 2; others ask about both.', 'Find shared topics but differing perspectives.', 'Compare/contrast the two passages.', 'how would Author 1 respond to Author 2?.']
          },
          {
            label: 'SAT Tip',
            options: ['how would Author 1 respond to Author 2?.', 'Some questions target just Passage 1 or Passage 2; others ask about both.', 'Compare/contrast the two passages.', 'Find shared topics but differing perspectives.']
          }
        ],
        correctAnswers: ['how would Author 1 respond to Author 2?.', 'Find shared topics but differing perspectives.', 'Some questions target just Passage 1 or Passage 2; others ask about both.'],
        hint1: 'Think about what each concept specifically describes in Paired Passages.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Paired Passages describes a specific idea. Questions may ask: how would Author 1 respond to Author 2?. Key Insight: Find shared topics but differing perspectives. SAT Tip: Some questions target just Passage 1 or Passage 2; others ask about both.'
      }
    }
  ]
}
