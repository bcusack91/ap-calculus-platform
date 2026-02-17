export const satExpressionPart6Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'sat-e6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Rhetorical synthesis: combine notes/bullet points into effective writing.

Match the purpose: inform, argue, compare, etc..
      `
    },
    {
      id: 'sat-e6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Rhetorical synthesis?',
            options: [
              'combine notes/bullet points into effective writing.',
              'Consider audience and tone when selecting the best synthesis.',
              'Choose the option that best accomplishes the stated goal.',
              'inform, argue, compare, etc..'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Rhetorical synthesis: combine notes/bullet points into effective writing. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'inform, argue, compare, etc..',
              'combine notes/bullet points into effective writing.',
              'Consider audience and tone when selecting the best synthesis.',
              'Choose the option that best accomplishes the stated goal.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Choose the option that best accomplishes the stated goal. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-e6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Choose the option that best accomplishes the stated goal.

**SAT Tip:** Consider audience and tone when selecting the best synthesis.
      `
    },
    {
      id: 'sat-e6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'inform, argue, compare, etc..',
              'combine notes/bullet points into effective writing.',
              'Choose the option that best accomplishes the stated goal.',
              'Consider audience and tone when selecting the best synthesis.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Consider audience and tone when selecting the best synthesis. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rhetorical synthesis',
            options: ['Choose the option that best accomplishes the stated goal.', 'Consider audience and tone when selecting the best synthesis.', 'combine notes/bullet points into effective writing.', 'inform, argue, compare, etc..']
          },
          {
            label: 'Match the purpose',
            options: ['combine notes/bullet points into effective writing.', 'Choose the option that best accomplishes the stated goal.', 'Consider audience and tone when selecting the best synthesis.', 'inform, argue, compare, etc..']
          },
          {
            label: 'Key Insight',
            options: ['inform, argue, compare, etc..', 'combine notes/bullet points into effective writing.', 'Choose the option that best accomplishes the stated goal.', 'Consider audience and tone when selecting the best synthesis.']
          }
        ],
        correctAnswers: ['combine notes/bullet points into effective writing.', 'inform, argue, compare, etc..', 'Choose the option that best accomplishes the stated goal.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Rhetorical synthesis: combine notes/bullet points into effective writing. Match the purpose: inform, argue, compare, etc.. Key Insight: Choose the option that best accomplishes the stated goal.'
      }
    }
  ]
}
