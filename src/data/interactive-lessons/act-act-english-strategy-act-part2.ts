export const actEnglishStratPart2Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-e2-intro',
      type: 'text' as const,
      content: `
# Grammar vs. Rhetoric

**Part 2 of 7 — Grammar vs. Rhetoric**

Grammar: one objectively correct answer based on rules.

Rhetoric: best answer based on effectiveness, purpose, or style.
      `
    },
    {
      id: 'act-e2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Grammar?',
            options: [
              'best answer based on effectiveness, purpose, or style.',
              'For grammar: apply the rule; for rhetoric: consider the goal.',
              'Grammar = ~51% of questions; Rhetoric = ~49%.',
              'one objectively correct answer based on rules.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Grammar: one objectively correct answer based on rules. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'one objectively correct answer based on rules.',
              'For grammar: apply the rule; for rhetoric: consider the goal.',
              'Grammar = ~51% of questions; Rhetoric = ~49%.',
              'best answer based on effectiveness, purpose, or style.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Grammar = ~51% of questions; Rhetoric = ~49%. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Grammar = ~51% of questions; Rhetoric = ~49%.

**ACT Tip:** For grammar: apply the rule; for rhetoric: consider the goal.
      `
    },
    {
      id: 'act-e2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Grammar vs. Rhetoric, which correctly describes ACT Tip?',
            options: [
              'For grammar: apply the rule; for rhetoric: consider the goal.',
              'Grammar = ~51% of questions; Rhetoric = ~49%.',
              'one objectively correct answer based on rules.',
              'best answer based on effectiveness, purpose, or style.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: For grammar: apply the rule; for rhetoric: consider the goal. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Grammar',
            options: ['one objectively correct answer based on rules.', 'For grammar: apply the rule; for rhetoric: consider the goal.', 'Grammar = ~51% of questions; Rhetoric = ~49%.', 'best answer based on effectiveness, purpose, or style.']
          },
          {
            label: 'Rhetoric',
            options: ['For grammar: apply the rule; for rhetoric: consider the goal.', 'Grammar = ~51% of questions; Rhetoric = ~49%.', 'one objectively correct answer based on rules.', 'best answer based on effectiveness, purpose, or style.']
          },
          {
            label: 'Key Insight',
            options: ['Grammar = ~51% of questions; Rhetoric = ~49%.', 'one objectively correct answer based on rules.', 'For grammar: apply the rule; for rhetoric: consider the goal.', 'best answer based on effectiveness, purpose, or style.']
          }
        ],
        correctAnswers: ['one objectively correct answer based on rules.', 'best answer based on effectiveness, purpose, or style.', 'Grammar = ~51% of questions; Rhetoric = ~49%.'],
        hint1: 'Think about what each concept specifically describes in Grammar vs. Rhetoric.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Grammar vs. Rhetoric describes a specific idea. Grammar: one objectively correct answer based on rules. Rhetoric: best answer based on effectiveness, purpose, or style. Key Insight: Grammar = ~51% of questions; Rhetoric = ~49%.'
      }
    }
  ]
}
