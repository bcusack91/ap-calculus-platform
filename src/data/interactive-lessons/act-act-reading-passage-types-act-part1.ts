export const actPassageTypesPart1Data = {
  topicSlug: 'act-reading-passage-types-act',
  sections: [
    {
      id: 'act-r1-intro',
      type: 'text' as const,
      content: `
# 📋 Reading Passage Types

**Part 1 of 7 — Prose Fiction / Literary Narrative**

Focus on characters, relationships, emotions, and themes.

Track character motivations and how they change.
      `
    },
    {
      id: 'act-r1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Focus on characters, relationships,…?',
            options: [
              'Track character motivations and how they change.',
              'Pay attention to tone and mood.',
              'Focus on characters, relationships, emotions, and themes.',
              'Questions ask about character traits, relationships, and the narrator\'s perspective.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Focus on characters, relationships, emotions, and themes. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Questions ask about character traits, relationships, and the narrator\'s perspective.',
              'Focus on characters, relationships, emotions, and themes.',
              'Track character motivations and how they change.',
              'Pay attention to tone and mood.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Pay attention to tone and mood. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Pay attention to tone and mood.

**ACT Tip:** Questions ask about character traits, relationships, and the narrator's perspective.
      `
    },
    {
      id: 'act-r1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Reading Passage Types, which correctly describes ACT Tip?',
            options: [
              'Pay attention to tone and mood.',
              'Questions ask about character traits, relationships, and the narrator\'s perspective.',
              'Track character motivations and how they change.',
              'Focus on characters, relationships, emotions, and themes.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Questions ask about character traits, relationships, and the narrator\'s perspective. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Focus on characters, relationships, emotions, and themes.', 'Track character motivations and how they change.', 'Pay attention to tone and mood.', 'Questions ask about character traits, relationships, and the narrator\'s perspective.']
          },
          {
            label: 'ACT Tip',
            options: ['Questions ask about character traits, relationships, and the narrator\'s perspective.', 'Focus on characters, relationships, emotions, and themes.', 'Track character motivations and how they change.', 'Pay attention to tone and mood.']
          }
        ],
        correctAnswers: ['Pay attention to tone and mood.', 'Questions ask about character traits, relationships, and the narrator\'s perspective.'],
        hint1: 'Think about what each concept specifically describes in Reading Passage Types.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Reading Passage Types describes a specific idea. Key Insight: Pay attention to tone and mood. ACT Tip: Questions ask about character traits, relationships, and the narrator\'s perspective.'
      }
    }
  ]
}
