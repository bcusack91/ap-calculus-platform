export const bioFeedbackPart6Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'feed6-intro-p6',
      type: 'text' as const,
      content: `
# ## Feedback Mechanisms: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Diagramming feedback loops
2. Predicting effects of disrupted feedback
3. Distinguishing positive from negative feedback
4. Analyzing homeostatic responses
      `
    },
    {
      id: 'feed6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Diagramming feedback loops?',
            options: [
              'Diagramming feedback loops',
              'Distinguishing positive from negative feedback',
              'Analyzing homeostatic responses',
              'Predicting effects of disrupted feedback'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Diagramming feedback loops. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Distinguishing positive from negative…?',
            options: [
              'Predicting effects of disrupted feedback',
              'Analyzing homeostatic responses',
              'Diagramming feedback loops',
              'Distinguishing positive from negative feedback'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Distinguishing positive from negative feedback. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'feed6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Diagramming feedback loops**
- **Predicting effects of disrupted feedback**
- **Distinguishing positive from negative feedback**
- **Analyzing homeostatic responses**
      `
    },
    {
      id: 'feed6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Feedback Mechanisms: Problem-Solving Workshop, which correctly describes Analyzing homeostatic responses?',
            options: [
              'Distinguishing positive from negative feedback',
              'Analyzing homeostatic responses',
              'Diagramming feedback loops',
              'Predicting effects of disrupted feedback'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Analyzing homeostatic responses. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'feed6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Diagramming feedback loops',
            options: ['Distinguishing positive from negative feedback', 'Analyzing homeostatic responses', 'Predicting effects of disrupted feedback', 'Diagramming feedback loops']
          },
          {
            label: 'Predicting effects of disrupted feedback',
            options: ['Diagramming feedback loops', 'Predicting effects of disrupted feedback', 'Analyzing homeostatic responses', 'Distinguishing positive from negative feedback']
          },
          {
            label: 'Distinguishing positive from negative…',
            options: ['Predicting effects of disrupted feedback', 'Analyzing homeostatic responses', 'Distinguishing positive from negative feedback', 'Diagramming feedback loops']
          }
        ],
        correctAnswers: ['Diagramming feedback loops', 'Predicting effects of disrupted feedback', 'Distinguishing positive from negative feedback'],
        hint1: 'Think about what each concept specifically describes in Feedback Mechanisms: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Feedback Mechanisms: Problem-Solving Workshop describes a specific idea. Diagramming feedback loops. Predicting effects of disrupted feedback. Distinguishing positive from negative feedback.'
      }
    }
  ]
}
