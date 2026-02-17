export const actRhetoricalPart7Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-e7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Tone: formal vs. informal, objective vs. subjective.

Word choice reflects purpose: informative, persuasive, narrative.
      `
    },
    {
      id: 'act-e7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Tone" refer to in ACT prep?',
            options: [
              'formal vs. informal, objective vs. subjective.',
              '"Most effectively" questions: match the stated goal.',
              'Consider the audience and the overall tone of the passage.',
              'informative, persuasive, narrative.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Tone: formal vs. informal, objective vs. subjective. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              '"Most effectively" questions: match the stated goal.',
              'informative, persuasive, narrative.',
              'Consider the audience and the overall tone of the passage.',
              'formal vs. informal, objective vs. subjective.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: "Most effectively" questions: match the stated goal. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** "Most effectively" questions: match the stated goal.

**ACT Tip:** Consider the audience and the overall tone of the passage.
      `
    },
    {
      id: 'act-e7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'formal vs. informal, objective vs. subjective.',
              '"Most effectively" questions: match the stated goal.',
              'Consider the audience and the overall tone of the passage.',
              'informative, persuasive, narrative.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Consider the audience and the overall tone of the passage. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Tone',
            options: ['informative, persuasive, narrative.', 'Consider the audience and the overall tone of the passage.', '"Most effectively" questions: match the stated goal.', 'formal vs. informal, objective vs. subjective.']
          },
          {
            label: 'Word choice reflects purpose',
            options: ['formal vs. informal, objective vs. subjective.', 'informative, persuasive, narrative.', '"Most effectively" questions: match the stated goal.', 'Consider the audience and the overall tone of the passage.']
          },
          {
            label: 'Key Insight',
            options: ['"Most effectively" questions: match the stated goal.', 'formal vs. informal, objective vs. subjective.', 'informative, persuasive, narrative.', 'Consider the audience and the overall tone of the passage.']
          }
        ],
        correctAnswers: ['formal vs. informal, objective vs. subjective.', 'informative, persuasive, narrative.', '"Most effectively" questions: match the stated goal.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Tone: formal vs. informal, objective vs. subjective. Word choice reflects purpose: informative, persuasive, narrative. Key Insight: "Most effectively" questions: match the stated goal.'
      }
    }
  ]
}
