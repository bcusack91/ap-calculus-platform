export const actRhetoricalPart6Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-e6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Tone: formal vs. informal, objective vs. subjective.

Word choice reflects purpose: informative, persuasive, narrative.
      `
    },
    {
      id: 'act-e6-quiz1',
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
            question: 'In the context of Problem-Solving Workshop, which explains Key Insight?',
            options: [
              'formal vs. informal, objective vs. subjective.',
              '"Most effectively" questions: match the stated goal.',
              'informative, persuasive, narrative.',
              'Consider the audience and the overall tone of the passage.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: "Most effectively" questions: match the stated goal. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** "Most effectively" questions: match the stated goal.

**ACT Tip:** Consider the audience and the overall tone of the passage.
      `
    },
    {
      id: 'act-e6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes ACT Tip?',
            options: [
              'Consider the audience and the overall tone of the passage.',
              'formal vs. informal, objective vs. subjective.',
              '"Most effectively" questions: match the stated goal.',
              'informative, persuasive, narrative.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Consider the audience and the overall tone of the passage. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Tone',
            options: ['Consider the audience and the overall tone of the passage.', 'formal vs. informal, objective vs. subjective.', '"Most effectively" questions: match the stated goal.', 'informative, persuasive, narrative.']
          },
          {
            label: 'Word choice reflects purpose',
            options: ['formal vs. informal, objective vs. subjective.', 'Consider the audience and the overall tone of the passage.', 'informative, persuasive, narrative.', '"Most effectively" questions: match the stated goal.']
          },
          {
            label: 'Key Insight',
            options: ['"Most effectively" questions: match the stated goal.', 'formal vs. informal, objective vs. subjective.', 'Consider the audience and the overall tone of the passage.', 'informative, persuasive, narrative.']
          }
        ],
        correctAnswers: ['formal vs. informal, objective vs. subjective.', 'informative, persuasive, narrative.', '"Most effectively" questions: match the stated goal.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Tone: formal vs. informal, objective vs. subjective. Word choice reflects purpose: informative, persuasive, narrative. Key Insight: "Most effectively" questions: match the stated goal.'
      }
    }
  ]
}
