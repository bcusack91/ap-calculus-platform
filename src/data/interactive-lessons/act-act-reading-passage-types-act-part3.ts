export const actPassageTypesPart3Data = {
  topicSlug: 'act-reading-passage-types-act',
  sections: [
    {
      id: 'act-r3-intro',
      type: 'text' as const,
      content: `
# Humanities

**Part 3 of 7 — Humanities**

Topics: art, music, literature, philosophy, memoir.

Often personal or reflective in tone.
      `
    },
    {
      id: 'act-r3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Topics" refer to in ACT prep?',
            options: [
              'art, music, literature, philosophy, memoir.',
              'Questions may ask about the significance of specific events or ideas.',
              'Often personal or reflective in tone.',
              'Track the author\'s experiences and how they shape their perspective.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Topics: art, music, literature, philosophy, memoir. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Often personal or reflective in tone.',
              'Track the author\'s experiences and how they shape their perspective.',
              'art, music, literature, philosophy, memoir.',
              'Questions may ask about the significance of specific events or ideas.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Track the author\'s experiences and how they shape their perspective. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Track the author's experiences and how they shape their perspective.

**ACT Tip:** Questions may ask about the significance of specific events or ideas.
      `
    },
    {
      id: 'act-r3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Often personal or reflective in tone.',
              'art, music, literature, philosophy, memoir.',
              'Track the author\'s experiences and how they shape their perspective.',
              'Questions may ask about the significance of specific events or ideas.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Questions may ask about the significance of specific events or ideas. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Topics',
            options: ['Track the author\'s experiences and how they shape their perspective.', 'art, music, literature, philosophy, memoir.', 'Questions may ask about the significance of specific events or ideas.', 'Often personal or reflective in tone.']
          },
          {
            label: 'Key Insight',
            options: ['Often personal or reflective in tone.', 'art, music, literature, philosophy, memoir.', 'Track the author\'s experiences and how they shape their perspective.', 'Questions may ask about the significance of specific events or ideas.']
          },
          {
            label: 'ACT Tip',
            options: ['art, music, literature, philosophy, memoir.', 'Track the author\'s experiences and how they shape their perspective.', 'Often personal or reflective in tone.', 'Questions may ask about the significance of specific events or ideas.']
          }
        ],
        correctAnswers: ['art, music, literature, philosophy, memoir.', 'Track the author\'s experiences and how they shape their perspective.', 'Questions may ask about the significance of specific events or ideas.'],
        hint1: 'Think about what each concept specifically describes in Humanities.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Humanities describes a specific idea. Topics: art, music, literature, philosophy, memoir. Key Insight: Track the author\'s experiences and how they shape their perspective. ACT Tip: Questions may ask about the significance of specific events or ideas.'
      }
    }
  ]
}
