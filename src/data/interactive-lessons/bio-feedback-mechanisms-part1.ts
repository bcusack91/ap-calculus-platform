export const bioFeedbackPart1Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'feed1-intro-p1',
      type: 'text' as const,
      content: `
# ## Homeostasis Introduction

**Part 1 of 7 — Homeostasis Introduction**

1. Homeostasis: maintaining internal stability
2. Dynamic equilibrium: constant adjustments
3. Set point: target value for a variable
4. Receptor → control center → effector pathway
      `
    },
    {
      id: 'feed1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Homeostasis?',
            options: [
              'Receptor → control center → effector pathway',
              'target value for a variable',
              'maintaining internal stability',
              'constant adjustments'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Homeostasis: maintaining internal stability. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Homeostasis Introduction, which explains Set point?',
            options: [
              'target value for a variable',
              'Receptor → control center → effector pathway',
              'constant adjustments',
              'maintaining internal stability'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Set point: target value for a variable. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'feed1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Homeostasis**: maintaining internal stability
- **Dynamic equilibrium**: constant adjustments
- **Set point**: target value for a variable
- **Receptor → control center → effector pathway**
      `
    },
    {
      id: 'feed1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Receptor → control center → effector… is correct?',
            options: [
              'constant adjustments',
              'target value for a variable',
              'maintaining internal stability',
              'Receptor → control center → effector pathway'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Receptor → control center → effector pathway. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'feed1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Homeostasis',
            options: ['Receptor → control center → effector pathway', 'target value for a variable', 'maintaining internal stability', 'constant adjustments']
          },
          {
            label: 'Dynamic equilibrium',
            options: ['target value for a variable', 'Receptor → control center → effector pathway', 'maintaining internal stability', 'constant adjustments']
          },
          {
            label: 'Set point',
            options: ['target value for a variable', 'constant adjustments', 'maintaining internal stability', 'Receptor → control center → effector pathway']
          }
        ],
        correctAnswers: ['maintaining internal stability', 'constant adjustments', 'target value for a variable'],
        hint1: 'Think about what each concept specifically describes in Homeostasis Introduction.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Homeostasis Introduction describes a specific idea. Homeostasis: maintaining internal stability. Dynamic equilibrium: constant adjustments. Set point: target value for a variable.'
      }
    }
  ]
}
