export const satExpressionPart5Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'sat-e5-intro',
      type: 'text' as const,
      content: `
# Rhetorical Synthesis

**Part 5 of 7 — Rhetorical Synthesis**

Rhetorical synthesis: combine notes/bullet points into effective writing.

Match the purpose: inform, argue, compare, etc..
      `
    },
    {
      id: 'sat-e5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Rhetorical synthesis?',
            options: [
              'inform, argue, compare, etc..',
              'combine notes/bullet points into effective writing.',
              'Choose the option that best accomplishes the stated goal.',
              'Consider audience and tone when selecting the best synthesis.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Rhetorical synthesis: combine notes/bullet points into effective writing. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'inform, argue, compare, etc..',
              'Consider audience and tone when selecting the best synthesis.',
              'combine notes/bullet points into effective writing.',
              'Choose the option that best accomplishes the stated goal.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Choose the option that best accomplishes the stated goal. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-e5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Choose the option that best accomplishes the stated goal.

**SAT Tip:** Consider audience and tone when selecting the best synthesis.
      `
    },
    {
      id: 'sat-e5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Rhetorical Synthesis, which correctly describes SAT Tip?',
            options: [
              'Choose the option that best accomplishes the stated goal.',
              'Consider audience and tone when selecting the best synthesis.',
              'inform, argue, compare, etc..',
              'combine notes/bullet points into effective writing.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Consider audience and tone when selecting the best synthesis. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rhetorical synthesis',
            options: ['Choose the option that best accomplishes the stated goal.', 'combine notes/bullet points into effective writing.', 'Consider audience and tone when selecting the best synthesis.', 'inform, argue, compare, etc..']
          },
          {
            label: 'Match the purpose',
            options: ['Consider audience and tone when selecting the best synthesis.', 'inform, argue, compare, etc..', 'Choose the option that best accomplishes the stated goal.', 'combine notes/bullet points into effective writing.']
          },
          {
            label: 'Key Insight',
            options: ['Consider audience and tone when selecting the best synthesis.', 'Choose the option that best accomplishes the stated goal.', 'combine notes/bullet points into effective writing.', 'inform, argue, compare, etc..']
          }
        ],
        correctAnswers: ['combine notes/bullet points into effective writing.', 'inform, argue, compare, etc..', 'Choose the option that best accomplishes the stated goal.'],
        hint1: 'Think about what each concept specifically describes in Rhetorical Synthesis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Rhetorical Synthesis describes a specific idea. Rhetorical synthesis: combine notes/bullet points into effective writing. Match the purpose: inform, argue, compare, etc.. Key Insight: Choose the option that best accomplishes the stated goal.'
      }
    }
  ]
}
