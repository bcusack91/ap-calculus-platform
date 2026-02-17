export const actRhetoricalPart5Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-e5-intro',
      type: 'text' as const,
      content: `
# Author Purpose & Style

**Part 5 of 7 — Author Purpose & Style**

Tone: formal vs. informal, objective vs. subjective.

Word choice reflects purpose: informative, persuasive, narrative.
      `
    },
    {
      id: 'act-e5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Tone" refer to in ACT prep?',
            options: [
              'Consider the audience and the overall tone of the passage.',
              'informative, persuasive, narrative.',
              '"Most effectively" questions: match the stated goal.',
              'formal vs. informal, objective vs. subjective.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Tone: formal vs. informal, objective vs. subjective. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Author Purpose & Style, which explains Key Insight?',
            options: [
              'informative, persuasive, narrative.',
              'formal vs. informal, objective vs. subjective.',
              'Consider the audience and the overall tone of the passage.',
              '"Most effectively" questions: match the stated goal.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: "Most effectively" questions: match the stated goal. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** "Most effectively" questions: match the stated goal.

**ACT Tip:** Consider the audience and the overall tone of the passage.
      `
    },
    {
      id: 'act-e5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'formal vs. informal, objective vs. subjective.',
              'informative, persuasive, narrative.',
              '"Most effectively" questions: match the stated goal.',
              'Consider the audience and the overall tone of the passage.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Consider the audience and the overall tone of the passage. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Tone',
            options: ['formal vs. informal, objective vs. subjective.', '"Most effectively" questions: match the stated goal.', 'Consider the audience and the overall tone of the passage.', 'informative, persuasive, narrative.']
          },
          {
            label: 'Word choice reflects purpose',
            options: ['"Most effectively" questions: match the stated goal.', 'Consider the audience and the overall tone of the passage.', 'formal vs. informal, objective vs. subjective.', 'informative, persuasive, narrative.']
          },
          {
            label: 'Key Insight',
            options: ['Consider the audience and the overall tone of the passage.', 'informative, persuasive, narrative.', '"Most effectively" questions: match the stated goal.', 'formal vs. informal, objective vs. subjective.']
          }
        ],
        correctAnswers: ['formal vs. informal, objective vs. subjective.', 'informative, persuasive, narrative.', '"Most effectively" questions: match the stated goal.'],
        hint1: 'Think about what each concept specifically describes in Author Purpose & Style.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Author Purpose & Style describes a specific idea. Tone: formal vs. informal, objective vs. subjective. Word choice reflects purpose: informative, persuasive, narrative. Key Insight: "Most effectively" questions: match the stated goal.'
      }
    }
  ]
}
