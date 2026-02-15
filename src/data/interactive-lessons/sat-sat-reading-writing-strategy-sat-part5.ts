export const satRWStrategyPart5Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'sat-r5-intro',
      type: 'text' as const,
      content: `
# Grammar vs. Rhetoric

**Part 5 of 7 — Grammar vs. Rhetoric**

Grammar questions: one answer is objectively correct (rules-based).

Rhetoric questions: "most effectively" — subjective but still have a best answer.
      `
    },
    {
      id: 'sat-r5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes grammar questions?',
            options: [
              'Grammar questions is a fundamental concept in SAT Reading & Writing',
              'Rhetoric questions: "most effectively" — subjective but still have a best answer',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Grammar questions: one answer is objectively correct (rules-based)'
          }
        ]
      }
    },
    {
      id: 'sat-r5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** For rhetoric: consider purpose, audience, and what the question is asking.

**SAT Tip:** If the question asks "which best accomplishes [goal]," match the goal precisely.
      `
    },
    {
      id: 'sat-r5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for grammar vs. rhetoric?',
            options: [
              'For rhetoric: consider purpose, audience, and what the question is asking',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'For rhetoric: consider purpose, audience, and what the question is asking'
          }
        ]
      }
    },
    {
      id: 'sat-r5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Grammar vs. Rhetoric:',
            options: ['Grammar questions: one answer is objectively corre', 'Rhetoric questions: "most effectively" — subjectiv', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['For rhetoric: consider purpose, audience, and what', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Grammar questions: one answer is objectively corre', 'For rhetoric: consider purpose, audience, and what'],
        hint1: 'Think about grammar vs. rhetoric',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Grammar questions: one answer is objectively correct (rules-based). For rhetoric: consider purpose, audience, and what the question is asking.'
      }
    }
  ]
}
